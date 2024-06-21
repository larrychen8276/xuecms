var S2 = [["auto", "auto"], ["zh-CN", "zh"], ["zh-TW", "zh"], ["en", "en"], ["ja", "ja"], ["de", "de"], ["fr", "fr"], ["it", "it"], ["es", "es"], ["nl", "nl"], ["pl", "pl"], ["pt", "pt"], ["ru", "ru"]]
    , Wp = new Map(S2)
    , v2 = new Map(S2.map(([t,e])=>[e, t]))
    , Kp = class t extends De {
    static langMap = Wp;
    static DEFAULT_CODENAME = "deepl";
    apikey = "";
    codename = t.DEFAULT_CODENAME;
    isSupportList = !1;
    maxTextGroupLength = 1;
    constructor(e, n, r) {
        if (super(e, n, r),
        !e || !e.apikey)
            throw new V("apikey are required");
        this.apikey = e.apikey?.trim(),
        e.codename && (this.codename = e.codename)
    }
    async translate(e) {
        let {text: n, from: r, to: a} = e
            , i = await ce({
            retry: this.retry,
            url: `https://api.openl.club/services/${this.codename}/translate`,
            headers: {
                "content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                apikey: this.apikey,
                text: n,
                source_lang: Wp.get(r) || "auto",
                target_lang: Wp.get(a) || a
            }),
            timeout: this.requestTimeout
        });
        if (i.status) {
            let o = i;
            return o.result && a == "zh-TW",
                {
                    text: o.result,
                    from: v2.get(o.source_lang),
                    to: v2.get(o.target_lang)
                }
        } else
            throw new V(i.msg)
    }
}
    , Xl = Kp;
