
var pd = Object.defineProperty;
var eu = (t,e)=>{
    for (var n in e)
        pd(t, n, {
            get: e[n],
            enumerable: !0
        })
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var fh = Object.prototype.toString;
function Tu(t) {
    switch (fh.call(t)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
            return !0;
        default:
            return or(t, Error)
    }
}
function Io(t, e) {
    return fh.call(t) === `[object ${e}]`
}
function yu(t) {
    return Io(t, "ErrorEvent")
}
function hh(t) {
    return Io(t, "DOMException")
}
function Dr(t) {
    return Io(t, "String")
}
function Ro(t) {
    return t === null || typeof t != "object" && typeof t != "function"
}
function Yn(t) {
    return Io(t, "Object")
}
function Oo(t) {
    return typeof Event < "u" && or(t, Event)
}
function bh(t) {
    return !1
}
function Th(t) {
    return Io(t, "RegExp")
}
function hi(t) {
    return !!(t && t.then && typeof t.then == "function")
}
function yh(t) {
    return Yn(t) && "nativeEvent"in t && "preventDefault"in t && "stopPropagation"in t
}
function vh(t) {
    return typeof t == "number" && t !== t
}
function or(t, e) {
    try {
        return t instanceof e
    } catch {
        return !1
    }
}
function zo(t, e) {
    try {
        let n = t, r = 5, a = 80, i = [], o = 0, s = 0, u = " > ", l = u.length, c;
        for (; n && o++ < r && (c = Xx(n, e),
            !(c === "html" || o > 1 && s + i.length * l + c.length >= a)); )
            i.push(c),
                s += c.length,
                n = n.parentNode;
        return i.reverse().join(u)
    } catch {
        return "<unknown>"
    }
}
function Xx(t, e) {
    let n = t, r = [], a, i, o, s, u;
    if (!n || !n.tagName)
        return "";
    r.push(n.tagName.toLowerCase());
    let l = e && e.length ? e.filter(p=>n.getAttribute(p)).map(p=>[p, n.getAttribute(p)]) : null;
    if (l && l.length)
        l.forEach(p=>{
                r.push(`[${p[0]}="${p[1]}"]`)
            }
        );
    else if (n.id && r.push(`#${n.id}`),
        a = n.className,
    a && Dr(a))
        for (i = a.split(/\s+/),
                 u = 0; u < i.length; u++)
            r.push(`.${i[u]}`);
    let c = ["type", "name", "title", "alt"];
    for (u = 0; u < c.length; u++)
        o = c[u],
            s = n.getAttribute(o),
        s && r.push(`[${o}="${s}"]`);
    return r.join("")
}
function Sh() {
    try {
        return location.href
    } catch {
        return ""
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var Tt = class extends Error {
        constructor(n) {
            super(n);
            this.message = n;
            this.name = new.target.prototype.constructor.name,
                Object.setPrototypeOf(this, new.target.prototype)
        }
        name
    }
;
var eE = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function tE(t) {
    return t === "http" || t === "https"
}
function Fa(t, e=!1) {
    let {host: n, path: r, pass: a, port: i, projectId: o, protocol: s, publicKey: u} = t;
    return `${s}://${u}${e && a ? `:${a}` : ""}@${n}${i ? `:${i}` : ""}/${r && `${r}/`}${o}`
}

function nE(t) {
    let e = eE.exec(t);
    if (!e)
        throw new Tt(`Invalid Sentry Dsn: ${t}`);
    let[n,r,a="",i,o="",s] = e.slice(1)
        , u = ""
        , l = s
        , c = l.split("/");
    if (c.length > 1 && (u = c.slice(0, -1).join("/"),
        l = c.pop()),
        l) {
        let p = l.match(/^\d+/);
        p && (l = p[0])
    }
    return xh({
        host: i,
        pass: a,
        path: u,
        projectId: l,
        port: o,
        protocol: n,
        publicKey: r
    })
}
function xh(t) {
    return {
        protocol: t.protocol,
        publicKey: t.publicKey || "",
        pass: t.pass || "",
        host: t.host,
        port: t.port || "",
        path: t.path || "",
        projectId: t.projectId
    }
}
function rE(t) {
    if (!!1)
        return;
    let {port: e, projectId: n, protocol: r} = t;
    if (["protocol", "publicKey", "host", "projectId"].forEach(i=>{
            if (!t[i])
                throw new Tt(`Invalid Sentry Dsn: ${String(i)} missing`)
        }
    ),
        !n.match(/^\d+$/))
        throw new Tt(`Invalid Sentry Dsn: Invalid projectId ${n}`);
    if (!tE(r))
        throw new Tt(`Invalid Sentry Dsn: Invalid protocol ${r}`);
    if (e && isNaN(parseInt(e, 10)))
        throw new Tt(`Invalid Sentry Dsn: Invalid port ${e}`);
    return !0
}
function vu(t) {
    let e = typeof t == "string" ? nE(t) : xh(t);
    return rE(e),
        e
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var aE = {};
function it() {
    return typeof window < "u" ? window : typeof self < "u" ? self : aE
}
function bi(t, e, n) {
    let r = n || it()
        , a = r.__SENTRY__ = r.__SENTRY__ || {};
    return a[t] || (a[t] = e())
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var No = ["debug", "info", "warn", "error", "log", "assert", "trace"];
function Vd(t) {
    if (!("console"in it()))
        return t();
    let n = console
        , r = {};
    No.forEach(a=>{
            let i = n[a] && n[a].__sentry_original__;
            a in console && i && (r[a] = n[a],
                n[a] = i)
        }
    );
    try {
        return t()
    } finally {
        Object.keys(r).forEach(a=>{
                n[a] = r[a]
            }
        )
    }
}
function Eh() {
    let t = !1
        , e = {
        enable: ()=>{
            t = !0
        }
        ,
        disable: ()=>{
            t = !1
        }
    };
    return !1 ? No.forEach(n=>{
            e[n] = (...r)=>{
                t && Vd(()=>{}
                )
            }
        }
    ) : No.forEach(n=>{
            e[n] = ()=>{}
        }
    ),
        e
}

var Se;
!1 ? Se = bi("logger", Eh) : Se = Eh();

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function Ma(t, e=0) {
    return typeof t != "string" || e === 0 || t.length <= e ? t : `${t.substr(0, e)}...`
}
function Yd(t, e) {
    if (!Array.isArray(t))
        return "";
    let n = [];
    for (let r = 0; r < t.length; r++) {
        let a = t[r];
        try {
            n.push(String(a))
        } catch {
            n.push("[value cannot be serialized]")
        }
    }
    return n.join(e)
}
function Su(t, e) {
    return Dr(t) ? Th(e) ? e.test(t) : typeof e == "string" ? t.indexOf(e) !== -1 : !1 : !1
}
function Qn(t, e, n) {
    if (!(e in t))
        return;
    let r = t[e]
        , a = n(r);
    if (typeof a == "function")
        try {
            Jd(a, r)
        } catch {}
    t[e] = a
}
function Uo(t, e, n) {
    Object.defineProperty(t, e, {
        value: n,
        writable: !0,
        configurable: !0
    })
}
function Jd(t, e) {
    let n = e.prototype || {};
    t.prototype = e.prototype = n,
        Uo(t, "__sentry_original__", e)
}
function Ti(t) {
    return t.__sentry_original__
}
function Dh(t) {
    return Object.keys(t).map(e=>`${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`).join("&")
}
function Zd(t) {
    if (Tu(t))
        return {
            message: t.message,
            name: t.name,
            stack: t.stack,
            ...wh(t)
        };
    if (Oo(t)) {
        let e = {
            type: t.type,
            target: Ch(t.target),
            currentTarget: Ch(t.currentTarget),
            ...wh(t)
        };
        return typeof CustomEvent < "u" && or(t, CustomEvent) && (e.detail = t.detail),
            e
    } else
        return t
}
function Ch(t) {
    try {
        return bh(t) ? zo(t) : Object.prototype.toString.call(t)
    } catch {
        return "<unknown>"
    }
}
function wh(t) {
    if (typeof t == "object" && t !== null) {
        let e = {};
        for (let n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e
    } else
        return {}
}
function Ah(t, e=40) {
    let n = Object.keys(Zd(t));
    if (n.sort(),
        !n.length)
        return "[object has no keys]";
    if (n[0].length >= e)
        return Ma(n[0], e);
    for (let r = n.length; r > 0; r--) {
        let a = n.slice(0, r).join(", ");
        if (!(a.length > e))
            return r === n.length ? a : Ma(a, e)
    }
    return ""
}
function Ba(t) {
    return Qd(t, new Map)
}
function Qd(t, e) {
    if (Yn(t)) {
        let n = e.get(t);
        if (n !== void 0)
            return n;
        let r = {};
        e.set(t, r);
        for (let a of Object.keys(t))
            typeof t[a] < "u" && (r[a] = Qd(t[a], e));
        return r
    }
    if (Array.isArray(t)) {
        let n = e.get(t);
        if (n !== void 0)
            return n;
        let r = [];
        return e.set(t, r),
            t.forEach(a=>{
                    r.push(Qd(a, e))
                }
            ),
            r
    }
    return t
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var iE = 50;
function e0(...t) {
    let e = t.sort((n,r)=>n[0] - r[0]).map(n=>n[1]);
    return (n,r=0)=>{
        let a = [];
        for (let i of n.split(`
`).slice(r))
            for (let o of e) {
                let s = o(i);
                if (s) {
                    a.push(s);
                    break
                }
            }
        return oE(a)
    }
}
function kh(t) {
    return Array.isArray(t) ? e0(...t) : t
}
function oE(t) {
    if (!t.length)
        return [];
    let e = t
        , n = e[0].function || ""
        , r = e[e.length - 1].function || "";
    return (n.indexOf("captureMessage") !== -1 || n.indexOf("captureException") !== -1) && (e = e.slice(1)),
    r.indexOf("sentryWrapped") !== -1 && (e = e.slice(0, -1)),
        e.slice(0, iE).map(a=>({
            ...a,
            filename: a.filename || e[0].filename,
            function: a.function || "?"
        })).reverse()
}
var Xd = "<anonymous>";
function Jn(t) {
    try {
        return !t || typeof t != "function" ? Xd : t.name || Xd
    } catch {
        return Xd
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function Ph() {
    if (!("fetch"in it()))
        return !1;
    try {
        return new Headers,
            new Request("http://www.example.com"),
            new Response,
            !0
    } catch {
        return !1
    }
}
function Lh(t) {
    return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
}
function _h() {
    return !0
}
var Ar = it()
    , qo = {}
    , Fh = {};
function sE(t) {
    if (!Fh[t])
        switch (Fh[t] = !0,
            t) {
            case "console":
                uE();
                break;
            case "fetch":
                lE();
                break;
            case "error":
                pE();
                break;
            case "unhandledrejection":
                gE();
                break;
            default:
                !1 && Se.warn("unknown instrumentation type:", t);
                return
        }
}
function Zn(t, e) {
    qo[t] = qo[t] || [],
        qo[t].push(e),
        sE(t)
}
function yi(t, e) {
    if (!(!t || !qo[t]))
        for (let n of qo[t] || [])
            try {
                n(e)
            } catch (r) {
                !1 && Se.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${Jn(n)}
Error:`, r)
            }
}
function uE() {
    "console"in Ar && No.forEach(function(t) {
        t in console && Qn(console, t, function(e) {
            return function(...n) {
                yi("console", {
                    args: n,
                    level: t
                }),
                e && e.apply(console, n)
            }
        })
    })
}
function lE() {
    _h() && Qn(Ar, "fetch", function(t) {
        return function(...e) {
            let n = {
                args: e,
                fetchData: {
                    method: cE(e),
                    url: dE(e)
                },
                startTimestamp: Date.now()
            };
            return yi("fetch", {
                ...n
            }),
                t.apply(Ar, e).then(r=>(yi("fetch", {
                        ...n,
                        endTimestamp: Date.now(),
                        response: r
                    }),
                        r), r=>{
                        throw yi("fetch", {
                            ...n,
                            endTimestamp: Date.now(),
                            error: r
                        }),
                            r
                    }
                )
        }
    })
}
function cE(t=[]) {
    return "Request"in Ar && or(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : "GET"
}
function dE(t=[]) {
    return typeof t[0] == "string" ? t[0] : "Request"in Ar && or(t[0], Request) ? t[0].url : String(t[0])
}
var t0 = null;
function pE() {
    t0 = Ar.onerror,
        Ar.onerror = function(t, e, n, r, a) {
            return yi("error", {
                column: r,
                error: a,
                line: n,
                msg: t,
                url: e
            }),
                t0 ? t0.apply(this, arguments) : !1
        }
}
var n0 = null;
function gE() {
    n0 = Ar.onunhandledrejection,
        Ar.onunhandledrejection = function(t) {
            return yi("unhandledrejection", t),
                n0 ? n0.apply(this, arguments) : !0
        }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function Mh() {
    let t = typeof WeakSet == "function"
        , e = t ? new WeakSet : [];
    function n(a) {
        if (t)
            return e.has(a) ? !0 : (e.add(a),
                !1);
        for (let i = 0; i < e.length; i++)
            if (e[i] === a)
                return !0;
        return e.push(a),
            !1
    }
    function r(a) {
        if (t)
            e.delete(a);
        else
            for (let i = 0; i < e.length; i++)
                if (e[i] === a) {
                    e.splice(i, 1);
                    break
                }
    }
    return [n, r]
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function kr() {
    if (crypto && crypto.randomUUID)
        return crypto.randomUUID().replace(/-/g, "");
    let t = crypto && crypto.getRandomValues ? ()=>crypto.getRandomValues(new Uint8Array(1))[0] : ()=>Math.random() * 16;
    return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, e=>(e ^ (t() & 15) >> e / 4).toString(16))
}
function xu(t) {
    if (!t)
        return {};
    let e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!e)
        return {};
    let n = e[6] || ""
        , r = e[8] || "";
    return {
        host: e[4],
        path: e[5],
        protocol: e[2],
        relative: e[5] + n + r
    }
}

function Bh(t) {
    return t.exception && t.exception.values ? t.exception.values[0] : void 0
}
function Pr(t) {
    let {message: e, event_id: n} = t;
    if (e)
        return e;
    let r = Bh(t);
    return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
}
function jo(t, e, n) {
    let r = t.exception = t.exception || {}
        , a = r.values = r.values || []
        , i = a[0] = a[0] || {};
    i.value || (i.value = e || ""),
    i.type || (i.type = n || "Error")
}
function Gr(t, e) {
    let n = Bh(t);
    if (!n)
        return;
    let r = {
        type: "generic",
        handled: !0
    }
        , a = n.mechanism;
    if (n.mechanism = {
        ...r,
        ...a,
        ...e
    },
    e && "data"in e) {
        let i = {
            ...a && a.data,
            ...e.data
        };
        n.mechanism.data = i
    }
}
function r0(t) {
    if (t && t.__sentry_captured__)
        return !0;
    try {
        Uo(t, "__sentry_captured__", !0)
    } catch {}
    return !1
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function Ih() {
    return !1
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function Lr(t, e=1 / 0, n=1 / 0) {
    try {
        return a0("", t, e, n)
    } catch (r) {
        return {
            ERROR: `**non-serializable** (${r})`
        }
    }
}
function i0(t, e=3, n=100 * 1024) {
    let r = Lr(t, e);
    return hE(r) > n ? i0(t, e - 1, n) : r
}
function a0(t, e, n=1 / 0, r=1 / 0, a=Mh()) {
    let[i,o] = a;
    if (e === null || ["number", "boolean", "string"].includes(typeof e) && !vh(e))
        return e;
    let s = mE(t, e);
    if (!s.startsWith("[object "))
        return s;
    if (e.__sentry_skip_normalization__)
        return e;
    if (n === 0)
        return s.replace("object ", "");
    if (i(e))
        return "[Circular ~]";
    let u = e;
    if (u && typeof u.toJSON == "function")
        try {
            let m = u.toJSON();
            return a0("", m, n - 1, r, a)
        } catch {}
    let l = Array.isArray(e) ? [] : {}
        , c = 0
        , p = Zd(e);
    for (let m in p) {
        if (!Object.prototype.hasOwnProperty.call(p, m))
            continue;
        if (c >= r) {
            l[m] = "[MaxProperties ~]";
            break
        }
        let g = p[m];
        l[m] = a0(m, g, n - 1, r, a),
            c += 1
    }
    return o(e),
        l
}
function mE(t, e) {
    try {
        return t === "domain" && e && typeof e == "object" && e._events ? "[Domain]" : t === "domainEmitter" ? "[DomainEmitter]" : typeof window < "u" && e === window ? "[Window]" : yh(e) ? "[SyntheticEvent]" : typeof e == "number" && e !== e ? "[NaN]" : e === void 0 ? "[undefined]" : typeof e == "function" ? `[Function: ${Jn(e)}]` : typeof e == "symbol" ? `[${String(e)}]` : typeof e == "bigint" ? `[BigInt: ${String(e)}]` : `[object ${Object.getPrototypeOf(e).constructor.name}]`
    } catch (n) {
        return `**non-serializable** (${n})`
    }
}
function fE(t) {
    return ~-encodeURI(t).split(/%..|./).length
}
function hE(t) {
    return fE(JSON.stringify(t))
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function Sn(t) {
    return new sr(e=>{
            e(t)
        }
    )
}
function Ho(t) {
    return new sr((e,n)=>{
            n(t)
        }
    )
}
var sr = class t {
        _state = 0;
        _handlers = [];
        _value;
        constructor(e) {
            try {
                e(this._resolve, this._reject)
            } catch (n) {
                this._reject(n)
            }
        }
        then(e, n) {
            return new t((r,a)=>{
                    this._handlers.push([!1, i=>{
                        if (!e)
                            r(i);
                        else
                            try {
                                r(e(i))
                            } catch (o) {
                                a(o)
                            }
                    }
                        , i=>{
                            if (!n)
                                a(i);
                            else
                                try {
                                    r(n(i))
                                } catch (o) {
                                    a(o)
                                }
                        }
                    ]),
                        this._executeHandlers()
                }
            )
        }
        catch(e) {
            return this.then(n=>n, e)
        }
        finally(e) {
            return new t((n,r)=>{
                    let a, i;
                    return this.then(o=>{
                            i = !1,
                                a = o,
                            e && e()
                        }
                        , o=>{
                            i = !0,
                                a = o,
                            e && e()
                        }
                    ).then(()=>{
                            if (i) {
                                r(a);
                                return
                            }
                            n(a)
                        }
                    )
                }
            )
        }
        _resolve = e=>{
            this._setResult(1, e)
        }
        ;
        _reject = e=>{
            this._setResult(2, e)
        }
        ;
        _setResult = (e,n)=>{
            if (this._state === 0) {
                if (hi(n)) {
                    n.then(this._resolve, this._reject);
                    return
                }
                this._state = e,
                    this._value = n,
                    this._executeHandlers()
            }
        }
        ;
        _executeHandlers = ()=>{
            if (this._state === 0)
                return;
            let e = this._handlers.slice();
            this._handlers = [],
                e.forEach(n=>{
                        n[0] || (this._state === 1 && n[1](this._value),
                        this._state === 2 && n[2](this._value),
                            n[0] = !0)
                    }
                )
        }
    }
;
function Rh(t) {
    let e = [];
    function n() {
        return t === void 0 || e.length < t
    }
    function r(o) {
        return e.splice(e.indexOf(o), 1)[0]
    }
    function a(o) {
        if (!n())
            return Ho(new Tt("Not adding Promise due to buffer limit reached."));
        let s = o();
        return e.indexOf(s) === -1 && e.push(s),
            s.then(()=>r(s)).then(null, ()=>r(s).then(null, ()=>{}
            )),
            s
    }
    function i(o) {
        return new sr((s,u)=>{
                let l = e.length;
                if (!l)
                    return s(!0);
                let c = setTimeout(()=>{
                        o && o > 0 && s(!1)
                    }
                    , o);
                e.forEach(p=>{
                        Sn(p).then(()=>{
                                --l || (clearTimeout(c),
                                    s(!0))
                            }
                            , u)
                    }
                )
            }
        )
    }
    return {
        $: e,
        add: a,
        drain: i
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var bE = ["fatal", "error", "warning", "log", "info", "debug"];
function Oh(t) {
    return t === "warn" ? "warning" : bE.includes(t) ? t : "log"
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var s0 = {
    nowSeconds: ()=>Date.now() / 1e3
};
function TE() {
    if (!performance || !performance.now)
        return;
    let t = Date.now() - performance.now();
    return {
        now: ()=>performance.now(),
        timeOrigin: t
    }
}
var o0 = TE()
    , zh = o0 === void 0 ? s0 : {
    nowSeconds: ()=>(o0.timeOrigin + o0.now()) / 1e3
}
    , $r = s0.nowSeconds.bind(s0)
    , u0 = zh.nowSeconds.bind(zh);
var Eu, DF = (()=>{
        if (!performance || !performance.now) {
            Eu = "none";
            return
        }
        let t = 3600 * 1e3
            , e = performance.now()
            , n = Date.now()
            , r = performance.timeOrigin ? Math.abs(performance.timeOrigin + e - n) : t
            , a = r < t
            , i = performance.timeOrigin
            , s = typeof i == "number" ? Math.abs(i + e - n) : t
            , u = s < t;
        return a || u ? r <= s ? (Eu = "timeOrigin",
            performance.timeOrigin) : (Eu = "navigationStart",
            i) : (Eu = "dateNow",
            n)
    }
)();

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var PF = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function Ia(t, e=[]) {
    return [t, e]
}
function Nh(t, e) {
    let[n,r] = t;
    return [n, [...r, e]]
}
function c0(t, e) {
    t[1].forEach(r=>{
            let a = r[0].type;
            e(r, a)
        }
    )
}
function l0(t, e) {
    return (e || new TextEncoder).encode(t)
}
function Cu(t, e) {
    let[n,r] = t
        , a = JSON.stringify(n);
    function i(o) {
        typeof a == "string" ? a = typeof o == "string" ? a + o : [l0(a, e), o] : a.push(typeof o == "string" ? l0(o, e) : o)
    }
    for (let o of r) {
        let[s,u] = o;
        i(`
${JSON.stringify(s)}
`),
            i(typeof u == "string" || u instanceof Uint8Array ? u : JSON.stringify(u))
    }
    return typeof a == "string" ? a : yE(a)
}
function yE(t) {
    let e = t.reduce((a,i)=>a + i.length, 0)
        , n = new Uint8Array(e)
        , r = 0;
    for (let a of t)
        n.set(a, r),
            r += a.length;
    return n
}
function Uh(t, e) {
    let n = typeof t.data == "string" ? l0(t.data, e) : t.data;
    return [Ba({
        type: "attachment",
        length: n.length,
        filename: t.filename,
        content_type: t.contentType,
        attachment_type: t.attachmentType
    }), n]
}
var vE = {
    session: "session",
    sessions: "session",
    attachment: "attachment",
    transaction: "transaction",
    event: "error",
    client_report: "internal",
    user_report: "default"
};
function d0(t) {
    return vE[t]
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function qh(t, e, n) {
    let r = [{
        type: "client_report"
    }, {
        timestamp: n || $r(),
        discarded_events: t
    }];
    return Ia(e ? {
        dsn: e
    } : {}, [r])
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var SE = 60 * 1e3;
function xE(t, e=Date.now()) {
    let n = parseInt(`${t}`, 10);
    if (!isNaN(n))
        return n * 1e3;
    let r = Date.parse(`${t}`);
    return isNaN(r) ? SE : r - e
}
function EE(t, e) {
    return t[e] || t.all || 0
}
function jh(t, e, n=Date.now()) {
    return EE(t, e) > n
}
function Hh(t, {statusCode: e, headers: n}, r=Date.now()) {
    let a = {
        ...t
    }
        , i = n && n["x-sentry-rate-limits"]
        , o = n && n["retry-after"];
    if (i)
        for (let s of i.trim().split(",")) {
            let[u,l] = s.split(":", 2)
                , c = parseInt(u, 10)
                , p = (isNaN(c) ? 60 : c) * 1e3;
            if (!l)
                a.all = r + p;
            else
                for (let m of l.split(";"))
                    a[m] = r + p
        }
    else
        o ? a.all = r + xE(o, r) : e === 429 && (a.all = r + 60 * 1e3);
    return a
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function Wh(t) {
    return t[0]
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function p0(t) {
    let e = u0()
        , n = {
        sid: kr(),
        init: !0,
        timestamp: e,
        started: e,
        duration: 0,
        status: "ok",
        errors: 0,
        ignoreDuration: !1,
        toJSON: ()=>CE(n)
    };
    return t && ur(n, t),
        n
}
function ur(t, e={}) {
    if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address),
    !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)),
        t.timestamp = e.timestamp || u0(),
    e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration),
    e.sid && (t.sid = e.sid.length === 32 ? e.sid : kr()),
    e.init !== void 0 && (t.init = e.init),
    !t.did && e.did && (t.did = `${e.did}`),
    typeof e.started == "number" && (t.started = e.started),
        t.ignoreDuration)
        t.duration = void 0;
    else if (typeof e.duration == "number")
        t.duration = e.duration;
    else {
        let n = t.timestamp - t.started;
        t.duration = n >= 0 ? n : 0
    }
    e.release && (t.release = e.release),
    e.environment && (t.environment = e.environment),
    !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress),
    !t.userAgent && e.userAgent && (t.userAgent = e.userAgent),
    typeof e.errors == "number" && (t.errors = e.errors),
    e.status && (t.status = e.status)
}
function g0(t, e) {
    let n = {};
    e ? n = {
        status: e
    } : t.status === "ok" && (n = {
        status: "exited"
    }),
        ur(t, n)
}
function CE(t) {
    return Ba({
        sid: `${t.sid}`,
        init: t.init,
        started: new Date(t.started * 1e3).toISOString(),
        timestamp: new Date(t.timestamp * 1e3).toISOString(),
        status: t.status,
        errors: t.errors,
        did: typeof t.did == "number" || typeof t.did == "string" ? `${t.did}` : void 0,
        duration: t.duration,
        attrs: {
            release: t.release,
            environment: t.environment,
            ip_address: t.ipAddress,
            user_agent: t.userAgent
        }
    })
}

var Kh = 100
    , Nn = class t {
        _notifyingListeners;
        _scopeListeners;
        _eventProcessors;
        _breadcrumbs;
        _user;
        _tags;
        _extra;
        _contexts;
        _attachments;
        _sdkProcessingMetadata;
        _fingerprint;
        _level;
        _transactionName;
        _span;
        _session;
        _requestSession;
        constructor() {
            this._notifyingListeners = !1,
                this._scopeListeners = [],
                this._eventProcessors = [],
                this._breadcrumbs = [],
                this._attachments = [],
                this._user = {},
                this._tags = {},
                this._extra = {},
                this._contexts = {},
                this._sdkProcessingMetadata = {}
        }
        static clone(e) {
            let n = new t;
            return e && (n._breadcrumbs = [...e._breadcrumbs],
                n._tags = {
                    ...e._tags
                },
                n._extra = {
                    ...e._extra
                },
                n._contexts = {
                    ...e._contexts
                },
                n._user = e._user,
                n._level = e._level,
                n._span = e._span,
                n._session = e._session,
                n._transactionName = e._transactionName,
                n._fingerprint = e._fingerprint,
                n._eventProcessors = [...e._eventProcessors],
                n._requestSession = e._requestSession,
                n._attachments = [...e._attachments]),
                n
        }
        addScopeListener(e) {
            this._scopeListeners.push(e)
        }
        addEventProcessor(e) {
            return this._eventProcessors.push(e),
                this
        }
        setUser(e) {
            return this._user = e || {},
            this._session && ur(this._session, {
                user: e
            }),
                this._notifyScopeListeners(),
                this
        }
        getUser() {
            return this._user
        }
        getRequestSession() {
            return this._requestSession
        }
        setRequestSession(e) {
            return this._requestSession = e,
                this
        }
        setTags(e) {
            return this._tags = {
                ...this._tags,
                ...e
            },
                this._notifyScopeListeners(),
                this
        }
        setTag(e, n) {
            return this._tags = {
                ...this._tags,
                [e]: n
            },
                this._notifyScopeListeners(),
                this
        }
        setExtras(e) {
            return this._extra = {
                ...this._extra,
                ...e
            },
                this._notifyScopeListeners(),
                this
        }
        setExtra(e, n) {
            return this._extra = {
                ...this._extra,
                [e]: n
            },
                this._notifyScopeListeners(),
                this
        }
        setFingerprint(e) {
            return this._fingerprint = e,
                this._notifyScopeListeners(),
                this
        }
        setLevel(e) {
            return this._level = e,
                this._notifyScopeListeners(),
                this
        }
        setTransactionName(e) {
            return this._transactionName = e,
                this._notifyScopeListeners(),
                this
        }
        setContext(e, n) {
            return n === null ? delete this._contexts[e] : this._contexts = {
                ...this._contexts,
                [e]: n
            },
                this._notifyScopeListeners(),
                this
        }
        setSpan(e) {
            return this._span = e,
                this._notifyScopeListeners(),
                this
        }
        getSpan() {
            return this._span
        }
        getTransaction() {
            let e = this.getSpan();
            return e && e.transaction
        }
        setSession(e) {
            return e ? this._session = e : delete this._session,
                this._notifyScopeListeners(),
                this
        }
        getSession() {
            return this._session
        }
        update(e) {
            if (!e)
                return this;
            if (typeof e == "function") {
                let n = e(this);
                return n instanceof t ? n : this
            }
            return e instanceof t ? (this._tags = {
                ...this._tags,
                ...e._tags
            },
                this._extra = {
                    ...this._extra,
                    ...e._extra
                },
                this._contexts = {
                    ...this._contexts,
                    ...e._contexts
                },
            e._user && Object.keys(e._user).length && (this._user = e._user),
            e._level && (this._level = e._level),
            e._fingerprint && (this._fingerprint = e._fingerprint),
            e._requestSession && (this._requestSession = e._requestSession)) : Yn(e) && (e = e,
                this._tags = {
                    ...this._tags,
                    ...e.tags
                },
                this._extra = {
                    ...this._extra,
                    ...e.extra
                },
                this._contexts = {
                    ...this._contexts,
                    ...e.contexts
                },
            e.user && (this._user = e.user),
            e.level && (this._level = e.level),
            e.fingerprint && (this._fingerprint = e.fingerprint),
            e.requestSession && (this._requestSession = e.requestSession)),
                this
        }
        clear() {
            return this._breadcrumbs = [],
                this._tags = {},
                this._extra = {},
                this._user = {},
                this._contexts = {},
                this._level = void 0,
                this._transactionName = void 0,
                this._fingerprint = void 0,
                this._requestSession = void 0,
                this._span = void 0,
                this._session = void 0,
                this._notifyScopeListeners(),
                this._attachments = [],
                this
        }
        addBreadcrumb(e, n) {
            let r = typeof n == "number" ? Math.min(n, Kh) : Kh;
            if (r <= 0)
                return this;
            let a = {
                timestamp: $r(),
                ...e
            };
            return this._breadcrumbs = [...this._breadcrumbs, a].slice(-r),
                this._notifyScopeListeners(),
                this
        }
        clearBreadcrumbs() {
            return this._breadcrumbs = [],
                this._notifyScopeListeners(),
                this
        }
        addAttachment(e) {
            return this._attachments.push(e),
                this
        }
        getAttachments() {
            return this._attachments
        }
        clearAttachments() {
            return this._attachments = [],
                this
        }
        applyToEvent(e, n={}) {
            if (this._extra && Object.keys(this._extra).length && (e.extra = {
                ...this._extra,
                ...e.extra
            }),
            this._tags && Object.keys(this._tags).length && (e.tags = {
                ...this._tags,
                ...e.tags
            }),
            this._user && Object.keys(this._user).length && (e.user = {
                ...this._user,
                ...e.user
            }),
            this._contexts && Object.keys(this._contexts).length && (e.contexts = {
                ...this._contexts,
                ...e.contexts
            }),
            this._level && (e.level = this._level),
            this._transactionName && (e.transaction = this._transactionName),
                this._span) {
                e.contexts = {
                    trace: this._span.getTraceContext(),
                    ...e.contexts
                };
                let r = this._span.transaction && this._span.transaction.name;
                r && (e.tags = {
                    transaction: r,
                    ...e.tags
                })
            }
            return this._applyFingerprint(e),
                e.breadcrumbs = [...e.breadcrumbs || [], ...this._breadcrumbs],
                e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0,
                e.sdkProcessingMetadata = {
                    ...e.sdkProcessingMetadata,
                    ...this._sdkProcessingMetadata
                },
                this._notifyEventProcessors([...Gh(), ...this._eventProcessors], e, n)
        }
        setSDKProcessingMetadata(e) {
            return this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...e
            },
                this
        }
        _notifyEventProcessors(e, n, r, a=0) {
            return new sr((i,o)=>{
                    let s = e[a];
                    if (n === null || typeof s != "function")
                        i(n);
                    else {
                        let u = s({
                            ...n
                        }, r);
                        !1 && s.id && u === null && Se.log(`Event processor "${s.id}" dropped event`),
                            hi(u) ? u.then(l=>this._notifyEventProcessors(e, l, r, a + 1).then(i)).then(null, o) : this._notifyEventProcessors(e, u, r, a + 1).then(i).then(null, o)
                    }
                }
            )
        }
        _notifyScopeListeners() {
            this._notifyingListeners || (this._notifyingListeners = !0,
                this._scopeListeners.forEach(e=>{
                        e(this)
                    }
                ),
                this._notifyingListeners = !1)
        }
        _applyFingerprint(e) {
            e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [],
            this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
            e.fingerprint && !e.fingerprint.length && delete e.fingerprint
        }
    }
;

function Gh() {
    return bi("globalEventProcessors", ()=>[])
}
function lr(t) {
    Gh().push(t)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var m0 = 4
    , wE = 100
    , _r = class {
        constructor(e, n=new Nn, r=m0) {
            this._version = r;
            this.getStackTop().scope = n,
            e && this.bindClient(e)
        }
        _stack = [{}];
        _lastEventId;
        isOlderThan(e) {
            return this._version < e
        }
        bindClient(e) {
            let n = this.getStackTop();
            n.client = e,
            e && e.setupIntegrations && e.setupIntegrations()
        }
        pushScope() {
            let e = Nn.clone(this.getScope());
            return this.getStack().push({
                client: this.getClient(),
                scope: e
            }),
                e
        }
        popScope() {
            return this.getStack().length <= 1 ? !1 : !!this.getStack().pop()
        }
        withScope(e) {
            let n = this.pushScope();
            try {
                e(n)
            } finally {
                this.popScope()
            }
        }
        getClient() {
            return this.getStackTop().client
        }
        getScope() {
            return this.getStackTop().scope
        }
        getStack() {
            return this._stack
        }
        getStackTop() {
            return this._stack[this._stack.length - 1]
        }
        captureException(e, n) {
            let r = this._lastEventId = n && n.event_id ? n.event_id : kr()
                , a = new Error("Sentry syntheticException");
            return this._withClient((i,o)=>{
                    i.captureException(e, {
                        originalException: e,
                        syntheticException: a,
                        ...n,
                        event_id: r
                    }, o)
                }
            ),
                r
        }
        captureMessage(e, n, r) {
            let a = this._lastEventId = r && r.event_id ? r.event_id : kr()
                , i = new Error(e);
            return this._withClient((o,s)=>{
                    o.captureMessage(e, n, {
                        originalException: e,
                        syntheticException: i,
                        ...r,
                        event_id: a
                    }, s)
                }
            ),
                a
        }
        captureEvent(e, n) {
            let r = n && n.event_id ? n.event_id : kr();
            return e.type !== "transaction" && (this._lastEventId = r),
                this._withClient((a,i)=>{
                        a.captureEvent(e, {
                            ...n,
                            event_id: r
                        }, i)
                    }
                ),
                r
        }
        lastEventId() {
            return this._lastEventId
        }
        addBreadcrumb(e, n) {
            let {scope: r, client: a} = this.getStackTop();
            if (!r || !a)
                return;
            let {beforeBreadcrumb: i=null, maxBreadcrumbs: o=wE} = a.getOptions && a.getOptions() || {};
            if (o <= 0)
                return;
            let u = {
                timestamp: $r(),
                ...e
            }
                , l = i ? Vd(()=>i(u, n)) : u;
            l !== null && r.addBreadcrumb(l, o)
        }
        setUser(e) {
            let n = this.getScope();
            n && n.setUser(e)
        }
        setTags(e) {
            let n = this.getScope();
            n && n.setTags(e)
        }
        setExtras(e) {
            let n = this.getScope();
            n && n.setExtras(e)
        }
        setTag(e, n) {
            let r = this.getScope();
            r && r.setTag(e, n)
        }
        setExtra(e, n) {
            let r = this.getScope();
            r && r.setExtra(e, n)
        }
        setContext(e, n) {
            let r = this.getScope();
            r && r.setContext(e, n)
        }
        configureScope(e) {
            let {scope: n, client: r} = this.getStackTop();
            n && r && e(n)
        }
        run(e) {
            let n = vi(this);
            try {
                e(this)
            } finally {
                vi(n)
            }
        }
        getIntegration(e) {
            let n = this.getClient();
            if (!n)
                return null;
            try {
                return n.getIntegration(e)
            } catch {
                return !1 && Se.warn(`Cannot retrieve integration ${e.id} from the current Hub`),
                    null
            }
        }
        startTransaction(e, n) {
            return this._callExtensionMethod("startTransaction", e, n)
        }
        traceHeaders() {
            return this._callExtensionMethod("traceHeaders")
        }
        captureSession(e=!1) {
            if (e)
                return this.endSession();
            this._sendSessionUpdate()
        }
        endSession() {
            let e = this.getStackTop()
                , n = e && e.scope
                , r = n && n.getSession();
            r && g0(r),
                this._sendSessionUpdate(),
            n && n.setSession()
        }
        startSession(e) {
            let {scope: n, client: r} = this.getStackTop()
                , {release: a, environment: i} = r && r.getOptions() || {}
                , o = it()
                , {userAgent: s} = o.navigator || {}
                , u = p0({
                release: a,
                environment: i,
                ...n && {
                    user: n.getUser()
                },
                ...s && {
                    userAgent: s
                },
                ...e
            });
            if (n) {
                let l = n.getSession && n.getSession();
                l && l.status === "ok" && ur(l, {
                    status: "exited"
                }),
                    this.endSession(),
                    n.setSession(u)
            }
            return u
        }
        shouldSendDefaultPii() {
            let e = this.getClient()
                , n = e && e.getOptions();
            return !!(n && n.sendDefaultPii)
        }
        _sendSessionUpdate() {
            let {scope: e, client: n} = this.getStackTop();
            if (!e)
                return;
            let r = e.getSession();
            r && n && n.captureSession && n.captureSession(r)
        }
        _withClient(e) {
            let {scope: n, client: r} = this.getStackTop();
            r && e(r, n)
        }
        _callExtensionMethod(e, ...n) {
            let a = Wo().__SENTRY__;
            if (a && a.extensions && typeof a.extensions[e] == "function")
                return a.extensions[e].apply(this, n);
            !1 && Se.warn(`Extension method ${e} couldn't be found, doing nothing.`)
        }
    }
;
function Wo() {
    let t = it();
    return t.__SENTRY__ = t.__SENTRY__ || {
        extensions: {},
        hub: void 0
    },
        t
}
function vi(t) {
    let e = Wo()
        , n = Un(e);
    return wu(e, t),
        n
}

function Le() {
    let t = Wo();
    return (!$h(t) || Un(t).isOlderThan(m0)) && wu(t, new _r),
        Ih() ? DE(t) : Un(t)
}
function DE(t) {
    try {
        let e = Wo().__SENTRY__
            , n = e && e.extensions && e.extensions.domain && e.extensions.domain.active;
        if (!n)
            return Un(t);
        if (!$h(n) || Un(n).isOlderThan(m0)) {
            let r = Un(t).getStackTop();
            wu(n, new _r(r.client,Nn.clone(r.scope)))
        }
        return Un(n)
    } catch {
        return Un(t)
    }
}
function $h(t) {
    return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
}
function Un(t) {
    return bi("hub", ()=>new _r, t)
}
function wu(t, e) {
    if (!t)
        return !1;
    let n = t.__SENTRY__ = t.__SENTRY__ || {};
    return n.hub = e,
        !0
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function Si(t, e) {
    return Le().captureException(t, {
        captureContext: e
    })
}
function Du(t, e) {
    let n = typeof e == "string" ? e : void 0
        , r = typeof e != "string" ? {
        captureContext: e
    } : void 0;
    return Le().captureMessage(t, n, r)
}
function Au(t, e) {
    return Le().captureEvent(t, e)
}
function ku(t) {
    Le().configureScope(t)
}
function Pu(t) {
    Le().addBreadcrumb(t)
}
function Lu(t, e) {
    Le().setContext(t, e)
}
function _u(t) {
    Le().setExtras(t)
}
function Fu(t, e) {
    Le().setExtra(t, e)
}
function Mu(t) {
    Le().setTags(t)
}
function Bu(t, e) {
    Le().setTag(t, e)
}
function Iu(t) {
    Le().setUser(t)
}
function xi(t) {
    Le().withScope(t)
}
function Ru(t, e) {
    return Le().startTransaction({
        metadata: {
            source: "custom"
        },
        ...t
    }, e)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var AE = "7";
function Vh(t) {
    let e = t.protocol ? `${t.protocol}:` : ""
        , n = t.port ? `:${t.port}` : "";
    return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`
}
function kE(t) {
    return `${Vh(t)}${t.projectId}/envelope/`
}
function PE(t, e) {
    return Dh({
        sentry_key: t.publicKey,
        sentry_version: AE,
        ...e && {
            sentry_client: `${e.name}/${e.version}`
        }
    })
}
function Ko(t, e={}) {
    let n = typeof e == "string" ? e : e.tunnel
        , r = typeof e == "string" || !e._metadata ? void 0 : e._metadata.sdk;
    return n || `${kE(t)}?${PE(t, r)}`
}
function f0(t, e) {
    let n = vu(t)
        , r = `${Vh(n)}embed/error-page/`
        , a = `dsn=${Fa(n)}`;
    for (let i in e)
        if (i !== "dsn")
            if (i === "user") {
                let o = e.user;
                if (!o)
                    continue;
                o.name && (a += `&name=${encodeURIComponent(o.name)}`),
                o.email && (a += `&email=${encodeURIComponent(o.email)}`)
            } else
                a += `&${encodeURIComponent(i)}=${encodeURIComponent(e[i])}`;
    return `${r}?${a}`
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function Yh(t) {
    if (!t || !t.sdk)
        return;
    let {name: e, version: n} = t.sdk;
    return {
        name: e,
        version: n
    }
}
function LE(t, e) {
    return e && (t.sdk = t.sdk || {},
        t.sdk.name = t.sdk.name || e.name,
        t.sdk.version = t.sdk.version || e.version,
        t.sdk.integrations = [...t.sdk.integrations || [], ...e.integrations || []],
        t.sdk.packages = [...t.sdk.packages || [], ...e.packages || []]),
        t
}
function Qh(t, e, n, r) {
    let a = Yh(n)
        , i = {
        sent_at: new Date().toISOString(),
        ...a && {
            sdk: a
        },
        ...!!r && {
            dsn: Fa(e)
        }
    }
        , o = "aggregates"in t ? [{
        type: "sessions"
    }, t] : [{
        type: "session"
    }, t];
    return Ia(i, [o])
}
function Jh(t, e, n, r) {
    let a = Yh(n)
        , i = t.type || "event"
        , {transactionSampling: o} = t.sdkProcessingMetadata || {}
        , {method: s, rate: u} = o || {};
    LE(t, n && n.sdk);
    let l = _E(t, a, r, e);
    return delete t.sdkProcessingMetadata,
        Ia(l, [[{
            type: i,
            sample_rates: [{
                id: s,
                rate: u
            }]
        }, t]])
}
function _E(t, e, n, r) {
    let a = t.sdkProcessingMetadata && t.sdkProcessingMetadata.baggage
        , i = a && Wh(a);
    return {
        event_id: t.event_id,
        sent_at: new Date().toISOString(),
        ...e && {
            sdk: e
        },
        ...!!n && {
            dsn: Fa(r)
        },
        ...t.type === "transaction" && i && {
            trace: Ba({
                ...i
            })
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var Zh = [];
function Xh(t) {
    return t.reduce((e,n)=>(e.every(r=>n.name !== r.name) && e.push(n),
        e), [])
}
function h0(t) {
    let e = t.defaultIntegrations && [...t.defaultIntegrations] || []
        , n = t.integrations
        , r = [...Xh(e)];
    Array.isArray(n) ? r = [...r.filter(o=>n.every(s=>s.name !== o.name)), ...Xh(n)] : typeof n == "function" && (r = n(r),
        r = Array.isArray(r) ? r : [r]);
    let a = r.map(o=>o.name)
        , i = "Debug";
    return a.indexOf(i) !== -1 && r.push(...r.splice(a.indexOf(i), 1)),
        r
}

function e4(t) {
    let e = {};
    return t.forEach(n=>{
            e[n.name] = n,
            Zh.indexOf(n.name) === -1 && (n.setupOnce(lr, Le),
                Zh.push(n.name),
            !1 && Se.log(`Integration installed: ${n.name}`))
        }
    ),
        e
}

var t4 = "Not capturing exception because it's already been captured."
    , Go = class {
        _options;
        _dsn;
        _transport;
        _integrations = {};
        _integrationsInitialized = !1;
        _numProcessing = 0;
        _outcomes = {};
        constructor(e) {
            if (this._options = e,
                e.dsn) {
                this._dsn = vu(e.dsn);
                let n = Ko(this._dsn, e);
                this._transport = e.transport({
                    recordDroppedEvent: this.recordDroppedEvent.bind(this),
                    ...e.transportOptions,
                    url: n
                })
            } else
                !1 && Se.warn("No DSN provided, client will not do anything.")
        }
        captureException(e, n, r) {
            if (r0(e)) {
                !1 && Se.log(t4);
                return
            }
            let a = n && n.event_id;
            return this._process(this.eventFromException(e, n).then(i=>this._captureEvent(i, n, r)).then(i=>{
                    a = i
                }
            )),
                a
        }
        captureMessage(e, n, r, a) {
            let i = r && r.event_id
                , o = Ro(e) ? this.eventFromMessage(String(e), n, r) : this.eventFromException(e, r);
            return this._process(o.then(s=>this._captureEvent(s, r, a)).then(s=>{
                    i = s
                }
            )),
                i
        }
        captureEvent(e, n, r) {
            if (n && n.originalException && r0(n.originalException)) {
                !1 && Se.log(t4);
                return
            }
            let a = n && n.event_id;
            return this._process(this._captureEvent(e, n, r).then(i=>{
                    a = i
                }
            )),
                a
        }
        captureSession(e) {
            if (!this._isEnabled()) {
                !1 && Se.warn("SDK not enabled, will not capture session.");
                return
            }
            typeof e.release != "string" ? !1 && Se.warn("Discarded session because of missing or non-string release") : (this.sendSession(e),
                ur(e, {
                    init: !1
                }))
        }
        getDsn() {
            return this._dsn
        }
        getOptions() {
            return this._options
        }
        getTransport() {
            return this._transport
        }
        flush(e) {
            let n = this._transport;
            return n ? this._isClientDoneProcessing(e).then(r=>n.flush(e).then(a=>r && a)) : Sn(!0)
        }
        close(e) {
            return this.flush(e).then(n=>(this.getOptions().enabled = !1,
                n))
        }
        setupIntegrations() {
            this._isEnabled() && !this._integrationsInitialized && (this._integrations = e4(this._options.integrations),
                this._integrationsInitialized = !0)
        }
        getIntegrationById(e) {
            return this._integrations[e]
        }
        getIntegration(e) {
            try {
                return this._integrations[e.id] || null
            } catch {
                return !1 && Se.warn(`Cannot retrieve integration ${e.id} from the current Client`),
                    null
            }
        }
        sendEvent(e, n={}) {
            if (this._dsn) {
                let r = Jh(e, this._dsn, this._options._metadata, this._options.tunnel);
                for (let a of n.attachments || [])
                    r = Nh(r, Uh(a, this._options.transportOptions && this._options.transportOptions.textEncoder));
                this._sendEnvelope(r)
            }
        }
        sendSession(e) {
            if (this._dsn) {
                let n = Qh(e, this._dsn, this._options._metadata, this._options.tunnel);
                this._sendEnvelope(n)
            }
        }
        recordDroppedEvent(e, n) {
            if (this._options.sendClientReports) {
                let r = `${e}:${n}`;
                !1 && Se.log(`Adding outcome: "${r}"`),
                    this._outcomes[r] = this._outcomes[r] + 1 || 1
            }
        }
        _updateSessionFromEvent(e, n) {
            let r = !1
                , a = !1
                , i = n.exception && n.exception.values;
            if (i) {
                a = !0;
                for (let u of i) {
                    let l = u.mechanism;
                    if (l && l.handled === !1) {
                        r = !0;
                        break
                    }
                }
            }
            let o = e.status === "ok";
            (o && e.errors === 0 || o && r) && (ur(e, {
                ...r && {
                    status: "crashed"
                },
                errors: e.errors || Number(a || r)
            }),
                this.captureSession(e))
        }
        _isClientDoneProcessing(e) {
            return new sr(n=>{
                    let r = 0
                        , a = 1
                        , i = setInterval(()=>{
                            this._numProcessing == 0 ? (clearInterval(i),
                                n(!0)) : (r += a,
                            e && r >= e && (clearInterval(i),
                                n(!1)))
                        }
                        , a)
                }
            )
        }
        _isEnabled() {
            return this.getOptions().enabled !== !1 && this._dsn !== void 0
        }
        _prepareEvent(e, n, r) {
            let {normalizeDepth: a=3, normalizeMaxBreadth: i=1e3} = this.getOptions()
                , o = {
                ...e,
                event_id: e.event_id || n.event_id || kr(),
                timestamp: e.timestamp || $r()
            };
            this._applyClientOptions(o),
                this._applyIntegrationsMetadata(o);
            let s = r;
            n.captureContext && (s = Nn.clone(s).update(n.captureContext));
            let u = Sn(o);
            if (s) {
                let l = [...n.attachments || [], ...s.getAttachments()];
                l.length && (n.attachments = l),
                    u = s.applyToEvent(o, n)
            }
            return u.then(l=>typeof a == "number" && a > 0 ? this._normalizeEvent(l, a, i) : l)
        }
        _normalizeEvent(e, n, r) {
            if (!e)
                return null;
            let a = {
                ...e,
                ...e.breadcrumbs && {
                    breadcrumbs: e.breadcrumbs.map(i=>({
                        ...i,
                        ...i.data && {
                            data: Lr(i.data, n, r)
                        }
                    }))
                },
                ...e.user && {
                    user: Lr(e.user, n, r)
                },
                ...e.contexts && {
                    contexts: Lr(e.contexts, n, r)
                },
                ...e.extra && {
                    extra: Lr(e.extra, n, r)
                }
            };
            return e.contexts && e.contexts.trace && a.contexts && (a.contexts.trace = e.contexts.trace,
            e.contexts.trace.data && (a.contexts.trace.data = Lr(e.contexts.trace.data, n, r))),
            e.spans && (a.spans = e.spans.map(i=>(i.data && (i.data = Lr(i.data, n, r)),
                i))),
                a
        }
        _applyClientOptions(e) {
            let n = this.getOptions()
                , {environment: r, release: a, dist: i, maxValueLength: o=250} = n;
            "environment"in e || (e.environment = "environment"in n ? r : "production"),
            e.release === void 0 && a !== void 0 && (e.release = a),
            e.dist === void 0 && i !== void 0 && (e.dist = i),
            e.message && (e.message = Ma(e.message, o));
            let s = e.exception && e.exception.values && e.exception.values[0];
            s && s.value && (s.value = Ma(s.value, o));
            let u = e.request;
            u && u.url && (u.url = Ma(u.url, o))
        }
        _applyIntegrationsMetadata(e) {
            let n = Object.keys(this._integrations);
            n.length > 0 && (e.sdk = e.sdk || {},
                e.sdk.integrations = [...e.sdk.integrations || [], ...n])
        }
        _captureEvent(e, n={}, r) {
            return this._processEvent(e, n, r).then(a=>a.event_id, a=>{
                    !1 && Se.warn(a)
                }
            )
        }
        _processEvent(e, n, r) {
            let {beforeSend: a, sampleRate: i} = this.getOptions();
            if (!this._isEnabled())
                return Ho(new Tt("SDK not enabled, will not capture event."));
            let o = e.type === "transaction";
            return !o && typeof i == "number" && Math.random() > i ? (this.recordDroppedEvent("sample_rate", "error"),
                Ho(new Tt(`Discarding event because it's not included in the random sample (sampling rate = ${i})`))) : this._prepareEvent(e, n, r).then(s=>{
                    if (s === null)
                        throw this.recordDroppedEvent("event_processor", e.type || "error"),
                            new Tt("An event processor returned null, will not send event.");
                    if (n.data && n.data.__sentry__ === !0 || o || !a)
                        return s;
                    let l = a(s, n);
                    return FE(l)
                }
            ).then(s=>{
                    if (s === null)
                        throw this.recordDroppedEvent("before_send", e.type || "error"),
                            new Tt("`beforeSend` returned `null`, will not send event.");
                    let u = r && r.getSession();
                    return !o && u && this._updateSessionFromEvent(u, s),
                        this.sendEvent(s, n),
                        s
                }
            ).then(null, s=>{
                    throw s instanceof Tt ? s : (this.captureException(s, {
                        data: {
                            __sentry__: !0
                        },
                        originalException: s
                    }),
                        new Tt(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${s}`))
                }
            )
        }
        _process(e) {
            this._numProcessing += 1,
                e.then(n=>(this._numProcessing -= 1,
                    n), n=>(this._numProcessing -= 1,
                    n))
        }
        _sendEnvelope(e) {
            this._transport && this._dsn ? this._transport.send(e).then(null, n=>{
                    !1 && Se.error("Error while sending event:", n)
                }
            ) : !1 && Se.error("Transport disabled")
        }
        _clearOutcomes() {
            let e = this._outcomes;
            return this._outcomes = {},
                Object.keys(e).map(n=>{
                        let[r,a] = n.split(":");
                        return {
                            reason: r,
                            category: a,
                            quantity: e[n]
                        }
                    }
                )
        }
    }
;

function FE(t) {
    let e = "`beforeSend` method has to return `null` or a valid event.";
    if (hi(t))
        return t.then(n=>{
                if (!(Yn(n) || n === null))
                    throw new Tt(e);
                return n
            }
            , n=>{
                throw new Tt(`beforeSend rejected with ${n}`)
            }
        );
    if (!(Yn(t) || t === null))
        throw new Tt(e);
    return t
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function b0(t, e) {
    e.debug === !0 && !1 && Se.enable();
    let n = Le()
        , r = n.getScope();
    r && r.update(e.initialScope);
    let a = new t(e);
    n.bindClient(a)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var ME = 30;
function $o(t, e, n=Rh(t.bufferSize || ME)) {
    let r = {}
        , a = o=>n.drain(o);
    function i(o) {
        let s = [];
        if (c0(o, (p,m)=>{
                let g = d0(m);
                jh(r, g) ? t.recordDroppedEvent("ratelimit_backoff", g) : s.push(p)
            }
        ),
        s.length === 0)
            return Sn();
        let u = Ia(o[0], s)
            , l = p=>{
            c0(u, (m,g)=>{
                    t.recordDroppedEvent(p, d0(g))
                }
            )
        }
            , c = ()=>e({
            body: Cu(u, t.textEncoder)
        }).then(p=>{
                p.statusCode !== void 0 && (p.statusCode < 200 || p.statusCode >= 300) && !1 && Se.warn(`Sentry responded with status code ${p.statusCode} to sent event.`),
                    r = Hh(r, p)
            }
            , p=>{
                !1 && Se.error("Failed while sending event:", p),
                    l("network_error")
            }
        );
        return n.add(c).then(p=>p, p=>{
                if (p instanceof Tt)
                    return !1 && Se.error("Skipped sending event due to full buffer"),
                        l("queue_overflow"),
                        Sn();
                throw p
            }
        )
    }
    return {
        send: i,
        flush: a
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var Ei = "7.7.0";
var za = {};
eu(za, {
    FunctionToString: ()=>Ra,
    InboundFilters: ()=>Oa
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var n4, Ra = class t {
        static id = "FunctionToString";
        name = t.id;
        setupOnce() {
            n4 = Function.prototype.toString,
                Function.prototype.toString = function(...e) {
                    let n = Ti(this) || this;
                    return n4.apply(n, e)
                }
        }
    }
;

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var BE = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/]
    , Oa = class t {
        constructor(e={}) {
            this._options = e
        }
        static id = "InboundFilters";
        name = t.id;
        setupOnce(e, n) {
            let r = a=>{
                    let i = n();
                    if (i) {
                        let o = i.getIntegration(t);
                        if (o) {
                            let s = i.getClient()
                                , u = s ? s.getOptions() : {}
                                , l = IE(o._options, u);
                            return RE(a, l) ? null : a
                        }
                    }
                    return a
                }
            ;
            r.id = this.name,
                e(r)
        }
    }
;
function IE(t={}, e={}) {
    return {
        allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
        denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
        ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...BE],
        ignoreInternal: t.ignoreInternal !== void 0 ? t.ignoreInternal : !0
    }
}
function RE(t, e) {
    return e.ignoreInternal && qE(t) ? (!1 && Se.warn(`Event dropped due to being internal Sentry Error.
Event: ${Pr(t)}`),
        !0) : OE(t, e.ignoreErrors) ? (!1 && Se.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Pr(t)}`),
        !0) : zE(t, e.denyUrls) ? (!1 && Se.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Pr(t)}.
Url: ${Ou(t)}`),
        !0) : NE(t, e.allowUrls) ? !1 : (!1 && Se.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Pr(t)}.
Url: ${Ou(t)}`),
        !0)
}
function OE(t, e) {
    return !e || !e.length ? !1 : UE(t).some(n=>e.some(r=>Su(n, r)))
}
function zE(t, e) {
    if (!e || !e.length)
        return !1;
    let n = Ou(t);
    return n ? e.some(r=>Su(n, r)) : !1
}
function NE(t, e) {
    if (!e || !e.length)
        return !0;
    let n = Ou(t);
    return n ? e.some(r=>Su(n, r)) : !0
}
function UE(t) {
    if (t.message)
        return [t.message];
    if (t.exception)
        try {
            let {type: e="", value: n=""} = t.exception.values && t.exception.values[0] || {};
            return [`${n}`, `${e}: ${n}`]
        } catch {
            return !1 && Se.error(`Cannot extract message for event ${Pr(t)}`),
                []
        }
    return []
}
function qE(t) {
    try {
        return t.exception.values[0].type === "SentryError"
    } catch {}
    return !1
}
function jE(t=[]) {
    for (let e = t.length - 1; e >= 0; e--) {
        let n = t[e];
        if (n && n.filename !== "<anonymous>" && n.filename !== "[native code]")
            return n.filename || null
    }
    return null
}
function Ou(t) {
    try {
        let e;
        try {
            e = t.exception.values[0].stacktrace.frames
        } catch {}
        return e ? jE(e) : null
    } catch {
        return !1 && Se.error(`Cannot extract url for event ${Pr(t)}`),
            null
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function v0(t, e) {
    let n = S0(t, e)
        , r = {
        type: e && e.name,
        value: GE(e)
    };
    return n.length && (r.stacktrace = {
        frames: n
    }),
    r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"),
        r
}
function HE(t, e, n, r) {
    let a = {
        exception: {
            values: [{
                type: Oo(e) ? e.constructor.name : r ? "UnhandledRejection" : "Error",
                value: `Non-Error ${r ? "promise rejection" : "exception"} captured with keys: ${Ah(e)}`
            }]
        },
        extra: {
            __serialized__: i0(e)
        }
    };
    if (n) {
        let i = S0(t, n);
        i.length && (a.exception.values[0].stacktrace = {
            frames: i
        })
    }
    return a
}
function T0(t, e) {
    return {
        exception: {
            values: [v0(t, e)]
        }
    }
}
function S0(t, e) {
    let n = e.stacktrace || e.stack || ""
        , r = KE(e);
    try {
        return t(n, r)
    } catch {}
    return []
}
var WE = /Minified React error #\d+;/i;
function KE(t) {
    if (t) {
        if (typeof t.framesToPop == "number")
            return t.framesToPop;
        if (WE.test(t.message))
            return 1
    }
    return 0
}
function GE(t) {
    let e = t && t.message;
    return e ? e.error && typeof e.error.message == "string" ? e.error.message : e : "No error message"
}
function r4(t, e, n, r) {
    let a = n && n.syntheticException || void 0
        , i = zu(t, e, a, r);
    return Gr(i),
        i.level = "error",
    n && n.event_id && (i.event_id = n.event_id),
        Sn(i)
}
function a4(t, e, n="info", r, a) {
    let i = r && r.syntheticException || void 0
        , o = y0(t, e, i, a);
    return o.level = n,
    r && r.event_id && (o.event_id = r.event_id),
        Sn(o)
}
function zu(t, e, n, r, a) {
    let i;
    if (yu(e) && e.error)
        return T0(t, e.error);
    if (hh(e)) {
        let o = e;
        if ("stack"in e)
            i = T0(t, e);
        else {
            let s = o.name || "DOMException"
                , u = o.message ? `${s}: ${o.message}` : s;
            i = y0(t, u, n, r),
                jo(i, u)
        }
        return "code"in o && (i.tags = {
            ...i.tags,
            "DOMException.code": `${o.code}`
        }),
            i
    }
    return Tu(e) ? T0(t, e) : Yn(e) || Oo(e) ? (i = HE(t, e, n, a),
        Gr(i, {
            synthetic: !0
        }),
        i) : (i = y0(t, e, n, r),
        jo(i, `${e}`, void 0),
        Gr(i, {
            synthetic: !0
        }),
        i)
}
function y0(t, e, n, r) {
    let a = {
        message: e
    };
    if (r && n) {
        let i = S0(t, n);
        i.length && (a.exception = {
            values: [{
                value: e,
                stacktrace: {
                    frames: i
                }
            }]
        })
    }
    return a
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var x0 = "Breadcrumbs"
    , Vr = class t {
        static id = x0;
        name = t.id;
        options;
        constructor(e) {
            this.options = {
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0,
                ...e
            }
        }
        setupOnce() {
            this.options.console && Zn("console", VE),
            this.options.dom && Zn("dom", $E(this.options.dom)),
            this.options.xhr && Zn("xhr", YE),
            this.options.fetch && Zn("fetch", QE),
            this.options.history && Zn("history", JE)
        }
    }
;
function $E(t) {
    function e(n) {
        let r, a = typeof t == "object" ? t.serializeAttribute : void 0;
        typeof a == "string" && (a = [a]);
        try {
            r = n.event.target ? zo(n.event.target, a) : zo(n.event, a)
        } catch {
            r = "<unknown>"
        }
        r.length !== 0 && Le().addBreadcrumb({
            category: `ui.${n.name}`,
            message: r
        }, {
            event: n.event,
            name: n.name,
            global: n.global
        })
    }
    return e
}

function VE(t) {
    let e = {
        category: "console",
        data: {
            arguments: t.args,
            logger: "console"
        },
        level: Oh(t.level),
        message: Yd(t.args, " ")
    };
    if (t.level === "assert")
        if (t.args[0] === !1)
            e.message = `Assertion failed: ${Yd(t.args.slice(1), " ") || "console.assert"}`,
                e.data.arguments = t.args.slice(1);
        else
            return;
    Le().addBreadcrumb(e, {
        input: t.args,
        level: t.level
    })
}
function YE(t) {
    if (t.endTimestamp) {
        if (t.xhr.__sentry_own_request__)
            return;
        let {method: e, url: n, status_code: r, body: a} = t.xhr.__sentry_xhr__ || {};
        Le().addBreadcrumb({
            category: "xhr",
            data: {
                method: e,
                url: n,
                status_code: r
            },
            type: "http"
        }, {
            xhr: t.xhr,
            input: a
        });
        return
    }
}
function QE(t) {
    t.endTimestamp && (t.fetchData.url.match(/sentry_key/) && t.fetchData.method === "POST" || (t.error ? Le().addBreadcrumb({
        category: "fetch",
        data: t.fetchData,
        level: "error",
        type: "http"
    }, {
        data: t.error,
        input: t.args
    }) : Le().addBreadcrumb({
        category: "fetch",
        data: {
            ...t.fetchData,
            status_code: t.response.status
        },
        type: "http"
    }, {
        input: t.args,
        response: t.response
    })))
}
function JE(t) {
    let e = it()
        , n = t.from
        , r = t.to
        , a = xu(e.location.href)
        , i = xu(n)
        , o = xu(r);
    i.path || (i = a),
    a.protocol === o.protocol && a.host === o.host && (r = o.relative),
    a.protocol === i.protocol && a.host === i.host && (n = i.relative),
        Le().addBreadcrumb({
            category: "navigation",
            data: {
                from: n,
                to: r
            }
        })
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var Uu = it(), Nu;
function E0() {
    if (Nu)
        return Nu;
    if (Lh(fetch))
        return Nu = fetch.bind(Uu);
    let t = Uu.document
        , e = fetch;
    if (t && typeof t.createElement == "function")
        try {
            let n = t.createElement("iframe");
            n.hidden = !0,
                t.head.appendChild(n);
            let r = n.contentWindow;
            r && r.fetch && (e = r.fetch),
                t.head.removeChild(n)
        } catch (n) {
            !1 && Se.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n)
        }
    return Nu = e.bind(Uu)
}
function i4(t, e) {
    Object.prototype.toString.call(Uu && navigator) === "[object Navigator]" && typeof navigator.sendBeacon == "function" ? navigator.sendBeacon.bind(navigator)(t, e) : Ph() && E0()(t, {
        body: e,
        method: "POST",
        credentials: "omit",
        keepalive: !0
    }).then(null, i=>{
            !1 && Se.error(i)
        }
    )
}

var C0 = it()
    , Ci = class extends Go {
        constructor(e) {
            e._metadata = e._metadata || {},
                e._metadata.sdk = e._metadata.sdk || {
                    name: "sentry.javascript.browser",
                    packages: [{
                        name: "npm:@sentry/browser",
                        version: Ei
                    }],
                    version: Ei
                },
                super(e),
            e.sendClientReports && C0.document && C0.document.addEventListener("visibilitychange", ()=>{
                    C0.document.visibilityState === "hidden" && this._flushOutcomes()
                }
            )
        }
        eventFromException(e, n) {
            return r4(this._options.stackParser, e, n, this._options.attachStacktrace)
        }
        eventFromMessage(e, n="info", r) {
            return a4(this._options.stackParser, e, n, r, this._options.attachStacktrace)
        }
        sendEvent(e, n) {
            let r = this.getIntegrationById(x0);
            r && r.options && r.options.sentry && Le().addBreadcrumb({
                category: `sentry.${e.type === "transaction" ? "transaction" : "event"}`,
                event_id: e.event_id,
                level: e.level,
                message: Pr(e)
            }, {
                event: e
            }),
                super.sendEvent(e, n)
        }
        _prepareEvent(e, n, r) {
            return e.platform = e.platform || "javascript",
                super._prepareEvent(e, n, r)
        }
        _flushOutcomes() {
            let e = this._clearOutcomes();
            if (e.length === 0) {
                !1 && Se.log("No outcomes to send");
                return
            }
            if (!this._dsn) {
                !1 && Se.log("No dsn provided, will not send outcomes");
                return
            }
            !1 && Se.log("Sending outcomes:", e);
            let n = Ko(this._dsn, this._options)
                , r = qh(e, this._options.tunnel && Fa(this._dsn));
            try {
                i4(n, Cu(r))
            } catch (a) {
                !1 && Se.error(a)
            }
        }
    }
;

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function Vo(t, e=E0()) {
    function n(r) {
        let a = {
            body: r.body,
            method: "POST",
            referrerPolicy: "origin",
            headers: t.headers,
            ...t.fetchOptions
        };
        return e(t.url, a).then(i=>({
            statusCode: i.status,
            headers: {
                "x-sentry-rate-limits": i.headers.get("X-Sentry-Rate-Limits"),
                "retry-after": i.headers.get("Retry-After")
            }
        }))
    }
    return $o(t, n)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var wi = "?"
    , ZE = 10
    , XE = 20
    , eC = 30
    , tC = 40
    , nC = 50;
function Yo(t, e, n, r) {
    let a = {
        filename: t,
        function: e,
        in_app: !0
    };
    return n !== void 0 && (a.lineno = n),
    r !== void 0 && (a.colno = r),
        a
}
var rC = /^\s*at (?:(.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
    , aC = /\((\S*)(?::(\d+))(?::(\d+))\)/
    , iC = t=>{
        let e = rC.exec(t);
        if (e) {
            if (e[2] && e[2].indexOf("eval") === 0) {
                let i = aC.exec(e[2]);
                i && (e[2] = i[1],
                    e[3] = i[2],
                    e[4] = i[3])
            }
            let[r,a] = u4(e[1] || wi, e[2]);
            return Yo(a, r, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
        }
    }
    , w0 = [eC, iC]
    , oC = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
    , sC = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
    , uC = t=>{
        let e = oC.exec(t);
        if (e) {
            if (e[3] && e[3].indexOf(" > eval") > -1) {
                let i = sC.exec(e[3]);
                i && (e[1] = e[1] || "eval",
                    e[3] = i[1],
                    e[4] = i[2],
                    e[5] = "")
            }
            let r = e[3]
                , a = e[1] || wi;
            return [a,r] = u4(a, r),
                Yo(r, a, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
        }
    }
    , D0 = [nC, uC]
    , lC = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
    , cC = t=>{
        let e = lC.exec(t);
        return e ? Yo(e[2], e[1] || wi, +e[3], e[4] ? +e[4] : void 0) : void 0
    }
    , A0 = [tC, cC]
    , dC = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i
    , pC = t=>{
        let e = dC.exec(t);
        return e ? Yo(e[2], e[3] || wi, +e[1]) : void 0
    }
    , o4 = [ZE, pC]
    , gC = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i
    , mC = t=>{
        let e = gC.exec(t);
        return e ? Yo(e[5], e[3] || e[4] || wi, +e[1], +e[2]) : void 0
    }
    , s4 = [XE, mC]
    , k0 = [w0, D0, A0]
    , qu = e0(...k0)
    , u4 = (t,e)=>{
        let n = t.indexOf("safari-extension") !== -1
            , r = t.indexOf("safari-web-extension") !== -1;
        return n || r ? [t.indexOf("@") !== -1 ? t.split("@")[0] : wi, n ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
    }
;

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var P0 = 0;
function L0() {
    return P0 > 0
}
function fC() {
    P0 += 1,
        setTimeout(()=>{
                P0 -= 1
            }
        )
}
function Fr(t, e={}, n) {
    if (typeof t != "function")
        return t;
    try {
        let a = t.__sentry_wrapped__;
        if (a)
            return a;
        if (Ti(t))
            return t
    } catch {
        return t
    }
    let r = function() {
        let a = Array.prototype.slice.call(arguments);
        try {
            n && typeof n == "function" && n.apply(this, arguments);
            let i = a.map(o=>Fr(o, e));
            return t.apply(this, i)
        } catch (i) {
            throw fC(),
                xi(o=>{
                        o.addEventProcessor(s=>(e.mechanism && (jo(s, void 0, void 0),
                            Gr(s, e.mechanism)),
                            s.extra = {
                                ...s.extra,
                                arguments: a
                            },
                            s)),
                            Si(i)
                    }
                ),
                i
        }
    };
    try {
        for (let a in t)
            Object.prototype.hasOwnProperty.call(t, a) && (r[a] = t[a])
    } catch {}
    Jd(r, t),
        Uo(t, "__sentry_wrapped__", r);
    try {
        Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
            get() {
                return t.name
            }
        })
    } catch {}
    return r
}
var _0 = {};
eu(_0, {
    Breadcrumbs: ()=>Vr,
    Dedupe: ()=>Zr,
    GlobalHandlers: ()=>cr,
    HttpContext: ()=>Jr,
    LinkedErrors: ()=>Qr,
    TryCatch: ()=>Yr
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var cr = class t {
        static id = "GlobalHandlers";
        name = t.id;
        _options;
        _installFunc = {
            onerror: hC,
            onunhandledrejection: bC
        };
        constructor(e) {
            this._options = {
                onerror: !0,
                onunhandledrejection: !0,
                ...e
            }
        }
        setupOnce() {
            let e = this._options;
            for (let n in e) {
                let r = this._installFunc[n];
                r && e[n] && (vC(n),
                    r(),
                    this._installFunc[n] = void 0)
            }
        }
    }
;
function hC() {
    Zn("error", t=>{
            let[e,n,r] = d4();
            if (!e.getIntegration(cr))
                return;
            let {msg: a, url: i, line: o, column: s, error: u} = t;
            if (L0() || u && u.__sentry_own_request__)
                return;
            let l = u === void 0 && Dr(a) ? yC(a, i, o, s) : l4(zu(n, u || a, void 0, r, !1), i, o, s);
            l.level = "error",
                c4(e, u, l, "onerror")
        }
    )
}
function bC() {
    Zn("unhandledrejection", t=>{
            let[e,n,r] = d4();
            if (!e.getIntegration(cr))
                return;
            let a = t;
            try {
                "reason"in t ? a = t.reason : "detail"in t && "reason"in t.detail && (a = t.detail.reason)
            } catch {}
            if (L0() || a && a.__sentry_own_request__)
                return !0;
            let i = Ro(a) ? TC(a) : zu(n, a, void 0, r, !0);
            i.level = "error",
                c4(e, a, i, "onunhandledrejection")
        }
    )
}
function TC(t) {
    return {
        exception: {
            values: [{
                type: "UnhandledRejection",
                value: `Non-Error promise rejection captured with value: ${String(t)}`
            }]
        }
    }
}
function yC(t, e, n, r) {
    let a = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
        , i = yu(t) ? t.message : t
        , o = "Error"
        , s = i.match(a);
    return s && (o = s[1],
        i = s[2]),
        l4({
            exception: {
                values: [{
                    type: o,
                    value: i
                }]
            }
        }, e, n, r)
}
function l4(t, e, n, r) {
    let a = t.exception = t.exception || {}
        , i = a.values = a.values || []
        , o = i[0] = i[0] || {}
        , s = o.stacktrace = o.stacktrace || {}
        , u = s.frames = s.frames || []
        , l = isNaN(parseInt(r, 10)) ? void 0 : r
        , c = isNaN(parseInt(n, 10)) ? void 0 : n
        , p = Dr(e) && e.length > 0 ? e : Sh();
    return u.length === 0 && u.push({
        colno: l,
        filename: p,
        function: "?",
        in_app: !0,
        lineno: c
    }),
        t
}
function vC(t) {
    !1 && Se.log(`Global Handler attached: ${t}`)
}
function c4(t, e, n, r) {
    Gr(n, {
        handled: !1,
        type: r
    }),
        t.captureEvent(n, {
            originalException: e
        })
}
function d4() {
    let t = Le()
        , e = t.getClient()
        , n = e && e.getOptions() || {
        stackParser: ()=>[],
        attachStacktrace: !1
    };
    return [t, n.stackParser, n.attachStacktrace]
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var SC = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
    , Yr = class t {
        static id = "TryCatch";
        name = t.id;
        _options;
        constructor(e) {
            this._options = {
                XMLHttpRequest: !0,
                eventTarget: !0,
                requestAnimationFrame: !0,
                setInterval: !0,
                setTimeout: !0,
                ...e
            }
        }
        setupOnce() {
            let e = it();
            this._options.setTimeout && Qn(e, "setTimeout", p4),
            this._options.setInterval && Qn(e, "setInterval", p4),
            this._options.requestAnimationFrame && Qn(e, "requestAnimationFrame", xC),
            this._options.XMLHttpRequest && "XMLHttpRequest"in e && Qn(XMLHttpRequest.prototype, "send", EC);
            let n = this._options.eventTarget;
            n && (Array.isArray(n) ? n : SC).forEach(CC)
        }
    }
;
function p4(t) {
    return function(...e) {
        let n = e[0];
        return e[0] = Fr(n, {
            mechanism: {
                data: {
                    function: Jn(t)
                },
                handled: !0,
                type: "instrument"
            }
        }),
            t.apply(this, e)
    }
}
function xC(t) {
    return function(e) {
        return t.apply(this, [Fr(e, {
            mechanism: {
                data: {
                    function: "requestAnimationFrame",
                    handler: Jn(t)
                },
                handled: !0,
                type: "instrument"
            }
        })])
    }
}
function EC(t) {
    return function(...e) {
        let n = this;
        return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(a=>{
                a in n && typeof n[a] == "function" && Qn(n, a, function(i) {
                    let o = {
                        mechanism: {
                            data: {
                                function: a,
                                handler: Jn(i)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }
                        , s = Ti(i);
                    return s && (o.mechanism.data.handler = Jn(s)),
                        Fr(i, o)
                })
            }
        ),
            t.apply(this, e)
    }
}
function CC(t) {
    let e = it()
        , n = e[t] && e[t].prototype;
    !n || !n.hasOwnProperty || !n.hasOwnProperty("addEventListener") || (Qn(n, "addEventListener", function(r) {
        return function(a, i, o) {
            try {
                typeof i.handleEvent == "function" && (i.handleEvent = Fr(i.handleEvent, {
                    mechanism: {
                        data: {
                            function: "handleEvent",
                            handler: Jn(i),
                            target: t
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }))
            } catch {}
            let s = Fr(i, {
                mechanism: {
                    data: {
                        function: "addEventListener",
                        handler: Jn(i),
                        target: t
                    },
                    handled: !0,
                    type: "instrument"
                }
            })
                , u = [a, s, o];
            return r.apply(this, u)
        }
    }),
        Qn(n, "removeEventListener", function(r) {
            return function(a, i, o) {
                let s = i;
                try {
                    let u = s && s.__sentry_wrapped__;
                    u && r.call(this, a, u, o)
                } catch {}
                return r.call(this, a, s, o)
            }
        }))
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var wC = "cause"
    , DC = 5
    , Qr = class t {
        static id = "LinkedErrors";
        name = t.id;
        _key;
        _limit;
        constructor(e={}) {
            this._key = e.key || wC,
                this._limit = e.limit || DC
        }
        setupOnce() {
            let e = Le().getClient();
            e && lr((n,r)=>{
                    let a = Le().getIntegration(t);
                    return a ? AC(e.getOptions().stackParser, a._key, a._limit, n, r) : n
                }
            )
        }
    }
;
function AC(t, e, n, r, a) {
    if (!r.exception || !r.exception.values || !a || !or(a.originalException, Error))
        return r;
    let i = g4(t, n, a.originalException, e);
    return r.exception.values = [...i, ...r.exception.values],
        r
}
function g4(t, e, n, r, a=[]) {
    if (!or(n[r], Error) || a.length + 1 >= e)
        return a;
    let i = v0(t, n[r]);
    return g4(t, e, n[r], r, [i, ...a])
}

var m4 = it()
    , Jr = class t {
        static id = "HttpContext";
        name = t.id;
        setupOnce() {
            lr(e=>{
                    if (Le().getIntegration(t)) {
                        if (!navigator && !location && !m4.document)
                            return e;
                        let n = e.request && e.request.url || location && location.href
                            , {referrer: r} = m4.document || {}
                            , {userAgent: a} = navigator || {}
                            , i = {
                            ...e.request && e.request.headers,
                            ...r && {
                                Referer: r
                            },
                            ...a && {
                                "User-Agent": a
                            }
                        }
                            , o = {
                            ...n && {
                                url: n
                            },
                            headers: i
                        };
                        return {
                            ...e,
                            request: o
                        }
                    }
                    return e
                }
            )
        }
    }
;

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var Zr = class t {
        static id = "Dedupe";
        name = t.id;
        _previousEvent;
        setupOnce(e, n) {
            let r = a=>{
                    let i = n().getIntegration(t);
                    if (i) {
                        try {
                            if (kC(a, i._previousEvent))
                                return !1 && Se.warn("Event dropped due to being a duplicate of previously captured event."),
                                    null
                        } catch {
                            return i._previousEvent = a
                        }
                        return i._previousEvent = a
                    }
                    return a
                }
            ;
            r.id = this.name,
                e(r)
        }
    }
;
function kC(t, e) {
    return e ? !!(PC(t, e) || LC(t, e)) : !1
}
function PC(t, e) {
    let n = t.message
        , r = e.message;
    return !(!n && !r || n && !r || !n && r || n !== r || !T4(t, e) || !b4(t, e))
}
function LC(t, e) {
    let n = f4(e)
        , r = f4(t);
    return !(!n || !r || n.type !== r.type || n.value !== r.value || !T4(t, e) || !b4(t, e))
}
function b4(t, e) {
    let n = h4(t)
        , r = h4(e);
    if (!n && !r)
        return !0;
    if (n && !r || !n && r || (n = n,
        r = r,
    r.length !== n.length))
        return !1;
    for (let a = 0; a < r.length; a++) {
        let i = r[a]
            , o = n[a];
        if (i.filename !== o.filename || i.lineno !== o.lineno || i.colno !== o.colno || i.function !== o.function)
            return !1
    }
    return !0
}
function T4(t, e) {
    let n = t.fingerprint
        , r = e.fingerprint;
    if (!n && !r)
        return !0;
    if (n && !r || !n && r)
        return !1;
    n = n,
        r = r;
    try {
        return n.join("") === r.join("")
    } catch {
        return !1
    }
}
function f4(t) {
    return t.exception && t.exception.values && t.exception.values[0]
}
function h4(t) {
    let e = t.exception;
    if (e)
        try {
            return e.values[0].stacktrace.frames
        } catch {
            return
        }
}

var F0 = [new za.InboundFilters, new za.FunctionToString, new Yr, new Vr, new cr, new Qr, new Zr, new Jr];
function v4(t={}) {
    if (t.defaultIntegrations === void 0 && (t.defaultIntegrations = F0),
    t.release === void 0) {
        let n = it();
        n.SENTRY_RELEASE && n.SENTRY_RELEASE.id && (t.release = n.SENTRY_RELEASE.id)
    }
    t.autoSessionTracking === void 0 && (t.autoSessionTracking = !0),
    t.sendClientReports === void 0 && (t.sendClientReports = !0);
    let e = {
        ...t,
        stackParser: kh(t.stackParser || qu),
        integrations: h0(t),
        transport: t.transport || Vo
    };
    b0(Ci, e),
    t.autoSessionTracking && _C()
}
function S4(t={}, e=Le()) {
    let n = it();
    if (!n.document) {
        !1 && Se.error("Global document not defined in showReportDialog call");
        return
    }
    let {client: r, scope: a} = e.getStackTop()
        , i = t.dsn || r && r.getDsn();
    if (!i) {
        !1 && Se.error("DSN not configured for showReportDialog call");
        return
    }
    a && (t.user = {
        ...a.getUser(),
        ...t.user
    }),
    t.eventId || (t.eventId = e.lastEventId());
    let o = n.document.createElement("script");
    o.async = !0,
        o.src = f0(i, t),
    t.onLoad && (o.onload = t.onLoad);
    let s = n.document.head || n.document.body;
    s ? s.appendChild(o) : !1 && Se.error("Not injecting report dialog. No injection point found in HTML")
}
function x4() {
    return Le().lastEventId()
}
function E4() {}
function C4(t) {
    t()
}
function w4(t) {
    let e = Le().getClient();
    return e ? e.flush(t) : (!1 && Se.warn("Cannot flush events. No client defined."),
        Sn(!1))
}
function D4(t) {
    let e = Le().getClient();
    return e ? e.close(t) : (!1 && Se.warn("Cannot flush events and disable SDK. No client defined."),
        Sn(!1))
}
function A4(t) {
    return Fr(t)()
}
function y4(t) {
    t.startSession({
        ignoreDuration: !0
    }),
        t.captureSession()
}
function _C() {
    if (typeof it().document > "u") {
        !1 && Se.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
        return
    }
    let n = Le();
    n.captureSession && (y4(n),
        Zn("history", ({from: r, to: a})=>{
                r === void 0 || r === a || y4(Le())
            }
        ))
}
var k4 = {}
    , M0 = it();
M0.Sentry && M0.Sentry.Integrations && (k4 = M0.Sentry.Integrations);
var FC = {
    ...k4,
    ...za,
    ..._0
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////

var Na = {};
eu(Na, {
    Breadcrumbs: ()=>Vr,
    BrowserClient: ()=>Ci,
    Dedupe: ()=>Zr,
    FunctionToString: ()=>Ra,
    GlobalHandlers: ()=>cr,
    HttpContext: ()=>Jr,
    Hub: ()=>_r,
    InboundFilters: ()=>Oa,
    Integrations: ()=>FC,
    LinkedErrors: ()=>Qr,
    SDK_VERSION: ()=>Ei,
    Scope: ()=>Nn,
    TryCatch: ()=>Yr,
    addBreadcrumb: ()=>Pu,
    addGlobalEventProcessor: ()=>lr,
    captureEvent: ()=>Au,
    captureException: ()=>Si,
    captureMessage: ()=>Du,
    chromeStackLineParser: ()=>w0,
    close: ()=>D4,
    configureScope: ()=>ku,
    createTransport: ()=>$o,
    defaultIntegrations: ()=>F0,
    defaultStackLineParsers: ()=>k0,
    defaultStackParser: ()=>qu,
    flush: ()=>w4,
    forceLoad: ()=>E4,
    geckoStackLineParser: ()=>D0,
    getCurrentHub: ()=>Le,
    getHubFromCarrier: ()=>Un,
    init: ()=>v4,
    lastEventId: ()=>x4,
    makeFetchTransport: ()=>Vo,
    makeMain: ()=>vi,
    onLoad: ()=>C4,
    opera10StackLineParser: ()=>o4,
    opera11StackLineParser: ()=>s4,
    setContext: ()=>Lu,
    setExtra: ()=>Fu,
    setExtras: ()=>_u,
    setTag: ()=>Bu,
    setTags: ()=>Mu,
    setUser: ()=>Iu,
    showReportDialog: ()=>S4,
    startTransaction: ()=>Ru,
    winjsStackLineParser: ()=>A0,
    withScope: ()=>xi,
    wrap: ()=>A4
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////

