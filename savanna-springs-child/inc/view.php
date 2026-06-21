<?php
/**
 * Savanna Springs — view layer.
 * Merges editable ACF values over the built-in defaults from inc/data.php.
 * If ACF is not active (or a field is empty), the built-in design copy is used,
 * so the site always renders correctly with or without the plugin.
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

/** Is ACF available? */
function ss_acf_active() { return function_exists( 'get_field' ); }

/** Current page field value (reads the page being viewed) with default fallback. */
function ss_pf( $name, $default = '' ) {
	return ss_get( get_the_ID(), $name, $default );
}

/** Current page repeater -> mapped array, or the supplied default list. */
function ss_pf_repeater( $name, $default, $mapper ) {
	$rows = ss_get( get_the_ID(), $name, null );
	if ( ss_acf_active() && is_array( $rows ) && $rows ) { return array_map( $mapper, $rows ); }
	return $default;
}

/** Per-page "build in BeBuilder" toggle. When true, the theme renders the page's
 *  own editor/BeBuilder content instead of the designed template. */
function ss_use_builder( $post_id = null ) {
	if ( ! ss_acf_active() ) { return false; }
	$id = $post_id ? $post_id : get_the_ID();
	return (bool) get_field( 'ss_use_builder', $id );
}

/** Resolve a URL for a hero/section image field (array|id|url), with featured-image fallback. */
function ss_image_url( $value, $size = 'large' ) {
	if ( is_array( $value ) ) { return $value['sizes'][ $size ] ?? ( $value['url'] ?? '' ); }
	if ( is_numeric( $value ) ) { $u = wp_get_attachment_image_url( $value, $size ); return $u ? $u : ''; }
	return is_string( $value ) ? $value : '';
}

/** Hero image for the current post: ACF hero_image field, else the featured image. */
function ss_hero_image() {
	$img = ss_acf_active() ? ss_image_url( get_field( 'hero_image', get_the_ID() ) ) : '';
	if ( ! $img && has_post_thumbnail() ) { $img = get_the_post_thumbnail_url( get_the_ID(), 'full' ); }
	return $img;
}

/** Should the current hero use a photo (vs the icon tile)? Mode: auto|icon|photo. */
function ss_hero_use_photo() {
	$mode = ss_pf( 'hero_media', 'auto' );
	$img  = ss_hero_image();
	if ( 'icon' === $mode ) { return false; }
	return ( 'photo' === $mode || 'auto' === $mode ) && $img;
}

/** Option value (ACF options page) with default fallback. */
function ss_option( $name, $default = '' ) {
	if ( ss_acf_active() ) {
		$v = get_field( $name, 'option' );
		if ( null !== $v && '' !== $v && false !== $v && array() !== $v ) { return $v; }
	}
	return $default;
}

/** Post field value with default fallback. */
function ss_get( $post_id, $name, $default = '' ) {
	if ( ss_acf_active() ) {
		$v = get_field( $name, $post_id );
		if ( null !== $v && '' !== $v && false !== $v && array() !== $v ) { return $v; }
	}
	return $default;
}

/** Split a textarea (one item per line) into a clean array. */
function ss_lines( $text ) {
	if ( is_array( $text ) ) { return $text; }
	$out = array();
	foreach ( preg_split( '/\r\n|\r|\n/', (string) $text ) as $line ) {
		$line = trim( $line );
		if ( '' !== $line ) { $out[] = $line; }
	}
	return $out;
}

/** Flatten an ACF repeater of single-subfield rows into a flat list. */
function ss_repeater_values( $rows, $subkey ) {
	$out = array();
	if ( is_array( $rows ) ) {
		foreach ( $rows as $r ) { if ( isset( $r[ $subkey ] ) && '' !== $r[ $subkey ] ) { $out[] = $r[ $subkey ]; } }
	}
	return $out;
}

/* ------------------------------------------------------------------ *
 *  BRAND / CONTACT (global)
 * ------------------------------------------------------------------ */
