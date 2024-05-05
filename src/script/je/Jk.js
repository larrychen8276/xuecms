var Jk = {
    youtube: Sc,
    netflix: xc,
    webvtt: go,
    khanacademy: Ec,
    bilibili: Cc,
    udemy: wc,
    hulu: Fc,
    text_track: ba,
    text_track_dynamic: fo,
    general: Dc,
    live: mo,
    ebutt: Pc,
    disneyplus: Lc,
    "fmp4.xml": _c,
    multi_attach_vtt: Mc,
    twitter: Bc,
    subsrt: Ic,
    xml: Rc,
    av: Oc
}, zc;
function cy(t) {
    try {
        //TODO:在（buildin_config_default.js）的
        let e = t.rule.subtitleRule;
        if (e.disabled || !e.type)
            return;
        let n = Jk[e.type];
        if (!n)
            return;
        zc = new n(t)
    } catch (e) {
        B.error(e)
    }
}
