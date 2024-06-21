function he(t) {
    if (typeof t != "string")
        return "auto";
    let e = t.toLowerCase();
    if (e === "und")
        return "auto";
    if (e === "zh" || e.startsWith("zh-hans"))
        return "zh-CN";
    if (e.startsWith("zh-hant") || e.startsWith("zh-hk") || e.startsWith("zh-tw"))
        return "zh-TW";
    if (e.startsWith("zh-"))
        return "zh-CN";
    if (e === "iw")
        return "he";
    if (e === "jv")
        return "jw";
    let n = kn.map(a=>a.toLowerCase())
        , r = n.indexOf(e);
    if (r === -1)
        if (e.indexOf("-") >= 0) {
            e = e.split("-")[0];
            let a = n.indexOf(e);
            return a === -1 ? "auto" : kn[a]
        } else
            return "auto";
    else
        return kn[r]
}

function ht() {
    return he(document?.documentElement?.lang || "en")
}
