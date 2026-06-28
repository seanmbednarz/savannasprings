<?php
/**
 * 404 (not found) template.
 *
 * @package savanna-springs
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();
?>
<section class="ss-wrap ss-section" style="text-align:center;min-height:46vh;display:flex;flex-direction:column;align-items:center;justify-content:center">
	<div class="ss-eyebrow" style="margin-bottom:10px;color:var(--navy-700)">Error 404</div>
	<h1 style="font-weight:800;font-size:44px;letter-spacing:-.02em;margin-bottom:12px">We couldn&rsquo;t find that page</h1>
	<p style="font-size:18px;color:var(--text-body);max-width:520px;margin:0 auto 26px;line-height:1.6">The page may have moved or no longer exists. Let&rsquo;s get you back to better water.</p>
	<div class="ss-hero-actions" style="justify-content:center">
		<a class="ss-btn ss-btn--accent ss-btn--lg" href="<?php echo esc_url( home_url( '/' ) ); ?>">Back to home <?php echo ss_icon( 'arrowRight', array( 'size' => 20 ) ); ?></a>
		<a class="ss-btn ss-btn--outline ss-btn--lg" href="<?php echo esc_url( ss_link( 'Contact' ) ); ?>">Contact us</a>
	</div>
</section>
<?php
get_footer();
