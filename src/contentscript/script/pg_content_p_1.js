function vr(t, e={}) {
    let {signal: n, persistent: r} = e;
    return n?.aborted ? Promise.reject(new DOMException("Delay was aborted.","AbortError")) : new Promise((a,i)=>{
            let o = ()=>{
                clearTimeout(u),
                    i(new DOMException("Delay was aborted.","AbortError"))
            }
                , u = setTimeout(()=>{
                    n?.removeEventListener("abort", o),
                        a()
                }
                , t);
            if (n?.addEventListener("abort", o, {
                once: !0
            }),
            r === !1)
                try {
                    Deno.unrefTimer(u)
                } catch (l) {
                    if (!(l instanceof ReferenceError))
                        throw l
                }
        }
    )
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function RT(t) {
    let e = document.createElement("span");
    return e.innerHTML = t,
        (e.textContent || "").trim()
}
function qe(t, e, n) {
    ot("translate_video_subtitle", [{
        name: "translate_video_subtitle",
        params: {
            video_platform: n || t.rule.id || ""
        }
    }], {
        ...t,
        sourceLanguage: e || "auto"
    })
}
function nt(t, e) {
    return e.indexOf("zh") >= 0 ? t === "zh-CN" || t === "zh-TW" : t == e
}
function OT(t) {
    let {url: e, method: n, headers: r, body: a} = t
        , i = new Headers;
    for (let[u,l] of Object.entries(r))
        i.append(u, l);
    let o;
    return typeof a == "object" ? (delete a._formatBodyType,
        o = JSON.stringify(a)) : typeof a == "string" && (o = a),
        new Request(e,{
            method: n,
            headers: i,
            body: o
        })
}
function zT(t) {
    return t ? Object.entries(t).reduce((e,[n,r])=>{
            if (r == null || r == null || typeof r == "object" && Object.keys(r).length === 0)
                return e;
            if (n == "body" && typeof r == "object" && r._formatBodyType == "FormData") {
                let a = new FormData;
                for (let[i,o] of Object.entries(r))
                    i !== "_formatBodyType" && a.append(i, o);
                return e[n] = a,
                    e
            }
            return e[n] = r,
                e
        }
        , {}) : null
}
function Xa(t) {
    return t.replace(/\n/g, " ")
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function Jt(t) {
    return !!(t && t.subscription && t.subscription.subscriptionStatus === "active")
}

function a3(t) {
    if (t) {
        let e = new Date(t.createTime)
            , n = Iw(e)
            , r = "free"
            , a = "unknown";
        return t.subscription && t.subscription.subscriptionStatus === "active" && (r = t.subscription.subscriptionType),
        t.subscription && t.subscription.subscriptionId && (t.subscription.subscriptionId.startsWith("sub_") ? a = "stripe" : a = "admin"),
            {
                user_type: r,
                user_register_day: n,
                subscription_from: a
            }
    } else
        return null
}
function Iw(t) {
    try {
        let n = t.toLocaleString("en-US", {
            timeZone: "Asia/Shanghai"
        }).split(" ")[0];
        n.endsWith(",") && (n = n.slice(0, -1));
        let[r,a,i] = n.split("/");
        return n = `${i}-${r}-${a}`,
            n
    } catch {
        return "unknown"
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function pi() {
    let t, e = "pending", n = new Promise((r,a)=>{
            t = {
                async resolve(i) {
                    await i,
                        e = "fulfilled",
                        r(i)
                },
                reject(i) {
                    e = "rejected",
                        a(i)
                }
            }
        }
    );
    return Object.defineProperty(n, "state", {
        get: ()=>e
    }),
        Object.assign(n, t)
}

var bd = class extends Error {
    constructor() {
        super("Deadline"),
            this.name = "DeadlineError"
    }
};

function iu(t, e) {
    // debugger;

    let n = pi()
        , r = setTimeout(()=>n.reject(new bd), e);
    return Promise.race([t, n]).finally(()=>clearTimeout(r))
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var Sr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"];
function Do(t) {
    let e = typeof t == "string" ? new TextEncoder().encode(t) : t instanceof Uint8Array ? t : new Uint8Array(t), n = "", r, a = e.length;
    for (r = 2; r < a; r += 3)
        n += Sr[e[r - 2] >> 2],
            n += Sr[(e[r - 2] & 3) << 4 | e[r - 1] >> 4],
            n += Sr[(e[r - 1] & 15) << 2 | e[r] >> 6],
            n += Sr[e[r] & 63];
    return r === a + 1 && (n += Sr[e[r - 2] >> 2],
        n += Sr[(e[r - 2] & 3) << 4],
        n += "=="),
    r === a && (n += Sr[e[r - 2] >> 2],
        n += Sr[(e[r - 2] & 3) << 4 | e[r - 1] >> 4],
        n += Sr[(e[r - 1] & 15) << 2],
        n += "="),
        n
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var Rg;
function ET(t) {
    let e = t.ctx.rule.aiRule;
    if (B.debug("aiRule", e),
    !e || !e.messageWrapperSelector)
        return;
    let n = t.ctx.rule
        , r = on(t.ctx)
        , a = r.excludeSelectors.indexOf(`${e.messageWrapperSelector} *`);
    r.excludeSelectors.splice(a, 1),
        document.querySelectorAll(`${e.messageWrapperSelector} > *`).forEach(i=>{
                Os(t, i, e, r)
            }
        ),
        Rg = new MutationObserver(i=>{
                i.forEach(function(o) {
                    for (let s of i)
                        if (s.target.nodeType != Node.COMMENT_NODE)
                            try {
                                if (n.mutationExcludeSelectors.length > 0 && Cn(s.target, n.mutationExcludeSelectors))
                                    continue;
                                let u = s.target;
                                if (s.type == "characterData" && (u = s.target.parentElement),
                                !u.closest(e.messageWrapperSelector) || zg(s) && s.type != "characterData")
                                    continue;
                                if (u.recordLength) {
                                    u.recordLength !== u.innerHTML.length && Os(t, u, e, r, !0);
                                    continue
                                }
                                if ((s.addedNodes || []).length <= 0 && s.type != "characterData" || u.nodeType !== Node.ELEMENT_NODE)
                                    continue;
                                if (!la(u, {
                                    blockSelectors: r.blockSelectors,
                                    extraInlineSelectors: r.extraInlineSelectors,
                                    extraBlockSelectors: r.extraBlockSelectors,
                                    atomicBlockSelectors: r.atomicBlockSelectors
                                }, window.getComputedStyle(u))) {
                                    let c = Yi(r, u.parentElement);
                                    c && (pt.clearToParentMark(u, c),
                                        Os(t, c, e, r));
                                    continue
                                }
                                Os(t, u, e, r)
                            } catch (u) {
                                B.error(u)
                            }
                }),
                    document.querySelectorAll(`${e.messageWrapperSelector}`).forEach(o=>{
                            pt.isMarked(o, t.id) || Os(t, o, e, r)
                        }
                    )
            }
        ),
        Rg.observe(document.body, {
            childList: !0,
            subtree: !0,
            characterData: !0
        })
}
function Os(t, e, n, r, a=!1) {
    let i = e.closest(n.messageWrapperSelector);
    if (!i)
        return;
    let o = e;
    for (; o != i; )
        clearTimeout(o.timer),
            o = o.parentElement;
    clearTimeout(i.timer);
    let s = e;
    s.timer = setTimeout(()=>{
            a && Og(e),
                Ur({
                    id: t.id,
                    container: e,
                    filterRule: r,
                    force: !0,
                    onParagraph: u=>{
                        Za(t, u, !0)
                    }
                    ,
                    onFrame: ()=>{}
                    ,
                    onIgnoreElement: ()=>{}
                }),
                s.timer = null
        }
        , n.streamingDelayTime || 1e3)
}
function CT() {
    Rg?.disconnect()
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
