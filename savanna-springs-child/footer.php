<?php
/**
 * Branded site footer. Logo/contact from Brand settings; columns from editable menus.
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

$brand = ss_brand();

$ss_solutions = ss_nav_items( 'ss_footer_solutions', array(
	array( 'label' => 'Rotten-egg smell', 'url' => ss_link( 'Smelly' ) ), array( 'label' => 'Hard water & scale', 'url' => ss_link( 'HardWater' ) ),
	array( 'label' => 'Rust & orange stains', 'url' => ss_link( 'Rust' ) ), array( 'label' => 'Bad-tasting water', 'url' => ss_link( 'Taste' ) ),
	array( 'label' => 'Well water problems', 'url' => ss_link( 'Well' ) ), array( 'label' => 'Chlorine taste & smell', 'url' => ss_link( 'Chlorine' ) ),
) );
$ss_fproducts = ss_nav_items( 'ss_footer_products', array(
	array( 'label' => 'Water softeners', 'url' => ss_link( 'Softeners' ) ), array( 'label' => 'Reverse osmosis', 'url' => ss_link( 'RO' ) ),
	array( 'label' => 'Iron & sulfur filters', 'url' => ss_link( 'IronSulfur' ) ), array( 'label' => 'Whole-house filtration', 'url' => ss_link( 'WholeHouse' ) ),
	array( 'label' => 'Salt delivery', 'url' => ss_link( 'Salt' ) ), array( 'label' => 'Equipment rentals', 'url' => ss_link( 'Rentals' ) ),
) );
$ss_fcities = ss_nav_items( 'ss_footer_areas', array(
	array( 'label' => 'Youngstown', 'url' => ss_link( 'Youngstown' ) ), array( 'label' => 'Boardman', 'url' => ss_link( 'Boardman' ) ), array( 'label' => 'Poland', 'url' => ss_link( 'Poland' ) ),
	array( 'label' => 'Canfield', 'url' => ss_link( 'Canfield' ) ), array( 'label' => 'Struthers', 'url' => ss_link( 'Struthers' ) ), array( 'label' => 'Austintown', 'url' => ss_link( 'Austintown' ) ),
	array( 'label' => 'Salem', 'url' => ss_link( 'Salem' ) ), array( 'label' => 'Lowellville', 'url' => ss_link( 'Lowellville' ) ), array( 'label' => 'South Range / N. Lima', 'url' => ss_link( 'SouthRange' ) ),
) );
$ss_futility = ss_nav_items( 'ss_footer_utility', array(
	array( 'label' => 'About', 'url' => ss_link( 'About' ) ), array( 'label' => 'Reviews', 'url' => ss_link( 'Reviews' ) ), array( 'label' => 'Gallery', 'url' => ss_link( 'Gallery' ) ),
	array( 'label' => 'FAQ', 'url' => ss_link( 'FAQ' ) ), array( 'label' => 'Financing', 'url' => ss_link( 'Financing' ) ), array( 'label' => 'Contact', 'url' => ss_link( 'Contact' ) ),
) );
$ss_badges = array( 'Since 2008', 'WQA Certified', 'Water-Right® Dealer', 'Made in USA' );
if ( ss_acf_active() ) {
	$rows = get_field( 'footer_badges', 'option' );
	if ( is_array( $rows ) && $rows ) { $ss_badges = array_map( function ( $r ) { return $r['text'] ?? ''; }, $rows ); }
}
?>
	</main><!-- #ss-main -->

	<footer class="ss-footer">
		<div class="ss-wrap ss-footer-grid">
			<div>
				<img class="ss-footer__logo" src="<?php echo esc_url( $brand['logo'] ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ?: 'Savanna Springs' ); ?>">
				<div class="ss-foot-addr"><?php echo ss_icon( 'mapPin', array( 'size' => 17, 'color' => 'var(--sun-400)' ) ); ?> <span><?php echo esc_html( $brand['address'] ); ?></span></div>
				<a class="ss-foot-phone" href="tel:<?php echo esc_attr( $brand['phone_tel'] ); ?>"><?php echo ss_icon( 'phone', array( 'size' => 17, 'color' => 'var(--sun-400)' ) ); ?> <?php echo esc_html( $brand['phone'] ); ?></a>
				<a class="ss-foot-mail" href="mailto:<?php echo esc_attr( $brand['email'] ); ?>"><?php echo ss_icon( 'mail', array( 'size' => 16, 'color' => 'var(--sun-400)' ) ); ?> <?php echo esc_html( $brand['email'] ); ?></a>
				<div class="ss-foot-badges">
					<?php foreach ( $ss_badges as $b ) : ?>
						<span class="ss-foot-badge"><?php echo ss_icon( 'badgeCheck', array( 'size' => 13, 'color' => 'var(--sun-400)' ) ); ?> <?php echo esc_html( $b ); ?></span>
					<?php endforeach; ?>
				</div>
				<p class="ss-foot-tag"><?php echo esc_html( $brand['tagline'] ); ?></p>
				<?php if ( $brand['facebook'] || $brand['instagram'] ) : ?>
					<div class="ss-foot-social">
						<?php if ( $brand['facebook'] ) : ?><a href="<?php echo esc_url( $brand['facebook'] ); ?>" aria-label="Facebook" target="_blank" rel="noopener"><?php echo ss_icon( 'facebook', array( 'size' => 18 ) ); ?></a><?php endif; ?>
						<?php if ( $brand['instagram'] ) : ?><a href="<?php echo esc_url( $brand['instagram'] ); ?>" aria-label="Instagram" target="_blank" rel="noopener"><?php echo ss_icon( 'instagram', array( 'size' => 18 ) ); ?></a><?php endif; ?>
					</div>
				<?php endif; ?>
			</div>

			<div class="ss-foot-col">
				<h4>Solutions</h4>
				<?php foreach ( $ss_solutions as $l ) : ?><a href="<?php echo esc_url( $l['url'] ); ?>"><?php echo esc_html( $l['label'] ); ?></a><?php endforeach; ?>
			</div>
			<div class="ss-foot-col">
				<h4>Products</h4>
				<?php foreach ( $ss_fproducts as $l ) : ?><a href="<?php echo esc_url( $l['url'] ); ?>"><?php echo esc_html( $l['label'] ); ?></a><?php endforeach; ?>
			</div>
			<div class="ss-foot-col">
				<h4>Service Areas</h4>
				<?php foreach ( $ss_fcities as $l ) : ?><a href="<?php echo esc_url( $l['url'] ); ?>"><?php echo esc_html( $l['label'] ); ?></a><?php endforeach; ?>
			</div>
		</div>

		<div class="ss-foot-bottom">
			<div class="ss-wrap">
				<span>&copy; <?php echo esc_html( date( 'Y' ) ); ?> <?php echo esc_html( get_bloginfo( 'name' ) ?: 'Savanna Springs Water Solutions' ); ?>. Family owned since 2008.</span>
				<span class="ss-foot-util">
					<?php foreach ( $ss_futility as $l ) : ?><a href="<?php echo esc_url( $l['url'] ); ?>"><?php echo esc_html( $l['label'] ); ?></a><?php endforeach; ?>
				</span>
			</div>
		</div>
	</footer>

</div><!-- #Wrapper -->
<?php wp_footer(); ?>
</body>
</html>
