<?php
/**
 * Template Name: SS FAQ
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();

if ( ss_use_builder() ) { ss_render_builder_content(); get_footer(); return; }
$faqs = ss_faqs_view();
?>
<section class="ss-band-navy">
	<?php ss_hero_cover( ss_image_url( ss_pf( "page_hero_image", "" ) ) ); ?>
	<div class="ss-blob ss-blob--spring" style="width:300px;height:300px;opacity:.26;right:-70px;top:-110px"></div>
	<div class="ss-wrap" style="padding-top:54px;padding-bottom:56px;text-align:center;position:relative">
		<div class="ss-eyebrow is-dark" style="margin-bottom:12px"><?php echo esc_html( ss_pf( 'faq_eyebrow', 'FAQ' ) ); ?></div>
		<h1 style="font-weight:800;font-size:48px;color:#fff;letter-spacing:-.025em"><?php echo esc_html( ss_pf( 'faq_h1', 'Water questions, answered' ) ); ?></h1>
		<p style="font-size:18px;color:var(--spring-100);max-width:600px;margin:16px auto 0;line-height:1.6"><?php echo esc_html( ss_pf( 'faq_sub', 'Hard water, odor, salt, septic systems and more. Still not sure? A free in-home test settles it.' ) ); ?></p>
	</div>
</section>

<section style="max-width:860px;margin:0 auto;padding:64px 24px">
	<div style="display:flex;flex-direction:column;gap:14px" data-ss-accordion>
		<?php foreach ( $faqs as $i => $f ) : ?>
			<div class="ss-faq-item<?php echo 0 === $i ? ' is-open' : ''; ?>">
				<button class="ss-faq-q" type="button" data-ss-faq-toggle aria-expanded="<?php echo 0 === $i ? 'true' : 'false'; ?>">
					<span class="q"><?php echo esc_html( $f['q'] ); ?></span>
					<span class="ss-faq-chevron"><?php echo ss_icon( 'chevronDown', array( 'size' => 18, 'color' => 'var(--navy-700)' ) ); ?></span>
				</button>
				<div class="ss-faq-a">
					<p><?php echo esc_html( $f['a'] ); ?></p>
					<?php
					$faq_url   = ! empty( $f['link_url'] ) ? $f['link_url'] : ss_link( $f['link'][0] );
					$faq_label = isset( $f['link'][1] ) ? $f['link'][1] : '';
					if ( $faq_label ) : ?>
						<a class="ss-arrowlink" href="<?php echo esc_url( $faq_url ); ?>"><?php echo esc_html( $faq_label ); ?> <?php echo ss_icon( 'arrowRight', array( 'size' => 16, 'color' => 'var(--spring-700)' ) ); ?></a>
					<?php endif; ?>
				</div>
			</div>
		<?php endforeach; ?>
	</div>

	<div class="ss-cta-card" style="margin-top:40px">
		<div>
			<h2><?php echo esc_html( ss_pf( 'faq_cta_title', 'Still have a question?' ) ); ?></h2>
			<p><?php echo esc_html( ss_pf( 'faq_cta_body', 'Call (877) 750-1420 or book a free in-home water test.' ) ); ?></p>
		</div>
		<a class="ss-btn ss-btn--accent ss-btn--lg" href="<?php echo esc_url( ss_link( 'FreeTest' ) ); ?>">Get my free water test <?php echo ss_icon( 'arrowRight', array( 'size' => 20 ) ); ?></a>
	</div>
</section>
<?php
get_footer();
