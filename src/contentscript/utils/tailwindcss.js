var wm;
function Im(t) {
    return [...t.v, (t.i ? "!" : "") + t.n].join(":")
}
function uv(t, e=",") {
    return t.map(Im).join(e)
}
var lv = typeof CSS < "u" && CSS.escape || (t=>t.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
function Vc(t) {
    for (var e = 9, n = t.length; n--; )
        e = Math.imul(e ^ t.charCodeAt(n), 1597334677);
    return "#" + ((e ^ e >>> 9) >>> 0).toString(36)
}
function Yc(t, e="@media ") {
    return e + Mn(t).map(n=>(typeof n == "string" && (n = {
        min: n
    }),
    n.raw || Object.keys(n).map(r=>`(${r}-width:${n[r]})`).join(" and "))).join(",")
}
function Mn(t=[]) {
    return Array.isArray(t) ? t : t == null ? [] : [t]
}
function n8() {}
var $t = {
    d: 0,
    b: 134217728,
    c: 268435456,
    a: 671088640,
    u: 805306368,
    o: 939524096
};
function cv(t) {
    return t.match(/[-=:;]/g)?.length || 0
}
function _m(t) {
    return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(t) ? Math.max(0, 29.63 * (+RegExp.$1 / (RegExp.$2 ? 15 : 1)) ** .137 - 43) : 0, 15) << 22 | Math.min(cv(t), 15) << 18
}
var r8 = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire"];
function Rm({n: t, i: e, v: n=[]}, r, a, i) {
    t && (t = Im({
        n: t,
        i: e,
        v: n
    })),
        i = [...Mn(i)];
    for (let s of n) {
        let u = r.theme("screens", s);
        for (let l of Mn(u && Yc(u) || r.v(s))) {
            var o;
            i.push(l),
                a |= u ? 67108864 | _m(l) : s == "dark" ? 1073741824 : l[0] == "@" ? _m(l) : (o = l,
                1 << ~(/:([a-z-]+)/.test(o) && ~r8.indexOf(RegExp.$1.slice(2, 7)) || -18))
        }
    }
    return {
        n: t,
        p: a,
        r: i,
        i: e
    }
}
var Om = new Map;
function ev(t) {
    if (t.d) {
        let e = []
            , n = Dm(t.r.reduce((r,a)=>a[0] == "@" ? (e.push(a),
            r) : a ? Dm(r, i=>Dm(a, o=>{
                let s = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o);
                if (s) {
                    let u = i.indexOf(s[1]);
                    return ~u ? i.slice(0, u) + s[0] + i.slice(u + s[1].length) : Am(i, o)
                }
                return Am(o, i)
            }
        )) : r, "&"), r=>Am(r, t.n ? "." + lv(t.n) : ""));
        return n && e.push(n.replace(/:merge\((.+?)\)/g, "$1")),
            e.reduceRight((r,a)=>a + "{" + r + "}", t.d)
    }
}
function Dm(t, e) {
    return t.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (n,r,a)=>e(r) + a)
}
function Am(t, e) {
    return t.replace(/&/g, e)
}
var tv = new Intl.Collator("en",{
    numeric: !0
});
function a8(t, e) {
    for (var n = 0, r = t.length; n < r; ) {
        let a = r + n >> 1;
        0 >= dv(t[a], e) ? n = a + 1 : r = a
    }
    return r
}
function dv(t, e) {
    let n = t.p & $t.o;
    return n == (e.p & $t.o) && (n == $t.b || n == $t.o) ? 0 : t.p - e.p || t.o - e.o || tv.compare(nv(t.n), nv(e.n)) || tv.compare(rv(t.n), rv(e.n))
}
function nv(t) {
    return (t || "").split(/:/).pop().split("/").pop() || "\0"
}
function rv(t) {
    return (t || "").replace(/\W/g, e=>String.fromCharCode(127 + e.charCodeAt(0))) + "\0"
}
function km(t, e) {
    return Math.round(parseInt(t, 16) * e)
}
function Ea(t, e={}) {
    if (typeof t == "function")
        return t(e);
    let {opacityValue: n="1", opacityVariable: r} = e
        , a = r ? `var(${r})` : n;
    if (t.includes("<alpha-value>"))
        return t.replace("<alpha-value>", a);
    if (t[0] == "#" && (t.length == 4 || t.length == 7)) {
        let i = (t.length - 1) / 3
            , o = [17, 1, .062272][i - 1];
        return `rgba(${[km(t.substr(1, i), o), km(t.substr(1 + i, i), o), km(t.substr(1 + 2 * i, i), o), a]})`
    }
    return a == "1" ? t : a == "0" ? "#0000" : t.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${a})`)
}
function pv(t, e, n, r, a=[]) {
    return function i(o, {n: s, p: u, r: l=[], i: c}, p) {
        let m = []
            , g = ""
            , f = 0
            , T = 0;
        for (let E in o || {}) {
            var b, h;
            let D = o[E];
            if (E[0] == "@") {
                if (!D)
                    continue;
                if (E[1] == "a") {
                    m.push(...mv(s, u, Nm("" + D), p, u, l, c, !0));
                    continue
                }
                if (E[1] == "l") {
                    for (let M of Mn(D))
                        m.push(...i(M, {
                            n: s,
                            p: (b = $t[E[7]],
                            u & ~$t.o | b),
                            r: E[7] == "d" ? [] : l,
                            i: c
                        }, p));
                    continue
                }
                if (E[1] == "i") {
                    m.push(...Mn(D).map(M=>({
                        p: -1,
                        o: 0,
                        r: [],
                        d: E + " " + M
                    })));
                    continue
                }
                if (E[1] == "k") {
                    m.push({
                        p: $t.d,
                        o: 0,
                        r: [E],
                        d: i(D, {
                            p: $t.d
                        }, p).map(ev).join("")
                    });
                    continue
                }
                if (E[1] == "f") {
                    m.push(...Mn(D).map(M=>({
                        p: $t.d,
                        o: 0,
                        r: [E],
                        d: i(M, {
                            p: $t.d
                        }, p).map(ev).join("")
                    })));
                    continue
                }
            }
            if (typeof D != "object" || Array.isArray(D))
                E == "label" && D ? s = D + Vc(JSON.stringify([u, c, o])) : (D || D === 0) && (E = E.replace(/[A-Z]/g, M=>"-" + M.toLowerCase()),
                    T += 1,
                    f = Math.max(f, (h = E)[0] == "-" ? 0 : cv(h) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(h) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1),
                    g += (g ? ";" : "") + Mn(D).map(M=>p.s(E, gv("" + M, p.theme) + (c ? " !important" : ""))).join(";"));
            else if (E[0] == "@" || E.includes("&")) {
                let M = u;
                E[0] == "@" && (E = E.replace(/\bscreen\(([^)]+)\)/g, (I,S)=>{
                        let v = p.theme("screens", S);
                        return v ? (M |= 67108864,
                            Yc(v, "")) : I
                    }
                ),
                    M |= _m(E)),
                    m.push(...i(D, {
                        n: s,
                        p: M,
                        r: [...l, E],
                        i: c
                    }, p))
            } else
                m.push(...i(D, {
                    p: u,
                    r: [...l, E]
                }, p))
        }
        return m.unshift({
            n: s,
            p: u,
            o: Math.max(0, 15 - T) + 1.5 * Math.min(f || 15, 15),
            r: l,
            d: g
        }),
            m.sort(dv)
    }(t, Rm(e, n, r, a), n)
}
function gv(t, e) {
    return t.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (n,r,a,i,o="")=>{
            let s = e(a, o);
            return typeof s == "function" && /color|fill|stroke/i.test(a) ? Ea(s) : "" + Mn(s).filter(u=>Object(u) !== u)
        }
    )
}
function zm(t, e) {
    let n, r = [];
    for (let a of t)
        a.d && a.n ? n?.p == a.p && "" + n.r == "" + a.r ? (n.c = [n.c, a.c].filter(Boolean).join(" "),
            n.d = n.d + ";" + a.d) : r.push(n = {
            ...a,
            n: a.n && e
        }) : r.push({
            ...a,
            n: a.n && e
        });
    return r
}
function Fm(t, e, n=$t.u, r, a) {
    let i = [];
    for (let o of t)
        for (let s of function(u, l, c, p, m) {
            u = {
                ...u,
                i: u.i || m
            };
            let g = function(f, T) {
                let b = Om.get(f.n);
                return b ? b(f, T) : T.r(f.n, f.v[0] == "dark")
            }(u, l);
            return g ? typeof g == "string" ? ({r: p, p: c} = Rm(u, l, c, p),
                zm(Fm(Nm(g), l, c, p, u.i), u.n)) : Array.isArray(g) ? g.map(f=>{
                    var T, b;
                    return {
                        o: 0,
                        ...f,
                        r: [...Mn(p), ...Mn(f.r)],
                        p: (T = c,
                            b = f.p ?? c,
                        T & ~$t.o | b)
                    }
                }
            ) : pv(g, u, l, c, p) : [{
                c: Im(u),
                p: 0,
                o: 0,
                r: []
            }]
        }(o, e, n, r, a))
            i.splice(a8(i, s), 0, s);
    return i
}
function mv(t, e, n, r, a, i, o, s) {
    return zm((s ? n.flatMap(u=>Fm([u], r, a, i, o)) : Fm(n, r, a, i, o)).map(u=>u.p & $t.o && (u.n || e == $t.b) ? {
        ...u,
        p: u.p & ~$t.o | e,
        o: 0
    } : u), t)
}
function i8(t, e, n, r) {
    var a;
    return a = (i,o)=>{
        let {n: s, p: u, r: l, i: c} = Rm(i, o, e);
        return n && mv(s, e, n, o, u, l, c, r)
    }
        ,
        Om.set(t, a),
        t
}
function Pm(t, e, n) {
    if (t[t.length - 1] != "(") {
        let r = []
            , a = !1
            , i = !1
            , o = "";
        for (let s of t)
            if (!(s == "(" || /[~@]$/.test(s))) {
                if (s[0] == "!" && (s = s.slice(1),
                    a = !a),
                    s.endsWith(":")) {
                    r[s == "dark:" ? "unshift" : "push"](s.slice(0, -1));
                    continue
                }
                s[0] == "-" && (s = s.slice(1),
                    i = !i),
                s.endsWith("-") && (s = s.slice(0, -1)),
                s && s != "&" && (o += (o && "-") + s)
            }
        o && (i && (o = "-" + o),
            e[0].push({
                n: o,
                v: r.filter(o8),
                i: a
            }))
    }
}
function o8(t, e, n) {
    return n.indexOf(t) == e
}
var av = new Map;
function Nm(t) {
    let e = av.get(t);
    if (!e) {
        let n = []
            , r = [[]]
            , a = 0
            , i = 0
            , o = null
            , s = 0
            , u = (l,c=0)=>{
                a != s && (n.push(t.slice(a, s + c)),
                l && Pm(n, r)),
                    a = s + 1
            }
        ;
        for (; s < t.length; s++) {
            let l = t[s];
            if (i)
                t[s - 1] != "\\" && (i += +(l == "[") || -(l == "]"));
            else if (l == "[")
                i += 1;
            else if (o)
                t[s - 1] != "\\" && o.test(t.slice(s)) && (o = null,
                    a = s + RegExp.lastMatch.length);
            else if (l == "/" && t[s - 1] != "\\" && (t[s + 1] == "*" || t[s + 1] == "/"))
                o = t[s + 1] == "*" ? /^\*\// : /^[\r\n]/;
            else if (l == "(")
                u(),
                    n.push(l);
            else if (l == ":")
                t[s + 1] != ":" && u(!1, 1);
            else if (/[\s,)]/.test(l)) {
                u(!0);
                let c = n.lastIndexOf("(");
                if (l == ")") {
                    let p = n[c - 1];
                    if (/[~@]$/.test(p)) {
                        let m = r.shift();
                        n.length = c,
                            Pm([...n, "#"], r);
                        let {v: g} = r[0].pop();
                        for (let f of m)
                            f.v.splice(+(f.v[0] == "dark") - +(g[0] == "dark"), g.length);
                        Pm([...n, i8(p.length > 1 ? p.slice(0, -1) + Vc(JSON.stringify([p, m])) : p + "(" + uv(m) + ")", $t.a, m, /@$/.test(p))], r)
                    }
                    c = n.lastIndexOf("(", c - 1)
                }
                n.length = c + 1
            } else
                /[~@]/.test(l) && t[s + 1] == "(" && r.unshift([])
        }
        u(!0),
            av.set(t, e = r[0])
    }
    return e
}
function fv(t, e, n) {
    return e.reduce((r,a,i)=>r + n(a) + t[i + 1], t[0])
}
function hv(t, e) {
    return Array.isArray(t) && Array.isArray(t.raw) ? fv(t, e, n=>Lm(n).trim()) : e.filter(Boolean).reduce((n,r)=>n + Lm(r), t ? Lm(t) : "")
}
function Lm(t) {
    let e, n = "";
    if (t && typeof t == "object")
        if (Array.isArray(t))
            (e = hv(t[0], t.slice(1))) && (n += " " + e);
        else
            for (let r in t)
                t[r] && (n += " " + r);
    else
        t != null && typeof t != "boolean" && (n += " " + t);
    return n
}
var pse = bv("@")
    , gse = bv("~");
function bv(t) {
    return new Proxy(function(n, ...r) {
            return e("", n, r)
        }
        ,{
            get(n, r) {
                return r in n ? n[r] : function(a, ...i) {
                    return e(r, a, i)
                }
            }
        });
    function e(n, r, a) {
        return uv(Nm(n + t + "(" + hv(r, a) + ")"))
    }
}
function Mm(t, e) {
    return Array.isArray(t) ? iv(fv(t, e, n=>n != null && typeof n != "boolean" ? n : "")) : typeof t == "string" ? iv(t) : [t]
}
var s8 = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
function iv(t) {
    let e;
    t = t.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
    let n = [{}]
        , r = [n[0]]
        , a = [];
    for (; e = s8.exec(t); )
        e[4] && (n.shift(),
            a.shift()),
            e[3] ? (a.unshift(e[3]),
                n.unshift({}),
                r.push(a.reduce((i,o)=>({
                    [o]: i
                }), n[0]))) : e[4] || (n[0][e[1]] && (n.unshift({}),
                r.push(a.reduce((i,o)=>({
                    [o]: i
                }), n[0]))),
                n[0][e[1]] = e[2]);
    return r
}
function Tv(t, ...e) {
    var n;
    let r = Mm(t, e)
        , a = (r.find(i=>i.label)?.label || "css") + Vc(JSON.stringify(r));
    return n = (i,o)=>zm(r.flatMap(s=>pv(s, i, o, $t.o)), a),
        Om.set(a, n),
        a
}
var mse = new Proxy(function(t, e) {
        return ov("animation", t, e)
    }
    ,{
        get(t, e) {
            return e in t ? t[e] : function(n, r) {
                return ov(e, n, r)
            }
        }
    });
function ov(t, e, n) {
    return {
        toString() {
            return Tv({
                label: t,
                "@layer components": {
                    ...typeof e == "object" ? e : {
                        animation: e
                    },
                    animationName: "" + n
                }
            })
        }
    }
}
function X(t, e, n) {
    return [t, u8(e, n)]
}
function u8(t, e) {
    return typeof t == "function" ? t : typeof t == "string" && /^[\w-]+$/.test(t) ? (n,r)=>({
        [t]: e ? e(n, r) : Bm(n, 1)
    }) : n=>t || {
        [n[1]]: Bm(n, 2)
    }
}
function Bm(t, e, n=t.slice(e).find(Boolean) || t.$$ || t.input) {
    return t.input[0] == "-" ? `calc(${n} * -1)` : n
}
function te(t, e, n, r) {
    return [t, l8(e, n, r)]
}
function l8(t, e, n) {
    let r = typeof e == "string" ? (a,i)=>({
        [e]: n ? n(a, i) : a._
    }) : e || (({1: a, _: i},o,s)=>({
        [a || s]: i
    }));
    return (a,i)=>{
        let o = yv(t || a[1])
            , s = i.theme(o, a.$$) ?? So(a.$$, o, i);
        if (s != null)
            return a._ = Bm(a, 0, s),
                r(a, i, o)
    }
}
function It(t, e={}, n) {
    return [t, c8(e, n)]
}
function c8(t={}, e) {
    return (n,r)=>{
        let {section: a=yv(n[0]).replace("-", "") + "Color"} = t
            , [i,o] = d8(n.$$);
        if (!i)
            return;
        let s = r.theme(a, i) || So(i, a, r);
        if (!s || typeof s == "object")
            return;
        let {opacityVariable: u=`--tw-${n[0].replace(/-$/, "")}-opacity`, opacitySection: l=a.replace("Color", "Opacity"), property: c=a, selector: p} = t
            , m = r.theme(l, o || "DEFAULT") || o && So(o, l, r)
            , g = e || (({_: T})=>{
                let b = Ks(c, T);
                return p ? {
                    [p]: b
                } : b
            }
        );
        n._ = {
            value: Ea(s, {
                opacityVariable: u || void 0,
                opacityValue: m || void 0
            }),
            color: T=>Ea(s, T),
            opacityVariable: u || void 0,
            opacityValue: m || void 0
        };
        let f = g(n, r);
        if (!n.dark) {
            let T = r.d(a, i, s);
            T && T !== s && (n._ = {
                value: Ea(T, {
                    opacityVariable: u || void 0,
                    opacityValue: m || "1"
                }),
                color: b=>Ea(T, b),
                opacityVariable: u || void 0,
                opacityValue: m || void 0
            },
                f = {
                    "&": f,
                    [r.v("dark")]: g(n, r)
                })
        }
        return f
    }
}
function d8(t) {
    return (t.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/) || []).slice(1)
}
function Ks(t, e) {
    let n = {};
    return typeof e == "string" ? n[t] = e : (e.opacityVariable && e.value.includes(e.opacityVariable) && (n[e.opacityVariable] = e.opacityValue || "1"),
        n[t] = e.value),
        n
}
function So(t, e, n) {
    if (t[0] == "[" && t.slice(-1) == "]") {
        if (t = $c(gv(t.slice(1, -1), n.theme)),
            !e)
            return t;
        if (!(/color|fill|stroke/i.test(e) && !(/^color:/.test(t) || /^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(t)) || /image/i.test(e) && !(/^image:/.test(t) || /^[a-z-]+\(/.test(t)) || /weight/i.test(e) && !(/^(number|any):/.test(t) || /^\d+$/.test(t)) || /position/i.test(e) && /^(length|size):/.test(t)))
            return t.replace(/^[a-z-]+:/, "")
    }
}
function yv(t) {
    return t.replace(/-./g, e=>e[1].toUpperCase())
}
function $c(t) {
    return t.includes("url(") ? t.replace(/(.*?)(url\(.*?\))(.*?)/g, (e,n="",r,a="")=>$c(n) + r + $c(a)) : t.replace(/(^|[^\\])_+/g, (e,n)=>n + " ".repeat(e.length - n.length)).replace(/\\_/g, "_").replace(/(calc|min|max|clamp)\(.+\)/g, e=>e.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 "))
}
var fse = Symbol();
var vv = new Proxy(n8,{
    apply(t, e, n) {
        return wm(n[0])
    },
    get(t, e) {
        let n = wm[e];
        return typeof n == "function" ? function() {
                return n.apply(wm, arguments)
            }
            : n
    }
});
var hse = function t(e) {
    return new Proxy(function(n, ...r) {
            return sv(e, "", n, r)
        }
        ,{
            get(n, r) {
                return r === "bind" ? t : r in n ? n[r] : function(a, ...i) {
                    return sv(e, r, a, i)
                }
            }
        })
}();
function sv(t, e, n, r) {
    return {
        toString() {
            let a = Mm(n, r)
                , i = lv(e + Vc(JSON.stringify([e, a])));
            return (typeof t == "function" ? t : vv)(Tv({
                [`@keyframes ${i}`]: Mm(n, r)
            })),
                i
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var Sv = {
    screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px"
    },
    columns: {
        auto: "auto",
        "3xs": "16rem",
        "2xs": "18rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem"
    },
    spacing: {
        px: "1px",
        0: "0px",
        ...Bn(4, "rem", 4, .5, .5),
        ...Bn(12, "rem", 4, 5),
        14: "3.5rem",
        ...Bn(64, "rem", 4, 16, 4),
        72: "18rem",
        80: "20rem",
        96: "24rem"
    },
    durations: {
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1e3: "1000ms"
    },
    animation: {
        none: "none",
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0,0,0.2,1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
        bounce: "bounce 1s infinite"
    },
    aspectRatio: {
        auto: "auto",
        square: "1/1",
        video: "16/9"
    },
    backdropBlur: Ke("blur"),
    backdropBrightness: Ke("brightness"),
    backdropContrast: Ke("contrast"),
    backdropGrayscale: Ke("grayscale"),
    backdropHueRotate: Ke("hueRotate"),
    backdropInvert: Ke("invert"),
    backdropOpacity: Ke("opacity"),
    backdropSaturate: Ke("saturate"),
    backdropSepia: Ke("sepia"),
    backgroundColor: Ke("colors"),
    backgroundImage: {
        none: "none"
    },
    backgroundOpacity: Ke("opacity"),
    backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain"
    },
    blur: {
        none: "none",
        0: "0",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px"
    },
    brightness: {
        ...Bn(200, "", 100, 0, 50),
        ...Bn(110, "", 100, 90, 5),
        75: "0.75",
        125: "1.25"
    },
    borderColor: ({theme: t})=>({
        DEFAULT: t("colors.gray.200", "currentColor"),
        ...t("colors")
    }),
    borderOpacity: Ke("opacity"),
    borderRadius: {
        none: "0px",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "1/2": "50%",
        full: "9999px"
    },
    borderSpacing: Ke("spacing"),
    borderWidth: {
        DEFAULT: "1px",
        ...jn(8, "px")
    },
    boxShadow: {
        sm: "0 1px 2px 0 rgba(0,0,0,0.05)",
        DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",
        md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
        lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
        xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
        "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)",
        inner: "inset 0 2px 4px 0 rgba(0,0,0,0.05)",
        none: "0 0 #0000"
    },
    boxShadowColor: Ke("colors"),
    caretColor: Ke("colors"),
    accentColor: ({theme: t})=>({
        auto: "auto",
        ...t("colors")
    }),
    contrast: {
        ...Bn(200, "", 100, 0, 50),
        75: "0.75",
        125: "1.25"
    },
    content: {
        none: "none"
    },
    divideColor: Ke("borderColor"),
    divideOpacity: Ke("borderOpacity"),
    divideWidth: Ke("borderWidth"),
    dropShadow: {
        sm: "0 1px 1px rgba(0,0,0,0.05)",
        DEFAULT: ["0 1px 2px rgba(0,0,0,0.1)", "0 1px 1px rgba(0,0,0,0.06)"],
        md: ["0 4px 3px rgba(0,0,0,0.07)", "0 2px 2px rgba(0,0,0,0.06)"],
        lg: ["0 10px 8px rgba(0,0,0,0.04)", "0 4px 3px rgba(0,0,0,0.1)"],
        xl: ["0 20px 13px rgba(0,0,0,0.03)", "0 8px 5px rgba(0,0,0,0.08)"],
        "2xl": "0 25px 25px rgba(0,0,0,0.15)",
        none: "0 0 #0000"
    },
    fill: ({theme: t})=>({
        ...t("colors"),
        none: "none"
    }),
    grayscale: {
        DEFAULT: "100%",
        0: "0"
    },
    hueRotate: {
        0: "0deg",
        15: "15deg",
        30: "30deg",
        60: "60deg",
        90: "90deg",
        180: "180deg"
    },
    invert: {
        DEFAULT: "100%",
        0: "0"
    },
    flex: {
        1: "1 1 0%",
        auto: "1 1 auto",
        initial: "0 1 auto",
        none: "none"
    },
    flexBasis: ({theme: t})=>({
        ...t("spacing"),
        ...Gs(2, 6),
        ...Gs(12, 12),
        auto: "auto",
        full: "100%"
    }),
    flexGrow: {
        DEFAULT: 1,
        0: 0
    },
    flexShrink: {
        DEFAULT: 1,
        0: 0
    },
    fontFamily: {
        sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),
        serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),
        mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")
    },
    fontSize: {
        xs: ["0.75rem", "1rem"],
        sm: ["0.875rem", "1.25rem"],
        base: ["1rem", "1.5rem"],
        lg: ["1.125rem", "1.75rem"],
        xl: ["1.25rem", "1.75rem"],
        "2xl": ["1.5rem", "2rem"],
        "3xl": ["1.875rem", "2.25rem"],
        "4xl": ["2.25rem", "2.5rem"],
        "5xl": ["3rem", "1"],
        "6xl": ["3.75rem", "1"],
        "7xl": ["4.5rem", "1"],
        "8xl": ["6rem", "1"],
        "9xl": ["8rem", "1"]
    },
    fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900"
    },
    gap: Ke("spacing"),
    gradientColorStops: Ke("colors"),
    gridAutoColumns: {
        auto: "auto",
        min: "min-content",
        max: "max-content",
        fr: "minmax(0,1fr)"
    },
    gridAutoRows: {
        auto: "auto",
        min: "min-content",
        max: "max-content",
        fr: "minmax(0,1fr)"
    },
    gridColumn: {
        auto: "auto",
        "span-full": "1 / -1"
    },
    gridRow: {
        auto: "auto",
        "span-full": "1 / -1"
    },
    gridTemplateColumns: {
        none: "none"
    },
    gridTemplateRows: {
        none: "none"
    },
    height: ({theme: t})=>({
        ...t("spacing"),
        ...Gs(2, 6),
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
        auto: "auto",
        full: "100%",
        screen: "100vh"
    }),
    inset: ({theme: t})=>({
        ...t("spacing"),
        ...Gs(2, 4),
        auto: "auto",
        full: "100%"
    }),
    keyframes: {
        spin: {
            from: {
                transform: "rotate(0deg)"
            },
            to: {
                transform: "rotate(360deg)"
            }
        },
        ping: {
            "0%": {
                transform: "scale(1)",
                opacity: "1"
            },
            "75%,100%": {
                transform: "scale(2)",
                opacity: "0"
            }
        },
        pulse: {
            "0%,100%": {
                opacity: "1"
            },
            "50%": {
                opacity: ".5"
            }
        },
        bounce: {
            "0%, 100%": {
                transform: "translateY(-25%)",
                animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
            },
            "50%": {
                transform: "none",
                animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
            }
        }
    },
    letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em"
    },
    lineHeight: {
        ...Bn(10, "rem", 4, 3),
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2"
    },
    margin: ({theme: t})=>({
        auto: "auto",
        ...t("spacing")
    }),
    maxHeight: ({theme: t})=>({
        full: "100%",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
        screen: "100vh",
        ...t("spacing")
    }),
    maxWidth: ({theme: t, breakpoints: e})=>({
        ...e(t("screens")),
        none: "none",
        0: "0rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        full: "100%",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
        prose: "65ch"
    }),
    minHeight: {
        0: "0px",
        full: "100%",
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
        screen: "100vh"
    },
    minWidth: {
        0: "0px",
        full: "100%",
        min: "min-content",
        max: "max-content",
        fit: "fit-content"
    },
    opacity: {
        ...Bn(100, "", 100, 0, 10),
        5: "0.05",
        25: "0.25",
        75: "0.75",
        95: "0.95"
    },
    order: {
        first: "-9999",
        last: "9999",
        none: "0"
    },
    padding: Ke("spacing"),
    placeholderColor: Ke("colors"),
    placeholderOpacity: Ke("opacity"),
    outlineColor: Ke("colors"),
    outlineOffset: jn(8, "px"),
    outlineWidth: jn(8, "px"),
    ringColor: ({theme: t})=>({
        ...t("colors"),
        DEFAULT: "#3b82f6"
    }),
    ringOffsetColor: Ke("colors"),
    ringOffsetWidth: jn(8, "px"),
    ringOpacity: ({theme: t})=>({
        ...t("opacity"),
        DEFAULT: "0.5"
    }),
    ringWidth: {
        DEFAULT: "3px",
        ...jn(8, "px")
    },
    rotate: {
        ...jn(2, "deg"),
        ...jn(12, "deg", 3),
        ...jn(180, "deg", 45)
    },
    saturate: Bn(200, "", 100, 0, 50),
    scale: {
        ...Bn(150, "", 100, 0, 50),
        ...Bn(110, "", 100, 90, 5),
        75: "0.75",
        125: "1.25"
    },
    scrollMargin: Ke("spacing"),
    scrollPadding: Ke("spacing"),
    sepia: {
        0: "0",
        DEFAULT: "100%"
    },
    skew: {
        ...jn(2, "deg"),
        ...jn(12, "deg", 3)
    },
    space: Ke("spacing"),
    stroke: ({theme: t})=>({
        ...t("colors"),
        none: "none"
    }),
    strokeWidth: Bn(2),
    textColor: Ke("colors"),
    textDecorationColor: Ke("colors"),
    textDecorationThickness: {
        "from-font": "from-font",
        auto: "auto",
        ...jn(8, "px")
    },
    textUnderlineOffset: {
        auto: "auto",
        ...jn(8, "px")
    },
    textIndent: Ke("spacing"),
    textOpacity: Ke("opacity"),
    transitionDuration: ({theme: t})=>({
        ...t("durations"),
        DEFAULT: "150ms"
    }),
    transitionDelay: Ke("durations"),
    transitionProperty: {
        none: "none",
        all: "all",
        DEFAULT: "color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",
        colors: "color,background-color,border-color,text-decoration-color,fill,stroke",
        opacity: "opacity",
        shadow: "box-shadow",
        transform: "transform"
    },
    transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4,0,0.2,1)",
        linear: "linear",
        in: "cubic-bezier(0.4,0,1,1)",
        out: "cubic-bezier(0,0,0.2,1)",
        "in-out": "cubic-bezier(0.4,0,0.2,1)"
    },
    translate: ({theme: t})=>({
        ...t("spacing"),
        ...Gs(2, 4),
        full: "100%"
    }),
    width: ({theme: t})=>({
        min: "min-content",
        max: "max-content",
        fit: "fit-content",
        screen: "100vw",
        ...t("flexBasis")
    }),
    willChange: {
        scroll: "scroll-position"
    },
    zIndex: {
        ...Bn(50, "", 1, 0, 10),
        auto: "auto"
    }
};
function Gs(t, e) {
    let n = {};
    do
        for (var r = 1; r < t; r++)
            n[`${r}/${t}`] = Number((r / t * 100).toFixed(6)) + "%";
    while (++t <= e);
    return n
}
function jn(t, e, n=0) {
    let r = {};
    for (; n <= t; n = 2 * n || 1)
        r[n] = n + e;
    return r
}
function Bn(t, e="", n=1, r=0, a=1, i={}) {
    for (; r <= t; r += a)
        i[r] = r / n + e;
    return i
}
function Ke(t) {
    return ({theme: e})=>e(t)
}



var Bse = {
    "*,::before,::after": {
        boxSizing: "border-box",
        borderWidth: "0",
        borderStyle: "solid",
        borderColor: "theme(borderColor.DEFAULT, currentColor)"
    },
    "::before,::after": {
        "--tw-content": "''"
    },
    html: {
        lineHeight: 1.5,
        WebkitTextSizeAdjust: "100%",
        MozTabSize: "4",
        tabSize: 4,
        fontFamily: `theme(fontFamily.sans, ${Sv.fontFamily.sans})`,
        fontFeatureSettings: "theme(fontFamily.sans[1].fontFeatureSettings, normal)"
    },
    body: {
        margin: "0",
        lineHeight: "inherit"
    },
    hr: {
        height: "0",
        color: "inherit",
        borderTopWidth: "1px"
    },
    "abbr:where([title])": {
        textDecoration: "underline dotted"
    },
    "h1,h2,h3,h4,h5,h6": {
        fontSize: "inherit",
        fontWeight: "inherit"
    },
    a: {
        color: "inherit",
        textDecoration: "inherit"
    },
    "b,strong": {
        fontWeight: "bolder"
    },
    "code,kbd,samp,pre": {
        fontFamily: `theme(fontFamily.mono, ${Sv.fontFamily.mono})`,
        fontFeatureSettings: "theme(fontFamily.mono[1].fontFeatureSettings, normal)",
        fontSize: "1em"
    },
    small: {
        fontSize: "80%"
    },
    "sub,sup": {
        fontSize: "75%",
        lineHeight: 0,
        position: "relative",
        verticalAlign: "baseline"
    },
    sub: {
        bottom: "-0.25em"
    },
    sup: {
        top: "-0.5em"
    },
    table: {
        textIndent: "0",
        borderColor: "inherit",
        borderCollapse: "collapse"
    },
    "button,input,optgroup,select,textarea": {
        fontFamily: "inherit",
        fontSize: "100%",
        lineHeight: "inherit",
        color: "inherit",
        margin: "0",
        padding: "0"
    },
    "button,select": {
        textTransform: "none"
    },
    "button,[type='button'],[type='reset'],[type='submit']": {
        WebkitAppearance: "button",
        backgroundColor: "transparent",
        backgroundImage: "none"
    },
    ":-moz-focusring": {
        outline: "auto"
    },
    ":-moz-ui-invalid": {
        boxShadow: "none"
    },
    progress: {
        verticalAlign: "baseline"
    },
    "::-webkit-inner-spin-button,::-webkit-outer-spin-button": {
        height: "auto"
    },
    "[type='search']": {
        WebkitAppearance: "textfield",
        outlineOffset: "-2px"
    },
    "::-webkit-search-decoration": {
        WebkitAppearance: "none"
    },
    "::-webkit-file-upload-button": {
        WebkitAppearance: "button",
        font: "inherit"
    },
    summary: {
        display: "list-item"
    },
    "blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre": {
        margin: "0"
    },
    fieldset: {
        margin: "0",
        padding: "0"
    },
    legend: {
        padding: "0"
    },
    "ol,ul,menu": {
        listStyle: "none",
        margin: "0",
        padding: "0"
    },
    textarea: {
        resize: "vertical"
    },
    "input::placeholder,textarea::placeholder": {
        opacity: 1,
        color: "theme(colors.gray.400, #9ca3af)"
    },
    'button,[role="button"]': {
        cursor: "pointer"
    },
    ":disabled": {
        cursor: "default"
    },
    "img,svg,video,canvas,audio,iframe,embed,object": {
        display: "block",
        verticalAlign: "middle"
    },
    "img,video": {
        maxWidth: "100%",
        height: "auto"
    },
    "[hidden]": {
        display: "none"
    }
}
    , Rse = [X("\\[([-\\w]+):(.+)]", ({1: t, 2: e},n)=>({
    "@layer overrides": {
        "&": {
            [t]: So(`[${e}]`, "", n)
        }
    }
})), X("(group|peer)([~/][^-[]+)?", ({input: t},{h: e})=>[{
    c: e(t)
}]), te("aspect-", "aspectRatio"), X("container", (t,{theme: e})=>{
        let {screens: n=e("screens"), center: r, padding: a} = e("container")
            , i = {
            width: "100%",
            marginRight: r && "auto",
            marginLeft: r && "auto",
            ...o("xs")
        };
        for (let s in n) {
            let u = n[s];
            typeof u == "string" && (i[Yc(u)] = {
                "&": {
                    maxWidth: u,
                    ...o(s)
                }
            })
        }
        return i;
        function o(s) {
            let u = a && (typeof a == "string" ? a : a[s] || a.DEFAULT);
            if (u)
                return {
                    paddingRight: u,
                    paddingLeft: u
                }
        }
    }
), te("content-", "content", ({_: t})=>({
    "--tw-content": t,
    content: "var(--tw-content)"
})), X("(?:box-)?decoration-(slice|clone)", "boxDecorationBreak"), X("box-(border|content)", "boxSizing", ({1: t})=>t + "-box"), X("hidden", {
    display: "none"
}), X("table-(auto|fixed)", "tableLayout"), X(["(block|flex|table|grid|inline|contents|flow-root|list-item)", "(inline-(block|flex|table|grid))", "(table-(caption|cell|column|row|(column|row|footer|header)-group))"], "display"), "(float)-(left|right|none)", "(clear)-(left|right|none|both)", "(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)", "(isolation)-(auto)", X("isolate", "isolation"), X("object-(contain|cover|fill|none|scale-down)", "objectFit"), te("object-", "objectPosition"), X("object-(top|bottom|center|(left|right)(-(top|bottom))?)", "objectPosition", Qc), X("overscroll(-[xy])?-(auto|contain|none)", ({1: t="", 2: e})=>({
    ["overscroll-behavior" + t]: e
})), X("(static|fixed|absolute|relative|sticky)", "position"), te("-?inset(-[xy])?(?:$|-)", "inset", ({1: t, _: e})=>({
    top: t != "-x" && e,
    right: t != "-y" && e,
    bottom: t != "-x" && e,
    left: t != "-y" && e
})), te("-?(top|bottom|left|right)(?:$|-)", "inset"), X("(visible|collapse)", "visibility"), X("invisible", {
    visibility: "hidden"
}), te("-?z-", "zIndex"), X("flex-((row|col)(-reverse)?)", "flexDirection", xv), X("flex-(wrap|wrap-reverse|nowrap)", "flexWrap"), te("(flex-(?:grow|shrink))(?:$|-)"), te("(flex)-"), te("grow(?:$|-)", "flexGrow"), te("shrink(?:$|-)", "flexShrink"), te("basis-", "flexBasis"), te("-?(order)-"), "-?(order)-(\\d+)", te("grid-cols-", "gridTemplateColumns"), X("grid-cols-(\\d+)", "gridTemplateColumns", Dv), te("col-", "gridColumn"), X("col-(span)-(\\d+)", "gridColumn", wv), te("col-start-", "gridColumnStart"), X("col-start-(auto|\\d+)", "gridColumnStart"), te("col-end-", "gridColumnEnd"), X("col-end-(auto|\\d+)", "gridColumnEnd"), te("grid-rows-", "gridTemplateRows"), X("grid-rows-(\\d+)", "gridTemplateRows", Dv), te("row-", "gridRow"), X("row-(span)-(\\d+)", "gridRow", wv), te("row-start-", "gridRowStart"), X("row-start-(auto|\\d+)", "gridRowStart"), te("row-end-", "gridRowEnd"), X("row-end-(auto|\\d+)", "gridRowEnd"), X("grid-flow-((row|col)(-dense)?)", "gridAutoFlow", t=>Qc(xv(t))), X("grid-flow-(dense)", "gridAutoFlow"), te("auto-cols-", "gridAutoColumns"), te("auto-rows-", "gridAutoRows"), te("gap-x(?:$|-)", "gap", "columnGap"), te("gap-y(?:$|-)", "gap", "rowGap"), te("gap(?:$|-)", "gap"), "(justify-(?:items|self))-", X("justify-", "justifyContent", Ev), X("(content|items|self)-", t=>({
    ["align-" + t[1]]: Ev(t)
})), X("(place-(content|items|self))-", ({1: t, $$: e})=>({
    [t]: ("wun".includes(e[3]) ? "space-" : "") + e
})), te("p([xytrbl])?(?:$|-)", "padding", xo("padding")), te("-?m([xytrbl])?(?:$|-)", "margin", xo("margin")), te("-?space-(x|y)(?:$|-)", "space", ({1: t, _: e})=>({
    "&>:not([hidden])~:not([hidden])": {
        [`--tw-space-${t}-reverse`]: "0",
        ["margin-" + {
            y: "top",
            x: "left"
        }[t]]: `calc(${e} * calc(1 - var(--tw-space-${t}-reverse)))`,
        ["margin-" + {
            y: "bottom",
            x: "right"
        }[t]]: `calc(${e} * var(--tw-space-${t}-reverse))`
    }
})), X("space-(x|y)-reverse", ({1: t})=>({
    "&>:not([hidden])~:not([hidden])": {
        [`--tw-space-${t}-reverse`]: "1"
    }
})), te("w-", "width"), te("min-w-", "minWidth"), te("max-w-", "maxWidth"), te("h-", "height"), te("min-h-", "minHeight"), te("max-h-", "maxHeight"), te("font-", "fontWeight"), te("font-", "fontFamily", ({_: t})=>typeof (t = Mn(t))[1] == "string" ? {
    fontFamily: rr(t)
} : {
    fontFamily: rr(t[0]),
    ...t[1]
}), X("antialiased", {
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale"
}), X("subpixel-antialiased", {
    WebkitFontSmoothing: "auto",
    MozOsxFontSmoothing: "auto"
}), X("italic", "fontStyle"), X("not-italic", {
    fontStyle: "normal"
}), X("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)", ({1: t, 2: e="", 3: n})=>e == "normal" ? {
    fontVariantNumeric: "normal"
} : {
    ["--tw-" + (n ? "numeric-fraction" : "pt".includes(e[0]) ? "numeric-spacing" : e ? "numeric-figure" : t)]: t,
    fontVariantNumeric: "var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)",
    ...Ca({
        "--tw-ordinal": "var(--tw-empty,/*!*/ /*!*/)",
        "--tw-slashed-zero": "var(--tw-empty,/*!*/ /*!*/)",
        "--tw-numeric-figure": "var(--tw-empty,/*!*/ /*!*/)",
        "--tw-numeric-spacing": "var(--tw-empty,/*!*/ /*!*/)",
        "--tw-numeric-fraction": "var(--tw-empty,/*!*/ /*!*/)"
    })
}), te("tracking-", "letterSpacing"), te("leading-", "lineHeight"), X("list-(inside|outside)", "listStylePosition"), te("list-", "listStyleType"), X("list-", "listStyleType"), te("placeholder-opacity-", "placeholderOpacity", ({_: t})=>({
    "&::placeholder": {
        "--tw-placeholder-opacity": t
    }
})), It("placeholder-", {
    property: "color",
    selector: "&::placeholder"
}), X("text-(left|center|right|justify|start|end)", "textAlign"), X("text-(ellipsis|clip)", "textOverflow"), te("text-opacity-", "textOpacity", "--tw-text-opacity"), It("text-", {
    property: "color"
}), te("text-", "fontSize", ({_: t})=>typeof t == "string" ? {
    fontSize: t
} : {
    fontSize: t[0],
    ...typeof t[1] == "string" ? {
        lineHeight: t[1]
    } : t[1]
}), te("indent-", "textIndent"), X("(overline|underline|line-through)", "textDecorationLine"), X("no-underline", {
    textDecorationLine: "none"
}), te("underline-offset-", "textUnderlineOffset"), It("decoration-", {
    section: "textDecorationColor",
    opacityVariable: !1,
    opacitySection: "opacity"
}), te("decoration-", "textDecorationThickness"), X("decoration-", "textDecorationStyle"), X("(uppercase|lowercase|capitalize)", "textTransform"), X("normal-case", {
    textTransform: "none"
}), X("truncate", {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
}), X("align-", "verticalAlign"), X("whitespace-", "whiteSpace"), X("break-normal", {
    wordBreak: "normal",
    overflowWrap: "normal"
}), X("break-words", {
    overflowWrap: "break-word"
}), X("break-all", {
    wordBreak: "break-all"
}), X("break-keep", {
    wordBreak: "keep-all"
}), It("caret-", {
    opacityVariable: !1,
    opacitySection: "opacity"
}), It("accent-", {
    opacityVariable: !1,
    opacitySection: "opacity"
}), X("bg-gradient-to-([trbl]|[tb][rl])", "backgroundImage", ({1: t})=>`linear-gradient(to ${ri(t, " ")},var(--tw-gradient-stops))`), It("from-", {
    section: "gradientColorStops",
    opacityVariable: !1,
    opacitySection: "opacity"
}, ({_: t})=>({
    "--tw-gradient-from": t.value,
    "--tw-gradient-to": t.color({
        opacityValue: "0"
    }),
    "--tw-gradient-stops": "var(--tw-gradient-from),var(--tw-gradient-to)"
})), It("via-", {
    section: "gradientColorStops",
    opacityVariable: !1,
    opacitySection: "opacity"
}, ({_: t})=>({
    "--tw-gradient-to": t.color({
        opacityValue: "0"
    }),
    "--tw-gradient-stops": `var(--tw-gradient-from),${t.value},var(--tw-gradient-to)`
})), It("to-", {
    section: "gradientColorStops",
    property: "--tw-gradient-to",
    opacityVariable: !1,
    opacitySection: "opacity"
}), X("bg-(fixed|local|scroll)", "backgroundAttachment"), X("bg-origin-(border|padding|content)", "backgroundOrigin", ({1: t})=>t + "-box"), X(["bg-(no-repeat|repeat(-[xy])?)", "bg-repeat-(round|space)"], "backgroundRepeat"), X("bg-blend-", "backgroundBlendMode"), X("bg-clip-(border|padding|content|text)", "backgroundClip", ({1: t})=>t + (t == "text" ? "" : "-box")), te("bg-opacity-", "backgroundOpacity", "--tw-bg-opacity"), It("bg-", {
    section: "backgroundColor"
}), te("bg-", "backgroundImage"), te("bg-", "backgroundPosition"), X("bg-(top|bottom|center|(left|right)(-(top|bottom))?)", "backgroundPosition", Qc), te("bg-", "backgroundSize"), te("rounded(?:$|-)", "borderRadius"), te("rounded-([trbl]|[tb][rl])(?:$|-)", "borderRadius", ({1: t, _: e})=>{
        let n = {
            t: ["tl", "tr"],
            r: ["tr", "br"],
            b: ["bl", "br"],
            l: ["bl", "tl"]
        }[t] || [t, t];
        return {
            [`border-${ri(n[0])}-radius`]: e,
            [`border-${ri(n[1])}-radius`]: e
        }
    }
), X("border-(collapse|separate)", "borderCollapse"), te("border-opacity(?:$|-)", "borderOpacity", "--tw-border-opacity"), X("border-(solid|dashed|dotted|double|none)", "borderStyle"), te("border-spacing(-[xy])?(?:$|-)", "borderSpacing", ({1: t, _: e})=>({
    ...Ca({
        "--tw-border-spacing-x": "0",
        "--tw-border-spacing-y": "0"
    }),
    ["--tw-border-spacing" + (t || "-x")]: e,
    ["--tw-border-spacing" + (t || "-y")]: e,
    "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)"
})), It("border-([xytrbl])-", {
    section: "borderColor"
}, xo("border", "Color")), It("border-"), te("border-([xytrbl])(?:$|-)", "borderWidth", xo("border", "Width")), te("border(?:$|-)", "borderWidth"), te("divide-opacity(?:$|-)", "divideOpacity", ({_: t})=>({
    "&>:not([hidden])~:not([hidden])": {
        "--tw-divide-opacity": t
    }
})), X("divide-(solid|dashed|dotted|double|none)", ({1: t})=>({
    "&>:not([hidden])~:not([hidden])": {
        borderStyle: t
    }
})), X("divide-([xy]-reverse)", ({1: t})=>({
    "&>:not([hidden])~:not([hidden])": {
        ["--tw-divide-" + t]: "1"
    }
})), te("divide-([xy])(?:$|-)", "divideWidth", ({1: t, _: e})=>{
        let n = {
            x: "lr",
            y: "tb"
        }[t];
        return {
            "&>:not([hidden])~:not([hidden])": {
                [`--tw-divide-${t}-reverse`]: "0",
                [`border-${ri(n[0])}Width`]: `calc(${e} * calc(1 - var(--tw-divide-${t}-reverse)))`,
                [`border-${ri(n[1])}Width`]: `calc(${e} * var(--tw-divide-${t}-reverse))`
            }
        }
    }
), It("divide-", {
    property: "borderColor",
    selector: "&>:not([hidden])~:not([hidden])"
}), te("ring-opacity(?:$|-)", "ringOpacity", "--tw-ring-opacity"), It("ring-offset-", {
    property: "--tw-ring-offset-color",
    opacityVariable: !1
}), te("ring-offset(?:$|-)", "ringOffsetWidth", "--tw-ring-offset-width"), X("ring-inset", {
    "--tw-ring-inset": "inset"
}), It("ring-", {
    property: "--tw-ring-color"
}), te("ring(?:$|-)", "ringWidth", ({_: t},{theme: e})=>({
    ...Ca({
        "--tw-ring-offset-shadow": "0 0 #0000",
        "--tw-ring-shadow": "0 0 #0000",
        "--tw-shadow": "0 0 #0000",
        "--tw-shadow-colored": "0 0 #0000",
        "&": {
            "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
            "--tw-ring-offset-width": e("ringOffsetWidth", "", "0px"),
            "--tw-ring-offset-color": Ea(e("ringOffsetColor", "", "#fff")),
            "--tw-ring-color": Ea(e("ringColor", "", "#93c5fd"), {
                opacityVariable: "--tw-ring-opacity"
            }),
            "--tw-ring-opacity": e("ringOpacity", "", "0.5")
        }
    }),
    "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
    "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${t} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
    boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"
})), It("shadow-", {
    section: "boxShadowColor",
    opacityVariable: !1,
    opacitySection: "opacity"
}, ({_: t})=>({
    "--tw-shadow-color": t.value,
    "--tw-shadow": "var(--tw-shadow-colored)"
})), te("shadow(?:$|-)", "boxShadow", ({_: t})=>({
    ...Ca({
        "--tw-ring-offset-shadow": "0 0 #0000",
        "--tw-ring-shadow": "0 0 #0000",
        "--tw-shadow": "0 0 #0000",
        "--tw-shadow-colored": "0 0 #0000"
    }),
    "--tw-shadow": rr(t),
    "--tw-shadow-colored": rr(t).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g, "$1var(--tw-shadow-color)$2"),
    boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"
})), te("(opacity)-"), X("mix-blend-", "mixBlendMode"), ...Cv(), ...Cv("backdrop-"), te("transition(?:$|-)", "transitionProperty", (t,{theme: e})=>({
    transitionProperty: rr(t),
    transitionTimingFunction: t._ == "none" ? void 0 : rr(e("transitionTimingFunction", "")),
    transitionDuration: t._ == "none" ? void 0 : rr(e("transitionDuration", ""))
})), te("duration(?:$|-)", "transitionDuration", "transitionDuration", rr), te("ease(?:$|-)", "transitionTimingFunction", "transitionTimingFunction", rr), te("delay(?:$|-)", "transitionDelay", "transitionDelay", rr), te("animate(?:$|-)", "animation", (t,{theme: e, h: n, e: r})=>{
        let a = rr(t)
            , i = a.split(" ")
            , o = e("keyframes", i[0]);
        return o ? {
            ["@keyframes " + (i[0] = r(n(i[0])))]: o,
            animation: i.join(" ")
        } : {
            animation: a
        }
    }
), "(transform)-(none)", X("transform", qm), X("transform-(cpu|gpu)", ({1: t})=>({
    "--tw-transform": Av(t == "gpu")
})), te("scale(-[xy])?-", "scale", ({1: t, _: e})=>({
    ["--tw-scale" + (t || "-x")]: e,
    ["--tw-scale" + (t || "-y")]: e,
    ...qm()
})), te("-?(rotate)-", "rotate", Um), te("-?(translate-[xy])-", "translate", Um), te("-?(skew-[xy])-", "skew", Um), X("origin-(center|((top|bottom)(-(left|right))?)|left|right)", "transformOrigin", Qc), "(appearance)-", te("(columns)-"), "(columns)-(\\d+)", "(break-(?:before|after|inside))-", te("(cursor)-"), "(cursor)-", X("snap-(none)", "scroll-snap-type"), X("snap-(x|y|both)", ({1: t})=>({
    ...Ca({
        "--tw-scroll-snap-strictness": "proximity"
    }),
    "scroll-snap-type": t + " var(--tw-scroll-snap-strictness)"
})), X("snap-(mandatory|proximity)", "--tw-scroll-snap-strictness"), X("snap-(?:(start|end|center)|align-(none))", "scroll-snap-align"), X("snap-(normal|always)", "scroll-snap-stop"), X("scroll-(auto|smooth)", "scroll-behavior"), te("scroll-p([xytrbl])?(?:$|-)", "padding", xo("scroll-padding")), te("-?scroll-m([xytrbl])?(?:$|-)", "scroll-margin", xo("scroll-margin")), X("touch-(auto|none|manipulation)", "touch-action"), X("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))", ({1: t, 2: e, 3: n})=>({
    ...Ca({
        "--tw-pan-x": "var(--tw-empty,/*!*/ /*!*/)",
        "--tw-pan-y": "var(--tw-empty,/*!*/ /*!*/)",
        "--tw-pinch-zoom": "var(--tw-empty,/*!*/ /*!*/)",
        "--tw-touch-action": "var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"
    }),
    [`--tw-${e ? "pan-x" : n ? "pan-y" : t}`]: t,
    "touch-action": "var(--tw-touch-action)"
})), X("outline-none", {
    outline: "2px solid transparent",
    "outline-offset": "2px"
}), X("outline", {
    outlineStyle: "solid"
}), X("outline-(dashed|dotted|double)", "outlineStyle"), te("-?(outline-offset)-"), It("outline-", {
    opacityVariable: !1,
    opacitySection: "opacity"
}), te("outline-", "outlineWidth"), "(pointer-events)-", te("(will-change)-"), "(will-change)-", ["resize(?:-(none|x|y))?", "resize", ({1: t})=>({
    x: "horizontal",
    y: "vertical"
})[t] || t || "both"], X("select-(none|text|all|auto)", "userSelect"), It("fill-", {
    section: "fill",
    opacityVariable: !1,
    opacitySection: "opacity"
}), It("stroke-", {
    section: "stroke",
    opacityVariable: !1,
    opacitySection: "opacity"
}), te("stroke-", "strokeWidth"), X("sr-only", {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    clip: "rect(0,0,0,0)",
    borderWidth: "0"
}), X("not-sr-only", {
    position: "static",
    width: "auto",
    height: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    whiteSpace: "normal",
    clip: "auto"
})];
function Qc(t) {
    return (typeof t == "string" ? t : t[1]).replace(/-/g, " ").trim()
}
function xv(t) {
    return (typeof t == "string" ? t : t[1]).replace("col", "column")
}
function ri(t, e="-") {
    let n = [];
    for (let r of t)
        n.push({
            t: "top",
            r: "right",
            b: "bottom",
            l: "left"
        }[r]);
    return n.join(e)
}
function rr(t) {
    return t && "" + (t._ || t)
}
function Ev({$$: t}) {
    return ({
        r: "flex-",
        "": "flex-",
        w: "space-",
        u: "space-",
        n: "space-"
    }[t[3] || ""] || "") + t
}
function xo(t, e="") {
    return ({1: n, _: r})=>{
        let a = {
            x: "lr",
            y: "tb"
        }[n] || n + n;
        return a ? {
            ...Ks(t + "-" + ri(a[0]) + e, r),
            ...Ks(t + "-" + ri(a[1]) + e, r)
        } : Ks(t + e, r)
    }
}
function Cv(t="") {
    let e = ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", t && "opacity", "saturate", "sepia", !t && "drop-shadow"].filter(Boolean)
        , n = {};
    for (let r of e)
        n[`--tw-${t}${r}`] = "var(--tw-empty,/*!*/ /*!*/)";
    return n = {
        ...Ca(n),
        [`${t}filter`]: e.map(r=>`var(--tw-${t}${r})`).join(" ")
    },
        [`(${t}filter)-(none)`, X(`${t}filter`, n), ...e.map(r=>te(`${r[0] == "h" ? "-?" : ""}(${t}${r})(?:$|-)`, r, ({1: a, _: i})=>({
            [`--tw-${a}`]: Mn(i).map(o=>`${r}(${o})`).join(" "),
            ...n
        })))]
}
function Um({1: t, _: e}) {
    return {
        ["--tw-" + t]: e,
        ...qm()
    }
}
function qm() {
    return {
        ...Ca({
            "--tw-translate-x": "0",
            "--tw-translate-y": "0",
            "--tw-rotate": "0",
            "--tw-skew-x": "0",
            "--tw-skew-y": "0",
            "--tw-scale-x": "1",
            "--tw-scale-y": "1",
            "--tw-transform": Av()
        }),
        transform: "var(--tw-transform)"
    }
}
function Av(t) {
    return [t ? "translate3d(var(--tw-translate-x),var(--tw-translate-y),0)" : "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))", "rotate(var(--tw-rotate))", "skewX(var(--tw-skew-x))", "skewY(var(--tw-skew-y))", "scaleX(var(--tw-scale-x))", "scaleY(var(--tw-scale-y))"].join(" ")
}
function wv({1: t, 2: e}) {
    return `${t} ${e} / ${t} ${e}`
}
function Dv({1: t}) {
    return `repeat(${t},minmax(0,1fr))`
}
function Ca(t) {
    return {
        "@layer defaults": {
            "*,::before,::after": t,
            "::backdrop": t
        }
    }
}
