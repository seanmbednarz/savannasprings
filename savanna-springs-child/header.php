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

// Full nested menu (parents + submenu children). Falls back to the flat
// design defaults when no WP menu is assigned to the SS Header location.
$ss_nav = ss_nav_tree( 'ss_primary' );
if ( ! $ss_nav ) {
	$ss_nav = array(
		array( 'label' => 'Water Problems', 'url' => ss_link( 'Problems' ), 'children' => array() ),
		array( 'label' => 'Products', 'url' => ss_link( 'Products' ), 'children' => array() ),
		array( 'label' => 'Service Areas', 'url' => ss_link( 'ServiceAreas' ), 'children' => array() ),
		array( 'label' => 'About', 'url' => ss_link( 'About' ), 'children' => array() ),
		array( 'label' => 'Specials', 'url' => ss_link( 'Specials' ), 'children' => array() ),
	);
}

// Populate the Service Areas dropdown with city links when it has no submenu yet.
$ss_sa_url     = ss_link( 'ServiceAreas' );
$ss_cities_map = function_exists( 'ss_cities' ) ? ss_cities() : array();
foreach ( $ss_nav as &$ss_nav_item ) {
	if ( empty( $ss_nav_item['children'] ) && ( 'Service Areas' === $ss_nav_item['label'] || ( $ss_sa_url && $ss_nav_item['url'] === $ss_sa_url ) ) ) {
		foreach ( ss_city_order() as $ss_ck ) {
			if ( isset( $ss_cities_map[ $ss_ck ] ) ) {
				$ss_nav_item['children'][] = array( 'label' => $ss_cities_map[ $ss_ck ]['city'], 'url' => ss_link( $ss_ck ) );
			}
		}
	}
}
unset( $ss_nav_item );
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
			<?php $ss_site_name = get_bloginfo( 'name' ) ?: 'Savanna Springs Water Solutions'; ?>
			<a class="ss-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>">
				<img class="skip-lazy no-lazy" src="<?php echo esc_url( $brand['logo'] ); ?>" alt="<?php echo esc_attr( $ss_site_name ); ?>" loading="eager" decoding="async" data-no-lazy="1" onerror="this.style.display='none';this.nextElementSibling.style.display='inline';">
				<span class="ss-logo-fallback" style="display:none"><?php echo esc_html( $ss_site_name ); ?></span>
			</a>

			<nav class="ss-nav">
				<?php foreach ( $ss_nav as $item ) :
					$kids   = ! empty( $item['children'] ) ? $item['children'] : array();
					$active = ( $ss_current_url && $item['url'] === $ss_current_url ) ? ' is-active' : '';
					?>
					<?php
					// More than 5 children -> lay the panel out as a mega menu
					// with multiple columns so the long lists stay compact.
					$kcount = count( $kids );
					$cols   = $kcount > 10 ? 3 : ( $kcount > 5 ? 2 : 1 );
					?>
					<div class="ss-nav-item<?php echo $kids ? ' has-children' : ''; ?>">
						<a class="ss-nav-link<?php echo esc_attr( $active ); ?>" href="<?php echo esc_url( $item['url'] ); ?>"><?php echo esc_html( $item['label'] ); ?><?php if ( $kids ) { echo ' ' . ss_icon( 'chevronDown', array( 'size' => 14 ) ); } ?></a>
						<?php if ( $kids ) : ?>
							<div class="ss-dropdown<?php echo $cols > 1 ? ' ss-dropdown--mega' : ''; ?>" style="--ss-cols:<?php echo (int) $cols; ?>">
								<div class="ss-dropdown-head"><?php echo esc_html( $item['label'] ); ?></div>
								<div class="ss-dropdown-grid">
									<?php foreach ( $kids as $kid ) : ?>
										<a href="<?php echo esc_url( $kid['url'] ); ?>"><?php echo esc_html( $kid['label'] ); ?></a>
									<?php endforeach; ?>
								</div>
							</div>
						<?php endif; ?>
					</div>
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
	</header>

	<div class="ss-mobile-backdrop" data-ss-mobile-backdrop hidden></div>

	<aside class="ss-mobile-panel" data-ss-mobile aria-hidden="true">
			<div class="ss-m-top">
				<a class="ss-logo ss-m-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>">
					<img class="skip-lazy no-lazy" src="<?php echo esc_url( $brand['logo'] ); ?>" alt="<?php echo esc_attr( $ss_site_name ); ?>" loading="eager" decoding="async">
				</a>
				<button class="ss-m-close" type="button" aria-label="Close menu" data-ss-close>
					<?php echo ss_icon( 'x', array( 'size' => 24, 'color' => 'var(--navy-700)' ) ); ?>
				</button>
			</div>
			<?php foreach ( $ss_nav as $item ) :
				$kids = ! empty( $item['children'] ) ? $item['children'] : array();
				$icon = ss_icon( ss_nav_icon( $item['label'] ), array( 'size' => 20, 'color' => 'var(--spring-600)' ) );
				if ( $kids ) : ?>
					<div class="ss-m-acc" data-ss-acc>
						<button class="ss-m-acc-btn" type="button" aria-expanded="false">
							<span class="ss-m-acc-label"><?php echo $icon; ?> <?php echo esc_html( $item['label'] ); ?></span>
							<span class="ss-m-acc-chev"><?php echo ss_icon( 'chevronDown', array( 'size' => 20, 'color' => 'var(--neutral-500)' ) ); ?></span>
						</button>
						<div class="ss-m-acc-panel">
							<?php if ( ! empty( $item['url'] ) ) : ?>
								<a class="ss-m-parentlink" href="<?php echo esc_url( $item['url'] ); ?>">All <?php echo esc_html( $item['label'] ); ?> <?php echo ss_icon( 'arrowRight', array( 'size' => 14, 'color' => 'var(--spring-700)' ) ); ?></a>
							<?php endif; ?>
							<?php foreach ( $kids as $kid ) : ?>
								<a class="ss-m-sublink" href="<?php echo esc_url( $kid['url'] ); ?>"><?php echo esc_html( $kid['label'] ); ?></a>
							<?php endforeach; ?>
						</div>
					</div>
				<?php else : ?>
					<a class="ss-m-link" href="<?php echo esc_url( $item['url'] ); ?>"><?php echo $icon; ?> <?php echo esc_html( $item['label'] ); ?></a>
				<?php endif; ?>
			<?php endforeach; ?>
			<a class="ss-phone-link" href="tel:<?php echo esc_attr( $brand['phone_tel'] ); ?>"><?php echo ss_icon( 'phone', array( 'size' => 18, 'color' => 'var(--navy-700)' ) ); ?> <?php echo esc_html( $brand['phone'] ); ?></a>
			<div style="margin-top:8px"><a class="ss-btn ss-btn--accent ss-btn--block" href="<?php echo esc_url( ss_link( 'FreeTest' ) ); ?>">Free Water Test</a></div>
	</aside>

	<main id="ss-main">
