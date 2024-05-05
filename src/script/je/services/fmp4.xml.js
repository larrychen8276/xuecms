var _c = class extends je {
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
                let a = hc(r);
                if (!a)
                    return;
                let i = [...a.document.querySelectorAll("p")].filter(c=>c.textContent?.trim())
                    , o = i.map(c=>c.textContent || "");
                if (!o.length)
                    return null;
                let s = await Ie({
                    text: o.join(`
`),
                    pageLangs: [ht(), "en"]
                });
                return nt(he(s), this.ctx.targetLanguage) ? null : (qe(this.ctx, he(s)),
                    (await this._translateSubtitle(o, s, "<br />")).forEach((c,p)=>{
                            i[p] && (i[p].innerHTML = c)
                        }
                    ),
                    bc(a.arrayBuffer, a.document))
            } catch (r) {
                return B.error(r),
                    null
            } finally {
                this.hideSubtitleLoading()
            }
        }
        async fetchSubtitle(e, n) {
            let r = await fetch(e, n);
            if (!r.ok)
                throw new Error("request subtitle error");
            return await r.arrayBuffer()
        }
    }
;