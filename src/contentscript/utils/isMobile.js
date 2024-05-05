var G0 = /iPhone/i
    , Ab = /iPod/i
    , kb = /iPad/i
    , Pb = /\biOS-universal(?:.+)Mac\b/i
    , $0 = /\bAndroid(?:.+)Mobile\b/i
    , Lb = /Android/i
    , Pi = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i
    , tl = /Silk/i
    , Br = /Windows Phone/i
    , _b = /\bWindows(?:.+)ARM\b/i
    , Fb = /BlackBerry/i
    , Mb = /BB10/i
    , Bb = /Opera Mini/i
    , Ib = /\b(CriOS|Chrome)(?:.+)Mobile/i
    , Rb = /Mobile(?:.+)Firefox\b/i
    , Ob = t=>typeof t < "u" && t.platform === "MacIntel" && typeof t.maxTouchPoints == "number" && t.maxTouchPoints > 1 && typeof globalThis.MSStream > "u";

function rw(t) {
    return e=>e.test(t)
}
/*
function ut(t) {
    let e = {
        userAgent: "",
        platform: "",
        maxTouchPoints: 0
    };
    !t && typeof navigator < "u" ? e = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        maxTouchPoints: navigator.maxTouchPoints || 0
    } : typeof t == "string" ? e.userAgent = t : t && t.userAgent && (e = {
        userAgent: t.userAgent,
        platform: t.platform,
        maxTouchPoints: t.maxTouchPoints || 0
    });
    let n = e.userAgent
        , r = n.split("[FBAN");
    typeof r[1] < "u" && (n = r[0]),
        r = n.split("Twitter"),
    typeof r[1] < "u" && (n = r[0]);
    let a = rw(n)
        , i = {
        apple: {
            phone: a(G0) && !a(Br),
            ipod: a(Ab),
            tablet: !a(G0) && (a(kb) || Ob(e)) && !a(Br),
            universal: a(Pb),
            device: (a(G0) || a(Ab) || a(kb) || a(Pb) || Ob(e)) && !a(Br)
        },
        amazon: {
            phone: a(Pi),
            tablet: !a(Pi) && a(tl),
            device: a(Pi) || a(tl)
        },
        android: {
            phone: !a(Br) && a(Pi) || !a(Br) && a($0),
            tablet: !a(Br) && !a(Pi) && !a($0) && (a(tl) || a(Lb)),
            device: !a(Br) && (a(Pi) || a(tl) || a($0) || a(Lb)) || a(/\bokhttp\b/i)
        },
        windows: {
            phone: a(Br),
            tablet: a(_b),
            device: a(Br) || a(_b)
        },
        other: {
            blackberry: a(Fb),
            blackberry10: a(Mb),
            opera: a(Bb),
            firefox: a(Rb),
            chrome: a(Ib),
            device: a(Fb) || a(Mb) || a(Bb) || a(Rb) || a(Ib)
        },
        any: !1,
        phone: !1,
        tablet: !1
    };
    return i.any = i.apple.device || i.android.device || i.windows.device || i.other.device,
        i.phone = i.apple.phone || i.android.phone || i.windows.phone,
        i.tablet = i.apple.tablet || i.android.tablet || i.windows.tablet,
        i
}
*/

