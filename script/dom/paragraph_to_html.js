function Fp(t, e, n=[], r) {
    let a = ["notranslate"];
    return r && a.push(lb),
    t && (a.push(`${Q}-target-translation-theme-${t}`),
        e ? a.push(`${j0}-theme-${t}`) : a.push(`${q0}-theme-${t}`)),
    n.length > 0 && a.push(...n),
        e ? a.push(j0) : a.push(q0),
        a
}
function Mp(t) {
    let e = ["notranslate", Qu];
    return t && e.push(`${Q}-target-translation-theme-${t}-inner`),
        e
}
function a2(t, e, n) {
    let {rule: r, state: a} = n
        , {translationTheme: i} = a
        , {variables: o, isVertical: s} = t;
    o = o || [];
    let {text: u} = e
        , {wrapperPrefix: l, wrapperSuffix: c} = r
        , p = $a(n, !0)
        , m = "afterend"
        , g = p[0]
        , f = p[1]
        , T = `${g}(\\d+)${f}`
        , b = new RegExp(T,"g")
        , h = DOMPurify.sanitize(u);
    o.length > 0 && (h = h.replace(b, I=>{
            let S = h.indexOf(I)
                , v = h[S - 1] === " "
                , k = h[S + I.length] === " "
                , y = I.replace(new RegExp(p[0],"g"), "").replace(new RegExp(p[1],"g"), "")
                , R = Number(y);
            if (isNaN(R))
                return I;
            let _ = o[R];
            if (_ && _.type === "element") {
                let P = _.value.outerHTML;
                return v || (P = " " + P),
                k || (P = P + " "),
                    P
            } else
                B.error("variable type not supported", _, I);
            return I
        }
    ));
    let E = Fp(i, t.inline, r.translationClasses || [], t.preWhitespace);
    s && E.push(ub);
    let D = Mp(i)
        , M = "";
    return r.translationBlockStyle && (M = `style="${r.translationBlockStyle}"`),
        h = `<${n.rule.targetWrapperTag} ${M} class="${E.join(" ")}" ${dr}="1"><${r.targetWrapperTag} class="${D.join(" ")}" ${dr}="1">${h}</${r.targetWrapperTag}></${r.targetWrapperTag}>`,
    t.inline || (l === "smart" ? h = `<br />${h}` : h = `${l}${h}`),
    t.inline && (l !== "smart" ? h = `${l}${h}` : h = `<${r.targetWrapperTag} class="notranslate" ${dr}="1">&#160;</${r.targetWrapperTag}>${h}`),
        c === "smart" ? h = `${h}` : h = `${h}${c}`,
        {
            html: h,
            position: m
        }
}

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
