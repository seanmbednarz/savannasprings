// Savanna Springs — Gallery (before & after) page
const SSGalleryPage = (function () {
  const Icon = (props) => React.createElement(window.SSIcon, props);

  const GROUPS = [
    { title: 'Rust & iron stains', icon: 'flame', items: [
      { before: 'rust-ringed toilet tank', after: 'spotless white tank', problem: 'Rust' },
      { before: 'orange-stained tub & fixtures', after: 'clean white tub', problem: 'Rust' },
      { before: 'iron-stained laundry', after: 'bright, unstained wash', problem: 'Well' },
    ] },
    { title: 'Hard-water scale', icon: 'droplet', items: [
      { before: 'scaled, crusty faucet', after: 'clear, spot-free faucet', problem: 'HardWater' },
      { before: 'cloudy, spotted glassware', after: 'crystal-clear glasses', problem: 'HardWater' },
      { before: 'scaled shower head', after: 'full-flow clean head', problem: 'HardWater' },
    ] },
    { title: 'Clean installs', icon: 'wrench', items: [
      { before: 'old, leaking softener', after: 'tidy Impression Plus® install', problem: 'Softeners' },
      { before: 'cluttered utility corner', after: 'neat softener + RO setup', problem: 'RO' },
      { before: 'no drinking-water system', after: 'under-sink RO, faucet installed', problem: 'RO' },
    ] },
  ];

  function Plate({ label, kind }) {
    const isBefore = kind === 'before';
    const stripe = isBefore
      ? 'repeating-linear-gradient(135deg, #e7ebf3 0 14px, #dde3ee 14px 28px)'
      : 'repeating-linear-gradient(135deg, var(--spring-50) 0 14px, #dcf0fb 14px 28px)';
    return (
      <div style={{ position: 'relative', flex: 1, minHeight: 168, background: stripe, display: 'flex', alignItems: 'flex-end', padding: 12 }}>
        <span style={{ position: 'absolute', top: 10, left: 10, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: isBefore ? 'var(--neutral-500)' : 'var(--spring-700)', background: 'rgba(255,255,255,0.7)', borderRadius: 'var(--radius-sm)', padding: '3px 8px' }}>{isBefore ? 'Before' : 'After'}</span>
        <span style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', fontSize: 11.5, lineHeight: 1.4, color: isBefore ? 'var(--neutral-600)' : 'var(--spring-800)', background: 'rgba(255,255,255,0.78)', borderRadius: 'var(--radius-sm)', padding: '5px 8px' }}>{label}</span>
      </div>
    );
  }

  function GalleryPage({ onNavigate }) {
    const { Card, Button } = window.SavannaSpringsDesignSystem_15883b;
    const go = (k) => onNavigate && onNavigate(k);
    return (
      <div>
        <section style={{ background: 'var(--navy-700)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'var(--spring-500)', opacity: 0.26, right: -70, top: -110 }} />
          <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: '54px 24px 56px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sun-400)', marginBottom: 12 }}>Gallery</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 50, color: '#fff', margin: 0, letterSpacing: '-0.025em' }}>Real installs, real results.</h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'var(--spring-100)', maxWidth: 620, margin: '16px auto 0', lineHeight: 1.6 }}>
              Before-and-after results from homes and businesses around the Valley — stained fixtures cleared up, clean installs, and the systems behind them.
            </p>
          </div>
        </section>

        <section style={{ maxWidth: 1180, margin: '0 auto', padding: '64px 24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'var(--navy-50)', border: '1px solid var(--navy-100)', borderRadius: 'var(--radius-pill)', padding: '8px 16px', marginBottom: 30, fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--navy-800)' }}>
            <Icon name="alert" size={15} color="var(--navy-700)" /> Placeholders shown — drop in real customer photos before publishing.
          </div>
          {GROUPS.map((g) => (
            <div key={g.title} style={{ marginBottom: 48 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-lg)', background: 'var(--navy-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name={g.icon} size={22} color="var(--sun-400)" /></span>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, color: 'var(--navy-900)', margin: 0, letterSpacing: '-0.02em' }}>{g.title}</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }} className="ss-grid-3">
                {g.items.map((it, i) => (
                  <Card key={i} variant="elevated" padding="none" hoverable onClick={() => go(it.problem)}>
                    <div style={{ display: 'flex', gap: 0 }}>
                      <Plate kind="before" label={it.before} />
                      <Plate kind="after" label={it.after} />
                    </div>
                    <div style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, color: 'var(--text-body)' }}>See how we fixed it</span>
                      <Icon name="arrowRight" size={16} color="var(--spring-700)" />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </section>

        <window.SSFreeWaterTest onNavigate={onNavigate} heading="Want results like these? Book your free water test" />
      </div>
    );
  }
  return GalleryPage;
})();
window.SSGalleryPage = SSGalleryPage;
