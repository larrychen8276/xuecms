
async function Gc(t) {
    try {
        let e = new Date;
        B.debug("cron task start, next will run at", new Date(e.getTime() + t).toLocaleString()),
            await oe.storage.local.set({
                [Xo]: e.toISOString()
            }),
            await t8(),
        ye() || await J3()
    } catch (e) {
        B.error("run cron task failed", e)
    }
}
async function Xy() {
    let e = (await an()).interval;
    if (e) {
        let n = await oe.storage.local.get(Xo);
        if (n && n[Xo]) {
            let r = n[Xo];
            if (Date.now() - new Date(r).getTime() < e) {
                let a = new Date(new Date(r).getTime() + e);
                B.debug(`cron task not run, next will run at ${a}`);
                return
            } else
                Gc(e)
        } else
            Gc(e)
    }
}
async function t8() {
    try {
        let t = await an()
            , e = await ce({
            url: Zo
        })
            , n = t.buildinConfigUpdatedAt
            , r = new Date(n)
            , a = e.buildinConfigUpdatedAt
            , i = new Date(a)
            , o = e.minVersion
            , s = oe.runtime.getManifest().version;
        To(s, o) ? i > r ? (await oe.storage.local.set({
            buildinConfig: e
        }),
            B.info(`sync remote rules success, latest: ${new Date(a).toLocaleString()}`),
            aa({
                method: "updateGlobalCtx",
                data: {}
            }, {
                tab: {
                    id: 1,
                    url: "https://www.fake.com",
                    active: !0
                }
            }).catch(u=>{
                    B.error("send content message request failed from cron task", u)
                }
            )) : B.debug(`no need to sync rules, latest: ${r}`) : B.info(`local version is too old, please update to ${o} or later`)
    } catch (t) {
        B.error("sync rules error: ", t)
    }
}

