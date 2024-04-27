

async function Wa(t) {
    let e;
    if (t && t.retry && t.retry > 0)
        try {
            e = await vd(p3.bind(null, t), {
                multiplier: 2,
                maxAttempts: t.retry
            })
        } catch (n) {
            throw n && n.name === "RetryError" && n.cause ? n.cause : n
        }
    else
        e = await p3(t);
    return e
}
async function p3(t) {
    t.body;
    let {url: e, responseType: n, ...r} = t;
    n || (n = "json"),
        r = {
            mode: "cors",
            ...r
        };
    let a = !0;
    t.fetchPolyfill && (a = !1);
    let i = t.fetchPolyfill || fetch
        , o = 3e4;
    if (t.timeout && (o = t.timeout),
        a) {
        let u = new AbortController
            , l = u.signal;
        setTimeout(()=>{
                u.abort()
            }
            , o),
            r.signal = l
    }
    let s;
    try {
        s = await i(e, r)
    } catch (u) {
        B.debug("fetch error", e, u);
        let l = u.message || "Unknown Error";
        throw new V("fetchError",l).initNetWork(-999).initStack(u.stack)
    }
    if (s.ok && s.status >= 200 && s.status < 400) {
        if (n === "json")
            return await s.json();
        if (n === "text")
            return await s.text();
        if (n === "raw") {
            let u = await s.text()
                , l = Object.fromEntries([...s.headers.entries()])
                , c = s.url;
            return c || (s.headers.get("X-Final-URL") ? c = s.headers.get("X-Final-URL") : c = e),
                {
                    body: u,
                    headers: l,
                    status: s.status,
                    statusText: s.statusText,
                    url: c
                }
        } else if (n === "stream") {
            let u = "", l;
            if (s.body && s.body instanceof ReadableStream)
                for await(let c of zw(s.body)) {
                    let p = new TextDecoder().decode(c);
                    u += p;
                    let m;
                    for (; (m = u.indexOf(`
`)) >= 0; ) {
                        let g = u.slice(0, m).trim();
                        if (u = u.slice(m + 1),
                        g.startsWith("event:") || g === "")
                            continue;
                        let f = "";
                        if (g.startsWith("data:") && (f = g.slice(5).trim()),
                        f === "[DONE]")
                            break;
                        let T;
                        try {
                            T = JSON.parse(f ?? "")
                        } catch (b) {
                            B.debug("json error", b);
                            continue
                        }
                        l = T
                    }
                }
            return l
        }
    } else {
        let u;
        try {
            u = await s.text()
        } catch (g) {
            B.error("parse response failed", g)
        }
        u && B.error("fail response", u);
        let l = "";
        u && (l = u.slice(0, 500));
        let c = l
            , m = new URL(e).hostname.endsWith(".immersivetranslate.com");
        throw e.endsWith("edge.microsoft.com/translate/auth") && (c = "bingAuth:" + l),
        m && l.includes("quota exceeded") && (c = "ProQuota:" + l),
            new V("fetchError",c).initNetWork(s.status)
    }
}
async function *zw(t) {
    let e = t.getReader();
    try {
        for (; ; ) {
            let {done: n, value: r} = await e.read();
            if (n)
                return;
            yield r
        }
    } finally {
        e.releaseLock()
    }
}

