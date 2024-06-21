var Ty = {
    "zh-CN": {
        "languages.en": "\u82F1\u8BED",
        "languages.ja": "\u65E5\u8BED",
        "languages.ko": "\u97E9\u8BED",
        "languages.es": "\u897F\u73ED\u7259\u8BED",
        "languages.fr": "\u6CD5\u8BED",
        "languages.de": "\u5FB7\u8BED",
        "languages.it": "\u610F\u5927\u5229\u8BED",
        "languages.pt": "\u8461\u8404\u7259\u8BED",
        "languages.ru": "\u4FC4\u8BED",
        "languages.wyw": "\u6587\u8A00\u6587",
        "languages.<all>": "\u5168\u90E8"
    },
    "zh-TW": {
        "languages.en": "\u82F1\u8A9E",
        "languages.ja": "\u65E5\u8A9E",
        "languages.ko": "\u97D3\u8A9E",
        "languages.es": "\u897F\u73ED\u7259\u8A9E",
        "languages.fr": "\u6CD5\u8A9E",
        "languages.de": "\u5FB7\u8A9E",
        "languages.it": "\u610F\u5927\u5229\u8A9E",
        "languages.pt": "\u8461\u8404\u7259\u8A9E",
        "languages.ru": "\u4FC4\u8A9E",
        "languages.wyw": "\u6587\u8A00\u6587",
        "languages.<all>": "\u5168\u90E8"
    }
}
    , yy = {
    ...Nt,
    "zh-CN": {
        ...Ty["zh-CN"],
        ...Nt["zh-CN"]
    },
    "zh-TW": {
        ...Ty["zh-TW"],
        ...Nt["zh-TW"]
    }
}
    , vy = yy;


function bo(t, e, n) {
    return mr(yy, t, e, pr, n)
}

var Ta = (t,e,n,r)=>{
        let a = db[t] || t
            , i = pb[t]
            , o = gb[t]
            , s = {
            "zh-CN": i,
            "zh-TW": o,
            en: a
        };
        if (n)
            return s[t] ? s[t] : a;
        if (s[e]) {
            let u = s[e];
            return r || t === "auto" || t === "placeholder" ? u : `${u} (${a})`
        } else
            return a
    }
;
