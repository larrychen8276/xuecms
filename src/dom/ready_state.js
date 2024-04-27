
var Qs = {
    capture: !0,
    once: !0,
    passive: !0
}
    , N9 = ()=>document.readyState === "interactive" || document.readyState === "complete"
    , H7 = t=>document.readyState === t
    , Js = (t,e)=>H7(t) || N9() ? (e(t),
    !0) : !1
    , W7 = ()=>new Promise(t=>{
        Js("loading", t) || document.addEventListener("readystatechange", ()=>{
                document.readyState === "loading" && t("loading")
            }
            , Qs)
    }
)
    , K7 = ()=>new Promise(t=>{
        Js("interactive", t) || document.addEventListener("readystatechange", ()=>{
                document.readyState === "interactive" && t("interactive")
            }
            , Qs)
    }
)
    , G7 = ()=>new Promise(t=>{
        Js("complete", t) || document.addEventListener("readystatechange", ()=>{
                document.readyState === "complete" && t("complete")
            }
            , Qs)
    }
)
    , O9 = ()=>new Promise(t=>{
        Js("domready", t) || document.addEventListener("DOMContentLoaded", ()=>{
                t("domready")
            }
            , Qs)
    }
)
    , z9 = ()=>new Promise(t=>{
        Js("load", t) || window.addEventListener("load", ()=>{
                t("load")
            }
            , Qs)
    }
)
    , U9 = {};
Object.defineProperties(U9, {
    state: {
        get: function() {
            return document.readyState
        }
    },
    loading: {
        get: function() {
            return W7()
        }
    },
    interactive: {
        get: function() {
            return K7()
        }
    },
    complete: {
        get: function() {
            return G7()
        }
    },
    window: {
        get: function() {
            return z9()
        }
    },
    load: {
        get: function() {
            return z9()
        }
    },
    domready: {
        get: function() {
            return O9()
        }
    },
    dom: {
        get: function() {
            return O9()
        }
    },
    ready: {
        get: function() {
            return N9()
        }
    }
});
var q9 = U9;
