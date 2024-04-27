
function fD(t, e) {
    return Math.floor(Math.random() * (e - t + 1)) + t
}
var hD = 30
    , hp = "RATE_LIMITER_TICKS"
    , Mi = class t {
        static strictTicks = {};
        static clearStrictTicks() {
            ps(hp, "{}")
        }
        static async getStrictTicks(e, n) {
            if (n)
                return this.strictTicks[e] || [];
            try {
                let r = await bl(hp);
                r && (this.strictTicks = JSON.parse(r) || {})
            } catch (r) {
                B.debug("Error setting rate limiter ticks", r),
                    this.strictTicks[e] = []
            } finally {
                return this.strictTicks[e] || []
            }
        }
        static wait(e, n) {
            return new Promise((r,a)=>{
                    t.getDelay(e, n).then(i=>{
                            setTimeout(()=>{
                                    r(i)
                                }
                                , i)
                        }
                    )
                }
            )
        }
        static async setStrictTicks(e, n, r) {
            try {
                if (this.strictTicks[e] = n,
                    r)
                    return;
                await ps(hp, JSON.stringify(this.strictTicks))
            } catch (a) {
                B.debug("Error setting rate limiter ticks", a)
            }
        }
        static async getDelay(e, n, r=!1) {
            if (!r) {
                let l = fD(4, hD);
                await vr(l)
            }
            let a = await this.getStrictTicks(e, r) || []
                , {limit: i, interval: o} = n
                , s = Date.now();
            if (a.length < i)
                return a.push(s),
                    await this.setStrictTicks(e, a, r),
                    0;
            let u = a.shift() + o;
            return s >= u ? (a.push(s),
                await this.setStrictTicks(e, a, r),
                0) : (a.push(u),
                await this.setStrictTicks(e, a, r),
            u - s)
        }
    }
;
