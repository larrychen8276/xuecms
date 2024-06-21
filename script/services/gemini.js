var rT = "immersive-translate-gemini-fake-user-key"
    , CA = [["auto", "auto"], ["zh-CN", "Simplified Chinese"], ["zh-TW", "Traditional Chinese"], ["en", "English"], ["ar", "Arabic"], ["bn", "Bengali"], ["bg", "Bulgarian"], ["hr", "Croatian"], ["cs", "Czech"], ["da", "Danish"], ["nl", "Dutch"], ["et", "Estonian"], ["fi", "Finnish"], ["fr", "French"], ["de", "German"], ["el", "Greek"], ["he", "iw"], ["hi", "Hindi"], ["hu", "Hungarian"], ["id", "Indonesian"], ["it", "Italian"], ["ja", "Japanese"], ["ko", "Korean"], ["lv", "Latvian"], ["lt", "Lithuanian"], ["no", "Norway"], ["pl", "Polish"], ["pt", "Portuguese"], ["ro", "Romanian"], ["ru", "Russian"], ["sr", "Serbian"], ["sk", "Slovak"], ["sl", "Slovene"], ["es", "Spanish"], ["sw", "Swahili"], ["sv", "Swedish"], ["th", "Thai"], ["tr", "Turkish"], ["uk", "Ukrainian"], ["vi", "Vietnamese"]]
    , aT = new Map(CA)
    , Tg = class extends no {
    static langMap = aT;
    provider = "custom";
    randomPrefix = "My user id is {{id}}. ";
    fakeId = "";
    constructor(e, n, r) {
        super(e, n, r),
        e || (e = {}),
        e.provider && (this.provider = e.provider),
        e.randomPrefix && (this.randomPrefix = e.randomPrefix),
            this.apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={key}",
        e?.apiUrl && (this.apiUrl = e.apiUrl),
            this.maxTextGroupLength = this.maxTextGroupLength || 10,
            this.model = this.model || "gemini-1.0-pro-latest",
            this.bodyConfigs = e?.bodyConfigs || {}
    }
    getLangMap() {
        return aT
    }
    getDefaultRateLimit() {
        return {
            limit: 1,
            interval: 1050
        }
    }
    async handleOptions(e, n) {
        this.fakeId = "",
        this.randomPrefix && (this.fakeId = await Z0(rT, ""),
        this.fakeId || (this.fakeId = wA(10),
            await tp(rT, this.fakeId)));
        let r = this.getRandomKey()
            , a = {
            url: this.apiUrl.replace("{model}", this.model),
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            timeout: this.requestTimeout,
            retry: this.retry
        };
        r && (a.url = a.url.replace("{key}", r));
        let i = this.systemPrompt + e;
        this.randomPrefix && (i = this.randomPrefix.replace("{{id}}", this.fakeId) + i);
        let o = {
            contents: [{
                role: "user",
                parts: [{
                    text: i
                }]
            }],
            ...this.bodyConfigs
        };
        return a.body = JSON.stringify(o, null, 2),
            a
    }
    parseResponse(e) {
        return e?.candidates?.[0]?.content?.parts?.[0]?.text
    }
    filterContent(e, n, r, a) {
        let i = super.filterContent(e, n, r);
        return i.includes(this.fakeId) && a.length <= 1 ? e : i
    }
};

function wA(t) {
    let e = ""
        , n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        , r = n.length
        , a = 0;
    for (; a < t; )
        e += n.charAt(Math.floor(Math.random() * r)),
            a += 1;
    return e
}
var iT = Tg;
