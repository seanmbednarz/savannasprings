<?php
/**
 * Template Name: SS Free Water Test
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();

if ( ss_use_builder() ) { ss_render_builder_content(); get_footer(); return; }
?>
<section class="ss-band-surface">
	<div class="ss-wrap" style="padding-top:46px;padding-bottom:36px;text-align:center">
		<div class="ss-eyebrow" style="margin-bottom:10px"><?php echo esc_html( ss_pf( 'freetest_eyebrow', 'No cost · No pressure' ) ); ?></div>
		<h1 style="font-weight:800;font-size:46px;color:var(--navy-900);letter-spacing:-.025em"><?php echo esc_html( ss_pf( 'freetest_h1', 'Your free in-home water test' ) ); ?></h1>
		<p style="font-size:17.5px;line-height:1.6;color:var(--text-body);max-width:600px;margin:14px auto 0"><?php echo esc_html( ss_pf( 'freetest_sub', "Find out exactly what's in your water. A licensed operator tests it on-site and recommends the right fix — with zero obligation." ) ); ?></p>
	</div>
</section>
<?php
ss_free_water_test();
get_footer();
