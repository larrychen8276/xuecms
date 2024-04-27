
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
