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

	// Child stylesheet.
	wp_enqueue_style( 'ss-child', get_stylesheet_uri(), array( 'betheme-parent' ), SS_CHILD_VERSION );

	// Interactions.
	wp_enqueue_script( 'ss-main', SS_CHILD_URI . '/js/main.js', array(), SS_CHILD_VERSION, true );
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
function ss_register_cpts() {
	register_post_type( 'ss_problem', array(
		'labels'      => array( 'name' => 'Water Problems', 'singular_name' => 'Water Problem', 'menu_name' => 'Water Problems', 'add_new_item' => 'Add Water Problem' ),
		'public'      => true,
		'has_archive' => 'water-problems',
		'menu_icon'   => 'dashicons-water',
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
		if ( get_page_by_path( $slug, OBJECT, $post_type ) ) { return; }
		wp_insert_post( array(
			'post_type'    => $post_type,
			'post_name'    => $slug,
			'post_title'   => $title,
			'post_excerpt' => $excerpt,
			'post_status'  => 'publish',
			'post_content' => '',
		) );
	};

	foreach ( ss_problems() as $rec ) { $seed( 'ss_problem', $rec['slug'], $rec['label'], $rec['blurb'] ); }
	foreach ( ss_products() as $rec ) { $seed( 'ss_product', $rec['slug'], $rec['label'], $rec['blurb'] ); }
	foreach ( ss_cities() as $rec ) { $seed( 'ss_city', $rec['slug'], $rec['city'], '' ); }

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
	foreach ( ss_faqs() as $f ) {
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

/* Register a primary nav location (used by header if a menu is assigned). */
function ss_register_menus() {
	register_nav_menus( array( 'ss_primary' => 'Savanna Springs Primary' ) );
}
add_action( 'after_setup_theme', 'ss_register_menus' );
