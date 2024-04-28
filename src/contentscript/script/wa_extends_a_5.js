"use strict";

function Me() {
    // return typeof process > "u" && typeof Deno < "u" ? Deno.env.toObject() : x
    return x;
}

var we = Me();

var iL = Number.isNaN || function(t) {
        return typeof t == "number" && t !== t
    }
;

var PF = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

var FA = 1e5;
function Ur(t) {
    let {onParagraph: e, filterRule: n, bodyRule: r, id: a, articleNode: i, container: o} = t
        , s = xg(i, o);
    n = MA(n);
    let {stayOriginalSelectors: u, globalStyles: l, selectors: c, isTransformPreTagNewLine: p, lineBreakMaxTextCount: m, globalAttributes: g, isModifyImage: f, skipEditableCheck: T} = n
        , b = {
        commonAncestorContainer: t.container,
        rootNodes: [],
        flatNodes: [],
        _currentStacks: [],
        isPreWhitespace: !1
    }
        , h = !1
        , E = null;
    function D(A) {
        let {container: y, onFrame: R, onIgnoreElement: _, id: P} = A
            , N = document.createTreeWalker(y, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, F=>{
                let C = q(F);
                return C == NodeFilter.FILTER_ACCEPT ? pt.mark(F, P, T) : C == NodeFilter.FILTER_REJECT,
                    C
            }
        )
            , z = y;
        if (q(z) === NodeFilter.FILTER_REJECT)
            return;
        for (pt.mark(z, P, T); z; ) {
            if (s = xg(i, z),
            c && c.length > 0) {
                let {currentNode: F, isMatchedSelection: C} = M(N, z, c);
                if (F)
                    z = F;
                else
                    break;
                if (!C)
                    continue
            }
            if (z.nodeType === Node.ELEMENT_NODE || z.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                let F = z;
                if (F.nodeName === "IFRAME") {
                    R && R(F),
                        I(),
                        Eg(b, !0),
                        z = N.nextNode();
                    continue
                }
                F.nodeType === Node.ELEMENT_NODE && (l && wg(F, l),
                g && Ag(F, g));
                let C = la(F, {
                    blockSelectors: n.blockSelectors,
                    extraInlineSelectors: n.extraInlineSelectors,
                    extraBlockSelectors: n.extraBlockSelectors,
                    atomicBlockSelectors: n.atomicBlockSelectors
                }, F.immersiveTranslateComputedStyle || null);
                if (C && n.paragraphFirstLetterFontSize > 0 && F.childNodes.length == 1 && F.childNodes[0].nodeType === Node.TEXT_NODE && F.innerText?.length == 1 && F?.immersiveTranslateComputedStyle?.fontSize >= n.paragraphFirstLetterFontSize + "px" && (C = !1),
                Gt(F, u) && !C) {
                    S(F);
                    let H = null;
                    for (; !(H = N.nextSibling()) && N.parentNode(); )
                        ;
                    z = H;
                    continue
                }
                let L = Va(F);
                if (!pT(b, F) || C) {
                    I(F);
                    let H = C ? F : F.parentElement;
                    H && H.childNodes.length > 0 && v(b, H, H.immersiveTranslateComputedStyle || null)
                }
                L && F.shadowRoot?.mode === "open" && (C ? R?.(F.shadowRoot) : D({
                    ...A,
                    container: F.shadowRoot
                })),
                F.nodeType === Node.ELEMENT_NODE && F.nodeName === "PRE" && p && OA(F)
            } else if (z.nodeType === Node.TEXT_NODE)
                S(z);
            else
                throw new Error("should not be here");
            z = N.nextNode(),
            b.commonAncestorContainer && z && z.parentNode === b.commonAncestorContainer && (b._currentStacks = []),
            b.commonAncestorContainer && z && z.nodeType === Node.ELEMENT_NODE && b._currentStacks.push(z)
        }
        function q(F) {
            if (F.nodeType === Node.DOCUMENT_FRAGMENT_NODE)
                return NodeFilter.FILTER_ACCEPT;
            if (Nr(F)) {
                if (g) {
                    let H = Object.keys(g);
                    if (H.length > 0 && Gt(F, H))
                        for (let W of H) {
                            let $ = g[W];
                            if (F.matches(W)) {
                                let ue = g[W]
                                    , ae = Object.keys(ue);
                                for (let J of ae) {
                                    let ie = ue[J];
                                    F.getAttribute(J) !== ie && (ie === null ? F.removeAttribute(J) : F.setAttribute(J, ie))
                                }
                                break
                            }
                        }
                }
                if (!A.force && pt.isMarked(F, P) || X1(F, P) || lc(F, {
                    excludeSelectors: n.excludeSelectors,
                    selectors: n.selectors,
                    stayOriginalSelectors: u
                }) || F.nodeName === "IFRAME" && !ji(F))
                    return NodeFilter.FILTER_REJECT;
                if (F.nodeType === Node.ELEMENT_NODE) {
                    let H = window.getComputedStyle(F);
                    if (F.immersiveTranslateComputedStyle = H,
                        Dg(H))
                        return _ && _(F),
                            NodeFilter.FILTER_REJECT;
                    let j = la(F, {
                        blockSelectors: n.blockSelectors,
                        extraInlineSelectors: n.extraInlineSelectors,
                        extraBlockSelectors: n.extraBlockSelectors,
                        atomicBlockSelectors: n.atomicBlockSelectors
                    }, H || null);
                    if (Gt(F, u) && j)
                        return NodeFilter.FILTER_REJECT
                }
                let C = F.getBoundingClientRect()
                    , {width: L, height: U} = C;
                return F.nodeName === "IMG" && (L > 48 && U > 48 ? F.immersiveTranslateComputedStyle = {
                    display: "block"
                } : L > 0 && U > 0 && f !== !1 && (F.setAttribute("width", L),
                    F.setAttribute("height", U))),
                    !F.childNodes || F.childNodes && F.childNodes.length === 0 ? NodeFilter.FILTER_ACCEPT : !b.isPreWhitespace && (L > 0 && L < 4 || U > 0 && U < 4) && (F.textContent?.trim().length || 0) < 2 ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
            } else if (F.nodeType === Node.TEXT_NODE) {
                let C = F.textContent?.trim();
                if (!C)
                    return b.isPreWhitespace ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                let L = F.parentNode;
                if (L.getBoundingClientRect) {
                    let {width: U, height: H} = L.getBoundingClientRect();
                    if (U > 0 && U < 4 || H > 0 && H < 4)
                        return NodeFilter.FILTER_REJECT
                }
                return m > 0 && C.length >= m && Cg(F, m),
                    NodeFilter.FILTER_ACCEPT
            }
            return NodeFilter.FILTER_REJECT
        }
    }
    D(t),
    b && b.commonAncestorContainer && b.flatNodes.length > 0 && I();
    function M(A, y, R) {
        let _ = y.immersiveTranslateComputedStyle || null;
        if (E) {
            if (!E.contains(y))
                if (h = !1,
                y && y.nodeType === Node.ELEMENT_NODE)
                    if (uc(y, R))
                        h = !0,
                            E = y,
                            I(),
                            v(b, E, _);
                    else
                        return h = !1,
                            y = A.nextNode(),
                            {
                                currentNode: y,
                                isMatchedSelection: h
                            };
                else
                    return h = !1,
                        y = A.nextNode(),
                        {
                            currentNode: y,
                            isMatchedSelection: h
                        }
        } else if (y && y.nodeType === Node.ELEMENT_NODE)
            if (uc(y, R))
                h = !0,
                    E = y,
                    I(),
                    v(b, E, _);
            else
                return h = !1,
                    y = A.nextNode(),
                    {
                        currentNode: y,
                        isMatchedSelection: h
                    };
        else
            return h = !1,
                y = A.nextNode(),
                {
                    currentNode: y,
                    isMatchedSelection: h
                };
        return {
            currentNode: y,
            isMatchedSelection: !0
        }
    }
    function I(A) {
        if (A && A.nodeName === "BR") {
            b.commonAncestorContainer = A.parentNode;
            let R = [...b.flatNodes]
                , _ = b.flatNodes.filter(P=>A.parentNode?.contains(P));
            _.length > 0 && R.length != _.length && (b.flatNodes = _,
                b.flatNodes.original = R)
        }
        let y = RA(b, a, n);
        y && (y.xpath = e2(r, s, y.commonAncestorContainer, i),
        e && e(y)),
            Eg(b)
    }
    function S(A) {
        if (!pT(b, A)) {
            I(),
                Eg(b);
            let y = A.parentNode;
            y && v(b, y, y.computedStyle)
        }
        b.flatNodes.push(A)
    }
    function v(A, y, R) {
        A.commonAncestorContainer = y;
        let _ = k(R);
        A.isPreWhitespace = _
    }
    function k(A) {
        return A && A.whiteSpace && A.whiteSpace.startsWith("pre") || A && A.whiteSpace === "break-spaces" || !1
    }
}

