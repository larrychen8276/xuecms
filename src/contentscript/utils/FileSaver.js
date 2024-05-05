var Jc = globalThis || (typeof window < "u" ? window : self)
    , m8 = Object.create
    , Hm = Object.defineProperty
    , f8 = Object.getOwnPropertyDescriptor
    , h8 = Object.getOwnPropertyNames
    , b8 = Object.getPrototypeOf
    , T8 = Object.prototype.hasOwnProperty
    , y8 = (t,e)=>()=>(e || t((e = {
    exports: {}
}).exports, e),
    e.exports)
    , v8 = (t,e)=>{
    for (var n in e)
        Hm(t, n, {
            get: e[n],
            enumerable: !0
        })
}
    , jm = (t,e,n,r)=>{
    if (e && typeof e == "object" || typeof e == "function")
        for (let a of h8(e))
            !T8.call(t, a) && a !== n && Hm(t, a, {
                get: ()=>e[a],
                enumerable: !(r = f8(e, a)) || r.enumerable
            });
    return t
}
    , S8 = (t,e,n)=>(jm(t, e, "default"),
n && jm(n, e, "default"))
    , Pv = (t,e,n)=>(n = t != null ? m8(b8(t)) : {},
    jm(e || !t || !t.__esModule ? Hm(n, "default", {
        value: t,
        enumerable: !0
    }) : n, t))
    , Lv = y8((t,e)=>{
        (function(n, r) {
                typeof define == "function" && define.amd ? define([], r) : typeof t < "u" ? r() : (r(),
                    n.FileSaver = {})
            }
        )(t, function() {
            "use strict";
            function n(l, c) {
                return typeof c > "u" ? c = {
                    autoBom: !1
                } : typeof c != "object" && (c = {
                    autoBom: !c
                }),
                    c.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(l.type) ? new Blob(["\uFEFF", l],{
                        type: l.type
                    }) : l
            }
            function r(l, c, p) {
                var m = new XMLHttpRequest;
                m.open("GET", l),
                    m.responseType = "blob",
                    m.onload = function() {
                        u(m.response, c, p)
                    }
                    ,
                    m.onerror = function() {}
                    ,
                    m.send()
            }
            function a(l) {
                var c = new XMLHttpRequest;
                c.open("HEAD", l, !1);
                try {
                    c.send()
                } catch {}
                return 200 <= c.status && 299 >= c.status
            }
            function i(l) {
                try {
                    l.dispatchEvent(new MouseEvent("click"))
                } catch {
                    var c = document.createEvent("MouseEvents");
                    c.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null),
                        l.dispatchEvent(c)
                }
            }
            var o = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof Jc == "object" && Jc.global === Jc ? Jc : void 0
                , s = o.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent)
                , u = o.saveAs || (typeof window != "object" || window !== o ? function() {}
                    : "download"in HTMLAnchorElement.prototype && !s ? function(l, c, p) {
                            var m = o.URL || o.webkitURL
                                , g = document.createElement("a");
                            c = c || l.name || "download",
                                g.download = c,
                                g.rel = "noopener",
                                typeof l == "string" ? (g.href = l,
                                    g.origin === location.origin ? i(g) : a(g.href) ? r(l, c, p) : i(g, g.target = "_blank")) : (g.href = m.createObjectURL(l),
                                    setTimeout(function() {
                                        m.revokeObjectURL(g.href)
                                    }, 4e4),
                                    setTimeout(function() {
                                        i(g)
                                    }, 0))
                        }
                        : "msSaveOrOpenBlob"in navigator ? function(l, c, p) {
                                if (c = c || l.name || "download",
                                typeof l != "string")
                                    navigator.msSaveOrOpenBlob(n(l, p), c);
                                else if (a(l))
                                    r(l, c, p);
                                else {
                                    var m = document.createElement("a");
                                    m.href = l,
                                        m.target = "_blank",
                                        setTimeout(function() {
                                            i(m)
                                        })
                                }
                            }
                            : function(l, c, p, m) {
                                if (m = m || open("", "_blank"),
                                m && (m.document.title = m.document.body.innerText = "downloading..."),
                                typeof l == "string")
                                    return r(l, c, p);
                                var g = l.type === "application/octet-stream"
                                    , f = /constructor/i.test(o.HTMLElement) || o.safari
                                    , T = /CriOS\/[\d]+/.test(navigator.userAgent);
                                if ((T || g && f || s) && typeof FileReader < "u") {
                                    var b = new FileReader;
                                    b.onloadend = function() {
                                        var D = b.result;
                                        D = T ? D : D.replace(/^data:[^;]*;/, "data:attachment/file;"),
                                            m ? m.location.href = D : location = D,
                                            m = null
                                    }
                                        ,
                                        b.readAsDataURL(l)
                                } else {
                                    var h = o.URL || o.webkitURL
                                        , E = h.createObjectURL(l);
                                    m ? m.location = E : location.href = E,
                                        m = null,
                                        setTimeout(function() {
                                            h.revokeObjectURL(E)
                                        }, 4e4)
                                }
                            }
            );
            o.saveAs = u.saveAs = u,
            typeof e < "u" && (e.exports = u)
        })
    }
)
    , _v = {};
v8(_v, {
    default: ()=>Zc
});
var x8 = Pv(Lv());
S8(_v, Pv(Lv()));
var {default: kv, ...E8} = x8
    , Zc = kv !== void 0 ? kv : E8;
