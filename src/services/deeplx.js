
var dA = [["auto", "auto"], ["en", "EN"], ["ja", "JA"], ["pl", "PL"], ["zh-CN", "ZH"], ["zh-TW", "ZH"], ["ja", "JA"], ["ko", "KO"], ["es", "ES"], ["de", "DE"], ["fr", "FR"], ["pt", "PT"], ["ru", "RU"], ["it", "IT"], ["id", "ID"], ["nl", "NL"], ["pl", "PL"], ["bg", "BG"], ["cs", "CS"], ["da", "DA"], ["el", "EL"], ["et", "ET"], ["fi", "FI"], ["hu", "HU"], ["lt", "LT"], ["lv", "LV"], ["ro", "RO"], ["sk", "SK"], ["sl", "SL"], ["sv", "SV"], ["tr", "TR"], ["uk", "UK"]]
    , ig = new Map(dA)
    , _s = class extends De {
        static langMap = ig;
        url = "";
        isSupportList = !1;
        maxTextGroupLength = 1;
        apiKeys = [];
        constructor(e, n, r) {
            if (super(e, n, r),
            !e || !e.url)
                throw new V("deeplx custom url are required, please check your settings.");
            this.url = e.url,
                this.apiKeys = this.url.split(",").map(a=>a.trim())
        }
        getRandomKey() {
            let e = Math.floor(Math.random() * this.apiKeys.length);
            return this.apiKeys[e]
        }
        async translate(e) {
            let {text: n, from: r, to: a} = e
                , i = this.getRandomKey()
                , s = await ce({
                retry: this.retry,
                url: i,
                headers: {
                    "content-type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({
                    source_lang: ig.get(r) || r,
                    target_lang: ig.get(a) || a,
                    text: n
                }),
                timeout: this.requestTimeout
            });
            if (s.code === 200)
                return {
                    text: s.data,
                    from: r,
                    to: a
                };
            throw new V(s.message || s.message || "API Error")
        }
    }
;
