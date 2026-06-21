// Savanna Springs — Site Footer (4-column)
const SSFooter = (function () {
  const Icon = (props) => React.createElement(window.SSIcon, props);

  const SOLUTIONS = [
    ['Rotten-egg smell', 'Smelly'],
    ['Hard water & scale', 'HardWater'],
    ['Rust & orange stains', 'Rust'],
    ['Bad-tasting water', 'Taste'],
    ['Well water problems', 'Well'],
    ['Chlorine taste & smell', 'Chlorine'],
  ];
  const PRODUCTS = [
    ['Water softeners', 'Softeners'],
    ['Reverse osmosis', 'RO'],
    ['Iron & sulfur filters', 'IronSulfur'],
    ['Whole-house filtration', 'WholeHouse'],
    ['Salt delivery', 'Salt'],
    ['Equipment rentals', 'Rentals'],
  ];
  const CITIES = [
    ['Youngstown', 'Youngstown'], ['Boardman', 'Boardman'], ['Poland', 'Poland'],
    ['Canfield', 'Canfield'], ['Struthers', 'Struthers'], ['Austintown', 'Austintown'],
    ['Salem', 'Salem'], ['Lowellville', 'Lowellville'], ['South Range / N. Lima', 'SouthRange'],
  ];

  function Col({ title, children }) {
    return (
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--sun-400)', marginBottom: 14 }}>{title}</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>{children}</div>
      </div>
    );
  }
  function FLink({ children, onClick }) {
    return <a href="#" onClick={(e) => { e.preventDefault(); onClick && onClick(); }} style={{ color: 'var(--spring-100)', fontFamily: 'var(--font-body)', fontSize: 14.5, padding: '5px 0', textDecoration: 'none' }}>{children}</a>;
  }

  function Footer({ onNavigate }) {
    const go = (k) => onNavigate && onNavigate(k);
    const BADGES = ['Since 2008', 'WQA Certified', 'Water-Right® Dealer', 'Made in USA'];
    return (
      <footer style={{ background: 'var(--navy-800)', color: '#fff' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '60px 24px 30px', display: 'grid', gridTemplateColumns: '1.7fr 1fr 1fr 1fr', gap: 40 }} className="ss-footer-grid">
          {/* brand + contact + badges + tagline */}
          <div>
            <img src="../../assets/logo-savanna-springs.png" alt="Savanna Springs" style={{ height: 60, marginBottom: 16, filter: 'drop-shadow(0 2px 8px rgba(0,0,0,.3))' }} />
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'var(--spring-100)', fontSize: 14.5, marginBottom: 10 }}>
              <Icon name="mapPin" size={17} color="var(--sun-400)" style={{ marginTop: 2, flex: 'none' }} />
              <span>875 River Road, Lowellville, OH 44436</span>
            </div>
            <a href="tel:18777501420" style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#fff', fontSize: 18, fontWeight: 700, fontFamily: 'var(--font-display)', textDecoration: 'none', marginBottom: 8 }}>
              <Icon name="phone" size={17} color="var(--sun-400)" /> (877) 750-1420
            </a>
            <a href="mailto:info@savannaspringswater.com" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--spring-100)', fontSize: 14.5, textDecoration: 'none', marginBottom: 18 }}>
              <Icon name="mail" size={16} color="var(--sun-400)" /> info@savannaspringswater.com
            </a>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
              {BADGES.map((b) => (
                <span key={b} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 'var(--radius-pill)', padding: '5px 11px', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 12.5, color: '#fff' }}>
                  <Icon name="badgeCheck" size={13} color="var(--sun-400)" /> {b}
                </span>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 16, color: 'var(--sun-400)', margin: 0 }}>We make one thing perfectly clear…</p>
          </div>

          <Col title="Solutions">
            {SOLUTIONS.map(([l, k]) => <FLink key={k} onClick={() => go(k)}>{l}</FLink>)}
          </Col>
          <Col title="Products">
            {PRODUCTS.map(([l, k]) => <FLink key={k} onClick={() => go(k)}>{l}</FLink>)}
          </Col>
          <Col title="Service Areas">
            {CITIES.map(([l, k]) => <FLink key={k} onClick={() => go(k)}>{l}</FLink>)}
          </Col>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto', padding: '18px 24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10, color: 'var(--neutral-400)', fontSize: 13 }}>
            <span>© 2026 Savanna Springs Water Solutions. Family owned since 2008.</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <a href="#" onClick={(e) => { e.preventDefault(); go('About'); }} style={{ color: 'var(--neutral-400)', textDecoration: 'none' }}>About</a>
              <a href="#" onClick={(e) => { e.preventDefault(); go('Reviews'); }} style={{ color: 'var(--neutral-400)', textDecoration: 'none' }}>Reviews</a>
              <a href="#" onClick={(e) => { e.preventDefault(); go('Gallery'); }} style={{ color: 'var(--neutral-400)', textDecoration: 'none' }}>Gallery</a>
              <a href="#" onClick={(e) => { e.preventDefault(); go('FAQ'); }} style={{ color: 'var(--neutral-400)', textDecoration: 'none' }}>FAQ</a>
              <a href="#" onClick={(e) => { e.preventDefault(); go('Financing'); }} style={{ color: 'var(--neutral-400)', textDecoration: 'none' }}>Financing</a>
              <a href="#" onClick={(e) => { e.preventDefault(); go('Contact'); }} style={{ color: 'var(--neutral-400)', textDecoration: 'none' }}>Contact</a>
            </span>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 860px) { .ss-footer-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 520px) { .ss-footer-grid { grid-template-columns: 1fr !important; } }
        ` }} />
      </footer>
    );
  }
  return Footer;
})();
window.SSFooter = SSFooter;
