var nA = [["auto", "auto"], ["zh-CN", "zh"], ["zh-TW", "cht"], ["en", "en"], ["ja", "ja"], ["ko", "ko"], ["es", "es"], ["de", "de"], ["fr", "fra"], ["pt", "pt"], ["ru", "ru"], ["ar", "ara"], ["it", "it"], ["ms", "ms"], ["id", "id"], ["vi", "vie"], ["th", "th"], ["ur", "ur"], ["yue", "yue"], ["bo", "bo"], ["wyw", "wyw"], ["be", "be"], ["bg", "bul"], ["bn", "bn"], ["ca", "ca"], ["cs", "cs"], ["da", "da"], ["el", "el"], ["et", "et"], ["fa", "fa"], ["fi", "fi"], ["gu", "gu"], ["he", "he"], ["hi", "hi"], ["hr", "hr"], ["hu", "hu"], ["hy", "hye"], ["is", "is"], ["ka", "ka"], ["km", "km"], ["kn", "kn"], ["lt", "lt"], ["lv", "lv"], ["mk", "mk"], ["ml", "ml"], ["mn", "mn"], ["mr", "mr"], ["mt", "mt"], ["my", "my"], ["ne", "ne"], ["nl", "nl"], ["no", "no"], ["pa", "pa"], ["pl", "pl"], ["ps", "ps"], ["ro", "ro"], ["si", "si"], ["sk", "sk"], ["sl", "sl"], ["sq", "sq"], ["sr", "sr"], ["sv", "sv"], ["sw", "sw"], ["ta", "ta"], ["te", "te"], ["tg", "tg"], ["tr", "tr"], ["ug", "ug"], ["uk", "uk"], ["uz", "uz"]]
    , $p = new Map(nA)
    , Vp = class extends De {
    static langMap = $p;
    APIKEY = "";
    isSupportList = !1;
    constructor(e, n, r) {
        if (super(e, n, r),
        !e || !e.APIKEY)
            throw new V("APIKEY are required");
        this.APIKEY = e.APIKEY?.trim()
    }
    async translate(e) {
        let {text: n, from: r, to: a} = e
            , i = n
            , o = {
            url: "https://api.niutrans.com/NiuTransServer/translation",
            retry: this.retry,
            headers: {
                "content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                src_text: i,
                from: $p.get(r) || r,
                to: $p.get(a) || a,
                apikey: this.APIKEY
            }),
            timeout: this.requestTimeout
        }
            , s = await ce(o);
        if (s.tgt_text) {
            let u = s.tgt_text;
            return u.endsWith(`
`) && (u = u.slice(0, -1)),
                {
                    text: u,
                    from: r,
                    to: a
                }
        } else
            throw new V(s.error_msg || JSON.stringify(s).slice(0, 500))
    }
    getDefaultRateLimit() {
        return {
            limit: 4,
            interval: 1350
        }
    }
}
    , C2 = Vp;
