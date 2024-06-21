var Mc = class extends je {
    autoShowObserver = null;
    videoSrc = null;
    subtitleMap = {};
    currentLang = "en";
    mutationVideoChange() {
        let e = this.config;
        this.autoShowObserver && this.autoShowObserver.disconnect(),
            this.autoShowObserver = new MutationObserver(()=>{
                    if (e.videoSelector) {
                        let n = document.querySelector(e.videoSelector)
                            , r = n && n.getAttribute("src");
                        r && r != this.videoSrc && (this.videoSrc = r,
                            this.subtitleMap = {})
                    }
                    if (e.activeLangSelector) {
                        let n = document.querySelector(e.activeLangSelector);
                        if (!n)
                            return;
                        let r = Tk(n?.textContent);
                        if (r && r == this.currentLang)
                            return;
                        this.currentLang = r,
                            this.attachMultiSubtitle(r)
                    }
                }
            ),
            this.autoShowObserver.observe(document, {
                subtree: !0,
                childList: !0
            })
    }
    loadSubtitleWithFetch(e, n) {
        return this.loadSubtitle(e, n)
    }
    async loadSubtitle(e, n) {
        try {
            let r = await this.fetchSubtitle(e, n);
            if (!r)
                return null;
            let a = fa(r)
                , i = await Pl(a.subtitles.map(o=>o.text).join(" "));
            return nt(he(i), this.ctx.targetLanguage) || (this.subtitleMap[i] = a,
            i === this.currentLang && this.attachMultiSubtitle(i)),
                null
        } catch (r) {
            return B.error(r),
                null
        }
    }
    attachMultiSubtitle(e) {
        if (!e || e == "auto" || !this.config.attachRule?.appendSelector)
            return;
        let n = this.subtitleMap[e];
        n && (qe(this.ctx, e),
            qr(this.ctx, this.config.attachRule?.appendSelector || "", {
                videoSelector: this.config.videoSelector || "video",
                subtitleItems: n.subtitles,
                ctx: this.ctx,
                lang: e
            }))
    }
    async fetchSubtitle(e, n) {
        let r = await fetch(e, n);
        if (!r.ok)
            throw new Error("request subtitle error");
        return (await r.text() || "").replace(/\r\n/g, `
`)
    }
}
    , JT = {
    af: "Afrikaans",
    am: "Amharic",
    ar: "Arabic",
    auto: "Automatic",
    az: "Azerbaijani",
    be: "Belarusian",
    bg: "Bulgarian",
    bn: "Bengali",
    bs: "Bosnian",
    ca: "Catalan",
    ceb: "Cebuano",
    co: "Corsican",
    cs: "Czech",
    cy: "Welsh",
    da: "Danish",
    de: "German",
    el: "Greek",
    en: "English",
    eo: "Esperanto",
    es: "Spanish",
    et: "Estonian",
    eu: "Basque",
    fa: "Persian",
    fi: "Finnish",
    fil: "Filipino",
    fj: "Fijian",
    fr: "French",
    fy: "Frisian",
    ga: "Irish",
    gd: "Scots Gaelic",
    gl: "Galician",
    gu: "Gujarati",
    ha: "Hausa",
    haw: "Hawaiian",
    he: "Hebrew",
    hi: "Hindi",
    hmn: "Hmong",
    hr: "Croatian",
    ht: "Haitian Creole",
    hu: "Hungarian",
    hy: "Armenian",
    id: "Indonesian",
    ig: "Igbo",
    is: "Icelandic",
    it: "Italian",
    ja: "Japanese",
    jw: "Javanese",
    ka: "Georgian",
    kk: "Kazakh",
    km: "Khmer",
    kn: "Kannada",
    ko: "Korean",
    ku: "Kurdish",
    ky: "Kyrgyz",
    la: "Latin",
    lb: "Luxembourgish",
    lo: "Lao",
    lt: "Lithuanian",
    lv: "Latvian",
    mg: "Malagasy",
    mi: "Maori",
    mk: "Macedonian",
    ml: "Malayalam",
    mn: "Mongolian",
    mr: "Marathi",
    ms: "Malay",
    mt: "Maltese",
    mww: "Hmong Daw",
    my: "Burmese",
    ne: "Nepali",
    nl: "Dutch",
    no: "Norwegian",
    ny: "Nyanja (Chichewa)",
    otq: "Quer\xE9taro Otomi",
    pa: "Punjabi",
    pl: "Polish",
    ps: "Pashto",
    pt: "Portuguese",
    "pt-br": "Portuguese (Brazil)",
    ro: "Romanian",
    ru: "Russian",
    sd: "Sindhi",
    si: "Sinhala (Sinhalese)",
    sk: "Slovak",
    sl: "Slovenian",
    sm: "Samoan",
    sn: "Shona",
    so: "Somali",
    sq: "Albanian",
    sr: "Serbian",
    "sr-Cyrl": "Serbian (Cyrillic)",
    "sr-Latn": "Serbian (Latin)",
    st: "Sesotho",
    su: "Sundanese",
    sv: "Swedish",
    sw: "Swahili",
    ta: "Tamil",
    te: "Telugu",
    tg: "Tajik",
    th: "Thai",
    tlh: "Klingon",
    "tlh-Qaak": "Klingon (pIqaD)",
    to: "Tongan",
    tr: "Turkish",
    ty: "Tahitian",
    ug: "Uyghur",
    uk: "Ukrainian",
    ur: "Urdu",
    uz: "Uzbek",
    vi: "Vietnamese",
    wyw: "Welayta",
    xh: "Xhosa",
    yi: "Yiddish",
    yo: "Yoruba",
    yua: "Yucatec Maya",
    yue: "Cantonese",
    bo: "Tibetan",
    sa: "Sanskrit",
    "zh-CN": "Chinese (Simplified)",
    "zh-TW": "Chinese (Traditional)",
    zu: "Zulu"
};
function Tk(t) {
    if (!t)
        return null;
    let e = {};
    return Object.keys(JT).forEach(n=>{
            let r = JT[n];
            e[r] = n
        }
    ),
        e[t]
}
