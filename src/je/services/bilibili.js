var Cc = class extends je {
        autoShowObserver = null;
        videoSrc = null;
        async loadSubtitle(e) {
            try {
                this.showSubtitleLoading(!0);
                let n = await this.fetchSubtitle(e);
                if (!n)
                    return null;
                let r = await Ie({
                    text: n.body.map(i=>i.content).join(`
`),
                    pageLangs: [ht(), "en"]
                });
                if (nt(he(r), this.ctx.targetLanguage))
                    return null;
                qe(this.ctx, r);
                let a = await this.translateSubtitle(n, he(r));
                return JSON.stringify(a)
            } catch (n) {
                return B.error(n),
                    null
            } finally {
                this.hideSubtitleLoading()
            }
        }
        async translateSubtitle(e, n) {
            let r = JSON.parse(JSON.stringify(e))
                , a = r.body
                , i = a.map((o,s)=>({
                text: Xa(o.content) || "",
                id: s,
                from: n,
                to: this.ctx.targetLanguage,
                url: "https://google.com",
                fromByClient: n,
                force: !0
            }));
            return await Ze({
                    sentences: i
                }, {
                    ...this.ctx,
                    translationService: this.ctx.subtitleTranslateService,
                    sourceProgram: "videoSubtitle"
                }, (o,s,u)=>{
                    if (o || !s) {
                        B.debug("translate subtitle:", o, s, u);
                        return
                    }
                    let l = a[u.id]
                        , c = Bt(s.text);
                    c !== Xa(l.content) && (l && this.getTranslationMode() === "translation" ? l.content = c : l && (l.content = `${Xa(l.content)}
${c}`))
                }
            ),
                r
        }
        async fetchSubtitle(e) {
            let n = await fetch(e);
            if (!n.ok)
                throw new Error("request subtitle error");
            return await n.json()
        }
    }
;