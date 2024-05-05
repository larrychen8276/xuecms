/////////////////////////////////////////////////////////////////////////////////////////////////////////

//TODO:这块可以提取出来

function bT(t) {
    let e = document.querySelector("title"), n;
    return e && (n = new MutationObserver(function(r) {
            r.length > 0 && (r[0].target.text.includes(Yu) || kg(t).catch(i=>{
                    B.error("translateTitle error:", i.name, i.message, i.details || "")
                }
            ))
        }
    ),
        n.observe(e, {
            subtree: !0,
            characterData: !0,
            childList: !0
        })),
        n
}

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

function oo(t) {
    return (t.config.rtlLanguages || ["ar", "arc", "az", "dv", "he", "ckb", "fa", "ur"]).includes(t.targetLanguage)
}

function on(t) {
    let e = t.rule.selectors
        , n = t.rule.excludeTags
        , r = t.rule.additionalExcludeTags
        , a = t.rule.excludeSelectors
        , i = t.rule.additionalExcludeSelectors;
    return t.state.translationArea === "body" && (e = [],
        a = []),
        {
            paragraphFirstLetterFontSize: t.rule.paragraphFirstLetterFontSize,
            globalStyles: t.rule.globalStyles,
            globalAttributes: t.rule.globalAttributes,
            selectors: e,
            atomicBlockSelectors: t.rule.atomicBlockSelectors,
            skipEditableCheck: t.rule.skipEditableCheck,
            lineBreakMaxTextCount: t.rule.lineBreakMaxTextCount,
            isTransformPreTagNewLine: t.rule.isTransformPreTagNewLine,
            excludeSelectors: n.concat(r).map(s=>s.toLowerCase()).filter(s=>s !== "code" && s !== "img").concat(a).concat(i),
            blockSelectors: t.rule.allBlockTags.map(s=>s.toLowerCase()).concat(t.rule.extraBlockSelectors),
            extraBlockSelectors: t.rule.extraBlockSelectors,
            extraInlineSelectors: t.rule.extraInlineSelectors.concat(t.rule.additionalInlineSelectors),
            stayOriginalSelectors: t.rule.stayOriginalTags.concat(t.rule.stayOriginalTags).map(s=>s.toLowerCase()).concat(t.rule.stayOriginalSelectors).concat(t.rule.additionalStayOriginalSelectors)
        }
}
var UA = {
    sanitize: t=>t
};

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//TODO:这块可以提取出来

