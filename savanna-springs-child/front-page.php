<?php
/**
 * Front page — Savanna Springs homepage.
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();

$hero_img = SS_CHILD_URI . '/assets/img-hero-people.png';

$why      = ss_home_why();
$products = ss_products();
$prod_keys = array( 'Softeners', 'RO', 'IronSulfur', 'WholeHouse', 'Salt', 'Rentals' );
$specials = ss_home_specials();
$cities   = ss_cities();
$stats    = array( array( '2008', 'Family owned since' ), array( '35+ yrs', 'Combined experience' ), array( '20-yr', 'Warranties available' ), array( 'EPA', 'Licensed operators' ) );
?>

<!-- HERO -->
<section class="ss-hero">
	<div class="ss-hero__photo" style="background-image:url('<?php echo esc_url( $hero_img ); ?>')"></div>
	<div class="ss-hero__scrim"></div>
	<div class="ss-blob ss-blob--spring" style="width:360px;height:360px;opacity:.35;filter:blur(8px);left:-120px;top:-140px"></div>
	<div class="ss-blob ss-blob--orange" style="width:110px;height:110px;opacity:.9;right:50%;bottom:44px"></div>
	<div class="ss-wrap">
		<div class="ss-eyebrow is-dark" style="margin-bottom:16px">We make one thing perfectly clear…</div>
		<h1>Whatever's wrong with your water, we make it <span class="is-accent">perfectly clear.</span></h1>
		<p>Smelly, hard, rusty, or bad-tasting water? Savanna Springs diagnoses the real problem and fixes it for good — for homes and businesses across Youngstown and Western PA.</p>
		<div class="ss-hero-actions">
			<a class="ss-btn ss-btn--accent ss-btn--lg" href="<?php echo esc_url( ss_link( 'FreeTest' ) ); ?>">Get my free water test <?php echo ss_icon( 'arrowRight', array( 'size' => 20 ) ); ?></a>
			<a class="ss-hero-phone" href="tel:18777501420"><span class="ss-phone-dot"><?php echo ss_icon( 'phone', array( 'size' => 19, 'color' => 'var(--sun-400)' ) ); ?></span> (877) 750-1420</a>
		</div>
		<div class="ss-hero-trust">
			<span><?php echo ss_icon( 'badgeCheck', array( 'size' => 18, 'color' => 'var(--sun-400)' ) ); ?> Family owned since 2008</span>
			<span><?php echo ss_icon( 'shieldCheck', array( 'size' => 18, 'color' => 'var(--sun-400)' ) ); ?> Water-Right® authorized dealer</span>
			<span><?php echo ss_icon( 'home', array( 'size' => 18, 'color' => 'var(--sun-400)' ) ); ?> American-made equipment</span>
		</div>
	</div>
</section>

<?php ss_trust_strip(); ?>

<?php ss_problem_picker(); ?>

<?php ss_how_it_works(); ?>

<!-- WHY SAVANNA SPRINGS -->
<section class="ss-wrap ss-section">
	<?php ss_section_head( 'Why Savanna Springs', 'A water team your neighbors actually trust', 'Not a faceless sales outfit — a family business that fixes the real problem and stands behind the work.' ); ?>
	<div class="ss-grid ss-grid-4" style="margin-top:46px">
		<?php foreach ( $why as $w ) : ?>
			<div class="ss-why">
				<div class="ss-tile ss-tile--navy"><?php echo ss_icon( $w['icon'], array( 'size' => 27, 'color' => 'var(--navy-700)' ) ); ?></div>
				<h3><?php echo esc_html( $w['title'] ); ?></h3>
				<p><?php echo esc_html( $w['body'] ); ?></p>
			</div>
		<?php endforeach; ?>
	</div>
	<div class="ss-stats">
		<?php foreach ( $stats as $s ) : ?>
			<div class="ss-stat"><div class="ss-stat__n"><?php echo esc_html( $s[0] ); ?></div><div class="ss-stat__l"><?php echo esc_html( $s[1] ); ?></div></div>
		<?php endforeach; ?>
	</div>
</section>

<!-- PRODUCTS -->
<section class="ss-band-water">
	<div class="ss-wrap ss-section">
		<?php ss_section_head( 'Our products', 'American-made, built for your water', 'We only install equipment made in America, custom-built and sized to your home.' ); ?>
		<div class="ss-grid ss-grid-3" style="margin-top:44px">
			<?php foreach ( $prod_keys as $k ) : $p = $products[ $k ]; ?>
				<a class="ss-card ss-card--hover" href="<?php echo esc_url( ss_link( $k ) ); ?>">
					<div class="ss-tile ss-tile--<?php echo esc_attr( $p['color'] ); ?>" style="margin-bottom:18px"><?php echo ss_icon( $p['icon'], array( 'size' => 28 ) ); ?></div>
					<h3><?php echo esc_html( $p['label'] ); ?></h3>
					<p><?php echo esc_html( $p['blurb'] ); ?></p>
					<span class="ss-arrowlink" style="margin-top:16px">Learn more <?php echo ss_icon( 'arrowRight', array( 'size' => 16, 'color' => 'var(--spring-700)' ) ); ?></span>
				</a>
			<?php endforeach; ?>
		</div>
		<div style="text-align:center;margin-top:34px"><?php echo ss_button( 'See all products', 'Products', 'primary' ); ?></div>
	</div>
</section>

<!-- SERVICE AREA -->
<section class="ss-band-navy">
	<div class="ss-blob ss-blob--spring" style="width:300px;height:300px;opacity:.25;right:-80px;top:-100px"></div>
	<div class="ss-wrap ss-section ss-2col">
		<div>
			<div class="ss-eyebrow is-dark" style="margin-bottom:12px">Service area</div>
			<h2 style="font-weight:800;font-size:40px;line-height:1.06;letter-spacing:-.02em;color:#fff">Serving Youngstown, the Mahoning Valley &amp; Western PA</h2>
			<p style="font-size:17.5px;line-height:1.6;color:var(--spring-100);margin:16px 0 24px;max-width:460px">From our shop on River Road in Lowellville, we serve Mahoning, Columbiana &amp; Trumbull counties plus Western PA — city water and private wells alike.</p>
			<a class="ss-btn ss-btn--accent" href="<?php echo esc_url( ss_link( 'ServiceAreas' ) ); ?>">Find your town <?php echo ss_icon( 'arrowRight', array( 'size' => 18 ) ); ?></a>
		</div>
		<div class="ss-citychips">
			<?php foreach ( ss_city_order() as $ck ) : ?>
				<a class="ss-chip" href="<?php echo esc_url( ss_link( $ck ) ); ?>"><?php echo ss_icon( 'mapPin', array( 'size' => 16, 'color' => 'var(--sun-400)' ) ); ?> <?php echo esc_html( $cities[ $ck ]['city'] ); ?></a>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<?php ss_reviews_block( 3 ); ?>

<!-- SPECIALS & FINANCING BAND -->
<section class="ss-band-sun">
	<div class="ss-wrap" style="padding-top:60px;padding-bottom:60px">
		<div style="display:flex;align-items:flex-end;justify-content:space-between;gap:20px;flex-wrap:wrap;margin-bottom:30px">
			<div>
				<div class="ss-eyebrow" style="margin-bottom:10px">Specials &amp; financing</div>
				<h2 style="font-weight:800;font-size:36px;line-height:1.05;letter-spacing:-.02em;color:var(--navy-900)">Better water, made affordable</h2>
			</div>
			<div style="display:flex;gap:12px">
				<?php echo ss_button( 'See all specials', 'Specials', 'primary', array( 'icon' => '' ) ); ?>
				<?php echo ss_button( 'Financing', 'Financing', 'outline-navy', array( 'icon' => '' ) ); ?>
			</div>
		</div>
		<div class="ss-grid ss-grid-4">
			<?php foreach ( $specials as $sp ) : ?>
				<div class="ss-special">
					<div class="ss-tile ss-tile--fill-navy"><?php echo ss_icon( $sp[0], array( 'size' => 24, 'color' => 'var(--sun-400)' ) ); ?></div>
					<h3><?php echo esc_html( $sp[1] ); ?></h3>
					<p><?php echo esc_html( $sp[2] ); ?></p>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<?php
ss_free_water_test(
	'Ready to make your water perfectly clear?',
	'Book your free, no-pressure in-home water test. A licensed operator will be in touch within 24 business hours to schedule.'
);
get_footer();
