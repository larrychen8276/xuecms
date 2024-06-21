var fo = class extends ba {
        mutationVideoChange() {
            let e = this.config
                , n = document
                , r = null;
            this.autoShowObserver && this.autoShowObserver.disconnect(),
            e.videoPlayerSelector && (this.autoShowObserver = new MutationObserver(()=>{
                    let a = n.querySelector(e.videoPlayerSelector)
                        , i = a?.querySelector("source")
                        , o = "";
                    i ? o = i.getAttribute("src") || "" : o = a?.getAttribute("src") || "",
                    a?.textTracks.length && (o && o !== this.videoSrc || r && r != a) && (r = a,
                        this.videoSrc = o,
                    !(e.videoADSelector && document.querySelector(e.videoADSelector)) && this.isEnableSubtitle() && this.mutationSubtitleChange(a))
                }
            ),
                this.autoShowObserver.observe(n, {
                    subtree: !0,
                    childList: !0
                }))
        }
        mutationSubtitleChange(e) {
            if (!e)
                return;
            this.removeCueChangeListeners.forEach(a=>a()),
            e?.textTracks?.length && qe(this.ctx, he(e.textTracks[0].language), `${this.ctx.rule.id}_text_track_dynamic`),
                [...e.textTracks].forEach(a=>{
                        this.handleTextTracks(a)
                    }
                )
        }
        handleTextTracks(e) {
            let n = r=>{
                    B.debug("handEvent", r.target);
                    let a = [...e.cues || []];
                    if (!a.length)
                        return;
                    let i = a.filter(o=>!o.isTranslated);
                    i.forEach(o=>o.isTranslated = !0),
                        this.translateSubtitle(i, he(e.language))
                }
            ;
            e.addEventListener("cuechange", n),
                this.removeCueChangeListeners.push(()=>e.removeEventListener("cuechange", n))
        }
    }
;
