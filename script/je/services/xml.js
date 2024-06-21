var Rc = class extends je {
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
                let {doc: a, subtitles: i} = this.parseFromXml(r)
                    , o = await Ie({
                    text: i.map(u=>u.textContent).join(`
`),
                    pageLangs: [ht(), "en"]
                });
                return nt(he(o), this.ctx.targetLanguage) ? null : (qe(this.ctx, he(o)),
                    (await this._translateSubtitle(i.map(u=>u.textContent || ""), he(o))).forEach((u,l)=>{
                            i[l].textContent = u
                        }
                    ),
                    new XMLSerializer().serializeToString(a))
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
        parseFromXml(e) {
            if (!this.config.xmlTextSelector)
                throw new Error("xml text selector is required");
            let n = new DOMParser().parseFromString(e, "text/xml")
                , r = [...n.querySelectorAll(this.config.xmlTextSelector)];
            return {
                doc: n,
                subtitles: r
            }
        }
    }
;