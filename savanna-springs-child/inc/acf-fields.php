<?php
/**
 * Savanna Springs — ACF field groups + options pages.
 * Loaded only when ACF is active. Field values are read through inc/view.php,
 * which falls back to inc/data.php defaults when empty.
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

/** Icon choices shared by icon-select fields. */
function ss_acf_icon_choices() {
	$names = array( 'droplet', 'wind', 'flame', 'beaker', 'home', 'flask', 'waves', 'truck', 'shield',
		'factory', 'drop2', 'calendar', 'search', 'clipboard', 'wrench', 'mapPin', 'award', 'dollarSign',
		'refresh', 'badgeCheck', 'shieldCheck', 'star', 'phone', 'mail', 'sun', 'leaf', 'sparkle' );
	return array_combine( $names, $names );
}
function ss_acf_color_choices() {
	return array( 'water' => 'Spring blue', 'navy' => 'Navy', 'sun' => 'Sun yellow', 'orange' => 'Duck orange', 'green' => 'Green' );
}

/** Standard hero fields (eyebrow / heading / sub) for a page field group. */
function ss_acf_hero( $prefix ) {
	return array(
		array( 'key' => "f_{$prefix}_eyebrow", 'label' => 'Eyebrow', 'name' => "{$prefix}_eyebrow", 'type' => 'text' ),
		array( 'key' => "f_{$prefix}_h1", 'label' => 'Heading', 'name' => "{$prefix}_h1", 'type' => 'text' ),
		array( 'key' => "f_{$prefix}_sub", 'label' => 'Sub-text', 'name' => "{$prefix}_sub", 'type' => 'textarea', 'rows' => 3 ),
	);
}
function ss_acf_page_location( $template ) {
	return array( array( array( 'param' => 'page_template', 'operator' => '==', 'value' => $template ) ) );
}

/* ------------------------------------------------------------------ *
 *  OPTIONS PAGES
 * ------------------------------------------------------------------ */
add_action( 'acf/init', function () {
	if ( ! function_exists( 'acf_add_options_page' ) ) { return; }
	acf_add_options_page( array(
		'page_title' => 'Savanna Springs',
		'menu_title' => 'Savanna Springs',
		'menu_slug'  => 'ss-settings',
		'icon_url'   => function_exists( 'ss_menu_icon_droplet' ) ? ss_menu_icon_droplet() : 'dashicons-filter',
		'position'   => 3,
		'capability' => 'manage_options',
	) );
	acf_add_options_sub_page( array( 'page_title' => 'Brand & Contact', 'menu_title' => 'Brand & Contact', 'parent_slug' => 'ss-settings' ) );
	acf_add_options_sub_page( array( 'page_title' => 'Homepage', 'menu_title' => 'Homepage', 'parent_slug' => 'ss-settings' ) );
	acf_add_options_sub_page( array( 'page_title' => 'Reviews & FAQ', 'menu_title' => 'Reviews & FAQ', 'parent_slug' => 'ss-settings' ) );
	acf_add_options_sub_page( array( 'page_title' => 'Shared Sections', 'menu_title' => 'Shared Sections', 'parent_slug' => 'ss-settings' ) );
} );

/** OR-location covering every Savanna Springs page template. */
function ss_acf_all_page_templates() {
	$tpls = array( 'template-about.php', 'template-specials.php', 'template-financing.php', 'template-gallery.php',
		'template-contact.php', 'template-reviews.php', 'template-faq.php', 'template-free-test.php' );
	$loc = array();
	foreach ( $tpls as $t ) { $loc[] = array( array( 'param' => 'page_template', 'operator' => '==', 'value' => $t ) ); }
	return $loc;
}

/* ------------------------------------------------------------------ *
 *  FIELD GROUPS
 * ------------------------------------------------------------------ */
