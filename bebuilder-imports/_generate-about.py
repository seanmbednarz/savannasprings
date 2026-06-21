import json, random, string

def uid(n=8):
    return ''.join(random.chochoice(string.ascii_lowercase+string.digits) for _ in range(n)) if False else ''.join(random.choice(string.ascii_lowercase+string.digits) for _ in range(n))

PID = "0"  # BeBuilder reassigns on import

def sec_attr(extra=None):
    a = {
        "scroll-visibility":"show","closeable-x":"left","tabber_nav_position":{"desktop":"left"},
        "query_post_orderby":"date","query_post_order":"DESC","query_terms_taxonomy":"category",
        "query_terms_orderby":"ID","query_terms_order":"ASC","css_tabber_gap":{"desktop":"30"},
        "tabber_icon_position":{"desktop":"left"},"query_slider_columns":{"desktop":"1"},
        "background_switcher_ql":"default","query_display_slider_arrow_prev":"icon-left-open-big",
        "query_display_slider_arrow_next":"icon-right-open-big","background_switcher":"default",
        "background_switcher_hover":"default","background_switcher_scroll":"default",
        "background_overlay_switcher":"default","vb_postid":PID,"vb":1,"rwd":"desktop"
    }
    if extra: a.update(extra)
    return a

def wrap_attr():
    return {
        "css_grid_columns":{"val":{"desktop":"repeat(3, 1fr)"},"selector":".mcb-section .mcb-wrap-grid.mcb-wrap-mfnuidelement > .mcb-wrap-inner","style":"grid-template-columns"},
        "query_post_type":"post","query_post_orderby":"date","query_post_order":"DESC",
        "query_terms_taxonomy":"category","query_terms_orderby":"ID","query_terms_order":"ASC",
        "query_slider_columns":{"desktop":"1"},"background_switcher_ql":"default",
        "query_display_slider_arrow_prev":"icon-left-open-big","query_display_slider_arrow_next":"icon-right-open-big",
        "background_switcher":"default","background_switcher_hover":"default","background_overlay_switcher":"default",
        "custom-responsive":"hide","vb_postid":PID,"vb":1,"rwd":"desktop"
    }

def bg(color):
    return {"css_advanced_background_color":{"val":color,"selector":".mcb-section-mfnuidelement","style":"background-color"}}

def pad(top,bottom):
    return {"css_advanced_padding":{"val":{"desktop":{"top":f"{top}px","bottom":f"{bottom}px"}},"selector":".mcb-section-mfnuidelement","style":"padding"}}

def merge(*ds):
    out={}
    for d in ds: out.update(d)
    return out

def text_item(html):
    return {"type":"column","jsclass":"column","title":"Column Text","icon":"column",
        "attr":{"content":html,"bg_position":"center top no-repeat","vb_postid":PID,"vb":1,"rwd":"desktop"},
        "uid":uid(),"size":"1/1","tablet_size":"1/1","laptop_size":"1/1","mobile_size":"1/1","tablet_resized":"0","used_fonts":""}

def wrap(items):
    return {"icon":"wrap","uid":uid(),"size":"1/1","tablet_size":"1/1","mobile_size":"1/1","jsclass":"wrap",
        "attr":wrap_attr(),"title":"Wrap","laptop_size":"1/1","tablet_resized":"0","items":items}

def section(attr_extra, items):
    return {"icon":"section","uid":uid(),"jsclass":"section","title":"Section",
        "attr":sec_attr(attr_extra),"ver":"default","wraps":[wrap(items)]}

# ---- SVG icon helper (Lucide paths from the theme) ----
ICONS={
 "home":"M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z",
 "award":"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11|M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z",
 "shieldCheck":"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z|m9 12 2 2 4-4",
 "wrench":"M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.7 2.7-2-2z",
 "star":"M11.48 3.5a.57.57 0 0 1 1.04 0l2.13 4.92 5.34.47c.5.04.7.67.32 1l-4.04 3.53 1.2 5.24c.11.49-.42.87-.85.61L12 16.98l-4.62 2.79c-.43.26-.96-.12-.85-.61l1.2-5.24L3.69 9.4c-.38-.34-.18-.97.32-1l5.34-.47z",
 "quote":"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .25-1 1.25V20c0 1 0 1 1 1z|M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",
}
def svg(name,size=24,color="currentColor",fill="none"):
    paths="".join(f'<path d="{d}"/>' for d in ICONS[name].split("|"))
    return f'<svg viewBox="0 0 24 24" width="{size}" height="{size}" fill="{fill}" stroke="{color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;flex:none">{paths}</svg>'

# ================= ABOUT PAGE CONTENT =================
hero = '''<div class="ss-wrap" style="text-align:center">
<div class="ss-eyebrow is-dark" style="margin-bottom:12px">About us</div>
<h1 style="font-family:var(--font-display);font-weight:800;font-size:48px;color:#fff;letter-spacing:-.025em;margin:0">Your local, family-owned water team</h1>
<p style="font-family:var(--font-body);font-size:18px;color:var(--spring-100);max-width:640px;margin:16px auto 0;line-height:1.6">Since 2008, Savanna Springs has helped families and businesses across the Mahoning Valley and Western PA get better water &mdash; diagnosed honestly and fixed for good.</p>
</div>'''

