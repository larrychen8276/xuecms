var Oc = class extends je {
        hasSubtitle = !1;
        async mutationVideoChange() {
            let e = Qk(location.href, document, this.config.avSerial);
            if (!e)
                return;
            let n = this.config.avSerial?.serialAttachIframe;
            if (n) {
                let a = document.querySelector(n);
                if (!a)
                    return;
                let i = new URL(a.getAttribute("src") || "");
                i.searchParams.set("code", e),
                    a.setAttribute("src", i.toString());
                return
            }
            let r = await this.fetchSubtitle(e);
            r && (qe(this.ctx, "ja", "av"),
                this.hasSubtitle = !0,
                qr(this.ctx, this.config.attachRule?.appendSelector || "", {
                    videoSelector: this.config.videoSelector || "video",
                    subtitleItems: r,
                    ctx: this.ctx,
                    lang: "ja"
                }))
        }
        isShowQuickButton() {
            return Promise.resolve(this.hasSubtitle)
        }
        async fetchSubtitle(e) {
            try {
                let n = await ce({
                    url: `https://subhub.weixin.so/missav/${e}`,
                    responseType: "text"
                });
                if (!n)
                    throw new Error("request subtitle error");
                return subsrt.parse(n, {
                    format: "vtt"
                }).map(a=>({
                    ...a,
                    start: a.start / 1e3,
                    end: a.end / 1e3
                }))
            } catch (n) {
                B.error("fetchSubtitle", n);
                return
            }
        }
    }
;