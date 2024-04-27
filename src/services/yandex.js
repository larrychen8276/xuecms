

var AA = [["af", "af"], ["am", "am"], ["ar", "ar"], ["az", "az"], ["be", "be"], ["bg", "bg"], ["bn", "bn"], ["bs", "bs"], ["ca", "ca"], ["ceb", "ceb"], ["cs", "cs"], ["cy", "cy"], ["da", "da"], ["de", "de"], ["el", "el"], ["en", "en"], ["eo", "eo"], ["es", "es"], ["et", "et"], ["eu", "eu"], ["fa", "fa"], ["fi", "fi"], ["fr", "fr"], ["ga", "ga"], ["gd", "gd"], ["gl", "gl"], ["gu", "gu"], ["he", "he"], ["hi", "hi"], ["hr", "hr"], ["ht", "ht"], ["hu", "hu"], ["hy", "hy"], ["id", "id"], ["is", "is"], ["it", "it"], ["ja", "ja"], ["ka", "ka"], ["kk", "kk"], ["km", "km"], ["kn", "kn"], ["ko", "ko"], ["ky", "ky"], ["la", "la"], ["lb", "lb"], ["lo", "lo"], ["lt", "lt"], ["lv", "lv"], ["mg", "mg"], ["mi", "mi"], ["mk", "mk"], ["ml", "ml"], ["mn", "mn"], ["mr", "mr"], ["ms", "ms"], ["mt", "mt"], ["my", "my"], ["ne", "ne"], ["nl", "nl"], ["no", "no"], ["pa", "pa"], ["pl", "pl"], ["pt", "pt"], ["pt-br", "pt-br"], ["ro", "ro"], ["ru", "ru"], ["si", "si"], ["sk", "sk"], ["sl", "sl"], ["sq", "sq"], ["sr", "sr"], ["su", "su"], ["sv", "sv"], ["sw", "sw"], ["ta", "ta"], ["te", "te"], ["tg", "tg"], ["th", "th"], ["tr", "tr"], ["uk", "uk"], ["ur", "ur"], ["uz", "uz"], ["vi", "vi"], ["xh", "xh"], ["yi", "yi"], ["zh-CN", "zh"], ["zh-TW", "zh"], ["zu", "zu"]]
    , vg = new Map(AA)
    , Bs = class extends De {
        isSupportList = !0;
        static langMap = vg;
        static async clearState() {
            await ac(I0)
        }
        async init() {
            await this.getAccessToken()
        }
        async getAccessToken() {
            return await ic(I0, async()=>{
                    let n = (await rc({
                        url: "https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=es&widgetTheme=light&autoMode=false",
                        method: "GET",
                        responseType: "text"
                    })).match(/sid\:\s\'[0-9a-f\.]+/)
                        , r = ""
                        , a = Date.now() + 1 * 60 * 1e3;
                    return n && n[0] && n[0].length > 7 && (r = n[0].substring(6),
                        a = Date.now() + 30 * 60 * 1e3),
                        {
                            accessToken: r,
                            accessTokenExpiresAt: new Date(a).toISOString()
                        }
                }
            )
        }
        async translateList(e) {
            let {text: n, from: r, to: a} = e;
            if (!n)
                return {
                    ...e
                };
            let i = await this.getAccessToken()
                , o = new URLSearchParams;
            o.append("srv", "tr-url-widget"),
                o.append("id", `${i.accessToken}-0-0`),
                o.append("format", "html"),
                o.append("lang", `${r === "auto" ? "" : vg.get(r) + "-"}${vg.get(a)}`),
                n.forEach(l=>{
                        o.append("text", l)
                    }
                );
            let s = await ce({
                url: `https://translate.yandex.net/api/v1/tr.json/translate?${o.toString()}`
            });
            if (s?.code !== 200)
                return {
                    ...e
                };
            let u = s.text?.map(l=>l);
            return {
                from: r,
                to: a,
                text: u || n
            }
        }
        getDefaultRateLimit() {
            return {
                limit: 5,
                interval: 1050
            }
        }
    }
;

