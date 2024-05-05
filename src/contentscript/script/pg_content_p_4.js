//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Yv(t) {
    return x.ASSETS_BASE_URL + t
}

var ii = `${Q}-float-ball`;
function Qv(t) {
    // TODO:鼠标放到右侧 float-ball 上执行方法
    //debugger;

    let {t: e} = Ce()
        , n = a=>{
        a && a.target && a.target.id === "immersive-translate-popup-overlay" && t.onClose()
    }
        , r = Ue(()=>{
            let a = {
                position: "fixed",
                top: t.top + 60
            };
            return t.fixedPosition == "left" && (a.left = 48),
            t.fixedPosition == "right" && (a.right = 48),
                a
        }
        , [t.top, t.fixedPosition]);
    return t.visible ? w("div", {
        onClick: n,
        id: "immersive-translate-popup-overlay",
        class: "immersive-translate-popup-overlay",
        children: w("div", {
            class: `${ii}-guide-container`,
            style: r,
            children: [w("img", {
                class: `${ii}-guide-bg ${t.fixedPosition}`,
                src: N8
            }), w("div", {
                class: `${ii}-guide-content ${t.fixedPosition}`,
                children: [w("img", {
                    class: `${ii}-guide-img`,
                    src: Yv("images/float_ball_intro.png")
                }), w("div", {
                    class: `${ii}-guide-message`,
                    children: [e("floatBall.guideClickToTranslate"), isMobile().any ? `
${e("floatBall.longPress")}` : ""]
                }), w("div", {
                    class: `${ii}-primary-btn ${ii}-guide-button`,
                    onClick: t.onClose,
                    children: e("floatBall.iKnow")
                })]
            })]
        })
    }) : null
}


