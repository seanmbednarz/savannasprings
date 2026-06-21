<?php
/**
 * Default page template — renders the page's own editor / BeBuilder content
 * inside the branded Savanna Springs header & footer. Used for any page set to
 * the "Default template" (and as the base for BeBuilder-built pages).
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();

if ( have_posts() ) :
	while ( have_posts() ) : the_post();
		$ss_content = trim( get_the_content() );
		if ( '' !== $ss_content ) {
			the_content();
		} else {
			// Empty default page — keep a tidy titled shell so it isn't blank.
			echo '<section class="ss-wrap ss-section"><h1 style="font-size:40px;margin-bottom:16px">' . esc_html( get_the_title() ) . '</h1></section>';
		}
	endwhile;
endif;

get_footer();
