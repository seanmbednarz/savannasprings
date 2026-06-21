<?php
/**
 * Branded site footer.
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

$ss_solutions = array(
	array( 'Rotten-egg smell', 'Smelly' ), array( 'Hard water & scale', 'HardWater' ),
	array( 'Rust & orange stains', 'Rust' ), array( 'Bad-tasting water', 'Taste' ),
	array( 'Well water problems', 'Well' ), array( 'Chlorine taste & smell', 'Chlorine' ),
);
$ss_fproducts = array(
	array( 'Water softeners', 'Softeners' ), array( 'Reverse osmosis', 'RO' ),
	array( 'Iron & sulfur filters', 'IronSulfur' ), array( 'Whole-house filtration', 'WholeHouse' ),
	array( 'Salt delivery', 'Salt' ), array( 'Equipment rentals', 'Rentals' ),
);
$ss_fcities = array(
	array( 'Youngstown', 'Youngstown' ), array( 'Boardman', 'Boardman' ), array( 'Poland', 'Poland' ),
	array( 'Canfield', 'Canfield' ), array( 'Struthers', 'Struthers' ), array( 'Austintown', 'Austintown' ),
	array( 'Salem', 'Salem' ), array( 'Lowellville', 'Lowellville' ), array( 'South Range / N. Lima', 'SouthRange' ),
);
$ss_badges = array( 'Since 2008', 'WQA Certified', 'Water-Right® Dealer', 'Made in USA' );
?>
	</main><!-- #ss-main -->

	<footer class="ss-footer">
		<div class="ss-wrap ss-footer-grid">
			<div>
				<img class="ss-footer__logo" src="<?php echo esc_url( SS_CHILD_URI . '/assets/logo-savanna-springs.png' ); ?>" alt="Savanna Springs">
				<div class="ss-foot-addr"><?php echo ss_icon( 'mapPin', array( 'size' => 17, 'color' => 'var(--sun-400)' ) ); ?> <span>875 River Road, Lowellville, OH 44436</span></div>
				<a class="ss-foot-phone" href="tel:18777501420"><?php echo ss_icon( 'phone', array( 'size' => 17, 'color' => 'var(--sun-400)' ) ); ?> (877) 750-1420</a>
				<a class="ss-foot-mail" href="mailto:info@savannaspringswater.com"><?php echo ss_icon( 'mail', array( 'size' => 16, 'color' => 'var(--sun-400)' ) ); ?> info@savannaspringswater.com</a>
				<div class="ss-foot-badges">
					<?php foreach ( $ss_badges as $b ) : ?>
						<span class="ss-foot-badge"><?php echo ss_icon( 'badgeCheck', array( 'size' => 13, 'color' => 'var(--sun-400)' ) ); ?> <?php echo esc_html( $b ); ?></span>
					<?php endforeach; ?>
				</div>
				<p class="ss-foot-tag">We make one thing perfectly clear…</p>
			</div>

			<div class="ss-foot-col">
				<h4>Solutions</h4>
				<?php foreach ( $ss_solutions as $l ) : ?><a href="<?php echo esc_url( ss_link( $l[1] ) ); ?>"><?php echo esc_html( $l[0] ); ?></a><?php endforeach; ?>
			</div>
			<div class="ss-foot-col">
				<h4>Products</h4>
				<?php foreach ( $ss_fproducts as $l ) : ?><a href="<?php echo esc_url( ss_link( $l[1] ) ); ?>"><?php echo esc_html( $l[0] ); ?></a><?php endforeach; ?>
			</div>
			<div class="ss-foot-col">
				<h4>Service Areas</h4>
				<?php foreach ( $ss_fcities as $l ) : ?><a href="<?php echo esc_url( ss_link( $l[1] ) ); ?>"><?php echo esc_html( $l[0] ); ?></a><?php endforeach; ?>
			</div>
		</div>

		<div class="ss-foot-bottom">
			<div class="ss-wrap">
				<span>&copy; <?php echo esc_html( date( 'Y' ) ); ?> Savanna Springs Water Solutions. Family owned since 2008.</span>
				<span class="ss-foot-util">
					<a href="<?php echo esc_url( ss_link( 'About' ) ); ?>">About</a>
					<a href="<?php echo esc_url( ss_link( 'Reviews' ) ); ?>">Reviews</a>
					<a href="<?php echo esc_url( ss_link( 'Gallery' ) ); ?>">Gallery</a>
					<a href="<?php echo esc_url( ss_link( 'FAQ' ) ); ?>">FAQ</a>
					<a href="<?php echo esc_url( ss_link( 'Financing' ) ); ?>">Financing</a>
					<a href="<?php echo esc_url( ss_link( 'Contact' ) ); ?>">Contact</a>
				</span>
			</div>
		</div>
	</footer>

</div><!-- #Wrapper -->
<?php wp_footer(); ?>
</body>
</html>
