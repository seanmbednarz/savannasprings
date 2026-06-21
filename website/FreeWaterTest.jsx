// Savanna Springs — Free Water Test lead form (reusable section + page)
const SSFreeWaterTest = (function () {
  const Icon = (props) => React.createElement(window.SSIcon, props);
  const CONCERNS = ['Hard water', 'Contaminants', 'Odors', 'Staining', 'White deposits', 'Bad taste', 'Other'];
  const PERKS = [
    ['search', 'On-site water analysis', 'A licensed operator tests hardness, iron, pH and chlorine right at your tap.'],
    ['clipboard', 'Custom recommendation', 'We size the right system for your home, water and budget — no upsell, no pressure.'],
    ['phone', 'We call within 24 hours', 'A Savanna Springs operator follows up within 24 business hours to schedule.'],
  ];

  function FreeWaterTest({ onNavigate, defaultZip = '', heading = 'Get a free in-home water test', sub = 'Find out exactly what\u2019s in your water — no cost, no pressure. We\u2019ll be in touch within 24 business hours to schedule.' }) {
    const { Input, Select, Button } = window.SavannaSpringsDesignSystem_15883b;
    const [sent, setSent] = React.useState(false);
    const [form, setForm] = React.useState({ name: '', phone: '', email: '', zip: defaultZip, concern: '', notes: '', source: '', coupon: '' });
    const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

    const taStyle = {
      width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--navy-900)',
      padding: '11px 13px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border-strong)',
      background: 'var(--surface)', resize: 'vertical', minHeight: 88, outline: 'none', lineHeight: 1.5,
    };
    const labelStyle = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'var(--navy-900)', marginBottom: 6, display: 'block' };

    return (
      <section style={{ background: 'var(--navy-700)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 320, height: 320, borderRadius: '50%', background: 'var(--spring-500)', opacity: 0.22, filter: 'blur(6px)', left: -120, bottom: -120 }} />
        <div style={{ position: 'absolute', width: 90, height: 90, borderRadius: '50%', background: 'var(--orange-500)', opacity: 0.85, left: '42%', top: 40 }} />
        <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: '74px 24px', display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 56, alignItems: 'start' }} className="ss-wt-grid">
          {/* left pitch */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sun-400)', marginBottom: 12 }}>Free Water Test</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.025em', color: '#fff', margin: 0 }}>{heading}</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'var(--spring-100)', margin: '18px 0 30px', maxWidth: 460 }}>{sub}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 28 }}>
              {PERKS.map(([icon, t, b]) => (
                <div key={t} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-lg)', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                    <Icon name={icon} size={24} color="var(--sun-400)" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: '#fff' }}>{t}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.5, color: 'var(--spring-100)', marginTop: 2 }}>{b}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 'var(--radius-pill)', padding: '10px 18px' }}>
              <Icon name="phone" size={18} color="var(--sun-400)" />
              <span style={{ color: '#fff', fontFamily: 'var(--font-body)', fontSize: 15 }}>Prefer to call? <a href="tel:18777501420" style={{ color: 'var(--sun-400)', fontWeight: 700, textDecoration: 'none' }}>(877) 750-1420</a></span>
            </div>
          </div>

          {/* right form */}
          <div style={{ background: 'var(--surface)', borderRadius: 'var(--radius-2xl)', padding: 34, boxShadow: 'var(--shadow-lg)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '26px 8px' }}>
                <div style={{ width: 76, height: 76, borderRadius: '50%', background: 'var(--green-100)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <Icon name="check" size={40} color="var(--green-700)" strokeWidth={2.6} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: 'var(--navy-900)', margin: '0 0 8px' }}>Request received!</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--text-body)', margin: '0 auto 24px', maxWidth: 360 }}>
                  Thanks{form.name ? `, ${form.name.split(' ')[0]}` : ''} — we'll call within 24 business hours to schedule your free water test.
                </p>
                <Button variant="outline" onClick={() => { setSent(false); setForm({ name: '', phone: '', email: '', zip: defaultZip, concern: '', notes: '', source: '', coupon: '' }); }}>Submit another request</Button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, color: 'var(--navy-900)', margin: '0 0 4px' }}>Book your free test</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--text-muted)', margin: '0 0 22px' }}>It only takes a minute.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                  <Input label="Full name" placeholder="Jane Smith" value={form.name} onChange={set('name')} required />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <Input label="Phone" type="tel" placeholder="(330) 555-0199" iconLeft={<Icon name="phone" size={18} />} value={form.phone} onChange={set('phone')} required />
                    <Input label="ZIP code" placeholder="44512" value={form.zip} onChange={set('zip')} required />
                  </div>
                  <Input label="Email" type="email" placeholder="you@email.com" iconLeft={<Icon name="mail" size={18} />} value={form.email} onChange={set('email')} required />
                  <Select label="I'm concerned about" placeholder="Choose one" value={form.concern} onChange={set('concern')}>
                    {CONCERNS.map((c) => <option key={c}>{c}</option>)}
                  </Select>
                  <div>
                    <label style={labelStyle}>Describe your water concerns</label>
                    <textarea style={taStyle} placeholder="Tell us what you're noticing — smell, stains, taste, spots…" value={form.notes} onChange={set('notes')} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <Select label="How did you find us?" placeholder="Select" value={form.source} onChange={set('source')}>
                      <option>Google search</option><option>Facebook / Instagram</option><option>Friend / referral</option>
                      <option>Mailer / flyer</option><option>Repeat customer</option><option>Other</option>
                    </Select>
                    <Input label="Coupon code (optional)" placeholder="e.g. CLEAR25" value={form.coupon} onChange={set('coupon')} />
                  </div>
                  <Button type="submit" variant="accent" size="lg" block iconRight={<Icon name="arrowRight" size={20} />}>Book my free water test</Button>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--text-muted)', textAlign: 'center', margin: 0 }}>No obligation. We'll never share your information.</p>
                </div>
              </form>
            )}
          </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `@media (max-width: 860px){ .ss-wt-grid{ grid-template-columns:1fr !important; } }` }} />
      </section>
    );
  }
  return FreeWaterTest;
})();
window.SSFreeWaterTest = SSFreeWaterTest;
