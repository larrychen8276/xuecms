
var X3 = "G-MKMD9LWFTR";
async function ot(t, e, n) {
    try {
        let r = us()
            // , a = Me()
            , a = x
            , i = a.INSTALL_FROM === "firefox_store";
        r?.name?.startsWith("ImtFx") && (i = !1);
        let o = ye()
            , s = He()
            , u = a.PROD === "1"
            , l = `report_${t}`
            , c = t.endsWith("_daily");
        if (c) {
            if (s)
                return;
            let A = await Rr(l, 0)
                , y = Ml(new Date(A))
                , R = Date.now()
                , _ = Ml(new Date(R));
            if (y === _)
                return;
            await s3(l, R)
        } else if (!n.config.telemetry)
            return;
        let p = "sitc4WmvShWYwfU0dANM3Q"
            , m = await At("fakeUserId", "");
        m || (m = await Rr("fakeUserId", ""),
        m && await et("fakeUserId", m));
        let g = Ut()
            , f = new Date
            , T = await At("installedAt", "");
        T || (T = await Rr("installedAt", ""),
        T && await et("installedAt", T)),
            m ? T || (T = new Date(0).toISOString(),
                await et("installedAt", T)) : (m = bD(32),
                await et("fakeUserId", m)),
        T || (T = f.toISOString(),
            await et("installedAt", T));
        let b = new Date(T)
            , h = Ml(b)
            , E = Ml(f)
            , D = h === E
            , M = f.getTime() - b.getTime() < 7 * 24 * 60 * 60 * 1e3
            , I = `https://www.google-analytics.com/mp/collect?measurement_id=${X3}&api_secret=${p}`;
        u || (I = `https://www.google-analytics.com/debug/mp/collect?measurement_id=${X3}&api_secret=${p}`);

        //debugger;


        let S = Bowser.parse(window.navigator.userAgent)
            , v = e.map(A=>{
                let y = A.params || {};
                if (S.os && (y.os_name = S.os.name || "unknown",
                    y.os_version = S.os.version || "unknown",
                    y.os_version_name = S.os.versionName || "unknown"),
                S.browser && (y.browser_name = S.browser.name || "unknown",
                    y.browser_version = S.browser.version || "unknown",
                r && (y.browser_name = r.name,
                    y.browser_version = r.version)),
                S.platform && (y.platform_type = S.platform.type || "unknown"),
                S.engine && (y.engine_name = S.engine.name || "unknown",
                    y.engine_version = S.engine.version || "unknown"),
                n.translationService && (y.translation_service || (y.translation_service = n.translationService),
                n.config.translationServices && n.config.translationServices[n.translationService] && (n.config.translationServices[n.translationService].provider && (y.translation_service_provider = n.config.translationServices[n.translationService].provider),
                n.translationService === "openai" && n.config.translationServices[n.translationService].provider === "custom" && (n.config.translationServices[n.translationService].apiUrl ? n.config.translationServices[n.translationService].apiUrl.startsWith("https://api.openai.com/") ? y.openai_is_official = "1" : y.openai_is_official = "0" : y.openai_is_official = "1"))),
                n.targetLanguage && (y.target_language = n.targetLanguage),
                n.config.interfaceLanguage && (y.interface_language = n.config.interfaceLanguage),
                    n.config.enableDefaultAlwaysTranslatedUrls ? y.enable_default_always_translated_urls = n.config.enableDefaultAlwaysTranslatedUrls ? "1" : "0" : y.enable_default_always_translated_urls = "0",
                g && (y.version = g),
                    n.config.enableInputTranslation ? y.enable_input_translation = n.config.enableInputTranslation ? "1" : "0" : y.enable_input_translation = "0",
                n.config.translationTheme && (y.translation_theme = n.config.translationTheme),
                n.config.alpha && (y.alpha = n.config.alpha.toString()),
                    n.config.translationLanguagePattern && n.config.translationLanguagePattern.matches?.length > 0 ? y.always_translate_languages = n.config.translationLanguagePattern.matches.join(",") : y.always_translate_languages = "none",
                a.INSTALL_FROM && (y.install_from = a.INSTALL_FROM),
                n.config.beta && (y.beta = n.config.alpha.toString()),
                n.config.translationArea && (y.translation_area = n.config.translationArea),
                h && (y.install_day = TD(b)),
                    n.user) {
                    let _ = a3(n.user);
                    _ && Object.keys(_).forEach(P=>{
                            y[P] = _[P]
                        }
                    )
                } else
                    y.user_type = "anonymous";
                n.config.translationMode && (y.translation_mode = n.config.translationMode),
                    y.userscript = o.toString(),
                    D ? y.is_new_user_today = "1" : y.is_new_user_today = "0",
                    M ? y.is_new_user_this_week = "1" : y.is_new_user_this_week = "0",
                    n.config.tempTranslateDomainMinutes ? y.temp_translate_domain_minutes = n.config.tempTranslateDomainMinutes.toString() : y.temp_translate_domain_minutes = "0";
                let R = "html";
                if (n.rule.pageType && (R = n.rule.pageType),
                    y.page_type = R,
                    s ? y.main_frame = 0 : y.main_frame = 1,
                    !c) {
                    let _ = n.url;
                    try {
                        let P = new URL(_);
                        y.site_host = P.hostname
                    } catch {
                        y.site_host = "unknown"
                    }
                    n.sourceLanguage && (y.source_language = n.sourceLanguage)
                }
                return {
                    ...A,
                    params: y
                }
            }
        );
        if (i)
            return;
        let k = await ce({
            responseType: "text",
            url: I,
            method: "POST",
            body: JSON.stringify({
                client_id: m,
                user_id: m,
                events: v
            })
        })
    } catch {}
}


