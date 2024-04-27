
var Q2 = [["zh-CN", "zh"], ["en", "en"], ["ja", "ja"], ["ko", "ko"], ["fr", "fr"], ["es", "es"], ["ru", "ru"]]
    , pg = class extends Qa {
    static langMap = new Map(Q2);
    constructor(e, n, r) {
        if (!e?.token)
            throw new V("token are required");
        super({
            ...e,
            isSupportList: !0,
            langs: Q2,
            keywords: {
                token: e.token?.trim()
            },
            request: {
                headers: {
                    "content-type": "application/json",
                    "x-authorization": "token {token:random}"
                },
                url: "https://api.interpreter.caiyunai.com/v1/translator",
                retry: 2,
                body: {
                    source: "{text}",
                    trans_type: "{from}2{to}"
                }
            },
            response: {
                text: "target"
            }
        }, n, r)
    }
}
    , J2 = pg;
