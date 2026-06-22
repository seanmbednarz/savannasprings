<?php
/**
 * Savanna Springs (BeTheme Child) — theme functions.
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

define( 'SS_CHILD_VERSION', '1.0.0' );
define( 'SS_CHILD_DIR', get_stylesheet_directory() );
define( 'SS_CHILD_URI', get_stylesheet_directory_uri() );

require_once SS_CHILD_DIR . '/inc/data.php';
require_once SS_CHILD_DIR . '/inc/helpers.php';
require_once SS_CHILD_DIR . '/inc/view.php';
require_once SS_CHILD_DIR . '/inc/acf-fields.php';
require_once SS_CHILD_DIR . '/inc/svg.php';

/* ------------------------------------------------------------------ *
 *  ASSETS
 * ------------------------------------------------------------------ */
function ss_enqueue_assets() {
	// Google Fonts — Outfit (display) + Figtree (body).
	wp_enqueue_style(
		'ss-fonts',
		'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Figtree:wght@300;400;500;600;700;800&display=swap',
		array(),
		null
	);

	// Parent BeTheme stylesheet (loads first so our tokens/components win).
	$parent = wp_get_theme( get_template() );
	wp_enqueue_style( 'betheme-parent', get_template_directory_uri() . '/style.css', array( 'ss-fonts' ), $parent->get( 'Version' ) ?: null );

	// Child stylesheet. Version by file mtime so every edit auto-busts the
	// browser/CDN cache (no manual purge needed for CSS/JS changes).
	$css_path = get_stylesheet_directory() . '/style.css';
	$css_ver  = file_exists( $css_path ) ? filemtime( $css_path ) : SS_CHILD_VERSION;
	wp_enqueue_style( 'ss-child', get_stylesheet_uri(), array( 'betheme-parent' ), $css_ver );

	// Interactions.
	$js_path = SS_CHILD_DIR . '/js/main.js';
	$js_ver  = file_exists( $js_path ) ? filemtime( $js_path ) : SS_CHILD_VERSION;
	wp_enqueue_script( 'ss-main', SS_CHILD_URI . '/js/main.js', array(), $js_ver, true );
}
add_action( 'wp_enqueue_scripts', 'ss_enqueue_assets', 20 );

/* Add the .ss-site scope class to <body>. */
function ss_body_class( $classes ) {
	$classes[] = 'ss-site';
	return $classes;
}
add_filter( 'body_class', 'ss_body_class' );

/* ------------------------------------------------------------------ *
 *  CUSTOM POST TYPES — Problems, Products, Service Areas
 * ------------------------------------------------------------------ */
/** A droplet admin-menu icon (Dashicons has no water icon). Recolors via WP's mask. */
function ss_menu_icon_droplet() {
	$svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>';
	return 'data:image/svg+xml;base64,' . base64_encode( $svg );
}

/** A rubber-duck admin-menu icon for the Savanna Springs settings menu. */
function ss_menu_icon_duck() {
	// Single combined path (head + beak + body) so WP's admin-menu SVG masking
	// renders it the same way it renders the droplet CPT icon.
	$svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">'
		. '<path d="M15.5 3.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4z'
		. 'M18.4 7.6l3.1.5-2.9 1.4z'
		. 'M12.8 8.2C11.9 7.7 10.9 7.4 9.8 7.4 6.3 7.4 3.5 10 3.2 13.3A1.4 1.4 0 0 0 2 14.7 1.4 1.4 0 0 0 3.4 16.1H10c3 0 5.4-2.3 5.5-5.2.04-1-.2-2-.7-2.8z"/>'
		. '</svg>';
	return 'data:image/svg+xml;base64,' . base64_encode( $svg );
}

function ss_register_cpts() {
	register_post_type( 'ss_problem', array(
		'labels'      => array( 'name' => 'Water Problems', 'singular_name' => 'Water Problem', 'menu_name' => 'Water Problems', 'add_new_item' => 'Add Water Problem' ),
		'public'      => true,
		'has_archive' => 'water-problems',
		'menu_icon'   => ss_menu_icon_droplet(),
		'rewrite'     => array( 'slug' => 'water-problems', 'with_front' => false ),
		'supports'    => array( 'title', 'editor', 'thumbnail', 'excerpt' ),
		'show_in_rest'=> true,
	) );
	register_post_type( 'ss_product', array(
		'labels'      => array( 'name' => 'Products', 'singular_name' => 'Product', 'menu_name' => 'Products', 'add_new_item' => 'Add Product' ),
		'public'      => true,
		'has_archive' => 'products',
		'menu_icon'   => 'dashicons-products',
		'rewrite'     => array( 'slug' => 'products', 'with_front' => false ),
		'supports'    => array( 'title', 'editor', 'thumbnail', 'excerpt' ),
		'show_in_rest'=> true,
	) );
	register_post_type( 'ss_city', array(
		'labels'      => array( 'name' => 'Service Areas', 'singular_name' => 'Service Area', 'menu_name' => 'Service Areas', 'add_new_item' => 'Add Service Area' ),
		'public'      => true,
		'has_archive' => 'service-areas',
		'menu_icon'   => 'dashicons-location-alt',
		'rewrite'     => array( 'slug' => 'service-areas', 'with_front' => false ),
		'supports'    => array( 'title', 'editor', 'thumbnail', 'excerpt' ),
		'show_in_rest'=> true,
	) );
}
add_action( 'init', 'ss_register_cpts' );

