

var m2 = [["auto", "auto"], ["zh-CN", "zh"], ["zh-TW", "zh-TW"], ["de", "de"], ["en", "en"], ["es", "es"], ["fr", "fr"], ["id", "id"], ["it", "it"], ["ja", "jp"], ["ko", "kr"], ["ms", "ms"], ["pt", "pt"], ["ru", "ru"], ["th", "th"], ["tr", "tr"], ["vi", "vi"]]
    , GD = {
        "content-type": "application/json",
        Host: "wxapp.translator.qq.com",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.32(0x18002035) NetType/WIFI Language/zh_TW",
        Referer: "https://servicewechat.com/wxb1070eabc6f9107e/117/page-frame.html"
    }
    , ws = class t extends De {
        static langMap = new Map(m2);
        static langMapReverse = new Map(m2.map(([e,n])=>[n, e]));
        isSupportList = !1;
        constructor(e, n, r) {
            super(e, n, r)
        }
        async translate(e) {
            let {text: n, from: r, to: a} = e
                , i = new URLSearchParams({
                source: r,
                target: a,
                sourceText: n,
                platform: "WeChat_APP",
                candidateLangs: "en|zh",
                guid: "oqdgX0SIwhvM0TmqzTHghWBvfk22"
            }).toString()
                , o = await ce({
                url: `https://wxapp.translator.qq.com/api/translate?${i}`,
                retry: this.retry,
                method: "GET",
                headers: GD,
                timeout: this.requestTimeout
            });
            return {
                text: o.targetText,
                from: t.langMapReverse.get(o.source) || r,
                to: t.langMapReverse.get(o.target) || a
            }
        }
    }
;
