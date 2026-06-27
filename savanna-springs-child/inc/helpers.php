<?php
/**
 * Savanna Springs — helpers: icon set, URL resolver, reusable section partials.
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

/* ------------------------------------------------------------------ *
 *  ICONS  (Lucide-derived path data, ported from the prototype)
 * ------------------------------------------------------------------ */
function ss_icon_paths() {
	return array(
		'droplet' => 'M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7z',
		'phone' => 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z',
		'check' => 'M20 6 9 17l-5-5',
		'arrowRight' => 'M5 12h14M12 5l7 7-7 7',
		'arrowDown' => 'M12 5v14M19 12l-7 7-7-7',
		'chevronRight' => 'm9 18 6-6-6-6',
		'chevronDown' => 'm6 9 6 6 6-6',
		'leaf' => 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10zM2 21c0-3 1.85-5.36 5.08-6',
		'shield' => 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
		'shieldCheck' => 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z|m9 12 2 2 4-4',
		'home' => 'M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z',
		'alert' => 'M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z|M12 9v4|M12 17h.01',
		'star' => 'M11.48 3.5a.57.57 0 0 1 1.04 0l2.13 4.92 5.34.47c.5.04.7.67.32 1l-4.04 3.53 1.2 5.24c.11.49-.42.87-.85.61L12 16.98l-4.62 2.79c-.43.26-.96-.12-.85-.61l1.2-5.24L3.69 9.4c-.38-.34-.18-.97.32-1l5.34-.47z',
		'drop2' => 'M12 2.69s5.66 5.66 5.66 9.31A5.66 5.66 0 1 1 6.34 12C6.34 8.34 12 2.69 12 2.69z',
		'menu' => 'M4 6h16M4 12h16M4 18h16',
		'x' => 'M18 6 6 18M6 6l12 12',
		'mail' => 'M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z|m22 7-10 5L2 7',
		'mapPin' => 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z|M12 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
		'clock' => 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z|M12 6v6l4 2',
		'truck' => 'M14 18V6a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h1|M14 9h4l3 3v5a1 1 0 0 1-1 1h-1|M7.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z|M17.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
		'wrench' => 'M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.7 2.7-2-2z',
		'sparkle' => 'M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.9z',
		'flask' => 'M9 3h6|M10 3v6.5L4.5 19a1.5 1.5 0 0 0 1.3 2.3h12.4a1.5 1.5 0 0 0 1.3-2.3L14 9.5V3|M7.8 15h8.4',
		'beaker' => 'M4.5 3h15|M6 3v15a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V3|M6 13h12',
		'facebook' => 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
		'instagram' => 'M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z|M16 11.4a4 4 0 1 1-7.9 1.2 4 4 0 0 1 7.9-1.2z|M17.5 6.5h.01',
		'thumbsUp' => 'M7 10v12|M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88z',
		'wind' => 'M12.8 19.6A2 2 0 1 0 14 16H2|M17.5 8a2.5 2.5 0 1 1 2 4H2|M9.8 4.4A2 2 0 1 1 11 8H2',
		'waves' => 'M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1|M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1|M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1',
		'flame' => 'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z',
		'award' => 'M15.477 12.89 17 22l-5-3-5 3 1.523-9.11|M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z',
		'badgeCheck' => 'M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z|m9 12 2 2 4-4',
		'dollarSign' => 'M12 2v20|M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
		'calendar' => 'M8 2v4|M16 2v4|M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z|M3 10h18',
		'factory' => 'M2 20a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8l-7 4V8l-7 4V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z|M17 18h.01|M12 18h.01|M7 18h.01',
		'clipboard' => 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2|M9 2h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z',
		'search' => 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z|m21 21-4.3-4.3',
		'user' => 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2|M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
		'box' => 'M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z|M3.3 7 12 12l8.7-5|M12 22V12',
		'tag' => 'M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z|M7.5 7.5h.01',
		'refresh' => 'M3 12a9 9 0 0 1 15-6.7L21 8|M21 3v5h-5|M21 12a9 9 0 0 1-15 6.7L3 16|M3 21v-5h5',
		'arrowUpRight' => 'M7 7h10v10|M7 17 17 7',
		'sun' => 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z|M12 1v2|M12 21v2|M4.2 4.2l1.4 1.4|M18.4 18.4l1.4 1.4|M1 12h2|M21 12h2|M4.2 19.8l1.4-1.4|M18.4 5.6l1.4-1.4',
		'quote' => 'M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .25-1 1.25V20c0 1 0 1 1 1z|M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z',
	);
}