function ss_brand() {
	// Logo precedence: ACF Brand & Contact → native WP custom logo
	// (Appearance → Customize → Site Identity) → bundled theme default.
	$logo = ss_option( 'logo', '' );
	if ( is_array( $logo ) ) { $logo = isset( $logo['url'] ) ? $logo['url'] : ''; }
	if ( ! $logo && function_exists( 'get_custom_logo' ) ) {
		$custom_id = get_theme_mod( 'custom_logo' );
		if ( $custom_id ) {
			$src = wp_get_attachment_image_src( $custom_id, 'full' );
			if ( $src ) { $logo = $src[0]; }
		}
	}
	return array(
		'logo'         => $logo ? $logo : SS_CHILD_URI . '/assets/logo-savanna-springs.png',
		'phone'        => ss_option( 'phone_display', '(877) 750-1420' ),
		'phone_tel'    => ss_option( 'phone_tel', '18777501420' ),
		'email'        => ss_option( 'email', 'info@savannaspringswater.com' ),
		'address'      => ss_option( 'address', '875 River Road, Lowellville, OH 44436' ),
		'utility_text' => ss_option( 'utility_text', 'Serving Mahoning, Columbiana & Trumbull counties + Western PA' ),
		'tagline'      => ss_option( 'footer_tagline', 'We make one thing perfectly clear…' ),
		'facebook'     => ss_option( 'facebook_url', '' ),
		'instagram'    => ss_option( 'instagram_url', '' ),
	);
}

/** Brand colors (only those overridden return non-empty). */
function ss_brand_colors() {
	return array(
		'--navy-700'   => ss_option( 'color_navy', '' ),
		'--spring-400' => ss_option( 'color_spring', '' ),
		'--sun-400'    => ss_option( 'color_sun', '' ),
		'--orange-500' => ss_option( 'color_orange', '' ),
	);
}

/* ------------------------------------------------------------------ *
 *  RELATIONSHIP RESOLUTION (related / solves / problems / services)
 *  Returns a flat list of [url,label,icon,color] for card rendering.
 * ------------------------------------------------------------------ */
function ss_ref_from_key( $key ) {
	$P = ss_problems(); $PR = ss_products();
	if ( isset( $P[ $key ] ) )  { return array( 'url' => ss_link( $key ), 'label' => $P[ $key ]['label'],  'icon' => $P[ $key ]['icon'],  'color' => $P[ $key ]['color'] ); }
	if ( isset( $PR[ $key ] ) ) { return array( 'url' => ss_link( $key ), 'label' => $PR[ $key ]['label'], 'icon' => $PR[ $key ]['icon'], 'color' => $PR[ $key ]['color'] ); }
	return null;
}
function ss_ref_from_post( $post, $type ) {
	$post = is_object( $post ) ? $post : get_post( $post );
	if ( ! $post ) { return null; }
	$map = ( 'ss_problem' === $type ) ? ss_problems() : ss_products();
	$def = array();
	foreach ( $map as $r ) { if ( $r['slug'] === $post->post_name ) { $def = $r; break; } }
	return array(
		'url'   => get_permalink( $post ),
		'label' => get_the_title( $post ),
		'icon'  => ss_get( $post->ID, 'icon', isset( $def['icon'] ) ? $def['icon'] : 'droplet' ),
		'color' => ss_get( $post->ID, 'color', isset( $def['color'] ) ? $def['color'] : 'water' ),
	);
}
function ss_resolve_refs( $acf_value, $default_keys, $type ) {
	$items = array();
	if ( ss_acf_active() && ! empty( $acf_value ) && is_array( $acf_value ) ) {
		foreach ( $acf_value as $post ) { $it = ss_ref_from_post( $post, $type ); if ( $it ) { $items[] = $it; } }
	} else {
		foreach ( (array) $default_keys as $k ) { $it = ss_ref_from_key( $k ); if ( $it ) { $items[] = $it; } }
	}
	return $items;
}

/* ------------------------------------------------------------------ *
 *  PROBLEM VIEW
 * ------------------------------------------------------------------ */
