
var o3 = me + "StoreKey_";
function Rr(t, e) {
    let n = o3 + t;
    return oe.storage.local.get(n).then(r=>r[n] === void 0 ? e : r[n])
}
function s3(t, e) {
    let n = o3 + t;
    return oe.storage.local.set({
        [n]: e
    })
}