/* Resolve the data record for the current single CPT post (by slug). */
function ss_current_record( $post_type ) {
	$slug = get_post_field( 'post_name', get_the_ID() );
	$map  = 'ss_problem' === $post_type ? ss_problems() : ( 'ss_product' === $post_type ? ss_products() : ss_cities() );
	foreach ( $map as $key => $rec ) {
		if ( $rec['slug'] === $slug ) { $rec['__key'] = $key; return $rec; }
	}
	return null;
}

/* ------------------------------------------------------------------ *
 *  ONE-TIME CONTENT SEEDING (runs on activation; idempotent)
 * ------------------------------------------------------------------ */
function ss_seed_content() {
	ss_register_cpts();

	$seed = function( $post_type, $slug, $title, $excerpt ) {
		$existing = get_page_by_path( $slug, OBJECT, $post_type );
		if ( $existing ) { return $existing->ID; }
		$id = wp_insert_post( array(
			'post_type'    => $post_type,
			'post_name'    => $slug,
			'post_title'   => $title,
			'post_excerpt' => $excerpt,
			'post_status'  => 'publish',
			'post_content' => '',
		) );
		return is_wp_error( $id ) ? 0 : $id;
	};

	foreach ( ss_problems() as $rec ) { $seed( 'ss_problem', $rec['slug'], $rec['label'], $rec['blurb'] ); }
	foreach ( ss_products() as $rec ) { $seed( 'ss_product', $rec['slug'], $rec['label'], $rec['blurb'] ); }
	foreach ( ss_cities() as $rec ) { $seed( 'ss_city', $rec['slug'], $rec['city'], '' ); }

	// Populate the editable ACF fields/options/menus (only when ACF is active).
	ss_seed_acf();
	ss_seed_menus();

	// Pages with their templates.
	$pages = array(
		'home'             => array( 'Home', '' ),
		'free-water-test'  => array( 'Free Water Test', 'template-free-test.php' ),
		'faq'              => array( 'FAQ', 'template-faq.php' ),
		'about'            => array( 'About', 'template-about.php' ),
		'reviews'          => array( 'Reviews', 'template-reviews.php' ),
		'gallery'          => array( 'Gallery', 'template-gallery.php' ),
		'specials'         => array( 'Specials', 'template-specials.php' ),
		'financing'        => array( 'Financing', 'template-financing.php' ),
		'contact'          => array( 'Contact', 'template-contact.php' ),
	);
	$home_id = 0;
	foreach ( $pages as $slug => $info ) {
		$existing = get_page_by_path( $slug );
		if ( $existing ) { if ( 'home' === $slug ) { $home_id = $existing->ID; } continue; }
		$id = wp_insert_post( array(
			'post_type'   => 'page',
			'post_name'   => $slug,
			'post_title'  => $info[0],
			'post_status' => 'publish',
			'post_content'=> '',
		) );
		if ( $id && ! is_wp_error( $id ) ) {
			if ( $info[1] ) { update_post_meta( $id, '_wp_page_template', $info[1] ); }
			if ( 'home' === $slug ) { $home_id = $id; }
		}
	}

	// Static front page -> Home (front-page.php renders the design regardless).
	if ( $home_id ) {
		update_option( 'show_on_front', 'page' );
		update_option( 'page_on_front', $home_id );
	}

	flush_rewrite_rules();
}
add_action( 'after_switch_theme', 'ss_seed_content' );

/* Manual re-seed: visit /wp-admin/?ss_reseed=1 as an admin. */
function ss_maybe_reseed() {
	if ( is_admin() && current_user_can( 'manage_options' ) && isset( $_GET['ss_reseed'] ) ) {
		ss_seed_content();
		add_action( 'admin_notices', function () {
			echo '<div class="notice notice-success"><p>Savanna Springs content seeded.</p></div>';
		} );
	}
}
add_action( 'admin_init', 'ss_maybe_reseed' );

/* ------------------------------------------------------------------ *
 *  ACF FIELD/OPTION SEEDING (fills only empty fields — never overwrites edits)
 * ------------------------------------------------------------------ */
function ss_post_id_by_slug( $slug, $type ) {
	$p = get_page_by_path( $slug, OBJECT, $type );
	return $p ? $p->ID : 0;
}
/** Set an ACF field/option only if it is currently empty. */
function ss_seed_set( $id, $field, $value ) {
	if ( ! function_exists( 'update_field' ) ) { return; }
	$cur = ( 'option' === $id ) ? get_field( $field, 'option' ) : get_field( $field, $id );
	if ( null === $cur || '' === $cur || false === $cur || array() === $cur ) {
		update_field( $field, $value, ( 'option' === $id ) ? 'option' : $id );
	}
}
function ss_ids_from_keys( $keys, $type ) {
	$map = ( 'ss_problem' === $type ) ? ss_problems() : ss_products();
	$ids = array();
	foreach ( (array) $keys as $k ) { if ( isset( $map[ $k ] ) ) { $id = ss_post_id_by_slug( $map[ $k ]['slug'], $type ); if ( $id ) { $ids[] = $id; } } }
	return $ids;
}

