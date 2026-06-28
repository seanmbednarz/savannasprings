<?php
/**
 * Single post template (blog posts).
 *
 * @package savanna-springs
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();

while ( have_posts() ) :
	the_post();
	?>
	<section class="ss-band-navy">
		<div class="ss-blob ss-blob--spring" style="width:300px;height:300px;opacity:.26;right:-70px;top:-110px"></div>
		<div class="ss-wrap" style="padding-top:54px;padding-bottom:56px;text-align:center;position:relative">
			<div class="ss-eyebrow is-dark" style="margin-bottom:12px"><?php echo esc_html( get_the_date() ); ?></div>
			<h1 style="font-weight:800;font-size:42px;color:#fff;letter-spacing:-.025em;max-width:820px;margin:0 auto"><?php the_title(); ?></h1>
		</div>
	</section>

	<article class="ss-wrap ss-section" style="max-width:820px">
		<?php if ( has_post_thumbnail() ) : ?>
			<div style="margin-bottom:30px"><?php the_post_thumbnail( 'large', array( 'style' => 'border-radius:18px;width:100%;height:auto;display:block' ) ); ?></div>
		<?php endif; ?>
		<div class="ss-richtext"><?php the_content(); ?></div>
		<div style="margin-top:36px"><a class="ss-arrowlink" href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php echo ss_icon( 'arrowRight', array( 'size' => 16, 'color' => 'var(--spring-700)' ) ); ?> Back to home</a></div>
	</article>
	<?php
endwhile;

get_footer();
