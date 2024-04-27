"use strict";

var _i = {
    immediateTranslationTextCount: 4999,
    translationStartMode: "dynamic",
    domReadyDetectTimeout: 3e3,
    translationService: "bing",
    mouseModifierKeyPressTimeout: 400,
    immediateTranslationPattern: {
        matches: ["www.tumblr.com", "twitter.com", "*.twitter.com", "medium.com", "*.medium.com", "www.facebook.com", "www.youtube.com", "m.youtube.com", "mail.google.com", "discord.com", "google.com", "facebook.com", "*.facebook.com", "web.telegram.org", "*.instagram.com", "instagram.com", "*.slack.com", "https://old.reddit.com/", "https://www.reddit.com/r/popular/", "https://www.reddit.com/", "https://www.reddit.com/hot/", "https://www.reddit.com/new/", "https://www.reddit.com/top/", "https://www.reddit.com/.compact", "https://app.immersivetranslate.com/pdf*", "https://bsky.app"],
        excludeMatches: [],
        selectorMatches: ["meta[property='al:ios:url'][content^='medium://']"],
        selectorExcludeMatches: []
    },
    interval: 36e5,
    beta: !1,
    cache: !0,
    proOpenaiModels: ["gpt-3.5-turbo", "gpt-3.5-turbo-0613", "gpt-3.5-turbo-1106"],
    rtlLanguages: ["ar", "arc", "az", "dv", "he", "ckb", "fa", "ur"],
    translationMode: "dual",
    translationModeUrlPattern: {
        dualMatches: [],
        translationMatches: []
    },
    translationModeLanguagePattern: {
        dualMatches: [],
        translationMatches: []
    },
    enabled: !0,
    minVersion: "0.6.2",
    showOpenaiOnSafari: !0,
    showUnconfiguredTranslationServiceInPopup: !0,
    donateUrl: "https://immersivetranslate.com/pricing",
    uninstallUrl: "https://wj.qq.com/s2/12328372/04e0/",
    feedbackUrl: "https://github.com/immersive-translate/immersive-translate/issues",
    arxivRule: {
        injectContainerSelector: ".extra-services .full-text ul",
        officialHtmlSelector: "#latexml-download-link",
        validBefore: "2023-10-31",
        validOnlySelector: ".download-format",
        matches: ["https://arxiv.org/abs/*"]
    },
    translationGeneralConfig: {
        engine: "bing",
        _systemExcludeWordRegex: "\\b({word})\\b"
    },
    supportedVideoSubtitleSites: ["https://www.youtube.com[Youtube]", "https://tv.youtube.com[TV Youtube]", "https://www.netflix.com[NetFlix]", "https://www.primevideo.com[PrimeVideo]", "https://twitter.com[Twitter Spaces]", "https://play.max.com[HBO Max]", "https://vimeo.com/watch[Vimeo]", "https://www.khanacademy.org/[Khan Academy]", "https://www.coursera.org/[Coursera]", "https://www.udemy.com/[Udemy]", "https://www.bloomberg.com[Bloomberg]", "https://nebula.tv/videos[Nebula]", "https://www.bilibili.com[Bilibili]", "https://www.ted.com/[TED]", "https://frontendmasters.com[FrontendMasters]", "https://learn.codewithchris.com[CodeWithChris]", "https://www.edx.org[edX]", "https://www.skillshare.com/[Skillshare]", "https://www.bbc.com/[BBC]", "https://www.disneyplus.com/[Disney+]", "https://www.ardmediathek.de/[ARD Mediathek]", "https://www.itv.com/[ITV]", "https://www.domestika.org/[Domestika]", "https://www.artstation.com/learning[ArtStation]", "https://www.zdf.de[ZDF]", "https://www.masterclass.com[MasterClass]", "https://learn.microsoft.com[Learn Microsoft]", "https://home.mindvalley.com[Mindvalley]", "https://iview.abc.net.au/[iview]", "https://www.nma.art/[nmaArt]", "https://developer.apple.com[Developer Apple]", "https://egghead.io/[egghead.io]", "https://mubi.com/[Mubi]", "https://www.viu.com/[Viu]", "https://cn.linkedin.com/[LinkedIn]", "https://www.kanopy.com/[Kanopy]", "https://www.rachelsenglishacademy.com/[RachelsEnglishAcademy]", "https://threejs-journey.com/[three.js journey]", "https://www.iflix.com/[WeTV iflix]", "https://www.hulu.com/[Hulu]", "https://www.espn.com/[ESPN]", "https://www.imdb.com/[IMDb]", "https://www.rottentomatoes.com/[Rotten Tomatoes]", "https://fmoviesz.to/[FMovies]", "https://aniwatch.to/[AniWatch]", "https://www.iq.com/[iQIYI]", "https://www.youku.tv/[Youku]", "https://www.dailymotion.com/[Dailymotion]", "https://www.paramountplus.com/[Paramount Plus]", "https://www.starz.com/[starz]", "https://pluto.tv/[pluto]", "https://movie-web.app/[movie-web]", "https://www.unrealsenseiacademy.com/[Unreal Sensei]", "https://learn.deeplearning.ai[DeepLearning.ai]", "https://piped.video/[Piped.Video]", "https://southampton.cloud.panopto.eu[University of Southampton]"],
    isShowContextMenu: !0,
    enableInputTranslation: !0,
    enableFloatShare: !0,
    isShowInputTranslationConsent: !0,
    enableShowFloatingBallGuide: !0,
    sentryConfig: {
        enable: !1,
        contentInitTime: "init",
        sampleRate: .25,
        initOptions: {
            ignoreErrors: ["Extension context invalidated.", "ResizeObserver loop completed with undelivered notifications.", "ResizeObserver loop limit exceeded", "Non-Error promise rejection captured with keys: currentTarget, isTrusted, target, type"]
        }
    },
    enableSentryReport: !0,
    verifyRequestTimeout: 5e3,
    inactiveDays: 21,
    enableInputTranslationWithoutTriggerKey: !0,
    enableRenderHtmlTag: !1,
    autoSelectTargetLanguageAfterInstalledAt: "2024-01-04",
    defaultAlwaysTranslatedUrls: ["twitter.com", "www.reddit.com", "www.kadaza.com", "en.wikipedia.org", "*.medium.com", "news.ycombinator.com"],
    spVersion: "1.4.7",
    ispVersion: "1.0.1",
    gspVersion: "1.0.0",
    modifiedBySystem: !1,
    enableDefaultAlwaysTranslatedUrls: !0,
    isChangedAlwaysTranslatedUrls: !1,
    inputTranslationUrlPattern: {
        matches: [],
        excludeMatches: []
    },
    excludeTranslationHtmlTags: ["textarea", "input", "button", "select", "option", "iframe", "form", "body", "marquee"],
    inputTranslationService: "inherit",
    inputTranslationBlockUrls: ["*.feishu.cn", "*.larkoffice.com", "*.larksuite.com", "www.notion.so", "www.figma.com/file/*", "*.lanhuapp.com", "https://*.immersivetranslate.com/text*"],
    inputStyleBlockUrls: [],
    inputTargetLanguage: "en",
    inputStartingTriggerKey: "/",
    inputTrailingTriggerKey: "space",
    inputTrailingTriggerKeyRepeatTimes: 3,
    inputTrailingTriggerKeyTimeout: 200,
    inputTrailingMobileTriggerKeyTimeout: 300,
    mutationBlockUrls: ["*.feishu.cn", "*.larkoffice.com", "*.larksuite.com"],
    monkeyH5FloatBall: {
        enable: !0,
        blockUrls: ["*immersivetranslate.com/preview", "https://app.immersivetranslate.com/", "https://app.immersivetranslate.com/pdf-pro*"],
        clickType: "translate",
        afterInstalledAt: "",
        fixedPosition: "right"
    },
    pcFloatBall: {
        enable: !0,
        blockUrls: ["*immersivetranslate.com/preview", "https://app.immersivetranslate.com/", "https://app.immersivetranslate.com/pdf-pro*"],
        clickType: "translate",
        afterInstalledAt: "2023-10-28",
        fixedPosition: "right"
    },
    floatBallTooltipRule: {
        mainBtnTooltipImmediateShowCount: 5,
        mainBtnTooltipDelayTime: 1500,
        h5MainBtnTooltipMaxShowCount: 1
    },
    pcFloatBallMainBtnTooltipShownCount: 0,
    h5FloatBallMainBtnTooltipShownCount: 0,
    inputLanguageCodeAlias: {
        en: ["\u82F1\u6587", "\u82F1\u8BED"],
        "zh-CN": ["zh", "zh-Hant", "\u4E2D\u6587"],
        "zh-TW": ["zht", "zh-Hant", "\u7E41\u4E2D"],
        ja: ["\u65E5\u8BED", "\u65E5\u6587"],
        ko: ["\u97E9\u8BED", "\u97E9\u6587"],
        fr: ["\u6CD5\u8BED", "\u53D1\u6587"],
        es: ["\u897F\u73ED\u7259\u8BED", "\u897F\u8BED"],
        ru: ["\u4FC4\u8BED", "\u4FC4\u6587"],
        bo: ["\u85CF\u8BED"]
    },
    inputStartingTriggerKeyAlias: {
        "/": ["\u3001"],
        ".": ["\u3002"],
        ",": ["\uFF0C"],
        space: [" "],
        ";": ["\uFF1B"],
        ":": ["\uFF1A"]
    },
    blockUrls: ["https://dash.immersivetranslate.com/*", "https://immersive-translate.owenyoung.com/options/", "https://immersive-translate.owenyoung.com/auth-done/", "https://dash.immersivetranslate.com/", "https://dash.immersivetranslate.com/auth-done/", "http://localhost:8000/dist/userscript/options/", "http://localhost:8000/auth-done/", "http://192.168.50.9:8000/dist/userscript/options/", "https://www.deepl.com/translator", "translate.google.com", "http://localhost:8000/options/", "http://192.168.50.9:8000/options/", "googleads.g.doubleclick.net", "s1.hdslb.com", "oapi.dingtalk.com", "login.dingtalk.com", "imasdk.googleapis.com", "acdn.adnxs.com", "pos.baidu.com", "js-sec.indexww.com", "g.alicdn.com", "ads.pubmatic.com", "challenges.cloudflare.com", "accounts.google.com", "images-na.ssl-images-amazon.com", "tpc.googlesyndication.com", "js.stripe.com", "acdn.adnxs-simple.com", "s.union.360.cn", "s.amazon-adsystem.com", "www.recaptcha.net", "s7.addthis.com", "z.moatads.com", "https://www.marketwatch.com/static_html/daa-min.html", "tr.snapchat.com", "ct.pinterest.com", "*.moatads.com", "secure-us.imrworldwide.com", "static.noeyeon.click", "widgets.outbrain.com", "www.dianomi.com/smartads.epl", "secure-assets.rubiconproject.com", "eus.rubiconproject.com", "eus.rubiconproject.com", "i.liadm.com", "eb2.3lift.com", "googleads.g.doubleclick.net", "https://www.google.com/recaptcha/*", "ad.doubanio.com", "datawrapper.dwcdn.net"],
    telemetry: !0,
    loadingTheme: "spinner",
    canary: !1,
    translationThemePatterns: {},
    translationLanguagePattern: {
        matches: [],
        excludeMatches: []
    },
    translationServices: {
        volcAlpha: {
            placeholderDelimiters: ["{", "}", "b"]
        },
        volc: {
            placeholderDelimiters: ["{", "}", "b"]
        },
        tencent: {
            placeholderDelimiters: ["{", "}", "b"]
        },
        google: {
            requestTimeout: 15e3,
            retry: 1,
            placeholderDelimiters: ["\u{1F6A0}", "\u{1F6A0}", "b"],
            maxTextGroupLengthPerRequest: 50
        },
        transmart: {
            requestTimeout: 1e4,
            placeholderDelimiters: ["#", "#"],
            translatedPlaceholderDelimiters: ["#\\s?", "\\s?#"]
        },
        baidu: {
            placeholderDelimiters: ["#", "#"]
        },
        cai: {
            placeholderDelimiters: ["{", "}"]
        },
        caiyun: {
            placeholderDelimiters: ["{", "}"]
        },
        youdao: {
            placeholderDelimiters: ["\u{1F6A0}", "\u{1F6A0}"]
        },
        aliyun: {
            placeholderDelimiters: ["{{", "}}", "b"]
        },
        deepl: {
            immediateTranslationTextCountForImmersiveDeepl: 5e4,
            requestTimeout: 15e3,
            maxTextLengthPerRequest: 2800,
            maxTextGroupLengthPerRequest: 50,
            qualityDelimiterBetaV3: "",
            qualityNoSymoblBetaV3: "</b",
            qualityMinTextLengthV3: 40,
            placeholderDelimiters: ["{{", "}}", "b"],
            limit: 10,
            tag_handling: "none"
        },
        tenAlpha: {
            placeholderDelimiters: ["@", "#"]
        },
        mock: {
            placeholderDelimiters: ["<code>", "</code>"],
            limit: 5
        },
        custom: {
            placeholderDelimiters: ["{", "}"]
        },
        bing: {
            maxTextLengthPerRequest: 1800,
            requestTimeout: 1e4,
            retry: 1,
            placeholderDelimiters: ["<code>", "</code>", "b"]
        },
        yandex: {
            maxTextLengthPerRequest: 1e3,
            requestTimeout: 1e4,
            retry: 1,
            placeholderDelimiters: ["<code>", "</code>", "b"]
        },
        deeplx: {
            limit: 3,
            placeholderDelimiters: ["@", "#"]
        },
        d: {
            immediateTranslationTextCount: 0,
            placeholderDelimiters: ["@", "#"]
        },
        papago: {
            placeholderDelimiters: ["{", "}"]
        },
        dpro: {
            apiUrl: "https://api.deepl.com/jsonrpc"
        },
        ai: {
            env: {
                imt_source_field: "text",
                imt_trans_field: "text",
                imt_sub_source_field: "source",
                imt_sub_trans_field: "translation",
                imt_yaml_item: `- id: {{id}}
  {{imt_source_field}}: {{text}}`,
                imt_subtitle_yaml_item: `- id: {{id}}
  {{imt_sub_source_field}}: {{text}}`,
                normal_result_yaml_example: `Example request:
  - id: 1
    {{imt_source_field}}: Source
Example result:
  - id: 1
    {{imt_trans_field}}: Translation`,
                subtitle_result_yaml_example: `Example request:
  - id: 1
    {{imt_sub_source_field}}: ...
  - id: 2
    {{imt_sub_source_field}}: ...
Example response:
  - id: 1
    {{imt_sub_trans_field}}: Translation...
    {{imt_sub_source_field}}: ...
  - id: 2
    {{imt_sub_trans_field}}: Translation...
    {{imt_sub_source_field}}: ...`
            },
            systemPrompt: "You are a professional, authentic translation engine. You only return the translated text, without any explanations.",
            prompt: `Please translate into {{to}} (avoid explaining the original text):

{{text}}`,
            multiplePrompt: `Translate the {{imt_source_field}} field in the YAML-formatted text below into {{to}}, and write the translation result in the {{imt_trans_field}} field.

{{normal_result_yaml_example}}

Start:

{{yaml}}`,
            subtitlePrompt: `Translate the {{imt_sub_source_field}} field in the YAML-formatted video subtitle text below into {{to}}, and write the translation result in the {{imt_sub_trans_field}} field. Requirements:

1. You must complete each {{imt_sub_trans_field}} field and retain each {{imt_sub_source_field}} field.
2. Return parsable YAML:

{{subtitle_result_yaml_example}}

Start:

{{yaml}}`,
            langOverrides: [{
                id: "auto2zh-CN",
                systemPrompt: "\u4F60\u662F\u4E00\u4E2A\u4E13\u4E1A,\u5730\u9053\u7684\u7FFB\u8BD1\u5F15\u64CE\uFF0C\u4F60\u53EA\u8FD4\u56DE\u8BD1\u6587\uFF0C\u4E0D\u542B\u4EFB\u4F55\u89E3\u91CA",
                prompt: `\u8BF7\u7FFB\u8BD1\u4E3A {{to}}\uFF08\u907F\u514D\u89E3\u91CA\u539F\u6587\uFF09:

{{text}}`,
                multiplePrompt: `\u5C06\u4E0B\u9762 YAML \u683C\u5F0F\u7684\u6587\u672C\u4E2D\u7684 {{imt_source_field}} \u5B57\u6BB5\u7FFB\u8BD1\u4E3A {{to}}\uFF0C\u5E76\u5C06\u7FFB\u8BD1\u7ED3\u679C\u5199\u5728 {{imt_trans_field}} \u5B57\u6BB5\u4E2D

{{normal_result_yaml_example}}

\u5F00\u59CB\u7FFB\u8BD1:

{{yaml}}`,
                subtitlePrompt: `\u5C06\u4E0B\u9762 YAML \u683C\u5F0F\u7684\u89C6\u9891\u5B57\u5E55\u6587\u672C\u4E2D\u7684 {{imt_sub_source_field}} \u5B57\u6BB5\u7FFB\u8BD1\u4E3A {{to}}\uFF0C\u5E76\u5C06\u7FFB\u8BD1\u7ED3\u679C\u5199\u5728 {{imt_sub_trans_field}} \u5B57\u6BB5\u4E2D\uFF0C\u8981\u6C42\u5982\u4E0B\uFF1A

1. \u5FC5\u987B\u8865\u5168\u6BCF\u4E00\u4E2A {{imt_sub_trans_field}} \u5B57\u6BB5\uFF0C\u4FDD\u7559\u6BCF\u4E00\u4E2A {{imt_sub_source_field}} \u5B57\u6BB5\u3002
2. \u8FD4\u56DE\u53EF\u89E3\u6790\u7684 YAML \uFF1A

{{subtitle_result_yaml_example}}

\u5F00\u59CB\u7FFB\u8BD1\uFF1A

{{yaml}}`
            }, {
                id: "zh-CN2auto",
                extends: "auto2zh-CN",
                prompt: `\u8BF7\u7FFB\u8BD1\u4E3A{{to}}\uFF08\u907F\u514D\u89E3\u91CA\u539F\u6587\uFF09:

{{text}}`
            }, {
                id: "auto2zh-CN-NE",
                extends: "auto2zh-CN",
                systemPrompt: "\u4F60\u662F\u4E00\u4E2A\u4E1C\u5317\u4EBA\u7FFB\u8BD1\uFF0C\u8BF7\u7528\u4E1C\u5317\u4EBA\u7684\u53E3\u543B\u8FDB\u884C\u7FFB\u8BD1\uFF0C\u5C3D\u53EF\u80FD\u8D34\u8FD1\u751F\u6D3B,\u53EA\u8FD4\u56DE\u8BD1\u6587\uFF0C\u4E0D\u542B\u4EFB\u4F55\u89E3\u91CA"
            }, {
                id: "wyw2zh-CN",
                systemPrompt: "\u4F60\u662F\u4E00\u4E2A\u7CBE\u901A\u53E4\u6587\u7684\u5B66\u8005\uFF0C\u53EA\u8FD4\u56DE\u767D\u8BDD\u6587",
                prompt: `\u8BF7\u5C06\u6587\u8A00\u6587\u7528\u767D\u8BDD\u6587\u89E3\u91CA:

{{text}}`,
                multiplePrompt: `\u5C06\u4E0B\u9762 YAML \u683C\u5F0F\u7684\u6587\u672C\u4E2D\u7684 {{imt_source_field}} \u5B57\u6BB5\u6587\u8A00\u6587\u7FFB\u8BD1\u4E3A\u767D\u8BDD\u6587\uFF0C\u5E76\u5C06\u7FFB\u8BD1\u7ED3\u679C\u5199\u5728 {{imt_trans_field}} \u5B57\u6BB5\u4E2D

{{normal_result_yaml_example}}

\u5F00\u59CB\u7FFB\u8BD1:

{{yaml}}`
            }, {
                id: "ja2zh-CN",
                systemPrompt: "\u4F60\u662F\u4E00\u4E2A\u65E5\u8BED\u7FFB\u8BD1\u4E13\u5BB6\uFF0C\u7CBE\u901A\u4E2D\u65E5\u4E24\u79CD\u6587\u5316\uFF0C\u53EA\u8FD4\u56DE\u4E2D\u6587",
                prompt: `\u8BF7\u5C06\u65E5\u8BED\u7FFB\u8BD1\u6210\u4E2D\u6587\uFF08\u907F\u514D\u89E3\u91CA\u539F\u6587\uFF09:

{{text}}`
            }, {
                id: "auto2zh-TW",
                extends: "auto2zh-CN",
                systemPrompt: "\u4F60\u662F\u4E00\u500B\u5C08\u696D,\u9053\u5730\u7684\u7FFB\u8B6F\u5F15\u64CE\uFF0C\u4F60\u53EA\u6703\u56DE\u7E41\u9AD4\u8B6F\u6587"
            }, {
                id: "auto2fr",
                systemPrompt: "Vous \xEAtes un moteur de traduction professionnel et authentique. Vous ne retournez que le texte traduit, sans aucune explication.",
                prompt: `Veuillez traduire en {{to}} (\xE9vitez d'expliquer le texte original) :

{{text}}`,
                multiplePrompt: `Traduisez le champ {{imt_source_field}} dans le texte au format YAML ci-dessous en {{to}}, et \xE9crivez le r\xE9sultat de la traduction dans le champ {{imt_trans_field}}.

{{normal_result_yaml_example}}

Commencez :

{{yaml}}`,
                subtitlePrompt: `Traduisez le champ {{imt_sub_source_field}} dans le texte de sous-titres vid\xE9o au format YAML ci-dessous en {{to}}, et \xE9crivez le r\xE9sultat de la traduction dans le champ {{imt_sub_trans_field}}. Exigences :

1. Vous devez remplir chaque champ {{imt_sub_trans_field}} et conserver chaque champ {{imt_sub_source_field}}.
2. Retournez du YAML analysable :

{{subtitle_result_yaml_example}}

Commencez :

{{yaml}}`
            }]
        },
        gemini: {
            placeholderDelimiters: ["{{", "}}", "b"],
            disableWarning: !1,
            requestTimeout: 101e3,
            immediateTranslationTextCount: 5e3,
            translationDebounce: 300,
            interval: 1050,
            limit: .5,
            prompt: `You are a professional,authentic translation engine,only returns translations.
For example:
<Start>
Hello <Keep This Symbol>
World <Keep This Symbol>
<End>
The translation is:
<Start>
\u4F60\u597D<Keep This Symbol>
\u4E16\u754C<Keep This Symbol>
<End>

Translate the content to {{to}} Language:

<Start>{{text}}<End>`,
            model: "gemini-1.0-pro-latest",
            maxTextGroupLengthPerRequest: 10,
            maxTextLengthPerRequest: 1200,
            maxTextGroupLengthPerRequestForSubtitle: 5,
            translationTextSeparator: `
<Keep This Symbol>`,
            bodyConfigs: {
                generationConfig: {
                    temperature: .1,
                    topK: 1,
                    topP: 1,
                    maxOutputTokens: 2048,
                    stopSequences: []
                },
                safetySettings: [{
                    category: "HARM_CATEGORY_HARASSMENT",
                    threshold: "BLOCK_NONE"
                }, {
                    category: "HARM_CATEGORY_HATE_SPEECH",
                    threshold: "BLOCK_NONE"
                }, {
                    category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                    threshold: "BLOCK_NONE"
                }, {
                    category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                    threshold: "BLOCK_NONE"
                }]
            }
        },
        "gemini.add_v.[1.3.4]": {
            extends: "ai",
            translationTextSeparator: `

%%

`
        },
        claude: {
            extends: "ai",
            placeholderDelimiters: ["{{", "}}", "b"],
            requestTimeout: 101e3,
            immediateTranslationTextCount: 5e3,
            translationDebounce: 300,
            interval: 1050,
            limit: .3,
            maxTextGroupLengthPerRequest: 20,
            maxTextLengthPerRequest: 2e3,
            maxTextGroupLengthPerRequestForSubtitle: 5,
            bodyConfigs: {
                max_tokens: 2048
            },
            translationTextSeparator: `

%%

`
        },
        openai: {
            placeholderDelimiters: ["{{", "}}", "b"],
            ignoreResRegexs: ["^\u62B1\u6B49.*\u8981\u6C42", "^\u62B1\u6B49.*\u7FFB\u8BD1", "^\u5F88\u62B1\u6B49.*\u7FFB\u8BD1", "^\u6211\u5F88\u62B1\u6B49.*\u7FFB\u8BD1", "^\u5BF9\u4E0D\u8D77\uFF0C\u6211\u65E0\u6CD5\u76F4\u63A5\u7FFB\u8BD1", "^\u62B1\u6B49.*\u6211\u65E0\u6CD5", "^I'm sorry, but I cannot", "^I'm sorry, but I cannot provide", "^\u8FD9\u53E5\u8BDD\u7684\u5185\u5BB9\u4E0D\u9002\u5408\u5728\u6B64\u5E73\u53F0\u4E0A\u8BA8\u8BBA", "^\u8FD9\u53E5\u8BDD\u4E0D\u9002\u5408\u5728\u516C\u5171\u573A\u5408\u8BA8\u8BBA", "\u5730\u9053\u7684\u7FFB\u8BD1\u5F15\u64CE\uFF0C\u4F60\u53EA\u8FD4\u56DE\u8BD1\u6587\uFF0C\u4E0D\u542B\u4EFB\u4F55\u89E3\u91CA"],
            immediateTranslationTextCount: 3e3,
            translationDebounce: 300,
            interval: 1350,
            requestTimeout: 101e3,
            systemPrompt: "You are a professional, authentic translation engine, only returns translations.",
            prompt: `Translate the text to {{to}} Language, please do not explain my original text.:

{{text}}`,
            multiplePrompt: `Please translate these subtitles into {{to}}. For smoothness, you may need to include part of the previous sentence in the next sentence. For example, if I give you 5 paragraphs in English, you must return 5 paragraphs of translation.:

{{text}}`,
            model: "gpt-3.5-turbo-0613",
            proModel: "gpt-3.5-turbo-0613",
            proLimit: 10,
            overrides: [{
                if: "targetLanguage == zh-CN",
                prompt: `\u8BF7\u7FFB\u8BD1\u4E3A\u7B80\u4F53\u4E2D\u6587\uFF08\u907F\u514D\u89E3\u91CA\u539F\u6587\uFF09:

 {{text}}`,
                systemPrompt: "\u4F60\u662F\u4E00\u4E2A\u4E13\u4E1A,\u5730\u9053\u7684\u7FFB\u8BD1\u5F15\u64CE\uFF0C\u4F60\u53EA\u8FD4\u56DE\u8BD1\u6587\uFF0C\u4E0D\u542B\u4EFB\u4F55\u89E3\u91CA",
                multiplePrompt: `\u8BF7\u628A\u8FD9\u51E0\u53E5\u5B57\u5E55\u7FFB\u8BD1\u4E3A\u7B80\u4F53\u4E2D\u6587\uFF0C\u4E3A\u4E86\u901A\u987A\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u5728\u4E0B\u4E00\u53E5\u4E2D\u5305\u542B\u4E0A\u4E00\u53E5\u7684\u90E8\u5206\u5185\u5BB9\uFF0C\u6BD4\u5982\u6211\u7ED9\u4E86\u4F60 5 \u6BB5\u82F1\u6587\uFF0C\u4F60\u5C31\u5FC5\u987B\u8FD4\u56DE 5 \u6BB5\u8BD1\u6587

{{text}}`
            }, {
                if: "targetLanguage == zh-CN-NE",
                systemPrompt: "\u4F60\u662F\u4E00\u4E2A\u4E1C\u5317\u4EBA\u7FFB\u8BD1\uFF0C\u8BF7\u7528\u4E1C\u5317\u4EBA\u7684\u53E3\u543B\u8FDB\u884C\u7FFB\u8BD1\uFF0C\u5C3D\u53EF\u80FD\u8D34\u8FD1\u751F\u6D3B,\u53EA\u8FD4\u56DE\u8BD1\u6587\uFF0C\u4E0D\u542B\u4EFB\u4F55\u89E3\u91CA",
                prompt: `\u8BF7\u7FFB\u8BD1\u4E3A{{to}}\uFF08\u907F\u514D\u89E3\u91CA\u539F\u6587\uFF09:

 {{text}}`,
                multiplePrompt: `\u8BF7\u628A\u8FD9\u51E0\u53E5\u5B57\u5E55\u7FFB\u8BD1\u4E3A{{to}}\uFF0C\u4E3A\u4E86\u901A\u987A\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u5728\u4E0B\u4E00\u53E5\u4E2D\u5305\u542B\u4E0A\u4E00\u53E5\u7684\u90E8\u5206\u5185\u5BB9\uFF0C\u6BD4\u5982\u6211\u7ED9\u4E86\u4F60 5 \u6BB5\u82F1\u6587\uFF0C\u4F60\u5C31\u5FC5\u987B\u8FD4\u56DE 5 \u6BB5\u8BD1\u6587

{{text}}`
            }, {
                if: "sourceLanguage == zh-CN",
                systemPrompt: "\u4F60\u662F\u4E00\u4E2A\u4E13\u4E1A,\u5730\u9053\u7684\u7FFB\u8BD1\u5F15\u64CE\uFF0C\u4F60\u53EA\u8FD4\u56DE\u8BD1\u6587\uFF0C\u4E0D\u542B\u4EFB\u4F55\u89E3\u91CA",
                prompt: `\u8BF7\u7FFB\u8BD1\u4E3A{{to}}\uFF08\u907F\u514D\u89E3\u91CA\u539F\u6587\uFF09:

 {{text}}`,
                multiplePrompt: `\u8BF7\u628A\u8FD9\u51E0\u53E5\u5B57\u5E55\u7FFB\u8BD1\u4E3A{{to}}\uFF0C\u4E3A\u4E86\u901A\u987A\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u5728\u4E0B\u4E00\u53E5\u4E2D\u5305\u542B\u4E0A\u4E00\u53E5\u7684\u90E8\u5206\u5185\u5BB9\uFF0C\u6BD4\u5982\u6211\u7ED9\u4E86\u4F60 5 \u6BB5\u82F1\u6587\uFF0C\u4F60\u5C31\u5FC5\u987B\u8FD4\u56DE 5 \u6BB5\u8BD1\u6587

{{text}}`
            }, {
                if: "targetLanguage == zh-CN && sourceLanguage == wyw",
                systemPrompt: "\u4F60\u662F\u4E00\u4E2A\u7CBE\u901A\u53E4\u6587\u7684\u5B66\u8005\uFF0C\u53EA\u8FD4\u56DE\u767D\u8BDD\u6587",
                prompt: `\u8BF7\u5C06\u6587\u8A00\u6587\u7528\u767D\u8BDD\u6587\u89E3\u91CA:

 {{text}}`
            }, {
                if: "targetLanguage == zh-CN && sourceLanguage == ja",
                systemPrompt: "\u4F60\u662F\u4E00\u4E2A\u65E5\u8BED\u7FFB\u8BD1\u4E13\u5BB6\uFF0C\u7CBE\u901A\u4E2D\u65E5\u4E24\u79CD\u6587\u5316\uFF0C\u53EA\u8FD4\u56DE\u4E2D\u6587",
                prompt: `\u8BF7\u5C06\u65E5\u8BED\u7FFB\u8BD1\u6210\u4E2D\u6587\uFF08\u907F\u514D\u89E3\u91CA\u539F\u6587\uFF09:

 {{text}}`
            }, {
                if: "targetLanguage == zh-TW",
                prompt: `\u8ACB\u7FFB\u8B6F\u70BA\u7E41\u9AD4\u4E2D\u6587\uFF08\u907F\u514D\u89E3\u91CB\u539F\u6587\uFF09:

 {{text}}`,
                systemPrompt: "\u4F60\u662F\u4E00\u500B\u5C08\u696D,\u9053\u5730\u7684\u7FFB\u8B6F\u5F15\u64CE\uFF0C\u4F60\u53EA\u6703\u56DE\u8B6F\u6587",
                multiplePrompt: `\u8ACB\u628A\u9019\u5E7E\u53E5\u5B57\u5E55\u7FFB\u8B6F\u70BA\u7E41\u9AD4\u4E2D\u6587\uFF0C\u70BA\u4E86\u901A\u9806\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u5728\u4E0B\u4E00\u53E5\u4E2D\u5305\u542B\u4E0A\u4E00\u53E5\u7684\u90E8\u5206\u5167\u5BB9\uFF0C\u6BD4\u5982\u6211\u7D66\u4E86\u4F60 5 \u6BB5\u82F1\u6587\uFF0C\u4F60\u5C31\u5FC5\u9808\u8FD4\u56DE 5 \u6BB5\u8B6F\u6587

{{text}}`
            }, {
                if: "targetLanguage == fr",
                prompt: `Traduisez le texte en fran\xE7ais, s'il vous pla\xEEt ne pas expliquer mon texte d'origine.:

{{text}}`,
                systemPrompt: "Vous \xEAtes un moteur de traduction professionnel et authentique qui ne renvoie que des traductions.",
                multiplePrompt: `Veuillez traduire ces sous-titres en chinois simplifi\xE9. Pour plus de fluidit\xE9, vous devrez peut-\xEAtre inclure une partie de la phrase pr\xE9c\xE9dente dans la phrase suivante. Par exemple, si je vous donne 5 paragraphes en anglais, vous devez renvoyer 5 paragraphes de traduction:

{{text}}`
            }, {
                if: "targetLanguage == en",
                prompt: `Translate the text to {{to}} Language, please do not explain my original text.:

{{text}}`,
                systemPrompt: "You are a professional, authentic translation engine that only returns translations.",
                multiplePrompt: `Please translate these subtitles into {{to}}. For smoothness, you may need to include part of the previous sentence in the next sentence. For example, if I give you 5 paragraphs in English, you must return 5 paragraphs of translation.:

{{text}}`
            }],
            maxTextGroupLengthPerRequestForSubtitle: 5,
            translationTextSeparator: `

%%

`,
            newlinePlaceholderDelimiters: [`
<br>
`]
        },
        "openai.add_v.[1.3.4]": {
            extends: "ai",
            maxTextGroupLengthPerRequest: 3
        },
        chatgpt: {
            placeholderDelimiters: ["{{", "}}", "b"],
            immediateTranslationTextCount: 2e3,
            maxTextGroupLengthPerRequest: 1,
            maxTextLengthPerRequest: 2e3,
            prompt: `Translate the text to {{to}}:

{{text}}`,
            newlinePlaceholderDelimiters: [`

-|`, `|-

`, `
?
?-\\|\\d+\\|-
?
?`]
        },
        azure: {
            placeholderDelimiters: ["@", "#"]
        },
        you: {
            placeholderDelimiters: ["@", "#"]
        },
        openl: {
            placeholderDelimiters: ["@", "#"]
        },
        niu: {
            placeholderDelimiters: ["@", "#"]
        }
    },
    shortcuts: {
        toggleTranslatePage: "Alt+A",
        toggleTranslateTheWholePage: "Alt+W",
        toggleOnlyTransation: "",
        toggleTranslateToThePageEndImmediately: "",
        toggleTranslationMask: "",
        shareToDraft: "",
        toggleMouseHoverTranslateDirectly: ""
    },
    tempTranslateDomainMinutes: 0,
    translationParagraphLanguagePattern: {
        matches: ["onboarding.immersivetranslate.com", "www.reddit.com", "old.reddit.com", "twitter.com", "www.tumblr.com", "*.twitter.com", "medium.com", "*.medium.com", "github.com", "gist.github.com", "www.facebook.com", "www.youtube.com", "m.youtube.com", "read.readwise.io", "www.inoreader.com", "mail.google.com", "google.com", "discord.com", "*.instagram.com", "instagram.com", "web.telegram.org", "web.whatsapp.com", "*.slack.com", "*.indeed.com", "outlook.live.com", "https://bsky.app", "store.steampowered.com", "test-app.immersivetranslate.com", "app.immersivetranslate.com"],
        excludeMatches: [],
        selectorMatches: ["meta[property='al:ios:url'][content^='medium://']"],
        selectorExcludeMatches: []
    },
    sourceLanguageUrlPattern: {},
    selectTranslationFont: "",
    translationFonts: ["Microsoft YaHei", "SimSun", "NSimSun", "SimHei", "Microsoft JhengHei", "KaiTi", "FangSong", "PingFang SC", "STHeiti", "STKaiti", "STSong", "STFangsong", "STZhongsong", "STHupo", "STXinwei", "STLiti", "STXingkai", "Hiragino Sans GB", "Lantinghei SC", "Hanzipen SC", "Hannotate SC", "Songti SC", "Wawati SC", "Weibei SC", "Xingkai SC", "Yapi SC", "Yuanti SC", "Arial Unicode MS", "MingLiU-ExtB", "Malgun Gothic", "Arial", "Calibri", "Cambria", "Candara", "Consolas", "Constantia", "Corbel", "Courier New", "Georgia", "Lucida Console", "MingLiU", "PMingLiU", "MingLiU_HKSCS", "Meiryo", "MS Gothic", "MS PGothic", "MS UI Gothic", "MS Mincho", "MS PMincho", "Segoe UI", "Segoe UI Symbol", "Tahoma", "Times New Roman", "Trebuchet MS", "Verdana", "Gulim", "Dotum", "Batang", "Gungsuh", "San Francisco", "Helvetica Neue", "Hiragino Mincho ProN", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Yu Mincho", "Geeza Pro", "Al Nile", "Tehran", "Devanagari MT", "Kohinoor Devanagari", "Apple SD Gothic Neo", "Nanum Gothic"],
    generalRule: {
        _comment: "",
        isTranslateWhenServiceChanged: !0,
        glossaries: [{
            k: "LLM",
            v: ""
        }, {
            k: "LLMs",
            v: ""
        }],
        excludeRegexps: ["(&lt;\\\\/?[a-zA-Z0-9]+(?:[^&gt;]*?)&gt;)", "(<form>|<body>|<strong>|<img|<IMG|<Img|<ImG|<iMg|<iMG|<em>|<b>|</b>|<i>|</i>|<u>|</u>|<br>|<br/>)"],
        detectionServiceOrder: ["google", "bing", "transmart"],
        detectParagraphLanguage: !1,
        paragraphFirstLetterFontSize: 35,
        toastErrorMinTimes: 20,
        enableSubtitle: !1,
        "subtitle.autoEnableSubtitle": !1,
        disableNewTextTranslate: !1,
        skipEditableCheck: !1,
        mutationObserverLimitTargetSelectors: [],
        condition: {},
        normalizeBody: "",
        inputExecCommandDeleteEnable: !1,
        inputConfig: {
            clearContentEnable: !0,
            execCommandDeleteEnable: !1
        },
        mutationExcludeSelectors: ["span.highlighter--highlighted", "span.highlighter-ext", "mark", "msreadoutspan", "rw-highlight", "web-highlight", "font.immersive-translate-target-wrapper *", "pre", ".uacc-clickable"],
        mutationExcludeContainsSelectors: ["msreadoutspan", "[class*='rgh-seen-']", "[isInvalidTag]", "mh", "body", "relin-hc"],
        atomicBlockSelectors: ["relin-hc"],
        shareConfig: {
            injectCss: !0,
            removeSelectors: ["noscript", "script"]
        },
        mutationConfig: {
            consumeTimeout: 100,
            buildTimeout: 100,
            checkSelfUpdate: !0
        },
        useIframePostMessage: !1,
        searchEnhancementConfig: [],
        injectedCss: [],
        isOnBoardingPage: !1,
        isEbook: !1,
        isEbookBuilder: !1,
        ignoreZhCNandZhTW: !1,
        showSponsorOnSafari: !1,
        noTranslateRegexp: ["^\\d+.+ago$", "^\\d+\\s+MIN\\s+READ$"],
        waitForSelectors: [],
        isInjectOptionsUrl: !1,
        isInjectVersion: !1,
        isInjectMeta: !1,
        waitForSelectorsTimeout: 3e3,
        pairs: {},
        aiRule: {},
        subtitleRule: {
            isInject: !0,
            autoEnableSubtitle: !1,
            preTranslation: !1,
            humanPreferred: !0,
            disabled: !1,
            hookType: "xhr",
            showQuickButton: !0,
            backgroundColor: "#080808",
            backgroundOpacity: "75",
            sourceTextColor: "#FFFFFF",
            translationTextColor: "#FFFFFF",
            sourceFontSize: "100",
            translationMode: "dual",
            translationPosition: "bottom",
            translationFontSize: "100",
            translateGroupCount: 5,
            velocityGroup: [1, 3, 20]
        },
        bodyRule: {
            enable: !0,
            maxBodyScreenLength: 25,
            articleChildTags: ["P"],
            articleChildTagsNum: 4,
            bodyIsRoot: !1,
            humanPreferred: !0,
            preTranslation: !0,
            xpathRule: ["name:P"]
        },
        isSubtitleBuilder: !1,
        minZIndex: 0,
        initTranslationServiceAsSoonAsPossible: !0,
        targetWrapperTag: "font",
        additionalInjectedCss: [],
        isTranslateTitle: !0,
        enableSearchEnhancement: !1,
        searchEnhancementSelector: "#rhs",
        languageDetectMinTextCount: 50,
        wrapperPrefix: "smart",
        wrapperSuffix: "smart",
        isPdf: !1,
        pdfUrlExtractRule: {},
        isTransformPreTagNewLine: !1,
        urlChangeDelay: 50,
        mutationChangeDelay: 10,
        mainFrameMinTextCount: 50,
        mainFrameMinWordCount: 5,
        visibleDelay: 0,
        additionalStayOriginalSelectors: ["span.katex", "span.notranslate", ".MathJax_Preview", ".MathJax", ".MathJax_SVG", '[aria-labelledby^="MathJax-SVG"]', ".mwe-math-element", "span[translate=no]", "em[translate=no]", "code[translate=no]", "span.math.inline", "span.math.display", ".ltx_Math", ".mathjax-block", ".MathJax_CHTML", "kbd", "span.pretex-inline", "span.math-inline", ".reference-citations"],
        translationBlockStyle: "",
        isShowUserscriptPagePopup: !0,
        observeUrlChange: !1,
        paragraphMinTextCount: 4,
        paragraphMinWordCount: 2,
        shadowRootSelectors: [],
        blockMinTextCount: 24,
        blockMinWordCount: 4,
        asideMaxTextCount: 1e3,
        asideMaxWordCount: 200,
        asideMaxTextCountPerParagraph: 67,
        asideMaxWordCountPerParagraph: 12,
        lineBreakMaxTextCount: 0,
        globalAttributes: {},
        inputTutorialsText: "",
        inputTutorialsSelectors: [],
        globalMeta: {},
        globalStyles: {},
        initialGlobalAttributes: {},
        initialSelectorGlobalAttributes: {
            header: {
                translate: "no"
            },
            "footer:last-of-type": {
                translate: "no"
            },
            "nav:last-of-type": {
                translate: "no"
            },
            nav: {
                translate: "no"
            }
        },
        selectors: [],
        preWhitespaceDetectedTags: ["DIV", "SPAN"],
        stayOriginalSelectors: [],
        additionalSelectors: ["h1", "section h2", "section h3", "section h4", "main h2", "main h3", "main h4", ".article-title", ".article-subtitle", ".article_title", ".article_subtitle", ".article__title", ".articleTitle", ".Article__content", ".titleLink", ".summary", ".headline", ".page-content", "aside.note", "aside.article-comments", "aside.onebox"],
        atomicBlockTags: [],
        excludeSelectors: [],
        additionalExcludeSelectors: ['[contenteditable="true"]', ".uacc-clickable", "#monica-content-root", "#immersive-translate-popup", ".social-share", ".breadcrumbs", ".post__footer", ".btn", ".share-nav", ".o-share", "[data-toolbar=share]", "rp", "rt", ".prism-code", ".rc-CodeBlock", "[role=code]", "#omni-extension", ".omni-item", "div[data-paste-markdown-skip]", "table.highlight", "div[class^=codeBlockContent]", "div[class^=codeBlockLines]", "div[class^=token-line]", "#liuchan-window > .liuchan-container > *", ".material-icons", "i.fa", "i[class^=fa-]", ".notranslate", "[translate=no]", ".navmenu-container", ".google-symbols", "h1 br", "h2 br", "h3 br", "h4 br", "table thead"],
        translationClasses: [],
        excludeTags: ["TITLE", "LINK", "SCRIPT", "STYLE", "TEXTAREA", "SVG", "svg", "G", "NOSCRIPT", "BUTTON", "BASE", "HR", "PRE", "KBD", "WBR", "RT", "RP", "META", "MATH", "TTS-SENTENCE", "AIO-CODE", "RELIN-TARGET"],
        bodyTranslateTags: ["FOOTER", "ASIDE", "BUTTON", "NAV"],
        forceTranslateTags: [],
        metaTags: ["META", "SCRIPT", "STYLE", "NOSCRIPT"],
        additionalExcludeTags: [],
        stayOriginalTags: ["CODE", "TT", "IMG", "SUP", "SUB", "SAMP", "math", "semantics", "mrow", "mo", "mfrac", "msup", "mi", "mn", "msqrt", "d-math"],
        additionalStayOriginalTags: [],
        inlineTags: ["A", "ABBR", "FONT", "ACRONYM", "B", "INS", "DEL", "RUBY", "RP", "RB", "BDO", "MARK", "BIG", "RT", "NOBR", "CITE", "DFN", "EM", "I", "LABEL", "Q", "S", "SMALL", "SPAN", "STRONG", "SUB", "SUP", "U", "KBD", "TT", "VAR", "IMG", "CODE", "SCRIPT", "STYLE", "LINK", "TIME", "META", "WBR", "RELIN-HC", "RELIN-HIGHLIGHT", "RELIN-ORIGIN", "RELIN-TARGET", "XQDD_HIGHLIGHT_NEW_WORD", "NOBR", "RW-HIGHLIGHT", "HYPOTHESIS-HIGHLIGHT"],
        additionalInlineTags: [],
        extraInlineSelectors: ["p > a span", "p > span a span"],
        additionalInlineSelectors: [".MathJax_Preview", ".MathJax", ".highlighter--highlighted", ".rw-highlight", "ruby *"],
        extraBlockSelectors: ["turbo-frame", "readme-toc", "#hs_cos_wrapper_post_body", "#hs_cos_wrapper_post_body", "option", "ul > li"],
        allBlockTags: ["BODY", "HGROUP", "CONTENT", "ADDRESS", "ARTICLE", "ASIDE", "DETAILS", "BLOCKQUOTE", "SELECT", "OPTION", "CANVAS", "DD", "DL", "DT", "FIELDSET", "FIGCAPTION", "FIGURE", "FOOTER", "HEADER", "FORM", "HR", "MAIN", "SUMMARY", "NAV", "NOSCRIPT", "PRE", "SECTION", "TABLE", "TFOOT", "UL", "VIDEO", "P", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "UL", "LI", "OL", "BR", "PICTURE", "TBODY", "TR", "TD", "TH", "SOURCE", "C-WIZ", "BUTTON", "TURBO-FRAME", "README-TOC"],
        mutationObserverContainerSelectors: [],
        pdfNewParagraphLineHeight: 2.4,
        pdfNewParagraphIndent: 1.2,
        pdfNewParagraphIndentRightIndentPx: 130,
        fingerCountToToggleTranslagePageWhenTouching: 4,
        fingerCountToToggleTranslationMaskWhenTouching: 0,
        fingerCountToToggleTranslagePageOnlyTranslationWhenTouching: 0,
        touchShortcutsToggleTranslatePage: "fingers.4",
        touchShortcutsToggleTranslationMask: "touchShortcutsOff",
        touchShortcutsToggleTranslatePageOnlyTranslation: "touchShortcutsOff",
        touchShortcutsToggleTranslateTouchElement: "touchShortcutsOff",
        touchShortcutsToggleTranslateTouchElementPreferenceKey: "slide.left",
        mouseHoverHoldKey: "Off",
        mouseHoverPreferenceKey: "Ctrl"
    },
    rules: [{
        id: "isSubtitleBuilder",
        isSubtitleBuilder: !0,
        pageType: "subtitleBuilder",
        selectorMatches: ["meta[name='immersive-translate-subtitle-builder'][content='true']"],
        pairs: {
            ".source-text": ".target-text"
        },
        paragraphMinTextCount: 4,
        paragraphMinWordCount: 2,
        isTranslateTitle: !1,
        wrapperPrefix: "",
        wrapperSuffix: "",
        "bodyRule.add": {
            enable: !1
        }
    }, {
        id: "isEbook",
        isEbook: !0,
        pageType: "ebookReader",
        isTranslateTitle: !1,
        urlChangeDelay: 200,
        selectorMatches: ["meta[name='immersive-translate-ebook-viewer'][content='true']"],
        injectedCss: [".immersive-translate-target-translation-block-wrapper {display:block;}"],
        excludeSelectors: ["#drop-target", "#drop-target h1", "#side-bar", "h1#side-bar-title"],
        extraInlineSelectors: ["span.dropcaps"],
        "bodyRule.add": {
            enable: !1
        },
        paragraphMinTextCount: 4,
        paragraphMinWordCount: 2,
        blockMinTextCount: 1,
        blockMinWordCount: 1,
        containerMinTextCount: 1,
        wrapperPrefix: "<br />",
        targetWrapperTag: "span"
    }, {
        id: "pdf",
        isPdf: !0,
        isTranslateTitle: !1,
        pageType: "pdfReader",
        selectorMatches: ["meta[name='immersive-translate-pdf-viewer'][content='true']"],
        matches: ["https://app.immersivetranslate.com/pdf", "https://app.immersivetranslate.com/pdf/", "https://app.immersivetranslate.com/pdf/*", "http://localhost:38001/pdf*"],
        "additionalExcludeSelectors.remove": ['[contenteditable="true"]'],
        isTranslateWhenServiceChanged: !1,
        translationMode: "translation",
        skipEditableCheck: !0,
        selectors: ["p"],
        "bodyRule.add": {
            enable: !1
        },
        injectedCss: [".immersive-translate-target-wrapper {display: contents!important;position:absolute;}", ".immersive-translate-target-wrapper br {display: none;!important;}", ".immersive-translate-target-wrapper span {position: relative;!important;}", ".immersive-translate-error-wrapper {padding:0px !important;margin:0px !important;}", "font {line-height: 0!important;}"],
        globalAttributes: {
            "[class='textLayer']": {
                translate: "no"
            }
        },
        mutationExcludeContainsSelectors: ["font.immersive-translate-target-wrapper"],
        "shareConfig.add": {
            removeSelectors: ["noscript", "script", ".toolbar", "#sidebarContainer", '[class="page"]', ".editorParamsToolbar", ".image-mode", ".im_db", ".im_cb"]
        },
        wrapperPrefix: "",
        isInjectVersion: !0
    }, {
        id: "sci-hub.pdfWebPage",
        matches: ["sci-hub.*"],
        waitForSelectorsTimeout: 1,
        pdfUrlExtractRule: {
            selector: "#pdf",
            attribute: "src"
        }
    }, {
        id: "common.pdfWebPage",
        waitForSelectorsTimeout: 1,
        selectorMatches: ["embed[type='application/pdf']"]
    }, {
        id: "isEbookBuilder",
        matches: ["https://app.immersivetranslate.com/ebook/make/", "http://localhost:38001/ebook/make/"],
        isEbookBuilder: !0,
        pageType: "ebookBuilder",
        toastErrorMinTimes: 500,
        isTranslateWhenServiceChanged: !1,
        isTranslateTitle: !1,
        targetWrapperTag: "span",
        selectorMatches: ["meta[name='immersive-translate-ebook-builder'][content='true']"],
        injectedCss: [".immersive-translate-target-translation-block-wrapper {display:block;}"],
        globalMeta: {},
        excludeSelectors: ["h1.notranslate", "#drop-target", "#drop-target h1", "#side-bar", "h1#side-bar-title", "#tool", ".Code"],
        "bodyRule.add": {
            enable: !1
        },
        isInjectMeta: !0,
        paragraphMinTextCount: 4,
        paragraphMinWordCount: 2,
        blockMinTextCount: 1,
        blockMinWordCount: 1,
        containerMinTextCount: 1,
        wrapperPrefix: "<br />"
    }, {
        id: "immersiveTranslateIosOnBoarding",
        selectorMatches: ["meta[name=immersiveTranslateIosOnBoarding]"],
        initialGlobalAttributes: {
            "input#immersiveTranslateDetectedSlot": {
                value: "true"
            }
        },
        isInjectOptionsUrl: !0,
        isInjectVersion: !0,
        isInjectMeta: !0
    }, {
        id: "immersiveTranslateIosOnBoardingStep1",
        selectorMatches: ["meta[name=immersiveTranslateIosOnBoardingStep1]"],
        isOnBoardingPage: !0,
        isInjectOptionsUrl: !0,
        isInjectVersion: !0,
        isInjectMeta: !0
    }, {
        id: "immersivePreview",
        matches: ["https://immersivetranslate.com/preview*", "https://test.immersivetranslate.com/preview*", "https://immersivetranslate.com/drafts*", "https://test.immersivetranslate.com/drafts*"],
        isInjectVersion: !0,
        isInjectMeta: !0,
        waitForSelectorsTimeout: 1
    }, {
        id: "pro-pdf",
        matches: ["https://*.immersivetranslate.com/pdf-pro*"],
        pageType: "pdfProReader",
        "excludeSelectors.add": ["table"],
        isInjectVersion: !0,
        isInjectMeta: !0,
        waitForSelectorsTimeout: 1
    }, {
        id: "immersive",
        matches: ["https://immersivetranslate.com", "https://test.immersivetranslate.com", "https://onboarding.immersivetranslate.com", "https://app.immersivetranslate.com", "https://test-app.immersivetranslate.com", "http://localhost:38001"],
        isInjectVersion: !0,
        isInjectMeta: !0,
        waitForSelectorsTimeout: 1
    }, {
        id: "simpread",
        selectorMatches: "div.simpread-read-root.simpread-read-root-show > sr-read",
        mainFrameSelector: "div.simpread-read-root.simpread-read-root-show > sr-read"
    }, {
        id: "txt",
        matches: ["*://*/*.txt", "file://*/*.txt"],
        selectorMatches: ["body > pre"],
        "mutationExcludeSelectors.add": ["body"],
        isTransformPreTagNewLine: !0,
        "excludeTags.remove": ["PRE"]
    }, {
        id: "hangejp",
        matches: ["arad.hange.jp", "arad.nexon.co.jp", "oapi.dingtalk.com", "login.dingtalk.com"],
        useIframePostMessage: !1
    }, {
        id: "preSites",
        matches: ["mail.jabber.org", "antirez.com", "patchwork.kernel.org", "lists.apache.org", "manned.org", "bugs.webkit.org", "bugzilla.mozilla.org", "lwn.net/Articles/*", "docs.haproxy.org", "man.freebsd.org", "www.oreilly.com/openbook/opensources/book/*", "gamefaqs.gamespot.com"],
        isTransformPreTagNewLine: !0
    }, {
        id: "wikipedia",
        matches: "*.wikipedia.org",
        paragraphMinWordCount: 2,
        paragraphMinTextCount: 4,
        injectedCss: [".immersive-translate-target-translation-block-wrapper { display: block; }"],
        excludeSelectors: [".mw-editsection", ".mw-cite-backlink", "#p-lang-btn", "#right-navigation", "#p-associated-pages", ".vector-header"],
        stayOriginalSelectors: [".chemf", ".mwe-math-element", "[role=math]", ".nowrap"],
        extraInlineSelectors: [".chemf", ".mwe-math-element", "[role=math]", ".nowrap"],
        "bodyRule.add": {
            bodySelector: "#content",
            articleSelector: "#bodyContent"
        }
    }, {
        id: "twitter",
        matches: ["twitter.com", "mobile.twitter.com", "tweetdeck.twitter.com", "pro.twitter.com", "https://platform.twitter.com/embed*"],
        additionalStayOriginalSelectors: ['[data-testid="tweetText"] a', "[data-testid='UserDescription'] a", "[data-testid='HoverCard'] a", "[data-testid='UserCell'] a", "[data-testid='birdwatch-pivot']  a"],
        blockMinTextCount: 0,
        blockMinWordCount: 0,
        excludeSelectors: ["[aria-describedby][role=button]", "header", "[data-testid='radioGroupplayback_rate'] div", "[data-testid='userFollowIndicator']", "[class='css-901oao r-14j79pv r-37j5jr r-n6v787 r-16dba41 r-1cwl3u0 r-bcqeeo r-qvutc0']", "[class='css-175oi2r r-1wbh5a2 r-dnmrzs']"],
        extraBlockSelectors: ['[data-testid="tweetText"] div.r-6koalj'],
        extraInlineSelectors: ['[data-testid="tweetText"] div.r-xoduu5', '[data-testid="tweetText"] span', '[data-testid="UserDescription"] div', "[data-testid='HoverCard'] div[dir=auto] div", "[data-testid='HoverCard'] span[dir=auto] div"],
        globalStyles: {
            "[data-testid='card.layoutLarge.detail'] > div:nth-child(2)": "-webkit-line-clamp: unset;",
            "[data-testid='card.layoutSmall.detail'] > div:nth-child(2)": "-webkit-line-clamp: unset;",
            "[data-testid='tweetText']": "-webkit-line-clamp: unset;"
        },
        ignoreZhCNandZhTW: !0,
        isTranslateTitle: !1,
        useIframePostMessage: !1,
        observeUrlChange: !1,
        paragraphMinTextCount: 2,
        paragraphMinWordCount: 1,
        selectors: ['[data-testid="tweetText"]', ".tweet-text", ".js-quoted-tweet-text", "[data-testid='card.layoutSmall.detail'] > div:nth-child(2)", "[data-testid='developerBuiltCardContainer'] > div:nth-child(2)", "[data-testid='card.layoutLarge.detail'] > div:nth-child(2)", "[data-testid='cellInnerDiv'] div[data-testid='UserCell'] > div> div:nth-child(2)", "[data-testid='UserDescription']", "[data-testid='HoverCard'] div[dir=auto]", "[data-testid='HoverCard'] span[dir=auto]", "[data-testid='HoverCard'] [role='dialog'] div[dir=ltr]", "[data-testid='birdwatch-pivot'] div[dir=ltr]"],
        "subtitleRule.add": {
            type: "live",
            isInject: !1,
            injectedCss: ["#layers[style='z-index: 1;'] [style='height: 100px;'] { height: 400px !important; }"],
            liveSubtitleRule: {
                containerSelector: ".css-175oi2r.r-13awgt0.r-1pi2tsx.r-13qz1uu > [role='listbox']",
                reportSelector: ".css-175oi2r.r-1awozwy.r-173mn98.r-1mf7evn.r-7e3msg",
                textSelectors: [".css-1rynq56.r-bcqeeo.r-qvutc0.r-37j5jr.r-a023e6.r-16dba41.r-dhbnww.r-1pb70le"],
                mutationChangeDelay: 1e3
            }
        },
        "subtitleRule.add_v.[1.2.1]": {
            type: "twitter",
            videoPlayerSelector: "video",
            loadingStyle: "bottom: unset; top: 5%;",
            injectedCss: ["#layers[style='z-index: 1;'] [style='height: 100px;'] { height: 400px !important; }", "video::cue {white-space: pre-line;}"]
        }
    }, {
        id: "threads",
        matches: "www.threads.net",
        selectors: ["p", ".x1npkx4u.x1exu5d8", ".xw7yly9", ".xgkxs2y", ".x1xdureb.xqti54a.x13vxnyz", ".xqti54a.x13vxnyz.x49hn82.xcrlgei.x889kno"],
        stayOriginalSelectors: [".x1rg5ohu", ".xat24cr.xdj266r a"],
        "excludeSelectors.add": [".x6s0dn4.x78zum5", ".xpvyfi4.x1npkx4u.x1ms6mhf"],
        globalStyles: {
            span: "max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"
        }
    }, {
        id: "stackoverflow",
        matches: ["stackoverflow.com", "*.stackexchange.com", "superuser.com", "askubuntu.com", "serverfault.com"],
        extraBlockSelectors: ["span.comment-copy"],
        globalStyles: {
            ".s-post-summary--content-excerpt": "-webkit-line-clamp:unset;"
        },
        "excludeSelectors.add": [".votecell", "header", "#footer", "#question-header + div", "div.postcell div.mb0", "div[id^=comments-link-]", "#answers-header", ".new-post-login", ".form-submit", "a[href='/questions/ask']", "#left-sidebar", "a.comment-user", "span.comment-date", "div.s-prose.js-post-body + div", ".bottom-notice", "div[data-campaign-name=stk]", ".s-post-summary--stats", ".s-post-summary--meta"],
        paragraphMinTextCount: 4,
        paragraphMinWordCount: 2
    }, {
        id: "appleDeveloper",
        matches: "developer.apple.com/documentation/*",
        selectors: [".container", "h3.title", "div.content"]
    }, {
        id: "hackerNews",
        matches: "news.ycombinator.com",
        selectors: [".titleline > a", ".comment > .commtext", ".toptext", "a.hn-item-title", ".hn-comment-text", ".hn-story-title"],
        excludeSelectors: [".reply"]
    }, {
        id: "quora",
        matches: ["*.quora.com", "quora.com"],
        excludeSelectors: [".dom_annotate_multifeed_bundle_AskQuestionPromptBundle", ".dom_annotate_feed_switcher", "[class='q-box qu-py--small qu-color--gray_light']", "[class='q-box spacing_log_answer_header']", "[class='q-box qu-flex--auto']", "[class='q-text qu-dynamicFontSize--small qu-mt--small qu-color--gray_light qu-passColorToLinks']", ".AnswerFooter___StyledFlex-sc-2xbo88-0", "[class='q-box qu-mb--small']"],
        globalStyles: {
            ".qu-truncateLines--3": "-webkit-line-clamp: unset;"
        }
    }, {
        id: "oldReddit",
        matches: ["old.reddit.com/*/.compact", "old.reddit.com/.compact", "www.reddit.com/*/.compact", "www.reddit.com/.compact"],
        selectors: [".title > a", ".usertext-body"],
        detectParagraphLanguage: !0
    }, {
        id: "otherOldReddit",
        matches: "old.reddit.com",
        selectors: ["p.title > a", "[role=main] .md-container"],
        detectParagraphLanguage: !0
    }, {
        id: "redditList",
        matches: ["https://www.reddit.com/r/*/comments/*/*", "https://www.reddit.com/", "https://www.reddit.com/hot/", "https://www.reddit.com/new/", "https://www.reddit.com/top/"],
        excludeMatches: ["https://www.reddit.com/r/*/wiki/*"],
        observeUrlChange: !0,
        selectors: ["h1", ".PostHeader__post-title-line", "[data-click-id=body] h3", "[data-click-id=background] h3", "[data-testid=comment]", "[data-adclicklocation='title'] h3", "[data-adclicklocation=media]", "[data-testid='post-title-text']", ".PostContent", ".post-content", ".Comment__body", "faceplate-batch .md", "[slot=comment]", ".RichTextJSON-root", "[slot=title]", "[slot=text-body]", "p.title > a", "[role=main] .md-container"],
        detectParagraphLanguage: !0,
        globalStyles: {
            "div.XPromoBottomBar": "display:none",
            "[class*='line-clamp']": "-webkit-line-clamp: unset"
        },
        waitForSelectors: ["[data-testid=post_author_link]"],
        "inputConfig.add": {
            clearContentEnable: !1
        }
    }, {
        id: "reddit",
        matches: "www.reddit.com",
        selectors: ["#search-results-tab-slot", "h1", ".PostHeader__post-title-line", "[data-click-id=body] h3", "[data-click-id=background] h3", "[data-testid=comment]", "[data-adclicklocation='title'] h3", "[data-testid='post-title-text']", "[slot=comment]", "[data-adclicklocation=media]", ".PostContent", ".post-content", ".Comment__body", "faceplate-batch .md", "[slot=text-body]", "p.title > a", "[role=main] .md-container", "#-post-rtjson-content", ".RichTextJSON-root", "[slot='title']"],
        excludeSelectors: [".text-neutral-content-weak"],
        paragraphMinTextCount: 5,
        paragraphMinWordCount: 2,
        excludeMatches: ["https://www.reddit.com/r/*/wiki/*", "https://www.reddit.com/settings/*"],
        detectParagraphLanguage: !0,
        globalStyles: {
            "div.XPromoBottomBar": "display:none",
            "[class*='line-clamp']": "-webkit-line-clamp: unset"
        }
    }, {
        id: "reuters",
        matches: "www.reuters.com",
        excludeSelectors: ["[promotext]", "[data-testid=Leaderboard]", "[data-testid=HomeTickerV2]", "[data-testid=SiteFooter]", "[class^=refinitiv-promo-bar__container]", "[data-testid=ResponsiveAdSlot]", "[data-testid=SiteHeader]", "[data-testid=HomeTickerV2]"]
    }, {
        id: "npmjs",
        matches: "https://www.npmjs.com/package/*",
        selectors: ["#tabpanel-readme > div:first-child"]
    }, {
        id: "github",
        matches: "github.com",
        useIframePostMessage: !1,
        excludeMatches: ["https://github.com/*/*/settings", "https://github.com/settings/*", "https://github.com/sponsors/*", "https://github.com/readme/*", "https://github.com/readme/", "https://github.com/features/*", "https://github.com/customer-stories/*"],
        mutationExcludeSelectors: [".react-blob-sticky-header *"],
        selectors: ["h1", "[aria-label=Issues] .markdown-title", "[aria-labelledby=discussions-list] .markdown-title", "h3 .markdown-title", ".markdown-body", ".Layout-sidebar p", "div > span.search-match", "li.repo-list-item p", "#responsive-meta-container p", "article p", "div.repo-description p", "[itemprop=description]", ".integrations-auth-wrapper", ".new-feed-onboarding-notice", "article section[aria-label='card content'] > div > div > div  > div:nth-child(2)", ".TimelineItem-body > .Link--primary", '[role="navigation"] p', '[data-testid="commit-row-item"] h4'],
        atomicBlockSelectors: ["[itemprop=description]"],
        excludeSelectors: [".css-truncate", "[data-test-selector='commit-tease-commit-message']", "[data-test-selector='create-branch.developmentForm']", "div.Box-header.position-relative", "div.blob-wrapper-embedded", "div.Box.Box--condensed.my-2", "div.jp-CodeCell", '[aria-label="Account"] .markdown-title', ".js-repos-container .markdown-title", "a.anchor", "div.file-navigation + div.Box"],
        extraBlockSelectors: [],
        extraInlineSelectors: ["g-emoji", "a.anchor"],
        stayOriginalTags: ["CODE", "TT", "G-EMOJI", "IMG", "SUP", "SUB"],
        "stayOriginalSelectors.add": [".issue-link"],
        detectParagraphLanguage: !0,
        globalStyles: {
            ".TimelineItem-body .Link--primary": "-webkit-line-clamp: unset;"
        }
    }, {
        id: "github-blog",
        matches: ["github.blog"],
        injectedCss: ["font {word-break: break-all !important;}"]
    }, {
        id: "githubNotebook",
        matches: "notebooks.githubusercontent.com",
        useIframePostMessage: !1,
        excludeSelectors: ["div.jp-CodeCell"]
    }, {
        id: "facebook",
        matches: "www.facebook.com",
        excludeMatches: ["https://www.facebook.com/business/*", "https://www.facebook.com/help*"],
        selectors: ["div[dir=auto][style]", "div[dir=auto][class]", "span[lang]"],
        atomicBlockSelectors: ["div[dir=auto][style]", "div[dir=auto][class]", "span[lang]"],
        insertPosition: "afterend",
        preWhitespaceDetectedTags: ["DIV", "SPAN"],
        extraBlockSelectors: ["span.x1vvkbs"],
        excludeSelectors: ["[role=button]"],
        translationClasses: ["immersive-translate-text"],
        detectParagraphLanguage: !0
    }, {
        id: "youtubeMobile",
        matches: "m.youtube.com",
        selectors: [".comment-text", "#content-text", ".media-item-headline", ".slim-video-information-title", ".yt-spec-button-view-model", ".yt-core-attributed-string > span", ".title"],
        shareConfig: {
            injectCss: !1,
            removeSelectors: ["iron-iconset-svg", "iframe", "ytd-watch-next-secondary-results-renderer", "noscript", "script"]
        },
        "mutationConfig.add": {
            checkSelfUpdate: !1
        },
        "excludeTags.remove": ["BUTTON"],
        additionalExcludeSelectors: [".ytp-caption-window-container", "text", ".imt-caption-container"],
        "mutationExcludeSelectors.add": [".imt-caption-container *"],
        "subtitleRule.add": {
            type: "youtube",
            subtitleUrlRegExp: "(/api/timedtext|videoplayback\\?expire.*text)",
            translateSelectors: [".caption-window", ".caption-visual-line"],
            videoPlayerSelector: ".html5-video-player.playing-mode,.html5-video-player.paused-mode",
            loadingContainerSelector: ".ytp-caption-window-container",
            videoADSelector: ".ytp-ad-player-overlay",
            injectedCss: ["#player-shorts-container .ytp-caption-window-bottom {top: 40px; bottom: unset!important;}"],
            videoSelector: ".html5-video-player.playing-mode video,.html5-video-player.paused-mode video",
            translationOnlyPattern: ["m.youtube.com/watch*", "m.youtube.com/embed*", "m.youtube.com/shorts*"],
            attachRule: {
                appendSelector: ".html5-video-player.playing-mode,.html5-video-player.paused-mode",
                injectedCSS: [".imt-caption-container {z-index:40;}"],
                injectedGlobalCSS: [".caption-window {display: none;} ", "shorts-video #immersive-translate-caption-window { height: 150px;}"]
            }
        },
        wrapperPrefix: "",
        wrapperSuffix: "",
        observeUrlChange: !0,
        atomicBlockSelectors: [".comment-text"],
        globalStyles: {
            ".comment-text": "max-height:unset;",
            ".media-item-headline": "max-height:unset;-webkit-line-clamp:unset;"
        },
        injectedCss: [".immersive-translate-target-wrapper img { width: 16px; height: 16px }"],
        extraBlockSelectors: [".caption-visual-line"]
    }, {
        id: "youtube",
        matches: "www.youtube.com",
        blockMinTextCount: 0,
        blockMinWordCount: 0,
        detectParagraphLanguage: !0,
        lineBreakMaxTextCount: 0,
        shareConfig: {
            injectCss: !1,
            removeSelectors: ["iron-iconset-svg", "iframe", "ytd-watch-next-secondary-results-renderer", "noscript", "script"]
        },
        "additionalExcludeSelectors.add": [".ytp-caption-window-container", "text", ".imt-caption-container"],
        globalStyles: {
            "#video-title": "-webkit-line-clamp: unset;max-height: unset;",
            "h1.ytd-watch-metadata": "-webkit-line-clamp: unset;max-height: unset;",
            "yt-formatted-string#video-title": "-webkit-line-clamp: unset;max-height: unset;",
            "ytd-expander.ytd-comment-renderer": "--ytd-expander-max-lines: 1000;"
        },
        injectedCss: [".immersive-translate-target-wrapper img { width: 16px; height: 16px }", ".metadata-snippet-container {max-height: unset !important;}", ".immersive-translate-target-wrapper {text-align: left;}", ".immersive-translate-target-wrapper[dir=rtl] {text-align: right;}"],
        isTranslateTitle: !1,
        observeUrlChange: !0,
        selectors: ["yt-formatted-string[slot=content].ytd-comment-renderer", "yt-formatted-string.ytd-video-renderer", "yt-formatted-string#content-text", "h1", "yt-formatted-string#video-title", "yt-formatted-string.span", "span#video-title", "a#video-title", "yt-formatted-string.ytd-transcript-segment-renderer", "#description-inline-expander > yt-attributed-string > span", "yt-attributed-string > span", "ytd-notification-renderer .message", "#message", ".yt_to_text_transcript_text"],
        extraBlockSelectors: ["yt-formatted-string.ytd-transcript-segment-renderer", ".caption-visual-line"],
        "mutationExcludeSelectors.add": [".imt-caption-container *"],
        "subtitleRule.add": {
            type: "youtube",
            subtitleUrlRegExp: "(/api/timedtext|videoplayback\\?expire.*text)",
            translateSelectors: [".caption-window", ".caption-visual-line"],
            videoPlayerSelector: ".html5-video-player.playing-mode,.html5-video-player.paused-mode",
            loadingContainerSelector: ".ytp-caption-window-container",
            videoADSelector: ".ytp-ad-player-overlay",
            translationOnlyPattern: ["www.youtube.com/watch*", "www.youtube.com/embed*", "www.youtube.com/shorts*"],
            subtitleButtonSelector: ".html5-video-player.playing-mode .ytp-subtitles-button,.html5-video-player.paused-mode .ytp-subtitles-button",
            languageSelector: ".ytp-menuitem-label",
            injectedCss: ["#shorts-player .ytp-caption-window-bottom {top: 2%; bottom: unset!important;} #immersive-translate-quick-button-container {font-size: 12px;z-index:1001;}"],
            quickButtonRule: {
                appendSelector: ".ytp-chrome-controls",
                insertBeforeSelector: ".ytp-right-controls"
            },
            videoSelector: ".html5-video-player.playing-mode video,.html5-video-player.paused-mode video",
            attachRule: {
                appendSelector: ".html5-video-player.playing-mode,.html5-video-player.paused-mode",
                injectedCSS: [".imt-caption-container {z-index:40;}", ".imt-caption-window {margin-bottom: 2%}"],
                injectedGlobalCSS: [".caption-window {display: none;} ", "#shorts-player #immersive-translate-caption-window { height: 20%;}", ".html5-video-player:not(.ytp-autohide) #immersive-translate-caption-window {bottom: 60px;}"]
            }
        },
        urlChangeDelay: 2e3,
        wrapperPrefix: "<br/>",
        wrapperSuffix: ""
    }, {
        id: "tvYoutube",
        matches: "tv.youtube.com",
        "subtitleRule.add": {
            type: "youtube",
            preTranslation: !0,
            humanPreferred: !1,
            subtitleUrlRegExp: "(/api/timedtext|videoplayback\\?expire.*text)",
            translateSelectors: [".caption-window", ".caption-visual-line"],
            videoPlayerSelector: ".html5-video-player.playing-mode,.html5-video-player.paused-mode",
            loadingContainerSelector: ".ytp-caption-window-container",
            videoADSelector: ".ytp-ad-player-overlay",
            translationOnlyPattern: ["tv.youtube.com/watch*"],
            subtitleButtonSelector: ".ytp-subtitles-button",
            languageSelector: ".ytp-menuitem-label",
            injectedCss: ["#shorts-player .ytp-caption-window-bottom {top: 2%; bottom: unset!important;} #immersive-translate-quick-button-container {font-size: 12px;z-index:1001;}"],
            quickButtonRule: {
                appendSelector: ".ypcs-control-buttons-right",
                insertBeforeSelector: ".ypcs-control-buttons-right .ypcs-volume-control-slot"
            },
            videoSelector: ".html5-video-player.playing-mode video,.html5-video-player.paused-mode video",
            attachRule: {
                appendSelector: ".html5-video-player.playing-mode,.html5-video-player.paused-mode",
                injectedCSS: [".imt-caption-container {z-index:40;}", ".imt-caption-window {margin-bottom: 2%;}"],
                injectedGlobalCSS: [".caption-window {display: none;} ", "#shorts-player #immersive-translate-caption-window { height: 20%;}", ".html5-video-player:not(.ytp-autohide) #immersive-translate-caption-window {bottom: 60px;}"]
            }
        }
    }, {
        id: "youtube-subtitle",
        matches: ["www.youtube-nocookie.com", "music.youtube.com"],
        extraBlockSelectors: [".caption-visual-line"],
        mainFrameMinTextCount: 0,
        "excludeSelectors.add": [".captions-text", ".ytp-caption-segment"],
        "subtitleRule.add": {
            type: "youtube",
            subtitleUrlRegExp: "/api/timedtext",
            translateSelectors: [".caption-window", ".caption-visual-line"],
            videoPlayerSelector: ".html5-video-player",
            loadingContainerSelector: ".ytp-caption-window-container",
            videoADSelector: ".ytp-ad-player-overlay",
            translationOnlyPattern: ["www.youtube-nocookie.com/embed*", "music.youtube.com/watch*"],
            subtitleButtonSelector: ".ytp-subtitles-button",
            languageSelector: ".ytp-menuitem-label",
            injectedCss: ["#shorts-player .ytp-caption-window-bottom {top: 2%; bottom: unset!important;}"],
            quickButtonRule: {
                appendSelector: ".ytp-chrome-controls",
                insertBeforeSelector: ".ytp-right-controls"
            },
            videoSelector: ".html5-video-player video",
            attachRule: {
                appendSelector: ".html5-video-player",
                injectedCSS: [".imt-caption-container {z-index:40;}", ".imt-caption-window {margin-bottom: 2%;}"],
                injectedGlobalCSS: [".caption-window {display: none;} ", "#shorts-player #immersive-translate-caption-window { height: 20%;}", ".html5-video-player:not(.ytp-autohide) #immersive-translate-caption-window {bottom: 60px;}"]
            }
        }
    }, {
        id: "instagramMessage",
        matches: ["https://www.instagram.com/direct/*"],
        wrapperPrefix: "<br/>",
        selectors: ["div[dir=auto].html-div"]
    }, {
        id: "instagramPost",
        matches: ["https://www.instagram.com/p/*", "https://www.instagram.com/reels/*"],
        blockMinTextCount: 1,
        paragraphMinTextCount: 2,
        excludeSelectors: ["hr+div span[dir=auto][style] > span"],
        selectors: ["h1", "ul li h3+div span[dir=auto]", "hr+div span[dir=auto][style]", "div > div[dir=auto]", "div:not([class]) > div > div:nth-child(2)"],
        wrapperPrefix: "<br/>"
    }, {
        id: "otherInstagram",
        blockMinWordCount: 1,
        matches: "https://www.instagram.com/*",
        paragraphMinTextCount: 2,
        selectors: ["h1", "article span[dir=auto] > span[dir=auto]", "._ab1y", "ul li h3+div span[dir=auto]", "hr+div span[dir=auto][style]", "span[dir=auto] > div > span", "div > h1[dir=auto]"],
        wrapperSuffix: ""
    }, {
        id: "1paragraph",
        matches: "1paragraph.app",
        selectors: ["#book"]
    }, {
        id: "poeditor",
        matches: "https://poeditor.com/projects/*",
        selectors: [".comment-body", ".reference_language .source-string"]
    }, {
        id: "substack",
        matches: ["*.substack.com", "newsletter.rootsofprogress.org"],
        selectorMatches: ["link[href^='https://substackcdn.com/bundle/'][rel=preload]"],
        excludeSelectors: ["[style^=top]", ".publication-footer", ".subscribe-footer", ".main-menu", ".navbar-title-link", "[data-testid='navbar']", ".navbar-title", ".captioned-button-wrap", ".subscription-widget-wrap", ".tweet-header", ".tweet-link-bottom", ".expanded-link", ".meta-subheader", ".comment-meta", ".comment-actions"],
        globalStyles: {
            ".reader2-clamp-lines": "max-height: unset; -webkit-line-clamp: unset;",
            "[class*='clamp-']": "max-height: unset; -webkit-line-clamp:unset;",
            ".blurb-text": "max-height: unset;",
            ".comment-body": "max-height: unset;"
        },
        extraBlockSelectors: [".reader2-post-title", ".tweet-link-top", ".tweet-link-bottom", ".expanded-link"]
    }, {
        id: "seekingalpha",
        matches: ["seekingalpha.com/article/*", "seekingalpha.com/news/*"],
        selectors: ["[data-test-id=card-container]", "[data-test-id=comments-section]"],
        excludeSelectors: ["[data-test-id=post-page-meta]", "header > div:first-child"]
    }, {
        id: "hnAlgolia",
        matches: "hn.algolia.com",
        selectors: [".Story_title > a:first-child", ".Story_comment > span"]
    }, {
        id: "readwise",
        matches: "read.readwise.io",
        selectors: ["div[class^='_titleRow_']", "#document-text-content"],
        detectParagraphLanguage: !0
    }, {
        id: "inoreader",
        matches: ["www.inoreader.com", "*.inoreader.com"],
        selectors: [".article_header_title", ".article_title_link", ".article_content", ".article_magazine_title_link", ".blog-post-page", "#welcome_center", ".gad_overview_articles_wrapper", ".library_article_text h4", ".header_name"],
        excludeMatches: ["https://www.inoreader.com/features/"],
        observeUrlChange: !1,
        globalStyles: {
            ".article_title_link,.library_article_text h4,.gadget_overview_article_title,.article_magazine_title_link,.reader_pane_view_style_2 .column_view_title": "-webkit-line-clamp: unset;max-height: unset;",
            ".article_tile_content_wraper,div.article_tile": "overflow:auto",
            ".article_header_title": "white-space:normal"
        }
    }, {
        id: "aha",
        matches: "*.ideas.aha.io",
        excludeSelectors: [".comment-header", ".vote-status", ".idea-meta", ".filters-title", ".ideas-showing-count", ".my-ideas-filters-wrapper", ".statuses-filters-wrapper", ".categories-filters-wrapper", "[class^='attachment']", "span[class^='attachment-name']"]
    }, {
        id: "googleScholar",
        matches: ["scholar.google.*/*", "scholar.google.com.*/*", "scholar.google.co.*/*"],
        wrapperPrefix: `
`,
        selectors: ["h3 a[data-clk]", "div.gs_rs", "td a.gsc_a_at", "td div.gs_gray:last-of-type", "div.gsc_oci_value", "#gs_opinion"],
        extraInlineSelectors: ["br"],
        atomicBlockSelectors: ["h3 a[data-clk]"]
    }, {
        id: "googleMail",
        matches: "mail.google.com",
        detectParagraphLanguage: !0,
        selectors: ["h2[data-thread-perm-id]", "span[data-thread-id]", "div[data-message-id] div[class='']", ".messageBody", "#views"],
        globalStyles: {
            "[role='listitem'] > div": "height:auto!important;white-space:unset!important;"
        }
    }, {
        id: "googleNews",
        matches: "news.google.com",
        blockMinTextCount: 26,
        blockMinWordCount: 5,
        globalStyles: {
            ".MCAGUe": "height: auto;",
            ".To2ZZb.DbQnIe": "height: unset;",
            ".cp7Yvc > h2": "display: block;",
            ".oovtQ": "height: auto;",
            h4: "-webkit-line-clamp: unset;"
        },
        excludeSelectors: [".EyERq", ".AOl7G.eejsDc", "[aria-label='Home']", "[aria-label='For you']", "[aria-label='Following']", "[aria-label='World']", "[aria-label='Local']", ".gb_Fc", ".wBQf7b", ".yPI8Rb", ".jKHa4e", ".u43Gd", ".Zgjpyb", "[role='button']", "[jsname='rymPhb']", ".cbz1ld", ".VfPpkd-P5QLlc", ".XvhY1d"]
    }, {
        id: "outlook",
        matches: "outlook.live.com",
        excludeSelectors: [".jHAG3.XG5Jd", ".OZZZK", ".lDdSm"]
    }, {
        id: "producthunt",
        matches: "www.producthunt.com",
        excludeMatches: "https://www.producthunt.com/stories/*",
        selectors: ["h2", "div[class^='styles_htmlText__']", "[class^='styles_tagline']", "a[href^='/discussions/'].fontWeight-600", "button[class^='styles_textButton'] > div > span", "h5 + p", "div[data-test=product-item-name] + div", ".noOfLines-1,.noOfLines-2,.noOfLines-3", ".fontWeight-600", "[class*='styles_dropdown']", "[class*='styles_aboutText']", "[class*='styles_titleContainer']", "[class*='styles_header'] h1"],
        globalStyles: {
            "h5 + p": "height:unset;",
            ".noOfLines-1,.noOfLines-2,.noOfLines-3": "-webkit-line-clamp:unset;"
        },
        "excludeTags.remove": ["PRE"]
    }, {
        id: "codeforces",
        matches: "https://codeforces.com/*",
        "stayOriginalTags.add": ["[class^='MathJax']"]
    }, {
        id: "discord",
        matches: "https://discord.com/channels/*",
        isTranslateTitle: !1,
        selectors: ["li[id^=chat-messages] div[id^=message-content]", "div[class^=headerText]", "section[aria-label='Search Results'] div[id^=message-content]"],
        extraBlockSelectors: ["[class^='embedFieldValue']", "li[class^='card'] div[class^='message']", "[data-list-item-id^='forum-channel-list'] div[class^='headerText']"],
        globalStyles: {
            "div[class^=headerText]": "max-height: unset;",
            "div[class^=message]": "max-height: unset;",
            "div[class^=text]": "max-height: unset;",
            "h3[data-text-variant='heading-lg/semibold']": "-webkit-line-clamp: none;"
        },
        detectParagraphLanguage: !0,
        wrapperPrefix: "<br />",
        wrapperSuffix: "",
        paragraphMinTextCount: 4,
        paragraphMinWordCount: 2
    }, {
        id: "telegram",
        matches: ["web.telegram.org/z/*", "web.telegram.org/a/*"],
        isTranslateTitle: !1,
        selectors: [".text-content", ".message", ".reply-markup-button-text", ".bot-commands-list-element-description"],
        "extraBlockSelectors.add": [".message.spoilers-container em", ".message.spoilers-container strong"],
        excludeSelectors: [".time", ".peer-title", ".document-wrapper", ".message.spoilers-container custom-emoji-element"],
        detectParagraphLanguage: !0
    }, {
        id: "telegramK",
        matches: ["web.telegram.org/k/*", "web.telegram.org/k/"],
        selectors: [".message", ".reply-markup-button-text", ".bot-commands-list-element-description"],
        "extraBlockSelectors.add": [".message.spoilers-container em", ".message.spoilers-container strong"],
        excludeSelectors: [".time", ".peer-title", ".document-wrapper", ".message.spoilers-container custom-emoji-element"],
        detectParagraphLanguage: !0
    }, {
        id: "githubGist",
        matches: "gist.github.com",
        selectors: [".markdown-body", ".readme"],
        detectParagraphLanguage: !0
    }, {
        id: "lobste",
        matches: "lobste.rs",
        excludeMatches: ["https://lobste.rs/about", "https://lobste.rs/chat"],
        selectors: [".u-repost-of", ".comment_text", ".story_text"]
    }, {
        id: "slack",
        matches: "*.slack.com",
        selectors: [".p-rich_text_block", ".p-message_pane__foreword", ".c-alert__message", "[data-qa=message_attachment_text]"],
        additionalStayOriginalSelectors: ["[data-qa=emoji]"],
        detectParagraphLanguage: !0
    }, {
        id: "artstationArtwork",
        matches: "www.artstation.com/artwork/*",
        excludeSelectors: ".project-description a",
        selectors: [".project-description", "div.project-comment-text"],
        detectParagraphLanguage: !0
    }, {
        id: "artstationLearning",
        matches: "www.artstation.com/learning/courses/*",
        additionalSelectors: ["footer.learning-course-description.ng-star-inserted > span"],
        excludeSelectors: [".learning-card-meta", ".vjs-text-track-display"],
        "mutationExcludeSelectors.add": [".vjs-text-track-display *"],
        "subtitleRule.add": {
            type: "webvtt",
            subtitleUrlRegExp: "/subtitles/.*\\.(vtt|webvtt)$",
            loadingContainerSelector: ".vjs-text-track-display",
            quickButtonRule: {
                appendSelector: ".vjs-control-bar",
                insertBeforeSelector: ".vjs-playback-rate",
                injectCSS: ".imt-quick-subtitle-button { font-size: 12px;} .logo,.logo svg { height: 18px !important; width: 18px !important;} .imt-quick-subtitle-pop-content {bottom: 38px !important;}"
            },
            videoSelector: "video",
            attachRule: {
                appendSelector: ".video-js",
                injectedGlobalCSS: [".vjs-text-track-display {display: none;}", ".captions-text: {margin-bottom: 10%;}"]
            }
        }
    }, {
        id: "artstationBlog",
        matches: ["https://www.artstation.com/blogs", "https://www.artstation.com/blogs/*"],
        detectParagraphLanguage: !0,
        additionalSelectors: [".comment-item-body"],
        atomicBlockSelectors: [".author-headline", ".author-location"],
        excludeSelectors: ["blog-card-thumbnail", "blog-card-header", ".blog-card-author", ".blog-card-meta", ".blog-view-header", ".blog-grid-title", ".post-meta-header"]
    }, {
        id: "figmaCommunity",
        matches: "www.figma.com/community/*",
        normalizeBody: "div.ql-editor[contenteditable='false']",
        excludeSelectors: ["div[class*='metadataRight']", "div[class*='commentMetaAndOptions']"],
        globalStyles: {
            "div[class*='mini_cardBottomRowSizing']": "height: 3em;"
        },
        additionalSelectors: ["div[class*='mini_cardBottomRow_Metadata']"],
        stayOriginalSelectors: ["[data-tooltip='tooltip-user-info']"]
    }, {
        id: "googleIndex",
        matches: ["https://www.google.com/", "https://www.google.com.hk/"],
        excludeSelectors: ["#gb", "#SIvCob"],
        inputTutorialsText: "\u8BD5\u8BD5\u8F93\u5165\u4E2D\u6587\u540E\u5FEB\u901F\u8FDE\u51FB 3 \u6B21\u7A7A\u683C\u952E\u7FFB\u8BD1\uFF08\u4EC5\u63D0\u793A\u4E00\u6B21\uFF09",
        inputTutorialsSelectors: ["textarea#APjFqb"],
        "inputConfig.add": {
            tutorialsText: "\u8BD5\u8BD5\u8F93\u5165\u4E2D\u6587\u540E\u5FEB\u901F\u8FDE\u51FB 3 \u6B21\u7A7A\u683C\u952E\u7FFB\u8BD1\uFF08\u4EC5\u63D0\u793A\u4E00\u6B21\uFF09",
            tutorialsSelectors: ["textarea#APjFqb"]
        }
    }, {
        id: "googleSearch",
        matches: "www.google.*/search*",
        blockMinTextCount: 32,
        blockMinWordCount: 3,
        wrapperSuffix: "",
        detectParagraphLanguage: !0,
        excludeSelectors: ["a h3 + div", "div#sfooter", "a[role=presentation] > div > div:first-child", ".b5ZQcf", ".CEMjEf", ".MgUUmf.NUnG9d", "#result-stats", "[role=navigation]", "div.sCuL3", "div.eFM0qc.BCF2pd", "div.WZ8Tjf", "div.adDDi", "#headerSection", "#rateChatDiv", "[id=bres]", ".title-D5Lgyj", "[data-attrid='VisualDigestVideoResult']", ".search-enhance-WDIEkP h4", ".SPZz6b h2", ".CtCigf", ".VLkRKc", ".EbH0bb", ".Wr0c6d", ".jleFbf", "#searchform", ".yg51vc", ".CbAZb"],
        extraBlockSelectors: [".MUFPAc"],
        "additionalExcludeSelectors.add": ["[jscontroller='UsftYd']"],
        globalStyles: {
            ".V82bz": "-webkit-line-clamp: unset;max-height: unset;margin-bottom:30px",
            ".pe7FNb": "-webkit-line-clamp: unset;",
            ".promotion-3PDMAb": "display: none;",
            ".uAKcGb": "-webkit-line-clamp: unset;max-height: unset;margin-bottom:30px",
            "div[data-content-feature='1'] > div": "-webkit-line-clamp: unset;max-height: unset;",
            "div[style='-webkit-line-clamp:2']": "-webkit-line-clamp: unset;max-height: unset;",
            "div[style='-webkit-line-clamp:3']": "-webkit-line-clamp: unset;max-height: unset;",
            "div[style='-webkit-line-clamp:4']": "-webkit-line-clamp: unset;max-height: unset;",
            ".Pw4Ldf.RsCEN": "height:unset;",
            ".related-question-pair": "overflow:auto;"
        },
        ignoreZhCNandZhTW: !0,
        isTranslateTitle: !1,
        searchEnhancementConfig: [{
            id: "google",
            urlMatch: "https://www\\.google\\..+/search",
            style: {
                source: "font-size:12px; margin-bottom: 6px;",
                enTitle: "margin-top:6px;font-size:14px;",
                searchTitle: "margin-top:6px;position:relative;padding-right:24px;",
                more: "color:#1a0dab;margin-top:8px;",
                enTitleClassName: "immersive-translate-search-enhancement-en-title"
            },
            keyword: {
                value: "[0]$1",
                matches: [{
                    source: "url",
                    matchRegex: "q=(.+?)&"
                }]
            },
            showCount: 5
        }]
    }, {
        id: "lowendtalk",
        matches: "lowendtalk.com",
        selectors: ["[role=heading]", "h1", ".userContent"]
    }, {
        id: "linkedinJobs",
        matches: "www.linkedin.com/jobs/*",
        selectors: ["#job-details > span", ".decorated-job-posting__details"]
    }, {
        id: "linkedinFeed",
        matches: "https://linkedin.com/feed/*",
        selectors: ["h1", ".feed-shared-update-v2__description-wrapper"]
    }, {
        id: "indiehackers",
        matches: "www.indiehackers.com",
        selectors: [".content", "h1", "h3.story__title", ".feed-item__title-link", ".article-body", ".interview-body"]
    }, {
        id: "libreddit",
        matches: "libreddit.de",
        selectors: ["h2.post_title", ".comment_body > .md"]
    }, {
        id: "notionSite",
        matches: ["notion.site", "*.notion.site"],
        normalizeBody: "body",
        selectors: ["div[data-block-id]"]
    }, {
        id: "notion_so",
        matches: ["www.notion.so"],
        injectedCss: ["[aria-label='Templates'] font br {display:none;}"]
    }, {
        id: "newyorker",
        matches: "www.newyorker.com",
        additionalSelectors: ["h1", "[data-testid=SummaryItemHed]"],
        excludeSelectors: ["[data-testid=PersistentTop]", "[data-testid=StackedNavigationHeader]"],
        urlChangeDelay: 2e3
    }, {
        id: "startme",
        matches: "start.me",
        selectors: [".rss-article__title", ".rss-articles-list__article-link", ".rss-showcase__title", ".rss-showcase__text"]
    }, {
        id: "scmp",
        matches: "www.scmp.com",
        additionalSelectors: [".info__subHeadline", ".section-content h2"],
        globalStyles: {
            ".topic__article-list": "height: unset;",
            ".adverisers__adveriser": "height: unset;",
            ".advertiser__content": "height: unset;",
            ".content-title__link": "display:unset;overflow:unset;-webkit-line-clamp:unset;",
            ".title__text": "max-height:unset; -webkit-line-clamp:unset;",
            ".news-list-item__news-title": "max-height:unset; -webkit-line-clamp:unset;",
            "a[class*='link'] > .link__headline": "max-height:unset; -webkit-line-clamp:unset;"
        },
        "bodyRule.add": {
            bodySelector: "[data-qa='ArticleList-Item']",
            articleSelector: "[data-qa='GenericArticle-Content']",
            xpathRule: ["datatype:p"]
        }
    }, {
        id: "lesswrong",
        matches: "www.lesswrong.com",
        extraBlockSelectors: ["span.commentOnSelection"]
    }, {
        id: "mastodon",
        matches: ["mastodon.social", "mastodon.online", "kolektiva.social", "indieweb.social", "mastodon.world", "infosec.exchange"],
        isTranslateTitle: !1,
        selectorMatches: ["div#mastodon"],
        selectors: ["div.status__content__text", ".about__section__body", ".content", ".form-container", ".account__header__extra"],
        globalAttributes: {
            "[class='notranslate app-holder']": {
                class: "app-holder"
            }
        },
        detectLanguage: !0
    }, {
        id: "cnbc",
        matches: "www.cnbc.com",
        urlChangeDelay: 1e3,
        globalStyles: {
            "div.Card-titleContainer > div": "-webkit-line-clamp: unset;max-height: unset;"
        },
        "excludeSelectors.add": ["#GlobalNavigation", "#GlobalFooter", ".LiveBlogHeader-timestampAndShareBarContainer", ".LiveBlogHeader-liveUpdatesPill"]
    }, {
        id: "dailyDev",
        matches: "app.daily.dev",
        selectors: ["h1", ".typo-body", "article h3", "[class^=markdown_markdown]"],
        globalStyles: {
            ".line-clamp-3": "-webkit-line-clamp: unset"
        }
    }, {
        id: "pornhub",
        matches: ["*.pornhub.com", "pornhub.com"],
        excludeMatches: ["*.pornhub.com/insights/*", "pornhub.com/insights/*"],
        extraBlockSelectors: [".trendingNow", ".searchItem", ".tagcloud > a"],
        detectParagraphLanguage: !0,
        wrapperPrefix: "<br/>",
        wrapperSuffix: `
`,
        globalStyles: {
            "span.title": "height:unset; max-height:unset;",
            ".detailedInfo": "max-height:unset;",
            ".pcVideoListItem": "max-height:unset;",
            ".wrap": "height:unset;",
            ".entry-header": "height:unset;",
            ".entry-title > a": "height:unset;-webkit-line-clamp:unset;"
        }
    }, {
        id: "yourporn",
        matches: "https://www.youporn.com/*",
        extraBlockSelectors: [".button"],
        globalStyles: {
            ".video-box": "max-height:unset;",
            ".video-box-title": "white-space:unset;"
        }
    }, {
        id: "modelhub",
        matches: "https://www.modelhub.com/*",
        globalStyles: {
            ".videoTitle": "height:unset;",
            a: "height:unset;"
        }
    }, {
        id: "xvideos",
        matches: "https://www.xvideos.com/*",
        globalStyles: {
            ".title": "-webkit-line-clamp:unset;max-height:unset;",
            ".mozaique": "display:flex; flex-wrap:wrap;"
        },
        excludeSelectors: [".video-hd-mark"]
    }, {
        id: "missav",
        matches: "https://missav.com/*",
        globalStyles: {
            ".truncate": "white-space:unset;",
            ".overflow-y-hidden": "max-height:unset;overflow-y:unset;"
        },
        "subtitleRule.add": {
            type: "av",
            avSerial: {
                type: "url",
                regexStr: ".+/([a-z0-9-]+)$"
            },
            videoSelector: ".plyr__video-wrapper video",
            attachRule: {
                appendSelector: ".plyr--video",
                injectedGlobalCSS: ""
            },
            quickButtonRule: {
                appendSelector: ".plyr__controls",
                insertBeforeSelector: '[data-plyr="captions"]'
            }
        }
    }, {
        id: "javbus",
        matches: "https://www.javbus.com/*",
        globalStyles: {
            ".photo-info": "height:unset;"
        },
        excludeSelectors: [".item-tag", "date"]
    }, {
        id: "spankbang",
        matches: "https://spankbang.com/*",
        globalStyles: {
            ".video-item > a": "white-space:unset;"
        },
        excludeSelectors: [".stats", ".thumb"],
        extraBlockSelectors: [".searches > a", ".tag > a", ".extra > a", ".positions > li"]
    }, {
        id: "javdb",
        matches: "https://javdb*.com/*",
        globalStyles: {
            ".video-title": "white-space:unset;"
        },
        excludeSelectors: [".video-number", ".score", ".has-addons"]
    }, {
        id: "jable",
        matches: "https://jable.tv/*",
        globalStyles: {
            ".title": "white-space:unset;max-height:unset;",
            ".img-box > a": "position:relative;"
        }
    }, {
        id: "netflav.player",
        matches: ["https://netflavns1.com", "https://embedrise.com"],
        mainFrameMinTextCount: 0,
        "subtitleRule.add": {
            type: "av",
            avSerial: {
                type: "url",
                regexStr: "code=([a-z0-9-]+)"
            },
            videoSelector: "#vplayer video",
            attachRule: {
                appendSelector: "#vplayer"
            },
            quickButtonRule: {
                appendSelector: "#vplayer .jw-button-container",
                insertBeforeSelector: "#vplayer .jw-button-container .jw-icon-cc"
            }
        }
    }, {
        id: "netflav",
        matches: ["https://netflav*.com/*"],
        globalStyles: {
            ".grid_title": "max-height:unset;"
        },
        extraBlockSelectors: [".genre_filter_item", "button"],
        "subtitleRule.add": {
            type: "av",
            avSerial: {
                type: "selector",
                selector: ".videodetail_2_field_values",
                serialAttachIframe: "#iframe-block"
            }
        }
    }, {
        id: "czechvideo",
        matches: "https://czechvideo.co/*",
        globalStyles: {
            ".short-story": "height:unset;",
            ".short-title": "height:unset;"
        },
        globalAttributes: {
            header: {
                translate: "unset;"
            }
        }
    }, {
        id: "weibo",
        matches: ["weibo.com", "*.weibo.*"],
        selectors: ["div[class^='detail_wbtext']", ".weibo-text"],
        "stayOriginalSelectors.add": [".expand"]
    }, {
        id: "medium",
        matches: ["medium.com", "*.medium.com"],
        selectorMatches: ["meta[property='al:ios:url'][content^='medium://']"],
        urlChangeDelay: 20,
        "additionalExcludeSelectors.remove": ["i.fa", "i[class^=fa-]", ".navmenu-container", ".google-symbols"],
        selectors: ["h1", "h2", "h3", "article section", "[aria-hidden='false'] pre", "article p", ".postMetaInline", "a .u-fontSize24"],
        excludeSelectors: ["[aria-label='Post Preview Reading Time']", ".al.b.bl.ag.bp", ".al.b.bl.ag.ai", ".hx.hy.hz.ia.ib.ab", ".qb.ab", ".ai.bn.n.mj", ".speechify-ignore"],
        globalStyles: {
            "h2,h3": "-webkit-line-clamp: unset;max-height:unset;",
            "article p": "-webkit-line-clamp: unset;max-height:unset;"
        },
        injectedCss: [".u-lineClamp4,.u-lineClamp3,.u-lineClamp2 {-webkit-line-clamp:unset!important;max-height:unset!important;}"]
    }, {
        id: "nitter",
        selectorMatches: ["meta[property='og:site_name'][content='Nitter']"],
        selectors: [".tweet-content", ".quote-text"]
    }, {
        id: "economist",
        matches: "www.economist.com",
        extraInlineSelectors: ["span[data-caps='initial']"],
        excludeSelectors: ["footer.ds-footer"],
        injectedCss: ["a::before {position:relative!important;}"]
    }, {
        id: "healthline",
        matches: "www.healthline.com",
        excludeSelectors: [".icon-hl-trusted-source-after"]
    }, {
        id: "ebay",
        matches: "www.ebay.com",
        excludeSelectors: ["headers", "[itemprop=offers]", ".dne-itemtile-original-price"],
        paragraphMinTextCount: 4,
        paragraphMinWordCount: 2,
        globalStyles: {
            "[itemprop=name]": "-webkit-line-clamp: unset;max-height: unset;",
            ".merch-item-title": "-webkit-line-clamp: unset;max-height: unset;"
        }
    }, {
        id: "skinstore",
        matches: "www.skinstore.com",
        excludeSelectors: [".responsiveFlyoutMenu_levelOneLink"],
        paragraphMinTextCount: 4,
        paragraphMinWordCount: 2
    }, {
        id: "tripadvisor",
        matches: "www.tripadvisor.com",
        paragraphMinTextCount: 4,
        paragraphMinWordCount: 2
    }, {
        id: "primevideo",
        matches: ["www.primevideo.com", "https://*.amazon.co.*/*video*", "https://*.amazon.com/*video*"],
        "excludeSelectors.add": ["#dv-web-player"],
        "mutationExcludeSelectors.add": ["#dv-web-player *"],
        "subtitleRule.add": {
            type: "ebutt",
            hookType: "xhr",
            subtitleUrlRegExp: "\\.ttml2$",
            loadingContainerSelector: "#dv-web-player"
        }
    }, {
        id: "amazon",
        matches: "www.amazon.com",
        paragraphMinTextCount: 4,
        paragraphMinWordCount: 2,
        extraBlockSelectors: [".a-size-small.a-link-normal.page-banner-link.a-nowrap"],
        globalStyles: {
            ".a-carousel-viewport": "height:unset;",
            "[class*='clamp']": "max-height: unset;-webkit-line-clamp: unset;",
            "[data-rows]": "max-height: unset;-webkit-line-clamp: unset;",
            "[data-a-expander-name='review_text_read_more']": " max-height: unset;"
        },
        excludeSelectors: ["#navFooter", "#navbar-main", ".s-price-instructions-style", "[class*='-star ']", "[data-hook='acr-average-stars-rating-text']", ".a-color-price"]
    }, {
        id: "visualstudioMarketplace",
        matches: "marketplace.visualstudio.com",
        additionalExcludeSelectors: [".core-info-second-row", ".core-info-third-row", ".meta-data-list", ".item-title", ".breadcrumb", ".itemDetails-right", ".ux-user-name", ".ux-updated-date", ".ux-item-second-row-wrapper", ".stats-and-offer", ".header-container"],
        atomicBlockSelectors: [".core-info-cell > div.name"],
        globalStyles: {
            ".item-details-control-root.ux-item-shortdesc": "height: unset; overflow: visible; max-height:unset;"
        }
    }, {
        id: "bloomberg",
        matches: "www.bloomberg.com",
        urlChangeDelay: 2e3,
        excludeSelectors: [".ticker-bar", "nav", "[aria-label=Banner]", "aside", "[data-component=ticker-bar]", "footer.bb-global-footer", ".vjs-text-track-display"],
        "bodyRule.add": {
            bodySelector: "main article",
            articleSelector: ".body-content"
        },
        "subtitleRule.add": {
            type: "webvtt",
            subtitleUrlRegExp: "webvtt$",
            loadingContainerSelector: ".vjs-text-track-display",
            quickButtonRule: {
                appendSelector: ".vjs-control-bar",
                insertBeforeSelector: ".vjs-playback-rate"
            }
        }
    }, {
        id: "baiduXueshu",
        matches: "xueshu.baidu.com",
        globalStyles: {
            ".abstract_wr": "height: unset; overflow: visible; max-height:unset;"
        }
    }, {
        id: "sciencedirect",
        matches: "www.sciencedirect.com",
        urlChangeDelay: 2e3,
        stayOriginalSelectors: ["span.display", "span.math"],
        extraBlockSelectors: ["span.captions", "span[id^=cap]"],
        globalAttributes: {
            "#abspara0010 br": {
                style: "display:none;"
            }
        }
    }, {
        id: "thehighestofthemountains",
        matches: "www.thehighestofthemountains.com",
        extraBlockSelectors: "div"
    }, {
        id: "telegraph1",
        matches: "te.legra.ph",
        normalizeBody: "div.ql-editor[contenteditable='false']",
        urlChangeDelay: 500
    }, {
        id: "telegraph2",
        matches: ["telegra.ph"],
        normalizeBody: "div.ql-editor[contenteditable='false']",
        wrapperPrefix: `
`
    }, {
        id: "annasArchive",
        matches: ["*.annas-archive.org", "annas-archive.org"],
        selectors: [],
        globalStyles: {
            "div[id^='link-index-']": "height: unset; max-height: unset;",
            "main div[class*='h-[125]']": "height:auto"
        },
        normalizeBody: "body",
        extraBlockSelectors: ["a.custom-a"]
    }, {
        id: "explainshell",
        matches: ["explainshell.com"],
        selectors: ["[class='help-box']"]
    }, {
        id: "apnews",
        matches: ["apnews.com"],
        urlChangeDelay: 2e3
    }, {
        id: "googlePlay",
        matches: "play.google.com",
        excludeSelectors: [".vlGucd", ".ubGTjb"],
        globalStyles: {
            ".Epkrse": "-webkit-line-clamp:unset;"
        }
    }, {
        id: "tumblr",
        matches: ["www.tumblr.com"],
        selectors: ["article h1", "article > header + div", "[data-testid=notes-root] p", "div.k31gt", "p", "article ul", "article h2", "article h3", "article h4", "article h5", "article h6", "article blockquote", "article ol"],
        excludeSelectors: ["div.fAAi8", "div.wvu3V"],
        preWhitespaceDetectedTags: ["DIV", "SPAN", "P"]
    }, {
        id: "tinytask",
        matches: "https://www.tinytask.net",
        globalStyles: {
            "table > tbody > tr > td > center > table > tbody > tr > td > ul > li": "height: 100%"
        }
    }, {
        id: "foxnews",
        matches: "www.foxnews.com",
        shadowRootSelectors: ["[data-spot-im-module-default-area='conversation'] > div"],
        "excludeTags.add": ["TEXT", "IMG", "SUB", "SUP", "CODE", "TT", "ASIDE"],
        excludeSelectors: [".site-footer", ".components-MessageDetails-index__message-details-wrapper", "div[class^=SlideDown__container]", ".components-MessageActions-index__messageActionsWrapper", "span[data-openweb-allow-amp]", "div.spcv_typing-users"]
    }, {
        id: "afreecatv",
        matches: "www.afreecatv.com",
        globalStyles: {
            "a.title": "max-height:unset;-webkit-line-clamp:unset;"
        }
    }, {
        id: "opennet",
        matches: "opennet.ru",
        "excludeTags.add": ["LABEL", "IMG", "SUB", "SUP", "CODE", "TT"],
        "excludeTags.remove": ["LINK", "G", "MATH", "TTS-SENTENCE", "AIO-CODE"]
    }, {
        id: "construct",
        matches: ["www.construct.net"],
        excludeMatches: ["preview.construct.net", "editor.construct.net"],
        additionalSelectors: ["aside", "div.manualContent"],
        atomicBlockSelectors: [],
        stayOriginalSelectors: ["a.usernameReference"],
        additionalInlineSelectors: ["a.forumLink"],
        additionalExcludeSelectors: ["div.topNav", "div.usernameLink", "ul.authorDetails", "ul.tagViewer", "ul.breadCrumbNav", "ul.subForumForums", "ul.postTools", "li.comment ul.controls", "div.forumTopNavWrap", "div.downloadWrap", "div.articleLeftMenu", "div.usernameTextWrap", "div.favouriteWrap", "div.bannerWrapper", "div.viewAddonRightMenu", "div.extendedMenu.addonsSubMenu", "#BottomLinks.bottomLinks", "div#LeftSide.leftSide", "div#BottomWrap.bottomWrap", "div.courseListWrap div.overview", "div.conversationControls", "div.contentWrapper h1", "div.conversationControls", "td.location a#LocationLink", "#TopLevelComments .topBar", "#TopLevelComments .controls", ".tagViewWrap", ".changeCount", ".otherStats", ".FilterMenu", ".mobileTopicStats", ".forumControlsWrapper", ".forumsBottomNavWrap", ".breadCrumbNav", ".favouriteWrap", ".usernameLink", ".followWrapper", ".blogPostStats", ".manualContent dl dt"],
        globalStyles: {
            "td.location a#LocationLink": "padding-top: 4px;",
            "div.articleMain .tutCourseWrap": "align-items: flex-start;"
        }
    }, {
        id: "getpocket",
        matches: "getpocket.com",
        selectors: ["h2", "div.excerpt p", "article", "h1"],
        globalStyles: {
            "h2.title": "max-height:unset;-webkit-line-clamp:unset;",
            "div.excerpt p": "max-height:unset;-webkit-line-clamp:unset;"
        }
    }, {
        id: "fandom",
        matches: "*.fandom.com",
        urlChangeDelay: 800,
        normalizeBody: "#mw-content-text",
        globalStyles: {
            "#mw-content-text > div > div:nth-child(1)": "height:100%;"
        },
        additionalExcludeSelectors: ["header.fandom-community-header", "div.ph-registration-buttons"]
    }, {
        id: "huggingface",
        matches: "huggingface.co",
        globalStyles: {
            ".line-clamp-2": "-webkit-line-clamp:unset;max-height:unset;"
        }
    }, {
        id: "statista",
        matches: "www.statista.com",
        globalStyles: {
            ".itemContent__text": "height:unset;max-height:unset;",
            ".itemContent__subline": "height:unset;max-height:unset;"
        }
    }, {
        id: "epubReader",
        matches: "epub-reader.online",
        globalStyles: {
            "span.slide-contents-item-label": "overflow:visible;max-height:unset;white-space:normal;"
        },
        atomicBlockSelectors: ["div.slide-contents-item"]
    }, {
        id: "you",
        matches: "https://you.com/search",
        globalStyles: {
            h3: "max-height:unset;-webkit-line-clamp:unset;",
            ".caKYaC": "max-height:unset;-webkit-line-clamp:unset;",
            ".dDwDsu": "max-height:unset;-webkit-line-clamp:unset;"
        },
        excludeSelectors: ["div.hpIWZO"]
    }, {
        id: "auth0Openai",
        matches: "auth0.openai.com",
        excludeSelectors: ["form", "header > h1"]
    }, {
        id: "chatOpenai",
        matches: "chat.openai.com",
        excludeSelectors: ["div.absolute.bottom-0.left-0.w-full", "h1", "div#headlessui-portal-root", "nav", "ul[aria-multiselectable]", ".markdown *", "div[class='flex flex-col items-start']", "div[class='flex items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300']"],
        "excludeTags.remove": ["BUTTON"],
        isTranslateTitle: !1,
        wrapperPrefix: "",
        globalStyles: {
            "[class*='line-clamp']": "max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"
        },
        aiRule: {
            streamingSelector: ".result-streaming.markdown",
            messageWrapperSelector: ".markdown",
            streamingChange: !0,
            streamingDeepChild: !0,
            streamingDelayTime: 1e3
        }
    }, {
        id: "poe",
        matches: ["https://poe.com/*"],
        excludeSelectors: [".Markdown_markdownContainer__Tz3HQ *", ".MarkdownLink_linkifiedLink__KxC9G", "menu", "aside"],
        aiRule: {
            streamingSelector: ".ChatStopMessageButton_stopButton__LWNj6",
            messageWrapperSelector: ".Markdown_markdownContainer__Tz3HQ",
            streamingChange: !1,
            streamingDeepChild: !0,
            streamingDelayTime: 1e3
        }
    }, {
        id: "glasp",
        matches: "glasp.co",
        excludeSelectors: [".home_overview_list_content_wrapper"]
    }, {
        id: "developerChrome",
        matches: "developer.chrome.com",
        excludeSelectors: ["web-tabs", "ul.code-sections--summary"]
    }, {
        id: "android",
        matches: ["developer.android.google.cn", "developer.android.com"],
        observeUrlChange: !0,
        additionalSelectors: ["aside", "google-codelab-step"]
    }, {
        id: "ft",
        matches: "www.ft.com",
        excludeSelectors: ["header", "[aria-labelledby=cookie-banner-aria-label]", "footer", "[aria-label='Primary navigation']"]
    }, {
        id: "microsoft",
        matches: "https://apps.microsoft.com/store/detail/*",
        additionalSelectors: ["pre"],
        globalStyles: {
            ".line-clamp": "-webkit-line-clamp:unset;max-height:unset;"
        },
        isTransformPreTagNewLine: !0
    }, {
        id: "gitlab",
        matches: "gitlab.com",
        excludeSelectors: [".tree-content-holder", "nav", ".home-panel-metadata", "div[data-testid=project_topic_list]", ".commit"]
    }, {
        id: "tiktok",
        matches: "https://www.tiktok.com/*/video/*",
        selectors: ["[data-e2e^=comment-level]", "[data-e2e=browse-video-desc] > span"]
    }, {
        id: "rfcEditor",
        matches: ["www.rfc-editor.org", "docs.haproxy.org"],
        isTransformPreTagNewLine: !0,
        "excludeTags.add": ["IMG", "SUB", "SUP", "CODE", "TT", "ASIDE", "FOOTER"],
        "excludeTags.remove": ["LINK", "G", "PRE", "TTS-SENTENCE", "AIO-CODE"]
    }, {
        id: "steamcommunity",
        matches: "steamcommunity.com",
        globalStyles: {
            ".forum_topic,.rightbox_list_option": "height:auto;",
            ".forum_topic_name": "white-space:normal;line-height: 1.25rem; padding: 6px 20px 0 0;",
            ".forum_topic_op": "clear: left; padding: 0 0 6px 2rem;"
        },
        excludeSelectors: [".forum_paging", ".forum_topic_reply_count", ".forum_topic_lastpost", ".forum_topic_award_count", ".discussion_search_pagingcontrols"]
    }, {
        id: "steampoweredApp",
        matches: "store.steampowered.com/app/*",
        selectors: [".game_description_snippet", ".game_area_description", "#earlyAccessHeader", "[id^='ReviewContent'] .content", ".ModalOverlayContent"],
        excludeSelectors: ["#global_actions", "#store_controls", "#foryou_tab", "[class*=persona]", "[class*=game_title_area]", "a.btn_medium", ".persona_name", ".hours.ellipsis", ".checkcol", ".postedDate", ".dev_row .summary", ".already_in_library", ".game_header_image_ctn .grid_content", ".ds_flag.ds_wishlist_flag", ".early_access_review.tooltip", ".communitylink_achievement_images", ".user_reviews_summary_row.summary", ".review_award_ctn", ".add_to_wishlist_area", ".next_in_queue_content", ".glance_tags.popular_tags", ".game_purchase_action", ".vote_button_ctn", "#VoteUpDownBtnCtn", "#footer", "#ViewAllReviewssummary"],
        atomicBlockSelectors: [".game_area_sys_req_leftCol", ".game_area_sys_req_rightCol"],
        extraInlineSelectors: [".pulldown"],
        additionalSelectors: [".game_page_autocollapse_ctn iframe"],
        globalStyles: {
            ".game_description_snippet": "max-height:unset; overflow: scroll;",
            ".game_purchase_area_friends_want": "height: auto; padding-bottom: 6px;",
            ".div.early_access_banner": "height: 84px",
            ".franchise_notice > *": "height: 84px"
        },
        detectParagraphLanguage: !0
    }, {
        id: "steampowered",
        matches: "store.steampowered.com",
        detectParagraphLanguage: !0
    }, {
        id: "nature",
        matches: "https://www.nature.com/articles/*",
        excludeSelectors: [".c-header", ".c-recommendations-header", ".c-recommendations-list-container", ".c-article-references__links", ".c-article-identifiers", ".c-article-author-list", ".c-article-metrics-bar__wrapper", ".c-article__pill-button", "#author-information-content", "#article-info-section"]
    }, {
        id: "webofscience",
        matches: "https://www.webofscience.com/*",
        globalStyles: {
            ".abstract": "height:auto !important;",
            ".show-more-lines": "height:unset !important;"
        },
        excludeSelectors: [".summary-left-panel", ".authors", "app-full-record-keywords mark"],
        mutationObserverContainerSelectors: ["[data-ta='summary-record-title-link']", "#FullRTa-fullRecordtitle-0"],
        extraBlockSelectors: ["app-summary-authors + div", "app-full-record-keywords span span"],
        observeUrlChange: !0,
        urlChangeDelay: 600,
        mutationChangeDelay: 600
    }, {
        id: "appleinsider",
        matches: ["appleinsider.com"],
        excludeSelectors: ["#topic-nav"]
    }, {
        id: "jetbrains",
        matches: "https://www.jetbrains.com/help/*",
        extraBlockSelectors: ["[data-test=prompt]"]
    }, {
        id: "crates",
        matches: ["https://crates.io/search*"],
        selectors: ["div[class^=_description-box] div[class^=_description]"]
    }, {
        id: "theverge",
        matches: "www.theverge.com",
        shadowRootSelectors: ["div#coral_thread > div"]
    }, {
        id: "simp",
        matches: "https://beta.simp.red/trans*",
        mainFrameSelector: ".simpread-read-root"
    }, {
        id: "lookintobitcoin",
        matches: "https://www.lookintobitcoin.com/charts/*",
        excludeSelectors: ["svg"]
    }, {
        id: "openaiAccount",
        matches: "https://platform.openai.com/account/api-keys*",
        urlChangeDelay: 1500
    }, {
        id: "openaiDocs",
        matches: "https://platform.openai.com/docs*",
        "excludeSelectors.add": [".pheader"]
    }, {
        id: "pkgStd",
        matches: "https://pkg.go.dev/std",
        selectors: ["td.UnitDirectories-desktopSynopsis"]
    }, {
        id: "pkg",
        matches: "https://pkg.go.dev/*",
        selectors: ["div.UnitDetails p"]
    }, {
        id: "explainpaper",
        matches: ["https://www.explainpaper.com/reader*"],
        isTranslateTitle: !1,
        selectors: [".leading-relaxed", ".chat-messages p", ".text-sm"]
    }, {
        id: "colab",
        matches: "https://colab.research.google.com/*",
        excludeSelectors: ["code", "view-line"]
    }, {
        id: "gatesnotes",
        matches: "www.gatesnotes.com",
        minZIndex: -1
    }, {
        id: "kakao",
        matches: "page.kakao.com",
        shadowRootSelectors: ["div[style^='visibility: visible'"]
    }, {
        id: "coinmarketcap",
        matches: "coinmarketcap.com",
        extraBlockSelectors: ["div[class='sc-3502f6cd-0 JxHqg']"]
    }, {
        id: "wandb",
        matches: "wandb.ai",
        additionalSelectors: [".report-page-top"],
        additionalStayOriginalSelectors: ["span[data-slate-inline=true]"],
        extraInlineSelectors: []
    }, {
        id: "paulgraham",
        matches: "paulgraham.com",
        additionalSelectors: ["font[face=verdana]"],
        extraBlockSelectors: "font[face=verdana]"
    }, {
        id: "zendesk",
        matches: "https://*.zendesk.com/agent/*",
        selectors: ["[data-test-id*=subject]", ".zd-comment", ".title"]
    }, {
        id: "migadu",
        matches: "webmail.migadu.com",
        selectors: [".bodyText"]
    }, {
        id: "thehackernews",
        matches: "thehackernews.com",
        excludeSelectors: ["span#blog-pager-older-link", "span.h-datetime"],
        additionalSelectors: [".pop-title"]
    }, {
        id: "brown",
        matches: "cs.brown.edu",
        excludeSelectors: [".SCodeFlow"]
    }, {
        id: "tass",
        matches: "tass.ru",
        globalStyles: {
            "#__next": "font-size: 19px;line-height:28px;"
        }
    }, {
        id: "chatGoogle",
        matches: "chat.google.com",
        selectors: ["[jsname=bgckF]"]
    }, {
        id: "fiverr",
        matches: "https://www.fiverr.com/inbox/*",
        selectors: [".message-body"]
    }, {
        id: "fiverr-main",
        matches: "*.fiverr.com",
        globalStyles: {
            "h3 > a": "-webkit-line-clamp:unset;overflow:unset;",
            h3: "-webkit-line-clamp:unset;overflow:unset;",
            h5: "-webkit-line-clamp:unset;overflow:unset;",
            p: "-webkit-line-clamp:unset;overflow:unset;",
            ".YLycza2.u9KHmsf": "height:unset;max-height:unset;",
            ".lt2ar2q.EhHcMiw": "height:unset; max-height: unset;"
        },
        excludeSelectors: [".popular"]
    }, {
        id: "jira",
        matches: ["jira.*.com/browse/*", "jira.*.com/projects/*"],
        selectors: ["[id=descriptionmodule]", "[id=summary-val]", "div.action-body", "td.stsummary"]
    }, {
        id: "ahaIo",
        matches: ["*.aha.io"],
        selectors: ["[tabindex='0']", "div.user-content", "div.comments__body", "span.name"]
    }, {
        id: "thehill",
        matches: "thehill.com",
        injectedCss: [".most-popular-item { max-height: unset !important; }", ".most-popular-item__link { -webkit-line-clamp: unset !important; }"],
        excludeSelectors: ["div.featured-cards__byline", "div.list-item__meta", ".tags__item", "div.extended-scroll__header", ".submitted-by", ".site-header--has-alert-banner", ".homepage__container__opinion__item__byline", ".homepage__container__header", ".archive__item__meta"]
    }, {
        id: "ubuntu",
        matches: "manpages.ubuntu.com",
        selectors: ["pre"],
        atomicBlockTags: ["pre"]
    }, {
        id: "spiedigitallibrary",
        matches: "www.spiedigitallibrary.org",
        "excludeTags.add": ["IMG", "SUB", "SUP", "CODE", "TT", "ASIDE", "FOOTER"],
        "excludeTags.remove": ["LINK"]
    }, {
        id: "promptingguide",
        matches: "www.promptingguide.ai",
        selectors: ["article", "li"]
    }, {
        id: "ground",
        matches: "ground.news",
        globalStyles: {
            ".line-clamp-3": "-webkit-line-clamp: unset !important;"
        }
    }, {
        id: "ietf",
        matches: "*.ietf.org/doc/html/*",
        additionalSelectors: ["pre"],
        isTransformPreTagNewLine: !0,
        preWhitespaceDetectedTags: ["DIV", "SPAN", "PRE"]
    }, {
        id: "newsminimalist",
        matches: "https://www.newsminimalist.com/",
        extraBlockSelectors: [".inline-flex"],
        "excludeTags.remove": ["BUTTON"]
    }, {
        id: "yandexIndex",
        matches: "https://yandex.com/",
        selectors: [".tabs__item-text"]
    }, {
        id: "yandexSearch",
        matches: "https://yandex.com/search/*",
        excludeSelectors: [".KeyValue-Row", ".EntityFeedbackFooter", ".Organic-Subtitle", ".SerpFooter-Content", ".serp-user", ".Pager"],
        globalStyles: {
            ".ExtendedText-Toggle": "white-space:normal;"
        }
    }, {
        id: "yandex",
        matches: "https://yandex.com/video/*",
        selectors: [".serp-item__title", ".serp-item__text", ".Keypoints-ItemTitle", ".bes-epmjnzm-idtktyj", ".OrganicTitle-LinkText", "h1.VideoTitle"],
        globalStyles: {
            ".serp-item__title": "-webkit-line-clamp: unset;max-height:unset;",
            ".serp-item__text": "-webkit-line-clamp: unset;max-height:unset;",
            ".OrganicTitle-LinkText": "-webkit-line-clamp: unset;max-height:unset;",
            "h1.VideoTitle": "-webkit-line-clamp: unset;max-height:unset;",
            ".link .serp-item__keypoints": "bottom:2px;",
            ".OrganicTitle": "max-height:unset;"
        }
    }, {
        id: "perplexity",
        matches: "https://www.perplexity.ai",
        globalStyles: {
            ".line-clamp-1": "-webkit-line-clamp: unset !important;",
            ".line-clamp-2": "-webkit-line-clamp: unset !important;"
        },
        "mutationConfig.add": {
            buildTimeout: 1e3,
            consumeTimeout: 1e3
        },
        additionalStayOriginalSelectors: ["a.citation"],
        selectors: [".prose", ".my-md", ".line-clamp-2", ".line-clamp-1"]
    }, {
        id: "allmyfaves",
        matches: "https://allmyfaves.com/",
        selectors: ["p"],
        paragraphMinTextCount: 2,
        paragraphMinWordCount: 1
    }, {
        id: "man7",
        matches: "man7.org",
        isTransformPreTagNewLine: !0,
        globalStyles: {
            pre: "white-space: inherit;"
        }
    }, {
        id: "kadaza",
        matches: "https://www.kadaza.com/",
        selectors: [".header span.title", ".custom-content-footer"],
        containerMinTextCount: 2,
        containerMinWordCount: 1,
        paragraphMinTextCount: 2,
        paragraphMinWordCount: 1
    }, {
        id: "urlChangeDelay",
        matches: ["https://babelnovel.com/books/*", "https://www.webnovel.com/book/*", "https://platform.openai.com/docs/*", "docs.oracle.com", "docs-cortex.paloaltonetworks.com", "forum.m5stack.com/topic/*", "community.m5stack.com/topic/*"],
        urlChangeDelay: 0,
        _comment: "\u89E3\u51B3url\u53D8\u5316\u91CD\u590D\u7FFB\u8BD1\u95EE\u9898"
    }, {
        id: "genuine",
        matches: "blog.genuine.com",
        excludeSelectors: ["div.enlighter"]
    }, {
        id: "chinadaily",
        matches: "www.chinadaily.com.cn",
        injectedCss: ["a { height: unset !important; }", "li { height: unset !important; }", "div { height: unset !important; }", ".immersive-translate-target-inner {color:black;}"],
        excludeSelectors: [".topNav", ".topNav2_art > span", ".topNav_art2 > .dropdown", ".dibu-three", ".topBar"]
    }, {
        id: "braynzarsoft",
        matches: "www.braynzarsoft.net",
        selectors: ["div#view-question-desc"]
    }, {
        globalAttributes: {
            "#stimulus": {
                translate: "off",
                class: "stimulus"
            },
            "#stem": {
                translate: "off",
                class: "stem"
            }
        },
        id: "lawhub",
        matches: "https://lawhub.lsac.org/question/*"
    }, {
        id: "yuque",
        matches: "https://www.yuque.com/*",
        excludeSelectors: [".lark-virtual-tree"]
    }, {
        id: "bearblog",
        matches: "https://bearblog.dev/discover/*",
        excludeTags: ["small"]
    }, {
        id: "researchgate",
        matches: "www.researchgate.net",
        excludeSelectors: [".nova-legacy-v-publication-item__meta-data", ".nova-legacy-v-publication-item__person-list", ".js-authors-list"]
    }, {
        id: "theatlantic",
        matches: ["www.theatlantic.com", "https://mashable.com/*"],
        "excludeSelectors.add": ["footer:last-of-type", "nav", "header div.subtitle-2.w-full"],
        initialSelectorGlobalAttributes: {
            "footer:last-of-type": {
                translate: "no"
            },
            "nav:last-of-type": {
                translate: "no"
            },
            nav: {
                translate: "no"
            }
        }
    }, {
        id: "youtrackJetbrains",
        matches: "youtrack.jetbrains.com/articles/*",
        selectors: ["[role=presentation]", "[data-test=article-content]"],
        excludeSelectors: [".toolbar__ee8"]
    }, {
        id: "dw",
        matches: "www.dw.com",
        initialSelectorGlobalAttributes: {
            "footer:last-of-type": {
                translate: "no"
            },
            "nav:last-of-type": {
                translate: "no"
            },
            nav: {
                translate: "no"
            }
        },
        excludeSelectors: [".focus-menu-shown"]
    }, {
        id: "sentry",
        matches: "docs.sentry.io",
        initialSelectorGlobalAttributes: {
            "footer:last-of-type": {
                translate: "no"
            },
            ".navbar": {
                translate: "no"
            }
        },
        "extraInlineSelectors.add": [".term-wrapper", "span.description"]
    }, {
        id: "openai-blog",
        matches: "https://openai.com/blog/*",
        "stayOriginalTags.remove": ["CODE"]
    }, {
        id: "urlComment",
        selectorMatches: ["meta[name='generator'][content^='Discourse']"],
        urlChangeDelay: 0,
        _comment: "\u89E3\u51B3url\u53D8\u5316\u4F46\u662F\u9875\u9762\u4E0D\u53D8\u7684\u95EE\u9898"
    }, {
        id: "feedly",
        matches: "feedly.com",
        globalStyles: {
            ".TitleOnlyLayout": "height:unset !important;",
            ".EntrySummary--u4": "-webkit-line-clamp: unset;max-height:unset;",
            ".EntrySummary--u5": "-webkit-line-clamp: unset;max-height:unset;"
        },
        excludeSelectors: [".Leftnav"]
    }, {
        id: "bardGoogle",
        matches: "bard.google.com",
        excludeSelectors: ["mat-sidenav", "div.capabilities-disclaimer", "#cdk-overlay-6", "message-actions button", ".mdc-button__label .ng-star-inserted", ".mdc-list-item__primary-text"],
        isTranslateTitle: !1,
        "excludeTags.add": ["mat-tooltip-component"],
        "excludeTags.remove": ["BUTTON"]
    }, {
        id: "whatsapp",
        matches: "web.whatsapp.com",
        selectors: [".copyable-text > span"],
        wrapperPrefix: `
`,
        wrapperSuffix: "<br/>"
    }, {
        id: "bing",
        matches: "https://*.bing.com/search*",
        extraInlineSelectors: ["a", "i"],
        globalStyles: {
            "[class*='lineclamp'],.b_title": "-webkit-line-clamp:unset;"
        }
    }, {
        id: "yahoo",
        matches: "*.yahoo.*",
        excludeSelectors: ["._ys_jiqava", "#ybar-inner-wrap", "#Col2-5-Rmp-Proxy"],
        extraBlockSelectors: [".SIPGg", ".sc-kzMCTH.pSZXj"],
        globalStyles: {
            "#atomic .Mt\\(20px\\)": "margin-top: 100px;",
            "[class*='LineClamp']": "-webkit-line-clamp:unset;max-height:unset;",
            "a[class*='js-content-viewer']> div[class*='Td\\(n\\)']": "overflow: scroll;",
            "[class*='_ys_24482e']": "-webkit-line-clamp:unset;",
            "#Aside > :first-child": "overflow:scroll;"
        }
    }, {
        id: "wsj",
        matches: "www.wsj.com",
        excludeSelectors: ["header", "footer", "nav", "[aria-label='Markets summary']"]
    }, {
        id: "businessinsider",
        matches: "www.businessinsider.com",
        excludeSelectors: ["header", "nav", "section.live-updates-module "]
    }, {
        id: "goodreads",
        matches: "www.goodreads.com",
        excludeSelectors: [".badgeYear", ".gr-mediaBox__desc", ".bookVotedRow", ".minirating", "div[itemprop='aggregateRating']", ".wtrButtonContainer", ".RatingsHistogram__labelTitle", ".FollowButton", ".siteHeader__topLevelLink", "#books > thead", "td[class*='rating']", "td[class*='shelves']", "td[class*='date_read']", "td[class*='date_added']", "td[class*='actions']"]
    }, {
        id: "feeder",
        matches: "https://feeder.co/*",
        globalStyles: {
            ".item-summary": "-webkit-line-clamp:unset;"
        }
    }, {
        id: "elektrotechnik",
        matches: "https://www.elektrotechnik.rwth-aachen.de/*",
        globalAttributes: {
            "[class='notranslate']": {
                class: ""
            }
        }
    }, {
        id: "nytimes",
        matches: "www.nytimes.com",
        excludeSelectors: ["#app > div > div > header", "#app > div > div > div > div > header", "#in-story-masthead"],
        injectedCss: ["a::after {position:relative!important;}"]
    }, {
        id: "bugsKde",
        matches: "bugs.kde.org",
        "excludeTags.remove": ["svg", "PRE"],
        additionalExcludeSelectors: [".bz_first_comment_head", ".bz_comment_head", ".related_actions"]
    }, {
        id: "eastmoney",
        matches: "guba.eastmoney.com",
        searchEnhancementConfig: [{
            id: "eastmoney",
            urlMatch: "guba.eastmoney.com/news,us\\w+,\\w+.html",
            delayTime: 0,
            selector: ".moneyFlowContainer",
            selectorAction: "insertBefore",
            style: {
                container: "background:white;border:none;border-radius: 4px;box-shadow: 0 2px 4px hsla(216,5%,62%,.14);",
                source: "font-size:12px; margin-bottom: 0px;",
                keyword: "color:#294688",
                title: "font-size:14px;color:#294688;",
                enTitle: "margin-top:4px;font-size:12px;",
                searchTitle: "margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;",
                time: "margin: 0px 0 16px;",
                more: "color:#294688;margin-top:8px;"
            },
            keyword: {
                value: "[0]$1 stock",
                matches: [{
                    source: "url",
                    matchRegex: "guba.eastmoney.com/news,us(\\w+?),\\S+.html"
                }]
            },
            showCount: 8
        }, {
            id: "eastmoney",
            urlMatch: "guba.eastmoney.com/list,us\\w+.*.html",
            delayTime: 0,
            selector: ".qualityContentContainer",
            selectorAction: "insertBefore",
            style: {
                container: "background:white;border:none;border-radius: 4px;box-shadow: 0 2px 4px hsla(216,5%,62%,.14);",
                source: "font-size:12px; margin-bottom: 0px;",
                keyword: "color:#294688",
                title: "font-size:14px;color:#294688;",
                enTitle: "margin-top:4px;font-size:12px;",
                searchTitle: "margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;",
                time: "margin:0px 0 16px;",
                more: "color:#294688;margin-top:8px;"
            },
            keyword: {
                value: "[0]$1:[0]$2",
                matches: [{
                    source: {
                        type: "selector",
                        attribute: "href"
                    },
                    matchRegex: "code=(\\w+)_(\\w+)",
                    match: "a[href*='rank/stock?code=']"
                }]
            },
            showCount: 8
        }]
    }, {
        id: "xueqiu",
        matches: "xueqiu.com",
        searchEnhancementConfig: [{
            id: "xueqiu",
            urlMatch: "xueqiu.com/S/[a-zA-Z]+/?$",
            delayTime: 0,
            selector: ".container-side-sm.float-right.stock__side",
            selectorAction: "appendChild",
            style: {
                container: "background:white;border:none;border-radius: 4px;padding:0;",
                source: "font-size:12px; margin-bottom: 0px;",
                keyword: "color:#06c",
                title: "font-size:14px;color:#06c;",
                enTitle: "margin-top:4px;font-size:12px;",
                searchTitle: "margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;font-weight: bold;",
                time: "margin:0px 0 16px;",
                more: "color:#06c;margin-top:8px;"
            },
            showCount: 8,
            keyword: {
                value: "[0]$1",
                matches: [{
                    source: {
                        type: "selector",
                        attribute: "text"
                    },
                    matchRegex: "\\((.+)\\)",
                    match: ".stock-name"
                }]
            }
        }]
    }, {
        id: "laohu8",
        matches: "www.laohu8.com",
        searchEnhancementConfig: [{
            id: "laohu8",
            urlMatch: "www.laohu8.com/stock/[a-zA-Z]+/?$",
            delayTime: 0,
            selector: ".hot-stocks-root",
            selectorAction: "insertBefore",
            style: {
                container: "background:white;border:none;border-radius: 4px;box-shadow: 0 2px 4px hsla(216,5%,62%,.14);",
                source: "font-size:12px; margin-bottom: 0px;",
                title: "font-size:14px;color: #007bff;",
                enTitle: "margin-top:4px;color: #4d5156;font-size:12px;",
                searchTitle: "margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;",
                time: "margin: 0px 0 16px;"
            },
            keyword: {
                value: "[0]$1 stock",
                matches: [{
                    source: "url",
                    matchRegex: "stock/([a-zA-Z]+)"
                }]
            },
            showCount: 8
        }]
    }, {
        id: "futunn",
        matches: "www.futunn.com",
        searchEnhancementConfig: [{
            id: "futunn",
            urlMatch: "www.futunn.com/stock/\\w+-US",
            delayTime: 0,
            selector: ".right",
            selectorAction: "appendChild",
            style: {
                container: "background:white;border:none;border-radius: 4px;box-shadow: 0 2px 4px hsla(216,5%,62%,.14);",
                source: "font-size:12px; margin-bottom: 4px;",
                title: "font-size:14px;color: #007bff;",
                enTitle: "margin-top:4px;color: #4d5156;font-size:12px;",
                searchTitle: "margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;",
                time: "margin: 4px 0 20px;"
            },
            keyword: {
                value: "[0]$1 stock",
                matches: [{
                    source: "url",
                    matchRegex: "stock/([a-zA-Z]+)-US"
                }]
            },
            showCount: 8
        }]
    }, {
        id: "bmvrMarseille",
        matches: "www.bmvr.marseille.fr",
        globalStyles: {
            "a > div": "display:block;",
            "[style*='358px;']": "width: 33.3333%; height: auto; padding: 0px; position: relative; margin: 0px;"
        },
        globalAttributes: {
            "#app": {
                class: ""
            }
        }
    }, {
        id: "piAi",
        matches: "pi.ai/talk",
        globalStyles: {
            "[class*='text-brand-green']": "flex-direction:column;"
        }
    }, {
        id: "claudeAi",
        matches: "claude.ai",
        excludeSelectors: [".contents *"],
        "excludeTags.remove": ["PRE"],
        injectedCss: "[data-testid='chat-menu-trigger'] br {display:none;}",
        aiRule: {
            messageWrapperSelector: ".contents",
            messageContainerSelector: ".ReactMarkdown",
            messageStreamEndSelector: ".contents > button",
            streamingChange: !0,
            streamingDeepChild: !1,
            streamingDelayTime: 1e3
        }
    }, {
        id: "feishu",
        matches: ["*.feishu.cn", "*.larkoffice.com", "*.larksuite.com"],
        "additionalExcludeSelectors.remove": [".notranslate", "[translate=no]"],
        mutationObserverLimitTargetSelectors: [".maindocbody", "div[class*='render']", "div[class*='block']"],
        "excludeSelectors.add": [".catalogue__list"]
    }, {
        id: "gitbook",
        selectorMatches: [".gitbook-root"],
        "additionalExcludeSelectors.remove": [".notranslate", "[translate=no]"],
        "additionalExcludeSelectors.add": ["[spellcheck='false']"]
    }, {
        id: "mitre",
        matches: "cwe.mitre.org",
        globalStyles: {
            "span.list_entry": "height: unset;"
        }
    }, {
        id: "kaggle",
        matches: "www.kaggle.com",
        excludeTags: ["i", "button"]
    }, {
        id: "ieee",
        matches: "spectrum.ieee.org",
        extraBlockSelectors: ["small"]
    }, {
        id: "ieeexplore",
        matches: "ieeexplore.ieee.org",
        stayOriginalSelectors: ["a[ref-type]", ".inline-formula", ".display-formula"]
    }, {
        id: "cnn",
        matches: "*.cnn.com",
        "excludeSelectors.add": [".ad-slot-header__wrapper", "#pageFooter"],
        "bodyRule.add": {
            bodySelector: ".layout__content-wrapper",
            articleSelector: ".article__content-container"
        }
    }, {
        id: "marginalrevolution",
        matches: "marginalrevolution.com",
        globalAttributes: {
            header: {
                translate: "unset;"
            }
        }
    }, {
        id: "highfrequencyelectronics",
        matches: "www.highfrequencyelectronics.com",
        globalStyles: {
            "#main-content": "overflow:unset;"
        }
    }, {
        id: "githubBlog",
        matches: "github.blog",
        globalStyles: {
            ".font-mktg": "word-break:normal;"
        }
    }, {
        id: "semanticscholar",
        matches: "www.semanticscholar.org",
        selectors: [".cl-paper-title", ".cl-paper-abstract", ".tldr-abstract-replacement", ".text-truncator", ".paper-detail-title"]
    }, {
        id: "uni-trier",
        matches: "dblp.uni-trier.de",
        selectors: ["h1", "h2", ".title", ".external", "dd p"],
        excludeSelectors: [".side-column"]
    }, {
        id: "bilibili",
        matches: "www.bilibili.com",
        "excludeSelectors.add": [".bpx-player-subtitle-panel-text"],
        "subtitleRule.add": {
            type: "bilibili",
            subtitleUrlRegExp: "aisubtitle.hdslb.com/bfs",
            loadingContainerSelector: ".bpx-player-subtitle-panel"
        }
    }, {
        id: "time",
        matches: "time.com",
        excludeSelectors: [".date-and-duration"],
        globalStyles: {
            ".headline": "-webkit-line-clamp:unset;overflow:unset;height:unset;",
            h3: "-webkit-line-clamp:unset;overflow:unset;",
            p: "-webkit-line-clamp:unset;overflow:unset;"
        }
    }, {
        id: "docs-swift",
        matches: "docs.swift.org",
        selectors: [".content", "#menu"]
    }, {
        id: "uzh",
        matches: "www.uzh.ch",
        injectedCss: [".TextImage--inner {overflow:auto !important;}"]
    }, {
        id: "mail-yandex",
        matches: "mail.yandex.com",
        selectors: ["article", ".Text_color_primary", ".mail-MessageSnippet-Item_subject"],
        globalStyles: {
            ".mail-MessageSnippet": "height: unset; line-height:unset;",
            ".immersive-translate-target-translation-block-wrapper": "margin:unset;"
        }
    }, {
        id: "forums.zotero",
        matches: "forums.zotero.org",
        selectors: [".page-sidebar", ".page-content"]
    }, {
        id: "pubmed.ncbi.nlm.nih.gov",
        matches: "pubmed.ncbi.nlm.nih.gov",
        urlChangeDelay: 0,
        excludeSelectors: [".docsum-journal-citation", ".citation-part", ".docsum-authors", ".top-wrapper", ".article-source", ".citation-doi", ".identifiers", ".cite", ".share", ".arrow-link"],
        globalAttributes: {
            "#Scholarscope_HighlightContent": {
                class: ""
            },
            "#Scholarscope_HighlightOrigin": {
                class: "Scholarscope_HighlightContents"
            }
        },
        mutationExcludeContainsSelectors: ["#Scholarscope_HighlightContent highlight"],
        mutationExcludeSelectors: ["#Scholarscope_HighlightContent", "#Scholarscope_HighlightContent span"],
        injectedCss: ["#Scholarscope_HighlightOrigin > p font,#Scholarscope_HighlightContent > p font {display: inline!important;}", "#Scholarscope_HighlightOrigin > p font br,#Scholarscope_HighlightContent > p font br {display: none!important;}"]
    }, {
        id: "chosun",
        matches: "www.chosun.com",
        injectedCss: "body {word-break: unset!important;}"
    }, {
        id: "yna",
        matches: "*.yna*",
        injectedCss: ["font > br {display:none}"],
        globalStyles: {
            "a,strong": "max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;",
            "div,p,li,.item-box01,.news-con": "height:unset;max-height:unset;-webkit-line-clamp:unset;"
        },
        "additionalExcludeSelectors.remove": [".notranslate", "[translate=no]"]
    }, {
        id: "cnet",
        matches: "www.cnet.com",
        globalStyles: {
            "h3,div,span,p": "max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"
        }
    }, {
        id: "dolmods",
        matches: "dolmods.net",
        globalStyles: {
            "[class*='max-h']": "max-height:unset!important;"
        }
    }, {
        id: "digitimes",
        matches: "www.digitimes.com",
        globalStyles: {
            "a,.title,.abstract,.display-5,.top": "max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"
        },
        "excludeSelectors.add": [".main-nav-frame", ".sub-header-wrapper", ".footer", ".date"],
        "additionalExcludeSelectors.remove": [".notranslate", "[translate=no]"]
    }, {
        id: "vdi-nachrichten",
        matches: "www.vdi-nachrichten.com",
        "excludeSelectors.add": [".header-menu__item > a", ".linkbar__item", ".header__button-group"]
    }, {
        id: "htdp",
        matches: "htdp.org",
        excludeTags: ["blockquote"],
        stayOriginalSelectors: [".RktIn"]
    }, {
        id: "newsletterss",
        matches: "newsletterss.com",
        initialGlobalAttributes: {
            iframe: {
                scrolling: "auto"
            }
        }
    }, {
        id: "docusaurus",
        selectorMatches: ["#__docusaurus"],
        "excludeSelectors.add": ["aside", ".DocSearch-Modal"]
    }, {
        id: "mercari",
        matches: "*.mercari.com",
        "excludeTags.remove": ["PRE"]
    }, {
        id: "qqMail",
        matches: "mail.qq.com",
        useIframePostMessage: !1
    }, {
        id: "nikkei",
        matches: "www.nikkei.com",
        globalStyles: {
            "h3,div,span,p": "max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"
        }
    }, {
        id: "pubs.rsc.org",
        matches: "pubs.rsc.org",
        excludeSelectors: [".eqn"]
    }, {
        id: "indeed",
        matches: "*.indeed.com",
        globalStyles: {
            "span,.css-19rjr9w.e1wnkr790": "max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"
        },
        "excludeTags.remove": ["BUTTON"]
    }, {
        id: "brutalist",
        matches: "brutalist.report",
        selectors: ["li > a:first-child", "aside", "nav > a", "h1 > a", "h3 > a", "h2 >a"],
        "additionalExcludeSelectors.remove": [".notranslate", "[translate=no]"]
    }, {
        id: "maxroll",
        matches: ["maxroll.gg"],
        extraInlineSelectors: [".d4t-sprite-icon", ".d4t-icon"],
        injectedCss: ["font {font-family: sans-serif !important;}"]
    }, {
        id: "microsoftTeams",
        matches: ["teams.live.com"],
        "stayOriginalSelectors.add": ["span[title][style='min-width: 20px; height: 20px;']"]
    }, {
        id: "gradioappdocs",
        matches: "www.gradio.app/docs/*",
        selectors: ["div.obj"],
        excludeSelectors: ["div#examples"]
    }, {
        id: "arca",
        matches: "arca.live",
        "excludeTags.remove": ["PRE"]
    }, {
        id: "chatpdf",
        matches: ["www.chatpdf.com"],
        "additionalExcludeSelectors.remove": [".notranslate"],
        excludeSelectors: [".chat-message-row.ai *", ".pdf-viewer"],
        aiRule: {
            streamingSelector: "",
            messageWrapperSelector: ".chat-message-row.ai",
            streamingChange: !1,
            streamingDeepChild: !0,
            streamingDelayTime: 1e3
        }
    }, {
        id: "inciteful",
        matches: ["inciteful.xyz"],
        "excludeTags.remove": ["BUTTON"]
    }, {
        id: "app.element.io",
        matches: ["app.element.io"],
        "additionalExcludeSelectors.remove": [".notranslate"],
        "excludeSelectors.add": [".mx_DisambiguatedProfile", ".mx_ReplyChain_wrapper", ".mx_ThreadSummary_replies_amount"]
    }, {
        id: "fastapi.tiangolo.com",
        matches: "fastapi.tiangolo.com",
        selectors: ["article"]
    }, {
        id: "termynal",
        selectorMatches: ["link[href*='termynal.css']"],
        "stayOriginalSelectors.add": [".termy"]
    }, {
        id: "cpb-nl",
        matches: ["www.cpb.nl"],
        "bodyRule.add": {
            enable: !1
        }
    }, {
        id: "hub.logseq",
        matches: ["hub.logseq.com"],
        globalStyles: {
            "[class*=':h-[']": "height:unset;"
        }
    }, {
        id: "chat.zalo",
        matches: ["chat.zalo.me"],
        "additionalExcludeSelectors.remove": [".notranslate"],
        inputExecCommandDeleteEnable: !0,
        "inputConfig.add": {
            execCommandDeleteEnable: !0
        }
    }, {
        id: "epam",
        matches: "*.epam.com",
        globalStyles: {
            "[class*='ContentAnchorLinkList']": "word-break:unset;"
        },
        "excludeSelectors.add": ["#blog-page-sidebar-wrapper"],
        "excludeTags.remove": ["BUTTON"]
    }, {
        id: "discussions.apple",
        matches: "discussions.apple.com",
        "excludeSelectors.add": [".page-number"]
    }, {
        id: "www.sixthtone.com",
        matches: ["www.sixthtone.com"],
        "excludeSelectors.add": ["#footer", "[class^=index_time]", "[class^=index_anthorList]", "[class^=index_node]", "[class^=index_popupWrapper]"]
    }, {
        id: "forum.unity",
        matches: ["forum.unity.com"],
        "excludeSelectors.add": [".bbCodeCode"]
    }, {
        id: "wattpad",
        matches: ["www.wattpad.com"],
        "excludeTags.remove": ["PRE"],
        globalAttributes: {
            header: {
                translate: "unset;"
            }
        },
        globalStyles: {
            ".story-info .item-description": "overflow: scroll;"
        }
    }, {
        id: "netflix",
        matches: ["www.netflix.com"],
        "excludeSelectors.add": [".player-timedtext"],
        "mutationExcludeSelectors.add": [".player-timedtext *"],
        "subtitleRule.add": {
            type: "netflix",
            loadingContainerSelector: ".watch-video",
            subtitleUrlRegExp: "^https://.+?.oca.nflxvideo.net/\\?([ovet]=[^=]+){4}$",
            loadingStyle: "bottom: 15%;",
            quickButtonRule: {
                appendSelector: '[data-uia="control-next"]',
                insertBeforeSelector: '[data-uia="control-next"]',
                injectCSS: ".imt-quick-subtitle-button {height: 60%; margin-right: 50px; font-size: 20px; } .logo,.logo svg { height: 36px; width: 36px} .label { display: none; } .imt-quick-subtitle-pop-content {transform: translateX(50%); right: 0}"
            },
            videoSelector: "video",
            attachRule: {
                appendSelector: ".watch-video",
                injectedCSS: [".imt-caption-window {margin-bottom: 0px; bottom: 10vw;}"],
                injectedGlobalCSS: [".player-timedtext {display: none !important; }"]
            }
        }
    }, {
        id: "udemy",
        matches: ["www.udemy.com"],
        "excludeSelectors.add": ["[data-purpose='captions-cue-text']", ".shaka-text-container"],
        "mutationExcludeSelectors.add": ["[data-purpose='captions-cue-text'] *", ".shaka-text-container *"],
        "subtitleRule.add": {
            type: "udemy",
            subtitleUrlRegExp: "^https://vtt.*\\.udemycdn\\.com/.*\\.vtt",
            videoPlayerSelector: "video.shaka-video",
            humanTrust: 85,
            loadingContainerSelector: ".shaka-video-container",
            loadingStyle: "bottom: 15%;",
            injectedCss: ["[class^='well--text'] {white-space: pre;}"],
            quickButtonRule: {
                appendSelector: '[data-purpose="video-controls"]'
            }
        },
        "subtitleRule.add_v.[1.4.1]": {
            hookType: "fetch|xhr"
        }
    }, {
        id: "iview",
        matches: "iview.abc.net.au",
        excludeSelectors: [".jwplayer"],
        "mutationExcludeSelectors.add": [".jwplayer *"],
        "subtitleRule.add": {
            type: "webvtt",
            subtitleUrlRegExp: "/cc/.*\\.(vtt|webvtt)$",
            loadingContainerSelector: ".jwplayer",
            quickButtonRule: {
                appendSelector: ".jw-reset.jw-button-container",
                insertBeforeSelector: ".jw-settings-submenu-button",
                injectCSS: ".imt-quick-subtitle-pop-content {z-index: 999999;}"
            }
        }
    }, {
        id: "nmaart",
        matches: "www.nma.art",
        excludeSelectors: [".video-container"],
        "mutationExcludeSelectors.add": [".video-container *"],
        "subtitleRule.add": {
            type: "webvtt",
            subtitleUrlRegExp: "/texttrack/.*\\.(vtt|webvtt)",
            loadingContainerSelector: ".video-container",
            quickButtonRule: {
                appendSelector: ".vjs-control-bar",
                insertBeforeSelector: ".vjs-playback-rate"
            }
        }
    }, {
        id: "apple",
        matches: "developer.apple.com",
        excludeSelectors: [".developer-video-player"],
        "mutationExcludeSelectors.add": [".developer-video-player *"],
        "subtitleRule.add": {
            type: "webvtt",
            subtitleUrlRegExp: "\\.(vtt|webvtt)"
        }
    }, {
        id: "khanacademy",
        matches: ["www.khanacademy.org"],
        "subtitleRule.add": {
            type: "khanacademy",
            subtitleUrlRegExp: "GetSubtitles",
            hookType: "fetch"
        },
        "stayOriginalSelectors.add": [".mathjax-wrapper"]
    }, {
        id: "nebula",
        matches: ["nebula.tv"],
        "excludeSelectors.add": ["[data-subtitles-container='true']"],
        "mutationExcludeSelectors.add": ["[data-subtitles-container='true'] *"],
        "subtitleRule.add": {
            type: "webvtt",
            subtitleUrlRegExp: "\\.vtt$",
            loadingContainerSelector: ".video-poster",
            quickButtonRule: {
                appendSelector: ".icon-spacing.css-4yh7a0",
                insertBeforeSelector: "#subtitles-toggle-button",
                ccEnableSelector: "#subtitles-toggle-button"
            }
        }
    }, {
        id: "frontendmasters",
        matches: ["frontendmasters.com"],
        "excludeSelectors.add": [".vjs-text-track-display"],
        "mutationExcludeSelectors.add": [".vjs-text-track-display *"],
        "subtitleRule.add": {
            type: "webvtt",
            subtitleUrlRegExp: ".vtt$",
            loadingContainerSelector: ".vjs-text-track-display",
            injectedCss: ["#immersive-translate-quick-button-container {order: 2} .imt-quick-subtitle-pop-content {z-index: 2147483647}"],
            quickButtonRule: {
                appendSelector: ".vjs-control-bar"
            },
            videoSelector: ".PromoPlayer video",
            attachRule: {
                appendSelector: ".video-js",
                injectedGlobalCSS: ".vjs-text-track-display {display: none;}"
            }
        }
    }, {
        id: "udacity",
        matches: ["*.udacity.com"],
        "excludeSelectors.add": [".vjs-text-track-display"],
        "mutationExcludeSelectors.add": [".vjs-text-track-display *"],
        "subtitleRule.add": {
            type: "webvtt",
            subtitleUrlRegExp: ".vtt$",
            loadingContainerSelector: ".vjs-text-track-display"
        }
    }, {
        id: "skillshare",
        matches: ["www.skillshare.com"],
        "excludeSelectors.add": [".vjs-text-track-display"],
        "mutationExcludeSelectors.add": [".vjs-text-track-display *"],
        "subtitleRule.add": {
            type: "webvtt",
            subtitleUrlRegExp: "\\.vtt\\?",
            loadingContainerSelector: ".vjs-text-track-display",
            injectedCss: ["#immersive-translate-quick-button-container {order: 13}"],
            quickButtonRule: {
                appendSelector: ".vjs-control-bar",
                insertBeforeSelector: ".vjs-volume-panel",
                injectCSS: " .label { display: none; } .imt-quick-subtitle-pop-content {transform: translateX(43%); right: 0; z-index: 2147483647 } "
            }
        }
    }, {
        id: "domestika",
        matches: ["www.domestika.org"],
        "excludeSelectors.add": [".vjs-text-track-display"],
        "mutationExcludeSelectors.add": [".vjs-text-track-display *"],
        "subtitleRule.add": {
            type: "webvtt",
            subtitleUrlRegExp: ".*subtitles.*\\.vtt",
            quickButtonRule: {
                appendSelector: ".controlBar-wrapper .right-wrapper",
                insertBeforeSelector: ".vjs-volume-panel"
            }
        }
    }, {
        id: "hbomax",
        matches: ["play.max.com", "play.hbomax.com"],
        "excludeSelectors.add": ["[data-testid='playerContainer']", "[data-testid='CueBoxContainer']"],
        "mutationExcludeSelectors.add": ["[data-testid='playerContainer'] *", "[data-testid='CueBoxContainer'] *"],
        "subtitleRule.add": {
            type: "webvtt",
            subtitleUrlRegExp: "\\.vtt$",
            loadingContainerSelector: "[data-testid='playerContainer']"
        }
    }, {
        id: "mindvalley",
        matches: ["home.mindvalley.com"],
        "excludeSelectors.add": [".vjs-text-track-display"],
        "mutationExcludeSelectors.add": [".vjs-text-track-display *"],
        "subtitleRule.add": {
            type: "webvtt",
            subtitleUrlRegExp: "\\.webvtt$",
            loadingContainerSelector: ".vjs-text-track-display",
            injectedCss: ["#immersive-translate-quick-button-container {order: 6}"],
            quickButtonRule: {
                appendSelector: '[data-testid="video-section"]  .vjs-control-bar',
                insertBeforeSelector: '[data-testid="video-section"] .vjs-volume-panel',
                injectCSS: ".imt-quick-subtitle-pop-content {z-index: 999999;}"
            }
        }
    }, {
        id: "masterclass",
        matches: ["www.masterclass.com", "learn.microsoft.com"],
        "excludeSelectors.add": [".vjs-text-track-display"],
        "mutationExcludeSelectors.add": [".vjs-text-track-display *"],
        "subtitleRule.add": {
            type: "webvtt",
            subtitleUrlRegExp: "\\.vtt",
            loadingContainerSelector: ".vjs-text-track-display",
            quickButtonRule: {
                appendSelector: ".vjs-control-bar",
                insertBeforeSelector: ".vjs-playback-rate"
            }
        }
    }, {
        id: "viu",
        matches: ["www.viu.com"],
        "excludeSelectors.add": [".bmpui-ui-viu-subtitle-overlay"],
        "mutationExcludeSelectors.add": [".bmpui-ui-viu-subtitle-overlay *"],
        "subtitleRule.add": {
            type: "webvtt",
            hookType: "xhr",
            subtitleUrlRegExp: "https?://[^/]+\\.cloudfront\\.net/[^/]+/[^/]+$",
            loadingContainerSelector: ".bmpui-container-wrapper",
            loadingStyle: "bottom: 20%;",
            injectedCss: [".bmpui-controls-hidden #immersive-translate-quick-button-container {display: none;}"],
            quickButtonRule: {
                appendSelector: ".bmpui-ui-container.bmpui-ui-viu-subtitle > .bmpui-container-wrapper",
                injectCSS: ".imt-quick-subtitle-button {margin-bottom: 8px}"
            }
        }
    }, {
        id: "linkin",
        matches: "*.linkedin.com",
        "excludeSelectors.add": [".vjs-text-track-display"],
        "mutationExcludeSelectors.add": [".vjs-text-track-display *"],
        "subtitleRule.add": {
            type: "webvtt",
            subtitleUrlRegExp: ".*ambry/\\?x-li-ambry-ep=.*",
            hookType: "xhr",
            loadingContainerSelector: ".video-player-container",
            quickButtonRule: {
                appendSelector: ".vjs-control-bar",
                insertBeforeSelector: ".vjs-captions-toggle"
            }
        }
    }, {
        id: "kanopy",
        matches: "*.kanopy.com",
        "excludeSelectors.add": [".vjs-text-track-display"],
        "mutationExcludeSelectors.add": [".vjs-text-track-display *"],
        "subtitleRule.add": {
            type: "webvtt",
            subtitleUrlRegExp: ".*captioncache/webvtt.*",
            hookType: "xhr",
            loadingContainerSelector: ".video-player-container",
            injectedCss: ["#immersive-translate-quick-button-container{height: 40px;display: flex;align-items: center;align-self: flex-end;}"],
            quickButtonRule: {
                appendSelector: ".vjs-control-bar",
                insertBeforeSelector: ".vjs-caption-control"
            }
        }
    }, {
        id: "iflix",
        matches: ["www.iflix.com", "wetv.vip"],
        "excludeSelectors.add": [".text-track"],
        "mutationExcludeSelectors.add": [".player-wrapper *"],
        "subtitleRule.add": {
            type: "webvtt",
            subtitleUrlRegExp: "\\.vtt",
            hookType: "xhr",
            loadingContainerSelector: "#player-wrapper",
            loadingStyle: "bottom: 18%;",
            quickButtonRule: {
                appendSelector: '[data-role="wetv-ctrlbar-right"]',
                insertBeforeSelector: '[data-role="wetv-player-definition"]'
            }
        }
    }, {
        id: "imdb",
        matches: "www.imdb.com",
        "excludeSelectors.add": [".jw-text-track-container"],
        "mutationExcludeSelectors.add": [".jw-text-track-container *"],
        "subtitleRule.add": {
            type: "webvtt",
            subtitleUrlRegExp: "\\.srt$",
            loadingContainerSelector: "#imdbnext-vp-jw-single",
            quickButtonRule: {
                appendSelector: ".jw-reset.jw-button-container",
                insertBeforeSelector: '[button="ttt-button"]'
            }
        }
    }, {
        id: "itv",
        matches: ["www.itv.com"],
        "subtitleRule.add": {
            type: "text_track",
            videoPlayerSelector: ".genie-video",
            loadingContainerSelector: ".genie-container",
            loadingStyle: "bottom: unset; top: 5%;",
            quickButtonRule: {
                appendSelector: ".control-bar_right-child-container",
                insertBeforeSelector: ".controls-toggle_button--fullscreen"
            }
        }
    }, {
        id: "egghead",
        matches: ["egghead.io"],
        "subtitleRule.add": {
            type: "text_track",
            videoPlayerSelector: ".cueplayer-react-video",
            loadingContainerSelector: ".cueplayer-react-video-holder",
            loadingStyle: "bottom: unset; top: 5%;",
            quickButtonRule: {
                appendSelector: ".cueplayer-react-control-bar-right-part",
                insertBeforeSelector: ".cueplayer-react-closed-caption"
            }
        }
    }, {
        id: "coursera",
        matches: ["www.coursera.org"],
        "subtitleRule.add": {
            type: "text_track",
            videoPlayerSelector: ".vjs-tech",
            loadingContainerSelector: ".rc-VideoControlsContainer",
            loadingStyle: "bottom: unset; top: 5%;",
            quickButtonRule: {
                appendSelector: '[role="presentation"] > .rc-ControlBar > .icon-container'
            }
        }
    }, {
        id: "ocrtraining",
        matches: ["ocrtraining.cit.nih.gov", "videocast.nih.gov"],
        "excludeSelectors.add": ["#videocastPlayer"],
        "mutationExcludeSelectors.add": ["#videocastPlayer *"],
        "subtitleRule.add": {
            type: "webvtt",
            subtitleUrlRegExp: "\\.srt$",
            loadingContainerSelector: "#videocastPlayer"
        }
    }, {
        id: "espn",
        matches: ["*.espn.com"],
        mainFrameMinTextCount: 0,
        "excludeSelectors.add": ["#fittPageContainer"],
        "mutationExcludeSelectors.add": ["#fittPageContainer *"],
        "subtitleRule.add": {
            type: "webvtt",
            subtitleUrlRegExp: "\\.vtt$",
            injectedCss: ["#immersive-translate-quick-button-container{margin-top:16px;}", ".vjs-text-track-display > div >div {font:unset!important;}"],
            quickButtonRule: {
                appendSelector: ".vjs-control-bar",
                insertBeforeSelector: ".vjs-captions-button"
            }
        }
    }, {
        id: "fmoviesz",
        matches: ["fmoviesz.to", "vidplay.online", "c8365730d4.nl"],
        "excludeSelectors.add": ["#player"],
        "mutationExcludeSelectors.add": ["#player *"],
        "subtitleRule.add": {
            type: "multi_attach_vtt",
            subtitleUrlRegExp: "subtitle/.*\\.vtt$",
            quickButtonRule: {
                appendSelector: ".jw-button-container",
                insertBeforeSelector: ".jw-icon-cc"
            },
            activeLangSelector: "#jw-player-settings-submenu-captions .jw-settings-submenu-items .jw-settings-item-active",
            videoSelector: "video",
            attachRule: {
                appendSelector: "#player",
                injectedGlobalCSS: [".jw-text-track-container {display: none;}", "@media (min-width: 576px) { video::cue {opacity: 0} }"]
            }
        }
    }, {
        id: "aniwatch",
        matches: ["megacloud.tv", "aniwatch.to"],
        "excludeSelectors.add": [".jw-wrapper"],
        "mutationExcludeSelectors.add": [".jw-wrapper *"],
        "subtitleRule.add": {
            type: "multi_attach_vtt",
            subtitleUrlRegExp: "^(?!.*sprite\\.vtt$).*\\.vtt$",
            quickButtonRule: {
                appendSelector: ".jw-button-container",
                insertBeforeSelector: ".jw-icon-cc"
            },
            activeLangSelector: "#jw-player-settings-submenu-captions .jw-settings-submenu-items .jw-settings-item-active",
            videoSelector: "video",
            attachRule: {
                appendSelector: ".jw-wrapper",
                injectedGlobalCSS: [".jw-text-track-container {display: none;}", "@media (min-width: 576px) { video::cue {opacity: 0} }"]
            }
        }
    }, {
        id: "rottentomatoes",
        matches: ["*.rottentomatoes.com"],
        "excludeSelectors.add": [".jw-wrapper"],
        "mutationExcludeSelectors.add": [".jw-wrapper *"],
        "subtitleRule.add": {
            type: "webvtt",
            subtitleUrlRegExp: "\\.vtt$",
            quickButtonRule: {
                appendSelector: ".jw-button-container",
                insertBeforeSelector: ".jw-icon-cc"
            }
        }
    }, {
        id: "dailymotion",
        matches: ["*.dailymotion.com"],
        "excludeSelectors.add": [".player"],
        "mutationExcludeSelectors.add": [".player *"],
        mainFrameMinTextCount: 0,
        "subtitleRule.add": {
            type: "subsrt",
            subsrtFormat: "srt",
            loadingContainerSelector: ".player",
            subtitleUrlRegExp: "/video/.*\\.srt",
            quickButtonRule: {
                appendSelector: ".controls_bottom_right",
                insertBeforeSelector: ".subtitles_toggle_button"
            }
        }
    }, {
        id: "movie-web",
        matches: ["movie-web.app/media*"],
        "excludeSelectors.add": ["#root"],
        "mutationExcludeSelectors.add": ["#root *"],
        "subtitleRule.add": {
            type: "subsrt",
            hookType: "fetch",
            subsrtFormat: "vtt",
            loadingContainerSelector: ".relative.h-screen.overflow-hidden",
            subtitleUrlRegExp: ".*\\.vtt",
            quickButtonRule: {
                appendSelector: ".hidden.justify-between .flex.items-center.space-x-3"
            }
        }
    }, {
        id: "deeplearning",
        matches: ["learn.deeplearning.ai"],
        "excludeSelectors.add": ['[data-layout="video"]'],
        "mutationExcludeSelectors.add": ['[data-layout="video"] *'],
        "subtitleRule.add": {
            type: "subsrt",
            subsrtFormat: "vtt",
            loadingContainerSelector: '[data-layout="video"]',
            subtitleUrlRegExp: ".*\\.vtt",
            quickButtonRule: {
                appendSelector: ".vds-controls-group:last-child",
                insertBeforeSelector: ".vds-caption-button"
            }
        }
    }, {
        id: "paramountplus",
        matches: ["*.paramountplus.com"],
        "excludeSelectors.add": [".aa-player-skin"],
        "mutationExcludeSelectors.add": [".aa-player-skin *"],
        "subtitleRule.add": {
            type: "text_track_dynamic",
            injectedCss: [".tt-container {white-space: pre-line;}", ".timed-text-css-box-inner {display: none!important;}", ".timed-text-css-box-inner:last-child {display: block!important;}"],
            videoPlayerSelector: "video",
            quickButtonRule: {
                appendSelector: ".top-menu-container"
            }
        }
    }, {
        id: "pluto",
        matches: ["pluto.tv"],
        "excludeSelectors.add": [".video-player-layout"],
        "mutationExcludeSelectors.add": [".video-player-layout *"],
        "subtitleRule.add": {
            type: "text_track_dynamic",
            videoPlayerSelector: "video",
            quickButtonRule: {
                appendSelector: ".endControls-0-2-85"
            }
        }
    }, {
        id: "vimeo",
        matches: ["vimeo.com"],
        "excludeSelectors.add": [".vp-captions"],
        "mutationExcludeSelectors.add": [".vp-captions *"],
        "subtitleRule.add": {
            type: "text_track",
            videoPlayerSelector: "video",
            loadingContainerSelector: ".player_container",
            loadingStyle: "bottom: unset; top: 5%;",
            injectedCss: ["#immersive-translateQuickButton {visibility: inherit!important;}"],
            quickButtonRule: {
                appendSelector: '[data-control-bar="true"] > div',
                insertBeforeSelector: '[data-volume-control-container="true"]',
                ccEnableSelector: '[data-cc-button="true"]',
                injectCSS: ".imt-quick-subtitle-button {margin-right: 0px; font-size: 12px;} .logo,.logo svg { height: 18px !important; width: 18px !important;} .imt-quick-subtitle-pop-content {bottom: 28px !important;}"
            }
        }
    }, {
        id: "ted",
        matches: ["www.ted.com"],
        "excludeSelectors.add": ["#video"],
        "mutationExcludeSelectors.add": ["#video *"],
        "subtitleRule.add": {
            type: "webvtt",
            hookType: "fetch",
            subtitleUrlRegExp: "\\.vtt",
            videoPlayerSelector: "video",
            loadingContainerSelector: "media-controller",
            quickButtonRule: {
                appendSelector: ".pointer-events-none #media-control-bar",
                insertBeforeSelector: ".pointer-events-none .media-volume-wrapper"
            }
        }
    }, {
        id: "player.vimeo",
        matches: ["https://player.vimeo.com/video/*", "laracasts.com"],
        selectorMatches: ["iframe[src*='player.vimeo.com']"],
        extraBlockSelectors: ["span.vp-captions-line", "span[class^=CaptionsRenderer_]"],
        "excludeSelectors.add": [".vp-captions-line"],
        "mutationExcludeSelectors.add": [".vp-captions *", ".vp-captions-line *"],
        "subtitleRule.add": {
            type: "text_track",
            videoPlayerSelector: "video",
            loadingContainerSelector: ".vp-telecine",
            loadingStyle: "bottom: unset; top: 5%; font-size: 12px;",
            injectedCss: ["#immersive-translateQuickButton {visibility: inherit!important;}"],
            quickButtonRule: {
                appendSelector: '[data-control-bar="true"] > div',
                insertBeforeSelector: '[data-volume-control-container="true"]',
                ccEnableSelector: '[data-cc-button="true"]',
                injectCSS: ".imt-quick-subtitle-button {margin-right: 0px; font-size: 12px;} .logo,.logo svg { height: 18px !important; width: 18px !important;} .imt-quick-subtitle-pop-content {bottom: 28px !important;}"
            }
        }
    }, {
        id: "tv.adobe",
        matches: "https://*.tv.adobe.com",
        "excludeSelectors.add": [".mpc-player"],
        "mutationExcludeSelectors.add": [".mpc-player *"],
        "subtitleRule.add": {
            type: "text_track",
            videoPlayerSelector: "video",
            loadingContainerSelector: ".mpc-player",
            quickButtonRule: {
                appendSelector: ".mpc-controls__container"
            }
        }
    }, {
        id: "threejs-journey",
        matches: "threejs-journey.com",
        "excludeSelectors.add": [".video-area"],
        "mutationExcludeSelectors.add": [".video-area *"],
        "subtitleRule.add": {
            type: "text_track",
            videoPlayerSelector: "video",
            loadingContainerSelector: ".video-area",
            injectedCss: [".js-tracks-text.tracks-text {white-space: pre;}"],
            quickButtonRule: {
                appendSelector: ".js-controls .right",
                insertBeforeSelector: ".js-subtitles",
                injectCSS: ".imt-quick-subtitle-button { font-size: 12px;} .logo,.logo svg { height: 18px !important; width: 18px !important;} .imt-quick-subtitle-pop-content {bottom: 38px !important;}"
            }
        }
    }, {
        id: "codewithchris",
        matches: ["learn.codewithchris.com", "*.rachelsenglishacademy.com", "www.unrealsenseiacademy.com"],
        "excludeSelectors.add": [".w-captions", ".w-captions-line > div > span"],
        "mutationExcludeSelectors.add": [".w-captions *"],
        "subtitleRule.add": {
            type: "general",
            subtitleUrlRegExp: "/embed/captions/",
            loadingContainerSelector: ".w-ui-container",
            hookType: "fetch",
            generalSetting: {
                captionsPath: "captions",
                itemsPath: "hash.lines",
                textKey: "text"
            }
        }
    }, {
        id: "panopto",
        matches: ["southampton.cloud.panopto.eu"],
        "excludeSelectors.add": [".primaryPlayer"],
        "mutationExcludeSelectors.add": [".primaryPlayer *"],
        "subtitleRule.add": {
            type: "general",
            subtitleUrlRegExp: "DeliveryInfo.aspx",
            disableSubsCache: !0,
            loadingContainerSelector: "#primaryPlayer",
            hookType: "fetch",
            generalSetting: {
                textKey: "Caption"
            },
            quickButtonRule: {
                appendSelector: "#transportControls",
                insertBeforeSelector: "#captionsButton"
            }
        }
    }, {
        id: "edx",
        matches: ["*.edx.org"],
        "excludeSelectors.add": [".closed-captions", ".subtitles-menu"],
        mainFrameMinTextCount: 0,
        "subtitleRule.add": {
            type: "general",
            subtitleUrlRegExp: "/transcript/translation/",
            loadingContainerSelector: ".tc-wrapper",
            generalSetting: {
                itemsPath: "text"
            },
            injectedCss: [".subtitles-menu span,.closed-captions {white-space: pre-line;}", "#immersive-translate-quick-button-container {display: inline-block; vertical-align: middle;}"],
            quickButtonRule: {
                appendSelector: ".secondary-controls",
                insertBeforeSelector: ".speeds.menu-container"
            }
        }
    }, {
        id: "ardmediathek",
        matches: ["www.ardmediathek.*"],
        "excludeSelectors.add": [".ardplayer-viewport-addon-overlays"],
        "mutationExcludeSelectors.add": [".ardplayer-viewport-addon-overlays *"],
        "subtitleRule.add": {
            type: "ebutt",
            hookType: "fetch",
            subtitleUrlRegExp: "subtitle/ebutt",
            loadingContainerSelector: ".ardplayer-viewport-addon-overlays",
            quickButtonRule: {
                appendSelector: ".ardplayer-footer .ardplayer-addons-container",
                insertBeforeSelector: ".ardplayer-footer .ardplayer-button-sharing",
                injectCSS: ".imt-quick-subtitle-button {font-size: 20px; } .logo,.logo svg { height: 36px !important; width: 36px !important;} .imt-quick-subtitle-pop-content {z-index: 2147483647;} "
            }
        }
    }, {
        id: "bbc-iplayer",
        matches: ["https://www.bbc.*/iplayer*"],
        "excludeSelectors.add": [".player"],
        "mutationExcludeSelectors.add": [".player *"],
        "subtitleRule.add": {
            type: "ebutt",
            hookType: "fetch",
            subtitleUrlRegExp: "iplayer/subtitles/.*.xml",
            loadingContainerSelector: ".player__container"
        }
    }, {
        id: "bbc",
        matches: ["*.bbc.*"],
        "excludeSelectors.add": ["section.module--languages", ".drop-capped", ".smp-toucan-player", "smp-subtitles", "#subtitle_subtitle2"],
        "mutationExcludeSelectors.add": ["[data-testid='media-player-container-landscape'] *"],
        "subtitleRule.add": {
            type: "ebutt",
            hookType: "fetch",
            subtitleUrlRegExp: "iplayer/subtitles/.*.xml",
            loadingContainerSelector: ".smp-toucan-player"
        }
    }, {
        id: "zdf.de",
        matches: ["www.zdf.de"],
        "excludeSelectors.add": [".zdfplayer-cue-region"],
        "subtitleRule.add": {
            type: "ebutt",
            subtitleUrlRegExp: "mtt/.*.xml",
            loadingContainerSelector: ".zdfplayer-video-container",
            responseType: "document",
            injectedCss: ["#immersive-translate-quick-button-container {display:inline-block;vertical-align:middle;margin-right:-16px;}"],
            quickButtonRule: {
                appendSelector: ".right-controls-1FfJUp.svelte-inzdbf",
                insertBeforeSelector: ".right-controls-1FfJUp.svelte-inzdbf button"
            }
        }
    }, {
        id: "piped.video",
        matches: "piped.video",
        "subtitleRule.add": {
            type: "ebutt",
            hookType: "fetch",
            subtitleUrlRegExp: "api/timedtext",
            loadingContainerSelector: ".shaka-video-container",
            responseType: "document",
            quickButtonRule: {
                appendSelector: ".shaka-controls-button-panel",
                insertBeforeSelector: ".shaka-mute-button"
            }
        }
    }, {
        id: "disneyplus",
        matches: ["www.disneyplus.com"],
        "excludeSelectors.add": [".dss-hls-subtitle-overlay"],
        "mutationExcludeSelectors.add": [".dss-hls-subtitle-overlay *"],
        "subtitleRule.add": {
            type: "disneyplus",
            subtitleUrlRegExp: "\\.vtt$"
        }
    }, {
        id: "mubi",
        matches: ["https://mubi.com", "https://mubi.de"],
        "subtitleRule.add": {
            type: "fmp4.xml",
            subtitleUrlRegExp: "textstream",
            hookType: "fetch",
            quickButtonRule: {
                appendSelector: ".css-1k6yql2.e1b63bld4",
                insertBeforeSelector: ".css-1ce7rqp.e7f2hfl0"
            }
        }
    }, {
        id: "hulu",
        matches: "https://*.hulu.com",
        "subtitleRule.add": {
            type: "hulu",
            hookType: "fetch",
            injectedCss: [".ClosedCaption {display:none!important;}"],
            videoSelector: "#content-video-player",
            subtitleUrlRegExp: "play.hulu.com/.*/playlist",
            loadingContainerSelector: "#web-player-app",
            quickButtonRule: {
                appendSelector: ".PlayerSettingsGroup",
                insertBeforeSelector: ".PlayerSettingsGroup .PlayerControlsButton"
            }
        }
    }, {
        id: "youku.tv",
        matches: "www.youku.tv",
        "excludeSelectors.add": ["#subtitle"],
        "mutationExcludeSelectors.add": ["#subtitle *"],
        "subtitleRule.add": {
            type: "subsrt",
            hookType: "fetch",
            injectedCss: ["#immersive-translate-quick-button-container {display: inline-block; vertical-align: middle;}"],
            subtitleUrlRegExp: "\\.ass$",
            subsrtFormat: "ass",
            loadingContainerSelector: "#youku-dashboard",
            loadingStyle: "bottom: 10%;",
            quickButtonRule: {
                appendSelector: ".kui-dashboard-dashboard-panel .kui-dashboard-rear-ctn",
                insertBeforeSelector: ".kui-rate-control-0"
            }
        }
    }, {
        id: "starz",
        matches: "www.starz.com",
        "excludeSelectors.add": ["starz-player"],
        "mutationExcludeSelectors.add": ["starz-player *"],
        "subtitleRule.add": {
            type: "subsrt",
            subsrtFormat: "vtt",
            subtitleUrlRegExp: "\\.vtt$",
            loadingContainerSelector: "starz-player",
            loadingStyle: "bottom: 10%;",
            injectedCss: ["#immersive-translate-quick-button-container {display: inline-block;}"],
            quickButtonRule: {
                appendSelector: "starz-player .button-group",
                insertBeforeSelector: "starz-player .button-group .video-player-icon-md"
            }
        }
    }, {
        id: "www.iq.com",
        matches: "www.iq.com",
        "excludeSelectors.add": [".iqp-subtitle"],
        "mutationExcludeSelectors.add": [".iqp-subtitle *"],
        "subtitleRule.add": {
            type: "xml",
            subtitleUrlRegExp: "\\.xml\\?",
            loadingContainerSelector: ".intl-video-area",
            xmlTextSelector: "sub",
            loadingStyle: "bottom: 10%;",
            injectedCss: ["#immersive-translate-quick-button-container {float: right; height: 100%;}"],
            quickButtonRule: {
                appendSelector: ".iqp-contrls-right"
            }
        }
    }, {
        id: "archiveToday",
        matches: ["archive.today", "archive.ph", "archive.is", "archive.md"],
        "excludeSelectors.add": ["#HEADER"]
    }, {
        id: "arxiv-vanity.com",
        matches: ["www.arxiv-vanity.com"],
        "excludeSelectors.add": [".arxiv-vanity-wrapper"]
    }, {
        id: "fibery",
        matches: ["the.fibery.io"],
        "additionalExcludeSelectors.remove": ["[translate=no]"],
        "additionalStayOriginalSelectors.add": [".entity-node-view-container"]
    }, {
        id: "makersuite.google",
        matches: "makersuite.google.com",
        "excludeSelectors.add": [".material-symbols-outlined"]
    }, {
        id: "etymonline",
        matches: "www.etymonline.com",
        globalAttributes: {
            ".crossreference.notranslate": {
                class: "crossreference"
            },
            ".foreign.notranslate": {
                class: "foreign"
            }
        }
    }, {
        id: "https://browse.arxiv.org/",
        matches: ["https://browse.arxiv.org", "https://arxiv.org/html/*"],
        "excludeSelectors.add": [".desktop_header", "[class*='ltx_lst_language_']", "div.package-alerts"]
    }, {
        id: "jstor",
        matches: "www.jstor.org",
        "excludeSelectors.add": [".audio-duration", "[data-qa='card-item-count']"],
        globalStyles: {
            ".card__heading": "-webkit-line-clamp:unset;",
            "search-results-vue-pharos-image-card,search-ui-pharos-image-card": "display:flex;",
            "search-results-vue-pharos-link": "display:inline;"
        }
    }, {
        id: "tandfonline",
        matches: "*.tandfonline.com",
        "extraInlineSelectors.add": ["span.off-screen"]
    }, {
        id: "boringreport",
        matches: ["www.boringreport.org"],
        "excludeTags.remove": ["BUTTON"]
    }, {
        id: "bsky.app",
        matches: "https://bsky.app",
        selectors: ["[data-testid=postText]"],
        isTranslateTitle: !1
    }, {
        id: "peacocktv",
        matches: ["*.peacocktv.com"],
        injectedCss: [".video-player__subtitles__line > font,.video-player__subtitles__line:only-child{display:block;}"]
    }, {
        id: "noTranslate",
        matches: ["*.tiktok.com", "altis.world", "*.newthingsunderthesun.com", "*.gumroad.com", "edstem.org", "actions.tldrnewsletter.com", "community.linkingyourthinking.com", "doc.qt.io", "winaero.com"],
        "additionalExcludeSelectors.remove": [".notranslate", "[translate=no]"]
    }, {
        id: "jmir",
        matches: ["*.jmir.org"],
        "additionalInlineSelectors.add": [".tooltiptext"]
    }, {
        id: "smzdm",
        matches: ["www.smzdm.com"],
        "excludeSelectors.add": [".z-highlight", ".feed-block-info", ".z-feed-foot", ".feed-block-descripe", "#J_column_tab_box", ".crumbs"],
        globalStyles: {
            ".feed-block-title": "height:unset"
        }
    }, {
        id: "xiaohongshu.com",
        matches: ["www.xiaohongshu.com"],
        "excludeSelectors.add": [".author-wrapper", ".info", ".side-bar"],
        globalStyles: {
            "a.title": "-webkit-line-clamp:3"
        }
    }, {
        id: "learnopengl",
        matches: ["learnopengl.com"],
        globalStyles: {
            function: "position:relative;z-index:1000;"
        }
    }, {
        id: "notateslaapp",
        matches: ["www.notateslaapp.com"],
        "extraBlockSelectors.add": [".nav > *"]
    }, {
        id: "eightfold",
        matches: ["*.eightfold.ai"],
        injectedCss: [".flexbox{width:100%}"]
    }, {
        id: "deno",
        matches: ["deno.com"],
        injectedCss: [":root {font-feature-settings:unset}"]
    }, {
        id: "soundcloud",
        matches: "soundcloud.com",
        injectedCss: [".compactTrackListItem {height: unset !important;}"],
        "excludeSelectors.add": [".searchTitle__textContent", ".searchOptions__container", ".compactTrackListItem__additional", ".soundTitle__tagContainer", ".searchResultGroupHeading", ".sc-ministats-group", ".compactTrackList__moreLink", ".sound__soundActions"]
    }, {
        id: "section.blog.naver.com",
        matches: "section.blog.naver.com",
        globalStyles: {
            ".text,.title_post,.text_post,p,strong,div": "-webkit-line-clamp:unset;max-height:unset;height:unset;"
        },
        "extraBlockSelectors.add": [".item", ".heading a", ".info_find a"],
        "excludeSelectors.add": [".comments", ".time"]
    }, {
        id: "gradio-app",
        selectorMatches: "gradio-app",
        "excludeTags.remove": ["BUTTON"],
        "excludeSelectors.add": ['[data-testid="block-label"]'],
        "mutationConfig.add": {
            buildTimeout: 1e3,
            consumeTimeout: 1e3
        }
    }]
};
