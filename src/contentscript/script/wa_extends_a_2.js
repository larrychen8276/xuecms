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

function cT(t, e) {
    if (!t.rule.bodyRule.articleSelector || e.nodeType !== Node.ELEMENT_NODE)
        return;
    let n = e.querySelector(t.rule.bodyRule.articleSelector);
    n && (t.articleNode != n && B.debug("update article node", n),
        t.articleNode = n)
}
function xg(t, e) {
    return e && t?.contains(e) || !1
}
function LA(t, e) {
    let a = new DOMParser().parseFromString(t, "text/html").querySelectorAll("#readability-page-1 > div");
    if (a.length <= 0)
        return null;
    let i = _A(a[0])
        , o = document.querySelector(i);
    return !o || (a.length > 1 && (o = o.parentElement),
    o == document.documentElement) ? null : (o?.textContent?.length || 0) >= e.length && e.length >= 500 ? o : null
}
function _A(t) {
    let e = t.tagName.toLowerCase();
    t.id && (e += "#" + t.id),
    t.className && (e += "." + t.className.trim().split(/\s+/).join("."));
    let n = Array.from(t.attributes).filter(r=>!["id", "class", "style"].includes(r.name)).map(r=>`[${r.name}="${r.value}"]`).join("");
    return e + n
}
function dT(t, e) {
    if (e.nodeType != Node.ELEMENT_NODE)
        return null;
    let n = null
        , r = Array.from(e.childNodes);
    if (r.filter(i=>t.articleChildTags.includes(i.nodeName)).length >= t.articleChildTagsNum)
        return e;
    for (let i = 0; i < r.length; i++) {
        let o = r[i];
        if (n = dT(t, o),
            n)
            return n
    }
    return null
}

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

function pT(t, e) {
    let n = !1;
    (e.nodeType === Node.ELEMENT_NODE || e.nodeType === Node.DOCUMENT_FRAGMENT_NODE) && (n = Va(e));
    let r = IA(t)
        , a = !0;
    return !n && !r && (t.commonAncestorContainer && t.commonAncestorContainer.contains(e) ? a = !0 : t.commonAncestorContainer && (a = !1,
        t._currentStacks = [])),
        a
}
function MA(t) {
    let {isTransformPreTagNewLine: e} = t;
    return t.excludeSelectors = t.excludeSelectors.filter(n=>{
            let r = n !== "iframe";
            return e ? r && n !== "pre" : r
        }
    ),
        t
}

function BA(t, e, n) {
    if (e) {
        for (let r of e.childNodes)
            if (r.contains(n))
                return r
    }
    return t._currentStacks.length > 0 ? (t.commonAncestorContainer || (t.commonAncestorContainer = t._currentStacks[0]),
        t._currentStacks[0]) : null
}

function wg(t, e) {
    if (e) {
        let n = Object.keys(e);
        if (n.length > 0 && Gt(t, n))
            for (let a of n) {
                let i = e[a];
                if (t.matches(a)) {
                    let o = t.style.cssText || "";
                    o && (o = o.trim()),
                    o && !o.endsWith(";") && (o += ";"),
                        t.style.cssText = o + i;
                    break
                }
            }
    }
}

function IA(t) {
    return t && t._currentStacks ? t._currentStacks.some(e=>Va(e)) : !1
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////