function RA(t, e, n) {
    let {flatNodes: r, commonAncestorContainer: a} = t;
    if (a && r.length > 0) {
        if (!r.map(g=>g.textContent?.trim() || "").join(""))
            return null;
        if (r.length === 1)
            return {
                ctxId: e,
                stepState: 1,
                commonAncestorContainer: r[0].parentNode,
                rootNodes: [r[0]],
                flatNodes: r,
                isPreWhitespace: t.isPreWhitespace,
                variables: {},
                xpath: ""
            };
        let o = zA(r, a, n);
        o || (o = a);
        let s = [];
        for (let g of r) {
            let f = BA(t, o, g);
            f && (s.includes(f) || s.push(f))
        }
        if (s.length < 1)
            return null;
        let u = s[0]
            , l = s[s.length - 1]
            , c = []
            , p = u
            , m = 0;
        for (; p && (c.push(p),
        p !== l); ) {
            if (m++,
            m > FA) {
                B.warn("loop too many times for convert root nodes, break");
                break
            }
            p = p.nextSibling
        }
        return {
            ctxId: e,
            rootNodes: c,
            stepState: 1,
            flatNodes: r,
            commonAncestorContainer: o,
            variables: {},
            isPreWhitespace: t.isPreWhitespace,
            xpath: ""
        }
    } else
        return null
}


var YA = [];
function xT(t) {
    YA.push(t)
}



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

var Ta = (t,e,n,r)=>{
        let a = db[t] || t
            , i = pb[t]
            , o = gb[t]
            , s = {
            "zh-CN": i,
            "zh-TW": o,
            en: a
        };
        if (n)
            return s[t] ? s[t] : a;
        if (s[e]) {
            let u = s[e];
            return r || t === "auto" || t === "placeholder" ? u : `${u} (${a})`
        } else
            return a
    }
;

function Dy({currentLang: t, ctx: e, onSetPageLanguage: n, setSettings: r}) {
    let {t: a} = Ce();
    if (!e)
        return null;
    let i = sc(e.config.translationService, e.config.targetLanguage)
        , o = kn;
    i.length <= 30 && (o = i.indexOf("auto") >= 0 ? i : ["auto", ...i]);
    let s = i.filter(u=>u !== "auto");
    return w("div", {
        class: "flex mt-4 items-center",
        children: [w(S5, {
            supportedLanguages: o,
            interfaceLanguage: e.config.interfaceLanguage,
            currentLang: t,
            value: e.sourceLanguage,
            onSelected: n
        }), w("img", {
            src: KT,
            style: {
                maxWidth: "unset"
            },
            class: "mx-2"
        }), w(x5, {
            supportedLanguages: s,
            interfaceLanguage: e.config.interfaceLanguage,
            value: e.config.targetLanguage,
            label: a("popupTarget"),
            onSelected: u=>{
                r(l=>({
                    ...l,
                    targetLanguage: u
                }))
            }
        })]
    })
}
function S5(t) {
    let {t: e} = Ce()
        , {value: n, currentLang: r} = t
        , a = e("popupSourceLanguage");
    return n === "auto" && r && r !== "auto" && (a = e("languages.auto")),
        w("div", {
            class: "language-select-container",
            children: [w("label", {
                children: a
            }), w("select", {
                autoComplete: "off",
                class: "language-select",
                onChange: i=>{
                    let o = i.target.value;
                    o && t.onSelected(o)
                }
                ,
                children: t.supportedLanguages.map((i,o)=>{
                        let s = Ta(i, t.interfaceLanguage)
                            , u = "";
                        return i === "auto" && n === "auto" && (r && r === "auto" ? u = e("languages.auto") : u = Ta(r, t.interfaceLanguage) + ` (${e("languages.auto")})`),
                            w("option", {
                                value: i,
                                selected: i === t.value,
                                children: u || s
                            }, "selectlink" + o)
                    }
                )
            })]
        })
}
function x5(t) {
    return w("div", {
        class: "language-select-container",
        children: [w("label", {
            children: t.label
        }), w("select", {
            autoComplete: "off",
            class: "language-select",
            onChange: e=>{
                let n = e.target.value;
                n && t.onSelected(n)
            }
            ,
            children: t.supportedLanguages.map((e,n)=>{
                    let r = Ta(e, t.interfaceLanguage);
                    return w("option", {
                        value: e,
                        selected: e === t.value,
                        children: r
                    }, "selectlink" + n)
                }
            )
        })]
    })
}

