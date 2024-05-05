///////////////////////////////////////////////////////////////////////////////////////////////////

function k9(t) {
    t.state.translationMode = "translation",
        ho(t)
}

///////////////////////////////////////////////////////////////////////////////////////////////////

var _7 = "https://f0e3be2cce5fcdc92a25c723cd7fcbbc@sentry.immersivetranslate.com/4506813369548800"
    , Ys = !1;
function od(t) {
    // debugger;

    try {
        // TODO : sentryConfig.enable = false 直接返回
        if (!t || !t.enable || Ys || Ir())
            return;
        Ys = !0;
        let e = Ut()
            , n = Ub();
        if (t.ignoreVersions?.find(l=>l === e) || t.ignoreBuildPlatforms?.find(l=>l === n))
            return;
        let i = globalThis.navigator.userAgent;
        if (t.ignoreUserAgents?.find(l=>i.match(new RegExp(l))))
            return;
        let {initOptions: s} = t
            , u = {
            dsn: _7,
            environment: x.PROD === "1" ? "production" : "develop",
            ...t.initOptions
        };
        s?.ignoreErrors && (u.ignoreErrors = rf(s.ignoreErrors)),
        s?.denyUrls && (u.denyUrls = rf(s.denyUrls)),
        s?.allowUrls && (u.allowUrls = rf(s.allowUrls)),
            u.release = `${n}@${e}`,
            Na.init(u),
            sd()
    } catch {}
}
async function sd() {
    debugger;

    try {
        let t = await Mt.get(Ft, null);
        if (!Ys || !t)
            return;
        Na.setUser({
            id: t.id,
            username: t.userName,
            nickname: t.nickName,
            email: t.email
        })
    } catch {}
}
function P9(t, e) {
    try {
        if (!Ys)
            return;
        Na.setContext(t, e)
    } catch {}
}
function L9(t) {
    try {
        if (!Ys)
            return;
        Na.setTags(t)
    } catch {}
}

function rf(t) {
    return t.map(e=>new RegExp(e))
}

var fe = null, ud = {}, Co, _9 = !1;

