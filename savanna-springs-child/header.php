<?php
/**
 * Branded site header (replaces BeTheme's global header to keep consistent chrome).
 * Logo, contact details and nav are editable (Brand & Contact settings + WP menus),
 * with the design defaults as fallback.
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

$brand = ss_brand();

// Active top-level section.
$ss_current = '';
if ( is_post_type_archive( 'ss_problem' ) || is_singular( 'ss_problem' ) ) { $ss_current = 'Problems'; }
elseif ( is_post_type_archive( 'ss_product' ) || is_singular( 'ss_product' ) ) { $ss_current = 'Products'; }
elseif ( is_post_type_archive( 'ss_city' ) || is_singular( 'ss_city' ) ) { $ss_current = 'ServiceAreas'; }
elseif ( is_page( 'about' ) ) { $ss_current = 'About'; }
elseif ( is_page( 'specials' ) ) { $ss_current = 'Specials'; }
$ss_current_url = $ss_current ? ss_link( $ss_current ) : '';

$ss_nav = ss_nav_items( 'ss_primary', array(
	array( 'label' => 'Water Problems', 'url' => ss_link( 'Problems' ) ),
	array( 'label' => 'Products', 'url' => ss_link( 'Products' ) ),
	array( 'label' => 'Service Areas', 'url' => ss_link( 'ServiceAreas' ) ),
	array( 'label' => 'About', 'url' => ss_link( 'About' ) ),
	array( 'label' => 'Specials', 'url' => ss_link( 'Specials' ) ),
) );
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php if ( function_exists( 'wp_body_open' ) ) { wp_body_open(); } ?>
<div id="Wrapper">

	<header class="ss-header">
		<div class="ss-utility">
			<div class="ss-wrap">
				<span class="ss-u-left"><?php echo ss_icon( 'mapPin', array( 'size' => 15, 'color' => 'var(--sun-400)' ) ); ?> <?php echo esc_html( $brand['utility_text'] ); ?></span>
				<a href="mailto:<?php echo esc_attr( $brand['email'] ); ?>"><?php echo ss_icon( 'mail', array( 'size' => 15, 'color' => 'var(--sun-400)' ) ); ?> <?php echo esc_html( $brand['email'] ); ?></a>
			</div>
		</div>

		<div class="ss-wrap ss-headbar">
			<a class="ss-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>">
				<img src="<?php echo esc_url( $brand['logo'] ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ?: 'Savanna Springs Water Solutions' ); ?>">
			</a>

			<nav class="ss-nav">
				<?php foreach ( $ss_nav as $item ) :
					$active = ( $ss_current_url && $item['url'] === $ss_current_url ) ? ' is-active' : '';
					?>
					<a class="<?php echo esc_attr( trim( $active ) ); ?>" href="<?php echo esc_url( $item['url'] ); ?>"><?php echo esc_html( $item['label'] ); ?></a>
				<?php endforeach; ?>
			</nav>

			<div class="ss-head-right">
				<a class="ss-phone-link" href="tel:<?php echo esc_attr( $brand['phone_tel'] ); ?>"><span class="ss-phone-dot"><?php echo ss_icon( 'phone', array( 'size' => 16, 'color' => 'var(--navy-700)' ) ); ?></span> <?php echo esc_html( $brand['phone'] ); ?></a>
				<a class="ss-btn ss-btn--accent" href="<?php echo esc_url( ss_link( 'FreeTest' ) ); ?>">Free Water Test</a>
			</div>

			<button class="ss-burger" type="button" aria-label="Menu" aria-expanded="false" data-ss-burger>
				<?php echo ss_icon( 'menu', array( 'size' => 24, 'color' => 'var(--navy-700)' ) ); ?>
			</button>
		</div>

		<div class="ss-mobile-panel" data-ss-mobile>
			<?php foreach ( $ss_nav as $item ) : ?>
				<a class="ss-m-link" href="<?php echo esc_url( $item['url'] ); ?>"><?php echo esc_html( $item['label'] ); ?></a>
			<?php endforeach; ?>
			<a class="ss-phone-link" href="tel:<?php echo esc_attr( $brand['phone_tel'] ); ?>"><?php echo ss_icon( 'phone', array( 'size' => 18, 'color' => 'var(--navy-700)' ) ); ?> <?php echo esc_html( $brand['phone'] ); ?></a>
			<div style="margin-top:8px"><a class="ss-btn ss-btn--accent ss-btn--block" href="<?php echo esc_url( ss_link( 'FreeTest' ) ); ?>">Free Water Test</a></div>
		</div>
	</header>

	<main id="ss-main">
