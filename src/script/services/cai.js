var Qa = class extends De {
        langMap;
        requestBaseConfig;
        apiServiceConfig;
        constructor(e, n, r) {
            super(e, n, r),
                this.apiServiceConfig = this.serviceConfig,
                this.isSupportList = this.apiServiceConfig.isSupportList,
                this.langMap = new Map(this.apiServiceConfig.langs),
                this.requestBaseConfig = this.handleBaseApiServiceConfig(this.apiServiceConfig)
        }
        async translate(e) {
            if (!Object.keys(this.apiServiceConfig).length)
                throw "serivce id not found config";
            let {text: n, from: r, to: a} = e;
            if (!this.langMap.has(a))
                throw new V(`Unsupported language: ${a}`);
            a = this.langMap.get(a);
            let i = await this.checkLang(r, n);
            if (!i)
                return {
                    text: n,
                    from: r,
                    to: a
                };
            r = i;
            let o = this.handleRequest(n, r, a)
                , s = await dl(o);
            return {
                text: this.handleResponseText(s),
                from: r,
                to: a
            }
        }
        async translateList(e) {
            if (!Object.keys(this.apiServiceConfig).length)
                throw new V("serivce id not found config");
            let {text: n, from: r, to: a} = e;
            if (!this.langMap.has(a))
                throw new V(`Unsupported language: ${a}`);
            a = this.langMap.get(a);
            let i = await this.checkLang(r, n.join(" "));
            if (!i)
                return {
                    text: n,
                    from: r,
                    to: a
                };
            r = i;
            let o = this.handleRequest(n, r, a)
                , s = await dl(o);
            return {
                text: this.handleResponseText(s),
                from: r,
                to: a
            }
        }
        handleBaseApiServiceConfig(e) {
            let n = e.request.url
                , r = e.request.headers || {};
            return r["content-type"] || (r["content-type"] = "application/json"),
                {
                    url: n,
                    retry: e.request.retry || this.retry,
                    method: e.request.method || "POST",
                    headers: r,
                    body: JSON.stringify(e.request.body),
                    timeout: this.requestTimeout
                }
        }
        async checkLang(e, n) {
            if (e == "auto") {
                if (this.langMap.has("auto"))
                    return "auto";
                e = await this.detectLanguageRemotely(n.slice(0, this.apiServiceConfig.checkLangLenth || 10))
            }
            return this.langMap.has(e) ? this.langMap.get(e) : null
        }
        handleRequest(e, n, r) {
            let a = {
                ...this.requestBaseConfig
            }
                , i = a?.body || ""
                , o = this.apiServiceConfig.keywords || {};
            a.body = u(i);
            let s = a.headers || {};
            return Object.keys(s).forEach(l=>{
                    s[l] = u(s[l])
                }
            ),
                a.headers = s,
                a.url = u(a.url || ""),
                a;
            function u(l) {
                return l.replaceAll('"{text}"', ()=>Array.isArray(e) ? JSON.stringify(e) : `"${e}"`).replaceAll("{from}", n).replaceAll("{to}", r).replaceAll(/{([a-z:_]+)}/gi, (p,m)=>{
                        let[g,f] = m.split(":")
                            , T = o[g];
                        return f === "random" ? yA(T.split(",")) : T
                    }
                )
            }
        }
        handleResponseText(e) {
            let n = this.apiServiceConfig.response
                , r = e
                , a = n.text.split(".");
            for (let i of a) {
                if (Array.isArray(r))
                    return r = r.map(o=>o[i]),
                        r;
                r = r[i]
            }
            return r
        }
        detectLanguageRemotely(e) {
            return zr.detectLanguageRemotelyByTransmart(e)
        }
    }
;

function yA(t) {
    let e = Math.floor(Math.random() * t.length);
    return t[e]
}

var Q2 = [["zh-CN", "zh"], ["en", "en"], ["ja", "ja"], ["ko", "ko"], ["fr", "fr"], ["es", "es"], ["ru", "ru"]]
    , pg = class extends Qa {
    static langMap = new Map(Q2);
    constructor(e, n, r) {
        if (!e?.token)
            throw new V("token are required");
        super({
            ...e,
            isSupportList: !0,
            langs: Q2,
            keywords: {
                token: e.token?.trim()
            },
            request: {
                headers: {
                    "content-type": "application/json",
                    "x-authorization": "token {token:random}"
                },
                url: "https://api.interpreter.caiyunai.com/v1/translator",
                retry: 2,
                body: {
                    source: "{text}",
                    trans_type: "{from}2{to}"
                }
            },
            response: {
                text: "target"
            }
        }, n, r)
    }
}
    , J2 = pg;