async function td() {
    Mi.clearStrictTicks();
    let t = await We(Ee(), {})
        , e = await fs();

    debugger;

    if (B.debug("init page ctx", t),
        cy(t),
    t.rule.pageType == "subtitleBuilder") {
        Xm();
        return
    }
    if (t.rule.pageType == "ebookBuilder") {
        h9();
        return
    }
    if (Co || (Co = t.state.translationTheme),
    t.rule.urlChangeDelay && await vr(t.rule.urlChangeDelay),
    t.rule.waitForSelectors && t.rule.waitForSelectors.length > 0 && await j7(t.rule.waitForSelectors, t.rule.waitForSelectorsTimeout),
        t.rule.isInjectOptionsUrl) {
        let s = Ii()
            , u = document.createElement("meta");
        u.name = "immersive-translate-options-url",
            u.content = s;
        try {
            document.head && document.head.appendChild && document.head.appendChild(u)
        } catch (l) {
            B.warn("inject options url failed", l)
        }
    }
    if (t.rule.globalMeta && Object.keys(t.rule.globalMeta).forEach(u=>{
            let l = document.createElement("meta");
            l.name = u,
                l.content = t.rule.globalMeta[u],
                document.head.appendChild(l)
        }
    ),
    t.rule.initialGlobalAttributes && gT(document.body, t.rule.initialGlobalAttributes),
    t.rule.pageType == "pdfReader") {
        Tn(t);
        return
    }
    if (t.config.arxivRule && t.config.arxivRule.matches && dt(t.url, t.config.arxivRule.matches)) {
        let u = document.querySelector(t.config.arxivRule.injectContainerSelector);
        if (u) {
            let l = document.querySelector(t.config.arxivRule.officialHtmlSelector)
                , c = "";
            if (l && l.getAttribute && l.getAttribute("href")) {
                let b = l.getAttribute("href");
                try {
                    let h = new URL(b);
                    h.searchParams.set("_immersive_translate_auto_translate", "1"),
                        c = h.toString()
                } catch {}
            }
            let g = new URL(t.url).pathname.split("/").pop()
                , f = !1
                , T = !0;
            if (g)
                try {
                    let h = g.split(".")[0]
                        , E = h.slice(0, 2)
                        , D = h.slice(2, 4)
                        , M = new Date(`20${E}-${D}-27`)
                        , I = new Date(t.config.arxivRule.validBefore);
                    M < I && (f = !0)
                } catch (b) {
                    B.debug("arxivRule validBefore error", b)
                }
            if (t.config.arxivRule.validOnlySelector && (T = document.querySelector(t.config.arxivRule.validOnlySelector) !== null),
            f && T) {
                let b = document.createElement("li");
                b.innerHTML = `<a target="_blank" href="https://ar5iv.labs.arxiv.org/html/${g}?_immersive_translate_auto_translate=1" aria-describedby="download-button-info" accesskey="f" class="abs-button download-pdf">${kt(t, "viewWithImmersiveTranslate")}</a>`,
                    u.appendChild(b)
            } else {
                let b = "";
                if (c && (b = c),
                    b) {
                    let h = document.createElement("li");
                    h.innerHTML = `<a target="_blank" href="${b}" aria-describedby="download-button-info" accesskey="f" class="abs-button download-pdf">${kt(t, "viewWithImmersiveTranslate")}</a>`,
                        u.appendChild(h)
                }
            }
        }
    }
    if (t.rule.isOnBoardingPage) {
        document.dispatchEvent(new CustomEvent(_t,{
            detail: JSON.stringify({
                type: "currentConfig",
                payload: {
                    enableDefaultAlwaysTranslatedUrls: !!t.config.enableDefaultAlwaysTranslatedUrls
                }
            })
        }));
        let s = document.querySelector("#immersiveTranslateEnableDefaultAlwaysTranslatedUrlsValue");
        s && (s.value = "helloworld",
            s.value = String(!!t.config.enableDefaultAlwaysTranslatedUrls),
            s.dispatchEvent(new Event("change")))
    }
    _9 || (_9 = !0,
    He() && t.rule.useIframePostMessage && await o1());
    let n = t.sourceLanguage;
    n === "auto" ? n = await F9() : qn(n);
    let r = r2(t, n);
    if (r && (t = await We(Ee(), {
        translationMode: r
    })),
        t.rule.isInjectMeta)
        try {
            let s = await Gl(n)
                , u = document.createElement("meta");
            u.name = "immersive-translate-meta",
                u.content = Do(JSON.stringify(s)),
            document.head && document.head.appendChild && document.head.appendChild(u)
        } catch (s) {
            B.warn("inject meta failed", s)
        }
    let a = new URL(t.url)
        , o = a.searchParams.get("_immersive_translate_auto_translate") === "1" || a.searchParams.get("_immersive_translate_auto_translate") === "true" || t.state.isAutoTranslate || t.isTranslateUrl || t.rule.pageType == "pdfReader";
    if (!o && !t.isTranslateExcludeUrl && (B.debug(`detect page language: ${t.url} ${n}`),
    na(n, t.targetLanguage, {
        ignoreZhCNandZhTW: t.rule.ignoreZhCNandZhTW
    }) || n === "auto" || u1(n, t.config.translationLanguagePattern) && (o = !0,
        B.debug(`match language pattern ${n}, auto translate`))),
    t.rule.pageType == "ebookBuilder" && (o = !1),
    t.rule.pageType !== "pdfReader" && as(e) && vo(t, window),
        o)
        fe.state.isAutoTranslate = !0,
            Tn(fe);
    else if (B.debug("do not auto translate", t),
    t.rule.initTranslationServiceAsSoonAsPossible && t.translationService === "deepl") {
        if (na(n, t.targetLanguage, {
            ignoreZhCNandZhTW: t.rule.ignoreZhCNandZhTW
        }) || n === "auto")
            return;
        t.config && t.config.translationServices && t.config.translationServices.deepl && t.config.translationServices.deepl.authKey && typeof t.config.translationServices.deepl.authKey == "string" && t.config.translationServices.deepl.authKey.startsWith("immersive_") && (ud[t.translationService] || (ud[t.translationService] = !0,
        He() || Sg(t).catch(s=>{
                B.warn("init translation engine error", s)
            }
        )))
    }
}

