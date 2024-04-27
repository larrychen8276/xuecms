
var JA = 0;
function w(t, e, n, r, a) {
    var i, o, s = {};
    for (o in e)
        o == "ref" ? i = e[o] : s[o] = e[o];
    var u = {
        type: t,
        props: s,
        key: n,
        ref: i,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: --JA,
        __source: a,
        __self: r
    };
    if (typeof t == "function" && (i = t.defaultProps))
        for (o in i)
            s[o] === void 0 && (s[o] = i[o]);
    /*
    return Fe.vnode && Fe.vnode(u),
        u
     */
    return undefined, u
}
