///////////////////////////////////////////////////////////////////////////////////////////

//TODO:这块可以提取出来

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

function fm(t, e, n, r=window) {
    if (n = n || Ry(t.rule, r),
        !n) {
        B.debug("can not find selection part!");
        return
    }
    if (M5(n, e))
        return;
    if (hm(n)) {
        B.debug("exclude  dom");
        return
    }
    my(t, n);
    let i = Hs();
    i && (i.setupMouseHoverListener = vo);
    let o = on(t);
    o.excludeSelectors = [],
        o.selectors = [];
    let s = !1
        , u = om({
        ...i
    }, t);
    Ur({
        id: i.id,
        container: n,
        filterRule: o,
        force: !0,
        onParagraph: l=>{
            Za(u, l, !0, "hover").then(c=>{
                    if (c && !s) {
                        s = !0;
                        let p = Date.now();
                        et(Z4, p),
                            ot("mouse_hover_translate", [{
                                name: "mouse_hover_translate"
                            }], {
                                ...t,
                                sourceLanguage: "mouseHover"
                            })
                    }
                }
            )
        }
        ,
        onFrame: ()=>{}
        ,
        onIgnoreElement: ()=>{}
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

function Oy(t, e) {
    jc = e.clientX,
        Hc = e.clientY,
        fm(t, !0)
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

///////////////////////////////////////////////////////////////////////////////////////////

//TODO:这块可以提取出来

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

var O5 = ()=>{
        ym();
        let t = new CustomEvent(Mr,{
            detail: {
                method: "toggleTranslatePage"
            }
        });
        globalThis.document.dispatchEvent(t)
    }
    , z5 = ()=>{
        Sm();
        let t = new CustomEvent(Mr,{
            detail: {
                method: "toggleOnlyTranslation"
            }
        });
        globalThis.document.dispatchEvent(t)
    }
    , N5 = ()=>{
        vm();
        let t = new CustomEvent(Mr,{
            detail: {
                method: "toggleTranslationMask"
            }
        });
        globalThis.document.dispatchEvent(t)
    }
    , Ny = 0
    , U5 = (t,e,n)=>{
        new Date().getTime() - Ny < 200 || (Ny = new Date().getTime(),
            t === "touchShortcutsToggleTranslatePage" ? O5() : t === "touchShortcutsToggleTranslationMask" ? N5() : t === "touchShortcutsToggleTranslatePageOnlyTranslation" ? z5() : t === "touchShortcutsToggleTranslateTouchElement" && Oy(e, n))
    }
;

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////
