"use strict";


var B0 = "immersiveTranslateBingGlobalState"
    , I0 = "immersiveTranslateYandexGlobalState";

var Ua = "Immersive Translate"
    , Q = "immersive-translate";
var me = "immersiveTranslate";
var K4 = me + "GoogleAccessToken"
    , G4 = me + "AuthFlow";
var VC = me + "AuthState"
    , ju = me + "IframeMessage"
    , BO = me + "WaitForRateLimit"
    , Hu = me + "DocumentMessageAsk"
    , _t = me + "DocumentMessageTellThirdParty"
    , qa = me + "showError"
    , $4 = me + "DocumentMessageThirdPartyTell"
    , V4 = me + "DocumentMessageEventUpload"
    , Wu = me + "DocumentMessageHandler"
    , Ku = `${me}Share`
    , Qo = `${me}ToggleMouseHoverTranslateDirectly`
    , Y4 = `${me}ReqDraft`
    , Q4 = `${me}ResDraft`
    , YC = `${me}Container`
    , J4 = `${me}SpecifiedContainer`
    , Xr = "buildinConfig"
    , Jo = "localConfig"
    , R0 = "openOptionsPage"
    , O0 = "openAboutPage";
var z0 = "openEbookViewer"
    , N0 = "openEbookBuilder";
var ja = `${me}PageTranslatedStatus`
    , IO = `${me}PageUrlChanged`
    , Mr = `${me}ReceiveCommand`
    , Z4 = me + "LastUseMouseHoverTime"
    , Gu = me + "LastUseInputTime"
    , Xn = me + "LastUseManualTranslatePageTime"
    , RO = `${me}PopupReceiveMessage`
    , QC = "immersivetranslate.com"
    , JC = "config.immersivetranslate.com"
    , OO = `https://${QC}/`
    , Zo = `https://${JC}/default_config.json`
    , zO = `${me}Mark`
    , xn = `${me}Root`
    , X4 = `${me}Walked`
    , NO = `data-${Q}-walked`
    , eb = `${me}Paragraph`
    , tb = `data-${Q}-paragraph`
    , dr = `data-${Q}-translation-element-mark`
    , nb = `${me}TranslationElementMark`
    , UO = `${me}TranslatedMark`
    , rb = `${me}LoadingId`
    , U0 = `data-${Q}-loading-id`
    , ab = `${me}ErrorId`
    , $u = `data-${Q}-error-id`
    , ZC = `${me}AtomicBlockMark`
    , ib = `${me}ExcludeMark`
    , qO = `data-${Q}-exclude-mark`
    , XC = `${me}StayOriginalMark`
    , jO = `${me}PreWhitespaceMark`
    , Vu = `${me}InlineMark`
    , ob = `${me}BlockMark`
    , HO = `${me}Left`
    , WO = `${me}Right`
    , KO = `${me}Width`
    , GO = `${me}Height`
    , $O = `${me}Top`
    , VO = `${me}FontSize`
    , Xo = "lastRunTime"
    , YO = `${me}GlobalStyleMark`
    , es = ["@", "#"]
    , Yu = " --- "
    , sb = `
`
    , yt = `${Q}-target-wrapper`
    , QO = `${Q}-pdf-target-container`
    , Qu = `${Q}-target-inner`
    , JO = `${Q}-source-wrapper`
    , q0 = `${Q}-target-translation-block-wrapper`
    , ZO = `${Q}-root-translation-theme`
    , Di = `${me}RootTranslationTheme`
    , ub = `${Q}-target-translation-vertical-block-wrapper`
    , XO = `${Q}-target-translation-pdf-block-wrapper`
    , lb = `${Q}-target-translation-pre-whitespace`
    , j0 = `${Q}-target-translation-inline-wrapper`;



