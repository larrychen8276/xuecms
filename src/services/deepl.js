
var x2 = [["auto", ""], ["en", "EN"], ["ja", "JA"], ["pl", "PL"], ["zh-CN", "ZH"], ["zh-TW", "ZH"], ["ar", "AR"], ["ja", "JA"], ["ko", "KO"], ["es", "ES"], ["de", "DE"], ["fr", "FR"], ["pt", "PT"], ["pt-br", "PT-BR"], ["ru", "RU"], ["it", "IT"], ["id", "ID"], ["nl", "NL"], ["pl", "PL"], ["bg", "BG"], ["cs", "CS"], ["da", "DA"], ["el", "EL"], ["et", "ET"], ["fi", "FI"], ["hu", "HU"], ["lt", "LT"], ["lv", "LV"], ["ro", "RO"], ["sk", "SK"], ["sl", "SL"], ["sv", "SV"], ["tr", "TR"], ["uk", "UK"]]
    , As = new Map(x2)
    , tA = new Map(x2.map(([t,e])=>[e, t]))
    , Gp = class extends De {
    static langMap = As;
    authKey = "";
    maxTextLength = 1800;
    freeApiUrl = "https://api-free.deepl.com/v2/translate";
    proApiUrl = "https://api.deepl.com/v2/translate";
    immersiveTranslateApiUrl = "https://deepl.immersivetranslate.com/v2/translate";
    immersiveTranslateDeeplTokenUrl = "https://api.immersivetranslate.com";
    immersiveTranslateDeeplProApiUrl = Qt() || Rn() ? "https://api2.immersivetranslate.com/deepl/translate" : "https://test-api2.immersivetranslate.com/deepl/translate";
    provider = "custom";
    splitor = "";
    qualityNoSymabol = "";
    qualityMinTextLength;
    apiKeys = [];
    static async clearState() {}
    getRandomKey() {
        let e = Math.floor(Math.random() * this.apiKeys.length);
        return this.apiKeys[e]
    }
    constructor(e, n, r) {
        if (super(e, n, r),
            e = e || {},
            this.splitor = e.qualityDelimiterBetaV3 || "",
            this.qualityNoSymabol = e.qualityNoSymoblBetaV3 || "",
            this.qualityMinTextLength = e.qualityMinTextLengthV3 || 0,
        e.provider === "pro")
            if (this.provider = "pro",
                r.userToken) {
                if (!r.isPro)
                    throw new V("Please activate Pro membership first, \u8BF7\u5148\u5F00\u901A Pro \u4F1A\u5458\u3002");
                this.authKey = r.userToken,
                    this.apiKeys = this.authKey.split(",").map(a=>a.trim())
            } else
                throw new V("Login required, \u767B\u5F55\u540E\u624D\u53EF\u4EE5\u4F7F\u7528\u3002");
        else if (this.authKey = e.authKey?.trim(),
            this.apiKeys = this.authKey.split(",").map(a=>a.trim()),
            !this.authKey)
            throw new V("authKey are required");
        if (!this.authKey)
            throw new V("authKey are required");
        e && e.freeApiUrl && (this.freeApiUrl = qt(this.freeApiUrl, e.freeApiUrl)),
        e && e.proApiUrl && (this.proApiUrl = qt(this.proApiUrl, e.proApiUrl)),
        e && e.immersiveTranslateApiUrl && (this.immersiveTranslateApiUrl = qt(this.immersiveTranslateApiUrl, e.immersiveTranslateApiUrl)),
        e && e.immersiveTranslateDeeplTokenUrl && (this.immersiveTranslateDeeplTokenUrl = qt(this.immersiveTranslateDeeplTokenUrl, e.immersiveTranslateDeeplTokenUrl)),
        e && e.immersiveTranslateDeeplProApiUrl && (this.immersiveTranslateDeeplProApiUrl = qt(this.immersiveTranslateDeeplProApiUrl, e.immersiveTranslateDeeplProApiUrl))
    }
    async init() {}
    getRateLimiter() {
        let e = super.getRateLimiter();
        if (this.provider === "pro") {
            if (this.serviceConfig?.immersiveTranslateProLimit) {
                let n = Number(this.serviceConfig.immersiveTranslateProLimit);
                return isNaN(n) && (n = 15),
                    {
                        limit: n,
                        interval: e?.interval || 1050
                    }
            }
            return {
                limit: 15,
                interval: e?.interval || 1050
            }
        }
        return super.getRateLimiter()
    }
    getDefaultRateLimit() {
        return {
            limit: 3,
            interval: 1250
        }
    }
    async translateList(e) {
        let {from: n, to: r} = e
            , a = this.getRandomKey()
            , {text: i, merged: o} = this.optimizationText(e)
            , s = {
            source_lang: As.get(n) || "",
            target_lang: As.get(r) || r,
            tag_handling: "html"
        };
        this.serviceConfig?.tag_handling && (this.serviceConfig.tag_handling === "none" ? delete s.tag_handling : s.tag_handling = this.serviceConfig.tag_handling);
        let u = new URLSearchParams(s);
        i.forEach(b=>{
                u.append("text", b)
            }
        );
        let l = u.toString()
            , c = {
            text: i,
            source_lang: As.get(n) || "auto",
            target_lang: As.get(r) || r
        }
            , p = this.freeApiUrl;
        a.endsWith(":im") ? p = this.immersiveTranslateApiUrl : a.endsWith(":fx") || (p = this.proApiUrl);
        let m, g = {};
        e.refresh && (g = {
            "X-Refresh": "True"
        }),
        e.debug && (g = {
            ...g,
            "X-Debug": "True"
        }),
            this.provider === "pro" ? m = await ce({
                retry: this.retry,
                url: this.immersiveTranslateDeeplProApiUrl,
                method: "POST",
                body: JSON.stringify(c),
                headers: {
                    ...g,
                    token: a,
                    "Content-Type": "application/json"
                },
                timeout: this.requestTimeout
            }) : a.startsWith("immersive_") ? m = await ce({
                retry: this.retry,
                url: this.immersiveTranslateDeeplProApiUrl,
                method: "POST",
                body: JSON.stringify(c),
                headers: {
                    ...g,
                    token: a,
                    "Content-Type": "application/json"
                },
                timeout: this.requestTimeout
            }) : m = await ce({
                retry: 2,
                url: p,
                method: "POST",
                body: l,
                headers: {
                    Authorization: "DeepL-Auth-Key " + a,
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                extra: {
                    overrideMimeType: "application/json; charset=utf-8"
                }
            });
        let {translations: f} = this.restoreText(m, o, !!e.debug)
            , T = f.map(b=>b.text);
        if (r === "zh-TW") {
            let b = this.serviceConfig || {};
            b && b.googleApiUrl && (b.apiUrl = b.googleApiUrl);
            let E = await new Ya(this.serviceConfig,this.generalConfig,this.translationOptions).translate({
                from: "zh-CN",
                to: "zh-TW",
                text: f.map(D=>D.text).join(`
`),
                url: "",
                options: {}
            });
            E && E.text && (T = E.text.split(`
`))
        }
        return {
            text: T,
            from: f[0] && tA.get(f[0].detected_source_language) || n,
            to: r
        }
    }
    optimizationText(e) {
        let {text: n, xpaths: r} = e;
        if (!this.splitor || this.provider != "pro")
            return {
                text: n,
                merged: []
            };
        let a = new Map
            , i = [];
        for (let o = 0; o < n.length; o++) {
            let s = r[o - 1]
                , u = r[o];
            if (u.trim() && s === u) {
                if (this.qualityNoSymabol && n[o]?.indexOf(this.qualityNoSymabol) >= 0) {
                    i.push(n[o]);
                    continue
                }
                if (this.qualityMinTextLength > 0 && n[o].length < this.qualityMinTextLength) {
                    i.push(n[o]);
                    continue
                }
                a.set(i.length - 1, (a.get(i.length - 1) || 0) + 1),
                    i[i.length - 1] += this.splitor + n[o]
            } else
                i.push(n[o])
        }
        return {
            text: i,
            merged: [...a.keys()]
        }
    }
    restoreText(e, n, r) {
        if (!this.splitor || this.provider != "pro")
            return e;
        let {translations: a} = e
            , i = [];
        for (let o = 0; o < a.length; o++) {
            let s = a[o];
            if (n.includes(o)) {
                let u = s.text.split(this.splitor).map(l=>({
                    text: !Qt() && r ? `[${l}]` : l,
                    detected_source_language: s.detected_source_language
                }));
                i.push(...u)
            } else
                i.push(s)
        }
        return {
            ...e,
            translations: i
        }
    }
}
    , E2 = Gp;
