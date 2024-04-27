var Ym = !1;
async function Xv(t) {
    if (!t) {
        let e = await an()
            , n = {
            url: globalThis.location.href,
            config: e
        };
        t = await hn(n)
    }
    t.config.debug && B.setLevel("debug"),
        t.isTranslateExcludeUrl ? B.debug("detect exclude url, do not inject anything.") : (Ym = !0,
            Vm().catch(e=>{
                    B.debug("init popup error", e)
                }
            ))
}
async function e9() {
    Ym || (Ym = !0,
        Vm().catch(t=>{
                B.error("init popup error", t)
            }
        ))
}