add_action( 'acf/init', function () {
	if ( ! function_exists( 'acf_add_local_field_group' ) ) { return; }

	/* ---- Brand & Contact ---- */
	acf_add_local_field_group( array(
		'key'    => 'group_ss_brand',
		'title'  => 'Brand & Contact',
		'fields' => array(
			array( 'key' => 'f_logo', 'label' => 'Logo', 'name' => 'logo', 'type' => 'image', 'return_format' => 'url', 'instructions' => 'Used in the header and footer.' ),
			array( 'key' => 'f_phone_display', 'label' => 'Phone (display)', 'name' => 'phone_display', 'type' => 'text', 'placeholder' => '(877) 750-1420' ),
			array( 'key' => 'f_phone_tel', 'label' => 'Phone (dial / tel:)', 'name' => 'phone_tel', 'type' => 'text', 'placeholder' => '18777501420', 'instructions' => 'Digits only, used for click-to-call links.' ),
			array( 'key' => 'f_email', 'label' => 'Email', 'name' => 'email', 'type' => 'text', 'placeholder' => 'info@savannaspringswater.com' ),
			array( 'key' => 'f_address', 'label' => 'Address', 'name' => 'address', 'type' => 'text' ),
			array( 'key' => 'f_utility_text', 'label' => 'Header utility-bar text', 'name' => 'utility_text', 'type' => 'text' ),
			array( 'key' => 'f_footer_tagline', 'label' => 'Footer tagline', 'name' => 'footer_tagline', 'type' => 'text' ),
			array( 'key' => 'f_facebook', 'label' => 'Facebook URL', 'name' => 'facebook_url', 'type' => 'url' ),
			array( 'key' => 'f_instagram', 'label' => 'Instagram URL', 'name' => 'instagram_url', 'type' => 'url' ),
			array( 'key' => 'f_colors_tab', 'label' => 'Brand colors', 'type' => 'tab' ),
			array( 'key' => 'f_color_navy', 'label' => 'Navy (primary)', 'name' => 'color_navy', 'type' => 'color_picker', 'instructions' => 'Leave blank to keep the default #1f2b6e.' ),
			array( 'key' => 'f_color_spring', 'label' => 'Spring blue', 'name' => 'color_spring', 'type' => 'color_picker' ),
			array( 'key' => 'f_color_sun', 'label' => 'Sun yellow', 'name' => 'color_sun', 'type' => 'color_picker' ),
			array( 'key' => 'f_color_orange', 'label' => 'Duck orange', 'name' => 'color_orange', 'type' => 'color_picker' ),
		),
		'location' => array( array( array( 'param' => 'options_page', 'operator' => '==', 'value' => 'acf-options-brand-contact' ) ) ),
	) );

	/* ---- Homepage ---- */
	acf_add_local_field_group( array(
		'key'    => 'group_ss_home',
		'title'  => 'Homepage',
		'fields' => array(
			array( 'key' => 'f_h_hero_eyebrow', 'label' => 'Hero eyebrow', 'name' => 'home_hero_eyebrow', 'type' => 'text' ),
			array( 'key' => 'f_h_hero_heading', 'label' => 'Hero heading', 'name' => 'home_hero_heading', 'type' => 'text' ),
			array( 'key' => 'f_h_hero_accent', 'label' => 'Hero heading (yellow accent end)', 'name' => 'home_hero_accent', 'type' => 'text' ),
			array( 'key' => 'f_h_hero_sub', 'label' => 'Hero sub-text', 'name' => 'home_hero_sub', 'type' => 'textarea', 'rows' => 3 ),
			array( 'key' => 'f_h_hero_image', 'label' => 'Hero photo', 'name' => 'home_hero_image', 'type' => 'image', 'return_format' => 'url', 'instructions' => 'Optional. Replaces the default hero photo on the right of the homepage hero.' ),
			array( 'key' => 'f_h_why_title', 'label' => 'Why-us title', 'name' => 'home_why_title', 'type' => 'text' ),
			array( 'key' => 'f_h_why_sub', 'label' => 'Why-us sub-text', 'name' => 'home_why_sub', 'type' => 'textarea', 'rows' => 2 ),
			array( 'key' => 'f_h_why', 'label' => 'Why-us cards', 'name' => 'home_why', 'type' => 'repeater', 'layout' => 'block', 'button_label' => 'Add card', 'sub_fields' => array(
				array( 'key' => 'f_h_why_icon', 'label' => 'Icon', 'name' => 'icon', 'type' => 'select', 'choices' => ss_acf_icon_choices() ),
				array( 'key' => 'f_h_why_t', 'label' => 'Title', 'name' => 'title', 'type' => 'text' ),
				array( 'key' => 'f_h_why_b', 'label' => 'Body', 'name' => 'body', 'type' => 'textarea', 'rows' => 2 ),
			) ),
			array( 'key' => 'f_h_stats', 'label' => 'Stats row', 'name' => 'home_stats', 'type' => 'repeater', 'layout' => 'table', 'button_label' => 'Add stat', 'sub_fields' => array(
				array( 'key' => 'f_h_stat_n', 'label' => 'Number', 'name' => 'number', 'type' => 'text' ),
				array( 'key' => 'f_h_stat_l', 'label' => 'Label', 'name' => 'label', 'type' => 'text' ),
			) ),
			array( 'key' => 'f_h_products_eyebrow', 'label' => 'Products eyebrow', 'name' => 'home_products_eyebrow', 'type' => 'text' ),
			array( 'key' => 'f_h_products_title', 'label' => 'Products title', 'name' => 'home_products_title', 'type' => 'text' ),
			array( 'key' => 'f_h_products_sub', 'label' => 'Products sub-text', 'name' => 'home_products_sub', 'type' => 'textarea', 'rows' => 2 ),
			array( 'key' => 'f_h_service_title', 'label' => 'Service-area title', 'name' => 'home_service_title', 'type' => 'text' ),
			array( 'key' => 'f_h_service_sub', 'label' => 'Service-area sub-text', 'name' => 'home_service_sub', 'type' => 'textarea', 'rows' => 2 ),
			array( 'key' => 'f_h_specials_title', 'label' => 'Specials band title', 'name' => 'home_specials_title', 'type' => 'text' ),
			array( 'key' => 'f_h_specials', 'label' => 'Specials cards', 'name' => 'home_specials', 'type' => 'repeater', 'layout' => 'block', 'button_label' => 'Add special', 'sub_fields' => array(
				array( 'key' => 'f_h_sp_icon', 'label' => 'Icon', 'name' => 'icon', 'type' => 'select', 'choices' => ss_acf_icon_choices() ),
				array( 'key' => 'f_h_sp_t', 'label' => 'Title', 'name' => 'title', 'type' => 'text' ),
				array( 'key' => 'f_h_sp_b', 'label' => 'Body', 'name' => 'body', 'type' => 'text' ),
			) ),
			array( 'key' => 'f_h_fwt_heading', 'label' => 'Free-test heading', 'name' => 'home_fwt_heading', 'type' => 'text' ),
			array( 'key' => 'f_h_fwt_sub', 'label' => 'Free-test sub-text', 'name' => 'home_fwt_sub', 'type' => 'textarea', 'rows' => 2 ),
		),
		'location' => array( array( array( 'param' => 'options_page', 'operator' => '==', 'value' => 'acf-options-homepage' ) ) ),
	) );

	/* ---- Reviews & FAQ ---- */
	acf_add_local_field_group( array(
		'key'    => 'group_ss_content',
		'title'  => 'Reviews & FAQ',
		'fields' => array(
			array( 'key' => 'f_reviews', 'label' => 'Reviews', 'name' => 'reviews', 'type' => 'repeater', 'layout' => 'block', 'button_label' => 'Add review', 'sub_fields' => array(
				array( 'key' => 'f_rev_q', 'label' => 'Quote', 'name' => 'quote', 'type' => 'textarea', 'rows' => 3 ),
				array( 'key' => 'f_rev_n', 'label' => 'Name', 'name' => 'name', 'type' => 'text' ),
			) ),
			array( 'key' => 'f_faqs', 'label' => 'FAQs', 'name' => 'faqs', 'type' => 'repeater', 'layout' => 'block', 'button_label' => 'Add FAQ', 'sub_fields' => array(
				array( 'key' => 'f_faq_q', 'label' => 'Question', 'name' => 'question', 'type' => 'text' ),
				array( 'key' => 'f_faq_a', 'label' => 'Answer', 'name' => 'answer', 'type' => 'textarea', 'rows' => 3 ),
				array( 'key' => 'f_faq_ll', 'label' => 'Link label', 'name' => 'link_label', 'type' => 'text' ),
				array( 'key' => 'f_faq_lu', 'label' => 'Link URL', 'name' => 'link_url', 'type' => 'url' ),
			) ),
		),
		'location' => array( array( array( 'param' => 'options_page', 'operator' => '==', 'value' => 'acf-options-reviews-faq' ) ) ),
	) );

	/* ---- Water Problem ---- */
	acf_add_local_field_group( array(
		'key'    => 'group_ss_problem',
		'title'  => 'Water Problem content',
		'fields' => array(
			array( 'key' => 'f_p_icon', 'label' => 'Icon', 'name' => 'icon', 'type' => 'select', 'choices' => ss_acf_icon_choices() ),
			array( 'key' => 'f_p_color', 'label' => 'Accent color', 'name' => 'color', 'type' => 'select', 'choices' => ss_acf_color_choices() ),
			array( 'key' => 'f_p_eyebrow', 'label' => 'Eyebrow', 'name' => 'eyebrow', 'type' => 'text' ),
			array( 'key' => 'f_p_h1', 'label' => 'Hero headline (H1)', 'name' => 'h1', 'type' => 'text' ),
			array( 'key' => 'f_p_lead', 'label' => 'Hero lead', 'name' => 'lead', 'type' => 'textarea', 'rows' => 3 ),
			array( 'key' => 'f_p_problem', 'label' => 'The problem', 'name' => 'problem', 'type' => 'textarea', 'rows' => 3 ),
			array( 'key' => 'f_p_cause', 'label' => 'The cause', 'name' => 'cause', 'type' => 'textarea', 'rows' => 3 ),
			array( 'key' => 'f_p_steps', 'label' => 'Diagnose / Recommend / Install steps', 'name' => 'steps', 'type' => 'repeater', 'layout' => 'block', 'button_label' => 'Add step', 'sub_fields' => array(
				array( 'key' => 'f_p_step_l', 'label' => 'Label', 'name' => 'label', 'type' => 'text' ),
				array( 'key' => 'f_p_step_i', 'label' => 'Icon', 'name' => 'icon', 'type' => 'select', 'choices' => ss_acf_icon_choices() ),
				array( 'key' => 'f_p_step_b', 'label' => 'Body', 'name' => 'body', 'type' => 'textarea', 'rows' => 2 ),
			) ),
			array( 'key' => 'f_p_recommend', 'label' => 'Recommended system — description', 'name' => 'recommend_body', 'type' => 'textarea', 'rows' => 3 ),
			array( 'key' => 'f_p_product_name', 'label' => 'Recommended system — name', 'name' => 'product_name', 'type' => 'text' ),
			array( 'key' => 'f_p_product_link', 'label' => 'Recommended product page', 'name' => 'product_link', 'type' => 'post_object', 'post_type' => array( 'ss_product' ), 'return_format' => 'object', 'ui' => 1 ),
			array( 'key' => 'f_p_badges', 'label' => 'Badges', 'name' => 'badges', 'type' => 'repeater', 'layout' => 'table', 'button_label' => 'Add badge', 'sub_fields' => array(
				array( 'key' => 'f_p_badge_t', 'label' => 'Text', 'name' => 'text', 'type' => 'text' ),
			) ),
			array( 'key' => 'f_p_payoff_en', 'label' => 'Show payoff stats?', 'name' => 'payoff_enable', 'type' => 'true_false', 'ui' => 1 ),
			array( 'key' => 'f_p_payoff', 'label' => 'Payoff stats', 'name' => 'payoff', 'type' => 'repeater', 'layout' => 'table', 'button_label' => 'Add stat', 'conditional_logic' => array( array( array( 'field' => 'f_p_payoff_en', 'operator' => '==', 'value' => '1' ) ) ), 'sub_fields' => array(
				array( 'key' => 'f_p_payoff_s', 'label' => 'Stat', 'name' => 'stat', 'type' => 'text' ),
				array( 'key' => 'f_p_payoff_l', 'label' => 'Label', 'name' => 'label', 'type' => 'text' ),
			) ),
			array( 'key' => 'f_p_related', 'label' => 'Related problems', 'name' => 'related', 'type' => 'relationship', 'post_type' => array( 'ss_problem' ), 'filters' => array( 'search' ), 'max' => 3, 'return_format' => 'object' ),
			array( 'key' => 'f_p_cta', 'label' => 'CTA line', 'name' => 'cta', 'type' => 'text' ),
		),
		'location' => array( array( array( 'param' => 'post_type', 'operator' => '==', 'value' => 'ss_problem' ) ) ),
	) );

	/* ---- Product ---- */
	acf_add_local_field_group( array(
		'key'    => 'group_ss_product',
		'title'  => 'Product content',
		'fields' => array(
			array( 'key' => 'f_pr_icon', 'label' => 'Icon', 'name' => 'icon', 'type' => 'select', 'choices' => ss_acf_icon_choices() ),
			array( 'key' => 'f_pr_color', 'label' => 'Accent color', 'name' => 'color', 'type' => 'select', 'choices' => ss_acf_color_choices() ),
			array( 'key' => 'f_pr_eyebrow', 'label' => 'Eyebrow', 'name' => 'eyebrow', 'type' => 'text' ),
			array( 'key' => 'f_pr_h1', 'label' => 'Hero headline (H1)', 'name' => 'h1', 'type' => 'text' ),
			array( 'key' => 'f_pr_lead', 'label' => 'Hero lead', 'name' => 'lead', 'type' => 'textarea', 'rows' => 3 ),
			array( 'key' => 'f_pr_intro', 'label' => 'Intro paragraph (optional)', 'name' => 'intro', 'type' => 'textarea', 'rows' => 2 ),
			array( 'key' => 'f_pr_callfirst', 'label' => 'Call-first hero (commercial)?', 'name' => 'call_first', 'type' => 'true_false', 'ui' => 1 ),
			array( 'key' => 'f_pr_chips', 'label' => 'Hero chips', 'name' => 'chips', 'type' => 'repeater', 'layout' => 'table', 'button_label' => 'Add chip', 'sub_fields' => array(
				array( 'key' => 'f_pr_chip_t', 'label' => 'Text', 'name' => 'text', 'type' => 'text' ),
			) ),
			array( 'key' => 'f_pr_models', 'label' => 'Models', 'name' => 'models', 'type' => 'repeater', 'layout' => 'block', 'button_label' => 'Add model', 'sub_fields' => array(
				array( 'key' => 'f_pr_m_name', 'label' => 'Name', 'name' => 'name', 'type' => 'text' ),
				array( 'key' => 'f_pr_m_tag', 'label' => 'Tag / badge', 'name' => 'tag', 'type' => 'text' ),
				array( 'key' => 'f_pr_m_blurb', 'label' => 'Blurb', 'name' => 'blurb', 'type' => 'textarea', 'rows' => 2 ),
				array( 'key' => 'f_pr_m_feat', 'label' => 'Features (one per line)', 'name' => 'features', 'type' => 'textarea', 'rows' => 4 ),
				array( 'key' => 'f_pr_m_warr', 'label' => 'Warranty (optional)', 'name' => 'warranty', 'type' => 'text' ),
			) ),
			array( 'key' => 'f_pr_hl_en', 'label' => 'Show highlights band?', 'name' => 'highlights_enable', 'type' => 'true_false', 'ui' => 1 ),
			array( 'key' => 'f_pr_hl_eyebrow', 'label' => 'Highlights eyebrow', 'name' => 'highlights_eyebrow', 'type' => 'text', 'conditional_logic' => array( array( array( 'field' => 'f_pr_hl_en', 'operator' => '==', 'value' => '1' ) ) ) ),
			array( 'key' => 'f_pr_hl_title', 'label' => 'Highlights title', 'name' => 'highlights_title', 'type' => 'text', 'conditional_logic' => array( array( array( 'field' => 'f_pr_hl_en', 'operator' => '==', 'value' => '1' ) ) ) ),
			array( 'key' => 'f_pr_hl_items', 'label' => 'Highlights (one per line)', 'name' => 'highlights_items', 'type' => 'textarea', 'rows' => 5, 'conditional_logic' => array( array( array( 'field' => 'f_pr_hl_en', 'operator' => '==', 'value' => '1' ) ) ) ),
			array( 'key' => 'f_pr_seg_en', 'label' => 'Show "who we serve" band?', 'name' => 'segments_enable', 'type' => 'true_false', 'ui' => 1 ),
			array( 'key' => 'f_pr_seg_eyebrow', 'label' => 'Segments eyebrow', 'name' => 'segments_eyebrow', 'type' => 'text', 'conditional_logic' => array( array( array( 'field' => 'f_pr_seg_en', 'operator' => '==', 'value' => '1' ) ) ) ),
			array( 'key' => 'f_pr_seg_title', 'label' => 'Segments title', 'name' => 'segments_title', 'type' => 'text', 'conditional_logic' => array( array( array( 'field' => 'f_pr_seg_en', 'operator' => '==', 'value' => '1' ) ) ) ),
			array( 'key' => 'f_pr_seg_items', 'label' => 'Segments (one per line)', 'name' => 'segments_items', 'type' => 'textarea', 'rows' => 5, 'conditional_logic' => array( array( array( 'field' => 'f_pr_seg_en', 'operator' => '==', 'value' => '1' ) ) ) ),
			array( 'key' => 'f_pr_del_en', 'label' => 'Show delivery band?', 'name' => 'delivery_enable', 'type' => 'true_false', 'ui' => 1 ),
			array( 'key' => 'f_pr_del_title', 'label' => 'Delivery title', 'name' => 'delivery_title', 'type' => 'text', 'conditional_logic' => array( array( array( 'field' => 'f_pr_del_en', 'operator' => '==', 'value' => '1' ) ) ) ),
			array( 'key' => 'f_pr_del_body', 'label' => 'Delivery body', 'name' => 'delivery_body', 'type' => 'textarea', 'rows' => 2, 'conditional_logic' => array( array( array( 'field' => 'f_pr_del_en', 'operator' => '==', 'value' => '1' ) ) ) ),
			array( 'key' => 'f_pr_solves', 'label' => 'Problems this solves', 'name' => 'solves', 'type' => 'relationship', 'post_type' => array( 'ss_problem' ), 'filters' => array( 'search' ), 'return_format' => 'object' ),
			array( 'key' => 'f_pr_cta', 'label' => 'CTA line', 'name' => 'cta', 'type' => 'text' ),
		),
		'location' => array( array( array( 'param' => 'post_type', 'operator' => '==', 'value' => 'ss_product' ) ) ),
	) );

	/* ---- City ---- */
	acf_add_local_field_group( array(
		'key'    => 'group_ss_city',
		'title'  => 'Service Area content',
		'fields' => array(
			array( 'key' => 'f_c_city', 'label' => 'City name', 'name' => 'city', 'type' => 'text' ),
			array( 'key' => 'f_c_county', 'label' => 'County', 'name' => 'county', 'type' => 'text' ),
			array( 'key' => 'f_c_zip', 'label' => 'ZIP', 'name' => 'zip', 'type' => 'text' ),
			array( 'key' => 'f_c_type', 'label' => 'Water type', 'name' => 'type', 'type' => 'select', 'choices' => array( 'municipal' => 'Municipal', 'well' => 'Well', 'mixed' => 'Mixed' ) ),
			array( 'key' => 'f_c_h1', 'label' => 'Hero headline (H1)', 'name' => 'h1', 'type' => 'text' ),
			array( 'key' => 'f_c_lead', 'label' => 'Hero lead', 'name' => 'lead', 'type' => 'textarea', 'rows' => 3 ),
			array( 'key' => 'f_c_context', 'label' => 'Local context paragraph', 'name' => 'context', 'type' => 'textarea', 'rows' => 4 ),
			array( 'key' => 'f_c_mc', 'label' => 'Most common here', 'name' => 'most_common', 'type' => 'repeater', 'layout' => 'table', 'button_label' => 'Add item', 'sub_fields' => array(
				array( 'key' => 'f_c_mc_t', 'label' => 'Text', 'name' => 'text', 'type' => 'text' ),
			) ),
			array( 'key' => 'f_c_problems', 'label' => 'What we fix here', 'name' => 'problems', 'type' => 'relationship', 'post_type' => array( 'ss_problem' ), 'filters' => array( 'search' ), 'return_format' => 'object' ),
			array( 'key' => 'f_c_services', 'label' => 'Services here (optional override)', 'name' => 'services', 'type' => 'relationship', 'post_type' => array( 'ss_product' ), 'filters' => array( 'search' ), 'return_format' => 'object', 'instructions' => 'Leave empty to auto-pick by water type.' ),
			array( 'key' => 'f_c_nearby', 'label' => 'Nearby communities', 'name' => 'nearby', 'type' => 'repeater', 'layout' => 'table', 'button_label' => 'Add place', 'sub_fields' => array(
				array( 'key' => 'f_c_nb_t', 'label' => 'Text', 'name' => 'text', 'type' => 'text' ),
			) ),
		),
		'location' => array( array( array( 'param' => 'post_type', 'operator' => '==', 'value' => 'ss_city' ) ) ),
	) );
} );

