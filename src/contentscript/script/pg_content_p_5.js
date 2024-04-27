"use strict";

function $l(t, e) {
    let n = t.original || t
        , r = null
        , {stayOriginalSelectors: a, delimiters: i, isPreWhitespace: o} = e
        , s = []
        , u = {};
    for (let l = 0; l < n.length; l++) {
        let c = n[l]
            , p = c.parentNode
            , m = p?.nodeName === "PRE"
            , g = c.textContent || ""
            , f = p?.textContent || "";
        if (c.nodeType === Node.TEXT_NODE && p && g === f && (c = p),
            o)
            if (c.nodeType === Node.ELEMENT_NODE)
                if (c && Gt(c, a)) {
                    let b = Object.keys(u).length
                        , h = `${i[0]}${b}${i[1]}`;
                    i.length > 2 && (h = `<${i[2]}${b}></${i[2]}${b}>`),
                        u[b] = c,
                        s.push({
                            text: h,
                            type: "variable"
                        })
                } else
                    s.push({
                        text: c.textContent || "",
                        type: "text"
                    });
            else {
                let T = c.textContent || "";
                m && (T = ca(Bp(c))),
                    s.push({
                        text: T,
                        type: "text"
                    })
            }
        else if (c.nodeType === Node.ELEMENT_NODE)
            if (c && Gt(c, a)) {
                let b = Object.keys(u).length
                    , h = `${i[0]}${b}${i[1]}`;
                i.length > 2 && (h = `<${i[2]}${b}></${i[2]}${b}>`),
                    u[b] = c;
                let E = Ip(s).endsWith(" ") ? " " : ""
                    , D = ca(c.innerText || c.textContent)
                    , M = ca(c.nextSibling).startsWith(" ") ? " " : ""
                    , I = vs(E + D + M)
                    , S = I[0] + h + I[1];
                if (E === " ")
                    S = S.trimStart();
                else if (!S.startsWith(" ")) {
                    let v = vs(c.previousSibling)[1];
                    v === "" && (v = " "),
                        S = v + S
                }
                s.push({
                    text: S,
                    type: "variable"
                })
            } else {
                let T = Ip(s).endsWith(" ") ? " " : ""
                    , b = ca(c.innerText || c.textContent);
                m && (b = ca(Bp(c)));
                let h = ca(c.nextSibling).startsWith(" ") ? " " : ""
                    , E = vs(T + b + h)
                    , D = E[0] + (c.innerText?.trim() || c.textContent?.trim() || "") + E[1];
                if (T === " ")
                    D = D.trimStart();
                else {
                    let M = vs(c.previousSibling)[1];
                    M === "" && (c.nodeName === "A" || c.nodeName === "CODE") && (M = " "),
                        D = M + D
                }
                s.push({
                    text: D,
                    type: "text"
                })
            }
        else {
            let T = Ip(s).endsWith(" ") ? " " : ""
                , b = "";
            c.textContent && (b = ca(Bp(c))),
            T === " " && (b = b.trimStart()),
                s.push({
                    text: b,
                    type: "text"
                })
        }
    }
    if (s && s.length > 0) {
        let l = "";
        for (let c = 0; c < s.length; c++) {
            let p = s[c];
            if (p.type === "variable") {
                let m = null
                    , g = null;
                c > 0 && (m = s[c - 1].text),
                c < s.length - 1 && (g = s[c + 1].text);
                let f = ""
                    , T = "";
                m !== null && !m.endsWith(" ") && (f = " "),
                g !== null && !g.startsWith(" ") && (T = " "),
                    l += `${f}${p.text.trim()}${T}`
            } else
                l += p.text
        }
        r = {
            text: l,
            pureText: "",
            variables: u
        }
    }
    return r && s.length && (r.pureText = s.filter(l=>l.type === "text").map(l=>l.text).join(" ")),
        r
}
function i2(t, e) {
    let {rule: n} = e;
    if (!t.targetText)
        return "";
    let r = [];
    if (t.variables) {
        let c = Object.keys(t.variables);
        for (let p = 0; p < c.length; p++) {
            let m = c[p]
                , g = t.variables[m];
            r[m] = {
                type: "element",
                value: g
            }
        }
        c.length == 0 && !e.config.enableRenderHtmlTag && (t.targetText = t.targetText.replace(/</g, "&lt;").replace(/>/g, "&gt;"))
    }
    t.targetText = DOMPurify.sanitize(t.targetText);
    let a = !1
        , i = t.text
        , o = i.split(" ").length
        , s = i.split(`
`).length;
    o <= n.blockMinWordCount && i.length <= n.blockMinTextCount && s < 2 && (a = !0);
    let u = {
        id: Number(t.id),
        elements: [],
        isVertical: !1,
        rootFrame: t.commonAncestorContainer,
        text: t.text,
        variables: r,
        inline: a,
        preWhitespace: t.isPreWhitespace || !1,
        languageByLocal: "auto",
        languageByClient: "auto"
    }
        , l = $a(e);
    if (l.length > 2) {
        let c = l[2];
        return qD({
            delimiterTag: c,
            targetText: t.targetText,
            inline: a,
            preWhitespace: t.isPreWhitespace || !1,
            wrapperPrefix: e.rule.wrapperPrefix,
            wrapperSuffix: e.rule.wrapperSuffix,
            targetWrapperTag: e.rule.targetWrapperTag,
            translationTheme: e.state.translationTheme,
            translationBlockStyle: e.rule.translationBlockStyle,
            translationClasses: e.rule.translationClasses,
            variables: r
        }).html
    } else {
        let c = a2(u, {
            id: Number(t.id),
            url: "https://google.com",
            text: t.targetText,
            from: "auto",
            to: "auto",
            fromByClient: "auto"
        }, e);
        return c.html
    }
}
function Bp(t) {
    return (t?.innerText || t.textContent || "").replace(/\s+/g, " ") || ""
}
function qD(t) {
    let {delimiterTag: e, inline: n, translationClasses: r, targetWrapperTag: a, wrapperPrefix: i, variables: o, preWhitespace: s, wrapperSuffix: u, translationTheme: l, translationBlockStyle: c} = t;
    o = o || [];
    let p = t.targetText;
    p = DOMPurify.sanitize(p);
    let m = p
        , g = new RegExp(`<${e}(\\d+)>(.*?)</${e}\\d+>`,"g")
        , f = new RegExp(`<${e}(\\d+)>`);
    o.length > 0 && (m = m.replace(g, E=>{
            let D = m.indexOf(E)
                , M = m[D - 1] === " "
                , I = m[D + E.length] === " "
                , S = E.match(f);
            if (!S)
                return E;
            let v = S[1]
                , k = Number(v);
            if (isNaN(k))
                return E;
            let A = o[Number(k)];
            if (A && A.type === "element") {
                let y = A.value.outerHTML;
                return M || (y = " " + y),
                I || (y = y + " "),
                    y
            } else if (A && A.type === "text") {
                let y = A.value;
                return M || (y = " " + y),
                I || (y = y + " "),
                    y
            } else
                B.error("variable type not supported", A, E);
            return E
        }
    ));
    let T = Fp(l, n, r || [], s)
        , b = Mp(l)
        , h = "";
    return c && (h = `style="${c}"`),
        m = `<${a} ${h} class="${T.join(" ")}" ${dr}="1"><${a} class="${b.join(" ")}" ${dr}="1">${m}</${a}></${a}>`,
    n || (i === "smart" ? m = `<br />${m}` : m = `${i}${m}`),
    n && (i !== "smart" ? m = `${i}${m}` : m = `<${a} class="notranslate" ${dr}="1">&#160;</${a}>${m}`),
        u === "smart" ? m = `${m}` : m = `${m}${u}`,
        {
            html: m,
            position: "afterend"
        }
}
function Ip(t) {
    let e = t[t.length - 1];
    return e ? e.text : ""
}
function Rp(t) {
    let {text: e, delimiters: n, variables: r} = t
        , a = e;
    if (n.length > 2) {
        let i = n[2]
            , o = new RegExp(`<${i}(\\d+)>(.*?)</${i}\\d+>`,"g")
            , s = new RegExp(`<${i}(\\d+)>`)
            , u = e;
        return Object.keys(r).length > 0 && (u = u.replace(o, c=>{
                let p = c.match(s);
                if (!p)
                    return c;
                let m = p[1]
                    , g = Number(m);
                if (isNaN(g))
                    return c;
                let f = r[m];
                return f || c
            }
        )),
            u
    } else {
        let i = `${n[0]}(\\d+)${n[1]}`
            , o = new RegExp(i,"g");
        a = a.replace(o, s=>{
                let l = s.replace(new RegExp(n[0],"g"), "").replace(new RegExp(n[1],"g"), "")
                    , c = Number(l);
                return isNaN(c) ? s : r[c] ? r[c] : s
            }
        )
    }
    return a
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function Eg(t, e=!1) {
    t.rootNodes = [],
        t.flatNodes = [],
        t._currentStacks = [],
    e && (t.commonAncestorContainer = null)
}
function Dg(t) {
    return t.display === "none"
}
var pt = {
    _marked_key: X4,
    isMarked(t, e) {
        return yp(t, this._marked_key, e)
    },
    clearMark(t) {
        if (!(!t || t.nodeType !== Node.ELEMENT_NODE) && !(t instanceof HTMLIFrameElement || Va(t)))
            return Rl(t, this._marked_key)
    },
    clearToParentMark(t, e) {
        let n = t;
        for (; n && e && n != e; )
            pt.clearMark(n),
                n = n.parentElement
    },
    mark(t, e, n) {
        if (!(!t || t.nodeType !== Node.ELEMENT_NODE) && !(t instanceof HTMLIFrameElement || Va(t)))
            return lt(t, this._marked_key, e, !1, n)
    },
    markWalk(t, e, n) {
        if (!t || t.nodeType !== Node.ELEMENT_NODE || this.isSkipMarkEle(t))
            return;
        let r = qi(t, "markWalk") || "";
        return lt(t, "markWalk", r + "," + e, !1, n)
    },
    isSkipMarkEle(t) {
        return t ? !!(t instanceof HTMLIFrameElement || Va(t)) : !1
    }
};
function OA(t) {
    let n = t.innerHTML.replace(/\n\n/g, "<br />");
    t.innerHTML = n
}
function zA(t, e, n) {
    if (!t.length)
        return null;
    let r = t.map(a=>{
            let i = new Set;
            for (; (a = a.parentNode) && (i.add(a),
            a !== e); )
                ;
            return i
        }
    );
    for (let a of r[0])
        if (a.nodeType === Node.ELEMENT_NODE || a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            if (Cn(a, n.atomicBlockSelectors))
                continue;
            if (r.every(i=>i.has(a)))
                return a
        }
    return null
}
function Cg(t, e) {
    let n = t.textContent || "";
    if (n.trim().length <= e)
        return;
    let i = [". ", "? ", "! ", "\u3002", "\uFF1F", "\uFF01", `.${String.fromCharCode(160)}`].reduce((o,s)=>{
            let u = n.lastIndexOf(s, e);
            return u > o ? u : o
        }
        , -1);
    if (i > 1) {
        let o = n[i - 1] || ""
            , s = n[i - 2] || ""
            , u = n[i + 1] || "";
        o === "." || u === "." || u === ")" || s === "." && o === "S" || s.toUpperCase() === "M" && (o.toUpperCase() === "R" || o.toUpperCase() === "S") ? i = -1 : isNaN(Number(o)) || (i = -1)
    }
    if (i === -1)
        n.length > e + 20 && Cg(t, e + 20);
    else {
        let o = n.slice(i + 1);
        if (!o.trim())
            return;
        i++,
        o.startsWith(" ") && i++,
            t.immersive = !0;
        let s = t.splitText(i);
        s.immersive = !0;
        let u = document.createElement("br");
        u.immersive = !0,
            s.parentNode?.insertBefore(u, s),
        i + 1 < n.length && Cg(s, e)
    }
}
function gT(t, e) {
    let n = Object.keys(e);
    if (n.length > 0)
        for (let r of n) {
            let a = e[r]
                , i = Object.keys(a)
                , o = c1(t, [r]);
            for (let s of o)
                for (let u of i) {
                    let l = a[u];
                    s.getAttribute(u) !== l && (l === null ? s.removeAttribute(u) : s.setAttribute(u, l))
                }
        }
}
function mT(t, e, n, r, a, i, o) {
    let s = Object.keys(e);
    if (s.length > 0)
        for (let u of s) {
            let l = e[u]
                , c = Object.keys(l)
                , p = t.querySelector(u);
            if (p)
                for (let m of c) {
                    let g = l[m];
                    if (m === "translate" && g === "no") {
                        let T = p.innerText || p.textContent || "";
                        if (!T.trim() || NA(p, a, i, o) || !p1(T, n, r))
                            continue
                    }
                    p.getAttribute(m) !== g && (g === null ? p.removeAttribute(m) : p.setAttribute(m, g))
                }
        }
}
function Ag(t, e) {
    if (e) {
        let n = Object.keys(e);
        if (n.length > 0 && Gt(t, n))
            for (let a of n) {
                let i = e[a];
                if (t.matches(a)) {
                    let o = e[a]
                        , s = Object.keys(o);
                    for (let u of s) {
                        let l = o[u];
                        t.getAttribute(u) !== l && (l === null ? t.removeAttribute(u) : t.setAttribute(u, l))
                    }
                    break
                }
            }
    }
}
function lc(t, e) {
    return Gt(t, e.excludeSelectors || []) ? Gt(t, e.selectors || []) ? !1 : !Gt(t, e.stayOriginalSelectors || []) : !1
}
function uc(t, e) {
    if (e.length === 0)
        return !1;
    let n = e.filter(r=>!r.endsWith("*")).map(r=>r + " *");
    return Gt(t, e.concat(n))
}
function NA(t, e, n, r) {
    let a = document.createTreeWalker(t, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, i=>i.nodeType === Node.ELEMENT_NODE && lc(i, {
        excludeSelectors: r.excludeSelectors,
        selectors: r.selectors,
        stayOriginalSelectors: r.stayOriginalSelectors
    }) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT);
    for (; a.nextNode(); ) {
        let i = a.currentNode;
        if (i.nodeType === Node.TEXT_NODE && parent) {
            let o = i.textContent || "";
            if (o.includes("Copyright"))
                continue;
            if (Ni(o, e, n))
                return !0
        }
    }
    return !1
}
