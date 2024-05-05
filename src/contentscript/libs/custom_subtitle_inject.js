var po = "imt-subtitle-inject"
    , Tc = class {
    from;
    to;
    constructor(e, n) {
        this.from = e,
            this.to = n
    }
    sendMessages(e) {
        globalThis.postMessage({
            type: po,
            to: this.to,
            from: this.from,
            action: e.action,
            data: e.data,
            id: e.id || new Date().getTime(),
            isAsync: !1
        })
    }
    getRandomId() {
        return (new Date().getTime() + Math.random()) * Math.random()
    }
    sendAsyncMessages({action: e, data: n}) {
        return new Promise(r=>{
                let a = this.getRandomId();
                globalThis.postMessage({
                    type: po,
                    to: this.to,
                    from: this.from,
                    action: e,
                    data: n,
                    id: a,
                    isAsync: !0
                });
                let i = ({data: o})=>{
                        po === o.type && o.id === a && o.to === this.from && (r(o.data),
                            globalThis.removeEventListener("message", i))
                    }
                ;
                globalThis.addEventListener("message", i)
            }
        )
    }
    handleMessageOnce(e) {
        return new Promise(n=>{
                let r = ({data: a})=>{
                        po === a.type && a.action === e && a.to === this.from && (n(a.data),
                            globalThis.removeEventListener("message", r))
                    }
                ;
                globalThis.addEventListener("message", r)
            }
        )
    }
    handleMessage(e, n) {
        let r = ({data: a})=>{
                po === a.type && a.action === e && a.to === this.from && n(a)
            }
        ;
        return globalThis.addEventListener("message", r),
            ()=>{
                globalThis.removeEventListener("message", r)
            }
    }
    handleMessages(e) {
        let n = ({data: r})=>{
                po === r.type && r.to === this.from && e(r)
            }
        ;
        return globalThis.addEventListener("message", n),
            ()=>{
                globalThis.removeEventListener("message", n)
            }
    }
}
    , yc = new Tc("content-script","inject")
    , lk = new Tc("inject","content-script")
    , NT = {
    get(t, e, n) {
        return e in t ? (...r)=>{
                let a = t[e];
                return typeof a == "function" ? a.apply(t, r) : Reflect.get(t, e, n)
            }
            : r=>t.sendAsyncMessages({
                action: e,
                data: r
            })
    }
}
    , MJ = new Proxy(lk,NT)
    , UT = new Proxy(yc,NT);



///////////////////////////////////////////////////////////////////////////////////////////////////

