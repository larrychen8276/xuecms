function Kc(t, e, n) {
    let[r] = se(()=>typeof e == "function" ? e() : e)
        , [a] = se(n)
        , [i,o] = se(r)
        , [s,u] = se(!1)
        , [l,c] = se("");
    Ae(()=>{
            Em.get(t, r, a).then(m=>{
                    m[t] && o(m[t]),
                        u(!0),
                        c("")
                }
            ).catch(m=>{
                    u(!1),
                        c(m)
                }
            )
        }
        , [t, r, a]);
    let p = Ve(m=>{
            let g = typeof m == "function" ? m(i) : m;
            B.debug("new settings", g),
                Em.set(t, g, a).then(()=>{
                        o(g),
                            u(!0),
                            c("")
                    }
                ).catch(f=>{
                        o(g),
                            u(!1),
                            c(f)
                    }
                )
        }
        , [a, t, i]);
    return [i, p, s, l]
}
