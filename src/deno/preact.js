
var ql, Fe, D1, AD, bs, x1, A1, zl = {}, k1 = [], kD = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function ua(t, e) {
    for (var n in e)
        t[n] = e[n];
    return t
}
function P1(t) {
    var e = t.parentNode;
    e && e.removeChild(t)
}
function xp(t, e, n) {
    var r, a, i, o = {};
    for (i in e)
        i == "key" ? r = e[i] : i == "ref" ? a = e[i] : o[i] = e[i];
    if (arguments.length > 2 && (o.children = arguments.length > 3 ? ql.call(arguments, 2) : n),
    typeof t == "function" && t.defaultProps != null)
        for (i in t.defaultProps)
            o[i] === void 0 && (o[i] = t.defaultProps[i]);
    return Ol(t, o, r, a, null)
}

function Ol(t, e, n, r, a) {
    var i = {
        type: t,
        props: e,
        key: n,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: a ?? ++D1
    };
    return a == null && Fe.vnode != null && Fe.vnode(i),
        i
}



function jt(t) {
    return t.children
}
function Hi(t, e) {
    this.props = t,
        this.context = e
}
function Wi(t, e) {
    if (e == null)
        return t.__ ? Wi(t.__, t.__.__k.indexOf(t) + 1) : null;
    for (var n; e < t.__k.length; e++)
        if ((n = t.__k[e]) != null && n.__e != null)
            return n.__e;
    return typeof t.type == "function" ? Wi(t) : null
}
function L1(t) {
    var e, n;
    if ((t = t.__) != null && t.__c != null) {
        for (t.__e = t.__c.base = null,
                 e = 0; e < t.__k.length; e++)
            if ((n = t.__k[e]) != null && n.__e != null) {
                t.__e = t.__c.base = n.__e;
                break
            }
        return L1(t)
    }
}
function Sp(t) {
    (!t.__d && (t.__d = !0) && bs.push(t) && !Nl.__r++ || x1 !== Fe.debounceRendering) && ((x1 = Fe.debounceRendering) || setTimeout)(Nl)
}
function Nl() {
    for (var t; Nl.__r = bs.length; )
        t = bs.sort(function(e, n) {
            return e.__v.__b - n.__v.__b
        }),
            bs = [],
            t.some(function(e) {
                var n, r, a, i, o, s;
                e.__d && (o = (i = (n = e).__v).__e,
                (s = n.__P) && (r = [],
                    (a = ua({}, i)).__v = i.__v + 1,
                    Ep(s, i, a, n.__n, s.ownerSVGElement !== void 0, i.__h != null ? [o] : null, r, o ?? Wi(i), i.__h),
                    B1(r, i),
                i.__e != o && L1(i)))
            })
}
function _1(t, e, n, r, a, i, o, s, u, l) {
    var c, p, m, g, f, T, b, h = r && r.__k || k1, E = h.length;
    for (n.__k = [],
             c = 0; c < e.length; c++)
        if ((g = n.__k[c] = (g = e[c]) == null || typeof g == "boolean" ? null : typeof g == "string" || typeof g == "number" || typeof g == "bigint" ? Ol(null, g, null, null, g) : Array.isArray(g) ? Ol(jt, {
            children: g
        }, null, null, null) : g.__b > 0 ? Ol(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v) : g) != null) {
            if (g.__ = n,
                g.__b = n.__b + 1,
            (m = h[c]) === null || m && g.key == m.key && g.type === m.type)
                h[c] = void 0;
            else
                for (p = 0; p < E; p++) {
                    if ((m = h[p]) && g.key == m.key && g.type === m.type) {
                        h[p] = void 0;
                        break
                    }
                    m = null
                }
            Ep(t, g, m = m || zl, a, i, o, s, u, l),
                f = g.__e,
            (p = g.ref) && m.ref != p && (b || (b = []),
            m.ref && b.push(m.ref, null, g),
                b.push(p, g.__c || f, g)),
                f != null ? (T == null && (T = f),
                    typeof g.type == "function" && g.__k === m.__k ? g.__d = u = F1(g, u, t) : u = M1(t, g, m, h, f, u),
                typeof n.type == "function" && (n.__d = u)) : u && m.__e == u && u.parentNode != t && (u = Wi(m))
        }
    for (n.__e = T,
             c = E; c--; )
        h[c] != null && (typeof n.type == "function" && h[c].__e != null && h[c].__e == n.__d && (n.__d = Wi(r, c + 1)),
            R1(h[c], h[c]));
    if (b)
        for (c = 0; c < b.length; c++)
            I1(b[c], b[++c], b[++c])
}
function F1(t, e, n) {
    for (var r, a = t.__k, i = 0; a && i < a.length; i++)
        (r = a[i]) && (r.__ = t,
            e = typeof r.type == "function" ? F1(r, e, n) : M1(n, r, r, a, r.__e, e));
    return e
}
function M1(t, e, n, r, a, i) {
    var o, s, u;
    if (e.__d !== void 0)
        o = e.__d,
            e.__d = void 0;
    else if (n == null || a != i || a.parentNode == null)
        e: if (i == null || i.parentNode !== t)
            t.appendChild(a),
                o = null;
        else {
            for (s = i,
                     u = 0; (s = s.nextSibling) && u < r.length; u += 2)
                if (s == a)
                    break e;
            t.insertBefore(a, i),
                o = i
        }
    return o !== void 0 ? o : a.nextSibling
}
function PD(t, e, n, r, a) {
    var i;
    for (i in n)
        i === "children" || i === "key" || i in e || Ul(t, i, null, n[i], r);
    for (i in e)
        a && typeof e[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || n[i] === e[i] || Ul(t, i, e[i], n[i], r)
}
function E1(t, e, n) {
    e[0] === "-" ? t.setProperty(e, n) : t[e] = n == null ? "" : typeof n != "number" || kD.test(e) ? n : n + "px"
}
function Ul(t, e, n, r, a) {
    var i;
    e: if (e === "style")
        if (typeof n == "string")
            t.style.cssText = n;
        else {
            if (typeof r == "string" && (t.style.cssText = r = ""),
                r)
                for (e in r)
                    n && e in n || E1(t.style, e, "");
            if (n)
                for (e in n)
                    r && n[e] === r[e] || E1(t.style, e, n[e])
        }
    else if (e[0] === "o" && e[1] === "n")
        i = e !== (e = e.replace(/Capture$/, "")),
            e = e.toLowerCase()in t ? e.toLowerCase().slice(2) : e.slice(2),
        t.l || (t.l = {}),
            t.l[e + i] = n,
            n ? r || t.addEventListener(e, i ? w1 : C1, i) : t.removeEventListener(e, i ? w1 : C1, i);
    else if (e !== "dangerouslySetInnerHTML") {
        if (a)
            e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t)
            try {
                t[e] = n ?? "";
                break e
            } catch {}
        typeof n == "function" || (n != null && (n !== !1 || e[0] === "a" && e[1] === "r") ? t.setAttribute(e, n) : t.removeAttribute(e))
    }
}
function C1(t) {
    this.l[t.type + !1](Fe.event ? Fe.event(t) : t)
}
function w1(t) {
    this.l[t.type + !0](Fe.event ? Fe.event(t) : t)
}
function Ep(t, e, n, r, a, i, o, s, u) {
    var l, c, p, m, g, f, T, b, h, E, D, M, I, S = e.type;
    if (e.constructor !== void 0)
        return null;
    n.__h != null && (u = n.__h,
        s = e.__e = n.__e,
        e.__h = null,
        i = [s]),
    (l = Fe.__b) && l(e);
    try {
        e: if (typeof S == "function") {
            if (b = e.props,
                h = (l = S.contextType) && r[l.__c],
                E = l ? h ? h.props.value : l.__ : r,
                n.__c ? T = (c = e.__c = n.__c).__ = c.__E : ("prototype"in S && S.prototype.render ? e.__c = c = new S(b,E) : (e.__c = c = new Hi(b,E),
                    c.constructor = S,
                    c.render = _D),
                h && h.sub(c),
                    c.props = b,
                c.state || (c.state = {}),
                    c.context = E,
                    c.__n = r,
                    p = c.__d = !0,
                    c.__h = []),
            c.__s == null && (c.__s = c.state),
            S.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = ua({}, c.__s)),
                ua(c.__s, S.getDerivedStateFromProps(b, c.__s))),
                m = c.props,
                g = c.state,
                p)
                S.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(),
                c.componentDidMount != null && c.__h.push(c.componentDidMount);
            else {
                if (S.getDerivedStateFromProps == null && b !== m && c.componentWillReceiveProps != null && c.componentWillReceiveProps(b, E),
                !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(b, c.__s, E) === !1 || e.__v === n.__v) {
                    c.props = b,
                        c.state = c.__s,
                    e.__v !== n.__v && (c.__d = !1),
                        c.__v = e,
                        e.__e = n.__e,
                        e.__k = n.__k,
                        e.__k.forEach(function(v) {
                            v && (v.__ = e)
                        }),
                    c.__h.length && o.push(c);
                    break e
                }
                c.componentWillUpdate != null && c.componentWillUpdate(b, c.__s, E),
                c.componentDidUpdate != null && c.__h.push(function() {
                    c.componentDidUpdate(m, g, f)
                })
            }
            if (c.context = E,
                c.props = b,
                c.__v = e,
                c.__P = t,
                D = Fe.__r,
                M = 0,
            "prototype"in S && S.prototype.render)
                c.state = c.__s,
                    c.__d = !1,
                D && D(e),
                    l = c.render(c.props, c.state, c.context);
            else
                do
                    c.__d = !1,
                    D && D(e),
                        l = c.render(c.props, c.state, c.context),
                        c.state = c.__s;
                while (c.__d && ++M < 25);
            c.state = c.__s,
            c.getChildContext != null && (r = ua(ua({}, r), c.getChildContext())),
            p || c.getSnapshotBeforeUpdate == null || (f = c.getSnapshotBeforeUpdate(m, g)),
                I = l != null && l.type === jt && l.key == null ? l.props.children : l,
                _1(t, Array.isArray(I) ? I : [I], e, n, r, a, i, o, s, u),
                c.base = e.__e,
                e.__h = null,
            c.__h.length && o.push(c),
            T && (c.__E = c.__ = null),
                c.__e = !1
        } else
            i == null && e.__v === n.__v ? (e.__k = n.__k,
                e.__e = n.__e) : e.__e = LD(n.__e, e, n, r, a, i, o, u);
        (l = Fe.diffed) && l(e)
    } catch (v) {
        e.__v = null,
        (u || i != null) && (e.__e = s,
            e.__h = !!u,
            i[i.indexOf(s)] = null),
            Fe.__e(v, e, n)
    }
}
function B1(t, e) {
    Fe.__c && Fe.__c(e, t),
        t.some(function(n) {
            try {
                t = n.__h,
                    n.__h = [],
                    t.some(function(r) {
                        r.call(n)
                    })
            } catch (r) {
                Fe.__e(r, n.__v)
            }
        })
}
function LD(t, e, n, r, a, i, o, s) {
    var u, l, c, p = n.props, m = e.props, g = e.type, f = 0;
    if (g === "svg" && (a = !0),
    i != null) {
        for (; f < i.length; f++)
            if ((u = i[f]) && "setAttribute"in u == !!g && (g ? u.localName === g : u.nodeType === 3)) {
                t = u,
                    i[f] = null;
                break
            }
    }
    if (t == null) {
        if (g === null)
            return document.createTextNode(m);
        t = a ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, m.is && m),
            i = null,
            s = !1
    }
    if (g === null)
        p === m || s && t.data === m || (t.data = m);
    else {
        if (i = i && ql.call(t.childNodes),
            l = (p = n.props || zl).dangerouslySetInnerHTML,
            c = m.dangerouslySetInnerHTML,
            !s) {
            if (i != null)
                for (p = {},
                         f = 0; f < t.attributes.length; f++)
                    p[t.attributes[f].name] = t.attributes[f].value;
            (c || l) && (c && (l && c.__html == l.__html || c.__html === t.innerHTML) || (t.innerHTML = c && c.__html || ""))
        }
        if (PD(t, m, p, a, s),
            c)
            e.__k = [];
        else if (f = e.props.children,
            _1(t, Array.isArray(f) ? f : [f], e, n, r, a && g !== "foreignObject", i, o, i ? i[0] : n.__k && Wi(n, 0), s),
        i != null)
            for (f = i.length; f--; )
                i[f] != null && P1(i[f]);
        s || ("value"in m && (f = m.value) !== void 0 && (f !== t.value || g === "progress" && !f || g === "option" && f !== p.value) && Ul(t, "value", f, p.value, !1),
        "checked"in m && (f = m.checked) !== void 0 && f !== t.checked && Ul(t, "checked", f, p.checked, !1))
    }
    return t
}
function I1(t, e, n) {
    try {
        typeof t == "function" ? t(e) : t.current = e
    } catch (r) {
        Fe.__e(r, n)
    }
}
function R1(t, e, n) {
    var r, a;
    if (Fe.unmount && Fe.unmount(t),
    (r = t.ref) && (r.current && r.current !== t.__e || I1(r, null, e)),
    (r = t.__c) != null) {
        if (r.componentWillUnmount)
            try {
                r.componentWillUnmount()
            } catch (i) {
                Fe.__e(i, e)
            }
        r.base = r.__P = null,
            t.__c = void 0
    }
    if (r = t.__k)
        for (a = 0; a < r.length; a++)
            r[a] && R1(r[a], e, typeof t.type != "function");
    n || t.__e == null || P1(t.__e),
        t.__ = t.__e = t.__d = void 0
}
function _D(t, e, n) {
    return this.constructor(t, n)
}
function Ki(t, e, n) {
    var r, a, i;
    Fe.__ && Fe.__(t, e),
        a = (r = typeof n == "function") ? null : n && n.__k || e.__k,
        i = [],
        Ep(e, t = (!r && n || e).__k = xp(jt, null, [t]), a || zl, zl, e.ownerSVGElement !== void 0, !r && n ? [n] : a ? null : e.firstChild ? ql.call(e.childNodes) : null, i, !r && n ? n : a ? a.__e : e.firstChild, r),
        B1(i, t)
}
function Gi(t, e) {
    var n = {
        __c: e = "__cC" + A1++,
        __: t,
        Consumer: function(r, a) {
            return r.children(a)
        },
        Provider: function(r) {
            var a, i;
            return this.getChildContext || (a = [],
                    (i = {})[e] = this,
                    this.getChildContext = function() {
                        return i
                    }
                    ,
                    this.shouldComponentUpdate = function(o) {
                        this.props.value !== o.value && a.some(Sp)
                    }
                    ,
                    this.sub = function(o) {
                        a.push(o);
                        var s = o.componentWillUnmount;
                        o.componentWillUnmount = function() {
                            a.splice(a.indexOf(o), 1),
                            s && s.call(o)
                        }
                    }
            ),
                r.children
        }
    };
    return n.Provider.__ = n.Consumer.contextType = n
}
ql = k1.slice,
    Fe = {
        __e: function(t, e, n, r) {
            for (var a, i, o; e = e.__; )
                if ((a = e.__c) && !a.__)
                    try {
                        if ((i = a.constructor) && i.getDerivedStateFromError != null && (a.setState(i.getDerivedStateFromError(t)),
                            o = a.__d),
                        a.componentDidCatch != null && (a.componentDidCatch(t, r || {}),
                            o = a.__d),
                            o)
                            return a.__E = a
                    } catch (s) {
                        t = s
                    }
            throw t
        }
    },
    D1 = 0,
    AD = function(t) {
        return t != null && t.constructor === void 0
    }
    ,
    Hi.prototype.setState = function(t, e) {
        var n;
        n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ua({}, this.state),
        typeof t == "function" && (t = t(ua({}, n), this.props)),
        t && ua(n, t),
        t != null && this.__v && (e && this.__h.push(e),
            Sp(this))
    }
    ,
    Hi.prototype.forceUpdate = function(t) {
        this.__v && (this.__e = !0,
        t && this.__h.push(t),
            Sp(this))
    }
    ,
    Hi.prototype.render = jt,
    bs = [],
    Nl.__r = 0,
    A1 = 0;
