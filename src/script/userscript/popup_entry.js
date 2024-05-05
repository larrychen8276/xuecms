function U8({isVisible: t, onClose: e, children: n}) {
    return w(jt, {
        children: [t && w("div", {
            className: `immersive-translate-sheet-backdrop  ${t ? "visible" : ""}`,
            onClick: e
        }), w("div", {
            className: `immersive-translate-sheet ${t ? "visible" : ""}`,
            children: w("div", {
                className: "immersive-translate-sheet-content",
                children: n
            })
        })]
    })
}

var Jv = U8;
var $s = `${Q}-float-ball`;
function $m(t) {
    debugger;

    let {t: e} = Ce()
        , n = jr()
        , [r,a,i,o] = n;
    Xc(r, a);
    let s = Bv(r)
        , u = Iv(s)
        , {isFullScreen: l} = Kv()
        , [c,p] = se(!1)
        , [m,g] = se(!0)
        , {pageStatus: f} = jv()
        , T = Lp(u, r)
        , b = Ve(()=>{
            if (T?.clickType === "popup")
                return p(!0);
            if (T?.clickType === "translate") {
                let L = Ee();
                if (Ga(u?.rule)) {
                    let U = ra(u.rule);
                    Oi(!0, U || L);
                    return
                }
                _n({
                    method: "toggleTranslatePage",
                    data: {
                        trigger: "float_ball"
                    }
                })
            }
        }
        , [T, _n, p])
        , h = Ve(()=>{
            p(!0)
        }
        , [p])
        , E = m && !!s
        , {containerRef: D, active: M, ballRef: I, floatBallConfigRef: S, setActive: v} = Hv({
        handleBallClick: b,
        handleMobileBallLongPress: h,
        isShow: E,
        localConfig: t.localConfig,
        popupVisible: c
    })
        , k = T?.fixedPosition || "right"
        , A = k === "right" ? "left" : "right"
        , {isShowGuide: y, handleCloseGuide: R} = Gv(t.ctx)
        , {closeTransform: _, logoContainerTransform: P, settingTransform: N} = Wv(T, M || y)
        , {tooltipDelay: z, disableTooltipDelay: q, tooltipText: F, handleShowTooltip: C} = $v(u, f);
    return E ? w("div", {
        class: `${$s}-container ${k} notranslate`,
        style: {
            zIndex: l ? -1 : 2147483647,
            pointerEvents: M || y || c ? "all" : "none"
        },
        ref: D,
        children: [w(q8, {
            ctx: u,
            setVisible: g,
            closeTransform: _,
            setActive: v,
            getModalStyle: ()=>Zv(S.current.top, 300, k)
        }), w(xa, {
            enableMobile: !0,
            text: F,
            position: A,
            delay: z,
            onShow: C,
            disable: q,
            children: w("div", {
                class: `${$s}-btn  ${k} btn-animate `,
                ref: I,
                style: {
                    transform: P,
                    opacity: M || y ? 1 : .5
                },
                children: w("div", {
                    children: [w(ya, {
                        type: "logo"
                    }), f !== "Original" ? w(ya, {
                        type: "translated"
                    }) : null]
                })
            })
        }), w("div", {
            style: {
                marginTop: "12px",
                transform: N
            },
            class: `${$s}-more-buttons btn-animate`,
            children: [w(xa, {
                text: e("translateFileTooltip"),
                multiple: !0,
                width: 200,
                position: A,
                containerClass: "btn-animate",
                children: w("div", {
                    class: `${$s}-more-button`,
                    onClick: ()=>{
                        Fl(Db, !0)
                    }
                    ,
                    children: w(ya, {
                        type: "file"
                    })
                })
            }), w(xa, {
                text: e("floatBall.setting"),
                position: A,
                containerClass: "btn-animate",
                children: w("div", {
                    class: `${$s}-more-button`,
                    onClick: ()=>{
                        v(!0),
                            p(!0)
                    }
                    ,
                    children: w(ya, {
                        type: "setting"
                    })
                })
            })]
        }), w(j8, {
            onClose: ()=>{
                v(!1),
                    p(!1)
            }
            ,
            visible: c,
            getModalStyle: ()=>Zv(S.current.top, 500, k)
        }), w(Qv, {
            visible: y,
            top: S.current.top,
            fixedPosition: k,
            onClose: ()=>{
                R(),
                    v(!1)
            }
        })]
    }) : null
}
function q8(t) {
    let {t: e} = Ce()
        , [n,r] = se(!1)
        , a = jr()
        , [i,o,s,u] = a
        , l = Lp(t.ctx, i)
        , c = Ve(m=>{
            t.ctx && o(g=>t2({
                ...g
            }, m))
        }
        , [t.ctx, o])
        , p = Ve(m=>{
            l && (t.setVisible(!1),
                m === "AlwaysClose" ? c({
                    ...l,
                    enable: !1
                }) : m === "CurrentWebsite" && c({
                    ...l,
                    blockUrls: [...l.blockUrls, globalThis.location.hostname]
                }))
        }
        , [c, l, t.setVisible]);
    return w(jt, {
        children: [w("div", {
            title: e("floatBall.close"),
            class: "btn-animate",
            style: {
                transform: t.closeTransform,
                padding: 4
            },
            onClick: ()=>{
                t.setActive(!0),
                    r(!0)
            }
            ,
            children: w(ya, {
                type: "close"
            })
        }), w(Vv, {
            visible: n,
            onClose: ()=>{
                t.setActive(!1),
                    r(!1)
            }
            ,
            getModalStyle: t.getModalStyle,
            onCloseConfirm: p
        })]
    })
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
    debugger;

    const immersive_translate_picoResponse = await fetch(oe.runtime.getURL("/contentscript/css/immersive_translate_pico.css"));
    let immersive_translate_picoContent = await immersive_translate_picoResponse.text()

    const immersive_translate_commonResponse = await fetch(oe.runtime.getURL("/contentscript/css/immersive_translate_common.css"));
    let immersive_translate_commonContent = await immersive_translate_commonResponse.text()

    const immersive_translate_popupResponse = await fetch(oe.runtime.getURL("/contentscript/css/immersive_translate_popup.css"));
    let immersive_translate_popupContent = await immersive_translate_popupResponse.text()

    const immersive_translate_page_popupResponse = await fetch(oe.runtime.getURL("/contentscript/css/immersive_translate_page_popup.css"));
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
    debugger;

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
