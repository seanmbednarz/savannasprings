<?php
/**
 * Single Product page.
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();

if ( ss_use_builder() ) { ss_render_builder_content(); get_footer(); return; }

$p = ss_product_view( get_the_ID() );
if ( ! $p ) { echo '<section class="ss-wrap ss-section"><h1>Not found</h1></section>'; get_footer(); return; }
$ss_use_photo = ss_hero_use_photo();
$ss_hero_img  = ss_hero_image();
?>

<!-- HERO -->
<section class="ss-page-hero ss-page-hero--split">
	<?php ss_hero_cover( $ss_use_photo ? $ss_hero_img : '' ); ?>
	<div class="ss-blob ss-blob--spring" style="width:300px;height:300px;opacity:.28;right:-70px;top:-110px"></div>
	<div class="ss-wrap">
		<div>
			<div class="ss-breadcrumb">
				<a href="<?php echo esc_url( ss_link( 'Home' ) ); ?>">Home</a><?php echo ss_icon( 'chevronRight', array( 'size' => 14, 'color' => 'var(--spring-300)' ) ); ?>
				<a href="<?php echo esc_url( ss_link( 'Products' ) ); ?>">Products</a><?php echo ss_icon( 'chevronRight', array( 'size' => 14, 'color' => 'var(--spring-300)' ) ); ?>
				<span class="is-current"><?php echo esc_html( $p['label'] ); ?></span>
			</div>
			<div class="ss-eyebrow is-dark"><?php echo esc_html( $p['eyebrow'] ); ?></div>
			<h1><?php echo esc_html( $p['h1'] ); ?></h1>
			<p><?php echo esc_html( $p['lead'] ); ?></p>
			<?php if ( ! empty( $p['chips'] ) ) : ?>
				<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:24px">
					<?php foreach ( $p['chips'] as $c ) : ?><span class="ss-tagbadge"><?php echo esc_html( $c ); ?></span><?php endforeach; ?>
				</div>
			<?php endif; ?>
			<div class="ss-hero-actions">
				<?php if ( ! empty( $p['callFirst'] ) ) : ?>
					<a class="ss-btn ss-btn--accent ss-btn--lg" href="tel:18777501420"><?php echo ss_icon( 'phone', array( 'size' => 20 ) ); ?> Call (877) 750-1420</a>
					<a class="ss-hero-phone" href="<?php echo esc_url( ss_link( 'FreeTest' ) ); ?>">or request a free consult <?php echo ss_icon( 'arrowRight', array( 'size' => 18, 'color' => 'var(--sun-400)' ) ); ?></a>
				<?php else : ?>
					<a class="ss-btn ss-btn--accent ss-btn--lg" href="<?php echo esc_url( ss_link( 'FreeTest' ) ); ?>">Get my free water test <?php echo ss_icon( 'arrowRight', array( 'size' => 20 ) ); ?></a>
					<a class="ss-hero-phone" href="tel:18777501420"><span class="ss-phone-dot"><?php echo ss_icon( 'phone', array( 'size' => 19, 'color' => 'var(--sun-400)' ) ); ?></span> (877) 750-1420</a>
				<?php endif; ?>
			</div>
		</div>
		<?php if ( ! $ss_use_photo ) : ?><div><div class="ss-hero-icontile"><?php echo ss_icon( $p['icon'], array( 'size' => 78, 'color' => 'var(--sun-400)' ) ); ?></div></div><?php endif; ?>
	</div>
</section>

<?php if ( ! empty( $p['intro'] ) ) : ?>
	<section class="ss-wrap" style="padding-top:56px;padding-bottom:8px;text-align:center">
		<p style="font-family:var(--font-body);font-size:19px;line-height:1.6;color:var(--navy-900);max-width:760px;margin:0 auto"><?php echo esc_html( $p['intro'] ); ?></p>
	</section>
<?php endif; ?>

<?php if ( ! empty( $p['models'] ) ) : ?>
	<!-- MODELS -->
	<section class="ss-wrap ss-section">
		<?php ss_section_head( 'The lineup', 'Choose the right system', 'Each model is custom-sized to your water — a free in-home test tells us exactly which is right for your home.' ); ?>
		<div class="ss-grid ss-grid-2" style="margin-top:44px">
			<?php foreach ( $p['models'] as $m ) : ?>
				<div class="ss-model">
					<?php if ( ! empty( $m['image'] ) ) { echo ss_photo_header( $m['image'], $m['name'] ); } ?>
					<div class="ss-model__head">
						<h3><?php echo esc_html( $m['name'] ); ?></h3>
						<?php if ( ! empty( $m['tag'] ) ) : ?><span class="ss-pill-tag"><?php echo esc_html( $m['tag'] ); ?></span><?php endif; ?>
					</div>
					<p class="ss-model__blurb"><?php echo esc_html( $m['blurb'] ); ?></p>
					<ul class="ss-checklist">
						<?php foreach ( $m['features'] as $f ) : ?>
							<li><span class="ss-check"><?php echo ss_icon( 'check', array( 'size' => 18, 'color' => 'var(--spring-600)', 'stroke' => 2.4 ) ); ?></span><?php echo esc_html( $f ); ?></li>
						<?php endforeach; ?>
					</ul>
					<?php if ( ! empty( $m['warranty'] ) ) : ?>
						<div class="ss-warranty"><strong>Warranty:</strong> <?php echo esc_html( $m['warranty'] ); ?></div>
					<?php endif; ?>
				</div>
			<?php endforeach; ?>
		</div>
	</section>
<?php endif; ?>

<?php if ( ! empty( $p['highlights'] ) ) : ?>
	<!-- HIGHLIGHTS BAND -->
	<section class="ss-band-water">
		<div class="ss-wrap ss-section">
			<?php ss_section_head( $p['highlights']['eyebrow'], $p['highlights']['title'] ); ?>
			<div class="ss-hl-grid" style="max-width:860px;margin-left:auto;margin-right:auto">
				<?php foreach ( $p['highlights']['items'] as $it ) : ?>
					<div class="ss-hl-item"><?php echo ss_icon( 'check', array( 'size' => 22, 'color' => 'var(--spring-600)', 'stroke' => 2.4 ) ); ?> <span><?php echo esc_html( $it ); ?></span></div>
				<?php endforeach; ?>
			</div>
		</div>
	</section>
<?php endif; ?>

<?php if ( ! empty( $p['segments'] ) ) : ?>
	<!-- WHO WE SERVE -->
	<section class="ss-wrap ss-section">
		<?php ss_section_head( $p['segments']['eyebrow'], $p['segments']['title'] ); ?>
		<div class="ss-grid ss-grid-3" style="margin-top:40px">
			<?php foreach ( $p['segments']['items'] as $it ) : ?>
				<div class="ss-card" style="display:flex;align-items:center;gap:14px;padding:22px 26px">
					<div class="ss-tile ss-tile--navy" style="width:46px;height:46px"><?php echo ss_icon( 'factory', array( 'size' => 22, 'color' => 'var(--navy-700)' ) ); ?></div>
					<span style="font-family:var(--font-display);font-weight:700;font-size:17px;color:var(--navy-900)"><?php echo esc_html( $it ); ?></span>
				</div>
			<?php endforeach; ?>
		</div>
	</section>
<?php endif; ?>

<?php if ( ! empty( $p['delivery'] ) ) : ?>
	<!-- DELIVERY INFO -->
	<section class="ss-wrap" style="padding-top:56px;padding-bottom:16px">
		<div class="ss-cta-card">
			<div>
				<h2><?php echo esc_html( $p['delivery']['title'] ); ?></h2>
				<p style="max-width:640px"><?php echo esc_html( $p['delivery']['body'] ); ?></p>
			</div>
			<a class="ss-btn ss-btn--accent ss-btn--lg" href="<?php echo esc_url( ss_link( 'Contact' ) ); ?>">Set up delivery <?php echo ss_icon( 'arrowRight', array( 'size' => 20 ) ); ?></a>
		</div>
	</section>
<?php endif; ?>

<?php if ( ! empty( $p['solves'] ) ) : ?>
	<!-- PROBLEMS THIS SOLVES -->
	<section class="ss-band-surface">
		<div class="ss-wrap" style="padding-top:56px;padding-bottom:56px">
			<h2 style="font-size:24px;margin-bottom:24px">Problems this solves</h2>
			<div class="ss-grid ss-grid-3">
				<?php foreach ( $p['solves_items'] as $r ) : ?>
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
<?php endif; ?>

<?php
$ss_lead_form = ss_get( get_the_ID(), 'lead_form', '' );
if ( '' === $ss_lead_form ) {
	// Default by slug: salt-delivery → salt form, water-delivery → delivery form; everything else → water test.
	$ss_slug      = get_post_field( 'post_name', get_the_ID() );
	$ss_lead_form = ( 'salt-delivery' === $ss_slug ) ? 'salt' : ( ( 'water-delivery' === $ss_slug ) ? 'delivery' : 'water' );
}
if ( 'salt' === $ss_lead_form ) {
	ss_free_water_test( $p['cta'], 'Salt is heavy, messy, and bulky — let us handle it. Tell us your address and how many bags, and we’ll set up your delivery route.', '', 'salt' );
} elseif ( 'delivery' === $ss_lead_form ) {
	ss_free_water_test( $p['cta'], 'Skip the grocery-store hauling. Tell us where to deliver and what you need, and we’ll set up a delivery schedule that fits your home or office.', '', 'delivery' );
} else {
	ss_free_water_test( $p['cta'] );
}
get_footer();