function lo(t) {
    return fa(t).subtitles
}
function fa(t) {
    let e = []
        , n = t.split(/\r?\n/)
        , r = {}
        , a = -1;
    return n.forEach((i,o)=>{
            let s = i.match(/(?<start>(\d{2}:)*\d{2}([.,]\d{3})?) --> (?<end>(\d{2}:)*\d{2}([.,]\d{3})?)(?<style>(\s+.+)?)/);
            s?.groups ? (a < 0 && (a = o),
                r.start = s?.groups.start,
                r.end = s?.groups.end,
                r.style = s?.groups.style,
                r.text = "") : i.trim() === "" ? (r.start && r.end && r.text && e.push(r),
                r = {}) : r.text !== void 0 && (r.text.length > 0 && (r.text += `
`),
                r.text += i)
        }
    ),
    r.start && r.end && r.text && e.push(r),
        {
            meta: n.slice(0, a).join(`
`),
            subtitles: e
        }
}
function ha(t) {
    let e = "WEBVTT"
        , n = t;
    Array.isArray(t) || (e = t.meta,
        n = t.subtitles);
    let r = n.map(a=>{
            let i = Bt(a.text);
            return `${a.start} --> ${a.end}${a.style || ""}
${i}`
        }
    ).join(`

`);
    return `${e}

${r}`
}
function Bt(t) {
    try {
        let e = t.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
        return e = e.replace(/，\s*，/g, "\uFF0C").replace(/，\s*。/g, ""),
            e
    } catch {
        return t
    }
}
function jg(t) {
    let e = fa(t);
    return ZA(e.subtitles)
}
function ZA(t) {
    return t.map(e=>({
        startTime: bn(e.start),
        endTime: bn(e.end),
        text: e.text
    }))
}
function Hg(t, e, n=`
`, r=.5) {
    let a = wT(t)
        , i = wT(e)
        , o = []
        , s = 0;
    for (let l = 0; l < a.length && s < i.length; ) {
        let c = a[l]
            , p = i[s]
            , m = bn(c.start)
            , g = bn(c.end)
            , f = bn(p.start)
            , T = bn(p.end);
        if (T - r <= m) {
            s++;
            continue
        }
        if (f + r >= g) {
            l++;
            continue
        }
        let b = o[l] || [];
        b.push(p),
            o[l] = b,
        T <= g && s++,
        T >= g && l++
    }
    return a.map((l,c)=>{
            let p = o[c]?.map(m=>m.text).join(" ").replaceAll(n, " ");
            return {
                ...l,
                text: l.text.replaceAll(n, " "),
                translation: p
            }
        }
    )
}
function co(t, e, n=`
`, r=.5) {
    return Hg(t, e, n, r).map(i=>({
        ...i,
        text: i.translation ? `${i.text}${n}${i.translation}` : i.text
    }))
}
function wT(t) {
    for (let e = t.length - 1; e > 0; e--) {
        let n = t[e]
            , r = t[e - 1];
        bn(n.start) < bn(r.end) && (r.end = n.start)
    }
    return t
}
function bn(t) {
    if (typeof t == "number")
        return t;
    let e = t.split(":")
        , n = 0
        , r = 0
        , a = 0;
    if (e.length === 3)
        n = parseInt(e[0]),
            r = parseInt(e[1]),
            a = parseFloat(e[2]);
    else if (e.length === 2)
        r = parseInt(e[0]),
            a = parseFloat(e[1]);
    else
        return parseFloat(t);
    return n * 3600 + r * 60 + a
}
function XA(t) {
    try {
        let n = new DataView(t)
            , r = 0;
        for (let o = 0; o < t.byteLength - 4; o++)
            if (n.getUint32(o) === 1835295092) {
                r = o + 4;
                break
            }
        let a = new Uint8Array(t.slice(r))
            , i = new TextDecoder("utf-8",{
            fatal: !0
        }).decode(a);
        return {
            arrayBuffer: t.slice(0, r),
            mdatContent: i
        }
    } catch {
        return null
    }
}
function ek(t, e) {
    let n = new TextEncoder().encode(e)
        , r = new Uint8Array(t)
        , a = new Uint8Array(r.byteLength + n.byteLength);
    a.set(r),
        a.set(n, r.byteLength);
    let i = new DataView(a.buffer);
    return i.setUint32(t.byteLength - 8, n.byteLength + 8),
        i.buffer
}
function hc(t) {
    let e = XA(t);
    if (!e)
        return;
    let n = new globalThis.DOMParser().parseFromString(e.mdatContent, "text/xml");
    return {
        arrayBuffer: e.arrayBuffer,
        document: n
    }
}
function bc(t, e) {
    let n = `<?xml version="1.0" encoding="utf-8" ?>${e.documentElement.outerHTML}`;
    return ek(t, n)
}

function DT(t) {
    if (!t)
        return null;
    try {
        let e = t;
        return t.startsWith("//") ? e = globalThis.location.protocol + t : t.startsWith("/") ? e = `${globalThis.location.protocol}//${globalThis.location.host}${t}` : t.startsWith("http") || (e = `${globalThis.location.protocol}//${t}`),
            new URL(e).toString()
    } catch {
        return t
    }
}

