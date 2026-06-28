<?php
/**
 * Search results template.
 *
 * @package savanna-springs
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();
?>
<section class="ss-band-navy">
	<div class="ss-blob ss-blob--spring" style="width:300px;height:300px;opacity:.26;right:-70px;top:-110px"></div>
	<div class="ss-wrap" style="padding-top:54px;padding-bottom:56px;text-align:center;position:relative">
		<div class="ss-eyebrow is-dark" style="margin-bottom:12px">Search</div>
		<h1 style="font-weight:800;font-size:40px;color:#fff;letter-spacing:-.025em">Results for &ldquo;<?php echo esc_html( get_search_query() ); ?>&rdquo;</h1>
	</div>
</section>

<section class="ss-wrap ss-section" style="max-width:860px">
	<?php if ( have_posts() ) : ?>
		<?php while ( have_posts() ) : the_post(); ?>
			<article class="ss-card" style="margin-bottom:18px">
				<a href="<?php the_permalink(); ?>"><h3 style="margin-bottom:6px"><?php the_title(); ?></h3></a>
				<p style="margin:0;color:var(--text-body)"><?php echo esc_html( wp_trim_words( get_the_excerpt(), 32 ) ); ?></p>
				<span class="ss-arrowlink" style="margin-top:12px">View <?php echo ss_icon( 'arrowRight', array( 'size' => 16, 'color' => 'var(--spring-700)' ) ); ?></span>
			</article>
		<?php endwhile; ?>
		<div style="margin-top:30px;text-align:center"><?php the_posts_pagination( array( 'mid_size' => 1 ) ); ?></div>
	<?php else : ?>
		<p style="text-align:center;color:var(--text-body)">No results found. Try a different search, or <a href="<?php echo esc_url( ss_link( 'Contact' ) ); ?>">contact us</a>.</p>
	<?php endif; ?>
</section>
<?php
get_footer();
