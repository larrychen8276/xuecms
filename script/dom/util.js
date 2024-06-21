function l1(t) {
    return t.replace(/</g, "&lt;").replace(/>/g, "&gt;")
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

// 获取当前URL地址
function Ee() {
    if (!globalThis || !globalThis.location)
        return "https://example.com";
    if (!He())
        return globalThis.location.href;
    try {
        let e = globalThis.location.href
            , n = new URL(e);
        if (n.protocol === "about:" || n.protocol === "blob:") {
            if (globalThis.location.ancestorOrigins && globalThis.location.ancestorOrigins.length > 0)
                return globalThis.location.ancestorOrigins[0];
            let r = "";
            try {
                r = globalThis.parent.location.href
            } catch {}
            return r || (globalThis.location != globalThis.parent.location ? document.referrer : document.location.href)
        } else
            return e
    } catch {}
    return globalThis.location.href
}

function En(t, e, n) {
    if (t instanceof ShadowRoot) {
        try {
            t.appendChild(document.createElement("style")).textContent = e
        } catch (r) {
            B.warn("injectCSS failed, rootDocument" + r?.message, t)
        }
        return
    }
    if (t && t.head && t.head.appendChild) {
        let r = t.createElement("style");
        if (n) {
            let a = t.querySelector(`style[data-id="${n}"]`);
            a && a.remove(),
                r.dataset.id = n
        }
        r.textContent = e,
            t.head.appendChild(r)
    } else if (t) {
        let r = document.createElement("head")
            , a = document.createElement("style");
        a.textContent = e,
            r.appendChild(a),
            t.appendChild(r)
    } else
        B.warn("injectCSS failed, rootDocument does not have head node", t)
}


function ji(t) {
    let e = t.getAttribute("src");
    if (e) {
        if (e === "about:blank")
            return !0;
        if (wD) {
            if (e.startsWith("blob:"))
                return !0
        } else if (e.startsWith("blob:"))
            return !!document.querySelector("meta[name='immersive-translate-ebook-viewer']") || !e.startsWith("blob:http");
        return !1
    }
    try {
        if (t.contentDocument && t.contentDocument.body)
            return !0
    } catch {}
    return !1
}


function hs(t, e) {
    if (!t || !e)
        return !1;
    Array.isArray(e) || (e = [e]),
        t = t.toUpperCase();
    for (let n of e)
        if (t === n)
            return !0;
    return !1
}

function y1(t) {
    let e = t.replace("#", "")
        , n = parseInt(e.substring(0, 2), 16)
        , r = parseInt(e.substring(2, 4), 16)
        , a = parseInt(e.substring(4, 6), 16);
    return {
        r: n,
        g: r,
        b: a
    }
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
