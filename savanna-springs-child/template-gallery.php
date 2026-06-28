<?php
/**
 * Template Name: SS Gallery
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();

if ( ss_use_builder() ) { ss_render_builder_content(); get_footer(); return; }

// Groups: each has title, icon, color, and items (label + optional image).
$default_groups = array(
	array( 'title' => 'Rust & iron staining', 'icon' => 'flame', 'color' => 'orange', 'items' => array(
		array( 'label' => 'Stained tub → spotless', 'img' => '' ), array( 'label' => 'Orange toilet tank → clear', 'img' => '' ), array( 'label' => 'Rusty laundry → bright', 'img' => '' ) ) ),
	array( 'title' => 'Hard water & scale', 'icon' => 'droplet', 'color' => 'water', 'items' => array(
		array( 'label' => 'Crusty faucet → clean', 'img' => '' ), array( 'label' => 'Spotty glassware → spot-free', 'img' => '' ), array( 'label' => 'Scaled heater element → protected', 'img' => '' ) ) ),
	array( 'title' => 'Well water installs', 'icon' => 'home', 'color' => 'water', 'items' => array(
		array( 'label' => 'Sanitizer Plus install', 'img' => '' ), array( 'label' => 'Basement system tidy-up', 'img' => '' ), array( 'label' => 'Twin-tank setup', 'img' => '' ) ) ),
);

$groups = $default_groups;
if ( ss_acf_active() ) {
	$rows = get_field( 'gallery_groups', get_the_ID() );
	if ( is_array( $rows ) && $rows ) {
		$groups = array();
		foreach ( $rows as $r ) {
			$items = array();
			if ( ! empty( $r['items'] ) && is_array( $r['items'] ) ) {
				foreach ( $r['items'] as $it ) {
					$img = '';
					if ( ! empty( $it['image'] ) ) { $img = is_array( $it['image'] ) ? ( $it['image']['sizes']['large'] ?? $it['image']['url'] ?? '' ) : $it['image']; }
					$items[] = array( 'label' => $it['label'] ?? '', 'img' => $img );
				}
			}
			$groups[] = array( 'title' => $r['title'] ?? '', 'icon' => $r['icon'] ?? 'droplet', 'color' => $r['color'] ?? 'water', 'items' => $items );
		}
	}
}
?>
<section class="ss-band-navy">
	<?php ss_hero_cover( ss_image_url( ss_pf( "page_hero_image", "" ), 'full' ) ); ?>
	<div class="ss-blob ss-blob--spring" style="width:300px;height:300px;opacity:.26;right:-70px;top:-110px"></div>
	<div class="ss-wrap" style="padding-top:54px;padding-bottom:56px;text-align:center;position:relative">
		<div class="ss-eyebrow is-dark" style="margin-bottom:12px"><?php echo esc_html( ss_pf( 'gallery_eyebrow', 'Gallery' ) ); ?></div>
		<h1 style="font-weight:800;font-size:48px;color:#fff;letter-spacing:-.025em"><?php echo esc_html( ss_pf( 'gallery_h1', 'Before & after, around the Valley' ) ); ?></h1>
		<p style="font-size:18px;color:var(--spring-100);max-width:600px;margin:16px auto 0;line-height:1.6"><?php echo esc_html( ss_pf( 'gallery_sub', 'Real homes, real water problems, real fixes. Swap these placeholders for your own customer photos.' ) ); ?></p>
	</div>
</section>

<?php $ss_last = count( $groups ) - 1; foreach ( $groups as $ss_gi => $g ) : ?>
	<section class="ss-wrap ss-section" style="padding-top:40px;padding-bottom:<?php echo $ss_gi === $ss_last ? '8px' : '40px'; ?>">
		<div style="display:flex;align-items:center;gap:14px;margin-bottom:24px">
			<div class="ss-tile ss-tile--<?php echo esc_attr( $g['color'] ); ?>"><?php echo ss_icon( $g['icon'], array( 'size' => 26 ) ); ?></div>
			<h2 style="font-size:28px"><?php echo esc_html( $g['title'] ); ?></h2>
		</div>
		<div class="ss-grid ss-grid-3">
			<?php foreach ( $g['items'] as $item ) : ?>
				<div class="ss-card" style="padding:0;overflow:hidden">
					<?php if ( ! empty( $item['img'] ) ) : ?>
						<div style="aspect-ratio:4/3;background:#eef1f6"><img src="<?php echo esc_url( $item['img'] ); ?>" alt="<?php echo esc_attr( $item['label'] ); ?>" style="width:100%;height:100%;object-fit:cover"></div>
					<?php else : ?>
						<div style="aspect-ratio:4/3;background:linear-gradient(160deg,var(--navy-50),var(--spring-100));display:flex;align-items:center;justify-content:center;color:var(--navy-400);font-family:ui-monospace,monospace;font-size:13px">before / after</div>
					<?php endif; ?>
					<div style="padding:16px 18px"><strong style="font-family:var(--font-display);color:var(--navy-900)"><?php echo esc_html( $item['label'] ); ?></strong></div>
				</div>
			<?php endforeach; ?>
		</div>
	</section>
<?php endforeach; ?>

<?php
ss_free_water_test();
get_footer();
