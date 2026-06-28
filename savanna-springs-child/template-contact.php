<?php
/**
 * Template Name: SS Contact
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();

if ( ss_use_builder() ) { ss_render_builder_content(); get_footer(); return; }
$brand   = ss_brand();
$map_q   = rawurlencode( $brand['address'] );
?>
<section class="ss-band-navy">
	<?php ss_hero_cover( ss_image_url( ss_pf( "page_hero_image", "" ), 'full' ) ); ?>
	<div class="ss-blob ss-blob--spring" style="width:300px;height:300px;opacity:.26;right:-70px;top:-110px"></div>
	<div class="ss-wrap" style="padding-top:54px;padding-bottom:56px;text-align:center;position:relative">
		<div class="ss-eyebrow is-dark" style="margin-bottom:12px"><?php echo esc_html( ss_pf( 'contact_eyebrow', 'Contact' ) ); ?></div>
		<h1 style="font-weight:800;font-size:48px;color:#fff;letter-spacing:-.025em"><?php echo esc_html( ss_pf( 'contact_h1', 'Let’s talk about your water' ) ); ?></h1>
		<p style="font-size:18px;color:var(--spring-100);max-width:600px;margin:16px auto 0;line-height:1.6"><?php echo esc_html( ss_pf( 'contact_sub', 'Call, email, or send a message — and don’t forget you can book a free in-home water test any time.' ) ); ?></p>
	</div>
</section>

<section class="ss-wrap ss-section">
	<div class="ss-contact-grid">
		<div>
			<div class="ss-info-row">
				<div class="ss-tile ss-tile--navy"><?php echo ss_icon( 'mapPin', array( 'size' => 22, 'color' => 'var(--navy-700)' ) ); ?></div>
				<div><h4>Visit / mail</h4><p><?php echo esc_html( $brand['address'] ); ?></p></div>
			</div>
			<div class="ss-info-row">
				<div class="ss-tile ss-tile--navy"><?php echo ss_icon( 'phone', array( 'size' => 22, 'color' => 'var(--navy-700)' ) ); ?></div>
				<div><h4>Call us</h4><p><a href="tel:<?php echo esc_attr( $brand['phone_tel'] ); ?>"><?php echo esc_html( $brand['phone'] ); ?></a></p></div>
			</div>
			<div class="ss-info-row">
				<div class="ss-tile ss-tile--navy"><?php echo ss_icon( 'mail', array( 'size' => 22, 'color' => 'var(--navy-700)' ) ); ?></div>
				<div><h4>Email</h4><p><a href="mailto:<?php echo esc_attr( $brand['email'] ); ?>"><?php echo esc_html( $brand['email'] ); ?></a></p></div>
			</div>
			<div class="ss-info-row">
				<div class="ss-tile ss-tile--navy"><?php echo ss_icon( 'clock', array( 'size' => 22, 'color' => 'var(--navy-700)' ) ); ?></div>
				<div><h4>Hours</h4><p><?php echo wp_kses_post( nl2br( ss_pf( 'contact_hours', "Mon–Fri: 9am–5pm\nSat–Sun: By appointment" ) ) ); ?></p></div>
			</div>
			<div style="display:flex;gap:12px;margin-top:8px">
				<a class="ss-tile ss-tile--navy" href="<?php echo esc_url( $brand['facebook'] ? $brand['facebook'] : '#' ); ?>" aria-label="Facebook"><?php echo ss_icon( 'facebook', array( 'size' => 22, 'color' => 'var(--navy-700)' ) ); ?></a>
				<a class="ss-tile ss-tile--navy" href="<?php echo esc_url( $brand['instagram'] ? $brand['instagram'] : '#' ); ?>" aria-label="Instagram"><?php echo ss_icon( 'instagram', array( 'size' => 22, 'color' => 'var(--navy-700)' ) ); ?></a>
			</div>
			<div style="margin-top:24px">
				<iframe class="ss-map" loading="lazy" src="https://www.google.com/maps?q=<?php echo esc_attr( $map_q ); ?>&output=embed" title="Savanna Springs location"></iframe>
			</div>
		</div>

		<div class="ss-formcard">
			<div class="ss-form-success is-hidden" data-ss-success>
				<div class="ss-success-ic"><?php echo ss_icon( 'check', array( 'size' => 40, 'color' => 'var(--green-700)', 'stroke' => 2.6 ) ); ?></div>
				<h3>Message sent!</h3>
				<p>Thanks — we’ll get back to you within 24 business hours.</p>
				<button type="button" class="ss-btn ss-btn--outline" data-ss-reset>Send another message</button>
			</div>
			<form class="ss-fwt-form" data-ss-form action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" method="post">
				<input type="hidden" name="action" value="ss_contact">
				<?php wp_nonce_field( 'ss_contact', 'ss_contact_nonce' ); ?>
				<h3><?php echo esc_html( ss_pf( 'contact_form_heading', 'Send us a message' ) ); ?></h3>
				<p class="ss-form-sub"><?php echo esc_html( ss_pf( 'contact_form_sub', 'We’ll reply within 24 business hours.' ) ); ?></p>
				<div class="ss-form-rows">
					<div class="ss-form-2">
						<label class="ss-field"><label>First name</label><input class="ss-input" type="text" name="first_name" placeholder="Jane" required></label>
						<label class="ss-field"><label>Last name</label><input class="ss-input" type="text" name="last_name" placeholder="Smith" required></label>
					</div>
					<div class="ss-form-2">
						<label class="ss-field"><label>Email</label><input class="ss-input" type="email" name="email" placeholder="you@email.com" required></label>
						<label class="ss-field"><label>Phone</label><input class="ss-input" type="tel" name="phone" placeholder="(330) 555-0199" required></label>
					</div>
					<div class="ss-form-2">
						<label class="ss-field"><label>City</label><input class="ss-input" type="text" name="city" placeholder="Youngstown"></label>
						<label class="ss-field"><label>State</label><input class="ss-input" type="text" name="state" placeholder="OH"></label>
					</div>
					<label class="ss-field"><label>ZIP code</label><input class="ss-input" type="text" name="zip" placeholder="44512"></label>
					<label class="ss-field"><label>How can we help?</label><textarea class="ss-textarea" name="notes" placeholder="Tell us about your water or what you need…" required></textarea></label>
					<label class="ss-field"><label>How did you hear about us?</label>
						<select class="ss-select" name="source"><option value="">Select</option>
							<?php foreach ( array( 'Google search', 'Facebook / Instagram', 'Friend / referral', 'Mailer / flyer', 'Repeat customer', 'Other' ) as $s ) { echo '<option>' . esc_html( $s ) . '</option>'; } ?>
						</select>
					</label>
					<button type="submit" class="ss-btn ss-btn--accent ss-btn--lg ss-btn--block">Send message <?php echo ss_icon( 'arrowRight', array( 'size' => 20 ) ); ?></button>
					<p class="ss-form-fine">No obligation. We'll never share your information.</p>
				</div>
			</form>
		</div>
	</div>
</section>
<?php
get_footer();
