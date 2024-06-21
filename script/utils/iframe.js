function He() {
    try {
        let t = [x.EBOOK_BUILDER_URL, x.EBOOK_VIEWER_URL, x.SUBTITLE_BUILDER_URL, x.HTML_VIEWER_URL, x.PDF_VIEWER_URL].filter(a=>!!a)
            , e = ["app.immersivetranslate.com"];
        Qt() || e.push("localhost:38001");
        let n = globalThis.location.pathname;
        return t.find(a=>{
                let i = new URL(a);
                return n.startsWith(i.pathname) && e.includes(i.host)
            }
        ) ? !1 : globalThis.self !== globalThis.top
    } catch {
        return !0
    }
}
