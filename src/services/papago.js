

var aA = [["auto", "auto"], ["zh-CN", "zh-CN"], ["zh-TW", "zh-TW"], ["en", "en"], ["ja", "ja"], ["ru", "ru"], ["es", "es"], ["de", "de"], ["ko", "ko"], ["fr", "fr"], ["th", "th"], ["vi", "vi"], ["id", "id"]]
    , eo = new Map(aA)
    , Jp = class extends De {
    static langMap = eo;
    isSupportList = !0;
    maxTextGroupLength = 25;
    maxTextLength = 1200;
    constructor(e, n, r) {
        super(e, n, r)
    }
    getDefaultRateLimit() {
        return {
            limit: 3,
            interval: 1150
        }
    }
    async translateList(e) {
        let {text: n, from: r, to: a} = e, i;
        if (n.length === 0)
            return {
                from: r,
                to: a,
                text: []
            };
        let o = `
<br>
`
            , s = n.join(o)
            , u = {
            url: "https://api.papago-chrome.com/v2/translate/openapi",
            retry: this.retry,
            method: "POST",
            headers: {
                authority: "api.papago-chrome.com",
                "content-type": "application/json"
            },
            body: "",
            timeout: this.requestTimeout
        };
        r === "auto" || !eo.get(r) ? (i = (await ce({
            url: "https://api.papago-chrome.com/v2/translate/detect",
            method: "POST",
            headers: {
                authority: "api.papago-chrome.com",
                "content-type": "application/json"
            },
            body: s
        })).langCode,
            u.body = JSON.stringify({
                text: s,
                source: i || eo.get(r) || r,
                target: eo.get(a) || a
            })) : u.body = JSON.stringify({
            text: s,
            source: eo.get(r),
            target: eo.get(a) || a
        });
        let l = await ce(u);
        if (l.translatedText === "")
            throw new V("server response invalid");
        let c = l.translatedText.split("<br>").map(p=>p.trim());
        return {
            from: r,
            to: a,
            text: c
        }
    }
}
    , D2 = Jp;
