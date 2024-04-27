"use strict";

async function m7(t) {
    if (!ar)
        try {
            let f = function() {
                c = t.config.inputTargetLanguage;
                let b = l.split(" ")[0];
                b && b[0] && (b = b[0].toLowerCase() + b.slice(1)),
                    b.trim() && i.flatAlias.includes(b) ? (c = ad(b, i.codeAlias),
                        u = l.slice(b.length + 1)) : u = l
            }
                , T = function() {
                c = "";
                let b = x9(i)
                    , h = l.split(b);
                if (h.length < 2)
                    return;
                if (u = h[h.length - 1],
                    s = h[0],
                h.length > 2) {
                    let D = l.lastIndexOf(u)
                        , M = l.slice(0, D).lastIndexOf(h[h.length - 2]);
                    s = l.slice(0, M + h[h.length - 2].length)
                }
                if (s.endsWith(i.codePrefix))
                    return;
                if (s.endsWith(":") && i.codePrefix == "/") {
                    s = "",
                        u = "";
                    return
                }
                let E = l.slice(s.length + 1, l.indexOf(u)).trim();
                if (c = ad(E, i.codeAlias),
                    !c) {
                    B.warn("not found alias", E);
                    return
                }
            }
                , {config: e} = t
                , n = {
                ...e.inputLanguageCodeAlias
            };
            kn.forEach(b=>n[b] = [b, ...n[b] || []]);
            let r = e.inputStartingTriggerKeyAlias[e.inputStartingTriggerKey] || [];
            r.includes(e.inputStartingTriggerKey) || r.unshift(e.inputStartingTriggerKey),
                n[e.inputTargetLanguage] = [...r, ...n[e.inputTargetLanguage]];
            let a = e.inputTrailingTriggerKeyTimeout;
            isMobile().any && (a = e.inputTrailingMobileTriggerKeyTimeout);
            let i = {
                triggerTimes: e.inputTrailingTriggerKeyRepeatTimes,
                triggerKey: e.inputTrailingTriggerKey,
                triggerTimeout: a,
                codePrefix: e.inputStartingTriggerKey,
                codeAlias: n,
                flatAlias: Object.values(n).flat(),
                codePrefixAlias: e.inputStartingTriggerKeyAlias
            }
                , o = document.activeElement;
            if (!o || o.tagName === "BODY")
                return;
            ar = !0;
            let s = ""
                , u = ""
                , l = Da(o) || ""
                , c = t.config.inputTargetLanguage;
            t.config.inputStartingTriggerKey === "none" ? f() : (T(),
            !c && t.config.enableInputTranslationWithoutTriggerKey && f());
            let p = w9(u, i)
                , m = await Ie({
                text: p,
                pageLangs: ["en"]
            });
            B.debug("translateContent", p, m);
            let g = {
                text: p || "",
                id: 0,
                from: m,
                to: c,
                url: "https://google.com",
                fromByClient: m,
                force: !0
            };
            if (!g.text || g.text.length > 5e3)
                return;
            E9(o),
                et(Gu, Date.now());
            try {
                let b = await ma(g, {
                    ...t,
                    translationService: t.inputTranslationService
                });
                A9(t),
                    D9(t, o, s + b.text)
            } catch (b) {
                if (b instanceof V) {
                    let h = b.uiConfig(t);
                    h.action == "retry" && (h.action = "none"),
                        document.dispatchEvent(new CustomEvent(qa,{
                            detail: h
                        }))
                }
            } finally {
                ar = !1
            }
        } catch (e) {
            throw ar = !1,
                e
        } finally {
            ar = !1,
                C9()
        }
}

N3({
    translateInputBoxWithShortcut: m7
});

////////////////////////////////////////////////////////////////////////////////////////////////////////

var cc = "";
async function kg(t) {
    let e = document.title;
    if (!e || e.includes(Yu))
        return;
    cc !== e && (cc = e);
    let n = await Ie({
        text: e,
        pageLangs: [vt(), "en"]
    });
    if (!$i(t, n))
        try {
            let r = await ma({
                id: 0,
                url: t.url,
                text: e,
                from: n,
                to: t.targetLanguage,
                fromByClient: n,
                force: !0
            }, t);
            r && r.text && (document.title = r.text + Yu + cc)
        } catch (r) {
            throw r
        }
}
function TT(t) {
    t.rule.isTranslateTitle && (document.title = cc)
}

