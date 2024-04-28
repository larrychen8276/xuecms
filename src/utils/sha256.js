
function tr(t) {
    return Promise.resolve(sha256(t))
}
function Jl(t) {
    return Array.from(new Uint8Array(t)).map(r=>r.toString(16).padStart(2, "0")).join("")
}
function pa(t, e) {
    let n = sha256.hmac.create(e);
    return n.update(t),
        Promise.resolve(n.array())
}

async function p2(t, e) {
    let n = await pa(t, e);
    return Jl(n)
}

async function Zl(t, e) {
    let n = KD(e)
        , r = await pa(t, n);
    return Jl(r)
}
function KD(t) {
    let e = [];
    return t.replace(/../g, function(n) {
        return e.push(parseInt(n, 16)),
            ""
    }),
        new Uint8Array(e).buffer
}
