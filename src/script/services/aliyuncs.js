// var B2 = u6(F2());
var M2 = [["af", "af"], ["am", "am"], ["ar", "ar"], ["auto", "auto"], ["az", "az"], ["be", "be"], ["bg", "bg"], ["bn", "bn"], ["bs", "bs"], ["ca", "ca"], ["ceb", "ceb"], ["co", "co"], ["cs", "cs"], ["cy", "cy"], ["da", "da"], ["de", "de"], ["el", "el"], ["en", "en"], ["eo", "eo"], ["es", "es"], ["et", "et"], ["eu", "eu"], ["fa", "fa"], ["fi", "fi"], ["fil", "fil"], ["fj", "fj"], ["fr", "fr"], ["fy", "fy"], ["ga", "ga"], ["gd", "gd"], ["gl", "gl"], ["gu", "gu"], ["ha", "ha"], ["haw", "haw"], ["he", "he"], ["hi", "hi"], ["hmn", "hmn"], ["hr", "hr"], ["ht", "ht"], ["hu", "hu"], ["hy", "hy"], ["id", "id"], ["ig", "ig"], ["is", "is"], ["it", "it"], ["ja", "ja"], ["jw", "jw"], ["ka", "ka"], ["kk", "kk"], ["km", "km"], ["kn", "kn"], ["ko", "ko"], ["ku", "ku"], ["ky", "ky"], ["la", "la"], ["lb", "lb"], ["lo", "lo"], ["lt", "lt"], ["lv", "lv"], ["mg", "mg"], ["mi", "mi"], ["mk", "mk"], ["ml", "ml"], ["mn", "mn"], ["mr", "mr"], ["ms", "ms"], ["mt", "mt"], ["mww", "mww"], ["my", "my"], ["ne", "ne"], ["nl", "nl"], ["no", "no"], ["ny", "ny"], ["otq", "otq"], ["pa", "pa"], ["pl", "pl"], ["ps", "ps"], ["pt", "pt"], ["ro", "ro"], ["ru", "ru"], ["sd", "sd"], ["si", "si"], ["sk", "sk"], ["sl", "sl"], ["sm", "sm"], ["sn", "sn"], ["so", "so"], ["sq", "sq"], ["tn", "tn"], ["st", "st"], ["su", "su"], ["sv", "sv"], ["sw", "sw"], ["ta", "ta"], ["te", "te"], ["tg", "tg"], ["th", "th"], ["tlh", "tlh"], ["to", "to"], ["tr", "tr"], ["ty", "ty"], ["ug", "ug"], ["uk", "uk"], ["ur", "ur"], ["uz", "uz"], ["vi", "vi"], ["xh", "xh"], ["yi", "yi"], ["yo", "yo"], ["yua", "yua"], ["yue", "yue"], ["bo", "bo"], ["sa", "sa"], ["zh-CN", "zh"], ["zh-TW", "zh-tw"], ["zu", "zu"]]
    , Ps = class t extends De {
        static langMap = new Map(M2);
        static langMapReverse = new Map(M2.map(([e,n])=>[n, e]));
        SHA1;
        AccessKeyID = "";
        AccessKeySecret = "";
        isSupportList = !0;
        scene = "general";
        maxTextGroupLength = 50;
        maxTextLength = 1e3;
        constructor(e, n, r) {
            if (super(e, n, r),
            !e || !e.AccessKeyID || !e.AccessKeySecret)
                throw new V("AccessKeyID and AccessKeySecret are required");
            this.AccessKeyID = e.AccessKeyID?.trim(),
                this.AccessKeySecret = e.AccessKeySecret?.trim(),
                // this.SHA1 = new B2.default.SHA1,
                this.SHA1 = new Hashes.SHA1,
            e.scene && (this.scene = e.scene)
        }
        async translate(e) {
            let {text: n, from: r, to: a} = e
                , i = {
                FormatType: "text",
                Scene: this.scene,
                SourceLanguage: t.langMap.get(r) || "auto",
                SourceText: n,
                TargetLanguage: t.langMap.get(a) || a
            }
                , o = this.scene == "general" ? "TranslateGeneral" : "Translate"
                , s = await this.signedRequest({
                secretId: this.AccessKeyID,
                secretKey: this.AccessKeySecret,
                action: o,
                payload: i,
                service: "mt",
                version: "2018-10-12"
            });
            return {
                text: s.Data.Translated,
                from: s.Data.DetectedLanguage && t.langMapReverse.get(s.Data.DetectedLanguage) || r || "auto",
                to: t.langMapReverse.get(a) || a
            }
        }
        async translateList(e) {
            let {text: n, from: r, to: a} = e
                , i = this.scene == "general" ? "translate_standard" : "translate_ecommerce"
                , o = {
                FormatType: "text",
                Scene: this.scene,
                SourceLanguage: t.langMap.get(r) || "auto",
                SourceText: JSON.stringify(n.reduce((l,c,p)=>(l[p] = c,
                    l), {})),
                TargetLanguage: t.langMap.get(a) || a,
                ApiType: i
            }
                , s = await this.signedRequest({
                secretId: this.AccessKeyID,
                secretKey: this.AccessKeySecret,
                action: "GetBatchTranslate",
                payload: o,
                service: "mt",
                version: "2018-10-12"
            })
                , u = s.TranslatedList.length && s.TranslatedList[0].detectedLanguage;
            return {
                text: s.TranslatedList.sort((l,c)=>parseInt(l.index) - parseInt(c.index)).map(l=>l.translated),
                from: u && t.langMapReverse.get(u) || r || "auto",
                to: t.langMapReverse.get(a) || a
            }
        }
        encode(e) {
            return encodeURIComponent(e).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A")
        }
        async signedRequest({secretId: e, secretKey: n, action: r, payload: a, service: i, version: o}) {
            let s = new Date().toISOString()
                , u = Math.random().toString(36).slice(2)
                , l = {
                Action: r,
                Version: o,
                Format: "JSON",
                AccessKeyId: e,
                SignatureNonce: u,
                Timestamp: s,
                SignatureMethod: "HMAC-SHA1",
                SignatureVersion: "1.0"
            }
                , p = (T=>{
                    let h = Object.keys(T).sort().map(E=>`${this.encode(E)}=${this.encode(T[E])}`).join("&");
                    return `POST&%2F&${this.encode(h)}`
                }
            )(Object.assign({}, l, a))
                , m = this.SHA1.b64_hmac(`${n}&`, p)
                , g = new URLSearchParams(Object.assign({}, l, {
                Signature: m
            })).toString()
                , f = await ce({
                retry: this.retry,
                url: `https://${i}.aliyuncs.com?${g}`,
                method: "POST",
                headers: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams(a).toString(),
                timeout: this.requestTimeout
            });
            if (f instanceof Error)
                throw f;
            if (f.Code !== "200")
                throw new V(f.Message);
            return f
        }
    }
;
