// Savanna Springs — Problem page template + Water Problems hub
(function () {
  const Icon = (props) => React.createElement(window.SSIcon, props);
  const TINTS = { water: 'var(--spring-100)', navy: 'var(--navy-50)', sun: 'var(--sun-100)', orange: '#ffe7d1' };
  const INKS = { water: 'var(--spring-600)', navy: 'var(--navy-700)', sun: 'var(--sun-700)', orange: 'var(--orange-600)' };

  function Breadcrumb({ trail, onNavigate }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--spring-200)', fontFamily: 'var(--font-body)', fontSize: 14, marginBottom: 16, flexWrap: 'wrap' }}>
        {trail.map((t, i) => (
          <React.Fragment key={i}>
            {t.key ? <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(t.key); }} style={{ color: 'var(--spring-200)', textDecoration: 'none' }}>{t.label}</a>
              : <span style={{ color: '#fff' }}>{t.label}</span>}
            {i < trail.length - 1 && <Icon name="chevronRight" size={14} color="var(--spring-300)" />}
          </React.Fragment>
        ))}
      </div>
    );
  }

  function ProblemPage({ problemKey, onNavigate }) {
    const { Card, Button } = window.SavannaSpringsDesignSystem_15883b;
    const p = window.SS_PROBLEMS[problemKey];
    if (!p) return null;
    const go = (k) => onNavigate && onNavigate(k);

    return (
      <div>
        {/* Hero */}
        <section style={{ background: 'var(--navy-700)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'var(--spring-500)', opacity: 0.28, right: -70, top: -110 }} />
          <div style={{ position: 'absolute', width: 80, height: 80, borderRadius: '50%', background: 'var(--orange-500)', opacity: 0.85, right: '46%', bottom: 26 }} />
          <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: '52px 24px 60px', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 40, alignItems: 'center' }} className="ss-wt-grid">
            <div>
              <Breadcrumb onNavigate={onNavigate} trail={[{ label: 'Home', key: 'Home' }, { label: 'Water Problems', key: 'Problems' }, { label: p.label }]} />
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sun-400)', marginBottom: 14 }}>{p.eyebrow}</div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 46, lineHeight: 1.06, letterSpacing: '-0.025em', color: '#fff', margin: 0 }}>{p.h1}</h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'var(--spring-100)', margin: '18px 0 28px', maxWidth: 520 }}>{p.lead}</p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
                <Button variant="accent" size="lg" iconRight={<Icon name="arrowRight" size={20} />} onClick={() => go('FreeTest')}>Get my free water test</Button>
                <a href="tel:18777501420" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, textDecoration: 'none' }}>
                  <span style={{ width: 42, height: 42, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="phone" size={19} color="var(--sun-400)" /></span>
                  (877) 750-1420
                </a>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: 168, height: 168, borderRadius: 'var(--radius-2xl)', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={p.icon} size={78} color="var(--sun-400)" />
              </div>
            </div>
          </div>
        </section>

        {/* Problem + Cause */}
        <section style={{ maxWidth: 1180, margin: '0 auto', padding: '72px 24px 8px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: p.cause ? '1fr 1fr' : '1fr', gap: 22 }} className="ss-grid-2">
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 32, boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <span style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: '#ffe7d1', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="alert" size={22} color="var(--orange-600)" /></span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--orange-600)' }}>The problem</span>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65, color: 'var(--navy-900)', margin: 0 }}>{p.problem}</p>
            </div>
            {p.cause && (
              <div style={{ background: 'var(--navy-50)', border: '1px solid var(--navy-100)', borderRadius: 'var(--radius-xl)', padding: 32 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <span style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'var(--navy-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="flask" size={22} color="var(--sun-400)" /></span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--navy-700)' }}>The cause</span>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65, color: 'var(--navy-900)', margin: 0 }}>{p.cause}</p>
              </div>
            )}
          </div>
        </section>

        {/* How we fix it */}
        <section style={{ maxWidth: 1180, margin: '0 auto', padding: '56px 24px 16px' }}>
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 8px' }}>
            <div className="ss-eyebrow" style={{ marginBottom: 10 }}>How we fix it</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 36, lineHeight: 1.08, letterSpacing: '-0.02em', color: 'var(--navy-900)', margin: 0 }}>Diagnose → Recommend → Install</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, marginTop: 40 }} className="ss-grid-3">
            {p.steps.map((s, i) => (
              <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: '30px 26px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 'var(--radius-lg)', background: 'var(--navy-700)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={s.icon} size={26} color="var(--sun-400)" /></div>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 34, color: 'var(--neutral-200)', lineHeight: 1 }}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--navy-900)', margin: '0 0 8px' }}>{s.label}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Payoff stats (optional) */}
        {p.payoff && (
          <section style={{ maxWidth: 1180, margin: '0 auto', padding: '24px 24px 8px' }}>
            <div style={{ background: 'var(--surface-water)', border: '1px solid var(--spring-100)', borderRadius: 'var(--radius-2xl)', padding: '34px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: 24, flexWrap: 'wrap' }}>
              {p.payoff.stats.map(([n, l]) => (
                <div key={l} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 40, color: 'var(--spring-600)', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--text-body)', marginTop: 8 }}>{l}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Recommended system spotlight */}
        <section style={{ maxWidth: 1180, margin: '0 auto', padding: '56px 24px 72px' }}>
          <div style={{ background: 'var(--navy-700)', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', display: 'grid', gridTemplateColumns: '1.5fr 1fr', boxShadow: 'var(--shadow-lg)' }} className="ss-grid-2">
            <div style={{ padding: '40px 44px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sun-400)', marginBottom: 14 }}>What we recommend</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: '#fff', margin: '0 0 14px', letterSpacing: '-0.02em' }}>{p.product.name}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--spring-100)', margin: '0 0 22px', maxWidth: 540 }}>{p.recommend}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 26 }}>
                {p.product.badges.map((b) => (
                  <span key={b} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.16)', borderRadius: 'var(--radius-pill)', padding: '6px 13px', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13, color: '#fff' }}>
                    <Icon name="check" size={13} color="var(--sun-400)" strokeWidth={2.6} /> {b}
                  </span>
                ))}
              </div>
              <Button variant="accent" onClick={() => go(p.product.key)} iconRight={<Icon name="arrowRight" size={18} />}>Explore this solution</Button>
            </div>
            <div style={{ background: 'linear-gradient(160deg, var(--navy-600), var(--navy-800))', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32, borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ width: 150, height: 220, borderRadius: 'var(--radius-lg)', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.16)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                <Icon name={p.icon} size={56} color="var(--spring-300)" />
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, color: 'var(--spring-200)', letterSpacing: '0.08em' }}>MADE IN USA</span>
              </div>
            </div>
          </div>
        </section>

        {/* Related problems */}
        <section style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto', padding: '56px 24px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, color: 'var(--navy-900)', margin: '0 0 24px' }}>Other water problems we solve</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="ss-grid-3">
              {p.related.map((rk) => {
                const r = window.SS_PROBLEMS[rk];
                return (
                  <Card key={rk} variant="elevated" hoverable padding="lg" onClick={() => go(rk)}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-lg)', background: TINTS[r.color], display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name={r.icon} size={24} color={INKS[r.color]} /></div>
                      <div>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--navy-900)', margin: 0 }}>{r.label}</h3>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, marginTop: 4, color: 'var(--spring-700)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13.5 }}>See the fix <Icon name="arrowRight" size={14} color="var(--spring-700)" /></span>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Free water test */}
        <window.SSFreeWaterTest onNavigate={onNavigate} heading={p.cta + ' — book your free water test'} />
      </div>
    );
  }
  window.SSProblemPage = ProblemPage;

  // ---- Water Problems hub ----
  function ProblemsHub({ onNavigate }) {
    const { Button } = window.SavannaSpringsDesignSystem_15883b;
    const go = (k) => onNavigate && onNavigate(k);
    const items = window.SS_PROBLEM_ORDER.map((k) => ({
      icon: window.SS_PROBLEMS[k].icon, color: window.SS_PROBLEMS[k].color,
      title: window.SS_PROBLEMS[k].label, body: window.SS_PROBLEM_BLURB[k], key: k,
    }));
    return (
      <div>
        <section style={{ background: 'var(--navy-700)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'var(--spring-500)', opacity: 0.26, right: -70, top: -110 }} />
          <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: '54px 24px 58px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sun-400)', marginBottom: 12 }}>Water problems</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 50, color: '#fff', margin: 0, letterSpacing: '-0.025em' }}>What{'\u2019'}s wrong with your water?</h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'var(--spring-100)', maxWidth: 620, margin: '16px auto 0', lineHeight: 1.6 }}>
              Smelly, hard, rusty, cloudy, or bad-tasting — we diagnose the real cause and fix it for good. Find your problem below, or start with a free in-home water test.
            </p>
            <div style={{ marginTop: 26 }}>
              <Button variant="accent" size="lg" onClick={() => go('FreeTest')} iconRight={<Icon name="arrowRight" size={20} />}>Get my free water test</Button>
            </div>
          </div>
        </section>
        <window.SSProblemPicker onNavigate={onNavigate} items={items} eyebrow="Pick your problem" title="Eight problems, one local team" sub="Each one custom-diagnosed and fixed at the source — for city water and private wells alike." />
        <window.SSHowItWorks onNavigate={onNavigate} />
        <window.SSFreeWaterTest onNavigate={onNavigate} />
      </div>
    );
  }
  window.SSProblemsHub = ProblemsHub;
})();
