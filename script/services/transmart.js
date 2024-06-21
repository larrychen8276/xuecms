var Ds = class t extends De {
        static langMap = new Map(fp);
        clientKey;
        maxTextGroupLength = 25;
        maxTextLength = 1e3;
        isSupportList = !1;
        constructor(e, n, r) {
            super(e, n, r),
                this.clientKey = zr.getClientKey()
        }
        async translate(e) {
            let {text: n, to: r} = e
                , a = await this.detectLanguage(n)
                , i = t.langMap.get(a) || a
                , o = t.langMap.get(r) || r;
            if (a === r)
                return {
                    text: n,
                    from: a,
                    to: r
                };
            // let s = Me()
            let s = x
                , u = e.url;
            s.INSTALL_FROM === "firefox_store" && (u = y2());
            let c = JSON.stringify({
                header: {
                    fn: "auto_translation_block",
                    client_key: this.clientKey
                },
                source: {
                    text_block: n,
                    lang: i,
                    orig_url: u
                },
                target: {
                    lang: o
                }
            })
                , p = await ce({
                url: Al,
                body: c,
                method: "POST",
                retry: this.retry,
                timeout: this.requestTimeout
            });
            if (p.header.ret_code !== "succ")
                throw new V(p.message || p.header.ret_code);
            return {
                text: p.auto_translation,
                from: a || "auto",
                to: r
            }
        }
        getDefaultRateLimit() {
            return {
                limit: 30,
                interval: 1050
            }
        }
        async translateList(e) {
            let {from: n, text: r, to: a} = e
                // , i = Me()
                , i = x
                , o = e.url;
            if (i.INSTALL_FROM === "firefox_store" && (o = y2()),
            r.length === 1) {
                let g = await this.translate({
                    from: n,
                    text: r[0],
                    to: a,
                    url: o,
                    options: e.options
                });
                return {
                    text: [g.text],
                    from: g.from,
                    to: g.to
                }
            }
            let u = await this.detectLanguage(r.join(`
`));
            if (u === a)
                return {
                    text: r,
                    from: u,
                    to: a
                };
            let l = t.langMap.get(u) || u
                , c = t.langMap.get(a) || a
                , p = JSON.stringify({
                header: {
                    fn: "auto_translation",
                    client_key: this.clientKey
                },
                source: {
                    text_list: r,
                    lang: l,
                    orig_url: o
                },
                target: {
                    lang: c
                },
                type: "plain"
            })
                , m = await ce({
                url: Al,
                body: p,
                method: "POST"
            });
            if (m.header.ret_code !== "succ")
                throw new V(m.message || m.header.ret_code);
            return {
                text: m.auto_translation,
                from: u || "auto",
                to: a
            }
        }
        detectLanguageLocally(e) {
            return this.detectLanguageRemotely(e)
        }
        detectLanguageRemotely(e) {
            return zr.detectLanguageRemotelyByTransmart(e)
        }
    }
;

function y2() {
    let t = new Date;
    return t.setMinutes(t.getMinutes() - t.getMinutes() % 5),
        t.setSeconds(0),
        t.setMilliseconds(0),
        `https://google.com/search?q=google&_t=${t.getTime() / 1e3}`
}


///////////////////////////////////////////////////////////////////////////////////////////////////

function P2(t) {
    let e = t.split(`
`), n = [], r, a = "", i = "";
    for (let o of e) {
        o.startsWith("- ") && (o = o.slice(1),
        r && n.push(r),
            r = {},
            a = "",
            i = "");
        let s = o.trim().split(/[:：]/).map(l=>l.trim()).filter(l=>!!l);
        if (s.length >= 2 && !/\S\s\S/.test(s[0])) {
            let l = o.slice(o.indexOf(s[1])).trim();
            l ? (a = s[0],
                l == "|-" ? i = "" : i = l) : i += `
` + o
        } else
            i += `
` + o;
        if (!a)
            continue;
        r || (r = {});
        let u = Number(i);
        r[a] = Number.isNaN(u) ? i : Number(i)
    }
    return r && n.push(r),
        Object.values(n).forEach(o=>{
                Object.entries(o).forEach(([s,u])=>{
                        if (typeof u == "string") {
                            let l = u.trim();
                            l?.startsWith('"') && l?.endsWith('"') ? o[s] = l.slice(1, -1) : o[s] = l
                        }
                    }
                )
            }
        ),
        n
}

