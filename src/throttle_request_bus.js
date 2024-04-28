
var nc = new Map;
async function ug(t) {
    let e = t.url;
    if (t.method && (e += t.method),
    t.body && (e += Ln(t.body)),
        nc.has(e))
        return nc.get(e);
    let n = ce(t);
    nc.set(e, n);
    try {
        return await n
    } catch (r) {
        throw r
    } finally {
        setTimeout(()=>{
                nc.delete(e)
            }
            , 3e3)
    }
}
async function K2(t) {
    return ug(t)
}

async function rc(t) {
    if (He()) {
        let n = s1();
        if (n)
            try {
                return await n.ask("throttleRequest", t)
            } catch (r) {
                throw B.error("can not comunicate with root frame, use strict limiter", r),
                    r
            }
        else
            return ug(t)
    } else
        return ug(t)
}