var N8 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEyIiBoZWlnaHQ9IjM3MiIgdmlld0JveD0iMCAwIDMxMiAzNzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSBtZWV0Ij4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF8zNjQ4XzEyODAyKSI+CjxwYXRoIGQ9Ik0yMCAzNkMyMCAyNC45NTQzIDI4Ljk1NDMgMTYgNDAgMTZIMjU4LjkxNEMyNjkuOTU5IDE2IDI3OC45MTQgMjQuOTU0MyAyNzguOTE0IDM2VjE3My4wNzVMMjg5LjEyOCAxNzguNzQyQzI5MS43NzggMTgwLjIxMyAyOTEuODk0IDE4My45ODIgMjg5LjMzOSAxODUuNjEyTDI3OC45MTQgMTkyLjI2M1YzMjhDMjc4LjkxNCAzMzkuMDQ2IDI2OS45NTkgMzQ4IDI1OC45MTQgMzQ4SDQwQzI4Ljk1NDMgMzQ4IDIwIDMzOS4wNDYgMjAgMzI4VjM2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzM2NDhfMTI4MDIpIi8+CjwvZz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZF8zNjQ4XzEyODAyIiB4PSIwIiB5PSIwIiB3aWR0aD0iMzExLjE4OCIgaGVpZ2h0PSIzNzIiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeT0iNCIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMCIvPgo8ZmVDb21wb3NpdGUgaW4yPSJoYXJkQWxwaGEiIG9wZXJhdG9yPSJvdXQiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzM2NDhfMTI4MDIiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfMzY0OF8xMjgwMiIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzM2NDhfMTI4MDIiIHgxPSIxNTcuNSIgeTE9IjE2IiB4Mj0iMTU3LjUiIHkyPSIzNDgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGOTJCQyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IndoaXRlIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function jv() {
    let[t,e] = se("Original");
    return Ae(()=>{
            let n = Qe();
            e(n);
            let r = a=>{
                    e(a.detail)
                }
            ;
            return document.addEventListener(ja, r),
                ()=>{
                    document.removeEventListener(ja, r)
                }
        }
        , []),
        {
            pageStatus: t
        }
}
var Nv = 6
    , B8 = {
    position: "right",
    top: 335
};
function Hv({handleBallClick: t, isShow: e, localConfig: n, handleMobileBallLongPress: r, popupVisible: a}) {
    let i = $e(null)
        , o = $e(null)
        , [s,u] = se(!1)
        , l = $e(null)
        , c = $e(!1)
        , p = $e(n.floatBallConfig || B8)
        , m = $e(0)
        , g = $e(0)
        , f = $e(0)
        , T = $e(!1)
        , b = $e(0)
        , h = $e(0)
        , E = $e(0)
        , D = $e(0)
        , M = $e(!1)
        , I = Ve(S=>{
            a || (clearTimeout(l.current),
                S ? u(S) : l.current = setTimeout(()=>{
                        u(S),
                            T.current = !1
                    }
                    , isMobile().any ? 3e3 : 0))
        }
        , [u, l, T, a]);
    return Ae(()=>{
            a || u(!1)
        }
        , [a]),
        Ae(()=>{
                if (i.current && p.current) {
                    let S = Gm(p.current.top);
                    p.current.top = S,
                        i.current.style.top = `${S}px`,
                        i.current.style.display = "flex"
                }
            }
            , [e, i]),
        Ae(()=>{
                if (!o.current || !i.current)
                    return;
                let S = P=>{
                        P.preventDefault && P.preventDefault(),
                            m.current = P.clientX,
                            g.current = P.clientY,
                            b.current = Date.now(),
                            f.current = i.current.offsetTop,
                            c.current = !0,
                            clearTimeout(l.current),
                            I(!0),
                            E.current = P.clientX,
                            D.current = P.clientY,
                            M.current = !1,
                        isMobile().any && (clearTimeout(h.current),
                            h.current = setTimeout(()=>{
                                    Uv({
                                        startX: m.current,
                                        startY: g.current,
                                        endX: E.current,
                                        endY: D.current
                                    }) || (M.current = !0,
                                        r())
                                }
                                , 500)),
                            document.addEventListener("mousemove", v),
                            document.addEventListener("touchmove", y),
                            document.addEventListener("mouseup", k),
                            document.addEventListener("touchend", R),
                            document.addEventListener("touchcancel", R)
                    }
                    , v = P=>{
                        if (P.preventDefault && P.preventDefault(),
                        !c.current || !i.current || (E.current = P.clientX,
                            D.current = P.clientY,
                            M.current))
                            return;
                        let N = P.clientY - g.current + f.current
                            , z = Gm(N);
                        i.current.style.top = `${z}px`
                    }
                    , k = P=>{
                        if (P.preventDefault && P.preventDefault(),
                            _(),
                            c.current = !1,
                            clearTimeout(l.current),
                        T.current || I(!1),
                            M.current)
                            return;
                        Uv({
                            startX: m.current,
                            startY: g.current,
                            endX: P.clientX,
                            endY: P.clientY
                        }) || (clearTimeout(h.current),
                            t());
                        let z = Gm(P.clientY - 30);
                        p.current.top = z;
                        let q = fs();
                        kl({
                            ...q,
                            floatBallConfig: p.current
                        })
                    }
                    , A = P=>{
                        P.preventDefault && P.preventDefault(),
                            S(P.changedTouches[0])
                    }
                    , y = P=>{
                        P.preventDefault && P.preventDefault(),
                            v(P.changedTouches[0])
                    }
                    , R = P=>{
                        P.preventDefault && P.preventDefault(),
                            k(P.changedTouches[0])
                    }
                    , _ = ()=>{
                        document.removeEventListener("mousemove", v),
                            document.removeEventListener("touchmove", y),
                            document.removeEventListener("mouseup", k),
                            document.removeEventListener("touchend", R),
                            document.removeEventListener("touchcancel", R)
                    }
                ;
                return o.current.addEventListener("mousedown", S),
                    o.current.addEventListener("touchstart", A),
                    ()=>{
                        o.current && (o.current.removeEventListener("mousedown", S),
                            o.current.removeEventListener("touchstart", A))
                    }
            }
            , [e, o, i, l, c, n, I, t]),
        Ae(()=>{
                if (isMobile().any)
                    return;
                let S = k=>{
                        k.target === i.current && !T.current || (T.current = !0,
                            I(!0),
                            clearTimeout(l.current))
                    }
                    , v = k=>{
                        if (c.current) {
                            T.current = !1;
                            return
                        }
                        k.target === i.current && !T.current || I(!1)
                    }
                ;
                return i.current?.addEventListener("mouseover", S),
                    i.current?.addEventListener("mouseout", v),
                    ()=>{
                        i.current?.removeEventListener("mouseover", S),
                            i.current?.removeEventListener("mouseout", v)
                    }
            }
            , [i, c, I, e, T]),
        {
            ballRef: o,
            floatBallConfigRef: p,
            containerRef: i,
            active: s,
            setActive: I
        }
}
function Uv({startX: t, startY: e, endX: n, endY: r}) {
    let a = Math.abs(n - t)
        , i = Math.abs(r - e);
    return a > Nv || i > Nv
}
function Wv(t, e) {
    let n = t?.fixedPosition || "right"
        , r = t?.clickType === "translate"
        , a = Ue(()=>e ? "" : n == "left" ? "translateX(-100%)" : "translateX(100%)", [n, e])
        , i = Ue(()=>e && r ? "" : n == "left" ? "translateX(-20px)" : "translateX(20px)", [n, e, r])
        , o = Ue(()=>e && r ? "" : n == "left" ? "translateX(-60px)" : "translateX(60px)", [n, e, r]);
    return {
        closeTransform: a,
        logoContainerTransform: i,
        settingTransform: o
    }
}
function Kv() {
    let[t,e] = se(!1);
    return Ae(()=>{
            let n = ()=>{
                    document.querySelector("video") && e(!!document.fullscreenElement)
                }
            ;
            return document.addEventListener("fullscreenchange", n),
                ()=>{
                    document.removeEventListener("fullscreenchange", n)
                }
        }
        , []),
        {
            isFullScreen: t
        }
}
var qv = "hasShownFloatingBallGuide"
    , I8 = "2024-01-06";