var cb = {
    underline: [{
        name: "borderColor",
        required: !1,
        type: "color"
    }],
    nativeUnderline: [{
        name: "borderColor",
        required: !1,
        type: "color"
    }],
    nativeDashed: [{
        name: "borderColor",
        required: !1,
        type: "color"
    }],
    nativeDotted: [{
        name: "borderColor",
        required: !1,
        type: "color"
    }],
    dotted: [{
        name: "borderColor",
        required: !1,
        type: "color"
    }],
    dividingLine: [{
        name: "borderColor",
        required: !1,
        type: "color"
    }],
    highlight: [{
        name: "backgroundColor",
        required: !1,
        type: "color"
    }],
    marker: [{
        name: "backgroundColor",
        required: !1,
        type: "color"
    }],
    dashed: [{
        name: "borderColor",
        required: !1,
        type: "color"
    }],
    blockquote: [{
        name: "borderColor",
        required: !1,
        type: "color"
    }],
    thinDashed: [{
        name: "borderColor",
        required: !1,
        type: "color"
    }],
    dashedBorder: [{
        name: "borderRadius",
        required: !1,
        type: "number",
        default: "0"
    }, {
        name: "borderColor",
        required: !1,
        type: "color"
    }],
    solidBorder: [{
        name: "borderRadius",
        required: !1,
        type: "number",
        default: "0"
    }, {
        name: "borderColor",
        required: !1,
        type: "color"
    }],
    marker2: [{
        name: "backgroundColor",
        required: !1,
        type: "color"
    }],
    wavy: [{
        name: "borderColor",
        required: !1,
        type: "color"
    }],
    opacity: [{
        name: "opacity",
        required: !1,
        type: "number",
        default: 10
    }]
}
    , kn = ["auto", "zh-CN", "zh-TW", "en", "ja", "ko", "es", "de", "fr", "pt", "pt-br", "ru", "ar", "it", "ms", "id", "vi", "af", "th", "ur", "yue", "zh-CN-NE", "bo", "wyw", "am", "az", "be", "bg", "bn", "bs", "ca", "ceb", "co", "cs", "cy", "da", "el", "eo", "et", "eu", "fa", "fi", "fil", "fj", "fy", "ga", "gd", "gl", "gu", "ha", "haw", "he", "hi", "hmn", "hr", "ht", "hu", "hy", "ig", "is", "jw", "ka", "kk", "km", "kn", "ku", "ky", "la", "lb", "lo", "lt", "lv", "mg", "mi", "mk", "ml", "mn", "mr", "mt", "mww", "my", "ne", "nl", "no", "ny", "otq", "pa", "pl", "ps", "ro", "sa", "sd", "si", "sk", "sl", "sm", "sn", "so", "sq", "sr", "sr-Cyrl", "sr-Latn", "st", "su", "sv", "sw", "ta", "te", "tg", "tlh", "tlh-Qaak", "to", "tr", "ty", "ug", "uk", "uz", "xh", "yi", "yo", "yua", "zu"]
    , db = {
    af: "Afrikaans",
    am: "Amharic",
    ar: "Arabic",
    auto: "Auto Detect",
    az: "Azerbaijani",
    be: "Belarusian",
    bg: "Bulgarian",
    tn: "Zana",
    bn: "Bengali",
    bs: "Bosnian",
    bo: "Tibetan",
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
    sa: "Sanskrit",
    fa: "Persian",
    fi: "Finnish",
    fil: "Filipino",
    fj: "Fijian",
    fr: "French",
    fy: "Frisian",
    ga: "Irish",
    gd: "Scottish Gaelic",
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
    ny: "Chichewa",
    otq: "Quer\xE9taro Otomi",
    pa: "Punjabi",
    pl: "Polish",
    ps: "Pashto",
    pt: "Portuguese",
    "pt-br": "Portuguese (Brazil)",
    ro: "Romanian",
    ru: "Russian",
    sd: "Sindhi",
    si: "Sinhala",
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
    "tlh-Qaak": "Klingon (piqaD)",
    to: "Tongan",
    tr: "Turkish",
    ty: "Tahitian",
    ug: "Uyghur",
    uk: "Ukrainian",
    ur: "Urdu",
    uz: "Uzbek",
    vi: "Vietnamese",
    wyw: "Classical Chinese",
    xh: "Xhosa",
    placeholder: "Please Select",
    yi: "Yiddish",
    yo: "Yoruba",
    yua: "Yucatec Maya",
    yue: "Cantonese (Traditional)",
    "zh-CN": "Simplified Chinese",
    "zh-TW": "Traditional Chinese",
    "zh-CN-NE": "Northeastern Chinese",
    zu: "Zulu",
    "<all>": "All Languages"
}
    , pb = {
    placeholder: "\u8BF7\u9009\u62E9",
    af: "\u5357\u975E\u8377\u5170\u8BED",
    am: "\u963F\u59C6\u54C8\u62C9\u8BED",
    ar: "\u963F\u62C9\u4F2F\u8BED",
    auto: "\u81EA\u52A8\u68C0\u6D4B",
    az: "\u963F\u585E\u62DC\u7586\u8BED",
    be: "\u767D\u4FC4\u7F57\u65AF\u8BED",
    bg: "\u4FDD\u52A0\u5229\u4E9A\u8BED",
    tn: "\u8D5E\u7EB3\u8BED",
    bn: "\u5B5F\u52A0\u62C9\u8BED",
    bs: "\u6CE2\u65AF\u5C3C\u4E9A\u8BED",
    bo: "\u85CF\u8BED",
    ca: "\u52A0\u6CF0\u7F57\u5C3C\u4E9A\u8BED",
    ceb: "\u5BBF\u52A1\u8BED",
    co: "\u79D1\u897F\u5609\u8BED",
    cs: "\u6377\u514B\u8BED",
    cy: "\u5A01\u5C14\u58EB\u8BED",
    da: "\u4E39\u9EA6\u8BED",
    de: "\u5FB7\u8BED",
    el: "\u5E0C\u814A\u8BED",
    en: "\u82F1\u8BED",
    eo: "\u4E16\u754C\u8BED",
    es: "\u897F\u73ED\u7259\u8BED",
    et: "\u7231\u6C99\u5C3C\u4E9A\u8BED",
    eu: "\u5DF4\u65AF\u514B\u8BED",
    sa: "\u68B5\u8BED",
    fa: "\u6CE2\u65AF\u8BED",
    fi: "\u82AC\u5170\u8BED",
    fil: "\u83F2\u5F8B\u5BBE\u8BED",
    fj: "\u6590\u6D4E\u8BED",
    fr: "\u6CD5\u8BED",
    fy: "\u5F17\u91CC\u65AF\u5170\u8BED",
    ga: "\u7231\u5C14\u5170\u8BED",
    gd: "\u82CF\u683C\u5170\u76D6\u5C14\u8BED",
    gl: "\u52A0\u5229\u897F\u4E9A\u8BED",
    gu: "\u53E4\u5409\u62C9\u7279\u8BED",
    ha: "\u8C6A\u8428\u8BED",
    haw: "\u590F\u5A01\u5937\u8BED",
    he: "\u5E0C\u4F2F\u6765\u8BED",
    hi: "\u5370\u5730\u8BED",
    hmn: "\u82D7\u8BED",
    hr: "\u514B\u7F57\u5730\u4E9A\u8BED",
    ht: "\u6D77\u5730\u514B\u91CC\u5965\u5C14\u8BED",
    hu: "\u5308\u7259\u5229\u8BED",
    hy: "\u4E9A\u7F8E\u5C3C\u4E9A\u8BED",
    id: "\u5370\u5EA6\u5C3C\u897F\u4E9A\u8BED",
    ig: "\u4F0A\u535A\u8BED",
    is: "\u51B0\u5C9B\u8BED",
    it: "\u610F\u5927\u5229\u8BED",
    ja: "\u65E5\u672C\u8BED",
    jw: "\u722A\u54C7\u8BED",
    ka: "\u683C\u9C81\u5409\u4E9A\u8BED",
    kk: "\u54C8\u8428\u514B\u8BED",
    km: "\u9AD8\u68C9\u8BED",
    kn: "\u5361\u7EB3\u8FBE\u8BED",
    ko: "\u97E9\u8BED",
    ku: "\u5E93\u5C14\u5FB7\u8BED",
    ky: "\u5409\u5C14\u5409\u65AF\u8BED",
    la: "\u62C9\u4E01\u8BED",
    lb: "\u5362\u68EE\u5821\u8BED",
    lo: "\u8001\u631D\u8BED",
    lt: "\u7ACB\u9676\u5B9B\u8BED",
    lv: "\u62C9\u8131\u7EF4\u4E9A\u8BED",
    mg: "\u9A6C\u62C9\u52A0\u65AF\u8BED",
    mi: "\u6BDB\u5229\u8BED",
    mk: "\u9A6C\u5176\u987F\u8BED",
    ml: "\u9A6C\u62C9\u96C5\u62C9\u59C6\u8BED",
    mn: "\u8499\u53E4\u8BED",
    mr: "\u9A6C\u62C9\u5730\u8BED",
    ms: "\u9A6C\u6765\u8BED",
    mt: "\u9A6C\u8033\u4ED6\u8BED",
    mww: "\u767D\u82D7\u8BED",
    my: "\u7F05\u7538\u8BED",
    ne: "\u5C3C\u6CCA\u5C14\u8BED",
    nl: "\u8377\u5170\u8BED",
    no: "\u632A\u5A01\u8BED",
    ny: "\u9F50\u5207\u74E6\u8BED\uFF08\u5C3C\u626C\u8D3E\u8BED\uFF09",
    otq: "\u514B\u96F7\u5854\u7F57\u5965\u6258\u7C73\u8BED",
    pa: "\u65C1\u906E\u666E\u8BED",
    pl: "\u6CE2\u5170\u8BED",
    ps: "\u666E\u4EC0\u56FE\u8BED",
    pt: "\u8461\u8404\u7259\u8BED",
    "pt-br": "\u8461\u8404\u7259\u8BED\uFF08\u5DF4\u897F\uFF09",
    ro: "\u7F57\u9A6C\u5C3C\u4E9A\u8BED",
    ru: "\u4FC4\u8BED",
    sd: "\u4FE1\u5FB7\u8BED",
    si: "\u50E7\u4F3D\u7F57\u8BED",
    sk: "\u65AF\u6D1B\u4F10\u514B\u8BED",
    sl: "\u65AF\u6D1B\u6587\u5C3C\u4E9A\u8BED",
    sm: "\u8428\u6469\u4E9A\u8BED",
    sn: "\u4FEE\u7EB3\u8BED",
    so: "\u7D22\u9A6C\u91CC\u8BED",
    sq: "\u963F\u5C14\u5DF4\u5C3C\u4E9A\u8BED",
    sr: "\u585E\u5C14\u7EF4\u4E9A\u8BED",
    "sr-Cyrl": "\u585E\u5C14\u7EF4\u4E9A\u8BED\uFF08\u897F\u91CC\u5C14\u6587\uFF09",
    "sr-Latn": "\u585E\u5C14\u7EF4\u4E9A\u8BED\uFF08\u62C9\u4E01\u6587\uFF09",
    st: "\u585E\u7D22\u6258\u8BED",
    su: "\u5DFD\u4ED6\u8BED",
    sv: "\u745E\u5178\u8BED",
    sw: "\u65AF\u74E6\u5E0C\u91CC\u8BED",
    ta: "\u6CF0\u7C73\u5C14\u8BED",
    te: "\u6CF0\u5362\u56FA\u8BED",
    tg: "\u5854\u5409\u514B\u8BED",
    th: "\u6CF0\u8BED",
    tlh: "\u514B\u6797\u8D21\u8BED",
    "tlh-Qaak": "\u514B\u6797\u8D21\u8BED\uFF08piqaD\uFF09",
    to: "\u6C64\u52A0\u8BED",
    tr: "\u571F\u8033\u5176\u8BED",
    ty: "\u5854\u5E0C\u63D0\u8BED",
    ug: "\u7EF4\u543E\u5C14\u8BED",
    uk: "\u4E4C\u514B\u5170\u8BED",
    ur: "\u4E4C\u5C14\u90FD\u8BED",
    uz: "\u4E4C\u5179\u522B\u514B\u8BED",
    vi: "\u8D8A\u5357\u8BED",
    wyw: "\u6587\u8A00\u6587",
    xh: "\u73ED\u56FE\u8BED",
    yi: "\u610F\u7B2C\u7EEA\u8BED",
    yo: "\u7EA6\u9C81\u5DF4\u8BED",
    yua: "\u5C24\u5361\u5766\u739B\u96C5\u8BED",
    yue: "\u7CA4\u8BED",
    "zh-CN": "\u7B80\u4F53\u4E2D\u6587",
    "zh-TW": "\u7E41\u4F53\u4E2D\u6587",
    "zh-CN-NE": "\u4E1C\u5317\u8BDD",
    zu: "\u7956\u9C81\u8BED",
    "<all>": "\u6240\u6709\u8BED\u8A00"
}
    , gb = {
    placeholder: "\u8ACB\u9078\u64C7",
    af: "\u963F\u975E\u5229\u5361\u8A9E",
    am: "\u963F\u59C6\u54C8\u62C9\u8A9E",
    ar: "\u963F\u62C9\u4F2F\u8A9E",
    auto: "\u81EA\u52D5\u6AA2\u6E2C",
    az: "\u963F\u585E\u62DC\u7586\u8A9E",
    be: "\u767D\u4FC4\u7F85\u65AF\u8A9E",
    bg: "\u4FDD\u52A0\u5229\u4E9E\u8A9E",
    tn: "\u8D0A\u7D0D\u8A9E",
    bn: "\u5B5F\u52A0\u62C9\u8A9E",
    bs: "\u6CE2\u65AF\u5C3C\u4E9E\u8A9E",
    bo: "\u85CF\u8A9E",
    ca: "\u52A0\u6CF0\u862D\u8A9E",
    ceb: "\u5BBF\u9727\u8A9E",
    co: "\u79D1\u897F\u5609\u8A9E",
    cs: "\u6377\u514B\u8A9E",
    cy: "\u5A01\u723E\u65AF\u8A9E",
    da: "\u4E39\u9EA5\u8A9E",
    de: "\u5FB7\u8A9E",
    el: "\u5E0C\u81D8\u8A9E",
    en: "\u82F1\u8A9E",
    eo: "\u4E16\u754C\u8A9E",
    es: "\u897F\u73ED\u7259\u8A9E",
    et: "\u611B\u6C99\u5C3C\u4E9E\u8A9E",
    eu: "\u5DF4\u65AF\u514B\u8A9E",
    sa: "\u68B5\u8A9E",
    fa: "\u6CE2\u65AF\u8A9E",
    fi: "\u82AC\u862D\u8A9E",
    fil: "\u83F2\u5F8B\u8CD3\u8A9E",
    fj: "\u6590\u6FDF\u8A9E",
    fr: "\u6CD5\u8A9E",
    fy: "\u5F17\u91CC\u897F\u8A9E",
    ga: "\u611B\u723E\u862D\u8A9E",
    gd: "\u8607\u683C\u862D\u84CB\u723E\u8A9E",
    gl: "\u52A0\u5229\u897F\u4E9E\u8A9E",
    gu: "\u53E4\u5409\u62C9\u7279\u8A9E",
    ha: "\u8C6A\u6492\u8A9E",
    haw: "\u590F\u5A01\u5937\u8A9E",
    he: "\u5E0C\u4F2F\u4F86\u8A9E",
    hi: "\u5370\u5730\u8A9E",
    hmn: "\u82D7\u8A9E",
    hr: "\u514B\u7F85\u5730\u4E9E\u8A9E",
    ht: "\u6D77\u5730\u514B\u91CC\u5967\u723E\u8A9E",
    hu: "\u5308\u7259\u5229\u8A9E",
    hy: "\u4E9E\u7F8E\u5C3C\u4E9E\u8A9E",
    id: "\u5370\u5C3C\u8A9E",
    ig: "\u4F0A\u535A\u8A9E",
    is: "\u51B0\u5CF6\u8A9E",
    it: "\u610F\u5927\u5229\u8A9E",
    ja: "\u65E5\u8A9E",
    jw: "\u722A\u54C7\u8A9E",
    ka: "\u55AC\u6CBB\u4E9E\u8A9E",
    kk: "\u54C8\u85A9\u514B\u8A9E",
    km: "\u9AD8\u68C9\u8A9E",
    kn: "\u574E\u7D0D\u9054\u8A9E",
    ko: "\u97D3\u8A9E",
    ku: "\u5EAB\u723E\u5FB7\u8A9E",
    ky: "\u5409\u723E\u5409\u65AF\u8A9E",
    la: "\u62C9\u4E01\u8A9E",
    lb: "\u76E7\u68EE\u5821\u8A9E",
    lo: "\u8001\u64BE\u8A9E",
    lt: "\u7ACB\u9676\u5B9B\u8A9E",
    lv: "\u62C9\u812B\u7DAD\u4E9E\u8A9E",
    mg: "\u99AC\u62C9\u52A0\u65AF\u8A9E",
    mi: "\u6BDB\u5229\u8A9E",
    mk: "\u99AC\u5176\u9813\u8A9E",
    ml: "\u99AC\u62C9\u96C5\u62C9\u59C6\u8A9E",
    mn: "\u8499\u53E4\u8A9E",
    mr: "\u99AC\u62C9\u5730\u8A9E",
    ms: "\u99AC\u4F86\u8A9E",
    mt: "\u99AC\u723E\u4ED6\u8A9E",
    mww: "\u767D\u82D7\u8A9E",
    my: "\u7DEC\u7538\u8A9E",
    ne: "\u5C3C\u6CCA\u723E\u8A9E",
    nl: "\u8377\u862D\u8A9E",
    no: "\u632A\u5A01\u8A9E",
    ny: "\u9F4A\u5207\u74E6\u8A9E",
    otq: "\u594E\u96F7\u5854\u7F85\u5967\u6258\u7C73\u8A9E",
    pa: "\u65C1\u906E\u666E\u8A9E",
    pl: "\u6CE2\u862D\u8A9E",
    ps: "\u666E\u4EC0\u5716\u8A9E",
    pt: "\u8461\u8404\u7259\u8A9E",
    "pt-br": "\u8461\u8404\u7259\u8A9E\uFF08\u5DF4\u897F\uFF09",
    ro: "\u7F85\u99AC\u5C3C\u4E9E\u8A9E",
    ru: "\u4FC4\u8A9E",
    sd: "\u4FE1\u5FB7\u8A9E",
    si: "\u50E7\u4F3D\u7F85\u8A9E",
    sk: "\u65AF\u6D1B\u4F10\u514B\u8A9E",
    sl: "\u65AF\u6D1B\u7DAD\u5C3C\u4E9E\u8A9E",
    sm: "\u85A9\u6469\u4E9E\u8A9E",
    sn: "\u7D39\u7D0D\u8A9E",
    so: "\u7D22\u99AC\u91CC\u8A9E",
    sq: "\u963F\u723E\u5DF4\u5C3C\u4E9E\u8A9E",
    sr: "\u585E\u723E\u7DAD\u4E9E\u8A9E",
    "sr-Cyrl": "\u585E\u723E\u7DAD\u4E9E\u8A9E (\u897F\u91CC\u723E\u6587)",
    "sr-Latn": "\u585E\u723E\u7DAD\u4E9E\u8A9E (\u62C9\u4E01\u6587)",
    st: "\u585E\u7D22\u6258\u8A9E",
    su: "\u5DFD\u4ED6\u8A9E",
    sv: "\u745E\u5178\u8A9E",
    sw: "\u65AF\u74E6\u5E0C\u91CC\u8A9E",
    ta: "\u6CF0\u7C73\u723E\u8A9E",
    te: "\u6CF0\u76E7\u56FA\u8A9E",
    tg: "\u5854\u5409\u514B\u8A9E",
    th: "\u6CF0\u8A9E",
    tlh: "\u514B\u6797\u8CA2\u8A9E",
    "tlh-Qaak": "\u514B\u6797\u8CA2\u8A9E (piqaD)",
    to: "\u6771\u52A0\u8A9E",
    tr: "\u571F\u8033\u5176\u8A9E",
    ty: "\u5854\u5E0C\u63D0\u8A9E",
    ug: "\u7DAD\u543E\u723E\u8A9E",
    uk: "\u70CF\u514B\u862D\u8A9E",
    ur: "\u70CF\u723E\u90FD\u8A9E",
    uz: "\u70CF\u8332\u5225\u514B\u8A9E",
    vi: "\u8D8A\u5357\u8A9E",
    wyw: "\u6587\u8A00\u6587",
    xh: "\u79D1\u85A9\u8A9E",
    yi: "\u610F\u7B2C\u7DD2\u8A9E",
    yo: "\u7D04\u9B6F\u5DF4\u8A9E",
    yua: "\u5C24\u52A0\u6566\u99AC\u96C5\u8A9E",
    yue: "\u5EE3\u6771\u8A71 (\u50B3\u7D71)",
    "zh-CN": "\u7C21\u9AD4\u4E2D\u6587",
    "zh-TW": "\u7E41\u9AD4\u4E2D\u6587",
    "zh-CN-NE": "\u6771\u5317\u8A71",
    zu: "\u7956\u9B6F\u8A9E",
    "<all>": "\u6240\u6709\u8A9E\u8A00"
};



