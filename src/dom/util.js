





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








