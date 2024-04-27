
var Nw = new Map;
function ul(t) {
    let e = Uw(64)
        , n = new CustomEvent(Hu,{
        detail: JSON.stringify({
            ...t,
            type: "ask",
            id: e
        })
    });
    return document.dispatchEvent(n),
        new Promise((r,a)=>{
                Nw.set(e, (i,o)=>{
                        i ? a(i) : r(o)
                    }
                )
            }
        )
}
function Uw(t) {
    let e = ""
        , n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        , r = n.length
        , a = 0;
    for (; a < t; )
        e += n.charAt(Math.floor(Math.random() * r)),
            a += 1;
    return e
}