function ss_problem_view( $post_id ) {
	$slug = get_post_field( 'post_name', $post_id );
	$P    = ss_problems(); $def = null; $key = null;
	foreach ( $P as $k => $r ) { if ( $r['slug'] === $slug ) { $def = $r; $key = $k; break; } }
	if ( ! $def ) { $def = reset( $P ); $key = key( $P ); }
	$v = $def; $v['__key'] = $key;

	$v['icon']    = ss_get( $post_id, 'icon', $def['icon'] );
	$v['color']   = ss_get( $post_id, 'color', $def['color'] );
	$v['eyebrow'] = ss_get( $post_id, 'eyebrow', $def['eyebrow'] );
	$v['h1']      = ss_get( $post_id, 'h1', $def['h1'] );
	$v['lead']    = ss_get( $post_id, 'lead', $def['lead'] );
	$v['problem'] = ss_get( $post_id, 'problem', $def['problem'] );
	$v['cause']   = ss_get( $post_id, 'cause', $def['cause'] );
	$v['cta']     = ss_get( $post_id, 'cta', $def['cta'] );

	$steps = ss_get( $post_id, 'steps', null );
	if ( ss_acf_active() && is_array( $steps ) && $steps ) {
		$v['steps'] = array_map( function ( $s ) {
			return array( 'label' => $s['label'] ?? '', 'icon' => $s['icon'] ?? 'search', 'body' => $s['body'] ?? '' );
		}, $steps );
	}

	$v['recommend']         = ss_get( $post_id, 'recommend_body', $def['recommend'] );
	$v['product']['name']   = ss_get( $post_id, 'product_name', $def['product']['name'] );
	$badges                 = ss_get( $post_id, 'badges', null );
	$v['product']['badges'] = ( ss_acf_active() && is_array( $badges ) && $badges ) ? ss_repeater_values( $badges, 'text' ) : $def['product']['badges'];
	$plink                  = ss_get( $post_id, 'product_link', null );
	$v['product']['url']    = ( $plink && is_object( $plink ) ) ? get_permalink( $plink ) : ( ( $plink && is_numeric( $plink ) ) ? get_permalink( $plink ) : ss_link( $def['product']['key'] ) );

	// Payoff
	if ( ss_acf_active() && ss_get( $post_id, 'payoff_enable', false ) ) {
		$rows = ss_get( $post_id, 'payoff', array() );
		$stats = array();
		foreach ( (array) $rows as $r ) { $stats[] = array( $r['stat'] ?? '', $r['label'] ?? '' ); }
		if ( $stats ) { $v['payoff'] = array( 'stats' => $stats ); }
	}

	$v['related_items'] = ss_resolve_refs( ss_get( $post_id, 'related', null ), $def['related'], 'ss_problem' );
	return $v;
}

/* ------------------------------------------------------------------ *
 *  PRODUCT VIEW
 * ------------------------------------------------------------------ */
