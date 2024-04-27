
var go = class extends je {
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
                let a = fa(r)
                    , i = await Ie({
                    text: a.subtitles.map(s=>s.text).join(`
`),
                    pageLangs: [ht(), "en"]
                });
                if (nt(he(i), this.ctx.targetLanguage))
                    return null;
                if (qe(this.ctx, he(i)),
                    this.config.attachRule?.appendSelector) {
                    qr(this.ctx, this.config.attachRule.appendSelector, {
                        videoSelector: this.config.videoSelector || "video",
                        subtitleItems: a.subtitles,
                        ctx: this.ctx,
                        lang: i
                    });
                    return
                }
                return await this.translateSubtitle(a, he(i))
            } catch (r) {
                return B.error(r),
                    null
            } finally {
                this.hideSubtitleLoading()
            }
        }
        async translateSubtitle(e, n) {
            let r = e.subtitles.map((a,i)=>({
                text: (a.text || "").replace(/\n/g, " "),
                id: i,
                from: n,
                to: this.ctx.targetLanguage,
                url: "https://google.com",
                fromByClient: n,
                force: !0
            }));
            return await Ze({
                    sentences: r
                }, {
                    ...this.ctx,
                    translationService: this.ctx.subtitleTranslateService,
                    sourceProgram: "videoSubtitle"
                }, (a,i,o)=>{
                    if (a || !i) {
                        B.debug("translate subtitle:", a, i, o);
                        return
                    }
                    let s = Bt(i.text)
                        , u = e.subtitles[o.id];
                    u && this.getTranslationMode() === "translation" ? u.text = s : u && (u.text = `${u.text.replace(/\n/g, " ")}
${s}`)
                }
            ),
                ha(e)
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