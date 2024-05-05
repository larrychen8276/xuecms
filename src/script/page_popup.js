var Ym = !1;
async function Xv(t) {
    if (!t) {
        let e = await an()
            , n = {
            url: globalThis.location.href,
            config: e
        };
        t = await hn(n)
    }
    t.config.debug && B.setLevel("debug"),
        t.isTranslateExcludeUrl ? B.debug("detect exclude url, do not inject anything.") : (Ym = !0,
            Vm().catch(e=>{
                    B.debug("init popup error", e)
                }
            ))
}
async function e9() {
    Ym || (Ym = !0,
        Vm().catch(t=>{
                B.error("init popup error", t)
            }
        ))
}

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

function J8(t, e) {
    //debugger;

    let n = t.document;
    if (t9)
        return;
    t9 = !0,
    ye() || q3(),
        n.addEventListener("securitypolicyviolation", u7),
        document.addEventListener(me + "DocumentMessageUser", l9),
        document.addEventListener(me + "DocumentMessageUpdateUser", c9),
        document.addEventListener(me + "ChangeSuccessService", d9.bind(null, e)),
        document.addEventListener(me + "ChangeService", p9.bind(null, e)),
        document.addEventListener(qa, i7.bind(null, e)),
        n.addEventListener(me + "EbookLoaded", s7),
        n.addEventListener($4, o7.bind(null, e)),
        n.addEventListener(V4, l7.bind(null, e)),
        n.addEventListener(Ku, a=>{
                He() || um(a, e)
            }
        ),
        n.addEventListener(Y4, by),
        n.addEventListener("click", a=>{
                e7(a, e)
            }
        ),
    He() && t.addEventListener("message", X8, !1),
    ye() && (He() || n.addEventListener(Mr, Z8)),
    He() || oa.rootIframe(Zu).handleAsk("throttleRequest", K2)
}
function Vs(t, e) {
    //debugger;

    c7(),
        J8(e, t),
    ye() && (He() || (lm(t.config),
        d7(t.config))),
    al() && Uy(t),
    tt() && lm(t.config)
}

function Z8(t) {
    debugger;

    e9()
}

function X8(t) {
    let e = t;
    e && e.data && e.data.payload && e.data.author === ju && aa(e.data.payload, {
        tab: {
            id: 1,
            url: "https://www.fake-iframe.com",
            active: !0
        }
    })
}

function e7(t, e) {
    let n = t.target;
    if (!n || !n.getAttribute) {
        wa(n);
        return
    }
    let r = n.getAttribute("data-immersive-translate-event");
    r && ot(r, [{
        name: r
    }], {
        ...e,
        sourceLanguage: "none"
    });
    let a = n.getAttribute(`data-${Q}-action`);
    if (a) {
        if (t.preventDefault(),
        a === "retry") {
            typeof t.stopPropagation == "function" && t.stopPropagation(),
                Qm({
                    method: "retryFailedParagraphs"
                }),
                wa(n, !0);
            return
        } else if (a == "toast-error") {
            let i = n.getAttribute(`data-${Q}-tooltip-text`) || ""
                , o = ""
                , s = "retry";
            try {
                let u = JSON.parse(i);
                o = u.title,
                    i = u.errMsg,
                    s = u.action
            } catch {}
            s9(u9.bind(null, e, o, i, s));
            return
        }
    }
}


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

        debugger;
        let immersive_translate_input_injectedContent = oe.runtime.getURL("/contentscript/css/immersive_translate_input_injected.css");

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

