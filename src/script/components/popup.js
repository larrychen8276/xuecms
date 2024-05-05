function G5(t) {
    let {t: e} = Ce()
        , {ctx: n, setSettings: r, onAutoEnableSubtitleChanged: a} = t;
    return Ue(()=>!n.rule.subtitleRule.disabled && H0.includes(n.rule.subtitleRule.type || ""), [n, H0]) ? w("div", {
        class: "flex justify-between mt-3 items-center",
        children: [w("label", {
            class: "mb-0",
            children: e("autoEnableSubtitle")
        }), w("input", {
            type: "checkbox",
            role: "switch",
            id: "autoEnableSubtitle",
            name: "autoEnableSubtitle",
            checked: !!n.rule.subtitleRule.autoEnableSubtitle,
            onChange: o=>{
                let s = o.target.checked;
                r(u=>({
                    ...u,
                    generalRule: {
                        ...u.generalRule,
                        "subtitleRule.add": {
                            ...u.generalRule?.["subtitleRule.add"],
                            autoEnableSubtitle: s
                        }
                    }
                })),
                    a()
            }
        })]
    }) : null
}
function $5(t) {
    let {t: e} = Ce()
        , n = t.ctx.state.translationMode
        , r = ()=>{
        let i = n === "dual" ? "translation" : "dual";
        t.onSwitchTranslationMode(i)
    }
        , a = e(n === "dual" ? "changeToOnlyTempTranslationMode" : "changeToDualTempTranslationMode");
    return w(xa, {
        text: a,
        multiple: !0,
        tipStyle: {
            left: -20,
            transform: "unset",
            fontSize: 13,
            whiteSpace: "pre"
        },
        children: w("div", {
            class: "translate-mode mr-2 ",
            onClick: r,
            children: n === "dual" ? $y : Vy
        })
    })
}

function V5(t) {
    let {t: e, lang: n} = Ce()
        , {isProUser: r, isShowPricing: a} = t
        , {config: i} = t.ctx
        , o = 60;
    n.startsWith("zh") || (o = 70);
    // let s = Me()
    let s = x
        , u = `${t.type}_more`;
    return w("footer", {
        children: w("div", {
            class: "px-3 py-2-5 text-sm flex  items-center justify-between popup-footer",
            children: [w("div", {
                class: "setting flex flex-row items-center justify-center secondary clickable",
                onClick: l,
                children: [Gy, w("span", {
                    class: "ml-1 text-gray-6",
                    children: e("options")
                })]
            }), w(Q5, {
                ctx: t.ctx,
                onToggleEnabled: t.onToggleEnabled,
                setSettings: t.setSettings,
                setMessage: t.setMessage
            }), w(cm, {
                label: e("more"),
                showArrow: !0,
                maxWidth: o,
                className: "text-gray-6 transform-padding-left more",
                onSelected: g=>{
                    g.value === "openPremium" ? (globalThis.open(Ai),
                        t.onClose()) : g.value === "changeToOnlyTranslationMode" ? c("translation") : g.value === "changeToDualTranslationMode" ? c("dual") : g.value === "translateTheWholePage" ? t.onTranslateTheWholePage() : g.value === "translateToThePageEndImmediately" ? t.onTranslateToThePageEndImmediately() : g.value === "translateTheMainPage" ? t.onTranslateTheMainPage() : g.value === "translateLocalPdfFile" ? t.onOpenUrl(s.PDF_VIEWER_URL, u) : g.value === "pdfProFile" ? t.onOpenUrl(s.PDF_PRO_URL, u) : g.value === "translateText" ? t.onOpenUrl(s.TEXT_TRANSLATE_URL, u) : g.value === "translateLocalHtmlFile" ? t.onOpenUrl(s.HTML_VIEWER_URL, u) : g.value === "translateLocalSubtitleFile" ? t.onOpenUrl(s.SUBTITLE_BUILDER_URL, u) : g.value === "donate" ? (globalThis.open(i.donateUrl),
                        t.onClose()) : g.value === "feedback" ? (globalThis.open(i.feedbackUrl),
                        t.onClose()) : g.value === "options" ? (t.openOptionsPage(),
                        t.onClose()) : g.value === "changeToTranslateTheWholePage" ? p() : g.value === "changeToTranslateTheMainPage" ? m() : g.value === "about" ? t.openAboutPage() : g.value === "toggleEnabled" ? t.onToggleEnabled() : g.value === "openEbookViewer" ? t.onOpenUrl(s.EBOOK_VIEWER_URL, u) : g.value === "openEbookBuilder" ? t.onOpenUrl(s.EBOOK_BUILDER_URL, u) : g.value === "goPro" && t.onOpenUrl(Ai, u)
                }
                ,
                menus: [i.translationMode === "dual" && {
                    label: "\u{1F524} " + e("changeToOnlyTranslationMode"),
                    value: "changeToOnlyTranslationMode"
                }, i.translationMode === "translation" && {
                    label: "\u{1F521} " + e("changeToDualTranslationMode"),
                    value: "changeToDualTranslationMode"
                }, i.translationArea === "main" && {
                    label: "\u{1F480} " + e("changeToTranslateTheWholePage"),
                    value: "changeToTranslateTheWholePage"
                }, i.translationArea === "body" && {
                    label: "\u{1F4D6} " + e("changeToTranslateTheMainPage"),
                    value: "changeToTranslateTheMainPage"
                }, {
                    label: "\u26A1 " + e("translateToThePageEndImmediately"),
                    value: "translateToThePageEndImmediately"
                }, {
                    label: "\u{1F4D8} " + e("browser.openEbookViewer"),
                    value: "openEbookViewer"
                }, {
                    label: "\u{1F4DA} " + e("browser.openEbookBuilder"),
                    value: "openEbookBuilder"
                }, {
                    label: "\u{1F4C1} " + e("browser.translateLocalPdfFile"),
                    value: "translateLocalPdfFile"
                }, {
                    label: "\u2747\uFE0F " + e("browser.PdfProFile"),
                    value: "pdfProFile"
                }, {
                    label: "\u{1F310} " + e("browser.translateLocalHtmlFile"),
                    value: "translateLocalHtmlFile"
                }, {
                    label: "\u{1F4FA} " + e("browser.translateLocalSubtitleFile"),
                    value: "translateLocalSubtitleFile"
                }, {
                    label: "\u{1F4DD} " + e("browser.textTranslate"),
                    value: "translateText"
                }, r === !1 && a && {
                    label: "\u{1F451} " + e("upgradeToPro"),
                    value: "goPro"
                }, {
                    label: "\u2764\uFE0F " + e(a ? "aboutLabel" : "aboutLabelWithoutSponsor"),
                    value: "about"
                }].filter(Boolean)
            })]
        })
    });
    function l(g) {
        g.preventDefault(),
            t.openOptionsPage()
    }
    function c(g) {
        t.setSettings(f=>({
            ...f,
            translationMode: g
        })),
            t.onSwitchTranslationMode(g)
    }
    function p() {
        t.setSettings(g=>({
            ...g,
            translationArea: "body"
        })),
            t.onTranslateTheWholePage()
    }
    function m() {
        t.setSettings(g=>({
            ...g,
            translationArea: "main"
        })),
            t.onTranslateTheMainPage()
    }
}

