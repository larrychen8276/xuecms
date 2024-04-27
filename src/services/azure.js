
var rA = [["auto", ""], ["ar", "ar"], ["ga", "ga"], ["et", "et"], ["bg", "bg"], ["is", "is"], ["pl", "pl"], ["bs", "bs-Latn"], ["fa", "fa"], ["da", "da"], ["de", "de"], ["ru", "ru"], ["fr", "fr"], ["zh-TW", "zh-Hant"], ["fil", "fil"], ["fj", "fj"], ["fi", "fi"], ["gu", "gu"], ["kk", "kk"], ["ht", "ht"], ["ko", "ko"], ["nl", "nl"], ["ca", "ca"], ["zh-CN", "zh-Hans"], ["cs", "cs"], ["kn", "kn"], ["otq", "otq"], ["tlh", "tlh"], ["hr", "hr"], ["lv", "lv"], ["lt", "lt"], ["ro", "ro"], ["mg", "mg"], ["mt", "mt"], ["mr", "mr"], ["ml", "ml"], ["ms", "ms"], ["mi", "mi"], ["bn", "bn-BD"], ["hmn", "mww"], ["af", "af"], ["pa", "pa"], ["pt", "pt"], ["ps", "ps"], ["ja", "ja"], ["sv", "sv"], ["sm", "sm"], ["sr-Latn", "sr-Latn"], ["sr-Cyrl", "sr-Cyrl"], ["no", "nb"], ["sk", "sk"], ["sl", "sl"], ["sw", "sw"], ["ty", "ty"], ["te", "te"], ["ta", "ta"], ["th", "th"], ["to", "to"], ["tr", "tr"], ["cy", "cy"], ["ur", "ur"], ["uk", "uk"], ["es", "es"], ["he", "he"], ["el", "el"], ["hu", "hu"], ["it", "it"], ["hi", "hi"], ["id", "id"], ["en", "en"], ["yua", "yua"], ["bo", "bo"]]
    , Yp = new Map(rA)
    , Qp = class extends De {
    // debugger;

    static langMap = Yp;
    APIKEY = "";
    region = "eastasia";
    isSupportList = !0;
    apiUrl = "https://api.cognitive.microsofttranslator.com/translate?x=2";
    constructor(e, n, r) {
        if (super(e, n, r),
        !e || !e.APIKEY)
            throw new V("APIKEY are required");
        this.APIKEY = e.APIKEY?.trim(),
        e.region && (this.region = e.region),
        e.apiUrl && (this.apiUrl = qt(this.apiUrl, e.apiUrl))
    }
    async translateList(e) {
        let {text: n, from: r, to: a} = e;
        if (n.length === 0)
            return {
                from: r,
                to: a,
                text: []
            };
        let i = {
            "api-version": "3.0",
            to: Yp.get(a) || a
        };
        r !== "auto" && (i.from = Yp.get(r) || r);
        let o = new URLSearchParams(i)
            , s = JSON.stringify(n.map(m=>({
            text: m
        })))
            , u = new URL(this.apiUrl)
            , l = new URLSearchParams(u.search);
        l.toString() !== "" && l.forEach((m,g)=>{
                o.append(g, m)
            }
        ),
            u.search = o.toString();
        let c = {
            url: u.toString(),
            retry: this.retry,
            method: "POST",
            headers: {
                "Ocp-Apim-Subscription-Key": this.APIKEY,
                "Ocp-Apim-Subscription-Region": this.region,
                "content-type": "application/json"
            },
            body: s,
            timeout: this.requestTimeout
        }
            , p = await ce(c);
        if (p.length === 0)
            throw new V("server response invalid");
        return {
            from: r,
            to: a,
            text: p.map(m=>m.translations.map(f=>f.text).join(" "))
        }
    }
}
    , w2 = Qp;