/**
 * Render an inline SVG icon.
 *
 * @param string $name  Icon key.
 * @param array  $args  size, color, stroke, fill, class.
 */
function ss_icon( $name, $args = array() ) {
	$paths = ss_icon_paths();
	if ( ! isset( $paths[ $name ] ) ) { return ''; }
	$a = wp_parse_args( $args, array( 'size' => 24, 'color' => 'currentColor', 'stroke' => 2, 'fill' => 'none', 'class' => '' ) );
	$out  = sprintf(
		'<svg class="ss-icon %s" viewBox="0 0 24 24" width="%d" height="%d" fill="%s" stroke="%s" stroke-width="%s" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">',
		esc_attr( $a['class'] ), (int) $a['size'], (int) $a['size'], esc_attr( $a['fill'] ), esc_attr( $a['color'] ), esc_attr( $a['stroke'] )
	);
	foreach ( explode( '|', $paths[ $name ] ) as $d ) {
		$out .= '<path d="' . esc_attr( $d ) . '" />';
	}
	return $out . '</svg>';
}

/* ------------------------------------------------------------------ *
 *  URL RESOLVER
 *  Maps a logical key (problem/product/city key, or a nav key) to a URL.
 * ------------------------------------------------------------------ */
function ss_cpt_permalink( $post_type, $slug ) {
	$post = get_page_by_path( $slug, OBJECT, $post_type );
	return $post ? get_permalink( $post ) : '';
}

function ss_link( $key ) {
	// Nav / page keys -> page slugs.
	$pages = array(
		'Home'     => '',
		'FreeTest' => 'free-water-test',
		'About'    => 'about',
		'Reviews'  => 'reviews',
		'Gallery'  => 'gallery',
		'FAQ'      => 'faq',
		'Specials' => 'specials',
		'Financing'=> 'financing',
		'Contact'  => 'contact',
	);
	if ( isset( $pages[ $key ] ) ) {
		if ( '' === $pages[ $key ] ) { return home_url( '/' ); }
		$p = get_page_by_path( $pages[ $key ] );
		return $p ? get_permalink( $p ) : home_url( '/' . $pages[ $key ] . '/' );
	}
	// Archive hubs.
	if ( 'Problems' === $key )     { return get_post_type_archive_link( 'ss_problem' ) ?: home_url( '/water-problems/' ); }
	if ( 'Products' === $key )     { return get_post_type_archive_link( 'ss_product' ) ?: home_url( '/products/' ); }
	if ( 'ServiceAreas' === $key ) { return get_post_type_archive_link( 'ss_city' ) ?: home_url( '/service-areas/' ); }

	// Problem / Product / City entity keys.
	$problems = ss_problems();
	if ( isset( $problems[ $key ] ) ) { return ss_cpt_permalink( 'ss_problem', $problems[ $key ]['slug'] ) ?: '#'; }
	$products = ss_products();
	if ( isset( $products[ $key ] ) ) { return ss_cpt_permalink( 'ss_product', $products[ $key ]['slug'] ) ?: '#'; }
	$cities = ss_cities();
	if ( isset( $cities[ $key ] ) ) { return ss_cpt_permalink( 'ss_city', $cities[ $key ]['slug'] ) ?: '#'; }

	return '#';
}

/**
 * Return nav items for a menu location, using the editable WP menu if one is
 * assigned, otherwise the supplied default list. Items: [ 'label', 'url' ].
 */
function ss_nav_items( $location, $default ) {
	$locations = function_exists( 'get_nav_menu_locations' ) ? get_nav_menu_locations() : array();
	if ( ! empty( $locations[ $location ] ) ) {
		$items = wp_get_nav_menu_items( $locations[ $location ] );
		if ( $items ) {
			$out = array();
			foreach ( $items as $i ) {
				if ( (int) $i->menu_item_parent !== 0 ) { continue; }
				$out[] = array( 'label' => $i->title, 'url' => $i->url );
			}
			if ( $out ) { return $out; }
		}
	}
	return $default;
}

/**
 * Return the full nested menu tree for a location (parents with children),
 * or null when no WP menu is assigned (so the header can fall back to its
 * flat defaults). Each node: [ 'label', 'url', 'children' => [ ...nodes ] ].
 */
