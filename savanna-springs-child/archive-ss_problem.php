<?php
/**
 * Water Problems hub (archive).
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();
?>
<section class="ss-band-navy">
	<div class="ss-blob ss-blob--spring" style="width:300px;height:300px;opacity:.26;right:-70px;top:-110px"></div>
	<div class="ss-wrap" style="padding-top:54px;padding-bottom:58px;text-align:center;position:relative">
		<div class="ss-eyebrow is-dark" style="margin-bottom:12px">Water problems</div>
		<h1 style="font-weight:800;font-size:50px;color:#fff;letter-spacing:-.025em">What's wrong with your water?</h1>
		<p style="font-size:18px;color:var(--spring-100);max-width:620px;margin:16px auto 0;line-height:1.6">Smelly, hard, rusty, cloudy, or bad-tasting — we diagnose the real cause and fix it for good. Find your problem below, or start with a free in-home water test.</p>
		<div style="margin-top:26px"><a class="ss-btn ss-btn--accent ss-btn--lg" href="<?php echo esc_url( ss_link( 'FreeTest' ) ); ?>">Get my free water test <?php echo ss_icon( 'arrowRight', array( 'size' => 20 ) ); ?></a></div>
	</div>
</section>

<?php
ss_problem_picker( 'Pick your problem', 'Eight problems, one local team', 'Each one custom-diagnosed and fixed at the source — for city water and private wells alike.', ss_problem_order() );
ss_how_it_works();
ss_free_water_test();
get_footer();
