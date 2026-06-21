// Savanna Springs — FAQ page (accordion + FAQ schema + cross-links)
const SSFaqPage = (function () {
  const Icon = (props) => React.createElement(window.SSIcon, props);

  const FAQS = [
    { q: 'What causes hard water, and why should I treat it?', link: ['HardWater', 'Hard water & scale'],
      a: 'Hard water is high in dissolved calcium and magnesium. It leaves scale in your pipes and water heater, spots your dishes, stiffens laundry, and makes you use more soap. A softener removes those minerals at the source, so everything in your home works better and lasts longer.' },
    { q: 'Why does my water smell like rotten eggs?', link: ['Smelly', 'Rotten-egg smell'],
      a: 'That smell is hydrogen sulfide gas, usually produced by iron and sulfur bacteria in the water or water heater. Our self-sanitizing Sanitizer Plus with Crystal-Right\u00ae kills the odor-causing bacteria and rinses clean \u2014 no chemicals to buy.' },
    { q: 'What kind of salt should I use in my softener?', link: ['Salt', 'Salt delivery'],
      a: 'We recommend Pro\u2019s Pick Dura-Cube\u00ae \u2014 up to 99.8% pure and virtually 100% soluble, compacted to prevent mushing and bridging in your brine tank. Even better: let us deliver it and load it for you, so you never lift another bag.' },
    { q: 'Will a water softener work with my septic system?', link: ['Softeners', 'Water softeners'],
      a: 'Yes. Modern demand-based softeners like the Impression Plus Series\u00ae regenerate only when needed and use up to 75% less regeneration water and 60% less salt than old time-clock units \u2014 which is easy on a septic system. We size the unit to keep discharge low.' },
    { q: 'Can you remove nitrates or other specific contaminants?', link: ['RO', 'Reverse osmosis'],
      a: 'A reverse-osmosis system removes a broad range of dissolved contaminants for your drinking water, and a Viqua\u00ae UV stage adds protection against bacteria and pathogens. A free in-home test \u2014 including a TDS reading \u2014 shows exactly what\u2019s present so we recommend the right solution.' },
    { q: 'What do pH and grains/ppm actually mean for my water?', link: ['Sediment', 'Sediment & low pH'],
      a: 'pH measures how acidic your water is \u2014 low pH is corrosive and can cause blue-green staining and a metallic taste. Hardness is measured in grains per gallon (gpg), and dissolved solids in parts per million (ppm/TDS). Our free test reads all of these so your system is sized correctly.' },
    { q: 'Do you service systems you didn\u2019t install?', link: ['Products', 'Browse products'],
      a: 'Yes \u2014 we service all makes and models, whoever installed them, plus salt and water delivery. If your old softener quit or you inherited one with the house, we can get it running or right-size a replacement.' },
    { q: 'Is your equipment really made in the USA?', link: ['Products', 'Our products'],
      a: 'Yes. We\u2019re a proud Water-Right\u00ae authorized dealer and only install American-made, custom-built systems \u2014 backed by warranties up to 20 years.' },
    { q: 'How much does a system cost, and do you offer financing?', link: ['Financing', 'See financing'],
      a: 'Every system is right-sized and quoted to your water, home and budget, so pricing varies. We offer flexible financing \u2014 including 6 months no interest \u2014 plus rentals with one month free to lower the upfront cost.' },
    { q: 'Is the in-home water test really free?', link: ['FreeTest', 'Book a free test'],
      a: 'Completely free, with no obligation and no pressure. A licensed operator tests your water on-site, and we\u2019ll call within 24 business hours to schedule.' },
  ];

  function FaqPage({ onNavigate }) {
    const { Button } = window.SavannaSpringsDesignSystem_15883b;
    const go = (k) => onNavigate && onNavigate(k);
    const [open, setOpen] = React.useState(0);

    React.useEffect(() => {
      const data = { '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
      const el = document.createElement('script');
      el.type = 'application/ld+json';
      el.id = 'ss-faq-schema';
      el.textContent = JSON.stringify(data);
      document.head.appendChild(el);
      return () => { const e = document.getElementById('ss-faq-schema'); if (e) e.remove(); };
    }, []);

    return (
      <div>
        <section style={{ background: 'var(--navy-700)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'var(--spring-500)', opacity: 0.26, right: -70, top: -110 }} />
          <div style={{ position: 'relative', maxWidth: 1180, margin: '0 auto', padding: '54px 24px 56px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--sun-400)', marginBottom: 12 }}>FAQ</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 48, color: '#fff', margin: 0, letterSpacing: '-0.025em' }}>Water questions, answered</h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'var(--spring-100)', maxWidth: 600, margin: '16px auto 0', lineHeight: 1.6 }}>
              Hard water, odor, salt, septic systems and more. Still not sure? A free in-home test settles it.
            </p>
          </div>
        </section>

        <section style={{ maxWidth: 860, margin: '0 auto', padding: '64px 24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)', overflow: 'hidden' }}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--navy-900)' }}>{f.q}</span>
                    <span style={{ width: 32, height: 32, borderRadius: '50%', background: isOpen ? 'var(--navy-700)' : 'var(--navy-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none', transition: 'transform 200ms var(--ease-out)', transform: isOpen ? 'rotate(180deg)' : 'none' }}>
                      <Icon name="chevronDown" size={18} color={isOpen ? 'var(--sun-400)' : 'var(--navy-700)'} />
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 24px 22px' }}>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--text-body)', margin: '0 0 14px' }}>{f.a}</p>
                      <a href="#" onClick={(e) => { e.preventDefault(); go(f.link[0]); }} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--spring-700)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14.5, textDecoration: 'none' }}>
                        {f.link[1]} <Icon name="arrowRight" size={16} color="var(--spring-700)" />
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 40, background: 'var(--surface-water)', border: '1px solid var(--spring-100)', borderRadius: 'var(--radius-2xl)', padding: '32px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, color: 'var(--navy-900)', margin: 0 }}>Still have a question?</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, color: 'var(--text-body)', margin: '4px 0 0' }}>Call (877) 750-1420 or book a free in-home water test.</p>
            </div>
            <Button variant="accent" size="lg" onClick={() => go('FreeTest')} iconRight={<Icon name="arrowRight" size={20} />}>Get my free water test</Button>
          </div>
        </section>
      </div>
    );
  }
  return FaqPage;
})();
window.SSFaqPage = SSFaqPage;
