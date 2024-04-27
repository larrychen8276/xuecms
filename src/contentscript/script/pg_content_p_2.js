"use strict";

var po = "imt-subtitle-inject"
    , Tc = class {
    from;
    to;
    constructor(e, n) {
        this.from = e,
            this.to = n
    }
    sendMessages(e) {
        globalThis.postMessage({
            type: po,
            to: this.to,
            from: this.from,
            action: e.action,
            data: e.data,
            id: e.id || new Date().getTime(),
            isAsync: !1
        })
    }
    getRandomId() {
        return (new Date().getTime() + Math.random()) * Math.random()
    }
    sendAsyncMessages({action: e, data: n}) {
        return new Promise(r=>{
                let a = this.getRandomId();
                globalThis.postMessage({
                    type: po,
                    to: this.to,
                    from: this.from,
                    action: e,
                    data: n,
                    id: a,
                    isAsync: !0
                });
                let i = ({data: o})=>{
                        po === o.type && o.id === a && o.to === this.from && (r(o.data),
                            globalThis.removeEventListener("message", i))
                    }
                ;
                globalThis.addEventListener("message", i)
            }
        )
    }
    handleMessageOnce(e) {
        return new Promise(n=>{
                let r = ({data: a})=>{
                        po === a.type && a.action === e && a.to === this.from && (n(a.data),
                            globalThis.removeEventListener("message", r))
                    }
                ;
                globalThis.addEventListener("message", r)
            }
        )
    }
    handleMessage(e, n) {
        let r = ({data: a})=>{
                po === a.type && a.action === e && a.to === this.from && n(a)
            }
        ;
        return globalThis.addEventListener("message", r),
            ()=>{
                globalThis.removeEventListener("message", r)
            }
    }
    handleMessages(e) {
        let n = ({data: r})=>{
                po === r.type && r.to === this.from && e(r)
            }
        ;
        return globalThis.addEventListener("message", n),
            ()=>{
                globalThis.removeEventListener("message", n)
            }
    }
}
    , yc = new Tc("content-script","inject")
    , lk = new Tc("inject","content-script")
    , NT = {
    get(t, e, n) {
        return e in t ? (...r)=>{
                let a = t[e];
                return typeof a == "function" ? a.apply(t, r) : Reflect.get(t, e, n)
            }
            : r=>t.sendAsyncMessages({
                action: e,
                data: r
            })
    }
}
    , MJ = new Proxy(lk,NT)
    , UT = new Proxy(yc,NT);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function oo(t) {
    return (t.config.rtlLanguages || ["ar", "arc", "az", "dv", "he", "ckb", "fa", "ur"]).includes(t.targetLanguage)
}


var Bl = !1
    , wD = ye();
