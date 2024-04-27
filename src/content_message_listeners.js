
var gD = function(t, e) {
    let {method: n, data: r} = t;
    if (B.debug(`content script received sync message: ${n}`, r || " "),
    n === "ping")
        return "pong";
    if (n === "getPageStatus")
        return Qe();
    if (n === "getCurrentPageLanguage") {
        let a = vt();
        return Je.detectCurrentPageLanguage().catch(i=>{
                B.warn("detectCurrentPageLanguage failed", i)
            }
        ),
            a
    } else {
        if (n === "setCurrentPageLanguageByClient")
            return qn(r),
                vt();
        if (n === "getContextString") {
            let a = Je.getPureGlobalContext()
                , {articleNode: i, bodyNode: o, ...s} = a;
            return JSON.stringify(s)
        } else if (n == "getPdfWebUrl") {
            let a = Je.getPureGlobalContext();
            return ra(a?.rule)
        }
    }
}, Cl, wl;
function q3() {
    let t = Dl();
    He() || mD(),
        t.sendMessage("popup:main_sync", {
            method: "ready"
        }).catch(n=>{}
        )
}
function Dl() {
    return Cl || (Cl = new ea("content_script",!1).getConnection("main", aa), Cl)
}
function mD() {
    return wl || (wl = new ea("content_script",!1).getConnection("main_sync", gD, {
        sync: !0
    }),
        wl)
}