function ss_product_view( $post_id ) {
	$slug = get_post_field( 'post_name', $post_id );
	$PR   = ss_products(); $def = null; $key = null;
	foreach ( $PR as $k => $r ) { if ( $r['slug'] === $slug ) { $def = $r; $key = $k; break; } }
	if ( ! $def ) { $def = reset( $PR ); $key = key( $PR ); }
	$v = $def; $v['__key'] = $key;

	$v['icon']    = ss_get( $post_id, 'icon', $def['icon'] );
	$v['color']   = ss_get( $post_id, 'color', $def['color'] );
	$v['eyebrow'] = ss_get( $post_id, 'eyebrow', $def['eyebrow'] );
	$v['h1']      = ss_get( $post_id, 'h1', $def['h1'] );
	$v['lead']    = ss_get( $post_id, 'lead', $def['lead'] );
	$v['cta']     = ss_get( $post_id, 'cta', $def['cta'] );
	$v['intro']   = ss_get( $post_id, 'intro', isset( $def['intro'] ) ? $def['intro'] : '' );

	$chips = ss_get( $post_id, 'chips', null );
	if ( ss_acf_active() && is_array( $chips ) && $chips ) { $v['chips'] = ss_repeater_values( $chips, 'text' ); }

	$models = ss_get( $post_id, 'models', null );
	if ( ss_acf_active() && is_array( $models ) && $models ) {
		$v['models'] = array_map( function ( $m ) {
			return array(
				'name'     => $m['name'] ?? '',
				'tag'      => $m['tag'] ?? '',
				'blurb'    => $m['blurb'] ?? '',
				'features' => ss_lines( $m['features'] ?? '' ),
				'warranty' => $m['warranty'] ?? '',
			);
		}, $models );
	}

	if ( ss_acf_active() && ss_get( $post_id, 'highlights_enable', false ) ) {
		$v['highlights'] = array(
			'eyebrow' => ss_get( $post_id, 'highlights_eyebrow', '' ),
			'title'   => ss_get( $post_id, 'highlights_title', '' ),
			'items'   => ss_lines( ss_get( $post_id, 'highlights_items', '' ) ),
		);
	}
	if ( ss_acf_active() && ss_get( $post_id, 'segments_enable', false ) ) {
		$v['segments'] = array(
			'eyebrow' => ss_get( $post_id, 'segments_eyebrow', '' ),
			'title'   => ss_get( $post_id, 'segments_title', '' ),
			'items'   => ss_lines( ss_get( $post_id, 'segments_items', '' ) ),
		);
	}
	if ( ss_acf_active() && ss_get( $post_id, 'delivery_enable', false ) ) {
		$v['delivery'] = array( 'title' => ss_get( $post_id, 'delivery_title', '' ), 'body' => ss_get( $post_id, 'delivery_body', '' ) );
	}
	if ( ss_acf_active() ) { $v['callFirst'] = (bool) ss_get( $post_id, 'call_first', isset( $def['callFirst'] ) ? $def['callFirst'] : false ); }

	$v['solves_items'] = ss_resolve_refs( ss_get( $post_id, 'solves', null ), isset( $def['solves'] ) ? $def['solves'] : array(), 'ss_problem' );
	return $v;
}

/* ------------------------------------------------------------------ *
 *  CITY VIEW
 * ------------------------------------------------------------------ */
function ss_city_view( $post_id ) {
	$slug = get_post_field( 'post_name', $post_id );
	$C    = ss_cities(); $def = null; $key = null;
	foreach ( $C as $k => $r ) { if ( $r['slug'] === $slug ) { $def = $r; $key = $k; break; } }
	if ( ! $def ) { $def = reset( $C ); $key = key( $C ); }
	$v = $def; $v['__key'] = $key;

	$v['city']    = ss_get( $post_id, 'city', $def['city'] );
	$v['county']  = ss_get( $post_id, 'county', $def['county'] );
	$v['zip']     = ss_get( $post_id, 'zip', $def['zip'] );
	$v['type']    = ss_get( $post_id, 'type', $def['type'] );
	$v['h1']      = ss_get( $post_id, 'h1', $def['h1'] );
	$v['lead']    = ss_get( $post_id, 'lead', $def['lead'] );
	$v['context'] = ss_get( $post_id, 'context', $def['context'] );

	$mc = ss_get( $post_id, 'most_common', null );
	if ( ss_acf_active() && is_array( $mc ) && $mc ) { $v['mostCommon'] = ss_repeater_values( $mc, 'text' ); }
	$nb = ss_get( $post_id, 'nearby', null );
	if ( ss_acf_active() && is_array( $nb ) && $nb ) { $v['nearby'] = ss_repeater_values( $nb, 'text' ); }

	$v['problem_items'] = ss_resolve_refs( ss_get( $post_id, 'problems', null ), array_slice( $def['problems'], 0, 6 ), 'ss_problem' );

	$svc = ss_city_services();
	$svc_default = isset( $svc[ $def['type'] ] ) ? $svc[ $def['type'] ] : array( 'Softeners', 'RO', 'WholeHouse', 'Salt' );
	$v['service_items'] = ss_resolve_refs( ss_get( $post_id, 'services', null ), $svc_default, 'ss_product' );
	return $v;
}

/* ------------------------------------------------------------------ *
 *  REVIEWS / FAQ (editable via options, fallback to data.php)
 * ------------------------------------------------------------------ */