var Zp = class extends De {
    apiKeys = [];
    isSupportList = !1;
    maxTextLength = 1200;
    maxTextGroupLength = 1;
    translationTextSeparator = `

%%

`;
    bodyConfigs = {};
    model = "";
    systemPrompt = "";
    prompt = "";
    subtitlePrompt = "";
    multiplePrompt = "";
    ignoreResReges = [];
    apiUrl = "";
    constructor(e, n, r) {
        if (super(e, n, r),
        e || (e = {}),
            e.APIKEY) {
            let a = e.APIKEY?.trim();
            this.apiKeys = a.split(",").map(i=>i.trim())
        }
        Array.isArray(e.ignoreResRegexs) && (this.ignoreResReges = e.ignoreResRegexs),
        e.translationTextSeparator && (this.translationTextSeparator = e.translationTextSeparator),
        e.model && (this.model = e.model),
        e.systemPrompt && (this.systemPrompt = e.systemPrompt),
        e.prompt && (this.prompt = e.prompt),
        e.multiplePrompt && (this.multiplePrompt = e.multiplePrompt),
        e.subtitlePrompt && (this.subtitlePrompt = e.subtitlePrompt),
        e.bodyConfigs && (this.bodyConfigs = e.bodyConfigs)
    }
    getLangMap() {
        return new Map
    }
    getRandomKey() {
        let e = Math.floor(Math.random() * this.apiKeys.length);
        return this.apiKeys[e]
    }
    async translate(e) {
        let {text: n, from: r, to: a, options: i} = e;
        if (n.length === 0)
            return {
                from: r,
                to: a,
                text: ""
            };
        let o = this.getLangMap()
            , s = this.prompt || ""
            , u = o.get(r) || r
            , l = o.get(a) || a
            , c = this.serviceConfig.env || {}
            , p = i?.sourceProgram
            , m = ["subtitle", "videoSubtitle"].includes(p)
            , g = [n];
        i?.rawTextArrayLength && (g = n.split(this.translationTextSeparator)),
        g.length > 1 && this.multiplePrompt && (s = this.multiplePrompt),
        m && this.subtitlePrompt && g.length > 1 && (s = this.subtitlePrompt);
        let f = ""
            , T = ""
            , b = s.includes("{{json}}")
            , h = s.includes("{{yaml}}");
        if (b) {
            let I = []
                , S = c.imt_json_item || "";
            m && (S = c.imt_subtitle_json_item || S);
            for (let v = 0; v < g.length; v++) {
                let k = S.replace(/{{id}}/g, v + 1).replace(/{{text}}/g, g[v]);
                I.push(k)
            }
            f = `[${I.join(",")}]`
        } else if (h) {
            let I = []
                , S = c.imt_yaml_item || "";
            m && (S = c.imt_subtitle_yaml_item || S);
            for (let v = 0; v < g.length; v++) {
                let k = S.replace(/{{id}}/g, v + 1).replace(/{{text}}/g, g[v]);
                I.push(k)
            }
            T = I.join(`
`)
        }
        s = s.replace(/{{(.+?)}}/g, (I,S)=>S === "from" ? u : S === "to" ? l + " Language" : S === "text" ? n : S == "json" ? f : S == "yaml" ? T : c[S] || I).replace(/{{(.+?)}}/g, (I,S)=>c[S] || I);
        let E = await this.handleOptions(s, e);
        B.debug("request options", E);
        let D = await ce(E)
            , M = this.parseResponse(D);
        if (M = this.filterContent(n, M, s, g),
            B.debug("filterContent after", M),
        !b && !h || !M)
            return {
                from: r,
                to: a,
                text: M || n
            };
        M = oA(n, M),
            M = _3(M);
        try {
            let I = {};
            if (b) {
                B.debug("extractValidJson before", M);
                let k = this.extractValidJson(M);
                B.debug("parse before", M),
                    I = uu.parse(k)
            } else if (h) {
                B.debug("parseYAML before", M);
                let k = this.extractValidYaml(M);
                I = P2(k)
            }
            let S = c.imt_trans_field;
            m && (S = c.imt_sub_trans_field || S);
            let v = c.imt_source_field;
            return m && (v = c.imt_sub_source_field || v),
                M = this.restoreText(g, I, S, this.translationTextSeparator, v),
                {
                    from: r,
                    to: a,
                    text: M
                }
        } catch (I) {
            return B.error("parse response failed", M, I),
                {
                    from: r,
                    to: a,
                    text: M
                }
        }
    }
    extractValidJson(e) {
        let n = e.indexOf("[")
            , r = e.lastIndexOf("]");
        return n !== -1 && r !== -1 ? e.slice(n, r + 1) : ""
    }
    extractValidYaml(e) {
        let n = e.split(`
`)
            , r = [];
        for (let a = 0; a < n.length; a++)
            n[a].startsWith("`") || r.push(n[a]);
        return r.join(`
`)
    }
    restoreText(e, n, r, a, i) {
        let o = [];
        for (let s = 0; s < e.length; s++) {
            let u = e[s]
                , l = n[s];
            l && l[r] ? u === l[r] && l[i] && l[i] !== u ? o.push(l[i]) : o.push(l[r]) : l && typeof l == "string" ? o.push(l) : n[r] && typeof n[r] == "string" ? o.push(n[r]) : l && l[i] ? o.push(l[i]) : o.push(e[s])
        }
        return o.join(a)
    }
    parseResponse(e) {
        return ""
    }
    async handleOptions(e, n) {}
    filterContent(e, n, r, a=[]) {
        let i = n;
        if (i.startsWith(r) && (i = i.replace(r, "").trim()),
        this.ignoreResReges && this.ignoreResReges.length)
            try {
                this.ignoreResReges.some(s=>new RegExp(s).test(i)) && (i = e)
            } catch (o) {
                B.debug("e", o)
            }
        return i
    }
    getCacheKeyPrefix() {
        let e = [this.model || "", this.apiUrl || "", this.systemPrompt || "", this.prompt || "", this.systemPrompt || "", this.multiplePrompt || "", this.subtitlePrompt || ""];
        return Ln(e.join("_"))
    }
}
    , no = Zp;


