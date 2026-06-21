import json, random, string
def uid(n=8): return ''.join(random.choice(string.ascii_lowercase+string.digits) for _ in range(n))
PID="0"
def sec_attr(extra=None):
    a={"scroll-visibility":"show","closeable-x":"left","tabber_nav_position":{"desktop":"left"},"query_post_orderby":"date","query_post_order":"DESC","query_terms_taxonomy":"category","query_terms_orderby":"ID","query_terms_order":"ASC","css_tabber_gap":{"desktop":"30"},"tabber_icon_position":{"desktop":"left"},"query_slider_columns":{"desktop":"1"},"background_switcher_ql":"default","query_display_slider_arrow_prev":"icon-left-open-big","query_display_slider_arrow_next":"icon-right-open-big","background_switcher":"default","background_switcher_hover":"default","background_switcher_scroll":"default","background_overlay_switcher":"default","vb_postid":PID,"vb":1,"rwd":"desktop"}
    if extra: a.update(extra)
    return a
def wrap_attr():
    return {"css_grid_columns":{"val":{"desktop":"repeat(3, 1fr)"},"selector":".mcb-section .mcb-wrap-grid.mcb-wrap-mfnuidelement > .mcb-wrap-inner","style":"grid-template-columns"},"query_post_type":"post","query_post_orderby":"date","query_post_order":"DESC","query_terms_taxonomy":"category","query_terms_orderby":"ID","query_terms_order":"ASC","query_slider_columns":{"desktop":"1"},"background_switcher_ql":"default","query_display_slider_arrow_prev":"icon-left-open-big","query_display_slider_arrow_next":"icon-right-open-big","background_switcher":"default","background_switcher_hover":"default","background_overlay_switcher":"default","custom-responsive":"hide","vb_postid":PID,"vb":1,"rwd":"desktop"}
def bg(c): return {"css_advanced_background_color":{"val":c,"selector":".mcb-section-mfnuidelement","style":"background-color"}}
def pad(t,b): return {"css_advanced_padding":{"val":{"desktop":{"top":f"{t}px","bottom":f"{b}px"}},"selector":".mcb-section-mfnuidelement","style":"padding"}}
def merge(*ds):
    o={}
    for d in ds: o.update(d)
    return o
def text_item(html): return {"type":"column","jsclass":"column","title":"Column Text","icon":"column","attr":{"content":html,"bg_position":"center top no-repeat","vb_postid":PID,"vb":1,"rwd":"desktop"},"uid":uid(),"size":"1/1","tablet_size":"1/1","laptop_size":"1/1","mobile_size":"1/1","tablet_resized":"0","used_fonts":""}
def wrap(items): return {"icon":"wrap","uid":uid(),"size":"1/1","tablet_size":"1/1","mobile_size":"1/1","jsclass":"wrap","attr":wrap_attr(),"title":"Wrap","laptop_size":"1/1","tablet_resized":"0","items":items}
def section(extra,items): return {"icon":"section","uid":uid(),"jsclass":"section","title":"Section","attr":sec_attr(extra),"ver":"default","wraps":[wrap(items)]}
NAVY="#1F2B6E"; TINT="#ecf7fd"; SUN="#fcca21"
ICONS={
"droplet":"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7z",
"beaker":"M4.5 3h15|M6 3v15a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V3|M6 13h12",
"flame":"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
"shield":"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
"truck":"M14 18V6a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h1|M14 9h4l3 3v5a1 1 0 0 1-1 1h-1|M7.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z|M17.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
"calendar":"M8 2v4|M16 2v4|M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z|M3 10h18",
"wind":"M12.8 19.6A2 2 0 1 0 14 16H2|M17.5 8a2.5 2.5 0 1 1 2 4H2|M9.8 4.4A2 2 0 1 1 11 8H2",
"home":"M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z",
"flask":"M9 3h6|M10 3v6.5L4.5 19a1.5 1.5 0 0 0 1.3 2.3h12.4a1.5 1.5 0 0 0 1.3-2.3L14 9.5V3|M7.8 15h8.4",
"waves":"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1|M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1|M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
"refresh":"M3 12a9 9 0 0 1 15-6.7L21 8|M21 3v5h-5|M21 12a9 9 0 0 1-15 6.7L3 16|M3 21v-5h5",
"dollarSign":"M12 2v20|M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
"mapPin":"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z|M12 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
"arrowRight":"M5 12h14M12 5l7 7-7 7","check":"M20 6 9 17l-5-5",
"badgeCheck":"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z|m9 12 2 2 4-4",
"shieldCheck":"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z|m9 12 2 2 4-4",
"search":"M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z|m21 21-4.3-4.3",
"clipboard":"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2|M9 2h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z",
"star":"M11.48 3.5a.57.57 0 0 1 1.04 0l2.13 4.92 5.34.47c.5.04.7.67.32 1l-4.04 3.53 1.2 5.24c.11.49-.42.87-.85.61L12 16.98l-4.62 2.79c-.43.26-.96-.12-.85-.61l1.2-5.24L3.69 9.4c-.38-.34-.18-.97.32-1l5.34-.47z",
"quote":"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .25-1 1.25V20c0 1 0 1 1 1z|M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",
"chevronDown":"m6 9 6 6 6-6","award":"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11|M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z",
"wrench":"M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.7 2.7-2-2z",
}
def svg(name,size=24,color="currentColor",fill="none"):
    p="".join(f'<path d="{d}"/>' for d in ICONS[name].split("|"))
    return f'<svg viewBox="0 0 24 24" width="{size}" height="{size}" fill="{fill}" stroke="{color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;flex:none">{p}</svg>'
