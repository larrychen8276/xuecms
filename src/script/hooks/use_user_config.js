var Z5 = "userConfig"
    , X5 = null
    , e8 = Zy(Z5, X5);
function jr(t) {
    let[e,n,r,a] = e8()
        , i = Ve(o=>{
            let s = typeof o == "function" ? o(e) : o;
            s && (s.updatedAt = new Date().toISOString()),
                n(s),
            t && t(s)
        }
        , [e]);
    return [e, i, r, a, n]
}
