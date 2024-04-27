
function L3(t, e, n) {
    let r = sD(t, e)
        , a = []
        , i = {
        from: t[0].from,
        fromByClient: t[0].fromByClient,
        to: t[0].to,
        tempSentences: [],
        url: t[0].url
    };
    for (let o of r)
        (i.tempSentences.reduce((u,l)=>u + l.text.length, 0) + o.text.length > e || i.tempSentences.length >= n) && (a.push(i),
            i = {
                fromByClient: i.fromByClient,
                from: o.from,
                to: o.to,
                tempSentences: [],
                url: o.url
            }),
        (i.from !== o.from || i.to !== o.to) && (i.tempSentences.length > 0 ? (a.push(i),
            i = {
                fromByClient: i.fromByClient,
                from: o.from,
                to: o.to,
                tempSentences: [],
                url: o.url
            }) : (i.from = o.from,
            i.to = o.to)),
            i.tempSentences.push(o);
    return i.tempSentences.length > 0 && a.push(i),
        a
}
function sD(t, e) {
    let n = []
        , r = [];
    for (let a = 0; a < t.length; a++) {
        let i = t[a]
            , {from: o, to: s, text: u, url: l, xpath: c} = i
            , p = 0
            , m = u.split(/\r?\n/)
            , g = []
            , f = "";
        for (let T = 0; T < m.length; T++) {
            let b = m[T];
            if (b.trim() === "") {
                g.length > 0 ? T < m.length - 1 && (g[g.length - 1].suffix += `
`) : f += `
`;
                continue
            } else if (b.length > e) {
                let E = [];
                gp(b, e, E);
                for (let D = 0; D < E.length; D++) {
                    let M = E[D]
                        , {text: I, prefix: S, suffix: v} = M;
                    p++,
                        g.push({
                            from: o,
                            to: s,
                            text: I,
                            prefix: S,
                            suffix: v,
                            index: a,
                            url: l,
                            sentenceTotalParts: p,
                            partIndex: p - 1,
                            xpath: c,
                            force: i.force || !1
                        }),
                        r[a] = p
                }
            } else
                p++,
                    g.push({
                        text: b,
                        prefix: f,
                        suffix: "",
                        from: o,
                        to: s,
                        index: a,
                        url: l,
                        sentenceTotalParts: p,
                        partIndex: p - 1,
                        xpath: c,
                        force: i.force || !1
                    }),
                    r[a] = p;
            g.length > 0 && T < m.length - 1 && (g[g.length - 1].suffix += `
`)
        }
        n.push(...g)
    }
    for (let a = 0; a < n.length; a++) {
        let i = n[a]
            , {index: o} = i;
        i.sentenceTotalParts = r[o]
    }
    return n
}
function na(t, e, n) {
    let {ignoreZhCNandZhTW: r} = n
        , a = he(t)
        , i = he(e)
        , o = a === i;
    return o ? !0 : (r === !0 && (o = a.startsWith("zh") && i.startsWith("zh")),
        o)
}
function gp(t, e, n) {
    let a = [".", "?", "!", "\u3002", "\uFF1F", "\uFF01"].reduce((i,o)=>{
            let s = t.lastIndexOf(o, e);
            return s > i ? s : i
        }
        , -1);
    if (a === -1) {
        let i = t.slice(0, e);
        if (i && !i.trim())
            return;
        n.push({
            text: i,
            prefix: "",
            suffix: ""
        }),
        t.length > e && gp(t.slice(e), e, n)
    } else {
        let i = t.slice(0, a + 1);
        if (i && i.trim() === "")
            return;
        i.startsWith(" ") ? n.push({
            text: i.slice(1),
            prefix: " ",
            suffix: ""
        }) : n.push({
            text: i,
            prefix: "",
            suffix: ""
        }),
        a + 1 < t.length && gp(t.slice(a + 1), e, n)
    }
    return n
}
function qt(t, e) {
    let n = new URL(t);
    e.startsWith("http") || (e = "https://" + e);
    let r = new URL(e);
    return r.pathname !== "/" ? r.toString() : (n.host = r.host,
    r.port && (n.port = r.port),
    r.protocol && (n.protocol = r.protocol),
    r.username && (n.username = r.username),
    r.password && (n.password = r.password),
        n.toString())
}
function vl(t, e, n) {
    let r = e === "inherit" ? n.config.translationService : e
        , a = gr[r]
        , i = n.config.translationServices[r] || {}
        , o = n.user
        , s = Jt(o)
        , u = !0
        , l = i.provider || ""
        , c = a.providers || []
        , p = a.allProps || []
        , m = []
        , g = [];
    if (s || l === "pro" && (u = !1),
    p.length > 0) {
        p.forEach(T=>{
                c.length > 0 && T.providers && T.providers.length > 0 && !T.providers.includes(l) || (T.optional ? g.push(T) : m.push(T))
            }
        );
        let f = g.concat(m).filter(T=>T.required);
        if (f.length > 0) {
            for (let T of f)
                if (!i[T.name]) {
                    u = !1;
                    break
                }
        }
    }
    return {
        ...a,
        id: e,
        selected: n[t] === e,
        ok: u,
        currentProvider: l,
        config: i,
        providers: a.providers || [],
        props: a.props || [],
        allProps: p,
        optionalProps: g,
        explicitProps: m
    }
}


var gs = (t,e)=>{
        let {config: n} = t
            , r = n.alpha
            , a = n.beta
            , i = n.canary
            , o = n.debug
            , s = t.user
            , u = Jt(s)
            , l = Object.keys(gr);
        return e !== "translationService" && l.unshift("inherit"),
            l.filter(c=>{
                    if (c === "inherit")
                        return !0;
                    let p = gr[c];
                    if (c.startsWith("mock"))
                        return o ? !0 : c === t.config[e];
                    if (c === t.config[e])
                        return !0;
                    if (c === "openai" && tt())
                        return t.config.showOpenaiOnSafari || u ? !0 : !!(a || r || i || u);
                    let m = !!p.canary
                        , g = !!p.alpha
                        , f = !!p.beta;
                    return c === t[e] || m && i || g && (r || i) || f && (a || r || i) ? !0 : !g && !f && !m
                }
            ).map(c=>vl(e, c, t))
    }
;
function ms() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, t=>(t ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> t / 4).toString(16))
}