def head(eyebrow,title,sub="",dark=False):
    ec="var(--sun-400)" if dark else "var(--navy-700)"
    tc="#fff" if dark else "var(--navy-900)"
    h=f'<div class="ss-head" style="text-align:center;max-width:740px;margin:0 auto"><div class="ss-eyebrow" style="color:{ec};margin-bottom:10px">{eyebrow}</div><h2 style="font-family:var(--font-display);font-weight:800;font-size:42px;color:{tc};letter-spacing:-.02em;margin:0">{title}</h2>'
    if sub: h+=f'<p style="font-family:var(--font-body);font-size:17.5px;line-height:1.6;color:{"var(--spring-100)" if dark else "var(--text-body)"};margin-top:14px">{sub}</p>'
    return h+'</div>'
def btn(label,href,variant="accent",lg=True):
    cls="ss-btn ss-btn--"+variant+(" ss-btn--lg" if lg else "")
    return f'<a class="{cls}" href="{href}">{label} {svg("arrowRight",18,"currentColor")}</a>'
TINTS={"water":"var(--spring-100)","navy":"var(--navy-50)","sun":"var(--sun-100)","orange":"#ffe7d1"}
INKS={"water":"var(--spring-600)","navy":"var(--navy-700)","sun":"var(--sun-700)","orange":"var(--orange-600)"}
def linkcard(icon,color,title,blurb,href,cta="Learn more"):
    return f'''<a class="ss-card ss-card--hover" href="{href}"><div class="ss-tile ss-tile--{color}" style="margin-bottom:18px">{svg(icon,28,INKS[color])}</div><h3>{title}</h3><p>{blurb}</p><span class="ss-arrowlink" style="margin-top:16px">{cta} {svg("arrowRight",16,"var(--spring-700)")}</span></a>'''
def grid(cards,cols=3,mt=44): return f'<div class="ss-grid ss-grid-{cols}" style="margin-top:{mt}px">'+''.join(cards)+'</div>'

pages={}

# ---------------- SPECIALS ----------------
offers=[("refresh","On softener rentals","One month free rent","Rent an Impression Plus&reg; softener and get your first month of rent free."),
("truck","With softener purchase","One year of free salt","Buy a qualifying Water-Right&reg; softener and we&rsquo;ll deliver a year of salt &mdash; free."),
("droplet","On RO rentals","RO for pennies a day","Bottle-quality reverse-osmosis drinking water &mdash; one month free for a limited time."),
("dollarSign","Financing available","6 months no interest","Flexible financing to spread the cost of better water across your budget.")]
oc=[]
for ic,tag,t,b in offers:
    oc.append(f'<div class="ss-card" style="display:flex;gap:20px;align-items:flex-start"><div class="ss-tile ss-tile--fill-navy" style="width:60px;height:60px">{svg(ic,30,"var(--sun-400)")}</div><div><span class="ss-pill-tag" style="margin-bottom:10px">{tag}</span><h3 style="font-size:22px;margin:10px 0 6px">{t}</h3><p style="margin:0;font-size:15px;color:var(--text-body)">{b}</p></div></div>')
