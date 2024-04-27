
function xy(t, e, n) {
    let r = [];
    n || (n = {}),
    e !== "auto" && !n[e] && (n[e] = {
        matches: [],
        excludeMatches: []
    }),
        r = e !== "auto" ? n[e].matches : [];
    let a = {}
        , i = Object.keys(n);
    for (let l of i) {
        let p = n[l].matches;
        for (let m of p)
            a[m] || (a[m] = []),
                a[m].push(l)
    }
    let o = a[t];
    if (o && o.length > 0)
        for (let l of o)
            n[l].matches.indexOf(t) > -1 && (n[l] = {
                ...n[l],
                matches: n[l].matches.filter(p=>p !== t)
            });
    let s = new Set(r);
    if (e === "auto")
        return {
            ...n
        };
    s.add(t);
    let u = Array.from(s);
    return {
        ...n,
        [e]: {
            ...n[e],
            matches: u
        }
    }
}
