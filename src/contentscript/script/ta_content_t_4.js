"use strict";

function y2() {
    let t = new Date;
    return t.setMinutes(t.getMinutes() - t.getMinutes() % 5),
        t.setSeconds(0),
        t.setMilliseconds(0),
        `https://google.com/search?q=google&_t=${t.getTime() / 1e3}`
}


function P2(t) {
    let e = t.split(`
`), n = [], r, a = "", i = "";
    for (let o of e) {
        o.startsWith("- ") && (o = o.slice(1),
        r && n.push(r),
            r = {},
            a = "",
            i = "");
        let s = o.trim().split(/[:：]/).map(l=>l.trim()).filter(l=>!!l);
        if (s.length >= 2 && !/\S\s\S/.test(s[0])) {
            let l = o.slice(o.indexOf(s[1])).trim();
            l ? (a = s[0],
                l == "|-" ? i = "" : i = l) : i += `
` + o
        } else
            i += `
` + o;
        if (!a)
            continue;
        r || (r = {});
        let u = Number(i);
        r[a] = Number.isNaN(u) ? i : Number(i)
    }
    return r && n.push(r),
        Object.values(n).forEach(o=>{
                Object.entries(o).forEach(([s,u])=>{
                        if (typeof u == "string") {
                            let l = u.trim();
                            l?.startsWith('"') && l?.endsWith('"') ? o[s] = l.slice(1, -1) : o[s] = l
                        }
                    }
                )
            }
        ),
        n
}

function oA(t, e) {
    return !t.includes(".") && !t.includes("\u3002") && (e.endsWith("\u3002") || e.endsWith(".")) ? e.slice(0, -1) : e
}

/////////////////////////////////////////////////////////////////////////////////////


var nc = new Map;
async function ug(t) {
    let e = t.url;
    if (t.method && (e += t.method),
    t.body && (e += Ln(t.body)),
        nc.has(e))
        return nc.get(e);
    let n = ce(t);
    nc.set(e, n);
    try {
        return await n
    } catch (r) {
        throw r
    } finally {
        setTimeout(()=>{
                nc.delete(e)
            }
            , 3e3)
    }
}
async function K2(t) {
    return ug(t)
}


async function ac(t) {
    await np(t)
}
async function ic(t, e) {
    let n = await X0(t);
    if (n?.accessToken && n?.accessTokenExpiresAt) {
        let r = Date.now()
            , i = new Date(n.accessTokenExpiresAt).getTime();
        if (i - r > 30 * 1e3)
            return n;
        if (i - r > 3e3)
            return $2(t, e)
    }
    return $2(t, e)
}
async function $2(t, e) {
    let n = await e()
        , r = n.accessTokenExpiresAt
        , i = new Date(r).getTime() - Date.now();
    return await ep(t, n, i - 1e3),
        n
}


