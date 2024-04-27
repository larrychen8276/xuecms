"use strict";

function lT(t) {
    debugger;

    let e = null
        , n = null
        , r = t.rule.bodyRule;
    if (!r.enable)
        return {
            bodyIsRoot: !1,
            bodyNode: e,
            articleNode: n
        };
    if (r.bodySelector && (e = document.querySelector(r.bodySelector)),
    r.articleSelector && (n = document.querySelector(r.articleSelector)),
    e || n)
        return B.debug("body rule has confirm"),
            {
                bodyIsRoot: a(),
                bodyNode: e,
                articleNode: n
            };
    if (document.body.scrollHeight >= window.innerHeight * r.maxBodyScreenLength)
        return B.debug("content dom elements too long"),
            {
                bodyIsRoot: !1,
                bodyNode: e,
                articleNode: n
            };
    try {
        debugger;
        /**/
        // let i = window.document.cloneNode(!0)
        //      , s = new bu(i,{
        //     keepClasses: !0
        // }).parse();

        var Readability = require_Readability();
        let i = window.document.cloneNode(!0)
            , s = new Readability(i,{
            keepClasses: !0
        }).parse();


        if (!s)
            throw new Error("article is null");
        e = LA(s.content, s.textContent),
        e && (n = dT(r, e))
    } catch (i) {
        B.debug(i)
    }
    return {
        bodyIsRoot: a(),
        bodyNode: e,
        articleNode: n
    };
    function a() {
        return t.state.translationArea === "body" ? !1 : !!r.bodyIsRoot
    }
}


var Rg;
function ET(t) {
    let e = t.ctx.rule.aiRule;
    if (B.debug("aiRule", e),
    !e || !e.messageWrapperSelector)
        return;
    let n = t.ctx.rule
        , r = on(t.ctx)
        , a = r.excludeSelectors.indexOf(`${e.messageWrapperSelector} *`);
    r.excludeSelectors.splice(a, 1),
        document.querySelectorAll(`${e.messageWrapperSelector} > *`).forEach(i=>{
                Os(t, i, e, r)
            }
        ),
        Rg = new MutationObserver(i=>{
                i.forEach(function(o) {
                    for (let s of i)
                        if (s.target.nodeType != Node.COMMENT_NODE)
                            try {
                                if (n.mutationExcludeSelectors.length > 0 && Cn(s.target, n.mutationExcludeSelectors))
                                    continue;
                                let u = s.target;
                                if (s.type == "characterData" && (u = s.target.parentElement),
                                !u.closest(e.messageWrapperSelector) || zg(s) && s.type != "characterData")
                                    continue;
                                if (u.recordLength) {
                                    u.recordLength !== u.innerHTML.length && Os(t, u, e, r, !0);
                                    continue
                                }
                                if ((s.addedNodes || []).length <= 0 && s.type != "characterData" || u.nodeType !== Node.ELEMENT_NODE)
                                    continue;
                                if (!la(u, {
                                    blockSelectors: r.blockSelectors,
                                    extraInlineSelectors: r.extraInlineSelectors,
                                    extraBlockSelectors: r.extraBlockSelectors,
                                    atomicBlockSelectors: r.atomicBlockSelectors
                                }, window.getComputedStyle(u))) {
                                    let c = Yi(r, u.parentElement);
                                    c && (pt.clearToParentMark(u, c),
                                        Os(t, c, e, r));
                                    continue
                                }
                                Os(t, u, e, r)
                            } catch (u) {
                                B.error(u)
                            }
                }),
                    document.querySelectorAll(`${e.messageWrapperSelector}`).forEach(o=>{
                            pt.isMarked(o, t.id) || Os(t, o, e, r)
                        }
                    )
            }
        ),
        Rg.observe(document.body, {
            childList: !0,
            subtree: !0,
            characterData: !0
        })
}
function Os(t, e, n, r, a=!1) {
    let i = e.closest(n.messageWrapperSelector);
    if (!i)
        return;
    let o = e;
    for (; o != i; )
        clearTimeout(o.timer),
            o = o.parentElement;
    clearTimeout(i.timer);
    let s = e;
    s.timer = setTimeout(()=>{
            a && Og(e),
                Ur({
                    id: t.id,
                    container: e,
                    filterRule: r,
                    force: !0,
                    onParagraph: u=>{
                        Za(t, u, !0)
                    }
                    ,
                    onFrame: ()=>{}
                    ,
                    onIgnoreElement: ()=>{}
                }),
                s.timer = null
        }
        , n.streamingDelayTime || 1e3)
}
function CT() {
    Rg?.disconnect()
}

function zg(t) {
    return [...t.addedNodes, ...t.removedNodes].filter(n=>!(n.immersive || Gt(n, ["." + yt]))).length == 0
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
