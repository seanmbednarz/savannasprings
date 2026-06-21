<?php
/**
 * Single Service-Area (City) page.
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();

$c = ss_city_view( get_the_ID() );
if ( ! $c ) { echo '<section class="ss-wrap ss-section"><h1>Not found</h1></section>'; get_footer(); return; }
$cities = ss_cities();
?>

<!-- HERO -->
<section class="ss-page-hero ss-page-hero--split">
	<div class="ss-blob ss-blob--spring" style="width:300px;height:300px;opacity:.28;right:-70px;top:-110px"></div>
	<div class="ss-wrap">
		<div>
			<div class="ss-breadcrumb">
				<a href="<?php echo esc_url( ss_link( 'Home' ) ); ?>">Home</a><?php echo ss_icon( 'chevronRight', array( 'size' => 14, 'color' => 'var(--spring-300)' ) ); ?>
				<a href="<?php echo esc_url( ss_link( 'ServiceAreas' ) ); ?>">Service Areas</a><?php echo ss_icon( 'chevronRight', array( 'size' => 14, 'color' => 'var(--spring-300)' ) ); ?>
				<span class="is-current"><?php echo esc_html( $c['city'] ); ?></span>
			</div>
			<div class="ss-eyebrow is-dark"><?php echo esc_html( $c['county'] ); ?> County · ZIP <?php echo esc_html( $c['zip'] ); ?></div>
			<h1><?php echo esc_html( $c['h1'] ); ?></h1>
			<p><?php echo esc_html( $c['lead'] ); ?></p>
			<div class="ss-hero-actions">
				<a class="ss-btn ss-btn--accent ss-btn--lg" href="<?php echo esc_url( ss_link( 'FreeTest' ) ); ?>">Get my free water test <?php echo ss_icon( 'arrowRight', array( 'size' => 20 ) ); ?></a>
				<a class="ss-hero-phone" href="tel:18777501420"><span class="ss-phone-dot"><?php echo ss_icon( 'phone', array( 'size' => 19, 'color' => 'var(--sun-400)' ) ); ?></span> (877) 750-1420</a>
			</div>
		</div>
		<div><div class="ss-hero-icontile"><?php echo ss_icon( 'mapPin', array( 'size' => 78, 'color' => 'var(--sun-400)' ) ); ?></div></div>
	</div>
</section>

<!-- CONTEXT + MOST COMMON -->
<section class="ss-wrap ss-section">
	<div class="ss-grid ss-grid-2" style="align-items:start">
		<div>
			<div class="ss-eyebrow" style="margin-bottom:10px"><?php echo esc_html( $c['city'] ); ?> water, explained</div>
			<p style="font-size:17px;line-height:1.7;color:var(--navy-900)"><?php echo esc_html( $c['context'] ); ?></p>
		</div>
		<div class="ss-card">
			<h3 style="font-size:18px;margin-bottom:6px">Most common here</h3>
			<ul class="ss-list-check">
				<?php foreach ( $c['mostCommon'] as $mc ) : ?>
					<li><?php echo ss_icon( 'check', array( 'size' => 20, 'color' => 'var(--spring-600)', 'stroke' => 2.4 ) ); ?> <span><?php echo esc_html( $mc ); ?></span></li>
				<?php endforeach; ?>
			</ul>
		</div>
	</div>
</section>

<!-- WHAT WE FIX -->
<section class="ss-band-surface">
	<div class="ss-wrap" style="padding-top:56px;padding-bottom:56px">
		<h2 style="font-size:28px;margin-bottom:24px">What we fix in <?php echo esc_html( $c['city'] ); ?></h2>
		<div class="ss-grid ss-grid-3">
			<?php foreach ( $c['problem_items'] as $r ) : ?>
				<a class="ss-card ss-card--hover" href="<?php echo esc_url( $r['url'] ); ?>">
					<div class="ss-relcard">
						<div class="ss-tile ss-tile--<?php echo esc_attr( $r['color'] ); ?>"><?php echo ss_icon( $r['icon'], array( 'size' => 24 ) ); ?></div>
						<div><h3><?php echo esc_html( $r['label'] ); ?></h3><span class="ss-arrowlink" style="font-size:13.5px;margin-top:4px">See the fix <?php echo ss_icon( 'arrowRight', array( 'size' => 14, 'color' => 'var(--spring-700)' ) ); ?></span></div>
					</div>
				</a>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<!-- SERVICES IN CITY -->
<section class="ss-wrap ss-section">
	<h2 style="font-size:28px;margin-bottom:24px">Services in <?php echo esc_html( $c['city'] ); ?></h2>
	<div class="ss-grid ss-grid-4">
		<?php foreach ( $c['service_items'] as $pr ) : ?>
			<a class="ss-card ss-card--hover" href="<?php echo esc_url( $pr['url'] ); ?>">
				<div class="ss-tile ss-tile--<?php echo esc_attr( $pr['color'] ); ?>" style="margin-bottom:14px"><?php echo ss_icon( $pr['icon'], array( 'size' => 26 ) ); ?></div>
				<h3 style="font-size:17px"><?php echo esc_html( $pr['label'] ); ?></h3>
			</a>
		<?php endforeach; ?>
	</div>
</section>

<?php ss_how_it_works(); ?>

<?php ss_reviews_block( 3 ); ?>

<!-- NEARBY CITY RAIL -->
<section class="ss-band-navy">
	<div class="ss-wrap ss-section" style="text-align:center">
		<div class="ss-eyebrow is-dark" style="margin-bottom:12px">Proudly local</div>
		<h2 style="font-weight:800;font-size:34px;color:#fff;margin-bottom:24px">Proudly serving <?php echo esc_html( $c['city'] ); ?> &amp; nearby communities</h2>
		<div class="ss-citychips" style="justify-content:center">
			<?php foreach ( ss_city_order() as $ck ) :
				$active = ( $ck === $c['__key'] ) ? ' is-active' : '';
				?>
				<a class="ss-chip<?php echo esc_attr( $active ); ?>" href="<?php echo esc_url( ss_link( $ck ) ); ?>"><?php echo ss_icon( 'mapPin', array( 'size' => 16, 'color' => $active ? 'var(--navy-700)' : 'var(--sun-400)' ) ); ?> <?php echo esc_html( $cities[ $ck ]['city'] ); ?></a>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<?php
ss_free_water_test( 'Book your free water test in ' . $c['city'], 'Find out exactly what’s in your water — no cost, no pressure. We’ll be in touch within 24 business hours to schedule.', $c['zip'] );
get_footer();
