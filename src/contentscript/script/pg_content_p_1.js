"use strict";

function GT(t) {
    let {t: e} = Ce()
        , [n,r] = se(!0)
        , [a,i] = se(!1)
        , [o,s] = se()
        , [u,l] = se("home")
        , [c,p] = se(t.rule.subtitleRule)
        , m = $e(c);
    m.current = c;
    let g = $e(a);
    g.current = a,
        Ae(()=>{
                let M = I=>{
                        i(!1)
                    }
                ;
                return document.addEventListener("click", M),
                    ()=>{
                        document.removeEventListener("click", M)
                    }
            }
            , [i, g]);
    let f = Ve(M=>{
            M.stopPropagation(),
                i(!g.current)
        }
        , [i, g])
        , T = M=>{
        l(M.key)
    }
        , b = M=>{
        D(I=>(I = {
            ...I,
            ...M
        },
            I)),
            _n({
                method: "updateGlobalCtx",
                data: {
                    trigger: "quick_button"
                }
            })
    }
        , h = Ue(()=>{
            let M = [{
                key: "50",
                label: "50%",
                selectIcon: !0
            }, {
                key: "70",
                label: "70%",
                selectIcon: !0
            }, {
                key: "80",
                label: "80%",
                selectIcon: !0
            }, {
                key: "90",
                label: "90%",
                selectIcon: !0
            }, {
                key: "100",
                label: "100%",
                selectIcon: !0
            }, {
                key: "110",
                label: "110%",
                selectIcon: !0
            }, {
                key: "120",
                label: "120%",
                selectIcon: !0
            }, {
                key: "130",
                label: "130%",
                selectIcon: !0
            }, {
                key: "150",
                label: "150%",
                selectIcon: !0
            }]
                , I = [{
                key: "#FFFFFF",
                label: e("subtitle.quickButton.white"),
                selectIcon: !0
            }, {
                key: "#FFFF00",
                label: e("subtitle.quickButton.yellow"),
                selectIcon: !0
            }, {
                key: "#00FF00",
                label: e("subtitle.quickButton.green"),
                selectIcon: !0
            }, {
                key: "#00FFFF",
                label: e("subtitle.quickButton.cyan"),
                selectIcon: !0
            }, {
                key: "#0000FF",
                label: e("subtitle.quickButton.blue"),
                selectIcon: !0
            }, {
                key: "#FF00FF",
                label: e("subtitle.quickButton.magenta"),
                selectIcon: !0
            }, {
                key: "#FF0000",
                label: e("subtitle.quickButton.red"),
                selectIcon: !0
            }, {
                key: "#080808",
                label: e("subtitle.quickButton.black"),
                selectIcon: !0
            }]
                , S = {
                home: {
                    items: [{
                        key: "enable",
                        label: e("subtitle.autoEnableSubtitle"),
                        selectIcon: !0,
                        onClick: async()=>{
                            await D(v=>(v.autoEnableSubtitle = !0,
                                v)),
                                _n({
                                    method: "autoEnableSubtitleChanged",
                                    data: {
                                        trigger: "quick_button"
                                    }
                                }),
                                i(!1)
                        }
                    }, {
                        key: "disable",
                        label: e("subtitle.autoDisableSubtitle"),
                        selectIcon: !0,
                        onClick: async()=>{
                            await D(v=>(v.autoEnableSubtitle = !1,
                                v)),
                                _n({
                                    method: "autoEnableSubtitleChanged",
                                    data: {
                                        trigger: "quick_button"
                                    }
                                }),
                                i(!1)
                        }
                    }, {
                        key: "close",
                        label: e("subtitle.hideQuickButton"),
                        selectIcon: !0,
                        onClick: ()=>{
                            D(v=>(v.showQuickButton = !1,
                                v)),
                                r(!1),
                                ot("close_subtitle_quick_button", [{
                                    name: "close_subtitle_quick_button"
                                }], t),
                                i(!1)
                        }
                    }, {
                        key: "setting",
                        label: e("subtitle.quickButton.setting"),
                        selectIcon: !0,
                        rightIcon: !0,
                        onClick: ()=>{
                            l("setting")
                        }
                    }]
                },
                setting: {
                    title: e("subtitle.quickButton.setting"),
                    onBackClick: ()=>l("home"),
                    onItemClick: T,
                    items: [{
                        key: "translationPosition",
                        label: e("subtitle.quickButton.translationPosition"),
                        rightIcon: !0
                    }, {
                        key: "sourceFontSize",
                        label: e("subtitle.quickButton.sourceFontSize"),
                        rightIcon: !0
                    }, {
                        key: "translationFontSize",
                        label: e("subtitle.quickButton.translationFontSize"),
                        rightIcon: !0
                    }, {
                        key: "sourceTextColor",
                        label: e("subtitle.quickButton.sourceTextColor"),
                        rightIcon: !0
                    }, {
                        key: "translationTextColor",
                        label: e("subtitle.quickButton.translationTextColor"),
                        rightIcon: !0
                    }, {
                        key: "backgroundColor",
                        label: e("subtitle.quickButton.backgroundColor"),
                        rightIcon: !0
                    }, {
                        key: "backgroundOpacity",
                        label: e("subtitle.quickButton.backgroundOpacity"),
                        rightIcon: !0
                    }]
                },
                translationPosition: {
                    title: e("subtitle.quickButton.translationPosition"),
                    onBackClick: ()=>l("setting"),
                    onItemClick: v=>{
                        b({
                            translationPosition: v.key
                        })
                    }
                    ,
                    items: [{
                        key: "top",
                        label: e("subtitle.quickButton.translationPositionTop"),
                        selectIcon: !0
                    }, {
                        key: "bottom",
                        label: e("subtitle.quickButton.translationPositionBottom"),
                        selectIcon: !0
                    }]
                },
                sourceFontSize: {
                    title: e("subtitle.quickButton.sourceFontSize"),
                    onBackClick: ()=>l("setting"),
                    onItemClick: v=>{
                        b({
                            sourceFontSize: v.key
                        })
                    }
                    ,
                    items: M
                },
                translationFontSize: {
                    title: e("subtitle.quickButton.translationFontSize"),
                    onBackClick: ()=>l("setting"),
                    onItemClick: v=>{
                        b({
                            translationFontSize: v.key
                        })
                    }
                    ,
                    items: M
                },
                sourceTextColor: {
                    title: e("subtitle.quickButton.sourceTextColor"),
                    onBackClick: ()=>l("setting"),
                    onItemClick: v=>{
                        b({
                            sourceTextColor: v.key
                        })
                    }
                    ,
                    items: I
                },
                translationTextColor: {
                    title: e("subtitle.quickButton.translationTextColor"),
                    onBackClick: ()=>l("setting"),
                    onItemClick: v=>{
                        b({
                            translationTextColor: v.key
                        })
                    }
                    ,
                    items: I
                },
                backgroundColor: {
                    title: e("subtitle.quickButton.backgroundColor"),
                    onBackClick: ()=>l("setting"),
                    onItemClick: v=>{
                        b({
                            backgroundColor: v.key
                        })
                    }
                    ,
                    items: I
                },
                backgroundOpacity: {
                    title: e("subtitle.quickButton.backgroundOpacity"),
                    onBackClick: ()=>l("setting"),
                    onItemClick: v=>{
                        b({
                            backgroundOpacity: v.key
                        })
                    }
                    ,
                    items: [{
                        key: "0",
                        label: "0%",
                        selectIcon: !0
                    }, {
                        key: "25",
                        label: "25%",
                        selectIcon: !0
                    }, {
                        key: "50",
                        label: "50%",
                        selectIcon: !0
                    }, {
                        key: "75",
                        label: "75%",
                        selectIcon: !0
                    }, {
                        key: "100",
                        label: "100%",
                        selectIcon: !0
                    }]
                }
            };
            return S.setting.items.forEach(v=>{
                    let k = c[v.key]
                        , A = S[v.key].items.find(y=>y.key === k);
                    v.value = A?.label
                }
            ),
                S
        }
        , [c])
        , E = Ue(()=>{
            let M = h[u];
            return u === "home" ? {
                ...M,
                items: M.items.filter(I=>t.rule.subtitleRule.attachRule ? !0 : I.key !== "setting")
            } : M
        }
        , [u, t]);
    Ae(()=>{
            if (u === "home")
                s(c.autoEnableSubtitle ? "enable" : "disable");
            else {
                if (u == "setting")
                    return;
                s(c[u])
            }
        }
        , [u, c]),
        Ae(()=>{
                a && l("home")
            }
            , [a]);
    let D = Ve(async M=>{
            let I = await Or();
            I.generalRule || (I.generalRule = {}),
            I.generalRule["subtitleRule.add"] || (I.generalRule["subtitleRule.add"] = {}),
                I.generalRule["subtitleRule.add"] = M(I.generalRule["subtitleRule.add"]),
                await ds(I);
            let S = {
                ...m.current,
                ...I.generalRule["subtitleRule.add"]
            };
            p(S),
                _T(S)
        }
        , [m, p]);
    return {
        visible: n,
        selectType: u,
        selectKey: o,
        contentVisible: a,
        activeSetting: E,
        handleButtonClick: f
    }
}
function $T(t) {
    let {t: e} = Ce()
        , {visible: n, selectKey: r, contentVisible: a, activeSetting: i, handleButtonClick: o} = GT(t.ctx);
    return n ? w("div", {
        class: `${Fn}-button`,
        onClick: o,
        children: [w(ck, {}), w("span", {
            class: "label",
            children: e("subtitle.bilingual")
        }), w("div", {
            onClick: s=>{
                s.stopPropagation(),
                    i.onBackClick?.()
            }
            ,
            class: `${Fn}-pop-content ${a ? "show" : ""}`,
            children: [!!i.title && w("div", {
                class: "content-header",
                children: [w(pk, {}), w("span", {
                    children: i.title
                })]
            }), i.items.map(s=>w("p", {
                "immersive-translate-subtitle-type": "enable",
                class: `${s.key === r ? "select" : ""}`,
                onClick: u=>{
                    u.stopPropagation(),
                        s.onClick ? s.onClick(s) : i.onItemClick?.(s)
                }
                ,
                children: [s.selectIcon && w(dk, {}), w("label", {
                    children: s.label
                }), s.value && w("span", {
                    children: s.value
                }), s.rightIcon && w(gk, {})]
            }, s.key))]
        })]
    }) : null
}
var Fn = "imt-quick-subtitle"
    , VT = `
  .${Fn}-button {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 0 16px;
    position: relative;
    height: 100%;
    color: #ffffff;
    font-weight: 300;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }

  .${Fn}-button .logo {
    width: 24px;
    height: 24px;
  }

  .${Fn}-button .label {
    margin-left: 8px;
    font-size: 1em;
    color: #ffffff;
    white-space: nowrap;

  }
  .${Fn}-pop-content {
    position: absolute;
    bottom: 43px;
    background: #000000DD;
    padding: 10px 0;
    right: -30px;
    border-radius: 6px;
    display: none;
    z-index: 2147483647;
  }
  .${Fn}-pop-content.show {
    display: block !important;
  }

  .${Fn}-pop-content p {
    height: 30px;
    line-height: 30px;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0 10px;
    min-width: 140px;
    font-size: 0.86em;
    color: #ffffff;
  }
  .${Fn}-pop-content p label {
    margin-left: 8px;
    white-space: nowrap;
    flex: 1;
  }

  .${Fn}-pop-content p span {
    margin-left: 8px;
    white-space: nowrap;
    margin-left: 40px;
  }
  .${Fn}-pop-content p .select {
    opacity: 0;
  }
  .${Fn}-pop-content .select .select {
    opacity: 1;
  }

  .content-header {
    display: flex;
    align-items: center;
    padding: 0 10px 10px 10px;
    border-bottom: 1px solid #555555;
    margin-bottom: 10px;
  }

  .content-header span { 
    margin-left: 15px;
    font-size: 0.86em;
    white-space: nowrap;
  }

  @media only screen and (max-width: 767px) {
    .${Fn}-button .label {
      display: none;
    }
  }
`;