function ss_nav_tree( $location ) {
	$locations = function_exists( 'get_nav_menu_locations' ) ? get_nav_menu_locations() : array();
	if ( empty( $locations[ $location ] ) ) { return null; }
	$items = wp_get_nav_menu_items( $locations[ $location ] );
	if ( ! $items ) { return null; }

	$by_parent = array();
	foreach ( $items as $i ) {
		$by_parent[ (int) $i->menu_item_parent ][] = $i;
	}
	$build = function ( $parent_id ) use ( &$build, $by_parent ) {
		$out = array();
		$kids = isset( $by_parent[ $parent_id ] ) ? $by_parent[ $parent_id ] : array();
		foreach ( $kids as $i ) {
			$out[] = array(
				'label'    => $i->title,
				'url'      => $i->url,
				'children' => $build( (int) $i->ID ),
			);
		}
		return $out;
	};
	$tree = $build( 0 );
	return $tree ? $tree : null;
}

/** Pick a leading icon for a top-level nav item by matching keywords in its label. */
function ss_nav_icon( $label ) {
	$l   = strtolower( $label );
	$map = array(
		'problem' => 'droplet', 'product' => 'box', 'service' => 'mapPin', 'area' => 'mapPin',
		'financ' => 'dollarSign', 'special' => 'tag', 'deal' => 'tag', 'offer' => 'tag',
		'about' => 'award', 'review' => 'star', 'gallery' => 'sparkle', 'faq' => 'search',
		'question' => 'search', 'contact' => 'mail', 'login' => 'user', 'account' => 'user',
		'water' => 'droplet',
	);
	foreach ( $map as $key => $icon ) {
		if ( false !== strpos( $l, $key ) ) { return $icon; }
	}
	return 'chevronRight';
}

/** Render the page's own editor/BeBuilder content (used by the BeBuilder toggle). */
function ss_render_builder_content() {
	if ( have_posts() ) {
		while ( have_posts() ) { the_post(); the_content(); }
	}
}

/** Echo a full-bleed hero background image + dark scrim, if an image URL is given.
 *  Applies the per-post "Hero photo focus" as background-position when set. */
function ss_hero_cover( $img ) {
	if ( ! $img ) { return; }
	$style = 'background-image:url(' . esc_url( $img ) . ')';
	$class = 'ss-hero-cover';
	$focus = function_exists( 'ss_hero_focus' ) ? ss_hero_focus() : '';
	if ( $focus ) { $style .= ';background-position:' . esc_attr( $focus ); }
	$size = function_exists( 'ss_hero_size' ) ? ss_hero_size() : array( 'size' => '', 'ultrawide' => false );
	if ( ! empty( $size['size'] ) ) {
		$style .= ';background-size:' . esc_attr( $size['size'] );
	} elseif ( ! empty( $size['ultrawide'] ) ) {
		// CSS handles the >1920px media query for this modifier.
		$class .= ' ss-hero-cover--uw';
	}
	echo '<div class="' . esc_attr( $class ) . '" style="' . $style . '"></div>';
}

/* ------------------------------------------------------------------ *
 *  SMALL UI PARTIALS
 * ------------------------------------------------------------------ */
function ss_button( $label, $key, $variant = 'primary', $args = array() ) {
	$a = wp_parse_args( $args, array( 'size' => '', 'icon' => 'arrowRight', 'block' => false, 'class' => '' ) );
	$classes = 'ss-btn ss-btn--' . $variant;
	if ( $a['size'] ) { $classes .= ' ss-btn--' . $a['size']; }
	if ( $a['block'] ) { $classes .= ' ss-btn--block'; }
	if ( $a['class'] ) { $classes .= ' ' . $a['class']; }
	$icon = $a['icon'] ? ss_icon( $a['icon'], array( 'size' => 18 ) ) : '';
	return sprintf( '<a class="%s" href="%s">%s%s</a>', esc_attr( $classes ), esc_url( ss_link( $key ) ), esc_html( $label ), $icon );
}

