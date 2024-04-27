
var uo = {}
    , QA = {
    root: "",
    lang: "en",
    fallbackLang: "en"
};
function Ng(t, e) {
    let n = Object.assign({}, QA, t);
    uo = e || uo;
    let[r,a] = se(n.lang)
        , [i,o] = se(uo)
        , [s,u] = se(!1)
        , l = p=>{
            if (i.hasOwnProperty(p))
                return;
            u(!1);
            let m = l3(n.root || "", p);
            n.getUrl && (m = n.getUrl(n.root || "", p),
                fetch(m).then(g=>g.json()).then(g=>{
                        uo[p] = g,
                            o({
                                ...uo
                            }),
                            u(!0)
                    }
                ).catch(g=>{
                        o({
                            ...uo
                        }),
                            u(!0)
                    }
                ))
        }
    ;
    return Ae(()=>{
            l(n.fallbackLang || "en"),
                l(r)
        }
        , [r]),
        {
            lang: r,
            setLang: a,
            t: (p,m)=>{
                if (!i.hasOwnProperty(r))
                    return p;
                let g = os(i, r, p);
                return g === p && r !== n.fallbackLang && (g = os(i, n.fallbackLang, p)),
                    rp(g, m)
            }
            ,
            isReady: s
        }
}
