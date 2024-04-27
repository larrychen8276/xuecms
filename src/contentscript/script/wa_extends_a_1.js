"use strict";

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




function pi() {
    let t, e = "pending", n = new Promise((r,a)=>{
            t = {
                async resolve(i) {
                    await i,
                        e = "fulfilled",
                        r(i)
                },
                reject(i) {
                    e = "rejected",
                        a(i)
                }
            }
        }
    );
    return Object.defineProperty(n, "state", {
        get: ()=>e
    }),
        Object.assign(n, t)
}

var bd = class extends Error {
        constructor() {
            super("Deadline"),
                this.name = "DeadlineError"
        }
};

function iu(t, e) {
    // debugger;

    let n = pi()
        , r = setTimeout(()=>n.reject(new bd), e);
    return Promise.race([t, n]).finally(()=>clearTimeout(r))
}


var Ef = class {
        #e = 0;
        #t = [];
        #n = [];
        #r = pi();
        add(e) {
            ++this.#e,
                this.#a(e[Symbol.asyncIterator]())
        }
        async #a(e) {
            try {
                let {value: n, done: r} = await e.next();
                r ? --this.#e : this.#t.push({
                    iterator: e,
                    value: n
                })
            } catch (n) {
                this.#n.push(n)
            }
            this.#r.resolve()
        }
        async*iterate() {
            for (; this.#e > 0; ) {
                await this.#r;
                for (let e = 0; e < this.#t.length; e++) {
                    let {iterator: n, value: r} = this.#t[e];
                    yield r,
                        this.#a(n)
                }
                if (this.#n.length) {
                    for (let e of this.#n)
                        throw e;
                    this.#n.length = 0
                }
                this.#t.length = 0,
                    this.#r = pi()
            }
        }
        [Symbol.asyncIterator]() {
            return this.iterate()
        }
    }
;

var Sr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"];
function Do(t) {
    let e = typeof t == "string" ? new TextEncoder().encode(t) : t instanceof Uint8Array ? t : new Uint8Array(t), n = "", r, a = e.length;
    for (r = 2; r < a; r += 3)
        n += Sr[e[r - 2] >> 2],
            n += Sr[(e[r - 2] & 3) << 4 | e[r - 1] >> 4],
            n += Sr[(e[r - 1] & 15) << 2 | e[r] >> 6],
            n += Sr[e[r] & 63];
    return r === a + 1 && (n += Sr[e[r - 2] >> 2],
        n += Sr[(e[r - 2] & 3) << 4],
        n += "=="),
    r === a && (n += Sr[e[r - 2] >> 2],
        n += Sr[(e[r - 2] & 3) << 4 | e[r - 1] >> 4],
        n += Sr[(e[r - 1] & 15) << 2],
        n += "="),
        n
}

function mk(t) {
    let e = new DOMParser().parseFromString(t, "text/xml")
        , n = e.getElementsByTagNameNS(kc, "p")
        , r = [];
    return [...n].forEach(a=>{
            let i = a.textContent || "";
            try {
                if (a.childNodes[0].nodeType == Node.TEXT_NODE && a.childNodes[0].textContent?.trim()) {
                    let o = a.childNodes[0];
                    if (i.length <= 1)
                        return;
                    o.textContent = i,
                        a.innerHTML = o.textContent,
                        r.push(a.childNodes[0])
                } else {
                    let s = a.getElementsByTagNameNS(kc, "span")[0];
                    if (!s || i.length <= 1)
                        return;
                    s.innerHTML = i.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
                        a.innerHTML = s.outerHTML,
                        s = a.getElementsByTagNameNS(kc, "span")[0],
                        r.push(s)
                }
            } catch {}
        }
    ),
        {
            doc: e,
            subtitles: r
        }
}

