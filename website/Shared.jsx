// Savanna Springs — Reusable homepage / page sections
// Exposes: SSSectionHead, SSTrustStrip, SSProblemPicker, SSHowItWorks, SSReviews
(function () {
  const Icon = (props) => React.createElement(window.SSIcon, props);

  const TINTS = { water: 'var(--spring-100)', navy: 'var(--navy-50)', sun: 'var(--sun-100)', orange: '#ffe7d1', green: 'var(--green-100)' };
  const INKS = { water: 'var(--spring-600)', navy: 'var(--navy-700)', sun: 'var(--sun-700)', orange: 'var(--orange-600)', green: 'var(--green-700)' };

  // ---- Section heading (eyebrow → H2 → sub) ----
  function SectionHead({ eyebrow, title, sub, align = 'center', dark = false, maxWidth = 740 }) {
    return (
      <div style={{ textAlign: align, maxWidth, margin: align === 'center' ? '0 auto' : 0 }}>
        {eyebrow && <div className="ss-eyebrow" style={{ marginBottom: 10, color: dark ? 'var(--sun-400)' : undefined }}>{eyebrow}</div>}
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 42, lineHeight: 1.06, letterSpacing: '-0.02em', color: dark ? '#fff' : 'var(--navy-900)', margin: 0 }}>{title}</h2>
        {sub && <p style={{ fontFamily: 'var(--font-body)', fontSize: 17.5, lineHeight: 1.6, color: dark ? 'var(--spring-100)' : 'var(--text-body)', marginTop: 14 }}>{sub}</p>}
      </div>
    );
  }
  window.SSSectionHead = SectionHead;

  // ---- Trust strip ----
  function TrustStrip() {
    const ITEMS = [
      ['star', 'Since 2008'],
      ['badgeCheck', 'WQA Certified'],
      ['shieldCheck', 'Water-Right® Dealer'],
      ['home', 'Made in USA'],
      ['wrench', 'We service all makes'],
    ];
    return (
      <div style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '18px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
          {ITEMS.map(([icon, label], i) => (
            <React.Fragment key={label}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: 'var(--navy-800)' }}>
                <Icon name={icon} size={18} color="var(--spring-600)" /> {label}
              </span>
              {i < ITEMS.length - 1 && <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--neutral-300)' }} className="ss-dot" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
  window.SSTrustStrip = TrustStrip;

  // ---- Problem picker grid ----
  const DEFAULT_PROBLEMS = [
    { icon: 'wind', color: 'sun', title: 'Rotten-egg smell', body: 'That sulfur odor in your tap and shower water.', key: 'Smelly' },
    { icon: 'droplet', color: 'water', title: 'Hard water & scale', body: 'Spotty dishes, crusty faucets, dry skin, more soap.', key: 'HardWater' },
    { icon: 'flame', color: 'orange', title: 'Rust & orange stains', body: 'Stains in sinks, tubs, toilets, and laundry.', key: 'Rust' },
    { icon: 'beaker', color: 'navy', title: 'Bad-tasting water', body: 'Cloudy, metallic, or chemical-tasting tap water.', key: 'Taste' },
    { icon: 'home', color: 'water', title: 'Well water problems', body: 'Iron, sulfur, sediment, and bacteria from a well.', key: 'Well' },
    { icon: 'flask', color: 'sun', title: 'Chlorine taste & smell', body: 'That "pool water" smell from city water.', key: 'Chlorine' },
  ];
  function ProblemPicker({ onNavigate, items = DEFAULT_PROBLEMS, eyebrow = 'Start with your problem', title = "What's wrong with your water?", sub = 'Pick what sounds like your home — we diagnose the real cause, then fix it for good. Not sure? Start with a free in-home water test.' }) {
    const { Card } = window.SavannaSpringsDesignSystem_15883b;
    return (
      <section style={{ padding: '78px 24px', maxWidth: 1180, margin: '0 auto' }}>
        <SectionHead eyebrow={eyebrow} title={title} sub={sub} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, marginTop: 44 }} className="ss-grid-3">
          {items.map((p) => (
            <Card key={p.title} variant="elevated" hoverable padding="lg" onClick={() => onNavigate && onNavigate(p.key)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-lg)', background: TINTS[p.color], display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                  <Icon name={p.icon} size={28} color={INKS[p.color]} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--navy-900)', margin: 0, lineHeight: 1.15 }}>{p.title}</h3>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.55, color: 'var(--text-body)', margin: '16px 0 0' }}>{p.body}</p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 16, color: 'var(--spring-700)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14.5 }}>
                See the fix <Icon name="arrowRight" size={16} color="var(--spring-700)" />
              </span>
            </Card>
          ))}
        </div>
      </section>
    );
  }
  window.SSProblemPicker = ProblemPicker;

  // ---- How it works (3-step) ----
  function HowItWorks({ onNavigate, dark = false }) {
    const STEPS = [
      { n: '01', icon: 'search', title: 'We diagnose', body: 'A free in-home water test for hardness, iron, pH and chlorine — so we treat the real problem, not a guess.' },
      { n: '02', icon: 'clipboard', title: 'We recommend', body: 'A custom system, right-sized to your water, your home and your budget. No upsell, no pressure.' },
      { n: '03', icon: 'truck', title: 'We install', body: 'Professional installation by our licensed team — and we service all makes and models for the long haul.' },
    ];
    const bg = dark ? 'transparent' : 'var(--surface-water)';
    return (
      <section style={{ background: bg, borderTop: dark ? 'none' : '1px solid var(--spring-100)', borderBottom: dark ? 'none' : '1px solid var(--spring-100)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '78px 24px' }}>
          <SectionHead eyebrow="How it works" title="Diagnose → Recommend → Install" sub="Three simple steps from problem water to water you love." dark={dark} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, marginTop: 46 }} className="ss-grid-3">
            {STEPS.map((s, i) => (
              <div key={s.n} style={{ position: 'relative', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: '32px 28px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                  <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-lg)', background: 'var(--navy-700)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={s.icon} size={28} color="var(--sun-400)" />
                  </div>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 38, color: 'var(--neutral-200)', lineHeight: 1 }}>{s.n}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--navy-900)', margin: '0 0 8px' }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  window.SSHowItWorks = HowItWorks;

  // ---- Reviews ----
  const REVIEWS = [
    { q: 'Beyond happy with the customer service and attention to detail. They did a water test to make sure we got the best system for our home. Highly recommend!', n: 'Madison M.' },
    { q: 'Super job! Matt and Steve were excellent installers — very clean and responsive. Great price with even better service. We just ordered an RO system too.', n: 'Margaret F.' },
    { q: 'Love our new water softener and reverse osmosis system. Even our heating guy commented on the quality of the work.', n: 'Brian F.' },
    { q: "I don't have to think about anything. You show up and deliver my salt, and if something isn't working you fix it.", n: 'Jessica C.' },
    { q: 'The softener and reverse osmosis systems are GREAT! When we travel, we truly miss the water we have at home.', n: 'Drew C.' },
    { q: 'I recommend Savanna Springs in every home. Hated how hard our water was — my skin, the detergent, even the taste. Not anymore.', n: 'Dom L.' },
  ];
  function Reviews({ onNavigate, count = 3, eyebrow = 'Reviews', title = 'What our neighbors say', sub = 'Real homeowners across the Mahoning Valley and Western PA. Live Google reviews — here are a few favorites.' }) {
    const { Avatar, Button } = window.SavannaSpringsDesignSystem_15883b;
    const items = REVIEWS.slice(0, count);
    return (
      <section style={{ padding: '78px 24px', maxWidth: 1180, margin: '0 auto' }}>
        <SectionHead eyebrow={eyebrow} title={title} sub={sub} />
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(count, 3)}, 1fr)`, gap: 22, marginTop: 44 }} className="ss-grid-3">
          {items.map((r) => (
            <div key={r.n} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 30, boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column' }}>
              <Icon name="quote" size={30} color="var(--spring-300)" fill="var(--spring-100)" />
              <div style={{ display: 'inline-flex', gap: 2, margin: '14px 0 12px' }}>
                {[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" size={17} color="var(--sun-400)" fill="var(--sun-400)" />)}
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.6, color: 'var(--navy-900)', margin: '0 0 20px', flex: 1 }}>"{r.q}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                <Avatar name={r.n} color="navy" />
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--navy-900)' }}>{r.n}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 34 }}>
          <Button variant="outline" onClick={() => onNavigate && onNavigate('Reviews')} iconRight={<Icon name="arrowRight" size={18} />}>Read all reviews</Button>
        </div>
      </section>
    );
  }
  window.SSReviews = Reviews;
})();
