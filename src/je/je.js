
var je = class {
        inject = UT;
        config;
        ctx;
        memoryCacheMap = new Map;
        loadingNodeId = "imt-subtitle-loading";
        cacheSize = 5;
        isAttachSubtitled = !1;
        constructor(e) {
            this.ctx = e,
                this.config = e.rule.subtitleRule,
                this.handleMessage(),
                this.mutationVideoChange(),
                this.injectCSS(),
                this.inject.contentReady(),
                this.mutationQuickButton()
        }
        handleMessage() {
            yc.handleMessages(async({action: e, id: n, data: r})=>{
                    let a = this[e];
                    if (!a)
                        return;
                    let i = a.apply(this, [r]);
                    i instanceof Promise && (i = await i),
                        yc.sendMessages({
                            id: n,
                            data: i
                        })
                }
            )
        }
        injectCSS() {
            let e = this.config.injectedCss || [];
            oo(this.ctx) && this.isEnableSubtitle() && (lt(document.documentElement, me + "_rtl", this.ctx.targetLanguage),
                this.config.rtlInjectedCss?.length ? e.push(...this.config.rtlInjectedCss) : this.config.loadingContainerSelector && e.push(`[data-${Q}_rtl] ${this.config.loadingContainerSelector} * {direction: rtl;}`)),
            e.length && En(document, `${e.join(`
`)}`, Q + "-subtitle-dynamic-injected-css")
        }
        initConfig(e) {
            this.ctx = e,
                this.config = e.rule.subtitleRule
        }
        async requestSubtitle(e) {
            let n = await We(Ee(), {});
            if (this.initConfig(n),
                await vr(200),
                !!this.isEnableSubtitle()) {
                if (e.url) {
                    let r = e.url + this.ctx.targetLanguage + this.getTranslationMode()
                        , a = this.getMemoryCache(r);
                    if (a)
                        return a;
                    let i = await this.loadSubtitle(e.url);
                    return i && this.setMemoryCache(r, i),
                        i
                } else if (e.fetchInfo)
                    try {
                        let {input: r, options: a} = JSON.parse(e.fetchInfo)
                            , o = (r.url || "") + this.ctx.targetLanguage
                            , s = this.getMemoryCache(o);
                        if (s)
                            return s;
                        let u = await this.loadSubtitleWithFetch(OT(r), zT(a));
                        return u && this.setMemoryCache(o, u),
                            u
                    } catch (r) {
                        return B.error(r),
                            null
                    }
            }
        }
        loadSubtitle(e) {
            return Promise.resolve(null)
        }
        loadSubtitleWithFetch(e, n) {
            return Promise.resolve(null)
        }
        async onPageStatusChange() {}
        async autoEnableSubtitleChanged() {
            globalThis.location.reload()
        }
        async onTranslationModeChanged() {}
        mutationVideoChange() {}
        isEnableSubtitle() {
            return this.config.disabled || this.config.translationOnlyPattern && !dt(Ee(), this.config.translationOnlyPattern) ? !1 : this.config.autoEnableSubtitle
        }
        setMemoryCache(e, n) {
            if (this.memoryCacheMap.set(e, n),
            this.memoryCacheMap.size > this.cacheSize) {
                let r = [...this.memoryCacheMap.keys()][0];
                r && this.memoryCacheMap.has(r) && this.memoryCacheMap.delete(r)
            }
        }
        getMemoryCache(e) {
            return this.config.disableSubsCache ? null : this.memoryCacheMap.get(e)
        }
        i18nFormat(e, n) {
            return mr(Nt, e, this.ctx.config.interfaceLanguage, "zh-CN", n)
        }
        getLoadingText(e) {
            let n = this.i18nFormat("subtitleLoading");
            return e && (n = this.i18nFormat("subtitleTranslating", {
                service: this.i18nFormat(`translationServices.${this.ctx.subtitleTranslateService}`)
            })),
                n
        }
        showSubtitleLoading(e) {
            if (!this.config.loadingContainerSelector)
                return;
            let n = this.getLoadingText(e)
                , r = document.querySelector(this.config.loadingContainerSelector);
            if (!r)
                return;
            let a = Math.min(20, r.offsetWidth / 40)
                , i = document.getElementById(this.loadingNodeId);
            i && this.hideSubtitleLoading(),
                i = document.createElement("div"),
                i.setAttribute("id", this.loadingNodeId);
            let o = `<span style="background: rgba(8, 8, 8, 0.75); font-size: ${a}px; line-height: 1.5; padding: 10px; color: #FFFFFF;">
        {{text}}
        </span>
      `;
            i.setAttribute("style", "position: absolute; bottom: 5%; left: 0; right: 0; display: flex; justify-content: center; z-index: 1024;" + this.config.loadingStyle || ""),
                i.innerHTML = DOMPurify.sanitize(o.replace("{{text}}", n)),
                r?.appendChild(i)
        }
        hideSubtitleLoading() {
            if (!this.config.loadingContainerSelector)
                return;
            let e = document.querySelector(this.config.loadingContainerSelector)
                , n = document.getElementById(this.loadingNodeId);
            !e || !n || e.removeChild(n)
        }
        async _translateSubtitle(e, n, r=`
`) {
            let a = e.map((o,s)=>({
                text: o.replace(/\n/, " ") || "",
                id: s,
                from: n,
                to: this.ctx.targetLanguage,
                url: "https://google.com",
                fromByClient: n,
                force: !0
            }));
            return (await Ze({
                sentences: a
            }, {
                ...this.ctx,
                translationService: this.ctx.subtitleTranslateService,
                sourceProgram: "videoSubtitle"
            })).sentences.map((o,s)=>this.getTranslationMode() === "translation" ? o.text : `${e[s] || ""}${r}${o.text}`)
        }
        getTranslationMode() {
            return this.config.translationMode && this.config.translationMode !== "inherit" ? this.config.translationMode : this.ctx.state.translationMode
        }
        quickButtonObserver = null;
        mutationQuickButton() {
            if (this.isDisableQuickButton())
                return;
            let e = this.config?.quickButtonRule;
            e && (this.quickButtonObserver && this.quickButtonObserver.disconnect(),
                this.quickButtonObserver = new MutationObserver(()=>{
                        if (!e.appendSelector)
                            return null;
                        e.ccEnableSelector && !document.querySelector(e.ccEnableSelector) || !document.querySelector(e.appendSelector) || document.getElementById(this.quickButtonId) || this.reloadQuickButton()
                    }
                ),
                this.quickButtonObserver.observe(document, {
                    subtree: !0,
                    childList: !0
                }))
        }
        isDisableQuickButton() {
            return this.config.disabled || !this.config.showQuickButton || !this.config.quickButtonRule?.appendSelector
        }
        async isShowQuickButton() {
            return !0
        }
        quickButtonId = "immersive-translate-quick-button-container";
        getAppendQuickButtonElement() {
            if (!this.config.quickButtonRule || !this.config.quickButtonRule.appendSelector)
                return null;
            let e = document.querySelector(this.config.quickButtonRule.appendSelector);
            if (!e)
                return;
            let n = document.createElement("div");
            if (n.id = this.quickButtonId,
                this.config.quickButtonRule.insertBeforeSelector) {
                let r = document.querySelector(this.config.quickButtonRule.insertBeforeSelector);
                r && e.insertBefore(n, r)
            } else
                e.append(n);
            return n
        }
        attachSubtitle(e, n, r) {
            qe(this.ctx, n);
            let a = e.filter(i=>i.text);
            qr(this.ctx, this.config.attachRule?.appendSelector || "", {
                videoSelector: this.config.videoSelector || "video",
                subtitleItems: a,
                ctx: this.ctx,
                lang: n
            }, r),
                this.isAttachSubtitled = !0
        }
        removeAttachSubtitle() {
            this.config.attachRule?.appendSelector && (zs(this.config.attachRule.appendSelector),
                this.isAttachSubtitled = !1)
        }
        async reloadQuickButton() {
            if (this.isDisableQuickButton() || (document.getElementById(this.quickButtonId)?.remove(),
                !await this.isShowQuickButton()))
                return;
            let n = this.getAppendQuickButtonElement();
            n && fc({
                id: Q + "quick-button",
                parent: n,
                ctx: this.ctx,
                Component: $T,
                props: {
                    ctx: this.ctx
                },
                style: VT + this.config.quickButtonRule?.injectCSS || ""
            })
        }
    }
;
