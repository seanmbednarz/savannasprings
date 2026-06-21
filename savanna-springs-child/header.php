<?php
/**
 * Branded site header (replaces BeTheme's global header to keep consistent chrome).
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

// Determine the active top-level nav key.
$ss_nav = array(
	array( 'Water Problems', 'Problems' ),
	array( 'Products', 'Products' ),
	array( 'Service Areas', 'ServiceAreas' ),
	array( 'About', 'About' ),
	array( 'Specials', 'Specials' ),
);
$ss_current = '';
if ( is_post_type_archive( 'ss_problem' ) || is_singular( 'ss_problem' ) ) { $ss_current = 'Problems'; }
elseif ( is_post_type_archive( 'ss_product' ) || is_singular( 'ss_product' ) ) { $ss_current = 'Products'; }
elseif ( is_post_type_archive( 'ss_city' ) || is_singular( 'ss_city' ) ) { $ss_current = 'ServiceAreas'; }
elseif ( is_page( 'about' ) ) { $ss_current = 'About'; }
elseif ( is_page( 'specials' ) ) { $ss_current = 'Specials'; }
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
				<span class="ss-u-left"><?php echo ss_icon( 'mapPin', array( 'size' => 15, 'color' => 'var(--sun-400)' ) ); ?> Serving Mahoning, Columbiana &amp; Trumbull counties + Western PA</span>
				<a href="mailto:info@savannaspringswater.com"><?php echo ss_icon( 'mail', array( 'size' => 15, 'color' => 'var(--sun-400)' ) ); ?> info@savannaspringswater.com</a>
			</div>
		</div>

		<div class="ss-wrap ss-headbar">
			<a class="ss-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>">
				<img src="<?php echo esc_url( SS_CHILD_URI . '/assets/logo-savanna-springs.png' ); ?>" alt="Savanna Springs Water Solutions">
			</a>

			<nav class="ss-nav">
				<?php foreach ( $ss_nav as $item ) :
					$active = ( $item[1] === $ss_current ) ? ' is-active' : '';
					?>
					<a class="<?php echo esc_attr( trim( $active ) ); ?>" href="<?php echo esc_url( ss_link( $item[1] ) ); ?>"><?php echo esc_html( $item[0] ); ?></a>
				<?php endforeach; ?>
			</nav>

			<div class="ss-head-right">
				<a class="ss-phone-link" href="tel:18777501420"><span class="ss-phone-dot"><?php echo ss_icon( 'phone', array( 'size' => 16, 'color' => 'var(--navy-700)' ) ); ?></span> (877) 750-1420</a>
				<a class="ss-btn ss-btn--accent" href="<?php echo esc_url( ss_link( 'FreeTest' ) ); ?>">Free Water Test</a>
			</div>

			<button class="ss-burger" type="button" aria-label="Menu" aria-expanded="false" data-ss-burger>
				<?php echo ss_icon( 'menu', array( 'size' => 24, 'color' => 'var(--navy-700)' ) ); ?>
			</button>
		</div>

		<div class="ss-mobile-panel" data-ss-mobile>
			<?php foreach ( $ss_nav as $item ) : ?>
				<a class="ss-m-link" href="<?php echo esc_url( ss_link( $item[1] ) ); ?>"><?php echo esc_html( $item[0] ); ?></a>
			<?php endforeach; ?>
			<a class="ss-phone-link" href="tel:18777501420"><?php echo ss_icon( 'phone', array( 'size' => 18, 'color' => 'var(--navy-700)' ) ); ?> (877) 750-1420</a>
			<div style="margin-top:8px"><a class="ss-btn ss-btn--accent ss-btn--block" href="<?php echo esc_url( ss_link( 'FreeTest' ) ); ?>">Free Water Test</a></div>
		</div>
	</header>

	<main id="ss-main">
