// Savanna Springs — Product page template + Products hub
(function () {
  const Icon = (props) => React.createElement(window.SSIcon, props);
  const TINTS = { water: 'var(--spring-100)', navy: 'var(--navy-50)', sun: 'var(--sun-100)', orange: '#ffe7d1' };
  const INKS = { water: 'var(--spring-600)', navy: 'var(--navy-700)', sun: 'var(--sun-700)', orange: 'var(--orange-600)' };

  function Check({ children }) {
    return (
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
        <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--green-100)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none', marginTop: 1 }}>
          <Icon name="check" size={14} color="var(--green-700)" strokeWidth={2.6} />
        </span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--navy-900)', lineHeight: 1.45 }}>{children}</span>
      </div>
    );
  }

  function ProductPage({ productKey, onNavigate }) {
    const { Card, Button, Badge } = window.SavannaSpringsDesignSystem_15883b;
    const p = window.SS_PRODUCTS[productKey];
    if (!p) return null;
    const go = (k) => onNavigate && onNavigate(k);
    const showMade = !['Bottled', 'Salt'].includes(p.key);

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
                <a href="#" onClick={(e) => { e.preventDefault(); go('Products'); }} style={{ color: 'var(--spring-200)', textDecoration: 'none' }}>Products</a>
                <Icon name="chevronRight" size={14} color="var(--spring-300)" /><span style={{ color: '#fff' }}>{p.label}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sun-400)', marginBottom: 14 }}>{p.eyebrow}</div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 46, lineHeight: 1.06, letterSpacing: '-0.025em', color: '#fff', margin: 0 }}>{p.h1}</h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'var(--spring-100)', margin: '18px 0 24px', maxWidth: 540 }}>{p.lead}</p>
              {p.chips && (
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
                  {p.chips.map((c) => <span key={c} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 'var(--radius-pill)', padding: '6px 14px', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 13.5, color: '#fff' }}>{c}</span>)}
                </div>
              )}
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

        {/* Intro band */}
        {p.intro && (
          <section style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
            <div style={{ maxWidth: 940, margin: '0 auto', padding: '46px 24px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 18.5, lineHeight: 1.65, color: 'var(--text-body)', margin: 0 }}>{p.intro}</p>
            </div>
          </section>
        )}

        {/* Models */}
        {p.models && (
          <section style={{ maxWidth: 1180, margin: '0 auto', padding: '64px 24px' }}>
            {p.models.length > 1 && (
              <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 38px' }}>
                <div className="ss-eyebrow" style={{ marginBottom: 10 }}>The lineup</div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 34, color: 'var(--navy-900)', margin: 0, letterSpacing: '-0.02em' }}>Choose the right fit for your water</h2>
              </div>
            )}
            <div style={{ display: 'grid', gap: 24 }}>
              {p.models.map((m) => (
                <Card key={m.name} variant="elevated" padding="none">
                  <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr' }} className="ss-grid-2">
                    <div style={{ padding: 36 }}>
                      <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
                        {showMade && <Badge color="sun">Made in USA</Badge>}
                        {m.tag && <Badge color="water">{m.tag}</Badge>}
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 25, color: 'var(--navy-900)', margin: '0 0 10px', letterSpacing: '-0.02em' }}>{m.name}</h3>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-body)', margin: '0 0 22px', maxWidth: 540 }}>{m.blurb}</p>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px' }} className="ss-grid-2">
                        {m.features.map((f) => <Check key={f}>{f}</Check>)}
                      </div>
                      {m.warranty && (
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginTop: 22, padding: '12px 16px', background: 'var(--navy-50)', borderRadius: 'var(--radius-md)' }}>
                          <Icon name="shieldCheck" size={18} color="var(--navy-700)" style={{ marginTop: 1, flex: 'none' }} />
                          <span style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--navy-800)' }}><strong style={{ fontFamily: 'var(--font-display)' }}>Warranty:</strong> {m.warranty}</span>
                        </div>
                      )}
                      <div style={{ marginTop: 24 }}>
                        <Button variant="accent" onClick={() => go('FreeTest')}>Request a free water test</Button>
                      </div>
                    </div>
                    <div style={{ background: 'linear-gradient(160deg, var(--spring-50), var(--navy-50))', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 28 }}>
                      <div style={{ width: 150, height: 224, borderRadius: 'var(--radius-lg)', background: 'linear-gradient(180deg, var(--neutral-0), var(--neutral-100))', boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, position: 'relative' }}>
                        <div style={{ position: 'absolute', top: 14, right: 14, width: 18, height: 18, borderRadius: 4, background: 'var(--navy-700)' }} />
                        <Icon name={p.icon} size={54} color={INKS[p.color]} />
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, color: 'var(--navy-700)', letterSpacing: '0.06em', textAlign: 'center', padding: '0 10px' }}>MADE IN USA</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Segments (commercial) */}
        {p.segments && (
          <section style={{ maxWidth: 1180, margin: '0 auto', padding: '24px 24px 64px' }}>
            <div style={{ textAlign: 'center', marginBottom: 34 }}>
              <div className="ss-eyebrow" style={{ marginBottom: 10 }}>{p.segments.eyebrow}</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 34, color: 'var(--navy-900)', margin: 0, letterSpacing: '-0.02em' }}>{p.segments.title}</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="ss-grid-3">
              {p.segments.items.map((s) => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: '22px 24px', boxShadow: 'var(--shadow-sm)' }}>
                  <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-lg)', background: 'var(--navy-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name="factory" size={22} color="var(--navy-700)" /></span>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--navy-900)' }}>{s}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Highlights band */}
        {p.highlights && (
          <section style={{ background: 'var(--surface-water)', borderTop: '1px solid var(--spring-100)', borderBottom: '1px solid var(--spring-100)' }}>
            <div style={{ maxWidth: 1180, margin: '0 auto', padding: '64px 24px' }}>
              <div style={{ textAlign: 'center', marginBottom: 36 }}>
                <div className="ss-eyebrow" style={{ marginBottom: 10 }}>{p.highlights.eyebrow}</div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 34, color: 'var(--navy-900)', margin: 0, letterSpacing: '-0.02em' }}>{p.highlights.title}</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
                {p.highlights.items.map((e) => (
                  <div key={e} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, background: 'var(--surface)', borderRadius: 'var(--radius-xl)', padding: '20px 22px', boxShadow: 'var(--shadow-sm)' }}>
                    <span style={{ width: 34, height: 34, borderRadius: 'var(--radius-md)', background: 'var(--green-100)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name="leaf" size={18} color="var(--green-700)" /></span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.45, color: 'var(--navy-900)', fontWeight: 500 }}>{e}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Delivery info */}
        {p.delivery && (
          <section style={{ maxWidth: 1180, margin: '0 auto', padding: '56px 24px 8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 22, background: 'var(--navy-50)', border: '1px solid var(--navy-100)', borderRadius: 'var(--radius-2xl)', padding: '32px 36px', flexWrap: 'wrap' }}>
              <span style={{ width: 60, height: 60, borderRadius: 'var(--radius-lg)', background: 'var(--navy-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name="truck" size={30} color="var(--sun-400)" /></span>
              <div style={{ flex: 1, minWidth: 280 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: 'var(--navy-900)', margin: '0 0 6px' }}>{p.delivery.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{p.delivery.body}</p>
              </div>
            </div>
          </section>
        )}

        {/* Call-first CTA band (commercial) */}
        {p.callFirst && (
          <section style={{ maxWidth: 1180, margin: '0 auto', padding: '8px 24px 8px' }}>
            <div style={{ background: 'var(--sun-400)', borderRadius: 'var(--radius-2xl)', padding: '34px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: 'var(--navy-900)', margin: 0, letterSpacing: '-0.02em' }}>Let{'\u2019'}s talk through your project.</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--navy-800)', margin: '6px 0 0' }}>Every commercial system is designed and quoted around your needs.</p>
              </div>
              <a href="tel:18777501420" style={{ textDecoration: 'none' }}><Button variant="primary" size="lg" iconLeft={<Icon name="phone" size={20} />}>(877) 750-1420</Button></a>
            </div>
          </section>
        )}

        {/* Problems this solves */}
        {p.solves && (
          <section style={{ maxWidth: 1180, margin: '0 auto', padding: '56px 24px 8px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, color: 'var(--navy-900)', margin: '0 0 24px' }}>Problems this solves</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="ss-grid-3">
              {p.solves.map((sk) => {
                const r = window.SS_PROBLEMS[sk];
                return (
                  <Card key={sk} variant="elevated" hoverable padding="lg" onClick={() => go(sk)}>
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
          </section>
        )}

        {/* Free water test */}
        <window.SSFreeWaterTest onNavigate={onNavigate} heading={p.cta} />
      </div>
    );
  }
  window.SSProductPage = ProductPage;

  // ---- Products hub ----
  function ProductsHub({ onNavigate }) {
    const { Card, Button } = window.SavannaSpringsDesignSystem_15883b;
    const go = (k) => onNavigate && onNavigate(k);
    return (
      <div>
        <section style={{ background: 'var(--navy-700)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'var(--spring-500)', opacity: 0.26, right: -70, top: -110 }} />
          <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: '54px 24px 58px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sun-400)', marginBottom: 12 }}>Our products</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 48, color: '#fff', margin: 0, letterSpacing: '-0.025em' }}>American-made water treatment, built for your water.</h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'var(--spring-100)', maxWidth: 640, margin: '16px auto 0', lineHeight: 1.6 }}>
              We only install equipment made in America, custom-built and sized to your home. Browse the lineup, or start with a free water test.
            </p>
            <div style={{ marginTop: 26 }}>
              <Button variant="accent" size="lg" onClick={() => go('FreeTest')} iconRight={<Icon name="arrowRight" size={20} />}>Get my free water test</Button>
            </div>
          </div>
        </section>
        <section style={{ maxWidth: 1180, margin: '0 auto', padding: '72px 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }} className="ss-grid-3">
            {window.SS_PRODUCT_ORDER.map((k) => {
              const pr = window.SS_PRODUCTS[k];
              return (
                <Card key={k} variant="elevated" hoverable padding="lg" onClick={() => go(k)}>
                  <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-lg)', background: TINTS[pr.color], display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                    <Icon name={pr.icon} size={28} color={INKS[pr.color]} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, color: 'var(--navy-900)', margin: '0 0 8px' }}>{pr.label}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.55, color: 'var(--text-body)', margin: 0 }}>{window.SS_PRODUCT_BLURB[k]}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 16, color: 'var(--spring-700)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14.5 }}>Learn more <Icon name="arrowRight" size={16} color="var(--spring-700)" /></span>
                </Card>
              );
            })}
          </div>
        </section>
        <window.SSTrustStrip />
        <window.SSFreeWaterTest onNavigate={onNavigate} />
      </div>
    );
  }
  window.SSProductsHub = ProductsHub;
})();
