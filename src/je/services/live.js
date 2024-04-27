var mo = class extends je {
        textChangeObserver = null;
        findTargetObserver = null;
        liveSubtitleRule;
        containerElement = null;
        constructor(e) {
            super(e),
                this.liveSubtitleRule = e.rule.subtitleRule.liveSubtitleRule,
                this.applyLiveSubtitle()
        }
        injectCSS() {}
        applyLiveSubtitle() {
            if (this.clearLiveSubtitle(),
                !this.isEnableSubtitle())
                return;
            super.injectCSS();
            let e = on(this.ctx)
                , n = this.config.liveSubtitleRule;
            !n || !n.containerSelector || (this.textChangeObserver = new MutationObserver(r=>{
                    let a = !1;
                    for (let i of r) {
                        if (i.type == "characterData") {
                            let o = i.target
                                , s = Yi(e, o.parentElement);
                            if (!s)
                                continue;
                            this.debounceBuildContainers(o, s)
                        }
                        n.textSelectors && i.addedNodes.length && (a = !0)
                    }
                    !a || !this.containerElement || this.translateAll(this.containerElement)
                }
            ),
                this.findTargetObserver = new MutationObserver(()=>{
                        this.findTargetElement()
                    }
                ),
                this.findTargetElement(),
                this.findTargetObserver.observe(document.body, {
                    childList: !0,
                    subtree: !0
                }))
        }
        findTargetElement() {
            let e = this.config.liveSubtitleRule;
            if (!e?.containerSelector)
                return;
            let n = document.body.querySelector(e?.containerSelector);
            !n || n.hasMutationText || (this.containerElement = n,
                n.hasMutationText = !0,
                this.textChangeObserver.observe(n, {
                    subtree: !0,
                    childList: !0,
                    characterData: !0
                }),
                this.translateAll(n),
                this.report(e, n))
        }
        report(e, n) {
            if (!e.reportSelector)
                return;
            let r = n.closest(e.reportSelector);
            r.reported || (r.reported = !0,
                qe(this.ctx, this.ctx.sourceLanguage))
        }
        clearLiveSubtitle() {
            this.textChangeObserver?.disconnect(),
                this.findTargetObserver?.disconnect(),
                this.containerElement = null;
            let e = this.config.liveSubtitleRule?.containerSelector;
            if (!e)
                return;
            let n = document.querySelector(e);
            n && (n.querySelectorAll("." + yt).forEach(r=>{
                    r.remove()
                }
            ),
                n.hasMutationText = !1)
        }
        translateAll(e) {
            this.config.liveSubtitleRule?.textSelectors?.forEach(r=>{
                    e.querySelectorAll(r).forEach(a=>{
                            !a.textContent || a.querySelector("." + yt) || this.translate(this.ctx, a, a)
                        }
                    )
                }
            )
        }
        isSelf(e) {
            return Cn(e, ["." + yt])
        }
        debounceBuildContainers(e, n) {
            if (e.parentElement && this.isSelf(e.parentElement))
                return;
            let r = this.config.liveSubtitleRule?.mutationChangeDelay
                , a = n;
            if (a.timer) {
                a.latestContentLength = e.length;
                return
            }
            clearTimeout(a.timer),
                a.timer = setTimeout(async()=>{
                        let i = e.length;
                        await this.translate(this.ctx, e, n),
                            a.timer = null,
                        a.latestContentLength && a.latestContentLength != i && this.debounceBuildContainers(e, n)
                    }
                    , r)
        }
        async translate(e, n, r) {
            let a = r.querySelector("." + yt);
            if (!a) {
                let o = document.createElement("font");
                o.classList.add(yt),
                    o.classList.add("notranslate");
                let s = Ap(e);
                o.append(DOMPurify.sanitize(s, {
                    RETURN_DOM_FRAGMENT: !0
                })),
                    a = o,
                    r.appendChild(a)
            }
            let i = await this.translateText(e, n.textContent || "");
            !i || !this.isEnableSubtitle() || (a.innerHTML = `<br/> ${i}<br/>`)
        }
        async translateText(e, n) {
            let r = await Ie({
                text: n,
                pageLangs: [vt(), "en"]
            });
            return $i(e, r) ? void 0 : (await ma({
                id: 0,
                url: e.url,
                text: n,
                from: r,
                to: e.targetLanguage,
                fromByClient: r
            }, {
                ...e,
                translationService: this.ctx.subtitleTranslateService,
                sourceProgram: "liveSubtitle"
            })).text
        }
        async autoEnableSubtitleChanged() {
            let e = Qe()
                , n = await We(Ee(), {});
            this.initConfig(n),
            !(this.config.disabled || e !== "Original") && this.applyLiveSubtitle()
        }
        async onPageStatusChange() {
            let e = await We(Ee(), {});
            this.initConfig(e),
            !(this.config.disabled || this.config.autoEnableSubtitle) && this.applyLiveSubtitle()
        }
    }
;
