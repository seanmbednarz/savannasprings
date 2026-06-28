<?php
/**
 * Compatibility shim for a stray "templateabout.php" (no hyphen) left on the
 * server by an early manual upload — an existing page (the About page) was
 * assigned to it. Deploying this clean version overwrites the stale file (which
 * still called the removed ss_use_builder()) and simply delegates to the real
 * SS About template, so the page renders correctly.
 *
 * Intentionally NO "Template Name" header, so it does not appear as a duplicate
 * "SS About" entry in the page-template dropdown. Once the About page is moved
 * back onto template-about.php (via ?ss_reseed=1), nothing references this file.
 *
 * @package savanna-springs
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

load_template( get_stylesheet_directory() . '/template-about.php' );
