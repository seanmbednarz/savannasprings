<?php
/**
 * Template Name: SS Gallery
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();

$groups = array(
	array( 'Rust & iron staining', 'Rust', array( 'Stained tub → spotless', 'Orange toilet tank → clear', 'Rusty laundry → bright' ) ),
	array( 'Hard water & scale', 'HardWater', array( 'Crusty faucet → clean', 'Spotty glassware → spot-free', 'Scaled heater element → protected' ) ),
	array( 'Well water installs', 'Well', array( 'Sanitizer Plus install', 'Basement system tidy-up', 'Twin-tank setup' ) ),
);
?>
<section class="ss-band-navy">
	<div class="ss-blob ss-blob--spring" style="width:300px;height:300px;opacity:.26;right:-70px;top:-110px"></div>
	<div class="ss-wrap" style="padding-top:54px;padding-bottom:56px;text-align:center;position:relative">
		<div class="ss-eyebrow is-dark" style="margin-bottom:12px">Gallery</div>
		<h1 style="font-weight:800;font-size:48px;color:#fff;letter-spacing:-.025em">Before &amp; after, around the Valley</h1>
		<p style="font-size:18px;color:var(--spring-100);max-width:600px;margin:16px auto 0;line-height:1.6">Real homes, real water problems, real fixes. Swap these placeholders for your own customer photos.</p>
	</div>
</section>

<?php foreach ( $groups as $g ) :
	$prob = ss_problems()[ $g[1] ];
	?>
	<section class="ss-wrap ss-section" style="padding-bottom:24px">
		<div style="display:flex;align-items:center;gap:14px;margin-bottom:24px">
			<div class="ss-tile ss-tile--<?php echo esc_attr( $prob['color'] ); ?>"><?php echo ss_icon( $prob['icon'], array( 'size' => 26 ) ); ?></div>
			<h2 style="font-size:28px"><?php echo esc_html( $g[0] ); ?></h2>
		</div>
		<div class="ss-grid ss-grid-3">
			<?php foreach ( $g[2] as $label ) : ?>
				<div class="ss-card" style="padding:0;overflow:hidden">
					<div style="aspect-ratio:4/3;background:linear-gradient(160deg,var(--navy-50),var(--spring-100));display:flex;align-items:center;justify-content:center;color:var(--navy-400);font-family:ui-monospace,monospace;font-size:13px">before / after</div>
					<div style="padding:16px 18px"><strong style="font-family:var(--font-display);color:var(--navy-900)"><?php echo esc_html( $label ); ?></strong></div>
				</div>
			<?php endforeach; ?>
		</div>
	</section>
<?php endforeach; ?>

<?php
ss_free_water_test();
get_footer();
