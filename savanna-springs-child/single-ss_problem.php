<?php
/**
 * Single Water Problem page.
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();

$p = ss_current_record( 'ss_problem' );
if ( ! $p ) { echo '<section class="ss-wrap ss-section"><h1>Not found</h1></section>'; get_footer(); return; }
$problems = ss_problems();
?>

<!-- HERO -->
<section class="ss-page-hero ss-page-hero--split">
	<div class="ss-blob ss-blob--spring" style="width:300px;height:300px;opacity:.28;right:-70px;top:-110px"></div>
	<div class="ss-blob ss-blob--orange" style="width:80px;height:80px;opacity:.85;right:46%;bottom:26px"></div>
	<div class="ss-wrap">
		<div>
			<div class="ss-breadcrumb">
				<a href="<?php echo esc_url( ss_link( 'Home' ) ); ?>">Home</a><?php echo ss_icon( 'chevronRight', array( 'size' => 14, 'color' => 'var(--spring-300)' ) ); ?>
				<a href="<?php echo esc_url( ss_link( 'Problems' ) ); ?>">Water Problems</a><?php echo ss_icon( 'chevronRight', array( 'size' => 14, 'color' => 'var(--spring-300)' ) ); ?>
				<span class="is-current"><?php echo esc_html( $p['label'] ); ?></span>
			</div>
			<div class="ss-eyebrow is-dark"><?php echo esc_html( $p['eyebrow'] ); ?></div>
			<h1><?php echo esc_html( $p['h1'] ); ?></h1>
			<p><?php echo esc_html( $p['lead'] ); ?></p>
			<div class="ss-hero-actions">
				<a class="ss-btn ss-btn--accent ss-btn--lg" href="<?php echo esc_url( ss_link( 'FreeTest' ) ); ?>">Get my free water test <?php echo ss_icon( 'arrowRight', array( 'size' => 20 ) ); ?></a>
				<a class="ss-hero-phone" href="tel:18777501420"><span class="ss-phone-dot"><?php echo ss_icon( 'phone', array( 'size' => 19, 'color' => 'var(--sun-400)' ) ); ?></span> (877) 750-1420</a>
			</div>
		</div>
		<div><div class="ss-hero-icontile"><?php echo ss_icon( $p['icon'], array( 'size' => 78, 'color' => 'var(--sun-400)' ) ); ?></div></div>
	</div>
</section>

<!-- PROBLEM + CAUSE -->
<section class="ss-wrap" style="padding-top:72px;padding-bottom:8px">
	<div class="ss-grid <?php echo $p['cause'] ? 'ss-grid-2' : ''; ?>">
		<div class="ss-pc">
			<div class="ss-pc__label"><span class="ss-mini-tile" style="background:#ffe7d1"><?php echo ss_icon( 'alert', array( 'size' => 22, 'color' => 'var(--orange-600)' ) ); ?></span><span class="t" style="color:var(--orange-600)">The problem</span></div>
			<p><?php echo esc_html( $p['problem'] ); ?></p>
		</div>
		<?php if ( $p['cause'] ) : ?>
			<div class="ss-pc ss-pc--navy">
				<div class="ss-pc__label"><span class="ss-mini-tile" style="background:var(--navy-700)"><?php echo ss_icon( 'flask', array( 'size' => 22, 'color' => 'var(--sun-400)' ) ); ?></span><span class="t" style="color:var(--navy-700)">The cause</span></div>
				<p><?php echo esc_html( $p['cause'] ); ?></p>
			</div>
		<?php endif; ?>
	</div>
</section>

<!-- HOW WE FIX IT -->
<section class="ss-wrap" style="padding-top:56px;padding-bottom:16px">
	<div class="ss-head"><div class="ss-eyebrow" style="margin-bottom:10px">How we fix it</div><h2 style="font-size:36px">Diagnose → Recommend → Install</h2></div>
	<div class="ss-grid ss-grid-3" style="margin-top:40px">
		<?php foreach ( $p['steps'] as $i => $s ) : ?>
			<div class="ss-step">
				<div class="ss-step__top"><div class="ss-tile ss-tile--fill-navy"><?php echo ss_icon( $s['icon'], array( 'size' => 26, 'color' => 'var(--sun-400)' ) ); ?></div><span class="ss-step__num"><?php echo esc_html( str_pad( $i + 1, 2, '0', STR_PAD_LEFT ) ); ?></span></div>
				<h3 style="font-size:20px"><?php echo esc_html( $s['label'] ); ?></h3>
				<p><?php echo esc_html( $s['body'] ); ?></p>
			</div>
		<?php endforeach; ?>
	</div>
</section>

<?php if ( ! empty( $p['payoff'] ) ) : ?>
	<!-- PAYOFF STATS -->
	<section class="ss-wrap" style="padding-top:24px;padding-bottom:8px">
		<div class="ss-payoff">
			<?php foreach ( $p['payoff']['stats'] as $st ) : ?>
				<div style="text-align:center"><div class="ss-payoff__n"><?php echo esc_html( $st[0] ); ?></div><div class="ss-payoff__l"><?php echo esc_html( $st[1] ); ?></div></div>
			<?php endforeach; ?>
		</div>
	</section>
<?php endif; ?>

<!-- RECOMMENDED SYSTEM SPOTLIGHT -->
<section class="ss-wrap" style="padding-top:56px;padding-bottom:72px">
	<div class="ss-spotlight">
		<div class="ss-spotlight__body">
			<div class="ss-eyebrow is-dark" style="margin-bottom:14px">What we recommend</div>
			<h3><?php echo esc_html( $p['product']['name'] ); ?></h3>
			<p><?php echo esc_html( $p['recommend'] ); ?></p>
			<div class="ss-badgerow">
				<?php foreach ( $p['product']['badges'] as $b ) : ?>
					<span class="ss-tagbadge"><?php echo ss_icon( 'check', array( 'size' => 13, 'color' => 'var(--sun-400)', 'stroke' => 2.6 ) ); ?> <?php echo esc_html( $b ); ?></span>
				<?php endforeach; ?>
			</div>
			<a class="ss-btn ss-btn--accent" href="<?php echo esc_url( ss_link( $p['product']['key'] ) ); ?>">Explore this solution <?php echo ss_icon( 'arrowRight', array( 'size' => 18 ) ); ?></a>
		</div>
		<div class="ss-spotlight__visual">
			<div class="ss-spotlight__device"><?php echo ss_icon( $p['icon'], array( 'size' => 56, 'color' => 'var(--spring-300)' ) ); ?><span>MADE IN USA</span></div>
		</div>
	</div>
</section>

<!-- RELATED PROBLEMS -->
<section class="ss-band-surface">
	<div class="ss-wrap" style="padding-top:56px;padding-bottom:56px">
		<h2 style="font-size:24px;margin-bottom:24px">Other water problems we solve</h2>
		<div class="ss-grid ss-grid-3">
			<?php foreach ( $p['related'] as $rk ) : if ( empty( $problems[ $rk ] ) ) { continue; } $r = $problems[ $rk ]; ?>
				<a class="ss-card ss-card--hover" href="<?php echo esc_url( ss_link( $rk ) ); ?>">
					<div class="ss-relcard">
						<div class="ss-tile ss-tile--<?php echo esc_attr( $r['color'] ); ?>"><?php echo ss_icon( $r['icon'], array( 'size' => 24 ) ); ?></div>
						<div>
							<h3><?php echo esc_html( $r['label'] ); ?></h3>
							<span class="ss-arrowlink" style="font-size:13.5px;margin-top:4px">See the fix <?php echo ss_icon( 'arrowRight', array( 'size' => 14, 'color' => 'var(--spring-700)' ) ); ?></span>
						</div>
					</div>
				</a>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<?php
ss_free_water_test( $p['cta'] . ' — book your free water test' );
get_footer();
