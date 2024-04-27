
var f2 = [["auto", "auto"], ["zh-CN", "zh-CN"], ["zh-TW", "zh-TW"], ["en", "en"], ["af", "af"], ["am", "am"], ["ar", "ar"], ["az", "az"], ["be", "be"], ["bg", "bg"], ["bn", "bn"], ["bs", "bs"], ["ca", "ca"], ["ceb", "ceb"], ["co", "co"], ["cs", "cs"], ["cy", "cy"], ["da", "da"], ["de", "de"], ["el", "el"], ["eo", "eo"], ["es", "es"], ["et", "et"], ["eu", "eu"], ["fa", "fa"], ["fi", "fi"], ["fr", "fr"], ["fy", "fy"], ["ga", "ga"], ["gd", "gd"], ["gl", "gl"], ["gu", "gu"], ["ha", "ha"], ["haw", "haw"], ["he", "he"], ["hi", "hi"], ["hmn", "hmn"], ["hr", "hr"], ["ht", "ht"], ["hu", "hu"], ["hy", "hy"], ["id", "id"], ["ig", "ig"], ["is", "is"], ["it", "it"], ["ja", "ja"], ["jw", "jw"], ["ka", "ka"], ["kk", "kk"], ["km", "km"], ["kn", "kn"], ["ko", "ko"], ["ku", "ku"], ["ky", "ky"], ["la", "la"], ["lb", "lb"], ["lo", "lo"], ["lt", "lt"], ["lv", "lv"], ["mg", "mg"], ["mi", "mi"], ["mk", "mk"], ["ml", "ml"], ["mn", "mn"], ["mr", "mr"], ["ms", "ms"], ["mt", "mt"], ["my", "my"], ["ne", "ne"], ["nl", "nl"], ["no", "no"], ["ny", "ny"], ["pa", "pa"], ["pl", "pl"], ["ps", "ps"], ["pt", "pt"], ["ro", "ro"], ["ru", "ru"], ["sd", "sd"], ["sa", "sa"], ["si", "si"], ["sk", "sk"], ["sl", "sl"], ["sm", "sm"], ["sn", "sn"], ["so", "so"], ["sq", "sq"], ["sr", "sr"], ["st", "st"], ["su", "su"], ["sv", "sv"], ["sw", "sw"], ["ta", "ta"], ["te", "te"], ["tg", "tg"], ["th", "th"], ["fil", "tl"], ["tr", "tr"], ["ug", "ug"], ["uk", "uk"], ["ur", "ur"], ["uz", "uz"], ["vi", "vi"], ["xh", "xh"], ["yi", "yi"], ["yo", "yo"], ["zu", "zu"]]
    , Ya = class t extends De {
        static langMap = new Map(f2);
        static langMapReverse = new Map(f2.map(([e,n])=>[n, e]));
        isSupportList = !1;
        apiUrl = "https://translate.googleapis.com/translate_a/single";
        constructor(e, n, r) {
            super(e, n, r),
            e?.apiUrl && (this.apiUrl = qt(this.apiUrl, e.apiUrl))
        }
        getDefaultRateLimit() {
            return {
                limit: 10,
                interval: 1050
            }
        }
        async translate(e) {
            let {text: n, from: r, to: a} = e;
            if (!n)
                return {
                    ...e
                };
            let i = t.langMap.get(r) || "auto"
                , o = t.langMap.get(a) || a
                , s = await this.fetchWithoutToken(n, i, o);
            if (!s)
                throw new V("google translate NETWORK_ERROR");
            if (!s.data[0] || s.data[0].length <= 0)
                throw new V("google translate API_SERVER_ERROR");
            return {
                text: s.data[0].map(l=>l[0]).filter(Boolean).join(""),
                from: t.langMapReverse.get(s.data[2]) || "auto",
                to: a
            }
        }
        async translateXml(e) {
            let {text: n, from: r, to: a} = e;
            if (!n)
                return {
                    ...e
                };
            let i = t.langMap.get(r) || "auto"
                , o = t.langMap.get(a) || a
                , s = await this.fetchXmlWithoutToken(n, i, o);
            if (!s)
                throw new V("google translate NETWORK_ERROR");
            if (!s.data[0] || s.data[0].length <= 0)
                throw new V("google translate API_SERVER_ERROR");
            return {
                text: s.data[0].map(l=>l[0]).filter(Boolean).join(""),
                from: t.langMapReverse.get(s.data[2]) || "auto",
                to: a
            }
        }
        async fetchXmlWithoutToken(e, n, r) {
            let i = "https://translate.googleapis.com/translate_a/t?" + new URLSearchParams({
                client: "gtx",
                dt: "t",
                sl: n,
                tl: r,
                q: e
            }).toString();
            return {
                data: await ce({
                    retry: this.retry,
                    url: i,
                    timeout: this.requestTimeout
                })
            }
        }
        async fetchWithoutToken(e, n, r) {
            let a = new URLSearchParams({
                client: "gtx",
                dt: "t",
                sl: n,
                tl: r,
                q: e
            })
                , i = this.apiUrl + "?" + a.toString();
            return {
                data: await ce({
                    retry: this.retry,
                    url: i,
                    timeout: this.requestTimeout
                })
            }
        }
    }
;
