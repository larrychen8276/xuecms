
var Zv = (t,e,n)=>{
    let a = H8().height
        , i = {
        position: "fixed"
    }
        , o = 0;
    return xf() && (t = W8.top),
        i.top = t - o,
        i.top + e >= a ? (i.bottom = 30,
            delete i.top) : i.top <= 10 && (i.top = 10),
        n === "left" ? i.left = 65 : i.right = 65,
        i
}
    , W8 = {
    position: "right",
    right: 0,
    top: 335
};

function K8(t, e) {
    for (let n of e) {
        if (ye() && !Ir() && typeof GM !== void 0 && GM.addElement) {
            GM.addElement(t, "style", {
                textContent: n
            });
            continue
        }
        t.appendChild(document.createElement("style")).textContent = n
    }
}

async function Vm() {
    //debugger;

    const immersive_translate_picoResponse = await fetch(oe.runtime.getURL("/script/contentscript/css/immersive_translate_pico.css"));
    let immersive_translate_picoContent = await immersive_translate_picoResponse.text()

    const immersive_translate_commonResponse = await fetch(oe.runtime.getURL("/script/contentscript/css/immersive_translate_common.css"));
    let immersive_translate_commonContent = await immersive_translate_commonResponse.text()

    const immersive_translate_popupResponse = await fetch(oe.runtime.getURL("/script/contentscript/css/immersive_translate_popup.css"));
    let immersive_translate_popupContent = await immersive_translate_popupResponse.text()

    const immersive_translate_page_popupResponse = await fetch(oe.runtime.getURL("/script/contentscript/css/immersive_translate_page_popup.css"));
    let immersive_translate_page_popupContent = await immersive_translate_page_popupResponse.text()

    let t = Me()
        , e = await an()
        , n = await Or()
        , r = {
        url: globalThis.location.href,
        config: e
    }
        , a = await hn(r)
        , i = await _p(a, n)
        , o = dt(a.url, i?.blockUrls)
        , s = await Zt();
    if (!i?.enable || o)
        return;
    let u = document.createElement("div");
    u.id = "immersive-translate-popup",
        u.setAttribute("style", "all: initial"),
        document.documentElement.appendChild(u);
    let l = u.attachShadow({
            mode: "open"
        })
        //, c = [t.IMMERSIVE_TRANSLATE_PICO_CSS, t.IMMERSIVE_TRANSLATE_COMMON_CSS, t.IMMERSIVE_TRANSLATE_POPUP_CSS, t.IMMERSIVE_TRANSLATE_PAGE_POPUP_CSS].join(``);
        , c = [immersive_translate_picoContent, immersive_translate_commonContent, immersive_translate_popupContent, immersive_translate_page_popupContent].join(``);
    return K8(l, [c]),
        G8(l, e, s, a)
}

function G8(t, e, n, r) {
    let a = document.createElement("div");
    a.id = "mount",
        a.style.display = "block",
        t.appendChild(a),
        Ki(w(mc, {
            lang: e.interfaceLanguage,
            fallbackLang: "en",
            translations: vy,
            children: w($m, {
                localConfig: n,
                ctx: r
            })
        }), a)
}
function j8(t) {
    let e = r=>{
            r && r.target && r.target.id === "immersive-translate-popup-overlay" && t.onClose()
        }
    ;
    return window.innerWidth <= 385 ? w(Jv, {
        isVisible: t.visible,
        onClose: t.onClose,
        children: w(ed, {
            onClose: t.onClose,
            className: "popup-container-sheet"
        })
    }) : t.visible ? w("div", {
        onClick: e,
        id: "immersive-translate-popup-overlay",
        class: "immersive-translate-popup-overlay",
        children: w("div", {
            class: "immersive-translate-popup-wrapper",
            style: t.getModalStyle(),
            children: w(ed, {
                onClose: t.onClose
            })
        })
    }) : null
}

function H8() {
    return {
        width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    }
}
