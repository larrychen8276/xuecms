
var O2 = [["auto", "detect"], ["af", "af"], ["am", "am"], ["ar", "ar"], ["az", "az"], ["be", "be"], ["bg", "bg"], ["bn", "bn"], ["bs", "bs"], ["ca", "ca"], ["co", "co"], ["cs", "cs"], ["cy", "cy"], ["da", "da"], ["de", "de"], ["el", "el"], ["en", "en"], ["eo", "eo"], ["es", "es"], ["et", "et"], ["eu", "eu"], ["fa", "fa"], ["fi", "fi"], ["fj", "fj"], ["fr", "fr"], ["fy", "fy"], ["ga", "ga"], ["gd", "gd"], ["gl", "gl"], ["gu", "gu"], ["ha", "ha"], ["he", "he"], ["hi", "hi"], ["hr", "hr"], ["ht", "ht"], ["hu", "hu"], ["hy", "hy"], ["id", "id"], ["ig", "ig"], ["is", "is"], ["it", "it"], ["ja", "ja"], ["ka", "ka"], ["kk", "kk"], ["km", "km"], ["kn", "kn"], ["ko", "ko"], ["ku", "ku"], ["ky", "ky"], ["la", "la"], ["lb", "lb"], ["lo", "lo"], ["lt", "lt"], ["lv", "lv"], ["mg", "mg"], ["mi", "mi"], ["mk", "mk"], ["ml", "ml"], ["mn", "mn"], ["mr", "mr"], ["ms", "ms"], ["mt", "mt"], ["my", "my"], ["ne", "ne"], ["nl", "nl"], ["no", "no"], ["ny", "ny"], ["pa", "pa"], ["pl", "pl"], ["ps", "ps"], ["pt", "pt"], ["ro", "ro"], ["ru", "ru"], ["sd", "sd"], ["si", "si"], ["sk", "sk"], ["sl", "sl"], ["sm", "sm"], ["sn", "sn"], ["so", "so"], ["sq", "sq"], ["sr", "sr"], ["st", "st"], ["su", "su"], ["sv", "sv"], ["sw", "sw"], ["ta", "ta"], ["te", "te"], ["tg", "tg"], ["th", "th"], ["tn", "tn"], ["to", "to"], ["tr", "tr"], ["ty", "ty"], ["ug", "ug"], ["uk", "uk"], ["ur", "ur"], ["uz", "uz"], ["vi", "vi"], ["xh", "xh"], ["yi", "yi"], ["yo", "yo"], ["zh-CN", "zh"], ["zh-TW", "zh-Hans"], ["zu", "zu"]]
    , ag = new Map(O2)
    , cA = new Map(O2.map(([t,e])=>[e, t]))
    , Ls = class extends De {
        static langMap = ag;
        maxTextGroupLength = 50;
        isSupportList = !1;
        async translate(e) {
            let {text: n, from: r, to: a} = e
                , i = ag.get(r) || "detect"
                , o = ag.get(a) || a
                , u = await ce({
                url: "https://translate.volcengine.com/crx/translate/v1/",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    source_language: i,
                    target_language: o,
                    text: n
                }),
                retry: this.retry
            });
            if (u.base_resp && u.base_resp.status_code === 0) {
                let l = u.translation
                    , c = r;
                return u.detected_language && (c = cA.get(u.detected_language) || r),
                    {
                        text: l,
                        from: c,
                        to: a
                    }
            } else {
                let l = u.base_resp;
                throw new V(l.status_code.toString(),l.status_message)
            }
        }
    }
;