function ss_section_head( $eyebrow, $title, $sub = '', $dark = false, $left = false ) {
	$cls = 'ss-head' . ( $dark ? ' is-dark' : '' ) . ( $left ? ' is-left' : '' );
	echo '<div class="' . esc_attr( $cls ) . '">';
	if ( $eyebrow ) { echo '<div class="ss-eyebrow' . ( $dark ? ' is-dark' : '' ) . '">' . esc_html( $eyebrow ) . '</div>'; }
	echo '<h2>' . esc_html( $title ) . '</h2>';
	if ( $sub ) { echo '<p>' . esc_html( $sub ) . '</p>'; }
	echo '</div>';
}

/* Trust strip */
function ss_trust_strip() {
	$items = array(
		array( 'star', 'Since 2008' ),
		array( 'badgeCheck', 'WQA Certified' ),
		array( 'shieldCheck', 'Water-Right® Dealer' ),
		array( 'home', 'Made in USA' ),
		array( 'wrench', 'We service all makes' ),
	);
	if ( ss_acf_active() ) {
		$rows = get_field( 'trust_items', 'option' );
		if ( is_array( $rows ) && $rows ) { $items = array_map( function ( $r ) { return array( $r['icon'] ?? 'star', $r['label'] ?? '' ); }, $rows ); }
	}
	echo '<div class="ss-trust"><div class="ss-wrap">';
	$n = count( $items );
	foreach ( $items as $i => $it ) {
		echo '<span class="ss-trust-item">' . ss_icon( $it[0], array( 'size' => 18, 'color' => 'var(--spring-600)' ) ) . ' ' . esc_html( $it[1] ) . '</span>';
		if ( $i < $n - 1 ) { echo '<span class="ss-trust-dot"></span>'; }
	}
	echo '</div></div>';
}

/* How it works (3-step) */
function ss_how_it_works() {
	$steps = array(
		array( '01', 'search', 'We diagnose', 'A free in-home water test for hardness, iron, pH and chlorine — so we treat the real problem, not a guess.' ),
		array( '02', 'clipboard', 'We recommend', 'A custom system, right-sized to your water, your home and your budget. No upsell, no pressure.' ),
		array( '03', 'truck', 'We install', 'Professional installation by our licensed team — and we service all makes and models for the long haul.' ),
	);
	if ( ss_acf_active() ) {
		$rows = get_field( 'how_steps', 'option' );
		if ( is_array( $rows ) && $rows ) {
			$steps = array();
			foreach ( $rows as $i => $r ) { $steps[] = array( str_pad( $i + 1, 2, '0', STR_PAD_LEFT ), $r['icon'] ?? 'search', $r['title'] ?? '', $r['body'] ?? '' ); }
		}
	}
	echo '<section class="ss-band-water"><div class="ss-wrap ss-section">';
	ss_section_head( 'How it works', 'Diagnose → Recommend → Install', 'Three simple steps from problem water to water you love.' );
	echo '<div class="ss-grid ss-grid-3" style="margin-top:46px">';
	foreach ( $steps as $s ) {
		echo '<div class="ss-step"><div class="ss-step__top"><div class="ss-tile ss-tile--fill-navy">' . ss_icon( $s[1], array( 'size' => 28, 'color' => 'var(--sun-400)' ) ) . '</div><span class="ss-step__num">' . esc_html( $s[0] ) . '</span></div>';
		echo '<h3>' . esc_html( $s[2] ) . '</h3><p>' . esc_html( $s[3] ) . '</p></div>';
	}
	echo '</div></div></section>';
}

/* Problem picker grid. $items = array of [key]. */
/** Photo header markup for a card; empty string when no image is given. */
function ss_photo_header( $url, $alt = '' ) {
	if ( ! $url ) { return ''; }
	return '<div class="ss-cardphoto"><img src="' . esc_url( $url ) . '" alt="' . esc_attr( $alt ) . '" loading="lazy"></div>';
}

