// Savanna Springs — Financing page
const SSFinancingPage = (function () {
  const Icon = (props) => React.createElement(window.SSIcon, props);
  const TIERS = [
    { term: '6 months', rate: 'No interest', note: 'if paid in full', min: '$299+', highlight: true },
    { term: '36 months', rate: '5.99% APR', note: 'fixed', min: '$2,000+' },
    { term: '60 months', rate: '6.99% APR', note: 'fixed', min: '$2,000+' },
    { term: '84 months', rate: '7.99% APR', note: 'fixed', min: '$2,000+' },
    { term: '120 months', rate: '9.99% APR', note: 'fixed', min: '$2,500+' },
  ];

  function FinancingPage({ onNavigate }) {
    const { Button } = window.SavannaSpringsDesignSystem_15883b;
    const go = (k) => onNavigate && onNavigate(k);
    return (
      <div>
        <section style={{ background: 'var(--navy-700)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'var(--spring-500)', opacity: 0.26, right: -70, top: -110 }} />
          <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: '54px 24px 56px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sun-400)', marginBottom: 12 }}>Available financing</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 48, color: '#fff', margin: 0, letterSpacing: '-0.025em' }}>Clean water that fits your budget</h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'var(--spring-100)', maxWidth: 600, margin: '16px auto 0', lineHeight: 1.6 }}>
              Get the water you deserve now and pay over time. Flexible terms on approved credit — including 6 months no interest.
            </p>
          </div>
        </section>

        <section style={{ maxWidth: 1000, margin: '0 auto', padding: '64px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }} className="ss-fin-grid">
            {TIERS.map((t) => (
              <div key={t.term} style={{
                background: t.highlight ? 'var(--navy-700)' : 'var(--surface)',
                border: t.highlight ? '1px solid var(--navy-700)' : '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)', padding: '26px 20px', textAlign: 'center', boxShadow: 'var(--shadow-sm)', position: 'relative',
              }}>
                {t.highlight && <span style={{ position: 'absolute', top: -11, left: '50%', transform: 'translateX(-50%)', background: 'var(--sun-400)', color: 'var(--navy-900)', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: 'var(--radius-pill)', padding: '4px 12px', whiteSpace: 'nowrap' }}>Most popular</span>}
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: t.highlight ? 'var(--spring-200)' : 'var(--text-muted)', marginBottom: 10 }}>{t.term}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: t.highlight ? 22 : 24, color: t.highlight ? '#fff' : 'var(--navy-900)', lineHeight: 1.05, letterSpacing: '-0.01em' }}>{t.rate}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: t.highlight ? 'var(--spring-200)' : 'var(--text-muted)', marginTop: 4 }}>{t.note}</div>
                <div style={{ marginTop: 16, paddingTop: 14, borderTop: t.highlight ? '1px solid rgba(255,255,255,0.15)' : '1px solid var(--border)' }}>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, color: t.highlight ? 'var(--spring-200)' : 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Purchases</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: t.highlight ? 'var(--sun-400)' : 'var(--navy-700)', marginTop: 3 }}>{t.min}</div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--text-muted)', margin: '24px auto 0', maxWidth: 560 }}>
            Rates and terms shown are on approved credit. Contact us for full details and to apply.
          </p>

          <div style={{ marginTop: 36, background: 'var(--surface-water)', border: '1px solid var(--spring-100)', borderRadius: 'var(--radius-2xl)', padding: '36px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: 'var(--navy-900)', margin: 0, letterSpacing: '-0.02em' }}>Ready to apply?</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, color: 'var(--text-body)', margin: '5px 0 0' }}>Contact us for details — or start with a free water test and we{'\u2019'}ll quote it all together.</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Button variant="accent" size="lg" onClick={() => go('Contact')}>Apply for financing</Button>
              <a href="tel:18777501420" style={{ textDecoration: 'none' }}><Button variant="outline" size="lg" iconLeft={<Icon name="phone" size={18} />}>(877) 750-1420</Button></a>
            </div>
          </div>
        </section>

        <style dangerouslySetInnerHTML={{ __html: `@media (max-width: 760px){ .ss-fin-grid{ grid-template-columns:1fr 1fr !important; } } @media (max-width: 440px){ .ss-fin-grid{ grid-template-columns:1fr !important; } }` }} />
      </div>
    );
  }
  return FinancingPage;
})();
window.SSFinancingPage = SSFinancingPage;