function Gg(t, e, n, r, a=!1) {
    let i = [...t.textTracks].find(o=>o.label === e);
    if (!i)
        i = t.addTextTrack("subtitles", e, n);
    else
        for (; i.cues?.length; )
            i.removeCue(i.cues[0]);
    return i.mode = a ? "showing" : "hidden",
        r.forEach(o=>{
                let s = new VTTCue(o.startTime,o.endTime,o.text);
                i.addCue(s)
            }
        ),
        i
}
function AT(t) {
    for (let e = 0; e < t.textTracks.length; e++)
        t.textTracks[e].mode = "disabled"
}
function tk(t) {
    for (let e = 0; e < t.textTracks.length; e++)
        t.textTracks[e].mode = "hidden"
}

var Wg, Kg;
function $g(t, e, n, r) {
    let a = kt.bind(null, r);
    try {
        if (!isMobile().apple.phone && !isMobile().apple.tablet)
            return;
        tk(t),
            t.removeEventListener("webkitbeginfullscreen", Wg),
            t.removeEventListener("webkitendfullscreen", Kg);
        let i = t.webkitPresentationMode === "fullscreen"
            , o = Gg(t, a("bilingual"), e, n, i);
        Wg = ()=>{
            o.mode = "showing"
        }
            ,
            Kg = ()=>{
                o.mode = "hidden"
            }
            ,
            t.addEventListener("webkitbeginfullscreen", Wg),
            t.addEventListener("webkitendfullscreen", Kg)
    } catch {}
}
var Vg = [];
function PT(t) {
    let {videoSelector: e} = t
        , n = $e(t.subtitleItems)
        , [r,a] = se({})
        , [i,o] = se([])
        , s = t.ctx.rule.subtitleRule
        , u = Ve(()=>{
            let p = document.querySelector(t.videoSelector);
            if (!p)
                return;
            let m = n.current.map(g=>({
                startTime: bn(g.start),
                endTime: bn(g.end),
                text: g.text + `
` + (g.translation || "")
            }));
            $g(p, t.lang, m, t.ctx)
        }
        , [n, $g, t])
        , l = Ve(async p=>{
            let m = s.velocityGroup || [1, 3, 5]
                , g = n.current;
            if (!g[p])
                return;
            if (g[p].translation || g[p].state == "loading") {
                let T = g.slice(p).findIndex(D=>!D.translation && D.state != "loading");
                if (T < 0)
                    return;
                let b = m[m.length - 1];
                if (T > b)
                    return;
                let h = p + T
                    , E = g.slice(h, h + b);
                c(E);
                return
            }
            let f = p;
            for (let T = 0; T < m.length; T++) {
                let b = m[T]
                    , h = g.slice(f, f + b);
                c(h),
                    f += b
            }
        }
        , [n, t.ctx, a, u, s]);
    return Ae(()=>{
            let p = document.querySelector(t.videoSelector);
            if (!p)
                return;
            let m = g=>{
                    let T = g.target.currentTime
                        , b = n.current.findIndex(E=>T >= bn(E.start) && T <= bn(E.end))
                        , h = n.current.filter(E=>T >= bn(E.start) && T <= bn(E.end));
                    o(h),
                    b >= 0 && l(b)
                }
            ;
            u(),
                Vg.forEach(g=>g()),
                Vg = [],
                p.addEventListener("timeupdate", m),
                Vg.push(()=>{
                        p.removeEventListener("timeupdate", m)
                    }
                )
        }
        , [e, n, l, u]),
        {
            setActiveCues: o,
            activeCues: i
        };
    async function c(p) {
        p.forEach(g=>{
                g.state = "loading"
            }
        );
        let m = p.map(g=>g.text);
        await nk(t.ctx, m, t.lang, (g,f,T)=>{
                g || !f ? p[T.id].state = "error" : (p[T.id].state = "translated",
                    p[T.id].translation = Bt(f.text),
                    a({}))
            }
        ),
            u()
    }
}
async function nk(t, e, n, r) {
    let a = e.map((o,s)=>({
        text: o.replace(/\n/, " ") || "",
        id: s,
        from: n,
        to: t.targetLanguage,
        url: "https://google.com",
        fromByClient: n,
        force: !0
    }));
    return (await Ze({
        sentences: a
    }, {
        ...t,
        translationService: t.subtitleTranslateService,
        sourceProgram: "videoSubtitle"
    }, r)).sentences.map((o,s)=>o.text)
}