function fm(t, e, n, r=window) {
    if (n = n || Ry(t.rule, r),
        !n) {
        B.debug("can not find selection part!");
        return
    }
    if (M5(n, e))
        return;
    if (hm(n)) {
        B.debug("exclude  dom");
        return
    }
    my(t, n);
    let i = Hs();
    i && (i.setupMouseHoverListener = vo);
    let o = on(t);
    o.excludeSelectors = [],
        o.selectors = [];
    let s = !1
        , u = om({
        ...i
    }, t);
    Ur({
        id: i.id,
        container: n,
        filterRule: o,
        force: !0,
        onParagraph: l=>{
            Za(u, l, !0, "hover").then(c=>{
                    if (c && !s) {
                        s = !0;
                        let p = Date.now();
                        et(Z4, p),
                            ot("mouse_hover_translate", [{
                                name: "mouse_hover_translate"
                            }], {
                                ...t,
                                sourceLanguage: "mouseHover"
                            })
                    }
                }
            )
        }
        ,
        onFrame: ()=>{}
        ,
        onIgnoreElement: ()=>{}
    })
}

function Oy(t, e) {
    jc = e.clientX,
        Hc = e.clientY,
        fm(t, !0)
}


var ele = Gi([]);
function Bv(t) {
    let[e,n] = se(null);
    return Ae(()=>{
            Pn().then(r=>{
                    n(r),
                        B.debug("current config", r)
                }
            )
        }
        , []),
        Ae(()=>{
                Pn().then(r=>{
                        n(r)
                    }
                )
            }
            , [t]),
        e
}
function Iv(t) {
    let[e,n] = se(null);
    return Ae(()=>{
            t && hn({
                url: "http://localhost",
                config: t,
                state: {
                    cache: !1
                }
            }).then(r=>n(r))
        }
        , [t]),
        e
}
function Rv() {
    let[t,e] = se(null);
    return Ae(()=>{
            Zt().then(r=>{
                    e(r)
                }
            )
        }
        , []),
        [t, r=>{
            e(r),
                Xt(r)
        }
        ]
}

async function _8(t, e, n) {
    try {
        if (e === null)
            return "noupdate";
        let r = await Zt();
        if (e.updatedAt) {
            let s = new Date().getTime()
                , u = new Date(e.updatedAt).getTime();
            if (s - u < 1e3)
                return await Wm(t, e),
                    await Xt(r),
                    "upload"
        }
        let a = await zv(t);
        r.accountLastSyncedAt = Date.now(),
            B.debug("settings", e),
            B.debug("local settings.updatedAt", e.updatedAt),
            B.debug("remote settings.updatedAt", a.updatedAt),
            B.debug("last synced at", r.accountLastSyncedAt);
        let i = !1;
        if (e.updatedAt && (!a || !a.updatedAt) && (i = !0),
        !i && e.updatedAt > a.updatedAt && (i = !0),
            B.debug("isUpload", i),
            i)
            return await Wm(t, e),
                await Xt(r),
                "upload";
        let o = !1;
        return a.updatedAt && (!e || !e.updatedAt) && (o = !0),
        !o && e.updatedAt < a.updatedAt && (o = !0),
            o ? (await n(a),
                await Xt(r),
                "override") : (await Xt(r),
                "noupdate")
    } catch (r) {
        throw up(r),
            r
    }
}


function Xc(t, e) {
    let n = M8()
        , [r,a] = Rv();
    Ae(()=>{
            !n || !n.token || r && r.proAutoSync === !1 || F8(n) && _8(n.token, t, e).then(i=>{
                    B.debug("syncUserSetting result", i)
                }
            )
        }
        , [t, n])
}

function $v(t, e) {
    let n = $e(0)
        , [r,a] = se(!0)
        , [i,o] = se(!1)
        , s = jr()
        , [u,l] = s
        , {t: c} = Ce()
        , p = Ve(()=>{
            t?.config.floatBallTooltipRule && (isMobile().any ? o(n.current >= (t.config.floatBallTooltipRule.h5MainBtnTooltipMaxShowCount || 2)) : a(n.current >= (t.config.floatBallTooltipRule.mainBtnTooltipImmediateShowCount || 5)))
        }
        , [a, n, t, o]);
    Ae(()=>{
            t && (n.current = t.config.pcFloatBallMainBtnTooltipShownCount || 0,
            isMobile().any && (n.current = t.config.h5FloatBallMainBtnTooltipShownCount || 0),
                p())
        }
        , [t]);
    let m = Ve(()=>{
            t && (n.current = n.current + 1,
                p(),
                l(T=>{
                        let b = {
                            ...T
                        };
                        return isMobile().any ? b.h5FloatBallMainBtnTooltipShownCount = n.current : b.pcFloatBallMainBtnTooltipShownCount = n.current,
                            b
                    }
                ))
        }
        , [l, p, n, t])
        , g = Ue(()=>isMobile().any || !r ? 0 : t?.config.floatBallTooltipRule?.mainBtnTooltipDelayTime || 2e3, [r, t])
        , f = Ue(()=>isMobile().any ? c("floatBall.longPress") : e !== "Original" ? c("floatBall.showOriginal") : t?.targetLanguage ? c("floatBall.translateToLanguage", {
        language: Ta(t.targetLanguage, t.targetLanguage, !0)
    }) : c("floatBall.translate"), [e, t]);
    return {
        disableTooltipDelay: i,
        tooltipDelay: g,
        tooltipText: f,
        handleShowTooltip: m
    }
}

