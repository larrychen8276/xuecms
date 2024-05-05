var ll = {
    manifest_version: 3,
    name: "__MSG_brandName__",
    description: "__MSG_brandDescription__",
    version: "1.4.7",
    default_locale: "en",
    background: {
        service_worker: "background.js"
    },
    web_accessible_resources: ["styles/inject.css", "pdf/index.html", "video-subtitle/inject.js"],
    content_scripts: [{
        matches: ["<all_urls>", "file:///*", "*://*/*"],
        js: ["content_script.js"],
        run_at: "document_end",
        all_frames: !0
    }, {
        matches: ["<all_urls>", "file:///*", "*://*/*"],
        js: ["content_start.js"],
        run_at: "document_start",
        all_frames: !0
    }],
    commands: {
        toggleTranslatePage: {
            suggested_key: {
                default: "Alt+A"
            },
            description: "__MSG_toggleTranslatePage__"
        },
        toggleTranslateTheWholePage: {
            suggested_key: {
                default: "Alt+W"
            },
            description: "__MSG_toggleTranslateTheWholePage__"
        },
        toggleOnlyTransation: {
            description: "__MSG_toggleOnlyTransation__"
        },
        toggleTranslateToThePageEndImmediately: {
            description: "__MSG_toggleTranslateToThePageEndImmediately__"
        },
        toggleTranslateTheMainPage: {
            description: "__MSG_toggleTranslateTheMainPage__"
        },
        toggleTranslationMask: {
            description: "__MSG_toggleTranslationMask__"
        },
        shareToDraft: {
            description: "__MSG_shareToDraft__"
        },
        toggleMouseHoverTranslateDirectly: {
            description: "__MSG_toggleMouseHoverTranslateDirectly__"
        },
        translateWithOpenAI: {
            description: "__MSG_translateWithOpenAI__"
        },
        translateWithDeepL: {
            description: "__MSG_translateWithDeepL__"
        },
        translateWithGoogle: {
            description: "__MSG_translateWithGoogle__"
        },
        translateWithTransmart: {
            description: "__MSG_translateWithTransmart__"
        },
        translateWithGemini: {
            description: "__MSG_translateWithGemini__"
        },
        translateWithBing: {
            description: "__MSG_translateWithBing__"
        },
        translateInputBox: {
            description: "__MSG_translateInputBox__"
        },
        toggleVideoSubtitlePreTranslation: {
            description: "__MSG_toggleVideoSubtitlePreTranslation__"
        }
    },
    options_page: "options.html",
    options_ui: {
        page: "options.html",
        open_in_tab: !0,
        browser_style: !1
    },
    permissions: ["storage", "activeTab", "contextMenus", "webRequest", "webRequestBlocking", "declarativeNetRequestWithHostAccess", "declarativeNetRequestFeedback", "declarativeNetRequest"],
    host_permissions: ["<all_urls>"],
    declarative_net_request: {
        rule_resources: [{
            id: "ruleset_1",
            enabled: !0,
            path: "rules/request_modifier_rule.json"
        }]
    },
    action: {
        default_popup: "popup.html",
        default_icon: {
            "32": "icons/32.png",
            "48": "icons/48.png",
            "64": "icons/64.png",
            "128": "icons/128.png",
            "256": "icons/256.png"
        }
    },
    browser_action: {
        default_icon: "icons/32.png",
        default_popup: "popup.html",
        theme_icons: [{
            dark: "icons/32.png",
            light: "icons/dark-32.png",
            size: 32
        }, {
            dark: "icons/48.png",
            light: "icons/dark-48.png",
            size: 48
        }, {
            dark: "icons/64.png",
            light: "icons/dark-64.png",
            size: 64
        }, {
            dark: "icons/128.png",
            light: "icons/dark-128.png",
            size: 128
        }, {
            dark: "icons/256.png",
            light: "icons/dark-256.png",
            size: 256
        }]
    },
    icons: {
        "32": "icons/32.png",
        "48": "icons/48.png",
        "64": "icons/64.png",
        "128": "icons/128.png",
        "256": "icons/256.png"
    },
    browser_specific_settings: {
        gecko: {
            id: "{5efceaa7-f3a2-4e59-a54b-85319448e305}",
            strict_min_version: "63.0"
        },
        gecko_android: {
            strict_min_version: "113.0"
        }
    },
    key: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7JPn78UfqI3xIIOPPLPS74UTzLfJL1gQM8hlk/deKWvFP/WqUBnPJPdhQeF45sFpI1OjO70nFqdATT4/RwYAiZK7G/E6m27MDVnhHjszfzReOuoAEn9J3RnE2xEx5pFhRFcelhnwTTLrrn90aaPcaMtNsgXtZA1Ggz/SnX9I4ZygqpJYjx3Ql2t6SyNK222oRQiKMT93Rrjgyc8RFA7FKXsWglG0TvseRjbmG5Jk5gDx+2/YTcWGqCDotQnWnkPj/dBO23UAX7IpyJK3FGYdkvWFih6OVClHIIWY8mfCjjwSGbXNQNesaa9F2hrzBZ5MRTj4m7yj76mGxuPHPIE8mwIDAQAB"
};
