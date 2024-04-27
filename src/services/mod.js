
var kA = {
    mock: Xi,
    mock2: Xi,
    custom: Ms,
    google: Ya,
    transmart: Ds,
    deepl: E2,
    volc: R2,
    volcAlpha: Ls,
    bing: Fs,
    tencent: Cs,
    tenAlpha: ws,
    baidu: Y2,
    caiyun: J2,
    cai: Z2,
    openl: Xl,
    youdao: eT,
    you: nT,
    d: Zi,
    dpro: Zi,
    deeplx: _s,
    niu: C2,
    azure: w2,
    openai: _2,
    gemini: iT,
    claude: sT,
    papago: D2,
    aliyun: Ps,
    yandex: Bs
}
    , ga = {};
Object.keys(gr).forEach(t=>{
        ga[t] = {
            ...gr[t],
            class: kA[t]
        }
    }
);
function sc(t, e) {
    let n = kn;
    if (ga[t] && ga[t].class && ga[t].class.langMap && ga[t].class.langMap.size > 0) {
        let r = ga[t].class.langMap
            , a = n.filter(i=>r.get(i));
        return a.includes(e) || a.unshift("placeholder"),
            a
    } else
        return kn
}
async function ma(t, e, n) {
    if (!t.text)
        return t;
    let r = null
        , a = await Ze({
            sentences: [t]
        }, e, (i,o,s)=>{
            i && (r = i)
        }
        , n);
    if (r)
        throw r;
    if (a.sentences.length > 0)
        return {
            ...t,
            ...a.sentences[0]
        };
    throw new V("translateFailed","translate failed")
}



async function uT(t, e) {
    for (let n of t)
        try {
            return await ma({
                id: 1e6,
                text: "Hello world",
                from: "en",
                to: "zh-CN",
                url: "https://google.com",
                fromByClient: "auto"
            }, {
                ...e,
                translationService: n
            }, {
                retry: 1,
                requestTimeout: e.config.verifyRequestTimeout || 5 * 1e3
            }),
                n
        } catch {
            continue
        }
    return null
}
async function Sg(t) {
    let {config: e, translationService: n} = t
        , r = e.translationGeneralConfig
        , a = e.translationServices
        , i = n
        , o = a[i] || {}
        , s = Jt(t.user);
    await new ga[i].class(o,r,{
        translationService: i,
        userToken: t.user?.token,
        isPro: s,
        sourceProgram: t.sourceProgram,
        glossaries: t.rule.glossaries,
        excludeRegexps: t.rule.excludeRegexps
    }).init()
}

function PA(t) {
    if (!t?.length)
        return "auto";
    let e = t[0].from;
    return t[0].fromByClient && t[0].fromByClient !== "auto" && (e = t[0].fromByClient),
        e
}

async function Ze(t, e, n, r) {
    if (!t.sentences.length)
        return {
            ...t
        };
    let {config: a, translationService: i, state: o} = e
        , s = a.translationGeneralConfig
        , u = a.translationServices
        , l = i
        , c = e.targetLanguage;
    t && t.sentences && t.sentences[0] && t.sentences[0].to && (c = t.sentences[0].to);
    let p = u[l] || {}
        , m = a.rawUserConfig?.translationServices?.[l] || {};
    p = k2(m, p, {
        sourceLanguage: PA(t.sentences),
        targetLanguage: c,
        model: p.model || "",
        url: e.url,
        isPro: e.isPro ? "true" : "false",
        sourceProgram: e.sourceProgram || ""
    }),
    r && (p = {
        ...p,
        ...r
    });
    let g = a.beta
        , f = o.cache === !1 && g
        , T = a.debug === !0 && g;
    t.sentences && t.sentences.length > 0 && (t.sentences = t.sentences.map(k=>(f && (k.refresh = !0),
    T && (k.debug = !0),
        k))),
    l === "openai" && (t.sentences = t.sentences.map(k=>({
        ...k,
        from: "auto"
    })));
    let b = [], h = {
        sentences: Array(t.sentences.length)
    }, E = t.sentences.length, D = -1, M = Jt(e.user), I;
    try {
        I = new ga[l].class(p,s,{
            translationService: l,
            userToken: e.user?.token,
            isPro: M,
            sourceProgram: e.sourceProgram,
            glossaries: e.rule.glossaries,
            excludeRegexps: e.rule.excludeRegexps,
            minTextCount: e.rule.paragraphMinTextCount
        }),
            await I.init()
    } catch (k) {
        if (n) {
            b.push(...t.sentences);
            let A = {
                translationService: l,
                isPro: !!e.isPro,
                isLogin: !!e.user?.token
            };
            for (let y of b) {
                let R = k instanceof V ? new V(k.name,k.message).initNetWork(k.status).initData(k.data || A) : k;
                n(R, null, y)
            }
        }
        return {
            sentences: []
        }
    }
    if (o.cache)
        for (let k of t.sentences) {
            D++;
            let A = l;
            l === "openl" && (A = l + "-" + p.codename || Xl.DEFAULT_CODENAME);
            let y = I.getCacheKeyPrefix();
            y && (A = y + "-" + A);
            let R = null;
            try {
                R = await iu(W3({
                    originalText: k.text,
                    from: k.from,
                    to: k.to,
                    service: A
                }), 200)
            } catch (_) {
                B.warn("query cache DB error, but it's ok", _)
            }
            if (R) {
                let _ = {
                    ...k,
                    text: R.translatedText
                };
                h.sentences[D] = _,
                n && n(null, _, k)
            } else
                b.push(k)
        }
    else
        b.push(...t.sentences);
    let S = b.length;
    if (E - S > 0 && B.debug(`use ${E - S} sentences from cache`),
        !b.length)
        return h;
    let v = await I.multipleTranslate({
            sentences: b
        }, p, (k,A,y)=>{
            if (n && n(k, A, y),
            !k && A && !l.startsWith("mock") && o.cache) {
                let R = l;
                l === "openl" && (R = l + "-" + p.codename || Xl.DEFAULT_CODENAME);
                let _ = I.getCacheKeyPrefix();
                _ && (R = _ + "-" + R),
                o.cache && iu(K3({
                    translatedText: A.text,
                    from: y.from,
                    to: y.to,
                    detectedFrom: A.from,
                    key: Ln(y.text),
                    service: R
                }), 3e3).catch(P=>{
                        B.warn("set cache DB error", P)
                    }
                )
            }
        }
    );
    for (let k of v?.sentences || []) {
        // debugger;

        let A = h.sentences.findIndex(y=>!y);
        if (A === -1)
            throw new V("translateFailed","can not match the result");
        h.sentences[A] = k
    }
    return h
}