var Jv = U8;
var $s = `${Q}-float-ball`;
function $m(t) {
    let {t: e} = Ce()
        , n = jr()
        , [r,a,i,o] = n;
    Xc(r, a);
    let s = Bv(r)
        , u = Iv(s)
        , {isFullScreen: l} = Kv()
        , [c,p] = se(!1)
        , [m,g] = se(!0)
        , {pageStatus: f} = jv()
        , T = Lp(u, r)
        , b = Ve(()=>{
            if (T?.clickType === "popup")
                return p(!0);
            if (T?.clickType === "translate") {
                let L = Ee();
                if (Ga(u?.rule)) {
                    let U = ra(u.rule);
                    Oi(!0, U || L);
                    return
                }
                _n({
                    method: "toggleTranslatePage",
                    data: {
                        trigger: "float_ball"
                    }
                })
            }
        }
        , [T, _n, p])
        , h = Ve(()=>{
            p(!0)
        }
        , [p])
        , E = m && !!s
        , {containerRef: D, active: M, ballRef: I, floatBallConfigRef: S, setActive: v} = Hv({
        handleBallClick: b,
        handleMobileBallLongPress: h,
        isShow: E,
        localConfig: t.localConfig,
        popupVisible: c
    })
        , k = T?.fixedPosition || "right"
        , A = k === "right" ? "left" : "right"
        , {isShowGuide: y, handleCloseGuide: R} = Gv(t.ctx)
        , {closeTransform: _, logoContainerTransform: P, settingTransform: N} = Wv(T, M || y)
        , {tooltipDelay: z, disableTooltipDelay: q, tooltipText: F, handleShowTooltip: C} = $v(u, f);
    return E ? w("div", {
        class: `${$s}-container ${k} notranslate`,
        style: {
            zIndex: l ? -1 : 2147483647,
            pointerEvents: M || y || c ? "all" : "none"
        },
        ref: D,
        children: [w(q8, {
            ctx: u,
            setVisible: g,
            closeTransform: _,
            setActive: v,
            getModalStyle: ()=>Zv(S.current.top, 300, k)
        }), w(xa, {
            enableMobile: !0,
            text: F,
            position: A,
            delay: z,
            onShow: C,
            disable: q,
            children: w("div", {
                class: `${$s}-btn  ${k} btn-animate `,
                ref: I,
                style: {
                    transform: P,
                    opacity: M || y ? 1 : .5
                },
                children: w("div", {
                    children: [w(ya, {
                        type: "logo"
                    }), f !== "Original" ? w(ya, {
                        type: "translated"
                    }) : null]
                })
            })
        }), w("div", {
            style: {
                marginTop: "12px",
                transform: N
            },
            class: `${$s}-more-buttons btn-animate`,
            children: [w(xa, {
                text: e("translateFileTooltip"),
                multiple: !0,
                width: 200,
                position: A,
                containerClass: "btn-animate",
                children: w("div", {
                    class: `${$s}-more-button`,
                    onClick: ()=>{
                        Fl(Db, !0)
                    }
                    ,
                    children: w(ya, {
                        type: "file"
                    })
                })
            }), w(xa, {
                text: e("floatBall.setting"),
                position: A,
                containerClass: "btn-animate",
                children: w("div", {
                    class: `${$s}-more-button`,
                    onClick: ()=>{
                        v(!0),
                            p(!0)
                    }
                    ,
                    children: w(ya, {
                        type: "setting"
                    })
                })
            })]
        }), w(j8, {
            onClose: ()=>{
                v(!1),
                    p(!1)
            }
            ,
            visible: c,
            getModalStyle: ()=>Zv(S.current.top, 500, k)
        }), w(Qv, {
            visible: y,
            top: S.current.top,
            fixedPosition: k,
            onClose: ()=>{
                R(),
                    v(!1)
            }
        })]
    }) : null
}
function q8(t) {
    let {t: e} = Ce()
        , [n,r] = se(!1)
        , a = jr()
        , [i,o,s,u] = a
        , l = Lp(t.ctx, i)
        , c = Ve(m=>{
            t.ctx && o(g=>t2({
                ...g
            }, m))
        }
        , [t.ctx, o])
        , p = Ve(m=>{
            l && (t.setVisible(!1),
                m === "AlwaysClose" ? c({
                    ...l,
                    enable: !1
                }) : m === "CurrentWebsite" && c({
                    ...l,
                    blockUrls: [...l.blockUrls, globalThis.location.hostname]
                }))
        }
        , [c, l, t.setVisible]);
    return w(jt, {
        children: [w("div", {
            title: e("floatBall.close"),
            class: "btn-animate",
            style: {
                transform: t.closeTransform,
                padding: 4
            },
            onClick: ()=>{
                t.setActive(!0),
                    r(!0)
            }
            ,
            children: w(ya, {
                type: "close"
            })
        }), w(Vv, {
            visible: n,
            onClose: ()=>{
                t.setActive(!1),
                    r(!1)
            }
            ,
            getModalStyle: t.getModalStyle,
            onCloseConfirm: p
        })]
    })
}


function J8(t, e) {
    //debugger;

    let n = t.document;
    if (t9)
        return;
    t9 = !0,
    ye() || q3(),
        n.addEventListener("securitypolicyviolation", u7),
        document.addEventListener(me + "DocumentMessageUser", l9),
        document.addEventListener(me + "DocumentMessageUpdateUser", c9),
        document.addEventListener(me + "ChangeSuccessService", d9.bind(null, e)),
        document.addEventListener(me + "ChangeService", p9.bind(null, e)),
        document.addEventListener(qa, i7.bind(null, e)),
        n.addEventListener(me + "EbookLoaded", s7),
        n.addEventListener($4, o7.bind(null, e)),
        n.addEventListener(V4, l7.bind(null, e)),
        n.addEventListener(Ku, a=>{
                He() || um(a, e)
            }
        ),
        n.addEventListener(Y4, by),
        n.addEventListener("click", a=>{
                e7(a, e)
            }
        ),
    He() && t.addEventListener("message", X8, !1),
    ye() && (He() || n.addEventListener(Mr, Z8)),
    He() || oa.rootIframe(Zu).handleAsk("throttleRequest", K2)
}
function Vs(t, e) {
    c7(),
        J8(e, t),
    ye() && (He() || (lm(t.config),
        d7(t.config))),
    al() && Uy(t),
    tt() && lm(t.config)
}