function dk() {
    return w("svg", {
        class: "select",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "1447",
        width: "16",
        height: "16",
        children: w("path", {
            d: "M431.56 832.334c-20.505 0-40.192-8.093-54.833-22.734L232.181 665.055l-73.49-70.821c-19.088-18.396-19.651-48.782-1.255-67.871s48.782-19.649 67.871-1.256l74.444 71.752 129.435 129.436 363.619-514.333c15.303-21.647 45.258-26.79 66.903-11.485 21.646 15.304 26.789 45.257 11.485 66.903L494.981 799.523c-13.239 18.726-33.936 30.582-56.786 32.529a78.116 78.116 0 0 1-6.635 0.282z",
            "p-id": "1448",
            fill: "#ffffff"
        })
    })
}
function pk() {
    return w("svg", {
        class: "go-back",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "4330",
        width: "16",
        height: "16",
        children: w("path", {
            d: "M395.21518 513.604544l323.135538-312.373427c19.052938-18.416442 19.052938-48.273447 0-66.660212-19.053961-18.416442-49.910737-18.416442-68.964698 0L291.75176 480.290811c-19.052938 18.416442-19.052938 48.273447 0 66.660212l357.633237 345.688183c9.525957 9.207709 22.01234 13.796214 34.497699 13.796214 12.485359 0 24.971741-4.588505 34.466999-13.82896 19.052938-18.416442 19.052938-48.242747 0-66.660212L395.21518 513.604544z",
            fill: "#ffffff",
            "p-id": "4331"
        })
    })
}
function gk() {
    return w("svg", {
        class: "right",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "11630",
        width: "16",
        height: "16",
        children: w("path", {
            d: "M765.7 486.8L314.9 134.7c-5.3-4.1-12.9-0.4-12.9 6.3v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1c16.4-12.8 16.4-37.6 0-50.4z",
            "p-id": "11631",
            fill: "#ffffff"
        })
    })
}

//////////////////////////////////////////////////////////////////////////////////

function Ce() {
    return Kl(qg)
}