function xm(t) {
    let {setSettings: e, config: n, openSharePage: r, ctx: a, errorMsg: i, onAutoEnableSubtitleChanged: o} = t
        , [s,u] = se("")
        , [l,c] = se(i)
        , [p,m] = se(null)
        , [g,f] = se(null);
    Ae(()=>{
            Mt.get(Ft, null).then(E=>{
                    E ? (m(E),
                        f(Jt(E))) : f(!1)
                }
            ).catch(E=>{
                    f(!1)
                }
            )
        }
        , []);
    let T = !0
        , b = tt();
    n && b && (T = n.generalRule.showSponsorOnSafari);
    let h = pl(n);
    return w("div", {
        class: `popup-container ${t.className || ""}`,
        style: t.style,
        children: [w("div", {
            class: "popup-content text-sm",
            children: [h ? w("div", {
                style: {
                    marginTop: -12
                }
            }) : w("div", {
                class: "flex items-center justify-between ml-1",
                style: {
                    height: 28
                },
                children: [w(wy, {
                    isLogin: !!p,
                    isProUser: !!g,
                    config: n
                }), w(J5, {
                    openSharePage: r
                })]
            }), w(Dy, {
                ctx: t.ctx,
                setSettings: t.setSettings,
                onSetPageLanguage: t.onSetPageLanguage,
                currentLang: t.currentLang
            }), w(Ay, {
                isProUser: !!g,
                ctx: t.ctx,
                setSettings: t.setSettings,
                pageStatus: t.pageStatus,
                onTranslatePage: t.onTranslatePage,
                onRestorePage: t.onRestorePage,
                openOptionsPage: t.openOptionsPage
            }), w("div", {
                class: "flex flex-row mt-3 items-center",
                children: [w($5, {
                    ctx: a,
                    onSwitchTranslationMode: t.onSwitchTranslationMode
                }), w(Y5, {
                    ctx: t.ctx,
                    pageStatus: t.pageStatus,
                    currentUrl: t.currentUrl,
                    onTranslatePdf: t.onTranslatePdf,
                    onToggleTranslate: t.onToggleTranslate,
                    disabledButton: t.disabledButton,
                    noPermissionPDF: t.noPermissionPDF
                })]
            }), w("div", {
                class: `text-sm text-gray-9 mt-4 ml-1 ${s ? "" : "display-none"}`,
                children: s
            }), w("div", {
                class: `text-sm text-gray-9 mt-4 ml-1 ${l ? "" : "display-none"}`,
                children: l
            }), w(dm, {
                isShowError: !1,
                request: t.request,
                setStorageBuildinConfig: t.onSetBuildinConfig
            }), w("div", {
                class: "text-sm px-1 text-gray-2",
                children: [w(_y, {
                    ctx: t.ctx,
                    setSettings: t.setSettings,
                    pageStatus: t.pageStatus,
                    onTranslatePage: t.onTranslatePage,
                    onRestorePage: t.onRestorePage,
                    currentUrl: t.currentUrl,
                    currentLang: t.currentLang,
                    onClose: t.onClose,
                    onSetLocalConfig: t.onSetLocalConfig
                }), w(qy, {
                    ctx: t.ctx,
                    openOptionsPage: t.openOptionsPage,
                    setSettings: t.setSettings
                }), w(jy, {
                    ctx: a,
                    currentLang: t.currentLang,
                    pageStatus: t.pageStatus,
                    onTranslatePage: t.onTranslatePage,
                    onClose: t.onClose,
                    setSettings: t.setSettings
                }), w(G5, {
                    onAutoEnableSubtitleChanged: o,
                    ctx: a,
                    setSettings: e
                })]
            }), w(Jy, {
                type: t.type,
                onOpenUrl: t.onOpenUrl,
                openOptionsPage: t.openOptionsPage
            })]
        }), w(V5, {
            ...t,
            isProUser: !!g,
            isShowPricing: T,
            setMessage: u
        })]
    })
}