function Gv(t) {
    let[e,n] = se(!1);
    Ae(()=>{
            !t.config.enableShowFloatingBallGuide || vt() == t.targetLanguage || (async()=>{
                    let a = await At(qv, "")
                        , i = await At("installedAt", "");
                    i && new Date(i) < new Date(I8) || a || (n(!0),
                        et(qv, new Date().toISOString()))
                }
            )()
        }
        , [t]);
    let r = Ve(()=>{
            n(!1)
        }
        , []);
    return {
        isShowGuide: e,
        handleCloseGuide: r
    }
}

function $v(t, e) {
    let n = $e(0)
        , [r,a] = se(!0)
        , [i,o] = se(!1)
        , s = jr()
        , [u,l] = s
        , {t: c} = Ce()
        , p = Ve(()=>{
            t?.config.floatBallTooltipRule && (isMobile().any ? o(n.current >= (t.config.floatBallTooltipRule.h5MainBtnTooltipMaxShowCount || 2)) : a(n.current >= (t.config.floatBallTooltipRule.mainBtnTooltipImmediateShowCount || 5)))
        }
        , [a, n, t, o]);
    Ae(()=>{
            t && (n.current = t.config.pcFloatBallMainBtnTooltipShownCount || 0,
            isMobile().any && (n.current = t.config.h5FloatBallMainBtnTooltipShownCount || 0),
                p())
        }
        , [t]);
    let m = Ve(()=>{
            t && (n.current = n.current + 1,
                p(),
                l(T=>{
                        let b = {
                            ...T
                        };
                        return isMobile().any ? b.h5FloatBallMainBtnTooltipShownCount = n.current : b.pcFloatBallMainBtnTooltipShownCount = n.current,
                            b
                    }
                ))
        }
        , [l, p, n, t])
        , g = Ue(()=>isMobile().any || !r ? 0 : t?.config.floatBallTooltipRule?.mainBtnTooltipDelayTime || 2e3, [r, t])
        , f = Ue(()=>isMobile().any ? c("floatBall.longPress") : e !== "Original" ? c("floatBall.showOriginal") : t?.targetLanguage ? c("floatBall.translateToLanguage", {
        language: Ta(t.targetLanguage, t.targetLanguage, !0)
    }) : c("floatBall.translate"), [e, t]);
    return {
        disableTooltipDelay: i,
        tooltipDelay: g,
        tooltipText: f,
        handleShowTooltip: m
    }
}

