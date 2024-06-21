function Ga(t) {
    return t?.id?.endsWith("pdfWebPage") || !1
}
function ra(t) {
    try {
        if (!t || !Ga(t))
            return "";
        let e = "";
        if (t.pdfUrlExtractRule.attribute && t.pdfUrlExtractRule.selector) {
            let r = t.pdfUrlExtractRule
                , {selector: a, attribute: i} = r;
            if (a && i) {
                let o = document.querySelector(a);
                if (!o)
                    return "";
                e = o.getAttribute(i) || ""
            }
        } else
            e = document.querySelector("embed[type='application/pdf']")?.getAttribute("src") || "";
        if (e.startsWith("about"))
            return "";
        if (!e.startsWith("/"))
            return e;
        let n = new URL(location.href);
        return e.startsWith("//") ? n.protocol + e : n.protocol + "//" + n.host + e
    } catch {
        return ""
    }
}

var Je = {}
    , aa = async function(t, e) {
    let {method: n, data: r} = t
        , a = await Je.updateGlobalContext()
        , i = Date.now();
    if (B.debug(`content script received message: ${n}`, r || " "),
    n === "translateTheWholePage")
        await Je.translateTheWholePage(r),
            et(Xn, i);
    else if (n === "translateTheMainPage")
        await Je.translateTheMainPage(r),
            et(Xn, i);
    else if (n === "translateToThePageEndImmediately")
        await Je.translateToThePageEndImmediately(r),
            et(Xn, i);
    else if (n === "toggleTranslatePage")
        await Je.toggleTranslatePage(r),
            et(Xn, i);
    else if (n === "toggleTranslateTheWholePage")
        await Je.toggleTranslateTheWholePage(r),
            et(Xn, i);
    else if (n === "toggleTranslateTheMainPage")
        await Je.toggleTranslateTheMainPage(r),
            et(Xn, i);
    else if (n === "toggleOnlyTransation")
        await Je.ensureSwitchTranslationMode(r),
            et(Xn, i);
    else if (n === "translatePage")
        await Je.translatePage(a, r),
            et(Xn, i);
    else if (n === "toggleTranslationMask")
        await Je.toggleTranslationMask(r);
    else if (n === "restorePage")
        Je.restorePage();
    else if (n === "retryFailedParagraphs")
        Je.retryFailedParagraphs();
    else if (n === "switchTranslationMode") {
        if (a.rule.isPdf)
            return;
        r && r.mode && (await Je.switchTranslationMode(r.mode),
            await Je.reloadSubtitleWithTranslationModeChanged())
    } else if (n === "autoEnableSubtitleChanged")
        Je.autoEnableSubtitleChanged(a, r);
    else if (n == "shareToDraft")
        globalThis.document.dispatchEvent(new CustomEvent(Ku,{
            detail: r
        }));
    else if (n == "toggleTranslateToThePageEndImmediately")
        await Je.toggleTranslateToThePageEndImmediately(r);
    else if (n === "toggleMouseHoverTranslateDirectly")
        globalThis.document.dispatchEvent(new CustomEvent(Qo,{
            detail: r
        }));
    else if (n === "translateWithOpenAI")
        await Je.translatePageWithTranslationService("openai", r);
    else if (n === "translateWithGoogle")
        await Je.translatePageWithTranslationService("google", r);
    else if (n === "translateWithDeepL")
        await Je.translatePageWithTranslationService("deepl", r);
    else if (n === "translateWithBing")
        await Je.translatePageWithTranslationService("bing", r);
    else if (n === "translateWithTransmart")
        await Je.translatePageWithTranslationService("transmart", r);
    else if (n === "translateWithGemini")
        await Je.translatePageWithTranslationService("gemini", r);
    else if (n === "translateInputBox")
        await Je.translateInputBoxWithShortcut(a);
    else if (n !== "updateGlobalCtx") {
        if (n === "toggleVideoSubtitlePreTranslation")
            He() || await Je.toggleVideoSubtitlePreTranslation();
        else if (n === "getAsyncContextString" && !He())
            return JSON.stringify(a)
    }
};
function z3(t) {
    Object.assign(Je, t)
}
function N3(t) {
    Object.assign(Je, t)
}
function U3(t) {
    Object.assign(Je, t)
}

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
