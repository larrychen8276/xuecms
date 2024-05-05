var yd = class extends Error {
    constructor(e, n) {
        super(`Exceeded max retry count (${n})`),
            this.name = "RetryError",
            this.cause = e
    }
}
    , mS = {
    multiplier: 2,
    maxTimeout: 6e4,
    maxAttempts: 5,
    minTimeout: 1e3
};
async function vd(t, e) {
    let n = {
        ...mS,
        ...e
    };
    if (n.maxTimeout >= 0 && n.minTimeout > n.maxTimeout)
        throw new RangeError("minTimeout is greater than maxTimeout");
    let r = n.minTimeout, a;
    for (let i = 0; i < n.maxAttempts; i++)
        try {
            return await t()
        } catch (o) {
            await new Promise(s=>setTimeout(s, r)),
                r *= n.multiplier,
                r = Math.max(r, n.minTimeout),
            n.maxTimeout >= 0 && (r = Math.min(r, n.maxTimeout)),
                a = o
        }
    throw new yd(a,n.maxAttempts)
}
