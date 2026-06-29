<?php
/**
 * Products hub (archive).
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();
$products = ss_products();
?>
<section class="ss-band-navy">
	<div class="ss-blob ss-blob--spring" style="width:300px;height:300px;opacity:.26;right:-70px;top:-110px"></div>
	<div class="ss-wrap" style="padding-top:54px;padding-bottom:58px;text-align:center;position:relative">
		<div class="ss-eyebrow is-dark" style="margin-bottom:12px">Our products</div>
		<h1 style="font-weight:800;font-size:50px;color:#fff;letter-spacing:-.025em">American-made, built for your water</h1>
		<p style="font-size:18px;color:var(--spring-100);max-width:620px;margin:16px auto 0;line-height:1.6">Custom-built, made in the USA, and sized to your home — softeners, drinking water, well solutions, salt &amp; delivery. We service all makes and models.</p>
		<div style="margin-top:26px"><a class="ss-btn ss-btn--accent ss-btn--lg" href="<?php echo esc_url( ss_link( 'FreeTest' ) ); ?>">Get my free water test <?php echo ss_icon( 'arrowRight', array( 'size' => 20 ) ); ?></a></div>
	</div>
</section>

<section class="ss-wrap ss-section">
	<div class="ss-grid ss-grid-3">
		<?php foreach ( ss_product_order() as $k ) : $p = $products[ $k ]; $p_photo = ss_cpt_thumb( 'ss_product', isset( $p['slug'] ) ? $p['slug'] : '' ); ?>
			<a class="ss-card ss-card--hover" href="<?php echo esc_url( ss_link( $k ) ); ?>">
				<?php if ( $p_photo ) : echo ss_photo_header( $p_photo, $p['label'] ); else : ?>
					<div class="ss-tile ss-tile--<?php echo esc_attr( $p['color'] ); ?>" style="margin-bottom:18px"><?php echo ss_icon( $p['icon'], array( 'size' => 28 ) ); ?></div>
				<?php endif; ?>
				<h3><?php echo esc_html( $p['label'] ); ?></h3>
				<p><?php echo esc_html( $p['blurb'] ); ?></p>
				<span class="ss-arrowlink" style="margin-top:16px">Learn more <?php echo ss_icon( 'arrowRight', array( 'size' => 16, 'color' => 'var(--spring-700)' ) ); ?></span>
			</a>
		<?php endforeach; ?>
	</div>
</section>

<?php
ss_free_water_test();
get_footer();
