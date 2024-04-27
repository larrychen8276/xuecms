
var tT = [["auto", "auto"], ["en", "en"], ["ru", "ru"], ["pt", "pt"], ["es", "es"], ["zh-CN", "zh-CHS"], ["ja", "ja"], ["ko", "ko"], ["fr", "fr"], ["ar", "ar"], ["id", "id"], ["vi", "vi"], ["it", "it"]]
    , hg = new Map(tT)
    , cV = new Map(tT.map(([t,e])=>[e, t]));
var bg = class extends De {
    static langMap = hg;
    isSupportList = !1;
    appId = "";
    appSecret = "";
    maxTextLength = 800;
    constructor(e, n, r) {
        super(e, n, r)
    }
    getDefaultRateLimit() {
        return {
            limit: 5,
            interval: 1050
        }
    }
    async translate(e) {
        let {text: n, from: r, to: a} = e
            , i = {
            q: n,
            from: hg.get(r) || "auto",
            to: hg.get(a) || a
        }
            , o = new URLSearchParams(i)
            , s = await ce({
            url: "https://aidemo.youdao.com/trans",
            method: "POST",
            body: o.toString(),
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
            },
            retry: this.retry,
            timeout: this.requestTimeout
        });
        if (s && s.translation)
            return {
                text: s.translation.join(`
`),
                from: r,
                to: a
            };
        throw new V("Youdao translation failed: " + JSON.stringify(s))
    }
}
    , nT = bg;