function ss_seed_acf() {
	if ( ! function_exists( 'update_field' ) ) { return; }

	// Problems.
	foreach ( ss_problems() as $rec ) {
		$id = ss_post_id_by_slug( $rec['slug'], 'ss_problem' );
		if ( ! $id ) { continue; }
		foreach ( array( 'icon', 'color', 'eyebrow', 'h1', 'lead', 'problem', 'cause', 'cta' ) as $f ) { ss_seed_set( $id, $f, $rec[ $f ] ); }
		ss_seed_set( $id, 'steps', $rec['steps'] );
		ss_seed_set( $id, 'recommend_body', $rec['recommend'] );
		ss_seed_set( $id, 'product_name', $rec['product']['name'] );
		$plink = ss_post_id_by_slug( ss_products()[ $rec['product']['key'] ]['slug'], 'ss_product' );
		if ( $plink ) { ss_seed_set( $id, 'product_link', $plink ); }
		ss_seed_set( $id, 'badges', array_map( function ( $b ) { return array( 'text' => $b ); }, $rec['product']['badges'] ) );
		if ( ! empty( $rec['payoff'] ) ) {
			ss_seed_set( $id, 'payoff_enable', 1 );
			ss_seed_set( $id, 'payoff', array_map( function ( $s ) { return array( 'stat' => $s[0], 'label' => $s[1] ); }, $rec['payoff']['stats'] ) );
		}
		ss_seed_set( $id, 'related', ss_ids_from_keys( $rec['related'], 'ss_problem' ) );
	}

	// Products.
	foreach ( ss_products() as $rec ) {
		$id = ss_post_id_by_slug( $rec['slug'], 'ss_product' );
		if ( ! $id ) { continue; }
		foreach ( array( 'icon', 'color', 'eyebrow', 'h1', 'lead', 'cta' ) as $f ) { ss_seed_set( $id, $f, $rec[ $f ] ); }
		if ( ! empty( $rec['intro'] ) ) { ss_seed_set( $id, 'intro', $rec['intro'] ); }
		if ( ! empty( $rec['callFirst'] ) ) { ss_seed_set( $id, 'call_first', 1 ); }
		if ( ! empty( $rec['chips'] ) ) { ss_seed_set( $id, 'chips', array_map( function ( $c ) { return array( 'text' => $c ); }, $rec['chips'] ) ); }
		if ( ! empty( $rec['models'] ) ) {
			ss_seed_set( $id, 'models', array_map( function ( $m ) {
				return array(
					'name' => $m['name'], 'tag' => isset( $m['tag'] ) ? $m['tag'] : '', 'blurb' => $m['blurb'],
					'features' => implode( "\n", $m['features'] ), 'warranty' => isset( $m['warranty'] ) ? $m['warranty'] : '',
				);
			}, $rec['models'] ) );
		}
		if ( ! empty( $rec['highlights'] ) ) {
			ss_seed_set( $id, 'highlights_enable', 1 );
			ss_seed_set( $id, 'highlights_eyebrow', $rec['highlights']['eyebrow'] );
			ss_seed_set( $id, 'highlights_title', $rec['highlights']['title'] );
			ss_seed_set( $id, 'highlights_items', implode( "\n", $rec['highlights']['items'] ) );
		}
		if ( ! empty( $rec['segments'] ) ) {
			ss_seed_set( $id, 'segments_enable', 1 );
			ss_seed_set( $id, 'segments_eyebrow', $rec['segments']['eyebrow'] );
			ss_seed_set( $id, 'segments_title', $rec['segments']['title'] );
			ss_seed_set( $id, 'segments_items', implode( "\n", $rec['segments']['items'] ) );
		}
		if ( ! empty( $rec['delivery'] ) ) {
			ss_seed_set( $id, 'delivery_enable', 1 );
			ss_seed_set( $id, 'delivery_title', $rec['delivery']['title'] );
			ss_seed_set( $id, 'delivery_body', $rec['delivery']['body'] );
		}
		if ( ! empty( $rec['solves'] ) ) { ss_seed_set( $id, 'solves', ss_ids_from_keys( $rec['solves'], 'ss_problem' ) ); }
	}

	// Cities.
	foreach ( ss_cities() as $rec ) {
		$id = ss_post_id_by_slug( $rec['slug'], 'ss_city' );
		if ( ! $id ) { continue; }
		foreach ( array( 'city', 'county', 'zip', 'type', 'h1', 'lead', 'context' ) as $f ) { ss_seed_set( $id, $f, $rec[ $f ] ); }
		ss_seed_set( $id, 'most_common', array_map( function ( $t ) { return array( 'text' => $t ); }, $rec['mostCommon'] ) );
		ss_seed_set( $id, 'nearby', array_map( function ( $t ) { return array( 'text' => $t ); }, $rec['nearby'] ) );
		ss_seed_set( $id, 'problems', ss_ids_from_keys( array_slice( $rec['problems'], 0, 6 ), 'ss_problem' ) );
	}

	// Standalone page fields.
	$pg = function ( $slug ) { $p = get_page_by_path( $slug ); return $p ? $p->ID : 0; };

	if ( $id = $pg( 'about' ) ) {
		ss_seed_set( $id, 'about_eyebrow', 'About us' );
		ss_seed_set( $id, 'about_h1', 'Your local, family-owned water team' );
		ss_seed_set( $id, 'about_sub', 'Since 2008, Savanna Springs has helped families and businesses across the Mahoning Valley and Western PA get better water — diagnosed honestly and fixed for good.' );
		ss_seed_set( $id, 'about_story_eyebrow', 'Our story' );
		ss_seed_set( $id, 'about_story_title', 'Named after our daughter, run like a family' );
		ss_seed_set( $id, 'about_story', array(
			array( 'paragraph' => 'Savanna Springs Water Solutions started in 2008 with a simple idea: treat people honestly, fix the real problem, and stand behind the work. We named the company after our daughter, Savannah — and we’ve treated every customer like part of the family ever since.' ),
			array( 'paragraph' => 'Today we’re a proud Water-Right® authorized dealer with Ohio EPA-licensed operators and more than 35 years of combined experience. We sell, service and rent custom-built, American-made systems — and we service all makes and models, whoever installed them.' ),
		) );
		ss_seed_set( $id, 'about_stats', array(
			array( 'number' => '2008', 'label' => 'Family owned since' ), array( 'number' => '35+ yrs', 'label' => 'Combined experience' ),
			array( 'number' => '20-yr', 'label' => 'Warranties available' ), array( 'number' => 'EPA', 'label' => 'Licensed operators' ),
		) );
		ss_seed_set( $id, 'about_values_eyebrow', 'What we stand for' );
		ss_seed_set( $id, 'about_values_title', 'A few things we never compromise on' );
		ss_seed_set( $id, 'about_values', array(
			array( 'icon' => 'home', 'title' => 'Family first', 'body' => 'Named after our daughter Savannah. We treat your home like our own — honest advice, no pressure.' ),
			array( 'icon' => 'award', 'title' => 'Built to last', 'body' => 'A proud Water-Right® authorized dealer installing American-made, custom-built systems.' ),
			array( 'icon' => 'shieldCheck', 'title' => 'Licensed & certified', 'body' => 'Ohio EPA-licensed operators, WQA certified, with 35+ years of combined experience.' ),
			array( 'icon' => 'wrench', 'title' => 'Here for the long haul', 'body' => 'We service all makes and models, deliver salt and water, and stand behind our work.' ),
		) );
	}

	if ( $id = $pg( 'specials' ) ) {
		ss_seed_set( $id, 'specials_eyebrow', 'Specials & financing' );
		ss_seed_set( $id, 'specials_h1', 'Better water, made affordable' );
		ss_seed_set( $id, 'specials_sub', 'Current offers to lower the cost of getting your water right. Ask about them on your free in-home water test.' );
		ss_seed_set( $id, 'specials_offers', array(
			array( 'icon' => 'refresh', 'tag' => 'On softener rentals', 'title' => 'One month free rent', 'body' => 'Rent an Impression Plus® softener and get your first month of rent free.' ),
			array( 'icon' => 'truck', 'tag' => 'With softener purchase', 'title' => 'One year of free salt', 'body' => 'Buy a qualifying Water-Right® softener and we’ll deliver a year of salt — free.' ),
			array( 'icon' => 'droplet', 'tag' => 'On RO rentals', 'title' => 'RO for pennies a day', 'body' => 'Bottle-quality reverse-osmosis drinking water — one month free for a limited time.' ),
			array( 'icon' => 'dollarSign', 'tag' => 'Financing available', 'title' => '6 months no interest', 'body' => 'Flexible financing to spread the cost of better water across your budget.' ),
		) );
		ss_seed_set( $id, 'specials_cta_title', 'Not sure which is right for you?' );
		ss_seed_set( $id, 'specials_cta_body', 'Start with a free in-home water test — we’ll recommend the right system and the best offer for it.' );
	}

	if ( $id = $pg( 'financing' ) ) {
		ss_seed_set( $id, 'financing_eyebrow', 'Financing' );
		ss_seed_set( $id, 'financing_h1', 'Flexible ways to pay' );
		ss_seed_set( $id, 'financing_sub', 'Better water shouldn’t wait for the perfect month. Choose the option that fits your budget — including 6 months no interest.' );
		ss_seed_set( $id, 'financing_tiers', array(
			array( 'tag' => '6 months', 'title' => 'No interest', 'body' => 'Pay it off within 6 months and pay zero interest. Great for getting started now.' ),
			array( 'tag' => '12 months', 'title' => 'Low monthly', 'body' => 'Spread the cost across a year with affordable monthly payments.' ),
			array( 'tag' => '24 months', 'title' => 'Special financing', 'body' => 'Extended terms on qualifying systems — ask about current promotions.' ),
			array( 'tag' => 'Rental', 'title' => 'One month free', 'body' => 'Not ready to buy? Rent a softener or RO system with your first month free.' ),
			array( 'tag' => 'Custom', 'title' => 'Built to budget', 'body' => 'We right-size the system to your home and your budget — no overselling.' ),
		) );
		ss_seed_set( $id, 'financing_apply_title', 'Ready to apply?' );
		ss_seed_set( $id, 'financing_apply_body', 'Get pre-qualified or ask about terms on your free in-home water test.' );
	}

	if ( $id = $pg( 'gallery' ) ) {
		ss_seed_set( $id, 'gallery_eyebrow', 'Gallery' );
		ss_seed_set( $id, 'gallery_h1', 'Before & after, around the Valley' );
		ss_seed_set( $id, 'gallery_sub', 'Real homes, real water problems, real fixes. Swap these placeholders for your own customer photos.' );
		ss_seed_set( $id, 'gallery_groups', array(
			array( 'title' => 'Rust & iron staining', 'icon' => 'flame', 'color' => 'orange', 'items' => array(
				array( 'label' => 'Stained tub → spotless' ), array( 'label' => 'Orange toilet tank → clear' ), array( 'label' => 'Rusty laundry → bright' ) ) ),
			array( 'title' => 'Hard water & scale', 'icon' => 'droplet', 'color' => 'water', 'items' => array(
				array( 'label' => 'Crusty faucet → clean' ), array( 'label' => 'Spotty glassware → spot-free' ), array( 'label' => 'Scaled heater element → protected' ) ) ),
			array( 'title' => 'Well water installs', 'icon' => 'home', 'color' => 'water', 'items' => array(
				array( 'label' => 'Sanitizer Plus install' ), array( 'label' => 'Basement system tidy-up' ), array( 'label' => 'Twin-tank setup' ) ) ),
		) );
	}

	if ( $id = $pg( 'contact' ) ) {
		ss_seed_set( $id, 'contact_eyebrow', 'Contact' );
		ss_seed_set( $id, 'contact_h1', 'Let’s talk about your water' );
		ss_seed_set( $id, 'contact_sub', 'Call, email, or send a message — and don’t forget you can book a free in-home water test any time.' );
		ss_seed_set( $id, 'contact_hours', "Mon–Fri: 9am–5pm\nSat–Sun: By appointment" );
		ss_seed_set( $id, 'contact_form_heading', 'Send us a message' );
		ss_seed_set( $id, 'contact_form_sub', 'We’ll reply within 24 business hours.' );
	}

	if ( $id = $pg( 'reviews' ) ) {
		ss_seed_set( $id, 'reviews_eyebrow', 'Reviews' );
		ss_seed_set( $id, 'reviews_h1', 'What our neighbors say' );
		ss_seed_set( $id, 'reviews_sub', 'Real homeowners across the Mahoning Valley and Western PA. We let our work — and our customers — do the talking.' );
		ss_seed_set( $id, 'reviews_embed_title', 'See all our Google reviews' );
		ss_seed_set( $id, 'reviews_embed_body', 'Drop your Elfsight Google Reviews widget here to show live, up-to-date ratings.' );
	}

	if ( $id = $pg( 'faq' ) ) {
		ss_seed_set( $id, 'faq_eyebrow', 'FAQ' );
		ss_seed_set( $id, 'faq_h1', 'Water questions, answered' );
		ss_seed_set( $id, 'faq_sub', 'Hard water, odor, salt, septic systems and more. Still not sure? A free in-home test settles it.' );
		ss_seed_set( $id, 'faq_cta_title', 'Still have a question?' );
		ss_seed_set( $id, 'faq_cta_body', 'Call (877) 750-1420 or book a free in-home water test.' );
	}

	if ( $id = $pg( 'free-water-test' ) ) {
		ss_seed_set( $id, 'freetest_eyebrow', 'No cost · No pressure' );
		ss_seed_set( $id, 'freetest_h1', 'Your free in-home water test' );
		ss_seed_set( $id, 'freetest_sub', "Find out exactly what's in your water. A licensed operator tests it on-site and recommends the right fix — with zero obligation." );
	}

	// Brand options.
	ss_seed_set( 'option', 'phone_display', '(877) 750-1420' );
	ss_seed_set( 'option', 'phone_tel', '18777501420' );
	ss_seed_set( 'option', 'email', 'info@savannaspringswater.com' );
	ss_seed_set( 'option', 'address', '875 River Road, Lowellville, OH 44436' );
	ss_seed_set( 'option', 'utility_text', 'Serving Mahoning, Columbiana & Trumbull counties + Western PA' );
	ss_seed_set( 'option', 'footer_tagline', 'We make one thing perfectly clear…' );

	// Homepage options.
	ss_seed_set( 'option', 'home_hero_eyebrow', 'We make one thing perfectly clear…' );
	ss_seed_set( 'option', 'home_hero_heading', "Whatever's wrong with your water, we make it" );
	ss_seed_set( 'option', 'home_hero_accent', 'perfectly clear.' );
	ss_seed_set( 'option', 'home_hero_sub', 'Smelly, hard, rusty, or bad-tasting water? Savanna Springs diagnoses the real problem and fixes it for good — for homes and businesses across Youngstown and Western PA.' );
	ss_seed_set( 'option', 'home_why_title', 'A water team your neighbors actually trust' );
	ss_seed_set( 'option', 'home_why_sub', 'Not a faceless sales outfit — a family business that fixes the real problem and stands behind the work.' );
	ss_seed_set( 'option', 'home_why', array_map( function ( $w ) { return array( 'icon' => $w['icon'], 'title' => $w['title'], 'body' => $w['body'] ); }, ss_home_why() ) );
	ss_seed_set( 'option', 'home_stats', array(
		array( 'number' => '2008', 'label' => 'Family owned since' ), array( 'number' => '35+ yrs', 'label' => 'Combined experience' ),
		array( 'number' => '20-yr', 'label' => 'Warranties available' ), array( 'number' => 'EPA', 'label' => 'Licensed operators' ),
	) );
	ss_seed_set( 'option', 'home_products_eyebrow', 'Our products' );
	ss_seed_set( 'option', 'home_products_title', 'American-made, built for your water' );
	ss_seed_set( 'option', 'home_products_sub', 'We only install equipment made in America, custom-built and sized to your home.' );
	ss_seed_set( 'option', 'home_service_title', 'Serving Youngstown, the Mahoning Valley & Western PA' );
	ss_seed_set( 'option', 'home_service_sub', 'From our shop on River Road in Lowellville, we serve Mahoning, Columbiana & Trumbull counties plus Western PA — city water and private wells alike.' );
	ss_seed_set( 'option', 'home_specials_title', 'Better water, made affordable' );
	ss_seed_set( 'option', 'home_specials', array_map( function ( $s ) { return array( 'icon' => $s[0], 'title' => $s[1], 'body' => $s[2] ); }, ss_home_specials() ) );
	ss_seed_set( 'option', 'home_fwt_heading', 'Ready to make your water perfectly clear?' );
	ss_seed_set( 'option', 'home_fwt_sub', 'Book your free, no-pressure in-home water test. A licensed operator will be in touch within 24 business hours to schedule.' );

	// Reviews & FAQ options.
	ss_seed_set( 'option', 'reviews', array_map( function ( $r ) { return array( 'quote' => $r['q'], 'name' => $r['n'] ); }, ss_reviews() ) );
	ss_seed_set( 'option', 'faqs', array_map( function ( $f ) { return array( 'question' => $f['q'], 'answer' => $f['a'], 'link_label' => $f['link'][1], 'link_url' => ss_link( $f['link'][0] ) ); }, ss_faqs() ) );

	// Shared sections.
	ss_seed_set( 'option', 'trust_items', array(
		array( 'icon' => 'star', 'label' => 'Since 2008' ), array( 'icon' => 'badgeCheck', 'label' => 'WQA Certified' ),
		array( 'icon' => 'shieldCheck', 'label' => 'Water-Right® Dealer' ), array( 'icon' => 'home', 'label' => 'Made in USA' ),
		array( 'icon' => 'wrench', 'label' => 'We service all makes' ),
	) );
	ss_seed_set( 'option', 'how_steps', array(
		array( 'icon' => 'search', 'title' => 'We diagnose', 'body' => 'A free in-home water test for hardness, iron, pH and chlorine — so we treat the real problem, not a guess.' ),
		array( 'icon' => 'clipboard', 'title' => 'We recommend', 'body' => 'A custom system, right-sized to your water, your home and your budget. No upsell, no pressure.' ),
		array( 'icon' => 'truck', 'title' => 'We install', 'body' => 'Professional installation by our licensed team — and we service all makes and models for the long haul.' ),
	) );
	ss_seed_set( 'option', 'fwt_perks', array(
		array( 'icon' => 'search', 'title' => 'On-site water analysis', 'body' => 'A licensed operator tests hardness, iron, pH and chlorine right at your tap.' ),
		array( 'icon' => 'clipboard', 'title' => 'Custom recommendation', 'body' => 'We size the right system for your home, water and budget — no upsell, no pressure.' ),
		array( 'icon' => 'phone', 'title' => 'We call within 24 hours', 'body' => 'A Savanna Springs operator follows up within 24 business hours to schedule.' ),
	) );
	ss_seed_set( 'option', 'footer_badges', array(
		array( 'text' => 'Since 2008' ), array( 'text' => 'WQA Certified' ), array( 'text' => 'Water-Right® Dealer' ), array( 'text' => 'Made in USA' ),
	) );
}

