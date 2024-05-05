var ar = !1, nd, v9 = !1, rd = null;
function nf(t) {
    let {config: e} = t;
    if (t.isInputTranslationExcludeUrl) {
        B.debug("exclude url for input");
        return
    }
    if (rd === !1) {
        B.debug("disable for this time");
        return
    }
    let n = {
        ...e.inputLanguageCodeAlias
    };
    kn.forEach(c=>n[c] = [c, ...n[c] || []]);
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
        , o = 0
        , s = Date.now();
    nd && self.removeEventListener("keydown", nd),
        nd = u,
        self.addEventListener("keydown", nd);
    function u(c) {
        if (ar || rd === !1)
            return;
        let p = c
            , m = p.target || p.srcElement
            , g = m?.tagName;
        (m?.isContentEditable || g == "INPUT" || g == "SELECT" || g == "TEXTAREA") && (A7(c, i.triggerKey, i.codePrefixAlias) ? l(c) : o = 0)
    }
    async function l(c) {
        Date.now() - s < i.triggerTimeout ? o++ : o = 1,
            B.debug(i.triggerKey, o, i.triggerTimeout, "'" + Da(document.activeElement) + "'"),
            s = Date.now(),
        o >= i.triggerTimes && h7() && (o = 0,
            f7(c, t, i))
    }
    k7(t)
}

function x9({codePrefix: t, flatAlias: e, codePrefixAlias: n}) {
    let r = []
        , a = n[t] || [];
    a.includes(t) || a.unshift(t);
    for (let i of a) {
        let o = e.map(s=>{
                let u = i + s;
                return a.includes(s) || (u += " "),
                    u
            }
        );
        r.push(...o)
    }
    return new RegExp(r.join("|"))
}
function ad(t, e) {
    for (let[n,r] of Object.entries(e))
        if (r.includes(t))
            return n;
    return ""
}