function oA(t, e) {
    return !t.includes(".") && !t.includes("\u3002") && (e.endsWith("\u3002") || e.endsWith(".")) ? e.slice(0, -1) : e
}


///////////////////////////////////////////////////////////////////////////////////////////////////


var fp = [["auto", "auto"], ["zh-CN", "zh"], ["zh-TW", "zh-TW"], ["de", "de"], ["en", "en"], ["es", "es"], ["fr", "fr"], ["id", "id"], ["it", "it"], ["ja", "ja"], ["ko", "ko"], ["ms", "ms"], ["pt", "pt"], ["ru", "ru"], ["th", "th"], ["tr", "tr"], ["vi", "vi"]]
    , Al = "https://transmart.qq.com/api/imt"
    , zr = class t {
        static langMapReverse = new Map(fp.map(([e,n])=>[n, e]));
        static getClientKey() {
            return btoa("transmart_crx_" + navigator.userAgent).slice(0, 100)
        }
        static async detectLanguageRemotelyByTransmart(e) {
            let n = {
                header: {
                    fn: "text_analysis",
                    client_key: t.getClientKey()
                },
                text: e.slice(0, 280)
            }
                , r = await ce({
                url: Al,
                method: "POST",
                body: JSON.stringify(n)
            });
            if (r.header.ret_code !== "succ")
                throw new Error(r.message || r.header.ret_code);
            let a = r.language
                , i = t.langMapReverse.get(a);
            return i || a
        }
    }
;
