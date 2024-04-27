
var wc = class extends ba {
        videoSrc = null;
        loadSubtitleWithFetch(e) {
            return this.loadSubtitle(e)
        }
        async loadSubtitle(e) {
            try {
                let n = this.getVideoId()
                    , r = await this.inject.getVideoMeta(n)
                    , a = this.config.humanPreferred && this.getHumanCaptionTrack(this.ctx.targetLanguage, r);
                this.showSubtitleLoading(!a);
                let i = this.getLangCodeFromSubtitleUrl(e, r);
                if (nt(he(i), this.ctx.targetLanguage))
                    return null;
                qe(this.ctx, he(i));
                let o = await this.fetchSubtitle(e);
                if (!o)
                    return null;
                let s = await this.requestHumanSubtitle(o, r);
                if (s) {
                    let l = this.ctx.rule.subtitleRule.humanTrust;
                    if (!l || s.trust >= l)
                        return s.text
                }
                return await this.translateSubtitleByText(o, he(i))
            } catch (n) {
                return B.error(n),
                    null
            } finally {
                this.hideSubtitleLoading()
            }
        }
        async requestHumanSubtitle(e, n) {
            if (!this.config.humanPreferred || !n)
                return null;
            let r = this.getHumanCaptionTrack(this.ctx.targetLanguage, n);
            if (!r)
                return null;
            let a = await this.fetchSubtitle(r);
            if (!a)
                return null;
            if (this.getTranslationMode() === "translation")
                return {
                    text: a,
                    trust: 100
                };
            let i = lo(e)
                , o = lo(a)
                , s = co(i, o);
            return {
                text: ha(s),
                trust: 100 - Math.abs(i.length - o.length) * 100 / i.length
            }
        }
        async translateSubtitleByText(e, n) {
            let r = lo(e)
                , a = r.map((i,o)=>({
                text: i.text,
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
                    let u = Bt(o.text)
                        , l = r[s.id];
                    l && this.getTranslationMode() === "translation" ? l.text = u : l && (l.text = `${l.text}
${u}`)
                }
            ),
                ha(r)
        }
        formatCaptionTrackUrl(e) {
            let n = {};
            return e?.captions.forEach(r=>{
                    n[he(r.locale_id.replace("_", "-"))] = r.url
                }
            ),
                n
        }
        getHumanCaptionTrack(e, n) {
            return this.formatCaptionTrackUrl(n)[e]
        }
        getLangCodeFromSubtitleUrl(e, n) {
            let r = typeof e == "string" ? e : e.url;
            return (n?.captions.find(i=>r.indexOf(`/${i.locale_id}/`) >= 0)?.locale_id || "").replace("_", "-")
        }
        async fetchSubtitle(e, n) {
            let r = await fetch(e, n);
            if (!r.ok)
                throw new Error("request subtitle error");
            return await r.text()
        }
        getVideoId() {
            let n = new URL(Ee()).pathname.split("lecture/")[1];
            if (!n) {
                let r = document.querySelector("video[id*='playerId']");
                if (!r)
                    return;
                n = r.getAttribute("id")?.match(/playerId.+?(\d+)/)?.[1] || ""
            }
            return n
        }
    }
;