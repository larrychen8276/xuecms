var Ms = class extends Qa {
        constructor(e, n, r) {
            super({
                ...e,
                isSupportList: !0,
                langs: (e.langs || "zh-CN,en").split(",").map(a=>[a, a]),
                limitPerSecond: e.limitPerSecond || 5,
                maxTextLengthPerRequest: e.maxTextLengthPerRequest || 1200,
                maxTextGroupLengthPerRequest: e.maxTextGroupLengthPerRequest || 1,
                placeholderDelimiters: e.placeholderDelimiters || es,
                request: {
                    url: e.url,
                    retry: 2,
                    body: {
                        text_list: "{text}",
                        source_lang: "{from}",
                        target_lang: "{to}"
                    }
                },
                response: {
                    text: "translations.text"
                }
            }, n, r)
        }
    }
;