function rk(t) {
    let[e,n] = se(16);
    return Ae(()=>{
            let r = document.querySelector(t);
            if (!r)
                return;
            let a = new ResizeObserver(i=>{
                    for (let o of i) {
                        let {width: s, height: u} = o.contentRect
                            , l = Math.max(Math.max(s / 45, u / 55), 10);
                        n(l)
                    }
                }
            );
            return a.observe(r),
                ()=>{
                    a.disconnect()
                }
        }
        , [t]),
        {
            fontSize: e
        }
}
var Yg = me + "DocumentMessageEventUpdateAttachSubtitleStyles";
function LT(t) {
    let {ctx: e} = t
        , [n,r] = se(e.rule.subtitleRule)
        , {fontSize: a} = rk(t.videoSelector);
    return Ae(()=>{
            let o = s=>{
                    let u = s.detail;
                    r(u)
                }
            ;
            return globalThis.document.addEventListener(Yg, o),
                ()=>{
                    globalThis.document.addEventListener(Yg, o)
                }
        }
        , []),
        {
            backgroundColor: Ue(()=>n.backgroundColor + ak(n.backgroundOpacity), [n]),
            sourceFontSize: a * kT(n.sourceFontSize),
            translationFontSize: a * kT(n.translationFontSize),
            sourceTextColor: n.sourceTextColor,
            translationTextColor: n.translationTextColor,
            translationPosition: n.translationPosition
        }
}
function _T(t) {
    let e = new CustomEvent(Yg,{
        detail: t
    });
    document.dispatchEvent(e)
}
function ak(t="75") {
    let e = parseInt(t) * 2.55;
    return Math.round(e).toString(16).padStart(2, "0")
}
function kT(t="1") {
    return parseFloat(t) / 100
}
function FT(t, e) {
    Ae(()=>{
            if (!e.current || !t.current)
                return;
            let n = t.current?.getBoundingClientRect(), r, a = 0, i = m=>{
                    m.preventDefault && m.preventDefault(),
                        r = e.current.getBoundingClientRect(),
                        a = m.clientY - r.top,
                        document.addEventListener("mousemove", o),
                        document.addEventListener("touchmove", l),
                        document.addEventListener("mouseup", s),
                        document.addEventListener("touchend", c),
                        document.addEventListener("touchcancel", c)
                }
                , o = m=>{
                    if (m.preventDefault && m.preventDefault(),
                    !n || !r)
                        return;
                    let g = m.pageY - n.top - a
                        , f = n.height - r.height
                        , T = Math.min(Math.max(0, g), f);
                    e.current.style.top = `${T * 100 / n.height}%`,
                        e.current.style.bottom = "unset"
                }
                , s = m=>{
                    m.preventDefault && m.preventDefault(),
                        p()
                }
                , u = m=>{
                    m.preventDefault && m.preventDefault(),
                        i(m.changedTouches[0])
                }
                , l = m=>{
                    m.preventDefault && m.preventDefault(),
                        o(m.changedTouches[0])
                }
                , c = m=>{
                    m.preventDefault && m.preventDefault(),
                        s(m.changedTouches[0])
                }
                , p = ()=>{
                    document.removeEventListener("mousemove", o),
                        document.removeEventListener("touchmove", l),
                        document.removeEventListener("mouseup", s),
                        document.removeEventListener("touchend", c),
                        document.removeEventListener("touchcancel", c)
                }
            ;
            return e.current.addEventListener("mousedown", i),
                e.current.addEventListener("touchstart", u),
                ()=>{
                    e.current && (e.current.removeEventListener("mousedown", i),
                        e.current.removeEventListener("touchstart", u))
                }
        }
        , [t, e])
}