async function ym(t) {
    if (Qe() === "Original") {
        let e = {};
        Co && (e.translationTheme = Co),
        fe && (e = {
            ...fe.state,
            ...e
        });
        let n = await We(Ee(), e);
        if (t?.trigger == "right_menu" && Ga(n?.rule)) {
            let r = ra(n.rule);
            Oi(!0, r || Ee());
            return
        }
        await Tn(fe, t)
    } else
        (Qe() === "Translated" || Qe() === "Error") && si()
}

async function F7() {
    if (fe = await We(Ee(), {}),
    fe.rule.pageType == "ebookBuilder")
        return b9(fe);
    if (fe.rule.pageType == "subtitleBuilder")
        return f9(fe);
    hy()
}

async function vm(t) {
    if (Qe() === "Original") {
        fe = await We(Ee(), {}),
        Co || (Co = fe.state.translationTheme);
        let e = "mask";
        fe.state.translationTheme === "opacity" && (e = "opacity"),
            fe = await We(Ee(), {
                translationTheme: e
            }),
            await Tn(fe, t)
    } else if (Qe() === "Translated") {
        let e = "mask";
        fe?.state?.translationTheme === "opacity" && (e = "opacity");
        let n = Z1().filter(i=>i.contentDocument?.body).map(i=>i.contentDocument.body)
            , r = [fe.mainFrame, ...n]
            , a = fe?.state.translationTheme;
        for (let i of r) {
            let o = qi(i, Di, !0);
            a === "mask" || a === "opacity" ? o !== "none" ? lt(i, Di, "none", !0) : lt(i, Di, e, !0) : o !== "mask" && o !== "opacity" ? lt(i, Di, e, !0) : lt(i, Di, "none", !0)
        }
    }
}

async function F9() {
    let t = await We(Ee(), {});
    return t.rule.pageType == "subtitleBuilder" ? Xm() : fy(t)
}
function M7(t) {
    Qe() === "Original" ? k9(t) : ti()
}
function B7(t) {
    Qe() === "Original" ? m9(t) : ef()
}
function I7(t) {
    Qe() === "Original" ? ho(t) : ti()
}
async function si() {
    zi(""),
        document.dispatchEvent(new CustomEvent(_t,{
            detail: JSON.stringify({
                type: "restorePage",
                payload: {}
            })
        }));
    let t = await We(Ee(), {});
    if (t.rule.pageType == "subtitleBuilder") {
        ef();
        return
    } else
        t.rule.pageType == "ebookBuilder" && T9();
    ti()
}


