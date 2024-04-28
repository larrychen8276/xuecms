
function E3() {

    if (x.PROD === "1")
        return {};
    let t = {};
    if (x.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID && x.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY) {
        let n = {
            secretId: x.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,
            secretKey: x.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY
        };
        t.translationServices = {},
            t.translationServices.tencent = n
    }
    if (x.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID && x.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY) {
        let n = {
            appid: x.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,
            key: x.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY
        };
        t.translationServices || (t.translationServices = {}),
            t.translationServices.baidu = n
    }
    if (x.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN) {
        let n = {
            token: x.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN
        };
        t.translationServices || (t.translationServices = {}),
            t.translationServices.caiyun = n
    }
    if (x.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY) {
        let n = {
            apikey: x.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY
        };
        t.translationServices || (t.translationServices = {}),
            t.translationServices.openl = n
    }
    if (x.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID && x.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET) {
        let n = {
            appId: x.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,
            appSecret: x.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET
        };
        t.translationServices || (t.translationServices = {}),
            t.translationServices.youdao = n
    }
    if (x.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID && x.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY) {
        let n = {
            accessKeyId: x.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,
            secretAccessKey: x.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY
        };
        t.translationServices || (t.translationServices = {}),
            t.translationServices.volc = n
    }
    if (x.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY) {
        let n = {
            authKey: x.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY
        };
        t.translationServices || (t.translationServices = {}),
            t.translationServices.deepl = n
    }
    if (x.DEEPL_PROXY_ENDPOINT && (t.translationServices || (t.translationServices = {}),
    t.translationServices.deepl || (t.translationServices.deepl = {}),
        t.translationServices.deepl.immersiveTranslateApiUrl = x.DEEPL_PROXY_ENDPOINT),
    x.IMMERSIVE_TRANSLATE_DEEPL_ENDPOINT && (t.translationServices || (t.translationServices = {}),
    t.translationServices.deepl || (t.translationServices.deepl = {}),
        t.translationServices.deepl.immersiveTranslateDeeplTokenUrl = x.IMMERSIVE_TRANSLATE_DEEPL_ENDPOINT),
        x.IMMERSIVE_TRANSLATE_SECRET_OPENAI_API_KEY) {
        let n = {
            APIKEY: x.IMMERSIVE_TRANSLATE_SECRET_OPENAI_API_KEY
        };
        t.translationServices || (t.translationServices = {}),
            t.translationServices.openai = n
    }
    x.IMMERSIVE_TRANSLATE_SERVICE && (t.translationService = x.IMMERSIVE_TRANSLATE_SERVICE);
    let e = {};
    return x.DEBUG === "1" && (e.debug = !0,
        e.cache = !1),
    x.MOCK === "1" && (e.translationService = "mock"),
        e
}


async function Zt() {
    let t = await oe.storage.local.get(Jo);
    if (t[Jo]) {
        let e = t[Jo]
            , n = e.tempTranslationUrlMatches || []
            , r = n.filter(o=>o.expiredAt > Date.now())
            , a = !1;
        r.length !== n.length && (n = r,
            a = !0);
        let i = {
            ...e,
            tempTranslationUrlMatches: [...n]
        };
        return a && await Xt(i),
            i
    } else
        return {}
}