/* ------------------------------------------------------------------ *
 *  PAGE FIELD GROUPS  (standalone content pages)
 * ------------------------------------------------------------------ */
add_action( 'acf/init', function () {
	if ( ! function_exists( 'acf_add_local_field_group' ) ) { return; }

	/* About */
	acf_add_local_field_group( array(
		'key' => 'group_ss_about', 'title' => 'About page',
		'fields' => array_merge( ss_acf_hero( 'about' ), array(
			array( 'key' => 'f_about_story_eyebrow', 'label' => 'Story eyebrow', 'name' => 'about_story_eyebrow', 'type' => 'text' ),
			array( 'key' => 'f_about_story_title', 'label' => 'Story title', 'name' => 'about_story_title', 'type' => 'text' ),
			array( 'key' => 'f_about_story', 'label' => 'Story paragraphs', 'name' => 'about_story', 'type' => 'repeater', 'layout' => 'block', 'button_label' => 'Add paragraph', 'sub_fields' => array(
				array( 'key' => 'f_about_story_p', 'label' => 'Paragraph', 'name' => 'paragraph', 'type' => 'textarea', 'rows' => 3 ),
			) ),
			array( 'key' => 'f_about_stats', 'label' => 'Stats', 'name' => 'about_stats', 'type' => 'repeater', 'layout' => 'table', 'button_label' => 'Add stat', 'sub_fields' => array(
				array( 'key' => 'f_about_stat_n', 'label' => 'Number', 'name' => 'number', 'type' => 'text' ),
				array( 'key' => 'f_about_stat_l', 'label' => 'Label', 'name' => 'label', 'type' => 'text' ),
			) ),
			array( 'key' => 'f_about_values_eyebrow', 'label' => 'Values eyebrow', 'name' => 'about_values_eyebrow', 'type' => 'text' ),
			array( 'key' => 'f_about_values_title', 'label' => 'Values title', 'name' => 'about_values_title', 'type' => 'text' ),
			array( 'key' => 'f_about_values', 'label' => 'Value cards', 'name' => 'about_values', 'type' => 'repeater', 'layout' => 'block', 'button_label' => 'Add value', 'sub_fields' => array(
				array( 'key' => 'f_about_val_icon', 'label' => 'Icon', 'name' => 'icon', 'type' => 'select', 'choices' => ss_acf_icon_choices() ),
				array( 'key' => 'f_about_val_t', 'label' => 'Title', 'name' => 'title', 'type' => 'text' ),
				array( 'key' => 'f_about_val_b', 'label' => 'Body', 'name' => 'body', 'type' => 'textarea', 'rows' => 2 ),
			) ),
		) ),
		'location' => ss_acf_page_location( 'template-about.php' ),
	) );

	/* Specials */
	acf_add_local_field_group( array(
		'key' => 'group_ss_specials', 'title' => 'Specials page',
		'fields' => array_merge( ss_acf_hero( 'specials' ), array(
			array( 'key' => 'f_specials_offers', 'label' => 'Offers', 'name' => 'specials_offers', 'type' => 'repeater', 'layout' => 'block', 'button_label' => 'Add offer', 'sub_fields' => array(
				array( 'key' => 'f_sp_o_icon', 'label' => 'Icon', 'name' => 'icon', 'type' => 'select', 'choices' => ss_acf_icon_choices() ),
				array( 'key' => 'f_sp_o_tag', 'label' => 'Tag', 'name' => 'tag', 'type' => 'text' ),
				array( 'key' => 'f_sp_o_t', 'label' => 'Title', 'name' => 'title', 'type' => 'text' ),
				array( 'key' => 'f_sp_o_b', 'label' => 'Body', 'name' => 'body', 'type' => 'textarea', 'rows' => 2 ),
			) ),
			array( 'key' => 'f_specials_cta_title', 'label' => 'CTA title', 'name' => 'specials_cta_title', 'type' => 'text' ),
			array( 'key' => 'f_specials_cta_body', 'label' => 'CTA body', 'name' => 'specials_cta_body', 'type' => 'textarea', 'rows' => 2 ),
		) ),
		'location' => ss_acf_page_location( 'template-specials.php' ),
	) );

	/* Financing */
	acf_add_local_field_group( array(
		'key' => 'group_ss_financing', 'title' => 'Financing page',
		'fields' => array_merge( ss_acf_hero( 'financing' ), array(
			array( 'key' => 'f_financing_tiers', 'label' => 'Tiers', 'name' => 'financing_tiers', 'type' => 'repeater', 'layout' => 'block', 'button_label' => 'Add tier', 'sub_fields' => array(
				array( 'key' => 'f_fin_t_tag', 'label' => 'Tag', 'name' => 'tag', 'type' => 'text' ),
				array( 'key' => 'f_fin_t_t', 'label' => 'Title', 'name' => 'title', 'type' => 'text' ),
				array( 'key' => 'f_fin_t_b', 'label' => 'Body', 'name' => 'body', 'type' => 'textarea', 'rows' => 2 ),
			) ),
			array( 'key' => 'f_financing_apply_title', 'label' => 'Apply card title', 'name' => 'financing_apply_title', 'type' => 'text' ),
			array( 'key' => 'f_financing_apply_body', 'label' => 'Apply card body', 'name' => 'financing_apply_body', 'type' => 'textarea', 'rows' => 2 ),
		) ),
		'location' => ss_acf_page_location( 'template-financing.php' ),
	) );

	/* Gallery */
	acf_add_local_field_group( array(
		'key' => 'group_ss_gallery', 'title' => 'Gallery page',
		'fields' => array_merge( ss_acf_hero( 'gallery' ), array(
			array( 'key' => 'f_gallery_groups', 'label' => 'Gallery groups', 'name' => 'gallery_groups', 'type' => 'repeater', 'layout' => 'block', 'button_label' => 'Add group', 'sub_fields' => array(
				array( 'key' => 'f_gal_g_title', 'label' => 'Group title', 'name' => 'title', 'type' => 'text' ),
				array( 'key' => 'f_gal_g_icon', 'label' => 'Icon', 'name' => 'icon', 'type' => 'select', 'choices' => ss_acf_icon_choices() ),
				array( 'key' => 'f_gal_g_color', 'label' => 'Color', 'name' => 'color', 'type' => 'select', 'choices' => ss_acf_color_choices() ),
				array( 'key' => 'f_gal_g_items', 'label' => 'Photos', 'name' => 'items', 'type' => 'repeater', 'layout' => 'block', 'button_label' => 'Add photo', 'sub_fields' => array(
					array( 'key' => 'f_gal_i_label', 'label' => 'Caption', 'name' => 'label', 'type' => 'text' ),
					array( 'key' => 'f_gal_i_img', 'label' => 'Image', 'name' => 'image', 'type' => 'image', 'return_format' => 'array' ),
				) ),
			) ),
		) ),
		'location' => ss_acf_page_location( 'template-gallery.php' ),
	) );

	/* Contact */
	acf_add_local_field_group( array(
		'key' => 'group_ss_contact', 'title' => 'Contact page',
		'fields' => array_merge( ss_acf_hero( 'contact' ), array(
			array( 'key' => 'f_contact_hours', 'label' => 'Hours', 'name' => 'contact_hours', 'type' => 'textarea', 'rows' => 2 ),
			array( 'key' => 'f_contact_form_heading', 'label' => 'Form heading', 'name' => 'contact_form_heading', 'type' => 'text' ),
			array( 'key' => 'f_contact_form_sub', 'label' => 'Form sub-text', 'name' => 'contact_form_sub', 'type' => 'text' ),
		) ),
		'location' => ss_acf_page_location( 'template-contact.php' ),
	) );

	/* Reviews */
	acf_add_local_field_group( array(
		'key' => 'group_ss_reviews_page', 'title' => 'Reviews page',
		'fields' => array_merge( ss_acf_hero( 'reviews' ), array(
			array( 'key' => 'f_reviews_embed_title', 'label' => 'Embed card title', 'name' => 'reviews_embed_title', 'type' => 'text' ),
			array( 'key' => 'f_reviews_embed_body', 'label' => 'Embed card body', 'name' => 'reviews_embed_body', 'type' => 'textarea', 'rows' => 2 ),
			array( 'key' => 'f_reviews_embed', 'label' => 'Reviews embed code (Elfsight, etc.)', 'name' => 'reviews_embed', 'type' => 'textarea', 'rows' => 4, 'instructions' => 'Paste the widget embed code here to show live reviews. Editable testimonials live under Savanna Springs → Reviews & FAQ.' ),
		) ),
		'location' => ss_acf_page_location( 'template-reviews.php' ),
	) );

	/* FAQ */
	acf_add_local_field_group( array(
		'key' => 'group_ss_faq_page', 'title' => 'FAQ page',
		'fields' => array_merge( ss_acf_hero( 'faq' ), array(
			array( 'key' => 'f_faq_cta_title', 'label' => 'CTA title', 'name' => 'faq_cta_title', 'type' => 'text' ),
			array( 'key' => 'f_faq_cta_body', 'label' => 'CTA body', 'name' => 'faq_cta_body', 'type' => 'text', 'instructions' => 'The FAQ questions themselves are edited under Savanna Springs → Reviews & FAQ.' ),
		) ),
		'location' => ss_acf_page_location( 'template-faq.php' ),
	) );

	/* Free Water Test */
	acf_add_local_field_group( array(
		'key' => 'group_ss_freetest', 'title' => 'Free Water Test page',
		'fields' => ss_acf_hero( 'freetest' ),
		'location' => ss_acf_page_location( 'template-free-test.php' ),
	) );
} );