function fk(t) {
    let e = new URL(t)
        , n = e.pathname.split("/");
    n.pop();
    let r = n.join("/");
    return `${e.origin}${r}`
}
function hk(t) {
    let e = [];
    for (let n of t.split(`
`)) {
        if (!n.startsWith("#EXT-X-MEDIA:TYPE=SUBTITLES"))
            continue;
        let r = {};
        n.substring(13).split(",").forEach(i=>{
                let[o,s] = i.split("=");
                r[o.toLowerCase()] = (s || "").replace(/"/g, "")
            }
        ),
        r.forced === "NO" && e.push(r)
    }
    return e
}
function bk(t) {
    let e = [];
    for (let n of t.split(`
`)) {
        if (n.startsWith('EXT-X-DS-MARKER:ID="INT-END"'))
            break;
        n.endsWith(".vtt") && e.push(n)
    }
    return e
}


function F8(t) {
    return Jt(t) ? !0 : new Date(t.createTime) < new Date("2023-08-19T23:59:59")
}
function M8() {
    let[t,e] = se(null);
    return Ae(()=>{
            Mt.get(Ft, null).then(n=>{
                    e(n)
                }
            )
        }
        , [e]),
        t
}
function zv(t) {
    return (location.href?.indexOf("popup.html") > 0 ? Wa : ce)({
        responseType: "json",
        url: ns + "/v1/user/settings",
        method: "get",
        headers: {
            token: t
        }
    }).then(n=>n.data)
}
function Wm(t, e) {
    return (location.href?.indexOf("popup.html") > 0 ? Wa : ce)({
        responseType: "json",
        url: ns + "/v1/user/settings",
        method: "post",
        headers: {
            token: t,
            "content-type": "application/json"
        },
        body: JSON.stringify(e)
    }).then(r=>r.data)
}


async function Ov(t, e, n) {
    try {
        if (e === null)
            return "noupdate";
        let r = await zv(t)
            , a = await Zt();
        a.accountLastSyncedAt = Date.now(),
            B.debug("settings", e),
            B.debug("local settings.updatedAt", e.updatedAt),
            B.debug("remote settings.updatedAt", r.updatedAt),
            B.debug("last synced at", a.accountLastSyncedAt);
        let i = !1;
        if (e.updatedAt && (!r?.updatedAt || Object.keys(r).length <= 1) && (i = !0),
            B.debug("isUpload", i),
            i)
            return await Wm(t, e),
                await Xt(a),
                "upload";
        let o = !0;
        return (!r?.updatedAt || Object.keys(r).length <= 1) && (o = !1),
            o ? (await n(r),
                await Xt(a),
                "override") : (await Xt(a),
                "noupdate")
    } catch (r) {
        throw up(r),
            r
    }
}

async function l9(t) {
    debugger;

    let e = t.detail
        , n = fn();
    await Ov(e.token, n, mn),
        Mt.set(Ft, e);
    let r = await Mt.get(W0, !1);
    Mt.set(W0, !1),
        document.dispatchEvent(new CustomEvent("immersiveTranslateDocumentMessageUserResult",{
            detail: r ? "close" : "success"
        })),
        sd()
}
function c9(t) {
    debugger;

    B.debug("update user info", t);
    let e = t.detail;
    Mt.set(Ft, e),
        sd()
}


async function p9(t, e) {
    let n = e.detail;
    if (t.rule.id != "immersive")
        return;
    let r = n.translateService;
    if (!r)
        return;
    let a = n.provider
        , i = await fn();
    i.translationService = r,
    a && i?.translationServices?.[r]?.provider && (i.translationServices[r].provider = a),
        i.translationServiceChangedbyUserAt = new Date().toISOString(),
        mn(i)
}


function j7(t, e=3e3) {
    return new Promise((n,r)=>{
            let a = e ? setTimeout(()=>{
                    n(new Error("timeout"))
                }
                , e) : void 0
                , i = setInterval(()=>{
                    t.every(s=>document.querySelector(s) !== null) && (clearInterval(i),
                    a && clearTimeout(a),
                        n(null))
                }
                , 50)
        }
    )
}


function T9() {
    let t = [...document.querySelectorAll("iframe")];
    for (let e of t) {
        let n = e.contentDocument;
        if (!n)
            continue;
        let r = n.querySelectorAll("." + yt);
        for (let a of r)
            a.remove()
    }
    gn("Original")
}
async function h9() {
    let t = [...document.querySelectorAll("iframe")]
        , e = "";
    for (let r of t) {
        let a = r.contentDocument;
        if (!a)
            continue;
        let i = a.body;
        if (i && (e = e + i.innerText || "",
        e.length > 1e3))
            break
    }
    let n = await Ie({
        text: e,
        pageLangs: ["en"]
    });
    return qn(n),
        n
}
