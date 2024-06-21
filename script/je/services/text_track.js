var ba = class extends je {
        autoShowObserver = null;
        videoSrc = null;
        removeCueChangeListeners = [];
        mutationVideoChange() {
            let e = this.config
                , n = document
                , r = null;
            this.autoShowObserver && this.autoShowObserver.disconnect(),
            e.videoPlayerSelector && (this.autoShowObserver = new MutationObserver(()=>{
                    let a = n.querySelector(e.videoPlayerSelector);
                    if (!a)
                        return;
                    let i = a.getAttribute("src");
                    (i && i !== this.videoSrc || r && r != a) && (r = a,
                        this.videoSrc = i,
                    !(e.videoADSelector && document.querySelector(e.videoADSelector)) && this.isEnableSubtitle() && this.mutationSubtitleChange(a))
                }
            ),
                this.autoShowObserver.observe(n, {
                    subtree: !0,
                    childList: !0
                }))
        }
        mutationSubtitleChange(e) {
            this.removeCueChangeListeners.forEach(a=>a()),
                [...e.textTracks].forEach(a=>{
                        this.handleTextTracks(a)
                    }
                );
            let r = a=>{
                    this.handleTextTracks(a.track)
                }
            ;
            e.textTracks.addEventListener("addtrack", r),
                this.removeCueChangeListeners.push(()=>e?.textTracks?.removeEventListener("addtrack", r))
        }
        handleTextTracks(e) {
            let n = r=>{
                    if (B.debug("handEvent", r.target),
                        !e.cues?.length)
                        return;
                    let a = r.target;
                    a?.isTranslated && a?.cues?.length || (qe(this.ctx, he(a.language)),
                        this.translateSubtitle([...a.cues || []], he(a.language)),
                        a.isTranslated = !0)
                }
            ;
            e.removeEventListener("cuechange", n),
                e.addEventListener("cuechange", n),
                this.removeCueChangeListeners.push(()=>e.removeEventListener("cuechange", n))
        }
        formatToSubtitleItem(e) {
            return e.map(n=>({
                text: n.text,
                start: n.startTime,
                end: n.endTime
            }))
        }
        async translateSubtitle(e, n) {
            this.showSubtitleLoading(!0);
            try {
                let r = e.map((a,i)=>({
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
                            , u = e[o.id];
                        u && this.getTranslationMode() === "translation" ? u.text = s : u && (u.text = `${u.text.replace(/\n/g, " ")}
${s}`)
                    }
                ),
                    e
            } catch (r) {
                B.error(r)
            } finally {
                this.hideSubtitleLoading()
            }
        }
    }
;