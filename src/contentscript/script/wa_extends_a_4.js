
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//TODO:这块可以提取出来

var iL = Number.isNaN || function(t) {
        return typeof t == "number" && t !== t
    }
;


var YA = [];
function xT(t) {
    YA.push(t)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

function Qk(t, e, n) {
    if (!n)
        return;
    let r;
    if (n.type === "url" && (r = t),
    n.type == "selector" && n.selector && (r = e?.querySelector(n.selector)?.textContent),
        !!r) {
        if (n.regexStr) {
            let a = r.match(new RegExp(n.regexStr));
            if (a)
                return a[1] || a[0]
        }
        return r.toLowerCase()
    }
}


async function am() {
    zc?.onPageStatusChange()
}
async function Zk(t, e) {
    if (zc?.autoEnableSubtitleChanged(),
    e && e.trigger === "popup" && He())
        return;
    let n = {
        auto_enable_subtitles: t.rule.subtitleRule.autoEnableSubtitle ? "1" : "0",
        video_platform: t.rule.id || ""
    };
    e && e.trigger && (n.trigger = e.trigger),
        ot("auto_enable_subtitles_changed", [{
            name: "auto_enable_subtitles_changed",
            params: n
        }], t)
}
async function Xk() {
    zc?.onTranslationModeChanged()
}
U3({
    autoEnableSubtitleChanged: Zk,
    reloadSubtitleWithTranslationModeChanged: Xk
});


var pe = null;
function Hs() {
    return pe || null
}

function ho(t) {
    e5(t),
        s5(t),
        a5(t),
        o5(t),
        io(document, t),
        gn("Translated"),
        i5(pe),
        r5(pe),
        xT(ti),
        t5(pe),
        am(),
        f5()
}
function e5(t) {
    if (t.state.translationArea === "main" && t.rule.initialSelectorGlobalAttributes) {
        // TODO:翻译方法 -> pg_content_p_2.js
        let e = on(t);
        mT(document.body, t.rule.initialSelectorGlobalAttributes, t.rule.asideMaxTextCount, t.rule.asideMaxWordCount, t.rule.asideMaxTextCountPerParagraph, t.rule.asideMaxWordCountPerParagraph, e)
    }
    oo(t) && lt(document.documentElement, me + "_rtl", t.targetLanguage)
}
function t5(t) {
    ET(t)
}
function n5() {
    CT()
}
function r5(t) {
    t.ctx.isMutationTranslationExcludeUrl || t.dynamicContainerObserver?.observe(document.body, {
        subtree: !0,
        childList: !0,
        characterData: !0
    });
    let {bodyNode: e, articleNode: n, bodyIsRoot: r} = lT(t.ctx);
    if (B.debug("bodyIsRoot", r, "bodyNode", e, "articleNode", n),
        t.ctx.bodyNode = e,
        t.ctx.articleNode = n,
    e && Ja(e, t),
        r)
        return;
    let a = [];
    t.ctx.rule.mainFrameSelector && (a = [...document.querySelectorAll(t.ctx.rule.mainFrameSelector || "")]),
    a.length <= 0 && (a = [document.body]),
        a.forEach(i=>{
                Ja(i, t)
            }
        )
}
async function a5(t) {
    if (!t.state.isAutoTranslate && t.config.tempTranslateDomainMinutes > 0) {
        let e = await Zt()
            , n = Date.now()
            , a = new URL(t.url).hostname
            , i = e.tempTranslationUrlMatches || []
            , o = i.findIndex(u=>u.match === a && u.expiredAt > n)
            , s = !1;
        o > -1 || (i.push({
            match: a,
            expiredAt: n + t.config.tempTranslateDomainMinutes * 60 * 1e3
        }),
            s = !0),
        s && await Xt({
            ...e,
            tempTranslationUrlMatches: [...i]
        })
    }
}
function i5(t) {
    t.ctx.rule.isTranslateTitle && (kg(t.ctx),
        t.titleDynamicObserver = bT(t.ctx))
}
function o5(t) {
    if (t.rule.normalizeBody && document.querySelector(t.rule.normalizeBody)) {
        let n = document.body.innerHTML;
        document.body.innerHTML = "",
            document.body.innerHTML = n
    }
}
function im(t) {
    if (!pe)
        return;
    let e = on(t);
    pe.rule = {
        excludeSelectors: e.excludeSelectors || [],
        selectors: e.selectors || []
    },
        pe.containerRule = {
            pageHeight: screen.availHeight,
            selectors: e.selectors
        },
        pe.translationService = t.translationService,
        pe.urlChangeDelay = t.rule.urlChangeDelay,
        pe.immediateTranslateCapacity = t.state.immediateTranslationTextCount,
        pe.translateState = t.state.translationMode || t.config.translationMode || "dual"
}
function s5(t) {
    let e = ms();
    pe && (e = pe.id),
        pe = pe || {},
        pe.ctx = t,
        pe.id = e,
        pe.paragraphQueue = pe.paragraphQueue || [],
        im(t),
        pe.currentUrl = window.location.href,
        pe.paragraphEntities = pe.paragraphEntities || {},
        pe.autoIncreaseParagraphId = pe.autoIncreaseParagraphId || 1,
        pe.interruptEffectDOM = !1,
        pe.observeContainers = pe.observeContainers || [],
        pe.observeParagraphs = pe.observeParagraphs || [],
        pe.dynamicContainerObserver = pe.dynamicContainerObserver || g5(pe),
        pe.ignoreResizeObserver = pe.ignoreResizeObserver || m5(pe),
        pe.containerVisibleObserver = pe.containerVisibleObserver || c5(pe),
        pe.paragraphVisibleObserver = pe.paragraphVisibleObserver || d5(pe),
        pe.injectCssToDocument = Nc,
        pe.walkContainer = Ur,
        pe.allInlineWindows = [window],
        window.onerror = l5(pe, t),
        window.immersiveTranslateSwitchTranslateState = sm.bind(pe)
}
function my(t, e) {
    e.getRootNode()instanceof ShadowRoot ? Nc(e.getRootNode(), t) : Nc(e.ownerDocument, t),
        u5(t)
}
function u5(t) {
    pe || (pe = {},
        pe.ctx = t,
        pe.id = ms(),
        om(pe, t))
}
function om(t, e) {
    t.paragraphQueue = [],
        t.injectCssToDocument = Nc;
    let n = on(e);
    return t.rule = {
        excludeSelectors: n.excludeSelectors,
        selectors: n.selectors || []
    },
        t.translationService = e.mouseHoverTranslationService,
        t.currentUrl = window.location.href,
        t.paragraphEntities = {},
        t.autoIncreaseParagraphId = 1,
        t.interruptEffectDOM = !1,
        t.urlChangeDelay = e.rule.urlChangeDelay,
        t.translateState = e.state.translationMode || e.config.translationMode || "dual",
        t.observeContainers = [],
        t.observeParagraphs = [],
        t.allInlineWindows = [window],
        window.switchTranslateState = sm.bind(t),
        t
}
function ti(t=!0) {
    pe && (gn("Original"),
        am(),
        n5(),
        Rs(),
        pe.interruptEffectDOM = !0,
        pe.ignoreResizeObserver?.disconnect(),
        pe.dynamicContainerObserver?.disconnect(),
        pe.containerVisibleObserver?.disconnect(),
        pe.paragraphVisibleObserver?.disconnect(),
        pe.titleDynamicObserver?.disconnect(),
        TT(pe.ctx),
        Q1(),
        J1(),
    t && sm.call(pe, "original"),
        Object.values(pe.paragraphEntities).forEach(e=>{
                e.commonAncestorContainer.paragraphs = null
            }
        ),
        pe = null)
}
function l5(t, e) {
    t.interruptEffectDOM = !1;
    let n;
    return function(r) {
        let a = r.message
            , i = !1;
        return a?.indexOf("Minified React error") >= 0 && (i = !0),
        i && (clearTimeout(n),
            ti(),
            n = setTimeout(()=>{
                    ho(e)
                }
                , t.urlChangeDelay || 2e3)),
            !0
    }
}
function c5(t) {
    return new IntersectionObserver((e,n)=>{
            t.interruptEffectDOM || e.forEach(r=>{
                    r.intersectionRatio > 0 && (Fg(t, r.target),
                        n.unobserve(r.target))
                }
            )
        }
    )
}
function d5(t) {
    return new IntersectionObserver((e,n)=>{
            t.interruptEffectDOM || e.forEach(r=>{
                    if (r.intersectionRatio > 0) {
                        let a = r.target;
                        (a.paragraphs || []).forEach(o=>{
                                Mg(t, o)
                            }
                        ),
                            n.unobserve(a)
                    }
                }
            )
        }
    )
}
var dy;
function p5(t) {
    if (t.urlChangeDelay <= 0)
        return !1;
    let n = (window.location.href || "").split("#")[0];
    return t.currentUrl.split("#")[0] != n ? (clearTimeout(dy),
        t.translateState == "original" ? !1 : (ti(t.urlChangeDelay > 20),
            dy = setTimeout(()=>{
                    let a = t.ctx;
                    ho(a)
                }
                , t.urlChangeDelay),
            !0)) : !1
}
function g5(t) {
    let e = t.ctx.rule
        , n = on(t.ctx);
    return new MutationObserver(r=>{
            // debugger;

            if (!(e.mutationConfig.enableUrlChange && p5(t)) && !t.interruptEffectDOM) {
                for (let a of r)
                    if (a.target.nodeType != Node.COMMENT_NODE)
                        try {
                            if (e.mutationObserverLimitTargetSelectors.length > 0 && !Cn(a.target, e.mutationObserverLimitTargetSelectors) || e.mutationExcludeSelectors.length > 0 && Cn(a.target, e.mutationExcludeSelectors))
                                continue;
                            let i = a.target;
                            if (a.type == "characterData") {
                                let u = i.parentElement
                                    , l = 1;
                                for (; u && !u.recordLength && l <= 5; ) {
                                    if (u.classList?.contains(Qu)) {
                                        u = null;
                                        break
                                    }
                                    u = u?.parentElement,
                                        l++
                                }
                                u?.recordLength && u.recordLength !== u.innerHTML.length && py(t, n, u);
                                continue
                            }
                            if (e.mutationConfig.checkSelfUpdate && zg(a))
                                continue;
                            if (i.recordLength) {
                                i.recordLength !== i.innerHTML.length && py(t, n, i);
                                continue
                            }
                            if ((a.addedNodes || []).length <= 0 || a.target.nodeType !== Node.ELEMENT_NODE || !pt.isSkipMarkEle(a.target) && !pt.isMarked(a.target, t.id) && a.target.nodeName !== "BODY" && !a.target.timer)
                                continue;
                            if (!la(i, {
                                blockSelectors: n.blockSelectors,
                                extraInlineSelectors: n.extraInlineSelectors,
                                extraBlockSelectors: n.extraBlockSelectors,
                                atomicBlockSelectors: n.atomicBlockSelectors
                            }, window.getComputedStyle(i))) {
                                let u = Yi(n, i.parentElement);
                                u && (pt.clearToParentMark(i, u),
                                    gy(t, u));
                                continue
                            }
                            [...a.addedNodes].filter(u=>u.nodeType == Node.COMMENT_NODE || u.immersive || Gt(u, [...t.ctx.rule.mutationExcludeSelectors, "." + yt]) ? !1 : i.contains(u)).length && gy(t, a.target)
                        } catch (i) {
                            B.error(i)
                        }
            }
        }
    )
}
function py(t, e, n) {
    let r = t.ctx.rule;
    for (let o of r.mutationExcludeContainsSelectors)
        if (n.querySelector(o))
            return;
    if (Gt(n, r.mutationExcludeContainsSelectors))
        return;
    let a = r.mutationConfig.consumeTimeout || 100
        , i = n;
    clearTimeout(i.timer),
        i.timer = setTimeout(()=>{
                Og(n),
                    Ur({
                        id: t.id,
                        container: n,
                        filterRule: e,
                        force: !0,
                        onParagraph: o=>{
                            Za(t, o, !0)
                        }
                        ,
                        onFrame: ()=>{}
                        ,
                        onIgnoreElement: ()=>{}
                    }),
                    i.timer = null
            }
            , a)
}
function gy(t, e, n=!0) {
    let a = t.ctx.rule.mutationConfig.buildTimeout || 100
        , i = e;
    pt.clearMark(i),
        clearTimeout(i.timer),
        i.timer = setTimeout(()=>{
                Ja(e, t, n),
                    i.timer = null
            }
            , a)
}
function Og(t) {
    t.paragraphs = [],
        pt.clearMark(t),
        t.querySelectorAll("." + yt).forEach(e=>{
                e.remove()
            }
        ),
        t.querySelectorAll("[data-immersive_translate_walked]").forEach(e=>{
                e.paragraphs = void 0,
                    pt.clearMark(e)
            }
        ),
        t.recordLength ? t.recordLength = t.innerHTML.length : t.recordLength = void 0
}

function zg(t) {
    return [...t.addedNodes, ...t.removedNodes].filter(n=>!(n.immersive || Gt(n, ["." + yt]))).length == 0
}

function m5(t) {
    return new ResizeObserver((e,n)=>{
            if (!t.interruptEffectDOM)
                for (let r of e) {
                    if (r.target.nodeType !== Node.ELEMENT_NODE)
                        return;
                    let a = r.target
                        , i = globalThis.getComputedStyle(a);
                    Dg(i) || (n.unobserve(r.target),
                        pt.clearMark(a),
                        Ja(a, t))
                }
        }
    )
}

function sm(t) {
    this.translateState = t,
        Object.values(this.paragraphEntities).forEach(e=>{
                Is(e, t)
            }
        ),
    t == "original" && document.querySelectorAll(`.${yt}`).forEach(e=>e.remove())
}
function Nc(t, e) {
    if (t instanceof HTMLIFrameElement) {
        io(t.contentDocument, e);
        return
    }
    io(t, e)
}
async function fy(t) {
    let e = He()
        , n = "auto";
    if (ye()) {
        let r = "";
        t.rule.pageType == "ebookReader" || t.rule.pageType == "ebookBuilder" ? (r = vp(t.mainFrame),
            n = await Ie({
                text: r,
                pageLangs: ["en"]
            })) : (r = Ui(t.mainFrame).slice(0, 1e3),
            n = await Ie({
                text: r,
                pageLangs: [ht(), "en"]
            }))
    } else if (e)
        n = await Ie({
            text: Ui(t.mainFrame).slice(0, 1e3),
            pageLangs: [ht(), "en"]
        });
    else if (t.rule.pageType == "ebookReader" || t.rule.pageType == "ebookBuilder") {
        let r = "";
        r = vp(t.mainFrame),
            n = await Ie({
                text: r,
                pageLangs: ["en"]
            })
    } else
        n = await H3();
    return n === "auto" && (n = await hT()),
        O3(n),
        n
}

///////////////////////////////////////////////////////////////////////////////////////////////////

//TODO:这块可以提取出来

async function hy() {
    if (!pe)
        return;
    Rs(),
        document.dispatchEvent(new CustomEvent(_t,{
            detail: JSON.stringify({
                type: "retryFailedParagraphsStart",
                payload: {}
            })
        }));
    let t = pe.paragraphEntities
        , e = Object.keys(t);
    for (let n of e) {
        let r = t[n];
        if (r.error) {
            pe.paragraphQueue.push(n);
            let i = r.commonAncestorContainer.querySelector(`[${$u}='${n}']`);
            i && i.remove()
        }
    }
    pc.call(pe, pe.ctx)
}

async function um(t, e) {
    let n = {};
    t && t.detail?.trigger && (n.trigger = t.detail.trigger),
        ot("share_to_draft", [{
            name: "share_to_draft",
            params: n
        }], {
            ...e,
            sourceLanguage: vt()
        });
    let r = pe?.ctx || e
        , a = await Zt()
        , i = document.head.cloneNode(!0)
        , s = document.body.cloneNode(!0)
        , u = r.rule.shareConfig;
    [...u?.removeSelectors || []].forEach(g=>{
            [...i?.querySelectorAll(g), ...s?.querySelectorAll(g)].forEach(f=>{
                    f.nodeName.toLowerCase() == "script" && f.type == "application/ld+json" || f.remove()
                }
            )
        }
    );
    let c = u.injectCss ? n2() : ""
        , p = "";
    globalThis.document.documentElement.getAttributeNames().forEach(g=>{
            p += `${g}="${globalThis.document.documentElement.getAttribute(g)}" `
        }
    );
    let m = "";
    globalThis.document.body.getAttributeNames().forEach(g=>{
            m += `${g}="${globalThis.document.body.getAttribute(g)}" `
        }
    );
    try {
        a.draft = {
            url: globalThis.location.href,
            title: document.title,
            source_lang: r.sourceLanguage,
            target_lang: r.targetLanguage,
            content: `<html ${p}>
        <head>${i.innerHTML}<style id="imt-inject-preview">${c}</style></head>
        <body ${m}>${s.innerHTML}</body></html>`.replaceAll('data-immersive-translate-translation-element-mark="1"', "dim_m='1'").replace(/data-immersive-translate-walked=\".+?\"/g, "dim_w='1'").replace(/data-on-parse-paragraph=\".+?\"/g, "").replace(/data-consume-paragraph=\".+?\"/g, "").replace(/data-consume-container=\".+?\"/g, "").replace(/immersive-translate-target-([a-z\-]+)/g, (b,h)=>"imt_" + h.replaceAll("translation", "t"))
        },
            await Xt(a);
        // let f = Me().SHARE_DRAFT_URL
        let f = x.SHARE_DRAFT_URL
            , T = r.rule;
        if (T.shareConfig?.sharePath) {
            let b = new URL(f);
            b.pathname = T.shareConfig.sharePath,
                f = b.toString()
        }
        Ri(f)
    } catch (g) {
        B.error(g)
    }
}

async function by() {
    let t = await Zt();
    t.draft && globalThis.document.dispatchEvent(new CustomEvent(Q4,{
        detail: JSON.stringify(t.draft)
    }))
}
async function f5() {
    try {
        if (await bl("reportActive"))
            return;
        B.debug("\u672A\u6FC0\u6D3B\u8FC7");
        let e = await Pp();
        await ce({
            url: ns + "/v1/user/campaign-info-translated/" + e,
            method: "POST",
            headers: {
                "content-type": "application/json"
            }
        }),
            ps("reportActive", "1")
    } catch (t) {
        B.error(t)
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
