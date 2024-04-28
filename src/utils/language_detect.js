

var n3 = [["afr", "af"], ["amh", "am"], ["arb", "ar"], ["azj", "az"], ["bel", "be"], ["bul", "bg"], ["ben", "bn"], ["bos", "bs"], ["cat", "ca"], ["ceb", "ceb"], ["ces", "cs"], ["dan", "da"], ["deu", "de"], ["ell", "el"], ["eng", "en"], ["epo", "eo"], ["spa", "es"], ["est", "et"], ["fas", "fa"], ["fin", "fi"], ["fra", "fr"], ["gax", "ga"], ["glg", "gl"], ["guj", "gu"], ["hau", "ha"], ["heb", "he"], ["hin", "hi"], ["hrv", "hr"], ["hun", "hu"], ["hye", "hy"], ["ind", "id"], ["ibo", "ig"], ["ita", "it"], ["jpn", "ja"], ["jav", "jw"], ["kat", "ka"], ["kaz", "kk"], ["khm", "km"], ["kan", "kn"], ["kor", "ko"], ["ckb", "ku"], ["lao", "lo"], ["lit", "lt"], ["lav", "lv"], ["min", "mi"], ["mkd", "mk"], ["mal", "ml"], ["mar", "mr"], ["mya", "my"], ["nep", "ne"], ["nld", "nl"], ["nob", "no"], ["nya", "ny"], ["pan", "pa"], ["pol", "pl"], ["pbu", "ps"], ["por", "pt"], ["ron", "ro"], ["rus", "ru"], ["sin", "si"], ["slk", "sk"], ["slv", "sl"], ["sna", "sn"], ["som", "so"], ["als", "sq"], ["srp", "sr"], ["sun", "su"], ["swe", "sv"], ["swh", "sw"], ["tam", "ta"], ["tel", "te"], ["tgk", "tg"], ["tha", "th"], ["toi", "to"], ["tur", "tr"], ["ukr", "uk"], ["urd", "ur"], ["uzn", "uz"], ["vie", "vi"], ["xho", "xh"], ["ydd", "yi"], ["yor", "yo"], ["cmn", "zh-CN"], ["zul", "zu"]]
    , J0 = new Map(n3)
    , Bw = new Map(n3.map(([t,e])=>[e, t]));
function r3(t, e, n=["en"]) {
    if (!t)
        return "auto";
    try {
        let r = n.map(s=>Bw.get(s));
        !e && e !== 0 && (e = 25);
        let a = sl(t);
        if (a !== "auto")
            return a;
        let i = {
            minLength: e,
            whitelist: [...J0.keys()]
        }
            , o = Yb(t, i);
        if (o && o.length > 0) {
            if (o.length > 1 && o[0][1] - o[1][1] <= .3)
                for (let c = 0; c < o.length; c++) {
                    let[p,m] = o[c];
                    if (r.includes(p) && m > .5 && c / o.length <= .25) {
                        if (p == "eng" && m < .95)
                            break;
                        return J0.get(p)
                    }
                }
            let[s,u] = o[0]
                , l = J0.get(s);
            if (l && u > .9)
                return l
        }
    } catch (r) {
        B.error(r)
    }
    return "auto"
}