specials_hero='<div class="ss-wrap" style="text-align:center"><div class="ss-eyebrow" style="color:var(--navy-700);margin-bottom:12px">Specials &amp; financing</div><h1 style="font-family:var(--font-display);font-weight:800;font-size:48px;color:var(--navy-900);letter-spacing:-.025em;margin:0">Better water, made affordable</h1><p style="font-family:var(--font-body);font-size:18px;color:var(--navy-800);max-width:600px;margin:16px auto 0;line-height:1.6">Current offers to lower the cost of getting your water right. Ask about them on your free in-home water test.</p></div>'
specials_body='<div class="ss-wrap">'+grid(oc,2,0)+f'<div class="ss-cta-card" style="margin-top:34px"><div><h2>Not sure which is right for you?</h2><p>Start with a free in-home water test &mdash; we&rsquo;ll recommend the right system and the best offer for it.</p></div><div style="display:flex;gap:12px;flex-wrap:wrap">{btn("Get my free water test","/free-water-test/")}{btn("See financing","/financing/","outline-navy",False)}</div></div></div>'
pages["specials"]=[section(merge(bg(SUN),pad(54,56)),[text_item(specials_hero)]),section(pad(78,78),[text_item(specials_body)])]

# ---------------- FINANCING ----------------
tiers=[("6 months","No interest","Pay it off within 6 months and pay zero interest. Great for getting started now."),
("12 months","Low monthly","Spread the cost across a year with affordable monthly payments."),
("24 months","Special financing","Extended terms on qualifying systems &mdash; ask about current promotions."),
("Rental","One month free","Not ready to buy? Rent a softener or RO system with your first month free."),
("Custom","Built to budget","We right-size the system to your home and your budget &mdash; no overselling.")]
tc=[f'<div class="ss-card"><span class="ss-pill-tag">{tag}</span><h3 style="font-size:22px;margin:14px 0 8px">{t}</h3><p style="margin:0;font-size:15px;color:var(--text-body)">{b}</p></div>' for tag,t,b in tiers]
tc.append(f'<div class="ss-card" style="display:flex;flex-direction:column;justify-content:center;align-items:flex-start;background:var(--surface-water)"><h3 style="font-size:20px;margin-bottom:8px">Ready to apply?</h3><p style="margin:0 0 18px;font-size:15px;color:var(--text-body)">Get pre-qualified or ask about terms on your free in-home water test.</p>{btn("Get my free water test","/free-water-test/","accent",False)}</div>')
fin_hero='<div class="ss-wrap" style="text-align:center"><div class="ss-eyebrow is-dark" style="margin-bottom:12px">Financing</div><h1 style="font-family:var(--font-display);font-weight:800;font-size:48px;color:#fff;letter-spacing:-.025em;margin:0">Flexible ways to pay</h1><p style="font-family:var(--font-body);font-size:18px;color:var(--spring-100);max-width:600px;margin:16px auto 0;line-height:1.6">Better water shouldn&rsquo;t wait for the perfect month. Choose the option that fits your budget &mdash; including 6 months no interest.</p></div>'
pages["financing"]=[section(merge(bg(NAVY),pad(54,56)),[text_item(fin_hero)]),section(pad(78,78),[text_item('<div class="ss-wrap">'+grid(tc,3,0)+'</div>')])]

