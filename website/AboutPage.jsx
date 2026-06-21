// Savanna Springs — About / Our Story page
const SSAboutPage = (function () {
  const Icon = (props) => React.createElement(window.SSIcon, props);
  const VALUES = [
    { icon: 'home', title: 'Family, not a sales floor', body: 'We\u2019re not a slick, faceless outfit. You know who the owners are — and that family culture still runs the company every day.' },
    { icon: 'shieldCheck', title: 'Honest, prompt service', body: 'Take care of customers with the best products and fair, honest service, and they take care of us. It\u2019s worked for over a decade.' },
    { icon: 'award', title: 'American-made quality', body: 'A proud Water-Right® dealer installing custom-built, made-in-USA systems — backed by warranties up to 20 years.' },
    { icon: 'badgeCheck', title: 'Licensed expertise', body: 'Ohio EPA Licensed Operators with 35+ years of combined experience, and a WQA Certified Water Specialist on the team.' },
  ];
  const STATS = [['2008', 'Family owned since'], ['35+ yrs', 'Combined experience'], ['Water-Right®', 'Authorized dealer'], ['20-yr', 'Warranties available']];
  const CREDS = ['Ohio EPA Licensed Operators', 'Water-Right® Authorized Dealer', 'WQA Certified Water Specialist', 'Regional Chamber member'];

  function AboutPage({ onNavigate }) {
    const { Button } = window.SavannaSpringsDesignSystem_15883b;
    const go = (k) => onNavigate && onNavigate(k);
    return (
      <div>
        {/* Hero split */}
        <section style={{ background: 'var(--navy-700)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, left: '54%', backgroundImage: 'url(../../assets/img-hero-people.png)', backgroundSize: 'cover', backgroundPosition: 'center 30%' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--navy-700) 0%, var(--navy-700) 46%, rgba(31,43,110,0.7) 60%, rgba(31,43,110,0.1) 82%, rgba(31,43,110,0) 100%)' }} />
          <div style={{ position: 'absolute', width: 120, height: 120, borderRadius: '50%', background: 'var(--orange-500)', opacity: 0.85, right: '48%', bottom: 36 }} />
          <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: '64px 24px 72px' }}>
            <div style={{ maxWidth: 600 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sun-400)', marginBottom: 16 }}>Our story</div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 50, lineHeight: 1.05, letterSpacing: '-0.025em', color: '#fff', margin: 0 }}>A family business, named after our daughter.</h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 18.5, lineHeight: 1.6, color: 'var(--spring-100)', margin: '20px 0 30px', maxWidth: 480 }}>
                The name came from the owners’ daughter, Savannah — and that family culture has run the company since 2008.
              </p>
              <Button variant="accent" size="lg" onClick={() => go('FreeTest')} iconRight={<Icon name="arrowRight" size={20} />}>Join the family — book a free test</Button>
            </div>
          </div>
        </section>

        {/* Story */}
        <section style={{ maxWidth: 820, margin: '0 auto', padding: '72px 24px 56px' }}>
          <div className="ss-eyebrow" style={{ marginBottom: 12 }}>Since 2008</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 34, color: 'var(--navy-900)', margin: '0 0 18px', letterSpacing: '-0.02em' }}>You know who the owners are.</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.75, color: 'var(--text-body)', margin: '0 0 18px' }}>
            Savanna Springs has been family owned and operated since 2008. The name came from the owners’ daughter, Savannah, and that family culture still shapes how we treat every customer. We’re not a slick, faceless sales outfit — when you call, you reach the people whose name is on the door.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.75, color: 'var(--text-body)', margin: 0 }}>
            Our belief is simple: take care of customers with the best products and prompt, honest service at a fair price, and they’ll take care of us. That’s worked for over a decade — and for thousands of neighbors across the Mahoning Valley and Western PA.
          </p>
        </section>

        {/* Values */}
        <section style={{ background: 'var(--surface-water)', borderTop: '1px solid var(--spring-100)', borderBottom: '1px solid var(--spring-100)' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto', padding: '72px 24px' }}>
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 44px' }}>
              <div className="ss-eyebrow" style={{ marginBottom: 10 }}>What we stand for</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 34, color: 'var(--navy-900)', margin: 0, letterSpacing: '-0.02em' }}>The same values since day one</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="ss-grid-4">
              {VALUES.map((v) => (
                <div key={v.title} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 28, boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ width: 54, height: 54, borderRadius: 'var(--radius-lg)', background: 'var(--navy-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}><Icon name={v.icon} size={27} color="var(--navy-700)" /></div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--navy-900)', margin: '0 0 8px' }}>{v.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.55, color: 'var(--text-body)', margin: 0 }}>{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* By the numbers + credentials */}
        <section style={{ maxWidth: 1180, margin: '0 auto', padding: '72px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 44 }} className="ss-grid-4">
            {STATS.map(([n, l]) => (
              <div key={l} style={{ textAlign: 'center', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: '28px 20px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 34, color: 'var(--navy-700)', lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-body)', marginTop: 8 }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            {CREDS.map((cr) => (
              <span key={cr} style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: 'var(--navy-50)', border: '1px solid var(--navy-100)', borderRadius: 'var(--radius-pill)', padding: '10px 18px', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14.5, color: 'var(--navy-800)' }}>
                <Icon name="badgeCheck" size={17} color="var(--spring-600)" /> {cr}
              </span>
            ))}
          </div>
        </section>

        <window.SSFreeWaterTest onNavigate={onNavigate} heading="Join the family — book your free water test" />
      </div>
    );
  }
  return AboutPage;
})();
window.SSAboutPage = SSAboutPage;
