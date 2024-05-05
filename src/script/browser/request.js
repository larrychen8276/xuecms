function c3(t, e) {
    let n = new Date(t)
        , r = n.getFullYear().toString()
        , a = (n.getMonth() + 1).toString().padStart(2, "0")
        , i = n.getDate().toString().padStart(2, "0")
        , o = n.getHours().toString().padStart(2, "0")
        , s = n.getMinutes().toString().padStart(2, "0")
        , u = n.getSeconds().toString().padStart(2, "0");
    return e.replace("YYYY", r).replace("MM", a).replace("DD", i).replace("HH", o).replace("mm", s).replace("ss", u)
}
function d3(t) {
    return new Date(t).getTime()
}

var V = class extends Error {
        status;
        constructor(e, n) {
            if (e && n) {
                super(n),
                    this.name = e;
                return
            }
            super(e)
        }
        initNetWork(e) {
            return e && (this.status = e),
                this
        }
        initStack(e) {
            return e && (this.stack = e),
                this
        }
        initData(e) {
            return this.data = e,
                this
        }
        data;
        uiConfig(e) {
            if (!this.message)
                return {};
            let n = null;
            if (n = this.handleProQuota(e) || this.handleUnavailableError(e) || this.handleProUser(e) || this.handleServiceMissingConfig(e) || this.handleNetwork(e) || this.handleFetchError(e),
                !n) {
                let r = kt.bind(null, e)
                    , a = this.getErrorMsg();
                n = {
                    type: "error",
                    title: r("networkError"),
                    errMsg: r("error.serveUnavailable", {
                        serverName: r("translationServices." + e.translationService),
                        1: "https://dash.immersivetranslate.com/#general",
                        2: "https://immersivetranslate.com/pricing/?utm_source=extension&utm_medium=webpage&utm_campaign=service_error",
                        3: "https://immersivetranslate.com/pricing/?utm_source=extension&utm_medium=webpage&utm_campaign=service_error"
                    }) + "<br/><br/>" + r("errorReason", {
                        message: a
                    }),
                    action: "changeService"
                }
            }
            return n
        }
        getErrorMsg() {
            return this.status ? this.status < 0 ? this.message : `${this.status}: ${this.message}` : this.message
        }
        handleUnavailableError(e) {
            let n = kt.bind(null, e)
                , r = this.message.startsWith("bingAuth")
                , a = this.data?.translationService === "transmart" && this.message.startsWith("Server is busy now");
            if (r || a)
                return this.message = this.message.replace("bingAuth:", ""),
                    {
                        type: "network",
                        title: n("networkError"),
                        errMsg: n("error.serveUnavailable", {
                            serverName: n("translationServices." + e.translationService),
                            1: "https://dash.immersivetranslate.com/#general",
                            2: "https://immersivetranslate.com/pricing/?utm_source=extension&utm_medium=webpage&utm_campaign=service_error",
                            3: "https://immersivetranslate.com/pricing/?utm_source=extension&utm_medium=webpage&utm_campaign=service_error"
                        }) + "<br/><br/>" + n("errorReason", {
                            message: this.message
                        }),
                        action: "changeService"
                    }
        }
        handleServiceMissingConfig(e) {
            let n = kt.bind(null, e);
            if (this.message.endsWith(" are required") || this.message.includes("You didn't provide an API key"))
                return {
                    type: "configError",
                    title: n("error.serveConfigError"),
                    errMsg: this.getErrorMsg() + "<br /><br />" + n("error.reloadPageOfSetting"),
                    action: "setting"
                }
        }
        handleNetwork(e) {
            let n = kt.bind(null, e)
                , r = "retry"
                , a = "network"
                , i = n("networkError");
            if (!this.status || this.status < 0)
                return;
            let o = this.getErrorMsg();
            return this.status === 429 ? this.data?.translationService == "google" ? o = `${n("error.googleLimitIp")}<br/><br/>${o}` : this.data?.translationService == "openai" && (this.message.indexOf("Limit: 3 / min") >= 0 || this.message.includes("rate_limit_exceeded") && this.message.includes("Limit 3")) ? o = `${n("error.openAIFreeLimit")}<br/><br/>
          ${o}` : this.data?.translationService == "openai" && this.message.includes("You exceeded your current quota") ? o = `${n("error.openAIExceededQuota")}<br/><br/>
          ${o}` : this.data?.translationService == "gemini" && this.message.includes("RESOURCE_EXHAUSTED") ? o = `${n("error.gemini.429")}<br/><br/> ${o}` : o = `${n("error.429")}<br/><br/> ${o}` : this.status === 403 ? this.data?.translationService == "claude" ? o = `${n("error.claude.403")}<br/><br/>${o}` : o = `${n("error.403")}<br/><br/>${o}` : this.status === 400 ? o = `${n("error.400")}<br/><br/> ${o}` : this.status === 502 ? o = `${n("error.502")}<br/><br/> ${o}` : this.status === 404 && o.includes("User subscription not found") && (o = `${n("error.subscriptionExpired")}<br/><br/> ${o}`,
                r = "setting",
                a = "configError",
                i = n("error.subscriptionExpiredTitle")),
                {
                    type: a,
                    title: i,
                    errMsg: o,
                    action: r
                }
        }
        handleFetchError(e) {
            let n = kt.bind(null, e);
            if (this.status !== -999)
                return;
            let r = this.getErrorMsg();
            return {
                type: "network",
                title: "",
                errMsg: n("error.serveUnavailable", {
                    serverName: n("translationServices." + e.translationService),
                    1: "https://dash.immersivetranslate.com/#general",
                    2: "https://immersivetranslate.com/pricing/?utm_source=extension&utm_medium=webpage&utm_campaign=service_error",
                    3: "https://immersivetranslate.com/pricing/?utm_source=extension&utm_medium=webpage&utm_campaign=service_error"
                }) + "<br/><br/>" + n("errorReason", {
                    message: r
                }),
                action: "changeService"
            }
        }
        handleProUser(e) {
            let n = kt.bind(null, e);
            if (!(this.data?.translationService !== "openai" && this.data?.translationService !== "deepl")) {
                if (this.message.indexOf("token invalid") >= 0 || this.message.indexOf("Login required") >= 0)
                    return {
                        type: "notLogin",
                        title: n("notLoginPro"),
                        errMsg: n("error.proTokenInvalid"),
                        action: "login"
                    };
                if (this.message.indexOf("activate Pro") >= 0)
                    return e.user ? {
                        type: "upgrade",
                        title: n("upgradeToProErrorTitle"),
                        errMsg: n("error.proUpgrade"),
                        action: "upgrade"
                    } : {
                        type: "notLogin",
                        title: n("notLoginPro"),
                        errMsg: n("error.proTokenInvalid"),
                        action: "login"
                    }
            }
        }
        handleProQuota(e) {
            if (!this.message.startsWith("ProQuota:") || !e.user?.subscription)
                return;
            let n = kt.bind(null, e);
            this.message = this.message.replace("ProQuota:", "");
            let r = this.message;
            try {
                r = JSON.parse(this.message).error
            } catch {}
            let a = e.user.subscription
                , {subscriptionType: i, isTrial: o, openAITokenUsedCountResetTime: s, subscriptionTo: u} = a;
            return {
                type: "ProQuotaExceeded",
                title: "",
                errMsg: c.call(this),
                action: "retry"
            };
            function c() {
                let p = this.data?.translationService == "deepl" ? "OpenAI" : "Deepl"
                    , m = this.data?.translationService == "deepl" ? "Deepl" : "OpenAI"
                    , g = n("errorReason", {
                    message: r
                });
                if (i == "onetime_7day")
                    g += n("proQuotaExceededError.onetime7day", {
                        anotherService: p,
                        brandId: Q,
                        href: el
                    });
                else {
                    let f = "";
                    m == "OpenAI" ? f = Sb : f = xb,
                        o ? g += n("proQuotaExceededError.trial", {
                            anotherService: p,
                            brandId: Q,
                            href: Eb
                        }) : g += n("proQuotaExceededError.nonTrial", {
                            anotherService: p,
                            brandId: Q,
                            href: f,
                            translationService: m
                        }),
                    !o && (a.cancelAtPeriodEnd === "false" || d3(u) > s) && (g += n("proQuotaExceededError.resetTime", {
                        resetTime: c3(s, "YYYY-MM-DD HH:mm:ss")
                    }))
                }
                return g
            }
        }
    }
;

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
