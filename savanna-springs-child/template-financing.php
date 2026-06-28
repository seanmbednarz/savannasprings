<?php
/**
 * Template Name: SS Financing
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();

if ( ss_use_builder() ) { ss_render_builder_content(); get_footer(); return; }

$tiers = ss_pf_repeater( 'financing_tiers', array(
	array( '6 months', 'No interest', 'Pay it off within 6 months and pay zero interest. Great for getting started now.' ),
	array( '12 months', 'Low monthly', 'Spread the cost across a year with affordable monthly payments.' ),
	array( '24 months', 'Special financing', 'Extended terms on qualifying systems — ask about current promotions.' ),
	array( 'Rental', 'One month free', 'Not ready to buy? Rent a softener or RO system with your first month free.' ),
	array( 'Custom', 'Built to budget', 'We right-size the system to your home and your budget — no overselling.' ),
), function ( $r ) { return array( $r['tag'] ?? '', $r['title'] ?? '', $r['body'] ?? '' ); } );
?>
<section class="ss-band-sun">
	<div class="ss-wrap" style="padding-top:54px;padding-bottom:56px;text-align:center">
		<div class="ss-eyebrow" style="margin-bottom:12px"><?php echo esc_html( ss_pf( 'financing_eyebrow', 'Financing' ) ); ?></div>
		<h1 style="font-weight:800;font-size:48px;color:var(--navy-900);letter-spacing:-.025em"><?php echo esc_html( ss_pf( 'financing_h1', 'Flexible ways to pay' ) ); ?></h1>
		<p style="font-size:18px;color:var(--navy-800);max-width:600px;margin:16px auto 0;line-height:1.6"><?php echo esc_html( ss_pf( 'financing_sub', 'Better water shouldn’t wait for the perfect month. Choose the option that fits your budget — including 6 months no interest.' ) ); ?></p>
	</div>
</section>

<section class="ss-wrap ss-section">
	<div class="ss-grid ss-grid-3">
		<?php foreach ( $tiers as $t ) : ?>
			<div class="ss-card">
				<span class="ss-pill-tag"><?php echo esc_html( $t[0] ); ?></span>
				<h3 style="font-size:22px;margin:14px 0 8px"><?php echo esc_html( $t[1] ); ?></h3>
				<p style="margin:0;font-size:15px;color:var(--text-body)"><?php echo esc_html( $t[2] ); ?></p>
			</div>
		<?php endforeach; ?>
		<div class="ss-card ss-band-water" style="display:flex;flex-direction:column;justify-content:center;align-items:flex-start;background:var(--surface-water)">
			<h3 style="font-size:20px;margin-bottom:8px"><?php echo esc_html( ss_pf( 'financing_apply_title', 'Ready to apply?' ) ); ?></h3>
			<p style="margin:0 0 18px;font-size:15px;color:var(--text-body)"><?php echo esc_html( ss_pf( 'financing_apply_body', 'Get pre-qualified or ask about terms on your free in-home water test.' ) ); ?></p>
			<a class="ss-btn ss-btn--accent" href="<?php echo esc_url( ss_link( 'FreeTest' ) ); ?>">Get my free water test <?php echo ss_icon( 'arrowRight', array( 'size' => 18 ) ); ?></a>
		</div>
	</div>
</section>
<?php
get_footer();
