// Savanna Springs — Homepage Hero
const SSHero = (function () {
  const Icon = (props) => React.createElement(window.SSIcon, props);
  function Trust({ icon, children }) {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--spring-100)', fontFamily: 'var(--font-body)', fontSize: 14.5, fontWeight: 500 }}>
        <Icon name={icon} size={18} color="var(--sun-400)" /> {children}
      </span>
    );
  }
  function Hero({ onNavigate }) {
    const { Button } = window.SavannaSpringsDesignSystem_15883b;
    return (
      <section style={{ position: 'relative', background: 'var(--navy-700)', overflow: 'hidden' }}>
        {/* photo on the right, scrimmed */}
        <div style={{
          position: 'absolute', inset: 0, left: '48%',
          backgroundImage: 'url(../../assets/img-hero-people.png)', backgroundSize: 'cover', backgroundPosition: 'center 30%',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--navy-700) 0%, var(--navy-700) 42%, rgba(31,43,110,0.82) 56%, rgba(31,43,110,0.2) 80%, rgba(31,43,110,0) 100%)' }} />
        {/* decorative blobs */}
        <div style={{ position: 'absolute', width: 360, height: 360, borderRadius: '50%', background: 'var(--spring-500)', opacity: 0.35, filter: 'blur(8px)', left: -120, top: -140 }} />
        <div style={{ position: 'absolute', width: 110, height: 110, borderRadius: '50%', background: 'var(--orange-500)', opacity: 0.9, right: '50%', bottom: 44 }} />

        <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: '80px 24px 88px' }}>
          <div style={{ maxWidth: 640 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--spring-300)', marginBottom: 18 }}>
              We make one thing perfectly clear…
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 58, lineHeight: 1.04, letterSpacing: '-0.025em', color: '#fff', margin: 0 }}>
              Whatever's wrong with your water, we make it <span style={{ color: 'var(--sun-400)' }}>perfectly clear.</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 19, lineHeight: 1.55, color: 'var(--spring-100)', margin: '22px 0 32px', maxWidth: 530 }}>
              Smelly, hard, rusty, or bad-tasting water? Savanna Springs diagnoses the real problem and fixes it for good — for homes and businesses across Youngstown and Western PA.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
              <Button variant="accent" size="lg" iconRight={<Icon name="arrowRight" size={20} />} onClick={() => onNavigate && onNavigate('FreeTest')}>Get my free water test</Button>
              <a href="tel:18777501420" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, textDecoration: 'none', padding: '4px 8px' }}>
                <span style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="phone" size={20} color="var(--sun-400)" />
                </span>
                (877) 750-1420
              </a>
            </div>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 36 }}>
              <Trust icon="star">Family owned since 2008</Trust>
              <Trust icon="shieldCheck">Ohio EPA-licensed operators</Trust>
              <Trust icon="badgeCheck">WQA Certified</Trust>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return Hero;
})();
window.SSHero = SSHero;
