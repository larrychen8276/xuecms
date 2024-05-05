var e6 = Object.create;

var t6 = Object.getOwnPropertyDescriptor;
var n6 = Object.getOwnPropertyNames;
var r6 = Object.getPrototypeOf
    , a6 = Object.prototype.hasOwnProperty;

var s6 = (t,e,n,r)=>{
        if (e && typeof e == "object" || typeof e == "function")
            for (let a of n6(e))
                !a6.call(t, a) && a !== n && pd(t, a, {
                    get: ()=>e[a],
                    enumerable: !(r = t6(e, a)) || r.enumerable
                });
        return t
    }
;
var u6 = (t,e,n)=>(n = t != null ? e6(r6(t)) : {},
    s6(e || !t || !t.__esModule ? pd(n, "default", {
        value: t,
        enumerable: !0
    }) : n, t));

var De = class {
        static langMap = new Map;
        serviceConfig;
        generalConfig;
        maxTextLength = 1800;
        isSupportList = !0;
        maxTextGroupLength = 50;
        requestTimeout = 30 * 1e3;
        retry = 2;
        translationOptions;
        minTextCount = 2;
        constructor(e, n, r) {
            this.serviceConfig = e,
                this.generalConfig = n,
                this.translationOptions = r,
            e?.retry && (this.retry = e.retry),
            e?.requestTimeout && (this.requestTimeout = Number(e.requestTimeout)),
            r && r.minTextCount && (this.minTextCount = r.minTextCount)
        }
        async init() {}
        getMaxTextGroupLength() {
            return this.maxTextGroupLength
        }
        getRateLimiter() {
            let e = this.getDefaultRateLimit() || {
                limit: 7,
                interval: 1250
            }
                , n = this.serviceConfig;
            return n?.limit && (e.limit = Number(n.limit)),
            n?.interval && (e.interval = Number(n.interval)),
                e
        }
        formatRateLimit(e) {
            return e.limit < 1 && (e.interval = Math.round(1e3 / e.limit),
                e.limit = 1),
                e
        }
        getDefaultRateLimit() {
            return {
                limit: 7,
                interval: 1250
            }
        }
        getCacheKeyPrefix() {
            return ""
        }
        translate(e) {
            throw new Error("Not implemented")
        }
        translateList(e) {
            throw new Error("Not implemented")
        }
        async multipleTranslate(e, n, r) {
            if (e.sentences.length === 0)
                return {
                    sentences: []
                };
            let {sentences: a} = e
                , i = !1
                , o = !1
                , s = []
                , u = null
                , l = new Set;
            for (let b of a)
                b.from && b.from !== "auto" && l.add(b.from),
                b.refresh && (i = !0),
                b.debug && (o = !0);
            let c = this.maxTextLength;
            this.serviceConfig && this.serviceConfig.maxTextLengthPerRequest && (c = this.serviceConfig.maxTextLengthPerRequest);
            let p = this.maxTextGroupLength;
            this.serviceConfig && this.serviceConfig.maxTextGroupLengthPerRequest && (p = this.serviceConfig.maxTextGroupLengthPerRequest),
            this.translationOptions && this.translationOptions.sourceProgram && ["videoSubtitle", "subtitle"].includes(this.translationOptions.sourceProgram) && this.serviceConfig && this.serviceConfig.maxTextGroupLengthPerRequestForSubtitle && (p = this.serviceConfig.maxTextGroupLengthPerRequestForSubtitle);
            try {
                s = L3(a, c, p)
            } catch (b) {
                if (r)
                    for (let h = 0; h < a.length; h++) {
                        let E = a[h];
                        r(b, null, E)
                    }
                throw b
            }
            B.debug("tempSentenceGroups", s.map(b=>b));
            let m = []
                , g = []
                , f = (b,h,E)=>{
                let D = "";
                if (h.translatedTexts && h.translatedTexts[0] && (D = h.translatedTexts[0]),
                g[b] || (g[b] = h,
                    g[b].translatedTexts = Array(h.sentenceTotalParts).fill(null)),
                    g[b].hasError)
                    return;
                if (E) {
                    let S = E instanceof V ? new V(E.name,E.message).initNetWork(E.status).initData(E.data) : E;
                    g[b].hasError = !0,
                    h.callback && h.callback(S, null, h.sentence);
                    return
                }
                g[b].translatedTexts[h.partIndex] = D;
                let M = g[b]
                    , I = 0;
                for (let S = 0; S < M.sentenceTotalParts; S++) {
                    let v = M.translatedTexts[S];
                    v != null && (I += 1)
                }
                if (I === M.sentenceTotalParts) {
                    let S = M.translatedTexts.join("")
                        , v = {
                        ...M.sentence,
                        text: S
                    };
                    h.callback && h.callback(null, v, h.sentence)
                }
            }
                , T = this.formatRateLimit(this.getRateLimiter());
            for (let b = 0; b < s.length; b++) {
                let h = s[b]
                    , E = h.url
                    , D = await Z3(this.translationOptions.translationService, T);
                await vr(D || 0);
                let M = async()=>{
                        //debugger;

                        let I = h.from;
                        if (h.fromByClient && h.fromByClient !== "auto" && (I = h.fromByClient),
                            this.isSupportList)
                            return {
                                ...await this.formatAndTranslateList({
                                    text: h.tempSentences.map(v=>v.text),
                                    forces: h.tempSentences.map(v=>v.force),
                                    xpaths: h.tempSentences.map(v=>v.xpath || ""),
                                    from: I,
                                    to: h.to,
                                    url: E,
                                    options: n,
                                    refresh: i,
                                    debug: o
                                }),
                                sourceTempSentences: h.tempSentences
                            };
                        {
                            let S = sb;
                            this.serviceConfig && this.serviceConfig.translationTextSeparator && (S = this.serviceConfig.translationTextSeparator);
                            let v = null;
                            this.serviceConfig && this.serviceConfig.newlinePlaceholderDelimiters && (v = this.serviceConfig.newlinePlaceholderDelimiters);
                            let k = []
                                , A = fr(this.serviceConfig);
                            if (h.tempSentences.forEach((q,F)=>{
                                    let C = kp({
                                        text: q.text,
                                        _systemExcludeWordRegex: this.generalConfig._systemExcludeWordRegex,
                                        delimiters: A,
                                        glossaries: this.translationOptions.glossaries,
                                        excludeRegexps: this.translationOptions.excludeRegexps,
                                        targetLanguage: h.to
                                    });
                                    q.force !== !0 && (C && C.text && C.text.trim().length < this.minTextCount || !xs({
                                        text: C.text,
                                        delimiters: A,
                                        minTextCount: this.minTextCount,
                                        minWordCount: 1,
                                        noTranslateRegexp: []
                                    })) || C && k.push({
                                        item: {
                                            ...q,
                                            text: C.text
                                        },
                                        index: F,
                                        variables: C.variables
                                    })
                                }
                            ),
                            k.length === 0) {
                                let q = h.tempSentences.map(F=>F.text);
                                return Promise.resolve({
                                    sourceTempSentences: h.tempSentences,
                                    text: q,
                                    from: I,
                                    to: h.to
                                })
                            }
                            let y = "";
                            v && v.length >= 2 ? y = k.map((q,F)=>{
                                    let {item: C} = q;
                                    return F === k.length - 1 ? C.text : C.text + v[0] + (F + 1) + v[1]
                                }
                            ).join("") : y = k.map(({item: q})=>q.text).join(S);
                            let R = await this.translate({
                                text: y,
                                from: I,
                                to: h.to,
                                url: E,
                                options: {
                                    ...n,
                                    rawTextArrayLength: k.length,
                                    sourceProgram: this.translationOptions.sourceProgram || ""
                                },
                                refresh: i,
                                debug: o
                            })
                                , {text: _} = R
                                , P = [];
                            if (v && v.length >= 2) {
                                let q = `${v[0]}\\d+${v[1]}`;
                                v && v.length >= 3 && (q = v[2]);
                                let F = new RegExp(q,"g");
                                P = _.split(F)
                            } else
                                P = _.split(S);
                            let N = [];
                            if (P.length > k.length) {
                                for (let q = 0; q < k.length - 1; q++)
                                    N[q] = P[q];
                                N[k.length - 1] = P.slice(k.length - 1).join(S)
                            } else if (P.length < k.length)
                                for (let q = P.length; q < k.length; q++)
                                    P[q] = "";
                            else
                                N = [...P];
                            let z = h.tempSentences.map(q=>q.text);
                            return A = fr(this.serviceConfig, !0),
                                N.forEach((q,F)=>{
                                        let C = k[F]
                                            , L = C.index
                                            , U = C.variables || {};
                                        Object.keys(U).length > 0 && (q = Rp({
                                            text: q,
                                            delimiters: A,
                                            variables: U
                                        })),
                                            z[L] = q
                                    }
                                ),
                                {
                                    sourceTempSentences: h.tempSentences,
                                    text: z,
                                    from: R.from,
                                    to: R.to
                                }
                        }
                    }
                ;
                m.push(M().then(I=>{
                        let {text: S, sourceTempSentences: v} = I;
                        for (let k = 0; k < S.length; k++) {
                            let A = S[k]
                                , y = v[k];
                            if (y) {
                                let {index: R, prefix: _, suffix: P} = y;
                                f(R, {
                                    sentence: {
                                        ...a[R],
                                        from: h.from,
                                        to: h.to
                                    },
                                    sentenceTotalParts: y.sentenceTotalParts,
                                    partIndex: y.partIndex,
                                    translatedTexts: [_ + A + P],
                                    callback: r
                                }, null)
                            }
                        }
                    }
                ).catch(I=>{
                        if (I instanceof V && I.initData({
                            translationService: this.translationOptions.translationService,
                            isLogin: !!this.translationOptions.userToken,
                            isPro: this.translationOptions.isPro
                        }),
                            r) {
                            for (let S = 0; S < h.tempSentences.length; S++) {
                                let v = h.tempSentences[S];
                                f(v.index, {
                                    sentence: {
                                        ...a[v.index],
                                        from: h.from,
                                        to: h.to
                                    },
                                    callback: r
                                }, I)
                            }
                            u = I
                        } else
                            u = I
                    }
                ))
            }
            return await Promise.allSettled(m),
                {
                    sentences: g.map(b=>{
                            let h = b.sentence.text;
                            return b.translatedTexts && b.translatedTexts.length > 0 && (h = b.translatedTexts.join("")),
                                {
                                    ...b.sentence,
                                    text: h
                                }
                        }
                    )
                }
        }
        async formatAndTranslateList(e) {
            let n = {
                ...e
            }
                , {forces: r} = e
                , a = []
                , i = fr(this.serviceConfig);
            if (this.serviceConfig && i.length > 0)
                try {
                    let {text: l, xpaths: c} = e;
                    if (l.forEach((p,m)=>{
                            let g = kp({
                                text: p,
                                _systemExcludeWordRegex: this.generalConfig._systemExcludeWordRegex,
                                delimiters: i,
                                excludeRegexps: this.translationOptions.excludeRegexps,
                                glossaries: this.translationOptions.glossaries,
                                targetLanguage: e.to
                            });
                            r && r[m] !== !0 && (g && g.text && g.text.trim().length < this.minTextCount || !xs({
                                text: g.text,
                                delimiters: i,
                                minTextCount: this.minTextCount,
                                minWordCount: 1,
                                noTranslateRegexp: []
                            })) || a.push({
                                text: g.text,
                                index: m,
                                xpath: c[m],
                                variables: g.variables
                            })
                        }
                    ),
                    a.length === 0)
                        return {
                            text: l,
                            from: e.from,
                            to: e.to
                        };
                    n.text = a.map(p=>p.text),
                        n.xpaths = a.map(p=>p.xpath)
                } catch (l) {
                    B.debug("formatAndTranslateList error", e, l)
                }
            let o = await this.translateList(n)
                , {text: s} = o
                , u = e.text.map(l=>l);
            return i = fr(this.serviceConfig, !0),
                s.forEach((l,c)=>{
                        let p = a[c];
                        if (p) {
                            let m = p.index
                                , g = p.variables
                                , f = Object.keys(g);
                            u[m] = l,
                            f.length > 0 && (u[m] = Rp({
                                text: l,
                                delimiters: i,
                                variables: g
                            }))
                        }
                    }
                ),
                {
                    ...o,
                    text: u
                }
        }
        detectLanguageLocally(e) {
            return Ie({
                text: e,
                minLength: 18,
                pageLangs: [vt(), "en"]
            })
        }
        detectLanguageRemotely(e) {
            return Promise.resolve("auto")
        }
        detectLanguage(e) {
            return e.length >= 50 ? this.detectLanguageLocally(e) : this.detectLanguageRemotely(e)
        }
    }
;
