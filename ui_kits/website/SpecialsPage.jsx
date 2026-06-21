// Savanna Springs — Specials / Current Offers page
const SSSpecialsPage = (function () {
  const Icon = (props) => React.createElement(window.SSIcon, props);
  const OFFERS = [
    { tag: '1 MONTH FREE', color: 'navy', title: 'Impression Series R.O. — 1 month free rent', body: 'Bottle-quality drinking water from your own tap, with your first month of rent on us.', foot: 'One-year lease · install charge applies', key: 'RO' },
    { tag: '1 YEAR FREE', color: 'sun', title: 'One year of free salt', body: 'Buy a Water-Right® softener and we\u2019ll cover a year of salt — 12 × 40-lb bags. We recommend Dura-Cube®.', foot: 'With softener purchase', key: 'Salt' },
    { tag: '1 MONTH FREE', color: 'water', title: 'One month free rent on softeners', body: 'Try an Impression Plus® softener with your first month of rent free — feel the difference first.', foot: 'One-year lease · install charge applies', key: 'Softeners' },
    { tag: '6 MO · 0%', color: 'orange', title: '6 months no interest', body: 'Special financing on purchases of $299 and up — plus longer terms available. See all the options.', foot: 'On approved credit', key: 'Financing' },
  ];

  function SpecialsPage({ onNavigate }) {
    const { Card, Button } = window.SavannaSpringsDesignSystem_15883b;
    const go = (k) => onNavigate && onNavigate(k);
    const tints = { orange: 'var(--orange-500)', navy: 'var(--navy-700)', water: 'var(--spring-500)', sun: 'var(--sun-400)' };
    const inks = { orange: '#fff', navy: '#fff', water: '#fff', sun: 'var(--navy-900)' };
    return (
      <div>
        <section style={{ background: 'var(--navy-700)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'var(--spring-500)', opacity: 0.26, right: -70, top: -110 }} />
          <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: '54px 24px 56px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sun-400)', marginBottom: 12 }}>Current offers</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 52, color: '#fff', margin: 0, letterSpacing: '-0.025em' }}>Special offers</h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'var(--spring-100)', maxWidth: 560, margin: '14px auto 0' }}>
              Current deals on softeners, drinking water and salt. Questions? Call <strong style={{ color: '#fff' }}>(877) 750-1420</strong>.
            </p>
          </div>
        </section>

        <section style={{ maxWidth: 1180, margin: '0 auto', padding: '64px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="ss-grid-2">
            {OFFERS.map((o) => (
              <Card key={o.title} variant="elevated" padding="none" hoverable onClick={() => go(o.key)}>
                <div style={{ display: 'flex' }}>
                  <div style={{ width: 132, flex: 'none', background: tints[o.color], color: inks[o.color], display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 19, letterSpacing: '-0.01em', textAlign: 'center', padding: 14, lineHeight: 1.15 }}>
                    {o.tag}
                  </div>
                  <div style={{ padding: '24px 26px' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--navy-900)', margin: '0 0 8px', lineHeight: 1.2 }}>{o.title}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.55, color: 'var(--text-body)', margin: '0 0 14px' }}>{o.body}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--text-muted)', fontStyle: 'italic' }}>{o.foot}</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: 'var(--spring-700)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13.5 }}>Details <Icon name="arrowRight" size={14} color="var(--spring-700)" /></span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div style={{ marginTop: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap', color: 'var(--text-body)', fontFamily: 'var(--font-body)', fontSize: 15 }}>
            <Icon name="mail" size={18} color="var(--spring-600)" /> Questions? Call <a href="tel:18777501420" style={{ color: 'var(--navy-700)', fontWeight: 700, textDecoration: 'none' }}>(877) 750-1420</a> or email <a href="mailto:info@savannaspringswater.com" style={{ color: 'var(--navy-700)', fontWeight: 700, textDecoration: 'none' }}>info@savannaspringswater.com</a>.
          </div>

          <div style={{ marginTop: 40, background: 'var(--surface-water)', border: '1px solid var(--spring-100)', borderRadius: 'var(--radius-2xl)', padding: '36px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-lg)', background: 'var(--sun-400)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                <Icon name="sparkle" size={28} color="var(--navy-900)" />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, color: 'var(--navy-900)', margin: 0 }}>Not sure which deal is right?</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, color: 'var(--text-body)', margin: '4px 0 0' }}>Start with a free water test — we{'\u2019'}ll match you to the best offer.</p>
              </div>
            </div>
            <Button variant="accent" size="lg" onClick={() => go('FreeTest')} iconRight={<Icon name="arrowRight" size={20} />}>Get a free water test</Button>
          </div>
        </section>
      </div>
    );
  }
  return SpecialsPage;
})();
window.SSSpecialsPage = SSSpecialsPage;
