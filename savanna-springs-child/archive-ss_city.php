<?php
/**
 * Service Areas hub (archive).
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();
$cities = ss_cities();
?>
<section class="ss-band-navy">
	<div class="ss-blob ss-blob--spring" style="width:300px;height:300px;opacity:.26;right:-70px;top:-110px"></div>
	<div class="ss-wrap" style="padding-top:54px;padding-bottom:58px;text-align:center;position:relative">
		<div class="ss-eyebrow is-dark" style="margin-bottom:12px">Service areas</div>
		<h1 style="font-weight:800;font-size:50px;color:#fff;letter-spacing:-.025em">Your local water team across the Valley</h1>
		<p style="font-size:18px;color:var(--spring-100);max-width:620px;margin:16px auto 0;line-height:1.6">From our shop on River Road in Lowellville, we serve Mahoning, Columbiana &amp; Trumbull counties plus Western PA — city water and private wells alike.</p>
	</div>
</section>

<section class="ss-wrap ss-section">
	<div class="ss-grid ss-grid-3">
		<?php foreach ( ss_city_order() as $k ) : $c = $cities[ $k ]; ?>
			<a class="ss-card ss-card--hover" href="<?php echo esc_url( ss_link( $k ) ); ?>">
				<div style="display:flex;align-items:center;gap:14px">
					<div class="ss-tile ss-tile--water"><?php echo ss_icon( 'mapPin', array( 'size' => 26, 'color' => 'var(--spring-600)' ) ); ?></div>
					<div>
						<h3 style="font-size:19px"><?php echo esc_html( $c['city'] ); ?></h3>
						<div style="font-size:13px;color:var(--text-muted);font-family:var(--font-display);font-weight:600"><?php echo esc_html( $c['county'] ); ?> County · <?php echo esc_html( $c['zip'] ); ?></div>
					</div>
				</div>
				<p style="margin-top:14px"><?php echo esc_html( wp_trim_words( $c['lead'], 22 ) ); ?></p>
				<span class="ss-arrowlink" style="margin-top:14px">View <?php echo esc_html( $c['city'] ); ?> <?php echo ss_icon( 'arrowRight', array( 'size' => 16, 'color' => 'var(--spring-700)' ) ); ?></span>
			</a>
		<?php endforeach; ?>
	</div>
</section>

<?php
ss_how_it_works();
ss_free_water_test();
get_footer();
