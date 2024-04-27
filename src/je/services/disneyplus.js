var Lc = class extends je {
        async loadSubtitle(e) {
            try {
                let n = await this.getVideoMeta()
                    , r = this.config.humanPreferred && await this.getHumanSubtitleUrls(this.ctx.targetLanguage, n);
                this.showSubtitleLoading(!r);
                let a = await this.fetchSubtitle(e);
                if (!a)
                    return null;
                let i = fa(a);
                if (!i.subtitles.length)
                    return null;
                let o = await this.getLangCodeFromVtt(i.subtitles);
                if (nt(o, this.ctx.targetLanguage))
                    return null;
                if (qe(this.ctx, o),
                    n) {
                    let u = await this.requestHumanSubtitle(e, i, n);
                    if (u)
                        return u
                }
                return await this.translateSubtitle(i, he(o))
            } catch (n) {
                return B.error(n),
                    null
            } finally {
                this.hideSubtitleLoading()
            }
        }
        async requestHumanSubtitle(e, n, r) {
            if (!this.config.humanPreferred || !r)
                return null;
            let a = await this.getHumanSubtitleUrls(this.ctx.targetLanguage, r);
            if (!a)
                return null;
            let i = e.split("/")
                , o = a.find(l=>l.endsWith(i[i.length - 1]));
            if (!o)
                return null;
            let s = await this.fetchSubtitle(o);
            if (this.getTranslationMode() === "translation")
                return s;
            let u = co(n.subtitles, lo(s));
            return n.subtitles = u,
                ha(n)
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
        async getHumanSubtitleUrls(e, n) {
            if (!n)
                return null;
            let r = n.find(s=>he(s.language) === e && s.language.toLowerCase() !== "zh-hk");
            if (!r)
                return null;
            if (r.subtitleUrl)
                return r.subtitleUrl;
            let i = await (await fetch(r.url)).text()
                , o = bk(i).map(s=>`${r.baseUrl}/r/${s}`);
            return o.length ? (r.subtitleUrl = o,
                o) : null
        }
        getLangCodeFromVtt(e) {
            let n = e.map(r=>r.text).join(`
`);
            return Ie({
                text: n,
                pageLangs: ["auto"]
            })
        }
        async fetchSubtitle(e) {
            let n = await fetch(e);
            if (!n.ok)
                throw new Error("request subtitle error");
            return await n.text()
        }
        getVideoId() {
            let n = new URL(Ee()).pathname.split("/");
            return n.length > 2 && n[n.length - 2] === "video" ? n[n.length - 1] : null
        }
        videoMetaMap = {};
        async getVideoMeta() {
            let e = this.getVideoId();
            if (!e)
                return null;
            if (this.videoMetaMap[e])
                return this.videoMetaMap[e];
            let n = await this.inject.getVideoMeta(e);
            if (!n)
                return null;
            let r = await (await fetch(n)).text()
                , a = hk(r)
                , i = fk(n)
                , o = a.map(s=>({
                language: s.language,
                url: `${i}/${s.uri}`,
                baseUrl: i
            }));
            return o.length ? (this.videoMetaMap[e] = o,
                o) : null
        }
    }
;
