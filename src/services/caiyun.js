
var vA = [["auto", "auto"], ["zh-CN", "zh"], ["en", "en"], ["ja", "ja"]]
    , oc = new Map(vA)
    , gg = class extends De {
    static langMap = oc;
    token = "ssdj273ksdiwi923bsd9";
    constructor(e, n, r) {
        super(e, n, r)
    }
    getDefaultRateLimit() {
        return {
            limit: 5,
            interval: 1050
        }
    }
    async translateList(e) {
        let {text: n, from: r, to: a} = e;
        if (!oc.get(a))
            throw new V(`Unsupported language: ${a}`);
        if (r === "auto")
            throw new V("Unsupported language: auto");
        let o = n;
        return {
            text: (await ce({
                retry: this.retry,
                url: "https://api.interpreter.caiyunai.com/v1/translator",
                headers: {
                    "content-type": "application/json",
                    "x-authorization": "token " + this.token
                },
                method: "POST",
                body: JSON.stringify({
                    source: o,
                    trans_type: `${oc.get(r) || "auto"}2${oc.get(a)}`
                }),
                timeout: this.requestTimeout
            })).target,
            from: r,
            to: a
        }
    }
}
    , Z2 = gg;
