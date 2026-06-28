<?php
/**
 * Generic archive template (blog / category / date archives).
 *
 * @package savanna-springs
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();
?>
<section class="ss-band-navy">
	<div class="ss-blob ss-blob--spring" style="width:300px;height:300px;opacity:.26;right:-70px;top:-110px"></div>
	<div class="ss-wrap" style="padding-top:54px;padding-bottom:56px;text-align:center;position:relative">
		<h1 style="font-weight:800;font-size:44px;color:#fff;letter-spacing:-.025em"><?php echo wp_kses_post( get_the_archive_title() ); ?></h1>
		<?php $ss_desc = get_the_archive_description(); ?>
		<?php if ( $ss_desc ) : ?><p style="font-size:18px;color:var(--spring-100);max-width:600px;margin:16px auto 0;line-height:1.6"><?php echo wp_kses_post( $ss_desc ); ?></p><?php endif; ?>
	</div>
</section>

<section class="ss-wrap ss-section">
	<?php if ( have_posts() ) : ?>
		<div class="ss-grid ss-grid-3">
			<?php while ( have_posts() ) : the_post(); ?>
				<a class="ss-card ss-card--hover" href="<?php the_permalink(); ?>" style="height:100%">
					<?php if ( has_post_thumbnail() ) { echo ss_photo_header( get_the_post_thumbnail_url( get_the_ID(), 'large' ), get_the_title() ); } ?>
					<h3><?php the_title(); ?></h3>
					<p><?php echo esc_html( wp_trim_words( get_the_excerpt(), 22 ) ); ?></p>
					<span class="ss-arrowlink" style="margin-top:14px">Read more <?php echo ss_icon( 'arrowRight', array( 'size' => 16, 'color' => 'var(--spring-700)' ) ); ?></span>
				</a>
			<?php endwhile; ?>
		</div>
		<div style="margin-top:34px;text-align:center"><?php the_posts_pagination( array( 'mid_size' => 1 ) ); ?></div>
	<?php else : ?>
		<p style="text-align:center;color:var(--text-body)">No posts found.</p>
	<?php endif; ?>
</section>
<?php
get_footer();
