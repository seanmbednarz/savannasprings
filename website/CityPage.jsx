// Savanna Springs — City (service area) page template + Service Areas hub
(function () {
  const Icon = (props) => React.createElement(window.SSIcon, props);
  const TINTS = { water: 'var(--spring-100)', navy: 'var(--navy-50)', sun: 'var(--sun-100)', orange: '#ffe7d1' };
  const INKS = { water: 'var(--spring-600)', navy: 'var(--navy-700)', sun: 'var(--sun-700)', orange: 'var(--orange-600)' };

  function CityPage({ cityKey, onNavigate }) {
    const { Card, Button } = window.SavannaSpringsDesignSystem_15883b;
    const c = window.SS_CITIES[cityKey];
    if (!c) return null;
    const go = (k) => onNavigate && onNavigate(k);
    const services = window.SS_CITY_SERVICES[c.type] || window.SS_CITY_SERVICES.municipal;

    return (
      <div>
        {/* Hero */}
        <section style={{ background: 'var(--navy-700)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'var(--spring-500)', opacity: 0.28, right: -70, top: -110 }} />
          <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: '52px 24px 60px', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 40, alignItems: 'center' }} className="ss-wt-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--spring-200)', fontFamily: 'var(--font-body)', fontSize: 14, marginBottom: 16, flexWrap: 'wrap' }}>
                <a href="#" onClick={(e) => { e.preventDefault(); go('Home'); }} style={{ color: 'var(--spring-200)', textDecoration: 'none' }}>Home</a>
                <Icon name="chevronRight" size={14} color="var(--spring-300)" />
                <a href="#" onClick={(e) => { e.preventDefault(); go('ServiceAreas'); }} style={{ color: 'var(--spring-200)', textDecoration: 'none' }}>Service Areas</a>
                <Icon name="chevronRight" size={14} color="var(--spring-300)" /><span style={{ color: '#fff' }}>{c.city}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sun-400)', marginBottom: 14 }}>{c.county} County · ZIP {c.zip}</div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 44, lineHeight: 1.08, letterSpacing: '-0.025em', color: '#fff', margin: 0 }}>{c.h1}</h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'var(--spring-100)', margin: '18px 0 28px', maxWidth: 560 }}>{c.lead}</p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
                <Button variant="accent" size="lg" iconRight={<Icon name="arrowRight" size={20} />} onClick={() => go('FreeTest')}>Get my free water test</Button>
                <a href="tel:18777501420" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, textDecoration: 'none' }}>
                  <span style={{ width: 42, height: 42, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="phone" size={19} color="var(--sun-400)" /></span>
                  (877) 750-1420
                </a>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: 210, height: 168, borderRadius: 'var(--radius-2xl)', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.16)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                <Icon name="mapPin" size={56} color="var(--sun-400)" />
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: '#fff', textAlign: 'center', padding: '0 12px' }}>{c.city}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--spring-200)' }}>{c.county} County · {c.zip}</div>
              </div>
            </div>
          </div>
        </section>

        {/* City water explained */}
        <section style={{ maxWidth: 1180, margin: '0 auto', padding: '72px 24px 8px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40, alignItems: 'start' }} className="ss-grid-2">
            <div>
              <div className="ss-eyebrow" style={{ marginBottom: 10 }}>{c.city} water, explained</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: 'var(--navy-900)', margin: '0 0 16px', letterSpacing: '-0.02em' }}>Local water, diagnosed locally</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'var(--text-body)', margin: 0 }}>{c.context}</p>
              {c.hometown && (
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 18, background: 'var(--sun-100)', border: '1px solid var(--sun-200)', borderRadius: 'var(--radius-pill)', padding: '8px 16px' }}>
                  <Icon name="home" size={16} color="var(--sun-700)" />
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--sun-800)' }}>Our hometown — fastest service in the Valley</span>
                </div>
              )}
            </div>
            <div style={{ background: 'var(--navy-50)', border: '1px solid var(--navy-100)', borderRadius: 'var(--radius-xl)', padding: 28 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--navy-700)', marginBottom: 16 }}>Most common here</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {c.mostCommon.map((m) => (
                  <div key={m} style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                    <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--navy-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name="droplet" size={15} color="var(--sun-400)" /></span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--navy-900)', fontWeight: 500 }}>{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What we fix */}
        <section style={{ maxWidth: 1180, margin: '0 auto', padding: '56px 24px 8px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, color: 'var(--navy-900)', margin: '0 0 24px', letterSpacing: '-0.02em' }}>What we fix in {c.city}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="ss-grid-3">
            {c.problems.map((pk) => {
              const r = window.SS_PROBLEMS[pk];
              return (
                <Card key={pk} variant="elevated" hoverable padding="lg" onClick={() => go(pk)}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-lg)', background: TINTS[r.color], display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name={r.icon} size={24} color={INKS[r.color]} /></div>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16.5, color: 'var(--navy-900)', margin: 0, lineHeight: 1.2 }}>{r.label}</h3>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, marginTop: 3, color: 'var(--spring-700)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13 }}>See the fix <Icon name="arrowRight" size={13} color="var(--spring-700)" /></span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Services */}
        <section style={{ maxWidth: 1180, margin: '0 auto', padding: '56px 24px 16px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, color: 'var(--navy-900)', margin: '0 0 24px', letterSpacing: '-0.02em' }}>Services in {c.city}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }} className="ss-grid-4">
            {services.map((sk) => {
              const pr = window.SS_PRODUCTS[sk];
              return (
                <Card key={sk} variant="elevated" hoverable padding="lg" onClick={() => go(sk)}>
                  <div style={{ width: 50, height: 50, borderRadius: 'var(--radius-lg)', background: TINTS[pr.color], display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}><Icon name={pr.icon} size={26} color={INKS[pr.color]} /></div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--navy-900)', margin: '0 0 6px' }}>{pr.label}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.5, color: 'var(--text-body)', margin: 0 }}>{window.SS_PRODUCT_BLURB[sk]}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* How it works */}
        <window.SSHowItWorks onNavigate={onNavigate} />

        {/* Reviews */}
        <window.SSReviews onNavigate={onNavigate} count={3} title={`Trusted across ${c.city} and the Valley`} sub={"Real homeowners and businesses we\u2019ve helped nearby. Live Google reviews \u2014 here are a few favorites."} />

        {/* Proudly serving + chips */}
        <section style={{ background: 'var(--navy-700)' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto', padding: '60px 24px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, color: '#fff', margin: '0 0 8px', letterSpacing: '-0.02em' }}>
              Proudly serving {c.city} &amp; nearby {c.nearby.slice(0, 3).join(', ')}
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.5, color: 'var(--spring-100)', margin: '0 auto 28px', maxWidth: 620 }}>
              From our shop in Lowellville we cover Mahoning, Columbiana &amp; Trumbull counties plus Western PA. Find your town:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
              {window.SS_CITY_ORDER.map((k) => {
                const cc = window.SS_CITIES[k];
                const active = k === c.key;
                return (
                  <button key={k} onClick={() => go(k)} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer',
                    background: active ? 'var(--sun-400)' : 'rgba(255,255,255,0.07)',
                    border: active ? '1px solid var(--sun-400)' : '1px solid rgba(255,255,255,0.16)',
                    borderRadius: 'var(--radius-pill)', padding: '10px 17px',
                    fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15,
                    color: active ? 'var(--navy-900)' : '#fff',
                  }}>
                    <Icon name="mapPin" size={15} color={active ? 'var(--navy-700)' : 'var(--sun-400)'} /> {cc.city}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Free water test, ZIP prefilled */}
        <window.SSFreeWaterTest onNavigate={onNavigate} defaultZip={c.zip} heading={`Book your free in-home water test in ${c.city}`} />
      </div>
    );
  }
  window.SSCityPage = CityPage;

  // ---- Service Areas hub ----
  function ServiceAreasHub({ onNavigate }) {
    const { Card, Button } = window.SavannaSpringsDesignSystem_15883b;
    const go = (k) => onNavigate && onNavigate(k);
    return (
      <div>
        <section style={{ background: 'var(--navy-700)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'var(--spring-500)', opacity: 0.26, right: -70, top: -110 }} />
          <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: '54px 24px 58px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sun-400)', marginBottom: 12 }}>Service areas</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 46, color: '#fff', margin: 0, letterSpacing: '-0.025em' }}>Water treatment across Youngstown, the Mahoning Valley &amp; Western PA</h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'var(--spring-100)', maxWidth: 640, margin: '16px auto 0', lineHeight: 1.6 }}>
              From our base in Lowellville, we serve Mahoning, Columbiana &amp; Trumbull counties plus Western PA — city water and private wells alike.
            </p>
            <div style={{ marginTop: 26 }}>
              <Button variant="accent" size="lg" onClick={() => go('FreeTest')} iconRight={<Icon name="arrowRight" size={20} />}>Get my free water test</Button>
            </div>
          </div>
        </section>
        <section style={{ maxWidth: 1180, margin: '0 auto', padding: '72px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }} className="ss-grid-3">
            {window.SS_CITY_ORDER.map((k) => {
              const cc = window.SS_CITIES[k];
              return (
                <Card key={k} variant="elevated" hoverable padding="lg" onClick={() => go(k)}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                    <div style={{ width: 50, height: 50, borderRadius: 'var(--radius-lg)', background: 'var(--navy-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name="mapPin" size={26} color="var(--navy-700)" /></div>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, color: 'var(--navy-900)', margin: 0, lineHeight: 1.15 }}>{cc.city}</h3>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>{cc.county} County · {cc.zip}</div>
                    </div>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.5, color: 'var(--text-body)', margin: 0 }}>Most common: {cc.mostCommon[0]}.</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 14, color: 'var(--spring-700)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14 }}>View {cc.city} <Icon name="arrowRight" size={15} color="var(--spring-700)" /></span>
                </Card>
              );
            })}
          </div>
        </section>
        <window.SSFreeWaterTest onNavigate={onNavigate} />
      </div>
    );
  }
  window.SSServiceAreasHub = ServiceAreasHub;
})();
