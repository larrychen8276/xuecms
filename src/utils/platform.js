
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


function Nb() {
    // return typeof Deno < "u"
    return false;
}

function aw() {
    return zb(nl)
}

function Ir() {
    return zb(rl)
}
function al() {
    return !!navigator.maxTouchPoints || "ontouchstart"in document.documentElement
}