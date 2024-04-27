
function ta(t, e) {
    var n = (t & 65535) + (e & 65535)
        , r = (t >> 16) + (e >> 16) + (n >> 16);
    return r << 16 | n & 65535
}
function nD(t, e) {
    return t << e | t >>> 32 - e
}
function yl(t, e, n, r, a, i) {
    return ta(nD(ta(ta(e, t), ta(r, i)), a), n)
}
function en(t, e, n, r, a, i, o) {
    return yl(e & n | ~e & r, t, e, a, i, o)
}
function tn(t, e, n, r, a, i, o) {
    return yl(e & r | n & ~r, t, e, a, i, o)
}
function nn(t, e, n, r, a, i, o) {
    return yl(e ^ n ^ r, t, e, a, i, o)
}
function rn(t, e, n, r, a, i, o) {
    return yl(n ^ (e | ~r), t, e, a, i, o)
}
function Tl(t, e) {
    t[e >> 5] |= 128 << e % 32,
        t[(e + 64 >>> 9 << 4) + 14] = e;
    var n, r, a, i, o, s = 1732584193, u = -271733879, l = -1732584194, c = 271733878;
    for (n = 0; n < t.length; n += 16)
        r = s,
            a = u,
            i = l,
            o = c,
            s = en(s, u, l, c, t[n], 7, -680876936),
            c = en(c, s, u, l, t[n + 1], 12, -389564586),
            l = en(l, c, s, u, t[n + 2], 17, 606105819),
            u = en(u, l, c, s, t[n + 3], 22, -1044525330),
            s = en(s, u, l, c, t[n + 4], 7, -176418897),
            c = en(c, s, u, l, t[n + 5], 12, 1200080426),
            l = en(l, c, s, u, t[n + 6], 17, -1473231341),
            u = en(u, l, c, s, t[n + 7], 22, -45705983),
            s = en(s, u, l, c, t[n + 8], 7, 1770035416),
            c = en(c, s, u, l, t[n + 9], 12, -1958414417),
            l = en(l, c, s, u, t[n + 10], 17, -42063),
            u = en(u, l, c, s, t[n + 11], 22, -1990404162),
            s = en(s, u, l, c, t[n + 12], 7, 1804603682),
            c = en(c, s, u, l, t[n + 13], 12, -40341101),
            l = en(l, c, s, u, t[n + 14], 17, -1502002290),
            u = en(u, l, c, s, t[n + 15], 22, 1236535329),
            s = tn(s, u, l, c, t[n + 1], 5, -165796510),
            c = tn(c, s, u, l, t[n + 6], 9, -1069501632),
            l = tn(l, c, s, u, t[n + 11], 14, 643717713),
            u = tn(u, l, c, s, t[n], 20, -373897302),
            s = tn(s, u, l, c, t[n + 5], 5, -701558691),
            c = tn(c, s, u, l, t[n + 10], 9, 38016083),
            l = tn(l, c, s, u, t[n + 15], 14, -660478335),
            u = tn(u, l, c, s, t[n + 4], 20, -405537848),
            s = tn(s, u, l, c, t[n + 9], 5, 568446438),
            c = tn(c, s, u, l, t[n + 14], 9, -1019803690),
            l = tn(l, c, s, u, t[n + 3], 14, -187363961),
            u = tn(u, l, c, s, t[n + 8], 20, 1163531501),
            s = tn(s, u, l, c, t[n + 13], 5, -1444681467),
            c = tn(c, s, u, l, t[n + 2], 9, -51403784),
            l = tn(l, c, s, u, t[n + 7], 14, 1735328473),
            u = tn(u, l, c, s, t[n + 12], 20, -1926607734),
            s = nn(s, u, l, c, t[n + 5], 4, -378558),
            c = nn(c, s, u, l, t[n + 8], 11, -2022574463),
            l = nn(l, c, s, u, t[n + 11], 16, 1839030562),
            u = nn(u, l, c, s, t[n + 14], 23, -35309556),
            s = nn(s, u, l, c, t[n + 1], 4, -1530992060),
            c = nn(c, s, u, l, t[n + 4], 11, 1272893353),
            l = nn(l, c, s, u, t[n + 7], 16, -155497632),
            u = nn(u, l, c, s, t[n + 10], 23, -1094730640),
            s = nn(s, u, l, c, t[n + 13], 4, 681279174),
            c = nn(c, s, u, l, t[n], 11, -358537222),
            l = nn(l, c, s, u, t[n + 3], 16, -722521979),
            u = nn(u, l, c, s, t[n + 6], 23, 76029189),
            s = nn(s, u, l, c, t[n + 9], 4, -640364487),
            c = nn(c, s, u, l, t[n + 12], 11, -421815835),
            l = nn(l, c, s, u, t[n + 15], 16, 530742520),
            u = nn(u, l, c, s, t[n + 2], 23, -995338651),
            s = rn(s, u, l, c, t[n], 6, -198630844),
            c = rn(c, s, u, l, t[n + 7], 10, 1126891415),
            l = rn(l, c, s, u, t[n + 14], 15, -1416354905),
            u = rn(u, l, c, s, t[n + 5], 21, -57434055),
            s = rn(s, u, l, c, t[n + 12], 6, 1700485571),
            c = rn(c, s, u, l, t[n + 3], 10, -1894986606),
            l = rn(l, c, s, u, t[n + 10], 15, -1051523),
            u = rn(u, l, c, s, t[n + 1], 21, -2054922799),
            s = rn(s, u, l, c, t[n + 8], 6, 1873313359),
            c = rn(c, s, u, l, t[n + 15], 10, -30611744),
            l = rn(l, c, s, u, t[n + 6], 15, -1560198380),
            u = rn(u, l, c, s, t[n + 13], 21, 1309151649),
            s = rn(s, u, l, c, t[n + 4], 6, -145523070),
            c = rn(c, s, u, l, t[n + 11], 10, -1120210379),
            l = rn(l, c, s, u, t[n + 2], 15, 718787259),
            u = rn(u, l, c, s, t[n + 9], 21, -343485551),
            s = ta(s, r),
            u = ta(u, a),
            l = ta(l, i),
            c = ta(c, o);
    return [s, u, l, c]
}
function D3(t) {
    var e, n = "", r = t.length * 32;
    for (e = 0; e < r; e += 8)
        n += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
    return n
}
function dp(t) {
    var e, n = [];
    for (n[(t.length >> 2) - 1] = void 0,
             e = 0; e < n.length; e += 1)
        n[e] = 0;
    var r = t.length * 8;
    for (e = 0; e < r; e += 8)
        n[e >> 5] |= (t.charCodeAt(e / 8) & 255) << e % 32;
    return n
}
function rD(t) {
    return D3(Tl(dp(t), t.length * 8))
}
function aD(t, e) {
    var n, r = dp(t), a = [], i = [], o;
    for (a[15] = i[15] = void 0,
         r.length > 16 && (r = Tl(r, t.length * 8)),
             n = 0; n < 16; n += 1)
        a[n] = r[n] ^ 909522486,
            i[n] = r[n] ^ 1549556828;
    return o = Tl(a.concat(dp(e)), 512 + e.length * 8),
        D3(Tl(i.concat(o), 512 + 128))
}
function A3(t) {
    var e = "0123456789abcdef", n = "", r, a;
    for (a = 0; a < t.length; a += 1)
        r = t.charCodeAt(a),
            n += e.charAt(r >>> 4 & 15) + e.charAt(r & 15);
    return n
}
function pp(t) {
    return unescape(encodeURIComponent(t))
}
function k3(t) {
    return rD(pp(t))
}
function iD(t) {
    return A3(k3(t))
}
function P3(t, e) {
    return aD(pp(t), pp(e))
}
function oD(t, e) {
    return A3(P3(t, e))
}
function Ln(t, e, n) {
    return e ? n ? P3(e, t) : oD(e, t) : n ? k3(t) : iD(t)
}
