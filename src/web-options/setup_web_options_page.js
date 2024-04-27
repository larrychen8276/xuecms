
async function $9() {
    debugger;

    if (!document.getElementById("immersive-translate-status")) {
        B.error("Could not find status element");
        return
    }
    await G9("local"),
        await G9("sync"),
        Q7();
    let e = document.getElementById("immersive-translate-page-ready");
    e && setTimeout(()=>{
            e.value = "true",
                e.dispatchEvent(new Event("change"))
        }
        , 100)
}
async function Y7(t, e) {
    let n;
    try {
        n = JSON.parse(t.detail)
    } catch (a) {
        B.error("parse detail failed", a);
        return
    }
    let r = n.id || "default";
    try {
        let a = n.data || {}
            , i = await e(a)
            , o = {
            id: r,
            ok: !0,
            data: i
        };
        document.dispatchEvent(new CustomEvent(Wu,{
            detail: JSON.stringify({
                ...o,
                type: "answer"
            })
        }))
    } catch (a) {
        let i = {
            ok: !1,
            errorName: a.name,
            errorMessage: a.message,
            errorDetails: a.details || a.detail
        };
        document.dispatchEvent(new CustomEvent(Wu,{
            detail: JSON.stringify({
                ...i,
                id: r,
                type: "answer"
            })
        }))
    }
}
function Q7() {
    document.addEventListener(Hu, r=>{
            let a = r;
            if (B.debug("document message", a),
            a && a.detail) {
                let i;
                try {
                    i = JSON.parse(a.detail)
                } catch (o) {
                    B.error("parse detail failed", o);
                    return
                }
                i.type === "ask" ? i.method === "request" && Y7(a, ce) : i.type === "tell" && i.method === "updateCommands" && _l(i.data)
            }
        }
    );
    let t = document.getElementById("immersive-translate-manifest");
    if (!t) {
        B.error("Could not find manifest element");
        return
    }
    let e = oe.runtime.getManifest();
    tt() && (e._isSafari = !0),
        t.value = JSON.stringify(e),
        t.dispatchEvent(new Event("change")),
        document.getElementById("immersive-translate-message").addEventListener("change", r=>{
                try {
                    let a = JSON.parse(r.target.value);
                    a && a.method === "removeStorageKey" && a.data && a.data.area && a.data.keys && oe.storage[a.data.area].remove(a.data.keys)
                } catch (a) {
                    B.error("parse message error", a)
                }
            }
        )
}
async function G9(t) {
    let e = document.getElementById("immersive-translate-status")
        , n = document.getElementById(`immersive-translate-${t}-storage`);
    if (n) {
        B.debug("init storage");
        let r = await oe.storage[t].get(null);
        n.value = JSON.stringify(r),
            n.dispatchEvent(new Event("change")),
            n.addEventListener("change", a=>{
                    try {
                        let i = JSON.parse(a.target.value);
                        oe.storage[t].set(i)
                    } catch (i) {
                        B.error("save to storage error", i)
                    }
                }
            ),
            n.addEventListener("refresh-" + t, async a=>{
                    let i = await oe.storage[t].get(null);
                    n.value = JSON.stringify(i),
                        B.debug("refresh ", t, "storage")
                }
            )
    } else {
        B.error(`Could not find storage ${t} element`),
            e.innerText = "Could not find storage local input element";
        return
    }
}
