"use strict";

var Qg = class {
    name;
    helper;
    build;
    detect;
    parse;
    constructor({name: e, build: n, detect: r, helper: a, parse: i}) {
        this.name = e,
            this.helper = a,
            this.build = n,
            this.detect = o=>{
                if (typeof o != "string")
                    throw new Error("Expected string content!");
                return r(o)
            }
            ,
            this.parse = (o,s)=>{
                if (typeof o != "string")
                    throw new Error("Expected string content!");
                return i(o, s)
            }
    }
}
    , Kt = t=>new Qg(t);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var yk = "ssa"
    , ei = {
    toMilliseconds: t=>{
        let e = /^\s*(\d+:)?(\d{1,2}):(\d{1,2})(?:[.,](\d{1,3}))?\s*$/.exec(t);
        if (!e)
            throw new Error(`Invalid time format: ${t}`);
        let n = e[1] ? parseInt(e[1].replace(":", "")) : 0
            , r = parseInt(e[2])
            , a = parseInt(e[3])
            , i = e[4] ? parseInt(e[4]) : 0;
        return n * 3600 * 1e3 + r * 60 * 1e3 + a * 1e3 + i * 10
    }
    ,
    toTimeString: t=>{
        let e = Math.floor(t / 1e3 / 3600)
            , n = Math.floor(t / 1e3 / 60 % 60)
            , r = Math.floor(t / 1e3 % 60)
            , a = Math.floor(t % 1e3 / 10);
        return `${e}:${n < 10 ? "0" : ""}${n}:${r < 10 ? "0" : ""}${r}.${a < 10 ? "0" : ""}${a}`
    }
}
    , Jg = (t,e)=>{
    let n, r = null, a = [], i = e.eol || `\r
`, o = t.split(/\r?\n\s*\n/);
    for (let s = 0; s < o.length; s++) {
        let l = /^\s*\[([^\]]+)\]\r?\n([\s\S]*)$/.exec(o[s]);
        if (l) {
            let c = l[1]
                , p = l[2].split(/\r?\n/);
            for (let m = 0; m < p.length; m++) {
                let g = p[m];
                if (/^\s*;/.test(g))
                    continue;
                let f = /^\s*([^\s:]+):\s*(.*)$/.exec(g);
                if (f) {
                    if (c === "Script Info")
                        if (n || (n = {},
                            n.type = "meta",
                            n.data = {},
                            a.push(n)),
                        typeof n.data == "object") {
                            let T = f[1].trim()
                                , b = f[2].trim();
                            n.data[T] = b
                        } else
                            throw new Error(`Invalid meta data: ${g}`);
                    else if (c === "V4 Styles" || c === "V4+ Styles") {
                        let T = f[1].trim()
                            , b = f[2].trim();
                        if (T === "Format")
                            r = b.split(/\s*,\s*/g);
                        else if (T === "Style" && r) {
                            let h = b.split(/\s*,\s*/g)
                                , E = {};
                            E.type = "style",
                                E.data = {};
                            for (let D = 0; D < r.length && D < h.length; D++)
                                E.data[r[D]] = h[D];
                            a.push(E)
                        }
                    } else if (c === "Events") {
                        let T = f[1].trim()
                            , b = f[2].trim();
                        if (T === "Format")
                            r = b.split(/\s*,\s*/g);
                        else if (T === "Dialogue" && r) {
                            let h = b.split(/\s*,\s*/g)
                                , E = {};
                            E.type = "caption",
                                E.data = {};
                            for (let I = 0; I < r.length && I < h.length; I++)
                                E.data[r[I]] = h[I];
                            E.start = ei.toMilliseconds(E.data.Start),
                                E.end = ei.toMilliseconds(E.data.End),
                                E.duration = E.end - E.start,
                                E.content = E.data.Text;
                            let M = ((I,S,v)=>I.split(S, v).join(S).length)(b, ",", r.length - 1) + 1;
                            E.content = b.substring(M),
                                E.data.Text = E.content,
                                E.text = E.content.replace(/\\N/g, i).replace(/\{[^}]+\}/g, ""),
                                a.push(E)
                        }
                    }
                }
            }
        }
        e.verbose
    }
    return a
}
    , Zg = (t,e)=>{
    let n = e.eol || `\r
`
        , r = e.format === "ass"
        , a = t.find(l=>l.type == "meta")
        , i = typeof a?.data == "object" ? a.data : null
        , o = t.find(l=>l.type == "style")
        , s = typeof o?.data == "object" ? o.data : null
        , u = "";
    u += `[Script Info]${n}`,
        u += `ScriptType: ${i?.ScriptType || `v4.00${r ? "+" : ""}${n}`} `,
    i?.WrapStyle && (u += `WrapStyle: ${i?.WrapStyle}${n}`),
    i?.ScaledBorderAndShadow && (u += `ScaledBorderAndShadow: ${i?.ScaledBorderAndShadow}${n}`),
        u += `Collisions: Normal${n}`,
        u += n,
        r ? (u += `[V4+ Styles]${n}`,
            u += `Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding${n}`,
            u += `Style: ${s?.Name || "DefaultVCD"}, ${s?.Fontname || "Arial"},${s?.Fontsize || "28"},${s?.PrimaryColour || "&H00B4FCFC"},${s?.SecondaryColour || "&H00B4FCFC"},${s?.OutlineColour || "&H00000008"},${s?.BackColour || "&H80000008"},${s?.Bold || "-1"},${s?.Italic || "0"},${s?.Underline || "0"},${s?.StrikeOut || "0"},${s?.ScaleX || "100"},${s?.ScaleY || "100"},${s?.Spacing || "0.00"},${s?.Angle || "0.00"},${s?.BorderStyle || "1"},${s?.Outline || "1.00"},${s?.Shadow || "2.00"},${s?.Alignment || "2"},${s?.MarginL || "30"},${s?.MarginR || "30"},${s?.MarginV || "30"},${s?.Encoding || "0"}${n}`) : (u += `[V4 Styles]${n}`,
            u += `Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, TertiaryColour, BackColour, Bold, Italic, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, AlphaLevel, Encoding${n}`,
            u += `Style: DefaultVCD, Arial,28,11861244,11861244,11861244,-2147483640,-1,0,1,1,2,2,30,30,30,0,0${n}`),
        u += n,
        u += `[Events]${n}`,
        u += `Format: ${r ? "Layer" : "Marked"}, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text${n}`;
    for (let l = 0; l < t.length; l++) {
        let c = t[l];
        if (c.type !== "meta") {
            if (!c.type || c.type === "caption") {
                u += `Dialogue: ${r ? "0" : "Marked=0"},${ei.toTimeString(c.start)},${ei.toTimeString(c.end)},${c.data?.Style || "DefaultVCD"}, ${c.data?.Name || ""},${c.data?.MarginL || "0000"},${c.data?.MarginR || "0000"},${c.data?.MarginV || "0000"},,${c.text.replace(/\r?\n/g, "\\N")}${n}`;
                continue
            }
            e.verbose
        }
    }
    return u
}
    , Xg = t=>/^\s*\[Script Info\]\r?\n/.test(t) && /\s*\[Events\]\r?\n/.test(t) ? t.indexOf("[V4+ Styles]") > 0 ? "ass" : "ssa" : !1
    , ZT = Kt({
    name: yk,
    build: Zg,
    detect: Xg,
    helper: ei,
    parse: Jg
});
var vk = "ass"
    , XT = Kt({
    name: vk,
    build: Zg,
    detect: Xg,
    helper: ei,
    parse: Jg
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var Wk = "vtt"
    , qs = {
    toMilliseconds: t=>{
        let e = /^\s*(\d{1,2}:)?(\d{1,2}):(\d{1,2})(?:[.,](\d{1,3}))?\s*$/.exec(t);
        if (!e)
            throw new Error(`Invalid time format: ${t}`);
        let n = e[1] ? parseInt(e[1].replace(":", "")) : 0
            , r = parseInt(e[2])
            , a = parseInt(e[3])
            , i = e[4] ? parseInt(e[4]) : 0;
        return n * 3600 * 1e3 + r * 60 * 1e3 + a * 1e3 + i
    }
    ,
    toTimeString: t=>{
        let e = Math.floor(t / 1e3 / 3600)
            , n = Math.floor(t / 1e3 / 60 % 60)
            , r = Math.floor(t / 1e3 % 60)
            , a = Math.floor(t % 1e3);
        return `${(e < 10 ? "0" : "") + e}:${n < 10 ? "0" : ""}${n}:${r < 10 ? "0" : ""}${r}.${a < 100 ? "0" : ""}${a < 10 ? "0" : ""}${a}`
    }
}
    , Kk = (t,e)=>{
    let n = 1
        , r = []
        , a = t.split(/\r?\n\s*\n/);
    for (let i = 0; i < a.length; i++) {
        let s = /^([^\r\n]+\r?\n)?((?:\d{1,2}:)?\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?)\s*-->\s*((?:\d{1,2}:)?\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?)\s?.*\r?\n([\s\S]*)$/.exec(a[i]);
        if (s) {
            let l = {};
            l.type = "caption",
                l.index = n++,
            s[1] && (l.cue = s[1].replace(/[\r\n]*/g, "")),
                l.start = qs.toMilliseconds(s[2]),
                l.end = qs.toMilliseconds(s[3]),
                l.duration = l.end - l.start;
            let c = s[4].split(/\r?\n/);
            l.content = c.join(" "),
                l.text = l.content.replace(/<[^>]+>/g, "").replace(/\{[^}]+\}/g, ""),
                r.push(l);
            continue
        }
        let u = /^([A-Z]+)(\r?\n([\s\S]*))?$/.exec(a[i]) || /^([A-Z]+)\s+([^\r\n]*)$/.exec(a[i]);
        if (u) {
            let l = {};
            l.type = "meta",
                l.name = u[1],
            u[3] && (l.data = u[3]),
                r.push(l);
            continue
        }
        e.verbose
    }
    return r
}
    , Gk = (t,e)=>{
    let n = e.eol || `\r
`
        , r = `WEBVTT${n}${n}`;
    for (let a = 0; a < t.length; a++) {
        let i = t[a];
        if (i.type === "meta") {
            if (i.name === "WEBVTT")
                continue;
            r += i.name + n,
                r += i.data ? i.data + n : "",
                r += n;
            continue
        }
        if (!i.type || i.type === "caption") {
            r += (a + 1).toString() + n,
                r += `${qs.toTimeString(i.start)} --> ${qs.toTimeString(i.end)}${n}`,
                r += i.text + n,
                r += n;
            continue
        }
        e.verbose
    }
    return r
}
    , $k = t=>/^\s*WEBVTT\r?\n/.test(t)
    , sy = Kt({
    name: Wk,
    build: Gk,
    detect: $k,
    helper: qs,
    parse: Kk
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var wk = "lrc"
    , em = {
    toMilliseconds: t=>{
        let e = /^\s*(\d+):(\d{1,2})(?:[.,](\d{1,3}))?\s*$/.exec(t);
        if (!e)
            throw new Error(`Invalid time format: ${t}`);
        let n = parseInt(e[1])
            , r = parseInt(e[2])
            , a = e[3] ? parseInt(e[3]) : 0;
        return n * 60 * 1e3 + r * 1e3 + a * 10
    }
    ,
    toTimeString: t=>{
        let e = Math.floor(t / 1e3 / 60)
            , n = Math.floor(t / 1e3 % 60)
            , r = Math.floor(t % 1e3);
        return `${(e < 10 ? "0" : "") + e}:${n < 10 ? "0" : ""}${n}.${r < 100 ? "0" : ""}${r < 10 ? "0" : Math.floor(r / 10)}`
    }
}
    , Dk = (t,e)=>{
    let n = null
        , r = []
        , a = t.split(/\r?\n/);
    for (let i = 0; i < a.length; i++) {
        if (!a[i] || a[i].trim().length === 0)
            continue;
        let s = /^\[(\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?)\](.*)(?:\r?\n)*$/.exec(a[i]);
        if (s) {
            let l = {};
            l.type = "caption",
                l.start = em.toMilliseconds(s[1]),
                l.end = l.start + 2e3,
                l.duration = l.end - l.start,
                l.content = s[2],
                l.text = l.content,
                r.push(l),
            n && (n.end = l.start,
                n.duration = n.end - n.start),
                n = l;
            continue
        }
        let u = /^\[(\w+):([^\]]*)\](?:\r?\n)*$/.exec(a[i]);
        if (u) {
            let l = {};
            l.type = "meta",
                l.tag = u[1],
            u[2] && (l.data = u[2]),
                r.push(l);
            continue
        }
        e.verbose
    }
    return r
}
    , Ak = (t,e)=>{
    let n = ""
        , r = !1
        , a = e.eol || `\r
`;
    for (let i = 0; i < t.length; i++) {
        let o = t[i];
        if (o.type === "meta") {
            o.tag && o.data && typeof o.data == "string" && (n += `[${o.tag}:${o.data.replace(/[\r\n]+/g, " ")}]${a}`);
            continue
        }
        if (!o.type || o.type === "caption") {
            r || (n += a,
                r = !0),
                n += `[${em.toTimeString(o.start)}]${o.text}${a}`;
            continue
        }
        e.verbose
    }
    return n
}
    , kk = t=>/\r?\n\[\d+:\d{1,2}(?:[.,]\d{1,3})?\].*\r?\n/.test(t)
    , ty = Kt({
    name: wk,
    build: Ak,
    detect: kk,
    helper: em,
    parse: Dk
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var Pk = "sbv"
    , Ns = {
    toMilliseconds: t=>{
        let e = /^\s*(\d{1,2}):(\d{1,2}):(\d{1,2})(?:[.,](\d{1,3}))?\s*$/.exec(t);
        if (!e)
            throw new Error(`Invalid time format: ${t}`);
        let n = parseInt(e[1])
            , r = parseInt(e[2])
            , a = parseInt(e[3])
            , i = e[4] ? parseInt(e[4]) : 0;
        return n * 3600 * 1e3 + r * 60 * 1e3 + a * 1e3 + i
    }
    ,
    toTimeString: t=>{
        let e = Math.floor(t / 1e3 / 3600)
            , n = Math.floor(t / 1e3 / 60 % 60)
            , r = Math.floor(t / 1e3 % 60)
            , a = Math.floor(t % 1e3);
        return `${(e < 10 ? "0" : "") + e}:${n < 10 ? "0" : ""}${n}:${r < 10 ? "0" : ""}${r}.${a < 100 ? "0" : ""}${a < 10 ? "0" : ""}${a}`
    }
}
    , Lk = (t,e)=>{
    let n = []
        , r = e.eol || `\r
`
        , a = t.split(/\r?\n\s*\n/);
    for (let i = 0; i < a.length; i++) {
        let s = /^(\d{1,2}:\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?)\s*[,;]\s*(\d{1,2}:\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?)\r?\n([\s\S]*)$/.exec(a[i]);
        if (s) {
            let u = {};
            u.type = "caption",
                u.start = Ns.toMilliseconds(s[1]),
                u.end = Ns.toMilliseconds(s[2]),
                u.duration = u.end - u.start;
            let l = s[3].split(/\[br\]|\r?\n/gi);
            u.content = l.join(r),
                u.text = u.content.replace(/>>[^:]+:\s*/g, ""),
                n.push(u);
            continue
        }
        e.verbose
    }
    return n
}
    , _k = (t,e)=>{
    let n = ""
        , r = e.eol || `\r
`;
    for (let a = 0; a < t.length; a++) {
        let i = t[a];
        if (!i.type || i.type === "caption") {
            n += `${Ns.toTimeString(i.start)},${Ns.toTimeString(i.end)}${r}`,
                n += i.text + r,
                n += r;
            continue
        }
        e.verbose
    }
    return n
}
    , Fk = t=>/\d{1,2}:\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?\s*[,;]\s*\d{1,2}:\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?/.test(t)
    , ny = Kt({
    name: Pk,
    build: _k,
    detect: Fk,
    helper: Ns,
    parse: Lk
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ry = "smi"
    , tm = {
    htmlEncode: t=>t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r?\n/g, "<BR>"),
    htmlDecode: (t,e)=>t.replace(/<BR\s*\/?>/gi, e || `\r
`).replace(/&nbsp;/g, " ").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
}
    , Mk = (t,e)=>{
    if (e.format && e.format !== ry)
        throw new Error(`Invalid format: ${e.format}`);
    let n = []
        , r = e.eol || `\r
`
        , a = /<TITLE[^>]*>([\s\S]*)<\/TITLE>/i.exec(t);
    if (a) {
        let l = {};
        l.type = "meta",
            l.name = "title",
            l.data = a[1].replace(/^\s*/g, "").replace(/\s*$/g, ""),
            n.push(l)
    }
    let i = /<STYLE[^>]*>([\s\S]*)<\/STYLE>/i.exec(t);
    if (i) {
        let l = {};
        l.type = "meta",
            l.name = "style",
            l.data = i[1],
            n.push(l)
    }
    let o = t.replace(/^[\s\S]*<BODY[^>]*>/gi, "").replace(/<\/BODY[^>]*>[\s\S]*$/gi, "")
        , s = null
        , u = o.split(/<SYNC/gi);
    for (let l = 0; l < u.length; l++) {
        if (!u[l] || u[l].trim().length === 0)
            continue;
        let c = `<SYNC${u[l]}`
            , p = /^<SYNC[^>]+Start\s*=\s*["']?(\d+)[^\d>]*>([\s\S]*)/i.exec(c);
        if (p) {
            let m = {};
            m.type = "caption",
                m.start = parseInt(p[1]),
                m.end = m.start + 2e3,
                m.duration = m.end - m.start,
                m.content = p[2].replace(/^<\/SYNC[^>]*>/gi, "");
            let g = !0
                , f = /^<P.+Class\s*=\s*["']?([\w-]+)(?: .*)?>([\s\S]*)/i.exec(m.content) || /^<P([^>]*)>([\s\S]*)/i.exec(m.content);
            if (f) {
                let T = f[2].replace(/<P[\s\S]+$/gi, "");
                T = T.replace(/<BR\s*\/?>\s+/gi, r).replace(/<BR\s*\/?>/gi, r).replace(/<[^>]+>/g, ""),
                    T = T.replace(/^\s+/g, "").replace(/\s+$/g, ""),
                    g = T.replace(/&nbsp;/gi, " ").replace(/\s+/g, "").length === 0,
                    m.text = tm.htmlDecode(T, r)
            }
            !e.preserveSpaces && g ? e.verbose : n.push(m),
            s && (s.end = m.start,
                s.duration = s.end - s.start),
                s = m;
            continue
        }
        e.verbose
    }
    return n
}
    , Bk = (t,e)=>{
    let n = e.eol || `\r
`
        , r = "";
    r += `<SAMI>${n}`,
        r += `<HEAD>${n}`,
        r += `<TITLE>${e.title || ""}</TITLE>${n}`,
        r += `<STYLE TYPE="text/css">${n}`,
        r += `<!--${n}`,
        r += `P { font-family: Arial; font-weight: normal; color: white; background-color: black; text-align: center; }${n}`,
        r += `.LANG { Name: ${e.langName || "English"}; lang: ${e.langCode || "en-US"}; SAMIType: CC; }${n}`,
        r += `-->${n}`,
        r += `</STYLE>${n}`,
        r += `</HEAD>${n}`,
        r += `<BODY>${n}`;
    for (let a = 0; a < t.length; a++) {
        let i = t[a];
        if (i.type !== "meta") {
            if (!i.type || i.type === "caption") {
                r += `<SYNC Start=${i.start}>${n}`,
                    r += `  <P Class=LANG>${tm.htmlEncode(i.text || "")}${e.closeTags ? "</P>" : ""}${n}`,
                e.closeTags && (r += `</SYNC>${n}`),
                    r += `<SYNC Start=${i.end}>${n}`,
                    r += `  <P Class=LANG>&nbsp;${e.closeTags ? "</P>" : ""}${n}`,
                e.closeTags && (r += `</SYNC>${n}`);
                continue
            }
            e.verbose
        }
    }
    return r += `</BODY>${n}`,
        r += `</SAMI>${n}`,
        r
}
    , Ik = t=>/<SAMI[^>]*>[\s\S]*<BODY[^>]*>/.test(t)
    , ay = Kt({
    name: ry,
    build: Bk,
    detect: Ik,
    helper: tm,
    parse: Mk
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var Rk = "srt"
    , Us = {
    toMilliseconds: t=>{
        let e = /^\s*(\d{1,2}):(\d{1,2}):(\d{1,2})(?:[.,](\d{1,3}))?\s*$/.exec(t);
        if (!e)
            throw new Error(`Invalid time format: ${t}`);
        let n = parseInt(e[1])
            , r = parseInt(e[2])
            , a = parseInt(e[3])
            , i = e[4] ? parseInt(e[4]) : 0;
        return n * 3600 * 1e3 + r * 60 * 1e3 + a * 1e3 + i
    }
    ,
    toTimeString: t=>{
        let e = Math.floor(t / 1e3 / 3600)
            , n = Math.floor(t / 1e3 / 60 % 60)
            , r = Math.floor(t / 1e3 % 60)
            , a = Math.floor(t % 1e3);
        return `${(e < 10 ? "0" : "") + e}:${n < 10 ? "0" : ""}${n}:${r < 10 ? "0" : ""}${r},${a < 100 ? "0" : ""}${a < 10 ? "0" : ""}${a}`
    }
}
    , Ok = (t,e)=>{
    let n = []
        , r = e.eol || `\r
`
        , a = t.split(/\r?\n\s*\n/g);
    for (let i = 0; i < a.length; i++) {
        let s = /^(\d+)\r?\n(\d{1,2}:\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?)\s*-->\s*(\d{1,2}:\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?)\r?\n([\s\S]*)$/.exec(a[i]);
        if (s) {
            let u = {};
            u.type = "caption",
                u.index = parseInt(s[1]),
                u.start = Us.toMilliseconds(s[2]),
                u.end = Us.toMilliseconds(s[3]),
                u.duration = u.end - u.start;
            let l = s[4].split(/\r?\n/);
            u.content = l.join(r),
                u.text = u.content.replace(/<[^>]+>/g, "").replace(/\{[^}]+\}/g, "").replace(/>>[^:]*:\s*/g, ""),
                n.push(u);
            continue
        }
        e.verbose
    }
    return n
}
    , zk = (t,e)=>{
    let n = ""
        , r = e.eol || `\r
`;
    for (let a = 0; a < t.length; a++) {
        let i = t[a];
        if (!i.type || i.type === "caption") {
            n += (i.index ? i.index : a + 1).toString() + r,
                n += `${Us.toTimeString(i.start)} --> ${Us.toTimeString(i.end)}${r}`,
                n += i.text + r,
                n += r;
            continue
        }
        e.verbose
    }
    return n
}
    , Nk = t=>/\d+\r?\n\d{1,2}:\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?\s*-->\s*\d{1,2}:\d{1,2}:\d{1,2}(?:[.,]\d{1,3})?/.test(t)
    , iy = Kt({
    name: Rk,
    build: zk,
    detect: Nk,
    helper: Us,
    parse: Ok
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var Uk = "sub"
    , nm = 25
    , qk = (t,e)=>{
    e.fps ||= nm;
    let n = e.fps > 0 ? e.fps : nm
        , r = []
        , a = e.eol || `\r
`
        , i = t.split(/\r?\n/g);
    for (let o = 0; o < i.length; o++) {
        let u = /^\{(\d+)\}\{(\d+)\}(.*)$/.exec(i[o]);
        if (u) {
            let l = {};
            l.type = "caption",
                l.index = o + 1,
                l.frame = {
                    start: parseInt(u[1]),
                    end: parseInt(u[2]),
                    count: parseInt(u[2]) - parseInt(u[1])
                },
                l.start = Math.round(l.frame.start / n),
                l.end = Math.round(l.frame.end / n),
                l.duration = l.end - l.start;
            let c = u[3].split(/\|/g);
            l.content = c.join(a),
                l.text = l.content.replace(/\{[^}]+\}/g, ""),
                r.push(l);
            continue
        }
        e.verbose
    }
    return r
}
    , jk = (t,e)=>{
    let n = (e.fps || 0) > 0 ? e.fps : nm
        , r = ""
        , a = e.eol || `\r
`;
    for (let i = 0; i < t.length; i++) {
        let o = t[i];
        if (!o.type || o.type === "caption") {
            let s = typeof o.frame == "object" && o.frame.start >= 0 ? o.frame.start : o.start * n
                , u = typeof o.frame == "object" && o.frame.end >= 0 ? o.frame.end : o.end * n
                , l = o.text.replace(/\r?\n/, "|");
            r += `{${s}}{${u}}${l}${a}`;
            continue
        }
        e.verbose
    }
    return r
}
    , Hk = t=>/^\{\d+\}\{\d+\}.*/.test(t)
    , oy = Kt({
    name: Uk,
    build: jk,
    detect: Hk,
    parse: qk
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var Sk = "json"
    , xk = (t,e)=>JSON.parse(t)
    , Ek = (t,e)=>JSON.stringify(t, void 0, 2)
    , Ck = t=>{
    try {
        let e = JSON.parse(t);
        return Array.isArray(e) && e.length > 0 && typeof e[0] == "object"
    } catch {
        return !1
    }
}
    , ey = Kt({
    name: Sk,
    build: Ek,
    detect: Ck,
    parse: xk
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var Vk = {
    vtt: sy,
    lrc: ty,
    smi: ay,
    ssa: ZT,
    ass: XT,
    sub: oy,
    srt: iy,
    sbv: ny,
    json: ey
}
    , uy = Vk;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var Yk = t=>JSON.parse(JSON.stringify(t))
    , rm = class {
    format = uy;
    list = ()=>Object.keys(this.format);
    detect = e=>{
        let n = this.list();
        for (let r = 0; r < n.length; r++) {
            let a = n[r]
                , i = this.format[a];
            if (typeof i > "u" || typeof i.detect != "function")
                continue;
            let o = i.detect(e);
            if (o === !0 || o === a)
                return a
        }
        return ""
    }
    ;
    parse = (e,n={})=>{
        let r = n.format || this.detect(e);
        if (!r || r.trim().length === 0)
            throw new Error("Cannot determine subtitle format!");
        let a = this.format[r];
        if (typeof a > "u")
            throw new Error(`Unsupported subtitle format: ${r}`);
        let i = a.parse;
        if (typeof i != "function")
            throw new Error(`Subtitle format does not support 'parse' op: ${r}`);
        return i(e, n)
    }
    ;
    build = (e,n={})=>{
        let r = n.format || "srt";
        if (!r || r.trim().length === 0)
            throw new Error("Cannot determine subtitle format!");
        let a = this.format[r];
        if (typeof a > "u")
            throw new Error(`Unsupported subtitle format: ${r}`);
        let i = a.build;
        if (typeof i != "function")
            throw new Error(`Subtitle format does not support 'build' op: ${r}`);
        return i(e, n)
    }
    ;
    convert = (e,n={})=>{
        let r = {};
        typeof n == "string" ? r.to = n : r = n;
        let a = {
            format: r.from || void 0,
            verbose: r.verbose,
            eol: r.eol
        }
            , i = this.parse(e, a);
        r.resync && (i = this.resync(i, r.resync));
        let o = {
            format: r.to || r.format,
            verbose: r.verbose,
            eol: r.eol
        };
        return this.build(i, o)
    }
    ;
    resync = (e,n={})=>{
        let r, a, i = !1, o;
        if (typeof n == "function")
            r = n;
        else if (typeof n == "number")
            o = n,
                r = u=>[u[0] + o, u[1] + o];
        else if (typeof n == "object")
            o = (n.offset || 0) * (n.frame ? n.fps || 25 : 1),
                a = n.ratio || 1,
                i = n.frame || !1,
                r = u=>[Math.round(u[0] * a + o), Math.round(u[1] * a + o)];
        else
            throw new Error("Argument 'options' not defined!");
        let s = [];
        for (let u = 0; u < e.length; u++) {
            let l = Yk(e[u]);
            if (!l.type || l.type === "caption")
                if (i) {
                    let c = r([l.frame.start, l.frame.end]);
                    c && c.length === 2 && (l.frame.start = c[0],
                        l.frame.end = c[1],
                        l.frame.count = l.frame.end - l.frame.start)
                } else {
                    let c = r([l.start, l.end]);
                    c && c.length === 2 && (l.start = c[0],
                        l.end = c[1],
                        l.duration = l.end - l.start)
                }
            s.push(l)
        }
        return s
    }
}
    , ly = new rm
    , subsrt = ly
    , {format: qte, list: jte, detect: Hte, parse: Wte, build: Kte, convert: Gte, resync: $te} = ly;


// TODO:subsrt 测试
/*
console.log(subsrt.list())

var content = '';
content += '5' + '\r\n';
content += '00:00:16,700 --> 00:00:21,480' + '\r\n';
content += 'Okay, so we have all the ingredients laid out here' + '\r\n';

var format = subsrt.detect(content);
console.log(format)
*/
