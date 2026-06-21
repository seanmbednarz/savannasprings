// Savanna Springs — Contact page
const SSContactPage = (function () {
  const Icon = (props) => React.createElement(window.SSIcon, props);

  function ContactPage({ onNavigate }) {
    const { Input, Select, Button } = window.SavannaSpringsDesignSystem_15883b;
    const go = (k) => onNavigate && onNavigate(k);
    const [sent, setSent] = React.useState(false);
    const [form, setForm] = React.useState({ name: '', email: '', phone: '', topic: '', message: '' });
    const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
    const labelStyle = { fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'var(--navy-900)', marginBottom: 6, display: 'block' };
    const taStyle = { width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--navy-900)', padding: '11px 13px', borderRadius: 'var(--radius-md)', border: '1.5px solid var(--border-strong)', background: 'var(--surface)', resize: 'vertical', minHeight: 110, outline: 'none', lineHeight: 1.5 };
    const HOURS = [['Mon–Fri', '9:00 AM – 5:00 PM'], ['Saturday', 'By appointment'], ['Sunday', 'Closed']];

    return (
      <div>
        <section style={{ background: 'var(--navy-700)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'var(--spring-500)', opacity: 0.26, right: -70, top: -110 }} />
          <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: '54px 24px 56px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sun-400)', marginBottom: 12 }}>Contact</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 48, color: '#fff', margin: 0, letterSpacing: '-0.025em' }}>Contact Savanna Springs</h1>
            <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 19, color: 'var(--spring-100)', margin: '14px 0 24px' }}>We make one thing perfectly clear…</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="accent" size="lg" onClick={() => go('FreeTest')} iconRight={<Icon name="arrowRight" size={20} />}>Get a free water test</Button>
              <Button variant="outline" size="lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)' }} onClick={() => go('FreeTest')}>Request a quick quote</Button>
            </div>
          </div>
        </section>

        <section style={{ maxWidth: 1180, margin: '0 auto', padding: '64px 24px', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 44, alignItems: 'start' }} className="ss-wt-grid">
          {/* left: info */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[['mapPin', '875 River Road, Lowellville, OH 44436', 'https://www.google.com/maps?q=875+River+Road,+Lowellville,+OH+44436'], ['phone', '(877) 750-1420', 'tel:18777501420'], ['mail', 'info@savannaspringswater.com', 'mailto:info@savannaspringswater.com']].map(([icon, text, href]) => (
                <a key={text} href={href} target={icon === 'mapPin' ? '_blank' : undefined} rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
                  <span style={{ width: 48, height: 48, borderRadius: 'var(--radius-lg)', background: 'var(--navy-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name={icon} size={24} color="var(--navy-700)" /></span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--navy-900)' }}>{text}</span>
                </a>
              ))}
            </div>

            {/* hours */}
            <div style={{ marginTop: 26, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 24, boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <Icon name="clock" size={18} color="var(--navy-700)" />
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--navy-700)' }}>Hours</span>
              </div>
              {HOURS.map(([d, h]) => (
                <div key={d} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid var(--border)', fontFamily: 'var(--font-body)', fontSize: 15 }}>
                  <span style={{ color: 'var(--text-body)' }}>{d}</span>
                  <span style={{ color: 'var(--navy-900)', fontWeight: 600 }}>{h}</span>
                </div>
              ))}
            </div>

            {/* social + login */}
            <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              {['facebook', 'instagram'].map((n) => (
                <a key={n} href="#" onClick={(e) => e.preventDefault()} style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--navy-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={n} size={20} color="var(--navy-700)" />
                </a>
              ))}
              <a href="#" onClick={(e) => e.preventDefault()} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginLeft: 'auto', color: 'var(--spring-700)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14.5, textDecoration: 'none' }}>
                <Icon name="shield" size={16} color="var(--spring-700)" /> Customer login
              </a>
            </div>

            {/* map */}
            <div style={{ marginTop: 22, borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
              <iframe title="Savanna Springs location" src="https://www.google.com/maps?q=875+River+Road,+Lowellville,+OH+44436&output=embed" style={{ width: '100%', height: 260, border: 0, display: 'block' }} loading="lazy"></iframe>
            </div>
          </div>

          {/* right: form */}
          <div style={{ background: 'var(--surface)', borderRadius: 'var(--radius-2xl)', padding: 34, boxShadow: 'var(--shadow-md)', border: '1px solid var(--border)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '30px 8px' }}>
                <div style={{ width: 76, height: 76, borderRadius: '50%', background: 'var(--green-100)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><Icon name="check" size={40} color="var(--green-700)" strokeWidth={2.6} /></div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: 'var(--navy-900)', margin: '0 0 8px' }}>Message sent!</h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--text-body)', margin: '0 auto 24px', maxWidth: 340 }}>Thanks{form.name ? `, ${form.name.split(' ')[0]}` : ''} — we{'’'}ll get back to you shortly.</p>
                <Button variant="outline" onClick={() => { setSent(false); setForm({ name: '', email: '', phone: '', topic: '', message: '' }); }}>Send another message</Button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, color: 'var(--navy-900)', margin: '0 0 4px' }}>Send us a message</h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--text-muted)', margin: '0 0 22px' }}>We{'’'}ll get back to you within one business day.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                  <Input label="Full name" placeholder="Jane Smith" value={form.name} onChange={set('name')} required />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <Input label="Email" type="email" placeholder="you@email.com" iconLeft={<Icon name="mail" size={18} />} value={form.email} onChange={set('email')} required />
                    <Input label="Phone" type="tel" placeholder="(330) 555-0199" iconLeft={<Icon name="phone" size={18} />} value={form.phone} onChange={set('phone')} />
                  </div>
                  <Select label="How can we help?" placeholder="Choose a topic" value={form.topic} onChange={set('topic')}>
                    <option>Free water test</option><option>Quick quote</option><option>Service or repair</option>
                    <option>Salt / water delivery</option><option>Financing</option><option>Something else</option>
                  </Select>
                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea style={taStyle} placeholder="How can we help?" value={form.message} onChange={set('message')} required />
                  </div>
                  <Button type="submit" variant="accent" size="lg" block iconRight={<Icon name="arrowRight" size={20} />}>Send message</Button>
                </div>
              </form>
            )}
          </div>
        </section>
      </div>
    );
  }
  return ContactPage;
})();
window.SSContactPage = SSContactPage;