# ---------------- GALLERY ----------------
groups=[("Rust & iron staining","flame","orange",["Stained tub &rarr; spotless","Orange toilet tank &rarr; clear","Rusty laundry &rarr; bright"]),
("Hard water & scale","droplet","water",["Crusty faucet &rarr; clean","Spotty glassware &rarr; spot-free","Scaled heater element &rarr; protected"]),
("Well water installs","home","water",["Sanitizer Plus install","Basement system tidy-up","Twin-tank setup"])]
gal_hero='<div class="ss-wrap" style="text-align:center"><div class="ss-eyebrow is-dark" style="margin-bottom:12px">Gallery</div><h1 style="font-family:var(--font-display);font-weight:800;font-size:48px;color:#fff;letter-spacing:-.025em;margin:0">Before &amp; after, around the Valley</h1><p style="font-family:var(--font-body);font-size:18px;color:var(--spring-100);max-width:600px;margin:16px auto 0;line-height:1.6">Real homes, real water problems, real fixes. Swap these placeholders for your own customer photos.</p></div>'
gsecs=[section(merge(bg(NAVY),pad(54,56)),[text_item(gal_hero)])]
for title,ic,color,items in groups:
    cards=[f'<div class="ss-card" style="padding:0;overflow:hidden"><div style="aspect-ratio:4/3;background:linear-gradient(160deg,var(--navy-50),var(--spring-100));display:flex;align-items:center;justify-content:center;color:var(--navy-400);font-family:ui-monospace,monospace;font-size:13px">before / after</div><div style="padding:16px 18px"><strong style="font-family:var(--font-display);color:var(--navy-900)">{lab}</strong></div></div>' for lab in items]
    html=f'<div class="ss-wrap"><div style="display:flex;align-items:center;gap:14px;margin-bottom:24px"><div class="ss-tile ss-tile--{color}">{svg(ic,26,INKS[color])}</div><h2 style="font-size:28px;margin:0">{title}</h2></div>'+grid(cards,3,0)+'</div>'
    gsecs.append(section(pad(56,24),[text_item(html)]))
pages["gallery"]=gsecs

# ---------------- REVIEWS ----------------
revs=[("Beyond happy with the customer service and attention to detail. They did a water test to make sure we got the best system for our home. Highly recommend!","Madison M."),
("Super job! Matt and Steve were excellent installers &mdash; very clean and responsive. Great price with even better service. We just ordered an RO system too.","Margaret F."),
("Love our new water softener and reverse osmosis system. Even our heating guy commented on the quality of the work.","Brian F."),
("I don&rsquo;t have to think about anything. You show up and deliver my salt, and if something isn&rsquo;t working you fix it.","Jessica C."),
("The softener and reverse osmosis systems are GREAT! When we travel, we truly miss the water we have at home.","Drew C."),
("I recommend Savanna Springs in every home. Hated how hard our water was &mdash; my skin, the detergent, even the taste. Not anymore.","Dom L.")]
def rcard(q,n):
    stars="".join(svg("star",17,"var(--sun-400)","var(--sun-400)") for _ in range(5))
    return f'<div class="ss-review">{svg("quote",30,"var(--spring-300)","var(--spring-100)")}<div class="ss-stars">{stars}</div><p>&ldquo;{q}&rdquo;</p><div class="ss-review__by"><span class="ss-avatar">{n[0]}</span><span class="ss-name">{n}</span></div></div>'
rev_hero='<div class="ss-wrap" style="text-align:center"><div class="ss-eyebrow is-dark" style="margin-bottom:12px">Reviews</div><h1 style="font-family:var(--font-display);font-weight:800;font-size:48px;color:#fff;letter-spacing:-.025em;margin:0">What our neighbors say</h1><p style="font-family:var(--font-body);font-size:18px;color:var(--spring-100);max-width:600px;margin:16px auto 0;line-height:1.6">Real homeowners across the Mahoning Valley and Western PA. We let our work &mdash; and our customers &mdash; do the talking.</p></div>'
rev_body='<div class="ss-wrap">'+grid([rcard(q,n) for q,n in revs],3,0)+'<div class="ss-card" style="margin-top:34px;text-align:center;padding:40px"><h2 style="font-size:24px;margin-bottom:8px">See all our Google reviews</h2><p style="color:var(--text-body);margin-bottom:8px">Paste your Elfsight Google Reviews widget here to show live ratings.</p><div style="color:var(--text-muted);font-family:var(--font-display);font-weight:600">[ Elfsight reviews widget ]</div></div></div>'
pages["reviews"]=[section(merge(bg(NAVY),pad(54,56)),[text_item(rev_hero)]),section(pad(78,78),[text_item(rev_body)])]