////////////////////////////////////////////////////////////////////////////////////////////////

/*
var cP = Me().PROD === "1"
    , di = Me().PROD !== "1";

    var cP = x.PROD === "1"
    , di = x.PROD !== "1";
*/

var cP = true//x.PROD === "1"
    , di = false;//x.PROD !== "1";

function Fg(t, e) {
    if (t.interruptEffectDOM)
        return;
    let n = on(t.ctx);
    t.walkContainer({
        id: t.id,
        container: e,
        articleNode: t.ctx.articleNode,
        filterRule: n,
        bodyRule: t.ctx.rule.bodyRule,
        onParagraph: Za.bind(null, t),
        onFrame: r=>{
            Lg(t, r, !0)
        }
        ,
        onIgnoreElement: r=>{
            pt.mark(r, t.id, n.skipEditableCheck),
                t.ignoreResizeObserver?.observe(r)
        }
    }),
    di && lt(e, "consumeContainer", t.id)
}
function Lg(t, e, n) {
    try {
        if (t.injectCssToDocument(e, t.ctx),
        e instanceof HTMLIFrameElement) {
            if (!ji(e))
                return;
            B.debug("onFrame fragment", e);
            let r = e.contentWindow?.document.body;
            r && (Ja(r, t, n),
                t.dynamicContainerObserver?.observe(r, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0
                }))
        } else
            B.debug("onFrame shadowRoot", e.host),
                Ja(e, t, n),
                t.dynamicContainerObserver?.observe(e, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0
                })
    } catch {}
}
function Ja(t, e, n=!0) {
    let {globalStyles: r, globalAttributes: a} = on(e.ctx)
        , i = 0;
    if (u(e, t, n))
        return;
    if (Nr(t) && s(t)) {
        o(t);
        return
    }
    try {
        let l = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, c=>(Nr(c) && (r && wg(c, r),
        a && Ag(c, a)),
            u(e, c, n) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT));
        for (pt.mark(l.currentNode, e.id, e.ctx.rule.skipEditableCheck); l.nextNode(); ) {
            pt.mark(l.currentNode, e.id, e.ctx.rule.skipEditableCheck);
            let c = l.currentNode;
            if (s(c))
                for (o(c); ; ) {
                    if (l.nextSibling()) {
                        let p = l.currentNode;
                        if (pt.mark(l.currentNode, e.id, e.ctx.rule.skipEditableCheck),
                            s(p)) {
                            o(p);
                            continue
                        } else
                            break
                    }
                    if (!l.parentNode())
                        return
                }
        }
    } catch {}
    if (i == 0 && t instanceof HTMLElement) {
        o(t);
        return
    }
    return e.observeContainers;
    function o(l) {
        pt.clearMark(l),
            i++,
            e.immediateTranslateCapacity >= 0 ? Fg(e, l) : (di && lt(l, "observeContainer", e.id),
                e.containerVisibleObserver?.unobserve(l),
                e.containerVisibleObserver?.observe(l))
    }
    function s(l) {
        let c = l.nodeName.toLowerCase();
        if (l.shadowRoot)
            return Lg(e, l.shadowRoot, n),
                !1;
        if (c === "iframe")
            return Lg(e, l, n),
                !1;
        if (["script", "#document-fragment", "img"].includes(c))
            return !1;
        let p = e.containerRule;
        if (p.selectors && p.selectors?.length > 0)
            return uc(l, p.selectors);
        if (p.pageHeight) {
            let m = l.scrollHeight;
            if (m > 0 && m < p.pageHeight)
                return !0;
            for (let g of l.childNodes)
                if (g.nodeType == Node.TEXT_NODE && g.textContent && g.textContent.trim().length > 0)
                    return !0
        }
        return !1
    }
    function u(l, c, p) {
        if (cT(l.ctx, c),
        c.nodeName.toLowerCase() == "script")
            return c.childNodes.length == 0 || c.childNodes.length == 1 && c.childNodes[0].nodeType == Node.TEXT_NODE;
        if (c.nodeType === Node.DOCUMENT_FRAGMENT_NODE)
            return !1;
        if (c.nodeType !== Node.ELEMENT_NODE || p && pt.isMarked(c, l.id))
            return !0;
        if (l.ctx.rule.isTransformPreTagNewLine && c.nodeName === "PRE")
            return !1;
        let g = on(l.ctx);
        return !!lc(c, {
            excludeSelectors: g.excludeSelectors,
            selectors: g.selectors,
            stayOriginalSelectors: g.stayOriginalSelectors
        })
    }
}



