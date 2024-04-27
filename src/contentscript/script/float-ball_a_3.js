"use strict";

var N8 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEyIiBoZWlnaHQ9IjM3MiIgdmlld0JveD0iMCAwIDMxMiAzNzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSBtZWV0Ij4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF8zNjQ4XzEyODAyKSI+CjxwYXRoIGQ9Ik0yMCAzNkMyMCAyNC45NTQzIDI4Ljk1NDMgMTYgNDAgMTZIMjU4LjkxNEMyNjkuOTU5IDE2IDI3OC45MTQgMjQuOTU0MyAyNzguOTE0IDM2VjE3My4wNzVMMjg5LjEyOCAxNzguNzQyQzI5MS43NzggMTgwLjIxMyAyOTEuODk0IDE4My45ODIgMjg5LjMzOSAxODUuNjEyTDI3OC45MTQgMTkyLjI2M1YzMjhDMjc4LjkxNCAzMzkuMDQ2IDI2OS45NTkgMzQ4IDI1OC45MTQgMzQ4SDQwQzI4Ljk1NDMgMzQ4IDIwIDMzOS4wNDYgMjAgMzI4VjM2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzM2NDhfMTI4MDIpIi8+CjwvZz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZF8zNjQ4XzEyODAyIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzExLjE4OCIgaGVpZ2h0PSIzNzIiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeT0iNCIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMCIvPgo8ZmVDb21wb3NpdGUgaW4yPSJoYXJkQWxwaGEiIG9wZXJhdG9yPSJvdXQiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzM2NDhfMTI4MDIiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfMzY0OF8xMjgwMiIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzM2NDhfMTI4MDIiIHgxPSIxNTcuNSIgeTE9IjE2IiB4Mj0iMTU3LjUiIHkyPSIzNDgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGOTJCQyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==";

function z8(t) {
    let e = []
        , n = /(<a\s+.*?href="([^"]*)".*?>(.*?)<\/a>)|([^<]+)/g
        , r = Array.from(t.matchAll(n));
    for (let a of r) {
        let i = a[2]
            , o = a[3]
            , s = a[4];
        i && o ? e.push({
            type: "link",
            href: i,
            value: o
        }) : s && e.push({
            type: "text",
            value: s
        })
    }
    return e
}


var ai = `${Q}-float-ball`;
function Vv(t) {
    let e = n=>{
            n && n.target && n.target.id === "immersive-translate-popup-overlay" && t.onClose()
        }
    ;
    return t.visible ? w("div", {
        onClick: e,
        id: "immersive-translate-popup-overlay",
        class: "immersive-translate-popup-overlay",
        children: w("div", {
            class: "immersive-translate-popup-wrapper",
            style: t.getModalStyle(),
            children: w(R8, {
                onConfirm: t.onCloseConfirm,
                onClose: t.onClose
            })
        })
    }) : null
}
function R8(t) {
    let {t: e} = Ce()
        , [n,r] = se("UntilNext")
        , a = Ii() + "#floating"
        , i = e("closeQuickTranslation.settingOpen", {
        1: a
    })
        , o = [{
        title: e("closeQuickTranslation.untilNext"),
        type: "UntilNext"
    }, {
        title: e("closeQuickTranslation.currentWebsite"),
        type: "CurrentWebsite",
        description: i
    }, {
        title: e("closeQuickTranslation.alwaysClose"),
        type: "AlwaysClose",
        description: i
    }];
    return w("div", {
        class: `${ai}-close-content`,
        children: [w("div", {
            class: "flex justify-between",
            children: [w("div", {
                class: `${ai}-close-title`,
                children: e("closeQuickTranslation")
            }), w("div", {
                class: "clickable",
                onClick: t.onClose,
                children: w(ya, {
                    type: "modal-close"
                })
            })]
        }), w("div", {
            class: `${ai}-close-radio-content mt-3`,
            children: o.map(s=>w(O8, {
                onClick: ()=>{
                    r(s.type)
                }
                ,
                title: s.title,
                description: s.description,
                selected: s.type === n,
                onLinkClick: u=>{
                    Ri(u)
                }
            }, s.type))
        }), w("div", {
            class: "flex mt-3 flex-end",
            children: [w("div", {
                class: `${ai}-default-btn`,
                onClick: t.onClose,
                children: e("closeQuickTranslation.cancel")
            }), w("div", {
                class: `${ai}-primary-btn ml-2`,
                onClick: ()=>{
                    t.onConfirm && t.onConfirm(n)
                }
                ,
                children: e("closeQuickTranslation.confirm")
            })]
        })]
    })
}
function O8(t) {
    let {selected: e, title: n, description: r, onLinkClick: a} = t
        , i = z8(r || "");
    return w("div", {
        class: "flex items-center clickable",
        style: "padding: 8px 0",
        onClick: t.onClick,
        children: [w("div", {
            class: e ? `${ai}-radio-sel` : `${ai}-radio-nor`,
            children: w("div", {})
        }), w("div", {
            class: "ml-2 text-sm",
            children: [w("span", {
                children: n
            }), r ? w("small", {
                class: "muted text-sm",
                children: i.map(o=>o.type === "text" ? o.value : w("a", {
                    onClick: ()=>o.href && a && a(o.href),
                    children: o.value
                }))
            }) : null]
        })]
    })
}

