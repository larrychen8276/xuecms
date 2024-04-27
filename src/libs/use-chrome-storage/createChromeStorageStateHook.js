
function Cm(t, e, n) {
    let r = [];
    return function() {
        let[i,o,s,u] = Kc(t, e, n)
            , l = Ve(c=>{
                for (let p of r)
                    p(c)
            }
            , []);
        return Ae(()=>(r.push(o),
                ()=>{
                    r.splice(r.indexOf(o), 1)
                }
        ), [o]),
            [i, l, s, u]
    }
}
