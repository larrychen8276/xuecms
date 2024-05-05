async function _8(t, e, n) {
    try {
        if (e === null)
            return "noupdate";
        let r = await Zt();
        if (e.updatedAt) {
            let s = new Date().getTime()
                , u = new Date(e.updatedAt).getTime();
            if (s - u < 1e3)
                return await Wm(t, e),
                    await Xt(r),
                    "upload"
        }
        let a = await zv(t);
        r.accountLastSyncedAt = Date.now(),
            B.debug("settings", e),
            B.debug("local settings.updatedAt", e.updatedAt),
            B.debug("remote settings.updatedAt", a.updatedAt),
            B.debug("last synced at", r.accountLastSyncedAt);
        let i = !1;
        if (e.updatedAt && (!a || !a.updatedAt) && (i = !0),
        !i && e.updatedAt > a.updatedAt && (i = !0),
            B.debug("isUpload", i),
            i)
            return await Wm(t, e),
                await Xt(r),
                "upload";
        let o = !1;
        return a.updatedAt && (!e || !e.updatedAt) && (o = !0),
        !o && e.updatedAt < a.updatedAt && (o = !0),
            o ? (await n(a),
                await Xt(r),
                "override") : (await Xt(r),
                "noupdate")
    } catch (r) {
        throw up(r),
            r
    }
}

async function Ov(t, e, n) {
    try {
        if (e === null)
            return "noupdate";
        let r = await zv(t)
            , a = await Zt();
        a.accountLastSyncedAt = Date.now(),
            B.debug("settings", e),
            B.debug("local settings.updatedAt", e.updatedAt),
            B.debug("remote settings.updatedAt", r.updatedAt),
            B.debug("last synced at", a.accountLastSyncedAt);
        let i = !1;
        if (e.updatedAt && (!r?.updatedAt || Object.keys(r).length <= 1) && (i = !0),
            B.debug("isUpload", i),
            i)
            return await Wm(t, e),
                await Xt(a),
                "upload";
        let o = !0;
        return (!r?.updatedAt || Object.keys(r).length <= 1) && (o = !1),
            o ? (await n(r),
                await Xt(a),
                "override") : (await Xt(a),
                "noupdate")
    } catch (r) {
        throw up(r),
            r
    }
}

function Xc(t, e) {
    let n = M8()
        , [r,a] = Rv();
    Ae(()=>{
            !n || !n.token || r && r.proAutoSync === !1 || F8(n) && _8(n.token, t, e).then(i=>{
                    B.debug("syncUserSetting result", i)
                }
            )
        }
        , [t, n])
}

function F8(t) {
    return Jt(t) ? !0 : new Date(t.createTime) < new Date("2023-08-19T23:59:59")
}
function M8() {
    let[t,e] = se(null);
    return Ae(()=>{
            Mt.get(Ft, null).then(n=>{
                    e(n)
                }
            )
        }
        , [e]),
        t
}
function zv(t) {
    return (location.href?.indexOf("popup.html") > 0 ? Wa : ce)({
        responseType: "json",
        url: ns + "/v1/user/settings",
        method: "get",
        headers: {
            token: t
        }
    }).then(n=>n.data)
}
function Wm(t, e) {
    return (location.href?.indexOf("popup.html") > 0 ? Wa : ce)({
        responseType: "json",
        url: ns + "/v1/user/settings",
        method: "post",
        headers: {
            token: t,
            "content-type": "application/json"
        },
        body: JSON.stringify(e)
    }).then(r=>r.data)
}

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