function isMobile(t) {
    let e = {
        userAgent: "",
        platform: "",
        maxTouchPoints: 0
    };
    !t && typeof navigator < "u" ? e = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        maxTouchPoints: navigator.maxTouchPoints || 0
    } : typeof t == "string" ? e.userAgent = t : t && t.userAgent && (e = {
        userAgent: t.userAgent,
        platform: t.platform,
        maxTouchPoints: t.maxTouchPoints || 0
    });
    let n = e.userAgent
        , r = n.split("[FBAN");
    typeof r[1] < "u" && (n = r[0]),
        r = n.split("Twitter"),
    typeof r[1] < "u" && (n = r[0]);
    let a = rw(n)
        , i = {
        apple: {
            phone: a(G0) && !a(Br),
            ipod: a(Ab),
            tablet: !a(G0) && (a(kb) || Ob(e)) && !a(Br),
            universal: a(Pb),
            device: (a(G0) || a(Ab) || a(kb) || a(Pb) || Ob(e)) && !a(Br)
        },
        amazon: {
            phone: a(Pi),
            tablet: !a(Pi) && a(tl),
            device: a(Pi) || a(tl)
        },
        android: {
            phone: !a(Br) && a(Pi) || !a(Br) && a($0),
            tablet: !a(Br) && !a(Pi) && !a($0) && (a(tl) || a(Lb)),
            device: !a(Br) && (a(Pi) || a(tl) || a($0) || a(Lb)) || a(/\bokhttp\b/i)
        },
        windows: {
            phone: a(Br),
            tablet: a(_b),
            device: a(Br) || a(_b)
        },
        other: {
            blackberry: a(Fb),
            blackberry10: a(Mb),
            opera: a(Bb),
            firefox: a(Rb),
            chrome: a(Ib),
            device: a(Fb) || a(Mb) || a(Bb) || a(Rb) || a(Ib)
        },
        any: !1,
        phone: !1,
        tablet: !1
    };
    return i.any = i.apple.device || i.android.device || i.windows.device || i.other.device,
        i.phone = i.apple.phone || i.android.phone || i.windows.phone,
        i.tablet = i.apple.tablet || i.android.tablet || i.windows.tablet,
        i
}

var V0 = "DENO"
    , nl = "CHROME"
    , rl = "FIREFOX";
function zb(t) {
    let e = nl;
    try {
        let n = navigator?.userAgent || "";
        /firefox/i.test(n) || typeof InstallTrigger < "u" ? e = rl : /deno/i.test(n) && (e = V0)
    } catch {}
    return t === nl && e === nl || t === rl && e === rl || t === V0 && e === V0
}

function aw() {
    return zb(nl)
}

function Nb() {
    // return typeof Deno < "u"
    return false;
}

function Ir() {
    return zb(rl)
}
function al() {
    return !!navigator.maxTouchPoints || "ontouchstart"in document.documentElement
}

function as(t) {
    return !!(t?.confirmSupportMouse || globalThis.matchMedia("(pointer:fine)").matches)
}
function Ub() {
    return ye() ? "monkey" : aw() ? "chrome" : Ir() ? "firefox" : tt() ? "safari" : null
}

////////////////////////////////////////////////////////////////////////////////////////////////

function Me() {
    // return typeof process > "u" && typeof Deno < "u" ? Deno.env.toObject() : x
    return x;
}

var we = Me();
function ye() {
    // return we.IMMERSIVE_TRANSLATE_USERSCRIPT === "1"
    return false;
}

function Qt() {
    //return we.PROD === "1"
    return true;
}
function Rn() {
    // return we.PROD_API === "1"
    return true;
}
function xf() {
    //return we.HAS_CSP_ERROR == "1"
    return false;
}

function tt() {
    // debugger;
    /*
    if (we.IMMERSIVE_TRANSLATE_SAFARI === "1")
        return !0;
     */
    if (typeof globalThis.browser < "u" && globalThis.browser.runtime && globalThis.browser.runtime.getManifest) {
        let e = globalThis.browser.runtime.getManifest();
        return !!(e && e._isSafari)
    } else
        return !1
}

function ru() {
    // return typeof Deno < "u"
    return false;
}

/*
var cP = Me().PROD === "1"
    , di = Me().PROD !== "1";

    var cP = x.PROD === "1"
    , di = x.PROD !== "1";
*/

var cP = true//x.PROD === "1"
    , di = false;//x.PROD !== "1";

function au() {
    // return typeof globalThis.__IS_IMMERSIVE_TRANSLATE_WEB_OPTIONS_PAGE__ < "u"
    return false;
}