async function Xt(t) {
    await oe.storage.local.set({
        [Jo]: t
    })
}
async function C3(t) {
    await oe.storage.local.set({
        [Xr]: t
    })
}
async function w3() {
    let t = await oe.storage.local.get(Xr)
        , n = {
        ...await cp(),
        ..._i,
        buildinConfigUpdatedAt: x.BUILD_TIME
    };
    if (t[Xr]) {
        let r = t[Xr];
        if (r && r.buildinConfigUpdatedAt) {
            let a = new Date(r.buildinConfigUpdatedAt)
                , i = new Date(n.buildinConfigUpdatedAt);
            a > i && (n = r)
        }
    }
    return n
}
async function Pn() {
    //debugger;

    let t = await oe.storage.local.get(Xr)
        , e = {
        ..._i,
        buildinConfigUpdatedAt: x.BUILD_TIME
    };
    if (t[Xr]) {
        let C = t[Xr];
        if (C && C.buildinConfigUpdatedAt) {
            let L = new Date(C.buildinConfigUpdatedAt)
                , U = new Date(e.buildinConfigUpdatedAt);
            L > U && (e = C)
        }
    }
    let n = await eD(e);
    e.targetLanguage = n;
    let r = await Mt.get(Ft, null)
        , a = {};
    if (!ye() && oe.commands && oe.commands.getAll) {
        let C = await oe.commands.getAll();
        for (let L of C)
            L.name && L.shortcut && (a[L.name] = L.shortcut)
    }
    let i = await cp()
        , o = E3()
        , s = await Or()
        , u = globalThis.IMMERSIVE_TRANSLATE_CONFIG || {}
        , l = await Zt()
        , c = new Date
        , p = Object.assign({}, u, o, s);

    if (!p.interfaceLanguage) {
        let C = await Zw();
        p.interfaceLanguage = C
    }
    let m = p.interfaceLanguage === "en"
        , g = p.targetLanguage === "en"
        , f = e && e.translationLanguagePattern && e.translationLanguagePattern.matches && e.translationLanguagePattern.matches.length === 0
        , T = ["bing", "google", "transmart", "mock"].includes(p.translationService) || !p.translationService;
    !m && !g && !f && T ? e.translationLanguagePattern || (e.translationLanguagePattern = {
        matches: ["en"],
        excludeMatches: []
    }) : e.translationLanguagePattern = {
        matches: [],
        excludeMatches: []
    };
    let b = e && e.enableDefaultAlwaysTranslatedUrls;
    p.enableDefaultAlwaysTranslatedUrls === !1 && (b = !1);
    let h = p && p.isChangedAlwaysTranslatedUrls
        , E = [];
    p.translationUrlPattern && p.translationUrlPattern.matches && (E = p.translationUrlPattern.matches || []);
    let D = !1;
    h === void 0 && (E.length > 0 ? h = !0 : h = !1,
        p.isChangedAlwaysTranslatedUrls = h,
        s.isChangedAlwaysTranslatedUrls = h,
        D = !0);

    let M = (p?.translationLanguagePattern?.matches?.length || 0) > 0, I = await At("installedAt", ""), S = Number(await Rr("translage_page_daily", 0)), v = Number(await At(Xn, 0)), k;
    v > 0 && (Date.now() - v < e.inactiveDays * 24 * 60 * 60 * 1e3 ? k = !0 : k = !1);
    let A;
    S > 0 && (Date.now() - S < e.inactiveDays * 24 * 60 * 60 * 1e3 ? A = !0 : A = !1);
    let y;
    if (I) {
        let C = new Date(I);
        Date.now() - C.getTime() < 24 * 60 * 60 * 1e3 ? y = !0 : y = !1
    }
    let R = p.modifiedBySystem;
    if (b && !h && !m && !g && T && !M && (R === !0 || y || A === !1 || k === !1 || A === void 0 && k === void 0) && Xw(E, e.defaultAlwaysTranslatedUrls) && (p.translationUrlPattern || (p.translationUrlPattern = {}),
    p.translationUrlPattern.matches || (p.translationUrlPattern.matches = []),
    p.translationUrlPattern.excludeMatches || (p.translationUrlPattern.excludeMatches = []),
        p.translationUrlPattern.matches = [...e.defaultAlwaysTranslatedUrls],
        s.translationUrlPattern = p.translationUrlPattern,
        s.modifiedBySystem = !0,
        D = !0,
        ls([{
            name: "modifyAlwaysTranslatedUrls"
        }])),
    D && (B.debug("isChangedUserConfig", D),
        await ds(s)),
    l && l.tempTranslationUrlMatches && l.tempTranslationUrlMatches.length > 0) {
        let C = l.tempTranslationUrlMatches.filter(L=>new Date(L.expiredAt) > c);
        if (C.length > 0) {
            let L = p.translationUrlPattern ? p.translationUrlPattern?.matches || [] : []
                , U = Array.isArray(L) ? L : [L]
                , H = Array.from(new Set(U.concat(C.map(j=>j.match))));
            p.translationUrlPattern = {
                ...p.translationUrlPattern,
                matches: H
            }
        }
    }

    // TODO:加载配置文件 buildin_config_default.js -> var _i
    let _ = Object.assign(i, e);
    Ka({
        rule: e,
        valueIsArray: C=>Array.isArray(i[C]),
        getMergedValue: C=>i[C],
        onMergedResult: (C,L)=>{
            C != "generalRule" && (_[C] = L)
        }
    });
    let P = Jt(r)
        , N = {};
    p.translationServices && p.translationServices.deepl && (N = p.translationServices.deepl);
    let z = {};
    p.translationServices && p.translationServices.openai && (z = p.translationServices.openai),
        !P && N.authKey && !N.provider ? (_.translationServices.deepl || (_.translationServices.deepl = {}),
            _.translationServices.deepl.provider = "custom") : N && N.provider || (_.translationServices.deepl || (_.translationServices.deepl = {}),
            _.translationServices.deepl.provider = "pro"),
        !P && z.APIKEY && !z.provider ? (_.translationServices.openai || (_.translationServices.openai = {}),
            _.translationServices.openai.provider = "custom") : z && z.provider || (_.translationServices.openai || (_.translationServices.openai = {}),
            _.translationServices.openai.provider = "pro");
    let q = Object.keys(_)
        , F = ["translationUrlPattern", "translationLanguagePattern", "immediateTranslationPattern", "translationBodyAreaPattern", "translationParagraphLanguagePattern", "translationThemePatterns", "translationGeneralConfig", "shortcuts", "inputTranslationUrlPattern", "inputLanguageCodeAlias"];

    for (let C of q) {
        let L = C;
        if (L === "generalRule")
            typeof p[L] == "object" && (_[L] = hl(i[L], p[L]));
        else if (L === "translationServices")
            tD(p, _);
        else if (typeof p[L] != "string" && typeof p[L] != "boolean" && typeof p[L] != "number" && F.includes(L))
            p[L] && (_[L] = Object.assign(_[L], p[L])),
            L === "shortcuts" && (ye() || tt() ? _[L] = {
                ..._[L],
                ...a
            } : _[L] = {
                ...a
            });
        else if (L === "rules") {
            if (Array.isArray(p[L])) {
                let U = _.rules || []
                    , H = {};
                for (let W of U)
                    W.id && (H[W.id] = W);
                let j = p[L].map(W=>W.id && H[W.id] ? S3(e.generalRule, H[W.id], W) : W);
                _[L] = [...j, ..._[L]]
            }
            if (x.PROD === "0" && x.DEV_RULES) {
                let U = JSON.parse(x.DEV_RULES);
                _[L] = [...U, ..._[L]]
            }
        } else
            p[L] !== void 0 && (_[L] = p[L])
    }
    return _.donateUrl = e.donateUrl,
        _.minVersion = e.minVersion,
        _.feedbackUrl = e.feedbackUrl,
        _.rawUserConfig = s,
        _
}