function u9(t, e, n, r="retry", a, i, o, s) {
    let u = kt.bind(null, t)
        , l = e || u("errorModalTitle")
        , c = u("unknownError");
    i.innerText = l,
        o.innerHTML = DOMPurify.sanitize(n || c, {
            ADD_ATTR: ["target"]
        }),
        s.innerText = "";
    let p = ""
        , m = document.createElement("button");
    if (r == "retry") {
        p = u("retryAllButton"),
            m.setAttribute(`data-${Q}-action`, "retry");
        let g = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        g.setAttribute("viewBox", "0 0 16 16"),
            g.setAttribute("width", "20"),
            g.setAttribute("height", "20"),
            g.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7216 7.60092C15.9278 7.88015 15.7216 8.26938 15.2147 8.26938H13.6769C13.4509 8.26919 13.2651 8.44472 13.2559 8.66707C13.0202 11.4434 10.6721 13.5835 7.8434 13.6001C7.45033 13.6011 7.05839 13.5585 6.67498 13.4732C8.97932 12.9575 10.6873 11.0433 10.9105 8.7263C10.9201 8.60835 10.8791 8.49183 10.7975 8.40501C10.7159 8.31818 10.6011 8.269 10.4809 8.26938H9.46715C9.30707 8.26745 9.16079 8.17968 9.08563 8.04045C9.01048 7.90122 9.01841 7.7327 9.10632 7.60092L12.0617 3.4294C12.1415 3.31245 12.2752 3.2423 12.4183 3.2423C12.5613 3.2423 12.695 3.31245 12.7748 3.4294L15.7216 7.60092ZM0.249983 5.95687C0.32362 5.8189 0.468322 5.73198 0.62658 5.73066H2.34484C2.58058 5.74047 2.78188 5.56466 2.80018 5.33297C3.02618 2.57214 5.34909 0.434648 8.16115 0.399919C8.55422 0.398937 8.94616 0.441512 9.32956 0.526841C7.02244 1.04356 5.31373 2.96199 5.09406 5.2822C5.08428 5.39939 5.12548 5.51515 5.2074 5.60068C5.28932 5.68621 5.40427 5.73346 5.52362 5.73066H6.55458C6.71404 5.72904 6.86074 5.8163 6.9335 5.95606C7.00627 6.09581 6.99262 6.26407 6.89823 6.39066L3.93423 10.5791C3.85344 10.689 3.72404 10.7541 3.58628 10.7541C3.44852 10.7541 3.31912 10.689 3.23833 10.5791L0.274337 6.39066C0.185703 6.26152 0.176346 6.09485 0.249983 5.95687Z" fill="white"/>',
            m.appendChild(g),
            m.onclick = ()=>{
                a.style.display = "none",
                    Qm({
                        method: "retryFailedParagraphs"
                    }),
                    wa(m, !0)
            }
    } else if (r == "login")
        p = u("goLogin"),
            m.onclick = ()=>{
                wa(m, !0),
                    window.open(Tb)
            }
        ;
    else if (r == "upgrade")
        p = u("upgradeToPro"),
            m.onclick = ()=>{
                wa(m, !0),
                    window.open(el)
            }
        ;
    else if (r == "setting")
        p = u("goSettings"),
            m.onclick = ()=>{
                wa(m, !0),
                    window.open(we.OPTIONS_URL)
            }
        ;
    else if (r == "changeService")
        p = u("detectServiceLoading"),
            m.onclick = ()=>{
                wa(m, !0),
                    window.open(we.OPTIONS_URL)
            }
            ,
            Zm(t, t.config.translationService, !1).then(g=>{
                    g ? (p = u("toggleToService", {
                            service: u("translationServices." + g)
                        }),
                            m.innerHTML = DOMPurify.sanitize(p),
                            m.onclick = ()=>{
                                g9(g),
                                    wa(m, !0)
                            }
                    ) : (p = u("goSettings"),
                        m.innerHTML = DOMPurify.sanitize(p))
                }
            );
    else if (r == "none")
        return;
    m.className = "immersive-translate-btn",
        m.innerHTML += DOMPurify.sanitize(p),
        s.appendChild(m)
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

function i7(t, e) {
    let n = e;
    if (n && n.detail)
        try {
            let r = n.detail;
            if (!r || !r.type)
                return;
            let {title: a, errMsg: i, action: o} = r;
            s9(u9.bind(null, t, a, i, o))
        } catch (r) {
            B.warn("parse message error", r)
        }
}
async function o7(t, e) {
    let n = e;
    if (B.debug("receive third party message", n),
    n && n.detail) {
        let r = null;
        try {
            let a = JSON.parse(n.detail);
            if (a && a.type) {
                if (a.type === "retryFailedParagraphs")
                    Qm({
                        method: "retryFailedParagraphs"
                    });
                else if (a.type === "updateCommands")
                    _l(a.data);
                else if (a.type === "toggleEnableDefaultAlwaysTranslatedUrls")
                    t7();
                else if (a.type === "toggleEnableInputTranslation")
                    n7();
                else if (a.type === "translatePage")
                    p7(a.data);
                else if (a.type === "getAsyncTranslationServiceList")
                    r = gs(t, "translationService");
                else if (a.type === "getAsyncTargetLanguageList")
                    r = sc(a.data?.translationService, a.data?.targetLanguage);
                else if (a.type === "getAsyncTranslationMeta") {
                    let i = t.state.translationService || t.config.translationService;
                    r = {
                        targetLanguage: t.state.targetLanguage || t.targetLanguage,
                        translationService: i,
                        translationMode: t.state.translationMode
                    }
                } else if (a.type == "getAsyncTranslateContent") {
                    let i = {
                        ...t,
                        translationService: a.data.service
                    };
                    try {
                        r = await g7(a.data, i)
                    } catch (o) {
                        a9(a.type, o.uiConfig(i), a.id)
                    }
                } else
                    a.type === "getAsyncLanguageByText" ? r = await Pl(a.data) : a.type === "sharePage" ? um({
                        detail: a.data
                    }, t) : a.type === "switchTranslationMode" ? Jm(a.data) : o9(a.type);
                r && a.id && a9(a.type, r, a.id)
            }
        } catch (a) {
            B.warn("parse message error", a)
        }
    }
}
function s7(t) {
    setTimeout(()=>{
            td()
        }
        , 10)
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

function d7(t) {
    if (ye() && typeof GM < "u" && GM && GM.registerMenuCommand) {
        let e = ll.commands
            , a = [...Object.keys(e).filter(i=>i === "toggleTranslatePage").map(i=>{
                let o = e[i].description
                    , s = o;
                return o.startsWith("__MSG_") && o.endsWith("__") && (s = bo(`browser.${o.slice(6, -2)}`, t.interfaceLanguage)),
                    {
                        id: i,
                        title: s
                    }
            }
        ), {
            id: z0,
            title: bo("browser.openEbookViewer", t.interfaceLanguage),
            key: "e"
        }, {
            id: N0,
            title: bo("browser.openEbookBuilder", t.interfaceLanguage),
            key: "m"
        }, {
            id: R0,
            title: bo("browser.openOptionsPage", t.interfaceLanguage),
            key: "o"
        }, {
            id: O0,
            title: bo("browser.openAboutPage", t.interfaceLanguage),
            key: "a"
        }];
        for (let i of a)
            GM.registerMenuCommand(i.title, ()=>{
                    i.id === R0 ? $8() : i.id === O0 ? V8() : i.id === N0 ? Y8() : i.id === z0 ? Q8() : o9(i.id)
                }
                , i.key)
    }
}
function Qm(t) {
    aa(t, {
        tab: {
            id: 1,
            url: "https://www.fake.com",
            active: !0
        }
    }).catch(n=>{
            B.error("send content message request failed", t, n)
        }
    );
    let e = new CustomEvent(Mr,{
        detail: t
    });
    globalThis.document.dispatchEvent(e)
}

async function p7(t) {
    debugger;

    let e = {};
    t?.translationMode && (e.translationMode = t.translationMode),
    t?.translationService && (e.translationService = t.translationService),
    t?.targetLanguage && (e.targetLanguage = t.targetLanguage),
    t?.translationStartMode && (e.translationStartMode = t.translationStartMode);
    let n = await We(Ee(), e);
    Tn(n)
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

async function g7({textList: t, from: e, to: n, service: r}, a) {
    if (a.rule.id !== "immersive")
        return;
    let i = t.map(s=>({
        text: s || "",
        id: 0,
        from: e,
        to: n,
        url: a.url,
        fromByClient: e,
        force: !0
    }))
        , o = null;
    try {
        let s = await Ze({
            sentences: i
        }, {
            ...a,
            translationService: r
        }, u=>o = u);
        if (o)
            throw o;
        return s
    } catch (s) {
        throw s
    }
}
