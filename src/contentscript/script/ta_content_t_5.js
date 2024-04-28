"use strict";

var t9 = !1
    , i9 = [()=>{
    hotkeys.unbind()
}
]
    , n9 = [...i9]
    , $8 = Kn(async()=>{
        debugger;

        await Bi()
    }
    , 50)
    , V8 = Kn(async()=>{
        debugger;

        await Ll()
    }
    , 50)
    , Y8 = Kn(async()=>{
        debugger;

        await Y3()
    }
    , 50)
    , Q8 = Kn(async()=>{
        debugger;

        await V3()
    }
    , 50)
    , o9 = Kn(t=>{
        _n({
            method: t,
            data: {
                trigger: "userscript_menu"
            }
        })
    }
    , 50);

// TODO:总是翻译的网站地址 -> (设置 ->基本设置 -> 总是翻译的网址)
async function t7() {
    debugger;

    let t = await fn()
        , e = t.enableDefaultAlwaysTranslatedUrls === void 0 ? !0 : t.enableDefaultAlwaysTranslatedUrls;
    if (t.enableDefaultAlwaysTranslatedUrls = !e,
        !t.enableDefaultAlwaysTranslatedUrls) {
        let n = t && t.isChangedAlwaysTranslatedUrls
            , r = [];
        t.translationUrlPattern && t.translationUrlPattern.matches && (r = t.translationUrlPattern.matches || []),
        !n && r.length > 0 && (t.translationUrlPattern = {
            matches: [],
            excludeMatches: []
        })
    }
    await mn(t)
}
async function n7() {
    let t = await fn()
        , e = t.enableInputTranslation;
    t.enableInputTranslation = !e,
        await mn(t)
}
var r9 = 0;
function s9(t) {
    let e = Date.now();
    if (e - r9 < 2e3 || (r9 = e,
        r7()))
        return;
    let n = `${Q}-modal-root`, r = `${Q}-modal`, a = document.getElementById(n), i = `${Q}-modal-title`, o = `${Q}-modal-body`, s = `${Q}-modal-footer`, u;
    if (a) {
        u = a.shadowRoot.querySelector(`.${r}`);
        let l = u.querySelector(`.${i}`)
            , c = u.querySelector(`.${s}`)
            , p = u.querySelector(`.${o}`);
        t(u, l, p, c)
    } else {
        a = document.createElement("div"),
            a.setAttribute("translate", "no"),
            a.className = "no-translate immersive-translate-error-modal-shadow-root",
            a.id = n,
            a.style.all = "initial",
            a.style.zIndex = "2147483647",
            document.body.appendChild(a);
        let l = a.attachShadow({
            mode: "open"
        })
            , c = document.createElement("style")
            // , p = Me();
            , p = x;

        let immersive_translate_input_injectedContent = oe.runtime.getURL("/script/contentscript/css/immersive_translate_input_injected.css");

        //c.textContent = p.IMMERSIVE_TRANSLATE_INPUT_INJECTED_CSS,
        c.textContent = immersive_translate_input_injectedContent,
            l.appendChild(c),
            u = document.createElement("div"),
            u.className = r + " notranslate",
            u.id = r;
        let m = document.createElement("div");
        m.className = Q + "-modal-content notranslate",
            u.appendChild(m);
        let g = document.createElement("span");
        g.textContent = "\xD7",
            g.className = Q + "-close",
            m.appendChild(g);
        let f = document.createElement("div");
        f.className = i + " notranslate",
            m.appendChild(f);
        let T = document.createElement("div");
        T.className = o + " notranslate",
            m.appendChild(T);
        let b = document.createElement("div");
        b.className = s,
            m.appendChild(b),
            l.appendChild(u),
            g.onclick = function() {
                u.style.display = "none"
            }
            ,
            l.addEventListener("click", h=>{
                    h.target == u && (u.style.display = "none")
                }
            ),
            t(u, f, T, b)
    }
    setTimeout(()=>{
            a7()
        }
        , 100)
}

function r7() {
    let t = document.querySelector("#immersive-translate-modal-root");
    return t && t.shadowRoot ? t.shadowRoot.querySelector(`#${Q}-modal`)?.style.display == "block" : !1
}
function a7() {
    let t = document.querySelector("#immersive-translate-modal-root");
    if (t && (t.style.display = "block",
        t.shadowRoot)) {
        let e = t.shadowRoot.querySelector(`#${Q}-modal`);
        e && (e.style.display = "block")
    }
}
function wa(t, e=!1) {
    let n = document.querySelector("#immersive-translate-modal-root");
    if (!n || n.style.display == "none")
        return;
    let r = n.shadowRoot.querySelector(`#${Q}-modal`);
    r && r !== t && (!e && r.contains(t) || (r.style.display = "none"))
}