function Jt(t) {
    return !!(t && t.subscription && t.subscription.subscriptionStatus === "active")
}

function Qt() {
    return true;//we.PROD === "1"
}
function Rn() {
    return true;//we.PROD_API === "1"
}
function xf() {
    return false;//we.HAS_CSP_ERROR == "1"
}

var ez = Qt() ? "https://dash.immersivetranslate.com/#general" : "http://localhost:8000/dist/userscript/options/#general"
    , W0 = "user_from_plugin"
    , Ft = "user_info"
    , ns = Qt() || Rn() ? "https://api2.immersivetranslate.com" : "https://test-api2.immersivetranslate.com"
    , bb = Qt() || Rn() ? "https://immersivetranslate.com/accounts/login?from=plugin" : "https://test.immersivetranslate.com/accounts/login?from=plugin"
    , Tb = bb + "&utm_source=extension&utm_medium=extension&utm_campaign=error_modal"
    , yb = bb + "&utm_source=extension&utm_medium=extension&utm_campaign=popup_more"
    , Xu = Qt() || Rn() ? "https://immersivetranslate.com/profile" : "https://test.immersivetranslate.com/profile"
    , Ai = Qt() || Rn() ? "https://immersivetranslate.com/pricing" : "https://test.immersivetranslate.com/pricing"
    , ew = Qt() || Rn() ? "https://immersivetranslate.com/download/" : "https://test.immersivetranslate.com/download/"
    , tw = Qt() || Rn() ? "https://immersivetranslate.com/topup?type=open_ai&" : "https://test.immersivetranslate.com/topup?type=open_ai&"
    , nw = Qt() || Rn() ? "https://immersivetranslate.com/topup?type=deepl&" : "https://test.immersivetranslate.com/topup?type=deepl&"
    , tz = Ai + "?utm_source=extension&utm_medium=extension&utm_campaign=popup_more"
    , nz = ew + "?utm_source=extension&utm_medium=extension&utm_campaign=options_nav"
    , vb = Ai + "?utm_source=extension&utm_medium=extension&utm_campaign=popup_footer"
    , el = Ai + "?utm_source=extension&utm_medium=extension&utm_campaign=error_modal"
    , Sb = tw + "utm_source=extension&utm_medium=extension&utm_campaign=error_modal"
    , xb = nw + "utm_source=extension&utm_medium=extension&utm_campaign=error_modal"
    , Eb = Xu + "?utm_source=extension&utm_medium=extension&utm_campaign=error_modal&upgradeFromTrial=true"
    , Cb = "https://immersivetranslate.com/docs/usage/";

/*
var wb = Me().TRANSLATE_FILE_URL
    , rz = wb + "?utm_source=extension&utm_medium=extension&utm_campaign=options_nav"
    , Db = wb + "?utm_source=extension&utm_medium=extension&utm_campaign=float_ball";
*/
var wb = "https://app.immersivetranslate.com/"
    , rz = wb + "?utm_source=extension&utm_medium=extension&utm_campaign=options_nav"
    , Db = wb + "?utm_source=extension&utm_medium=extension&utm_campaign=float_ball";

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function kt(t, e, n) {
    return mr(Nt, e, t.config.interfaceLanguage, "en", n)
}

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