/* ------------------------------------------------------------------ *
 *  HERO IMAGE / LAYOUT TOGGLE / PAGE HERO IMAGE / SHARED SECTIONS
 * ------------------------------------------------------------------ */
add_action( 'acf/init', function () {
	if ( ! function_exists( 'acf_add_local_field_group' ) ) { return; }

	/* Hero image + icon/photo choice — Problem / Product / City singles. */
	acf_add_local_field_group( array(
		'key' => 'group_ss_hero', 'title' => 'Hero image',
		'fields' => array(
			array( 'key' => 'f_hero_media', 'label' => 'Hero shows', 'name' => 'hero_media', 'type' => 'select',
				'choices' => array( 'auto' => 'Auto (photo if set, else icon)', 'icon' => 'Icon tile', 'photo' => 'Photo background' ), 'default_value' => 'auto' ),
			array( 'key' => 'f_hero_image', 'label' => 'Hero photo', 'name' => 'hero_image', 'type' => 'image', 'return_format' => 'array',
				'instructions' => 'Optional. Used as the hero background (with a navy scrim). Falls back to the Featured Image if empty.' ),
		),
		'position' => 'side',
		'location' => array(
			array( array( 'param' => 'post_type', 'operator' => '==', 'value' => 'ss_problem' ) ),
			array( array( 'param' => 'post_type', 'operator' => '==', 'value' => 'ss_product' ) ),
			array( array( 'param' => 'post_type', 'operator' => '==', 'value' => 'ss_city' ) ),
		),
	) );

	/* BeBuilder toggle — pages + CPTs. */
	acf_add_local_field_group( array(
		'key' => 'group_ss_layout', 'title' => 'Layout',
		'fields' => array(
			array( 'key' => 'f_ss_use_builder', 'label' => 'Build this page in BeBuilder', 'name' => 'ss_use_builder', 'type' => 'true_false', 'ui' => 1,
				'instructions' => 'Turn ON to ignore the Savanna Springs designed layout and render this page’s BeBuilder / editor content instead (inside the site header & footer).' ),
		),
		'position' => 'side',
		'location' => array(
			array( array( 'param' => 'post_type', 'operator' => '==', 'value' => 'page' ) ),
			array( array( 'param' => 'post_type', 'operator' => '==', 'value' => 'ss_problem' ) ),
			array( array( 'param' => 'post_type', 'operator' => '==', 'value' => 'ss_product' ) ),
			array( array( 'param' => 'post_type', 'operator' => '==', 'value' => 'ss_city' ) ),
		),
	) );

	/* Optional hero background image — every standalone page template. */
	acf_add_local_field_group( array(
		'key' => 'group_ss_pagehero', 'title' => 'Hero background image',
		'fields' => array(
			array( 'key' => 'f_page_hero_image', 'label' => 'Hero background image', 'name' => 'page_hero_image', 'type' => 'image', 'return_format' => 'array',
				'instructions' => 'Optional. Sits behind the hero text with a navy scrim.' ),
		),
		'position' => 'side',
		'location' => ss_acf_all_page_templates(),
	) );

	/* Shared sections (used site-wide). */
	acf_add_local_field_group( array(
		'key' => 'group_ss_shared', 'title' => 'Shared Sections',
		'fields' => array(
			array( 'key' => 'f_trust_items', 'label' => 'Trust strip items', 'name' => 'trust_items', 'type' => 'repeater', 'layout' => 'table', 'button_label' => 'Add item', 'sub_fields' => array(
				array( 'key' => 'f_trust_icon', 'label' => 'Icon', 'name' => 'icon', 'type' => 'select', 'choices' => ss_acf_icon_choices() ),
				array( 'key' => 'f_trust_label', 'label' => 'Label', 'name' => 'label', 'type' => 'text' ),
			) ),
			array( 'key' => 'f_how_steps', 'label' => 'How it works steps', 'name' => 'how_steps', 'type' => 'repeater', 'layout' => 'block', 'button_label' => 'Add step', 'sub_fields' => array(
				array( 'key' => 'f_how_icon', 'label' => 'Icon', 'name' => 'icon', 'type' => 'select', 'choices' => ss_acf_icon_choices() ),
				array( 'key' => 'f_how_title', 'label' => 'Title', 'name' => 'title', 'type' => 'text' ),
				array( 'key' => 'f_how_body', 'label' => 'Body', 'name' => 'body', 'type' => 'textarea', 'rows' => 2 ),
			) ),
			array( 'key' => 'f_fwt_perks', 'label' => 'Free Water Test perks', 'name' => 'fwt_perks', 'type' => 'repeater', 'layout' => 'block', 'button_label' => 'Add perk', 'sub_fields' => array(
				array( 'key' => 'f_perk_icon', 'label' => 'Icon', 'name' => 'icon', 'type' => 'select', 'choices' => ss_acf_icon_choices() ),
				array( 'key' => 'f_perk_title', 'label' => 'Title', 'name' => 'title', 'type' => 'text' ),
				array( 'key' => 'f_perk_body', 'label' => 'Body', 'name' => 'body', 'type' => 'textarea', 'rows' => 2 ),
			) ),
			array( 'key' => 'f_footer_badges', 'label' => 'Footer trust badges', 'name' => 'footer_badges', 'type' => 'repeater', 'layout' => 'table', 'button_label' => 'Add badge', 'sub_fields' => array(
				array( 'key' => 'f_footer_badge_t', 'label' => 'Text', 'name' => 'text', 'type' => 'text' ),
			) ),
		),
		'location' => array( array( array( 'param' => 'options_page', 'operator' => '==', 'value' => 'acf-options-shared-sections' ) ) ),
	) );
} );
