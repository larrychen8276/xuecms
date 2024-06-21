var ys, wt, Cp, O1, Ts = 0, W1 = [], jl = [], z1 = Fe.__b, N1 = Fe.__r, U1 = Fe.diffed, q1 = Fe.__c, j1 = Fe.unmount;
function Wl(t, e) {
    Fe.__h && Fe.__h(wt, t, Ts || e),
        Ts = 0;
    var n = wt.__H || (wt.__H = {
        __: [],
        __h: []
    });
    return t >= n.__.length && n.__.push({
        __V: jl
    }),
        n.__[t]
}
function se(t) {
    return Ts = 1,
        FD(G1, t)
}
function FD(t, e, n) {
    var r = Wl(ys++, 2);
    if (r.t = t,
    !r.__c && (r.__ = [n ? n(e) : G1(void 0, e), function(i) {
        var o = r.__N ? r.__N[0] : r.__[0]
            , s = r.t(o, i);
        o !== s && (r.__N = [s, r.__[1]],
            r.__c.setState({}))
    }
    ],
        r.__c = wt,
        !wt.u)) {
        wt.u = !0;
        var a = wt.shouldComponentUpdate;
        wt.shouldComponentUpdate = function(i, o, s) {
            if (!r.__c.__H)
                return !0;
            var u = r.__c.__H.__.filter(function(c) {
                return c.__c
            });
            if (u.every(function(c) {
                return !c.__N
            }))
                return !a || a.call(this, i, o, s);
            var l = !1;
            return u.forEach(function(c) {
                if (c.__N) {
                    var p = c.__[0];
                    c.__ = c.__N,
                        c.__N = void 0,
                    p !== c.__[0] && (l = !0)
                }
            }),
            !!l && (!a || a.call(this, i, o, s))
        }
    }
    return r.__N || r.__
}
function Ae(t, e) {
    var n = Wl(ys++, 3);
    !Fe.__s && K1(n.__H, e) && (n.__ = t,
        n.i = e,
        wt.__H.__h.push(n))
}
function $e(t) {
    return Ts = 5,
        Ue(function() {
            return {
                current: t
            }
        }, [])
}
function Ue(t, e) {
    var n = Wl(ys++, 7);
    return K1(n.__H, e) ? (n.__V = t(),
        n.i = e,
        n.__h = t,
        n.__V) : n.__
}
function Ve(t, e) {
    return Ts = 8,
        Ue(function() {
            return t
        }, e)
}
function Kl(t) {
    var e = wt.context[t.__c]
        , n = Wl(ys++, 9);
    return n.c = t,
        e ? (n.__ == null && (n.__ = !0,
            e.sub(wt)),
            e.props.value) : t.__
}
function MD() {
    for (var t; t = W1.shift(); )
        if (t.__P && t.__H)
            try {
                t.__H.__h.forEach(Hl),
                    t.__H.__h.forEach(wp),
                    t.__H.__h = []
            } catch (e) {
                t.__H.__h = [],
                    Fe.__e(e, t.__v)
            }
}
Fe.__b = function(t) {
    typeof t.type != "function" || t.o || t.type === jt ? t.o || (t.o = t.__ && t.__.o ? t.__.o : "") : t.o = (t.__ && t.__.o ? t.__.o : "") + (t.__ && t.__.__k ? t.__.__k.indexOf(t) : 0),
        wt = null,
    z1 && z1(t)
}
    ,
    Fe.__r = function(t) {
        N1 && N1(t),
            ys = 0;
        var e = (wt = t.__c).__H;
        e && (Cp === wt ? (e.__h = [],
            wt.__h = [],
            e.__.forEach(function(n) {
                n.__N && (n.__ = n.__N),
                    n.__V = jl,
                    n.__N = n.i = void 0
            })) : (e.__h.forEach(Hl),
            e.__h.forEach(wp),
            e.__h = [])),
            Cp = wt
    }
    ,
    Fe.diffed = function(t) {
        U1 && U1(t);
        var e = t.__c;
        e && e.__H && (e.__H.__h.length && (W1.push(e) !== 1 && O1 === Fe.requestAnimationFrame || ((O1 = Fe.requestAnimationFrame) || BD)(MD)),
            e.__H.__.forEach(function(n) {
                n.i && (n.__H = n.i),
                n.__V !== jl && (n.__ = n.__V),
                    n.i = void 0,
                    n.__V = jl
            })),
            Cp = wt = null
    }
    ,
    Fe.__c = function(t, e) {
        e.some(function(n) {
            try {
                n.__h.forEach(Hl),
                    n.__h = n.__h.filter(function(r) {
                        return !r.__ || wp(r)
                    })
            } catch (r) {
                e.some(function(a) {
                    a.__h && (a.__h = [])
                }),
                    e = [],
                    Fe.__e(r, n.__v)
            }
        }),
        q1 && q1(t, e)
    }
    ,
    Fe.unmount = function(t) {
        j1 && j1(t);
        var e, n = t.__c;
        n && n.__H && (n.__H.__.forEach(function(r) {
            try {
                Hl(r)
            } catch (a) {
                e = a
            }
        }),
            n.__H = void 0,
        e && Fe.__e(e, n.__v))
    }
;
var H1 = typeof requestAnimationFrame == "function";
function BD(t) {
    var e, n = function() {
        clearTimeout(r),
        H1 && cancelAnimationFrame(e),
            setTimeout(t)
    }, r = setTimeout(n, 100);
    H1 && (e = requestAnimationFrame(n))
}
function Hl(t) {
    var e = wt
        , n = t.__c;
    typeof n == "function" && (t.__c = void 0,
        n()),
        wt = e
}
function wp(t) {
    var e = wt;
    t.__c = t.__(),
        wt = e
}
function K1(t, e) {
    return !t || t.length !== e.length || e.some(function(n, r) {
        return n !== t[r]
    })
}
function G1(t, e) {
    return typeof e == "function" ? e(t) : e
}