function ss_problem_picker( $eyebrow = 'Start with your problem', $title = "What's wrong with your water?", $sub = 'Pick what sounds like your home — we diagnose the real cause, then fix it for good. Not sure? Start with a free in-home water test.', $keys = null ) {
	$problems = ss_problems();
	$keys = $keys ? $keys : array_slice( ss_problem_order(), 0, 6 );
	echo '<section class="ss-wrap ss-section">';
	ss_section_head( $eyebrow, $title, $sub );
	echo '<div class="ss-grid ss-grid-3" style="margin-top:44px">';
	foreach ( $keys as $k ) {
		if ( ! isset( $problems[ $k ] ) ) { continue; }
		$p = $problems[ $k ];
		$photo = ss_cpt_thumb( 'ss_problem', isset( $p['slug'] ) ? $p['slug'] : '' );
		echo '<a class="ss-card ss-card--hover" href="' . esc_url( ss_link( $k ) ) . '">';
		if ( $photo ) {
			echo ss_photo_header( $photo, $p['label'] );
			echo '<h3>' . esc_html( $p['label'] ) . '</h3>';
		} else {
			echo '<div style="display:flex;align-items:center;gap:16px"><div class="ss-tile ss-tile--' . esc_attr( $p['color'] ) . '">' . ss_icon( $p['icon'], array( 'size' => 28 ) ) . '</div><h3>' . esc_html( $p['label'] ) . '</h3></div>';
		}
		echo '<p>' . esc_html( $p['blurb'] ) . '</p>';
		echo '<span class="ss-arrowlink" style="margin-top:16px">See the fix ' . ss_icon( 'arrowRight', array( 'size' => 16, 'color' => 'var(--spring-700)' ) ) . '</span>';
		echo '</a>';
	}
	echo '</div></section>';
}

/* Reviews block */
function ss_reviews_block( $count = 3, $eyebrow = 'Reviews', $title = 'What our neighbors say', $sub = 'Real homeowners across the Mahoning Valley and Western PA. Live Google reviews — here are a few favorites.' ) {
	$items = array_slice( ss_reviews_view(), 0, $count );
	echo '<section class="ss-wrap ss-section">';
	ss_section_head( $eyebrow, $title, $sub );
	echo '<div class="ss-grid ss-grid-3" style="margin-top:44px">';
	foreach ( $items as $r ) {
		$initials = strtoupper( substr( $r['n'], 0, 1 ) );
		echo '<div class="ss-review">' . ss_icon( 'quote', array( 'size' => 30, 'color' => 'var(--spring-300)', 'fill' => 'var(--spring-100)' ) );
		echo '<div class="ss-stars">';
		for ( $i = 0; $i < 5; $i++ ) { echo ss_icon( 'star', array( 'size' => 17, 'color' => 'var(--sun-400)', 'fill' => 'var(--sun-400)' ) ); }
		echo '</div>';
		echo '<p>“' . esc_html( $r['q'] ) . '”</p>';
		echo '<div class="ss-review__by"><span class="ss-avatar">' . esc_html( $initials ) . '</span><span class="ss-name">' . esc_html( $r['n'] ) . '</span></div>';
		echo '</div>';
	}
	echo '</div>';
	echo '<div style="text-align:center;margin-top:34px">' . ss_button( 'Read all reviews', 'Reviews', 'outline' ) . '</div>';
	echo '</section>';
}

