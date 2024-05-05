var fx = {
    "Amazon Silk": "amazon_silk",
    "Android Browser": "android",
    Bada: "bada",
    BlackBerry: "blackberry",
    Chrome: "chrome",
    Chromium: "chromium",
    Electron: "electron",
    Epiphany: "epiphany",
    Firefox: "firefox",
    Focus: "focus",
    Generic: "generic",
    "Google Search": "google_search",
    Googlebot: "googlebot",
    "Internet Explorer": "ie",
    "K-Meleon": "k_meleon",
    Maxthon: "maxthon",
    "Microsoft Edge": "edge",
    "MZ Browser": "mz",
    "NAVER Whale Browser": "naver",
    Opera: "opera",
    "Opera Coast": "opera_coast",
    PhantomJS: "phantomjs",
    Puffin: "puffin",
    QupZilla: "qupzilla",
    QQ: "qq",
    QQLite: "qqlite",
    Safari: "safari",
    Sailfish: "sailfish",
    "Samsung Internet for Android": "samsung_internet",
    SeaMonkey: "seamonkey",
    Sleipnir: "sleipnir",
    Swing: "swing",
    Tizen: "tizen",
    "UC Browser": "uc",
    Vivaldi: "vivaldi",
    "WebOS Browser": "webos",
    WeChat: "wechat",
    "Yandex Browser": "yandex",
    Roku: "roku"
}
    , Qf = {
    amazon_silk: "Amazon Silk",
    android: "Android Browser",
    bada: "Bada",
    blackberry: "BlackBerry",
    chrome: "Chrome",
    chromium: "Chromium",
    electron: "Electron",
    epiphany: "Epiphany",
    firefox: "Firefox",
    focus: "Focus",
    generic: "Generic",
    googlebot: "Googlebot",
    google_search: "Google Search",
    ie: "Internet Explorer",
    k_meleon: "K-Meleon",
    maxthon: "Maxthon",
    edge: "Microsoft Edge",
    mz: "MZ Browser",
    naver: "NAVER Whale Browser",
    opera: "Opera",
    opera_coast: "Opera Coast",
    phantomjs: "PhantomJS",
    puffin: "Puffin",
    qupzilla: "QupZilla",
    qq: "QQ Browser",
    qqlite: "QQ Browser Lite",
    safari: "Safari",
    sailfish: "Sailfish",
    samsung_internet: "Samsung Internet for Android",
    seamonkey: "SeaMonkey",
    sleipnir: "Sleipnir",
    swing: "Swing",
    tizen: "Tizen",
    uc: "UC Browser",
    vivaldi: "Vivaldi",
    webos: "WebOS Browser",
    wechat: "WeChat",
    yandex: "Yandex Browser"
}
    , Ct = {
    tablet: "tablet",
    mobile: "mobile",
    desktop: "desktop",
    tv: "tv"
}
    , dn = {
    WindowsPhone: "Windows Phone",
    Windows: "Windows",
    MacOS: "macOS",
    iOS: "iOS",
    Android: "Android",
    WebOS: "WebOS",
    BlackBerry: "BlackBerry",
    Bada: "Bada",
    Tizen: "Tizen",
    Linux: "Linux",
    ChromeOS: "Chrome OS",
    PlayStation4: "PlayStation 4",
    Roku: "Roku"
}
    , Kr = {
    EdgeHTML: "EdgeHTML",
    Blink: "Blink",
    Trident: "Trident",
    Presto: "Presto",
    Gecko: "Gecko",
    WebKit: "WebKit"
}
    , G = class {
    static getFirstMatch(t, e) {
        let n = e.match(t);
        return n && n.length > 0 && n[1] || ""
    }
    static getSecondMatch(t, e) {
        let n = e.match(t);
        return n && n.length > 1 && n[2] || ""
    }
    static matchAndReturnConst(t, e, n) {
        if (t.test(e))
            return n
    }
    static getWindowsVersionName(t) {
        switch (t) {
            case "NT":
                return "NT";
            case "XP":
                return "XP";
            case "NT 5.0":
                return "2000";
            case "NT 5.1":
                return "XP";
            case "NT 5.2":
                return "2003";
            case "NT 6.0":
                return "Vista";
            case "NT 6.1":
                return "7";
            case "NT 6.2":
                return "8";
            case "NT 6.3":
                return "8.1";
            case "NT 10.0":
                return "10";
            default:
                return
        }
    }
    static getMacOSVersionName(t) {
        let e = t.split(".").splice(0, 2).map(n=>parseInt(n, 10) || 0);
        if (e.push(0),
        e[0] === 10)
            switch (e[1]) {
                case 5:
                    return "Leopard";
                case 6:
                    return "Snow Leopard";
                case 7:
                    return "Lion";
                case 8:
                    return "Mountain Lion";
                case 9:
                    return "Mavericks";
                case 10:
                    return "Yosemite";
                case 11:
                    return "El Capitan";
                case 12:
                    return "Sierra";
                case 13:
                    return "High Sierra";
                case 14:
                    return "Mojave";
                case 15:
                    return "Catalina";
                default:
                    return
            }
    }
    static getAndroidVersionName(t) {
        let e = t.split(".").splice(0, 2).map(n=>parseInt(n, 10) || 0);
        if (e.push(0),
            !(e[0] === 1 && e[1] < 5)) {
            if (e[0] === 1 && e[1] < 6)
                return "Cupcake";
            if (e[0] === 1 && e[1] >= 6)
                return "Donut";
            if (e[0] === 2 && e[1] < 2)
                return "Eclair";
            if (e[0] === 2 && e[1] === 2)
                return "Froyo";
            if (e[0] === 2 && e[1] > 2)
                return "Gingerbread";
            if (e[0] === 3)
                return "Honeycomb";
            if (e[0] === 4 && e[1] < 1)
                return "Ice Cream Sandwich";
            if (e[0] === 4 && e[1] < 4)
                return "Jelly Bean";
            if (e[0] === 4 && e[1] >= 4)
                return "KitKat";
            if (e[0] === 5)
                return "Lollipop";
            if (e[0] === 6)
                return "Marshmallow";
            if (e[0] === 7)
                return "Nougat";
            if (e[0] === 8)
                return "Oreo";
            if (e[0] === 9)
                return "Pie"
        }
    }
    static getVersionPrecision(t) {
        return t.split(".").length
    }
    static compareVersions(t, e, n=!1) {
        let r = G.getVersionPrecision(t)
            , a = G.getVersionPrecision(e)
            , i = Math.max(r, a)
            , o = 0
            , s = G.map([t, e], u=>{
                let l = i - G.getVersionPrecision(u)
                    , c = u + new Array(l + 1).join(".0");
                return G.map(c.split("."), p=>new Array(20 - p.length).join("0") + p).reverse()
            }
        );
        for (n && (o = i - Math.min(r, a)),
                 i -= 1; i >= o; ) {
            if (s[0][i] > s[1][i])
                return 1;
            if (s[0][i] === s[1][i]) {
                if (i === o)
                    return 0;
                i -= 1
            } else if (s[0][i] < s[1][i])
                return -1
        }
    }
    static map(t, e) {
        let n = [], r;
        if (Array.prototype.map)
            return Array.prototype.map.call(t, e);
        for (r = 0; r < t.length; r += 1)
            n.push(e(t[r]));
        return n
    }
    static find(t, e) {
        let n, r;
        if (Array.prototype.find)
            return Array.prototype.find.call(t, e);
        for (n = 0,
                 r = t.length; n < r; n += 1) {
            let a = t[n];
            if (e(a, n))
                return a
        }
    }
    static assign(t, ...e) {
        let n = t, r, a;
        if (Object.assign)
            return Object.assign(t, ...e);
        for (r = 0,
                 a = e.length; r < a; r += 1) {
            let i = e[r];
            typeof i == "object" && i !== null && Object.keys(i).forEach(o=>{
                    n[o] = i[o]
                }
            )
        }
        return t
    }
    static getBrowserAlias(t) {
        return fx[t]
    }
    static getBrowserTypeByAlias(t) {
        return Qf[t] || ""
    }
}
    , at = /version\/(\d+(\.?_?\d+)+)/i
    , hx = [{
    test: [/googlebot/i],
    describe(t) {
        let e = {
            name: "Googlebot"
        }
            , n = G.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, t) || G.getFirstMatch(at, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/opera/i],
    describe(t) {
        let e = {
            name: "Opera"
        }
            , n = G.getFirstMatch(at, t) || G.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/opr\/|opios/i],
    describe(t) {
        let e = {
            name: "Opera"
        }
            , n = G.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, t) || G.getFirstMatch(at, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/SamsungBrowser/i],
    describe(t) {
        let e = {
            name: "Samsung Internet for Android"
        }
            , n = G.getFirstMatch(at, t) || G.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/Whale/i],
    describe(t) {
        let e = {
            name: "NAVER Whale Browser"
        }
            , n = G.getFirstMatch(at, t) || G.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/MZBrowser/i],
    describe(t) {
        let e = {
            name: "MZ Browser"
        }
            , n = G.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, t) || G.getFirstMatch(at, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/focus/i],
    describe(t) {
        let e = {
            name: "Focus"
        }
            , n = G.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, t) || G.getFirstMatch(at, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/swing/i],
    describe(t) {
        let e = {
            name: "Swing"
        }
            , n = G.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, t) || G.getFirstMatch(at, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/coast/i],
    describe(t) {
        let e = {
            name: "Opera Coast"
        }
            , n = G.getFirstMatch(at, t) || G.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/opt\/\d+(?:.?_?\d+)+/i],
    describe(t) {
        let e = {
            name: "Opera Touch"
        }
            , n = G.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, t) || G.getFirstMatch(at, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/yabrowser/i],
    describe(t) {
        let e = {
            name: "Yandex Browser"
        }
            , n = G.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, t) || G.getFirstMatch(at, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/ucbrowser/i],
    describe(t) {
        let e = {
            name: "UC Browser"
        }
            , n = G.getFirstMatch(at, t) || G.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/Maxthon|mxios/i],
    describe(t) {
        let e = {
            name: "Maxthon"
        }
            , n = G.getFirstMatch(at, t) || G.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/epiphany/i],
    describe(t) {
        let e = {
            name: "Epiphany"
        }
            , n = G.getFirstMatch(at, t) || G.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/puffin/i],
    describe(t) {
        let e = {
            name: "Puffin"
        }
            , n = G.getFirstMatch(at, t) || G.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/sleipnir/i],
    describe(t) {
        let e = {
            name: "Sleipnir"
        }
            , n = G.getFirstMatch(at, t) || G.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/k-meleon/i],
    describe(t) {
        let e = {
            name: "K-Meleon"
        }
            , n = G.getFirstMatch(at, t) || G.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/micromessenger/i],
    describe(t) {
        let e = {
            name: "WeChat"
        }
            , n = G.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, t) || G.getFirstMatch(at, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/qqbrowser/i],
    describe(t) {
        let e = {
            name: /qqbrowserlite/i.test(t) ? "QQ Browser Lite" : "QQ Browser"
        }
            , n = G.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, t) || G.getFirstMatch(at, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/msie|trident/i],
    describe(t) {
        let e = {
            name: "Internet Explorer"
        }
            , n = G.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/\sedg\//i],
    describe(t) {
        let e = {
            name: "Microsoft Edge"
        }
            , n = G.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/edg([ea]|ios)/i],
    describe(t) {
        let e = {
            name: "Microsoft Edge"
        }
            , n = G.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/vivaldi/i],
    describe(t) {
        let e = {
            name: "Vivaldi"
        }
            , n = G.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/seamonkey/i],
    describe(t) {
        let e = {
            name: "SeaMonkey"
        }
            , n = G.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/sailfish/i],
    describe(t) {
        let e = {
            name: "Sailfish"
        }
            , n = G.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/silk/i],
    describe(t) {
        let e = {
            name: "Amazon Silk"
        }
            , n = G.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/phantom/i],
    describe(t) {
        let e = {
            name: "PhantomJS"
        }
            , n = G.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/slimerjs/i],
    describe(t) {
        let e = {
            name: "SlimerJS"
        }
            , n = G.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(t) {
        let e = {
            name: "BlackBerry"
        }
            , n = G.getFirstMatch(at, t) || G.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/(web|hpw)[o0]s/i],
    describe(t) {
        let e = {
            name: "WebOS Browser"
        }
            , n = G.getFirstMatch(at, t) || G.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/bada/i],
    describe(t) {
        let e = {
            name: "Bada"
        }
            , n = G.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/tizen/i],
    describe(t) {
        let e = {
            name: "Tizen"
        }
            , n = G.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, t) || G.getFirstMatch(at, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/qupzilla/i],
    describe(t) {
        let e = {
            name: "QupZilla"
        }
            , n = G.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, t) || G.getFirstMatch(at, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/firefox|iceweasel|fxios/i],
    describe(t) {
        let e = {
            name: "Firefox"
        }
            , n = G.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/electron/i],
    describe(t) {
        let e = {
            name: "Electron"
        }
            , n = G.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/MiuiBrowser/i],
    describe(t) {
        let e = {
            name: "Miui"
        }
            , n = G.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/chromium/i],
    describe(t) {
        let e = {
            name: "Chromium"
        }
            , n = G.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, t) || G.getFirstMatch(at, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/chrome|crios|crmo/i],
    describe(t) {
        let e = {
            name: "Chrome"
        }
            , n = G.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/GSA/i],
    describe(t) {
        let e = {
            name: "Google Search"
        }
            , n = G.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test(t) {
        let e = !t.test(/like android/i)
            , n = t.test(/android/i);
        return e && n
    },
    describe(t) {
        let e = {
            name: "Android Browser"
        }
            , n = G.getFirstMatch(at, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/playstation 4/i],
    describe(t) {
        let e = {
            name: "PlayStation 4"
        }
            , n = G.getFirstMatch(at, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/safari|applewebkit/i],
    describe(t) {
        let e = {
            name: "Safari"
        }
            , n = G.getFirstMatch(at, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/.*/i],
    describe(t) {
        let e = /^(.*)\/(.*) /
            , n = /^(.*)\/(.*)[ \t]\((.*)/
            , r = t.search("\\(") !== -1 ? n : e;
        return {
            name: G.getFirstMatch(r, t),
            version: G.getSecondMatch(r, t)
        }
    }
}]
    , bx = hx
    , Tx = [{
    test: [/Roku\/DVP/],
    describe(t) {
        let e = G.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, t);
        return {
            name: dn.Roku,
            version: e
        }
    }
}, {
    test: [/windows phone/i],
    describe(t) {
        let e = G.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, t);
        return {
            name: dn.WindowsPhone,
            version: e
        }
    }
}, {
    test: [/windows /i],
    describe(t) {
        let e = G.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, t)
            , n = G.getWindowsVersionName(e);
        return {
            name: dn.Windows,
            version: e,
            versionName: n
        }
    }
}, {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe(t) {
        let e = {
            name: dn.iOS
        }
            , n = G.getSecondMatch(/(Version\/)(\d[\d.]+)/, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/macintosh/i],
    describe(t) {
        let e = G.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, t).replace(/[_\s]/g, ".")
            , n = G.getMacOSVersionName(e)
            , r = {
            name: dn.MacOS,
            version: e
        };
        return n && (r.versionName = n),
            r
    }
}, {
    test: [/(ipod|iphone|ipad)/i],
    describe(t) {
        let e = G.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, t).replace(/[_\s]/g, ".");
        return {
            name: dn.iOS,
            version: e
        }
    }
}, {
    test(t) {
        let e = !t.test(/like android/i)
            , n = t.test(/android/i);
        return e && n
    },
    describe(t) {
        let e = G.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, t)
            , n = G.getAndroidVersionName(e)
            , r = {
            name: dn.Android,
            version: e
        };
        return n && (r.versionName = n),
            r
    }
}, {
    test: [/(web|hpw)[o0]s/i],
    describe(t) {
        let e = G.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, t)
            , n = {
            name: dn.WebOS
        };
        return e && e.length && (n.version = e),
            n
    }
}, {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(t) {
        let e = G.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, t) || G.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, t) || G.getFirstMatch(/\bbb(\d+)/i, t);
        return {
            name: dn.BlackBerry,
            version: e
        }
    }
}, {
    test: [/bada/i],
    describe(t) {
        let e = G.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, t);
        return {
            name: dn.Bada,
            version: e
        }
    }
}, {
    test: [/tizen/i],
    describe(t) {
        let e = G.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, t);
        return {
            name: dn.Tizen,
            version: e
        }
    }
}, {
    test: [/linux/i],
    describe() {
        return {
            name: dn.Linux
        }
    }
}, {
    test: [/CrOS/],
    describe() {
        return {
            name: dn.ChromeOS
        }
    }
}, {
    test: [/PlayStation 4/],
    describe(t) {
        let e = G.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, t);
        return {
            name: dn.PlayStation4,
            version: e
        }
    }
}]
    , yx = [{
    test: [/googlebot/i],
    describe() {
        return {
            type: "bot",
            vendor: "Google"
        }
    }
}, {
    test: [/huawei/i],
    describe(t) {
        let e = G.getFirstMatch(/(can-l01)/i, t) && "Nova"
            , n = {
            type: Ct.mobile,
            vendor: "Huawei"
        };
        return e && (n.model = e),
            n
    }
}, {
    test: [/nexus\s*(?:7|8|9|10).*/i],
    describe() {
        return {
            type: Ct.tablet,
            vendor: "Nexus"
        }
    }
}, {
    test: [/ipad/i],
    describe() {
        return {
            type: Ct.tablet,
            vendor: "Apple",
            model: "iPad"
        }
    }
}, {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe() {
        return {
            type: Ct.tablet,
            vendor: "Apple",
            model: "iPad"
        }
    }
}, {
    test: [/kftt build/i],
    describe() {
        return {
            type: Ct.tablet,
            vendor: "Amazon",
            model: "Kindle Fire HD 7"
        }
    }
}, {
    test: [/silk/i],
    describe() {
        return {
            type: Ct.tablet,
            vendor: "Amazon"
        }
    }
}, {
    test: [/tablet(?! pc)/i],
    describe() {
        return {
            type: Ct.tablet
        }
    }
}, {
    test(t) {
        let e = t.test(/ipod|iphone/i)
            , n = t.test(/like (ipod|iphone)/i);
        return e && !n
    },
    describe(t) {
        let e = G.getFirstMatch(/(ipod|iphone)/i, t);
        return {
            type: Ct.mobile,
            vendor: "Apple",
            model: e
        }
    }
}, {
    test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
    describe() {
        return {
            type: Ct.mobile,
            vendor: "Nexus"
        }
    }
}, {
    test: [/[^-]mobi/i],
    describe() {
        return {
            type: Ct.mobile
        }
    }
}, {
    test(t) {
        return t.getBrowserName(!0) === "blackberry"
    },
    describe() {
        return {
            type: Ct.mobile,
            vendor: "BlackBerry"
        }
    }
}, {
    test(t) {
        return t.getBrowserName(!0) === "bada"
    },
    describe() {
        return {
            type: Ct.mobile
        }
    }
}, {
    test(t) {
        return t.getBrowserName() === "windows phone"
    },
    describe() {
        return {
            type: Ct.mobile,
            vendor: "Microsoft"
        }
    }
}, {
    test(t) {
        let e = Number(String(t.getOSVersion()).split(".")[0]);
        return t.getOSName(!0) === "android" && e >= 3
    },
    describe() {
        return {
            type: Ct.tablet
        }
    }
}, {
    test(t) {
        return t.getOSName(!0) === "android"
    },
    describe() {
        return {
            type: Ct.mobile
        }
    }
}, {
    test(t) {
        return t.getOSName(!0) === "macos"
    },
    describe() {
        return {
            type: Ct.desktop,
            vendor: "Apple"
        }
    }
}, {
    test(t) {
        return t.getOSName(!0) === "windows"
    },
    describe() {
        return {
            type: Ct.desktop
        }
    }
}, {
    test(t) {
        return t.getOSName(!0) === "linux"
    },
    describe() {
        return {
            type: Ct.desktop
        }
    }
}, {
    test(t) {
        return t.getOSName(!0) === "playstation 4"
    },
    describe() {
        return {
            type: Ct.tv
        }
    }
}, {
    test(t) {
        return t.getOSName(!0) === "roku"
    },
    describe() {
        return {
            type: Ct.tv
        }
    }
}]
    , vx = [{
    test(t) {
        return t.getBrowserName(!0) === "microsoft edge"
    },
    describe(t) {
        if (/\sedg\//i.test(t))
            return {
                name: Kr.Blink
            };
        let e = G.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, t);
        return {
            name: Kr.EdgeHTML,
            version: e
        }
    }
}, {
    test: [/trident/i],
    describe(t) {
        let e = {
            name: Kr.Trident
        }
            , n = G.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test(t) {
        return t.test(/presto/i)
    },
    describe(t) {
        let e = {
            name: Kr.Presto
        }
            , n = G.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test(t) {
        let e = t.test(/gecko/i)
            , n = t.test(/like gecko/i);
        return e && !n
    },
    describe(t) {
        let e = {
            name: Kr.Gecko
        }
            , n = G.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}, {
    test: [/(apple)?webkit\/537\.36/i],
    describe() {
        return {
            name: Kr.Blink
        }
    }
}, {
    test: [/(apple)?webkit/i],
    describe(t) {
        let e = {
            name: Kr.WebKit
        }
            , n = G.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, t);
        return n && (e.version = n),
            e
    }
}]
    , Sx = class {
    constructor(t, e=!1) {
        if (t == null || t === "")
            throw new Error("UserAgent parameter can't be empty");
        this._ua = t,
            this.parsedResult = {},
        e !== !0 && this.parse()
    }
    getUA() {
        return this._ua
    }
    test(t) {
        return t.test(this._ua)
    }
    parseBrowser() {
        this.parsedResult.browser = {};
        let t = G.find(bx, e=>{
                if (typeof e.test == "function")
                    return e.test(this);
                if (e.test instanceof Array)
                    return e.test.some(n=>this.test(n));
                throw new Error("Browser's test function is not valid")
            }
        );
        return t && (this.parsedResult.browser = t.describe(this.getUA())),
            this.parsedResult.browser
    }
    getBrowser() {
        return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
    }
    getBrowserName(t) {
        return t ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
    }
    getBrowserVersion() {
        return this.getBrowser().version
    }
    getOS() {
        return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
    }
    parseOS() {
        this.parsedResult.os = {};
        let t = G.find(Tx, e=>{
                if (typeof e.test == "function")
                    return e.test(this);
                if (e.test instanceof Array)
                    return e.test.some(n=>this.test(n));
                throw new Error("Browser's test function is not valid")
            }
        );
        return t && (this.parsedResult.os = t.describe(this.getUA())),
            this.parsedResult.os
    }
    getOSName(t) {
        let {name: e} = this.getOS();
        return t ? String(e).toLowerCase() || "" : e || ""
    }
    getOSVersion() {
        return this.getOS().version
    }
    getPlatform() {
        return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
    }
    getPlatformType(t=!1) {
        let {type: e} = this.getPlatform();
        return t ? String(e).toLowerCase() || "" : e || ""
    }
    parsePlatform() {
        this.parsedResult.platform = {};
        let t = G.find(yx, e=>{
                if (typeof e.test == "function")
                    return e.test(this);
                if (e.test instanceof Array)
                    return e.test.some(n=>this.test(n));
                throw new Error("Browser's test function is not valid")
            }
        );
        return t && (this.parsedResult.platform = t.describe(this.getUA())),
            this.parsedResult.platform
    }
    getEngine() {
        return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
    }
    getEngineName(t) {
        return t ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
    }
    parseEngine() {
        this.parsedResult.engine = {};
        let t = G.find(vx, e=>{
                if (typeof e.test == "function")
                    return e.test(this);
                if (e.test instanceof Array)
                    return e.test.some(n=>this.test(n));
                throw new Error("Browser's test function is not valid")
            }
        );
        return t && (this.parsedResult.engine = t.describe(this.getUA())),
            this.parsedResult.engine
    }
    parse() {
        return this.parseBrowser(),
            this.parseOS(),
            this.parsePlatform(),
            this.parseEngine(),
            this
    }
    getResult() {
        return G.assign({}, this.parsedResult)
    }
    satisfies(t) {
        let e = {}
            , n = 0
            , r = {}
            , a = 0;
        if (Object.keys(t).forEach(i=>{
                let o = t[i];
                typeof o == "string" ? (r[i] = o,
                    a += 1) : typeof o == "object" && (e[i] = o,
                    n += 1)
            }
        ),
        n > 0) {
            let i = Object.keys(e)
                , o = G.find(i, u=>this.isOS(u));
            if (o) {
                let u = this.satisfies(e[o]);
                if (u !== void 0)
                    return u
            }
            let s = G.find(i, u=>this.isPlatform(u));
            if (s) {
                let u = this.satisfies(e[s]);
                if (u !== void 0)
                    return u
            }
        }
        if (a > 0) {
            let i = Object.keys(r)
                , o = G.find(i, s=>this.isBrowser(s, !0));
            if (o !== void 0)
                return this.compareVersion(r[o])
        }
    }
    isBrowser(t, e=!1) {
        let n = this.getBrowserName().toLowerCase()
            , r = t.toLowerCase()
            , a = G.getBrowserTypeByAlias(r);
        return e && a && (r = a.toLowerCase()),
        r === n
    }
    compareVersion(t) {
        let e = [0]
            , n = t
            , r = !1
            , a = this.getBrowserVersion();
        if (typeof a == "string")
            return t[0] === ">" || t[0] === "<" ? (n = t.substr(1),
                t[1] === "=" ? (r = !0,
                    n = t.substr(2)) : e = [],
                t[0] === ">" ? e.push(1) : e.push(-1)) : t[0] === "=" ? n = t.substr(1) : t[0] === "~" && (r = !0,
                n = t.substr(1)),
            e.indexOf(G.compareVersions(a, n, r)) > -1
    }
    isOS(t) {
        return this.getOSName(!0) === String(t).toLowerCase()
    }
    isPlatform(t) {
        return this.getPlatformType(!0) === String(t).toLowerCase()
    }
    isEngine(t) {
        return this.getEngineName(!0) === String(t).toLowerCase()
    }
    is(t, e=!1) {
        return this.isBrowser(t, e) || this.isOS(t) || this.isPlatform(t)
    }
    some(t=[]) {
        return t.some(e=>this.is(e))
    }
}
    , Yf = Sx
    , xx = class {
    static getParser(t, e=!1) {
        if (typeof t != "string")
            throw new Error("UserAgent should be a string");
        return new Yf(t,e)
    }
    static parse(t) {
        return new Yf(t).getResult()
    }
    static get BROWSER_MAP() {
        return Qf
    }
    static get ENGINE_MAP() {
        return Kr
    }
    static get OS_MAP() {
        return dn
    }
    static get PLATFORMS_MAP() {
        return Ct
    }
}
    , Bowser = xx;

