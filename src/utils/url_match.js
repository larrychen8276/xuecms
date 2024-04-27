
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