function ss_reviews_view() {
	$rows = ss_option( 'reviews', null );
	if ( ss_acf_active() && is_array( $rows ) && $rows ) {
		return array_map( function ( $r ) { return array( 'q' => $r['quote'] ?? '', 'n' => $r['name'] ?? '' ); }, $rows );
	}
	return ss_reviews();
}
function ss_faqs_view() {
	$rows = ss_option( 'faqs', null );
	if ( ss_acf_active() && is_array( $rows ) && $rows ) {
		return array_map( function ( $r ) {
			return array( 'q' => $r['question'] ?? '', 'a' => $r['answer'] ?? '', 'link' => array( '', $r['link_label'] ?? '' ), 'link_url' => $r['link_url'] ?? '' );
		}, $rows );
	}
	return ss_faqs();
}

/* ------------------------------------------------------------------ *
 *  HOMEPAGE VIEW
 * ------------------------------------------------------------------ */
function ss_home_view() {
	$why = ss_option( 'home_why', null );
	$why = ( ss_acf_active() && is_array( $why ) && $why )
		? array_map( function ( $r ) { return array( 'icon' => $r['icon'] ?? 'home', 'title' => $r['title'] ?? '', 'body' => $r['body'] ?? '' ); }, $why )
		: ss_home_why();

	$stats = ss_option( 'home_stats', null );
	$stats = ( ss_acf_active() && is_array( $stats ) && $stats )
		? array_map( function ( $r ) { return array( $r['number'] ?? '', $r['label'] ?? '' ); }, $stats )
		: array( array( '2008', 'Family owned since' ), array( '35+ yrs', 'Combined experience' ), array( '20-yr', 'Warranties available' ), array( 'EPA', 'Licensed operators' ) );

	$specials = ss_option( 'home_specials', null );
	$specials = ( ss_acf_active() && is_array( $specials ) && $specials )
		? array_map( function ( $r ) { return array( $r['icon'] ?? 'refresh', $r['title'] ?? '', $r['body'] ?? '' ); }, $specials )
		: ss_home_specials();

	return array(
		'hero_eyebrow'   => ss_option( 'home_hero_eyebrow', 'We make one thing perfectly clear…' ),
		'hero_heading'   => ss_option( 'home_hero_heading', "Whatever's wrong with your water, we make it" ),
		'hero_accent'    => ss_option( 'home_hero_accent', 'perfectly clear.' ),
		'hero_sub'       => ss_option( 'home_hero_sub', 'Smelly, hard, rusty, or bad-tasting water? Savanna Springs diagnoses the real problem and fixes it for good — for homes and businesses across Youngstown and Western PA.' ),
		'hero_image'     => ss_image_url( ss_option( 'home_hero_image', '' ) ) ?: SS_CHILD_URI . '/assets/img-hero-people.png',
		'why'            => $why,
		'stats'          => $stats,
		'products_eyebrow' => ss_option( 'home_products_eyebrow', 'Our products' ),
		'products_title'   => ss_option( 'home_products_title', 'American-made, built for your water' ),
		'products_sub'     => ss_option( 'home_products_sub', 'We only install equipment made in America, custom-built and sized to your home.' ),
		'service_title'  => ss_option( 'home_service_title', 'Serving Youngstown, the Mahoning Valley & Western PA' ),
		'service_sub'    => ss_option( 'home_service_sub', 'From our shop on River Road in Lowellville, we serve Mahoning, Columbiana & Trumbull counties plus Western PA — city water and private wells alike.' ),
		'specials_title' => ss_option( 'home_specials_title', 'Better water, made affordable' ),
		'specials'       => $specials,
		'fwt_heading'    => ss_option( 'home_fwt_heading', 'Ready to make your water perfectly clear?' ),
		'fwt_sub'        => ss_option( 'home_fwt_sub', 'Book your free, no-pressure in-home water test. A licensed operator will be in touch within 24 business hours to schedule.' ),
		'why_title'      => ss_option( 'home_why_title', 'A water team your neighbors actually trust' ),
		'why_sub'        => ss_option( 'home_why_sub', 'Not a faceless sales outfit — a family business that fixes the real problem and stands behind the work.' ),
	);
}