function c1(t, e) {
    let n = [];
    for (let r of e) {
        let a = t.querySelectorAll(r);
        for (let i of a)
            n.push(i)
    }
    return n
}
function DD(t, e) {
    let n = function(i) {
        return i.nodeType === Node.ELEMENT_NODE || i.nodeType === Node.TEXT_NODE ? i.nodeType === Node.ELEMENT_NODE && d1(i, e, !0) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
    }
        , r = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, n)
        , a = !0;
    for (; r.nextNode(); ) {
        let i = r.currentNode;
        if (i.nodeType === Node.ELEMENT_NODE) {
            if (sa(i, Vu)) {
                if (a === !0)
                    return !0;
                continue
            }
            if (hs(i.nodeName, e.inlineTags))
                return !0;
            if (!bp(i, e))
                return !1
        }
    }
    return !0
}
function Tp(t, e) {
    let n = e.inlineTags;
    if (t.nodeType === Node.ELEMENT_NODE)
        if (hs(t.nodeName, n) || bp(t, e)) {
            if (sa(t, ob) || hs(t.nodeName, ["BR"]))
                return !1;
            if (sa(t, Vu))
                return !0;
            if (bp(t, e)) {
                let r = globalThis.getComputedStyle(t);
                if (r.display === "block" || r.display === "flex")
                    return !1
            }
            return DD(t, e)
        } else
            return sa(t, Vu);
    return !1
}
function d1(t, e, n) {
    if (!(t.nodeType === Node.ELEMENT_NODE || t.nodeType === Node.TEXT_NODE) || t.nodeType === Node.ELEMENT_NODE && sa(t, ib, !0))
        return !0;
    if (t.nodeType === Node.ELEMENT_NODE && sa(t, J4))
        return !1;
    let {stayOriginalTags: r, excludeTags: a} = e
        , i = [];
    return n && a && a.length > 0 ? i = a || [] : i = a.filter(o=>!r.includes(o)),
        !!(t.nodeType === Node.ELEMENT_NODE && (t.getAttribute("translate") === "no" || t.classList.contains("notranslate")) || hs(t.nodeName, i))
}
function Ni(t, e, n) {
    let r = t.trim();
    return r.length >= e || r.split(" ").filter(o=>o.trim() !== "").length >= n || !g1(r) && r.length >= n
}
function p1(t, e, n) {
    let r = t.trim();
    if (r.length <= e)
        return !0;
    if (g1(r)) {
        if (r.split(" ").length <= n)
            return !0
    } else if (r.length <= n)
        return !0;
    return !1
}
function g1(t) {
    for (let e = 0; e < t.length; e++)
        if (t.charCodeAt(e) > 127)
            return !1;
    return !0
}
function m1(t) {
    if (t && t.includes("://") && !t.includes(" ") && t.length < 512)
        try {
            return new URL(t),
                !0
        } catch {
            return !1
        }
    else
        return !1
}
function f1(t) {
    return t ? /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(t) : !1
}
function h1(t) {
    return t ? /^[_\d:\-+\.。，,% ]+$/.test(t) : !1
}
function b1(t) {
    if (t && t.startsWith("#")) {
        if (t.split("#").length > 2)
            return !1;
        if (t.indexOf(" ") === -1)
            return !0
    }
    return !1
}
function T1(t) {
    return !!(t && t.startsWith("@") && t.indexOf(" ") === -1)
}
function sa(t, e, n=!1) {
    return yp(t, e, "1", n)
}
function yp(t, e, n, r=!1) {
    return Bl && !r ? t[xn] ? !!(t[xn] && t[xn][e] === n) : !1 : t.dataset[e] === n
}
function Ui(t) {
    return (t.innerText || t.textContent || "").trim()
}
function vp(t) {
    let e = t.querySelectorAll("iframe")
        , n = "";
    for (let r = 0; r < e.length; r++) {
        let i = e[r].contentDocument;
        if (i && (n += Ui(i.body),
        n.length > 2e3))
            break
    }
    return n
}
function Il(t) {
    return t ? typeof t == "string" ? document.querySelector(t) !== null : t.some(e=>document.querySelector(e)) : !1
}
function lt(t, e, n, r=!1, a=!1) {
    t.isContentEditable && !a || (Bl && !r ? (t[xn] || (t[xn] = {}),
    t[xn][e] || (t[xn][e] = n)) : t.dataset[e] !== n && (t.dataset[e] = n))
}
function Rl(t, e, n=!1) {
    if (Bl && !n) {
        if (!t[xn] || !t[xn][e])
            return;
        delete t[xn][e]
    } else
        delete t.dataset[e]
}
function qi(t, e, n=!1) {
    return Bl && !n ? !t[xn] || !t[xn][e] ? void 0 : t[xn][e] : t.dataset[e]
}
function bp(t, e) {
    let n = e.allBlockTags.concat(e.inlineTags).concat(e.excludeTags);
    return !hs(t.nodeName, n)
}

