var Ec = class extends je {
        autoShowObserver = null;
        videoSrc = null;
        async loadSubtitleWithFetch(e, n) {
            try {
                this.showSubtitleLoading(!0);
                let r = typeof e == "string" ? e : e.url
                    , a = this.getLangCodeFromSubtitleUrl(r);
                if (nt(he(a), this.ctx.targetLanguage))
                    return null;
                qe(this.ctx, he(a));
                let i = await this.fetchSubtitle(e, n);
                if (!i)
                    return null;
                let o = await this.translateSubtitle(i, he(a));
                return JSON.stringify(o)
            } catch (r) {
                return B.error(r),
                    null
            } finally {
                this.hideSubtitleLoading()
            }
        }
        async translateSubtitle(e, n) {
            let r = JSON.parse(JSON.stringify(e))
                , a = r.data.subtitles
                , i = a.map((o,s)=>({
                text: Xa(o.text || ""),
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
                    let l = Bt(s.text)
                        , c = a[u.id];
                    c && this.getTranslationMode() === "translation" ? c.text = l : c && (c.text = `${Xa(c.text)}
${l}`)
                }
            ),
                r
        }
        getLangCodeFromSubtitleUrl(e) {
            return new URL(e).searchParams.get("lang") || ""
        }
        async fetchSubtitle(e, n) {
            let r = await fetch(e, n);
            if (!r.ok)
                throw new Error("request subtitle error");
            let a = await r.text();
            return JSON.parse(a)
        }
    }
;