
var og = "https://{s}bing.com", j2 = og + "/translator", pA = og + "/ttranslatev3", gA = og + "/tspellcheckv3", tc = "bingGlobalConfig", H2 = [["auto", "auto-detect"], ["ar", "ar"], ["ga", "ga"], ["et", "et"], ["bg", "bg"], ["is", "is"], ["pl", "pl"], ["bs", "bs-Latn"], ["fa", "fa"], ["da", "da"], ["de", "de"], ["ru", "ru"], ["fr", "fr"], ["zh-TW", "zh-Hant"], ["fil", "fil"], ["fj", "fj"], ["fi", "fi"], ["gu", "gu"], ["kk", "kk"], ["ht", "ht"], ["ko", "ko"], ["nl", "nl"], ["ca", "ca"], ["zh-CN", "zh-Hans"], ["cs", "cs"], ["kn", "kn"], ["otq", "otq"], ["tlh", "tlh"], ["hr", "hr"], ["lv", "lv"], ["lt", "lt"], ["ro", "ro"], ["mg", "mg"], ["mt", "mt"], ["mr", "mr"], ["ml", "ml"], ["ms", "ms"], ["mi", "mi"], ["bn", "bn-BD"], ["hmn", "mww"], ["af", "af"], ["pa", "pa"], ["pt", "pt"], ["ps", "ps"], ["ja", "ja"], ["sv", "sv"], ["sm", "sm"], ["sr-Latn", "sr-Latn"], ["sr-Cyrl", "sr-Cyrl"], ["no", "nb"], ["sk", "sk"], ["sl", "sl"], ["sw", "sw"], ["ty", "ty"], ["te", "te"], ["ta", "ta"], ["th", "th"], ["to", "to"], ["tr", "tr"], ["cy", "cy"], ["ur", "ur"], ["uk", "uk"], ["es", "es"], ["he", "iw"], ["el", "el"], ["hu", "hu"], ["it", "it"], ["hi", "hi"], ["id", "id"], ["en", "en"], ["yua", "yua"], ["yue", "yua"], ["vi", "vi"], ["ku", "ku"], ["km", "kmr"]], z2 = new Map(H2), N2 = new Map(H2.map(([t,e])=>[e, t])), U2 = 1e3, nr, ao;
function sg(t, e) {
    return t.replace("{s}", e ? e + "." : "")
}
async function mA() {
    if (!nr) {
        let n = await oe.storage.local.get(tc);
        return n && (nr = n[tc]),
            !0
    }
    let {tokenTs: t, tokenExpiryInterval: e} = nr;
    return Date.now() - t > e
}


async function q2() {
    let t, e, n, r, a, i, o, s, u, l;
    try {
        let c = sg(j2, t)
            , p = await ce({
            retry: 2,
            url: c,
            responseType: "raw"
        })
            , {body: m, headers: g, url: f} = p;
        t = f.match(/^https?:\/\/(\w+)\.bing\.com/)[1],
            l = g["set-cookie"],
            e = m.match(/IG:"([^"]+)"/)[1],
            n = m.match(/data-iid="([^"]+)"/)[1],
            [a,r,i,o,s,u] = JSON.parse(m.match(/params_AbusePreventionHelper\s?=\s?([^\]]+\])/)[1])
    } catch (c) {
        throw c
    }
    return nr = {
        subdomain: t,
        IG: e,
        IID: n,
        key: a,
        token: r,
        tokenTs: a,
        tokenExpiryInterval: i,
        isVertical: o,
        frontDoorBotClassification: s,
        isSignedInOrCorporateUser: u,
        cookie: l,
        count: 0
    },
        await oe.storage.local.set({
            [tc]: nr
        }),
        nr
}

function fA(t) {
    let {IG: e, IID: n, subdomain: r, isVertical: a} = nr;
    return sg(t ? gA : pA, r) + "?isVertical=1" + (e && e.length ? "&IG=" + e : "") + (n && n.length ? "&IID=" + n + "." + nr.count++ : "")
}


function hA(t, e, n, r) {
    let {token: a, key: i} = nr
        , o = {
        fromLang: n,
        text: e,
        token: a,
        key: i
    };
    return !t && r && (o.to = r),
        o
}
async function W2(t, e, n) {
    if (!t || !(t = t.trim()))
        return;
    if (t.length > U2)
        throw new Error(`The supported maximum length of text is ${U2}. Please shorten the text.`);
    ao || (ao = q2()),
        await ao,
    await mA() && (ao = q2(),
        await ao),
        e = e || "auto",
        n = n || "zh-CN",
        e = z2.get(e) || e,
        n = z2.get(n) || n;
    let a = fA(!1)
        , i = hA(!1, t, e, n === "auto-detect" ? "zh-Hans" : n)
        , o = {
        referer: sg(j2, nr.subdomain),
        "content-type": "application/x-www-form-urlencoded"
    }
        , s = new URLSearchParams(i)
        , u = a
        , l = s.toString()
        , c = await ce({
        retry: 2,
        url: u,
        headers: o,
        method: "POST",
        body: l
    });
    if (c.ShowCaptcha || c.StatusCode === 401 || c.statusCode) {
        if (nr = null,
            ao = null,
            await oe.storage.local.remove(tc),
            c.ShowCaptcha)
            throw new Error(`
      Sorry that bing translator seems to be asking for the captcha,
      Please take care not to request too frequently.
      The response code is ${c.StatusCode}.
    `);
        if (c.StatusCode === 401)
            throw new Error(`
      Max count of translation exceeded. Please try it again later.
      The response code is 401.
    `);
        if (c.statusCode)
            throw new Error(`Something went wrong! The response is ${JSON.stringify(c)}.`)
    }
    let p = c[0].translations[0]
        , m = c[0].detectedLanguage;
    return {
        text: p.text,
        from: N2.get(m.language),
        to: N2.get(p.to)
    }
}

