
function $D(t, e) {
    return e ? t + (e - t % e) : t
}
function VD(t, e) {
    return t.split(e).length - 1
}
function zp(t) {
    let e = Date.now()
        , n = 1;
    for (let r of t)
        n += VD(r, "i");
    return $D(e, n)
}
function YD(t, e) {
    return Math.floor(Math.random() * (e - t + 1)) + t
}
function Np() {
    return YD(1e6, 1e8)
}
