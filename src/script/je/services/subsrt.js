var Ic = class extends je {
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
                let a = subsrt.parse(r)
                    , i = a.filter(c=>c.type === "caption")
                    , o = await Ie({
                    text: i.map(c=>c.text).join(`
`),
                    pageLangs: [ht(), "en"]
                });
                if (nt(he(o), this.ctx.targetLanguage))
                    return null;
                qe(this.ctx, he(o));
                let s = i.map(c=>c.text)
                    , u = await this._translateSubtitle(s, o);
                return i.forEach((c,p)=>{
                        c.text = u[p]
                    }
                ),
                    subsrt.build(a, {
                        format: this.config.subsrtFormat || "vtt"
                    })
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
            return (await r.text() || "").replace(/\r\n/g, `
`)
        }
    }
;
