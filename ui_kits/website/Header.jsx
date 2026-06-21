// Savanna Springs — Site Header (sticky, with mobile menu)
const SSHeader = (function () {
  const Icon = (props) => React.createElement(window.SSIcon, props);
  const NAV = [
    { label: 'Water Problems', key: 'Problems' },
    { label: 'Products', key: 'Products' },
    { label: 'Service Areas', key: 'ServiceAreas' },
    { label: 'About', key: 'About' },
    { label: 'Specials', key: 'Specials' },
  ];

  function Header({ current = 'Home', onNavigate }) {
    const { Button } = window.SavannaSpringsDesignSystem_15883b;
    const [open, setOpen] = React.useState(false);
    const go = (k) => { setOpen(false); onNavigate && onNavigate(k); };

    return (
      <header style={{
        position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'saturate(140%) blur(10px)', borderBottom: '1px solid var(--border)',
      }}>
        {/* top utility bar */}
        <div style={{ background: 'var(--navy-700)', color: '#fff' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto', padding: '7px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-body)', fontSize: 13.5 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--spring-100)' }}>
              <Icon name="mapPin" size={15} color="var(--sun-400)" /> Serving Mahoning, Columbiana &amp; Trumbull counties + Western PA
            </span>
            <a href="mailto:info@savannaspringswater.com" style={{ color: '#fff', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Icon name="mail" size={15} color="var(--sun-400)" /> info@savannaspringswater.com
            </a>
          </div>
        </div>

        {/* main bar */}
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '12px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <a href="#" onClick={(e) => { e.preventDefault(); go('Home'); }} style={{ display: 'inline-flex', alignItems: 'center', flex: 'none' }}>
            <img src="../../assets/logo-savanna-springs.png" alt="Savanna Springs Water Solutions" style={{ height: 52, width: 'auto' }} />
          </a>

          {/* desktop nav */}
          <nav className="ss-nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {NAV.map((item) => {
              const active = item.key === current;
              return (
                <a key={item.key} href="#" onClick={(e) => { e.preventDefault(); go(item.key); }}
                  style={{
                    fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15,
                    color: active ? 'var(--navy-700)' : 'var(--neutral-600)',
                    padding: '8px 13px', borderRadius: 'var(--radius-pill)',
                    background: active ? 'var(--navy-50)' : 'transparent', textDecoration: 'none', whiteSpace: 'nowrap',
                  }}>{item.label}</a>
              );
            })}
          </nav>

          {/* right cluster */}
          <div className="ss-nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 'none' }}>
            <a href="tel:18777501420" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--navy-800)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, textDecoration: 'none' }}>
              <span style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--navy-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="phone" size={16} color="var(--navy-700)" />
              </span>
              (877) 750-1420
            </a>
            <Button variant="accent" onClick={() => go('FreeTest')}>Free Water Test</Button>
          </div>

          {/* mobile toggle */}
          <button className="ss-nav-mobile-btn" onClick={() => setOpen((o) => !o)} aria-label="Menu"
            style={{ display: 'none', border: '1px solid var(--border)', background: 'var(--surface)', borderRadius: 'var(--radius-md)', width: 44, height: 44, alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flex: 'none' }}>
            <Icon name={open ? 'x' : 'menu'} size={24} color="var(--navy-700)" />
          </button>
        </div>

        {/* mobile menu */}
        {open && (
          <div className="ss-nav-mobile-panel" style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)', padding: '12px 16px 20px' }}>
            {NAV.map((item) => (
              <a key={item.key} href="#" onClick={(e) => { e.preventDefault(); go(item.key); }}
                style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, color: 'var(--navy-900)', padding: '12px 8px', borderBottom: '1px solid var(--border)', textDecoration: 'none' }}>{item.label}</a>
            ))}
            <a href="tel:18777501420" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 8px', color: 'var(--navy-800)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, textDecoration: 'none' }}>
              <Icon name="phone" size={18} color="var(--navy-700)" /> (877) 750-1420
            </a>
            <div style={{ marginTop: 8 }}>
              <Button variant="accent" block onClick={() => go('FreeTest')}>Free Water Test</Button>
            </div>
          </div>
        )}

        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 1040px) {
            .ss-nav-desktop { display: none !important; }
            .ss-nav-mobile-btn { display: inline-flex !important; }
          }
        ` }} />
      </header>
    );
  }
  return Header;
})();
window.SSHeader = SSHeader;
