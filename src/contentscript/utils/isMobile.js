"use strict";

function ru() {
    // return typeof Deno < "u"
    return false;
}


function as(t) {
    return !!(t?.confirmSupportMouse || globalThis.matchMedia("(pointer:fine)").matches)
}
function Ub() {
    return ye() ? "monkey" : aw() ? "chrome" : Ir() ? "firefox" : tt() ? "safari" : null
}

////////////////////////////////////////////////////////////////////////////////////////////

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

function ye() {
    // return we.IMMERSIVE_TRANSLATE_USERSCRIPT === "1"
    return false;
}

////////////////////////////////////////////////////////////////////////////////////////////

var Hw = "";
function Li() {
    return Hw || globalThis.navigator.userAgent
}
function sp() {
    return Li().includes("ImtFxiOS")
}
function m3() {
    let e = Li().match(/ImtFxiOS\/(\d+\.\d+\.\d+)/);
    return e ? e[1] : null
}
function Ww() {
    return Li().includes("ImtFxAndroid")
}
function f3() {
    let t = Li();
    return /ImtFxAndroid\/(\d+\.\d+\.\d+)\/google/.test(t)
}
function h3() {
    let e = Li().match(/ImtFxAndroid\/(\d+\.\d+\.\d+)/);
    return e ? e[1] : null
}


function us() {
    let t = Li();
    if (sp() || Ww()) {
        let e = t.match(/Imt[\w/.]+/);
        if (e) {
            let n = e[0].split("/")
                , r = n[0];
            return n[2] && (r += "_" + n[2]),
                {
                    name: r,
                    version: n[1]
                }
        }
    }
    return null
}