/* Free Water Test section (reusable). */
/* Free Water Test — just the white form card (reusable / shortcode). */
function ss_water_test_form( $default_zip = '' ) {
	$concerns = array( 'Hard water', 'Contaminants', 'Odors', 'Staining', 'White deposits', 'Bad taste', 'Other' );
	$sources  = array( 'Google search', 'Facebook / Instagram', 'Friend / referral', 'Mailer / flyer', 'Repeat customer', 'Other' );
	?>
	<div class="ss-formcard">
		<div class="ss-form-success is-hidden" data-ss-success>
			<div class="ss-success-ic"><?php echo ss_icon( 'check', array( 'size' => 40, 'color' => 'var(--green-700)', 'stroke' => 2.6 ) ); ?></div>
			<h3>Request received!</h3>
			<p>Thanks — we’ll call within 24 business hours to schedule your free water test.</p>
			<button type="button" class="ss-btn ss-btn--outline" data-ss-reset>Submit another request</button>
		</div>
		<form class="ss-fwt-form" data-ss-form action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" method="post">
			<input type="hidden" name="action" value="ss_free_water_test">
			<?php if ( function_exists( 'wp_nonce_field' ) ) { wp_nonce_field( 'ss_fwt', 'ss_fwt_nonce' ); } ?>
			<h3>Book your free test</h3>
			<p class="ss-form-sub">It only takes a minute.</p>
			<div class="ss-form-rows">
				<label class="ss-field"><label>Full name</label><input class="ss-input" type="text" name="name" placeholder="Jane Smith" required></label>
				<div class="ss-form-2">
					<label class="ss-field"><label>Phone</label><input class="ss-input" type="tel" name="phone" placeholder="(330) 555-0199" required></label>
					<label class="ss-field"><label>ZIP code</label><input class="ss-input" type="text" name="zip" placeholder="44512" value="<?php echo esc_attr( $default_zip ); ?>" required></label>
				</div>
				<label class="ss-field"><label>Email</label><input class="ss-input" type="email" name="email" placeholder="you@email.com" required></label>
				<label class="ss-field"><label>I'm concerned about</label>
					<select class="ss-select" name="concern"><option value="">Choose one</option>
						<?php foreach ( $concerns as $c ) { echo '<option>' . esc_html( $c ) . '</option>'; } ?>
					</select>
				</label>
				<label class="ss-field"><label>Describe your water concerns</label><textarea class="ss-textarea" name="notes" placeholder="Tell us what you're noticing — smell, stains, taste, spots…"></textarea></label>
				<div class="ss-form-2">
					<label class="ss-field"><label>How did you find us?</label>
						<select class="ss-select" name="source"><option value="">Select</option>
							<?php foreach ( $sources as $s ) { echo '<option>' . esc_html( $s ) . '</option>'; } ?>
						</select>
					</label>
					<label class="ss-field"><label>Coupon code (optional)</label><input class="ss-input" type="text" name="coupon" placeholder="e.g. CLEAR25"></label>
				</div>
				<button type="submit" class="ss-btn ss-btn--accent ss-btn--lg ss-btn--block">Book my free water test <?php echo ss_icon( 'arrowRight', array( 'size' => 20 ) ); ?></button>
				<p class="ss-form-fine">No obligation. We'll never share your information.</p>
			</div>
		</form>
	</div>
	<?php
}

function ss_free_water_test( $heading = 'Get a free in-home water test', $sub = 'Find out exactly what’s in your water — no cost, no pressure. We’ll be in touch within 24 business hours to schedule.', $default_zip = '' ) {
	$perks = array(
		array( 'search', 'On-site water analysis', 'A licensed operator tests hardness, iron, pH and chlorine right at your tap.' ),
		array( 'clipboard', 'Custom recommendation', 'We size the right system for your home, water and budget — no upsell, no pressure.' ),
		array( 'phone', 'We call within 24 hours', 'A Savanna Springs operator follows up within 24 business hours to schedule.' ),
	);
	if ( ss_acf_active() ) {
		$rows = get_field( 'fwt_perks', 'option' );
		if ( is_array( $rows ) && $rows ) { $perks = array_map( function ( $r ) { return array( $r['icon'] ?? 'search', $r['title'] ?? '', $r['body'] ?? '' ); }, $rows ); }
	}
	$brand = ss_brand();
	?>
	<section class="ss-fwt">
		<div class="ss-blob ss-blob--spring" style="width:320px;height:320px;opacity:.22;filter:blur(6px);left:-120px;bottom:-120px"></div>
		<div class="ss-blob ss-blob--orange" style="width:90px;height:90px;opacity:.85;left:42%;top:40px"></div>
		<div class="ss-wrap">
			<div>
				<div class="ss-eyebrow is-dark" style="margin-bottom:12px">Free Water Test</div>
				<h2><?php echo esc_html( $heading ); ?></h2>
				<p class="ss-fwt__lead"><?php echo esc_html( $sub ); ?></p>
				<div class="ss-perks">
					<?php foreach ( $perks as $pk ) : ?>
						<div class="ss-perk">
							<div class="ss-perk__ic"><?php echo ss_icon( $pk[0], array( 'size' => 24, 'color' => 'var(--sun-400)' ) ); ?></div>
							<div><div class="ss-perk__t"><?php echo esc_html( $pk[1] ); ?></div><div class="ss-perk__b"><?php echo esc_html( $pk[2] ); ?></div></div>
						</div>
					<?php endforeach; ?>
				</div>
				<div class="ss-callpill"><?php echo ss_icon( 'phone', array( 'size' => 18, 'color' => 'var(--sun-400)' ) ); ?> <span>Prefer to call? <a href="tel:<?php echo esc_attr( $brand['phone_tel'] ); ?>"><?php echo esc_html( $brand['phone'] ); ?></a></span></div>
			</div>

			<?php ss_water_test_form( $default_zip ); ?>
		</div>
	</section>
	<?php
}
