var sA = [["auto", "auto"], ["zh-CN", "Simplified Chinese"], ["zh-TW", "Traditional Chinese"], ["zh-CN-NE", "Northeastern Chinese"], ["en", "English"], ["yue", "Cantonese"], ["bo", "\u85CF\u8BED"], ["wyw", "Classical Chinese"], ["ja", "Japanese"], ["ko", "Korean"], ["fr", "French"], ["de", "German"], ["es", "Spanish"], ["it", "Italian"], ["ru", "Russian"], ["pt", "Portuguese"], ["pt-br", "Portuguese (Brazil)"], ["nl", "Dutch"], ["pl", "Polish"], ["ar", "Arabic"], ["af", "Afrikaans"], ["am", "Amharic"], ["az", "Azerbaijani"], ["be", "Belarusian"], ["bg", "Bulgarian"], ["bn", "Bengali"], ["bs", "Bosnian"], ["ca", "Catalan"], ["ceb", "Cebuano"], ["co", "Corsican"], ["cs", "Czech"], ["cy", "Welsh"], ["da", "Danish"], ["el", "Greek"], ["eo", "Esperanto"], ["et", "Estonian"], ["eu", "Basque"], ["fa", "Persian"], ["fi", "Finnish"], ["fj", "Fijian"], ["fil", "Filipino"], ["fy", "Western Frisian"], ["ga", "Irish"], ["gd", "Scottish Gaelic"], ["gl", "Galician"], ["gu", "Gujarati"], ["ha", "Hausa"], ["haw", "Hawaiian"], ["he", "Hebrew"], ["hi", "Hindi"], ["hmn", "Hmong"], ["hr", "Croatian"], ["ht", "Haitian Creole"], ["hu", "Hungarian"], ["hy", "Armenian"], ["id", "Indonesian"], ["ig", "Igbo"], ["is", "Icelandic"], ["jw", "Javanese"], ["ka", "Georgian"], ["kk", "Kazakh"], ["km", "Khmer"], ["kn", "Kannada"], ["ku", "Kurdish"], ["ky", "Kyrgyz"], ["la", "Lao"], ["lb", "Luxembourgish"], ["lo", "Lao"], ["lt", "Lithuanian"], ["lv", "Latvian"], ["mg", "Malagasy"], ["mi", "Maori"], ["mk", "Macedonian"], ["ml", "Malayalam"], ["mn", "Mongolian"], ["mr", "Marathi"], ["ms", "Malay"], ["mt", "Maltese"], ["my", "Burmese"], ["pa", "Punjabi"], ["ps", "Pashto"], ["ro", "Romanian"], ["si", "Sinhala"], ["sk", "Slovak"], ["sl", "Slovene"], ["sa", "Sanskrit"], ["sm", "Samoan"], ["sn", "Shona"], ["so", "Somali"], ["sq", "Albanian"], ["sr", "Serbian"], ["sr-Cyrl", "Serbian (Cyrillic)"], ["sr-Latn", "Serbian (Latin)"], ["st", "Southern Sotho"], ["su", "Sundanese"], ["sv", "Swedish"], ["sw", "Swahili"], ["ta", "Tamil"], ["te", "Telugu"], ["tg", "Tajik"], ["th", "Thai"], ["tr", "Turkish"], ["ug", "Uyghur"], ["uk", "Ukrainian"], ["ur", "Urdu"], ["uz", "Uzbek"], ["vi", "Vietnamese"], ["xh", "Xhosa"], ["yi", "Yiddish"], ["yo", "Yoruba"], ["zu", "Zulu"]]
    , L2 = new Map(sA)
    , Xp = class extends no {
    static langMap = L2;
    provider = "custom";
    immersiveApiUrl = "https://openai-api.immersivetranslate.com/v1/chat/completions";
    immersiveProApiUrl = Qt() || Rn() ? "https://api2.immersivetranslate.com/openai/v1/chat/completions" : "https://test-api2.immersivetranslate.com/openai/v1/chat/completions";
    temperature = 0;
    constructor(e, n, r) {
        if (super(e, n, r),
        e || (e = {}),
        e.provider && (this.provider = e.provider),
        e.temperature !== void 0 && (this.temperature = parseFloat(e.temperature)),
        this.provider === "pro") {
            if (!r.isPro)
                throw new V("Please activate Pro membership first, \u8BF7\u5148\u5F00\u901A Pro \u4F1A\u5458\u3002");
            let a = r.userToken || "";
            if (this.apiKeys = a.split(",").map(i=>i.trim()),
                !a)
                throw new V("Login required, \u767B\u5F55\u540E\u624D\u53EF\u4EE5\u4F7F\u7528\u3002");
            e.proModel && (e.model = e.proModel),
            e.proLimit && (e.limit = e.proLimit)
        }
        e && e.immersiveApiUrl && (this.immersiveApiUrl = qt(this.immersiveApiUrl, e.immersiveApiUrl)),
            this.apiUrl = "https://api.openai.com/v1/chat/completions",
        e.apiUrl && (this.apiUrl = qt(this.apiUrl, e.apiUrl)),
        e && e.immersiveProApiUrl && (this.immersiveProApiUrl = qt(this.immersiveProApiUrl, e.immersiveProApiUrl)),
            this.model = e.model || "gpt-3.5-turbo-1106"
    }
    getLangMap() {
        return L2
    }
    getDefaultRateLimit() {
        return {
            limit: 10,
            interval: 1300
        }
    }
    parseResponse(e) {
        return e?.choices?.[0]?.message?.content?.trim()
    }
    async handleOptions(e, n) {
        let r = {};
        n.refresh && (r["X-Refresh"] = "True"),
        n.debug && (r["X-Debug"] = "True");
        let a = [{
            role: "system",
            content: this.serviceConfig.systemPrompt || ""
        }, {
            role: "user",
            content: e
        }]
            , i = {
            url: this.apiUrl,
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: this.model,
                temperature: this.temperature,
                messages: a
            }, null, 2),
            timeout: this.requestTimeout,
            retry: this.retry
        }
            , o = this.getRandomKey();
        return this.provider === "pro" ? (i.url = this.immersiveProApiUrl,
            i.headers.token = o,
            i.headers = {
                ...i.headers,
                ...r
            }) : o && (i.headers.Authorization = "Bearer " + o,
            i.headers["api-key"] = o,
        o.startsWith("immersiveopenai_") && (i.url = this.immersiveProApiUrl,
            i.headers.token = o,
        o.endsWith("x") || (i.headers["Immersive-Corpus-Campagin"] = "yes"),
            delete i.headers.Authorization,
            delete i.headers["api-key"],
            i.headers = {
                ...i.headers,
                ...r
            })),
            i
    }
    getCacheKeyPrefix() {
        let e = ["openai", this.provider || "", this.model || "", this.systemPrompt || "", this.prompt || "", this.systemPrompt || "", this.multiplePrompt || "", this.subtitlePrompt || ""];
        return Ln(e.join("_"))
    }
}
    , _2 = Xp;