/* ------------------------------------------------------------------ *
 *  NAV MENU SEEDING (creates editable menus + assigns to locations)
 * ------------------------------------------------------------------ */
function ss_seed_menus() {
	$build = function ( $name, $location, $items ) {
		$locations = get_theme_mod( 'nav_menu_locations', array() );
		if ( ! empty( $locations[ $location ] ) && wp_get_nav_menu_object( $locations[ $location ] ) ) { return; }
		$menu = wp_get_nav_menu_object( $name );
		$menu_id = $menu ? $menu->term_id : wp_create_nav_menu( $name );
		if ( is_wp_error( $menu_id ) ) { return; }
		if ( ! $menu ) {
			foreach ( $items as $it ) {
				wp_update_nav_menu_item( $menu_id, 0, array(
					'menu-item-title'  => $it[0],
					'menu-item-url'    => $it[1],
					'menu-item-status' => 'publish',
				) );
			}
		}
		$locations[ $location ] = $menu_id;
		set_theme_mod( 'nav_menu_locations', $locations );
	};

	$build( 'SS Header', 'ss_primary', array(
		array( 'Water Problems', ss_link( 'Problems' ) ),
		array( 'Products', ss_link( 'Products' ) ),
		array( 'Service Areas', ss_link( 'ServiceAreas' ) ),
		array( 'About', ss_link( 'About' ) ),
		array( 'Specials', ss_link( 'Specials' ) ),
	) );
	$build( 'SS Footer Solutions', 'ss_footer_solutions', array(
		array( 'Rotten-egg smell', ss_link( 'Smelly' ) ), array( 'Hard water & scale', ss_link( 'HardWater' ) ),
		array( 'Rust & orange stains', ss_link( 'Rust' ) ), array( 'Bad-tasting water', ss_link( 'Taste' ) ),
		array( 'Well water problems', ss_link( 'Well' ) ), array( 'Chlorine taste & smell', ss_link( 'Chlorine' ) ),
	) );
	$build( 'SS Footer Products', 'ss_footer_products', array(
		array( 'Water softeners', ss_link( 'Softeners' ) ), array( 'Reverse osmosis', ss_link( 'RO' ) ),
		array( 'Iron & sulfur filters', ss_link( 'IronSulfur' ) ), array( 'Whole-house filtration', ss_link( 'WholeHouse' ) ),
		array( 'Salt delivery', ss_link( 'Salt' ) ), array( 'Equipment rentals', ss_link( 'Rentals' ) ),
	) );
	$build( 'SS Footer Areas', 'ss_footer_areas', array(
		array( 'Youngstown', ss_link( 'Youngstown' ) ), array( 'Boardman', ss_link( 'Boardman' ) ), array( 'Poland', ss_link( 'Poland' ) ),
		array( 'Canfield', ss_link( 'Canfield' ) ), array( 'Struthers', ss_link( 'Struthers' ) ), array( 'Austintown', ss_link( 'Austintown' ) ),
		array( 'Salem', ss_link( 'Salem' ) ), array( 'Lowellville', ss_link( 'Lowellville' ) ), array( 'South Range / N. Lima', ss_link( 'SouthRange' ) ),
	) );
	$build( 'SS Footer Bottom', 'ss_footer_utility', array(
		array( 'About', ss_link( 'About' ) ), array( 'Reviews', ss_link( 'Reviews' ) ), array( 'Gallery', ss_link( 'Gallery' ) ),
		array( 'FAQ', ss_link( 'FAQ' ) ), array( 'Financing', ss_link( 'Financing' ) ), array( 'Contact', ss_link( 'Contact' ) ),
	) );
}