function jy(t) {
    let {isAlwaysTranslateLang: e} = W5({
        ctx: t.ctx,
        currentLang: t.currentLang
    })
        , {t: n} = Ce();
    if (t.currentLang !== "auto")
        return w("div", {
            class: "flex justify-between mt-3 items-center",
            children: [w("label", {
                class: "mb-0 text-overflow-ellipsis flex-1",
                children: n("alwaysTranslateSomeLanguage", {
                    language: Ta(t.currentLang, t.ctx.config.interfaceLanguage, !1, !0)
                })
            }), w("input", {
                id: "alwaysTranslateThisLanugage",
                name: "alwaysTranslateThisLanugage",
                type: "checkbox",
                role: "switch",
                class: "shrink-0",
                checked: !!e,
                onChange: a=>{
                    let i = a.target.checked;
                    r(i ? "matches" : void 0)
                }
            })]
        });
    return w("span", {});
    function r(a) {
        if (!a) {
            t.setSettings(s=>{
                    let u = {
                        ...s.translationLanguagePattern
                    };
                    return {
                        ...s,
                        translationLanguagePattern: {
                            ...s.translationLanguagePattern,
                            matches: fl(t.currentLang, u.matches),
                            excludeMatches: fl(t.currentLang, u.excludeMatches)
                        }
                    }
                }
            );
            return
        }
        let i = a
            , o = i === "matches" ? "excludeMatches" : "matches";
        t.currentLang && t.setSettings(s=>{
                let u = {
                    ...s.translationLanguagePattern
                };
                return u[i] = ml(t.currentLang, u[i]),
                    u[o] = fl(t.currentLang, u[o]),
                    {
                        ...s,
                        translationLanguagePattern: {
                            ...s.translationLanguagePattern,
                            ...u
                        }
                    }
            }
        ),
        i === "matches" && t.pageStatus === "Original" && setTimeout(()=>{
                t.onTranslatePage(),
                    t.onClose()
            }
            , 100)
    }
}


function W5({ctx: t, currentLang: e}) {
    let n = null;
    if (e && e !== "auto") {
        let {translationLanguagePattern: r} = t.config
            , {matches: a} = r;
        a.includes(e) ? n = !0 : n = !1
    }
    return {
        isAlwaysTranslateLang: n
    }
}