function bD(t) {
    let e = ""
        , n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        , r = n.length
        , a = 0;
    for (; a < t; )
        e += n.charAt(Math.floor(Math.random() * r)),
            a += 1;
    return e
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var b3 = "G-MKMD9LWFTR";
async function ls(t) {
    try {
        // let e = Me()
        let e = x
            , n = e.INSTALL_FROM === "firefox_store";
        if (us()?.name?.startsWith("ImtFx") && (n = !1),
            n)
            return;
        let a = ye()
            , i = He()
            , o = e.PROD === "1"
            , s = "sitc4WmvShWYwfU0dANM3Q"
            , u = await At("fakeUserId", "");
        u || (u = await Rr("fakeUserId", ""),
        u && await et("fakeUserId", u));
        let l = Ut()
            , c = new Date
            , p = await At("installedAt", "");
        p || (p = await Rr("installedAt", ""),
        p && await et("installedAt", p)),
            u ? p || (p = new Date(0).toISOString(),
                await et("installedAt", p)) : (u = Gw(32),
                await et("fakeUserId", u)),
        p || (p = c.toISOString(),
            await et("installedAt", p));
        let m = new Date(p)
            , g = T3(m)
            , f = T3(c)
            , T = g === f
            , b = c.getTime() - m.getTime() < 7 * 24 * 60 * 60 * 1e3
            , h = `https://www.google-analytics.com/mp/collect?measurement_id=${b3}&api_secret=${s}`;
        o || (h = `https://www.google-analytics.com/debug/mp/collect?measurement_id=${b3}&api_secret=${s}`);
        let E = "";
        typeof navigator < "u" && (E = window.navigator.userAgent);

        //debugger;

        let D = Bowser.parse(E)
            , M = t.map(S=>{
                let v = S.params || {};
                if (D.os && (v.os_name = D.os.name || "unknown",
                    v.os_version = D.os.version || "unknown",
                    v.os_version_name = D.os.versionName || "unknown"),
                    D.browser) {
                    v.browser_name = D.browser.name || "unknown",
                        v.browser_version = D.browser.version || "unknown";
                    let k = us();
                    k && (v.browser_name = k.name,
                        v.browser_version = k.version)
                }
                return D.platform && (v.platform_type = D.platform.type || "unknown"),
                D.engine && (v.engine_name = D.engine.name || "unknown",
                    v.engine_version = D.engine.version || "unknown"),
                l && (v.version = l),
                e.INSTALL_FROM && (v.install_from = e.INSTALL_FROM),
                g && (v.install_day = $w(m)),
                    v.userscript = a.toString(),
                    T ? v.is_new_user_today = "1" : v.is_new_user_today = "0",
                    b ? v.is_new_user_this_week = "1" : v.is_new_user_this_week = "0",
                    i ? v.main_frame = 0 : v.main_frame = 1,
                    {
                        ...S,
                        params: v
                    }
            }
        )
            , I = await dl({
            responseType: "text",
            url: h,
            method: "POST",
            body: JSON.stringify({
                client_id: u,
                user_id: u,
                events: M
            })
        })
    } catch {}
}

function Gw(t) {
    let e = ""
        , n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        , r = n.length
        , a = 0;
    for (; a < t; )
        e += n.charAt(Math.floor(Math.random() * r)),
            a += 1;
    return e
}