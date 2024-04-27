
var JD = {
    Accept: "*/*",
    "Accept-Language": "en-US;q=0.8,en;q=0.7",
    "Content-Type": "application/json",
    Origin: "https://www.deepl.com",
    Referer: "https://www.deepl.com/translator",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site"
};
function ZD(t) {
    return JSON.stringify(t).replace('"method":"', ()=>{
            let e = t;
            return (e.id + 3) % 13 === 0 || (e.id + 5) % 29 === 0 ? '"method" : "' : '"method": "'
        }
    )
}
function XD(t, e) {
    return {
        id: 1,
        jsonrpc: "2.0",
        method: "LMT_handle_texts",
        params: {
            timestamp: 0,
            texts: [{
                text: "",
                requestAlternatives: 3
            }],
            splitting: "newlines",
            lang: {
                source_lang_user_selected: t,
                target_lang: e
            }
        }
    }
}
async function eA(t, e, n, r, a, i, o) {
    let s = Np()
        , u = XD(r, n)
        , l = [];
    e.forEach(m=>{
            l.push({
                text: m,
                requestAlternatives: 3
            })
        }
    ),
        u.id = s,
        u.params.texts = l,
        u.params.timestamp = zp(e);
    let c = await ce({
        retry: 2,
        method: "POST",
        url: t,
        body: ZD(u),
        headers: JD
    })
        , p = {
        from: c.result.lang,
        to: n,
        text: []
    };
    return c.result.texts.forEach(m=>{
            p.text.push(m.text)
        }
    ),
        p
}
async function b2(t, e, n, r=qp, a, i, o) {
    return e ? e && e.length === 1 && e[0] === "" ? {
        text: [""],
        from: r,
        to: n
    } : eA(t, e, jp(n), jp(r) ?? "auto", a, i, o) : {
        text: [],
        from: r,
        to: n
    }
}