function Is(t, e) {
    if (!t.targetNodes)
        return;
    let n = t.state || "original"
        , r = t.commonAncestorContainer;
    if (!pt.isSkipMarkEle(r) && !pt.isMarked(r, t.ctxId))
        return;
    let a = r.contains(t.rootNodes[0])
        , i = r.contains(t.targetNodes[0]);
    if (a && i)
        n = "dual";
    else if (a)
        n = "original";
    else if (i)
        n = "translation";
    else
        return;
    if (e != n) {
        t.state = e;
        try {
            if (n == "dual" && e == "translation" && (dc(t.rootNodes),
                vT(t.commonAncestorContainer)),
            n == "original" && e == "translation") {
                let o = Pg(t.rootNodes);
                if (dc(t.rootNodes),
                    yT(o))
                    return;
                so(o, r, t.targetNodes || []),
                    vT(t.commonAncestorContainer)
            }
            if (n == "translation" && e == "dual") {
                let o = t.targetNodes[0];
                so(o, r, t.rootNodes || []),
                    ST(t.commonAncestorContainer)
            }
            if (n == "original" && e == "dual") {
                let o = Pg(t.rootNodes);
                if (yT(o))
                    return;
                so(o, r, t.targetNodes || []),
                    ST(t.commonAncestorContainer)
            }
            if (n == "translation" && e == "original") {
                let o = Pg(t.targetNodes);
                dc(t.targetNodes),
                    so(o, r, t.rootNodes || [])
            }
            n == "dual" && e == "original" && dc(t.targetNodes),
                Ig(t)
        } catch (o) {
            B.error(o)
        }
    }
}
function yT(t) {
    return !t || !Nr(t) ? !1 : t.classList.contains(yt)
}
function vT(t) {
    if (!Nr(t))
        return;
    t.querySelectorAll("font[class*=immersive-translate-target-translation]").forEach(r=>{
            lt(r, "immersiveTranslateClassBak", r.className),
                r.className = "notranslate immersive-translate-target-dual immersive-translate-target-inner"
        }
    );
    let n = t.querySelector(".immersive-translate-target-wrapper");
    n && n.classList.add("immersive-translate-state-dual")
}
function ST(t) {
    if (!Nr(t))
        return;
    t.querySelectorAll("font[class*=immersive-translate-target-dual]").forEach(r=>{
            let a = qi(r, "immersiveTranslateClassBak");
            Rl(r, "immersiveTranslateClassBak"),
                r.className = a
        }
    );
    let n = t.querySelector(".immersive-translate-target-wrapper");
    n && n.classList.remove("immersive-translate-state-dual")
}
function Pg(t) {
    return t ? t[t.length - 1].nextSibling : null
}
function dc(t) {
    (t || []).forEach(e=>e.parentNode?.removeChild(e))
}
function so(t, e, n) {
    let r = t;
    e && (r ? n.forEach(a=>{
            r.parentNode?.insertBefore(a, r)
        }
    ) : n.forEach(a=>{
            e.appendChild(a)
        }
    ))
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
        // TODO:翻译方法 -> paragraph_to_html.js
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
    //debugger;

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

function WA(t, e) {
    return t.find(n=>n.id === e)
}
function KA(t, e, n, r, a, i) {
    let o = !1
        , s = r;
    if (Vi(s.commonAncestorContainer, n.id)?.remove(),
        Ig(r),
    s && (t || !e)) {
        t || (B.error("translate error", n, t, e),
            t = new Error("no response from server"));
        let {rule: u} = a
            , l = n.id
            , c = document.createElement(u.targetWrapperTag);
        lt(c, ab, l.toString()),
            c.classList.add("notranslate", yt, yt + "-error"),
            c.setAttribute("translate", "no"),
            c.setAttribute("lang", a.targetLanguage);
        let p = r.rootNodes[r.rootNodes.length - 1].nextSibling;
        if (so(p, r.commonAncestorContainer, [c]),
        s && (s.error = t),
            c) {
            let m = GA(a, t).replaceAll(`
`, "").replaceAll('"', "&quot;")
                , g = t.message.replaceAll(`
`, "").replaceAll('"', "&quot;")
                , f = mr(Nt, "retryAllParagraphs", a.config.interfaceLanguage, "zh-CN")
                , T = mr(Nt, "errorTooltipTitle", a.config.interfaceLanguage, "zh-CN") + ": " + g
                , b = mr(Nt, "error.retry", a.config.interfaceLanguage, "zh-CN")
                , h = mr(Nt, "error.reason", a.config.interfaceLanguage, "zh-CN")
                , E = `<a href="javascript:void(0)"><${u.targetWrapperTag} class="${Q}-error notranslate">
        <${u.targetWrapperTag} class="${Q}-error-wrapper">
        <font class="${Q}-clickable-button notranslate" style="display:flex;flex-direction:row;align-items:center;" data-${Q}-paragraph-id="${l}" title="${f}" data-${Q}-action="retry">
          <svg style="display:inline;width:1em;height:1em;pointer-events:none;" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.9387 5.48805C35.9166 4.60421 35.2434 4.04719 34.279 4.0675C33.3131 4.0878 32.8154 4.67712 32.6567 5.56132C32.5745 6.01985 32.601 6.49957 32.5962 6.96997C32.5881 7.77251 32.594 8.5752 32.594 9.3779C32.4685 9.43478 32.343 9.4917 32.2175 9.54866C31.7961 9.14366 31.3817 8.73102 30.9521 8.33488C27.0799 4.76502 22.4856 3.43605 17.3405 4.22591C10.0761 5.34107 4.69388 11.3891 4.06231 18.939C3.46983 26.0213 8.03881 32.8643 14.897 35.1663C21.8348 37.495 29.5543 34.7845 33.4563 28.6429C33.7074 28.2475 33.9685 27.8417 34.1218 27.4045C34.4194 26.5555 34.2699 25.765 33.4312 25.3113C32.6231 24.8743 31.8573 25.0498 31.2835 25.7915C30.9966 26.1625 30.7785 26.5856 30.5106 26.9724C28.0914 30.4658 24.7682 32.3693 20.5158 32.5766C14.8218 32.8541 9.60215 29.1608 7.94272 23.717C6.22884 18.0946 8.59939 12.0366 13.6698 9.08126C18.5986 6.20837 24.9262 7.03281 28.9148 11.0837C29.2069 11.3803 29.4036 11.7708 29.8772 12.4519C28.32 12.4519 27.1212 12.3885 25.9323 12.4704C24.8345 12.5461 24.253 13.1995 24.262 14.1166C24.2708 15.0096 24.8931 15.7485 25.9495 15.7745C28.7068 15.8424 31.4671 15.8177 34.2259 15.7884C35.1348 15.7787 35.8872 15.2584 35.9148 14.3603C36.0054 11.4048 36.0127 8.44397 35.9387 5.48805Z" fill="#428ADF"/>
          </svg>
          <span style="color:#428ADF;text-decoration-line:underline;text-underline-offset:0.2em;margin-left:0.2em;pointer-events:none;">${b}</span>
        </font>&nbsp;&nbsp;
        <font class="${Q}-help-button notranslate" style="display:flex;flex-direction:row;align-items:center;" title="${T}" data-${Q}-tooltip-text="${m}" data-${Q}-action="toast-error">
          <svg style="display:inline;width:1em;height:1em;pointer-events:none;" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5607 2.5191C10.735 2.05516 2.46528 10.1045 2.50011 20.0984C2.54469 32.8837 15.9794 41.3025 27.521 35.772C28.0597 35.5138 28.6042 35.2357 29.0745 34.8742C29.9064 34.2347 30.0797 33.3404 29.5712 32.5989C29.0382 31.8217 28.2936 31.6838 27.4596 32.0227C27.2265 32.1174 27.0066 32.2437 26.7865 32.3701C26.6008 32.4767 26.415 32.5833 26.2211 32.6712C20.8005 35.1282 15.6165 34.6504 11.0342 30.8857C6.38506 27.0662 4.83815 21.9885 6.36608 16.1605C8.23236 9.04216 15.6457 4.59129 22.7912 6.13629C30.3201 7.76418 35.1917 14.6886 33.9006 22.1467C33.6763 23.4426 33.1697 24.693 32.665 25.9388C32.4936 26.3618 32.3223 26.7846 32.1625 27.2081C31.7321 28.3488 31.8755 29.1499 32.727 29.6338C33.5625 30.1085 34.3839 29.8271 35.0848 28.8121C35.2031 28.6407 35.3005 28.4544 35.3977 28.2685C35.4242 28.2179 35.4507 28.1672 35.4776 28.1169C36.5263 26.154 37.166 24.0544 37.3992 21.8528C38.4715 11.7296 30.8594 3.00541 20.5607 2.5191ZM22.2324 19.4482C22.6221 17.6294 21.6934 16.7853 19.8682 17.1885C19.4795 17.2744 19.0887 17.3789 18.7223 17.531C17.5055 18.036 17.1067 18.9307 17.8422 20.0563C18.3665 20.8586 18.2472 21.5161 18.0255 22.2965L17.9039 22.7239C17.5079 24.1148 17.1115 25.5072 16.7935 26.9165C16.4841 28.2873 17.2241 29.1723 18.6198 29.1593C18.6749 29.1502 18.7366 29.1408 18.8028 29.1307C18.9623 29.1063 19.1482 29.078 19.332 29.0394C21.5543 28.5732 21.9094 27.8227 20.9844 25.759C20.8192 25.3904 20.8406 24.873 20.9389 24.4633C21.1123 23.7404 21.3092 23.0227 21.5061 22.3052C21.7664 21.3567 22.0267 20.4083 22.2324 19.4482ZM21.2918 10.7674C22.3383 10.7322 23.3464 11.7297 23.3245 12.7787C23.3035 13.7817 22.4311 14.6541 21.4139 14.6892C20.3685 14.7252 19.5018 13.9485 19.4202 12.9025C19.3341 11.798 20.2055 10.8041 21.2918 10.7674Z" fill="#428ADF"/>
          </svg>
          <span style="color:#428ADF;text-decoration-line:underline;text-underline-offset:0.2em;margin-left:0.2em;pointer-events:none;">${h}</span>
        </font>
        </${u.targetWrapperTag}>
        </${u.targetWrapperTag}></a>`;
            c.innerHTML = DOMPurify.sanitize(E)
        }
    } else if (r) {
        if (s.error = void 0,
            r.targetText = e?.text || "",
            !(r.text?.trim().toLocaleLowerCase() == r.targetText?.trim().toLocaleLowerCase())) {
            let l = i2(r, a)
                , c = document.createElement(a.rule.targetWrapperTag);
            c.classList.add("notranslate", yt),
            oo(a) && c.setAttribute("dir", "rtl"),
                c.setAttribute("lang", a.targetLanguage),
                c.setAttribute(dr, "1");
            let p = UA.sanitize(l);
            c.innerHTML = p,
                r.targetNodes = [c],
                Is(r, i)
        }
        o = !0
    } else
        B.error("paragraph not found", n.id);
    document.dispatchEvent(new CustomEvent(_t,{
        detail: JSON.stringify({
            type: "paragraphTranslated",
            payload: {
                ok: o
            }
        })
    }))
}
async function Bg(t, e, n) {
    let {text: r, pureText: a} = e
        , i = await Ie({
        text: a || "",
        minLength: 15,
        pageLangs: [vt(), "en"],
        translateService: t.translationService
    })
        , {targetLanguage: o} = n;
    if (!xs({
        text: r || "",
        delimiters: n.delimiters,
        minWordCount: n.minWordCount,
        minTextCount: n.minTextCount,
        noTranslateRegexp: n.noTranslateRegexp
    }))
        return null;
    let u = n.excludeLanguages || []
        , l = El();
    n.isDetectParagraphLanguage && (l = "auto");
    let c = vt()
        , p = i;
    p === "auto" && !n.isDetectParagraphLanguage && (p = c,
    !Ju.includes(t.translationService) && (ye() || tt()) && (p = "auto")),
        e.languageByLocal = p,
        e.languageByClient = l;
    let m = l !== "auto" ? l : p;
    return na(m, o, {
        ignoreZhCNandZhTW: n.ignoreZhCNandZhTW
    }) || u.length > 0 && u.some(T=>na(m, T, {
        ignoreZhCNandZhTW: n.ignoreZhCNandZhTW
    })) ? null : e
}
function Rs() {
    _g = 0
}
var _g = 0;
function GA(t, e) {
    _g += 1;
    let n = e.message;
    if (e instanceof V) {
        let r = e.uiConfig(t);
        if (n = JSON.stringify(r),
        _g != t.rule.toastErrorMinTimes)
            return n;
        document.dispatchEvent(new CustomEvent(qa,{
            detail: r
        }))
    }
    return n
}
function Ig(t) {
    let e = t.commonAncestorContainer;
    if (!e.paragraphs?.length)
        return;
    e.recordLength = e.innerHTML.length,
        $A(e, `[${tb}]`).forEach(r=>{
                r.recordLength && (r.recordLength = r.innerHTML.length)
            }
        )
}
function $A(t, e) {
    let n = t
        , r = [];
    for (; n.parentElement; ) {
        let a = n.parentElement.closest(e);
        if (a)
            r.push(a),
                n = a;
        else
            break
    }
    return r
}
function VA(t) {
    return t.config?.translationServices?.[t.translationService]?.disableStaySelectors ? [] : t.rule.stayOriginalTags.concat(t.rule.stayOriginalTags).map(r=>r.toLowerCase()).concat(t.rule.stayOriginalSelectors).concat(t.rule.additionalStayOriginalSelectors)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
