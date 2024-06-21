function Ay(t) {
    let {t: e} = Ce()
        , {translationServiceItems: n, translationServiceOptions: r} = D5(t);
    return n.length ? w(jt, {
        children: [w(ky, {
            class: "mt-3",
            label: e("popupService"),
            items: r
        }), w(E5, {
            ctx: t.ctx,
            onRestorePage: t.onRestorePage,
            setSettings: t.setSettings
        })]
    }) : null
}
function ky(t) {
    return w("div", {
        class: `min-select-container  ${t.class || ""}`,
        children: [w("label", {
            class: "inline-block text-label mb-0 text-gray-6",
            style: {
                minWidth: 60
            },
            children: [t.label, "\uFF1A"]
        }), w(va, {
            className: "translate-service transform-padding-left",
            maxWidth: 300,
            items: t.items
        })]
    })
}
function E5({ctx: t, setSettings: e, onRestorePage: n}) {
    let {t: r} = Ce()
        , a = w5(t)
        , i = C5(t)
        , o = Ve((u,l)=>{
            e(c=>{
                    let p = c.translationServices || {}
                        , m = p[a.id] || {};
                    return setTimeout(()=>{
                            n()
                        }
                        , 1),
                        {
                            ...c,
                            translationServices: {
                                ...p,
                                [a.id]: {
                                    ...m,
                                    [u]: l
                                }
                            }
                        }
                }
            )
        }
        , [])
        , s = Ue(()=>a?.props.filter(u=>u.type === "select").map(u=>{
            let l = u.name;
            u.label && (l = u.label),
            u.labelKey && (l = r(u.labelKey));
            let c = u.options.map(p=>({
                label: `${p.label ? r(p.label) : p.value}`,
                value: p.value,
                selected: p.value == i[u.name],
                onSelected: ()=>{
                    o(u.name, p.value)
                }
            }));
            return {
                label: l,
                items: c
            }
        }
    ), [i]);
    return !i || !a?.props?.length || !s || !s?.length ? null : w(jt, {
        children: s.map(({label: u, items: l},c)=>w(ky, {
            class: "mt-2",
            label: u,
            items: l
        }, "field-" + c))
    })
}
function C5(t) {
    return Ue(()=>{
            let {translationServices: n, translationService: r} = t.config;
            return n && n[r] ? n[r] || {} : {}
        }
        , [t])
}
function w5(t) {
    return Ue(()=>{
            let {translationService: n} = t.config;
            if (gr[n])
                return vl("translationService", n, t)
        }
        , [gr, vl, t])
}
function D5({isProUser: t, ctx: e, setSettings: n, pageStatus: r, onTranslatePage: a, onRestorePage: i, openOptionsPage: o}) {
    let {t: s} = Ce()
        , u = Ue(()=>e ? gs(e, "translationService") : [], [gs, e])
        , l = Ve(p=>{
            let m = u.find(g=>g.id === p.value);
            if (m.ok) {
                if (n(g=>({
                    ...g,
                    translationService: m.id,
                    translationServiceChangedbyUserAt: new Date().toISOString()
                })),
                r != "Translated")
                    return;
                m.props.length === 0 ? e.rule.isTranslateWhenServiceChanged && setTimeout(()=>{
                        a()
                    }
                    , 1) : setTimeout(()=>{
                        i()
                    }
                    , 1)
            } else
                n(g=>({
                    ...g,
                    translationService: m.id,
                    translationServiceChangedbyUserAt: new Date().toISOString()
                })),
                    setTimeout(()=>{
                            o()
                        }
                        , 100)
        }
        , [o, i, a, n])
        , c = Ue(()=>{
            let p = tt();
            return u.filter(g=>e.config.showUnconfiguredTranslationServiceInPopup === !1 ? g.ok : !0).map(g=>({
                label: `${s("translationServices." + g.id)}${g.ok ? "" : " " + (" " + (!t && !p && g.providers && g.providers.length > 0 ? s("goLoginOrAction") : s("needAction")))}`,
                value: g.id,
                selected: g.selected,
                onSelected: l
            }))
        }
        , [u, e, l, s]);
    return {
        translationServiceItems: u,
        translationServiceOptions: c
    }
}


