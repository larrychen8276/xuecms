function l3(t, e) {
    return [t, !t || t.endsWith("/") ? "" : "/", e, ".json"].join("")
}
function rp(t, e) {
    let n = t;
    return e && Object.keys(e).forEach(r=>{
            let a = e[r];
            if (a === void 0)
                return;
            let i = Ow(r);
            if (typeof a == "object" || i) {
                let o = a;
                i && typeof o == "string" && (o = {
                    tag: "a",
                    href: o,
                    target: "_blank",
                    class: "immersive-translate-link"
                });
                let s = `<${r}>`
                    , u = n.indexOf(s);
                if (u !== -1) {
                    let l = o.tag || "a"
                        , c = n.indexOf(`</${r}>`);
                    if (c !== -1) {
                        let p = n.substring(u + s.length, c)
                            , m = Object.keys(o).filter(g=>g !== "tag").map(g=>`${g}="${o[g]}"`).join(" ");
                        n = n.replace(`${s}${p}</${r}>`, `<${l} ${m}>${p}</${l}>`)
                    }
                }
            } else if (a) {
                let o = new RegExp("{" + r + "}","gm");
                n = n.replace(o, a.toString())
            }
        }
    ),
        n
}

function os(t, e, n) {
    let r = t[e];
    if (!r)
        return n;
    if (!n)
        return "";
    let a = n.split(".")
        , i = "";
    do {
        i += a.shift();
        let o = r[i];
        o !== void 0 && (typeof o == "object" || !a.length) ? (r = o,
            i = "") : a.length ? i += "." : r = n
    } while (a.length);
    return r
}

function mr(t, e, n, r, a) {
    if (!t.hasOwnProperty(n))
        return e;
    let i = os(t, n, e);
    return i === e && n !== r && (i = os(t, r, e)),
        rp(i, a)
}

function Ow(t) {
    if (typeof t == "number")
        return !0;
    if (t) {
        let e = parseInt(t);
        return !isNaN(e)
    } else
        return !1
}

function kt(t, e, n) {
    return mr(Nt, e, t.config.interfaceLanguage, "en", n)
}