async function Or() {
    return (await oe.storage.sync.get("userConfig") || {}).userConfig || {}
}


var Zw = async()=>{
        let t = ["zh-CN"];
        try {
            t = await oe.i18n.getAcceptLanguages()
        } catch (r) {
            B.warn("get browser language error:", r)
        }
        let n = t.map(r=>he(r)).find(r=>Nt[r]);
        return n || "en"
    }
    , cp = async()=>{
        let t = {
            ..._i,
            buildinConfigUpdatedAt: x.BUILD_TIME
        };
        return {
            ...t,
            targetLanguage: pr,
            interfaceLanguage: "en",
            translationMode: "dual",
            debug: !1,
            alpha: !1,
            translationUrlPattern: {
                matches: [],
                excludeMatches: []
            },
            translationLanguagePattern: {
                matches: [],
                excludeMatches: []
            },
            translationThemePatterns: {},
            translationParagraphLanguagePattern: {
                matches: [],
                excludeMatches: [],
                selectorMatches: [],
                excludeSelectorMatches: []
            },
            translationBodyAreaPattern: {
                matches: [],
                excludeMatches: [],
                selectorMatches: [],
                excludeSelectorMatches: []
            },
            translationTheme: "none",
            translationService: "bing",
            inputTranslationService: "inherit",
            mouseHoverTranslationService: "inherit",
            subtitleTranslateService: "inherit",
            translationArea: "main",
            translationStartMode: "dynamic",
            translationServices: {},
            monkeyH5FloatBall: {
                ...t.monkeyH5FloatBall
            },
            pcFloatBall: {
                ...t.pcFloatBall
            },
            generalRule: {
                ...t.generalRule
            },
            translationGeneralConfig: {
                engine: "bing",
                _systemExcludeWordRegex: "\\b({word})\\b"
            },
            rules: []
        }
    }
;
