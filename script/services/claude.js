var DA = [["auto", "auto"], ["zh-CN", "Simplified Chinese"], ["zh-TW", "Traditional Chinese"], ["en", "English"], ["ja", "Japanese"], ["ko", "Korean"], ["fr", "French"], ["de", "German"], ["es", "Spanish"], ["it", "Italian"], ["ru", "Russian"], ["pt", "Portuguese"], ["pt-br", "Portuguese (Brazil)"], ["nl", "Dutch"], ["pl", "Polish"], ["ar", "Arabic"], ["af", "Afrikaans"], ["am", "Amharic"], ["az", "Azerbaijani"], ["be", "Belarusian"], ["bg", "Bulgarian"], ["bn", "Bengali"], ["bs", "Bosnian"], ["ca", "Catalan"], ["ceb", "Cebuano"], ["co", "Corsican"], ["cs", "Czech"], ["cy", "Welsh"], ["da", "Danish"], ["el", "Greek"], ["eo", "Esperanto"], ["et", "Estonian"], ["eu", "Basque"], ["fa", "Persian"], ["fi", "Finnish"], ["fil", "Filipino"], ["ga", "Irish"], ["gd", "Scots Gaelic"], ["gl", "Galician"], ["gu", "Gujarati"], ["ha", "Hausa"], ["haw", "Hawaiian"], ["he", "Hebrew"], ["hi", "Hindi"], ["hmn", "Hmong"], ["hr", "Croatian"], ["ht", "Haitian Creole"], ["hu", "Hungarian"], ["hy", "Armenian"], ["id", "Indonesian"], ["ig", "Igbo"], ["is", "Icelandic"], ["jw", "Javanese"], ["ka", "Georgian"], ["kk", "Kazakh"], ["km", "Khmer"], ["kn", "Kannada"], ["ku", "Kurdish (Kurmanji)"], ["ky", "Kyrgyz"], ["lb", "Luxembourgish"], ["lo", "Lao"], ["lt", "Lithuanian"], ["lv", "Latvian"], ["mg", "Malagasy"], ["mi", "Maori"], ["mk", "Macedonian"], ["ml", "Malayalam"], ["mn", "Mongolian"], ["mr", "Marathi"], ["ms", "Malay"], ["mt", "Maltese"], ["my", "Myanmar (Burmese)"], ["pa", "Punjabi"], ["ps", "Pashto"], ["ro", "Romanian"], ["si", "Sinhala (Sinhalese)"], ["sk", "Slovak"], ["sl", "Slovenian"], ["sa", "Sanskrit"], ["sm", "Samoan"], ["sn", "Shona"], ["so", "Somali"], ["sq", "Albanian"], ["sr", "Serbian"], ["st", "Sesotho"], ["su", "Sundanese"], ["sv", "Swedish"], ["sw", "Swahili"], ["ta", "Tamil"], ["te", "Telugu"], ["tg", "Tajik"], ["th", "Thai"], ["tr", "Turkish"], ["ug", "Uyghur"], ["uk", "Ukrainian"], ["ur", "Urdu"], ["uz", "Uzbek"], ["vi", "Vietnamese"], ["xh", "Xhosa"], ["yi", "Yiddish"], ["yo", "Yoruba"], ["zu", "Zulu"]]
    , oT = new Map(DA)
    , yg = class extends no {
    static langMap = oT;
    constructor(e, n, r) {
        super(e, n, r),
            this.model = this.model || "claude-3-haiku-20240307",
            this.apiUrl = "https://api.anthropic.com/v1/messages",
        e.apiUrl && (this.apiUrl = qt(this.apiUrl, e.apiUrl))
    }
    getApiUrl() {
        return this.apiUrl
    }
    getLangMap() {
        return oT
    }
    getDefaultRateLimit() {
        return {
            limit: .3,
            interval: 1050
        }
    }
    async handleOptions(e, n) {
        let r = this.getRandomKey()
            , a = {
            url: this.apiUrl,
            method: "POST",
            headers: {
                "content-type": "application/json",
                "x-api-key": r,
                "anthropic-version": "2023-06-01"
            },
            timeout: this.requestTimeout,
            retry: this.retry
        }
            , i = this.systemPrompt + e
            , o = {
            ...this.bodyConfigs,
            model: this.model,
            messages: [{
                role: "user",
                content: i
            }]
        };
        return a.body = JSON.stringify(o, null, 2),
            a
    }
    parseResponse(e) {
        return e?.content?.[0]?.text
    }
}
    , sT = yg;
