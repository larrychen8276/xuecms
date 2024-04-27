
var Dz = Wb(2)
    , Hb = Wb(3);
function Wb(t) {
    if (typeof t != "number" || Number.isNaN(t) || t < 1 || t === Number.POSITIVE_INFINITY)
        throw new Error("`" + t + "` is not a valid argument for `n-gram`");
    return e;
    function e(n) {
        let r = [];
        if (n == null)
            return r;
        let a = typeof n.slice == "function" ? n : String(n)
            , i = a.length - t + 1;
        if (i < 1)
            return r;
        for (; i--; )
            r[i] = a.slice(i, i + t);
        return r
    }
}
