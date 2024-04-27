
function ed(t) {
    debugger;

    let {onClose: e} = t
        , [n,r] = se("Original")
        , [a,i,o,s] = jr(()=>{
            setTimeout(()=>{
                    D("updateGlobalContext", !1)()
                }
                , 250)
        }
    );
    Xc(a, i);
    let[u,l] = se(null)
        , [c,p] = se(globalThis.location.href)
        , [m,g] = se("auto")
        , [f,T] = se(null)
        , b = R=>{
            r(R.detail)
        }
    ;
    if (Ae(()=>(document.addEventListener(ja, b, !1),
            an().then(R=>{
                    l(R);
                    let _ = vt();
                    g(_);
                    let P = Qe();
                    r(P),
                        Gc(R.interval)
                }
            ),
            document.addEventListener("urlChange", E),
            ()=>{
                document.removeEventListener("pageTranslatedStatus", b),
                    document.removeEventListener("urlChange", E)
            }
    ), []),
        Ae(()=>{
                an().then(R=>{
                        l(R)
                    }
                )
            }
            , [a]),
        Ae(()=>{
                c && u && Km().then(R=>{
                        T(R)
                    }
                )
            }
            , [c, u]),
    !u || !f)
        return null;
    return w(xm, {
        type: "float_ball_popup",
        className: t.className,
        onSwitchTranslationMode: R=>{
            D("switchTranslationMode", !0, {
                mode: R
            })()
        }
        ,
        request: ce,
        onClose: M,
        onToggleEnabled: I,
        onTranslateTheWholePage: D("translateTheWholePage", !0),
        openOptionsPage: k,
        onToggleTranslate: D("toggleTranslatePage", !0),
        onTranslateTheMainPage: D("translateTheMainPage", !0),
        onTranslateToThePageEndImmediately: D("translateToThePageEndImmediately", !0),
        onTranslatePage: D("translatePage", !0),
        onRestorePage: D("restorePage", !1),
        onTranslatePdf: ()=>{
            v(ra(f.rule) || c)
        }
        ,
        openAboutPage: A,
        openSharePage: D("shareToDraft", !0),
        onSetPageLanguage: h,
        setSettings: i,
        config: u,
        pageStatus: n,
        ctx: f,
        currentUrl: c,
        currentLang: m,
        onSetLocalConfig: kl,

        // TODO: 设置 buildinConfig
        onSetBuildinConfig: j3,
        onAutoEnableSubtitleChanged: D("autoEnableSubtitleChanged", !0),
        onOpenUrl: S
    });
    function h(R) {
        g(R);
        let _ = xy(c, R, u.sourceLanguageUrlPattern);
        i(P=>({
            ...P,
            sourceLanguageUrlPattern: _
        })),
            qn(R)
    }
    function E() {
        p(globalThis.location.href)
    }
    function D(R, _, P={}) {
        let N = {
            trigger: "page_popup",
            ...P
        };
        return ()=>{
            _n({
                method: R,
                data: N
            }),
            _ && e()
        }
    }
    function M() {
        e()
    }
    function I() {
        i(R=>({
            ...R,
            enabled: !R.enabled
        })),
            setTimeout(()=>{
                    M()
                }
                , 50)
    }
    function S(R, _) {
        let P = R;
        _ && (P = `${R}?utm_source=extension&utm_medium=extension&utm_campaign=${_}`),
            Fl(P, !0),
            setTimeout(()=>{
                    M()
                }
                , 50)
    }
    function v(R) {
        R && (Oi(!1, R),
            setTimeout(()=>{
                    M()
                }
                , 50))
    }
    function k(R="") {
        Bi(!0, R),
            setTimeout(()=>{
                    e()
                }
                , 50)
    }
    function A() {
        Ll(),
            setTimeout(()=>{
                    e()
                }
                , 50)
    }
    function y() {
        Q3(),
            setTimeout(()=>{
                    e()
                }
                , 50)
    }
}
