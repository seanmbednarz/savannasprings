import json, random, string
def uid(n=8): return ''.join(random.choice(string.ascii_lowercase+string.digits) for _ in range(n))
PID="0"; SEL=".mcb-section .mcb-wrap .mcb-item-mfnuidelement"
NAVY="#1F2B6E"; TINT="#ecf7fd"
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
    for d in ds: o.update(d); 
    return o
def text_item(html): return {"type":"column","jsclass":"column","title":"Column Text","icon":"column","attr":{"content":html,"bg_position":"center top no-repeat","vb_postid":PID,"vb":1,"rwd":"desktop"},"uid":uid(),"size":"1/1","tablet_size":"1/1","laptop_size":"1/1","mobile_size":"1/1","tablet_resized":"0","used_fonts":""}
def wrap_sized(size,items,tablet=None):
    return {"icon":"wrap","uid":uid(),"size":size,"tablet_size":tablet or size,"mobile_size":"1/1","jsclass":"wrap","attr":wrap_attr(),"title":"Wrap","laptop_size":size,"tablet_resized":"0","items":items}
def section(extra,wraps): return {"icon":"section","uid":uid(),"jsclass":"section","title":"Section","attr":sec_attr(extra),"ver":"default","wraps":wraps}
def cssrule(key,style,val,sub):
    return {key:{"val":val,"selector":f"{SEL}{sub}","style":style}}
def iconbox(title,content,icon="icon-lamp",tile="#EEF0FA",icon_color="#1F2B6E",align="left"):
    a={"title":title,"title_tag":"h4","content":content,"icon":icon,"icon_position":{"desktop":"top"},"icon_align":{"desktop":align},"vb_postid":PID,"vb":1,"rwd":"desktop"}
    box=" .mfn-icon-box"
    a.update(cssrule("css_icon_box_bg","background-color","#FFFFFF",box))
    a.update({"css_icon_box_border_radius":{"val":{"desktop":"~26px ~26px ~26px ~26px"},"selector":f"{SEL}{box}","style":"border-radius"}})
    a.update(cssrule("css_icon_box_border_style","border-style","solid",box))
    a.update(cssrule("css_icon_box_border_color","border-color","#E0E5EE",box))
    a.update({"css_icon_box_padding":{"val":{"desktop":{"top":"~30px","right":"~28px","bottom":"~30px","left":"~28px"}},"selector":f"{SEL}{box}","style":"padding"}})
    iw=" .icon-wrapper"
    a.update(cssrule("css_icon_box_icon_wrapper_icon_color","color",icon_color,iw+" i"))
    a.update(cssrule("css_icon_box_icon_wrapper_bg","background-color",tile,iw))
    a.update({"css_icon_box_icon_wrapper_radius":{"val":{"desktop":"~18px ~18px ~18px ~18px"},"selector":f"{SEL}{iw}","style":"border-radius"}})
    a.update({"css_icon_box_iw_w":{"val":{"desktop":"~56px"},"selector":f"{SEL}{iw}","style":"width"}})
    a.update({"css_icon_box_iw_h":{"val":{"desktop":"~56px"},"selector":f"{SEL}{iw}","style":"height"}})
    a.update({"css_icon_box_iw_disp":{"val":"inline-flex","selector":f"{SEL}{iw}","style":"display"}})
    a.update({"css_icon_box_iw_ai":{"val":"center","selector":f"{SEL}{iw}","style":"align-items"}})
    a.update({"css_icon_box_iw_jc":{"val":"center","selector":f"{SEL}{iw}","style":"justify-content"}})
    a.update({"css_icon_box_iw_mb":{"val":{"desktop":"~18px"},"selector":f"{SEL}{iw}","style":"margin-bottom"}})
    a.update({"css_icon_box_iw_size":{"val":{"desktop":"~30px"},"selector":f"{SEL}{iw} i","style":"font-size"}})
    a.update({"css_icon_box_iw_lh":{"val":{"desktop":"~30px"},"selector":f"{SEL}{iw} i","style":"line-height"}})
    return {"type":"icon_box_2","jsclass":"icon_box_2","title":"Icon Box","icon":"icon-box-2","attr":a,"uid":uid(),"size":"1/1","tablet_size":"1/1","laptop_size":"1/1","mobile_size":"1/1","tablet_resized":"0","used_fonts":""}

