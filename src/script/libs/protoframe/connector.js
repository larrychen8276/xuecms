function n1(t, e, n) {
    return `${t.type}#${e}#${n}`
}
function r1(t, e, n, r, a) {
    return {
        body: a,
        id: r,
        type: n1(t, e, n)
    }
}
function yD(t, e, n, r) {
    return {
        id: n,
        response: r,
        type: n1(t, "ask", e)
    }
}
function a1(t, e, n, r) {
    if (ia(r)) {
        let a = r.type;
        if (ia(a) && ia(r.body)) {
            let[i,o,s] = a.split("#");
            return i === t.type && o === e && s === n
        } else
            return !1
    } else
        return !1
}
function vD(t, e, n) {
    if (ia(n)) {
        let r = n.type;
        if (ia(r) && ia(n.response)) {
            let[a,i,o] = r.split("#");
            return a === t.type && i === "ask" && o === e
        } else
            return !1
    } else
        return !1
}
function SD(t) {
    t.forEach(([e,n])=>e.removeEventListener("message", n)),
        t.length = 0
}
function xD(t, e, n, r) {
    return new Promise(a=>{
            let i = o=>{
                    let s = o.data;
                    vD(e, n, s) && s.id === r && (t.removeEventListener("message", i),
                        a(s.response))
                }
            ;
            t.addEventListener("message", i)
        }
    )
}
function ED(t, e, n, r) {
    let a = i=>{
            let o = i.data;
            a1(e, "tell", n, o) && r(o.body)
        }
    ;
    return t.addEventListener("message", a),
        [t, a]
}
function e1(t, e, n, r, a, i) {
    let o = async s=>{
            let u = s.data;
            if (a1(n, "ask", r, u)) {
                let l = await i(u.body);
                e = s.source,
                    e.postMessage(yD(n, r, u.id, l), s.origin)
            }
        }
    ;
    return t.addEventListener("message", o),
        [t, o]
}
function CD(t, e, n, r, a) {
    let i = Math.random().toString();
    return t.postMessage(r1(e, "tell", n, i, r), a)
}
async function t1(t, e, n, r, a, i, o) {
    let s = Math.random().toString()
        , u = new Promise(async(l,c)=>{
            let p = setTimeout(()=>c(new Error(`Failed to get response within ${o}ms`)), o)
                , m = await xD(t, n, r, s);
            clearTimeout(p),
                l(m)
        }
    );
    return e.postMessage(r1(n, "ask", r, s, a), i),
        u
}

var oa = class t {
        constructor(e, n, r=window, a="*") {
            this.protocol = e;
            this.targetWindow = n;
            this.thisWindow = r;
            this.targetOrigin = a;
            e1(r, n, this.getSystemProtocol("ping"), "ping", a, ()=>Promise.resolve({}))
        }
        static async connect(e, n=10, r=500) {
            for (let a = 0; a <= n; a++)
                try {
                    return await e.ping({
                        timeout: r
                    }),
                        e
                } catch {
                    continue
                }
            throw new Error(`Could not connect on protocol ${e.protocol.type} after ${n * r}ms`)
        }
        static parent(e, n, r="*", a=window) {
            let i = n.contentWindow;
            if (ia(i))
                return new t(e,i,a,r);
            throw new Error("iframe.contentWindow was null")
        }
        static iframe(e, n="*", {thisWindow: r=window, targetWindow: a=window.parent}={}) {
            return new t(e,a,r,n)
        }
        static rootIframe(e, n="*", {thisWindow: r=window}={}) {
            return new t(e,null,r,n)
        }
        getSystemProtocol(e) {
            return {
                type: `system|${e}`
            }
        }
        listeners = [];
        async ping({timeout: e=1e4}) {
            await t1(this.thisWindow, this.targetWindow, this.getSystemProtocol("ping"), "ping", {
                data: {},
                payload: {}
            }, this.targetOrigin, e)
        }
        handleTell(e, n) {
            this.listeners.push(ED(this.thisWindow, this.protocol, e, n))
        }
        tell(e, n) {
            CD(this.targetWindow, this.protocol, e, n, this.targetOrigin)
        }
        handleAsk(e, n) {
            this.listeners.push(e1(this.thisWindow, this.targetWindow, this.protocol, e, this.targetOrigin, n))
        }
        ask(e, n, r=1e4) {
            if (this.targetWindow)
                return t1(this.thisWindow, this.targetWindow, this.protocol, e, n, this.targetOrigin, r);
            throw new Error("target window is requried")
        }
        destroy() {
            SD(this.listeners)
        }
    }
;