function Gm(t) {
    return Math.max(Math.min(t, globalThis.innerHeight - 200), 10)
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//TODO:这块可以提取出来

var ai = `${Q}-float-ball`;
function Vv(t) {
    let e = n=>{
            n && n.target && n.target.id === "immersive-translate-popup-overlay" && t.onClose()
        }
    ;
    return t.visible ? w("div", {
        onClick: e,
        id: "immersive-translate-popup-overlay",
        class: "immersive-translate-popup-overlay",
        children: w("div", {
            class: "immersive-translate-popup-wrapper",
            style: t.getModalStyle(),
            children: w(R8, {
                onConfirm: t.onCloseConfirm,
                onClose: t.onClose
            })
        })
    }) : null
}
function R8(t) {
    let {t: e} = Ce()
        , [n,r] = se("UntilNext")
        , a = Ii() + "#floating"
        , i = e("closeQuickTranslation.settingOpen", {
        1: a
    })
        , o = [{
        title: e("closeQuickTranslation.untilNext"),
        type: "UntilNext"
    }, {
        title: e("closeQuickTranslation.currentWebsite"),
        type: "CurrentWebsite",
        description: i
    }, {
        title: e("closeQuickTranslation.alwaysClose"),
        type: "AlwaysClose",
        description: i
    }];
    return w("div", {
        class: `${ai}-close-content`,
        children: [w("div", {
            class: "flex justify-between",
            children: [w("div", {
                class: `${ai}-close-title`,
                children: e("closeQuickTranslation")
            }), w("div", {
                class: "clickable",
                onClick: t.onClose,
                children: w(ya, {
                    type: "modal-close"
                })
            })]
        }), w("div", {
            class: `${ai}-close-radio-content mt-3`,
            children: o.map(s=>w(O8, {
                onClick: ()=>{
                    r(s.type)
                }
                ,
                title: s.title,
                description: s.description,
                selected: s.type === n,
                onLinkClick: u=>{
                    Ri(u)
                }
            }, s.type))
        }), w("div", {
            class: "flex mt-3 flex-end",
            children: [w("div", {
                class: `${ai}-default-btn`,
                onClick: t.onClose,
                children: e("closeQuickTranslation.cancel")
            }), w("div", {
                class: `${ai}-primary-btn ml-2`,
                onClick: ()=>{
                    t.onConfirm && t.onConfirm(n)
                }
                ,
                children: e("closeQuickTranslation.confirm")
            })]
        })]
    })
}
function O8(t) {
    let {selected: e, title: n, description: r, onLinkClick: a} = t
        , i = z8(r || "");
    return w("div", {
        class: "flex items-center clickable",
        style: "padding: 8px 0",
        onClick: t.onClick,
        children: [w("div", {
            class: e ? `${ai}-radio-sel` : `${ai}-radio-nor`,
            children: w("div", {})
        }), w("div", {
            class: "ml-2 text-sm",
            children: [w("span", {
                children: n
            }), r ? w("small", {
                class: "muted text-sm",
                children: i.map(o=>o.type === "text" ? o.value : w("a", {
                    onClick: ()=>o.href && a && a(o.href),
                    children: o.value
                }))
            }) : null]
        })]
    })
}

function z8(t) {
    let e = []
        , n = /(<a\s+.*?href="([^"]*)".*?>(.*?)<\/a>)|([^<]+)/g
        , r = Array.from(t.matchAll(n));
    for (let a of r) {
        let i = a[2]
            , o = a[3]
            , s = a[4];
        i && o ? e.push({
            type: "link",
            href: i,
            value: o
        }) : s && e.push({
            type: "text",
            value: s
        })
    }
    return e
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//TODO:这块可以提取出来

var Hy = w("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#222222",
    children: [w("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M19.4284 6.59193L15.1187 2.28564H6.28557C5.83092 2.28564 5.39488 2.46626 5.07339 2.78775C4.7519 3.10924 4.57129 3.54527 4.57129 3.99993V9.71422V18.8571V19.9999C4.57129 20.4546 4.7519 20.8906 5.07339 21.2121C5.39488 21.5336 5.83092 21.7142 6.28557 21.7142H17.7141C18.1688 21.7142 18.6048 21.5336 18.9263 21.2121C19.2478 20.8906 19.4284 20.4546 19.4284 19.9999V18.8571V9.71422V6.59193ZM15.341 6.82964V4.93136L17.2404 6.82964H15.341ZM6.28551 18.8571V19.9999H17.7141V18.8571V8.54335H13.6272L13.6267 3.99992H6.28551V18.8571Z"
    }), w("rect", {
        x: "7.55957",
        y: "10.2002",
        width: "8.88",
        height: "1.8",
        fill: "#EA4C89"
    }), w("rect", {
        x: "7.55957",
        y: "13.2002",
        width: "8.88",
        height: "1.68",
        fill: "#EA4C89"
    }), w("rect", {
        x: "7.55957",
        y: "16.0801",
        width: "4.92",
        height: "1.8",
        fill: "#EA4C89"
    })]
})
    , Wy = w("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "#222222",
    children: [w("path", {
        d: "M19.4289 2.85693C19.654 2.85693 19.8769 2.90127 20.0849 2.98743C20.2929 3.07358 20.4818 3.19985 20.641 3.35904C20.8002 3.51822 20.9265 3.7072 21.0126 3.91519C21.0988 4.12318 21.1431 4.3461 21.1431 4.57122V19.4284C21.1431 19.6535 21.0988 19.8764 21.0126 20.0844C20.9265 20.2924 20.8002 20.4814 20.641 20.6405C20.4818 20.7997 20.2929 20.926 20.0849 21.0122C19.8769 21.0983 19.654 21.1426 19.4289 21.1426H4.57171C4.11705 21.1426 3.68102 20.962 3.35952 20.6405C3.03803 20.3191 2.85742 19.883 2.85742 19.4284V4.57122C2.85742 4.11656 3.03803 3.68053 3.35952 3.35904C3.68102 3.03755 4.11705 2.85693 4.57171 2.85693H19.4289ZM19.4289 9.14265H4.57171V19.4284H19.4289V9.14265ZM8.00028 4.57122H4.57171V7.42836H8.00028V4.57122ZM14.286 4.57122H9.71457V7.42836H14.286V4.57122ZM19.4289 4.57122H16.0003V7.42836H19.4289V4.57122Z"
    }), w("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M10.2854 10.543C10.4843 10.5431 10.6797 10.5951 10.8523 10.6938L15.4066 13.2955C15.5815 13.3955 15.7269 13.5399 15.828 13.7142C15.9292 13.8884 15.9824 14.0863 15.9824 14.2878C15.9824 14.4893 15.9292 14.6872 15.828 14.8615C15.7269 15.0357 15.5815 15.1802 15.4066 15.2801L10.8523 17.8824C10.6785 17.9817 10.4816 18.0336 10.2814 18.0329C10.0812 18.0322 9.88476 17.9789 9.71164 17.8784C9.53851 17.7779 9.39483 17.6337 9.29496 17.4602C9.19509 17.2867 9.14254 17.09 9.14258 16.8898V11.6858C9.14258 11.3827 9.26299 11.092 9.47731 10.8777C9.69164 10.6634 9.98233 10.543 10.2854 10.543ZM10.8569 12.6704V15.9047L13.6872 14.2875L10.8569 12.6704Z",
        fill: "#EA4C89"
    })]
})
    , Ky = w("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "#222222",
    children: [w("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M19.4979 2.78775C19.1764 2.46626 18.7404 2.28564 18.2857 2.28564H5.71429C5.25963 2.28564 4.82359 2.46626 4.5021 2.78775C4.18061 3.10924 4 3.54527 4 3.99993V19.9999C4 20.2251 4.04434 20.448 4.13049 20.656C4.21664 20.8639 4.34292 21.0529 4.5021 21.2121C4.66129 21.3713 4.85027 21.4976 5.05826 21.5837C5.26624 21.6699 5.48916 21.7142 5.71429 21.7142H18.2857C18.5108 21.7142 18.7338 21.6699 18.9417 21.5837C19.1497 21.4976 19.3387 21.3713 19.4979 21.2121C19.6571 21.0529 19.7834 20.8639 19.8695 20.656C19.9557 20.448 20 20.2251 20 19.9999V3.99993C20 3.54527 19.8194 3.10924 19.4979 2.78775ZM5.71429 18.8571H18.2857V19.9999H5.71429V18.8571ZM5.71428 3.95993V17.1028H18.2857V3.95993H5.71428Z"
    }), w("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M13.5033 3.95996V10.8171L10.6462 9.55653L7.78906 10.8171V3.95996H9.50334V8.18682L10.6462 7.68282L11.7891 8.18682V3.95996H13.5033Z",
        fill: "#EA4C89"
    })]
})
    , Gy = w("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 20 20",
    fill: "#B3B3B3",
    children: w("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M11.0402 2.56219C10.8673 2.38914 10.6329 2.29178 10.3883 2.2915H9.61327C9.36886 2.29316 9.13508 2.39169 8.96323 2.5655C8.79138 2.7393 8.6955 2.97417 8.6966 3.21859V4.08317L7.88827 4.38838C7.27152 4.62052 6.69744 4.95314 6.18931 5.37275L5.51952 5.92484L4.76848 5.4915L4.7539 5.48317C4.61453 5.40172 4.45595 5.35893 4.29452 5.35921C4.13241 5.35919 3.97315 5.40182 3.83273 5.48282C3.69231 5.56382 3.57567 5.68033 3.49452 5.82067L3.12577 6.45817C3.00657 6.66857 2.9746 6.91731 3.03672 7.15101C3.09885 7.38471 3.25012 7.58474 3.45806 7.70817L3.47056 7.72171L4.21952 8.15505L4.07785 9.00817C3.96954 9.6575 3.96954 10.3203 4.07785 10.9696L4.2164 11.8207L3.46848 12.2519L3.44556 12.2655C3.23393 12.3881 3.07956 12.5896 3.0163 12.8259C2.95303 13.0622 2.98603 13.3139 3.10806 13.5259L3.50077 14.2061C3.58233 14.3463 3.6992 14.4627 3.83975 14.5436C3.9803 14.6246 4.13961 14.6673 4.30181 14.6675C4.46324 14.6678 4.62182 14.625 4.76119 14.5436L4.7841 14.53L5.53306 14.0978L6.20181 14.6457C6.70534 15.0591 7.27331 15.3871 7.88306 15.6165L8.6914 15.9217V16.7853C8.6914 17.0298 8.78849 17.2644 8.96134 17.4375C9.1342 17.6105 9.36868 17.7079 9.61327 17.7082H10.3883C10.5096 17.7086 10.6299 17.685 10.7422 17.6389C10.8544 17.5928 10.9565 17.525 11.0425 17.4393C11.1285 17.3537 11.1968 17.2519 11.2435 17.1399C11.2901 17.0278 11.3142 16.9077 11.3143 16.7863V15.9217L12.1226 15.6165C12.7394 15.3844 13.3135 15.0517 13.8216 14.6321L14.4914 14.08L15.2424 14.5134L15.257 14.5228C15.469 14.6447 15.7206 14.6775 15.9567 14.614C16.1929 14.5505 16.3941 14.3959 16.5164 14.1842L16.8851 13.5467C17.0068 13.3348 17.0397 13.0834 16.9764 12.8473C16.9132 12.6113 16.759 12.41 16.5476 12.2873L16.532 12.278L15.782 11.8457L15.9237 10.9915C16.032 10.3422 16.032 9.67938 15.9237 9.03005L15.7851 8.179L16.5331 7.74775L16.556 7.73421C16.7676 7.61158 16.922 7.41003 16.9852 7.17376C17.0485 6.93749 17.0155 6.68577 16.8935 6.4738L16.5008 5.79359C16.4192 5.65338 16.3023 5.53699 16.1618 5.45603C16.0212 5.37506 15.8619 5.33234 15.6997 5.33213C15.5383 5.33185 15.3797 5.37464 15.2404 5.45609L15.2174 5.46963L14.4685 5.90192L13.7997 5.354C13.2962 4.94059 12.7282 4.61262 12.1185 4.38317L11.3101 4.07796V3.21442C11.3101 2.96983 11.2131 2.73524 11.0402 2.56219ZM9.61327 1.0415H10.3883C10.6736 1.04164 10.9562 1.09798 11.2197 1.20731C11.4833 1.31663 11.7228 1.4768 11.9245 1.67867C12.1261 1.88054 12.2861 2.12016 12.3951 2.38384C12.5042 2.64753 12.5603 2.93011 12.5601 3.21546C13.2969 3.49312 13.9834 3.88931 14.5924 4.38838L14.6154 4.37484C14.8625 4.2313 15.1356 4.13798 15.4189 4.10025C15.7023 4.06251 15.9903 4.0811 16.2664 4.15495C16.5425 4.2288 16.8013 4.35644 17.028 4.53057C17.2547 4.7047 17.4447 4.92187 17.5872 5.16963L17.9799 5.84984C18.1226 6.09693 18.2153 6.36972 18.2525 6.65262C18.2897 6.93552 18.2709 7.22299 18.197 7.49859C18.123 7.7742 17.9956 8.03254 17.8218 8.25885C17.648 8.48516 17.4313 8.67501 17.1841 8.81755L17.1612 8.83109C17.2248 9.21777 17.2569 9.60899 17.257 10.0009C17.2552 10.4017 17.2203 10.8016 17.1529 11.1967L17.1685 11.205C17.6673 11.4933 18.0313 11.9678 18.1803 12.5243C18.3294 13.0809 18.2513 13.6738 17.9633 14.1728L17.5956 14.8103C17.3075 15.3093 16.833 15.6734 16.2765 15.8227C15.72 15.9719 15.1269 15.894 14.6279 15.6061L14.6133 15.5978C13.999 16.1043 13.3053 16.5059 12.5601 16.7863C12.5599 17.3622 12.331 17.9145 11.9237 18.3217C11.5165 18.729 10.9642 18.9579 10.3883 18.9582H9.61327C9.32792 18.958 9.04539 18.9017 8.78181 18.7924C8.51823 18.683 8.27877 18.5229 8.07709 18.321C7.87541 18.1191 7.71547 17.8795 7.6064 17.6158C7.49733 17.3521 7.44126 17.0696 7.4414 16.7842C6.70459 16.5066 6.01812 16.1104 5.40911 15.6113L5.38619 15.6248C5.13939 15.7686 4.86664 15.8623 4.58357 15.9005C4.30049 15.9387 4.01267 15.9206 3.73659 15.8474C3.4605 15.7741 3.20159 15.6471 2.97469 15.4736C2.74779 15.3001 2.55736 15.0835 2.41431 14.8363L2.0216 14.1561C1.8789 13.909 1.78628 13.6362 1.74904 13.3533C1.7118 13.0704 1.73068 12.7829 1.80459 12.5073C1.87849 12.2317 2.00599 11.9734 2.17977 11.7471C2.35356 11.5208 2.57025 11.3309 2.81744 11.1884L2.84035 11.1748C2.7767 10.7882 2.74465 10.3969 2.74452 10.005C2.74637 9.60425 2.78121 9.20429 2.84869 8.80921L2.83306 8.80088C2.33422 8.51264 1.97027 8.0381 1.82123 7.48158C1.67218 6.92506 1.75025 6.33214 2.03827 5.83317L2.40598 5.19046C2.69404 4.69144 3.16851 4.32727 3.72504 4.17803C4.28157 4.02879 4.87459 4.1067 5.37369 4.39463L5.38827 4.40296C6.00243 3.89603 6.69615 3.49408 7.4414 3.21338C7.44167 2.63745 7.67058 2.08518 8.07783 1.67794C8.48507 1.27069 9.03734 1.04178 9.61327 1.0415ZM11.1583 8.26761C10.8156 8.03869 10.4129 7.9165 10.0008 7.9165C9.44828 7.9165 8.91838 8.136 8.52768 8.5267C8.13698 8.9174 7.91748 9.4473 7.91748 9.99984C7.91748 10.4119 8.03967 10.8147 8.26859 11.1573C8.49751 11.4999 8.82288 11.7669 9.20356 11.9246C9.58424 12.0823 10.0031 12.1235 10.4073 12.0431C10.8114 11.9628 11.1826 11.7643 11.474 11.473C11.7653 11.1816 11.9637 10.8104 12.0441 10.4063C12.1245 10.0021 12.0832 9.58326 11.9256 9.20258C11.7679 8.8219 11.5009 8.49653 11.1583 8.26761ZM8.14891 7.22827C8.69708 6.862 9.34154 6.6665 10.0008 6.6665C10.8849 6.6665 11.7327 7.01769 12.3578 7.64281C12.983 8.26794 13.3341 9.11578 13.3341 9.99984C13.3341 10.6591 13.1387 11.3036 12.7724 11.8517C12.4061 12.3999 11.8855 12.8271 11.2764 13.0794C10.6673 13.3317 9.99712 13.3977 9.35051 13.2691C8.70391 13.1405 8.10997 12.823 7.64379 12.3569C7.17762 11.8907 6.86015 11.2967 6.73153 10.6501C6.60291 10.0035 6.66892 9.33331 6.92122 8.72423C7.17351 8.11514 7.60075 7.59454 8.14891 7.22827Z"
    })
})
    , $y = w("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "#222222",
    children: [w("path", {
        d: "M22.9331 7.46673V21.3334C22.9331 22.2667 22.1331 23.0667 21.1997 23.0667H10.1331V22.0001V20.9334H20.9331V7.60006H15.3331L11.0664 18.0001C10.7997 18.6667 10.1331 19.0667 9.46641 19.0667H2.79974C1.86641 19.0667 1.06641 18.2667 1.06641 17.3334V3.46673C1.06641 2.5334 1.86641 1.7334 2.79974 1.7334L12.9331 1.7334V2.80007V3.86673H2.93307V17.3334H9.33307L13.5997 6.9334C13.8664 6.26673 14.5331 5.86673 15.1997 5.86673H21.3331C22.2664 5.60006 22.9331 6.40007 22.9331 7.46673Z"
    }), w("path", {
        d: "M5.904 11.4063L5.472 13H4L6.056 6H7.96L10 13H8.496L8.072 11.4063H5.904ZM7.688 9.95389L7.048 7.54323H6.952L6.296 9.95389H7.688Z",
        fill: "#EA4C89"
    }), w("path", {
        d: "M19.4337 18.9805C18.403 18.6732 17.5907 18.3117 16.9968 17.8961C16.6999 18.1039 16.3542 18.2965 15.9597 18.474C15.5652 18.6558 15.1071 18.8312 14.5854 19L14 17.8831C14.9035 17.6494 15.6076 17.3918 16.1124 17.1104C15.8579 16.816 15.6394 16.4848 15.4571 16.1169C15.2789 15.7489 15.1262 15.3312 14.9989 14.8636H14.1718V13.8182H16.456C16.4178 13.5844 16.3669 13.3312 16.3033 13.0584L17.5504 13L17.6522 13.8182H19.8091V14.8636H18.9374C18.8059 15.3485 18.6532 15.7749 18.4793 16.1429C18.3054 16.5108 18.0976 16.8377 17.8558 17.1234C18.4327 17.4524 19.1474 17.6926 20 17.8442L19.4337 18.9805ZM16.1633 14.8636C16.3118 15.487 16.5854 16.013 16.9841 16.4416C17.1707 16.2424 17.3256 16.0152 17.4486 15.7597C17.5758 15.5 17.684 15.2013 17.7731 14.8636H16.1633Z",
        fill: "#EA4C89"
    })]
})
    , Vy = w("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "#222222",
    children: [w("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M13 2H3C1.89543 2 1 2.89543 1 4V20C1 21.1046 1.89543 22 3 22H7V20H3V4H13V2ZM21 2H17V4H21V20H11V22H21C22.1046 22 23 21.1046 23 20V4C23 2.89543 22.1046 2 21 2Z"
    }), w("path", {
        d: "M10.5387 14.1787L9.96267 16H8L10.7413 8H13.28L16 16H13.9947L13.4293 14.1787H10.5387ZM12.9173 12.5187L12.064 9.76369H11.936L11.0613 12.5187H12.9173Z",
        fill: "#EA4C89"
    })]
})
    , Yy = w("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "#666666",
    children: w("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M19 8H9C8.44772 8 8 8.44772 8 9V11H20V9C20 8.44772 19.5523 8 19 8ZM21 11V9C21 7.89543 20.1046 7 19 7H9C7.89543 7 7 7.89543 7 9V11V12V19C7 20.1046 7.89543 21 9 21H13V20H9C8.44772 20 8 19.5523 8 19V12H20V14H21V12V11ZM9 9H11V10H9V9ZM17 9H15V10H17V9ZM12 9H14V10H12V9ZM21 17H18V14H17V17H14V18H17V21H18V18H21V17Z"
    })
});


