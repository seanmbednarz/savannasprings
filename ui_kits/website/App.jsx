// Savanna Springs — Website App (client-side router)
function SSApp() {
  const [page, setPage] = React.useState('Home');
  const navigate = (p) => { setPage(p); window.scrollTo({ top: 0 }); };

  const Header = window.SSHeader;
  const Footer = window.SSFooter;

  // Free Water Test — standalone page wrapper around the reusable form section
  function FreeTestPage({ onNavigate }) {
    const FreeWaterTest = window.SSFreeWaterTest;
    return (
      <div>
        <section style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: 1180, margin: '0 auto', padding: '46px 24px 36px', textAlign: 'center' }}>
            <div className="ss-eyebrow" style={{ marginBottom: 10 }}>No cost · No pressure</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 46, color: 'var(--navy-900)', margin: 0, letterSpacing: '-0.025em' }}>Your free in-home water test</h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 17.5, lineHeight: 1.6, color: 'var(--text-body)', maxWidth: 600, margin: '14px auto 0' }}>
              Find out exactly what's in your water. A licensed operator tests it on-site and recommends the right fix — with zero obligation.
            </p>
          </div>
        </section>
        <FreeWaterTest onNavigate={onNavigate} />
      </div>
    );
  }

  const pages = {
    Home: window.SSHomePage,
    Specials: window.SSSpecialsPage,
    FreeTest: FreeTestPage,
    Problems: window.SSProblemsHub,
    Products: window.SSProductsHub,
    ServiceAreas: window.SSServiceAreasHub,
    About: window.SSAboutPage,
    Reviews: window.SSReviewsPage,
    Gallery: window.SSGalleryPage,
    FAQ: window.SSFaqPage,
    Financing: window.SSFinancingPage,
    Contact: window.SSContactPage,
  };
  const Page = pages[page];
  const isProblem = window.SS_PROBLEMS && window.SS_PROBLEMS[page];
  const isProduct = window.SS_PRODUCTS && window.SS_PRODUCTS[page];
  const isCity = window.SS_CITIES && window.SS_CITIES[page];

  function Stub({ title }) {
    const { Button } = window.SavannaSpringsDesignSystem_15883b;
    const Icon = window.SSIcon;
    return (
      <section style={{ maxWidth: 760, margin: '0 auto', padding: '96px 24px', textAlign: 'center' }}>
        <div style={{ width: 72, height: 72, borderRadius: 'var(--radius-xl)', background: 'var(--navy-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22 }}>
          <Icon name="droplet" size={36} color="var(--navy-700)" />
        </div>
        <div className="ss-eyebrow" style={{ marginBottom: 10 }}>Coming up next</div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 40, color: 'var(--navy-900)', margin: '0 0 12px', letterSpacing: '-0.02em' }}>{title}</h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'var(--text-body)', margin: '0 0 26px' }}>
          This page is part of the full site map and will be built in a later stage. For now, explore our products or book your free water test.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={() => navigate('Products')}>View products</Button>
          <Button variant="accent" onClick={() => navigate('FreeTest')}>Free water test</Button>
        </div>
      </section>
    );
  }

  const navKey = (window.SS_PROBLEMS && window.SS_PROBLEMS[page]) ? 'Problems'
    : (window.SS_PRODUCTS && window.SS_PRODUCTS[page]) ? 'Products'
    : (window.SS_CITIES && window.SS_CITIES[page]) ? 'ServiceAreas'
    : ['Home', 'Products', 'Specials', 'About', 'Problems', 'ServiceAreas', 'Reviews', 'Gallery', 'FAQ', 'Financing', 'Contact'].includes(page) ? page : '';
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header current={navKey} onNavigate={navigate} />
      <main style={{ flex: 1 }}>
        {isProblem ? <window.SSProblemPage problemKey={page} onNavigate={navigate} />
          : isProduct ? <window.SSProductPage productKey={page} onNavigate={navigate} />
          : isCity ? <window.SSCityPage cityKey={page} onNavigate={navigate} />
          : Page ? <Page onNavigate={navigate} /> : <Stub title={page} />}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
window.SSApp = SSApp;
