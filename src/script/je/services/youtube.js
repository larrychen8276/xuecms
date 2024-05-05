var Sc = class extends je {
        autoShowObserver = null;
        videoSrc = null;
        mutationVideoChange() {
            let e = this.config
                , n = document;
            this.autoShowObserver && this.autoShowObserver.disconnect(),
                this.autoShowObserver = new MutationObserver(()=>{
                        let r = n.querySelector("video")
                            , a = r && r.getAttribute("src");
                        if (a && a != this.videoSrc) {
                            let i = e.videoADSelector && document.querySelector(e.videoADSelector);
                            this.removeAttachSubtitle(),
                            !i && this.isEnableSubtitle() && this.inject.triggerSubtitle({
                                force: !1
                            }),
                                this.videoSrc = a,
                                this.reloadQuickButton()
                        }
                        this.removeAttachSubtitleWithUserClose()
                    }
                ),
                this.autoShowObserver.observe(n, {
                    subtree: !0,
                    childList: !0
                })
        }
        removeAttachSubtitleWithUserClose() {
            let e = this.config;
            if (!e.attachRule?.appendSelector || !e.subtitleButtonSelector || !e.videoPlayerSelector || !this.isAttachSubtitled)
                return;
            let n = document.querySelector(e.videoPlayerSelector);
            if (!n)
                return;
            let r = n.querySelector(e.subtitleButtonSelector);
            !r || r?.getAttribute("aria-pressed") === "true" || this.removeAttachSubtitle()
        }
        isEnableSubtitle() {
            let e = super.isEnableSubtitle();
            return document.querySelector("#dualMarkStyle") && (e = !1),
                e
        }
        async loadSubtitle(e) {
            try {
                let n = await this.inject.getVideoMeta();
                if (n?.videoDetails?.isLive)
                    return this.translateLiveSubtitle(e);
                n && this.modifyLanguageNode(n);
                let r = this.getLangCodeFromSubtitleUrl(e);
                if (nt(he(r), this.ctx.targetLanguage))
                    return null;
                let a = await this.requestOriginalSubtitle(e);
                if (!a || !a?.length)
                    return null;
                let i = await this.requestHumanSubtitle(a, n);
                return i?.length || (i = await this.requestYoutubeTranslateSubtitle(e, a, n)),
                i?.length || (i = this.formatToSubtitleItem(a)),
                    this.attachSubtitle(i, r),
                    null
            } catch (n) {
                return B.error(n),
                    null
            } finally {
                this.hideSubtitleLoading()
            }
        }
        requestOriginalSubtitle(e) {
            let n = new URL(e)
                , r = this.getLangCodeFromSubtitleUrl(e);
            return n.searchParams.delete("fmt"),
                this.fetchSubtitle(n.toString(), r)
        }
        async requestHumanSubtitle(e, n) {
            if (!this.config.humanPreferred || !n)
                return null;
            let r = this.getHumanCaptionTrack(this.ctx.targetLanguage, n);
            if (!r)
                return null;
            let a = DT(r.baseUrl);
            if (!a)
                return null;
            let i = await this.fetchSubtitle(a, this.ctx.targetLanguage, !1);
            return i.length ? this.mergeSubtitles(e, i) : null
        }
        async requestYoutubeTranslateSubtitle(e, n, r) {
            if (this.config.preTranslation)
                return null;
            let a = this.getYoutubeTranslateLang(this.ctx.targetLanguage, r)
                , i = new URL(e);
            i.searchParams.delete("fmt"),
                i.searchParams.set("tlang", a);
            let o = await this.fetchSubtitle(i.toString(), this.ctx.targetLanguage)
                , s = o.filter(u=>!!u.text);
            return Math.abs(n.length - s.length) > n.length * .1 ? null : this.formatToSubtitleItem(n).map((u,l)=>({
                ...u,
                translation: o[l]?.text
            }))
        }
        getHumanCaptionTrack(e, n) {
            if (n && n.captions)
                return n.captions.playerCaptionsTracklistRenderer.captionTracks.find(a=>he(a.languageCode) === e && !a.kind)
        }
        getYoutubeTranslateLang(e, n) {
            let r = e;
            if (n && n.captions) {
                let a = n.captions.playerCaptionsTracklistRenderer?.translationLanguages?.find(i=>he(i.languageCode) === e);
                a && (r = a.languageCode)
            }
            return r
        }
        getLangCodeFromSubtitleUrl(e) {
            let n = new URL(e)
                , r = n.searchParams.get("tlang") || n.searchParams.get("lang") || "";
            return he(r)
        }
        modifyLanguageObserver = null;
        modifyLanguageNode(e) {
            let n = this.config
                , r = "immersive-translate-bilingual-subtitle-mark";
            if (!n.languageSelector || !e.captions)
                return;
            let a = e.captions.playerCaptionsTracklistRenderer.captionTracks.reduce((o,s)=>(Object.values(s.name).forEach(u=>{
                    o[u] = s.languageCode
                }
            ),
                o), {});
            this.modifyLanguageObserver && this.modifyLanguageObserver.disconnect(),
                this.modifyLanguageObserver = new MutationObserver(()=>{
                        if (!this.isEnableSubtitle()) {
                            document.querySelectorAll(`[${r}]`).forEach(s=>{
                                    s.remove()
                                }
                            );
                            return
                        }
                        document.querySelectorAll(n.languageSelector).forEach(s=>{
                                let u = s.innerText.trim();
                                if (a[u] && !nt(he(a[u]), this.ctx.targetLanguage)) {
                                    let l = document.createElement("span");
                                    l.innerText = `-${this.i18nFormat("bilingual")}`,
                                        l.setAttribute(r, "true"),
                                        s.appendChild(l)
                                }
                            }
                        )
                    }
                );
            let i = n.videoPlayerSelector && document.body.querySelector(n.videoPlayerSelector) || document;
            this.modifyLanguageObserver.observe(i, {
                subtree: !0,
                childList: !0
            })
        }
        async fetchSubtitle(e, n, r=!0) {
            let a = ["zh-Hans", "zh-Hant", "zh-CN", "zh-TW", "zh-HK", "zh", "zh-SG", "yue", "nan", "yue-HK", "nan-TW", "hak-TW", "hak", "ja", "ko", "th", "km", "lo", "my"].includes(n) ? "" : " "
                , i = await fetch(e);
            if (!i.ok)
                throw new Error("request subtitle error");
            let o = await i.text()
                , l = [...new window.DOMParser().parseFromString(o, "text/xml").querySelectorAll("text")].map(c=>({
                tStartMs: Math.round(1e3 * c.getAttribute("start")),
                dDurationMs: Math.round(1e3 * c.getAttribute("dur")),
                text: RT(c.textContent || "").replace(/\s*\n\s*/g, a)
            }));
            return r ? l.reduce((c,p,m)=>{
                    if (m == 0)
                        return c = c.concat(p),
                            c;
                    let g = c[c.length - 1];
                    return p.tStartMs < g.tStartMs + g.dDurationMs ? g.text += a + p.text : c = c.concat(p),
                        c
                }
                , []) : l
        }
        mergeSubtitles(e, n) {
            let r = JSON.parse(JSON.stringify(e))
                , a = this.formatToSubtitleItem(e)
                , i = this.formatToSubtitleItem(n)
                , o = Hg(a, i, `
`);
            return o.forEach((s,u)=>{
                    r.length <= u || (r[u].text = s.text)
                }
            ),
                o
        }
        formatToSubtitleItem(e) {
            return e.map(n=>({
                start: n.tStartMs / 1e3,
                end: (n.tStartMs + n.dDurationMs) / 1e3,
                text: n.text
            }))
        }
        async autoEnableSubtitleChanged() {
            let e = await We(Ee(), {});
            this.initConfig(e),
            !this.config.disabled && (!this.isEnableSubtitle() && this.config.attachRule?.appendSelector && zs(this.config.attachRule.appendSelector),
                this.inject.triggerSubtitle({
                    force: !0
                }))
        }
        async onTranslationModeChanged() {
            let e = await We(Ee(), {});
            this.initConfig(e),
            !this.config.disabled && (!this.config.translationMode || this.config.translationMode !== "inherit" || this.inject.triggerSubtitle({
                force: !0
            }))
        }
        mutationQuickButton() {}
        async isShowQuickButton() {
            if (this.config.videoPlayerSelector) {
                let i = document.querySelector(this.config.videoPlayerSelector)?.getBoundingClientRect();
                if (i?.width && i.width < 500)
                    return !1
            }
            let e = await this.inject.getVideoMeta()
                , n = !!e?.captions?.playerCaptionsTracklistRenderer.captionTracks.length
                , r = e?.videoDetails?.isLive && e.streamingData?.adaptiveFormats?.find(a=>/text\/mp4/.test(a.mimeType || ""));
            return n || !!r
        }
        lastReportUrl = "";
        async translateLiveSubtitle(e) {
            try {
                let n = await fetch(e);
                if (!n.ok)
                    throw new Error("request subtitle error");
                let r = await n.arrayBuffer()
                    , a = hc(r);
                if (!a)
                    return null;
                let i = [...a.document.querySelectorAll("p")].filter(c=>c.textContent?.trim())
                    , o = i.map(c=>c.textContent || "")
                    , s = await Ie({
                    text: o.join(`
`),
                    pageLangs: [ht(), "en"]
                });
                return nt(he(s), this.ctx.targetLanguage) ? null : (this.lastReportUrl !== Ee() && (this.lastReportUrl = Ee(),
                    qe(this.ctx, he(s), "youtube.live")),
                    (await this._translateSubtitle(o, s)).forEach((c,p)=>{
                            i[p] && (i[p].innerHTML = c)
                        }
                    ),
                    bc(a.arrayBuffer, a.document))
            } catch {}
        }
    }
;