story = '''<div class="ss-wrap"><div class="ss-grid ss-grid-2" style="align-items:center">
<div>
<div class="ss-eyebrow" style="margin-bottom:10px">Our story</div>
<h2 style="font-family:var(--font-display);font-weight:800;font-size:34px;color:var(--navy-900);letter-spacing:-.02em;margin:0 0 14px">Named after our daughter, run like a family</h2>
<p style="font-family:var(--font-body);font-size:17px;line-height:1.7;color:var(--navy-900);margin-bottom:14px">Savanna Springs Water Solutions started in 2008 with a simple idea: treat people honestly, fix the real problem, and stand behind the work. We named the company after our daughter, Savannah &mdash; and we&rsquo;ve treated every customer like part of the family ever since.</p>
<p style="font-family:var(--font-body);font-size:17px;line-height:1.7;color:var(--navy-900);margin:0">Today we&rsquo;re a proud Water-Right&reg; authorized dealer with Ohio EPA-licensed operators and more than 35 years of combined experience. We sell, service and rent custom-built, American-made systems &mdash; and we service all makes and models, whoever installed them.</p>
</div>
<div class="ss-card" style="padding:36px">
<div class="ss-stats" style="border-top:none;padding-top:0;margin-top:0;gap:32px">
<div class="ss-stat"><div class="ss-stat__n">2008</div><div class="ss-stat__l">Family owned since</div></div>
<div class="ss-stat"><div class="ss-stat__n">35+ yrs</div><div class="ss-stat__l">Combined experience</div></div>
<div class="ss-stat"><div class="ss-stat__n">20-yr</div><div class="ss-stat__l">Warranties available</div></div>
<div class="ss-stat"><div class="ss-stat__n">EPA</div><div class="ss-stat__l">Licensed operators</div></div>
</div></div>
</div></div>'''

def value_card(icon,title,body):
    return f'''<div class="ss-why"><div class="ss-tile ss-tile--navy">{svg(icon,27,"var(--navy-700)")}</div><h3>{title}</h3><p>{body}</p></div>'''
values = '''<div class="ss-wrap">
<div class="ss-head"><div class="ss-eyebrow" style="margin-bottom:10px">What we stand for</div><h2 style="font-family:var(--font-display);font-weight:800;font-size:42px;color:var(--navy-900);letter-spacing:-.02em;margin:0">A few things we never compromise on</h2></div>
<div class="ss-grid ss-grid-4" style="margin-top:46px">''' + \
  value_card("home","Family first","Named after our daughter Savannah. We treat your home like our own &mdash; honest advice, no pressure.") + \
  value_card("award","Built to last","A proud Water-Right&reg; authorized dealer installing American-made, custom-built systems.") + \
  value_card("shieldCheck","Licensed &amp; certified","Ohio EPA-licensed operators, WQA certified, with 35+ years of combined experience.") + \
  value_card("wrench","Here for the long haul","We service all makes and models, deliver salt and water, and stand behind our work.") + \
  '''</div></div>'''

def review_card(quote,name):
    initials=name[0]
    stars="".join(svg("star",17,"var(--sun-400)","var(--sun-400)") for _ in range(5))
    return f'''<div class="ss-review">{svg("quote",30,"var(--spring-300)","var(--spring-100)")}<div class="ss-stars">{stars}</div><p>&ldquo;{quote}&rdquo;</p><div class="ss-review__by"><span class="ss-avatar">{initials}</span><span class="ss-name">{name}</span></div></div>'''
reviews = '''<div class="ss-wrap">
<div class="ss-head"><div class="ss-eyebrow" style="margin-bottom:10px">Reviews</div><h2 style="font-family:var(--font-display);font-weight:800;font-size:42px;color:var(--navy-900);letter-spacing:-.02em;margin:0">What our neighbors say</h2><p style="font-family:var(--font-body);font-size:17.5px;color:var(--text-body);margin-top:14px">Real homeowners across the Mahoning Valley and Western PA.</p></div>
<div class="ss-grid ss-grid-3" style="margin-top:44px">''' + \
  review_card("Beyond happy with the customer service and attention to detail. They did a water test to make sure we got the best system for our home. Highly recommend!","Madison M.") + \
  review_card("Super job! Matt and Steve were excellent installers &mdash; very clean and responsive. Great price with even better service. We just ordered an RO system too.","Margaret F.") + \
  review_card("Love our new water softener and reverse osmosis system. Even our heating guy commented on the quality of the work.","Brian F.") + \
  '''</div></div>'''

cta = '''<div class="ss-wrap" style="text-align:center">
<div class="ss-eyebrow is-dark" style="margin-bottom:12px">Free water test</div>
<h2 style="font-family:var(--font-display);font-weight:800;font-size:40px;color:#fff;letter-spacing:-.025em;margin:0 0 10px">Ready to make your water perfectly clear?</h2>
<p style="font-family:var(--font-body);font-size:18px;color:var(--spring-100);max-width:560px;margin:0 auto 26px;line-height:1.6">Book your free, no-pressure in-home water test. A licensed operator will be in touch within 24 business hours.</p>
<a class="ss-btn ss-btn--accent ss-btn--lg" href="/free-water-test/">Get my free water test</a>
</div>'''

NAVY="#1F2B6E"; TINT="#ecf7fd"
data = [
 section(merge(bg(NAVY), pad(64,64)), [text_item(hero)]),
 section(pad(78,78), [text_item(story)]),
 section(merge(bg(TINT), pad(78,78)), [text_item(values)]),
 section(pad(78,78), [text_item(reviews)]),
 section(merge(bg(NAVY), pad(74,74)), [text_item(cta)]),
]
out=json.dumps(data, ensure_ascii=False)
open("/home/user/savannasprings/bebuilder-imports/about.json","w").write(out)
print("bytes:", len(out), "sections:", len(data))
