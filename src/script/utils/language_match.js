function u1(t, e) {
    let n = e.matches || []
        , r = e.excludeMatches || [];
    if (r && !Array.isArray(r) && (r = [r]),
    n && !Array.isArray(n) && (n = [n]),
    r.length > 0) {
        if (r.includes(t) || r.includes("<all>"))
            return !1;
        for (let a of r)
            if (a.includes("*") && new RegExp(a).test(t))
                return !1
    }
    if (n.length === 0)
        return !1;
    if (n.length > 0) {
        if (n.includes(t) || n.includes("<all>"))
            return !0;
        for (let a of n)
            if (a.includes("*") && new RegExp(a).test(t))
                return !0
    }
    return !1
}
