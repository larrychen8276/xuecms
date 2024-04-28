
function G2(t) {
    let e = t.split(".");
    if (e.length <= 1)
        throw new Error("invlaid token");
    let n = e[1];
    if (!n)
        throw new Error("invalid base64 url token");
    let r = n.replace(/-/g, "+").replace(/_/g, "/")
        , a = decodeURIComponent(globalThis.atob(r).split("").map(function(s) {
        return "%" + ("00" + s.charCodeAt(0).toString(16)).slice(-2)
    }).join(""))
        , i = JSON.parse(a)
        , o = new Date(i.exp * 1e3);
    return {
        accessToken: t,
        accessTokenExpiresAt: o.toISOString()
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////

async function ac(t) {
    await np(t)
}
async function ic(t, e) {
    let n = await X0(t);
    if (n?.accessToken && n?.accessTokenExpiresAt) {
        let r = Date.now()
            , i = new Date(n.accessTokenExpiresAt).getTime();
        if (i - r > 30 * 1e3)
            return n;
        if (i - r > 3e3)
            return $2(t, e)
    }
    return $2(t, e)
}
async function $2(t, e) {
    let n = await e()
        , r = n.accessTokenExpiresAt
        , i = new Date(r).getTime() - Date.now();
    return await ep(t, n, i - 1e3),
        n
}

var bA = [["auto", ""], ["ar", "ar"], ["ga", "ga"], ["et", "et"], ["bg", "bg"], ["is", "is"], ["pl", "pl"], ["bs", "bs-Latn"], ["fa", "fa"], ["da", "da"], ["de", "de"], ["ru", "ru"], ["fr", "fr"], ["zh-TW", "zh-Hant"], ["fil", "fil"], ["fj", "fj"], ["fi", "fi"], ["gu", "gu"], ["kk", "kk"], ["he", "he"], ["ht", "ht"], ["ko", "ko"], ["nl", "nl"], ["ca", "ca"], ["zh-CN", "zh-Hans"], ["wyw", "lzh"], ["cs", "cs"], ["kn", "kn"], ["otq", "otq"], ["tlh", "tlh"], ["hr", "hr"], ["lv", "lv"], ["lt", "lt"], ["ro", "ro"], ["mg", "mg"], ["mt", "mt"], ["mr", "mr"], ["ml", "ml"], ["ms", "ms"], ["mi", "mi"], ["bn", "bn-BD"], ["hmn", "mww"], ["af", "af"], ["pa", "pa"], ["pt", "pt"], ["ps", "ps"], ["ja", "ja"], ["sv", "sv"], ["sm", "sm"], ["sr-Latn", "sr-Latn"], ["sr-Cyrl", "sr-Cyrl"], ["no", "nb"], ["sk", "sk"], ["sl", "sl"], ["sw", "sw"], ["ty", "ty"], ["te", "te"], ["ta", "ta"], ["th", "th"], ["to", "to"], ["tr", "tr"], ["cy", "cy"], ["ur", "ur"], ["uk", "uk"], ["es", "es"], ["el", "el"], ["hu", "hu"], ["it", "it"], ["hi", "hi"], ["id", "id"], ["en", "en"], ["yua", "yua"], ["bo", "bo"], ["vi", "vi"]]
    , lg = new Map(bA)
    , Fs = class extends De {
        debugger;

        static langMap = lg;
        isSupportList = !0;
        maxTextLength = 1800;
        constructor(e, n, r) {
            super(e, n, r)
        }
        static async clearState() {
            await ac(B0)
        }
        async translate(e) {
            let {text: n, from: r, to: a} = e;
            return n ? await W2(n, r, a) : {
                ...e
            }
        }
        async init() {
            await this.getAccessToken()
        }
        async getAccessToken() {
            return await ic(B0, async()=>{
                    let e = await rc({
                        responseType: "text",
                        url: "https://edge.microsoft.com/translate/auth",
                        headers: {
                            accept: "*/*",
                            "accept-language": "zh-TW,zh;q=0.9,ja;q=0.8,zh-CN;q=0.7,en-US;q=0.6,en;q=0.5",
                            "cache-control": "no-cache",
                            pragma: "no-cache",
                            "sec-ch-ua": '"Microsoft Edge";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
                            "sec-ch-ua-mobile": "?0",
                            "sec-ch-ua-platform": '"Windows"',
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "cross-site",
                            "sec-mesh-client-arch": "x86_64",
                            "sec-mesh-client-edge-channel": "beta",
                            "sec-mesh-client-edge-version": "113.0.1774.23",
                            "sec-mesh-client-os": "Windows",
                            "sec-mesh-client-os-version": "10.0.19044",
                            "sec-mesh-client-webview": "0",
                            Referer: "https://appsumo.com/",
                            "Referrer-Policy": "strict-origin-when-cross-origin"
                        },
                        body: null,
                        method: "GET",
                        timeout: 5e3,
                        retry: this.retry
                    });
                    return G2(e)
                }
            )
        }
        async translateList(e) {
            //debugger;

            let {from: n, to: r, text: a} = e
                , i = lg.get(n) || "auto"
                , o = lg.get(r) || r;
            i === "auto" && (i = "");
            let s = await this.getAccessToken()
                , u = [];
            for (let m of a)
                u.push({
                    Text: m
                });
            let l = JSON.stringify(u)
                , c = `https://api-edge.cognitive.microsofttranslator.com/translate?from=${i}&to=${o}&api-version=3.0&includeSentenceLength=true`
                , p = await ce({
                url: c,
                headers: {
                    accept: "*/*",
                    "accept-language": "zh-TW,zh;q=0.9,ja;q=0.8,zh-CN;q=0.7,en-US;q=0.6,en;q=0.5",
                    authorization: "Bearer " + s.accessToken,
                    "cache-control": "no-cache",
                    "content-type": "application/json",
                    pragma: "no-cache",
                    "sec-ch-ua": '"Microsoft Edge";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": '"Windows"',
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "cross-site",
                    "Referrer-Policy": "strict-origin-when-cross-origin",
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0"
                },
                body: l,
                method: "POST",
                timeout: this.requestTimeout
            });
            if (p && p.length > 0 && p[0].translations && p[0].translations.length > 0)
                return {
                    text: p.map(m=>m.translations[0]?.text || ""),
                    from: n,
                    to: r
                };
            throw new V("Microsoft translate error " + JSON.stringify(p))
        }
    }
;
