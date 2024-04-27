
var G0 = /iPhone/i
    , Ab = /iPod/i
    , kb = /iPad/i
    , Pb = /\biOS-universal(?:.+)Mac\b/i
    , $0 = /\bAndroid(?:.+)Mobile\b/i
    , Lb = /Android/i
    , Pi = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i
    , tl = /Silk/i
    , Br = /Windows Phone/i
    , _b = /\bWindows(?:.+)ARM\b/i
    , Fb = /BlackBerry/i
    , Mb = /BB10/i
    , Bb = /Opera Mini/i
    , Ib = /\b(CriOS|Chrome)(?:.+)Mobile/i
    , Rb = /Mobile(?:.+)Firefox\b/i
    , Ob = t=>typeof t < "u" && t.platform === "MacIntel" && typeof t.maxTouchPoints == "number" && t.maxTouchPoints > 1 && typeof globalThis.MSStream > "u";

function rw(t) {
    return e=>e.test(t)
}

function isMobile(t) {
    let e = {
        userAgent: "",
        platform: "",
        maxTouchPoints: 0
    };
    !t && typeof navigator < "u" ? e = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        maxTouchPoints: navigator.maxTouchPoints || 0
    } : typeof t == "string" ? e.userAgent = t : t && t.userAgent && (e = {
        userAgent: t.userAgent,
        platform: t.platform,
        maxTouchPoints: t.maxTouchPoints || 0
    });
    let n = e.userAgent
        , r = n.split("[FBAN");
    typeof r[1] < "u" && (n = r[0]),
        r = n.split("Twitter"),
    typeof r[1] < "u" && (n = r[0]);
    let a = rw(n)
        , i = {
        apple: {
            phone: a(G0) && !a(Br),
            ipod: a(Ab),
            tablet: !a(G0) && (a(kb) || Ob(e)) && !a(Br),
            universal: a(Pb),
            device: (a(G0) || a(Ab) || a(kb) || a(Pb) || Ob(e)) && !a(Br)
        },
        amazon: {
            phone: a(Pi),
            tablet: !a(Pi) && a(tl),
            device: a(Pi) || a(tl)
        },
        android: {
            phone: !a(Br) && a(Pi) || !a(Br) && a($0),
            tablet: !a(Br) && !a(Pi) && !a($0) && (a(tl) || a(Lb)),
            device: !a(Br) && (a(Pi) || a(tl) || a($0) || a(Lb)) || a(/\bokhttp\b/i)
        },
        windows: {
            phone: a(Br),
            tablet: a(_b),
            device: a(Br) || a(_b)
        },
        other: {
            blackberry: a(Fb),
            blackberry10: a(Mb),
            opera: a(Bb),
            firefox: a(Rb),
            chrome: a(Ib),
            device: a(Fb) || a(Mb) || a(Bb) || a(Rb) || a(Ib)
        },
        any: !1,
        phone: !1,
        tablet: !1
    };
    return i.any = i.apple.device || i.android.device || i.windows.device || i.other.device,
        i.phone = i.apple.phone || i.android.phone || i.windows.phone,
        i.tablet = i.apple.tablet || i.android.tablet || i.windows.tablet,
        i
}