function Jy({onOpenUrl: t, openOptionsPage: e, type: n}) {
    // TODO:supportedVideoSubtitleSites -> 支持双语字幕的视频网站
    let {t: r} = Ce()
        // , a = Me()
        , a = x
        , i = Math.round((_i.supportedVideoSubtitleSites || []).length / 10)
        , o = Ue(()=>[{
            title: r("widget.translateFile"),
            icon: Hy,
            tooltipText: r("translateFileTooltip"),
            tooltipStyle: {
                left: -10,
                transform: "unset",
                fontSize: 13,
                whiteSpace: "pre"
            },
            tooltipMultiple: !0,
            onClick: ()=>{
                t(a.TRANSLATE_FILE_URL, n)
            }
        }, {
            title: r("widget.videoSubtitle"),
            icon: Wy,
            tooltipText: r("widget.videoSubtitleTooltip", {
                count: i * 10
            }),
            tooltipStyle: {
                fontSize: 13
            },
            onClick: ()=>{
                e("#subtitle")
            }
        }, {
            title: r("widget.instruction"),
            icon: Ky,
            tooltipText: r("widget.instructionTooltip"),
            tooltipStyle: {
                left: "unset",
                right: -10,
                transform: "unset",
                fontSize: 13
            },
            onClick: ()=>{
                t(Cb)
            }
        }], [a, t, e, r]);
    return w("div", {
        class: "widgets-container mt-5",
        children: o.map(s=>s.tooltipText ? w(xa, {
            text: s.tooltipText,
            containerStyle: {
                flex: 1
            },
            tipStyle: s.tooltipStyle,
            multiple: s.tooltipMultiple,
            children: w(Qy, {
                ...s
            })
        }) : w(Qy, {
            ...s
        }))
    })
}
function Qy(t) {
    return w("div", {
        class: "widget-item",
        onClick: t.onClick,
        children: [t.icon, w("span", {
            class: "ml-1 text-gray-6",
            children: t.title
        })]
    })
}
