var Fc = class extends je {
        async requestSubtitle(e) {
            let n = await We(Ee(), {});
            if (this.initConfig(n),
                !this.isEnableSubtitle())
                return;
            let r = this.config.videoSelector;
            if (!r)
                return;
            let a = document.querySelector(r);
            if (!a)
                return;
            let i = await this.parseVTTUrl(e);
            if (!i)
                return;
            let s = await new go(this.ctx).loadSubtitle(i.url);
            if (!s)
                return;
            let u = jg(s);
            AT(a),
                Gg(a, i.lang, i.lang, u, !0)
        }
        parseVTTUrl(e) {
            if (e?.webvtt) {
                let[n,r] = Object.entries(e?.webvtt || {})[0];
                return {
                    url: r,
                    lang: n
                }
            }
        }
    }
;