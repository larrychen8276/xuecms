
var T2 = [["auto", "auto"], ["en", "EN"], ["ja", "JA"], ["pl", "PL"], ["zh-CN", "ZH"], ["zh-TW", "ZH"], ["ja", "JA"], ["ko", "KO"], ["es", "ES"], ["de", "DE"], ["fr", "FR"], ["pt", "PT"], ["ru", "RU"], ["it", "IT"], ["id", "ID"], ["nl", "NL"], ["pl", "PL"], ["bg", "BG"], ["cs", "CS"], ["da", "DA"], ["el", "EL"], ["et", "ET"], ["fi", "FI"], ["hu", "HU"], ["lt", "LT"], ["lv", "LV"], ["ro", "RO"], ["sk", "SK"], ["sl", "SL"], ["sv", "SV"], ["tr", "TR"], ["uk", "UK"]]
    , Zi = class t extends De {
        static langMap = new Map(T2);
        static langMapReverse = new Map(T2.map(([e,n])=>[n, e]));
        maxTextGroupLength = 3;
        maxTextLength = 800;
        isSupportList = !0;
        API_URL = Up;
        constructor(e, n, r) {
            super(e, n, r),
            e && e.apiUrl && (this.API_URL = qt(Up, e.apiUrl))
        }
        getDefaultRateLimit() {
            return {
                limit: 1,
                interval: 1050
            }
        }
        async translateList(e) {
            let {text: n, to: r, from: a} = e
                , i = await b2(this.API_URL, n, t.langMap.get(r) || r, t.langMap.get(a) || "auto");
            return {
                text: i.text,
                from: t.langMapReverse.get(i.from),
                to: t.langMapReverse.get(i.to)
            }
        }
    }
;
