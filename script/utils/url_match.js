var $1 = ["*://*/*", "*", "*://*"]
    , Y1 = "immersive-translate-wildcard-placeholder.com";
function Dp(t, e) {
    try {
        let n = [];
        if (!e || (e && !Array.isArray(e) ? n = [e] : n = e,
        n.length === 0))
            return null;
        if (n.some(s=>$1.includes(s)))
            return t;
        let r = new URL(t);
        r.hash = "",
            r.search = "";
        let a = r.href
            , i = r.hostname
            , o = r.port;
        if (n && n.length > 0) {
            let s = n.find(u=>{
                    if (!u)
                        return !1;
                    if (u === i)
                        return !0;
                    if ($1.includes(u))
                        return !0;
                    if (!u.includes("*") && u.includes("://")) {
                        try {
                            let l = new URL(u);
                            if (l.pathname === "/" && !u.endsWith("/")) {
                                let c = l.hostname === i
                                    , p = l.port === o;
                                return l.port ? c && p : c
                            } else
                                return RD(a, u)
                        } catch {}
                        return !1
                    } else {
                        let l, c = u;
                        if (u.includes("://")) {
                            let b = u.split("://");
                            l = b[0],
                            l === "*" && b.length > 1 && (l = "*",
                                u = "https://" + b[1])
                        } else
                            l = "*",
                                u = "https://" + u;
                        let p = u.replace(/\*/g, Y1), m;
                        try {
                            m = new URL(p)
                        } catch {
                            return B.debug("invalid match pattern", p, "raw match value:", c),
                                !1
                        }
                        let g = m.host
                            , f = m.pathname;
                        f === "/" && (c.replace("://", "").includes("/") || (f = "/*"));
                        let T = ID(l + ":", V1(g), V1(f));
                        if (T) {
                            let b = new URL(a);
                            return T.test(b.href)
                        } else
                            return !1
                    }
                }
            );
            if (s)
                return s
        }
        return null
    } catch {
        return null
    }
}
function V1(t) {
    return t.replaceAll(Y1, "*")
}
function ID(t, e, n) {
    let r = "^";
    return t === "*:" ? r += "(http:|https:|file:)" : r += t,
        r += "//",
    e && (t === "file:" || (e === "*" ? r += "[^/]+?" : (e.match(/^\*\./) && (r += "[^/]*?",
        e = e.substring(1)),
        r += e.replace(/\./g, "\\.").replace(/\*/g, "[^/]*")))),
        n ? n === "*" || n === "/*" ? r += "(/.*)?" : n.includes("*") ? (r += n.replace(/\*/g, ".*?"),
            r += "/?") : r += n.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : r += "/?",
        r += "$",
        new RegExp(r)
}
function dt(t, e) {
    return Dp(t, e) !== null
}
function RD(t, e) {
    let n = new URL(t)
        , r = new URL(e);
    return n.hostname === r.hostname && n.pathname === r.pathname && n.protocol === r.protocol && n.port === r.port
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
