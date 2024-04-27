

var V2 = [["auto", "auto"], ["zh-CN", "zh"], ["en", "en"], ["yue", "yue"], ["wyw", "wyw"], ["ja", "jp"], ["ko", "kor"], ["fr", "fra"], ["es", "spa"], ["th", "th"], ["ar", "ara"], ["ru", "ru"], ["pt", "pt"], ["de", "de"], ["it", "it"], ["el", "el"], ["nl", "nl"], ["pl", "pl"], ["bg", "bul"], ["et", "est"], ["da", "dan"], ["fi", "fin"], ["cs", "cs"], ["ro", "rom"], ["sl", "slo"], ["sv", "swe"], ["hu", "hu"], ["zh-TW", "cht"], ["vi", "vie"]]
    , cg = new Map(V2)
    , TA = new Map(V2.map(([t,e])=>[e, t]))
    , dg = class extends De {
    static langMap = cg;
    endpoint = "https://api.fanyi.baidu.com/api/trans/vip/translate";
    fieldEndpoint = "https://fanyi-api.baidu.com/api/trans/vip/fieldtranslate";
    appid = "";
    key = "";
    isSupportList = !1;
    maxTextGroupLength = 3;
    action = !1;
    domain = "";
    constructor(e, n, r) {
        if (super(e, n, r),
        !e || !e.appid || !e.key)
            throw new V("appid and key are required");
        this.appid = e.appid?.trim(),
            this.key = e.key?.trim(),
        e.action && (this.action = !0),
        e.endpoint && (this.endpoint = e.endpoint),
        e.fieldEndpoint && (this.fieldEndpoint = e.fieldEndpoint),
        e.domain && (this.domain = e.domain,
            this.endpoint = this.fieldEndpoint)
    }
    getDefaultRateLimit() {
        return {
            limit: 1,
            interval: 1550
        }
    }
    async translate(e) {
        let n = Date.now().toString()
            , {endpoint: r} = this
            , {appid: a, key: i} = this
            , {text: o, from: s, to: u} = e
            , l = Ln(a + o + n + i);
        this.domain && (l = Ln(a + o + n + this.domain + i));
        let c = new URLSearchParams({
            from: cg.get(s) || "auto",
            to: cg.get(u) || u,
            q: o,
            salt: n,
            appid: a,
            sign: l
        });
        this.action && c.set("action", "1"),
        this.domain && c.set("domain", this.domain);
        let p = new URL(r);
        p.search = c.toString();
        let m = await ce({
            url: p.toString(),
            retry: this.retry,
            timeout: this.requestTimeout
        });
        if (m.error_code)
            throw new V("API_SERVER_ERROR",m.error_msg);
        let {trans_result: g, from: f} = m
            , T = g.map(({dst: h})=>h);
        return {
            from: TA.get(f) || f,
            to: u,
            text: T.join(`
`)
        }
    }
}
    , Y2 = dg;