function yA(t) {
    let e = Math.floor(Math.random() * t.length);
    return t[e]
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////

function wy({config: t, isLogin: e, isProUser: n}) {
    let {t: r} = Ce();
    return pl(t) ? w("div", {}) : w("div", {
        class: "flex items-center",
        children: [w("a", {
            class: "flex items-center text-decoration-none",
            target: "_blank",
            href: e ? Xu : yb,
            children: [w("img", {
                src: e ? WT : HT
            }), w("span", {
                class: "text-xs ml-2 text-label",
                children: r(e ? "loggedIn" : "notLogin")
            })]
        }), w("a", {
            title: r(n ? "popup.openProForPro" : "popup.openPro"),
            target: "_blank",
            class: "ml-2",
            href: n ? Xu : vb,
            children: w("img", {
                src: n ? qT : jT
            })
        })]
    })
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

var Sy = `${Q}-float-ball`;
function ya(t) {
    return t.type == "logo" ? w("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
        class: `${Sy}-logo-img`,
        children: [w("path", {
            fill: "none",
            d: "M0 0h24v24H0z"
        }), w("path", {
            d: "M5 15v2a2 2 0 0 0 1.85 1.995L7 19h3v2H7a4 4 0 0 1-4-4v-2h2zm13-5l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16 10h2zm-1 2.885L15.753 16h2.492L17 12.885zM8 2v2h4v7H8v3H6v-3H2V4h4V2h2zm9 1a4 4 0 0 1 4 4v2h-2V7a2 2 0 0 0-2-2h-3V3h3zM6 6H4v3h2V6zm4 0H8v3h2V6z",
            fill: "rgba(255,255,255,1)"
        })]
    }) : t.type == "close" ? w("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [w("g", {
            "clip-path": "url(#clip0_2589_9951)",
            children: w("path", {
                d: "M7 14C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM4.183 5.064L6.118 7L4.183 8.936C4.12409 8.99361 4.07719 9.06234 4.04502 9.1382C4.01285 9.21406 3.99605 9.29554 3.99559 9.37794C3.99513 9.46034 4.01101 9.54201 4.04234 9.61823C4.07366 9.69444 4.11978 9.76369 4.17805 9.82195C4.23631 9.88022 4.30556 9.92634 4.38177 9.95766C4.45799 9.98898 4.53966 10.0049 4.62206 10.0044C4.70446 10.004 4.78594 9.98715 4.8618 9.95498C4.93766 9.92281 5.00639 9.87591 5.064 9.817L7 7.882L8.936 9.817C9.05327 9.93168 9.21104 9.99548 9.37506 9.99457C9.53908 9.99365 9.69612 9.92809 9.8121 9.8121C9.92809 9.69612 9.99365 9.53908 9.99457 9.37506C9.99548 9.21104 9.93168 9.05327 9.817 8.936L7.882 7L9.817 5.064C9.87591 5.00639 9.92281 4.93766 9.95498 4.8618C9.98715 4.78594 10.004 4.70446 10.0044 4.62206C10.0049 4.53966 9.98898 4.45799 9.95766 4.38177C9.92634 4.30556 9.88022 4.23631 9.82195 4.17805C9.76369 4.11978 9.69444 4.07366 9.61823 4.04234C9.54201 4.01101 9.46034 3.99513 9.37794 3.99559C9.29554 3.99605 9.21406 4.01285 9.1382 4.04502C9.06234 4.07719 8.99361 4.12409 8.936 4.183L7 6.118L5.064 4.183C4.94673 4.06832 4.78896 4.00452 4.62494 4.00543C4.46092 4.00635 4.30388 4.07191 4.1879 4.1879C4.07191 4.30388 4.00635 4.46092 4.00543 4.62494C4.00452 4.78896 4.06832 4.94673 4.183 5.064Z",
                fill: "#B1B1B1",
                "fill-opacity": "0.32"
            })
        }), w("defs", {
            children: w("clipPath", {
                id: "clip0_2589_9951",
                children: w("rect", {
                    width: "14",
                    height: "14",
                    fill: "white"
                })
            })
        })]
    }) : t.type == "setting" ? w("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: w("path", {
            d: "M6.55741 0L9.06847 0.00329403C9.84824 0.00470579 10.4802 0.636235 10.4812 1.41647L10.4821 1.82588C10.9687 2.0278 11.4297 2.28671 11.8553 2.59718L12.1913 2.40329C12.516 2.21676 12.9013 2.1665 13.2629 2.26352C13.6246 2.36055 13.933 2.59695 14.1207 2.92094L15.3795 5.09365C15.5601 5.40546 15.6149 5.7744 15.5328 6.12523C15.4507 6.47606 15.2378 6.78235 14.9376 6.98165L14.8609 7.02871L14.5235 7.22353C14.5819 7.76273 14.5736 8.30708 14.4986 8.84424L14.7372 8.98259C15.0496 9.16307 15.2812 9.45606 15.3848 9.80165C15.4884 10.1472 15.456 10.5193 15.2944 10.8419L15.2553 10.9153L14.076 12.9576C13.8955 13.27 13.6025 13.5017 13.2569 13.6053C12.9113 13.7088 12.5392 13.6765 12.2167 13.5148L12.1433 13.4753L11.8172 13.2871C11.4074 13.5817 10.9651 13.8283 10.4991 14.0221L10.4995 14.5831C10.5 14.9434 10.3629 15.2904 10.1163 15.5532C9.86972 15.816 9.53215 15.9748 9.17247 15.9972L9.08306 16L6.57153 15.9967C6.19697 15.9961 5.83793 15.847 5.57312 15.5821C5.30831 15.3172 5.15932 14.9581 5.15883 14.5835L5.15788 13.9073C4.76852 13.7244 4.39771 13.5044 4.05059 13.2504L3.44918 13.5967C3.12448 13.7834 2.73902 13.8337 2.37726 13.7367C2.01551 13.6397 1.70698 13.4032 1.5193 13.0791L0.260473 10.9064C0.0799611 10.5945 0.0252226 10.2255 0.107423 9.87467C0.189623 9.52384 0.402569 9.21757 0.702826 9.01835L0.779062 8.97129L1.3913 8.61835C1.34424 8.17129 1.34188 7.71765 1.38706 7.26494L0.707532 6.87247C0.395061 6.69207 0.163305 6.39911 0.0596515 6.05351C-0.0440025 5.70791 -0.0117246 5.33577 0.149885 5.01318L0.189415 4.93976L1.36871 2.89741C1.54919 2.58502 1.84218 2.35337 2.18777 2.2498C2.53336 2.14624 2.90547 2.17859 3.228 2.34023L3.30141 2.37976L3.89436 2.72188C4.28027 2.42082 4.69854 2.1637 5.14141 1.95529L5.14047 1.41694C5.14001 1.05657 5.27707 0.709596 5.52367 0.446813C5.77028 0.184029 6.10786 0.0252343 6.46753 0.00282354L6.55741 0ZM6.55553 1.41506L6.55694 2.85271L5.74377 3.23576C5.39553 3.39906 5.06706 3.60094 4.764 3.83718L4.01247 4.424L2.62941 3.62494L2.59365 3.60518L1.41483 5.64753L2.88636 6.49694L2.79506 7.40612C2.75968 7.7598 2.76078 8.11619 2.79836 8.46965L2.8953 9.38541L1.48494 10.1976L2.7433 12.3704L4.14377 11.5647L4.88636 12.1087C5.15997 12.309 5.45231 12.4823 5.7593 12.6264L6.57106 13.008L6.57388 14.5816L9.08447 14.5849L9.08306 13.0791L9.95553 12.7158C10.3216 12.5635 10.6689 12.3698 10.9908 12.1384L11.7329 11.6047L12.8506 12.2499L14.0289 10.2075L12.9654 9.592L13.0972 8.64847C13.1561 8.22659 13.1628 7.79904 13.1169 7.37553L13.0181 6.45882L14.1555 5.80235L12.8967 3.62965L11.7645 4.28235L11.0214 3.74024C10.686 3.4956 10.3229 3.29152 9.93953 3.13224L9.06894 2.77082L9.06659 1.41835L6.55553 1.41506ZM9.37153 5.47624C10.0214 5.85201 10.4955 6.47036 10.6898 7.19547C10.8841 7.92058 10.7827 8.69316 10.4078 9.34353C10.2223 9.66543 9.97517 9.9476 9.68053 10.1739C9.38589 10.4002 9.04953 10.5662 8.69068 10.6623C8.33183 10.7585 7.95754 10.7829 7.58923 10.7343C7.22092 10.6856 6.86582 10.5648 6.54424 10.3788C5.89445 10.003 5.4204 9.38458 5.2262 8.65948C5.032 7.93438 5.13352 7.16184 5.50847 6.51153C5.69395 6.18963 5.94107 5.90746 6.23571 5.68117C6.53034 5.45488 6.86671 5.28891 7.22556 5.19275C7.58441 5.09659 7.9587 5.07213 8.32701 5.12077C8.69532 5.16942 9.05042 5.29021 9.372 5.47624H9.37153ZM6.73388 7.21835C6.54638 7.54388 6.49567 7.9305 6.5929 8.29336C6.69012 8.65623 6.92733 8.96571 7.25247 9.15388C7.41305 9.24679 7.59037 9.30712 7.77429 9.33143C7.9582 9.35574 8.14511 9.34355 8.32431 9.29556C8.50351 9.24757 8.67149 9.16472 8.81864 9.05174C8.96579 8.93877 9.08923 8.7979 9.18188 8.63718C9.55883 7.98353 9.356 7.15435 8.73435 6.74494L8.66377 6.70118L8.59035 6.66165C8.26834 6.49988 7.89663 6.46742 7.55145 6.57093C7.20626 6.67444 6.91375 6.90608 6.73388 7.21835Z",
            fill: "#6C6F73"
        })
    }) : t.type === "file" ? w("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: w("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M11.6861 1L15.2353 4.54635V7.11765V14.6471V15.5882C15.2353 15.9627 15.0866 16.3217 14.8218 16.5865C14.557 16.8513 14.198 17 13.8235 17H4.41176C4.03734 17 3.67825 16.8513 3.4135 16.5865C3.14874 16.3217 3 15.9627 3 15.5882V14.6471V7.11765V2.41176C3 2.03734 3.14874 1.67825 3.4135 1.4135C3.67825 1.14874 4.03734 1 4.41176 1H11.6861ZM11.8692 3.17882V4.74212H13.4334L11.8692 3.17882ZM4.41171 15.5882V14.647V2.41176H10.4574L10.4578 6.15341H13.8235V14.647V15.5882H4.41171ZM12.7739 7.51746H5.46094V8.6155H12.7739V7.51746ZM5.46094 9.98805H12.7739V11.0861H5.46094V9.98805ZM9.5127 12.36H5.46094V13.458H9.5127V12.36Z",
            fill: "#6C6F73"
        })
    }) : t.type === "translated" ? w("svg", {
        width: "11",
        height: "11",
        viewBox: "0 0 11 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        class: `${Sy}-translated-img`,
        children: [w("circle", {
            cx: "5.5",
            cy: "5.5",
            r: "5.5",
            fill: "#68CD52"
        }), w("path", {
            d: "M1.40857 5.87858L2.24148 5.18962L4.15344 6.64214C4.15344 6.64214 6.33547 4.15566 9.00658 2.48145L9.32541 2.87514C9.32541 2.87514 6.28665 5.55844 4.71735 9.07881L1.40857 5.87858Z",
            fill: "white"
        })]
    }) : t.type === "modal-close" ? w("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: w("path", {
            d: "M4.41083 4.41066C4.5671 4.25443 4.77902 4.16667 4.99999 4.16667C5.22096 4.16667 5.43289 4.25443 5.58916 4.41066L9.99999 8.82149L14.4108 4.41066C14.4877 4.33107 14.5797 4.26758 14.6813 4.22391C14.783 4.18023 14.8923 4.15724 15.003 4.15628C15.1136 4.15532 15.2234 4.1764 15.3258 4.21831C15.4282 4.26021 15.5212 4.32208 15.5995 4.40033C15.6777 4.47857 15.7396 4.57162 15.7815 4.67403C15.8234 4.77644 15.8445 4.88618 15.8435 4.99682C15.8426 5.10747 15.8196 5.21682 15.7759 5.31849C15.7322 5.42016 15.6688 5.51212 15.5892 5.58899L11.1783 9.99982L15.5892 14.4107C15.741 14.5678 15.825 14.7783 15.8231 14.9968C15.8212 15.2153 15.7335 15.4243 15.579 15.5788C15.4245 15.7333 15.2155 15.821 14.997 15.8229C14.7785 15.8248 14.568 15.7408 14.4108 15.589L9.99999 11.1782L5.58916 15.589C5.43199 15.7408 5.22149 15.8248 5.00299 15.8229C4.7845 15.821 4.57549 15.7333 4.42098 15.5788C4.26647 15.4243 4.17883 15.2153 4.17693 14.9968C4.17503 14.7783 4.25903 14.5678 4.41083 14.4107L8.82166 9.99982L4.41083 5.58899C4.2546 5.43272 4.16684 5.22079 4.16684 4.99982C4.16684 4.77885 4.2546 4.56693 4.41083 4.41066Z",
            fill: "#C4C4C4"
        })
    }) : null
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function fc({parent: t, ctx: e, Component: n, props: r={}, style: a="", id: i, initialCSS: o=!0}) {
    let s = i;
    t.querySelector(`#${s}`) && document.querySelector(`#${s}`)?.remove();
    let u = document.createElement("div");
    u.id = s,
    o && u.setAttribute("style", "all: initial");
    let l = u.attachShadow({
        mode: "open"
    });
    a && En(l, a),
        t.appendChild(u),
        Ki(w(mc, {
            lang: e.config.interfaceLanguage,
            fallbackLang: "zh-CN",
            translations: Nt,
            children: w(n, {
                ...r
            })
        }), l)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function YT(t, e) {
    if (Array.isArray(t))
        return t;
    let n = e.split(".")
        , r = t;
    for (let a = 0; a < n.length; a++) {
        if (!r)
            return null;
        r = r[n[a]]
    }
    return r
}
function Ac(t, e) {
    if (!t)
        return null;
    if (!e)
        return t;
    let n = t[e];
    return Array.isArray(n) ? n.join(" ") : n
}
function QT(t, e, n="", r=!1) {
    return t ? (e ? Array.isArray(t[e]) ? t[e] = r ? [n] : [Ac(t, e), n] : t[e] = r ? n : t[e] + `
` + n : t = r ? n : Ac(t, e) + `
` + n,
        t) : null
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ii = `${Q}-float-ball`;
function Qv(t) {
    // TODO:鼠标放到右侧 float-ball 上执行方法
    //debugger;

    let {t: e} = Ce()
        , n = a=>{
        a && a.target && a.target.id === "immersive-translate-popup-overlay" && t.onClose()
    }
        , r = Ue(()=>{
            let a = {
                position: "fixed",
                top: t.top + 60
            };
            return t.fixedPosition == "left" && (a.left = 48),
            t.fixedPosition == "right" && (a.right = 48),
                a
        }
        , [t.top, t.fixedPosition]);
    return t.visible ? w("div", {
        onClick: n,
        id: "immersive-translate-popup-overlay",
        class: "immersive-translate-popup-overlay",
        children: w("div", {
            class: `${ii}-guide-container`,
            style: r,
            children: [w("img", {
                class: `${ii}-guide-bg ${t.fixedPosition}`,
                src: N8
            }), w("div", {
                class: `${ii}-guide-content ${t.fixedPosition}`,
                children: [w("img", {
                    class: `${ii}-guide-img`,
                    src: Yv("images/float_ball_intro.png")
                }), w("div", {
                    class: `${ii}-guide-message`,
                    children: [e("floatBall.guideClickToTranslate"), isMobile().any ? `
${e("floatBall.longPress")}` : ""]
                }), w("div", {
                    class: `${ii}-primary-btn ${ii}-guide-button`,
                    onClick: t.onClose,
                    children: e("floatBall.iKnow")
                })]
            })]
        })
    }) : null
}
