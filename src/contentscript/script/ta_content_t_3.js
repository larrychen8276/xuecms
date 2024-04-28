"use strict";

var pe = null;
function Hs() {
    return pe || null
}

function ef() {
    gn("Original"),
        document.querySelectorAll(".target-text").forEach(t=>{
                t.innerHTML = ""
            }
        )
}

async function Xm() {
    let e = [...document.querySelectorAll(".source-text")].map(r=>r.textContent).join("")
        , n = await Ie({
        text: e,
        minLength: 200,
        pageLangs: [ht(), "en"]
    });
    return qn(n),
        n
}


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

function Yv(t) {
    return x.ASSETS_BASE_URL + t
}

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

function Gm(t) {
    return Math.max(Math.min(t, globalThis.innerHeight - 200), 10)
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

function G5(t) {
    let {t: e} = Ce()
        , {ctx: n, setSettings: r, onAutoEnableSubtitleChanged: a} = t;
    return Ue(()=>!n.rule.subtitleRule.disabled && H0.includes(n.rule.subtitleRule.type || ""), [n, H0]) ? w("div", {
        class: "flex justify-between mt-3 items-center",
        children: [w("label", {
            class: "mb-0",
            children: e("autoEnableSubtitle")
        }), w("input", {
            type: "checkbox",
            role: "switch",
            id: "autoEnableSubtitle",
            name: "autoEnableSubtitle",
            checked: !!n.rule.subtitleRule.autoEnableSubtitle,
            onChange: o=>{
                let s = o.target.checked;
                r(u=>({
                    ...u,
                    generalRule: {
                        ...u.generalRule,
                        "subtitleRule.add": {
                            ...u.generalRule?.["subtitleRule.add"],
                            autoEnableSubtitle: s
                        }
                    }
                })),
                    a()
            }
        })]
    }) : null
}
function $5(t) {
    let {t: e} = Ce()
        , n = t.ctx.state.translationMode
        , r = ()=>{
        let i = n === "dual" ? "translation" : "dual";
        t.onSwitchTranslationMode(i)
    }
        , a = e(n === "dual" ? "changeToOnlyTempTranslationMode" : "changeToDualTempTranslationMode");
    return w(xa, {
        text: a,
        multiple: !0,
        tipStyle: {
            left: -20,
            transform: "unset",
            fontSize: 13,
            whiteSpace: "pre"
        },
        children: w("div", {
            class: "translate-mode mr-2 ",
            onClick: r,
            children: n === "dual" ? $y : Vy
        })
    })
}

///////////////////////////////////////////////////////////////////////////////////////////

var P5 = new AbortController, {signal: L5} = P5, jc = 0, Hc = 0, yo = !1, ni, Fy = 0, Sa = [];
function vo(t, e) {
    //debugger;

    _5();
    let n = t
        , r = n.config
        , a = r.generalRule.mouseHoverHoldKey === "Off"
        , i = r.mouseModifierKeyPressTimeout || 400;
    n.state.isTranslateDirectlyOnHover === !0 && (a = !1);
    let o = n.state.isTranslateDirectlyOnHover === !0 || r.generalRule.mouseHoverHoldKey === "Auto";
    function s() {
        o = !o,
            o ? (B.debug("mouse hover translate on"),
                n.state.isTranslateDirectlyOnHover = !0,
                vo(n, e)) : (B.debug("mouse hover translate off"),
                n.state.isTranslateDirectlyOnHover = !1,
                vo(n, e))
    }
    document.addEventListener(Qo, s),
        Sa.push(()=>{
                document.removeEventListener(Qo, s)
            }
        );
    let u = Kn(m=>{
                if (!(Math.abs(m.clientX - jc) + Math.abs(m.clientY - Hc) <= 3) && (jc = m.clientX,
                    Hc = m.clientY,
                o || yo && !ni)) {
                    let g = Ry(n.rule, e);
                    if (g) {
                        if (hm(g))
                            return;
                        fm(n, !1, g)
                    }
                }
            }
            , o ? 700 : 300)
        , l = m=>{
            let g = m.target;
            hm(g) || fm(n, !0)
        }
        , c = m=>{
            let g = r?.generalRule?.mouseHoverHoldKey?.toLowerCase() || "alt"
                , f = hotkeys.getPressedKeyCodes();
            if (f.length > 1 && hotkeys[g] && (Fy = Date.now(),
                yo = !1),
            f.length === 1 && hotkeys[g]) {
                let T = Date.now();
                yo = !0,
                ni && clearTimeout(ni),
                    ni = setTimeout(()=>{
                            let b = Fy - T;
                            b > 0 && b <= i ? yo = !1 : l(m),
                                ni = void 0
                        }
                        , i)
            }
        }
    ;
    if (Sa.push(()=>{
            ni && clearTimeout(ni)
        }
    ),
        a)
        return;
    gm("mousemove", u, e),
        Sa.push(()=>{
                e.removeEventListener("mousemove", u)
            }
        );
    function p() {
        o ? u.cancel() : yo = !1
    }
    if (gm("blur", p, e),
        Sa.push(()=>{
                e.removeEventListener("blur", p)
            }
        ),
        !o) {
        let m = r?.generalRule?.mouseHoverHoldKey?.toLowerCase() || "alt"
            , g = hb;
        gm("keyup", My, e),
            Sa.push(()=>{
                    e.removeEventListener("keyup", My)
                }
            ),
            g.includes(m) ? hotkeys("*", "mouseHover", c) : hotkeys(r.generalRule.mouseHoverHoldKey, "mouseHover", l),
            hotkeys.setScope("mouseHover"),
            Sa.push(()=>{
                hotkeys.deleteScope("mouseHover")
                }
            )
    }
}
function _5() {
    Sa.forEach(t=>t()),
        Sa = [],
        hotkeys.setScope("all")
}
function My(t) {
    yo = !1
}
function gm(t, e, n=window) {
    return n.addEventListener(t, e, {
        signal: L5
    })
}

function Ry(t, e) {
    return F5(jc, Hc, t, e)
}
function F5(t, e, n, r) {
    let a = v1(t, e, n, r);
    if (a == null)
        return;
    let i = ()=>{
        let u = r.document.elementFromPoint(t, e);
        if (!u)
            return;
        let l = S1(u, t, e);
        return l === u ? u.nodeName === "BUTTON" ? u : void 0 : Iy(l, n)
    }
        , o = ()=>{
        try {
            a.setStartBefore(a.startContainer),
                a.setEndAfter(a.startContainer)
        } catch (l) {
            B.debug("get mouse over word fail", l)
        }
        let u = a.getBoundingClientRect();
        if (!(u.left > t || u.right < t || u.top > e || u.bottom < e))
            return Iy(a.startContainer, n)
    }
        , s;
    return a.startContainer.nodeType !== Node.TEXT_NODE ? s = i() : s = o(),
        s
}
function hm(t) {
    return !!(!(t.nodeType === Node.ELEMENT_NODE || t.nodeType === Node.TEXT_NODE) || t.nodeType === Node.ELEMENT_NODE && sa(t, nb))
}
function M5(t, e) {
    let n = B5(t);
    if (e && n.length)
        return n.forEach(r=>{
                I5(r)
            }
        ),
            !0
}
function B5(t) {
    let e = [t];
    if (t.nodeName == "FONT" && t.classList.contains("immersive-translate-target-wrapper"))
        e = [t.parentElement];
    else {
        let r = [...t.querySelectorAll(".immersive-translate-target-wrapper")].map(a=>a.parentElement).filter(a=>!!a);
        r.length && (e = r)
    }
    return e.filter(n=>n?.paragraphs && n?.paragraphs.length > 0)
}
function I5(t) {
    let e = Hs();
    e && (!t.paragraphs || !t.paragraphs.length || (t.paragraphs.forEach(n=>{
            Is(n, n.state === "original" ? e.translateState : "original")
        }
    ),
        t.paragraphs = []))
}
function mm(t) {
    return !!(t.host && t.mode)
}
function By(t, e) {
    let n = t.parentNode;
    if (n.nodeName === "BODY" || mm(n))
        return t;
    for (; n && n.nodeName !== "BODY" && !mm(n) && Tp(n, e); ) {
        let r = n.parentNode;
        if (r && mm(r))
            break;
        n = r
    }
    return n
}
function Iy(t, e) {
    return t.nodeType === Node.TEXT_NODE || Tp(t, e) ? By(t, e) : t
}

var Ws = [];
function bm(t, e) {
    let n = 0, r = 0, a, i = s=>{
            let u = new Date().getTime();
            r++,
                u - n < 300 ? o(s) : r = 1,
                n = u
        }
        , o = s=>{
            clearTimeout(a),
            r === parseInt(t + "") && (a = setTimeout(()=>{
                    r = 0,
                        e(s)
                }
                , 400))
        }
    ;
    document.addEventListener("click", i),
        Ws.push(()=>{
                document.removeEventListener("click", i)
            }
        )
}
function zy(t, e) {
    let n = 0
        , r = 0
        , a = 0
        , i = s=>{
            let u = s.changedTouches[0];
            n = new Date().getTime(),
                r = u.clientX,
                a = u.clientY
        }
        , o = s=>{
            let u = s.changedTouches[0];
            n - new Date().getTime() > 1e3 || Math.abs(a - u.clientY) > 50 || (t === "left" && u.clientX - r > 50 && e(s.changedTouches[0]),
            t === "right" && u.clientX - r < -50 && e(s.changedTouches[0]))
        }
    ;
    document.addEventListener("touchstart", i),
        document.addEventListener("touchend", o),
        Ws.push(()=>{
                document.removeEventListener("touchstart", i),
                    document.removeEventListener("touchend", o)
            }
        )
}
function Wc(t, e) {
    let n, r = a=>{
            clearTimeout(n),
            a.touches.length === parseInt(t + "") && (n = setTimeout(()=>{
                    e(a.changedTouches[0])
                }
                , 200))
        }
    ;
    document.addEventListener("touchstart", r),
        Ws.push(()=>{
                document.removeEventListener("touchstart", r)
            }
        )
}
var Tm = {
    touchShortcutsOff: ()=>{}
    ,
    "multipleClick.2": bm,
    "multipleClick.3": bm,
    "multipleClick.4": bm,
    "slide.left": zy,
    "slide.right": zy,
    "fingers.2": Wc,
    "fingers.3": Wc,
    "fingers.4": Wc,
    "fingers.5": Wc
};
async function Uy(t) {
    try {
        q5();
        let e = await Or()
            , n = mb.find(r=>r.name === "touch");
        if (!n)
            return;
        n.shortcuts.forEach(r=>{
                if (typeof r == "string")
                    return;
                let a = R5(t, e, r.command)
                    , i = Tm[a];
                if (a === "touchShortcutsOff" || !i)
                    return;
                let o = a.split(".");
                if (o.length !== 2)
                    return;
                let s = o[1];
                s && i(s, u=>{
                        U5(r.command, t, u)
                    }
                )
            }
        )
    } catch (e) {
        B.error(e)
    }
}
function R5(t, e, n) {
    if (!e.generalRule)
        return t.config.generalRule[n];
    if (e.generalRule[n])
        return e.generalRule[n];
    let r = {
        touchShortcutsToggleTranslatePage: "fingerCountToToggleTranslagePageWhenTouching",
        touchShortcutsToggleTranslationMask: "fingerCountToToggleTranslationMaskWhenTouching",
        touchShortcutsToggleTranslatePageOnlyTranslation: "fingerCountToToggleTranslagePageOnlyTranslationWhenTouching"
    };
    return r[n] && e.generalRule[r[n]] ? `fingers.${e.generalRule[r[n]]}` : t.config.generalRule[n] || ""
}

function q5() {
    Ws.forEach(t=>{
            t()
        }
    ),
        Ws = []
}
function qy(t) {
    debugger;

    let {t: e} = Ce()
        , {ctx: n, setSettings: r} = t
        , a = j5(t);
    return as(n.localConfig) ? a.length ? w("div", {
        class: "flex mt-3 items-center justify-between",
        children: [w("div", {
            class: "flex items-center",
            children: [w("label", {
                class: "mb-0 mr-2 shrink-0",
                children: [e("mouse-translate"), ":"]
            }), w(va, {
                style: {
                    width: "100%",
                    maxWidth: "100%"
                },
                className: "transform-padding-left min-select",
                items: a
            })]
        }), w("input", {
            type: "checkbox",
            role: "switch",
            class: "shrink-0",
            checked: n.config.generalRule.mouseHoverHoldKey !== "Off",
            onChange: i=>{
                let o = i.target.checked;
                r(s=>{
                        let u = s.generalRule?.mouseHoverPreferenceKey || n.config.generalRule.mouseHoverPreferenceKey || ts[0];
                        return {
                            ...s,
                            generalRule: {
                                ...s.generalRule,
                                mouseHoverHoldKey: o ? u : "Off"
                            }
                        }
                    }
                )
            }
        })]
    }) : null : w(H5, {
        ...t
    })
}
function j5({ctx: t, openOptionsPage: e, setSettings: n}) {
    let {t: r} = Ce()
        , a = Ue(()=>{
            let s = t.config.generalRule
                , u = s.mouseHoverPreferenceKey;
            return s.mouseHoverHoldKey !== "Off" && u !== s.mouseHoverHoldKey && (u = s.mouseHoverHoldKey),
                u
        }
        , [t])
        , i = Ue(()=>ts.filter(s=>!(s === "Off" || ts.includes(a) && s === "OtherCustom")), [t, a]);
    return Ue(()=>i.map(s=>{
            let u = r("mouseHoldKey", {
                key: qc(s)
            })
                , l = ts.includes(a)
                , c = s === a;
            return s === "Auto" ? u = r("mouseHoldKeyAuto") : s === "Off" ? u = r("mouseHoldKeyOff") : s === "OtherCustom" ? u = l ? r("mouseHoldKeyOther") : r("mouseHoldKeyCustomKey", {
                key: a
            }) : s === "Other" && (u = r("mouseHoldKeyOther")),
            l || s === "OtherCustom" && (c = !0),
                {
                    label: u,
                    value: s,
                    selected: c,
                    onSelected: p=>{
                        p.value === "Other" ? e("#shortcuts") : n(m=>{
                                let g = {
                                    ...m.generalRule,
                                    mouseHoverPreferenceKey: p.value
                                };
                                return t.config.generalRule.mouseHoverHoldKey !== "Off" && (g.mouseHoverHoldKey = p.value),
                                    {
                                        ...m,
                                        generalRule: g
                                    }
                            }
                        )
                    }
                }
        }
    ), [i, a])
}
function H5(t) {
    debugger;

    let {ctx: e, setSettings: n} = t
        , {t: r} = Ce()
        , a = e.config.generalRule
        , i = Object.keys(Tm).filter(l=>l != "touchShortcutsOff")
        , o = a.touchShortcutsToggleTranslateTouchElement
        , s = a.touchShortcutsToggleTranslateTouchElementPreferenceKey
        , u = s || "touchShortcutsOff";
    return o !== "touchShortcutsOff" && o !== s && (u = o),
        w("div", {
            class: "flex mt-3 items-center justify-between",
            children: [w("div", {
                class: "flex items-center",
                children: [w("label", {
                    class: "mb-0 mr-2 shrink-0",
                    children: [r("touch.mouse-translate"), ":"]
                }), w(va, {
                    style: {
                        width: "100%",
                        maxWidth: "100%"
                    },
                    className: "transform-padding-left min-select",
                    items: i.map((l,c)=>({
                        value: l,
                        label: r(l),
                        selected: l == u,
                        onSelected(p) {
                            n(m=>{
                                    let g = {
                                        ...m.generalRule,
                                        touchShortcutsToggleTranslateTouchElementPreferenceKey: p.value
                                    };
                                    return e.config.generalRule.touchShortcutsToggleTranslateTouchElement !== "touchShortcutsOff" && (g.touchShortcutsToggleTranslateTouchElement = p.value),
                                        {
                                            ...m,
                                            generalRule: g
                                        }
                                }
                            )
                        }
                    }))
                })]
            }), w("input", {
                type: "checkbox",
                role: "switch",
                class: "shrink-0",
                checked: e.config.generalRule.touchShortcutsToggleTranslateTouchElement !== "touchShortcutsOff",
                onChange: l=>{
                    let c = l.target.checked;
                    n(p=>{
                            let m = p.generalRule?.touchShortcutsToggleTranslateTouchElementPreferenceKey || e.config.generalRule.touchShortcutsToggleTranslateTouchElementPreferenceKey || "slide.left";
                            return {
                                ...p,
                                generalRule: {
                                    ...p.generalRule,
                                    touchShortcutsToggleTranslateTouchElement: c ? m : "touchShortcutsOff"
                                }
                            }
                        }
                    )
                }
            })]
        })
}
