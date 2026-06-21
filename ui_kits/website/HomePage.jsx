// Savanna Springs — Homepage (problem-first, drives to free water test)
const SSHomePage = (function () {
  const Icon = (props) => React.createElement(window.SSIcon, props);

  const WHY = [
    { icon: 'home', title: 'Local & family owned', body: 'Named after our daughter Savannah — serving the Valley since 2008. You know who the owners are.' },
    { icon: 'award', title: 'American-made equipment', body: 'A proud authorized Water-Right® dealer. Custom-built, made in the USA — built to last.' },
    { icon: 'wrench', title: 'We service everything', body: 'All makes and models, plus salt and water delivery. We keep your system running for the long haul.' },
    { icon: 'dollarSign', title: 'Honest & affordable', body: 'Right-sized systems and flexible financing — including 6 months no interest. No pressure, ever.' },
  ];
  const PRODUCTS = [
    { icon: 'droplet', color: 'water', title: 'Water softeners', body: 'Impression Plus® softeners end hard-water scale, spots and dry skin.', key: 'Softeners' },
    { icon: 'beaker', color: 'navy', title: 'Reverse osmosis', body: 'Bottle-quality drinking water straight from your own tap.', key: 'RO' },
    { icon: 'flame', color: 'orange', title: 'Iron & sulfur filters', body: 'Clear iron, sulfur and the rotten-egg smell — self-sanitizing media.', key: 'IronSulfur' },
    { icon: 'shield', color: 'water', title: 'Whole-house filtration', body: 'Custom media systems for cleaner, safer water at every tap.', key: 'WholeHouse' },
    { icon: 'truck', color: 'sun', title: 'Salt delivery', body: 'We deliver and load Dura-Cube® softener salt — never haul a bag again.', key: 'Salt' },
    { icon: 'calendar', color: 'navy', title: 'Equipment rentals', body: 'Try soft water with no upfront cost — one month free rent.', key: 'Rentals' },
  ];
  const SPECIALS = [
    ['refresh', 'One month free rent', 'on Impression Plus® softeners'],
    ['truck', 'One year of free salt', 'with a Water-Right® softener'],
    ['droplet', 'RO for pennies a day', 'bottle-quality drinking water'],
    ['dollarSign', '6 months no interest', 'flexible financing available'],
  ];
  const CITIES = (window.SS_CITY_ORDER || []).map((k) => ({ key: k, label: window.SS_CITIES[k].city }));

  const TINTS = { water: 'var(--spring-100)', navy: 'var(--navy-50)', sun: 'var(--sun-100)', orange: '#ffe7d1' };
  const INKS = { water: 'var(--spring-600)', navy: 'var(--navy-700)', sun: 'var(--sun-700)', orange: 'var(--orange-600)' };

  function HomePage({ onNavigate }) {
    const { Card, Button } = window.SavannaSpringsDesignSystem_15883b;
    const Hero = window.SSHero;
    const SectionHead = window.SSSectionHead;
    const go = (k) => onNavigate && onNavigate(k);

    return (
      <div>
        <Hero onNavigate={onNavigate} />
        <window.SSTrustStrip />

        {/* 1 — Problem picker */}
        <window.SSProblemPicker onNavigate={onNavigate} />

        {/* 2 — How it works */}
        <window.SSHowItWorks onNavigate={onNavigate} />

        {/* 3 — Why Savanna Springs */}
        <section style={{ padding: '80px 24px', maxWidth: 1180, margin: '0 auto' }}>
          <SectionHead eyebrow="Why Savanna Springs" title="A water team your neighbors actually trust" sub="Not a faceless sales outfit — a family business that fixes the real problem and stands behind the work." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginTop: 46 }} className="ss-grid-4">
            {WHY.map((w) => (
              <div key={w.title} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 28, boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ width: 54, height: 54, borderRadius: 'var(--radius-lg)', background: 'var(--navy-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <Icon name={w.icon} size={27} color="var(--navy-700)" />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18.5, color: 'var(--navy-900)', margin: '0 0 8px' }}>{w.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.55, color: 'var(--text-body)', margin: 0 }}>{w.body}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 28, flexWrap: 'wrap', marginTop: 40, padding: '24px 0 0', borderTop: '1px solid var(--border)' }}>
            {[['2008', 'Family owned since'], ['35+ yrs', 'Combined experience'], ['20-yr', 'Warranties available'], ['EPA', 'Licensed operators']].map(([n, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: 'var(--navy-700)', lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--text-muted)', marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 4 — Products */}
        <section style={{ background: 'var(--surface-water)', borderTop: '1px solid var(--spring-100)', borderBottom: '1px solid var(--spring-100)' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto', padding: '80px 24px' }}>
            <SectionHead eyebrow="Our products" title="American-made, built for your water" sub="We only install equipment made in America, custom-built and sized to your home." />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, marginTop: 44 }} className="ss-grid-3">
              {PRODUCTS.map((p) => (
                <Card key={p.title} variant="elevated" hoverable padding="lg" onClick={() => go(p.key)}>
                  <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-lg)', background: TINTS[p.color], display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                    <Icon name={p.icon} size={28} color={INKS[p.color]} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--navy-900)', margin: '0 0 8px' }}>{p.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.55, color: 'var(--text-body)', margin: 0 }}>{p.body}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 16, color: 'var(--spring-700)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14.5 }}>
                    Learn more <Icon name="arrowRight" size={16} color="var(--spring-700)" />
                  </span>
                </Card>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 34 }}>
              <Button variant="primary" onClick={() => go('Products')} iconRight={<Icon name="arrowRight" size={18} />}>See all products</Button>
            </div>
          </div>
        </section>

        {/* 5 — Service area */}
        <section style={{ background: 'var(--navy-700)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'var(--spring-500)', opacity: 0.25, right: -80, top: -100 }} />
          <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: '78px 24px', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 52, alignItems: 'center' }} className="ss-wt-grid">
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sun-400)', marginBottom: 12 }}>Service area</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 40, lineHeight: 1.06, letterSpacing: '-0.02em', color: '#fff', margin: 0 }}>Serving Youngstown, the Mahoning Valley &amp; Western PA</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 17.5, lineHeight: 1.6, color: 'var(--spring-100)', margin: '16px 0 24px', maxWidth: 460 }}>
                From our shop on River Road in Lowellville, we serve Mahoning, Columbiana &amp; Trumbull counties plus Western PA — city water and private wells alike.
              </p>
              <Button variant="accent" onClick={() => go('ServiceAreas')} iconRight={<Icon name="arrowRight" size={18} />}>Find your town</Button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {CITIES.map((c) => (
                <button key={c.key} onClick={() => go(c.key)} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.16)',
                  borderRadius: 'var(--radius-pill)', padding: '11px 18px', cursor: 'pointer',
                  fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15.5, color: '#fff',
                }}>
                  <Icon name="mapPin" size={16} color="var(--sun-400)" /> {c.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 6 — Reviews */}
        <window.SSReviews onNavigate={onNavigate} count={3} />

        {/* 7 — Specials & financing band */}
        <section style={{ background: 'var(--sun-400)' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto', padding: '60px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap', marginBottom: 30 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--navy-700)', marginBottom: 10 }}>Specials &amp; financing</div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--navy-900)', margin: 0 }}>Better water, made affordable</h2>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <Button variant="primary" onClick={() => go('Specials')}>See all specials</Button>
                <Button variant="outline" onClick={() => go('Financing')} style={{ borderColor: 'var(--navy-700)', color: 'var(--navy-800)' }}>Financing</Button>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }} className="ss-grid-4">
              {SPECIALS.map(([icon, title, body]) => (
                <div key={title} style={{ background: 'rgba(255,255,255,0.55)', border: '1px solid rgba(31,43,110,0.12)', borderRadius: 'var(--radius-xl)', padding: 24 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-lg)', background: 'var(--navy-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Icon name={icon} size={24} color="var(--sun-400)" />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 19, color: 'var(--navy-900)', margin: '0 0 4px', lineHeight: 1.15 }}>{title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--navy-800)', margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8 — Free water test (final CTA + form) */}
        <window.SSFreeWaterTest
          onNavigate={onNavigate}
          heading="Ready to make your water perfectly clear?"
          sub="Book your free, no-pressure in-home water test. A licensed operator will be in touch within 24 business hours to schedule." />
      </div>
    );
  }
  return HomePage;
})();
window.SSHomePage = SSHomePage;
