(()=>{
        var u = "imt-subtitle-inject"
            , f = class {
            from;
            to;
            constructor(t, n) {
                this.from = t,
                    this.to = n
            }
            sendMessages(t) {
                globalThis.postMessage({
                    type: u,
                    to: this.to,
                    from: this.from,
                    action: t.action,
                    data: t.data,
                    id: t.id || new Date().getTime(),
                    isAsync: !1
                })
            }
            getRandomId() {
                return (new Date().getTime() + Math.random()) * Math.random()
            }
            sendAsyncMessages({action: t, data: n}) {
                return new Promise(e=>{
                        let r = this.getRandomId();
                        globalThis.postMessage({
                            type: u,
                            to: this.to,
                            from: this.from,
                            action: t,
                            data: n,
                            id: r,
                            isAsync: !0
                        });
                        let a = ({data: o})=>{
                                u === o.type && o.id === r && o.to === this.from && (e(o.data),
                                    globalThis.removeEventListener("message", a))
                            }
                        ;
                        globalThis.addEventListener("message", a)
                    }
                )
            }
            handleMessageOnce(t) {
                return new Promise(n=>{
                        let e = ({data: r})=>{
                                u === r.type && r.action === t && r.to === this.from && (n(r.data),
                                    globalThis.removeEventListener("message", e))
                            }
                        ;
                        globalThis.addEventListener("message", e)
                    }
                )
            }
            handleMessage(t, n) {
                let e = ({data: r})=>{
                        u === r.type && r.action === t && r.to === this.from && n(r)
                    }
                ;
                return globalThis.addEventListener("message", e),
                    ()=>{
                        globalThis.removeEventListener("message", e)
                    }
            }
            handleMessages(t) {
                let n = ({data: e})=>{
                        u === e.type && e.to === this.from && t(e)
                    }
                ;
                return globalThis.addEventListener("message", n),
                    ()=>{
                        globalThis.removeEventListener("message", n)
                    }
            }
        }
            , R = new f("content-script","inject")
            , l = new f("inject","content-script")
            , S = {
            get(s, t, n) {
                return t in s ? (...e)=>{
                        let r = s[t];
                        return typeof r == "function" ? r.apply(s, e) : Reflect.get(s, t, n)
                    }
                    : e=>s.sendAsyncMessages({
                        action: t,
                        data: e
                    })
            }
        }
            , x = new Proxy(l,S)
            , L = new Proxy(R,S);
        function T(s) {
            if (!s)
                return null;
            try {
                let t = s;
                return s.startsWith("//") ? t = globalThis.location.protocol + s : s.startsWith("/") ? t = `${globalThis.location.protocol}//${globalThis.location.host}${s}` : s.startsWith("http") || (t = `${globalThis.location.protocol}//${s}`),
                    new URL(t).toString()
            } catch (t) {
                return console.error(t),
                    s
            }
        }
        var i = class {
                content = x;
                config;
                constructor(t) {
                    this.config = t,
                        l.handleMessages(async({action: n, id: e, data: r})=>{
                                let a = this[n];
                                if (!a)
                                    return;
                                let o = a.apply(this, [r]);
                                o instanceof Promise && (o = await o),
                                    l.sendMessages({
                                        id: e,
                                        data: o
                                    })
                            }
                        )
                }
                triggerSubtitle(t) {}
                async translateSubtitle(t) {
                    let n = await this.content.requestSubtitle({
                        url: T(t._url)
                    });
                    if (n) {
                        if (this.config.responseType == "document") {
                            let r = new DOMParser().parseFromString(n, "text/xml");
                            Object.defineProperty(t, "responseXML", {
                                value: r,
                                writable: !1
                            }),
                                Object.defineProperty(t, "response", {
                                    value: r,
                                    writable: !1
                                });
                            return
                        }
                        let e = n;
                        (t.responseType == "arraybuffer" || this.config.responseType == "arraybuffer") && typeof n == "string" && (e = new TextEncoder().encode(n).buffer),
                            Object.defineProperty(t, "responseText", {
                                value: e,
                                writable: !1
                            }),
                            Object.defineProperty(t, "response", {
                                value: e,
                                writable: !1
                            })
                    }
                }
                async translateSubtitleWithFetch(t, n) {
                    let e = {
                        ...n
                    }, r;
                    return typeof t == "string" ? r = {
                        url: t,
                        method: "GET",
                        headers: {}
                    } : r = await v(t),
                    e?.body && (e.body = M(e.body)),
                        this.content.requestSubtitle({
                            fetchInfo: JSON.stringify({
                                input: r,
                                options: e
                            })
                        })
                }
                async getVideoMeta(t) {}
                isSubtitleRequest(t) {
                    return !this.config || !this.config.subtitleUrlRegExp || !t ? !1 : new RegExp(this.config.subtitleUrlRegExp).test(t || "")
                }
            }
        ;
        function v(s) {
            if (s instanceof URL)
                return {
                    url: s.href,
                    method: "GET",
                    headers: {}
                };
            let t = s.clone()
                , n = {
                url: s.url,
                method: s.method,
                headers: Object.fromEntries(s.headers.entries())
            };
            if (t.body) {
                let e = M(t.body);
                if (t.body !== e)
                    return t.text().then(r=>(n.body = r,
                        n));
                n.body = e
            }
            return Promise.resolve(n)
        }
        function M(s) {
            if (!s)
                return s;
            if (s instanceof FormData || s instanceof URLSearchParams) {
                let t = {};
                for (let[n,e] of s.entries())
                    t[n] = e;
                return t._formatBodyType = "FormData",
                    t
            }
            return s
        }
        var d = class extends i {
                timer = null;
                triggerSubtitle({force: t}) {
                    setTimeout(()=>{
                            if (this.config?.subtitleButtonSelector) {
                                let n = document.querySelector(this.config.subtitleButtonSelector);
                                if (n) {
                                    let e = n.getAttribute("aria-pressed") === "true";
                                    e && t ? (n.click(),
                                        setTimeout(()=>{
                                                n.click()
                                            }
                                            , 100)) : e || n.click();
                                    return
                                }
                            }
                            if (this.config?.videoPlayerSelector) {
                                let n = document.querySelector(this.config.videoPlayerSelector);
                                n?.toggleSubtitles(),
                                    setTimeout(()=>{
                                            n?.toggleSubtitles()
                                        }
                                        , 100)
                            }
                        }
                        , 1e3)
                }
                async getVideoMeta() {
                    if (!this.config.videoPlayerSelector)
                        return null;
                    try {
                        return await this.sleep(100),
                            document.querySelector(this.config.videoPlayerSelector)?.getPlayerResponse()
                    } catch {
                        return null
                    }
                }
                sleep(t) {
                    return new Promise(n=>{
                            setTimeout(()=>{
                                    n(null)
                                }
                                , t)
                        }
                    )
                }
            }
        ;
        var m = class extends i {
                timer = null;
                videoMeta = {};
                lastVideoMeta = null;
                constructor(t) {
                    super(t),
                        this.hookJSON()
                }
                hookJSON() {
                    let t = JSON.parse;
                    JSON.parse = n=>{
                        let e = t(n);
                        try {
                            e && e.result && e.result.timedtexttracks && e.result.movieId && (this.videoMeta[e.result.movieId] = e.result,
                                this.lastVideoMeta = e.result)
                        } catch (r) {
                            console.log(r)
                        }
                        return e
                    }
                }
                getVideoMeta(t) {
                    return this.lastVideoMeta
                }
            }
        ;
        var p = class extends i {
                timer = null;
                videoMeta = {};
                constructor(t) {
                    super(t),
                        this.hookJSON()
                }
                hookJSON() {
                    let t = JSON.parse;
                    JSON.parse = n=>{
                        let e = t(n);
                        try {
                            e?.asset?.captions?.length ? this.videoMeta[e.id] = e?.asset : e?.previews && e?.course && e?.previews?.forEach(r=>{
                                    this.videoMeta[r.id] = r
                                }
                            )
                        } catch (r) {
                            console.error(r)
                        }
                        return e
                    }
                }
                getVideoMeta(t) {
                    return this.videoMeta[t]
                }
            }
        ;
        var g = class extends i {
                timer = null;
                videoMeta = {};
                constructor(t) {
                    super(t),
                        this.hookJSON()
                }
                hookJSON() {
                    let t = JSON.parse;
                    JSON.parse = n=>{
                        let e = t(n);
                        try {
                            if (e?.stream?.sources?.length && e?.stream?.sources[0]?.complete?.url) {
                                let r = window.location.pathname.split("/");
                                r.length > 2 && r[r.length - 2] === "video" && (this.videoMeta[r[r.length - 1]] = e.stream.sources[0].complete.url)
                            }
                        } catch (r) {
                            console.error(r)
                        }
                        return e
                    }
                }
                getVideoMeta(t) {
                    return this.videoMeta[t]
                }
            }
        ;
        var h = class extends i {
                constructor(t) {
                    super(t)
                }
                async translateSubtitleWithFetch(t, n) {
                    this.main(t, n)
                }
                async main(t, n) {
                    let e = globalThis.__originalFetch;
                    if (!e)
                        return;
                    let r = t;
                    t instanceof Request && (r = t.clone());
                    let a = await e(r, n);
                    if (!a.ok)
                        return;
                    let o = await a.json();
                    o.transcripts_urls && this.requestSubtitle(o.transcripts_urls)
                }
                async requestSubtitle(t) {
                    await c(),
                        await this.content.requestSubtitle(t)
                }
            }
        ;
        async function w() {
            let s = await l.sendAsyncMessages({
                action: "getConfig"
            });
            if (!s)
                return;
            let n = {
                youtube: d,
                netflix: m,
                webvtt: i,
                khanacademy: i,
                bilibili: i,
                udemy: p,
                general: i,
                ebutt: i,
                hulu: h,
                disneyplus: g,
                "fmp4.xml": i,
                multi_attach_vtt: i,
                twitter: i,
                subsrt: i,
                xml: i,
                text_track_dynamic: i,
                av: i
            }[s.type || ""];
            if (!n)
                return;
            let e = new n(s);
            I(e, s)
        }
        c();
        w();
        function I(s, t) {
            if (t.hookType.includes("xhr")) {
                let n = XMLHttpRequest.prototype.open
                    , e = XMLHttpRequest.prototype.send
                    , r = function() {
                    return this._url = arguments[1],
                        n.apply(this, arguments)
                }
                    , a = async function() {
                    return s.isSubtitleRequest(this._url) ? (await c(),
                        await s.translateSubtitle(this),
                        e.apply(this, arguments)) : e.apply(this, arguments)
                };
                Object.defineProperty(XMLHttpRequest.prototype, "open", {
                    value: r,
                    writable: !0
                }),
                    Object.defineProperty(XMLHttpRequest.prototype, "send", {
                        value: a,
                        writable: !0
                    })
            }
            if (t.hookType.includes("fetch")) {
                let n = globalThis.fetch;
                globalThis.__originalFetch = n,
                    globalThis.fetch = async function(e, r) {
                        let a = typeof e == "string" ? e : e.url || e.href;
                        if (!s.isSubtitleRequest(a))
                            return n(e, r);
                        await c();
                        let y = await s.translateSubtitleWithFetch(e, r);
                        return y ? new Response(y) : n(e, r)
                    }
            }
        }
        var b = !1;
        async function c() {
            return b || (await l.handleMessageOnce("contentReady"),
                b = !0),
                b
        }
    }
)();
