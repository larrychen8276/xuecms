
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
