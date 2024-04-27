
function an() {
    //debugger;

    return ye() ? Pn() : St({
        method: "getConfig"
    })
}

function mn(t) {
    return ye() ? ds(t) : St({
        method: "setUserConfig",
        data: t
    })
}
////////////////////////////////////////////////////////////////////////////////////////
async function St(t) {
    //debugger;
    return await Dl().sendMessage("background:main", t)
}
function ce(t) {
    // debugger;
    return au() ? ul({
        method: "request",
        data: t
    }) : ye() || ru() ? (t.fetchPolyfill = globalThis.GM_fetch,
        Wa(t)) : St({
        method: "fetch",
        data: t
    })
}

async function Vw(t) {
    return await Kw().sendMessage("background:main", t)
}
function dl(t) {
    debugger;
    return au() ? ul({
        method: "request",
        data: t
    }) : ye() || ru() ? (t.fetchPolyfill = globalThis.GM_fetch,
        Wa(t)) : Vw({
        method: "fetch",
        data: t
    })
}

////////////////////////////////////////////////////////////////////////////////////////

function fn() {
    return ye() ? Or() : St({
        method: "getUserConfig"
    })
}
function fs() {
    return ye() ? Zt() : St({
        method: "getLocalConfig"
    })
}
function kl(t) {
    return ye() ? Xt(t) : St({
        method: "setLocalConfig",
        data: t
    })
}
function j3(t) {
    return ye() ? C3(t) : St({
        method: "setBuildinConfig",
        data: t
    })
}

function W3(t) {
    return ye() ? M3(t) : St({
        method: "queryParagraphCache",
        data: t
    })
}
async function K3(t) {
    if (ye()) {
        await F3(t);
        return
    }
    return St({
        method: "setParagraphCache",
        data: t
    })
}


async function G3() {
    if (ye())
        return Promise.resolve();
    await St({
        method: "mockRequest"
    })
}
function Bi(t=!1, e="") {
    return ye() ? (oe.runtime.openOptionsPage(t, e),
        Promise.resolve()) : St({
        method: "openOptionsPage",
        data: {
            newTab: t,
            pageRoute: e
        }
    })
}

function Ll(t=!1) {
    return ye() ? (oe.extra.openAboutPage(t),
        Promise.resolve()) : St({
        method: "openAboutPage"
    })
}


function Ri(t) {
    return ye() ? (oe.extra.openInTab(t),
        Promise.resolve()) : St({
        method: "openInTab",
        data: t
    })
}
function V3(t=!1) {
    return ye() ? (oe.extra.openEbookViewerPage(t),
        Promise.resolve()) : St({
        method: "openEbookViewerPage"
    })
}
function Y3(t=!1) {
    return ye() ? (oe.extra.openEbookBuilderPage(t),
        Promise.resolve()) : St({
        method: "openEbookBuilderPage"
    })
}



function Oi(t=!1, e) {
    return ye() ? (oe.extra.openPdfViewerPage(t),
        Promise.resolve()) : St({
        method: "openPdfViewerPage",
        data: {
            url: e
        }
    })
}
function Q3(t=!1) {
    return ye() ? (oe.extra.openSubtitleBuilderPage(t),
        Promise.resolve()) : St({
        method: "openSubtitleBuilderPage"
    })
}
function zi(t) {
    return ye() ? Promise.resolve() : St({
        method: "setBadge",
        data: {
            text: t
        }
    })
}
function J3() {
    return ye() ? (B.warn("autoSyncLatestConfig is not support in monkey"),
        Promise.resolve()) : St({
        method: "autoSyncLatestConfig"
    })
}
function Fl(t, e=!1) {
    return ye() ? oe.extra.openInTab(t, e) : globalThis.open(t, e ? "_blank" : "_self"),
        Promise.resolve()
}
function Z3(t, e) {
    return ye() ? Mi.getDelay(t, e) : St({
        method: "getDelay",
        data: {
            key: t,
            options: e
        }
    })
}

function B3(t) {
    let e = new CustomEvent(ja,{
        detail: t
    });
    if (document.dispatchEvent(e),
        ye())
        return;
    Dl().sendMessage("popup:main_sync", {
        method: "setPageStatus",
        data: t
    }).catch(r=>{}
    )
}

function H3() {
    return St({
        method: "detectTabLanguage"
    })
}

async function Ie(t) {
    if (t.text) {
        let n = sl(t.text);
        if (n !== "auto")
            return Promise.resolve(n)
    } else
        return "auto";
    if (ye() || tt()) {
        if (t.translateService && !Ju.includes(t.translateService))
            return Promise.resolve("auto");
        let r = r3(t.text, t.minLength, t.pageLangs);
        return Promise.resolve(r)
    }
    let e = await St({
        method: "detectLanguage",
        data: t
    });
    return Promise.resolve(e)
}

