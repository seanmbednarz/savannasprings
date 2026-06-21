// Savanna Springs — Reviews page
const SSReviewsPage = (function () {
  const Icon = (props) => React.createElement(window.SSIcon, props);
  function ReviewsPage({ onNavigate }) {
    const { Button } = window.SavannaSpringsDesignSystem_15883b;
    const go = (k) => onNavigate && onNavigate(k);
    return (
      <div>
        <section style={{ background: 'var(--navy-700)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'var(--spring-500)', opacity: 0.26, right: -70, top: -110 }} />
          <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: '54px 24px 56px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sun-400)', marginBottom: 12 }}>Reviews</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 50, color: '#fff', margin: 0, letterSpacing: '-0.025em' }}>What our neighbors say</h1>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginTop: 20, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.16)', borderRadius: 'var(--radius-pill)', padding: '12px 22px' }}>
              <span style={{ display: 'inline-flex', gap: 2 }}>{[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" size={20} color="var(--sun-400)" fill="var(--sun-400)" />)}</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: '#fff' }}>5.0 average · loved across the Valley</span>
            </div>
          </div>
        </section>

        <window.SSReviews onNavigate={onNavigate} count={6} eyebrow="Real customers" title="Reviews from real installs" sub={"Live Google reviews stream in here via Elfsight \u2014 these are a few of our favorites."} />

        {/* Elfsight note */}
        <section style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, background: 'var(--surface-water)', border: '1px dashed var(--spring-300)', borderRadius: 'var(--radius-xl)', padding: '20px 26px', justifyContent: 'center', textAlign: 'center', flexWrap: 'wrap' }}>
            <Icon name="star6" size={22} color="var(--spring-600)" />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-body)' }}>Live Google reviews load here via <strong style={{ color: 'var(--navy-700)' }}>Elfsight</strong> — always up to date, straight from your neighbors.</span>
          </div>
        </section>

        {/* CTA */}
        <section style={{ maxWidth: 1180, margin: '0 auto', padding: '40px 24px 72px' }}>
          <div style={{ background: 'var(--sun-400)', borderRadius: 'var(--radius-2xl)', padding: '40px 44px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, color: 'var(--navy-900)', margin: 0, letterSpacing: '-0.02em' }}>Want results like these?</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.5, color: 'var(--navy-800)', margin: '6px 0 0' }}>Start with a free, no-pressure in-home water test.</p>
            </div>
            <Button variant="primary" size="lg" onClick={() => go('FreeTest')} iconRight={<Icon name="arrowRight" size={20} />}>Book my free water test</Button>
          </div>
        </section>
      </div>
    );
  }
  return ReviewsPage;
})();
window.SSReviewsPage = SSReviewsPage;