# ---------------- FAQ ----------------
faqs=[("What causes hard water, and why should I treat it?","Hard water is high in dissolved calcium and magnesium. It leaves scale in your pipes and water heater, spots your dishes, stiffens laundry, and makes you use more soap. A softener removes those minerals at the source, so everything in your home works better and lasts longer.","Hard water &amp; scale","/water-problems/hard-water/"),
("Why does my water smell like rotten eggs?","That smell is hydrogen sulfide gas, usually produced by iron and sulfur bacteria. Our self-sanitizing Sanitizer Plus with Crystal-Right&reg; kills the odor-causing bacteria and rinses clean &mdash; no chemicals to buy.","Rotten-egg smell","/water-problems/rotten-egg-smell/"),
("What kind of salt should I use in my softener?","We recommend Pro&rsquo;s Pick Dura-Cube&reg; &mdash; up to 99.8% pure and virtually 100% soluble. Even better: let us deliver it and load it for you, so you never lift another bag.","Salt delivery","/products/salt-delivery/"),
("Will a water softener work with my septic system?","Yes. Modern demand-based softeners like the Impression Plus Series&reg; regenerate only when needed and use up to 75% less water and 60% less salt than old time-clock units &mdash; which is easy on a septic system.","Water softeners","/products/water-softeners/"),
("Do you service systems you didn&rsquo;t install?","Yes &mdash; we service all makes and models, whoever installed them, plus salt and water delivery. If your old softener quit or you inherited one with the house, we can get it running or right-size a replacement.","Browse products","/products/"),
("How much does a system cost, and do you offer financing?","Every system is right-sized and quoted to your water, home and budget, so pricing varies. We offer flexible financing &mdash; including 6 months no interest &mdash; plus rentals with one month free.","See financing","/financing/"),
("Is the in-home water test really free?","Completely free, with no obligation and no pressure. A licensed operator tests your water on-site, and we&rsquo;ll call within 24 business hours to schedule.","Book a free test","/free-water-test/")]
faq_items=""
for i,(q,a,ll,lu) in enumerate(faqs):
    op=" is-open" if i==0 else ""
    ae="true" if i==0 else "false"
    faq_items+=f'<div class="ss-faq-item{op}"><button class="ss-faq-q" type="button" data-ss-faq-toggle aria-expanded="{ae}"><span class="q">{q}</span><span class="ss-faq-chevron">{svg("chevronDown",18,"var(--navy-700)")}</span></button><div class="ss-faq-a"><p>{a}</p><a class="ss-arrowlink" href="{lu}">{ll} {svg("arrowRight",16,"var(--spring-700)")}</a></div></div>'
faq_hero='<div class="ss-wrap" style="text-align:center"><div class="ss-eyebrow is-dark" style="margin-bottom:12px">FAQ</div><h1 style="font-family:var(--font-display);font-weight:800;font-size:48px;color:#fff;letter-spacing:-.025em;margin:0">Water questions, answered</h1><p style="font-family:var(--font-body);font-size:18px;color:var(--spring-100);max-width:600px;margin:16px auto 0;line-height:1.6">Hard water, odor, salt, septic systems and more. Still not sure? A free in-home test settles it.</p></div>'
faq_body=f'<div style="max-width:860px;margin:0 auto"><div style="display:flex;flex-direction:column;gap:14px" data-ss-accordion>{faq_items}</div><div class="ss-cta-card" style="margin-top:40px"><div><h2>Still have a question?</h2><p>Call (877) 750-1420 or book a free in-home water test.</p></div>{btn("Get my free water test","/free-water-test/")}</div></div>'
pages["faq"]=[section(merge(bg(NAVY),pad(54,56)),[text_item(faq_hero)]),section(pad(64,64),[text_item(faq_body)])]

# ---------------- HOME ----------------
probs=[("wind","sun","Rotten-egg smell","That sulfur odor in your tap and shower water.","/water-problems/rotten-egg-smell/"),
("droplet","water","Hard water & scale","Spotty dishes, crusty faucets, dry skin, more soap.","/water-problems/hard-water/"),
("flame","orange","Rust & orange stains","Stains in sinks, tubs, toilets, and laundry.","/water-problems/rust-orange-stains/"),
("beaker","navy","Bad-tasting water","Cloudy, metallic, or chemical-tasting tap water.","/water-problems/bad-tasting-water/"),
("home","water","Well water problems","Iron, sulfur, sediment, and bacteria from a well.","/water-problems/well-water/"),
("flask","sun","Chlorine taste & smell",'That "pool water" smell from city water.',"/water-problems/chlorine-taste-smell/")]
def probcard(ic,color,title,blurb,href):
    return f'<a class="ss-card ss-card--hover" href="{href}"><div style="display:flex;align-items:center;gap:16px"><div class="ss-tile ss-tile--{color}">{svg(ic,28,INKS[color])}</div><h3 style="margin:0">{title}</h3></div><p>{blurb}</p><span class="ss-arrowlink" style="margin-top:16px">See the fix {svg("arrowRight",16,"var(--spring-700)")}</span></a>'