function u7(t) {
    x.HAS_CSP_ERROR = "1"
}
function l7(t, e) {
    let n = e.detail;
    (n.name == "open_pdf_page" || n.name === "open_html_page") && ot(n.name, [{
        name: n.name
    }], {
        ...t
    })
}
function c7() {
    n9.forEach(t=>{
            t()
        }
    ),
        n9 = i9
}

function a9(t, e, n) {
    globalThis.document.dispatchEvent(new CustomEvent(_t,{
        detail: JSON.stringify({
            id: n,
            type: t,
            payload: e
        })
    }))
}


function sm(t) {
    this.translateState = t,
        Object.values(this.paragraphEntities).forEach(e=>{
                Is(e, t)
            }
        ),
    t == "original" && document.querySelectorAll(`.${yt}`).forEach(e=>e.remove())
}
function Nc(t, e) {
    if (t instanceof HTMLIFrameElement) {
        io(t.contentDocument, e);
        return
    }
    io(t, e)
}
async function fy(t) {
    let e = He()
        , n = "auto";
    if (ye()) {
        let r = "";
        t.rule.pageType == "ebookReader" || t.rule.pageType == "ebookBuilder" ? (r = vp(t.mainFrame),
            n = await Ie({
                text: r,
                pageLangs: ["en"]
            })) : (r = Ui(t.mainFrame).slice(0, 1e3),
            n = await Ie({
                text: r,
                pageLangs: [ht(), "en"]
            }))
    } else if (e)
        n = await Ie({
            text: Ui(t.mainFrame).slice(0, 1e3),
            pageLangs: [ht(), "en"]
        });
    else if (t.rule.pageType == "ebookReader" || t.rule.pageType == "ebookBuilder") {
        let r = "";
        r = vp(t.mainFrame),
            n = await Ie({
                text: r,
                pageLangs: ["en"]
            })
    } else
        n = await H3();
    return n === "auto" && (n = await hT()),
        O3(n),
        n
}


async function um(t, e) {
    let n = {};
    t && t.detail?.trigger && (n.trigger = t.detail.trigger),
        ot("share_to_draft", [{
            name: "share_to_draft",
            params: n
        }], {
            ...e,
            sourceLanguage: vt()
        });
    let r = pe?.ctx || e
        , a = await Zt()
        , i = document.head.cloneNode(!0)
        , s = document.body.cloneNode(!0)
        , u = r.rule.shareConfig;
    [...u?.removeSelectors || []].forEach(g=>{
            [...i?.querySelectorAll(g), ...s?.querySelectorAll(g)].forEach(f=>{
                    f.nodeName.toLowerCase() == "script" && f.type == "application/ld+json" || f.remove()
                }
            )
        }
    );
    let c = u.injectCss ? n2() : ""
        , p = "";
    globalThis.document.documentElement.getAttributeNames().forEach(g=>{
            p += `${g}="${globalThis.document.documentElement.getAttribute(g)}" `
        }
    );
    let m = "";
    globalThis.document.body.getAttributeNames().forEach(g=>{
            m += `${g}="${globalThis.document.body.getAttribute(g)}" `
        }
    );
    try {
        a.draft = {
            url: globalThis.location.href,
            title: document.title,
            source_lang: r.sourceLanguage,
            target_lang: r.targetLanguage,
            content: `<html ${p}>
        <head>${i.innerHTML}<style id="imt-inject-preview">${c}</style></head>
        <body ${m}>${s.innerHTML}</body></html>`.replaceAll('data-immersive-translate-translation-element-mark="1"', "dim_m='1'").replace(/data-immersive-translate-walked=\".+?\"/g, "dim_w='1'").replace(/data-on-parse-paragraph=\".+?\"/g, "").replace(/data-consume-paragraph=\".+?\"/g, "").replace(/data-consume-container=\".+?\"/g, "").replace(/immersive-translate-target-([a-z\-]+)/g, (b,h)=>"imt_" + h.replaceAll("translation", "t"))
        },
            await Xt(a);
        // let f = Me().SHARE_DRAFT_URL
        let f = x.SHARE_DRAFT_URL
            , T = r.rule;
        if (T.shareConfig?.sharePath) {
            let b = new URL(f);
            b.pathname = T.shareConfig.sharePath,
                f = b.toString()
        }
        Ri(f)
    } catch (g) {
        B.error(g)
    }
}


async function by() {
    let t = await Zt();
    t.draft && globalThis.document.dispatchEvent(new CustomEvent(Q4,{
        detail: JSON.stringify(t.draft)
    }))
}
async function f5() {
    try {
        if (await bl("reportActive"))
            return;
        B.debug("\u672A\u6FC0\u6D3B\u8FC7");
        let e = await Pp();
        await ce({
            url: ns + "/v1/user/campaign-info-translated/" + e,
            method: "POST",
            headers: {
                "content-type": "application/json"
            }
        }),
            ps("reportActive", "1")
    } catch (t) {
        B.error(t)
    }
}
