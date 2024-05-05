var www = {
    "immediateTranslationTextCount": 4999,
    "translationStartMode": "dynamic",
    "domReadyDetectTimeout": 3000,
    "translationService": "bing",
    "mouseModifierKeyPressTimeout": 400,
    "immediateTranslationPattern": {
        "excludeMatches": [],
        "matches": [
            "www.tumblr.com",
            "twitter.com",
            "*.twitter.com",
            "medium.com",
            "*.medium.com",
            "www.facebook.com",
            "www.youtube.com",
            "m.youtube.com",
            "mail.google.com",
            "discord.com",
            "google.com",
            "facebook.com",
            "*.facebook.com",
            "web.telegram.org",
            "*.instagram.com",
            "instagram.com",
            "*.slack.com",
            "https://old.reddit.com/",
            "https://www.reddit.com/r/popular/",
            "https://www.reddit.com/",
            "https://www.reddit.com/hot/",
            "https://www.reddit.com/new/",
            "https://www.reddit.com/top/",
            "https://www.reddit.com/.compact",
            "https://app.immersivetranslate.com/pdf*",
            "https://bsky.app"
        ],
        "selectorExcludeMatches": [],
        "selectorMatches": [
            "meta[property='al:ios:url'][content^='medium://']"
        ]
    },
    "interval": 3600000,
    "beta": false,
    "cache": true,
    "proOpenaiModels": [
        "gpt-3.5-turbo",
        "gpt-3.5-turbo-0125",
        "gpt-3.5-turbo-1106",
        "gpt-3.5-turbo-0613"
    ],
    "rtlLanguages": [
        "ar",
        "arc",
        "az",
        "dv",
        "he",
        "ckb",
        "fa",
        "ur"
    ],
    "translationMode": "dual",
    "translationModeUrlPattern": {
        "dualMatches": [],
        "translationMatches": []
    },
    "translationModeLanguagePattern": {
        "dualMatches": [],
        "translationMatches": []
    },
    "enabled": true,
    "minVersion": "0.6.2",
    "showOpenaiOnSafari": true,
    "showUnconfiguredTranslationServiceInPopup": true,
    "donateUrl": "https://immersivetranslate.com/pricing",
    "uninstallUrl": "https://onboarding.immersivetranslate.com/uninstall",
    "feedbackUrl": "https://github.com/immersive-translate/immersive-translate/issues",
    "arxivRule": {
        "injectContainerSelector": ".extra-services .full-text ul",
        "matches": [
            "https://arxiv.org/abs/*"
        ],
        "officialHtmlSelector": "#latexml-download-link",
        "validBefore": "2023-10-31",
        "validOnlySelector": ".download-format"
    },
    "translationGeneralConfig": {
        "_systemExcludeWordRegex": "\\b({word})\\b",
        "engine": "bing"
    },
    "supportedVideoSubtitleSites": [
        "https://www.youtube.com[Youtube]",
        "https://tv.youtube.com[TV Youtube]",
        "https://www.netflix.com[NetFlix]",
        "https://www.primevideo.com[PrimeVideo]",
        "https://twitter.com[Twitter Spaces]",
        "https://play.max.com[HBO Max]",
        "https://vimeo.com/watch[Vimeo]",
        "https://www.khanacademy.org/[Khan Academy]",
        "https://www.coursera.org/[Coursera]",
        "https://www.udemy.com/[Udemy]",
        "https://www.bloomberg.com[Bloomberg]",
        "https://nebula.tv/videos[Nebula]",
        "https://www.bilibili.com[Bilibili]",
        "https://www.ted.com/[TED]",
        "https://frontendmasters.com[FrontendMasters]",
        "https://learn.codewithchris.com[CodeWithChris]",
        "https://www.edx.org[edX]",
        "https://www.skillshare.com/[Skillshare]",
        "https://www.bbc.com/[BBC]",
        "https://www.disneyplus.com/[Disney+]",
        "https://www.ardmediathek.de/[ARD Mediathek]",
        "https://www.itv.com/[ITV]",
        "https://www.domestika.org/[Domestika]",
        "https://www.artstation.com/learning[ArtStation]",
        "https://www.zdf.de[ZDF]",
        "https://www.masterclass.com[MasterClass]",
        "https://learn.microsoft.com[Learn Microsoft]",
        "https://home.mindvalley.com[Mindvalley]",
        "https://iview.abc.net.au/[iview]",
        "https://www.nma.art/[nmaArt]",
        "https://developer.apple.com[Developer Apple]",
        "https://egghead.io/[egghead.io]",
        "https://mubi.com/[Mubi]",
        "https://www.viu.com/[Viu]",
        "https://cn.linkedin.com/[LinkedIn]",
        "https://www.kanopy.com/[Kanopy]",
        "https://www.rachelsenglishacademy.com/[RachelsEnglishAcademy]",
        "https://threejs-journey.com/[three.js journey]",
        "https://www.iflix.com/[WeTV iflix]",
        "https://www.hulu.com/[Hulu]",
        "https://www.espn.com/[ESPN]",
        "https://www.imdb.com/[IMDb]",
        "https://www.rottentomatoes.com/[Rotten Tomatoes]",
        "https://fmoviesz.to/[FMovies]",
        "https://aniwatch.to/[AniWatch]",
        "https://www.iq.com/[iQIYI]",
        "https://www.youku.tv/[Youku]",
        "https://www.dailymotion.com/[Dailymotion]",
        "https://www.paramountplus.com/[Paramount Plus]",
        "https://www.starz.com/[starz]",
        "https://pluto.tv/[pluto]",
        "https://movie-web-me.vercel.app/[movie-web]",
        "https://www.unrealsenseiacademy.com/[Unreal Sensei]",
        "https://learn.deeplearning.ai[DeepLearning.ai]",
        "https://piped.video/[Piped.Video]",
        "https://southampton.cloud.panopto.eu[University of Southampton]",
        "https://vk.com/video[VK Video]",
        "https://www.comsol.com/video[COMSOL]"
    ],
    "isShowContextMenu": true,
    "enableInputTranslation": true,
    "enableFloatShare": true,
    "isShowInputTranslationConsent": true,
    "enableShowFloatingBallGuide": true,
    "sentryConfig": {
        "contentInitTime": "init",
        "enable": false,
        "initOptions": {
            "ignoreErrors": [
                "Extension context invalidated.",
                "ResizeObserver loop completed with undelivered notifications.",
                "ResizeObserver loop limit exceeded",
                "Non-Error promise rejection captured with keys: currentTarget, isTrusted, target, type"
            ]
        },
        "sampleRate": 0.25
    },
    "enableSentryReport": true,
    "verifyRequestTimeout": 5000,
    "inactiveDays": 21,
    "enableInputTranslationWithoutTriggerKey": true,
    "enableRenderHtmlTag": false,
    "autoSelectTargetLanguageAfterInstalledAt": "2024-01-04",
    "defaultAlwaysTranslatedUrls": [
        "twitter.com",
        "www.reddit.com",
        "www.kadaza.com",
        "en.wikipedia.org",
        "*.medium.com",
        "news.ycombinator.com"
    ],
    "spVersion": "1.5.2",
    "ispVersion": "1.0.2",
    "gspVersion": "1.0.0",
    "modifiedBySystem": false,
    "enableDefaultAlwaysTranslatedUrls": true,
    "isChangedAlwaysTranslatedUrls": false,
    "inputTranslationUrlPattern": {
        "excludeMatches": [],
        "matches": []
    },
    "excludeTranslationHtmlTags": [
        "textarea",
        "input",
        "button",
        "select",
        "option",
        "iframe",
        "form",
        "body",
        "marquee"
    ],
    "inputTranslationService": "inherit",
    "inputTranslationBlockUrls": [
        "*.feishu.cn",
        "*.larkoffice.com",
        "*.larksuite.com",
        "www.notion.so",
        "www.figma.com/file/*",
        "*.lanhuapp.com",
        "https://*.immersivetranslate.com/text*"
    ],
    "inputStyleBlockUrls": [],
    "inputTargetLanguage": "en",
    "inputStartingTriggerKey": "/",
    "inputTrailingTriggerKey": "space",
    "inputTrailingTriggerKeyRepeatTimes": 3,
    "inputTrailingTriggerKeyTimeout": 200,
    "inputTrailingMobileTriggerKeyTimeout": 300,
    "mutationBlockUrls": [
        "*.feishu.cn",
        "*.larkoffice.com",
        "*.larksuite.com"
    ],
    "monkeyH5FloatBall": {
        "afterInstalledAt": "",
        "blockUrls": [
            "*immersivetranslate.com/preview",
            "https://app.immersivetranslate.com/",
            "https://app.immersivetranslate.com/pdf-pro*",
            "*.immersivetranslate.com/download-subtitle*"
        ],
        "clickType": "translate",
        "enable": true,
        "fixedPosition": "right"
    },
    "pcFloatBall": {
        "afterInstalledAt": "2023-10-28",
        "blockUrls": [
            "*immersivetranslate.com/preview",
            "https://app.immersivetranslate.com/",
            "https://app.immersivetranslate.com/pdf-pro*",
            "*.immersivetranslate.com/download-subtitle*"
        ],
        "clickType": "translate",
        "enable": true,
        "fixedPosition": "right"
    },
    "floatBallTooltipRule": {
        "h5MainBtnTooltipMaxShowCount": 1,
        "mainBtnTooltipDelayTime": 1500,
        "mainBtnTooltipImmediateShowCount": 5
    },
    "pcFloatBallMainBtnTooltipShownCount": 0,
    "h5FloatBallMainBtnTooltipShownCount": 0,
    "inputLanguageCodeAlias": {
        "bo": [
            "藏语"
        ],
        "en": [
            "英文",
            "英语"
        ],
        "es": [
            "西班牙语",
            "西语"
        ],
        "fr": [
            "法语",
            "发文"
        ],
        "ja": [
            "日语",
            "日文"
        ],
        "ko": [
            "韩语",
            "韩文"
        ],
        "ru": [
            "俄语",
            "俄文"
        ],
        "zh-CN": [
            "zh",
            "zh-Hant",
            "中文"
        ],
        "zh-TW": [
            "zht",
            "zh-Hant",
            "繁中"
        ]
    },
    "inputStartingTriggerKeyAlias": {
        ",": [
            "，"
        ],
        ".": [
            "。"
        ],
        "/": [
            "、"
        ],
        ":": [
            "："
        ],
        ";": [
            "；"
        ],
        "space": [
            " "
        ]
    },
    "blockUrls": [
        "https://dash.immersivetranslate.com/*",
        "https://immersive-translate.owenyoung.com/options/",
        "https://immersive-translate.owenyoung.com/auth-done/",
        "https://dash.immersivetranslate.com/",
        "https://dash.immersivetranslate.com/auth-done/",
        "http://localhost:8000/dist/userscript/options/",
        "http://localhost:8000/auth-done/",
        "http://192.168.50.9:8000/dist/userscript/options/",
        "http://192.168.31.183:8000/dist/userscript/options/",
        "https://www.deepl.com/translator",
        "translate.google.com",
        "http://localhost:8000/options/",
        "http://192.168.50.9:8000/options/",
        "https://silverbullet.md/",
        "googleads.g.doubleclick.net",
        "s1.hdslb.com",
        "oapi.dingtalk.com",
        "login.dingtalk.com",
        "imasdk.googleapis.com",
        "acdn.adnxs.com",
        "pos.baidu.com",
        "js-sec.indexww.com",
        "g.alicdn.com",
        "ads.pubmatic.com",
        "challenges.cloudflare.com",
        "accounts.google.com",
        "images-na.ssl-images-amazon.com",
        "tpc.googlesyndication.com",
        "js.stripe.com",
        "acdn.adnxs-simple.com",
        "s.union.360.cn",
        "s.amazon-adsystem.com",
        "www.recaptcha.net",
        "s7.addthis.com",
        "z.moatads.com",
        "https://www.marketwatch.com/static_html/daa-min.html",
        "tr.snapchat.com",
        "ct.pinterest.com",
        "*.moatads.com",
        "secure-us.imrworldwide.com",
        "static.noeyeon.click",
        "widgets.outbrain.com",
        "www.dianomi.com/smartads.epl",
        "secure-assets.rubiconproject.com",
        "eus.rubiconproject.com",
        "eus.rubiconproject.com",
        "i.liadm.com",
        "eb2.3lift.com",
        "googleads.g.doubleclick.net",
        "https://www.google.com/recaptcha/*",
        "ad.doubanio.com",
        "datawrapper.dwcdn.net"
    ],
    "telemetry": true,
    "loadingTheme": "spinner",
    "canary": false,
    "translationThemePatterns": {},
    "translationLanguagePattern": {
        "matches": [],
        "excludeMatches": []
    },
    "translationServices": {
        "ai": {
            "env": {
                "imt_source_field": "text",
                "imt_sub_source_field": "source",
                "imt_sub_trans_field": "translation",
                "imt_subtitle_yaml_item": "- id: {{id}}\n  {{imt_sub_source_field}}: {{text}}",
                "imt_trans_field": "text",
                "imt_yaml_item": "- id: {{id}}\n  {{imt_source_field}}: {{text}}",
                "normal_result_yaml_example": "Example request:\n  - id: 1\n    {{imt_source_field}}: Source\nExample result:\n  - id: 1\n    {{imt_trans_field}}: Translation",
                "subtitle_result_yaml_example": "Example request:\n  - id: 1\n    {{imt_sub_source_field}}: ...\n  - id: 2\n    {{imt_sub_source_field}}: ...\nExample response:\n  - id: 1\n    {{imt_sub_trans_field}}: ...\n    {{imt_sub_source_field}}: ...\n  - id: 2\n    {{imt_sub_trans_field}}: ...\n    {{imt_sub_source_field}}: ..."
            },
            "langOverrides": [
                {
                    "id": "auto2zh-CN",
                    "multiplePrompt": "将下面 YAML 格式中所有的 {{imt_source_field}} 字段中的文本翻译为 {{to}}，并将翻译结果写在 {{imt_trans_field}} 字段中\n\n{{normal_result_yaml_example}}\n\n开始翻译:\n\n{{yaml}}",
                    "prompt": "请翻译为 {{to}}（避免解释原文）:\n\n{{text}}",
                    "subtitlePrompt": "将下面 YAML 格式的视频字幕文本中所有的 {{imt_sub_source_field}} 字段中的文本翻译为 {{to}}，并将翻译结果写在 {{imt_sub_trans_field}} 字段中，要求如下：\n\n1. 必须补全每一个 {{imt_sub_trans_field}} 字段，保留每一个 {{imt_sub_source_field}} 字段。\n2. 返回可解析的 YAML ：\n\n{{subtitle_result_yaml_example}}\n\n开始翻译：\n\n{{yaml}}",
                    "systemPrompt": "你是一个专业,地道的翻译引擎，你只返回译文，不含任何解释"
                },
                {
                    "extends": "auto2zh-CN",
                    "id": "zh-CN2auto",
                    "prompt": "请翻译为{{to}}（避免解释原文）:\n\n{{text}}"
                },
                {
                    "extends": "auto2zh-CN",
                    "id": "auto2zh-CN-NE",
                    "systemPrompt": "你是一个东北人翻译，请用东北人的口吻进行翻译，尽可能贴近生活,只返回译文，不含任何解释"
                },
                {
                    "id": "wyw2zh-CN",
                    "multiplePrompt": "将下面 YAML 格式中所有的 {{imt_source_field}} 字段中的文言文翻译为白话文，并将翻译结果写在 {{imt_trans_field}} 字段中\n\n{{normal_result_yaml_example}}\n\n开始翻译:\n\n{{yaml}}",
                    "prompt": "请将文言文用白话文解释:\n\n{{text}}",
                    "systemPrompt": "你是一个精通古文的学者，只返回白话文"
                },
                {
                    "id": "ja2zh-CN",
                    "prompt": "请将日语翻译成中文（避免解释原文）:\n\n{{text}}",
                    "systemPrompt": "你是一个日语翻译专家，精通中日两种文化，只返回中文"
                },
                {
                    "id": "auto2zh-TW",
                    "multiplePrompt": "將下面 YAML 格式中所有的 {{imt_source_field}} 字段中的文本翻譯為 {{to}}，並將翻譯結果寫在 {{imt_trans_field}} 字段中\n\n{{normal_result_yaml_example}}\n\n開始翻譯:\n\n{{yaml}}",
                    "prompt": "請翻譯為 {{to}}（避免解釋原文）:\n\n{{text}}",
                    "subtitlePrompt": "將下面 YAML 格式的視頻字幕文本中所有的 {{imt_sub_source_field}} 字段中的文本翻譯為 {{to}}，並將翻譯結果寫在 {{imt_sub_trans_field}} 字段中，要求如下：\n\n1. 必須補全每一個 {{imt_sub_trans_field}} 字段，保留每一個 {{imt_sub_source_field}} 字段。\n2. 返回可解析的 YAML ：\n\n{{subtitle_result_yaml_example}}\n\n開始翻譯：\n\n{{yaml}}",
                    "systemPrompt": "你是一個專業,地道的翻譯引擎，你只返回譯文，不含任何解釋"
                },
                {
                    "id": "auto2fr",
                    "multiplePrompt": "Traduisez tout le texte des champs {{imt_source_field}} dans le format YAML ci-dessous en {{to}}, et écrivez le résultat de la traduction dans les champs {{imt_trans_field}}\n\n{{normal_result_yaml_example}}\n\nCommencez la traduction :\n\n{{yaml}}",
                    "prompt": "Veuillez traduire en {{to}} (évitez d'expliquer le texte original) :\n\n{{text}}",
                    "subtitlePrompt": "Traduisez tout le texte des champs {{imt_sub_source_field}} dans le format YAML des sous-titres vidéo ci-dessous en {{to}}, et écrivez le résultat de la traduction dans les champs {{imt_sub_trans_field}}, avec les exigences suivantes :\n\n1. Vous devez compléter chaque champ {{imt_sub_trans_field}}, tout en conservant chaque champ {{imt_sub_source_field}}.\n2. Retournez du YAML analysable :\n\n{{subtitle_result_yaml_example}}\n\nCommencez la traduction :\n\n{{yaml}}",
                    "systemPrompt": "Vous êtes un moteur de traduction professionnel et authentique, vous ne retournez que le texte traduit, sans aucune explication"
                }
            ],
            "multiplePrompt": "Translate all {{imt_source_field}} field in the YAML-formatted text below into {{to}}, and write the translation result in the {{imt_trans_field}} field.\n\nExample request:\n  - id: 1\n    {{imt_source_field}}: Source\nExample result:\n  - id: 1\n    {{imt_trans_field}}: Translation\n\nStart:\n\n{{yaml}}",
            "prompt": "Please translate into {{to}} (avoid explaining the original text):\n\n{{text}}",
            "subtitlePrompt": "Translate all {{imt_sub_source_field}} field in the YAML-formatted video subtitle text below into {{to}}, and write the translation result in the {{imt_sub_trans_field}} field. Requirements:\n\n1. You must complete each {{imt_sub_trans_field}} field and retain each {{imt_sub_source_field}} field.\n2. Return parsable YAML:\n\nExample request:\n  - id: 1\n    {{imt_sub_source_field}}: ...\n  - id: 2\n    {{imt_sub_source_field}}: ...\nExample response:\n  - id: 1\n    {{imt_sub_trans_field}}: ...\n    {{imt_sub_source_field}}: ...\n  - id: 2\n    {{imt_sub_trans_field}}: ...\n    {{imt_sub_source_field}}: ...\n\nStart:\n\n{{yaml}}",
            "systemPrompt": "You are a professional, authentic translation engine. You only return the translated text, without any explanations."
        },
        "aliyun": {
            "placeholderDelimiters": [
                "{{",
                "}}",
                "b"
            ]
        },
        "azure": {
            "placeholderDelimiters": [
                "@",
                "#"
            ]
        },
        "baidu": {
            "placeholderDelimiters": [
                "#",
                "#"
            ]
        },
        "bing": {
            "maxTextLengthPerRequest": 1800,
            "placeholderDelimiters": [
                "<code>",
                "</code>",
                "b"
            ],
            "requestTimeout": 10000,
            "retry": 1,
            "visible": true
        },
        "cai": {
            "placeholderDelimiters": [
                "{",
                "}"
            ]
        },
        "caiyun": {
            "placeholderDelimiters": [
                "{",
                "}"
            ]
        },
        "chatgpt": {
            "immediateTranslationTextCount": 2000,
            "maxTextGroupLengthPerRequest": 1,
            "maxTextLengthPerRequest": 2000,
            "newlinePlaceholderDelimiters": [
                "\n\n-|",
                "|-\n\n",
                "\n?\n?-\\|\\d+\\|-\n?\n?"
            ],
            "placeholderDelimiters": [
                "{{",
                "}}",
                "b"
            ],
            "prompt": "Translate the text to {{to}}:\n\n{{text}}"
        },
        "claude": {
            "env": {
                "imt_source_field": "text",
                "imt_sub_source_field": "source",
                "imt_sub_trans_field": "translation",
                "imt_subtitle_yaml_item": "- id: {{id}}\n  {{imt_sub_source_field}}: {{text}}",
                "imt_trans_field": "text",
                "imt_yaml_item": "- id: {{id}}\n  {{imt_source_field}}: {{text}}",
                "normal_result_yaml_example": "Example request:\n  - id: 1\n    {{imt_source_field}}: Source\nExample result:\n  - id: 1\n    {{imt_trans_field}}: Translation",
                "subtitle_result_yaml_example": "Example request:\n  - id: 1\n    {{imt_sub_source_field}}: ...\n  - id: 2\n    {{imt_sub_source_field}}: ...\nExample response:\n  - id: 1\n    {{imt_sub_trans_field}}: ...\n    {{imt_sub_source_field}}: ...\n  - id: 2\n    {{imt_sub_trans_field}}: ...\n    {{imt_sub_source_field}}: ..."
            },
            "langOverrides": [
                {
                    "id": "auto2zh-CN",
                    "multiplePrompt": "将下面 YAML 格式中所有的 {{imt_source_field}} 字段中的文本翻译为 {{to}}，并将翻译结果写在 {{imt_trans_field}} 字段中\n\n{{normal_result_yaml_example}}\n\n开始翻译:\n\n{{yaml}}",
                    "prompt": "请翻译为 {{to}}（避免解释原文）:\n\n{{text}}",
                    "subtitlePrompt": "将下面 YAML 格式的视频字幕文本中所有的 {{imt_sub_source_field}} 字段中的文本翻译为 {{to}}，并将翻译结果写在 {{imt_sub_trans_field}} 字段中，要求如下：\n\n1. 必须补全每一个 {{imt_sub_trans_field}} 字段，保留每一个 {{imt_sub_source_field}} 字段。\n2. 返回可解析的 YAML ：\n\n{{subtitle_result_yaml_example}}\n\n开始翻译：\n\n{{yaml}}",
                    "systemPrompt": "你是一个专业,地道的翻译引擎，你只返回译文，不含任何解释"
                },
                {
                    "extends": "auto2zh-CN",
                    "id": "zh-CN2auto",
                    "prompt": "请翻译为{{to}}（避免解释原文）:\n\n{{text}}"
                },
                {
                    "extends": "auto2zh-CN",
                    "id": "auto2zh-CN-NE",
                    "systemPrompt": "你是一个东北人翻译，请用东北人的口吻进行翻译，尽可能贴近生活,只返回译文，不含任何解释"
                },
                {
                    "id": "wyw2zh-CN",
                    "multiplePrompt": "将下面 YAML 格式中所有的 {{imt_source_field}} 字段中的文言文翻译为白话文，并将翻译结果写在 {{imt_trans_field}} 字段中\n\n{{normal_result_yaml_example}}\n\n开始翻译:\n\n{{yaml}}",
                    "prompt": "请将文言文用白话文解释:\n\n{{text}}",
                    "systemPrompt": "你是一个精通古文的学者，只返回白话文"
                },
                {
                    "id": "ja2zh-CN",
                    "prompt": "请将日语翻译成中文（避免解释原文）:\n\n{{text}}",
                    "systemPrompt": "你是一个日语翻译专家，精通中日两种文化，只返回中文"
                },
                {
                    "id": "auto2zh-TW",
                    "multiplePrompt": "將下面 YAML 格式中所有的 {{imt_source_field}} 字段中的文本翻譯為 {{to}}，並將翻譯結果寫在 {{imt_trans_field}} 字段中\n\n{{normal_result_yaml_example}}\n\n開始翻譯:\n\n{{yaml}}",
                    "prompt": "請翻譯為 {{to}}（避免解釋原文）:\n\n{{text}}",
                    "subtitlePrompt": "將下面 YAML 格式的視頻字幕文本中所有的 {{imt_sub_source_field}} 字段中的文本翻譯為 {{to}}，並將翻譯結果寫在 {{imt_sub_trans_field}} 字段中，要求如下：\n\n1. 必須補全每一個 {{imt_sub_trans_field}} 字段，保留每一個 {{imt_sub_source_field}} 字段。\n2. 返回可解析的 YAML ：\n\n{{subtitle_result_yaml_example}}\n\n開始翻譯：\n\n{{yaml}}",
                    "systemPrompt": "你是一個專業,地道的翻譯引擎，你只返回譯文，不含任何解釋"
                },
                {
                    "id": "auto2fr",
                    "multiplePrompt": "Traduisez tout le texte des champs {{imt_source_field}} dans le format YAML ci-dessous en {{to}}, et écrivez le résultat de la traduction dans les champs {{imt_trans_field}}\n\n{{normal_result_yaml_example}}\n\nCommencez la traduction :\n\n{{yaml}}",
                    "prompt": "Veuillez traduire en {{to}} (évitez d'expliquer le texte original) :\n\n{{text}}",
                    "subtitlePrompt": "Traduisez tout le texte des champs {{imt_sub_source_field}} dans le format YAML des sous-titres vidéo ci-dessous en {{to}}, et écrivez le résultat de la traduction dans les champs {{imt_sub_trans_field}}, avec les exigences suivantes :\n\n1. Vous devez compléter chaque champ {{imt_sub_trans_field}}, tout en conservant chaque champ {{imt_sub_source_field}}.\n2. Retournez du YAML analysable :\n\n{{subtitle_result_yaml_example}}\n\nCommencez la traduction :\n\n{{yaml}}",
                    "systemPrompt": "Vous êtes un moteur de traduction professionnel et authentique, vous ne retournez que le texte traduit, sans aucune explication"
                }
            ],
            "multiplePrompt": "Translate all {{imt_source_field}} field in the YAML-formatted text below into {{to}}, and write the translation result in the {{imt_trans_field}} field.\n\nExample request:\n  - id: 1\n    {{imt_source_field}}: Source\nExample result:\n  - id: 1\n    {{imt_trans_field}}: Translation\n\nStart:\n\n{{yaml}}",
            "prompt": "Please translate into {{to}} (avoid explaining the original text):\n\n{{text}}",
            "subtitlePrompt": "Translate all {{imt_sub_source_field}} field in the YAML-formatted video subtitle text below into {{to}}, and write the translation result in the {{imt_sub_trans_field}} field. Requirements:\n\n1. You must complete each {{imt_sub_trans_field}} field and retain each {{imt_sub_source_field}} field.\n2. Return parsable YAML:\n\nExample request:\n  - id: 1\n    {{imt_sub_source_field}}: ...\n  - id: 2\n    {{imt_sub_source_field}}: ...\nExample response:\n  - id: 1\n    {{imt_sub_trans_field}}: ...\n    {{imt_sub_source_field}}: ...\n  - id: 2\n    {{imt_sub_trans_field}}: ...\n    {{imt_sub_source_field}}: ...\n\nStart:\n\n{{yaml}}",
            "systemPrompt": "You are a professional, authentic translation engine. You only return the translated text, without any explanations.",
            "assistantId": "common",
            "bodyConfigs": {
                "max_tokens": 2048
            },
            "extends": "ai",
            "immediateTranslationTextCount": 5000,
            "interval": 1050,
            "limit": 0.3,
            "maxTextGroupLengthPerRequest": 20,
            "maxTextGroupLengthPerRequestForSubtitle": 5,
            "maxTextLengthPerRequest": 2000,
            "placeholderDelimiters": [
                "{{",
                "}}",
                "code"
            ],
            "requestTimeout": 101000,
            "translationDebounce": 300,
            "translationTextSeparator": "\n\n%%\n\n"
        },
        "custom": {
            "placeholderDelimiters": [
                "{",
                "}"
            ]
        },
        "d": {
            "immediateTranslationTextCount": 0,
            "placeholderDelimiters": [
                "@",
                "#"
            ]
        },
        "deepl": {
            "immediateTranslationTextCountForImmersiveDeepl": 50000,
            "limit": 10,
            "maxTextGroupLengthPerRequest": 50,
            "maxTextLengthPerRequest": 2800,
            "placeholderDelimiters": [
                "{{",
                "}}",
                "b"
            ],
            "qualityDelimiterBetaV3": "",
            "qualityMinTextLengthV3": 40,
            "qualityNoSymoblBetaV3": "</b",
            "requestTimeout": 15000,
            "tag_handling": "none",
            "visible": true,
            "provider": "pro"
        },
        "deeplx": {
            "limit": 3,
            "placeholderDelimiters": [
                "@",
                "#"
            ]
        },
        "dpro": {
            "apiUrl": "https://api.deepl.com/jsonrpc"
        },
        "gemini": {
            "bodyConfigs": {
                "generationConfig": {
                    "maxOutputTokens": 2048,
                    "stopSequences": [],
                    "temperature": 0.1,
                    "topK": 1,
                    "topP": 1
                },
                "safetySettings": [
                    {
                        "category": "HARM_CATEGORY_HARASSMENT",
                        "threshold": "BLOCK_NONE"
                    },
                    {
                        "category": "HARM_CATEGORY_HATE_SPEECH",
                        "threshold": "BLOCK_NONE"
                    },
                    {
                        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                        "threshold": "BLOCK_NONE"
                    },
                    {
                        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
                        "threshold": "BLOCK_NONE"
                    }
                ]
            },
            "disableWarning": false,
            "immediateTranslationTextCount": 5000,
            "interval": 1050,
            "limit": 0.8,
            "maxTextGroupLengthPerRequest": 10,
            "maxTextGroupLengthPerRequestForSubtitle": 5,
            "maxTextLengthPerRequest": 1200,
            "model": "gemini-1.0-pro-latest",
            "placeholderDelimiters": [
                "{{",
                "}}",
                "code"
            ],
            "prompt": "Please translate into {{to}} (avoid explaining the original text):\n\n{{text}}",
            "requestTimeout": 101000,
            "translationDebounce": 300,
            "translationTextSeparator": "\n\n%%\n\n",
            "env": {
                "imt_source_field": "text",
                "imt_sub_source_field": "source",
                "imt_sub_trans_field": "translation",
                "imt_subtitle_yaml_item": "- id: {{id}}\n  {{imt_sub_source_field}}: {{text}}",
                "imt_trans_field": "text",
                "imt_yaml_item": "- id: {{id}}\n  {{imt_source_field}}: {{text}}",
                "normal_result_yaml_example": "Example request:\n  - id: 1\n    {{imt_source_field}}: Source\nExample result:\n  - id: 1\n    {{imt_trans_field}}: Translation",
                "subtitle_result_yaml_example": "Example request:\n  - id: 1\n    {{imt_sub_source_field}}: ...\n  - id: 2\n    {{imt_sub_source_field}}: ...\nExample response:\n  - id: 1\n    {{imt_sub_trans_field}}: ...\n    {{imt_sub_source_field}}: ...\n  - id: 2\n    {{imt_sub_trans_field}}: ...\n    {{imt_sub_source_field}}: ..."
            },
            "langOverrides": [
                {
                    "id": "auto2zh-CN",
                    "multiplePrompt": "将下面 YAML 格式中所有的 {{imt_source_field}} 字段中的文本翻译为 {{to}}，并将翻译结果写在 {{imt_trans_field}} 字段中\n\n{{normal_result_yaml_example}}\n\n开始翻译:\n\n{{yaml}}",
                    "prompt": "请翻译为 {{to}}（避免解释原文）:\n\n{{text}}",
                    "subtitlePrompt": "将下面 YAML 格式的视频字幕文本中所有的 {{imt_sub_source_field}} 字段中的文本翻译为 {{to}}，并将翻译结果写在 {{imt_sub_trans_field}} 字段中，要求如下：\n\n1. 必须补全每一个 {{imt_sub_trans_field}} 字段，保留每一个 {{imt_sub_source_field}} 字段。\n2. 返回可解析的 YAML ：\n\n{{subtitle_result_yaml_example}}\n\n开始翻译：\n\n{{yaml}}",
                    "systemPrompt": "你是一个专业,地道的翻译引擎，你只返回译文，不含任何解释"
                },
                {
                    "extends": "auto2zh-CN",
                    "id": "zh-CN2auto",
                    "prompt": "请翻译为{{to}}（避免解释原文）:\n\n{{text}}"
                },
                {
                    "extends": "auto2zh-CN",
                    "id": "auto2zh-CN-NE",
                    "systemPrompt": "你是一个东北人翻译，请用东北人的口吻进行翻译，尽可能贴近生活,只返回译文，不含任何解释"
                },
                {
                    "id": "wyw2zh-CN",
                    "multiplePrompt": "将下面 YAML 格式中所有的 {{imt_source_field}} 字段中的文言文翻译为白话文，并将翻译结果写在 {{imt_trans_field}} 字段中\n\n{{normal_result_yaml_example}}\n\n开始翻译:\n\n{{yaml}}",
                    "prompt": "请将文言文用白话文解释:\n\n{{text}}",
                    "systemPrompt": "你是一个精通古文的学者，只返回白话文"
                },
                {
                    "id": "ja2zh-CN",
                    "prompt": "请将日语翻译成中文（避免解释原文）:\n\n{{text}}",
                    "systemPrompt": "你是一个日语翻译专家，精通中日两种文化，只返回中文"
                },
                {
                    "id": "auto2zh-TW",
                    "multiplePrompt": "將下面 YAML 格式中所有的 {{imt_source_field}} 字段中的文本翻譯為 {{to}}，並將翻譯結果寫在 {{imt_trans_field}} 字段中\n\n{{normal_result_yaml_example}}\n\n開始翻譯:\n\n{{yaml}}",
                    "prompt": "請翻譯為 {{to}}（避免解釋原文）:\n\n{{text}}",
                    "subtitlePrompt": "將下面 YAML 格式的視頻字幕文本中所有的 {{imt_sub_source_field}} 字段中的文本翻譯為 {{to}}，並將翻譯結果寫在 {{imt_sub_trans_field}} 字段中，要求如下：\n\n1. 必須補全每一個 {{imt_sub_trans_field}} 字段，保留每一個 {{imt_sub_source_field}} 字段。\n2. 返回可解析的 YAML ：\n\n{{subtitle_result_yaml_example}}\n\n開始翻譯：\n\n{{yaml}}",
                    "systemPrompt": "你是一個專業,地道的翻譯引擎，你只返回譯文，不含任何解釋"
                },
                {
                    "id": "auto2fr",
                    "multiplePrompt": "Traduisez tout le texte des champs {{imt_source_field}} dans le format YAML ci-dessous en {{to}}, et écrivez le résultat de la traduction dans les champs {{imt_trans_field}}\n\n{{normal_result_yaml_example}}\n\nCommencez la traduction :\n\n{{yaml}}",
                    "prompt": "Veuillez traduire en {{to}} (évitez d'expliquer le texte original) :\n\n{{text}}",
                    "subtitlePrompt": "Traduisez tout le texte des champs {{imt_sub_source_field}} dans le format YAML des sous-titres vidéo ci-dessous en {{to}}, et écrivez le résultat de la traduction dans les champs {{imt_sub_trans_field}}, avec les exigences suivantes :\n\n1. Vous devez compléter chaque champ {{imt_sub_trans_field}}, tout en conservant chaque champ {{imt_sub_source_field}}.\n2. Retournez du YAML analysable :\n\n{{subtitle_result_yaml_example}}\n\nCommencez la traduction :\n\n{{yaml}}",
                    "systemPrompt": "Vous êtes un moteur de traduction professionnel et authentique, vous ne retournez que le texte traduit, sans aucune explication"
                }
            ],
            "multiplePrompt": "Translate all {{imt_source_field}} field in the YAML-formatted text below into {{to}}, and write the translation result in the {{imt_trans_field}} field.\n\nExample request:\n  - id: 1\n    {{imt_source_field}}: Source\nExample result:\n  - id: 1\n    {{imt_trans_field}}: Translation\n\nStart:\n\n{{yaml}}",
            "subtitlePrompt": "Translate all {{imt_sub_source_field}} field in the YAML-formatted video subtitle text below into {{to}}, and write the translation result in the {{imt_sub_trans_field}} field. Requirements:\n\n1. You must complete each {{imt_sub_trans_field}} field and retain each {{imt_sub_source_field}} field.\n2. Return parsable YAML:\n\nExample request:\n  - id: 1\n    {{imt_sub_source_field}}: ...\n  - id: 2\n    {{imt_sub_source_field}}: ...\nExample response:\n  - id: 1\n    {{imt_sub_trans_field}}: ...\n    {{imt_sub_source_field}}: ...\n  - id: 2\n    {{imt_sub_trans_field}}: ...\n    {{imt_sub_source_field}}: ...\n\nStart:\n\n{{yaml}}",
            "systemPrompt": "You are a professional, authentic translation engine. You only return the translated text, without any explanations.",
            "assistantId": "common",
            "extends": "ai"
        },
        "gemini.add_v.[1.3.4]": {
            "env": {
                "imt_source_field": "text",
                "imt_sub_source_field": "source",
                "imt_sub_trans_field": "translation",
                "imt_subtitle_yaml_item": "- id: {{id}}\n  {{imt_sub_source_field}}: {{text}}",
                "imt_trans_field": "text",
                "imt_yaml_item": "- id: {{id}}\n  {{imt_source_field}}: {{text}}",
                "normal_result_yaml_example": "Example request:\n  - id: 1\n    {{imt_source_field}}: Source\nExample result:\n  - id: 1\n    {{imt_trans_field}}: Translation",
                "subtitle_result_yaml_example": "Example request:\n  - id: 1\n    {{imt_sub_source_field}}: ...\n  - id: 2\n    {{imt_sub_source_field}}: ...\nExample response:\n  - id: 1\n    {{imt_sub_trans_field}}: ...\n    {{imt_sub_source_field}}: ...\n  - id: 2\n    {{imt_sub_trans_field}}: ...\n    {{imt_sub_source_field}}: ..."
            },
            "langOverrides": [
                {
                    "id": "auto2zh-CN",
                    "multiplePrompt": "将下面 YAML 格式中所有的 {{imt_source_field}} 字段中的文本翻译为 {{to}}，并将翻译结果写在 {{imt_trans_field}} 字段中\n\n{{normal_result_yaml_example}}\n\n开始翻译:\n\n{{yaml}}",
                    "prompt": "请翻译为 {{to}}（避免解释原文）:\n\n{{text}}",
                    "subtitlePrompt": "将下面 YAML 格式的视频字幕文本中所有的 {{imt_sub_source_field}} 字段中的文本翻译为 {{to}}，并将翻译结果写在 {{imt_sub_trans_field}} 字段中，要求如下：\n\n1. 必须补全每一个 {{imt_sub_trans_field}} 字段，保留每一个 {{imt_sub_source_field}} 字段。\n2. 返回可解析的 YAML ：\n\n{{subtitle_result_yaml_example}}\n\n开始翻译：\n\n{{yaml}}",
                    "systemPrompt": "你是一个专业,地道的翻译引擎，你只返回译文，不含任何解释"
                },
                {
                    "extends": "auto2zh-CN",
                    "id": "zh-CN2auto",
                    "prompt": "请翻译为{{to}}（避免解释原文）:\n\n{{text}}"
                },
                {
                    "extends": "auto2zh-CN",
                    "id": "auto2zh-CN-NE",
                    "systemPrompt": "你是一个东北人翻译，请用东北人的口吻进行翻译，尽可能贴近生活,只返回译文，不含任何解释"
                },
                {
                    "id": "wyw2zh-CN",
                    "multiplePrompt": "将下面 YAML 格式中所有的 {{imt_source_field}} 字段中的文言文翻译为白话文，并将翻译结果写在 {{imt_trans_field}} 字段中\n\n{{normal_result_yaml_example}}\n\n开始翻译:\n\n{{yaml}}",
                    "prompt": "请将文言文用白话文解释:\n\n{{text}}",
                    "systemPrompt": "你是一个精通古文的学者，只返回白话文"
                },
                {
                    "id": "ja2zh-CN",
                    "prompt": "请将日语翻译成中文（避免解释原文）:\n\n{{text}}",
                    "systemPrompt": "你是一个日语翻译专家，精通中日两种文化，只返回中文"
                },
                {
                    "id": "auto2zh-TW",
                    "multiplePrompt": "將下面 YAML 格式中所有的 {{imt_source_field}} 字段中的文本翻譯為 {{to}}，並將翻譯結果寫在 {{imt_trans_field}} 字段中\n\n{{normal_result_yaml_example}}\n\n開始翻譯:\n\n{{yaml}}",
                    "prompt": "請翻譯為 {{to}}（避免解釋原文）:\n\n{{text}}",
                    "subtitlePrompt": "將下面 YAML 格式的視頻字幕文本中所有的 {{imt_sub_source_field}} 字段中的文本翻譯為 {{to}}，並將翻譯結果寫在 {{imt_sub_trans_field}} 字段中，要求如下：\n\n1. 必須補全每一個 {{imt_sub_trans_field}} 字段，保留每一個 {{imt_sub_source_field}} 字段。\n2. 返回可解析的 YAML ：\n\n{{subtitle_result_yaml_example}}\n\n開始翻譯：\n\n{{yaml}}",
                    "systemPrompt": "你是一個專業,地道的翻譯引擎，你只返回譯文，不含任何解釋"
                },
                {
                    "id": "auto2fr",
                    "multiplePrompt": "Traduisez tout le texte des champs {{imt_source_field}} dans le format YAML ci-dessous en {{to}}, et écrivez le résultat de la traduction dans les champs {{imt_trans_field}}\n\n{{normal_result_yaml_example}}\n\nCommencez la traduction :\n\n{{yaml}}",
                    "prompt": "Veuillez traduire en {{to}} (évitez d'expliquer le texte original) :\n\n{{text}}",
                    "subtitlePrompt": "Traduisez tout le texte des champs {{imt_sub_source_field}} dans le format YAML des sous-titres vidéo ci-dessous en {{to}}, et écrivez le résultat de la traduction dans les champs {{imt_sub_trans_field}}, avec les exigences suivantes :\n\n1. Vous devez compléter chaque champ {{imt_sub_trans_field}}, tout en conservant chaque champ {{imt_sub_source_field}}.\n2. Retournez du YAML analysable :\n\n{{subtitle_result_yaml_example}}\n\nCommencez la traduction :\n\n{{yaml}}",
                    "systemPrompt": "Vous êtes un moteur de traduction professionnel et authentique, vous ne retournez que le texte traduit, sans aucune explication"
                }
            ],
            "multiplePrompt": "Translate all {{imt_source_field}} field in the YAML-formatted text below into {{to}}, and write the translation result in the {{imt_trans_field}} field.\n\nExample request:\n  - id: 1\n    {{imt_source_field}}: Source\nExample result:\n  - id: 1\n    {{imt_trans_field}}: Translation\n\nStart:\n\n{{yaml}}",
            "prompt": "Please translate into {{to}} (avoid explaining the original text):\n\n{{text}}",
            "subtitlePrompt": "Translate all {{imt_sub_source_field}} field in the YAML-formatted video subtitle text below into {{to}}, and write the translation result in the {{imt_sub_trans_field}} field. Requirements:\n\n1. You must complete each {{imt_sub_trans_field}} field and retain each {{imt_sub_source_field}} field.\n2. Return parsable YAML:\n\nExample request:\n  - id: 1\n    {{imt_sub_source_field}}: ...\n  - id: 2\n    {{imt_sub_source_field}}: ...\nExample response:\n  - id: 1\n    {{imt_sub_trans_field}}: ...\n    {{imt_sub_source_field}}: ...\n  - id: 2\n    {{imt_sub_trans_field}}: ...\n    {{imt_sub_source_field}}: ...\n\nStart:\n\n{{yaml}}",
            "systemPrompt": "You are a professional, authentic translation engine. You only return the translated text, without any explanations.",
            "assistantId": "common",
            "extends": "ai",
            "translationTextSeparator": "\n\n%%\n\n"
        },
        "google": {
            "maxTextGroupLengthPerRequest": 50,
            "placeholderDelimiters": [
                "🚠",
                "🚠",
                "b"
            ],
            "requestTimeout": 15000,
            "retry": 1,
            "visible": true
        },
        "mock": {
            "limit": 100,
            "placeholderDelimiters": [
                "<code>",
                "</code>"
            ]
        },
        "niu": {
            "placeholderDelimiters": [
                "@",
                "#"
            ]
        },
        "openai": {
            "ignoreResRegexs": [
                "^抱歉.*要求",
                "^抱歉.*翻译",
                "^很抱歉.*翻译",
                "^我很抱歉.*翻译",
                "^对不起，我无法直接翻译",
                "^抱歉.*我无法",
                "^I'm sorry, but I cannot",
                "^I'm sorry, but I cannot provide",
                "^这句话的内容不适合在此平台上讨论",
                "^这句话不适合在公共场合讨论",
                "地道的翻译引擎，你只返回译文，不含任何解释"
            ],
            "immediateTranslationTextCount": 3000,
            "interval": 1350,
            "maxTextGroupLengthPerRequestForSubtitle": 5,
            "model": "gpt-3.5-turbo-0125",
            "multiplePrompt": "Translate all {{imt_source_field}} field in the YAML-formatted text below into {{to}}, and write the translation result in the {{imt_trans_field}} field.\n\nExample request:\n  - id: 1\n    {{imt_source_field}}: Source\nExample result:\n  - id: 1\n    {{imt_trans_field}}: Translation\n\nStart:\n\n{{yaml}}",
            "newlinePlaceholderDelimiters": [
                "\n<br>\n"
            ],
            "overrides": [
                {
                    "if": "targetLanguage == zh-CN",
                    "multiplePrompt": "请把这几句字幕翻译为简体中文，为了通顺，你可能需要在下一句中包含上一句的部分内容，比如我给了你 5 段英文，你就必须返回 5 段译文\n\n{{text}}",
                    "prompt": "请翻译为简体中文（避免解释原文）:\n\n {{text}}",
                    "systemPrompt": "你是一个专业,地道的翻译引擎，你只返回译文，不含任何解释"
                },
                {
                    "if": "targetLanguage == zh-CN-NE",
                    "multiplePrompt": "请把这几句字幕翻译为{{to}}，为了通顺，你可能需要在下一句中包含上一句的部分内容，比如我给了你 5 段英文，你就必须返回 5 段译文\n\n{{text}}",
                    "prompt": "请翻译为{{to}}（避免解释原文）:\n\n {{text}}",
                    "systemPrompt": "你是一个东北人翻译，请用东北人的口吻进行翻译，尽可能贴近生活,只返回译文，不含任何解释"
                },
                {
                    "if": "sourceLanguage == zh-CN",
                    "multiplePrompt": "请把这几句字幕翻译为{{to}}，为了通顺，你可能需要在下一句中包含上一句的部分内容，比如我给了你 5 段英文，你就必须返回 5 段译文\n\n{{text}}",
                    "prompt": "请翻译为{{to}}（避免解释原文）:\n\n {{text}}",
                    "systemPrompt": "你是一个专业,地道的翻译引擎，你只返回译文，不含任何解释"
                },
                {
                    "if": "targetLanguage == zh-CN && sourceLanguage == wyw",
                    "prompt": "请将文言文用白话文解释:\n\n {{text}}",
                    "systemPrompt": "你是一个精通古文的学者，只返回白话文"
                },
                {
                    "if": "targetLanguage == zh-CN && sourceLanguage == ja",
                    "prompt": "请将日语翻译成中文（避免解释原文）:\n\n {{text}}",
                    "systemPrompt": "你是一个日语翻译专家，精通中日两种文化，只返回中文"
                },
                {
                    "if": "targetLanguage == zh-TW",
                    "multiplePrompt": "請把這幾句字幕翻譯為繁體中文，為了通順，你可能需要在下一句中包含上一句的部分內容，比如我給了你 5 段英文，你就必須返回 5 段譯文\n\n{{text}}",
                    "prompt": "請翻譯為繁體中文（避免解釋原文）:\n\n {{text}}",
                    "systemPrompt": "你是一個專業,道地的翻譯引擎，你只會回譯文"
                },
                {
                    "if": "targetLanguage == fr",
                    "multiplePrompt": "Veuillez traduire ces sous-titres en chinois simplifié. Pour plus de fluidité, vous devrez peut-être inclure une partie de la phrase précédente dans la phrase suivante. Par exemple, si je vous donne 5 paragraphes en anglais, vous devez renvoyer 5 paragraphes de traduction:\n\n{{text}}",
                    "prompt": "Traduisez le texte en français, s'il vous plaît ne pas expliquer mon texte d'origine.:\n\n{{text}}",
                    "systemPrompt": "Vous êtes un moteur de traduction professionnel et authentique qui ne renvoie que des traductions."
                },
                {
                    "if": "targetLanguage == en",
                    "multiplePrompt": "Please translate these subtitles into {{to}}. For smoothness, you may need to include part of the previous sentence in the next sentence. For example, if I give you 5 paragraphs in English, you must return 5 paragraphs of translation.:\n\n{{text}}",
                    "prompt": "Translate the text to {{to}} Language, please do not explain my original text.:\n\n{{text}}",
                    "systemPrompt": "You are a professional, authentic translation engine that only returns translations."
                }
            ],
            "placeholderDelimiters": [
                "{{",
                "}}"
            ],
            "proLimit": 10,
            "proModel": "gpt-3.5-turbo-0125",
            "prompt": "Please translate into {{to}} (avoid explaining the original text):\n\n{{text}}",
            "requestTimeout": 101000,
            "systemPrompt": "You are a professional, authentic translation engine. You only return the translated text, without any explanations.",
            "translationDebounce": 300,
            "translationTextSeparator": "\n\n%%\n\n",
            "visible": true,
            "provider": "pro",
            "env": {
                "imt_source_field": "text",
                "imt_sub_source_field": "source",
                "imt_sub_trans_field": "translation",
                "imt_subtitle_yaml_item": "- id: {{id}}\n  {{imt_sub_source_field}}: {{text}}",
                "imt_trans_field": "text",
                "imt_yaml_item": "- id: {{id}}\n  {{imt_source_field}}: {{text}}",
                "normal_result_yaml_example": "Example request:\n  - id: 1\n    {{imt_source_field}}: Source\nExample result:\n  - id: 1\n    {{imt_trans_field}}: Translation",
                "subtitle_result_yaml_example": "Example request:\n  - id: 1\n    {{imt_sub_source_field}}: ...\n  - id: 2\n    {{imt_sub_source_field}}: ...\nExample response:\n  - id: 1\n    {{imt_sub_trans_field}}: ...\n    {{imt_sub_source_field}}: ...\n  - id: 2\n    {{imt_sub_trans_field}}: ...\n    {{imt_sub_source_field}}: ..."
            },
            "langOverrides": [
                {
                    "id": "auto2zh-CN",
                    "multiplePrompt": "将下面 YAML 格式中所有的 {{imt_source_field}} 字段中的文本翻译为 {{to}}，并将翻译结果写在 {{imt_trans_field}} 字段中\n\n{{normal_result_yaml_example}}\n\n开始翻译:\n\n{{yaml}}",
                    "prompt": "请翻译为 {{to}}（避免解释原文）:\n\n{{text}}",
                    "subtitlePrompt": "将下面 YAML 格式的视频字幕文本中所有的 {{imt_sub_source_field}} 字段中的文本翻译为 {{to}}，并将翻译结果写在 {{imt_sub_trans_field}} 字段中，要求如下：\n\n1. 必须补全每一个 {{imt_sub_trans_field}} 字段，保留每一个 {{imt_sub_source_field}} 字段。\n2. 返回可解析的 YAML ：\n\n{{subtitle_result_yaml_example}}\n\n开始翻译：\n\n{{yaml}}",
                    "systemPrompt": "你是一个专业,地道的翻译引擎，你只返回译文，不含任何解释"
                },
                {
                    "extends": "auto2zh-CN",
                    "id": "zh-CN2auto",
                    "prompt": "请翻译为{{to}}（避免解释原文）:\n\n{{text}}"
                },
                {
                    "extends": "auto2zh-CN",
                    "id": "auto2zh-CN-NE",
                    "systemPrompt": "你是一个东北人翻译，请用东北人的口吻进行翻译，尽可能贴近生活,只返回译文，不含任何解释"
                },
                {
                    "id": "wyw2zh-CN",
                    "multiplePrompt": "将下面 YAML 格式中所有的 {{imt_source_field}} 字段中的文言文翻译为白话文，并将翻译结果写在 {{imt_trans_field}} 字段中\n\n{{normal_result_yaml_example}}\n\n开始翻译:\n\n{{yaml}}",
                    "prompt": "请将文言文用白话文解释:\n\n{{text}}",
                    "systemPrompt": "你是一个精通古文的学者，只返回白话文"
                },
                {
                    "id": "ja2zh-CN",
                    "prompt": "请将日语翻译成中文（避免解释原文）:\n\n{{text}}",
                    "systemPrompt": "你是一个日语翻译专家，精通中日两种文化，只返回中文"
                },
                {
                    "id": "auto2zh-TW",
                    "multiplePrompt": "將下面 YAML 格式中所有的 {{imt_source_field}} 字段中的文本翻譯為 {{to}}，並將翻譯結果寫在 {{imt_trans_field}} 字段中\n\n{{normal_result_yaml_example}}\n\n開始翻譯:\n\n{{yaml}}",
                    "prompt": "請翻譯為 {{to}}（避免解釋原文）:\n\n{{text}}",
                    "subtitlePrompt": "將下面 YAML 格式的視頻字幕文本中所有的 {{imt_sub_source_field}} 字段中的文本翻譯為 {{to}}，並將翻譯結果寫在 {{imt_sub_trans_field}} 字段中，要求如下：\n\n1. 必須補全每一個 {{imt_sub_trans_field}} 字段，保留每一個 {{imt_sub_source_field}} 字段。\n2. 返回可解析的 YAML ：\n\n{{subtitle_result_yaml_example}}\n\n開始翻譯：\n\n{{yaml}}",
                    "systemPrompt": "你是一個專業,地道的翻譯引擎，你只返回譯文，不含任何解釋"
                },
                {
                    "id": "auto2fr",
                    "multiplePrompt": "Traduisez tout le texte des champs {{imt_source_field}} dans le format YAML ci-dessous en {{to}}, et écrivez le résultat de la traduction dans les champs {{imt_trans_field}}\n\n{{normal_result_yaml_example}}\n\nCommencez la traduction :\n\n{{yaml}}",
                    "prompt": "Veuillez traduire en {{to}} (évitez d'expliquer le texte original) :\n\n{{text}}",
                    "subtitlePrompt": "Traduisez tout le texte des champs {{imt_sub_source_field}} dans le format YAML des sous-titres vidéo ci-dessous en {{to}}, et écrivez le résultat de la traduction dans les champs {{imt_sub_trans_field}}, avec les exigences suivantes :\n\n1. Vous devez compléter chaque champ {{imt_sub_trans_field}}, tout en conservant chaque champ {{imt_sub_source_field}}.\n2. Retournez du YAML analysable :\n\n{{subtitle_result_yaml_example}}\n\nCommencez la traduction :\n\n{{yaml}}",
                    "systemPrompt": "Vous êtes un moteur de traduction professionnel et authentique, vous ne retournez que le texte traduit, sans aucune explication"
                }
            ],
            "subtitlePrompt": "Translate all {{imt_sub_source_field}} field in the YAML-formatted video subtitle text below into {{to}}, and write the translation result in the {{imt_sub_trans_field}} field. Requirements:\n\n1. You must complete each {{imt_sub_trans_field}} field and retain each {{imt_sub_source_field}} field.\n2. Return parsable YAML:\n\nExample request:\n  - id: 1\n    {{imt_sub_source_field}}: ...\n  - id: 2\n    {{imt_sub_source_field}}: ...\nExample response:\n  - id: 1\n    {{imt_sub_trans_field}}: ...\n    {{imt_sub_source_field}}: ...\n  - id: 2\n    {{imt_sub_trans_field}}: ...\n    {{imt_sub_source_field}}: ...\n\nStart:\n\n{{yaml}}",
            "assistantId": "common",
            "extends": "ai",
            "maxTextGroupLengthPerRequest": 3
        },
        "openai.add_v.[1.3.4]": {
            "env": {
                "imt_source_field": "text",
                "imt_sub_source_field": "source",
                "imt_sub_trans_field": "translation",
                "imt_subtitle_yaml_item": "- id: {{id}}\n  {{imt_sub_source_field}}: {{text}}",
                "imt_trans_field": "text",
                "imt_yaml_item": "- id: {{id}}\n  {{imt_source_field}}: {{text}}",
                "normal_result_yaml_example": "Example request:\n  - id: 1\n    {{imt_source_field}}: Source\nExample result:\n  - id: 1\n    {{imt_trans_field}}: Translation",
                "subtitle_result_yaml_example": "Example request:\n  - id: 1\n    {{imt_sub_source_field}}: ...\n  - id: 2\n    {{imt_sub_source_field}}: ...\nExample response:\n  - id: 1\n    {{imt_sub_trans_field}}: ...\n    {{imt_sub_source_field}}: ...\n  - id: 2\n    {{imt_sub_trans_field}}: ...\n    {{imt_sub_source_field}}: ..."
            },
            "langOverrides": [
                {
                    "id": "auto2zh-CN",
                    "multiplePrompt": "将下面 YAML 格式中所有的 {{imt_source_field}} 字段中的文本翻译为 {{to}}，并将翻译结果写在 {{imt_trans_field}} 字段中\n\n{{normal_result_yaml_example}}\n\n开始翻译:\n\n{{yaml}}",
                    "prompt": "请翻译为 {{to}}（避免解释原文）:\n\n{{text}}",
                    "subtitlePrompt": "将下面 YAML 格式的视频字幕文本中所有的 {{imt_sub_source_field}} 字段中的文本翻译为 {{to}}，并将翻译结果写在 {{imt_sub_trans_field}} 字段中，要求如下：\n\n1. 必须补全每一个 {{imt_sub_trans_field}} 字段，保留每一个 {{imt_sub_source_field}} 字段。\n2. 返回可解析的 YAML ：\n\n{{subtitle_result_yaml_example}}\n\n开始翻译：\n\n{{yaml}}",
                    "systemPrompt": "你是一个专业,地道的翻译引擎，你只返回译文，不含任何解释"
                },
                {
                    "extends": "auto2zh-CN",
                    "id": "zh-CN2auto",
                    "prompt": "请翻译为{{to}}（避免解释原文）:\n\n{{text}}"
                },
                {
                    "extends": "auto2zh-CN",
                    "id": "auto2zh-CN-NE",
                    "systemPrompt": "你是一个东北人翻译，请用东北人的口吻进行翻译，尽可能贴近生活,只返回译文，不含任何解释"
                },
                {
                    "id": "wyw2zh-CN",
                    "multiplePrompt": "将下面 YAML 格式中所有的 {{imt_source_field}} 字段中的文言文翻译为白话文，并将翻译结果写在 {{imt_trans_field}} 字段中\n\n{{normal_result_yaml_example}}\n\n开始翻译:\n\n{{yaml}}",
                    "prompt": "请将文言文用白话文解释:\n\n{{text}}",
                    "systemPrompt": "你是一个精通古文的学者，只返回白话文"
                },
                {
                    "id": "ja2zh-CN",
                    "prompt": "请将日语翻译成中文（避免解释原文）:\n\n{{text}}",
                    "systemPrompt": "你是一个日语翻译专家，精通中日两种文化，只返回中文"
                },
                {
                    "id": "auto2zh-TW",
                    "multiplePrompt": "將下面 YAML 格式中所有的 {{imt_source_field}} 字段中的文本翻譯為 {{to}}，並將翻譯結果寫在 {{imt_trans_field}} 字段中\n\n{{normal_result_yaml_example}}\n\n開始翻譯:\n\n{{yaml}}",
                    "prompt": "請翻譯為 {{to}}（避免解釋原文）:\n\n{{text}}",
                    "subtitlePrompt": "將下面 YAML 格式的視頻字幕文本中所有的 {{imt_sub_source_field}} 字段中的文本翻譯為 {{to}}，並將翻譯結果寫在 {{imt_sub_trans_field}} 字段中，要求如下：\n\n1. 必須補全每一個 {{imt_sub_trans_field}} 字段，保留每一個 {{imt_sub_source_field}} 字段。\n2. 返回可解析的 YAML ：\n\n{{subtitle_result_yaml_example}}\n\n開始翻譯：\n\n{{yaml}}",
                    "systemPrompt": "你是一個專業,地道的翻譯引擎，你只返回譯文，不含任何解釋"
                },
                {
                    "id": "auto2fr",
                    "multiplePrompt": "Traduisez tout le texte des champs {{imt_source_field}} dans le format YAML ci-dessous en {{to}}, et écrivez le résultat de la traduction dans les champs {{imt_trans_field}}\n\n{{normal_result_yaml_example}}\n\nCommencez la traduction :\n\n{{yaml}}",
                    "prompt": "Veuillez traduire en {{to}} (évitez d'expliquer le texte original) :\n\n{{text}}",
                    "subtitlePrompt": "Traduisez tout le texte des champs {{imt_sub_source_field}} dans le format YAML des sous-titres vidéo ci-dessous en {{to}}, et écrivez le résultat de la traduction dans les champs {{imt_sub_trans_field}}, avec les exigences suivantes :\n\n1. Vous devez compléter chaque champ {{imt_sub_trans_field}}, tout en conservant chaque champ {{imt_sub_source_field}}.\n2. Retournez du YAML analysable :\n\n{{subtitle_result_yaml_example}}\n\nCommencez la traduction :\n\n{{yaml}}",
                    "systemPrompt": "Vous êtes un moteur de traduction professionnel et authentique, vous ne retournez que le texte traduit, sans aucune explication"
                }
            ],
            "multiplePrompt": "Translate all {{imt_source_field}} field in the YAML-formatted text below into {{to}}, and write the translation result in the {{imt_trans_field}} field.\n\nExample request:\n  - id: 1\n    {{imt_source_field}}: Source\nExample result:\n  - id: 1\n    {{imt_trans_field}}: Translation\n\nStart:\n\n{{yaml}}",
            "prompt": "Please translate into {{to}} (avoid explaining the original text):\n\n{{text}}",
            "subtitlePrompt": "Translate all {{imt_sub_source_field}} field in the YAML-formatted video subtitle text below into {{to}}, and write the translation result in the {{imt_sub_trans_field}} field. Requirements:\n\n1. You must complete each {{imt_sub_trans_field}} field and retain each {{imt_sub_source_field}} field.\n2. Return parsable YAML:\n\nExample request:\n  - id: 1\n    {{imt_sub_source_field}}: ...\n  - id: 2\n    {{imt_sub_source_field}}: ...\nExample response:\n  - id: 1\n    {{imt_sub_trans_field}}: ...\n    {{imt_sub_source_field}}: ...\n  - id: 2\n    {{imt_sub_trans_field}}: ...\n    {{imt_sub_source_field}}: ...\n\nStart:\n\n{{yaml}}",
            "systemPrompt": "You are a professional, authentic translation engine. You only return the translated text, without any explanations.",
            "assistantId": "common",
            "extends": "ai",
            "maxTextGroupLengthPerRequest": 3
        },
        "openl": {
            "placeholderDelimiters": [
                "@",
                "#"
            ]
        },
        "papago": {
            "placeholderDelimiters": [
                "{",
                "}"
            ]
        },
        "tenAlpha": {
            "placeholderDelimiters": [
                "@",
                "#"
            ]
        },
        "tencent": {
            "placeholderDelimiters": [
                "{",
                "}",
                "b"
            ]
        },
        "transmart": {
            "limit": 20,
            "placeholderDelimiters": [
                "#",
                "#"
            ],
            "requestTimeout": 10000,
            "translatedPlaceholderDelimiters": [
                "#\\s?",
                "\\s?#"
            ],
            "visible": true
        },
        "volc": {
            "placeholderDelimiters": [
                "{",
                "}",
                "b"
            ]
        },
        "volcAlpha": {
            "placeholderDelimiters": [
                "{",
                "}",
                "b"
            ]
        },
        "yandex": {
            "maxTextLengthPerRequest": 1000,
            "placeholderDelimiters": [
                "<code>",
                "</code>",
                "b"
            ],
            "requestTimeout": 10000,
            "retry": 1,
            "visible": true
        },
        "you": {
            "placeholderDelimiters": [
                "@",
                "#"
            ]
        },
        "youdao": {
            "placeholderDelimiters": [
                "🚠",
                "🚠"
            ]
        }
    },
    "shortcuts": {},
    "tempTranslateDomainMinutes": 0,
    "translationParagraphLanguagePattern": {
        "excludeMatches": [],
        "matches": [
            "onboarding.immersivetranslate.com",
            "www.reddit.com",
            "old.reddit.com",
            "twitter.com",
            "www.tumblr.com",
            "*.twitter.com",
            "medium.com",
            "*.medium.com",
            "github.com",
            "gist.github.com",
            "www.facebook.com",
            "www.youtube.com",
            "m.youtube.com",
            "read.readwise.io",
            "www.inoreader.com",
            "mail.google.com",
            "google.com",
            "discord.com",
            "*.instagram.com",
            "instagram.com",
            "web.telegram.org",
            "web.whatsapp.com",
            "*.slack.com",
            "*.indeed.com",
            "outlook.live.com",
            "https://bsky.app",
            "store.steampowered.com"
        ],
        "selectorExcludeMatches": [],
        "selectorMatches": [
            "meta[property='al:ios:url'][content^='medium://']"
        ]
    },
    "sourceLanguageUrlPattern": {},
    "selectTranslationFont": "",
    "translationFonts": [
        "Microsoft YaHei",
        "SimSun",
        "NSimSun",
        "SimHei",
        "Microsoft JhengHei",
        "KaiTi",
        "FangSong",
        "PingFang SC",
        "STHeiti",
        "STKaiti",
        "STSong",
        "STFangsong",
        "STZhongsong",
        "STHupo",
        "STXinwei",
        "STLiti",
        "STXingkai",
        "Hiragino Sans GB",
        "Lantinghei SC",
        "Hanzipen SC",
        "Hannotate SC",
        "Songti SC",
        "Wawati SC",
        "Weibei SC",
        "Xingkai SC",
        "Yapi SC",
        "Yuanti SC",
        "Arial Unicode MS",
        "MingLiU-ExtB",
        "Malgun Gothic",
        "Arial",
        "Calibri",
        "Cambria",
        "Candara",
        "Consolas",
        "Constantia",
        "Corbel",
        "Courier New",
        "Georgia",
        "Lucida Console",
        "MingLiU",
        "PMingLiU",
        "MingLiU_HKSCS",
        "Meiryo",
        "MS Gothic",
        "MS PGothic",
        "MS UI Gothic",
        "MS Mincho",
        "MS PMincho",
        "Segoe UI",
        "Segoe UI Symbol",
        "Tahoma",
        "Times New Roman",
        "Trebuchet MS",
        "Verdana",
        "Gulim",
        "Dotum",
        "Batang",
        "Gungsuh",
        "San Francisco",
        "Helvetica Neue",
        "Hiragino Mincho ProN",
        "Hiragino Kaku Gothic ProN",
        "Yu Gothic",
        "Yu Mincho",
        "Geeza Pro",
        "Al Nile",
        "Tehran",
        "Devanagari MT",
        "Kohinoor Devanagari",
        "Apple SD Gothic Neo",
        "Nanum Gothic"
    ],
    "generalRule": {
        "_comment": "",
        "additionalExcludeSelectors": [
            "[contenteditable=\"true\"]",
            ".uacc-clickable",
            "#monica-content-root",
            "#immersive-translate-popup",
            ".social-share",
            ".breadcrumbs",
            ".post__footer",
            ".btn",
            ".share-nav",
            ".o-share",
            "[data-toolbar=share]",
            "rp",
            "rt",
            ".prism-code",
            ".rc-CodeBlock",
            "[role=code]",
            "#omni-extension",
            ".omni-item",
            "div[data-paste-markdown-skip]",
            "table.highlight",
            "div[class^=codeBlockContent]",
            "div[class^=codeBlockLines]",
            "div[class^=token-line]",
            "#liuchan-window > .liuchan-container > *",
            ".material-icons",
            "i.fa",
            "i[class^=fa-]",
            ".notranslate",
            "[translate=no]",
            ".navmenu-container",
            ".google-symbols",
            "h1 br",
            "h2 br",
            "h3 br",
            "h4 br"
        ],
        "additionalExcludeTags": [],
        "additionalInjectedCss": [],
        "additionalInlineSelectors": [
            ".MathJax_Preview",
            ".MathJax",
            ".highlighter--highlighted",
            ".rw-highlight",
            "ruby *"
        ],
        "additionalInlineTags": [],
        "additionalSelectors": [
            "h1",
            "section h2",
            "section h3",
            "section h4",
            "main h2",
            "main h3",
            "main h4",
            ".article-title",
            ".article-subtitle",
            ".article_title",
            ".article_subtitle",
            ".article__title",
            ".articleTitle",
            ".Article__content",
            ".titleLink",
            ".summary",
            ".headline",
            ".page-content",
            "aside.note",
            "aside.article-comments",
            "aside.onebox"
        ],
        "additionalStayOriginalSelectors": [
            "span.katex",
            "span.notranslate",
            ".MathJax_Preview",
            ".MathJax",
            ".MathJax_SVG",
            "[aria-labelledby^=\"MathJax-SVG\"]",
            ".mwe-math-element",
            "span[translate=no]",
            "em[translate=no]",
            "code[translate=no]",
            "span.math.inline",
            "span.math.display",
            ".ltx_Math",
            ".mathjax-block",
            ".MathJax_CHTML",
            "kbd",
            "span.pretex-inline",
            "span.math-inline",
            ".reference-citations"
        ],
        "additionalStayOriginalTags": [],
        "aiRule": {},
        "allBlockTags": [
            "BODY",
            "HGROUP",
            "CONTENT",
            "ADDRESS",
            "ARTICLE",
            "ASIDE",
            "DETAILS",
            "BLOCKQUOTE",
            "SELECT",
            "OPTION",
            "CANVAS",
            "DD",
            "DL",
            "DT",
            "FIELDSET",
            "FIGCAPTION",
            "FIGURE",
            "FOOTER",
            "HEADER",
            "FORM",
            "HR",
            "MAIN",
            "SUMMARY",
            "NAV",
            "NOSCRIPT",
            "PRE",
            "SECTION",
            "TABLE",
            "TFOOT",
            "UL",
            "VIDEO",
            "P",
            "DIV",
            "H1",
            "H2",
            "H3",
            "H4",
            "H5",
            "H6",
            "UL",
            "LI",
            "OL",
            "BR",
            "PICTURE",
            "TBODY",
            "TR",
            "TD",
            "TH",
            "SOURCE",
            "C-WIZ",
            "BUTTON",
            "TURBO-FRAME",
            "README-TOC"
        ],
        "asideMaxTextCount": 1000,
        "asideMaxTextCountPerParagraph": 67,
        "asideMaxWordCount": 200,
        "asideMaxWordCountPerParagraph": 12,
        "atomicBlockSelectors": [
            "relin-hc"
        ],
        "atomicBlockTags": [],
        "blockMinTextCount": 24,
        "blockMinWordCount": 4,
        "bodyRule": {
            "articleChildTags": [
                "P"
            ],
            "articleChildTagsNum": 4,
            "bodyIsRoot": false,
            "enable": false,
            "humanPreferred": true,
            "maxBodyScreenLength": 25,
            "preTranslation": true,
            "xpathRule": [
                "name:P"
            ]
        },
        "bodyRule.add_v.[1.4.9]": {
            "enable": true
        },
        "bodyTranslateTags": [
            "FOOTER",
            "ASIDE",
            "BUTTON",
            "NAV"
        ],
        "condition": {},
        "detectParagraphLanguage": false,
        "detectTextBufferLength": 0,
        "detectionServiceOrder": [
            "google",
            "bing",
            "transmart"
        ],
        "disableNewTextTranslate": false,
        "enableSearchEnhancement": false,
        "enableSubtitle": false,
        "excludeRegexps": [
            "(&lt;\\\\/?[a-zA-Z0-9]+(?:[^&gt;]*?)&gt;)",
            "(<form>|<body>|<strong>|<img|<IMG|<Img|<ImG|<iMg|<iMG|<em>|<b>|</b>|<i>|</i>|<u>|</u>|<br>|<br/>)"
        ],
        "excludeSelectors": [],
        "excludeSelectorsRegexes": {
            "button": [
                "^.{0,12}$"
            ],
            "td,th": [
                "^[a-zA-Z0-9\\-_.]+$",
                "^[0-9,]+\\s+tokens$",
                "^Up to [a-zA-Z]*\\s+\\d*$",
                "^(/[a-zA-Z0-9\\-_.]+)+$"
            ]
        },
        "excludeTags": [
            "TITLE",
            "LINK",
            "SCRIPT",
            "STYLE",
            "TEXTAREA",
            "SVG",
            "svg",
            "G",
            "NOSCRIPT",
            "BUTTON",
            "BASE",
            "HR",
            "PRE",
            "KBD",
            "WBR",
            "RT",
            "RP",
            "META",
            "MATH",
            "TTS-SENTENCE",
            "AIO-CODE",
            "RELIN-TARGET"
        ],
        "excludeTags.remove_v.[1.4.9]": [
            "BUTTON"
        ],
        "extraBlockSelectors": [
            "turbo-frame",
            "readme-toc",
            "#hs_cos_wrapper_post_body",
            "#hs_cos_wrapper_post_body",
            "option",
            "ul > li"
        ],
        "extraInlineSelectors": [
            "p > a span",
            "p > span a span",
            "a[data-testid=\"Link\"] span"
        ],
        "fingerCountToToggleTranslagePageOnlyTranslationWhenTouching": 0,
        "fingerCountToToggleTranslagePageWhenTouching": 4,
        "fingerCountToToggleTranslationMaskWhenTouching": 0,
        "forceTranslateTags": [],
        "globalAttributes": {},
        "globalMeta": {},
        "globalStyles": {},
        "glossaries": [
            {
                "k": "LLM",
                "v": ""
            },
            {
                "k": "LLMs",
                "v": ""
            }
        ],
        "ignoreZhCNandZhTW": false,
        "initTranslationServiceAsSoonAsPossible": true,
        "initialGlobalAttributes": {},
        "initialSelectorGlobalAttributes": {
            "footer:last-of-type": {
                "translate": "no"
            },
            "header": {
                "translate": "no"
            },
            "nav": {
                "translate": "no"
            },
            "nav:last-of-type": {
                "translate": "no"
            }
        },
        "injectedCss": [
            ".immersive-translate-target-wrapper[dir='rtl'] {text-align: right;}",
            ".immersive-translate-target-wrapper[dir='rtl'] [data-immersive-translate-class-bak*='block-wrapper'] {display:block;}"
        ],
        "inlineTags": [
            "A",
            "ABBR",
            "FONT",
            "ACRONYM",
            "B",
            "INS",
            "DEL",
            "RUBY",
            "RP",
            "RB",
            "BDO",
            "MARK",
            "BIG",
            "RT",
            "NOBR",
            "CITE",
            "DFN",
            "EM",
            "I",
            "LABEL",
            "Q",
            "S",
            "SMALL",
            "SPAN",
            "STRONG",
            "SUB",
            "SUP",
            "U",
            "KBD",
            "TT",
            "VAR",
            "IMG",
            "CODE",
            "SCRIPT",
            "STYLE",
            "LINK",
            "TIME",
            "META",
            "WBR",
            "RELIN-HC",
            "RELIN-HIGHLIGHT",
            "RELIN-ORIGIN",
            "RELIN-TARGET",
            "XQDD_HIGHLIGHT_NEW_WORD",
            "NOBR",
            "RW-HIGHLIGHT",
            "HYPOTHESIS-HIGHLIGHT"
        ],
        "inputConfig": {
            "clearContentEnable": true,
            "execCommandDeleteEnable": false
        },
        "inputExecCommandDeleteEnable": false,
        "inputTutorialsSelectors": [],
        "inputTutorialsText": "",
        "isEbook": false,
        "isEbookBuilder": false,
        "isInjectMeta": false,
        "isInjectOptionsUrl": false,
        "isInjectVersion": false,
        "isOnBoardingPage": false,
        "isPdf": false,
        "isShowUserscriptPagePopup": true,
        "isSubtitleBuilder": false,
        "isTransformPreTagNewLine": false,
        "isTranslateTitle": true,
        "isTranslateWhenServiceChanged": true,
        "languageDetectMinTextCount": 50,
        "lineBreakMaxTextCount": 0,
        "longBuildDomLength": 3000,
        "longBuildPageLength": 20,
        "mainFrameMinTextCount": 50,
        "mainFrameMinWordCount": 5,
        "metaTags": [
            "META",
            "SCRIPT",
            "STYLE",
            "NOSCRIPT"
        ],
        "minZIndex": 0,
        "mouseHoverHoldKey": "Off",
        "mouseHoverPreferenceKey": "Ctrl",
        "mutationChangeDelay": 10,
        "mutationConfig": {
            "buildTimeout": 100,
            "checkSelfUpdate": true,
            "consumeTimeout": 100
        },
        "mutationExcludeContainsSelectors": [
            "msreadoutspan",
            "[class*='rgh-seen-']",
            "[isInvalidTag]",
            "mh",
            "body",
            "relin-hc"
        ],
        "mutationExcludeSelectors": [
            "span.highlighter--highlighted",
            "span.highlighter-ext",
            "mark",
            "msreadoutspan",
            "rw-highlight",
            "web-highlight",
            "font.immersive-translate-target-wrapper *",
            "pre",
            ".uacc-clickable"
        ],
        "mutationObserverContainerSelectors": [],
        "mutationObserverLimitTargetSelectors": [],
        "noTranslateRegexp": [
            "^\\d+.+ago$",
            "^\\d+\\s+MIN\\s+READ$"
        ],
        "normalizeBody": "",
        "observeUrlChange": false,
        "pairs": {},
        "paragraphFirstLetterFontSize": 35,
        "paragraphMinTextCount": 4,
        "paragraphMinWordCount": 2,
        "pdfNewParagraphIndent": 1.2,
        "pdfNewParagraphIndentRightIndentPx": 130,
        "pdfNewParagraphLineHeight": 2.4,
        "pdfUrlExtractRule": {},
        "preWhitespaceDetectedTags": [
            "DIV",
            "SPAN"
        ],
        "searchEnhancementConfig": [],
        "searchEnhancementSelector": "#rhs",
        "selectors": [],
        "shadowRootSelectors": [],
        "shareConfig": {
            "injectCss": true,
            "removeSelectors": [
                "noscript",
                "script"
            ]
        },
        "showSponsorOnSafari": false,
        "skipEditableCheck": false,
        "stayOriginalSelectors": [],
        "stayOriginalTags": [
            "CODE",
            "TT",
            "IMG",
            "SUP",
            "SUB",
            "SAMP",
            "math",
            "semantics",
            "mrow",
            "mo",
            "mfrac",
            "msup",
            "mi",
            "mn",
            "msqrt",
            "d-math"
        ],
        "subtitle.autoEnableSubtitle": false,
        "subtitleRule": {
            "autoEnableSubtitle": false,
            "autoSwitchSubtitleWithSameLanguage": true,
            "backgroundColor": "#080808",
            "backgroundOpacity": "75",
            "disabled": false,
            "hookType": "xhr",
            "humanPreferred": true,
            "isInject": true,
            "preTranslation": false,
            "showQuickButton": true,
            "sourceFontSize": "100",
            "sourceTextColor": "#FFFFFF",
            "textShadowType": "none",
            "translateGroupCount": 5,
            "translationFontSize": "100",
            "translationMode": "dual",
            "translationPosition": "bottom",
            "translationTextColor": "#FFFFFF",
            "velocityGroup": [
                1,
                3,
                20
            ],
            "youtubeAutoEnableSubtitleAfterInstalledAt": "2024-04-25"
        },
        "targetWrapperTag": "font",
        "toastErrorMinTimes": 20,
        "touchShortcutsInputTranslate": "touchShortcutsOff",
        "touchShortcutsToggleTranslatePage": "fingers.4",
        "touchShortcutsToggleTranslatePageOnlyTranslation": "touchShortcutsOff",
        "touchShortcutsToggleTranslateTouchElement": "touchShortcutsOff",
        "touchShortcutsToggleTranslateTouchElementPreferenceKey": "slide.left",
        "touchShortcutsToggleTranslationMask": "touchShortcutsOff",
        "translationBlockStyle": "",
        "translationClasses": [],
        "urlChangeDelay": 50,
        "useIframePostMessage": false,
        "visibleDelay": 0,
        "waitForSelectors": [],
        "waitForSelectorsTimeout": 3000,
        "wrapperPrefix": "smart",
        "wrapperSuffix": "smart"
    },
    "rules": [
        {
            "bodyRule.add": {
                "enable": false
            },
            "id": "isSubtitleBuilder",
            "isSubtitleBuilder": true,
            "isTranslateTitle": false,
            "pageType": "subtitleBuilder",
            "pairs": {
                ".source-text": ".target-text"
            },
            "paragraphMinTextCount": 4,
            "paragraphMinWordCount": 2,
            "selectorMatches": [
                "meta[name='immersive-translate-subtitle-builder'][content='true']"
            ],
            "wrapperPrefix": "",
            "wrapperSuffix": ""
        },
        {
            "blockMinTextCount": 1,
            "blockMinWordCount": 1,
            "bodyRule.add": {
                "enable": false
            },
            "containerMinTextCount": 1,
            "detectTextBufferLength": 80,
            "excludeSelectors": [
                "#drop-target",
                "#drop-target h1",
                "#side-bar",
                "h1#side-bar-title"
            ],
            "extraInlineSelectors": [
                "span.dropcaps"
            ],
            "id": "isEbook",
            "injectedCss": [
                ".immersive-translate-target-translation-block-wrapper {display:block;}"
            ],
            "isEbook": true,
            "isTranslateTitle": false,
            "pageType": "ebookReader",
            "paragraphMinTextCount": 4,
            "paragraphMinWordCount": 2,
            "selectorMatches": [
                "meta[name='immersive-translate-ebook-viewer'][content='true']"
            ],
            "targetWrapperTag": "span",
            "urlChangeDelay": 200,
            "wrapperPrefix": "<br />"
        },
        {
            "additionalExcludeSelectors.remove": [
                "[contenteditable=\"true\"]"
            ],
            "bodyRule.add": {
                "enable": false
            },
            "detectTextBufferLength": 80,
            "globalAttributes": {
                "[class='textLayer']": {
                    "translate": "no"
                }
            },
            "id": "pdf",
            "injectedCss": [
                ".immersive-translate-target-wrapper {display: contents!important;position:absolute;}",
                ".immersive-translate-target-wrapper br {display: none;!important;}",
                ".immersive-translate-target-wrapper span {position: relative;!important;}",
                ".immersive-translate-error-wrapper {padding:0px !important;margin:0px !important;}",
                "font {line-height: 0!important;}"
            ],
            "isInjectVersion": true,
            "isPdf": true,
            "isTranslateTitle": false,
            "isTranslateWhenServiceChanged": false,
            "matches": [
                "https://app.immersivetranslate.com/pdf",
                "https://app.immersivetranslate.com/pdf/",
                "https://app.immersivetranslate.com/pdf/*",
                "http://localhost:38001/pdf*"
            ],
            "mutationExcludeContainsSelectors": [
                "font.immersive-translate-target-wrapper"
            ],
            "pageType": "pdfReader",
            "selectorMatches": [
                "meta[name='immersive-translate-pdf-viewer'][content='true']"
            ],
            "selectors": [
                "p"
            ],
            "shareConfig.add": {
                "removeSelectors": [
                    "noscript",
                    "script",
                    ".toolbar",
                    "#sidebarContainer",
                    "[class=\"page\"]",
                    ".editorParamsToolbar",
                    ".image-mode",
                    ".im_db",
                    ".im_cb"
                ]
            },
            "skipEditableCheck": true,
            "translationMode": "translation",
            "wrapperPrefix": ""
        },
        {
            "id": "sci-hub.pdfWebPage",
            "matches": [
                "sci-hub.*"
            ],
            "pdfUrlExtractRule": {
                "attribute": "src",
                "selector": "#pdf"
            },
            "waitForSelectorsTimeout": 1
        },
        {
            "id": "common.pdfWebPage",
            "selectorMatches": [
                "embed[type='application/pdf']"
            ],
            "waitForSelectorsTimeout": 1
        },
        {
            "blockMinTextCount": 1,
            "blockMinWordCount": 1,
            "bodyRule.add": {
                "enable": false
            },
            "containerMinTextCount": 1,
            "detectTextBufferLength": 80,
            "excludeSelectors": [
                "h1.notranslate",
                "#drop-target",
                "#drop-target h1",
                "#side-bar",
                "h1#side-bar-title",
                "#tool",
                ".Code"
            ],
            "globalMeta": {},
            "id": "isEbookBuilder",
            "injectedCss": [
                ".immersive-translate-target-translation-block-wrapper {display:block;}"
            ],
            "isEbookBuilder": true,
            "isInjectMeta": true,
            "isTranslateTitle": false,
            "isTranslateWhenServiceChanged": false,
            "matches": [
                "https://app.immersivetranslate.com/ebook/make/",
                "http://localhost:38001/ebook/make/"
            ],
            "pageType": "ebookBuilder",
            "paragraphMinTextCount": 4,
            "paragraphMinWordCount": 2,
            "selectorMatches": [
                "meta[name='immersive-translate-ebook-builder'][content='true']"
            ],
            "targetWrapperTag": "span",
            "toastErrorMinTimes": 500,
            "wrapperPrefix": "<br />"
        },
        {
            "id": "immersiveTranslateIosOnBoarding",
            "initialGlobalAttributes": {
                "input#immersiveTranslateDetectedSlot": {
                    "value": "true"
                }
            },
            "isInjectMeta": true,
            "isInjectOptionsUrl": true,
            "isInjectVersion": true,
            "selectorMatches": [
                "meta[name=immersiveTranslateIosOnBoarding]"
            ]
        },
        {
            "id": "immersiveTranslateIosOnBoardingStep1",
            "isInjectMeta": true,
            "isInjectOptionsUrl": true,
            "isInjectVersion": true,
            "isOnBoardingPage": true,
            "selectorMatches": [
                "meta[name=immersiveTranslateIosOnBoardingStep1]"
            ]
        },
        {
            "id": "immersivePreview",
            "isInjectMeta": true,
            "isInjectVersion": true,
            "matches": [
                "https://immersivetranslate.com/preview*",
                "https://test.immersivetranslate.com/preview*",
                "https://immersivetranslate.com/drafts*",
                "https://test.immersivetranslate.com/drafts*"
            ],
            "waitForSelectorsTimeout": 1
        },
        {
            "detectParagraphLanguage": true,
            "detectParagraphLanguage.add.[1.4.8]": false,
            "detectTextBufferLength": 80,
            "excludeSelectors": [
                "table"
            ],
            "excludeSelectors.remove.[1.4.8]": [
                "table"
            ],
            "excludeSelectorsRegexes.add": {
                "td": [
                    "^.{0,12}$"
                ]
            },
            "id": "pro-pdf",
            "injectedCss.add": [
                ".immersive-translate-target-wrapper {white-space: unset;}"
            ],
            "isInjectMeta": true,
            "isInjectVersion": true,
            "matches": [
                "https://*.immersivetranslate.com/pdf-pro*"
            ],
            "pageType": "pdfProReader",
            "toastErrorMinTimes": 500,
            "waitForSelectorsTimeout": 1
        },
        {
            "allowThirdPartyTranslate": true,
            "id": "download-subtitle",
            "isInjectMeta": true,
            "isInjectVersion": true,
            "matches": [
                "https://*.immersivetranslate.com/download-subtitle*"
            ],
            "pageType": "downloadSubtitle",
            "waitForSelectorsTimeout": 1
        },
        {
            "id": "immersive",
            "isInjectMeta": true,
            "isInjectVersion": true,
            "longBuildPageLength": 1000,
            "matches": [
                "https://immersivetranslate.com",
                "https://test.immersivetranslate.com",
                "https://onboarding.immersivetranslate.com",
                "https://app.immersivetranslate.com",
                "https://test-app.immersivetranslate.com",
                "http://localhost:38001",
                "https://ai.immersivetranslate.com",
                "https://test-ai.immersivetranslate.com"
            ],
            "waitForSelectorsTimeout": 1
        },
        {
            "id": "simpread",
            "mainFrameSelector": "div.simpread-read-root.simpread-read-root-show > sr-read",
            "selectorMatches": "div.simpread-read-root.simpread-read-root-show > sr-read"
        },
        {
            "excludeTags.remove": [
                "PRE"
            ],
            "id": "txt",
            "isTransformPreTagNewLine": true,
            "longBuildPageLength": 1000,
            "matches": [
                "*://*/*.txt",
                "file://*/*.txt"
            ],
            "mutationExcludeSelectors.add": [
                "body"
            ],
            "selectorMatches": [
                "body > pre"
            ]
        },
        {
            "id": "hangejp",
            "matches": [
                "arad.hange.jp",
                "arad.nexon.co.jp",
                "oapi.dingtalk.com",
                "login.dingtalk.com"
            ],
            "useIframePostMessage": false
        },
        {
            "id": "preSites",
            "isTransformPreTagNewLine": true,
            "longBuildPageLength": 1000,
            "matches": [
                "mail.jabber.org",
                "antirez.com",
                "patchwork.kernel.org",
                "lists.apache.org",
                "manned.org",
                "bugs.webkit.org",
                "bugzilla.mozilla.org",
                "lwn.net/Articles/*",
                "docs.haproxy.org",
                "man.freebsd.org",
                "www.oreilly.com/openbook/opensources/book/*",
                "gamefaqs.gamespot.com",
                "bugs.java.com/bugdatabase/view_bug.do"
            ]
        },
        {
            "bodyRule.add": {
                "articleSelector": "#bodyContent",
                "bodySelector": "#content"
            },
            "excludeSelectors": [
                ".mw-editsection",
                ".mw-cite-backlink",
                "#p-lang-btn",
                "#right-navigation",
                "#p-associated-pages",
                ".vector-header"
            ],
            "extraInlineSelectors": [
                ".chemf",
                ".mwe-math-element",
                "[role=math]",
                ".nowrap"
            ],
            "id": "wikipedia",
            "injectedCss": [
                ".immersive-translate-target-translation-block-wrapper { display: block; }"
            ],
            "matches": "*.wikipedia.org",
            "paragraphMinTextCount": 4,
            "paragraphMinWordCount": 2,
            "stayOriginalSelectors": [
                ".chemf",
                ".mwe-math-element",
                "[role=math]",
                ".nowrap"
            ]
        },
        {
            "additionalStayOriginalSelectors": [
                "[data-testid=\"tweetText\"] a",
                "[data-testid='UserDescription'] a",
                "[data-testid='HoverCard'] a",
                "[data-testid='UserCell'] a",
                "[data-testid='birdwatch-pivot']  a"
            ],
            "blockMinTextCount": 0,
            "blockMinWordCount": 0,
            "excludeMatches": [
                "https://twitter.com/i/premium_sign_up",
                "https://twitter.com/settings/subscription",
                "https://twitter.com/jobs/*"
            ],
            "excludeSelectors": [
                "[aria-describedby][role=button]",
                "header",
                "[data-testid='radioGroupplayback_rate'] div",
                "[data-testid='userFollowIndicator']",
                "[class='css-901oao r-14j79pv r-37j5jr r-n6v787 r-16dba41 r-1cwl3u0 r-bcqeeo r-qvutc0']",
                "[class='css-175oi2r r-1wbh5a2 r-dnmrzs']"
            ],
            "extraBlockSelectors": [
                "[data-testid=\"tweetText\"] div.r-6koalj"
            ],
            "extraInlineSelectors": [
                "[data-testid=\"tweetText\"] div.r-xoduu5",
                "[data-testid=\"tweetText\"] span",
                "[data-testid=\"UserDescription\"] div",
                "[data-testid='HoverCard'] div[dir=auto] div",
                "[data-testid='HoverCard'] span[dir=auto] div"
            ],
            "globalStyles": {
                "[data-testid='card.layoutLarge.detail'] > div:nth-child(2)": "-webkit-line-clamp: unset;",
                "[data-testid='card.layoutSmall.detail'] > div:nth-child(2)": "-webkit-line-clamp: unset;",
                "[data-testid='tweetText']": "-webkit-line-clamp: unset;"
            },
            "id": "twitter",
            "ignoreZhCNandZhTW": true,
            "isTranslateTitle": false,
            "matches": [
                "twitter.com",
                "mobile.twitter.com",
                "tweetdeck.twitter.com",
                "pro.twitter.com",
                "https://platform.twitter.com/embed*"
            ],
            "observeUrlChange": false,
            "paragraphMinTextCount": 2,
            "paragraphMinWordCount": 1,
            "selectors": [
                "[data-testid=\"tweetText\"]",
                ".tweet-text",
                ".js-quoted-tweet-text",
                "[data-testid='card.layoutSmall.detail'] > div:nth-child(2)",
                "[data-testid='developerBuiltCardContainer'] > div:nth-child(2)",
                "[data-testid='card.layoutLarge.detail'] > div:nth-child(2)",
                "[data-testid='cellInnerDiv'] div[data-testid='UserCell'] > div> div:nth-child(2)",
                "[data-testid='UserDescription']",
                "[data-testid='HoverCard'] div[dir=auto]",
                "[data-testid='HoverCard'] span[dir=auto]",
                "[data-testid='HoverCard'] [role='dialog'] div[dir=ltr]",
                "[data-testid='birdwatch-pivot'] div[dir=ltr]",
                "[data-testid='twitterArticleReadView']"
            ],
            "subtitleRule.add": {
                "injectedCss": [
                    "#layers[style='z-index: 1;'] [style='height: 100px;'] { height: 400px !important; }"
                ],
                "isInject": false,
                "liveSubtitleRule": {
                    "containerSelector": ".css-175oi2r.r-13awgt0.r-1pi2tsx.r-13qz1uu > [role='listbox']",
                    "mutationChangeDelay": 1000,
                    "reportSelector": ".css-175oi2r.r-1awozwy.r-173mn98.r-1mf7evn.r-7e3msg",
                    "textSelectors": [
                        ".css-1rynq56.r-bcqeeo.r-qvutc0.r-37j5jr.r-a023e6.r-16dba41.r-dhbnww.r-1pb70le"
                    ]
                },
                "type": "live"
            },
            "subtitleRule.add_v.[1.2.1]": {
                "injectedCss": [
                    "#layers[style='z-index: 1;'] [style='height: 100px;'] { height: 400px !important; }",
                    "video::cue {white-space: pre-line;}"
                ],
                "loadingStyle": "bottom: unset; top: 5%;",
                "type": "twitter",
                "videoPlayerSelector": "video"
            },
            "useIframePostMessage": false
        },
        {
            "excludeSelectors": [
                ".line-clamp-1.text-lg",
                ".text-muted-foreground.text-sm.col-span-4.text-right",
                "div[title='Tokens this week']",
                ".text-green-600.font-medium",
                ".text-xl.text-slate-11",
                "button[role='tab']"
            ],
            "globalStyles": {
                "button.text-primary-foreground": "height: 100%;white-space: normal;word-wrap: break-word;"
            },
            "id": "openrouter",
            "matches": "openrouter.ai"
        },
        {
            "excludeSelectors.add": [
                ".x6s0dn4.x78zum5",
                ".xpvyfi4.x1npkx4u.x1ms6mhf"
            ],
            "globalStyles": {
                "span,.x569fbc": "max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"
            },
            "id": "threads",
            "matches": "www.threads.net",
            "selectors": [
                "p",
                ".x1npkx4u.x1exu5d8",
                ".xw7yly9",
                ".xgkxs2y",
                ".x1xdureb.x13vxnyz",
                ".xqti54a.x13vxnyz.x49hn82.xcrlgei.x889kno"
            ],
            "stayOriginalSelectors": [
                ".x1rg5ohu",
                ".xat24cr.xdj266r a"
            ]
        },
        {
            "excludeSelectors.add": [
                ".votecell",
                "header",
                "#footer",
                "#question-header + div",
                "div.postcell div.mb0",
                "div[id^=comments-link-]",
                "#answers-header",
                ".new-post-login",
                ".form-submit",
                "a[href='/questions/ask']",
                "#left-sidebar",
                "a.comment-user",
                "span.comment-date",
                "div.s-prose.js-post-body + div",
                ".bottom-notice",
                "div[data-campaign-name=stk]",
                ".s-post-summary--stats",
                ".s-post-summary--meta"
            ],
            "extraBlockSelectors": [
                "span.comment-copy"
            ],
            "globalStyles": {
                ".s-post-summary--content-excerpt": "-webkit-line-clamp:unset;"
            },
            "id": "stackoverflow",
            "matches": [
                "stackoverflow.com",
                "*.stackexchange.com",
                "superuser.com",
                "askubuntu.com",
                "serverfault.com"
            ],
            "paragraphMinTextCount": 4,
            "paragraphMinWordCount": 2
        },
        {
            "id": "appleDeveloper",
            "matches": "developer.apple.com/documentation/*",
            "selectors": [
                ".container",
                "h3.title",
                "div.content"
            ]
        },
        {
            "excludeSelectors": [
                ".reply"
            ],
            "id": "hackerNews",
            "matches": "news.ycombinator.com",
            "selectors": [
                ".titleline > a",
                ".comment > .commtext",
                ".toptext",
                "a.hn-item-title",
                ".hn-comment-text",
                ".hn-story-title"
            ]
        },
        {
            "excludeSelectors": [
                ".dom_annotate_multifeed_bundle_AskQuestionPromptBundle",
                ".dom_annotate_feed_switcher",
                "[class='q-box qu-py--small qu-color--gray_light']",
                "[class='q-box spacing_log_answer_header']",
                "[class='q-box qu-flex--auto']",
                "[class='q-text qu-dynamicFontSize--small qu-mt--small qu-color--gray_light qu-passColorToLinks']",
                ".AnswerFooter___StyledFlex-sc-2xbo88-0",
                "[class='q-box qu-mb--small']"
            ],
            "globalStyles": {
                ".qu-truncateLines--3": "-webkit-line-clamp: unset;"
            },
            "id": "quora",
            "matches": [
                "*.quora.com",
                "quora.com"
            ]
        },
        {
            "detectParagraphLanguage": true,
            "id": "oldReddit",
            "matches": [
                "old.reddit.com/*/.compact",
                "old.reddit.com/.compact",
                "www.reddit.com/*/.compact",
                "www.reddit.com/.compact"
            ],
            "selectors": [
                ".title > a",
                ".usertext-body"
            ]
        },
        {
            "detectParagraphLanguage": true,
            "id": "otherOldReddit",
            "matches": "old.reddit.com",
            "selectors": [
                "p.title > a",
                "[role=main] .md-container"
            ]
        },
        {
            "detectParagraphLanguage": true,
            "excludeMatches": [
                "https://www.reddit.com/r/*/wiki/*"
            ],
            "globalStyles": {
                "[class*='line-clamp']": "-webkit-line-clamp: unset",
                "div.XPromoBottomBar": "display:none"
            },
            "id": "redditList",
            "inputConfig.add": {
                "clearContentEnable": false
            },
            "matches": [
                "https://www.reddit.com/r/*/comments/*/*",
                "https://www.reddit.com/",
                "https://www.reddit.com/hot/",
                "https://www.reddit.com/new/",
                "https://www.reddit.com/top/"
            ],
            "observeUrlChange": true,
            "selectors": [
                "h1",
                ".PostHeader__post-title-line",
                "[data-click-id=body] h3",
                "[data-click-id=background] h3",
                "[data-testid=comment]",
                "[data-adclicklocation='title'] h3",
                "[data-adclicklocation=media]",
                "[data-testid='post-title-text']",
                ".PostContent",
                ".post-content",
                ".Comment__body",
                "faceplate-batch .md",
                "[slot=comment]",
                ".RichTextJSON-root",
                "[slot=title]",
                "[slot=text-body]",
                "p.title > a",
                "[role=main] .md-container",
                ".room-message-text"
            ],
            "waitForSelectors": [
                "[data-testid=post_author_link]"
            ]
        },
        {
            "detectParagraphLanguage": true,
            "excludeMatches": [
                "https://www.reddit.com/r/*/wiki/*",
                "https://www.reddit.com/settings/*"
            ],
            "excludeSelectors": [
                ".text-neutral-content-weak"
            ],
            "globalStyles": {
                "[class*='line-clamp']": "-webkit-line-clamp: unset",
                "div.XPromoBottomBar": "display:none"
            },
            "id": "reddit",
            "matches": "www.reddit.com",
            "paragraphMinTextCount": 5,
            "paragraphMinWordCount": 2,
            "selectors": [
                "#search-results-tab-slot",
                "h1",
                ".PostHeader__post-title-line",
                "[data-click-id=body] h3",
                "[data-click-id=background] h3",
                "[data-testid=comment]",
                "[data-adclicklocation='title'] h3",
                "[data-testid='post-title-text']",
                "[slot=comment]",
                "[data-adclicklocation=media]",
                ".PostContent",
                ".post-content",
                ".Comment__body",
                "faceplate-batch .md",
                "[slot=text-body]",
                "p.title > a",
                "[role=main] .md-container",
                "#-post-rtjson-content",
                ".RichTextJSON-root",
                "[slot='title']",
                ".room-message-text"
            ]
        },
        {
            "excludeSelectors": [
                "[promotext]",
                "[data-testid=Leaderboard]",
                "[data-testid=HomeTickerV2]",
                "[data-testid=SiteFooter]",
                "[class^=refinitiv-promo-bar__container]",
                "[data-testid=ResponsiveAdSlot]",
                "[data-testid=SiteHeader]",
                "[data-testid=HomeTickerV2]"
            ],
            "id": "reuters",
            "matches": "www.reuters.com"
        },
        {
            "id": "npmjs",
            "matches": "https://www.npmjs.com/package/*",
            "selectors": [
                "#tabpanel-readme > div:first-child"
            ]
        },
        {
            "atomicBlockSelectors": [
                "[itemprop=description]"
            ],
            "detectParagraphLanguage": true,
            "excludeMatches": [
                "https://github.com/*/*/settings",
                "https://github.com/settings/*",
                "https://github.com/sponsors/*",
                "https://github.com/readme/*",
                "https://github.com/readme/",
                "https://github.com/features/*",
                "https://github.com/customer-stories/*"
            ],
            "excludeSelectors": [
                ".css-truncate",
                "[data-test-selector='commit-tease-commit-message']",
                "[data-test-selector='create-branch.developmentForm']",
                "div.Box-header.position-relative",
                "div.blob-wrapper-embedded",
                "div.Box.Box--condensed.my-2",
                "div.jp-CodeCell",
                "[aria-label=\"Account\"] .markdown-title",
                ".js-repos-container .markdown-title",
                "a.anchor",
                "div.file-navigation + div.Box"
            ],
            "extraBlockSelectors": [],
            "extraInlineSelectors": [
                "g-emoji",
                "a.anchor"
            ],
            "globalStyles": {
                ".TimelineItem-body .Link--primary": "-webkit-line-clamp: unset;"
            },
            "id": "github",
            "matches": "github.com",
            "mutationExcludeSelectors": [
                ".react-blob-sticky-header *"
            ],
            "selectors": [
                "h1",
                "[aria-label=Issues] .markdown-title",
                "[aria-labelledby=discussions-list] .markdown-title",
                "h3 .markdown-title",
                ".markdown-body",
                ".Layout-sidebar p",
                "div > span.search-match",
                "li.repo-list-item p",
                "#responsive-meta-container p",
                "article p",
                "div.repo-description p",
                "[itemprop=description]",
                ".integrations-auth-wrapper",
                ".new-feed-onboarding-notice",
                "article section[aria-label='card content'] > div > div > div  > div:nth-child(2)",
                ".TimelineItem-body > .Link--primary",
                "[role=\"navigation\"] p",
                "[data-testid=\"commit-row-item\"] h4"
            ],
            "stayOriginalSelectors.add": [
                ".issue-link"
            ],
            "stayOriginalTags": [
                "CODE",
                "TT",
                "G-EMOJI",
                "IMG",
                "SUP",
                "SUB"
            ],
            "useIframePostMessage": false
        },
        {
            "additionalExcludeSelectors.remove": [
                ".notranslate",
                "[translate=no]"
            ],
            "id": "github-blog",
            "injectedCss": [
                "font {word-break: break-all !important;}"
            ],
            "matches": [
                "github.blog"
            ]
        },
        {
            "excludeSelectors": [
                "div.jp-CodeCell"
            ],
            "id": "githubNotebook",
            "matches": "notebooks.githubusercontent.com",
            "useIframePostMessage": false
        },
        {
            "atomicBlockSelectors": [
                "div[dir=auto][style]",
                "div[dir=auto][class]",
                "span[lang]"
            ],
            "detectParagraphLanguage": true,
            "excludeMatches": [
                "https://www.facebook.com/business/*",
                "https://www.facebook.com/help*"
            ],
            "excludeSelectors": [
                "[role=button]"
            ],
            "extraBlockSelectors": [
                "span.x1vvkbs"
            ],
            "id": "facebook",
            "insertPosition": "afterend",
            "matches": "www.facebook.com",
            "preWhitespaceDetectedTags": [
                "DIV",
                "SPAN"
            ],
            "selectors": [
                "div[dir=auto][style]",
                "div[dir=auto][class]",
                "span[lang]"
            ],
            "translationClasses": [
                "immersive-translate-text"
            ]
        },
        {
            "additionalExcludeSelectors": [
                ".ytp-caption-window-container",
                "text",
                ".imt-caption-container"
            ],
            "atomicBlockSelectors": [
                ".comment-text"
            ],
            "excludeTags.remove": [
                "BUTTON"
            ],
            "extraBlockSelectors": [
                ".caption-visual-line"
            ],
            "globalStyles": {
                ".comment-text": "max-height:unset;",
                ".media-item-headline": "max-height:unset;-webkit-line-clamp:unset;"
            },
            "id": "youtubeMobile",
            "injectedCss": [
                ".immersive-translate-target-wrapper img { width: 16px; height: 16px }"
            ],
            "matches": "m.youtube.com",
            "mutationConfig.add": {
                "checkSelfUpdate": false
            },
            "mutationExcludeSelectors.add": [
                ".imt-caption-container *"
            ],
            "observeUrlChange": true,
            "selectors": [
                ".comment-text",
                "#content-text",
                ".media-item-headline",
                ".slim-video-information-title",
                ".yt-spec-button-view-model",
                ".yt-core-attributed-string > span",
                ".title"
            ],
            "shareConfig": {
                "injectCss": false,
                "removeSelectors": [
                    "iron-iconset-svg",
                    "iframe",
                    "ytd-watch-next-secondary-results-renderer",
                    "noscript",
                    "script"
                ]
            },
            "subtitleRule.add": {
                "attachRule": {
                    "appendSelector": ".html5-video-player.playing-mode,.html5-video-player.paused-mode",
                    "injectedCSS": [
                        ".imt-caption-container {z-index:40;}"
                    ],
                    "injectedGlobalCSS": [
                        ".caption-window {display: none;} ",
                        "shorts-video #immersive-translate-caption-window { height: 150px;}"
                    ]
                },
                "injectedCss": [
                    "#player-shorts-container .ytp-caption-window-bottom {top: 40px; bottom: unset!important;}"
                ],
                "loadingContainerSelector": ".ytp-caption-window-container",
                "subtitleUrlRegExp": "(/api/timedtext|videoplayback\\?expire.*text)",
                "translateSelectors": [
                    ".caption-window",
                    ".caption-visual-line"
                ],
                "translationOnlyPattern": [
                    "m.youtube.com/watch*",
                    "m.youtube.com/embed*",
                    "m.youtube.com/shorts*"
                ],
                "type": "youtube",
                "videoADSelector": ".ytp-ad-player-overlay",
                "videoPlayerSelector": ".html5-video-player.playing-mode,.html5-video-player.paused-mode",
                "videoSelector": ".html5-video-player.playing-mode video,.html5-video-player.paused-mode video"
            },
            "wrapperPrefix": "",
            "wrapperSuffix": ""
        },
        {
            "additionalExcludeSelectors.add": [
                ".ytp-caption-window-container",
                "text",
                ".imt-caption-container"
            ],
            "blockMinTextCount": 0,
            "blockMinWordCount": 0,
            "detectParagraphLanguage": true,
            "extraBlockSelectors": [
                "yt-formatted-string.ytd-transcript-segment-renderer",
                ".caption-visual-line"
            ],
            "globalStyles": {
                "#video-title": "-webkit-line-clamp: unset;max-height: unset;",
                "h1.ytd-watch-metadata": "-webkit-line-clamp: unset;max-height: unset;",
                "yt-formatted-string#video-title": "-webkit-line-clamp: unset;max-height: unset;",
                "ytd-expander.ytd-comment-renderer": "--ytd-expander-max-lines: 1000;"
            },
            "id": "youtube",
            "injectedCss": [
                ".immersive-translate-target-wrapper img { width: 16px; height: 16px }",
                ".metadata-snippet-container {max-height: unset !important;}",
                ".immersive-translate-target-wrapper {text-align: left;}",
                ".immersive-translate-target-wrapper[dir=rtl] {text-align: right;}"
            ],
            "isTranslateTitle": false,
            "lineBreakMaxTextCount": 0,
            "mainFrameMinTextCount": 0,
            "mainFrameMinWordCount": 0,
            "matches": "www.youtube.com",
            "mutationExcludeSelectors.add": [
                ".imt-caption-container *"
            ],
            "observeUrlChange": true,
            "selectors": [
                "yt-formatted-string[slot=content].ytd-comment-renderer",
                "yt-formatted-string.ytd-video-renderer",
                "yt-formatted-string#content-text",
                "h1",
                "yt-formatted-string#video-title",
                "yt-formatted-string.span",
                "span#video-title",
                "a#video-title",
                "yt-formatted-string.ytd-transcript-segment-renderer",
                "#description-inline-expander > yt-attributed-string > span",
                "yt-attributed-string > span",
                "ytd-notification-renderer .message",
                "#message",
                ".yt_to_text_transcript_text"
            ],
            "shareConfig": {
                "injectCss": false,
                "removeSelectors": [
                    "iron-iconset-svg",
                    "iframe",
                    "ytd-watch-next-secondary-results-renderer",
                    "noscript",
                    "script"
                ]
            },
            "subtitleRule.add": {
                "allowTempEnableSubtitle": true,
                "attachRule": {
                    "appendSelector": ".html5-video-player.playing-mode,.html5-video-player.paused-mode",
                    "injectedCSS": [
                        ".imt-caption-container {z-index:40;}",
                        ".imt-caption-window {margin-bottom: 2%}"
                    ],
                    "injectedGlobalCSS": [
                        ".caption-window {display: none;} ",
                        "#shorts-player #immersive-translate-caption-window { height: 20%;}",
                        ".html5-video-player:not(.ytp-autohide) #immersive-translate-caption-window {bottom: 60px;}"
                    ]
                },
                "injectedCss": [
                    "#shorts-player .ytp-caption-window-bottom {top: 2%; bottom: unset!important;} #immersive-translate-quick-button-container {font-size: 12px;z-index:1001;}"
                ],
                "languageSelector": ".ytp-menuitem-label",
                "loadingContainerSelector": ".ytp-caption-window-container",
                "quickButtonRule": {
                    "appendSelector": ".ytp-chrome-controls",
                    "insertBeforeSelector": ".ytp-right-controls"
                },
                "subtitleButtonSelector": ".html5-video-player.playing-mode .ytp-subtitles-button,.html5-video-player.paused-mode .ytp-subtitles-button",
                "subtitleUrlRegExp": "(/api/timedtext|videoplayback\\?expire.*text)",
                "translateSelectors": [
                    ".caption-window",
                    ".caption-visual-line"
                ],
                "translationOnlyPattern": [
                    "www.youtube.com/watch*",
                    "www.youtube.com/embed*",
                    "www.youtube.com/shorts*"
                ],
                "type": "youtube",
                "videoADSelector": ".ytp-ad-player-overlay",
                "videoPlayerSelector": ".html5-video-player.playing-mode,.html5-video-player.paused-mode",
                "videoSelector": ".html5-video-player.playing-mode video,.html5-video-player.paused-mode video"
            },
            "urlChangeDelay": 2000,
            "wrapperPrefix": "<br/>",
            "wrapperSuffix": ""
        },
        {
            "id": "tvYoutube",
            "mainFrameMinTextCount": 0,
            "mainFrameMinWordCount": 0,
            "matches": "tv.youtube.com",
            "subtitleRule.add": {
                "attachRule": {
                    "appendSelector": ".html5-video-player.playing-mode,.html5-video-player.paused-mode",
                    "injectedCSS": [
                        ".imt-caption-container {z-index:40;}",
                        ".imt-caption-window {margin-bottom: 2%;}"
                    ],
                    "injectedGlobalCSS": [
                        ".caption-window {display: none;} ",
                        "#shorts-player #immersive-translate-caption-window { height: 20%;}",
                        ".html5-video-player:not(.ytp-autohide) #immersive-translate-caption-window {bottom: 60px;}"
                    ]
                },
                "humanPreferred": false,
                "injectedCss": [
                    "#shorts-player .ytp-caption-window-bottom {top: 2%; bottom: unset!important;} #immersive-translate-quick-button-container {font-size: 12px;z-index:1001;}"
                ],
                "languageSelector": ".ytp-menuitem-label",
                "loadingContainerSelector": ".ytp-caption-window-container",
                "preTranslation": true,
                "quickButtonRule": {
                    "appendSelector": ".ypcs-control-buttons-right",
                    "insertBeforeSelector": ".ypcs-control-buttons-right .ypcs-volume-control-slot"
                },
                "subtitleButtonSelector": ".ytp-subtitles-button",
                "subtitleUrlRegExp": "(/api/timedtext|videoplayback\\?expire.*text)",
                "translateSelectors": [
                    ".caption-window",
                    ".caption-visual-line"
                ],
                "translationOnlyPattern": [
                    "tv.youtube.com/watch*"
                ],
                "type": "youtube",
                "videoADSelector": ".ytp-ad-player-overlay",
                "videoPlayerSelector": ".html5-video-player.playing-mode,.html5-video-player.paused-mode",
                "videoSelector": ".html5-video-player.playing-mode video,.html5-video-player.paused-mode video"
            }
        },
        {
            "excludeSelectors.add": [
                ".captions-text",
                ".ytp-caption-segment"
            ],
            "extraBlockSelectors": [
                ".caption-visual-line"
            ],
            "id": "youtube-subtitle",
            "mainFrameMinTextCount": 0,
            "mainFrameMinWordCount": 0,
            "matches": [
                "www.youtube-nocookie.com",
                "music.youtube.com"
            ],
            "subtitleRule.add": {
                "attachRule": {
                    "appendSelector": ".html5-video-player",
                    "injectedCSS": [
                        ".imt-caption-container {z-index:40;}",
                        ".imt-caption-window {margin-bottom: 2%;}"
                    ],
                    "injectedGlobalCSS": [
                        ".caption-window {display: none;} ",
                        "#shorts-player #immersive-translate-caption-window { height: 20%;}",
                        ".html5-video-player:not(.ytp-autohide) #immersive-translate-caption-window {bottom: 60px;}"
                    ]
                },
                "injectedCss": [
                    "#shorts-player .ytp-caption-window-bottom {top: 2%; bottom: unset!important;}"
                ],
                "languageSelector": ".ytp-menuitem-label",
                "loadingContainerSelector": ".ytp-caption-window-container",
                "quickButtonRule": {
                    "appendSelector": ".ytp-chrome-controls",
                    "insertBeforeSelector": ".ytp-right-controls"
                },
                "subtitleButtonSelector": ".ytp-subtitles-button",
                "subtitleUrlRegExp": "/api/timedtext",
                "translateSelectors": [
                    ".caption-window",
                    ".caption-visual-line"
                ],
                "translationOnlyPattern": [
                    "www.youtube-nocookie.com/embed*",
                    "music.youtube.com/watch*"
                ],
                "type": "youtube",
                "videoADSelector": ".ytp-ad-player-overlay",
                "videoPlayerSelector": ".html5-video-player",
                "videoSelector": ".html5-video-player video"
            }
        },
        {
            "id": "instagramMessage",
            "matches": [
                "https://www.instagram.com/direct/*"
            ],
            "selectors": [
                "div[dir=auto].html-div"
            ],
            "wrapperPrefix": "<br/>"
        },
        {
            "blockMinTextCount": 1,
            "excludeSelectors": [
                "hr+div span[dir=auto][style] > span"
            ],
            "id": "instagramPost",
            "matches": [
                "https://www.instagram.com/p/*",
                "https://www.instagram.com/reels/*"
            ],
            "paragraphMinTextCount": 2,
            "selectors": [
                "h1",
                "ul li h3+div span[dir=auto]",
                "hr+div span[dir=auto][style]",
                "div > div[dir=auto]",
                "div:not([class]) > div > div:nth-child(2)"
            ],
            "wrapperPrefix": "<br/>"
        },
        {
            "blockMinWordCount": 1,
            "id": "otherInstagram",
            "matches": "https://www.instagram.com/*",
            "paragraphMinTextCount": 2,
            "selectors": [
                "h1",
                "article span[dir=auto] > span[dir=auto]",
                "._ab1y",
                "ul li h3+div span[dir=auto]",
                "hr+div span[dir=auto][style]",
                "span[dir=auto] > div > span",
                "div > h1[dir=auto]"
            ],
            "wrapperSuffix": ""
        },
        {
            "id": "1paragraph",
            "matches": "1paragraph.app",
            "selectors": [
                "#book"
            ]
        },
        {
            "id": "poeditor",
            "matches": "https://poeditor.com/projects/*",
            "selectors": [
                ".comment-body",
                ".reference_language .source-string"
            ]
        },
        {
            "excludeSelectors": [
                "[style^=top]",
                ".publication-footer",
                ".subscribe-footer",
                ".main-menu",
                ".navbar-title-link",
                "[data-testid='navbar']",
                ".navbar-title",
                ".captioned-button-wrap",
                ".subscription-widget-wrap",
                ".tweet-header",
                ".tweet-link-bottom",
                ".expanded-link",
                ".meta-subheader",
                ".comment-meta",
                ".comment-actions"
            ],
            "extraBlockSelectors": [
                ".reader2-post-title",
                ".tweet-link-top",
                ".tweet-link-bottom",
                ".expanded-link"
            ],
            "globalStyles": {
                ".blurb-text": "max-height: unset;",
                ".comment-body": "max-height: unset;",
                ".reader2-clamp-lines": "max-height: unset; -webkit-line-clamp: unset;",
                "[class*='clamp-']": "max-height: unset; -webkit-line-clamp:unset;"
            },
            "id": "substack",
            "matches": [
                "*.substack.com",
                "newsletter.rootsofprogress.org"
            ],
            "selectorMatches": [
                "link[href^='https://substackcdn.com/bundle/'][rel=preload]"
            ]
        },
        {
            "excludeSelectors": [
                "[data-test-id=post-page-meta]",
                "header > div:first-child"
            ],
            "id": "seekingalpha",
            "matches": [
                "seekingalpha.com/article/*",
                "seekingalpha.com/news/*"
            ],
            "selectors": [
                "[data-test-id=card-container]",
                "[data-test-id=comments-section]"
            ]
        },
        {
            "id": "hnAlgolia",
            "matches": "hn.algolia.com",
            "selectors": [
                ".Story_title > a:first-child",
                ".Story_comment > span"
            ]
        },
        {
            "detectParagraphLanguage": true,
            "id": "readwise",
            "matches": "read.readwise.io",
            "selectors": [
                "div[class^='_titleRow_']",
                "#document-text-content"
            ]
        },
        {
            "excludeMatches": [
                "https://www.inoreader.com/features/"
            ],
            "globalStyles": {
                ".article_header_title": "white-space:normal",
                ".article_tile_content_wraper,div.article_tile": "overflow:auto",
                ".article_title_link,.library_article_text h4,.gadget_overview_article_title,.article_magazine_title_link,.reader_pane_view_style_2 .column_view_title": "-webkit-line-clamp: unset;max-height: unset;"
            },
            "id": "inoreader",
            "matches": [
                "www.inoreader.com",
                "*.inoreader.com"
            ],
            "observeUrlChange": false,
            "selectors": [
                ".article_header_title",
                ".article_title_link",
                ".article_content",
                ".article_magazine_title_link",
                ".blog-post-page",
                "#welcome_center",
                ".gad_overview_articles_wrapper",
                ".library_article_text h4",
                ".header_name"
            ]
        },
        {
            "excludeSelectors": [
                ".comment-header",
                ".vote-status",
                ".idea-meta",
                ".filters-title",
                ".ideas-showing-count",
                ".my-ideas-filters-wrapper",
                ".statuses-filters-wrapper",
                ".categories-filters-wrapper",
                "[class^='attachment']",
                "span[class^='attachment-name']"
            ],
            "id": "aha",
            "matches": "*.ideas.aha.io"
        },
        {
            "atomicBlockSelectors": [
                "h3 a[data-clk]"
            ],
            "extraInlineSelectors": [
                "br"
            ],
            "id": "googleScholar",
            "matches": [
                "scholar.google.*/*",
                "scholar.google.com.*/*",
                "scholar.google.co.*/*"
            ],
            "selectors": [
                "h3 a[data-clk]",
                "div.gs_rs",
                "td a.gsc_a_at",
                "td div.gs_gray:last-of-type",
                "div.gsc_oci_value",
                "#gs_opinion"
            ],
            "wrapperPrefix": "\n"
        },
        {
            "detectParagraphLanguage": true,
            "globalStyles": {
                "[role='listitem'] > div": "height:auto!important;white-space:unset!important;"
            },
            "id": "googleMail",
            "matches": "mail.google.com",
            "selectors": [
                "h2[data-thread-perm-id]",
                "span[data-thread-id]",
                "div[data-message-id] div[class='']",
                ".messageBody",
                "#views"
            ]
        },
        {
            "blockMinTextCount": 26,
            "blockMinWordCount": 5,
            "excludeSelectors": [
                ".EyERq",
                ".AOl7G.eejsDc",
                "[aria-label='Home']",
                "[aria-label='For you']",
                "[aria-label='Following']",
                "[aria-label='World']",
                "[aria-label='Local']",
                ".gb_Fc",
                ".wBQf7b",
                ".yPI8Rb",
                ".jKHa4e",
                ".u43Gd",
                ".Zgjpyb",
                "[role='button']",
                "[jsname='rymPhb']",
                ".cbz1ld",
                ".VfPpkd-P5QLlc",
                ".XvhY1d"
            ],
            "globalStyles": {
                ".MCAGUe": "height: auto;",
                ".To2ZZb.DbQnIe": "height: unset;",
                ".cp7Yvc > h2": "display: block;",
                ".oovtQ": "height: auto;",
                "h4": "-webkit-line-clamp: unset;"
            },
            "id": "googleNews",
            "matches": "news.google.com"
        },
        {
            "excludeSelectors": [
                ".jHAG3.XG5Jd",
                ".OZZZK",
                ".lDdSm"
            ],
            "id": "outlook",
            "matches": "outlook.live.com"
        },
        {
            "excludeMatches": "https://www.producthunt.com/stories/*",
            "excludeTags.remove": [
                "PRE"
            ],
            "globalStyles": {
                ".noOfLines-1,.noOfLines-2,.noOfLines-3": "-webkit-line-clamp:unset;",
                "h5 + p": "height:unset;"
            },
            "id": "producthunt",
            "matches": "www.producthunt.com",
            "selectors": [
                "h2",
                "div[class^='styles_htmlText__']",
                "[class^='styles_tagline']",
                "a[href^='/discussions/'].fontWeight-600",
                "button[class^='styles_textButton'] > div > span",
                "h5 + p",
                "div[data-test=product-item-name] + div",
                ".noOfLines-1,.noOfLines-2,.noOfLines-3",
                ".fontWeight-600",
                "[class*='styles_dropdown']",
                "[class*='styles_aboutText']",
                "[class*='styles_titleContainer']",
                "[class*='styles_header'] h1"
            ]
        },
        {
            "id": "codeforces",
            "matches": "https://codeforces.com/*",
            "stayOriginalTags.add": [
                "[class^='MathJax']"
            ]
        },
        {
            "detectParagraphLanguage": true,
            "extraBlockSelectors": [
                "[class^='embedFieldValue']",
                "li[class^='card'] div[class^='message']",
                "[data-list-item-id^='forum-channel-list'] div[class^='headerText']"
            ],
            "globalStyles": {
                "div[class^=headerText]": "max-height: unset;",
                "div[class^=message]": "max-height: unset;",
                "div[class^=text]": "max-height: unset;",
                "h3[data-text-variant='heading-lg/semibold']": "-webkit-line-clamp: none;"
            },
            "id": "discord",
            "isTranslateTitle": false,
            "matches": "https://discord.com/channels/*",
            "paragraphMinTextCount": 4,
            "paragraphMinWordCount": 2,
            "selectors": [
                "li[id^=chat-messages] div[id^=message-content]",
                "div[class^=headerText]",
                "section[aria-label='Search Results'] div[id^=message-content]"
            ],
            "wrapperPrefix": "<br />",
            "wrapperSuffix": ""
        },
        {
            "detectParagraphLanguage": true,
            "excludeSelectors": [
                ".time",
                ".peer-title",
                ".document-wrapper",
                ".message.spoilers-container custom-emoji-element"
            ],
            "extraBlockSelectors.add": [
                ".message.spoilers-container em",
                ".message.spoilers-container strong"
            ],
            "id": "telegram",
            "isTranslateTitle": false,
            "matches": [
                "web.telegram.org/z/*",
                "web.telegram.org/a/*"
            ],
            "selectors": [
                ".text-content",
                ".message",
                ".reply-markup-button-text",
                ".bot-commands-list-element-description"
            ]
        },
        {
            "detectParagraphLanguage": true,
            "excludeSelectors": [
                ".time",
                ".peer-title",
                ".document-wrapper",
                ".message.spoilers-container custom-emoji-element"
            ],
            "extraBlockSelectors.add": [
                ".message.spoilers-container em",
                ".message.spoilers-container strong"
            ],
            "id": "telegramK",
            "matches": [
                "web.telegram.org/k/*",
                "web.telegram.org/k/"
            ],
            "selectors": [
                ".message",
                ".reply-markup-button-text",
                ".bot-commands-list-element-description"
            ]
        },
        {
            "detectParagraphLanguage": true,
            "id": "githubGist",
            "matches": "gist.github.com",
            "selectors": [
                ".markdown-body",
                ".readme"
            ]
        },
        {
            "excludeMatches": [
                "https://lobste.rs/about",
                "https://lobste.rs/chat"
            ],
            "id": "lobste",
            "matches": "lobste.rs",
            "selectors": [
                ".u-repost-of",
                ".comment_text",
                ".story_text"
            ]
        },
        {
            "additionalStayOriginalSelectors": [
                "[data-qa=emoji]"
            ],
            "detectParagraphLanguage": true,
            "id": "slack",
            "matches": "*.slack.com",
            "selectors": [
                ".p-rich_text_block",
                ".p-message_pane__foreword",
                ".c-alert__message",
                "[data-qa=message_attachment_text]"
            ]
        },
        {
            "detectParagraphLanguage": true,
            "excludeSelectors": ".project-description a",
            "id": "artstationArtwork",
            "matches": "www.artstation.com/artwork/*",
            "selectors": [
                ".project-description",
                "div.project-comment-text"
            ]
        },
        {
            "additionalSelectors": [
                "footer.learning-course-description.ng-star-inserted > span"
            ],
            "excludeSelectors": [
                ".learning-card-meta",
                ".vjs-text-track-display"
            ],
            "id": "artstationLearning",
            "matches": "www.artstation.com/learning/courses/*",
            "mutationExcludeSelectors.add": [
                ".vjs-text-track-display *"
            ],
            "subtitleRule.add": {
                "attachRule": {
                    "appendSelector": ".video-js",
                    "injectedGlobalCSS": [
                        ".vjs-text-track-display {display: none;}",
                        ".captions-text: {margin-bottom: 10%;}"
                    ]
                },
                "loadingContainerSelector": ".vjs-text-track-display",
                "quickButtonRule": {
                    "appendSelector": ".vjs-control-bar",
                    "injectCSS": ".imt-quick-subtitle-button { font-size: 12px;} .logo,.logo svg { height: 18px !important; width: 18px !important;} .imt-quick-subtitle-pop-content {bottom: 38px !important;}",
                    "insertBeforeSelector": ".vjs-playback-rate"
                },
                "subtitleUrlRegExp": "/subtitles/.*\\.(vtt|webvtt)$",
                "type": "webvtt",
                "videoSelector": "video"
            }
        },
        {
            "additionalSelectors": [
                ".comment-item-body"
            ],
            "atomicBlockSelectors": [
                ".author-headline",
                ".author-location"
            ],
            "detectParagraphLanguage": true,
            "excludeSelectors": [
                "blog-card-thumbnail",
                "blog-card-header",
                ".blog-card-author",
                ".blog-card-meta",
                ".blog-view-header",
                ".blog-grid-title",
                ".post-meta-header"
            ],
            "id": "artstationBlog",
            "matches": [
                "https://www.artstation.com/blogs",
                "https://www.artstation.com/blogs/*"
            ]
        },
        {
            "additionalSelectors": [
                "div[class*='mini_cardBottomRow_Metadata']"
            ],
            "excludeSelectors": [
                "div[class*='metadataRight']",
                "div[class*='commentMetaAndOptions']"
            ],
            "globalStyles": {
                "div[class*='mini_cardBottomRowSizing']": "height: 3em;"
            },
            "id": "figmaCommunity",
            "matches": "www.figma.com/community/*",
            "normalizeBody": "div.ql-editor[contenteditable='false']",
            "stayOriginalSelectors": [
                "[data-tooltip='tooltip-user-info']"
            ]
        },
        {
            "excludeSelectors": [
                "#gb",
                "#SIvCob"
            ],
            "id": "googleIndex",
            "inputConfig.add": {
                "tutorialsSelectors": [
                    "textarea#APjFqb"
                ],
                "tutorialsText": "试试输入中文后快速连击 3 次空格键翻译（仅提示一次）"
            },
            "inputTutorialsSelectors": [
                "textarea#APjFqb"
            ],
            "inputTutorialsText": "试试输入中文后快速连击 3 次空格键翻译（仅提示一次）",
            "matches": [
                "https://www.google.com/",
                "https://www.google.com.hk/"
            ]
        },
        {
            "additionalExcludeSelectors.add": [
                "[jscontroller='UsftYd']"
            ],
            "blockMinTextCount": 32,
            "blockMinWordCount": 3,
            "detectParagraphLanguage": true,
            "excludeSelectors": [
                "a h3 + div",
                "div#sfooter",
                "a[role=presentation] > div > div:first-child",
                ".b5ZQcf",
                ".CEMjEf",
                ".MgUUmf.NUnG9d",
                "#result-stats",
                "[role=navigation]",
                "div.sCuL3",
                "div.eFM0qc.BCF2pd",
                "div.WZ8Tjf",
                "div.adDDi",
                "#headerSection",
                "#rateChatDiv",
                "[id=bres]",
                ".title-D5Lgyj",
                "[data-attrid='VisualDigestVideoResult']",
                ".search-enhance-WDIEkP h4",
                ".SPZz6b h2",
                ".CtCigf",
                ".VLkRKc",
                ".EbH0bb",
                ".Wr0c6d",
                ".jleFbf",
                "#searchform",
                ".yg51vc",
                ".CbAZb"
            ],
            "extraBlockSelectors": [
                ".MUFPAc"
            ],
            "globalStyles": {
                ".Pw4Ldf.RsCEN": "height:unset;",
                ".V82bz": "-webkit-line-clamp: unset;max-height: unset;margin-bottom:30px",
                ".pe7FNb": "-webkit-line-clamp: unset;",
                ".promotion-3PDMAb": "display: none;",
                ".related-question-pair": "overflow:auto;",
                ".uAKcGb": "-webkit-line-clamp: unset;max-height: unset;margin-bottom:30px",
                "div[data-content-feature='1'] > div": "-webkit-line-clamp: unset;max-height: unset;",
                "div[style='-webkit-line-clamp:2']": "-webkit-line-clamp: unset;max-height: unset;",
                "div[style='-webkit-line-clamp:3']": "-webkit-line-clamp: unset;max-height: unset;",
                "div[style='-webkit-line-clamp:4']": "-webkit-line-clamp: unset;max-height: unset;"
            },
            "id": "googleSearch",
            "ignoreZhCNandZhTW": true,
            "isTranslateTitle": false,
            "matches": "www.google.*/search*",
            "searchEnhancementConfig": [
                {
                    "id": "google",
                    "keyword": {
                        "matches": [
                            {
                                "matchRegex": "q=(.+?)&",
                                "source": "url"
                            }
                        ],
                        "value": "[0]$1"
                    },
                    "showCount": 5,
                    "style": {
                        "enTitle": "margin-top:6px;font-size:14px;",
                        "enTitleClassName": "immersive-translate-search-enhancement-en-title",
                        "more": "color:#1a0dab;margin-top:8px;",
                        "searchTitle": "margin-top:6px;position:relative;padding-right:24px;",
                        "source": "font-size:12px; margin-bottom: 6px;"
                    },
                    "urlMatch": "https://www\\.google\\..+/search"
                }
            ],
            "wrapperSuffix": ""
        },
        {
            "id": "lowendtalk",
            "matches": "lowendtalk.com",
            "selectors": [
                "[role=heading]",
                "h1",
                ".userContent"
            ]
        },
        {
            "id": "linkedinFeed",
            "matches": "https://linkedin.com/feed/*",
            "selectors": [
                "h1",
                ".feed-shared-update-v2__description-wrapper"
            ]
        },
        {
            "id": "indiehackers",
            "matches": "www.indiehackers.com",
            "selectors": [
                ".content",
                "h1",
                "h3.story__title",
                ".feed-item__title-link",
                ".article-body",
                ".interview-body"
            ]
        },
        {
            "id": "libreddit",
            "matches": "libreddit.de",
            "selectors": [
                "h2.post_title",
                ".comment_body > .md"
            ]
        },
        {
            "id": "notionSite",
            "matches": [
                "notion.site",
                "*.notion.site"
            ],
            "normalizeBody": "body",
            "selectors": [
                "div[data-block-id]"
            ]
        },
        {
            "id": "notion_so",
            "injectedCss": [
                "[aria-label='Templates'] font br {display:none;}"
            ],
            "matches": [
                "www.notion.so"
            ]
        },
        {
            "additionalSelectors": [
                "h1",
                "[data-testid=SummaryItemHed]"
            ],
            "excludeSelectors": [
                "[data-testid=PersistentTop]",
                "[data-testid=StackedNavigationHeader]"
            ],
            "id": "newyorker",
            "matches": "www.newyorker.com",
            "urlChangeDelay": 2000
        },
        {
            "id": "startme",
            "matches": "start.me",
            "selectors": [
                ".rss-article__title",
                ".rss-articles-list__article-link",
                ".rss-showcase__title",
                ".rss-showcase__text"
            ]
        },
        {
            "additionalSelectors": [
                ".info__subHeadline",
                ".section-content h2"
            ],
            "bodyRule.add": {
                "articleSelector": "[data-qa='GenericArticle-Content']",
                "bodySelector": "[data-qa='ArticleList-Item']",
                "xpathRule": [
                    "datatype:p"
                ]
            },
            "globalStyles": {
                ".adverisers__adveriser": "height: unset;",
                ".advertiser__content": "height: unset;",
                ".content-title__link": "display:unset;overflow:unset;-webkit-line-clamp:unset;",
                ".news-list-item__news-title": "max-height:unset; -webkit-line-clamp:unset;",
                ".title__text": "max-height:unset; -webkit-line-clamp:unset;",
                ".topic__article-list": "height: unset;",
                "a[class*='link'] > .link__headline": "max-height:unset; -webkit-line-clamp:unset;"
            },
            "id": "scmp",
            "matches": "www.scmp.com"
        },
        {
            "extraBlockSelectors": [
                "span.commentOnSelection"
            ],
            "id": "lesswrong",
            "matches": "www.lesswrong.com"
        },
        {
            "detectLanguage": true,
            "globalAttributes": {
                "[class='notranslate app-holder']": {
                    "class": "app-holder"
                }
            },
            "id": "mastodon",
            "isTranslateTitle": false,
            "matches": [
                "mastodon.social",
                "mastodon.online",
                "kolektiva.social",
                "indieweb.social",
                "mastodon.world",
                "infosec.exchange"
            ],
            "selectorMatches": [
                "div#mastodon"
            ],
            "selectors": [
                "div.status__content__text",
                ".about__section__body",
                ".content",
                ".form-container",
                ".account__header__extra"
            ]
        },
        {
            "excludeSelectors.add": [
                "#GlobalNavigation",
                "#GlobalFooter",
                ".LiveBlogHeader-timestampAndShareBarContainer",
                ".LiveBlogHeader-liveUpdatesPill"
            ],
            "globalStyles": {
                "div.Card-titleContainer > div": "-webkit-line-clamp: unset;max-height: unset;"
            },
            "id": "cnbc",
            "matches": "www.cnbc.com",
            "urlChangeDelay": 1000
        },
        {
            "globalStyles": {
                ".line-clamp-3": "-webkit-line-clamp: unset"
            },
            "id": "dailyDev",
            "matches": "app.daily.dev",
            "selectors": [
                "h1",
                ".typo-body",
                "article h3",
                "[class^=markdown_markdown]"
            ]
        },
        {
            "detectParagraphLanguage": true,
            "excludeMatches": [
                "*.pornhub.com/insights/*",
                "pornhub.com/insights/*"
            ],
            "extraBlockSelectors": [
                ".trendingNow",
                ".searchItem",
                ".tagcloud > a"
            ],
            "globalStyles": {
                ".detailedInfo": "max-height:unset;",
                ".entry-header": "height:unset;",
                ".entry-title > a": "height:unset;-webkit-line-clamp:unset;",
                ".pcVideoListItem": "max-height:unset;",
                ".wrap": "height:unset;",
                "span.title": "height:unset; max-height:unset;"
            },
            "id": "pornhub",
            "matches": [
                "*.pornhub.com",
                "pornhub.com"
            ],
            "wrapperPrefix": "<br/>",
            "wrapperSuffix": "\n"
        },
        {
            "extraBlockSelectors": [
                ".button"
            ],
            "globalStyles": {
                ".video-box": "max-height:unset;",
                ".video-box-title": "white-space:unset;"
            },
            "id": "yourporn",
            "matches": "https://www.youporn.com/*"
        },
        {
            "globalStyles": {
                ".videoTitle": "height:unset;",
                "a": "height:unset;"
            },
            "id": "modelhub",
            "matches": "https://www.modelhub.com/*"
        },
        {
            "excludeSelectors": [
                ".video-hd-mark"
            ],
            "globalStyles": {
                ".mozaique": "display:flex; flex-wrap:wrap;",
                ".title": "-webkit-line-clamp:unset;max-height:unset;"
            },
            "id": "xvideos",
            "matches": "https://www.xvideos.com/*"
        },
        {
            "globalStyles": {
                ".overflow-y-hidden": "max-height:unset;overflow-y:unset;",
                ".truncate": "white-space:unset;"
            },
            "id": "missav",
            "matches": "https://missav.com/*",
            "subtitleRule.add": {
                "attachRule": {
                    "appendSelector": ".plyr--video",
                    "injectedGlobalCSS": ""
                },
                "avSerial": {
                    "regexStr": ".+/([a-z0-9-]+)$",
                    "type": "url"
                },
                "quickButtonRule": {
                    "appendSelector": ".plyr__controls",
                    "insertBeforeSelector": "[data-plyr=\"captions\"]"
                },
                "type": "av2",
                "videoSelector": ".plyr__video-wrapper video"
            }
        },
        {
            "excludeSelectors": [
                ".item-tag",
                "date"
            ],
            "globalStyles": {
                ".photo-info": "height:unset;"
            },
            "id": "javbus",
            "matches": "https://www.javbus.com/*"
        },
        {
            "excludeSelectors": [
                ".stats",
                ".thumb"
            ],
            "extraBlockSelectors": [
                ".searches > a",
                ".tag > a",
                ".extra > a",
                ".positions > li"
            ],
            "globalStyles": {
                ".video-item > a": "white-space:unset;"
            },
            "id": "spankbang",
            "matches": "https://spankbang.com/*"
        },
        {
            "excludeSelectors": [
                ".video-number",
                ".score",
                ".has-addons"
            ],
            "globalStyles": {
                ".video-title": "white-space:unset;"
            },
            "id": "javdb",
            "matches": "https://javdb*.com/*"
        },
        {
            "globalStyles": {
                ".img-box > a": "position:relative;",
                ".title": "white-space:unset;max-height:unset;"
            },
            "id": "jable",
            "matches": "https://jable.tv/*"
        },
        {
            "id": "netflav.player",
            "mainFrameMinTextCount": 0,
            "matches": [
                "https://netflavns1.com",
                "https://embedrise.com"
            ],
            "subtitleRule.add": {
                "attachRule": {
                    "appendSelector": "#vplayer"
                },
                "avSerial": {
                    "regexStr": "code=([a-z0-9-]+)",
                    "type": "url"
                },
                "quickButtonRule": {
                    "appendSelector": "#vplayer .jw-button-container",
                    "insertBeforeSelector": "#vplayer .jw-button-container .jw-icon-cc"
                },
                "type": "av2",
                "videoSelector": "#vplayer video"
            }
        },
        {
            "extraBlockSelectors": [
                ".genre_filter_item",
                "button"
            ],
            "globalStyles": {
                ".grid_title": "max-height:unset;"
            },
            "id": "netflav",
            "matches": [
                "https://netflav*.com/*"
            ],
            "subtitleRule.add": {
                "avSerial": {
                    "selector": ".videodetail_2_field_values",
                    "serialAttachIframe": "#iframe-block",
                    "type": "selector"
                },
                "type": "av2"
            }
        },
        {
            "globalAttributes": {
                "header": {
                    "translate": "unset;"
                }
            },
            "globalStyles": {
                ".short-story": "height:unset;",
                ".short-title": "height:unset;"
            },
            "id": "czechvideo",
            "matches": "https://czechvideo.co/*"
        },
        {
            "id": "weibo",
            "matches": [
                "weibo.com",
                "*.weibo.*"
            ],
            "selectors": [
                "div[class^='detail_wbtext']",
                ".weibo-text"
            ],
            "stayOriginalSelectors.add": [
                ".expand"
            ]
        },
        {
            "additionalExcludeSelectors.remove": [
                "i.fa",
                "i[class^=fa-]",
                ".navmenu-container",
                ".google-symbols"
            ],
            "excludeSelectors": [
                "[aria-label='Post Preview Reading Time']",
                ".al.b.bl.ag.bp",
                ".al.b.bl.ag.ai",
                ".hx.hy.hz.ia.ib.ab",
                ".qb.ab",
                ".ai.bn.n.mj",
                ".speechify-ignore"
            ],
            "globalStyles": {
                "article p": "-webkit-line-clamp: unset;max-height:unset;",
                "h2,h3": "-webkit-line-clamp: unset;max-height:unset;"
            },
            "id": "medium",
            "injectedCss": [
                ".u-lineClamp4,.u-lineClamp3,.u-lineClamp2 {-webkit-line-clamp:unset!important;max-height:unset!important;}"
            ],
            "matches": [
                "medium.com",
                "*.medium.com"
            ],
            "selectorMatches": [
                "meta[property='al:ios:url'][content^='medium://']"
            ],
            "selectors": [
                "h1",
                "h2",
                "h3",
                "article section",
                "[aria-hidden='false'] pre",
                "article p",
                ".postMetaInline",
                "a .u-fontSize24"
            ],
            "urlChangeDelay": 20
        },
        {
            "id": "nitter",
            "selectorMatches": [
                "meta[property='og:site_name'][content='Nitter']"
            ],
            "selectors": [
                ".tweet-content",
                ".quote-text"
            ]
        },
        {
            "excludeSelectors": [
                "footer.ds-footer"
            ],
            "extraInlineSelectors": [
                "span[data-caps='initial']"
            ],
            "id": "economist",
            "injectedCss": [
                "a::before {position:relative!important;}"
            ],
            "matches": "www.economist.com"
        },
        {
            "excludeSelectors": [
                ".icon-hl-trusted-source-after"
            ],
            "id": "healthline",
            "matches": "www.healthline.com"
        },
        {
            "excludeSelectors": [
                "headers",
                "[itemprop=offers]",
                ".dne-itemtile-original-price"
            ],
            "globalStyles": {
                ".merch-item-title": "-webkit-line-clamp: unset;max-height: unset;",
                "[itemprop=name]": "-webkit-line-clamp: unset;max-height: unset;"
            },
            "id": "ebay",
            "matches": "www.ebay.com",
            "paragraphMinTextCount": 4,
            "paragraphMinWordCount": 2
        },
        {
            "excludeSelectors": [
                ".responsiveFlyoutMenu_levelOneLink"
            ],
            "id": "skinstore",
            "matches": "www.skinstore.com",
            "paragraphMinTextCount": 4,
            "paragraphMinWordCount": 2
        },
        {
            "id": "tripadvisor",
            "matches": "www.tripadvisor.com",
            "paragraphMinTextCount": 4,
            "paragraphMinWordCount": 2
        },
        {
            "excludeSelectors.add": [
                "#dv-web-player"
            ],
            "id": "primevideo",
            "matches": [
                "www.primevideo.com",
                "https://*.amazon.co.*/*video*",
                "https://*.amazon.com/*video*"
            ],
            "mutationExcludeSelectors.add": [
                "#dv-web-player *"
            ],
            "subtitleRule.add": {
                "hookType": "xhr",
                "loadingContainerSelector": "#dv-web-player",
                "subtitleUrlRegExp": "\\.ttml2$",
                "type": "ebutt"
            }
        },
        {
            "excludeSelectors": [
                "#navFooter",
                "#navbar-main",
                ".s-price-instructions-style",
                "[class*='-star ']",
                "[data-hook='acr-average-stars-rating-text']",
                ".a-color-price"
            ],
            "extraBlockSelectors": [
                ".a-size-small.a-link-normal.page-banner-link.a-nowrap"
            ],
            "globalStyles": {
                ".a-carousel-viewport": "height:unset;",
                "[class*='clamp']": "max-height: unset;-webkit-line-clamp: unset;",
                "[data-a-expander-name='review_text_read_more']": " max-height: unset;",
                "[data-rows]": "max-height: unset;-webkit-line-clamp: unset;"
            },
            "id": "amazon",
            "matches": "www.amazon.com",
            "paragraphMinTextCount": 4,
            "paragraphMinWordCount": 2
        },
        {
            "additionalExcludeSelectors": [
                ".core-info-second-row",
                ".core-info-third-row",
                ".meta-data-list",
                ".item-title",
                ".breadcrumb",
                ".itemDetails-right",
                ".ux-user-name",
                ".ux-updated-date",
                ".ux-item-second-row-wrapper",
                ".stats-and-offer",
                ".header-container"
            ],
            "atomicBlockSelectors": [
                ".core-info-cell > div.name"
            ],
            "globalStyles": {
                ".item-details-control-root.ux-item-shortdesc": "height: unset; overflow: visible; max-height:unset;"
            },
            "id": "visualstudioMarketplace",
            "matches": "marketplace.visualstudio.com"
        },
        {
            "bodyRule.add": {
                "articleSelector": ".body-content",
                "bodySelector": "main article"
            },
            "excludeSelectors": [
                ".ticker-bar",
                "nav",
                "[aria-label=Banner]",
                "aside",
                "[data-component=ticker-bar]",
                "footer.bb-global-footer",
                ".vjs-text-track-display"
            ],
            "id": "bloomberg",
            "matches": "www.bloomberg.com",
            "subtitleRule.add": {
                "loadingContainerSelector": ".vjs-text-track-display",
                "quickButtonRule": {
                    "appendSelector": ".vjs-control-bar",
                    "insertBeforeSelector": ".vjs-playback-rate"
                },
                "subtitleUrlRegExp": "webvtt$",
                "type": "webvtt"
            },
            "urlChangeDelay": 2000
        },
        {
            "globalStyles": {
                ".abstract_wr": "height: unset; overflow: visible; max-height:unset;"
            },
            "id": "baiduXueshu",
            "matches": "xueshu.baidu.com"
        },
        {
            "extraBlockSelectors": [
                "span.captions",
                "span[id^=cap]"
            ],
            "globalAttributes": {
                "#abspara0010 br": {
                    "style": "display:none;"
                }
            },
            "id": "sciencedirect",
            "matches": "www.sciencedirect.com",
            "stayOriginalSelectors": [
                "span.display",
                "span.math"
            ],
            "urlChangeDelay": 2000
        },
        {
            "extraBlockSelectors": "div",
            "id": "thehighestofthemountains",
            "matches": "www.thehighestofthemountains.com"
        },
        {
            "id": "telegraph1",
            "matches": "te.legra.ph",
            "normalizeBody": "div.ql-editor[contenteditable='false']",
            "urlChangeDelay": 500
        },
        {
            "id": "telegraph2",
            "matches": [
                "telegra.ph"
            ],
            "normalizeBody": "div.ql-editor[contenteditable='false']",
            "wrapperPrefix": "\n"
        },
        {
            "extraBlockSelectors": [
                "a.custom-a"
            ],
            "globalStyles": {
                "div[id^='link-index-']": "height: unset; max-height: unset;",
                "main div[class*='h-[125]']": "height:auto"
            },
            "id": "annasArchive",
            "matches": [
                "*.annas-archive.org",
                "annas-archive.org"
            ],
            "normalizeBody": "body",
            "selectors": []
        },
        {
            "id": "explainshell",
            "matches": [
                "explainshell.com"
            ],
            "selectors": [
                "[class='help-box']"
            ]
        },
        {
            "id": "apnews",
            "matches": [
                "apnews.com"
            ],
            "urlChangeDelay": 2000
        },
        {
            "excludeSelectors": [
                ".vlGucd",
                ".ubGTjb"
            ],
            "globalStyles": {
                ".Epkrse": "-webkit-line-clamp:unset;"
            },
            "id": "googlePlay",
            "matches": "play.google.com"
        },
        {
            "excludeSelectors": [
                "div.fAAi8",
                "div.wvu3V"
            ],
            "id": "tumblr",
            "matches": [
                "www.tumblr.com"
            ],
            "preWhitespaceDetectedTags": [
                "DIV",
                "SPAN",
                "P"
            ],
            "selectors": [
                "article h1",
                "article > header + div",
                "[data-testid=notes-root] p",
                "div.k31gt",
                "p",
                "article ul",
                "article h2",
                "article h3",
                "article h4",
                "article h5",
                "article h6",
                "article blockquote",
                "article ol"
            ]
        },
        {
            "globalStyles": {
                "table > tbody > tr > td > center > table > tbody > tr > td > ul > li": "height: 100%"
            },
            "id": "tinytask",
            "matches": "https://www.tinytask.net"
        },
        {
            "excludeSelectors": [
                ".site-footer",
                ".components-MessageDetails-index__message-details-wrapper",
                "div[class^=SlideDown__container]",
                ".components-MessageActions-index__messageActionsWrapper",
                "span[data-openweb-allow-amp]",
                "div.spcv_typing-users"
            ],
            "excludeTags.add": [
                "TEXT",
                "IMG",
                "SUB",
                "SUP",
                "CODE",
                "TT",
                "ASIDE"
            ],
            "id": "foxnews",
            "matches": "www.foxnews.com",
            "shadowRootSelectors": [
                "[data-spot-im-module-default-area='conversation'] > div"
            ]
        },
        {
            "globalStyles": {
                "a.title": "max-height:unset;-webkit-line-clamp:unset;"
            },
            "id": "afreecatv",
            "matches": "www.afreecatv.com"
        },
        {
            "excludeTags.add": [
                "LABEL",
                "IMG",
                "SUB",
                "SUP",
                "CODE",
                "TT"
            ],
            "excludeTags.remove": [
                "LINK",
                "G",
                "MATH",
                "TTS-SENTENCE",
                "AIO-CODE"
            ],
            "id": "opennet",
            "matches": "opennet.ru"
        },
        {
            "additionalExcludeSelectors": [
                "div.topNav",
                "div.usernameLink",
                "ul.authorDetails",
                "ul.tagViewer",
                "ul.breadCrumbNav",
                "ul.subForumForums",
                "ul.postTools",
                "li.comment ul.controls",
                "div.forumTopNavWrap",
                "div.downloadWrap",
                "div.articleLeftMenu",
                "div.usernameTextWrap",
                "div.favouriteWrap",
                "div.bannerWrapper",
                "div.viewAddonRightMenu",
                "div.extendedMenu.addonsSubMenu",
                "#BottomLinks.bottomLinks",
                "div#LeftSide.leftSide",
                "div#BottomWrap.bottomWrap",
                "div.courseListWrap div.overview",
                "div.conversationControls",
                "div.contentWrapper h1",
                "div.conversationControls",
                "td.location a#LocationLink",
                "#TopLevelComments .topBar",
                "#TopLevelComments .controls",
                ".tagViewWrap",
                ".changeCount",
                ".otherStats",
                ".FilterMenu",
                ".mobileTopicStats",
                ".forumControlsWrapper",
                ".forumsBottomNavWrap",
                ".breadCrumbNav",
                ".favouriteWrap",
                ".usernameLink",
                ".followWrapper",
                ".blogPostStats",
                ".manualContent dl dt"
            ],
            "additionalInlineSelectors": [
                "a.forumLink"
            ],
            "additionalSelectors": [
                "aside",
                "div.manualContent"
            ],
            "atomicBlockSelectors": [],
            "excludeMatches": [
                "preview.construct.net",
                "editor.construct.net"
            ],
            "globalStyles": {
                "div.articleMain .tutCourseWrap": "align-items: flex-start;",
                "td.location a#LocationLink": "padding-top: 4px;"
            },
            "id": "construct",
            "matches": [
                "www.construct.net"
            ],
            "stayOriginalSelectors": [
                "a.usernameReference"
            ]
        },
        {
            "globalStyles": {
                "div.excerpt p": "max-height:unset;-webkit-line-clamp:unset;",
                "h2.title": "max-height:unset;-webkit-line-clamp:unset;"
            },
            "id": "getpocket",
            "matches": "getpocket.com",
            "selectors": [
                "h2",
                "div.excerpt p",
                "article",
                "h1"
            ]
        },
        {
            "additionalExcludeSelectors": [
                "header.fandom-community-header",
                "div.ph-registration-buttons"
            ],
            "globalStyles": {
                "#mw-content-text > div > div:nth-child(1)": "height:100%;"
            },
            "id": "fandom",
            "matches": "*.fandom.com",
            "normalizeBody": "#mw-content-text",
            "urlChangeDelay": 800
        },
        {
            "globalStyles": {
                ".line-clamp-2": "-webkit-line-clamp:unset;max-height:unset;"
            },
            "id": "huggingface",
            "matches": "huggingface.co"
        },
        {
            "globalStyles": {
                ".itemContent__subline": "height:unset;max-height:unset;",
                ".itemContent__text": "height:unset;max-height:unset;"
            },
            "id": "statista",
            "matches": "www.statista.com"
        },
        {
            "atomicBlockSelectors": [
                "div.slide-contents-item"
            ],
            "globalStyles": {
                "span.slide-contents-item-label": "overflow:visible;max-height:unset;white-space:normal;"
            },
            "id": "epubReader",
            "matches": "epub-reader.online"
        },
        {
            "excludeSelectors": [
                "div.hpIWZO"
            ],
            "globalStyles": {
                ".caKYaC": "max-height:unset;-webkit-line-clamp:unset;",
                ".dDwDsu": "max-height:unset;-webkit-line-clamp:unset;",
                "h3": "max-height:unset;-webkit-line-clamp:unset;"
            },
            "id": "you",
            "matches": "https://you.com/search"
        },
        {
            "excludeSelectors": [
                "form",
                "header > h1"
            ],
            "id": "auth0Openai",
            "matches": "auth0.openai.com"
        },
        {
            "aiRule": {
                "messageWrapperSelector": ".markdown",
                "streamingChange": true,
                "streamingDeepChild": true,
                "streamingDelayTime": 1000,
                "streamingSelector": ".result-streaming.markdown"
            },
            "excludeSelectors": [
                "div.absolute.bottom-0.left-0.w-full",
                "h1",
                "div#headlessui-portal-root",
                "nav",
                "ul[aria-multiselectable]",
                ".markdown *",
                "div[class='flex flex-col items-start']",
                "div[class='flex items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300']"
            ],
            "excludeTags.remove": [
                "BUTTON"
            ],
            "globalStyles": {
                "[class*='line-clamp']": "max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"
            },
            "id": "chatOpenai",
            "isTranslateTitle": false,
            "matches": "chat.openai.com",
            "wrapperPrefix": ""
        },
        {
            "aiRule": {
                "messageWrapperSelector": ".Markdown_markdownContainer__Tz3HQ",
                "streamingChange": false,
                "streamingDeepChild": true,
                "streamingDelayTime": 1000,
                "streamingSelector": ".ChatStopMessageButton_stopButton__LWNj6"
            },
            "excludeSelectors": [
                ".Markdown_markdownContainer__Tz3HQ *",
                ".MarkdownLink_linkifiedLink__KxC9G",
                "menu",
                "aside"
            ],
            "id": "poe",
            "matches": [
                "https://poe.com/*"
            ]
        },
        {
            "excludeSelectors": [
                ".home_overview_list_content_wrapper"
            ],
            "id": "glasp",
            "matches": "glasp.co"
        },
        {
            "excludeSelectors": [
                "web-tabs",
                "ul.code-sections--summary"
            ],
            "id": "developerChrome",
            "matches": "developer.chrome.com"
        },
        {
            "additionalSelectors": [
                "aside",
                "google-codelab-step"
            ],
            "id": "android",
            "matches": [
                "developer.android.google.cn",
                "developer.android.com"
            ],
            "observeUrlChange": true
        },
        {
            "excludeSelectors": [
                "header",
                "[aria-labelledby=cookie-banner-aria-label]",
                "footer",
                "[aria-label='Primary navigation']"
            ],
            "id": "ft",
            "matches": "www.ft.com"
        },
        {
            "additionalSelectors": [
                "pre"
            ],
            "globalStyles": {
                ".line-clamp": "-webkit-line-clamp:unset;max-height:unset;"
            },
            "id": "microsoft",
            "isTransformPreTagNewLine": true,
            "matches": "https://apps.microsoft.com/store/detail/*"
        },
        {
            "excludeSelectors": [
                ".tree-content-holder",
                "nav",
                ".home-panel-metadata",
                "div[data-testid=project_topic_list]",
                ".commit"
            ],
            "id": "gitlab",
            "matches": "gitlab.com"
        },
        {
            "id": "tiktok",
            "matches": "https://www.tiktok.com/*/video/*",
            "selectors": [
                "[data-e2e^=comment-level]",
                "[data-e2e=browse-video-desc] > span"
            ]
        },
        {
            "excludeTags.add": [
                "IMG",
                "SUB",
                "SUP",
                "CODE",
                "TT",
                "ASIDE",
                "FOOTER"
            ],
            "excludeTags.remove": [
                "LINK",
                "G",
                "PRE",
                "TTS-SENTENCE",
                "AIO-CODE"
            ],
            "id": "rfcEditor",
            "isTransformPreTagNewLine": true,
            "matches": [
                "www.rfc-editor.org",
                "docs.haproxy.org"
            ]
        },
        {
            "excludeSelectors": [
                ".forum_paging",
                ".forum_topic_reply_count",
                ".forum_topic_lastpost",
                ".forum_topic_award_count",
                ".discussion_search_pagingcontrols"
            ],
            "globalStyles": {
                ".forum_topic,.rightbox_list_option": "height:auto;",
                ".forum_topic_name": "white-space:normal;line-height: 1.25rem; padding: 6px 20px 0 0;",
                ".forum_topic_op": "clear: left; padding: 0 0 6px 2rem;"
            },
            "id": "steamcommunity",
            "matches": "steamcommunity.com"
        },
        {
            "additionalSelectors": [
                ".game_page_autocollapse_ctn iframe"
            ],
            "atomicBlockSelectors": [
                ".game_area_sys_req_leftCol",
                ".game_area_sys_req_rightCol"
            ],
            "detectParagraphLanguage": true,
            "excludeSelectors": [
                "#global_actions",
                "#store_controls",
                "#foryou_tab",
                "[class*=persona]",
                "[class*=game_title_area]",
                "a.btn_medium",
                ".persona_name",
                ".hours.ellipsis",
                ".checkcol",
                ".postedDate",
                ".dev_row .summary",
                ".already_in_library",
                ".game_header_image_ctn .grid_content",
                ".ds_flag.ds_wishlist_flag",
                ".early_access_review.tooltip",
                ".communitylink_achievement_images",
                ".user_reviews_summary_row.summary",
                ".review_award_ctn",
                ".add_to_wishlist_area",
                ".next_in_queue_content",
                ".glance_tags.popular_tags",
                ".game_purchase_action",
                ".vote_button_ctn",
                "#VoteUpDownBtnCtn",
                "#footer",
                "#ViewAllReviewssummary"
            ],
            "extraInlineSelectors": [
                ".pulldown"
            ],
            "globalStyles": {
                ".div.early_access_banner": "height: 84px",
                ".franchise_notice > *": "height: 84px",
                ".game_description_snippet": "max-height:unset; overflow: scroll;",
                ".game_purchase_area_friends_want": "height: auto; padding-bottom: 6px;"
            },
            "id": "steampoweredApp",
            "matches": "store.steampowered.com/app/*",
            "selectors": [
                ".game_description_snippet",
                ".game_area_description",
                "#earlyAccessHeader",
                "[id^='ReviewContent'] .content",
                ".ModalOverlayContent"
            ]
        },
        {
            "detectParagraphLanguage": true,
            "id": "steampowered",
            "matches": "store.steampowered.com"
        },
        {
            "excludeSelectors": [
                ".c-header",
                ".c-recommendations-header",
                ".c-recommendations-list-container",
                ".c-article-references__links",
                ".c-article-identifiers",
                ".c-article-author-list",
                ".c-article-metrics-bar__wrapper",
                ".c-article__pill-button",
                "#author-information-content",
                "#article-info-section"
            ],
            "id": "nature",
            "matches": "https://www.nature.com/articles/*"
        },
        {
            "excludeSelectors": [
                ".summary-left-panel",
                ".authors",
                "app-full-record-keywords mark"
            ],
            "extraBlockSelectors": [
                "app-summary-authors + div",
                "app-full-record-keywords span span"
            ],
            "globalStyles": {
                ".abstract": "height:auto !important;",
                ".show-more-lines": "height:unset !important;"
            },
            "id": "webofscience",
            "matches": "https://www.webofscience.com/*",
            "mutationChangeDelay": 600,
            "mutationObserverContainerSelectors": [
                "[data-ta='summary-record-title-link']",
                "#FullRTa-fullRecordtitle-0"
            ],
            "observeUrlChange": true,
            "urlChangeDelay": 600
        },
        {
            "excludeSelectors": [
                "#topic-nav"
            ],
            "id": "appleinsider",
            "matches": [
                "appleinsider.com"
            ]
        },
        {
            "extraBlockSelectors": [
                "[data-test=prompt]"
            ],
            "id": "jetbrains",
            "matches": "https://www.jetbrains.com/help/*"
        },
        {
            "id": "crates",
            "matches": [
                "https://crates.io/search*"
            ],
            "selectors": [
                "div[class^=_description-box] div[class^=_description]"
            ]
        },
        {
            "id": "theverge",
            "matches": "www.theverge.com",
            "shadowRootSelectors": [
                "div#coral_thread > div"
            ]
        },
        {
            "id": "simp",
            "mainFrameSelector": ".simpread-read-root",
            "matches": "https://beta.simp.red/trans*"
        },
        {
            "excludeSelectors": [
                "svg"
            ],
            "id": "lookintobitcoin",
            "matches": "https://www.lookintobitcoin.com/charts/*"
        },
        {
            "id": "openaiAccount",
            "matches": "https://platform.openai.com/account/api-keys*",
            "urlChangeDelay": 1500
        },
        {
            "excludeSelectors.add": [
                ".pheader"
            ],
            "id": "openaiDocs",
            "matches": "https://platform.openai.com/docs*"
        },
        {
            "id": "pkgStd",
            "matches": "https://pkg.go.dev/std",
            "selectors": [
                "td.UnitDirectories-desktopSynopsis"
            ]
        },
        {
            "id": "pkg",
            "matches": "https://pkg.go.dev/*",
            "selectors": [
                "div.UnitDetails p"
            ]
        },
        {
            "id": "explainpaper",
            "isTranslateTitle": false,
            "matches": [
                "https://www.explainpaper.com/reader*"
            ],
            "selectors": [
                ".leading-relaxed",
                ".chat-messages p",
                ".text-sm"
            ]
        },
        {
            "excludeSelectors": [
                "code",
                "view-line"
            ],
            "id": "colab",
            "matches": "https://colab.research.google.com/*"
        },
        {
            "id": "gatesnotes",
            "matches": "www.gatesnotes.com",
            "minZIndex": -1
        },
        {
            "id": "kakao",
            "matches": "page.kakao.com",
            "shadowRootSelectors": [
                "div[style^='visibility: visible'"
            ]
        },
        {
            "extraBlockSelectors": [
                "div[class='sc-3502f6cd-0 JxHqg']"
            ],
            "id": "coinmarketcap",
            "matches": "coinmarketcap.com"
        },
        {
            "additionalSelectors": [
                ".report-page-top"
            ],
            "additionalStayOriginalSelectors": [
                "span[data-slate-inline=true]"
            ],
            "extraInlineSelectors": [],
            "id": "wandb",
            "matches": "wandb.ai"
        },
        {
            "additionalSelectors": [
                "font[face=verdana]"
            ],
            "extraBlockSelectors": "font[face=verdana]",
            "id": "paulgraham",
            "matches": "paulgraham.com"
        },
        {
            "id": "zendesk",
            "matches": "https://*.zendesk.com/agent/*",
            "selectors": [
                "[data-test-id*=subject]",
                ".zd-comment",
                ".title"
            ]
        },
        {
            "id": "migadu",
            "matches": "webmail.migadu.com",
            "selectors": [
                ".bodyText"
            ]
        },
        {
            "additionalSelectors": [
                ".pop-title"
            ],
            "excludeSelectors": [
                "span#blog-pager-older-link",
                "span.h-datetime"
            ],
            "id": "thehackernews",
            "matches": "thehackernews.com"
        },
        {
            "excludeSelectors": [
                ".SCodeFlow"
            ],
            "id": "brown",
            "matches": "cs.brown.edu"
        },
        {
            "globalStyles": {
                "#__next": "font-size: 19px;line-height:28px;"
            },
            "id": "tass",
            "matches": "tass.ru"
        },
        {
            "id": "chatGoogle",
            "matches": "chat.google.com",
            "selectors": [
                "[jsname=bgckF]"
            ]
        },
        {
            "id": "fiverr",
            "matches": "https://www.fiverr.com/inbox/*",
            "selectors": [
                ".message-body"
            ]
        },
        {
            "excludeSelectors": [
                ".popular"
            ],
            "globalStyles": {
                ".YLycza2.u9KHmsf": "height:unset;max-height:unset;",
                ".lt2ar2q.EhHcMiw": "height:unset; max-height: unset;",
                "h3": "-webkit-line-clamp:unset;overflow:unset;",
                "h3 > a": "-webkit-line-clamp:unset;overflow:unset;",
                "h5": "-webkit-line-clamp:unset;overflow:unset;",
                "p": "-webkit-line-clamp:unset;overflow:unset;"
            },
            "id": "fiverr-main",
            "matches": "*.fiverr.com"
        },
        {
            "id": "jira",
            "matches": [
                "jira.*.com/browse/*",
                "jira.*.com/projects/*"
            ],
            "selectors": [
                "[id=descriptionmodule]",
                "[id=summary-val]",
                "div.action-body",
                "td.stsummary"
            ]
        },
        {
            "id": "ahaIo",
            "matches": [
                "*.aha.io"
            ],
            "selectors": [
                "[tabindex='0']",
                "div.user-content",
                "div.comments__body",
                "span.name"
            ]
        },
        {
            "excludeSelectors": [
                "div.featured-cards__byline",
                "div.list-item__meta",
                ".tags__item",
                "div.extended-scroll__header",
                ".submitted-by",
                ".site-header--has-alert-banner",
                ".homepage__container__opinion__item__byline",
                ".homepage__container__header",
                ".archive__item__meta"
            ],
            "id": "thehill",
            "injectedCss": [
                ".most-popular-item { max-height: unset !important; }",
                ".most-popular-item__link { -webkit-line-clamp: unset !important; }"
            ],
            "matches": "thehill.com"
        },
        {
            "atomicBlockTags": [
                "pre"
            ],
            "id": "ubuntu",
            "matches": "manpages.ubuntu.com",
            "selectors": [
                "pre"
            ]
        },
        {
            "excludeTags.add": [
                "IMG",
                "SUB",
                "SUP",
                "CODE",
                "TT",
                "ASIDE",
                "FOOTER"
            ],
            "excludeTags.remove": [
                "LINK"
            ],
            "id": "spiedigitallibrary",
            "matches": "www.spiedigitallibrary.org"
        },
        {
            "id": "promptingguide",
            "matches": "www.promptingguide.ai",
            "selectors": [
                "article",
                "li"
            ]
        },
        {
            "globalStyles": {
                ".line-clamp-3": "-webkit-line-clamp: unset !important;"
            },
            "id": "ground",
            "matches": "ground.news"
        },
        {
            "additionalSelectors": [
                "pre"
            ],
            "id": "ietf",
            "isTransformPreTagNewLine": true,
            "matches": "*.ietf.org/doc/html/*",
            "preWhitespaceDetectedTags": [
                "DIV",
                "SPAN",
                "PRE"
            ]
        },
        {
            "excludeTags.remove": [
                "BUTTON"
            ],
            "extraBlockSelectors": [
                ".inline-flex"
            ],
            "id": "newsminimalist",
            "matches": "https://www.newsminimalist.com/"
        },
        {
            "id": "yandexIndex",
            "matches": "https://yandex.com/",
            "selectors": [
                ".tabs__item-text"
            ]
        },
        {
            "excludeSelectors": [
                ".KeyValue-Row",
                ".EntityFeedbackFooter",
                ".Organic-Subtitle",
                ".SerpFooter-Content",
                ".serp-user",
                ".Pager"
            ],
            "globalStyles": {
                ".ExtendedText-Toggle": "white-space:normal;"
            },
            "id": "yandexSearch",
            "matches": "https://yandex.com/search/*"
        },
        {
            "globalStyles": {
                ".OrganicTitle": "max-height:unset;",
                ".OrganicTitle-LinkText": "-webkit-line-clamp: unset;max-height:unset;",
                ".link .serp-item__keypoints": "bottom:2px;",
                ".serp-item__text": "-webkit-line-clamp: unset;max-height:unset;",
                ".serp-item__title": "-webkit-line-clamp: unset;max-height:unset;",
                "h1.VideoTitle": "-webkit-line-clamp: unset;max-height:unset;"
            },
            "id": "yandex",
            "matches": "https://yandex.com/video/*",
            "selectors": [
                ".serp-item__title",
                ".serp-item__text",
                ".Keypoints-ItemTitle",
                ".bes-epmjnzm-idtktyj",
                ".OrganicTitle-LinkText",
                "h1.VideoTitle"
            ]
        },
        {
            "additionalStayOriginalSelectors": [
                "a.citation"
            ],
            "globalStyles": {
                ".line-clamp-1": "-webkit-line-clamp: unset !important;",
                ".line-clamp-2": "-webkit-line-clamp: unset !important;"
            },
            "id": "perplexity",
            "matches": "https://www.perplexity.ai",
            "mutationConfig.add": {
                "buildTimeout": 1000,
                "consumeTimeout": 1000
            },
            "selectors": [
                ".prose",
                ".my-md",
                ".line-clamp-2",
                ".line-clamp-1"
            ]
        },
        {
            "id": "allmyfaves",
            "matches": "https://allmyfaves.com/",
            "paragraphMinTextCount": 2,
            "paragraphMinWordCount": 1,
            "selectors": [
                "p"
            ]
        },
        {
            "globalStyles": {
                "pre": "white-space: inherit;"
            },
            "id": "man7",
            "isTransformPreTagNewLine": true,
            "matches": "man7.org"
        },
        {
            "containerMinTextCount": 2,
            "containerMinWordCount": 1,
            "id": "kadaza",
            "matches": "https://www.kadaza.com/",
            "paragraphMinTextCount": 2,
            "paragraphMinWordCount": 1,
            "selectors": [
                ".header span.title",
                ".custom-content-footer"
            ]
        },
        {
            "_comment": "解决url变化重复翻译问题",
            "id": "urlChangeDelay",
            "matches": [
                "https://babelnovel.com/books/*",
                "https://www.webnovel.com/book/*",
                "https://platform.openai.com/docs/*",
                "docs.oracle.com",
                "docs-cortex.paloaltonetworks.com",
                "forum.m5stack.com/topic/*",
                "community.m5stack.com/topic/*"
            ],
            "urlChangeDelay": 0
        },
        {
            "excludeSelectors": [
                "div.enlighter"
            ],
            "id": "genuine",
            "matches": "blog.genuine.com"
        },
        {
            "excludeSelectors": [
                ".topNav",
                ".topNav2_art > span",
                ".topNav_art2 > .dropdown",
                ".dibu-three",
                ".topBar"
            ],
            "id": "chinadaily",
            "injectedCss": [
                "a { height: unset !important; }",
                "li { height: unset !important; }",
                "div { height: unset !important; }",
                ".immersive-translate-target-inner {color:black;}"
            ],
            "matches": "www.chinadaily.com.cn"
        },
        {
            "id": "braynzarsoft",
            "matches": "www.braynzarsoft.net",
            "selectors": [
                "div#view-question-desc"
            ]
        },
        {
            "globalAttributes": {
                "#stem": {
                    "class": "stem",
                    "translate": "off"
                },
                "#stimulus": {
                    "class": "stimulus",
                    "translate": "off"
                }
            },
            "id": "lawhub",
            "matches": "https://lawhub.lsac.org/question/*"
        },
        {
            "excludeSelectors": [
                ".lark-virtual-tree"
            ],
            "id": "yuque",
            "matches": "https://www.yuque.com/*"
        },
        {
            "excludeTags": [
                "small"
            ],
            "id": "bearblog",
            "matches": "https://bearblog.dev/discover/*"
        },
        {
            "excludeSelectors": [
                ".nova-legacy-v-publication-item__meta-data",
                ".nova-legacy-v-publication-item__person-list",
                ".js-authors-list"
            ],
            "id": "researchgate",
            "matches": "www.researchgate.net"
        },
        {
            "excludeSelectors.add": [
                "footer:last-of-type",
                "nav",
                "header div.subtitle-2.w-full"
            ],
            "id": "theatlantic",
            "initialSelectorGlobalAttributes": {
                "footer:last-of-type": {
                    "translate": "no"
                },
                "nav": {
                    "translate": "no"
                },
                "nav:last-of-type": {
                    "translate": "no"
                }
            },
            "matches": [
                "www.theatlantic.com",
                "https://mashable.com/*"
            ]
        },
        {
            "excludeSelectors": [
                ".toolbar__ee8"
            ],
            "id": "youtrackJetbrains",
            "matches": "youtrack.jetbrains.com/articles/*",
            "selectors": [
                "[role=presentation]",
                "[data-test=article-content]"
            ]
        },
        {
            "excludeSelectors": [
                ".focus-menu-shown"
            ],
            "id": "dw",
            "initialSelectorGlobalAttributes": {
                "footer:last-of-type": {
                    "translate": "no"
                },
                "nav": {
                    "translate": "no"
                },
                "nav:last-of-type": {
                    "translate": "no"
                }
            },
            "matches": "www.dw.com"
        },
        {
            "extraInlineSelectors.add": [
                ".term-wrapper",
                "span.description"
            ],
            "id": "sentry",
            "initialSelectorGlobalAttributes": {
                ".navbar": {
                    "translate": "no"
                },
                "footer:last-of-type": {
                    "translate": "no"
                }
            },
            "matches": "docs.sentry.io"
        },
        {
            "id": "openai-blog",
            "matches": "https://openai.com/blog/*",
            "stayOriginalTags.remove": [
                "CODE"
            ]
        },
        {
            "_comment": "解决url变化但是页面不变的问题",
            "id": "urlComment",
            "selectorMatches": [
                "meta[name='generator'][content^='Discourse']"
            ],
            "urlChangeDelay": 0
        },
        {
            "excludeSelectors": [
                ".Leftnav"
            ],
            "globalStyles": {
                ".EntrySummary--u4": "-webkit-line-clamp: unset;max-height:unset;",
                ".EntrySummary--u5": "-webkit-line-clamp: unset;max-height:unset;",
                ".TitleOnlyLayout": "height:unset !important;"
            },
            "id": "feedly",
            "matches": "feedly.com"
        },
        {
            "excludeSelectors": [
                "mat-sidenav",
                "div.capabilities-disclaimer",
                "#cdk-overlay-6",
                "message-actions button",
                ".mdc-button__label .ng-star-inserted",
                ".mdc-list-item__primary-text"
            ],
            "excludeTags.add": [
                "mat-tooltip-component"
            ],
            "excludeTags.remove": [
                "BUTTON"
            ],
            "id": "bardGoogle",
            "isTranslateTitle": false,
            "matches": "bard.google.com"
        },
        {
            "id": "whatsapp",
            "matches": "web.whatsapp.com",
            "selectors": [
                ".copyable-text > span"
            ],
            "wrapperPrefix": "\n",
            "wrapperSuffix": "<br/>"
        },
        {
            "extraInlineSelectors": [
                "a",
                "i"
            ],
            "globalStyles": {
                "[class*='lineclamp'],.b_title": "-webkit-line-clamp:unset;"
            },
            "id": "bing",
            "matches": "https://*.bing.com/search*"
        },
        {
            "excludeSelectors": [
                "._ys_jiqava",
                "#ybar-inner-wrap",
                "#Col2-5-Rmp-Proxy"
            ],
            "extraBlockSelectors": [
                ".SIPGg",
                ".sc-kzMCTH.pSZXj"
            ],
            "globalStyles": {
                "#Aside > :first-child": "overflow:scroll;",
                "#atomic .Mt\\(20px\\)": "margin-top: 100px;",
                "[class*='LineClamp']": "-webkit-line-clamp:unset;max-height:unset;",
                "[class*='_ys_24482e']": "-webkit-line-clamp:unset;",
                "a[class*='js-content-viewer']> div[class*='Td\\(n\\)']": "overflow: scroll;"
            },
            "id": "yahoo",
            "matches": "*.yahoo.*"
        },
        {
            "excludeSelectors": [
                "header",
                "footer",
                "nav",
                "[aria-label='Markets summary']"
            ],
            "id": "wsj",
            "matches": "www.wsj.com"
        },
        {
            "excludeSelectors": [
                "header",
                "nav",
                "section.live-updates-module "
            ],
            "id": "businessinsider",
            "matches": "www.businessinsider.com"
        },
        {
            "excludeSelectors": [
                ".badgeYear",
                ".gr-mediaBox__desc",
                ".bookVotedRow",
                ".minirating",
                "div[itemprop='aggregateRating']",
                ".wtrButtonContainer",
                ".RatingsHistogram__labelTitle",
                ".FollowButton",
                ".siteHeader__topLevelLink",
                "#books > thead",
                "td[class*='rating']",
                "td[class*='shelves']",
                "td[class*='date_read']",
                "td[class*='date_added']",
                "td[class*='actions']"
            ],
            "id": "goodreads",
            "matches": "www.goodreads.com"
        },
        {
            "globalStyles": {
                ".item-summary": "-webkit-line-clamp:unset;"
            },
            "id": "feeder",
            "matches": "https://feeder.co/*"
        },
        {
            "globalAttributes": {
                "[class='notranslate']": {
                    "class": ""
                }
            },
            "id": "elektrotechnik",
            "matches": "https://www.elektrotechnik.rwth-aachen.de/*"
        },
        {
            "excludeSelectors": [
                "#app > div > div > header",
                "#app > div > div > div > div > header",
                "#in-story-masthead"
            ],
            "id": "nytimes",
            "injectedCss": [
                "a::after {position:relative!important;}"
            ],
            "matches": "www.nytimes.com"
        },
        {
            "additionalExcludeSelectors": [
                ".bz_first_comment_head",
                ".bz_comment_head",
                ".related_actions"
            ],
            "excludeTags.remove": [
                "svg",
                "PRE"
            ],
            "id": "bugsKde",
            "matches": "bugs.kde.org"
        },
        {
            "id": "eastmoney",
            "matches": "guba.eastmoney.com",
            "searchEnhancementConfig": [
                {
                    "delayTime": 0,
                    "id": "eastmoney",
                    "keyword": {
                        "matches": [
                            {
                                "matchRegex": "guba.eastmoney.com/news,us(\\w+?),\\S+.html",
                                "source": "url"
                            }
                        ],
                        "value": "[0]$1 stock"
                    },
                    "selector": ".moneyFlowContainer",
                    "selectorAction": "insertBefore",
                    "showCount": 8,
                    "style": {
                        "container": "background:white;border:none;border-radius: 4px;box-shadow: 0 2px 4px hsla(216,5%,62%,.14);",
                        "enTitle": "margin-top:4px;font-size:12px;",
                        "keyword": "color:#294688",
                        "more": "color:#294688;margin-top:8px;",
                        "searchTitle": "margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;",
                        "source": "font-size:12px; margin-bottom: 0px;",
                        "time": "margin: 0px 0 16px;",
                        "title": "font-size:14px;color:#294688;"
                    },
                    "urlMatch": "guba.eastmoney.com/news,us\\w+,\\w+.html"
                },
                {
                    "delayTime": 0,
                    "id": "eastmoney",
                    "keyword": {
                        "matches": [
                            {
                                "match": "a[href*='rank/stock?code=']",
                                "matchRegex": "code=(\\w+)_(\\w+)",
                                "source": {
                                    "attribute": "href",
                                    "type": "selector"
                                }
                            }
                        ],
                        "value": "[0]$1:[0]$2"
                    },
                    "selector": ".qualityContentContainer",
                    "selectorAction": "insertBefore",
                    "showCount": 8,
                    "style": {
                        "container": "background:white;border:none;border-radius: 4px;box-shadow: 0 2px 4px hsla(216,5%,62%,.14);",
                        "enTitle": "margin-top:4px;font-size:12px;",
                        "keyword": "color:#294688",
                        "more": "color:#294688;margin-top:8px;",
                        "searchTitle": "margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;",
                        "source": "font-size:12px; margin-bottom: 0px;",
                        "time": "margin:0px 0 16px;",
                        "title": "font-size:14px;color:#294688;"
                    },
                    "urlMatch": "guba.eastmoney.com/list,us\\w+.*.html"
                }
            ]
        },
        {
            "id": "xueqiu",
            "matches": "xueqiu.com",
            "searchEnhancementConfig": [
                {
                    "delayTime": 0,
                    "id": "xueqiu",
                    "keyword": {
                        "matches": [
                            {
                                "match": ".stock-name",
                                "matchRegex": "\\((.+)\\)",
                                "source": {
                                    "attribute": "text",
                                    "type": "selector"
                                }
                            }
                        ],
                        "value": "[0]$1"
                    },
                    "selector": ".container-side-sm.float-right.stock__side",
                    "selectorAction": "appendChild",
                    "showCount": 8,
                    "style": {
                        "container": "background:white;border:none;border-radius: 4px;padding:0;",
                        "enTitle": "margin-top:4px;font-size:12px;",
                        "keyword": "color:#06c",
                        "more": "color:#06c;margin-top:8px;",
                        "searchTitle": "margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;font-weight: bold;",
                        "source": "font-size:12px; margin-bottom: 0px;",
                        "time": "margin:0px 0 16px;",
                        "title": "font-size:14px;color:#06c;"
                    },
                    "urlMatch": "xueqiu.com/S/[a-zA-Z]+/?$"
                }
            ]
        },
        {
            "id": "laohu8",
            "matches": "www.laohu8.com",
            "searchEnhancementConfig": [
                {
                    "delayTime": 0,
                    "id": "laohu8",
                    "keyword": {
                        "matches": [
                            {
                                "matchRegex": "stock/([a-zA-Z]+)",
                                "source": "url"
                            }
                        ],
                        "value": "[0]$1 stock"
                    },
                    "selector": ".hot-stocks-root",
                    "selectorAction": "insertBefore",
                    "showCount": 8,
                    "style": {
                        "container": "background:white;border:none;border-radius: 4px;box-shadow: 0 2px 4px hsla(216,5%,62%,.14);",
                        "enTitle": "margin-top:4px;color: #4d5156;font-size:12px;",
                        "searchTitle": "margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;",
                        "source": "font-size:12px; margin-bottom: 0px;",
                        "time": "margin: 0px 0 16px;",
                        "title": "font-size:14px;color: #007bff;"
                    },
                    "urlMatch": "www.laohu8.com/stock/[a-zA-Z]+/?$"
                }
            ]
        },
        {
            "id": "futunn",
            "matches": "www.futunn.com",
            "searchEnhancementConfig": [
                {
                    "delayTime": 0,
                    "id": "futunn",
                    "keyword": {
                        "matches": [
                            {
                                "matchRegex": "stock/([a-zA-Z]+)-US",
                                "source": "url"
                            }
                        ],
                        "value": "[0]$1 stock"
                    },
                    "selector": ".right",
                    "selectorAction": "appendChild",
                    "showCount": 8,
                    "style": {
                        "container": "background:white;border:none;border-radius: 4px;box-shadow: 0 2px 4px hsla(216,5%,62%,.14);",
                        "enTitle": "margin-top:4px;color: #4d5156;font-size:12px;",
                        "searchTitle": "margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;",
                        "source": "font-size:12px; margin-bottom: 4px;",
                        "time": "margin: 4px 0 20px;",
                        "title": "font-size:14px;color: #007bff;"
                    },
                    "urlMatch": "www.futunn.com/stock/\\w+-US"
                }
            ]
        },
        {
            "globalAttributes": {
                "#app": {
                    "class": ""
                }
            },
            "globalStyles": {
                "[style*='358px;']": "width: 33.3333%; height: auto; padding: 0px; position: relative; margin: 0px;",
                "a > div": "display:block;"
            },
            "id": "bmvrMarseille",
            "matches": "www.bmvr.marseille.fr"
        },
        {
            "globalStyles": {
                "[class*='text-brand-green']": "flex-direction:column;"
            },
            "id": "piAi",
            "matches": "pi.ai/talk"
        },
        {
            "aiRule": {
                "messageContainerSelector": ".ReactMarkdown",
                "messageStreamEndSelector": ".contents > button",
                "messageWrapperSelector": ".contents",
                "streamingChange": true,
                "streamingDeepChild": false,
                "streamingDelayTime": 1000
            },
            "excludeSelectors": [
                ".contents *"
            ],
            "excludeTags.remove": [
                "PRE"
            ],
            "id": "claudeAi",
            "injectedCss": "[data-testid='chat-menu-trigger'] br {display:none;}",
            "matches": "claude.ai"
        },
        {
            "additionalExcludeSelectors.remove": [
                ".notranslate",
                "[translate=no]"
            ],
            "excludeSelectors.add": [
                ".catalogue__list"
            ],
            "id": "feishu",
            "matches": [
                "*.feishu.cn",
                "*.larkoffice.com",
                "*.larksuite.com"
            ],
            "mutationObserverLimitTargetSelectors": [
                ".maindocbody",
                "div[class*='render']",
                "div[class*='block']"
            ]
        },
        {
            "additionalExcludeSelectors.add": [
                "[spellcheck='false']"
            ],
            "additionalExcludeSelectors.remove": [
                ".notranslate",
                "[translate=no]"
            ],
            "id": "gitbook",
            "selectorMatches": [
                ".gitbook-root"
            ]
        },
        {
            "globalStyles": {
                "span.list_entry": "height: unset;"
            },
            "id": "mitre",
            "matches": "cwe.mitre.org"
        },
        {
            "excludeTags": [
                "i",
                "button"
            ],
            "id": "kaggle",
            "matches": "www.kaggle.com"
        },
        {
            "extraBlockSelectors": [
                "small"
            ],
            "id": "ieee",
            "matches": "spectrum.ieee.org"
        },
        {
            "id": "ieeexplore",
            "matches": "ieeexplore.ieee.org",
            "stayOriginalSelectors": [
                "a[ref-type]",
                ".inline-formula",
                ".display-formula"
            ]
        },
        {
            "bodyRule.add": {
                "articleSelector": ".article__content-container",
                "bodySelector": ".layout__content-wrapper"
            },
            "excludeSelectors.add": [
                ".ad-slot-header__wrapper",
                "#pageFooter"
            ],
            "id": "cnn",
            "matches": "*.cnn.com"
        },
        {
            "globalAttributes": {
                "header": {
                    "translate": "unset;"
                }
            },
            "id": "marginalrevolution",
            "matches": "marginalrevolution.com"
        },
        {
            "globalStyles": {
                "#main-content": "overflow:unset;"
            },
            "id": "highfrequencyelectronics",
            "matches": "www.highfrequencyelectronics.com"
        },
        {
            "globalStyles": {
                ".font-mktg": "word-break:normal;"
            },
            "id": "githubBlog",
            "matches": "github.blog"
        },
        {
            "id": "semanticscholar",
            "matches": "www.semanticscholar.org",
            "selectors": [
                ".cl-paper-title",
                ".cl-paper-abstract",
                ".tldr-abstract-replacement",
                ".text-truncator",
                ".paper-detail-title"
            ]
        },
        {
            "excludeSelectors": [
                ".side-column"
            ],
            "id": "uni-trier",
            "matches": "dblp.uni-trier.de",
            "selectors": [
                "h1",
                "h2",
                ".title",
                ".external",
                "dd p"
            ]
        },
        {
            "excludeSelectors.add": [
                ".bpx-player-subtitle-panel-text"
            ],
            "id": "bilibili",
            "matches": "www.bilibili.com",
            "subtitleRule.add": {
                "loadingContainerSelector": ".bpx-player-subtitle-panel",
                "subtitleUrlRegExp": "aisubtitle.hdslb.com/bfs",
                "type": "bilibili"
            }
        },
        {
            "excludeSelectors": [
                ".date-and-duration"
            ],
            "globalStyles": {
                ".headline": "-webkit-line-clamp:unset;overflow:unset;height:unset;",
                "h3": "-webkit-line-clamp:unset;overflow:unset;",
                "p": "-webkit-line-clamp:unset;overflow:unset;"
            },
            "id": "time",
            "matches": "time.com"
        },
        {
            "id": "docs-swift",
            "matches": "docs.swift.org",
            "selectors": [
                ".content",
                "#menu"
            ]
        },
        {
            "id": "uzh",
            "injectedCss": [
                ".TextImage--inner {overflow:auto !important;}"
            ],
            "matches": "www.uzh.ch"
        },
        {
            "globalStyles": {
                ".immersive-translate-target-translation-block-wrapper": "margin:unset;",
                ".mail-MessageSnippet": "height: unset; line-height:unset;"
            },
            "id": "mail-yandex",
            "matches": "mail.yandex.com",
            "selectors": [
                "article",
                ".Text_color_primary",
                ".mail-MessageSnippet-Item_subject"
            ]
        },
        {
            "id": "forums.zotero",
            "matches": "forums.zotero.org",
            "selectors": [
                ".page-sidebar",
                ".page-content"
            ]
        },
        {
            "excludeSelectors": [
                ".docsum-journal-citation",
                ".citation-part",
                ".docsum-authors",
                ".top-wrapper",
                ".article-source",
                ".citation-doi",
                ".identifiers",
                ".cite",
                ".share",
                ".arrow-link"
            ],
            "globalAttributes": {
                "#Scholarscope_HighlightContent": {
                    "class": ""
                },
                "#Scholarscope_HighlightOrigin": {
                    "class": "Scholarscope_HighlightContents"
                }
            },
            "id": "pubmed.ncbi.nlm.nih.gov",
            "injectedCss": [
                "#Scholarscope_HighlightOrigin > p font,#Scholarscope_HighlightContent > p font {display: inline!important;}",
                "#Scholarscope_HighlightOrigin > p font br,#Scholarscope_HighlightContent > p font br {display: none!important;}"
            ],
            "matches": "pubmed.ncbi.nlm.nih.gov",
            "mutationExcludeContainsSelectors": [
                "#Scholarscope_HighlightContent highlight"
            ],
            "mutationExcludeSelectors": [
                "#Scholarscope_HighlightContent",
                "#Scholarscope_HighlightContent span"
            ],
            "urlChangeDelay": 0
        },
        {
            "id": "chosun",
            "injectedCss": "body {word-break: unset!important;}",
            "matches": "www.chosun.com"
        },
        {
            "additionalExcludeSelectors.remove": [
                ".notranslate",
                "[translate=no]"
            ],
            "globalStyles": {
                "a,strong": "max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;",
                "div,p,li,.item-box01,.news-con": "height:unset;max-height:unset;-webkit-line-clamp:unset;"
            },
            "id": "yna",
            "injectedCss": [
                "font > br {display:none}"
            ],
            "matches": "*.yna*"
        },
        {
            "globalStyles": {
                "h3,div,span,p": "max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"
            },
            "id": "cnet",
            "matches": "www.cnet.com"
        },
        {
            "globalStyles": {
                "[class*='max-h']": "max-height:unset!important;"
            },
            "id": "dolmods",
            "matches": "dolmods.net"
        },
        {
            "additionalExcludeSelectors.remove": [
                ".notranslate",
                "[translate=no]"
            ],
            "excludeSelectors.add": [
                ".main-nav-frame",
                ".sub-header-wrapper",
                ".footer",
                ".date"
            ],
            "globalStyles": {
                "a,.title,.abstract,.display-5,.top": "max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"
            },
            "id": "digitimes",
            "matches": "www.digitimes.com"
        },
        {
            "excludeSelectors.add": [
                ".header-menu__item > a",
                ".linkbar__item",
                ".header__button-group"
            ],
            "id": "vdi-nachrichten",
            "matches": "www.vdi-nachrichten.com"
        },
        {
            "excludeTags": [
                "blockquote"
            ],
            "id": "htdp",
            "matches": "htdp.org",
            "stayOriginalSelectors": [
                ".RktIn"
            ]
        },
        {
            "id": "newsletterss",
            "initialGlobalAttributes": {
                "iframe": {
                    "scrolling": "auto"
                }
            },
            "matches": "newsletterss.com"
        },
        {
            "excludeSelectors.add": [
                "aside",
                ".DocSearch-Modal"
            ],
            "id": "docusaurus",
            "selectorMatches": [
                "#__docusaurus"
            ]
        },
        {
            "excludeTags.remove": [
                "PRE"
            ],
            "id": "mercari",
            "matches": "*.mercari.com"
        },
        {
            "id": "qqMail",
            "matches": "mail.qq.com",
            "useIframePostMessage": false
        },
        {
            "globalStyles": {
                "h3,div,span,p": "max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"
            },
            "id": "nikkei",
            "matches": "www.nikkei.com"
        },
        {
            "excludeSelectors": [
                ".eqn"
            ],
            "id": "pubs.rsc.org",
            "matches": "pubs.rsc.org"
        },
        {
            "excludeTags.remove": [
                "BUTTON"
            ],
            "globalStyles": {
                "span,.css-19rjr9w.e1wnkr790": "max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"
            },
            "id": "indeed",
            "matches": "*.indeed.com"
        },
        {
            "additionalExcludeSelectors.remove": [
                ".notranslate",
                "[translate=no]"
            ],
            "id": "brutalist",
            "matches": "brutalist.report",
            "selectors": [
                "li > a:first-child",
                "aside",
                "nav > a",
                "h1 > a",
                "h3 > a",
                "h2 >a"
            ]
        },
        {
            "extraInlineSelectors": [
                ".d4t-sprite-icon",
                ".d4t-icon"
            ],
            "id": "maxroll",
            "injectedCss": [
                "font {font-family: sans-serif !important;}"
            ],
            "matches": [
                "maxroll.gg"
            ]
        },
        {
            "id": "microsoftTeams",
            "matches": [
                "teams.live.com"
            ],
            "stayOriginalSelectors.add": [
                "span[title][style='min-width: 20px; height: 20px;']"
            ]
        },
        {
            "excludeSelectors": [
                "div#examples"
            ],
            "id": "gradioappdocs",
            "matches": "www.gradio.app/docs/*",
            "selectors": [
                "div.obj"
            ]
        },
        {
            "excludeTags.remove": [
                "PRE"
            ],
            "id": "arca",
            "matches": "arca.live"
        },
        {
            "additionalExcludeSelectors.remove": [
                ".notranslate"
            ],
            "aiRule": {
                "messageWrapperSelector": ".chat-message-row.ai",
                "streamingChange": false,
                "streamingDeepChild": true,
                "streamingDelayTime": 1000,
                "streamingSelector": ""
            },
            "excludeSelectors": [
                ".chat-message-row.ai *",
                ".pdf-viewer"
            ],
            "id": "chatpdf",
            "matches": [
                "www.chatpdf.com"
            ]
        },
        {
            "excludeTags.remove": [
                "BUTTON"
            ],
            "id": "inciteful",
            "matches": [
                "inciteful.xyz"
            ]
        },
        {
            "additionalExcludeSelectors.remove": [
                ".notranslate"
            ],
            "excludeSelectors.add": [
                ".mx_DisambiguatedProfile",
                ".mx_ReplyChain_wrapper",
                ".mx_ThreadSummary_replies_amount"
            ],
            "id": "app.element.io",
            "matches": [
                "app.element.io"
            ]
        },
        {
            "id": "fastapi.tiangolo.com",
            "matches": "fastapi.tiangolo.com",
            "selectors": [
                "article"
            ]
        },
        {
            "id": "termynal",
            "selectorMatches": [
                "link[href*='termynal.css']"
            ],
            "stayOriginalSelectors.add": [
                ".termy"
            ]
        },
        {
            "bodyRule.add": {
                "enable": false
            },
            "id": "cpb-nl",
            "matches": [
                "www.cpb.nl"
            ]
        },
        {
            "globalStyles": {
                "[class*=':h-[']": "height:unset;"
            },
            "id": "hub.logseq",
            "matches": [
                "hub.logseq.com"
            ]
        },
        {
            "additionalExcludeSelectors.remove": [
                ".notranslate"
            ],
            "id": "chat.zalo",
            "inputConfig.add": {
                "execCommandDeleteEnable": true
            },
            "inputExecCommandDeleteEnable": true,
            "matches": [
                "chat.zalo.me"
            ]
        },
        {
            "excludeSelectors.add": [
                "#blog-page-sidebar-wrapper"
            ],
            "excludeTags.remove": [
                "BUTTON"
            ],
            "globalStyles": {
                "[class*='ContentAnchorLinkList']": "word-break:unset;"
            },
            "id": "epam",
            "matches": "*.epam.com"
        },
        {
            "excludeSelectors.add": [
                ".page-number"
            ],
            "id": "discussions.apple",
            "matches": "discussions.apple.com"
        },
        {
            "excludeSelectors.add": [
                "#footer",
                "[class^=index_time]",
                "[class^=index_anthorList]",
                "[class^=index_node]",
                "[class^=index_popupWrapper]"
            ],
            "id": "www.sixthtone.com",
            "matches": [
                "www.sixthtone.com"
            ]
        },
        {
            "excludeSelectors.add": [
                ".bbCodeCode"
            ],
            "id": "forum.unity",
            "matches": [
                "forum.unity.com"
            ]
        },
        {
            "excludeTags.remove": [
                "PRE"
            ],
            "globalAttributes": {
                "header": {
                    "translate": "unset;"
                }
            },
            "globalStyles": {
                ".story-info .item-description": "overflow: scroll;"
            },
            "id": "wattpad",
            "matches": [
                "www.wattpad.com"
            ]
        },
        {
            "excludeSelectors.add": [
                ".player-timedtext"
            ],
            "id": "netflix",
            "matches": [
                "www.netflix.com"
            ],
            "mutationExcludeSelectors.add": [
                ".player-timedtext *"
            ],
            "subtitleRule.add": {
                "attachRule": {
                    "appendSelector": ".watch-video",
                    "injectedCSS": [
                        ".imt-caption-window {margin-bottom: 0px; bottom: 10vw;}"
                    ],
                    "injectedGlobalCSS": [
                        ".player-timedtext {display: none !important; }"
                    ]
                },
                "loadingContainerSelector": ".watch-video",
                "loadingStyle": "bottom: 15%;",
                "quickButtonRule": {
                    "appendSelector": "[data-uia=\"control-next\"]",
                    "injectCSS": ".imt-quick-subtitle-button {height: 60%; margin-right: 50px; font-size: 20px; } .logo,.logo svg { height: 36px; width: 36px} .label { display: none; } .imt-quick-subtitle-pop-content {transform: translateX(50%); right: 0}",
                    "insertBeforeSelector": "[data-uia=\"control-next\"]"
                },
                "subtitleUrlRegExp": "^https://.+?.oca.nflxvideo.net/\\?([ovet]=[^=]+){4}$",
                "type": "netflix",
                "videoSelector": "video"
            }
        },
        {
            "excludeSelectors.add": [
                "[data-purpose='captions-cue-text']",
                ".shaka-text-container"
            ],
            "id": "udemy",
            "matches": [
                "www.udemy.com"
            ],
            "mutationExcludeSelectors.add": [
                "[data-purpose='captions-cue-text'] *",
                ".shaka-text-container *"
            ],
            "subtitleRule.add": {
                "humanTrust": 85,
                "injectedCss": [
                    "[class^='well--text'] {white-space: pre;}"
                ],
                "loadingContainerSelector": ".shaka-video-container",
                "loadingStyle": "bottom: 15%;",
                "quickButtonRule": {
                    "appendSelector": "[data-purpose=\"video-controls\"]"
                },
                "subtitleUrlRegExp": "^https://vtt.*\\.udemycdn\\.com/.*\\.vtt",
                "type": "udemy",
                "videoPlayerSelector": "video.shaka-video"
            },
            "subtitleRule.add_v.[1.4.1]": {
                "hookType": "fetch|xhr"
            }
        },
        {
            "excludeSelectors": [
                ".jwplayer"
            ],
            "id": "iview",
            "matches": "iview.abc.net.au",
            "mutationExcludeSelectors.add": [
                ".jwplayer *"
            ],
            "subtitleRule.add": {
                "loadingContainerSelector": ".jwplayer",
                "quickButtonRule": {
                    "appendSelector": ".jw-reset.jw-button-container",
                    "injectCSS": ".imt-quick-subtitle-pop-content {z-index: 999999;}",
                    "insertBeforeSelector": ".jw-settings-submenu-button"
                },
                "subtitleUrlRegExp": "/cc/.*\\.(vtt|webvtt)$",
                "type": "webvtt"
            }
        },
        {
            "excludeSelectors": [
                ".video-container"
            ],
            "id": "nmaart",
            "matches": "www.nma.art",
            "mutationExcludeSelectors.add": [
                ".video-container *"
            ],
            "subtitleRule.add": {
                "loadingContainerSelector": ".video-container",
                "quickButtonRule": {
                    "appendSelector": ".vjs-control-bar",
                    "insertBeforeSelector": ".vjs-playback-rate"
                },
                "subtitleUrlRegExp": "/texttrack/.*\\.(vtt|webvtt)",
                "type": "webvtt"
            }
        },
        {
            "excludeSelectors": [
                ".developer-video-player"
            ],
            "id": "apple",
            "matches": "developer.apple.com",
            "mutationExcludeSelectors.add": [
                ".developer-video-player *"
            ],
            "subtitleRule.add": {
                "subtitleUrlRegExp": "\\.(vtt|webvtt)",
                "type": "webvtt"
            }
        },
        {
            "id": "khanacademy",
            "matches": [
                "www.khanacademy.org"
            ],
            "stayOriginalSelectors.add": [
                ".mathjax-wrapper"
            ],
            "subtitleRule.add": {
                "hookType": "fetch",
                "subtitleUrlRegExp": "GetSubtitles",
                "type": "khanacademy"
            }
        },
        {
            "excludeSelectors.add": [
                "[data-subtitles-container='true']"
            ],
            "id": "nebula",
            "matches": [
                "nebula.tv"
            ],
            "mutationExcludeSelectors.add": [
                "[data-subtitles-container='true'] *"
            ],
            "subtitleRule.add": {
                "loadingContainerSelector": ".video-poster",
                "quickButtonRule": {
                    "appendSelector": ".icon-spacing.css-4yh7a0",
                    "ccEnableSelector": "#subtitles-toggle-button",
                    "insertBeforeSelector": "#subtitles-toggle-button"
                },
                "subtitleUrlRegExp": "\\.vtt$",
                "type": "webvtt"
            }
        },
        {
            "excludeSelectors.add": [
                ".vjs-text-track-display"
            ],
            "id": "frontendmasters",
            "matches": [
                "frontendmasters.com"
            ],
            "mutationExcludeSelectors.add": [
                ".vjs-text-track-display *"
            ],
            "subtitleRule.add": {
                "injectedCss": [
                    "#immersive-translate-quick-button-container {order: 2} .imt-quick-subtitle-pop-content {z-index: 2147483647}"
                ],
                "loadingContainerSelector": ".vjs-text-track-display",
                "quickButtonRule": {
                    "appendSelector": ".vjs-control-bar"
                },
                "subtitleUrlRegExp": ".vtt$",
                "type": "webvtt",
                "videoSelector": ".PromoPlayer video"
            }
        },
        {
            "excludeSelectors.add": [
                ".vjs-text-track-display"
            ],
            "id": "udacity",
            "matches": [
                "*.udacity.com"
            ],
            "mutationExcludeSelectors.add": [
                ".vjs-text-track-display *"
            ],
            "subtitleRule.add": {
                "loadingContainerSelector": ".vjs-text-track-display",
                "subtitleUrlRegExp": ".vtt$",
                "type": "webvtt"
            }
        },
        {
            "excludeSelectors.add": [
                ".vjs-text-track-display"
            ],
            "id": "skillshare",
            "matches": [
                "www.skillshare.com"
            ],
            "mutationExcludeSelectors.add": [
                ".vjs-text-track-display *"
            ],
            "subtitleRule.add": {
                "injectedCss": [
                    "#immersive-translate-quick-button-container {order: 13}"
                ],
                "loadingContainerSelector": ".vjs-text-track-display",
                "quickButtonRule": {
                    "appendSelector": ".vjs-control-bar",
                    "injectCSS": " .label { display: none; } .imt-quick-subtitle-pop-content {transform: translateX(43%); right: 0; z-index: 2147483647 } ",
                    "insertBeforeSelector": ".vjs-volume-panel"
                },
                "subtitleUrlRegExp": "\\.vtt\\?",
                "type": "webvtt"
            }
        },
        {
            "excludeSelectors.add": [
                ".vjs-text-track-display"
            ],
            "id": "domestika",
            "matches": [
                "www.domestika.org"
            ],
            "mutationExcludeSelectors.add": [
                ".vjs-text-track-display *"
            ],
            "subtitleRule.add": {
                "quickButtonRule": {
                    "appendSelector": ".controlBar-wrapper .right-wrapper",
                    "insertBeforeSelector": ".vjs-volume-panel"
                },
                "subtitleUrlRegExp": ".*subtitles.*\\.vtt",
                "type": "webvtt"
            }
        },
        {
            "excludeSelectors.add": [
                "[data-testid='playerContainer']",
                "[data-testid='CueBoxContainer']"
            ],
            "id": "hbomax",
            "matches": [
                "play.max.com",
                "play.hbomax.com"
            ],
            "mutationExcludeSelectors.add": [
                "[data-testid='playerContainer'] *",
                "[data-testid='CueBoxContainer'] *"
            ],
            "subtitleRule.add": {
                "loadingContainerSelector": "[data-testid='playerContainer']",
                "subtitleUrlRegExp": "\\.vtt$",
                "type": "webvtt"
            }
        },
        {
            "excludeSelectors.add": [
                ".vjs-text-track-display"
            ],
            "id": "mindvalley",
            "matches": [
                "home.mindvalley.com"
            ],
            "mutationExcludeSelectors.add": [
                ".vjs-text-track-display *"
            ],
            "subtitleRule.add": {
                "injectedCss": [
                    "#immersive-translate-quick-button-container {order: 6}"
                ],
                "loadingContainerSelector": ".vjs-text-track-display",
                "quickButtonRule": {
                    "appendSelector": "[data-testid=\"video-section\"]  .vjs-control-bar",
                    "injectCSS": ".imt-quick-subtitle-pop-content {z-index: 999999;}",
                    "insertBeforeSelector": "[data-testid=\"video-section\"] .vjs-volume-panel"
                },
                "subtitleUrlRegExp": "\\.webvtt$",
                "type": "webvtt"
            }
        },
        {
            "excludeSelectors.add": [
                ".vjs-text-track-display"
            ],
            "id": "masterclass",
            "matches": [
                "www.masterclass.com",
                "learn.microsoft.com"
            ],
            "mutationExcludeSelectors.add": [
                ".vjs-text-track-display *"
            ],
            "subtitleRule.add": {
                "loadingContainerSelector": ".vjs-text-track-display",
                "quickButtonRule": {
                    "appendSelector": ".vjs-control-bar",
                    "insertBeforeSelector": ".vjs-playback-rate"
                },
                "subtitleUrlRegExp": "\\.vtt",
                "type": "webvtt"
            }
        },
        {
            "excludeSelectors.add": [
                ".bmpui-ui-viu-subtitle-overlay"
            ],
            "id": "viu",
            "matches": [
                "www.viu.com"
            ],
            "mutationExcludeSelectors.add": [
                ".bmpui-ui-viu-subtitle-overlay *"
            ],
            "subtitleRule.add": {
                "hookType": "xhr",
                "injectedCss": [
                    ".bmpui-controls-hidden #immersive-translate-quick-button-container {display: none;}"
                ],
                "loadingContainerSelector": ".bmpui-container-wrapper",
                "loadingStyle": "bottom: 20%;",
                "quickButtonRule": {
                    "appendSelector": ".bmpui-ui-container.bmpui-ui-viu-subtitle > .bmpui-container-wrapper",
                    "injectCSS": ".imt-quick-subtitle-button {margin-bottom: 8px}"
                },
                "subtitleUrlRegExp": "https?://[^/]+\\.cloudfront\\.net/[^/]+/[^/]+$",
                "type": "webvtt"
            }
        },
        {
            "excludeSelectors.add": [
                ".vjs-text-track-display"
            ],
            "id": "linkin",
            "matches": "*.linkedin.com",
            "mutationExcludeSelectors.add": [
                ".vjs-text-track-display *"
            ],
            "subtitleRule.add": {
                "hookType": "xhr",
                "loadingContainerSelector": ".video-player-container",
                "quickButtonRule": {
                    "appendSelector": ".vjs-control-bar",
                    "insertBeforeSelector": ".vjs-captions-toggle"
                },
                "subtitleUrlRegExp": ".*ambry/\\?x-li-ambry-ep=.*",
                "type": "webvtt"
            }
        },
        {
            "excludeSelectors.add": [
                ".vjs-text-track-display"
            ],
            "id": "kanopy",
            "matches": "*.kanopy.com",
            "mutationExcludeSelectors.add": [
                ".vjs-text-track-display *"
            ],
            "subtitleRule.add": {
                "hookType": "xhr",
                "injectedCss": [
                    "#immersive-translate-quick-button-container{height: 40px;display: flex;align-items: center;align-self: flex-end;}"
                ],
                "loadingContainerSelector": ".video-player-container",
                "quickButtonRule": {
                    "appendSelector": ".vjs-control-bar",
                    "insertBeforeSelector": ".vjs-caption-control"
                },
                "subtitleUrlRegExp": ".*captioncache/webvtt.*",
                "type": "webvtt"
            }
        },
        {
            "excludeSelectors.add": [
                ".text-track"
            ],
            "id": "iflix",
            "matches": [
                "www.iflix.com",
                "wetv.vip"
            ],
            "mutationExcludeSelectors.add": [
                ".player-wrapper *"
            ],
            "subtitleRule.add": {
                "hookType": "xhr",
                "loadingContainerSelector": "#player-wrapper",
                "loadingStyle": "bottom: 18%;",
                "quickButtonRule": {
                    "appendSelector": "[data-role=\"wetv-ctrlbar-right\"]",
                    "insertBeforeSelector": "[data-role=\"wetv-player-definition\"]"
                },
                "subtitleUrlRegExp": "\\.vtt",
                "type": "webvtt"
            }
        },
        {
            "excludeSelectors.add": [
                ".jw-text-track-container"
            ],
            "id": "imdb",
            "matches": "www.imdb.com",
            "mutationExcludeSelectors.add": [
                ".jw-text-track-container *"
            ],
            "subtitleRule.add": {
                "loadingContainerSelector": "#imdbnext-vp-jw-single",
                "quickButtonRule": {
                    "appendSelector": ".jw-reset.jw-button-container",
                    "insertBeforeSelector": "[button=\"ttt-button\"]"
                },
                "subtitleUrlRegExp": "\\.srt$",
                "type": "webvtt"
            }
        },
        {
            "id": "itv",
            "matches": [
                "www.itv.com"
            ],
            "subtitleRule.add": {
                "loadingContainerSelector": ".genie-container",
                "loadingStyle": "bottom: unset; top: 5%;",
                "quickButtonRule": {
                    "appendSelector": ".control-bar_right-child-container",
                    "insertBeforeSelector": ".controls-toggle_button--fullscreen"
                },
                "type": "text_track",
                "videoPlayerSelector": ".genie-video"
            }
        },
        {
            "id": "vk.com",
            "matches": "vk.com/video",
            "subtitleRule.add_v.[1.4.12]": {
                "loadingContainerSelector": "#video_player",
                "quickButtonRule": {
                    "appendSelector": ".videoplayer_controls",
                    "insertBeforeSelector": ".videoplayer_btn_subtitles"
                },
                "type": "text_track",
                "videoPlayerSelector": ".videoplayer_media_provider"
            }
        },
        {
            "id": "egghead",
            "matches": [
                "egghead.io"
            ],
            "subtitleRule.add": {
                "loadingContainerSelector": ".cueplayer-react-video-holder",
                "loadingStyle": "bottom: unset; top: 5%;",
                "quickButtonRule": {
                    "appendSelector": ".cueplayer-react-control-bar-right-part",
                    "insertBeforeSelector": ".cueplayer-react-closed-caption"
                },
                "type": "text_track",
                "videoPlayerSelector": ".cueplayer-react-video"
            }
        },
        {
            "id": "coursera",
            "matches": [
                "www.coursera.org"
            ],
            "subtitleRule.add": {
                "loadingContainerSelector": ".rc-VideoControlsContainer",
                "loadingStyle": "bottom: unset; top: 5%;",
                "quickButtonRule": {
                    "appendSelector": "[role=\"presentation\"] > .rc-ControlBar > .icon-container"
                },
                "type": "text_track",
                "videoPlayerSelector": ".vjs-tech"
            }
        },
        {
            "excludeSelectors.add": [
                "#videocastPlayer"
            ],
            "id": "ocrtraining",
            "matches": [
                "ocrtraining.cit.nih.gov",
                "videocast.nih.gov"
            ],
            "mutationExcludeSelectors.add": [
                "#videocastPlayer *"
            ],
            "subtitleRule.add": {
                "loadingContainerSelector": "#videocastPlayer",
                "subtitleUrlRegExp": "\\.srt$",
                "type": "webvtt"
            }
        },
        {
            "excludeSelectors.add": [
                "#fittPageContainer"
            ],
            "id": "espn",
            "mainFrameMinTextCount": 0,
            "matches": [
                "*.espn.com"
            ],
            "mutationExcludeSelectors.add": [
                "#fittPageContainer *"
            ],
            "subtitleRule.add": {
                "injectedCss": [
                    "#immersive-translate-quick-button-container{margin-top:16px;}",
                    ".vjs-text-track-display > div >div {font:unset!important;}"
                ],
                "quickButtonRule": {
                    "appendSelector": ".vjs-control-bar",
                    "insertBeforeSelector": ".vjs-captions-button"
                },
                "subtitleUrlRegExp": "\\.vtt$",
                "type": "webvtt"
            }
        },
        {
            "excludeSelectors.add": [
                ".jw-wrapper"
            ],
            "id": "fmoviesz",
            "matches": [
                "fmoviesz.to",
                "vidplay.online",
                "c8365730d4.nl",
                "kerapoxy.cc",
                "vid41c.site",
                "https://*/*sub.info=*fmoviesz.to*"
            ],
            "mutationExcludeSelectors.add": [
                ".jw-wrapper *"
            ],
            "subtitleRule.add": {
                "activeLangSelector": ".jw-settings-submenu-captions .jw-settings-submenu-items .jw-settings-item-active",
                "attachRule": {
                    "appendSelector": ".jw-wrapper",
                    "injectedGlobalCSS": [
                        ".jw-text-track-container {display: none;}",
                        "@media (min-width: 576px) { video::cue {opacity: 0} }"
                    ]
                },
                "quickButtonRule": {
                    "appendSelector": ".jw-button-container",
                    "insertBeforeSelector": ".jw-icon-cc"
                },
                "subtitleUrlRegExp": "subtitle/.*\\.vtt$",
                "type": "multi_attach_vtt",
                "videoSelector": "video"
            }
        },
        {
            "excludeSelectors.add": [
                ".jw-wrapper"
            ],
            "id": "aniwatch",
            "matches": [
                "megacloud.tv",
                "aniwatch.to"
            ],
            "mutationExcludeSelectors.add": [
                ".jw-wrapper *"
            ],
            "subtitleRule.add": {
                "activeLangSelector": "#jw-player-settings-submenu-captions .jw-settings-submenu-items .jw-settings-item-active",
                "attachRule": {
                    "appendSelector": ".jw-wrapper",
                    "injectedGlobalCSS": [
                        ".jw-text-track-container {display: none;}",
                        "@media (min-width: 576px) { video::cue {opacity: 0} }"
                    ]
                },
                "quickButtonRule": {
                    "appendSelector": ".jw-button-container",
                    "insertBeforeSelector": ".jw-icon-cc"
                },
                "subtitleUrlRegExp": "^(?!.*sprite\\.vtt$).*\\.vtt$",
                "type": "multi_attach_vtt",
                "videoSelector": "video"
            }
        },
        {
            "excludeSelectors.add": [
                ".jw-wrapper"
            ],
            "id": "rottentomatoes",
            "matches": [
                "*.rottentomatoes.com"
            ],
            "mutationExcludeSelectors.add": [
                ".jw-wrapper *"
            ],
            "subtitleRule.add": {
                "quickButtonRule": {
                    "appendSelector": ".jw-button-container",
                    "insertBeforeSelector": ".jw-icon-cc"
                },
                "subtitleUrlRegExp": "\\.vtt$",
                "type": "webvtt"
            }
        },
        {
            "excludeSelectors.add": [
                ".player"
            ],
            "id": "dailymotion",
            "mainFrameMinTextCount": 0,
            "matches": [
                "*.dailymotion.com"
            ],
            "mutationExcludeSelectors.add": [
                ".player *"
            ],
            "subtitleRule.add": {
                "loadingContainerSelector": ".player",
                "quickButtonRule": {
                    "appendSelector": ".controls_bottom_right",
                    "insertBeforeSelector": ".subtitles_toggle_button"
                },
                "subsrtFormat": "srt",
                "subtitleUrlRegExp": "/video/.*\\.srt",
                "type": "subsrt"
            }
        },
        {
            "excludeSelectors.add": [
                "#root"
            ],
            "id": "movie-web",
            "matches": [
                "movie-web.app/media*",
                "movie-web-me.vercel.app/media*"
            ],
            "mutationExcludeSelectors.add": [
                "#root *"
            ],
            "subtitleRule.add": {
                "attachRule": {
                    "appendSelector": ".popout-location div.h-screen.select-none",
                    "injectedGlobalCSS": [
                        ".popout-location .absolute p.pointer-events-none {display: none;}",
                        "#immersive-translate-caption-window {bottom: 80px}"
                    ]
                },
                "hookType": "fetch",
                "loadingContainerSelector": ".relative.h-screen.overflow-hidden",
                "quickButtonRule": {
                    "appendSelector": ".hidden.justify-between .flex.items-center.space-x-3"
                },
                "subsrtFormat": "vtt",
                "subtitleUrlRegExp": ".*\\.vtt",
                "type": "subsrt",
                "videoSelector": "video"
            }
        },
        {
            "excludeSelectors.add": [
                "[data-layout=\"video\"]"
            ],
            "id": "deeplearning",
            "matches": [
                "learn.deeplearning.ai"
            ],
            "mutationExcludeSelectors.add": [
                "[data-layout=\"video\"] *"
            ],
            "subtitleRule.add": {
                "loadingContainerSelector": "[data-layout=\"video\"]",
                "quickButtonRule": {
                    "appendSelector": ".vds-controls-group:last-child",
                    "insertBeforeSelector": ".vds-caption-button"
                },
                "subsrtFormat": "vtt",
                "subtitleUrlRegExp": ".*\\.vtt",
                "type": "subsrt"
            }
        },
        {
            "excludeSelectors.add": [
                ".aa-player-skin"
            ],
            "id": "paramountplus",
            "matches": [
                "*.paramountplus.com"
            ],
            "mutationExcludeSelectors.add": [
                ".aa-player-skin *"
            ],
            "subtitleRule.add": {
                "injectedCss": [
                    ".tt-container {white-space: pre-line;}",
                    ".timed-text-css-box-inner {display: none!important;}",
                    ".timed-text-css-box-inner:last-child {display: block!important;}"
                ],
                "quickButtonRule": {
                    "appendSelector": ".top-menu-container"
                },
                "type": "text_track_dynamic",
                "videoPlayerSelector": "video"
            }
        },
        {
            "id": "plex.tv",
            "matches": [
                "watch.plex.tv"
            ],
            "subtitleRule.add": {
                "injectedCss": [
                    ".tt-container {white-space: pre-line;}",
                    ".timed-text-css-box-inner {display: none!important;}",
                    ".timed-text-css-box-inner:last-child {display: block!important;}"
                ],
                "loadingContainerSelector": "[data-testid='player']",
                "quickButtonRule": {
                    "appendSelector": "[class^='PlayerControls_bottomControls'] > div > div:last-child",
                    "insertBeforeSelector": "[class^='PlayerControls_bottomControls'] > div > div:last-child > div:last-child"
                },
                "type": "text_track_dynamic",
                "videoPlayerSelector": "video"
            }
        },
        {
            "excludeSelectors.add": [
                ".video-player-layout"
            ],
            "id": "pluto",
            "matches": [
                "pluto.tv"
            ],
            "mutationExcludeSelectors.add": [
                ".video-player-layout *"
            ],
            "subtitleRule.add": {
                "quickButtonRule": {
                    "appendSelector": ".endControls-0-2-85"
                },
                "type": "text_track_dynamic",
                "videoPlayerSelector": "video"
            }
        },
        {
            "excludeSelectors.add": [
                "#video"
            ],
            "id": "ted",
            "matches": [
                "www.ted.com"
            ],
            "mutationExcludeSelectors.add": [
                "#video *"
            ],
            "subtitleRule.add": {
                "hookType": "fetch",
                "loadingContainerSelector": "media-controller",
                "quickButtonRule": {
                    "appendSelector": ".pointer-events-none #media-control-bar",
                    "insertBeforeSelector": ".pointer-events-none .media-volume-wrapper"
                },
                "subtitleUrlRegExp": "\\.vtt",
                "type": "webvtt",
                "videoPlayerSelector": "video"
            }
        },
        {
            "excludeSelectors.add": [
                ".vp-captions"
            ],
            "id": "vimeo",
            "mainFrameMinTextCount": 0,
            "mainFrameMinWordCount": 0,
            "matches": [
                "vimeo.com"
            ],
            "mutationExcludeSelectors.add": [
                ".vp-captions *"
            ],
            "subtitleRule.add": {
                "injectedCss": [
                    "#immersive-translateQuickButton {visibility: inherit!important;}"
                ],
                "loadingContainerSelector": ".player_container",
                "loadingStyle": "bottom: unset; top: 5%;",
                "quickButtonRule": {
                    "appendSelector": "[data-control-bar=\"true\"] > div",
                    "ccEnableSelector": "[data-cc-button=\"true\"]",
                    "injectCSS": ".imt-quick-subtitle-button {margin-right: 0px; font-size: 12px;} .logo,.logo svg { height: 18px !important; width: 18px !important;} .imt-quick-subtitle-pop-content {bottom: 28px !important;}",
                    "insertBeforeSelector": "[data-volume-control-container=\"true\"]"
                },
                "type": "text_track",
                "videoPlayerSelector": "video"
            }
        },
        {
            "excludeSelectors.add": [
                ".vp-captions-line"
            ],
            "extraBlockSelectors": [
                "span.vp-captions-line",
                "span[class^=CaptionsRenderer_]"
            ],
            "id": "player.vimeo",
            "mainFrameMinTextCount": 0,
            "mainFrameMinWordCount": 0,
            "matches": [
                "https://player.vimeo.com/video/*",
                "laracasts.com"
            ],
            "mutationExcludeSelectors.add": [
                ".vp-captions *",
                ".vp-captions-line *"
            ],
            "selectorMatches": [
                "iframe[src*='player.vimeo.com']"
            ],
            "subtitleRule.add": {
                "injectedCss": [
                    "#immersive-translateQuickButton {visibility: inherit!important;}"
                ],
                "loadingContainerSelector": ".vp-telecine",
                "loadingStyle": "bottom: unset; top: 5%; font-size: 12px;",
                "quickButtonRule": {
                    "appendSelector": "[data-control-bar=\"true\"] > div",
                    "ccEnableSelector": "[data-cc-button=\"true\"]",
                    "injectCSS": ".imt-quick-subtitle-button {margin-right: 0px; font-size: 12px;} .logo,.logo svg { height: 18px !important; width: 18px !important;} .imt-quick-subtitle-pop-content {bottom: 28px !important;}",
                    "insertBeforeSelector": "[data-volume-control-container=\"true\"]"
                },
                "type": "text_track",
                "videoPlayerSelector": "video"
            }
        },
        {
            "excludeSelectors.add": [
                ".mpc-player"
            ],
            "id": "tv.adobe",
            "matches": "https://*.tv.adobe.com",
            "mutationExcludeSelectors.add": [
                ".mpc-player *"
            ],
            "subtitleRule.add": {
                "loadingContainerSelector": ".mpc-player",
                "quickButtonRule": {
                    "appendSelector": ".mpc-controls__container"
                },
                "type": "text_track",
                "videoPlayerSelector": "video"
            }
        },
        {
            "excludeSelectors.add": [
                ".video-area"
            ],
            "id": "threejs-journey",
            "matches": "threejs-journey.com",
            "mutationExcludeSelectors.add": [
                ".video-area *"
            ],
            "subtitleRule.add": {
                "injectedCss": [
                    ".js-tracks-text.tracks-text {white-space: pre;}"
                ],
                "loadingContainerSelector": ".video-area",
                "quickButtonRule": {
                    "appendSelector": ".js-controls .right",
                    "injectCSS": ".imt-quick-subtitle-button { font-size: 12px;} .logo,.logo svg { height: 18px !important; width: 18px !important;} .imt-quick-subtitle-pop-content {bottom: 38px !important;}",
                    "insertBeforeSelector": ".js-subtitles"
                },
                "type": "text_track",
                "videoPlayerSelector": "video"
            }
        },
        {
            "id": "comsol",
            "matches": [
                "www.comsol.com/"
            ],
            "subtitleRule.add": {
                "attachRule": {
                    "appendSelector": ".w-video-wrapper",
                    "injectedGlobalCSS": [
                        ".w-captions-line { display: none !important; }"
                    ]
                },
                "type": "text_track",
                "videoPlayerSelector": "video",
                "videoSelector": "video"
            }
        },
        {
            "excludeSelectors.add": [
                ".w-captions",
                ".w-captions-line > div > span"
            ],
            "id": "codewithchris",
            "matches": [
                "learn.codewithchris.com",
                "*.rachelsenglishacademy.com",
                "www.unrealsenseiacademy.com",
                "www.comsol.com/video/*",
                "www.comsol.com/blogs/*"
            ],
            "mutationExcludeSelectors.add": [
                ".w-captions *"
            ],
            "subtitleRule.add": {
                "generalSetting": {
                    "captionsPath": "captions",
                    "itemsPath": "hash.lines",
                    "textKey": "text"
                },
                "hookType": "fetch",
                "loadingContainerSelector": ".w-ui-container",
                "subtitleUrlRegExp": "/embed/captions/",
                "type": "general"
            }
        },
        {
            "excludeSelectors.add": [
                ".primaryPlayer"
            ],
            "id": "panopto",
            "matches": [
                "southampton.cloud.panopto.eu"
            ],
            "mutationExcludeSelectors.add": [
                ".primaryPlayer *"
            ],
            "subtitleRule.add": {
                "disableSubsCache": true,
                "generalSetting": {
                    "textKey": "Caption"
                },
                "hookType": "fetch",
                "loadingContainerSelector": "#primaryPlayer",
                "quickButtonRule": {
                    "appendSelector": "#transportControls",
                    "insertBeforeSelector": "#captionsButton"
                },
                "subtitleUrlRegExp": "DeliveryInfo.aspx",
                "type": "general"
            }
        },
        {
            "excludeSelectors.add": [
                ".closed-captions",
                ".subtitles-menu"
            ],
            "id": "edx",
            "mainFrameMinTextCount": 0,
            "matches": [
                "*.edx.org"
            ],
            "subtitleRule.add": {
                "generalSetting": {
                    "itemsPath": "text"
                },
                "injectedCss": [
                    ".subtitles-menu span,.closed-captions {white-space: pre-line;}",
                    "#immersive-translate-quick-button-container {display: inline-block; vertical-align: middle;}"
                ],
                "loadingContainerSelector": ".tc-wrapper",
                "quickButtonRule": {
                    "appendSelector": ".secondary-controls",
                    "insertBeforeSelector": ".speeds.menu-container"
                },
                "subtitleUrlRegExp": "/transcript/translation/",
                "type": "general"
            }
        },
        {
            "excludeSelectors.add": [
                ".ardplayer-viewport-addon-overlays"
            ],
            "id": "ardmediathek",
            "matches": [
                "www.ardmediathek.*"
            ],
            "mutationExcludeSelectors.add": [
                ".ardplayer-viewport-addon-overlays *"
            ],
            "subtitleRule.add": {
                "hookType": "fetch",
                "loadingContainerSelector": ".ardplayer-viewport-addon-overlays",
                "quickButtonRule": {
                    "appendSelector": ".ardplayer-footer .ardplayer-addons-container",
                    "injectCSS": ".imt-quick-subtitle-button {font-size: 20px; } .logo,.logo svg { height: 36px !important; width: 36px !important;} .imt-quick-subtitle-pop-content {z-index: 2147483647;} ",
                    "insertBeforeSelector": ".ardplayer-footer .ardplayer-button-sharing"
                },
                "subtitleUrlRegExp": "subtitle/ebutt",
                "type": "ebutt"
            }
        },
        {
            "excludeSelectors.add": [
                ".player"
            ],
            "id": "bbc-iplayer",
            "matches": [
                "https://www.bbc.*/iplayer*"
            ],
            "mutationExcludeSelectors.add": [
                ".player *"
            ],
            "subtitleRule.add": {
                "hookType": "fetch",
                "loadingContainerSelector": ".player__container",
                "subtitleUrlRegExp": "iplayer/subtitles/.*.xml",
                "type": "ebutt"
            }
        },
        {
            "excludeSelectors.add": [
                "section.module--languages",
                ".drop-capped",
                ".smp-toucan-player",
                "smp-subtitles",
                "#subtitle_subtitle2"
            ],
            "id": "bbc",
            "matches": [
                "*.bbc.*"
            ],
            "mutationExcludeSelectors.add": [
                "[data-testid='media-player-container-landscape'] *"
            ],
            "subtitleRule.add": {
                "hookType": "fetch",
                "loadingContainerSelector": ".smp-toucan-player",
                "subtitleUrlRegExp": "iplayer/subtitles/.*.xml",
                "type": "ebutt"
            }
        },
        {
            "excludeSelectors.add": [
                ".zdfplayer-cue-region"
            ],
            "id": "zdf.de",
            "matches": [
                "www.zdf.de"
            ],
            "subtitleRule.add": {
                "injectedCss": [
                    "#immersive-translate-quick-button-container {display:inline-block;vertical-align:middle;margin-right:-16px;}"
                ],
                "loadingContainerSelector": ".zdfplayer-video-container",
                "quickButtonRule": {
                    "appendSelector": ".right-controls-1FfJUp.svelte-inzdbf",
                    "insertBeforeSelector": ".right-controls-1FfJUp.svelte-inzdbf button"
                },
                "responseType": "document",
                "subtitleUrlRegExp": "mtt/.*.xml",
                "type": "ebutt"
            }
        },
        {
            "id": "piped.video",
            "matches": "piped.video",
            "subtitleRule.add": {
                "hookType": "fetch",
                "loadingContainerSelector": ".shaka-video-container",
                "quickButtonRule": {
                    "appendSelector": ".shaka-controls-button-panel",
                    "insertBeforeSelector": ".shaka-mute-button"
                },
                "responseType": "document",
                "subtitleUrlRegExp": "api/timedtext",
                "type": "ebutt"
            }
        },
        {
            "excludeSelectors.add": [
                ".dss-hls-subtitle-overlay"
            ],
            "id": "disneyplus",
            "matches": [
                "www.disneyplus.com"
            ],
            "mutationExcludeSelectors.add": [
                ".dss-hls-subtitle-overlay *"
            ],
            "subtitleRule.add": {
                "subtitleUrlRegExp": "\\.vtt$",
                "type": "disneyplus"
            }
        },
        {
            "id": "mubi",
            "matches": [
                "https://mubi.com",
                "https://mubi.de"
            ],
            "subtitleRule.add": {
                "hookType": "fetch",
                "quickButtonRule": {
                    "appendSelector": ".css-1k6yql2.e1b63bld4",
                    "insertBeforeSelector": ".css-1ce7rqp.e7f2hfl0"
                },
                "subtitleUrlRegExp": "textstream",
                "type": "fmp4.xml"
            }
        },
        {
            "id": "hulu",
            "matches": "https://*.hulu.com",
            "subtitleRule.add": {
                "hookType": "fetch",
                "injectedCss": [
                    ".ClosedCaption {display:none!important;}"
                ],
                "loadingContainerSelector": "#web-player-app",
                "quickButtonRule": {
                    "appendSelector": ".PlayerSettingsGroup",
                    "insertBeforeSelector": ".PlayerSettingsGroup .PlayerControlsButton"
                },
                "subtitleUrlRegExp": "play.hulu.com/.*/playlist",
                "type": "hulu",
                "videoSelector": "#content-video-player"
            }
        },
        {
            "excludeSelectors.add": [
                "#subtitle"
            ],
            "id": "youku.tv",
            "matches": "www.youku.tv",
            "mutationExcludeSelectors.add": [
                "#subtitle *"
            ],
            "subtitleRule.add": {
                "hookType": "fetch",
                "injectedCss": [
                    "#immersive-translate-quick-button-container {display: inline-block; vertical-align: middle;}"
                ],
                "loadingContainerSelector": "#youku-dashboard",
                "loadingStyle": "bottom: 10%;",
                "quickButtonRule": {
                    "appendSelector": ".kui-dashboard-dashboard-panel .kui-dashboard-rear-ctn",
                    "insertBeforeSelector": ".kui-rate-control-0"
                },
                "subsrtFormat": "ass",
                "subtitleUrlRegExp": "\\.ass$",
                "type": "subsrt"
            }
        },
        {
            "excludeSelectors.add": [
                "starz-player"
            ],
            "id": "starz",
            "matches": "www.starz.com",
            "mutationExcludeSelectors.add": [
                "starz-player *"
            ],
            "subtitleRule.add": {
                "injectedCss": [
                    "#immersive-translate-quick-button-container {display: inline-block;}"
                ],
                "loadingContainerSelector": "starz-player",
                "loadingStyle": "bottom: 10%;",
                "quickButtonRule": {
                    "appendSelector": "starz-player .button-group",
                    "insertBeforeSelector": "starz-player .button-group .video-player-icon-md"
                },
                "subsrtFormat": "vtt",
                "subtitleUrlRegExp": "\\.vtt$",
                "type": "subsrt"
            }
        },
        {
            "excludeSelectors.add": [
                ".iqp-subtitle"
            ],
            "id": "www.iq.com",
            "matches": "www.iq.com",
            "mutationExcludeSelectors.add": [
                ".iqp-subtitle *"
            ],
            "subtitleRule.add": {
                "injectedCss": [
                    ".iqp-player {direction: ltr !important;}",
                    "#immersive-translate-quick-button-container {float: right; height: 100%;}"
                ],
                "loadingContainerSelector": ".intl-video-area",
                "loadingStyle": "bottom: 10%;",
                "quickButtonRule": {
                    "appendSelector": ".iqp-contrls-right"
                },
                "subtitleUrlRegExp": "\\.xml\\?",
                "type": "xml",
                "xmlTextSelector": "sub"
            }
        },
        {
            "excludeSelectors.add": [
                "#HEADER"
            ],
            "id": "archiveToday",
            "matches": [
                "archive.today",
                "archive.ph",
                "archive.is",
                "archive.md"
            ]
        },
        {
            "excludeSelectors.add": [
                ".arxiv-vanity-wrapper"
            ],
            "id": "arxiv-vanity.com",
            "matches": [
                "www.arxiv-vanity.com"
            ]
        },
        {
            "additionalExcludeSelectors.remove": [
                "[translate=no]"
            ],
            "additionalStayOriginalSelectors.add": [
                ".entity-node-view-container"
            ],
            "id": "fibery",
            "matches": [
                "the.fibery.io"
            ]
        },
        {
            "excludeSelectors.add": [
                ".material-symbols-outlined"
            ],
            "id": "makersuite.google",
            "matches": "makersuite.google.com"
        },
        {
            "globalAttributes": {
                ".crossreference.notranslate": {
                    "class": "crossreference"
                },
                ".foreign.notranslate": {
                    "class": "foreign"
                }
            },
            "id": "etymonline",
            "matches": "www.etymonline.com"
        },
        {
            "excludeSelectors.add": [
                ".desktop_header",
                "[class*='ltx_lst_language_']",
                "div.package-alerts"
            ],
            "id": "https://browse.arxiv.org/",
            "matches": [
                "https://browse.arxiv.org",
                "https://arxiv.org/html/*"
            ]
        },
        {
            "excludeSelectors.add": [
                ".audio-duration",
                "[data-qa='card-item-count']"
            ],
            "globalStyles": {
                ".card__heading": "-webkit-line-clamp:unset;",
                "search-results-vue-pharos-image-card,search-ui-pharos-image-card": "display:flex;",
                "search-results-vue-pharos-link": "display:inline;"
            },
            "id": "jstor",
            "matches": "www.jstor.org"
        },
        {
            "extraInlineSelectors.add": [
                "span.off-screen"
            ],
            "id": "tandfonline",
            "matches": "*.tandfonline.com"
        },
        {
            "excludeTags.remove": [
                "BUTTON"
            ],
            "id": "boringreport",
            "matches": [
                "www.boringreport.org"
            ]
        },
        {
            "id": "bsky.app",
            "isTranslateTitle": false,
            "matches": "https://bsky.app",
            "selectors": [
                "[data-testid=postText]"
            ]
        },
        {
            "id": "peacocktv",
            "injectedCss": [
                ".video-player__subtitles__line > font,.video-player__subtitles__line:only-child{display:block;}"
            ],
            "matches": [
                "*.peacocktv.com"
            ]
        },
        {
            "additionalExcludeSelectors.remove": [
                ".notranslate",
                "[translate=no]"
            ],
            "id": "noTranslate",
            "matches": [
                "*.tiktok.com",
                "altis.world",
                "*.newthingsunderthesun.com",
                "*.gumroad.com",
                "edstem.org",
                "actions.tldrnewsletter.com",
                "community.linkingyourthinking.com",
                "doc.qt.io",
                "winaero.com"
            ]
        },
        {
            "additionalInlineSelectors.add": [
                ".tooltiptext"
            ],
            "id": "jmir",
            "matches": [
                "*.jmir.org"
            ]
        },
        {
            "excludeSelectors.add": [
                ".z-highlight",
                ".feed-block-info",
                ".z-feed-foot",
                ".feed-block-descripe",
                "#J_column_tab_box",
                ".crumbs"
            ],
            "globalStyles": {
                ".feed-block-title": "height:unset"
            },
            "id": "smzdm",
            "matches": [
                "www.smzdm.com"
            ]
        },
        {
            "excludeSelectors.add": [
                ".author-wrapper",
                ".info",
                ".side-bar"
            ],
            "globalStyles": {
                "a.title": "-webkit-line-clamp:3"
            },
            "id": "xiaohongshu.com",
            "matches": [
                "www.xiaohongshu.com"
            ]
        },
        {
            "globalStyles": {
                "function": "position:relative;z-index:1000;"
            },
            "id": "learnopengl",
            "matches": [
                "learnopengl.com"
            ]
        },
        {
            "extraBlockSelectors.add": [
                ".nav > *"
            ],
            "id": "notateslaapp",
            "matches": [
                "www.notateslaapp.com"
            ]
        },
        {
            "id": "eightfold",
            "injectedCss": [
                ".flexbox{width:100%}"
            ],
            "matches": [
                "*.eightfold.ai"
            ]
        },
        {
            "id": "deno",
            "injectedCss": [
                ":root {font-feature-settings:unset}"
            ],
            "matches": [
                "deno.com",
                "deno.land"
            ]
        },
        {
            "excludeSelectors.add": [
                ".searchTitle__textContent",
                ".searchOptions__container",
                ".compactTrackListItem__additional",
                ".soundTitle__tagContainer",
                ".searchResultGroupHeading",
                ".sc-ministats-group",
                ".compactTrackList__moreLink",
                ".sound__soundActions"
            ],
            "id": "soundcloud",
            "injectedCss": [
                ".compactTrackListItem {height: unset !important;}"
            ],
            "matches": "soundcloud.com"
        },
        {
            "excludeSelectors.add": [
                ".comments",
                ".time"
            ],
            "extraBlockSelectors.add": [
                ".item",
                ".heading a",
                ".info_find a"
            ],
            "globalStyles": {
                ".text,.title_post,.text_post,p,strong,div": "-webkit-line-clamp:unset;max-height:unset;height:unset;"
            },
            "id": "section.blog.naver.com",
            "matches": "section.blog.naver.com"
        },
        {
            "excludeSelectors.add": [
                "[data-testid=\"block-label\"]"
            ],
            "excludeTags.remove": [
                "BUTTON"
            ],
            "id": "gradio-app",
            "mutationConfig.add": {
                "buildTimeout": 1000,
                "consumeTimeout": 1000
            },
            "selectorMatches": "gradio-app"
        },
        {
            "excludeSelectors.add": [
                ".xleft",
                ".xright",
                "#navcolumn"
            ],
            "id": "hadoop.apache.org",
            "matches": "hadoop.apache.org"
        },
        {
            "id": "docs.unity3d",
            "injectedCss.add": [
                ".immersive-translate-target-inner .tooltiptext {display: none;}",
                ".immersive-translate-target-inner .tooltip {cursor:pointer;border-bottom:unset;}"
            ],
            "mainFrameSelector": [
                ".tooltip > .tooltiptext"
            ],
            "matches": "docs.unity3d.com",
            "stayOriginalSelectors": [
                ".tooltip"
            ]
        },
        {
            "id": "icloud-sandbox",
            "injectedCss.add": [
                "body{overflow-y:scroll!important;}"
            ],
            "matches": "www-mail.icloud-sandbox.com"
        }
    ],
    "buildinConfigUpdatedAt": "2024-05-04T01:44:07.942Z",
    "targetLanguage": "zh-CN",
    "interfaceLanguage": "en",
    "debug": false,
    "alpha": false,
    "translationUrlPattern": {
        "matches": [],
        "excludeMatches": []
    },
    "translationBodyAreaPattern": {
        "matches": [],
        "excludeMatches": [],
        "selectorMatches": [],
        "excludeSelectorMatches": []
    },
    "translationTheme": "none",
    "mouseHoverTranslationService": "inherit",
    "subtitleTranslateService": "inherit",
    "translationArea": "main",
    "aiAssistantIds": [],
    "enableAiAssistant": false,
    "enableEditTranslation": false,
    "latestVersion": "1.5.1",
    "rawUserConfig": {
        "isChangedAlwaysTranslatedUrls": false
    }
}