function ik(t) {
    let {t: e} = Ce()
        , n = t.ctx.rule.subtitleRule
        , {activeCues: r} = PT(t)
        , a = $e(null)
        , i = $e(null)
        , {sourceFontSize: o, translationFontSize: s, backgroundColor: u, translationTextColor: l, sourceTextColor: c, translationPosition: p} = LT(t);
    FT(a, i),
        i.current;
    let m = r.map(b=>b.text).join(" ")
        , g = r.map(b=>b.translation).join(" ")
        , f = e("attachSubtitleTranslating", {
        service: e(`translationServices.${t.ctx.subtitleTranslateService}`)
    })
        , T = n.translationMode === "translation";
    return w("div", {
        class: "imt-caption-container",
        ref: a,
        children: w("div", {
            class: "imt-caption-window",
            ref: i,
            children: !!r.length && w("div", {
                class: "captions-text",
                style: {
                    flexDirection: p === "top" ? "column-reverse" : "column"
                },
                children: [!T && w("span", {
                    class: "source-cue imt-cue",
                    style: {
                        fontSize: o,
                        color: c,
                        backgroundColor: u
                    },
                    dangerouslySetInnerHTML: {
                        __html: m
                    }
                }), r[0].state === "loading" && !g && w("div", {
                    class: "loading-text imt-cue",
                    style: {
                        fontSize: o * .75,
                        color: l,
                        backgroundColor: u
                    },
                    children: f
                }), w("span", {
                    class: "target-cue imt-cue",
                    style: {
                        fontSize: s,
                        color: l,
                        backgroundColor: u
                    },
                    dangerouslySetInnerHTML: {
                        __html: g || ""
                    }
                })]
            })
        })
    })
}


var ok = `
  .imt-caption-container {
    pointer-events: none;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 2147483647;
  }

  .imt-caption-window {
    pointer-events: auto;
    position: absolute;
    width: 90%;
    left: 5%;
    margin-bottom: 30px;
    bottom: 0;
    cursor: move;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }

  .captions-text {
    display: flex;
    bottom: 20px;
    color: white;
    border-radius: 6px;
    text-align: center;
    white-space: pre-wrap;
    padding: 10px 16px;
    line-height: 1.5;
    align-items: center;
  }

  .imt-cue {
    padding: 0 12px;
  }
`, BT = "immersive-translate-caption-window", MT;

function qr(t, e, n, r) {
    let a = t.rule.subtitleRule;
    if (!t.rule.subtitleRule)
        return;
    let i = document.querySelector(e);
    if (!i || !document.querySelector(n.videoSelector)) {
        r && (clearTimeout(MT),
            MT = setTimeout(()=>{
                    qr(t, e, n, r)
                }
                , 1e3));
        return
    }
    zs(e);
    let o = ok
        , s = a.attachRule?.injectedCSS;
    if (s) {
        let u = typeof s == "string" ? s : s.join(`
`);
        o = o + `
` + u
    }
    fc({
        parent: i,
        id: BT,
        ctx: t,
        Component: ik,
        props: n,
        style: o,
        initialCSS: !1
    }),
        uk(t)
}

var sk = `
#immersive-translate-caption-window {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  transition: bottom 0.25s;
  pointer-events: none;
}
`
    , IT = Q + "-attach-subtitle-dynamic-injected-css";
function uk(t) {
    let n = t.rule.subtitleRule.attachRule?.injectedGlobalCSS;
    if (n) {
        let r = typeof n == "string" ? n : n.join(`
`);
        En(document, sk + `
` + r, IT)
    }
}
function zs(t) {
    [...document.querySelectorAll(`#${BT}`)].forEach(e=>e.remove()),
        document.querySelector(`[data-id="${IT}"]`)?.remove()
}
