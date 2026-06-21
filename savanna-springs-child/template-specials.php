<?php
/**
 * Template Name: SS Specials
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();

$offers = ss_pf_repeater( 'specials_offers', array(
	array( 'refresh', 'One month free rent', 'Rent an Impression Plus® softener and get your first month of rent free.', 'On softener rentals' ),
	array( 'truck', 'One year of free salt', 'Buy a qualifying Water-Right® softener and we’ll deliver a year of salt — free.', 'With softener purchase' ),
	array( 'droplet', 'RO for pennies a day', 'Bottle-quality reverse-osmosis drinking water — one month free for a limited time.', 'On RO rentals' ),
	array( 'dollarSign', '6 months no interest', 'Flexible financing to spread the cost of better water across your budget.', 'Financing available' ),
), function ( $r ) { return array( $r['icon'] ?? 'refresh', $r['title'] ?? '', $r['body'] ?? '', $r['tag'] ?? '' ); } );
?>
<section class="ss-band-sun">
	<div class="ss-wrap" style="padding-top:54px;padding-bottom:56px;text-align:center">
		<div class="ss-eyebrow" style="margin-bottom:12px"><?php echo esc_html( ss_pf( 'specials_eyebrow', 'Specials & financing' ) ); ?></div>
		<h1 style="font-weight:800;font-size:48px;color:var(--navy-900);letter-spacing:-.025em"><?php echo esc_html( ss_pf( 'specials_h1', 'Better water, made affordable' ) ); ?></h1>
		<p style="font-size:18px;color:var(--navy-800);max-width:600px;margin:16px auto 0;line-height:1.6"><?php echo esc_html( ss_pf( 'specials_sub', 'Current offers to lower the cost of getting your water right. Ask about them on your free in-home water test.' ) ); ?></p>
	</div>
</section>

<section class="ss-wrap ss-section">
	<div class="ss-grid ss-grid-2">
		<?php foreach ( $offers as $o ) : ?>
			<div class="ss-card" style="display:flex;gap:20px;align-items:flex-start">
				<div class="ss-tile ss-tile--fill-navy" style="width:60px;height:60px"><?php echo ss_icon( $o[0], array( 'size' => 30, 'color' => 'var(--sun-400)' ) ); ?></div>
				<div>
					<span class="ss-pill-tag" style="margin-bottom:10px"><?php echo esc_html( $o[3] ); ?></span>
					<h3 style="font-size:22px;margin:10px 0 6px"><?php echo esc_html( $o[1] ); ?></h3>
					<p style="margin:0;font-size:15px;color:var(--text-body)"><?php echo esc_html( $o[2] ); ?></p>
				</div>
			</div>
		<?php endforeach; ?>
	</div>

	<div class="ss-cta-card" style="margin-top:34px">
		<div>
			<h2><?php echo esc_html( ss_pf( 'specials_cta_title', 'Not sure which is right for you?' ) ); ?></h2>
			<p><?php echo esc_html( ss_pf( 'specials_cta_body', 'Start with a free in-home water test — we’ll recommend the right system and the best offer for it.' ) ); ?></p>
		</div>
		<div style="display:flex;gap:12px;flex-wrap:wrap">
			<a class="ss-btn ss-btn--accent ss-btn--lg" href="<?php echo esc_url( ss_link( 'FreeTest' ) ); ?>">Get my free water test <?php echo ss_icon( 'arrowRight', array( 'size' => 20 ) ); ?></a>
			<a class="ss-btn ss-btn--outline-navy" href="<?php echo esc_url( ss_link( 'Financing' ) ); ?>">See financing</a>
		</div>
	</div>
</section>
<?php
get_footer();
