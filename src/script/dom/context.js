function k2(t, e, n) {
    let r = Object.assign({}, e)
        , a = new Map;
    (r.langOverrides || []).forEach(s=>{
            a.set(s.id, s)
        }
    );
    for (let s of a.keys()) {
        let[u,l] = s.split("2");
        if (["auto", n.sourceLanguage].includes(u) && ["auto", n.targetLanguage].includes(l)) {
            let c = a.get(s);
            if (!c)
                continue;
            if (c.extends) {
                let p = a.get(c.extends);
                p && (r = Object.assign({}, r, p))
            }
            r = Object.assign({}, r, c)
        }
    }
    return ["prompt", "systemPrompt", "multiplePrompt", "subtitlePrompt"].forEach(s=>{
            t?.hasOwnProperty(s) && (r[s] = t[s])
        }
    ),
        r
}

async function hn(t) {
    //debugger;

    /*
    第一次返回：undefined
    第二次返回
    {
    "translationMode": "dual",
    "translationArea": "main",
    "translationStartMode": "immediate",
    "immediateTranslationTextCount": 4999,
    "isAutoTranslate": true,
    "translationDebounce": 300,
    "isNeedClean": false,
    "isDetectParagraphLanguage": true,
    "cache": true,
    "translationTheme": "none",
    "isTranslateDirectlyOnHover": false
    }
     */
    //TODO:第一次读取翻译服务（buildin_config_default.js -> translationService）
    let {url: e, config: n, state: r} = t
        , a = new URL(e)
        , i = "auto"
        , {translationParagraphLanguagePattern: o, translationService: s, translationServices: u, translationTheme: l, translationThemePatterns: c, translationUrlPattern: p, targetLanguage: m, sourceLanguageUrlPattern: g, immediateTranslationPattern: f} = n
        , T = m || "zh-CN"
        , b = to(e, o)
        , h = to(e, f)
        , E = s
        , D = Object.keys(u);
    for (let ne of D) {
        let re = u[ne];
        if (to(e, re)) {
            E = ne;
            break
        }
    }
    let M = l
        , I = Object.keys(c);
    for (let ne of I) {
        let re = c[ne];
        if (re && to(e, re)) {
            M = ne;
            break
        }
    }
    let S = to(e, p)
        , v = A2(e, p);
    v || (v = dt(e, fb)),
    v || (v = dt(e, n.blockUrls));
    let k = A2(e, n.inputTranslationUrlPattern);
    k || (k = dt(e, n.inputTranslationBlockUrls));

    let A = dt(e, n.mutationBlockUrls)
        , y = Object.keys(g)
        , R = {};
    for (let ne of y) {
        let re = g[ne];
        if (re && re.matches)
            for (let xe of re.matches)
                R[xe] = ne
    }
    let _ = Object.keys(R)
        , P = Dp(e, _);
    P && (i = R[P] ?? "auto",
    R[P] && R[P] !== "auto" && qn(R[P]));


    let N = a.hostname
        , z = await tr(N)
        , q = a.pathname + a.search + a.hash
        , F = await tr(q)
        , C = `https://${z}.com/${F}`
        , L = await Zt()
        , U = await w3()
        , H = n.translationStartMode;
    H === "dynamic" && h && (H = "immediate");
    let j = E;
    n.inputTranslationService && n.inputTranslationService !== "inherit" && (j = n.inputTranslationService);
    let W = E;
    n.mouseHoverTranslationService && n.mouseHoverTranslationService !== "inherit" && (W = n.mouseHoverTranslationService);
    let $ = E;
    n.subtitleTranslateService && n.subtitleTranslateService !== "inherit" && ($ = n.subtitleTranslateService);

    let ue = await Mt.get(Ft, null)
        , ae = !1;
    ue && (ae = Jt(ue));
    let J = {
        targetLanguage: T,
        config: n,
        translationService: E,
        inputTranslationService: j,
        mouseHoverTranslationService: W,
        subtitleTranslateService: $,
        isTranslateUrl: S,
        sourceLanguage: i,
        mainFrame: document.body,
        isTranslateExcludeUrl: v,
        isMutationTranslationExcludeUrl: A,
        isInputTranslationExcludeUrl: k,
        rule: n.generalRule,
        url: e,
        encryptedUrl: C,
        state: r ? Object.assign({
            translationMode: n.translationMode,
            translationArea: n.translationArea,
            translationStartMode: H,
            immediateTranslationTextCount: n.immediateTranslationTextCount,
            isAutoTranslate: !1,
            translationDebounce: 300,
            isNeedClean: !1,
            isDetectParagraphLanguage: b,
            cache: n.cache,
            translationTheme: M,
            isTranslateDirectlyOnHover: !1
        }, r) : {
            translationMode: n.translationMode,
            translationArea: n.translationArea,
            translationStartMode: H,
            immediateTranslationTextCount: n.immediateTranslationTextCount,
            isAutoTranslate: !1,
            translationDebounce: 300,
            isNeedClean: !1,
            isDetectParagraphLanguage: b,
            cache: n.cache,
            translationTheme: M,
            isTranslateDirectlyOnHover: !1
        },
        localConfig: L
    };
    ue && (J.user = ue,
        ae ? J.isPro = !0 : J.isPro = !1),
    J.state.translationArea === "body" && (J.config.generalRule.excludeTags = J.config.generalRule.excludeTags.filter(ne=>!J.config.generalRule.bodyTranslateTags.includes(ne)),
        J.config.generalRule.additionalExcludeSelectors = J.config.generalRule.additionalExcludeSelectors.filter(ne=>ne !== ".btn"));
    let ie = n.translationServices[J.translationService] || {};
    ie.immediateTranslationTextCount !== void 0 && iA(ie.immediateTranslationTextCount) && ie.immediateTranslationTextCount >= 0 && (J.state.immediateTranslationTextCount = ie.immediateTranslationTextCount),
    J.translationService === "deepl" && (ie && ie.authKey && ie.authKey.startsWith("immersive_") || ie && ie.provider === "pro" && J.user?.token) && ie.immediateTranslationTextCountForImmersiveDeepl !== void 0 && ie.immediateTranslationTextCountForImmersiveDeepl >= 0 && (J.state.immediateTranslationTextCount = ie.immediateTranslationTextCountForImmersiveDeepl),
    ie && ie.translationDebounce && typeof ie.translationDebounce == "number" && (J.state.translationDebounce = ie.translationDebounce);
    let ge = U.immediateTranslationTextCount;
    n.immediateTranslationTextCount !== ge && (J.state.immediateTranslationTextCount = n.immediateTranslationTextCount);

    //debugger;
    //TODO:翻译规则设定
    let ee = n.rules, Y;

    globalThis.PDFViewerApplication ? Y = ee.find(ne=>ne.pageType == "pdfReader") : globalThis.immersiveTranslateEbookViewer ? Y = ee.find(ne=>ne.pageType == "ebookReader") : globalThis.immersiveTranslateEbookBuilder ? Y = ee.find(ne=>ne.pageType == "ebookBuilder") : Y = ee.find(ne=>to(e, ne)),
    J.state.translationArea === "body" && (J.rule.paragraphMinTextCount = 1,
        J.rule.paragraphMinWordCount = 1),
    Y && Y.pageType === "ebookBuilder" && (J.state.translationStartMode = "immediate");
    let Te = n.generalRule;
    if (Y && (J.rule = hl(Te, Y)),
    J.rule.selectors.length > 0 && (J.rule.paragraphMinTextCount = 2,
        J.rule.paragraphMinWordCount = 1),
    J.state.translationArea === "body" && J.rule.excludeTags && (J.rule.excludeTags = J.rule.excludeTags.filter(ne=>!J.rule.bodyTranslateTags.includes(ne) && !J.rule.forceTranslateTags.includes(ne))),
        J.rule.mainFrameSelector) {
        let ne = document.querySelector(J.rule.mainFrameSelector);
        ne && (J.mainFrame = ne)
    }
    return J
}

function to(t, e) {
    if (!e)
        return !1;
    let {matches: n, excludeMatches: r, selectorMatches: a, excludeSelectorMatches: i} = e;
    return r && r.length > 0 && dt(t, r) ? !1 : n && n.length > 0 && dt(t, n) ? !0 : i && i.length > 0 && Il(i) ? !1 : !!(a && a.length > 0 && Il(a))
}
function A2(t, e) {
    if (!e)
        return !1;
    let {excludeMatches: n, excludeSelectorMatches: r} = e;
    return !!(n && n.length > 0 && dt(t, n) || r && r.length > 0 && Il(r))
}
function iA(t) {
    return typeof t == "number"
}