function Z8(t) {
    e9()
}


function e7(t, e) {
    let n = t.target;
    if (!n || !n.getAttribute) {
        wa(n);
        return
    }
    let r = n.getAttribute("data-immersive-translate-event");
    r && ot(r, [{
        name: r
    }], {
        ...e,
        sourceLanguage: "none"
    });
    let a = n.getAttribute(`data-${Q}-action`);
    if (a) {
        if (t.preventDefault(),
        a === "retry") {
            typeof t.stopPropagation == "function" && t.stopPropagation(),
                Qm({
                    method: "retryFailedParagraphs"
                }),
                wa(n, !0);
            return
        } else if (a == "toast-error") {
            let i = n.getAttribute(`data-${Q}-tooltip-text`) || ""
                , o = ""
                , s = "retry";
            try {
                let u = JSON.parse(i);
                o = u.title,
                    i = u.errMsg,
                    s = u.action
            } catch {}
            s9(u9.bind(null, e, o, i, s));
            return
        }
    }
}


function u9(t, e, n, r="retry", a, i, o, s) {
    let u = kt.bind(null, t)
        , l = e || u("errorModalTitle")
        , c = u("unknownError");
    i.innerText = l,
        o.innerHTML = DOMPurify.sanitize(n || c, {
            ADD_ATTR: ["target"]
        }),
        s.innerText = "";
    let p = ""
        , m = document.createElement("button");
    if (r == "retry") {
        p = u("retryAllButton"),
            m.setAttribute(`data-${Q}-action`, "retry");
        let g = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        g.setAttribute("viewBox", "0 0 16 16"),
            g.setAttribute("width", "20"),
            g.setAttribute("height", "20"),
            g.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7216 7.60092C15.9278 7.88015 15.7216 8.26938 15.2147 8.26938H13.6769C13.4509 8.26919 13.2651 8.44472 13.2559 8.66707C13.0202 11.4434 10.6721 13.5835 7.8434 13.6001C7.45033 13.6011 7.05839 13.5585 6.67498 13.4732C8.97932 12.9575 10.6873 11.0433 10.9105 8.7263C10.9201 8.60835 10.8791 8.49183 10.7975 8.40501C10.7159 8.31818 10.6011 8.269 10.4809 8.26938H9.46715C9.30707 8.26745 9.16079 8.17968 9.08563 8.04045C9.01048 7.90122 9.01841 7.7327 9.10632 7.60092L12.0617 3.4294C12.1415 3.31245 12.2752 3.2423 12.4183 3.2423C12.5613 3.2423 12.695 3.31245 12.7748 3.4294L15.7216 7.60092ZM0.249983 5.95687C0.32362 5.8189 0.468322 5.73198 0.62658 5.73066H2.34484C2.58058 5.74047 2.78188 5.56466 2.80018 5.33297C3.02618 2.57214 5.34909 0.434648 8.16115 0.399919C8.55422 0.398937 8.94616 0.441512 9.32956 0.526841C7.02244 1.04356 5.31373 2.96199 5.09406 5.2822C5.08428 5.39939 5.12548 5.51515 5.2074 5.60068C5.28932 5.68621 5.40427 5.73346 5.52362 5.73066H6.55458C6.71404 5.72904 6.86074 5.8163 6.9335 5.95606C7.00627 6.09581 6.99262 6.26407 6.89823 6.39066L3.93423 10.5791C3.85344 10.689 3.72404 10.7541 3.58628 10.7541C3.44852 10.7541 3.31912 10.689 3.23833 10.5791L0.274337 6.39066C0.185703 6.26152 0.176346 6.09485 0.249983 5.95687Z" fill="white"/>',
            m.appendChild(g),
            m.onclick = ()=>{
                a.style.display = "none",
                    Qm({
                        method: "retryFailedParagraphs"
                    }),
                    wa(m, !0)
            }
    } else if (r == "login")
        p = u("goLogin"),
            m.onclick = ()=>{
                wa(m, !0),
                    window.open(Tb)
            }
        ;
    else if (r == "upgrade")
        p = u("upgradeToPro"),
            m.onclick = ()=>{
                wa(m, !0),
                    window.open(el)
            }
        ;
    else if (r == "setting")
        p = u("goSettings"),
            m.onclick = ()=>{
                wa(m, !0),
                    window.open(we.OPTIONS_URL)
            }
        ;
    else if (r == "changeService")
        p = u("detectServiceLoading"),
            m.onclick = ()=>{
                wa(m, !0),
                    window.open(we.OPTIONS_URL)
            }
            ,
            Zm(t, t.config.translationService, !1).then(g=>{
                    g ? (p = u("toggleToService", {
                            service: u("translationServices." + g)
                        }),
                            m.innerHTML = DOMPurify.sanitize(p),
                            m.onclick = ()=>{
                                g9(g),
                                    wa(m, !0)
                            }
                    ) : (p = u("goSettings"),
                        m.innerHTML = DOMPurify.sanitize(p))
                }
            );
    else if (r == "none")
        return;
    m.className = "immersive-translate-btn",
        m.innerHTML += DOMPurify.sanitize(p),
        s.appendChild(m)
}


function i7(t, e) {
    let n = e;
    if (n && n.detail)
        try {
            let r = n.detail;
            if (!r || !r.type)
                return;
            let {title: a, errMsg: i, action: o} = r;
            s9(u9.bind(null, t, a, i, o))
        } catch (r) {
            B.warn("parse message error", r)
        }
}
async function o7(t, e) {
    let n = e;
    if (B.debug("receive third party message", n),
    n && n.detail) {
        let r = null;
        try {
            let a = JSON.parse(n.detail);
            if (a && a.type) {
                if (a.type === "retryFailedParagraphs")
                    Qm({
                        method: "retryFailedParagraphs"
                    });
                else if (a.type === "updateCommands")
                    _l(a.data);
                else if (a.type === "toggleEnableDefaultAlwaysTranslatedUrls")
                    t7();
                else if (a.type === "toggleEnableInputTranslation")
                    n7();
                else if (a.type === "translatePage")
                    p7(a.data);
                else if (a.type === "getAsyncTranslationServiceList")
                    r = gs(t, "translationService");
                else if (a.type === "getAsyncTargetLanguageList")
                    r = sc(a.data?.translationService, a.data?.targetLanguage);
                else if (a.type === "getAsyncTranslationMeta") {
                    let i = t.state.translationService || t.config.translationService;
                    r = {
                        targetLanguage: t.state.targetLanguage || t.targetLanguage,
                        translationService: i,
                        translationMode: t.state.translationMode
                    }
                } else if (a.type == "getAsyncTranslateContent") {
                    let i = {
                        ...t,
                        translationService: a.data.service
                    };
                    try {
                        r = await g7(a.data, i)
                    } catch (o) {
                        a9(a.type, o.uiConfig(i), a.id)
                    }
                } else
                    a.type === "getAsyncLanguageByText" ? r = await Pl(a.data) : a.type === "sharePage" ? um({
                        detail: a.data
                    }, t) : a.type === "switchTranslationMode" ? Jm(a.data) : o9(a.type);
                r && a.id && a9(a.type, r, a.id)
            }
        } catch (a) {
            B.warn("parse message error", a)
        }
    }
}
function s7(t) {
    setTimeout(()=>{
            td()
        }
        , 10)
}