/* ------------------------------------------------------------------ *
 *  FREE WATER TEST — lead form handler
 * ------------------------------------------------------------------ */
function ss_handle_free_water_test() {
	if ( ! isset( $_POST['ss_fwt_nonce'] ) || ! wp_verify_nonce( $_POST['ss_fwt_nonce'], 'ss_fwt' ) ) {
		wp_safe_redirect( home_url( '/' ) );
		exit;
	}
	$fields = array( 'name', 'phone', 'email', 'zip', 'concern', 'notes', 'source', 'coupon' );
	$data   = array();
	foreach ( $fields as $f ) { $data[ $f ] = isset( $_POST[ $f ] ) ? sanitize_text_field( wp_unslash( $_POST[ $f ] ) ) : ''; }

	// Store the lead.
	$lead_id = wp_insert_post( array(
		'post_type'   => 'ss_lead',
		'post_title'  => sprintf( '%s — %s', $data['name'] ?: 'Lead', $data['zip'] ),
		'post_status' => 'private',
	) );
	if ( $lead_id && ! is_wp_error( $lead_id ) ) {
		foreach ( $data as $k => $v ) { update_post_meta( $lead_id, 'ss_' . $k, $v ); }
	}

	// Notify.
	$to   = get_option( 'admin_email' );
	$body = "New free water test request:\n\n";
	foreach ( $data as $k => $v ) { $body .= ucfirst( $k ) . ": $v\n"; }
	wp_mail( $to, 'New Free Water Test request', $body );

	$back = wp_get_referer() ?: home_url( '/' );
	wp_safe_redirect( add_query_arg( 'ss_sent', '1', $back ) );
	exit;
}
add_action( 'admin_post_nopriv_ss_free_water_test', 'ss_handle_free_water_test' );
add_action( 'admin_post_ss_free_water_test', 'ss_handle_free_water_test' );

