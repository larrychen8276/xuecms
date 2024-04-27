
var g2 = [["auto", "auto"], ["zh-CN", "zh"], ["zh-TW", "zh-TW"], ["de", "de"], ["en", "en"], ["es", "es"], ["fr", "fr"], ["id", "id"], ["it", "it"], ["ja", "jp"], ["ko", "kr"], ["ms", "ms"], ["pt", "pt"], ["ru", "ru"], ["th", "th"], ["tr", "tr"], ["vi", "vi"]]
    , Cs = class t extends De {
        static langMap = new Map(g2);
        maxTextGroupLength = 50;
        static langMapReverse = new Map(g2.map(([e,n])=>[n, e]));
        static getUTCDate(e) {
            let n = e.getUTCFullYear()
                , r = `${e.getUTCMonth() + 1}`.padStart(2, "0")
                , a = `${e.getUTCDate()}`.padStart(2, "0");
            return `${n}-${r}-${a}`
        }
        secretId = "";
        secretKey = "";
        isSupportList = !0;
        constructor(e, n, r) {
            if (super(e, n, r),
            !e || !e.secretId || !e.secretKey)
                throw new V("secretId and secretKey are required");
            this.secretId = e.secretId?.trim(),
                this.secretKey = e.secretKey?.trim()
        }
        getDefaultRateLimit() {
            return {
                limit: 3,
                interval: 1350
            }
        }
        async translate(e) {
            let {text: n, from: r, to: a} = e
                , i = JSON.stringify({
                ProjectId: 0,
                Source: t.langMap.get(r) || "auto",
                SourceText: n,
                Target: t.langMap.get(a) || a
            })
                , o = await this.signedRequest({
                secretId: this.secretId,
                secretKey: this.secretKey,
                action: "TextTranslate",
                payload: i,
                service: "tmt",
                version: "2018-03-21"
            });
            return {
                text: o.Response.TargetText,
                from: t.langMapReverse.get(o.Response.Source) || r,
                to: t.langMapReverse.get(o.Response.Target) || a
            }
        }
        async translateList(e) {
            let {text: n, from: r, to: a} = e
                , i = JSON.stringify({
                ProjectId: 0,
                Source: t.langMap.get(r) || "auto",
                SourceTextList: n,
                Target: t.langMap.get(a) || a
            })
                , o = await this.signedRequest({
                secretId: this.secretId,
                secretKey: this.secretKey,
                action: "TextTranslateBatch",
                payload: i,
                service: "tmt",
                version: "2018-03-21"
            });
            return {
                text: o.Response.TargetTextList,
                from: t.langMapReverse.get(o.Response.Source) || r,
                to: t.langMapReverse.get(o.Response.Target) || a
            }
        }
        async signedRequest({secretId: e, secretKey: n, action: r, payload: a, service: i, version: o}) {
            let s = `${i}.tencentcloudapi.com`
                , u = new Date
                , l = `${new Date().valueOf()}`.slice(0, 10)
                , c = ["POST", "/", "", "content-type:application/json; charset=utf-8", `host:${s}`, "", "content-type;host", await tr(a)].join(`
`)
                , p = t.getUTCDate(u)
                , m = ["TC3-HMAC-SHA256", l, `${p}/${i}/tc3_request`, await tr(c)].join(`
`)
                , g = await p2(p, `TC3${n}`)
                , f = await Zl(i, g)
                , T = await Zl("tc3_request", f)
                , b = await Zl(m, T)
                , h = await ce({
                retry: this.retry,
                url: `https://${i}.tencentcloudapi.com`,
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    Host: s,
                    "X-TC-Action": r,
                    "X-TC-Timestamp": l,
                    "X-TC-Region": "ap-beijing",
                    "X-TC-Version": o,
                    Authorization: `TC3-HMAC-SHA256 Credential=${e}/${p}/${i}/tc3_request, SignedHeaders=content-type;host, Signature=${b}`
                },
                body: a,
                timeout: this.requestTimeout
            });
            if (h instanceof Error)
                throw h;
            if (h.Response && h.Response.Error && h.Response.Error.Message)
                throw new V(h.Response.Error.Message);
            return h
        }
    }
;