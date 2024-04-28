
var Gb = {}.hasOwnProperty;
function cw(t) {
    return t == null ? "" : Kb(String(t).replace(/[\u0021-\u0040]+/g, " ")).trim().toLowerCase()
}
function dw(t) {
    return Hb(" " + cw(t) + " ")
}
function pw(t) {
    let e = dw(t)
        , n = {}
        , r = -1;
    for (; ++r < e.length; )
        Gb.call(n, e[r]) ? n[e[r]]++ : n[e[r]] = 1;
    return n
}
function $b(t) {
    let e = pw(t), n = [], r;
    for (r in e)
        Gb.call(e, r) && n.push([r, e[r]]);
    return n.sort(gw),
        n
}
function gw(t, e) {
    return t[1] - e[1]
}