prods=[("droplet","water","Water softeners","Impression Plus&reg; softeners end hard-water scale, spots and dry skin.","/products/water-softeners/"),
("beaker","navy","Reverse osmosis","Bottle-quality reverse-osmosis drinking water from your own tap.","/products/reverse-osmosis/"),
("flame","orange","Iron & sulfur filters","Self-sanitizing media clears iron, sulfur and the rotten-egg smell.","/products/iron-sulfur-filters/"),
("shield","water","Whole-house filtration","Custom media systems for cleaner, safer water at every tap.","/products/whole-house-filtration/"),
("truck","sun","Salt delivery","We deliver and load Dura-Cube&reg; softener salt &mdash; never haul a bag again.","/products/salt-delivery/"),
("calendar","navy","Equipment rentals","Try soft water with no upfront cost &mdash; one month free rent.","/products/equipment-rentals/")]
why=[("home","Local & family owned","Named after our daughter Savannah &mdash; serving the Valley since 2008. You know who the owners are."),
("award","American-made equipment","A proud authorized Water-Right&reg; dealer. Custom-built, made in the USA &mdash; built to last."),
("wrench","We service everything","All makes and models, plus salt and water delivery. We keep your system running for the long haul."),
("dollarSign","Honest & affordable","Right-sized systems and flexible financing &mdash; including 6 months no interest. No pressure, ever.")]
cities=[("Youngstown","/service-areas/water-softeners-youngstown-oh/"),("Boardman","/service-areas/water-softeners-boardman-oh/"),("Poland","/service-areas/water-softeners-poland-oh/"),("Canfield","/service-areas/well-water-treatment-canfield-oh/"),("Struthers","/service-areas/water-softeners-struthers-oh/"),("Lowellville","/service-areas/water-softeners-lowellville-oh/"),("Austintown","/service-areas/water-softeners-austintown-oh/"),("Salem","/service-areas/water-softeners-salem-oh/"),("South Range / N. Lima","/service-areas/well-water-treatment-south-range-oh/")]
specials_home=[("refresh","One month free rent","on Impression Plus&reg; softeners"),("truck","One year of free salt","with a Water-Right&reg; softener"),("droplet","RO for pennies a day","bottle-quality drinking water"),("dollarSign","6 months no interest","flexible financing available")]
HERO_IMG="/wp-content/themes/savanna-springs-child/assets/img-hero-people.png"
home_hero=f'''<div class="ss-wrap" style="display:grid;grid-template-columns:1.2fr .8fr;gap:40px;align-items:center">
<div>
<div class="ss-eyebrow is-dark" style="margin-bottom:16px">We make one thing perfectly clear&hellip;</div>
<h1 style="font-family:var(--font-display);font-weight:800;font-size:54px;line-height:1.05;color:#fff;letter-spacing:-.025em;margin:0">Whatever&rsquo;s wrong with your water, we make it <span style="color:var(--sun-400)">perfectly clear.</span></h1>
<p style="font-family:var(--font-body);font-size:19px;color:var(--spring-100);margin:22px 0 30px;line-height:1.6">Smelly, hard, rusty, or bad-tasting water? Savanna Springs diagnoses the real problem and fixes it for good &mdash; for homes and businesses across Youngstown and Western PA.</p>
<div style="display:flex;gap:14px;flex-wrap:wrap;align-items:center">{btn("Get my free water test","/free-water-test/")}<a class="ss-hero-phone" href="tel:18777501420" style="color:#fff;font-family:var(--font-display);font-weight:700;font-size:17px">(877) 750-1420</a></div>
</div>
<div><img src="{HERO_IMG}" alt="Savanna Springs" style="width:100%;border-radius:26px;display:block"></div>
</div>'''
home_why='<div class="ss-wrap">'+head("Why Savanna Springs","A water team your neighbors actually trust","Not a faceless sales outfit &mdash; a family business that fixes the real problem and stands behind the work.")+'<div class="ss-grid ss-grid-4" style="margin-top:46px">'+''.join(f'<div class="ss-why"><div class="ss-tile ss-tile--navy">{svg(ic,27,"var(--navy-700)")}</div><h3>{t}</h3><p>{b}</p></div>' for ic,t,b in why)+'</div><div class="ss-stats">'+''.join(f'<div class="ss-stat"><div class="ss-stat__n">{n}</div><div class="ss-stat__l">{l}</div></div>' for n,l in [("2008","Family owned since"),("35+ yrs","Combined experience"),("20-yr","Warranties available"),("EPA","Licensed operators")])+'</div></div>'
home_picker='<div class="ss-wrap">'+head("Start with your problem","What&rsquo;s wrong with your water?","Pick what sounds like your home &mdash; we diagnose the real cause, then fix it for good.")+grid([probcard(*p) for p in probs],3)+'</div>'
home_products='<div class="ss-wrap">'+head("Our products","American-made, built for your water","We only install equipment made in America, custom-built and sized to your home.")+grid([linkcard(*p) for p in prods],3)+f'<div style="text-align:center;margin-top:34px">{btn("See all products","/products/","primary")}</div></div>'
chips=''.join(f'<a class="ss-chip" href="{href}">{svg("mapPin",16,"var(--sun-400)")} {name}</a>' for name,href in cities)
home_service=f'<div class="ss-wrap" style="display:grid;grid-template-columns:1fr 1.1fr;gap:52px;align-items:center"><div><div class="ss-eyebrow is-dark" style="margin-bottom:12px">Service area</div><h2 style="font-family:var(--font-display);font-weight:800;font-size:40px;color:#fff;letter-spacing:-.02em;margin:0">Serving Youngstown, the Mahoning Valley &amp; Western PA</h2><p style="font-family:var(--font-body);font-size:17.5px;color:var(--spring-100);margin:16px 0 24px;line-height:1.6">From our shop on River Road in Lowellville, we serve Mahoning, Columbiana &amp; Trumbull counties plus Western PA.</p>{btn("Find your town","/service-areas/")}</div><div class="ss-citychips">{chips}</div></div>'
sp_cards=''.join(f'<div class="ss-special"><div class="ss-tile ss-tile--fill-navy">{svg(ic,24,"var(--sun-400)")}</div><h3>{t}</h3><p>{b}</p></div>' for ic,t,b in specials_home)
home_specials=f'<div class="ss-wrap"><div style="display:flex;align-items:flex-end;justify-content:space-between;gap:20px;flex-wrap:wrap;margin-bottom:30px"><div><div class="ss-eyebrow" style="color:var(--navy-700);margin-bottom:10px">Specials &amp; financing</div><h2 style="font-family:var(--font-display);font-weight:800;font-size:36px;color:var(--navy-900);letter-spacing:-.02em;margin:0">Better water, made affordable</h2></div><div style="display:flex;gap:12px">{btn("See all specials","/specials/","primary",False)}{btn("Financing","/financing/","outline-navy",False)}</div></div><div class="ss-grid ss-grid-4">{sp_cards}</div></div>'
home_cta='<div class="ss-wrap" style="text-align:center"><div class="ss-eyebrow is-dark" style="margin-bottom:12px">Free water test</div><h2 style="font-family:var(--font-display);font-weight:800;font-size:40px;color:#fff;letter-spacing:-.025em;margin:0 0 10px">Ready to make your water perfectly clear?</h2><p style="font-family:var(--font-body);font-size:18px;color:var(--spring-100);max-width:560px;margin:0 auto 26px;line-height:1.6">Book your free, no-pressure in-home water test. A licensed operator will be in touch within 24 business hours.</p>'+btn("Get my free water test","/free-water-test/")+'</div>'
pages["home"]=[
 section(merge(bg(NAVY),pad(70,78)),[text_item(home_hero)]),
 section(pad(78,78),[text_item(home_picker)]),
 section(pad(80,80),[text_item(home_why)]),
 section(merge(bg(TINT),pad(80,80)),[text_item(home_products)]),
 section(merge(bg(NAVY),pad(78,78)),[text_item(home_service)]),
 section(merge(bg(SUN),pad(60,60)),[text_item(home_specials)]),
 section(merge(bg(NAVY),pad(74,74)),[text_item(home_cta)]),
]

import os
os.makedirs("/home/user/savannasprings/bebuilder-imports",exist_ok=True)
for name,data in pages.items():
    open(f"/home/user/savannasprings/bebuilder-imports/{name}.json","w").write(json.dumps(data,ensure_ascii=False))
    print(name, len(data),"sections")