async function p7(t) {
    let e = {};
    t?.translationMode && (e.translationMode = t.translationMode),
    t?.translationService && (e.translationService = t.translationService),
    t?.targetLanguage && (e.targetLanguage = t.targetLanguage),
    t?.translationStartMode && (e.translationStartMode = t.translationStartMode);
    let n = await We(Ee(), e);
    Tn(n)
}

async function g7({textList: t, from: e, to: n, service: r}, a) {
    if (a.rule.id !== "immersive")
        return;
    let i = t.map(s=>({
        text: s || "",
        id: 0,
        from: e,
        to: n,
        url: a.url,
        fromByClient: e,
        force: !0
    }))
        , o = null;
    try {
        let s = await Ze({
            sentences: i
        }, {
            ...a,
            translationService: r
        }, u=>o = u);
        if (o)
            throw o;
        return s
    } catch (s) {
        throw s
    }
}

async function y9(t) {
    gn("Translating");
    let e = ms()
        , n = [...document.querySelectorAll("iframe")]
        , r = []
        , a = [];
    for (let s of n) {
        let u = s.contentDocument;
        if (!u)
            continue;
        io(u, t);
        let l = u.body;
        if (!l)
            continue;
        let c = on(t);
        c.isModifyImage = !1,
            Ur({
                id: e,
                container: l,
                filterRule: c,
                onParagraph: p=>{
                    r.push(p)
                }
            })
    }
    let i = fr(t.config.translationServices[t.translationService])
        , o = 1;
    for (let s of r) {
        let u = $l(s.flatNodes, {
            isPreWhitespace: s.isPreWhitespace || !1,
            delimiters: i,
            stayOriginalSelectors: t.rule.stayOriginalTags.concat(t.rule.stayOriginalTags).map(c=>c.toLowerCase()).concat(t.rule.stayOriginalSelectors).concat(t.rule.additionalStayOriginalSelectors)
        });
        if (!u)
            continue;
        s.variables = u?.variables || {},
            s.text = u?.text,
            s.id = (o++).toString();
        let l = await Bg(t, s, {
            excludeLanguages: t?.config?.translationLanguagePattern?.excludeMatches || [],
            isDetectParagraphLanguage: t.state.isDetectParagraphLanguage,
            targetLanguage: t.targetLanguage,
            delimiters: i,
            noTranslateRegexp: t.rule.noTranslateRegexp,
            minTextCount: 2,
            minWordCount: 1,
            ignoreZhCNandZhTW: t.rule.ignoreZhCNandZhTW
        });
        l && (a.push(l),
            tf[l.id] = l)
    }
    r = [],
        document.dispatchEvent(new CustomEvent(_t,{
            detail: JSON.stringify({
                type: "totalParagraphsCount",
                payload: {
                    totalParagraphsCount: a.length
                }
            })
        }));
    try {
        await gc(a, t, t.state.translationMode || t.config.translationMode)
    } catch {} finally {
        gn("Translated")
    }
}


function k9(t) {
    t.state.translationMode = "translation",
        ho(t)
}


var fe = null, ud = {}, Co, _9 = !1;

