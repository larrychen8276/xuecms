var xc = class extends je {
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
                if (s)
                    return s.documentElement.outerHTML;
                let u = await this.translateSubtitle(o, he(i));
                return u ? u.documentElement.outerHTML : null
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
            return a ? this.getTranslationMode() === "translation" ? a : this.mergeSubtitles(e, a) : null
        }
        async translateSubtitle(e, n) {
            let r = e.cloneNode(!0)
                , a = [...r.querySelectorAll("p")]
                , i = a.map((o,s)=>({
                text: o.textContent || "",
                id: s,
                from: n,
                to: this.ctx.targetLanguage,
                url: "https://google.com",
                force: !0,
                fromByClient: n
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
                    c && this.getTranslationMode() === "translation" ? c.innerHTML = l : c && (c.innerHTML = `${c.innerHTML}<br />${l}`)
                }
            ),
                r
        }
        formatCaptionTrackUrl(e) {
            let n = {};
            return e?.timedtexttracks.forEach(r=>{
                    let a = Object.values(r.ttDownloadables).reduce((i,o)=>i.concat(o.urls.map(s=>s.url)), []);
                    n[he(r.language)] = a
                }
            ),
                n
        }
        getHumanCaptionTrack(e, n) {
            let r = this.formatCaptionTrackUrl(n);
            return r[e] ? r[e][0] : null
        }
        getLangCodeFromSubtitleUrl(e, n) {
            let r = this.formatCaptionTrackUrl(n)
                , a = Object.entries(r).find(([i,o])=>o.includes(e));
            return B.debug("findLang:", a, r, e, n),
                a ? a[0] : ""
        }
        async fetchSubtitle(e) {
            let n = await fetch(e);
            if (!n.ok)
                throw new Error("request subtitle error");
            let r = await n.text();
            return new window.DOMParser().parseFromString(r, "text/xml")
        }
        mergeSubtitles(e, n) {
            let r = e.cloneNode(!0)
                , a = [...r.querySelectorAll("p")]
                , i = [...n.querySelectorAll("p")]
                , o = this.formatToSubtitleItem(a)
                , s = this.formatToSubtitleItem(i);
            return co(o, s, "<br />").forEach((l,c)=>{
                    a.length <= c || (a[c].innerHTML = l.text)
                }
            ),
                r
        }
        formatToSubtitleItem(e) {
            return e.map(n=>{
                    let r = n.getAttribute("begin") || "0"
                        , a = n.getAttribute("end") || "0"
                        , i = n.innerHTML || "";
                    return {
                        start: parseInt(r),
                        end: parseInt(a),
                        text: i
                    }
                }
            )
        }
        getVideoId() {
            let n = new URL(Ee()).pathname.replace("/watch/", "");
            return n ? parseInt(n) : null
        }
        getAppendQuickButtonElement() {
            let e = this.config;
            if (!e.quickButtonRule || !e.quickButtonRule.appendSelector)
                return null;
            let r = document.querySelector(e.quickButtonRule.appendSelector)?.parentElement?.parentElement;
            if (!r)
                return;
            r.querySelector(`#${this.quickButtonId}`)?.remove();
            let a = document.createElement("div");
            if (a.id = this.quickButtonId,
                e.quickButtonRule.insertBeforeSelector) {
                let i = document.querySelector(e.quickButtonRule.insertBeforeSelector)?.parentElement;
                i && r.insertBefore(a, i)
            } else
                r.append(a);
            return a
        }
    }
;
