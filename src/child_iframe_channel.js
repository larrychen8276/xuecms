
var i1;
async function o1() {
    if (He()) {
        let e = globalThis;
        for (; e.top != e.self; )
            e = e.top;
        let n = oa.iframe(Zu, "*", {
            targetWindow: e
        });
        i1 = n,
            await oa.connect(n).catch(r=>{
                    B.error("connect with parent frame error", r)
                }
            )
    }
}
function s1() {
    return i1
}
