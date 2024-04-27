async function hT() {
    let t = "auto"
        , e = [ht(), "en"];
    return document.body && document.body.textContent && document.body.textContent.trim() && (t = await Ie({
        text: Ui(document.body),
        pageLangs: e
    })),
        t
}
