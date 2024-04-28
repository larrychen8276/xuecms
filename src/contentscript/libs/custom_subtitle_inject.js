
var po = "imt-subtitle-inject"
    , Tc = class {
    from;
    to;
    constructor(e, n) {
        this.from = e,
            this.to = n
    }
    sendMessages(e) {
        globalThis.postMessage({
            type: po,
            to: this.to,
            from: this.from,
            action: e.action,
            data: e.data,
            id: e.id || new Date().getTime(),
            isAsync: !1
        })
    }
    getRandomId() {
        return (new Date().getTime() + Math.random()) * Math.random()
    }
    sendAsyncMessages({action: e, data: n}) {
        return new Promise(r=>{
                let a = this.getRandomId();
                globalThis.postMessage({
                    type: po,
                    to: this.to,
                    from: this.from,
                    action: e,
                    data: n,
                    id: a,
                    isAsync: !0
                });
                let i = ({data: o})=>{
                        po === o.type && o.id === a && o.to === this.from && (r(o.data),
                            globalThis.removeEventListener("message", i))
                    }
                ;
                globalThis.addEventListener("message", i)
            }
        )
    }
    handleMessageOnce(e) {
        return new Promise(n=>{
                let r = ({data: a})=>{
                        po === a.type && a.action === e && a.to === this.from && (n(a.data),
                            globalThis.removeEventListener("message", r))
                    }
                ;
                globalThis.addEventListener("message", r)
            }
        )
    }
    handleMessage(e, n) {
        let r = ({data: a})=>{
                po === a.type && a.action === e && a.to === this.from && n(a)
            }
        ;
        return globalThis.addEventListener("message", r),
            ()=>{
                globalThis.removeEventListener("message", r)
            }
    }
    handleMessages(e) {
        let n = ({data: r})=>{
                po === r.type && r.to === this.from && e(r)
            }
        ;
        return globalThis.addEventListener("message", n),
            ()=>{
                globalThis.removeEventListener("message", n)
            }
    }
}
    , yc = new Tc("content-script","inject")
    , lk = new Tc("inject","content-script")
    , NT = {
    get(t, e, n) {
        return e in t ? (...r)=>{
                let a = t[e];
                return typeof a == "function" ? a.apply(t, r) : Reflect.get(t, e, n)
            }
            : r=>t.sendAsyncMessages({
                action: e,
                data: r
            })
    }
}
    , MJ = new Proxy(lk,NT)
    , UT = new Proxy(yc,NT);

function DT(t) {
    if (!t)
        return null;
    try {
        let e = t;
        return t.startsWith("//") ? e = globalThis.location.protocol + t : t.startsWith("/") ? e = `${globalThis.location.protocol}//${globalThis.location.host}${t}` : t.startsWith("http") || (e = `${globalThis.location.protocol}//${t}`),
            new URL(e).toString()
    } catch {
        return t
    }
}
