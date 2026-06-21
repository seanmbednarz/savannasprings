<?php
/**
 * Template Name: SS Reviews
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();
$reviews = ss_reviews_view();
?>
<section class="ss-band-navy">
	<div class="ss-blob ss-blob--spring" style="width:300px;height:300px;opacity:.26;right:-70px;top:-110px"></div>
	<div class="ss-wrap" style="padding-top:54px;padding-bottom:56px;text-align:center;position:relative">
		<div class="ss-eyebrow is-dark" style="margin-bottom:12px"><?php echo esc_html( ss_pf( 'reviews_eyebrow', 'Reviews' ) ); ?></div>
		<h1 style="font-weight:800;font-size:48px;color:#fff;letter-spacing:-.025em"><?php echo esc_html( ss_pf( 'reviews_h1', 'What our neighbors say' ) ); ?></h1>
		<p style="font-size:18px;color:var(--spring-100);max-width:600px;margin:16px auto 0;line-height:1.6"><?php echo esc_html( ss_pf( 'reviews_sub', 'Real homeowners across the Mahoning Valley and Western PA. We let our work — and our customers — do the talking.' ) ); ?></p>
	</div>
</section>

<section class="ss-wrap ss-section">
	<div class="ss-grid ss-grid-3">
		<?php foreach ( $reviews as $r ) : $initials = strtoupper( substr( $r['n'], 0, 1 ) ); ?>
			<div class="ss-review">
				<?php echo ss_icon( 'quote', array( 'size' => 30, 'color' => 'var(--spring-300)', 'fill' => 'var(--spring-100)' ) ); ?>
				<div class="ss-stars"><?php for ( $i = 0; $i < 5; $i++ ) { echo ss_icon( 'star', array( 'size' => 17, 'color' => 'var(--sun-400)', 'fill' => 'var(--sun-400)' ) ); } ?></div>
				<p>“<?php echo esc_html( $r['q'] ); ?>”</p>
				<div class="ss-review__by"><span class="ss-avatar"><?php echo esc_html( $initials ); ?></span><span class="ss-name"><?php echo esc_html( $r['n'] ); ?></span></div>
			</div>
		<?php endforeach; ?>
	</div>

	<?php $embed = ss_pf( 'reviews_embed', '' ); ?>
	<div class="ss-card" style="margin-top:34px;text-align:center;padding:40px">
		<h2 style="font-size:24px;margin-bottom:8px"><?php echo esc_html( ss_pf( 'reviews_embed_title', 'See all our Google reviews' ) ); ?></h2>
		<p style="color:var(--text-body);margin-bottom:20px"><?php echo esc_html( ss_pf( 'reviews_embed_body', 'Drop your Elfsight Google Reviews widget here to show live, up-to-date ratings.' ) ); ?></p>
		<?php if ( $embed ) : ?>
			<div class="ss-reviews-embed"><?php echo $embed; // phpcs:ignore — trusted admin embed code ?></div>
		<?php else : ?>
			<div class="elfsight-app-placeholder" style="color:var(--text-muted);font-family:var(--font-display);font-weight:600">[ Paste your Elfsight reviews embed in the page's "Reviews embed code" field ]</div>
		<?php endif; ?>
	</div>
</section>

<?php
ss_free_water_test();
get_footer();
