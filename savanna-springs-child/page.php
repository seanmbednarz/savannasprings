<?php
/**
 * Default page template — renders the page's own editor / BeBuilder content
 * inside the branded Savanna Springs header & footer. Used for any page set to
 * the "Default template" (and as the base for BeBuilder-built pages).
 *
 * Always calls the_content() so BeBuilder/Gutenberg can inject their editing
 * canvas and front-end output here.
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();

if ( have_posts() ) :
	while ( have_posts() ) : the_post();
		the_content();
	endwhile;
endif;

get_footer();
