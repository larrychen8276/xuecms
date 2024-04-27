
var h5 = ({date: t})=>{
        let {t: e} = Ce()
            , [n,r] = se(!1);
        return Ae(()=>{
                setTimeout(()=>{
                        r(!0)
                    }
                    , 5e3)
            }
            , []),
            n ? null : w("p", {
                class: "text-sm",
                children: [e("Successfully synchronized with the latest official rules:"), " ", new Date(t).toLocaleString()]
            })
    }
    , b5 = ({minVersion: t})=>{
        let {t: e} = Ce();
        return w("p", {
            class: "text-sm",
            children: e("localVersionIsTooOld", {
                minVersion: t
            })
        })
    }
    , T5 = ()=>{
        let {t} = Ce();
        return w("p", {
            class: "text-sm",
            dangerouslySetInnerHTML: {
                __html: t("badUserscriptBrowser", {
                    1: "https://immersivetranslate.com/docs/installation/"
                })
            }
        })
    }
    , y5 = ({message: t, handleSyncing: e, date: n})=>{
        let {t: r} = Ce();
        return w("p", {
            class: "text-sm",
            children: [r("failToSyncRules"), " ", w("a", {
                onClick: e,
                children: r("retry")
            }), w("br", {}), r("failedReason"), "\uFF1A", t, w("br", {}), r("currentRuleVersion"), "\uFF1A", n]
        })
    }
;


function dm(t) {
    let {isShowError: e, request: n} = t
        , [r,a] = se(null)
        , {t: i} = Ce()
        , [o,s] = se(null)
        , [u,l] = se(null)
        , [c,p] = se("")
        , [m,g] = se(!1)
        , [f,T] = se(!1)
        , [b,h] = se(!1)
        , [E,D] = se(null)
        , [M,I] = se(null)
        , S = Ut()
        , v = async()=>{
            p("");
            let k = o;
            if (o === null)
                try {
                    let A = await n({
                        url: Zo
                    });
                    A ? (s(A),
                        k = A,
                        g(!0)) : (p(i("unknownError")),
                        l(null))
                } catch (A) {
                    l(null),
                        p(A.message);
                    return
                }
            k !== null ? (t.setStorageBuildinConfig(k),
                l(!1),
                a(k.buildinConfigUpdatedAt)) : (p(i("canNotFetchRemoteRule")),
                l(null))
        }
    ;
    return Ae(()=>{
            Pn().then(k=>{
                    let A = k.buildinConfigUpdatedAt;
                    D(k);
                    let y = new Date(A);
                    if (a(A),
                    S === "0.0.0") {
                        h(!0);
                        return
                    }
                    n({
                        url: Zo
                    }).then(R=>{
                            let _ = R
                                , P = _.minVersion
                                , N = S;
                            s(_);
                            let z = _.latestVersion;
                            if (z && (To(N, z) ? I(!0) : I(!1)),
                                To(N, P)) {
                                let q = _.buildinConfigUpdatedAt;
                                new Date(q) > y ? (l(!0),
                                    v()) : l(!1)
                            } else
                                T(!0),
                                    l(null)
                        }
                    ).catch(R=>{
                            l(null),
                                p(R.message)
                        }
                    )
                }
            )
        }
        , []),
        Ae(()=>{
                Pn().then(k=>{
                        D(k)
                    }
                )
            }
            , [r]),
        E ? w("div", {
            class: "text-sm mt-2",
            style: {
                maxWidth: 218
            },
            children: b ? w(T5, {}) : c ? e === !1 ? null : w(y5, {
                handleSyncing: v,
                message: c,
                date: r || ""
            }) : f ? e === !1 ? null : w(b5, {
                minVersion: o.minVersion
            }) : u === null || u === !0 ? null : m ? w(h5, {
                date: r
            }) : null
        }) : null
}