var mb = [{
    name: "touch",
    shortcuts: [{
        command: "touchShortcutsToggleTranslatePage",
        type: "finger"
    }, {
        command: "touchShortcutsToggleTranslationMask",
        type: "finger"
    }, {
        command: "touchShortcutsToggleTranslatePageOnlyTranslation",
        type: "finger"
    }, {
        command: "touchShortcutsToggleTranslateTouchElement",
        type: "finger"
    }]
}, {
    name: "main",
    shortcuts: ["toggleTranslatePage", "shareToDraft", "translateInputBox"]
}, {
    name: "mouse",
    shortcuts: [{
        command: "mouseHoverHoldKey",
        type: "mouseHoverHoldKey"
    }, "toggleMouseHoverTranslateDirectly"]
}, {
    name: "others",
    shortcuts: ["toggleTranslationMask", "toggleTranslateToThePageEndImmediately", "toggleTranslateTheMainPage", "toggleOnlyTransation", "toggleTranslateTheWholePage", "toggleVideoSubtitlePreTranslation"]
}, {
    name: "shortcutsForTranslationServices",
    shortcuts: ["translateWithDeepL", "translateWithGoogle", "translateWithOpenAI", "translateWithBing", "translateWithTransmart", "translateWithGemini"]
}]
    , fb = ["https://immersive-translate.owenyoung.com/options/", "https://immersive-translate.owenyoung.com/auth-done/", "https://dash.immersivetranslate.com/", "https://dash.immersivetranslate.com/auth-done/", "http://localhost:8000/dist/userscript/options/", "http://localhost:8000/auth-done/", "http://192.168.50.9:8000/dist/userscript/options/", "http://192.168.31.51:8000/dist/userscript/options/", "http://192.168.1.72:8000/dist/userscript/options/", "https://www.deepl.com/translator", "translate.google.com", "http://localhost:8000/options/", "http://192.168.50.9:8000/options/", "http://192.168.31.51:8000/options/", "http://192.168.1.72:8000/options/"]
    , pr = "zh-CN";




