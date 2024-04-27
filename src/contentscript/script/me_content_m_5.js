"use strict";


var i3 = me + "SyncStoreKey_";
function At(t, e) {
    let n = i3 + t;
    return oe.storage.sync.get(n).then(r=>r[n] === void 0 ? e : r[n])
}
function et(t, e) {
    let n = i3 + t;
    return oe.storage.sync.set({
        [n]: e
    })
}


var cl;
function Kw() {
    debugger;

    return cl || (cl = new ea("content_script",!1).getConnection("pure_main", ()=>{}
    ),
        cl)
}


function T3(t) {
    let n = t.toLocaleString("en-US", {
        timeZone: "Asia/Shanghai"
    }).split(" ")[0];
    return n.endsWith(",") && (n = n.slice(0, -1)),
        n
}
function $w(t) {
    try {
        let n = t.toLocaleString("en-US", {
            timeZone: "Asia/Shanghai"
        }).split(" ")[0];
        n.endsWith(",") && (n = n.slice(0, -1));
        let[r,a,i] = n.split("/");
        return n = `${i}-${r}-${a}`,
            n
    } catch {
        return "unknown"
    }
}


function au() {
    // return typeof globalThis.__IS_IMMERSIVE_TRANSLATE_WEB_OPTIONS_PAGE__ < "u"
    return false;
}



async function ds(t) {
    await oe.storage.sync.set({
        userConfig: t
    })
}
async function ps(t, e) {
    await oe.storage.local.set({
        [t]: e
    })
}
async function bl(t) {
    return (await oe.storage.local.get(t))[t] || ""
}

function Xw(t, e) {
    return t = t || [],
        e = e || [],
        t.length !== e.length ? !0 : e.filter(r=>!t.includes(r)).length > 0
}
async function eD(t) {
    try {
        let e = t?.autoSelectTargetLanguageAfterInstalledAt;
        if (!e)
            return pr;
        let n = await At("installedAt", "");
        if (n && new Date(n) < new Date(e))
            return pr;
        let r = [pr];
        if (r = await oe.i18n.getAcceptLanguages(),
            !r?.length)
            return pr;
        let a = he(r[0]);
        return !a || a == "auto" || a == "en" ? pr : a
    } catch (e) {
        return B.warn("get browser language error:", e),
            pr
    }
}
function tD(t, e) {
    let n = "translationServices"
        , r = t[n] || {}
        , a = e[n];
    Object.keys(a).forEach(u=>{
            let l = a[u]
                , c = a[l.extends];
            !c || l.extends == u || (a[u] = {
                ...c,
                ...a[u]
            })
        }
    ),
        Ka({
            rule: {
                ...a
            },
            valueIsArray: u=>Array.isArray(a[u]),
            getMergedValue: u=>a[u],
            onMergedResult: (u,l)=>{
                a[u] = {
                    ...a[u],
                    ...l
                }
            }
        }),
        Ka({
            rule: {
                ...r
            },
            valueIsArray: u=>Array.isArray(a[u]),
            getMergedValue: u=>a[u],
            onMergedResult: (u,l)=>{
                let c = a[u].env || {}
                    , p = l.env || {};
                c = {
                    ...c,
                    ...p
                },
                    a[u] = {
                        ...a[u],
                        ...l,
                        env: c
                    }
            }
        }),
    new Date(t.updatedAt) <= new Date("2024.4.2") && Object.keys(r).forEach(u=>{
            ["openai", "gemini"].includes(u) && r[u].prompt != null && (r[u].maxTextGroupLengthPerRequest == null && (a[u].maxTextGroupLengthPerRequest = 1),
            r[u].multiplePrompt == null && (a[u].multiplePrompt = r[u].prompt))
        }
    );
    let o = ["imt_source_field", "imt_trans_field", "imt_sub_source_field", "imt_sub_trans_field"]
        , s = (u,l)=>{
            !u || !u[l] || !u?.env || (u[l] = u[l].replace(/{{(.+?)}}/g, (c,p)=>o.includes(p) ? c : u?.env[p] || c))
        }
    ;
    Object.values(a).forEach(u=>{
            s(u, "prompt"),
                s(u, "multiplePrompt"),
                s(u, "subtitlePrompt")
        }
    )
}

function ht() {
    return he(document?.documentElement?.lang || "en")
}


function _3(t) {
    return t.replace(/([a-zA-Z0-9]+)([\u4e00-\u9fa5]+)/g, "$1 $2").replace(/([\u4e00-\u9fa5]+)([a-zA-Z0-9]+)/g, "$1 $2")
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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



var mp = "Original";
function Qe() {
    return mp
}
function gn(t) {
    mp = t,
        B3(mp)
}
