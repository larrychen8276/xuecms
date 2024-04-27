"use strict";





var jw = "";
function Ut() {
    return jw || ll.version
}


function y3(t) {
    let e = Ut();
    return t && cs(e, t)
}


function pl(t) {
    if (t.beta)
        return !1;
    if (tt() && t.spVersion)
        return cs(ap(), t.spVersion);
    if (f3() && t.gspVersion) {
        let e = h3();
        if (e)
            return cs(e, t.gspVersion)
    }
    if (sp() && t.ispVersion) {
        let e = m3();
        if (e)
            return cs(e, t.ispVersion)
    }
    return !1
}
function cs(t, e) {
    let n = t.split(".").reverse()
        , r = e.split(".").reverse()
        , a = 0
        , i = 0
        , o = 1;
    for (let s = 0; s < 3; s++)
        a += o * Number(r[s] || "0"),
            i += o * Number(n[s] || "0"),
            o *= 100;
    return i >= a
}

////////////////////////////////////////////////////////////////////////////////////////////

var i6 = (t,e)=>()=>(t && (e = t(t = 0)),
    e);

var x, d = i6(()=>{

        x = {
            BUILD_TIME: "2024-04-06T11:28:57.000Z",
            VERSION: "1.4.7",
            PROD: "1",
            REDIRECT_URL: "https://dash.immersivetranslate.com/auth-done/",
            PROD_API: "1",
            BETA: "0",
            IMMERSIVE_TRANSLATE_INJECTED_CSS: ``,
            IMMERSIVE_TRANSLATE_INPUT_INJECTED_CSS: ``,
            IMMERSIVE_TRANSLATE_PICO_CSS: ``,
            IMMERSIVE_TRANSLATE_COMMON_CSS: ``,
            IMMERSIVE_TRANSLATE_POPUP_CSS: ``,
            IMMERSIVE_TRANSLATE_PAGE_POPUP_CSS: ``,
            IMMERSIVE_TRANSLATE_POPUP_HTML: ``,
            IMMERSIVE_TRANSLATE_VIDEO_SUBTITLE_INJECT: '',
            OPTIONS_URL: "https://dash.immersivetranslate.com/",
            SHARE_DRAFT_URL: "https://immersivetranslate.com/preview",
            ASSETS_BASE_URL: "https://app.immersivetranslate.com/global-assets/",
            EBOOK_VIEWER_URL: "https://app.immersivetranslate.com/ebook/",
            EBOOK_BUILDER_URL: "https://app.immersivetranslate.com/ebook/make/",
            SUBTITLE_BUILDER_URL: "https://app.immersivetranslate.com/subtitle/",
            HTML_VIEWER_URL: "https://app.immersivetranslate.com/html/",
            PDF_VIEWER_URL: "https://app.immersivetranslate.com/pdf/",
            PDF_PRO_URL: "https://app.immersivetranslate.com/pdf-pro/",
            TEXT_TRANSLATE_URL: "https://app.immersivetranslate.com/text/",
            TRANSLATE_FILE_URL: "https://app.immersivetranslate.com/",
            MOCK: "0",
            DEBUG: "0",
            INSTALL_FROM: "chrome_zip"
        }
    }
);