var W4 = [{
    type: "select",
    name: "codename",
    labelKey: "field.translationEngine",
    default: "youdao",
    required: !1,
    options: [{
        label: "translationServices.google",
        value: "google"
    }, {
        label: "translationServices.deepl",
        value: "deepl"
    }, {
        label: "translationServices.youdao",
        value: "youdao"
    }, {
        label: "translationServices.tencent",
        value: "tencent"
    }, {
        label: "translationServices.aliyun",
        value: "aliyun"
    }, {
        label: "translationServices.baidu",
        value: "baidu"
    }, {
        label: "translationServices.caiyun",
        value: "caiyun"
    }, {
        label: "translationServices.wechat",
        value: "wechat"
    }, {
        label: "translationServices.ibm",
        value: "ibm"
    }, {
        label: "translationServices.azure",
        value: "azure"
    }, {
        label: "translationServices.aws",
        value: "aws"
    }]
}]
    , Ju = ["caiyun", "cai"]
    , gr = {
    bing: {
        name: "\u5FAE\u8F6F\u7FFB\u8BD1",
        homepage: "https://www.bing.com/translator"
    },
    google: {
        name: "Google",
        homepage: "https://translate.google.com/"
    },
    deepl: {
        name: "DeepL",
        homepage: "https://www.deepl.com/translator",
        docUrl: "https://immersivetranslate.com/docs/services/deepL/",
        providers: [{
            name: "pro",
            nameKey: "deepLProName",
            descriptionKey: "deepLProDescription",
            descriptionKeyForNormal: "deeplProDescriptionForNormal",
            descriptionLink1: "https://immersivetranslate.com/pricing"
        }, {
            name: "custom",
            nameKey: "deepLCustomName",
            descriptionKey: "deepLCustomDescription",
            descriptionLink1: "https://www.deepl.com/translator",
            descriptionLink2: "https://immersivetranslate.com/docs/services/deepL/"
        }],
        allProps: [{
            name: "authKey",
            providers: ["custom"],
            label: "Auth Key",
            required: !0,
            type: "password"
        }]
    },
    openai: {
        name: "Open AI",
        homepage: "https://openai.com/api/",
        docUrl: "https://immersivetranslate.com/docs/services/openai/",
        providers: [{
            name: "pro",
            nameKey: "openaiProName",
            descriptionKey: "openaiProDescription",
            descriptionKeyForNormal: "openaiProDescriptionForNormal",
            descriptionLink1: "https://immersivetranslate.com/pricing"
        }, {
            name: "custom",
            nameKey: "openaiCustomName",
            descriptionKey: "openaiCustomDescription",
            descriptionLink1: "https://immersivetranslate.com/docs/services/openai/"
        }],
        allProps: [{
            name: "APIKEY",
            providers: ["custom"],
            required: !0,
            type: "password"
        }, {
            name: "model",
            labelKey: "field.model",
            descriptionKey: "description.model",
            required: !1,
            type: "model-select",
            default: "gpt-3.5-turbo-1106",
            providers: ["custom"],
            options: [{
                providers: ["custom", "pro"],
                label: "gpt-3.5-turbo",
                value: "gpt-3.5-turbo"
            }, {
                providers: ["custom"],
                label: "gpt-3.5-turbo-0125",
                value: "gpt-3.5-turbo-0125"
            }, {
                providers: ["custom", "pro"],
                label: "gpt-3.5-turbo-1106",
                value: "gpt-3.5-turbo-1106"
            }, {
                providers: ["custom", "pro"],
                label: "gpt-3.5-turbo-0613",
                value: "gpt-3.5-turbo-0613"
            }, {
                providers: ["custom"],
                label: "gpt-4-1106-preview",
                value: "gpt-4-1106-preview"
            }, {
                providers: ["custom"],
                label: "gpt-4-0125-preview",
                value: "gpt-4-0125-preview"
            }, {
                providers: ["custom"],
                label: "gpt-4",
                value: "gpt-4"
            }]
        }, {
            name: "limit",
            required: !1,
            labelKey: "field.limitPerSecond",
            descriptionKey: "description.limitPerSecond",
            descriptionLink1: "https://immersivetranslate.com/docs/services/openai/",
            type: "number",
            default: 10,
            providers: ["custom"]
        }, {
            name: "maxTextLengthPerRequest",
            required: !1,
            labelKey: "field.maxTextLengthPerRequest",
            descriptionKey: "description.maxTextLengthPerRequest",
            type: "number",
            default: 1200,
            optional: !0
        }, {
            name: "maxTextGroupLengthPerRequest",
            required: !1,
            labelKey: "field.maxTextGroupLengthPerRequest",
            descriptionKey: "description.maxTextGroupLengthPerRequest",
            type: "number",
            default: 1,
            optional: !0
        }, {
            name: "apiUrl",
            labelKey: "field.apiUrl",
            required: !1,
            type: "text",
            default: "https://api.openai.com/v1/chat/completions",
            descriptionKey: "description.apiUrl",
            descriptionLink1: "https://immersivetranslate.com/docs/services/openai/",
            optional: !0,
            providers: ["custom"]
        }, {
            name: "systemPrompt",
            label: "System Prompt",
            required: !1,
            descriptionKey: "description.systemPrompt",
            type: "textarea",
            optional: !0,
            default: "You are a translation engine, you can only translate text and cannot interpret it, and do not explain."
        }, {
            name: "prompt",
            label: "Prompt",
            required: !1,
            descriptionKey: "description.prompt",
            type: "textarea",
            default: `Translate the text to {{to}}, please do not explain any sentences, just translate or leave them as they are.:

{{text}}`,
            optional: !0
        }, {
            name: "multiplePrompt",
            label: "Multiple Prompt",
            required: !1,
            descriptionKey: "description.multiplePrompt",
            type: "textarea",
            default: "",
            optional: !0
        }, {
            name: "subtitlePrompt",
            label: "Subtitle Prompt",
            required: !1,
            descriptionKey: "description.subtitlePrompt",
            type: "textarea",
            default: "",
            optional: !0
        }]
    },
    yandex: {
        name: "Yandex",
        homepage: "https://translate.yandex.com/"
    },
    gemini: {
        name: "Gemini",
        homepage: "https://makersuite.google.com/",
        docUrl: "https://immersivetranslate.com/docs/services/gemini/",
        beta: !0,
        allProps: [{
            name: "APIKEY",
            providers: ["custom"],
            required: !0,
            type: "password"
        }, {
            name: "model",
            labelKey: "field.model",
            descriptionKey: "description.model",
            optional: !0,
            required: !1,
            type: "model-select",
            options: [{
                label: "gemini-1.0-pro-latest",
                value: "gemini-1.0-pro-latest"
            }]
        }, {
            name: "limit",
            required: !1,
            optional: !0,
            labelKey: "field.limitPerSecond",
            descriptionKey: "description.generalLimitPerSecond",
            descriptionLink1: "https://immersivetranslate.com/docs/services/openai/",
            type: "number",
            default: 1
        }, {
            name: "maxTextLengthPerRequest",
            required: !1,
            labelKey: "field.maxTextLengthPerRequest",
            descriptionKey: "description.maxTextLengthPerRequest",
            type: "number",
            default: 1200,
            optional: !0
        }, {
            name: "maxTextGroupLengthPerRequest",
            required: !1,
            labelKey: "field.maxTextGroupLengthPerRequest",
            descriptionKey: "description.maxTextGroupLengthPerRequest",
            type: "number",
            default: 3,
            optional: !0
        }, {
            name: "apiUrl",
            labelKey: "field.apiUrl",
            required: !1,
            type: "text",
            default: "https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={key}",
            descriptionKey: "description.apiUrl",
            descriptionLink1: "https://immersivetranslate.com/docs/services/gemini/",
            optional: !0
        }, {
            name: "prompt",
            label: "Prompt",
            required: !1,
            descriptionKey: "description.prompt",
            type: "textarea",
            default: "",
            optional: !0
        }, {
            name: "multiplePrompt",
            label: "Multiple Prompt",
            required: !1,
            descriptionKey: "description.multiplePrompt",
            type: "textarea",
            default: "",
            optional: !0
        }, {
            name: "subtitlePrompt",
            label: "Subtitle Prompt",
            required: !1,
            descriptionKey: "description.subtitlePrompt",
            type: "textarea",
            default: "",
            optional: !0
        }]
    },
    claude: {
        name: "Claude",
        homepage: "https://www.anthropic.com/",
        docUrl: "https://immersivetranslate.com/docs/services/claude/",
        allProps: [{
            name: "APIKEY",
            providers: ["custom"],
            required: !0,
            type: "password"
        }, {
            name: "model",
            labelKey: "field.model",
            descriptionKey: "description.model",
            optional: !0,
            required: !1,
            type: "model-select",
            default: "claude-3-haiku-20240307",
            options: [{
                label: "claude-3-haiku-20240307",
                value: "claude-3-haiku-20240307"
            }, {
                label: "claude-3-sonnet-20240229",
                value: "claude-3-sonnet-20240229"
            }, {
                label: "claude-3-opus-20240229",
                value: "claude-3-opus-20240229"
            }, {
                label: "claude-2.1",
                value: "claude-2.1"
            }]
        }, {
            name: "limit",
            required: !1,
            optional: !0,
            labelKey: "field.limitPerSecond",
            descriptionKey: "description.generalLimitPerSecond",
            descriptionLink1: "https://immersivetranslate.com/docs/services/openai/",
            type: "number",
            default: 1
        }, {
            name: "maxTextLengthPerRequest",
            required: !1,
            labelKey: "field.maxTextLengthPerRequest",
            descriptionKey: "description.maxTextLengthPerRequest",
            type: "number",
            default: 1200,
            optional: !0
        }, {
            name: "maxTextGroupLengthPerRequest",
            required: !1,
            labelKey: "field.maxTextGroupLengthPerRequest",
            descriptionKey: "description.maxTextGroupLengthPerRequest",
            type: "number",
            default: 10,
            optional: !0
        }, {
            name: "apiUrl",
            labelKey: "field.apiUrl",
            required: !1,
            type: "text",
            default: "https://api.anthropic.com/v1/messages",
            descriptionKey: "description.apiUrl",
            descriptionLink1: "https://immersivetranslate.com/docs/services/claude/",
            optional: !0
        }, {
            name: "systemPrompt",
            label: "System Prompt",
            required: !1,
            descriptionKey: "description.systemPrompt",
            type: "textarea",
            optional: !0,
            default: "You are a translation engine, you can only translate text and cannot interpret it, and do not explain."
        }, {
            name: "prompt",
            label: "Prompt",
            required: !1,
            descriptionKey: "description.prompt",
            type: "textarea",
            default: "",
            optional: !0
        }, {
            name: "multiplePrompt",
            label: "Multiple Prompt",
            required: !1,
            descriptionKey: "description.multiplePrompt",
            type: "textarea",
            default: "",
            optional: !0
        }, {
            name: "subtitlePrompt",
            label: "Subtitle Prompt",
            required: !1,
            descriptionKey: "description.subtitlePrompt",
            type: "textarea",
            default: "",
            optional: !0
        }]
    },
    transmart: {
        name: "Transmart",
        homepage: "https://transmart.qq.com/"
    },
    youdao: {
        name: "Youdao",
        homepage: "https://youdao.com/",
        docUrl: "https://immersivetranslate.com/docs/services/youdao/",
        allProps: [{
            name: "appId",
            required: !0,
            type: "text"
        }, {
            name: "appSecret",
            required: !0,
            type: "password"
        }, {
            name: "limit",
            required: !1,
            labelKey: "field.limitPerSecond",
            descriptionKey: "description.generalLimitPerSecond",
            type: "number",
            default: 5,
            optional: !0
        }, {
            name: "maxTextLengthPerRequest",
            required: !1,
            labelKey: "field.maxTextLengthPerRequest",
            descriptionKey: "description.maxTextLengthPerRequest",
            type: "number",
            default: 1200,
            optional: !0
        }, {
            name: "maxTextGroupLengthPerRequest",
            required: !1,
            labelKey: "field.maxTextGroupLengthPerRequest",
            descriptionKey: "description.maxTextGroupLengthPerRequest",
            type: "number",
            default: 200,
            optional: !0
        }, {
            name: "domain",
            required: !1,
            labelKey: "field.domain",
            descriptionKey: "description.domain",
            descriptionLink1: "https://fanyi.youdao.com/openapi/",
            type: "text",
            default: "general",
            optional: !0
        }, {
            name: "vocabId",
            required: !1,
            labelKey: "field.vocabId",
            descriptionKey: "description.vocabId",
            type: "text",
            default: "",
            optional: !0
        }]
    },
    tencent: {
        name: "Tencent",
        homepage: "https://fanyi.qq.com/",
        docUrl: "https://immersivetranslate.com/docs/services/tencent/",
        allProps: [{
            name: "secretId",
            required: !0,
            type: "text"
        }, {
            name: "secretKey",
            required: !0,
            type: "password"
        }]
    },
    aliyun: {
        name: "Aliyun",
        homepage: "https://translate.alibaba.com/",
        docUrl: "https://immersivetranslate.com/docs/services/aliyun/",
        allProps: [{
            name: "AccessKeyID",
            required: !0,
            type: "text"
        }, {
            name: "AccessKeySecret",
            required: !0,
            type: "password"
        }, {
            name: "scene",
            labelKey: "field.scene",
            descriptionKey: "description.scene",
            descriptionLink1: "https://help.aliyun.com/document_detail/158267.html",
            required: !1,
            optional: !0,
            type: "text",
            default: "general"
        }]
    },
    azure: {
        name: "azure",
        homepage: "https://learn.microsoft.com/en-us/azure/cognitive-services/translator/text-translation-overview",
        docUrl: "https://immersivetranslate.com/docs/services/azure/",
        allProps: [{
            name: "region",
            required: !1,
            default: "eastasia",
            type: "text"
        }, {
            name: "APIKEY",
            required: !0,
            type: "password"
        }, {
            name: "apiUrl",
            labelKey: "field.apiUrl",
            required: !1,
            type: "text",
            default: "https://api.cognitive.microsofttranslator.com/",
            descriptionKey: "description.azureApiUrl",
            optional: !0
        }]
    },
    papago: {
        name: "Papago",
        homepage: "https://translate.google.com/",
        canary: !0
    },
    baidu: {
        name: "Baidu",
        homepage: "https://fanyi.baidu.com/",
        docUrl: "https://immersivetranslate.com/docs/services/baidu/",
        allProps: [{
            name: "appid",
            required: !0,
            type: "text"
        }, {
            name: "key",
            required: !0,
            type: "password"
        }, {
            name: "limit",
            required: !1,
            labelKey: "field.limitPerSecond",
            descriptionKey: "description.generalLimitPerSecond",
            type: "number",
            default: 1,
            optional: !0
        }, {
            name: "maxTextLengthPerRequest",
            required: !1,
            labelKey: "field.maxTextLengthPerRequest",
            descriptionKey: "description.maxTextLengthPerRequest",
            type: "number",
            default: 1800,
            optional: !0
        }, {
            name: "maxTextGroupLengthPerRequest",
            required: !1,
            labelKey: "field.maxTextGroupLengthPerRequest",
            descriptionKey: "description.maxTextGroupLengthPerRequest",
            type: "number",
            default: 8,
            optional: !0
        }, {
            name: "action",
            required: !1,
            labelKey: "field.action",
            descriptionKey: "description.action",
            descriptionLink1: "https://fanyi-api.baidu.com/doc/21",
            type: "boolean",
            default: !1,
            optional: !0
        }, {
            name: "domain",
            required: !1,
            labelKey: "field.domain",
            descriptionKey: "description.baiduField",
            descriptionLink1: "https://fanyi-api.baidu.com/doc/22",
            type: "text",
            default: "",
            optional: !0
        }]
    },
    volc: {
        name: "Volc",
        homepage: "https://www.volcengine.com/",
        docUrl: "https://immersivetranslate.com/docs/services/volcano/",
        allProps: [{
            name: "accessKeyId",
            required: !0,
            type: "text"
        }, {
            name: "secretAccessKey",
            required: !0,
            type: "password"
        }, {
            name: "limit",
            required: !1,
            labelKey: "field.limitPerSecond",
            descriptionKey: "description.generalLimitPerSecond",
            type: "number",
            default: 5,
            optional: !0
        }, {
            name: "maxTextLengthPerRequest",
            required: !1,
            labelKey: "field.maxTextLengthPerRequest",
            descriptionKey: "description.maxTextLengthPerRequest",
            type: "number",
            default: 1800,
            optional: !0
        }, {
            name: "maxTextGroupLengthPerRequest",
            required: !1,
            labelKey: "field.maxTextGroupLengthPerRequest",
            descriptionKey: "description.maxTextGroupLengthPerRequest",
            type: "number",
            default: 8,
            optional: !0
        }]
    },
    caiyun: {
        name: "Caiyun",
        homepage: "https://fanyi.caiyunapp.com/",
        docUrl: "https://immersivetranslate.com/docs/services/caiyun/",
        allProps: [{
            name: "token",
            required: !0,
            type: "password"
        }]
    },
    cai: {
        name: "Cai",
        homepage: "https://fanyi.caiyunapp.com/",
        alpha: !0
    },
    custom: {
        name: "Custom",
        beta: !0,
        homepage: "https://immersivetranslate.com/docs/services/custom/",
        titleKey: "description.custom",
        allProps: [{
            name: "url",
            label: "API URL",
            required: !0,
            type: "text"
        }, {
            name: "langs",
            required: !1,
            labelKey: "field.langs",
            type: "textarea",
            default: "zh-CN,en",
            optional: !0
        }, {
            name: "placeholderDelimiters",
            required: !1,
            labelKey: "field.placeholderDelimiters",
            type: "text",
            default: es,
            optional: !0
        }, {
            name: "limit",
            required: !1,
            labelKey: "field.limitPerSecond",
            descriptionKey: "description.generalLimitPerSecond",
            type: "number",
            default: 5,
            optional: !0
        }, {
            name: "maxTextLengthPerRequest",
            required: !1,
            labelKey: "field.maxTextLengthPerRequest",
            descriptionKey: "description.maxTextLengthPerRequest",
            type: "number",
            default: 1200,
            optional: !0
        }, {
            name: "maxTextGroupLengthPerRequest",
            required: !1,
            labelKey: "field.maxTextGroupLengthPerRequest",
            descriptionKey: "description.maxTextGroupLengthPerRequest",
            type: "number",
            default: 1,
            optional: !0
        }]
    },
    mock: {
        name: "Mock",
        homepage: "https://www.google.com"
    },
    mock2: {
        name: "Mock2",
        homepage: "https://www.google.com"
    },
    tenAlpha: {
        name: "TenAlpha",
        homepage: "https://fanyi.qq.com/",
        alpha: !0
    },
    you: {
        name: "You",
        alpha: !0,
        homepage: "https://youdao.com/"
    },
    openl: {
        name: "Openl",
        homepage: "https://openl.club/",
        docUrl: "https://immersivetranslate.com/docs/services/openL/",
        allProps: [...W4, {
            type: "password",
            name: "apikey",
            required: !0
        }],
        props: W4
    },
    volcAlpha: {
        name: "Volc Alpha",
        alpha: !0,
        homepage: "https://www.volcengine.com/"
    },
    d: {
        name: "D () ",
        canary: !0,
        homepage: "https://www.deepl.com/translator"
    },
    dpro: {
        name: "DPro (Canary) ",
        canary: !0,
        homepage: "https://www.deepl.com/translator"
    },
    deeplx: {
        name: "DeepLX (Beta)",
        beta: !0,
        homepage: "https://www.deepl.com/translator",
        allProps: [{
            name: "url",
            label: "API URL",
            required: !0,
            type: "text"
        }, {
            name: "limit",
            required: !1,
            labelKey: "field.limitPerSecond",
            descriptionKey: "description.generalLimitPerSecond",
            type: "number",
            default: 5,
            optional: !0
        }, {
            name: "maxTextLengthPerRequest",
            required: !1,
            labelKey: "field.maxTextLengthPerRequest",
            descriptionKey: "description.maxTextLengthPerRequest",
            type: "number",
            default: 1200,
            optional: !0
        }, {
            name: "maxTextGroupLengthPerRequest",
            required: !1,
            labelKey: "field.maxTextGroupLengthPerRequest",
            descriptionKey: "description.maxTextGroupLengthPerRequest",
            type: "number",
            default: 1,
            optional: !0
        }]
    },
    niu: {
        name: "niutrans",
        homepage: "https://niutrans.com/",
        docUrl: "https://immersivetranslate.com/docs/services/niu",
        allProps: [{
            name: "APIKEY",
            required: !0,
            type: "password"
        }]
    }
}
    , Zu = {
    type: me + "ChildFrameToRootFrameIdentifier"
}
    , H0 = ["youtube", "netflix", "webvtt", "khanacademy", "bilibili", "udemy", "hulu", "text_track", "text_track_dynamic", "general", "live", "ebutt", "disneyplus", "fmp4.xml", "multi_attach_vtt", "twitter", "subsrt", "xml", "av"]
    , ts = ["Ctrl", "Shift", "Alt", "Auto", "Off", "OtherCustom", "Other"]
    , hb = ["ctrl", "alt", "shift", "cmd", "command", "option", "control"];


// TODO:界面语言
var H4 = [{
    code: "zh-CN",
    messages: P4
}, {
    code: "zh-TW",
    messages: L4
}, {
    code: "en",
    messages: _4
}, {
    code: "ja",
    messages: F4
}, {
    code: "ar",
    messages: M4
}, {
    code: "de",
    messages: B4
}, {
    code: "es",
    messages: I4
}, {
    code: "fa",
    messages: R4
}, {
    code: "fr",
    messages: O4
}, {
    code: "hi",
    messages: z4
}, {
    code: "it",
    messages: N4
}, {
    code: "ru",
    messages: U4
}, {
    code: "ko",
    messages: q4
}, {
    code: "pt",
    messages: j4
}];


var Nt = {};
for (let t of H4)
    Nt[t.code] = t.messages;
