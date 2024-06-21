var i3 = me + "SyncStoreKey_";
function At(t, e) {
    let n = i3 + t;
    return oe.storage.sync.get(n).then(r=>r[n] === void 0 ? e : r[n])
}
function et(t, e) {
    let n = i3 + t;
    return oe.storage.sync.set({
        [n]: e
    })
}

///////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////

var Ha = me + "CacheKey_";
function Z0(t, e) {
    //debugger;

    let n = Ha + t;
    return oe.storage.local.get(n).then(r=>r[n] === void 0 ? e : r[n])
}
function Rw() {
    let t = oe.storage.local.refresh;
    t && t()
}
function X0(t, e) {
    let n = Ha + t;
    return oe.storage.local.get(n).then(r=>{
            if (r[n] === void 0)
                return e;
            let {value: a, expired: i} = r[n];
            return i && i < Date.now() ? e : a
        }
    )
}
function ep(t, e, n) {
    let r = Ha + t
        , a = Date.now() + n;
    return oe.storage.local.set({
        [r]: {
            value: e,
            expired: a
        }
    })
}
function tp(t, e) {
    let n = Ha + t;
    return oe.storage.local.set({
        [n]: e
    })
}
function np(t) {
    let e = Ha + t;
    return oe.storage.local.remove(e)
}
async function u3() {
    let t = await oe.storage.local.get(null);
    if (t) {
        let n = Object.keys(t).filter(r=>r.startsWith(Ha)).filter(r=>r !== Ha + Ft);
        if (n.length > 0)
            return oe.storage.local.remove(n)
    }
}
var Mt = {
    get: Z0,
    set: tp,
    getExpired: X0,
    setExpired: ep,
    remove: np,
    clear: u3,
    refresh: Rw
};