var Eo;
function E9(t) {
    let e = t.parentElement;
    if (!e)
        return;
    Eo = document.createElement("div"),
        Eo.className = Q + "-input",
        Eo.innerHTML = `<div class="${Q}-input-loading"/>`,
        e.appendChild(Eo);
    let n = e
        , r = !1;
    do {
        let a = getComputedStyle(n).position;
        if (["fixed", "absolute", "relative"].includes(a)) {
            r = !0;
            break
        }
        n = n.parentElement
    } while (n);
    if (n = e,
        !r)
        do {
            if (getComputedStyle(n).position === "static") {
                n.style.position = "relative";
                break
            }
            n = n?.parentElement || null
        } while (n)
}
function C9() {
    Eo && Eo.remove()
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

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

async function f7(t, e, n) {
    if (!ar)
        try {
            let p = function() {
                s = e.config.inputTargetLanguage;
                let g = o.split(" ")[0];
                g && g[0] && (g = g[0].toLowerCase() + g.slice(1)),
                    g.trim() && n.flatAlias.includes(g) ? (s = ad(g, n.codeAlias),
                        i = o.slice(g.length + 1)) : i = o
            }
                , m = function() {
                s = "";
                let g = x9(n)
                    , f = o.split(g);
                if (f.length < 2)
                    return;
                if (i = f[f.length - 1],
                    a = f[0],
                f.length > 2) {
                    let b = o.lastIndexOf(i)
                        , h = o.slice(0, b).lastIndexOf(f[f.length - 2]);
                    a = o.slice(0, h + f[f.length - 2].length)
                }
                if (a.endsWith(n.codePrefix))
                    return;
                if (a.endsWith(":") && n.codePrefix == "/") {
                    a = "",
                        i = "";
                    return
                }
                let T = o.slice(a.length + 1, o.indexOf(i)).trim();
                if (s = ad(T, n.codeAlias),
                    !s) {
                    B.warn("not found alias", T);
                    return
                }
            }
                , r = document.activeElement;
            ar = !0;
            let a = ""
                , i = ""
                , o = Da(r) || ""
                , s = e.config.inputTargetLanguage;
            n.codePrefix === "none" ? p() : (m(),
            !s && e.config.enableInputTranslationWithoutTriggerKey && p());
            let u = w9(i, n)
                , l = await Ie({
                text: u,
                pageLangs: ["en"]
            });
            B.debug("translateContent", u, l);
            let c = {
                text: u || "",
                id: 0,
                from: l,
                to: s,
                url: "https://google.com",
                fromByClient: l,
                force: !0
            };
            if (!c.text)
                return;
            if (e.config.isShowInputTranslationConsent && !v9) {
                v9 = !0;
                let g = await P7(e);
                if (t.target && t.target.focus(),
                g === "open_settings") {
                    Bi(!0, "#input");
                    return
                } else if (g === "open_learn_more") {
                    Ri("https://immersivetranslate.com/docs/input/");
                    return
                } else if (g === "disable_once" || g === "disable_forever") {
                    if (rd = !1,
                    g === "disable_forever") {
                        let f = await fn();
                        f.enableInputTranslation = !1,
                            f.isShowInputTranslationConsent = !1,
                            await mn(f)
                    } else if (g === "disable_once") {
                        let f = await fn();
                        f.isShowInputTranslationConsent = !1,
                            await mn(f)
                    }
                    return
                } else if (g === "close_disable_once" || g === "close_disable_forever") {
                    if (rd = !1,
                    g === "close_disable_forever") {
                        let f = await fn();
                        f.enableInputTranslation = !1,
                            f.isShowInputTranslationConsent = !1,
                            await mn(f)
                    }
                    return
                } else if (g === "enable") {
                    let f = await fn();
                    f.enableInputTranslation = !0,
                        f.isShowInputTranslationConsent = !1,
                        await mn(f)
                } else if (g === "close_enable") {
                    let f = await fn();
                    f.enableInputTranslation = !0,
                        await mn(f)
                }
            }
            E9(r),
                et(Gu, Date.now());
            try {
                let g = await ma(c, {
                    ...e,
                    translationService: e.inputTranslationService
                });
                A9(e),
                    D9(e, r, a + g.text)
            } catch (g) {
                if (g instanceof V) {
                    let f = g.uiConfig(e);
                    f.action == "retry" && (f.action = "none"),
                        document.dispatchEvent(new CustomEvent(qa,{
                            detail: f
                        }))
                }
            } finally {
                ar = !1
            }
        } catch (r) {
            throw ar = !1,
                r
        } finally {
            ar = !1,
                C9()
        }
}
function h7() {
    let t = document.activeElement;
    if (!t)
        return !1;
    if (id(t)) {
        let e = t.selectionStart || 0
            , n = t.value.length
            , a = t.value.split(`
`).reverse()[0].trim()
            , i = n <= e;
        return B.debug("cursorPosition", e, "textLength", n),
            B.debug("input isTail", i, "tailHasText", a),
        i && !!a
    } else {
        let e = window.getSelection();
        if (!e)
            return B.debug("No active selection found."),
                !1;
        if (e.rangeCount > 0) {
            let n = e.getRangeAt(0)
                , r = n.startContainer;
            if (r.nodeType === Node.TEXT_NODE) {
                let a = b7(r, t);
                B.debug("Current text node:", r.textContent),
                    B.debug("Cursor position within text node:", n.startOffset);
                let i = r.textContent?.length === n.startOffset && a
                    , o = t.innerText?.split(`
`).reverse()
                    , s = tt() ? o[0] || o[1] : o[0];
                return B.debug("editdiv isTail", i, "tailHasText", s),
                i && !!s
            } else
                B.debug("Cursor is not within a text node.")
        }
    }
    return !1
}
function b7(t, e) {
    let n;
    function r(a) {
        if (a.nodeType === Node.TEXT_NODE)
            n = a;
        else
            for (let i of a.childNodes)
                r(i)
    }
    return r(e),
    n == t
}
function w9(t, e) {
    let {triggerTimes: n, triggerKey: r} = e
        , a = 0
        , i = " ";
    r.length == 1 ? (a = n,
        i = r) : r.toLowerCase() == "space" && (a = n);
    let o = t.length;
    for (let s = t.length - 1; s >= t.length - a; s--) {
        if ([10, 8629].includes(t[s].charCodeAt(0))) {
            o--;
            continue
        }
        if (![...e.codePrefixAlias[r] || [], i].includes(t[s]))
            break;
        o--
    }
    return t.length - o < 3 && [".", "\u3002"].includes(t[o - 1]) && o--,
        t.slice(0, o)
}
function T7(t, e) {
    let n = e.innerHTML
        , r = Da(e);
    return {
        html: n.replace(r, t),
        text: t
    }
}
function S9(t, e, n=!1) {
    let r = Da(e);
    return n ? r.trim().endsWith(t.text.trim()) : r?.trim()?.indexOf(t?.text?.trim()) >= 0
}
function Da(t) {
    return t.value || t.innerText || t.textContent
}
async function Aa(t) {
    await new Promise((e,n)=>{
            setTimeout(()=>{
                    e("")
                }
                , t)
        }
    )
}
async function y7(t, e, n) {
    await Aa(10);
    let r = new DataTransfer;
    t.forEach(a=>{
            a === "plain" && r.setData("text/plain", e.text)
        }
    ),
        n.dispatchEvent(new ClipboardEvent("paste",{
            clipboardData: r,
            bubbles: !0,
            cancelable: !0
        })),
        r.clearData(),
        await Aa(10)
}
async function v7(t, e) {
    let n = document.createEvent("TextEvent");
    n.initTextEvent && (n.initTextEvent("textInput", !0, !0, window, t.text),
        e.dispatchEvent(n),
        await Aa(10))
}
async function S7(t, e) {
    e.value && e.select(),
        document.execCommand("insertText", !1, t.text.replace(/\n/g, "\r")),
        await Aa(20),
    (e.value || e.value === "") && (e.value = t.text)
}
async function x7(t, e) {
    id(e) && (e.value = t.text,
        e.dispatchEvent(new Event("input",{
            bubbles: !0
        })),
        await Aa(20))
}
var E7 = [y7.bind(null, ["plain"])];
function C7(t) {
    let e;
    id(t) ? e = new InputEvent("beforeinput",{
        bubbles: !0,
        cancelable: !0,
        inputType: "deleteContent"
    }) : e = new KeyboardEvent("keydown",{
        bubbles: !0,
        cancelable: !0,
        keyCode: 8,
        which: 8,
        location: 0,
        key: "Backspace"
    }),
        t.dispatchEvent(e)
}
function id(t) {
    return t.tagName === "INPUT" || t.tagName === "TEXTAREA"
}
function w7(t) {
    if (id(t))
        return;
    t.focus();
    let e = window.getSelection();
    if (!e)
        return;
    let n = document.createRange();
    n.selectNodeContents(t),
        e.removeAllRanges(),
        e.addRange(n)
}

async function D9(t, e, n) {
    await w7(e),
        await Aa(50);
    let r = t.rule.inputConfig
        , a = T7(n, e);
    try {
        r?.clearContentEnable && C7(e),
            await Aa(50),
        r?.execCommandDeleteEnable && !Ir() && Da(e)?.trim() != "" && (document.execCommand("delete"),
            await Aa(50)),
            B.debug("clearContent", Da(e))
    } catch (i) {
        B.error(i)
    }
    for (let i of [...E7, S7, x7, v7]) {
        await i(a, e);
        let o = D7();
        if (!o)
            return;
        if (B.debug("setContent", i.name, S9(a, o), Da(o), a),
            S9(a, o))
            break
    }
}
function D7() {
    return document.activeElement
}
function A9(t) {
    ot("translate_input", [{
        name: "translate_input",
        params: {
            input_trailing_trigger_key: t.config.inputTrailingTriggerKey,
            input_starting_trigger_key: t.config.inputStartingTriggerKey,
            input_target_language: t.config.inputTargetLanguage
        }
    }], t)
}
function A7(t, e, n) {
    let r = "";
    t && t.code && (r = t.code.toLowerCase());
    let a = "";
    t && t.key && (a = t.key.toLowerCase());
    let i = t.keyCode
        , o = n[e] || [];
    return i === 229 && e !== "space" ? !1 : !!(o.includes(r) || o.includes(a) || r === e || a === e)
}
async function k7(t) {
    if (t.config.interfaceLanguage !== "zh-CN" || t.config.targetLanguage !== "zh-CN")
        return;
    let e = "inputTutorialsShowedAt";
    if (await At(e, "") || Number(await At(Gu, 0)) > 0)
        return;
    let a = t.rule.inputConfig
        , i = a.tutorialsSelectors
        , o = a.tutorialsText;
    if ((i?.length || 0) > 0 && o)
        for (let s = 0; s < i.length; s++) {
            let u = document.querySelector(i[s]);
            if (!u)
                return;
            let l = o;
            u.setAttribute("placeholder", l),
                await et(e, new Date().toISOString())
        }
}

function P7(t) {
    let e = `${Q}-modal-input-root`, n = `${Q}-modal`, r = `${Q}-modal-title`, a = `${Q}-modal-body`, i = `${Q}-modal-footer`, o = document.querySelector(`#${e}`), s, u, l, c;
    return setTimeout(()=>{
            L7()
        }
        , 100),
        new Promise(p=>{
                let m = p;
                if (o) {
                    let A = o.shadowRoot;
                    if (!A)
                        return;
                    s = A.querySelector(`.${n}`);
                    let y = s.querySelector(`.${r}`)
                        , R = s.querySelector(`.${i}`)
                        , _ = s.querySelector(`.${a}`)
                } else {
                    let A = document.createElement("div");
                    A.setAttribute("translate", "no"),
                        A.className = "no-translate immersive-translate-error-modal-input-shadow-root",
                        A.id = e,
                        A.style.all = "initial",
                        A.style.zIndex = "2147483647",
                        document.body.appendChild(A);
                    let y = A.attachShadow({
                            mode: "open"
                        })
                        , R = document.createElement("style")
                        // , _ = Me();
                        , _ = x;

                    debugger;

                    let immersive_translate_input_injectedContent = oe.runtime.getURL("/contentscript/css/immersive_translate_input_injected.css")

                    // R.textContent = _.IMMERSIVE_TRANSLATE_INPUT_INJECTED_CSS,
                    R.textContent = immersive_translate_input_injectedContent,
                        y.appendChild(R),
                        s = document.createElement("div"),
                        s.className = n + " notranslate",
                        s.id = n;
                    let P = document.createElement("div");
                    P.className = Q + "-modal-content notranslate " + Q + "-modal-content-in-input",
                        s.appendChild(P);
                    let N = document.createElement("span");
                    N.textContent = "\xD7",
                        N.className = Q + "-close",
                        P.appendChild(N),
                        u = document.createElement("div"),
                        u.className = r + " notranslate",
                        P.appendChild(u),
                        c = document.createElement("div"),
                        c.className = a + " notranslate",
                        P.appendChild(c),
                        l = document.createElement("div"),
                        l.className = i,
                        P.appendChild(l),
                        y.appendChild(s),
                        N.onclick = function() {
                            I(),
                                p("close")
                        }
                        ,
                        y.addEventListener("click", z=>{
                                z.target == s && (s.style.display = "none",
                                    p("close"))
                            }
                        )
                }
                document.addEventListener("keydown", k);
                let g = kt.bind(null, t);
                u.innerHTML = `<div style="display:flex;align-items: center;">${vc}</span>&nbsp;${g("modalEnableInputTranslationTitle")}</div>`,
                    c.innerHTML = "";
                let f = document.createElement("p");
                f.innerHTML = g("modalEnableInputTranslationDesc", {
                    1: "https://immersivetranslate.com/docs/input/"
                }),
                    f.style.cssText = "margin-bottom:12px",
                    c.appendChild(f);
                let T = document.createElement("div");

                debugger;

                T.style.cssText = "margin-bottom: 12px;",
                    T.innerHTML = DOMPurify.sanitize(g("disableInputTranslationTips", {
                        option: `<span class="${Q}-open-input-translation-settings ${Q}-link" style="color:#006aff!important">${g("option")}</span>`,
                        learnMore: `<span class="${Q}-open-input-translation-docs ${Q}-link" style="color:#006aff!important">${g("learnMore")}</span>`
                    })),
                    c.appendChild(T);
                let b = [{
                    id: "enable-search-enhancement",
                    value: "enable",
                    text: g("continueEnalbeInputTranslation")
                }, {
                    id: "disable-once",
                    value: "once",
                    text: g("disableOnce")
                }, {
                    id: "disable-global",
                    value: "global",
                    text: g("disableGlobal")
                }];
                for (let A = 0; A < b.length; A++) {
                    let y = document.createElement("input");
                    y.type = "radio",
                        y.id = b[A].id,
                        y.name = "option",
                        y.value = b[A].value,
                    A === 0 && (y.checked = !0);
                    let R = document.createElement("div");
                    R.style.cssText = "margin-bottom: 6px;display:flex;align-items:center;";
                    let _ = document.createElement("label");
                    _.htmlFor = b[A].id,
                        _.appendChild(document.createTextNode(b[A].text)),
                        R.appendChild(y),
                        R.appendChild(_),
                        c.appendChild(R)
                }
                let h = c.querySelector(`.${Q}-open-input-translation-settings`);
                h && (h.onclick = function() {
                        m("open_settings")
                    }
                );
                let E = c.querySelector(`.${Q}-open-input-translation-docs`);
                E && (E.onclick = function() {
                        m("open_learn_more")
                    }
                );
                let D = document.createElement("button");
                D.innerText = g("closeModal"),
                    D.className = `${Q}-btn ${Q}-cancel-btn`;
                let M = document.createElement("button");
                M.className = `${Q}-btn`,
                    M.innerText = g("saveAndNotShowAgain"),
                    l.innerHTML = "",
                    l.appendChild(D),
                    l.appendChild(M),
                    D.onclick = S;
                function I() {
                    document.removeEventListener("keydown", k),
                        s.style.display = "none",
                        o.style.display = "none"
                }
                function S() {
                    let A = c.getElementsByTagName("input")
                        , y = "";
                    for (let R = 0; R < A.length; R++)
                        if (A[R].checked) {
                            y = A[R].value;
                            break
                        }
                    y === "once" ? (m("close_disable_once"),
                        ot("disable_input_translation_once", [{
                            name: "disable_input_translation_once"
                        }], {
                            ...t,
                            sourceLanguage: "input_translation"
                        })) : y == "global" ? (m("close_disable_forever"),
                        ot("disable_input_translation_forevery", [{
                            name: "disable_input_translation_forevery"
                        }], {
                            ...t,
                            sourceLanguage: "input_translation"
                        })) : y == "enable" && (m("close_enable"),
                        ot("still_use_input_translation", [{
                            name: "still_use_input_translation"
                        }], {
                            ...t,
                            sourceLanguage: "input_translation"
                        })),
                        I()
                }
                M.onclick = v;
                function v() {
                    let A = c.getElementsByTagName("input")
                        , y = "";
                    for (let R = 0; R < A.length; R++)
                        if (A[R].checked) {
                            y = A[R].value;
                            break
                        }
                    y === "once" ? (m("disable_once"),
                        ot("disable_input_translation_once", [{
                            name: "disable_input_translation_once"
                        }], {
                            ...t,
                            sourceLanguage: "input_translation"
                        })) : y == "global" ? (m("disable_forever"),
                        ot("disable_input_translation_forevery", [{
                            name: "disable_input_translation_forevery"
                        }], {
                            ...t,
                            sourceLanguage: "input_translation"
                        })) : y == "enable" && (m("enable"),
                        ot("still_use_input_translation", [{
                            name: "still_use_input_translation"
                        }], {
                            ...t,
                            sourceLanguage: "input_translation"
                        })),
                        I()
                }
                function k(A) {
                    let y = A;
                    y.keyCode === 27 ? S() : y.keyCode === 13 && v()
                }
            }
        )
}
function L7() {
    let t = document.querySelector("#immersive-translate-modal-input-root");
    if (t && (t.style.display = "block",
        t.shadowRoot)) {
        let e = t.shadowRoot.querySelector(`#${Q}-modal`);
        e && (e.style.display = "block")
    }
}

N3({
    translateInputBoxWithShortcut: m7
});
