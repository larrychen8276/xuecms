var Pc = class extends je {
    autoShowObserver = null;
    videoSrc = null;
    loadSubtitleWithFetch(e, n) {
        return this.loadSubtitle(e, n)
    }
    async loadSubtitle(e, n) {
        try {
            this.showSubtitleLoading(!0);
            let r = await this.fetchSubtitle(e, n);
            if (!r)
                return null;
            let {doc: a, subtitles: i} = mk(r)
                , o = await Ie({
                text: i.map(u=>u.textContent).join(`
`),
                pageLangs: [ht(), "en"]
            });
            return nt(he(o), this.ctx.targetLanguage) ? null : (qe(this.ctx, he(o)),
                await this.translateSubtitle(a, i, he(o)))
        } catch (r) {
            return B.error(r),
                null
        } finally {
            this.hideSubtitleLoading()
        }
    }
    async translateSubtitle(e, n, r) {
        let a = n.map((i,o)=>({
            text: (i.textContent || "").trim().replace(/\n/g, " "),
            id: o,
            from: r,
            to: this.ctx.targetLanguage,
            url: "https://google.com",
            fromByClient: r,
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
                let u = n[s.id]
                    , l = Bt(o.text);
                if (u && this.getTranslationMode() === "translation")
                    u.innerHTML = l;
                else if (u) {
                    let c = u.parentElement;
                    if (!c)
                        return;
                    let p = u?.tagName?.split(":") || []
                        , m = "br";
                    p.length > 1 && (m = p[0] + ":" + m);
                    let g = e.createElementNS(kc, m)
                        , f = u.cloneNode(!0);
                    f.nodeType == Node.TEXT_NODE ? f.textContent = l.trim() : f.innerHTML = l.trim(),
                        c?.appendChild(g),
                        c?.appendChild(f)
                }
            }
        ),
            new XMLSerializer().serializeToString(e)
    }
    async fetchSubtitle(e, n) {
        let r = await fetch(e, n);
        if (!r.ok)
            throw new Error("request subtitle error");
        return (await r.text() || "").replace(/\r\n/g, `
`)
    }
}
    , kc = "http://www.w3.org/ns/ttml";


function mk(t) {
    let e = new DOMParser().parseFromString(t, "text/xml")
        , n = e.getElementsByTagNameNS(kc, "p")
        , r = [];
    return [...n].forEach(a=>{
            let i = a.textContent || "";
            try {
                if (a.childNodes[0].nodeType == Node.TEXT_NODE && a.childNodes[0].textContent?.trim()) {
                    let o = a.childNodes[0];
                    if (i.length <= 1)
                        return;
                    o.textContent = i,
                        a.innerHTML = o.textContent,
                        r.push(a.childNodes[0])
                } else {
                    let s = a.getElementsByTagNameNS(kc, "span")[0];
                    if (!s || i.length <= 1)
                        return;
                    s.innerHTML = i.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
                        a.innerHTML = s.outerHTML,
                        s = a.getElementsByTagNameNS(kc, "span")[0],
                        r.push(s)
                }
            } catch {}
        }
    ),
        {
            doc: e,
            subtitles: r
        }
}