/* Hidden CPT to store leads. */
function ss_register_lead_cpt() {
	register_post_type( 'ss_lead', array(
		'labels'   => array( 'name' => 'Water Test Leads', 'singular_name' => 'Lead' ),
		'public'   => false,
		'show_ui'  => true,
		'menu_icon'=> 'dashicons-email',
		'supports' => array( 'title' ),
	) );
}
add_action( 'init', 'ss_register_lead_cpt' );

/* ------------------------------------------------------------------ *
 *  FAQ JSON-LD schema (on the FAQ page)
 * ------------------------------------------------------------------ */
function ss_faq_schema() {
	if ( ! is_page_template( 'template-faq.php' ) ) { return; }
	$entities = array();
	foreach ( ss_faqs_view() as $f ) {
		$entities[] = array(
			'@type'          => 'Question',
			'name'           => $f['q'],
			'acceptedAnswer' => array( '@type' => 'Answer', 'text' => $f['a'] ),
		);
	}
	$schema = array( '@context' => 'https://schema.org', '@type' => 'FAQPage', 'mainEntity' => $entities );
	echo "\n<script type=\"application/ld+json\">" . wp_json_encode( $schema ) . "</script>\n";
}
add_action( 'wp_head', 'ss_faq_schema' );

/* ------------------------------------------------------------------ *
 *  Per-page <title>/meta from the data records (light SEO).
 * ------------------------------------------------------------------ */
