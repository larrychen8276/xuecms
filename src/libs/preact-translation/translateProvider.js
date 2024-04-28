
var qg = Gi(null)
    , Ug = {
        root: "assets",
        lang: "en",
        fallbackLang: "en"
    }
    , mc = t=>{
        let {t: e, setLang: n, lang: r, isReady: a} = Ng({
            root: t.root || Ug.root,
            lang: t.lang || Ug.lang,
            fallbackLang: t.fallbackLang || Ug.fallbackLang,
            getUrl: t.getUrl
        }, t.translations);
        return w(qg.Provider, {
            value: {
                t: e,
                setLang: n,
                lang: r,
                isReady: a
            },
            children: t.children
        })
    }
;

function Ce() {
    return Kl(qg)
}