async function Tn(t, e) {
    //debugger;

    // TODO : sentryConfig.enable = false 直接返回
    t.config?.sentryConfig?.contentInitTime == "translate_page" && od(t.config?.sentryConfig);
    let n = Qe()
        , r = {
        pageStatus: n,
        translateService: t.state.translationService || t.translationService,
        translationMode: t.state.translationMode
    };
    // TODO:sentryConfig.enable = false 直接返回
    P9("translatePage", r), L9(r),
    n !== "Original" && await si(),
        document.dispatchEvent(new CustomEvent(_t,{
            detail: JSON.stringify({
                type: "translateStart",
                payload: {}
            })
        })),
        document.dispatchEvent(new CustomEvent(_t,{
            detail: JSON.stringify({
                type: "targetLanguage",
                payload: {
                    targetLanguage: t.targetLanguage
                }
            })
        })),
    ud[t.translationService] || (ud[t.translationService] = !0,
    He() || Sg(t).catch(i=>{
            B.warn("init translation engine error", i)
        }
    ));
    let a = {};
    if (e && e.trigger && (a.trigger = e.trigger),
        ot("translage_page_daily", [{
            name: "translage_page_daily",
            params: a
        }], t),
        ot("translate_page", [{
            name: "translate_page",
            params: a
        }], {
            ...t,
            sourceLanguage: vt()
        }),
    t.rule.pageType == "subtitleBuilder") {
        B7(t),
            zi("yes");
        return
    }
    if (t.rule.pageType == "ebookBuilder") {
        y9(t),
            zi("yes");
        return
    }
    if (t.rule.pageType === "pdfReader") {
        M7(t),
            zi("yes");
        return
    }
    I7(t),
        zi("yes")
}
async function R7(t, e) {
    let n = fe?.translationService;
    if (Qe() === "Original" || n != t) {
        fe = await We(Ee(), {
            translationService: t
        });
        let r = kt(fe, "temprarilyChangeTranslationTo_" + t);
        Toastify({
            text: r
        }),
            await Tn(fe, e)
    } else {
        si();
        let r = await an()
            , a = {
            url: Ee(),
            config: r,
            state: {}
        }
            , i = await hn(a);
        fe = await We(Ee(), {
            translationService: i.translationService
        })
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////


async function O7(t) {
    Qe() === "Original" ? await af(t) : (Qe() === "Translated" || Qe() === "Error") && (fe = await We(Ee(), {}),
        fe.state.translationArea !== "main" ? await af(t) : si())
}
async function af(t) {
    fe = await We(Ee(), {
        translationArea: "main"
    }),
        await Tn(fe, t)
}

async function M9(t) {
    fe = await We(Ee(), {
        translationArea: "body"
    }),
        await Tn(fe, t)
}

async function Sm(t) {
    let e = await We(Ee(), {})
        , n = e.state.translationMode == "dual" ? "translation" : "dual";
    if (e = await We(Ee(), {
        translationMode: n
    }),
    Qe() === "Original") {
        Tn(e, t);
        return
    }
    window.immersiveTranslateSwitchTranslateState && window.immersiveTranslateSwitchTranslateState(n)
}

async function Jm(t) {
    if (fe = await We(Ee(), {
        translationMode: t
    }),
        ot("switch_translation_mode", [{
            name: "switch_translation_mode",
            params: {
                mode: t
            }
        }], {
            ...fe,
            sourceLanguage: "unknown"
        }),
    Qe() === "Original") {
        Tn(fe);
        return
    }
    window.immersiveTranslateSwitchTranslateState && window.immersiveTranslateSwitchTranslateState(t)
}
async function z7(t) {
    if (Qe() === "Original")
        await M9(t);
    else if (Qe() === "Translated" || Qe() === "Error") {
        let e = {};
        fe && fe.state && (e = fe.state),
            fe = await We(Ee(), e),
            fe.state.translationArea !== "body" ? (fe.state.translationArea = "body",
                fe = await We(Ee(), fe.state),
                await Tn(fe, t)) : si()
    }
}
async function B9(t) {
    fe = await We(Ee(), {
        translationStartMode: "immediate"
    }),
        await Tn(fe, t)
}
async function N7(t) {
    // debugger;

    Qe() === "Original" ? await B9(t) : (Qe() === "Translated" || Qe() === "Error") && si()
}

async function I9() {
    let t = await We(Ee(), {});
    if (!dt(t.url, t.config.inputStyleBlockUrls)) {

        // let n = Me().IMMERSIVE_TRANSLATE_INPUT_INJECTED_CSS;
        let immersive_translate_input_injectedContent = oe.runtime.getURL("/contentscript/css/immersive_translate_input_injected.css");
        let n = immersive_translate_input_injectedContent;
        En(document, n, "immersive-translate-input-injected-css")
    }
    t.rule.pageType && t.rule.pageType !== "html" || t.config.enableInputTranslation && nf(t)
}

function U7() {
    return fe
}
async function We(t, e) {
    //debugger;

    let n = Object.keys(e);
    if (fe) {
        let r = {
            url: t,
            config: fe.config,
            state: {
                ...fe.state,
                ...e
            }
        };
        fe = await hn(r)
    } else {
        // TODO: 第一次 fe 为空
        let r = await an()
            , a = e;
        n.length === 0 && (a = void 0),
            fe = await hn({
                url: t,
                config: r,
                state: a
            })
    }
    return fe.state && fe.state.translationService && (fe.translationService = fe.state.translationService),
    fe.state && fe.state.targetLanguage && (fe.targetLanguage = fe.state.targetLanguage),
        fe
}
async function q7() {
    let t = await fn() || {}
        , e = t.generalRule || {}
        , n = e["subtitleRule.add"] || {}
        , r = !n.preTranslation;
    await mn({
        ...t,
        generalRule: {
            ...e,
            "subtitleRule.add": {
                ...n,
                preTranslation: r
            }
        }
    }),
        r ? Toastify({
            text: kt(fe, "videoSubtitlePreTranslationOn")
        }) : Toastify({
            text: kt(fe, "videoSubtitlePreTranslationOff")
        }),
        setTimeout(()=>{
                window.location.reload()
            }
            , 1e3)
}
async function Km() {
    let t = await an(), e = await fs(), n;
    fe && fe.state && (n = fe.state);
    let r = {
        url: Ee(),
        config: t,
        state: n
    }
        , a = await hn(r);
    a.state && a.state.translationService && (a.translationService = a.state.translationService),
        fe = a,
        im(fe);
    let i = Hs()
        , o = [];
    return i ? o = i.allInlineWindows || [window] : o = [window],
        o.forEach(s=>{
                Vs(a, s),
                as(e) && vo(a, s),
                    // TODO:翻译方法 -> pg_content_p_3.js
                    nf(a)
            }
        ),
        a
}

function j7(t, e=3e3) {
    return new Promise((n,r)=>{
            let a = e ? setTimeout(()=>{
                    n(new Error("timeout"))
                }
                , e) : void 0
                , i = setInterval(()=>{
                    t.every(s=>document.querySelector(s) !== null) && (clearInterval(i),
                    a && clearTimeout(a),
                        n(null))
                }
                , 50)
        }
    )
}

async function l9(t) {
    debugger;

    let e = t.detail
        , n = fn();
    await Ov(e.token, n, mn),
        Mt.set(Ft, e);
    let r = await Mt.get(W0, !1);
    Mt.set(W0, !1),
        document.dispatchEvent(new CustomEvent("immersiveTranslateDocumentMessageUserResult",{
            detail: r ? "close" : "success"
        })),
        sd()
}
function c9(t) {
    debugger;

    B.debug("update user info", t);
    let e = t.detail;
    Mt.set(Ft, e),
        sd()
}

async function d9(t) {
    debugger;

    let e = await fn();
    if (e.translationService)
        return;
    let n = t.config.translationService
        , r = await Zm(t, n);
    if (t.translationService !== r) {
        if (!r) {
            ls([{
                name: "no_avaliable_translation_service"
            }]);
            return
        }
        e.translationService = r,
            mn(e),
            t.translationService = r,
            ls([{
                name: "change_default_translation_service",
                params: {
                    translation_service: r
                }
            }])
    }
}

async function p9(t, e) {
    let n = e.detail;
    if (t.rule.id != "immersive")
        return;
    let r = n.translateService;
    if (!r)
        return;
    let a = n.provider
        , i = await fn();
    i.translationService = r,
    a && i?.translationServices?.[r]?.provider && (i.translationServices[r].provider = a),
        i.translationServiceChangedbyUserAt = new Date().toISOString(),
        mn(i)
}

async function Zm(t, e, n=!0) {
    let r = t.rule.detectionServiceOrder || ["google", "bing", "transmart", "yandex"];
    return r.sort((a,i)=>a === e ? n ? -1 : 1 : i === e ? n ? 1 : -1 : 0),
        await uT(r, t)
}

async function g9(t) {
    let e = await fn();
    e.translationService = t,
        await mn(e);
    let n = await We(Ee(), {});
    n.translationService = t,
        await Tn(n)
}

z3({
    detectCurrentPageLanguage: F9,
    ensureSwitchTranslationMode: Sm,
    restorePage: si,
    retryFailedParagraphs: F7,
    switchTranslationMode: Jm,
    toggleTranslatePage: ym,
    toggleTranslateTheMainPage: O7,
    toggleTranslateTheWholePage: z7,
    toggleTranslationMask: vm,
    toggleVideoSubtitlePreTranslation: q7,
    translatePage: Tn,
    translatePageWithTranslationService: R7,
    translateTheMainPage: af,
    translateTheWholePage: M9,
    translateToThePageEndImmediately: B9,
    toggleTranslateToThePageEndImmediately: N7,
    updateGlobalContext: Km,
    getPureGlobalContext: U7
});