function _y(t) {
    let {t: e} = Ce()
        , {currentUrlObj: n, isAlwaysTranslateDomain: r, isNeverTranslateDomain: a, handleTranslationUrlPatternSelected: i} = k5(t)
        , [o,s] = se(()=>a ? "excludeMatches" : "matches")
        , u = Ue(()=>r || a || !1, [r, a])
        , l = Ve(c=>{
            s(c),
            u && i(c, n.hostname)
        }
        , [s, i, u]);
    return w("div", {
        class: "flex justify-between mt-5",
        children: [w(va, {
            style: {
                width: "unset",
                flex: "unset"
            },
            maxWidth: 230,
            className: "transform-padding-left min-select",
            items: [{
                label: e("alwaysTranslateThisSite"),
                value: "matches",
                selected: o === "matches",
                onSelected: ()=>{
                    l("matches")
                }
            }, {
                label: e("neverTranslateThisSite"),
                value: "excludeMatches",
                selected: o === "excludeMatches",
                onSelected: ()=>{
                    l("excludeMatches")
                }
            }].filter(Boolean)
        }), w("input", {
            type: "checkbox",
            role: "switch",
            checked: u,
            class: "shrink-0",
            onChange: c=>{
                let p = c.target.checked;
                i(p ? o : "default", n.hostname)
            }
        })]
    })
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var K5 = ({text: t, children: e, position: n="top", containerStyle: r, containerClass: a, multiple: i=!1, width: o, delay: s=0, disable: u, enableMobile: l, tipStyle: c, onHidden: p, onShow: m})=>{
    let[g,f] = se(!1)
        , T = $e(null)
        , b = $e(null)
        , h = ()=>{
        u || !l && isMobile().any || (T.current && clearTimeout(T.current),
            T.current = setTimeout(()=>{
                    f(!0),
                        m?.()
                }
                , s))
    }
        , E = ()=>{
        isMobile().any && (b.current && clearTimeout(b.current),
            b.current = setTimeout(()=>{
                    D()
                }
                , 2e3))
    }
        , D = ()=>{
        T.current && (clearTimeout(T.current),
            p?.()),
            f(!1)
    }
        , M = Ue(()=>{
            let I = {
                position: "absolute",
                padding: "6px 20px",
                backgroundColor: "#000000",
                color: "#ffffff",
                borderRadius: "8px",
                whiteSpace: "nowrap",
                fontSize: "14px",
                zIndex: 1e3
            };
            switch (i && (I.maxWidth = "200px",
            o && (I.width = o + "px"),
                I.whiteSpace = "normal"),
                n) {
                case "top":
                    return {
                        ...I,
                        bottom: "100%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        marginBottom: "10px",
                        ...c
                    };
                case "bottom":
                    return {
                        ...I,
                        top: "100%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        marginTop: "10px",
                        ...c
                    };
                case "left":
                    return {
                        ...I,
                        right: "100%",
                        top: "50%",
                        transform: "translateY(-50%)",
                        marginRight: "10px",
                        ...c
                    };
                case "right":
                    return {
                        ...I,
                        left: "100%",
                        top: "50%",
                        transform: "translateY(-50%)",
                        marginLeft: "10px",
                        ...c
                    };
                default:
                    return {}
            }
        }
        , [n, i, o, c]);
    return w("div", {
        class: a,
        style: {
            position: "relative",
            pointerEvents: "all",
            display: "inline-block",
            ...r
        },
        children: [w("div", {
            onMouseEnter: h,
            onMouseLeave: D,
            onTouchStart: ()=>{
                l && h()
            }
            ,
            onTouchEnd: ()=>{
                l && E()
            }
            ,
            children: e
        }), g && w("div", {
            style: M,
            role: "tooltip",
            children: t
        })]
    })
}
    , xa = K5;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function v5() {
    return navigator.userAgent.indexOf("Mac") !== -1
}
var Cy = {
    Alt: "\u2325"
};
function qc(t="") {
    return v5() ? Object.keys(Cy).reduce((e,n)=>e.replace(n, Cy[n]), t) : t
}

function Ey(t, e=2e3) {
    return n=>{
        let r, a = 0;
        return i=>{
            ++a == t && (n(i),
                a = 0),
                clearTimeout(r),
                r = setTimeout(()=>a = 0, e)
        }
    }
}

function Q5({ctx: t, onToggleEnabled: e, setSettings: n, setMessage: r}) {
    let {t: a, lang: i} = Ce()
        , o = Ut();
    return w("div", {
        class: "flex",
        children: w("span", {
            class: "immersive-translate-no-select text-sm text-gray-c2",
            onClick: Ey(7)(s),
            children: ["V", o, t.config.enabled ? null : w("a", {
                href: "#",
                onClick: e,
                children: [" ", "(", a("hasBeenDisabled"), ")"]
            })]
        })
    });
    function s(u) {
        n(l=>(l.alpha ? r("Success disable alpha!") : r("Success enable alpha!"),
            {
                ...l,
                alpha: !l.alpha
            }))
    }
}
function J5(t) {
    let {t: e} = Ce();
    return w("div", {
        class: "share-button-container",
        onClick: t.openSharePage,
        children: [w("span", {
            class: "text-gray-9",
            children: e("buildSnapshots")
        }), Yy]
    })
}
