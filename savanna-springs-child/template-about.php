<?php
/**
 * Template Name: SS About
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();

$values = array(
	array( 'home', 'Family first', 'Named after our daughter Savannah. We treat your home like our own — honest advice, no pressure.' ),
	array( 'award', 'Built to last', 'A proud Water-Right® authorized dealer installing American-made, custom-built systems.' ),
	array( 'shieldCheck', 'Licensed & certified', 'Ohio EPA-licensed operators, WQA certified, with 35+ years of combined experience.' ),
	array( 'wrench', 'Here for the long haul', 'We service all makes and models, deliver salt and water, and stand behind our work.' ),
);
$stats = array( array( '2008', 'Family owned since' ), array( '35+ yrs', 'Combined experience' ), array( '20-yr', 'Warranties available' ), array( 'EPA', 'Licensed operators' ) );
?>
<section class="ss-band-navy">
	<div class="ss-blob ss-blob--spring" style="width:300px;height:300px;opacity:.26;right:-70px;top:-110px"></div>
	<div class="ss-wrap" style="padding-top:54px;padding-bottom:56px;text-align:center;position:relative">
		<div class="ss-eyebrow is-dark" style="margin-bottom:12px">About us</div>
		<h1 style="font-weight:800;font-size:48px;color:#fff;letter-spacing:-.025em">Your local, family-owned water team</h1>
		<p style="font-size:18px;color:var(--spring-100);max-width:640px;margin:16px auto 0;line-height:1.6">Since 2008, Savanna Springs has helped families and businesses across the Mahoning Valley and Western PA get better water — diagnosed honestly and fixed for good.</p>
	</div>
</section>

<section class="ss-wrap ss-section">
	<div class="ss-grid ss-grid-2" style="align-items:center">
		<div>
			<div class="ss-eyebrow" style="margin-bottom:10px">Our story</div>
			<h2 style="font-size:34px;margin-bottom:14px">Named after our daughter, run like a family</h2>
			<p style="font-size:17px;line-height:1.7;color:var(--navy-900);margin-bottom:14px">Savanna Springs Water Solutions started in 2008 with a simple idea: treat people honestly, fix the real problem, and stand behind the work. We named the company after our daughter, Savannah — and we’ve treated every customer like part of the family ever since.</p>
			<p style="font-size:17px;line-height:1.7;color:var(--navy-900)">Today we’re a proud Water-Right® authorized dealer with Ohio EPA-licensed operators and more than 35 years of combined experience. We sell, service and rent custom-built, American-made systems — and we service all makes and models, whoever installed them.</p>
		</div>
		<div class="ss-card" style="padding:36px">
			<div class="ss-stats" style="border-top:none;padding-top:0;margin-top:0;gap:32px">
				<?php foreach ( $stats as $s ) : ?>
					<div class="ss-stat"><div class="ss-stat__n"><?php echo esc_html( $s[0] ); ?></div><div class="ss-stat__l"><?php echo esc_html( $s[1] ); ?></div></div>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>

<section class="ss-band-water">
	<div class="ss-wrap ss-section">
		<?php ss_section_head( 'What we stand for', 'A few things we never compromise on' ); ?>
		<div class="ss-grid ss-grid-4" style="margin-top:46px">
			<?php foreach ( $values as $v ) : ?>
				<div class="ss-why">
					<div class="ss-tile ss-tile--navy"><?php echo ss_icon( $v[0], array( 'size' => 27, 'color' => 'var(--navy-700)' ) ); ?></div>
					<h3><?php echo esc_html( $v[1] ); ?></h3>
					<p><?php echo esc_html( $v[2] ); ?></p>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<?php
ss_reviews_block( 3 );
ss_free_water_test();
get_footer();
