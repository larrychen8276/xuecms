var Dc = class extends je {
        loadSubtitleWithFetch(e, n) {
            return this.loadSubtitle(e, n)
        }
        async loadSubtitle(e, n) {
            try {
                let r = this.config.generalSetting;
                if (!r)
                    return null;
                this.showSubtitleLoading(!0);
                let a = await this.fetchSubtitle(e, n);
                if (!a)
                    return null;
                let i = [];
                if (r.captionsPath) {
                    let o = YT(a, r.captionsPath);
                    o && (i = o)
                } else
                    i.push(a);
                for (let o of i) {
                    let s = o;
                    if (r.itemsPath && (s = YT(o, r.itemsPath)),
                        !s?.length)
                        continue;
                    let u = await Ie({
                        text: s.map(l=>Ac(l, r.textKey)).join(`
`),
                        pageLangs: [ht(), "en"]
                    });
                    if (nt(he(u), this.ctx.targetLanguage))
                        return null;
                    await this.translateSubtitle(s, u),
                        qe(this.ctx, he(u))
                }
                return JSON.stringify(a)
            } catch (r) {
                return B.error(r),
                    null
            } finally {
                this.hideSubtitleLoading()
            }
        }
        async translateSubtitle(e, n) {
            let r = this.config.generalSetting
                , a = e.map((i,o)=>({
                text: Ac(i, r.textKey)?.replace(/\n/g, " ") || "",
                id: o,
                from: n,
                to: this.ctx.targetLanguage,
                url: "https://google.com",
                fromByClient: n,
                force: !0
            }));
            return await Ze({
                    sentences: a
                }, {
                    ...this.ctx,
                    translationService: this.ctx.subtitleTranslateService,
                    sourceProgram: "videoSubtitle"
                }, (i,o,s)=>{
                    if (i || !o) {
                        B.debug("translate subtitle:", i, o, s);
                        return
                    }
                    let u = e[s.id];
                    u && this.getTranslationMode() === "translation" ? e[s.id] = QT(u, r.textKey, o.text, !0) : u && (e[s.id] = QT(u, r.textKey, o.text))
                }
            ),
                e
        }
        async fetchSubtitle(e, n) {
            let r = await fetch(e, n);
            if (!r.ok)
                throw new Error("request subtitle error");
            return await r.json()
        }
    }
;


function YT(t, e) {
    if (Array.isArray(t))
        return t;
    let n = e.split(".")
        , r = t;
    for (let a = 0; a < n.length; a++) {
        if (!r)
            return null;
        r = r[n[a]]
    }
    return r
}
function Ac(t, e) {
    if (!t)
        return null;
    if (!e)
        return t;
    let n = t[e];
    return Array.isArray(n) ? n.join(" ") : n
}
function QT(t, e, n="", r=!1) {
    return t ? (e ? Array.isArray(t[e]) ? t[e] = r ? [n] : [Ac(t, e), n] : t[e] = r ? n : t[e] + `
` + n : t = r ? n : Ac(t, e) + `
` + n,
        t) : null
}
