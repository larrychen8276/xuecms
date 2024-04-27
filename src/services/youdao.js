
var X2 = [["auto", "auto"], ["en", "en"], ["ru", "ru"], ["pt", "pt"], ["es", "es"], ["zh-CN", "zh-CHS"], ["ja", "ja"], ["ko", "ko"], ["fr", "fr"], ["ar", "ar"], ["id", "id"], ["vi", "vi"], ["it", "it"]]
    , mg = new Map(X2)
    , SA = new Map(X2.map(([t,e])=>[e, t]));
function xA(t) {
    let e = t.length;
    return e <= 20 ? t : t.substring(0, 10) + e + t.substring(e - 10, e)
}
var fg = class extends De {
        static langMap = mg;
        isSupportList = !1;
        appId = "";
        appSecret = "";
        throttleLimit = 5;
        domain = "general";
        vocabId = "";
        constructor(e, n, r) {
            if (super(e, n, r),
            !e || !e.appId || !e.appSecret)
                throw new V("appId and appSecret are required");
            this.appId = e.appId?.trim(),
                this.appSecret = e.appSecret?.trim(),
            e.domain && (this.domain = e.domain),
            e && e.vocabId && (this.vocabId = e.vocabId)
        }
        getDefaultRateLimit() {
            return {
                limit: 5,
                interval: 1050
            }
        }
        async translate(e) {
            let {text: n, from: r, to: a} = e
                , i = EA(32)
                , o = Math.round(new Date().getTime() / 1e3)
                , s = this.appId + xA(n) + i + o + this.appSecret
                , u = await tr(s)
                , l = {
                q: n,
                appKey: this.appId,
                salt: i.toString(),
                from: mg.get(r) || "auto",
                to: mg.get(a) || a,
                sign: u,
                signType: "v3",
                curtime: o.toString()
            };
            this.domain && this.domain !== "general" && (l.domain = this.domain),
            this.vocabId && (l.vocabId = this.vocabId);
            let c = new URLSearchParams(l)
                , m = await ce({
                url: "https://openapi.youdao.com/api",
                method: "POST",
                body: c.toString(),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                retry: this.retry,
                timeout: this.requestTimeout
            });
            if (!m.translation)
                throw new V(JSON.stringify(m));
            let g = m.l
                , [f,T] = g.split("2");
            return {
                text: m.translation.join(`
`),
                from: SA.get(f),
                to: a
            }
        }
    }
;
function EA(t) {
    let e = ""
        , n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        , r = n.length
        , a = 0;
    for (; a < t; )
        e += n.charAt(Math.floor(Math.random() * r)),
            a += 1;
    return e
}
var eT = fg;

