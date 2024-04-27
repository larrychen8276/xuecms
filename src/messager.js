
var ss = new Map
    , ea = class {
        fromType;
        logger;
        constructor(e, n=!1) {
            this.logger = new rs,
            n && this.logger.setLevel("debug"),
                this.fromType = e,
            ss.has(e) || (ss.set(e, new Map),
                oe.runtime.onMessage.addListener((r,a,i)=>{

                        //debugger;

                        let o = r.from, s = r.to, u, l, c;
                        a.tab && a.tab.id && (u = a.tab.id,
                            o = `${o}:${u}`,
                            l = a.tab.url,
                            c = a.tab.active),
                            this.logger.debug(`${r.to} received message [${r.payload.method}] from ${r.from}`, r.payload.data ? r.payload.data : " ");
                        let p = op(s)
                            , {type: m, name: g} = p;
                        if (m !== e)
                            return !1;
                        let f = op(o)
                            , b = ss.get(m).get(g);
                        if (!b)
                            return this.logger.debug(`no message handler for ${m}:${s}, but it's ok`),
                                !1;
                        let {messageHandler: h, sync: E} = b
                            , D = {
                            type: e,
                            name: f.name,
                            id: u,
                            url: l,
                            active: c
                        };
                        if (E) {
                            try {
                                let M = h(r.payload, D);
                                i({
                                    ok: !0,
                                    data: M
                                })
                            } catch (M) {
                                i({
                                    ok: !1,
                                    errorName: M.name,
                                    errorMessage: M.message,
                                    errorDetails: M.details,
                                    errorStatus: M.status
                                })
                            }
                            return !1
                        } else
                            return h(r.payload, D).then(M=>{
                                    i({
                                        ok: !0,
                                        data: M
                                    })
                                }
                            ).catch(M=>{
                                    i({
                                        ok: !1,
                                        errorName: M.name,
                                        errorMessage: M.message,
                                        errorDetails: M.message,
                                        errorStatus: M.status
                                    })
                                }
                            ),
                                !0
                    }
                ))
        }
        getConnection(e, n, r) {
            let a = !1;
            r && r.sync && (a = !0);
            let i = this.fromType
                , o = ss.get(i);
            if (o.has(e))
                return o.get(e).connectionInstance;
            {
                let s = new ip(`${i}:${e}`,this.logger);
                return ss.get(i).set(e, {
                    messageHandler: n,
                    sync: a,
                    connectionInstance: s
                }),
                    s
            }
        }
    }
    , ip = class {
        debugger;

        from;
        logger;
        constructor(e, n) {
            this.from = e,
                this.logger = n
        }
        async sendMessage(e, n) {
            //debugger;

            let r = op(e)
                , {type: a, id: i} = r;
            if (a !== "content_script") {
                let o = {
                    to: e,
                    from: this.from,
                    payload: n
                };
                this.logger.debug(`${o.from} send message [${o.payload.method}] to ${o.to}`, o.payload.data ? o.payload.data : " ");
                try {
                    let s = await oe.runtime.sendMessage(o);
                    return g3(o, s, this.logger)
                } catch (s) {
                    if (a === "popup") {
                        let u = `popup ${e} is not active, so the message does not send, ignore this error, ${JSON.stringify(n)}`;
                        return this.logger.debug(u, n, e, s),
                            Promise.resolve({
                                message: u
                            })
                    } else
                        throw s
                }
            } else {
                let o = {
                    from: this.from,
                    to: e,
                    payload: n
                };
                this.logger.debug(`${o.from} send message [${o.payload.method}] to ${o.to}`, o.payload.data ? o.payload.data : " ");
                let s = await oe.tabs.sendMessage(i, o);
                return g3(o, s, this.logger)
            }
        }
    }
;
function g3(t, e, n) {
    if (e) {
        if (e.ok)
            return n.debug(`${t.from} received response from ${t.to}:`, e.data ? e.data : " "),
                e.data;
        throw new V(e.errorName || "UnknownError",e.errorMessage || "Unknown error").initNetWork(e.errorStatus)
    } else
        throw new V("noResponse","Unknown error")
}
function op(t) {
    let e = t.split(":");
    if (e.length < 2)
        throw new Error("not a valid to string");
    let n = {
        type: e[0],
        name: e[1]
    };
    if (e[0] === "content_script") {
        let r = parseInt(e[2]);
        if (!isNaN(r))
            n.id = r;
        else
            throw new Error("tab id not a valid number")
    }
    return n
}