hero='<div class="ss-wrap" style="text-align:center"><div class="ss-eyebrow is-dark" style="margin-bottom:12px">About us</div><h1 style="font-family:var(--font-display);font-weight:800;font-size:48px;color:#fff;letter-spacing:-.025em;margin:0">Your local, family-owned water team</h1><p style="font-family:var(--font-body);font-size:18px;color:var(--spring-100);max-width:640px;margin:16px auto 0;line-height:1.6">Since 2008, Savanna Springs has helped families and businesses across the Mahoning Valley and Western PA get better water &mdash; diagnosed honestly and fixed for good.</p></div>'
story='<div style="padding-right:20px"><div class="ss-eyebrow" style="margin-bottom:10px">Our story</div><h2 style="font-family:var(--font-display);font-weight:800;font-size:34px;color:var(--navy-900);letter-spacing:-.02em;margin:0 0 14px">Named after our daughter, run like a family</h2><p style="font-family:var(--font-body);font-size:17px;line-height:1.7;color:var(--navy-900);margin-bottom:14px">Savanna Springs Water Solutions started in 2008 with a simple idea: treat people honestly, fix the real problem, and stand behind the work. We named the company after our daughter, Savannah &mdash; and we&rsquo;ve treated every customer like part of the family ever since.</p><p style="font-family:var(--font-body);font-size:17px;line-height:1.7;color:var(--navy-900);margin:0">Today we&rsquo;re a proud Water-Right&reg; authorized dealer with Ohio EPA-licensed operators and more than 35 years of combined experience. We sell, service and rent custom-built, American-made systems &mdash; and we service all makes and models, whoever installed them.</p></div>'
statcard='<div class="ss-card" style="padding:36px"><div class="ss-stats" style="border-top:none;padding-top:0;margin-top:0;gap:32px"><div class="ss-stat"><div class="ss-stat__n">2008</div><div class="ss-stat__l">Family owned since</div></div><div class="ss-stat"><div class="ss-stat__n">35+ yrs</div><div class="ss-stat__l">Combined experience</div></div><div class="ss-stat"><div class="ss-stat__n">20-yr</div><div class="ss-stat__l">Warranties available</div></div><div class="ss-stat"><div class="ss-stat__n">EPA</div><div class="ss-stat__l">Licensed operators</div></div></div></div>'
vhead='<div style="text-align:center;max-width:740px;margin:0 auto"><div class="ss-eyebrow" style="color:var(--navy-700);margin-bottom:10px">What we stand for</div><h2 style="font-family:var(--font-display);font-weight:800;font-size:42px;color:var(--navy-900);letter-spacing:-.02em;margin:0">A few things we never compromise on</h2></div>'
values=[("Family first","Named after our daughter Savannah. We treat your home like our own &mdash; honest advice, no pressure."),
("Built to last","A proud Water-Right&reg; authorized dealer installing American-made, custom-built systems."),
("Licensed &amp; certified","Ohio EPA-licensed operators, WQA certified, with 35+ years of combined experience."),
("Here for the long haul","We service all makes and models, deliver salt and water, and stand behind our work.")]
def stars(): 
    s='<svg viewBox="0 0 24 24" width="17" height="17" fill="#fcca21" stroke="#fcca21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block"><path d="M11.48 3.5a.57.57 0 0 1 1.04 0l2.13 4.92 5.34.47c.5.04.7.67.32 1l-4.04 3.53 1.2 5.24c.11.49-.42.87-.85.61L12 16.98l-4.62 2.79c-.43.26-.96-.12-.85-.61l1.2-5.24L3.69 9.4c-.38-.34-.18-.97.32-1l5.34-.47z"/></svg>'
    return s*5
def rcard(q,n):
    return f'<div class="ss-review"><svg viewBox="0 0 24 24" width="30" height="30" fill="var(--spring-100)" stroke="var(--spring-300)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .25-1 1.25V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg><div class="ss-stars">{stars()}</div><p>&ldquo;{q}&rdquo;</p><div class="ss-review__by"><span class="ss-avatar">{n[0]}</span><span class="ss-name">{n}</span></div></div>'
rhead='<div style="text-align:center;max-width:740px;margin:0 auto"><div class="ss-eyebrow" style="color:var(--navy-700);margin-bottom:10px">Reviews</div><h2 style="font-family:var(--font-display);font-weight:800;font-size:42px;color:var(--navy-900);letter-spacing:-.02em;margin:0">What our neighbors say</h2></div>'
revs=[("Beyond happy with the customer service and attention to detail. They did a water test to make sure we got the best system for our home. Highly recommend!","Madison M."),("Super job! Matt and Steve were excellent installers &mdash; very clean and responsive. Great price with even better service.","Margaret F."),("Love our new water softener and reverse osmosis system. Even our heating guy commented on the quality of the work.","Brian F.")]
cta='<div class="ss-wrap" style="text-align:center"><div class="ss-eyebrow is-dark" style="margin-bottom:12px">Free water test</div><h2 style="font-family:var(--font-display);font-weight:800;font-size:40px;color:#fff;letter-spacing:-.025em;margin:0 0 10px">Ready to make your water perfectly clear?</h2><p style="font-family:var(--font-body);font-size:18px;color:var(--spring-100);max-width:560px;margin:0 auto 26px;line-height:1.6">Book your free, no-pressure in-home water test. A licensed operator will be in touch within 24 business hours.</p><a class="ss-btn ss-btn--accent ss-btn--lg" href="/free-water-test/">Get my free water test</a></div>'

data=[
 section(merge(bg(NAVY),pad(64,64)),[wrap_sized("1/1",[text_item(hero)])]),
 section(pad(78,78),[wrap_sized("1/2",[text_item(story)]), wrap_sized("1/2",[text_item(statcard)])]),
 section(merge(bg(TINT),pad(78,78)),
    [wrap_sized("1/1",[text_item(vhead)])] +
    [wrap_sized("1/4",[iconbox(t,b)]) for (t,b) in values]),
 section(pad(78,78),
    [wrap_sized("1/1",[text_item(rhead)])] +
    [wrap_sized("1/3",[text_item(rcard(q,n))]) for (q,n) in revs]),
 section(merge(bg(NAVY),pad(74,74)),[wrap_sized("1/1",[text_item(cta)])]),
]
open("/home/user/savannasprings/bebuilder-imports/about.json","w").write(json.dumps(data,ensure_ascii=False))
print("about native:",len(data),"sections; value cards = native Icon Boxes in 1/4 wraps")