async function td() {
    Mi.clearStrictTicks();
    let t = await We(Ee(), {})
        , e = await fs();

    //debugger;

    if (B.debug("init page ctx", t),
        cy(t),
    t.rule.pageType == "subtitleBuilder") {
        Xm();
        return
    }
    if (t.rule.pageType == "ebookBuilder") {
        h9();
        return
    }
    if (Co || (Co = t.state.translationTheme),
    t.rule.urlChangeDelay && await vr(t.rule.urlChangeDelay),
    t.rule.waitForSelectors && t.rule.waitForSelectors.length > 0 && await j7(t.rule.waitForSelectors, t.rule.waitForSelectorsTimeout),
        t.rule.isInjectOptionsUrl) {
        let s = Ii()
            , u = document.createElement("meta");
        u.name = "immersive-translate-options-url",
            u.content = s;
        try {
            document.head && document.head.appendChild && document.head.appendChild(u)
        } catch (l) {
            B.warn("inject options url failed", l)
        }
    }
    if (t.rule.globalMeta && Object.keys(t.rule.globalMeta).forEach(u=>{
            let l = document.createElement("meta");
            l.name = u,
                l.content = t.rule.globalMeta[u],
                document.head.appendChild(l)
        }
    ),
    t.rule.initialGlobalAttributes && gT(document.body, t.rule.initialGlobalAttributes),
    t.rule.pageType == "pdfReader") {
        Tn(t);
        return
    }
    if (t.config.arxivRule && t.config.arxivRule.matches && dt(t.url, t.config.arxivRule.matches)) {
        let u = document.querySelector(t.config.arxivRule.injectContainerSelector);
        if (u) {
            let l = document.querySelector(t.config.arxivRule.officialHtmlSelector)
                , c = "";
            if (l && l.getAttribute && l.getAttribute("href")) {
                let b = l.getAttribute("href");
                try {
                    let h = new URL(b);
                    h.searchParams.set("_immersive_translate_auto_translate", "1"),
                        c = h.toString()
                } catch {}
            }
            let g = new URL(t.url).pathname.split("/").pop()
                , f = !1
                , T = !0;
            if (g)
                try {
                    let h = g.split(".")[0]
                        , E = h.slice(0, 2)
                        , D = h.slice(2, 4)
                        , M = new Date(`20${E}-${D}-27`)
                        , I = new Date(t.config.arxivRule.validBefore);
                    M < I && (f = !0)
                } catch (b) {
                    B.debug("arxivRule validBefore error", b)
                }
            if (t.config.arxivRule.validOnlySelector && (T = document.querySelector(t.config.arxivRule.validOnlySelector) !== null),
            f && T) {
                let b = document.createElement("li");
                b.innerHTML = `<a target="_blank" href="https://ar5iv.labs.arxiv.org/html/${g}?_immersive_translate_auto_translate=1" aria-describedby="download-button-info" accesskey="f" class="abs-button download-pdf">${kt(t, "viewWithImmersiveTranslate")}</a>`,
                    u.appendChild(b)
            } else {
                let b = "";
                if (c && (b = c),
                    b) {
                    let h = document.createElement("li");
                    h.innerHTML = `<a target="_blank" href="${b}" aria-describedby="download-button-info" accesskey="f" class="abs-button download-pdf">${kt(t, "viewWithImmersiveTranslate")}</a>`,
                        u.appendChild(h)
                }
            }
        }
    }
    if (t.rule.isOnBoardingPage) {
        document.dispatchEvent(new CustomEvent(_t,{
            detail: JSON.stringify({
                type: "currentConfig",
                payload: {
                    enableDefaultAlwaysTranslatedUrls: !!t.config.enableDefaultAlwaysTranslatedUrls
                }
            })
        }));
        let s = document.querySelector("#immersiveTranslateEnableDefaultAlwaysTranslatedUrlsValue");
        s && (s.value = "helloworld",
            s.value = String(!!t.config.enableDefaultAlwaysTranslatedUrls),
            s.dispatchEvent(new Event("change")))
    }
    _9 || (_9 = !0,
    He() && t.rule.useIframePostMessage && await o1());
    let n = t.sourceLanguage;
    n === "auto" ? n = await F9() : qn(n);
    let r = r2(t, n);
    if (r && (t = await We(Ee(), {
        translationMode: r
    })),
        t.rule.isInjectMeta)
        try {
            let s = await Gl(n)
                , u = document.createElement("meta");
            u.name = "immersive-translate-meta",
                u.content = Do(JSON.stringify(s)),
            document.head && document.head.appendChild && document.head.appendChild(u)
        } catch (s) {
            B.warn("inject meta failed", s)
        }
    let a = new URL(t.url)
        , o = a.searchParams.get("_immersive_translate_auto_translate") === "1" || a.searchParams.get("_immersive_translate_auto_translate") === "true" || t.state.isAutoTranslate || t.isTranslateUrl || t.rule.pageType == "pdfReader";
    if (!o && !t.isTranslateExcludeUrl && (B.debug(`detect page language: ${t.url} ${n}`),
    na(n, t.targetLanguage, {
        ignoreZhCNandZhTW: t.rule.ignoreZhCNandZhTW
    }) || n === "auto" || u1(n, t.config.translationLanguagePattern) && (o = !0,
        B.debug(`match language pattern ${n}, auto translate`))),
    t.rule.pageType == "ebookBuilder" && (o = !1),
    t.rule.pageType !== "pdfReader" && as(e) && vo(t, window),
        o)
        fe.state.isAutoTranslate = !0,
            Tn(fe);
    else if (B.debug("do not auto translate", t),
    t.rule.initTranslationServiceAsSoonAsPossible && t.translationService === "deepl") {
        if (na(n, t.targetLanguage, {
            ignoreZhCNandZhTW: t.rule.ignoreZhCNandZhTW
        }) || n === "auto")
            return;
        t.config && t.config.translationServices && t.config.translationServices.deepl && t.config.translationServices.deepl.authKey && typeof t.config.translationServices.deepl.authKey == "string" && t.config.translationServices.deepl.authKey.startsWith("immersive_") && (ud[t.translationService] || (ud[t.translationService] = !0,
        He() || Sg(t).catch(s=>{
                B.warn("init translation engine error", s)
            }
        )))
    }
}


async function F7() {
    if (fe = await We(Ee(), {}),
    fe.rule.pageType == "ebookBuilder")
        return b9(fe);
    if (fe.rule.pageType == "subtitleBuilder")
        return f9(fe);
    hy()
}