var qA = Po(pc, 300);
async function Za(t, e, n=!1, r="web") {
    if (t.interruptEffectDOM)
        return;
    let a = e.commonAncestorContainer;
    if (a instanceof ShadowRoot || jA(e.rootNodes) || e.stepState >= 2)
        return;
    e.stepState = 2,
    di && lt(a, "onParseParagraph", t.id);
    let {ctx: i} = t
        , {rule: o} = i
        , s = $a(i)
        , u = $l(e.flatNodes, {
        isPreWhitespace: e.isPreWhitespace || !1,
        delimiters: s,
        stayOriginalSelectors: VA(i)
    });
    if (!u)
        return;
    e.variables = u?.variables || {},
        e.text = u?.text,
        e.pureText = u?.pureText;
    let l = i?.config?.translationLanguagePattern?.excludeMatches || []
        , c = await Bg(i, e, {
        excludeLanguages: n ? [] : l,
        targetLanguage: i.targetLanguage,
        noTranslateRegexp: i.rule.noTranslateRegexp,
        delimiters: fr(i.config.translationServices[i.translationService]),
        minTextCount: n || i.state.translationArea === "body" ? 3 : o.paragraphMinTextCount,
        minWordCount: o.paragraphMinWordCount,
        isDetectParagraphLanguage: o.detectParagraphLanguage || i.state.isDetectParagraphLanguage,
        ignoreZhCNandZhTW: i.rule.ignoreZhCNandZhTW
    });
    if (c) {
        if (B.debug("on paragraph", c.text, c),
            a.paragraphs = a.paragraphs || [],
            a.paragraphs.includes(c))
            return;
        a.paragraphs.push(c),
            t.immediateTranslateCapacity > 0 || n ? (n && (e.force = !0),
                HA(t, e.text),
                Mg(t, e, r)) : (di && lt(a, "observeParagraph", t.id),
                t.observeParagraphs.push(c),
                t.paragraphVisibleObserver?.unobserve(a),
                t.paragraphVisibleObserver?.observe(a))
    }
    return c
}
function jA(t) {
    if (!t)
        return !1;
    let e = t[t.length - 1].nextSibling;
    return e ? Nr(e) && e.classList.contains(yt) : !1
}
function HA(t, e) {
    t.ctx.state.translationStartMode !== "immediate" && (t.immediateTranslateCapacity -= e?.length || 0)
}
function Mg(t, e, n="web") {
    if (t.interruptEffectDOM || e.stepState >= 3)
        return;
    e.stepState = 3;
    let r = t.autoIncreaseParagraphId++;
    if (e.id = r.toString(),
        t.paragraphEntities[r] = e,
        t.paragraphQueue.push(r.toString()),
    di && lt(e.commonAncestorContainer, "consumeParagraph", t.id),
        lt(e.commonAncestorContainer, eb, "1", !0),
    n == "hover") {
        pc.call(t, t.ctx);
        return
    }
    qA.call(t, t.ctx)
}
async function pc(t) {
    debugger;

    if (this.interruptEffectDOM)
        return;
    let e = this.paragraphQueue;
    this.paragraphQueue = [];
    let n = [];
    for (let r = 0; r < e.length; r++) {
        let a = e[r]
            , i = this.paragraphEntities[a];
        i && n.push(i)
    }
    await gc(n, {
        ...t,
        translationService: this.translationService
    }, this.translateState)
}
async function gc(t, e, n) {
    let r = {
        sentences: []
    };
    for (let a of t) {
        let i = a.id
            , o = Ss(e, i)
            , s = a.rootNodes[a.rootNodes.length - 1].nextSibling;
        so(s, a.commonAncestorContainer, [o]),
            Ig(a),
            r.sentences.push({
                id: parseInt(i),
                url: e.encryptedUrl,
                text: a.text,
                from: a.languageByLocal || "auto",
                fromByClient: a.languageByClient || "auto",
                to: e.targetLanguage,
                xpath: a.xpath,
                force: a.force
            })
    }
    if (r.sentences.length > 0)
        try {
            await Ze(r, e, (a,i,o)=>{
                    let s = o.id
                        , u = WA(t, s.toString());
                    u && KA.call(null, a, i, o, u, e, n)
                }
            )
        } catch (a) {
            B.error("translateCurrentQueue error", a);
            return
        }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var oi = {};
async function m9(t) {
    gn("Translating");
    let e = vt()
        , n = El()
        , r = [...document.querySelectorAll(".source-text")];
    if ($i(t, e))
        return;
    let a = r.filter(i=>i.innerText?.trim()).map((i,o)=>{
            let s = i.parentElement?.parentElement?.querySelector(".target-text");
            return lt(i, "id", o + ""),
            s && (Vi(s, o)?.remove(),
                s.appendChild(Ss(t, o))),
                {
                    text: i.innerText || "",
                    id: o,
                    from: e,
                    to: t.targetLanguage,
                    url: "https://google.com",
                    fromByClient: n,
                    force: !0
                }
        }
    );
    document.dispatchEvent(new CustomEvent(_t,{
        detail: JSON.stringify({
            type: "totalParagraphsCount",
            payload: {
                totalParagraphsCount: a.length
            }
        })
    }));
    try {
        await Ze({
                sentences: a
            }, {
                ...t,
                sourceProgram: "subtitle"
            }, (i,o,s)=>{
                let u = s.id
                    , l = Vi(document.body, u);
                if (!l)
                    return;
                let c = l.parentElement;
                c && (l.remove(),
                    i ? (c.innerHTML = DOMPurify.sanitize(`<span id="error-id-${u}">${i.message}</span>`),
                        oi[u] = {
                            ok: !1,
                            sentence: s
                        }) : o && (c.innerHTML = DOMPurify.sanitize(o.text),
                        oi[u] = {
                            ok: !0,
                            sentence: s
                        }),
                    document.dispatchEvent(new CustomEvent(_t,{
                        detail: JSON.stringify({
                            type: "paragraphTranslated",
                            payload: {
                                ok: !i
                            }
                        })
                    })))
            }
        )
    } catch (i) {
        throw i
    } finally {
        gn("Translated")
    }
}
async function f9(t) {
    gn("Translating"),
        document.dispatchEvent(new CustomEvent(_t,{
            detail: JSON.stringify({
                type: "retryFailedParagraphsStart",
                payload: {}
            })
        }));
    let e = Object.keys(oi)
        , n = []
        , r = [];
    for (let a of e) {
        let i = oi[a];
        if (!i.ok) {
            let s = document.querySelector(`#error-id-${a}`);
            if (s) {
                let u = s.parentElement;
                s.remove(),
                u && (delete oi[a],
                    u.appendChild(Ss(t, a)),
                    r.push(i.sentence))
            }
        }
    }
    try {
        await Ze({
                sentences: r
            }, t, (a,i,o)=>{
                let s = o.id
                    , u = Vi(document.body, s);
                if (!u)
                    return;
                let l = u.parentElement;
                l && (u.remove(),
                    a ? (l.innerHTML = DOMPurify.sanitize(`<span id="error-id-${s}">${a.message}</span>`),
                        oi[s] = {
                            ok: !1,
                            sentence: o
                        }) : i && (l.innerHTML = DOMPurify.sanitize(i.text),
                        oi[s] = {
                            ok: !0,
                            sentence: o
                        }),
                    document.dispatchEvent(new CustomEvent(_t,{
                        detail: JSON.stringify({
                            type: "paragraphTranslated",
                            payload: {
                                ok: !a
                            }
                        })
                    })))
            }
        )
    } catch (a) {
        throw a
    } finally {
        gn("Translated")
    }
}

var tf = {};
async function b9(t) {
    gn("Translating"),
        document.dispatchEvent(new CustomEvent(_t,{
            detail: JSON.stringify({
                type: "retryFailedParagraphsStart",
                payload: {}
            })
        }));
    let e = Object.keys(tf)
        , n = [];
    for (let r of e) {
        let a = tf[r];
        if (a.error) {
            let o = a.commonAncestorContainer.querySelector(`[${$u}='${r}']`);
            o && o.remove(),
                n.push(a)
        }
    }
    try {
        Rs(),
            await gc(n, t, t.state.translationMode || t.config.translationMode)
    } catch {} finally {
        gn("Translated")
    }
}
