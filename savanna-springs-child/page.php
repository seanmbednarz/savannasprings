<?php
/**
 * Generic page template (standalone fallback for pages without a custom SS template).
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
			<h1 style="font-weight:800;font-size:46px;color:#fff;letter-spacing:-.025em"><?php the_title(); ?></h1>
		</div>
	</section>

	<section class="ss-wrap ss-section">
		<div class="ss-richtext"><?php the_content(); ?></div>
	</section>
	<?php
endwhile;

get_footer();