function v1(t, e, n, r) {
    if (r.document.caretPositionFromPoint) {
        let a = r.document.caretPositionFromPoint(t, e);
        if (a) {
            let i = r.document.createRange()
                , o = a.offsetNode;
            if (!o || o.nodeType !== Node.TEXT_NODE || d1(o, n, !0))
                return null;
            try {
                i.setStart(o, a.offset),
                    i.setEnd(o, a.offset)
            } catch (s) {
                return B.warn("getRangeFromPoint error", s),
                    null
            }
            return i
        }
        return null
    } else
        return r.document.caretRangeFromPoint ? r.document.caretRangeFromPoint(t, e) : null
}
function S1(t, e, n) {
    let r = 0
        , a = (i,o,s,u)=>{
            if (++r > 100 || u === i)
                return i;
            let l = i.shadowRoot;
            if (!l || typeof l.elementFromPoint != "function")
                return i;
            let c = l.elementFromPoint(o, s);
            return c ? a(c, o, s, i) : i
        }
    ;
    return a(t, e, n)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function rf(t) {
    return t.map(e=>new RegExp(e))
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function Ml(t) {
    let n = t.toLocaleString("en-US", {
        timeZone: "Asia/Shanghai"
    }).split(" ")[0];
    return n.endsWith(",") && (n = n.slice(0, -1)),
        n
}

function TD(t) {
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function Pl(t) {
    let e = await Ie({
        text: t,
        pageLangs: ["en"]
    });
    try {
        if (ye() || tt()) {
            let n = t.substring(0, 200);
            e = await zr.detectLanguageRemotelyByTransmart(n)
        }
    } catch {}
    return e
}

function Ii(t="") {
    return ye() || tt() ? x.OPTIONS_URL : oe.runtime.getURL("options.html")
}
function $3(t="") {
    return oe && oe.runtime && oe.runtime.getURL ? oe.runtime.getURL("options.html") : ""
}

function _l(t) {
    tt()
}


var iw = /\s+/g
    , ow = /[\t\n\v\f\r ]+/g;
function Kb(t, e) {
    e ? typeof e == "string" && (e = {
        style: e
    }) : e = {};
    let n = e.preserveLineEndings ? sw : uw;
    return String(t).replace(e.style === "html" ? ow : iw, e.trim ? lw(n) : n)
}
function sw(t) {
    let e = /\r?\n|\r/.exec(t);
    return e ? e[0] : " "
}
function uw() {
    return " "
}
function lw(t) {
    return e;
    function e(n, r, a) {
        return r === 0 || r + n.length === a.length ? "" : t(n)
    }
}

function k2(t, e, n) {
    let r = Object.assign({}, e)
        , a = new Map;
    (r.langOverrides || []).forEach(s=>{
            a.set(s.id, s)
        }
    );
    for (let s of a.keys()) {
        let[u,l] = s.split("2");
        if (["auto", n.sourceLanguage].includes(u) && ["auto", n.targetLanguage].includes(l)) {
            let c = a.get(s);
            if (!c)
                continue;
            if (c.extends) {
                let p = a.get(c.extends);
                p && (r = Object.assign({}, r, p))
            }
            r = Object.assign({}, r, c)
        }
    }
    return ["prompt", "systemPrompt", "multiplePrompt", "subtitlePrompt"].forEach(s=>{
            t?.hasOwnProperty(s) && (r[s] = t[s])
        }
    ),
        r
}



var OD = ["block", "grid", "flex", "table", "table-row", "table-cell", "list-item", "-webkit-box", "box", "contents"];
function Cn(t, e) {
    if (e.length === 0)
        return !1;
    let n = e.join(",");
    return t.matches && t.matches(n) || !1
}
function la(t, e, n) {
    let {blockSelectors: r, extraBlockSelectors: a, extraInlineSelectors: i, atomicBlockSelectors: o} = e;
    if (Cn(t, i))
        return !1;
    if (Cn(t, a) || ["br", "input"].includes(t.nodeName.toLowerCase()))
        return !0;
    let l = null;
    if (t.parentNode && t.parentNode.immersiveTranslateComputedStyle && (l = t.parentNode.immersiveTranslateComputedStyle),
    l && l.display && l.display === "inline-flex")
        return !1;
    let c = p();
    return c && (c = !Cn(t, o)),
        c;
    function p() {
        return n && n.display ? !!OD.includes(n.display) : Cn(t, r)
    }
}
var Gt = Cn;
function Va(t) {
    return !!t.shadowRoot
}
function ca(t) {
    if (!t || typeof t != "string" && (t = t.textContent,
        !t))
        return "";
    let e = "";
    return t !== t.trimStart() && (e += " "),
        e += t.trim(),
    e === " " || t !== t.trimEnd() && (e += " "),
        e
}
function vs(t) {
    if (!t)
        return ["", ""];
    if (typeof t != "string" && (t = t.textContent,
        !t))
        return ["", ""];
    let e = [];
    return t !== t.trimStart() ? e.push(" ") : e.push(""),
        !t.trim() && e.length === 1 ? [" ", ""] : (t !== t.trimEnd() ? e.push(" ") : e.push(""),
            e)
}
function fr(t, e=!1) {
    let n = es;
    return e && t?.translatedPlaceholderDelimiters ? n = t.translatedPlaceholderDelimiters : t?.placeholderDelimiters && (n = t.placeholderDelimiters),
        n
}
function $a(t, e=!1) {
    let n = t.config?.translationServices?.[t.translationService];
    return fr(n, e)
}
function $i(t, e) {
    return na(e, t.targetLanguage, {
        ignoreZhCNandZhTW: t.rule.ignoreZhCNandZhTW
    })
}
function Ap(t) {
    let {rule: e} = t
        , n = zD(t);
    return `&#160;<${e.targetWrapperTag} class="${n} notranslate"></${e.targetWrapperTag}>`
}
function zD(t) {
    let e = t.config.loadingTheme;
    return `${Q}-loading-${e}`
}
function Ss(t, e) {
    let n = t.rule
        , r = document.createElement(n.targetWrapperTag);
    r.classList.add("notranslate", yt),
        r.setAttribute("translate", "no"),
        r.setAttribute("lang", t.targetLanguage),
        lt(r, rb, e.toString());
    let a = Ap(t);
    return r.append(DOMPurify.sanitize(a, {
        RETURN_DOM_FRAGMENT: !0
    })),
        r
}
function Vi(t, e) {
    return t.querySelector(`[${U0}='${e}']`)
}
function Q1() {
    document.querySelectorAll(`[${U0}]`).forEach(e=>{
            e.remove()
        }
    )
}
function J1() {
    document.querySelectorAll(`.${yt}-error`).forEach(e=>{
            e.remove()
        }
    )
}
function Z1() {
    let t = document.querySelectorAll("iframe")
        , e = [];
    return t.forEach(n=>{
            ji(n) && e.push(n)
        }
    ),
        e
}

function l1(t) {
    return t.replace(/</g, "&lt;").replace(/>/g, "&gt;")
}


function kp(t) {
    let e = {}
        , {glossaries: r, _systemExcludeWordRegex: a, text: i, delimiters: o, excludeRegexps: s, targetLanguage: u} = t
        , l = i
        , c = 1001;
    try {
        if (r && r.length > 0) {
            let p = {}
                , m = r.filter(f=>f.tl && f.tl !== u ? !1 : f.k ? (p[f.k] = f.v || "",
                !0) : !1).sort((f,T)=>f.tl && !T.tl ? 1 : !f.tl && T.tl ? -1 : 0)
                , g = new RegExp(a.replace("{word}", m.map(f=>f.k).join("|")),"g");
            l = l.replace(g, (f,T)=>{
                    let b = c++;
                    return e[`${b}`] = p[T] || T,
                        o.length > 2 ? f.replace(T, `<${o[2]}${b}></${o[2]}${b}>`) : f.replace(T, `${o[0]}${b}${o[1]}`)
                }
            )
        }
        s && s.length > 0 && s.forEach(p=>{
                let m = new RegExp(p,"gi");
                l = l.replace(m, (g,f)=>{
                        let T = c++;
                        return e[`${T}`] = l1(f),
                            o.length > 2 ? g.replace(f, `<${o[2]}${T}></${o[2]}${T}>`) : g.replace(f, `${o[0]}${T}${o[1]}`)
                    }
                )
            }
        )
    } catch (p) {
        B.debug(`format source text error: ${p.message}`)
    }
    return {
        text: l,
        variables: e
    }
}
function xs(t) {
    let {noTranslateRegexp: e, minTextCount: n, minWordCount: r, delimiters: a, text: i} = t
        , o = new RegExp(`${a[0]}(\\d+)${a[1]}`,"gi");
    if (a.length > 2) {
        let u = a[2];
        o = new RegExp(`<${u}(\\d+)>(.*?)</${u}\\d+>`,"gi")
    }
    let s = i.trim();
    return s = s.replace(o, ""),
        s = s.trim(),
        s === "" || s.length === 1 && s.charCodeAt(0) === 8203 || /^[0-9.,\/#!$%\^&\*;:{}=\-_`~()\s]+$/.test(i) || s.includes("</style>") || s.includes("< styles>") || T1(s) || m1(s) || b1(s) || f1(s) || h1(s) || UD(s) || o.test(s) || e && e.length > 0 && new RegExp(e.join("|"),"gi").test(s) ? !1 : Ni(i, n, r)
}
function Nr(t) {
    return t.nodeType === Node.ELEMENT_NODE
}
function X1(t, e) {
    return t.paragraphs ? t.paragraphs[0]?.ctxId !== e ? (t.paragraphs = [],
        !1) : !0 : !1
}
async function Pp() {
    return await At("fakeUserId", "")
}
async function ND() {
    return await At("installedAt", "")
}
async function Gl(t) {
    let n = x.INSTALL_FROM
        , r = Ut()
        , a = await ND()
        , i = await Pp()
        , o = await Pn()
        , s = !1
        , u = await Mt.get(Ft, null)
        , l = !1;
    return u && Jt(u) && (s = !0,
    u.subscription && u.subscription.isTrial && (l = !0)),
        {
            installFrom: n,
            version: r,
            installedAt: a,
            interfaceLang: t,
            optionInterfaceLang: o.interfaceLanguage,
            deviceId: i,
            isProUser: s,
            isTrial: l
        }
}
function e2(t, e, n, r) {
    if (!e || !r || !t)
        return "";
    let a = t.xpathRule
        , i = 0
        , o = n;
    for (; o && o !== r; )
        i++,
            o = o.parentNode;
    let s = i + "";
    for (let u = 0; u < a.length; u++) {
        let l = a[u]
            , [c,p] = l.split(":")
            , m = "";
        if (c == "name" ? m = n?.nodeName || "" : m = n?.getAttribute(c) || "",
        p && p != m)
            return "";
        s += "_" + m
    }
    return s
}
function Lp(t, e) {
    let[n,r] = se();
    return Ae(()=>{
            !t || !e || (async()=>{
                    let a = await _p(t, e);
                    r(a)
                }
            )()
        }
        , [t, e, r]),
        n
}
async function _p(t, e) {
    if (!t || !e)
        return;
    let n = !1, r, a = !0;
    !tt() && ye() || isMobile().any ? (a = !1,
        r = e.monkeyH5FloatBall,
    !r && t.rule.isShowUserscriptPagePopup == !1 && (r = t.config.monkeyH5FloatBall,
        r.enable = !1),
    r || (r = t.config.monkeyH5FloatBall),
        n = !e.monkeyH5FloatBall) : (r = t.config.pcFloatBall,
        n = !e.pcFloatBall);
    try {
        if (r?.afterInstalledAt && n) {
            let i = await At("installedAt", "");
            new Date(i).getTime() < new Date(r.afterInstalledAt).getTime() && (r.enable = !1)
        }
    } catch (i) {
        B.error(i)
    }
    return r.isPc = a,
        r
}
function t2(t, e) {
    return !tt() && ye() || isMobile().any ? t.monkeyH5FloatBall = e : t.pcFloatBall = e,
        t
}
function n2() {
    let t = globalThis.document.styleSheets
        , e = "";
    for (let n = 0; n < t.length; n++) {
        let r = t[n];
        try {
            if (r instanceof CSSStyleSheet) {
                let a = r.cssRules || r.rules;
                for (let i = 0; i < a.length; i++) {
                    let o = a[i];
                    e += o.cssText + ""
                }
            }
        } catch (a) {
            B.error(a)
        }
    }
    return e
}
function Yi(t, e, n=3) {
    let r = e
        , a = 0;
    for (; r && a < n; ) {
        if (r.nodeType != Node.ELEMENT_NODE)
            return null;
        if (la(r, {
            blockSelectors: t.blockSelectors,
            extraInlineSelectors: t.extraInlineSelectors,
            extraBlockSelectors: t.extraBlockSelectors,
            atomicBlockSelectors: t.atomicBlockSelectors
        }, window.getComputedStyle(r)))
            return r;
        a++,
            r = r?.parentElement
    }
    return null
}
function UD(t) {
    return /^[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]+$/ug.test(t)
}
function r2(t, e) {
    let n = e
        , r = t.config.translationModeLanguagePattern.dualMatches.find(s=>s == n)
        , a = t.config.translationModeLanguagePattern.translationMatches.find(s=>s == n)
        , i = t.config.translationModeUrlPattern.dualMatches.find(s=>dt(t.url, s));
    return t.config.translationModeUrlPattern.translationMatches.find(s=>dt(t.url, s)) ? "translation" : i ? "dual" : a ? "translation" : r ? "dual" : null
}