async function F9() {
    let t = await We(Ee(), {});
    return t.rule.pageType == "subtitleBuilder" ? Xm() : fy(t)
}
function M7(t) {
    Qe() === "Original" ? k9(t) : ti()
}
function B7(t) {
    Qe() === "Original" ? m9(t) : ef()
}
function I7(t) {
    Qe() === "Original" ? ho(t) : ti()
}
async function si() {
    zi(""),
        document.dispatchEvent(new CustomEvent(_t,{
            detail: JSON.stringify({
                type: "restorePage",
                payload: {}
            })
        }));
    let t = await We(Ee(), {});
    if (t.rule.pageType == "subtitleBuilder") {
        ef();
        return
    } else
        t.rule.pageType == "ebookBuilder" && T9();
    ti()
}
async function Tn(t, e) {
    //debugger;

    // TODO : sentryConfig.enable = false 直接返回
    t.config?.sentryConfig?.contentInitTime == "translate_page" && od(t.config?.sentryConfig);
    let n = Qe()
        , r = {
        pageStatus: n,
        translateService: t.state.translationService || t.translationService,
        translationMode: t.state.translationMode
    };
    // TODO:sentryConfig.enable = false 直接返回
    P9("translatePage", r), L9(r),
    n !== "Original" && await si(),
        document.dispatchEvent(new CustomEvent(_t,{
            detail: JSON.stringify({
                type: "translateStart",
                payload: {}
            })
        })),
        document.dispatchEvent(new CustomEvent(_t,{
            detail: JSON.stringify({
                type: "targetLanguage",
                payload: {
                    targetLanguage: t.targetLanguage
                }
            })
        })),
    ud[t.translationService] || (ud[t.translationService] = !0,
    He() || Sg(t).catch(i=>{
            B.warn("init translation engine error", i)
        }
    ));
    let a = {};
    if (e && e.trigger && (a.trigger = e.trigger),
        ot("translage_page_daily", [{
            name: "translage_page_daily",
            params: a
        }], t),
        ot("translate_page", [{
            name: "translate_page",
            params: a
        }], {
            ...t,
            sourceLanguage: vt()
        }),
    t.rule.pageType == "subtitleBuilder") {
        B7(t),
            zi("yes");
        return
    }
    if (t.rule.pageType == "ebookBuilder") {
        y9(t),
            zi("yes");
        return
    }
    if (t.rule.pageType === "pdfReader") {
        M7(t),
            zi("yes");
        return
    }
    I7(t),
        zi("yes")
}
async function R7(t, e) {
    let n = fe?.translationService;
    if (Qe() === "Original" || n != t) {
        fe = await We(Ee(), {
            translationService: t
        });
        let r = kt(fe, "temprarilyChangeTranslationTo_" + t);
        Toastify({
            text: r
        }),
            await Tn(fe, e)
    } else {
        si();
        let r = await an()
            , a = {
            url: Ee(),
            config: r,
            state: {}
        }
            , i = await hn(a);
        fe = await We(Ee(), {
            translationService: i.translationService
        })
    }
}
async function Jm(t) {
    if (fe = await We(Ee(), {
        translationMode: t
    }),
        ot("switch_translation_mode", [{
            name: "switch_translation_mode",
            params: {
                mode: t
            }
        }], {
            ...fe,
            sourceLanguage: "unknown"
        }),
    Qe() === "Original") {
        Tn(fe);
        return
    }
    window.immersiveTranslateSwitchTranslateState && window.immersiveTranslateSwitchTranslateState(t)
}
async function z7(t) {
    if (Qe() === "Original")
        await M9(t);
    else if (Qe() === "Translated" || Qe() === "Error") {
        let e = {};
        fe && fe.state && (e = fe.state),
            fe = await We(Ee(), e),
            fe.state.translationArea !== "body" ? (fe.state.translationArea = "body",
                fe = await We(Ee(), fe.state),
                await Tn(fe, t)) : si()
    }
}
async function B9(t) {
    fe = await We(Ee(), {
        translationStartMode: "immediate"
    }),
        await Tn(fe, t)
}
async function N7(t) {
    // debugger;

    Qe() === "Original" ? await B9(t) : (Qe() === "Translated" || Qe() === "Error") && si()
}
async function I9() {
    let t = await We(Ee(), {});
    if (!dt(t.url, t.config.inputStyleBlockUrls)) {

        // let n = Me().IMMERSIVE_TRANSLATE_INPUT_INJECTED_CSS;
        let immersive_translate_input_injectedContent = oe.runtime.getURL("/script/contentscript/css/immersive_translate_input_injected.css");
        let n = immersive_translate_input_injectedContent;
        En(document, n, "immersive-translate-input-injected-css")
    }
    t.rule.pageType && t.rule.pageType !== "html" || t.config.enableInputTranslation && nf(t)
}
function U7() {
    return fe
}
async function We(t, e) {
    //debugger;

    let n = Object.keys(e);
    if (fe) {
        let r = {
            url: t,
            config: fe.config,
            state: {
                ...fe.state,
                ...e
            }
        };
        fe = await hn(r)
    } else {
        // TODO: 第一次 fe 为空
        let r = await an()
            , a = e;
        n.length === 0 && (a = void 0),
            fe = await hn({
                url: t,
                config: r,
                state: a
            })
    }
    return fe.state && fe.state.translationService && (fe.translationService = fe.state.translationService),
    fe.state && fe.state.targetLanguage && (fe.targetLanguage = fe.state.targetLanguage),
        fe
}
async function q7() {
    let t = await fn() || {}
        , e = t.generalRule || {}
        , n = e["subtitleRule.add"] || {}
        , r = !n.preTranslation;
    await mn({
        ...t,
        generalRule: {
            ...e,
            "subtitleRule.add": {
                ...n,
                preTranslation: r
            }
        }
    }),
        r ? Toastify({
            text: kt(fe, "videoSubtitlePreTranslationOn")
        }) : Toastify({
            text: kt(fe, "videoSubtitlePreTranslationOff")
        }),
        setTimeout(()=>{
                window.location.reload()
            }
            , 1e3)
}
async function Km() {
    let t = await an(), e = await fs(), n;
    fe && fe.state && (n = fe.state);
    let r = {
        url: Ee(),
        config: t,
        state: n
    }
        , a = await hn(r);
    a.state && a.state.translationService && (a.translationService = a.state.translationService),
        fe = a,
        im(fe);
    let i = Hs()
        , o = [];
    return i ? o = i.allInlineWindows || [window] : o = [window],
        o.forEach(s=>{
                Vs(a, s),
                as(e) && vo(a, s),
                    nf(a)
            }
        ),
        a
}

async function d9(t) {
    debugger;

    let e = await fn();
    if (e.translationService)
        return;
    let n = t.config.translationService
        , r = await Zm(t, n);
    if (t.translationService !== r) {
        if (!r) {
            ls([{
                name: "no_avaliable_translation_service"
            }]);
            return
        }
        e.translationService = r,
            mn(e),
            t.translationService = r,
            ls([{
                name: "change_default_translation_service",
                params: {
                    translation_service: r
                }
            }])
    }
}
async function Zm(t, e, n=!0) {
    let r = t.rule.detectionServiceOrder || ["google", "bing", "transmart", "yandex"];
    return r.sort((a,i)=>a === e ? n ? -1 : 1 : i === e ? n ? 1 : -1 : 0),
        await uT(r, t)
}

async function g9(t) {
    let e = await fn();
    e.translationService = t,
        await mn(e);
    let n = await We(Ee(), {});
    n.translationService = t,
        await Tn(n)
}
z3({
    detectCurrentPageLanguage: F9,
    ensureSwitchTranslationMode: Sm,
    restorePage: si,
    retryFailedParagraphs: F7,
    switchTranslationMode: Jm,
    toggleTranslatePage: ym,
    toggleTranslateTheMainPage: O7,
    toggleTranslateTheWholePage: z7,
    toggleTranslationMask: vm,
    toggleVideoSubtitlePreTranslation: q7,
    translatePage: Tn,
    translatePageWithTranslationService: R7,
    translateTheMainPage: af,
    translateTheWholePage: M9,
    translateToThePageEndImmediately: B9,
    toggleTranslateToThePageEndImmediately: N7,
    updateGlobalContext: Km,
    getPureGlobalContext: U7
});