function ss_document_title( $title ) {
	if ( is_singular( 'ss_problem' ) && ( $r = ss_current_record( 'ss_problem' ) ) && ! empty( $r['meta'] ) ) { return $r['meta']; }
	if ( is_singular( 'ss_product' ) && ( $r = ss_current_record( 'ss_product' ) ) && ! empty( $r['meta'] ) ) { return $r['meta']; }
	if ( is_singular( 'ss_city' ) && ( $r = ss_current_record( 'ss_city' ) ) && ! empty( $r['meta'] ) ) { return $r['meta']; }
	return $title;
}
add_filter( 'pre_get_document_title', 'ss_document_title', 20 );

add_theme_support( 'title-tag' );
add_theme_support( 'post-thumbnails' );
add_action( 'after_setup_theme', function () {
	// Native logo support: set it at Appearance → Customize → Site Identity
	// (works with no ACF / no options page needed).
	add_theme_support( 'custom-logo', array(
		'height'      => 80,
		'width'       => 320,
		'flex-height' => true,
		'flex-width'  => true,
	) );
} );

/* ------------------------------------------------------------------ *
 *  SHORTCODES — drop the reusable designed sections into BeBuilder /
 *  any page or post. They render the real (working) theme sections.
 * ------------------------------------------------------------------ */