function k5({currentUrl: t, ctx: e, currentLang: n, onSetLocalConfig: r, pageStatus: a, onRestorePage: i, onTranslatePage: o, setSettings: s, onClose: u}) {
    let l = null
        , c = null
        , p = null
        , m = null
        , g = null
        , {translationUrlPattern: f} = e.config;
    if (l = Ue(()=>new URL(t || ""), [t]),
    e.config && t && Py(t)) {
        c = Ly(t);
        let {matches: h, excludeMatches: E} = f;
        p = !!h.find(D=>dt(t, D)),
            m = !!E.find(D=>dt(t, D))
    }
    if (n && n !== "auto") {
        let {translationLanguagePattern: h} = e.config
            , {matches: E} = h;
        E.includes(n) ? g = !0 : g = !1
    }
    let T = Ve(()=>{
            let h = l.hostname
                , E = e.localConfig.tempTranslationUrlMatches || []
                , D = E.filter(I=>I.match !== h)
                , M = !1;
            D.length !== E.length && (M = !0),
            M && r({
                ...e.localConfig,
                tempTranslationUrlMatches: [...D]
            })
        }
        , [r])
        , b = Ve((h,E)=>{
            if (h === "default") {
                s(I=>{
                        let S = {
                            ...I.translationUrlPattern
                        };
                        return {
                            ...I,
                            isChangedAlwaysTranslatedUrls: !0,
                            translationUrlPattern: {
                                ...I.translationUrlPattern,
                                matches: pm(t, S.matches),
                                excludeMatches: pm(t, S.excludeMatches)
                            }
                        }
                    }
                ),
                    T();
                return
            }
            let D = h
                , M = D === "matches" ? "excludeMatches" : "matches";
            l && s(I=>{
                    let S = {
                        ...I.translationUrlPattern
                    };
                    return S[M] = pm(t, S[M]),
                        S[D] = ml(E, S[D]),
                        {
                            ...I,
                            isChangedAlwaysTranslatedUrls: !0,
                            translationUrlPattern: {
                                ...I.translationUrlPattern,
                                ...S
                            }
                        }
                }
            ),
                D === "matches" && a === "Original" ? setTimeout(()=>{
                        o(),
                            u()
                    }
                    , 100) : D === "excludeMatches" && a === "Translated" && setTimeout(()=>{
                        i(),
                            u()
                    }
                    , 100)
        }
        , [o, u, a, T]);
    return {
        currentUrlObj: l,
        currentUrlWithoutHash: c,
        isAlwaysTranslateDomain: p,
        isNeverTranslateDomain: m,
        isAlwaysTranslateLang: g,
        handleTranslationUrlPatternSelected: b
    }
}
function pm(t, e) {
    return e ? (Array.isArray(e) || (e = [e]),
        t ? e.filter(n=>!dt(t, n)) : e) : []
}




function Y5({currentUrl: t, pageStatus: e, onTranslatePdf: n, ctx: r, onToggleTranslate: a, disabledButton: i, noPermissionPDF: o}) {
    let {t: s, lang: u} = Ce()
        , l = r.config
        , c = Ue(()=>new URL(t || ""), [t])
        , p = c?.pathname.toLowerCase().endsWith(".pdf");
    Ga(r?.rule) && !p && (p = !0);
    let m = s("translate");
    e === "Translated" || e === "Error" ? m = s("show-original") : e === "Original" ? p ? Ir() && c.protocol === "file:" || o ? m = s("translate-firefox-local-pdf") : ye() ? m = s("noSupportTranslate-pdf") : m = s("translate-pdf") : m = s("translate") : m = s(e);
    let g = s("translateToThePageEndImmediately");
    return (e === "Original" || e === "Translated") && (l.shortcuts.toggleTranslatePage && (al() ? r.rule.touchShortcutsToggleTranslatePage && r.rule.touchShortcutsToggleTranslatePage !== "touchShortcutsOff" && (m += ` (${s(r.rule.touchShortcutsToggleTranslatePage)})`) : m += ` (${qc(l.shortcuts.toggleTranslatePage)})`),
    l.shortcuts.toggleTranslateToThePageEndImmediately && (g += ` (${l.shortcuts.toggleTranslateToThePageEndImmediately})`)),
        w("button", {
            class: "mb-0 main-button",
            onClick: ()=>{
                p ? n && n() : a()
            }
            ,
            "aria-busy": e === "Translating",
            disabled: i || e === "Translating",
            children: m
        })
}



function Py(t) {
    let e;
    try {
        e = new URL(t)
    } catch {
        return !1
    }
    let n = $3()
        , r = "";
    try {
        r = new URL(n).hostname
    } catch {}
    return r && e.hostname === r ? !0 : !(A5(t) || e.protocol !== "http:" && e.protocol !== "https:" && e.protocol !== "file:" && e.protocol !== "data:")
}
function A5(t) {
    try {
        return new URL(t)?.pathname.toLowerCase().endsWith(".pdf")
    } catch {
        return !1
    }
}
