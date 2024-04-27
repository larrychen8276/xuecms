
var I2 = [["af", "af"], ["am", "am"], ["ar", "ar"], ["az", "az"], ["be", "be"], ["bg", "bg"], ["bn", "bn"], ["bs", "bs"], ["ca", "ca"], ["co", "co"], ["cs", "cs"], ["cy", "cy"], ["da", "da"], ["de", "de"], ["el", "el"], ["en", "en"], ["eo", "eo"], ["es", "es"], ["et", "et"], ["eu", "eu"], ["fa", "fa"], ["fi", "fi"], ["fj", "fj"], ["fr", "fr"], ["fy", "fy"], ["ga", "ga"], ["gd", "gd"], ["gl", "gl"], ["gu", "gu"], ["ha", "ha"], ["he", "he"], ["hi", "hi"], ["hr", "hr"], ["ht", "ht"], ["hu", "hu"], ["hy", "hy"], ["id", "id"], ["ig", "ig"], ["is", "is"], ["it", "it"], ["ja", "ja"], ["ka", "ka"], ["kk", "kk"], ["km", "km"], ["kn", "kn"], ["ko", "ko"], ["ku", "ku"], ["ky", "ky"], ["la", "la"], ["lb", "lb"], ["lo", "lo"], ["lt", "lt"], ["lv", "lv"], ["mg", "mg"], ["mi", "mi"], ["mk", "mk"], ["ml", "ml"], ["mn", "mn"], ["mr", "mr"], ["ms", "ms"], ["mt", "mt"], ["my", "my"], ["ne", "ne"], ["nl", "nl"], ["no", "no"], ["ny", "ny"], ["pa", "pa"], ["pl", "pl"], ["ps", "ps"], ["pt", "pt"], ["ro", "ro"], ["ru", "ru"], ["sd", "sd"], ["si", "si"], ["sk", "sk"], ["sl", "sl"], ["sm", "sm"], ["sn", "sn"], ["so", "so"], ["sq", "sq"], ["sr", "sr"], ["st", "st"], ["su", "su"], ["sv", "sv"], ["sw", "sw"], ["ta", "ta"], ["te", "te"], ["tg", "tg"], ["th", "th"], ["tn", "tn"], ["to", "to"], ["tr", "tr"], ["ty", "ty"], ["ug", "ug"], ["uk", "uk"], ["ur", "ur"], ["uz", "uz"], ["vi", "vi"], ["xh", "xh"], ["yi", "yi"], ["yo", "yo"], ["zh-CN", "zh"], ["zh-TW", "zh-Hans"], ["zu", "zu"]]
    , ng = new Map(I2)
    , lA = new Map(I2.map(([t,e])=>[e, t]))
    , rg = class extends De {
    static langMap = ng;
    accessKeyId = "";
    secretAccessKey = "";
    maxTextGroupLength = 8;
    constructor(e, n, r) {
        if (super(e, n, r),
        !e || !e.accessKeyId || !e.secretAccessKey)
            throw new V("accessKeyId and secretAccessKey are required");
        this.accessKeyId = e.accessKeyId?.trim(),
            this.secretAccessKey = e.secretAccessKey?.trim()
    }
    async remoteDetectLanguage(e) {
        let r = {
            region: "cn-north-1",
            method: "POST",
            params: {
                Action: "LangDetect",
                Version: "2020-06-01"
            },
            pathname: "/",
            headers: {
                "Content-Type": "application/json",
                host: "open.volcengineapi.com"
            },
            body: JSON.stringify({
                TextList: [e]
            })
        }
            , a = new ro(r,"translate");
        await a.addAuthorization({
            accessKeyId: this.accessKeyId,
            secretKey: this.secretAccessKey
        });
        let i = new URLSearchParams(r.params)
            , o = await ce({
            retry: 2,
            url: "https://open.volcengineapi.com" + r.pathname + "?" + i.toString(),
            headers: a.request.headers,
            method: r.method,
            body: r.body
        });
        if (o.DetectedLanguageList && o.DetectedLanguageList.length > 0)
            return o.DetectedLanguageList[0].Language;
        if (o.ResponseMetadata && o.ResponseMetadata.Error) {
            let s = o.ResponseMetadata.Error;
            throw new V(s.Code,s.Message)
        } else if (o.ResponseMetaData && o.ResponseMetaData.Error) {
            let s = o.ResponseMetaData.Error;
            throw new V(s.Code,s.Message)
        } else
            throw new V("response: " + JSON.stringify(o))
    }
    async translateList(e) {
        let {text: n, from: r, to: a} = e
            , i = ng.get(r)
            , o = {
            TargetLanguage: ng.get(a) || a,
            TextList: n
        };
        i ? o.SourceLanguage = i : o.SourceLanguage = await this.remoteDetectLanguage(n.join(`
`).slice(0, 1e3));
        let s = {
            region: "cn-north-1",
            method: "POST",
            params: {
                Action: "TranslateText",
                Version: "2020-06-01"
            },
            pathname: "/",
            headers: {
                "Content-Type": "application/json",
                host: "open.volcengineapi.com"
            },
            body: JSON.stringify(o)
        }
            , u = new ro(s,"translate");
        await u.addAuthorization({
            accessKeyId: this.accessKeyId,
            secretKey: this.secretAccessKey
        });
        let l = new URLSearchParams(s.params)
            , c = await ce({
            retry: 2,
            url: "https://open.volcengineapi.com" + s.pathname + "?" + l.toString(),
            headers: u.request.headers,
            method: s.method,
            body: s.body
        });
        if (c.TranslationList) {
            let p = c.TranslationList.map(g=>g.Translation)
                , m = r;
            return c.TranslationList.length > 0 && c.TranslationList[0].DetectedSourceLanguage && (m = lA.get(c.TranslationList[0].DetectedSourceLanguage) || r),
                {
                    text: p,
                    from: m,
                    to: a
                }
        } else if (c.ResponseMetadata && c.ResponseMetadata.Error) {
            let p = c.ResponseMetadata.Error;
            throw new V(p.Code,p.Message)
        } else if (c.ResponseMetaData && c.ResponseMetaData.Error) {
            let p = c.ResponseMetaData.Error;
            throw new V(p.Code,p.Message)
        } else
            throw new V("response: " + JSON.stringify(c))
    }
}
    , R2 = rg;

