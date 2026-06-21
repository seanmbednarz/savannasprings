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

/* ------------------------------------------------------------------ *
 *  OPTIONS PAGES
 * ------------------------------------------------------------------ */
add_action( 'acf/init', function () {
	if ( ! function_exists( 'acf_add_options_page' ) ) { return; }
	acf_add_options_page( array(
		'page_title' => 'Savanna Springs',
		'menu_title' => 'Savanna Springs',
		'menu_slug'  => 'ss-settings',
		'icon_url'   => 'dashicons-water',
		'position'   => 3,
		'capability' => 'manage_options',
	) );
	acf_add_options_sub_page( array( 'page_title' => 'Brand & Contact', 'menu_title' => 'Brand & Contact', 'parent_slug' => 'ss-settings' ) );
	acf_add_options_sub_page( array( 'page_title' => 'Homepage', 'menu_title' => 'Homepage', 'parent_slug' => 'ss-settings' ) );
	acf_add_options_sub_page( array( 'page_title' => 'Reviews & FAQ', 'menu_title' => 'Reviews & FAQ', 'parent_slug' => 'ss-settings' ) );
} );

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