function ss_sc_free_water_test( $atts ) {
	$a = shortcode_atts( array(
		'heading' => 'Get a free in-home water test',
		'sub'     => 'Find out exactly what’s in your water — no cost, no pressure. We’ll be in touch within 24 business hours to schedule.',
		'zip'     => '',
	), $atts );
	ob_start();
	ss_free_water_test( $a['heading'], $a['sub'], $a['zip'] );
	return ob_get_clean();
}
add_shortcode( 'ss_free_water_test', 'ss_sc_free_water_test' );

/* Just the white form card (drop into your own BeBuilder column). */
add_shortcode( 'ss_water_test_form', function ( $atts ) {
	$a = shortcode_atts( array( 'zip' => '' ), $atts );
	ob_start();
	ss_water_test_form( $a['zip'] );
	return ob_get_clean();
} );

add_shortcode( 'ss_reviews', function ( $atts ) {
	$a = shortcode_atts( array( 'count' => 3 ), $atts );
	ob_start();
	ss_reviews_block( intval( $a['count'] ) );
	return ob_get_clean();
} );
add_shortcode( 'ss_trust', function () {
	ob_start();
	ss_trust_strip();
	return ob_get_clean();
} );
add_shortcode( 'ss_how_it_works', function () {
	ob_start();
	ss_how_it_works();
	return ob_get_clean();
} );

/* Register editable nav locations (header + footer columns). */
function ss_register_menus() {
	register_nav_menus( array(
		'ss_primary'           => 'SS Header — Primary',
		'ss_footer_solutions'  => 'SS Footer — Solutions',
		'ss_footer_products'   => 'SS Footer — Products',
		'ss_footer_areas'      => 'SS Footer — Service Areas',
		'ss_footer_utility'    => 'SS Footer — Bottom Links',
	) );
}
add_action( 'after_setup_theme', 'ss_register_menus' );

/* ------------------------------------------------------------------ *
 *  Brand color overrides (only colors set in Brand Settings are emitted).
 * ------------------------------------------------------------------ */
function ss_inline_brand_colors() {
	if ( ! function_exists( 'ss_brand_colors' ) ) { return; }
	$css = '';
	foreach ( ss_brand_colors() as $var => $val ) {
		if ( $val ) { $css .= $var . ':' . sanitize_text_field( $val ) . ';'; }
	}
	if ( $css ) { echo "\n<style id=\"ss-brand-colors\">:root{" . $css . "}</style>\n"; }
}
add_action( 'wp_head', 'ss_inline_brand_colors', 30 );

/* ------------------------------------------------------------------ *
 *  Recommend ACF for full no-code editing (dismissible notice).
 * ------------------------------------------------------------------ */
function ss_acf_notice() {
	if ( ss_acf_active() || ! current_user_can( 'install_plugins' ) ) { return; }
	if ( get_user_meta( get_current_user_id(), 'ss_acf_notice_dismissed', true ) ) { return; }
	$url = admin_url( 'plugin-install.php?s=advanced+custom+fields&tab=search&type=term' );
	echo '<div class="notice notice-info is-dismissible" data-ss-acf-notice><p><strong>Savanna Springs:</strong> the site is fully populated and working. To edit all content with no code (per-page fields, brand settings, homepage), install the free <a href="' . esc_url( $url ) . '">Advanced Custom Fields</a> plugin, then visit <em>/wp-admin/?ss_reseed=1</em> to load the editable copy.</p></div>';
}
add_action( 'admin_notices', 'ss_acf_notice' );
function ss_dismiss_acf_notice() {
	if ( current_user_can( 'manage_options' ) ) { update_user_meta( get_current_user_id(), 'ss_acf_notice_dismissed', 1 ); }
	wp_die( '', '', array( 'response' => 200 ) );
}
add_action( 'wp_ajax_ss_dismiss_acf_notice', 'ss_dismiss_acf_notice' );
