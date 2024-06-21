function io(t, e) {
    // let r = x.IMMERSIVE_TRANSLATE_INJECTED_CSS;

    let immersive_translate_input_injectedContent = oe.runtime.getURL("/contentscript/css/immersive_translate_injected.css")
    // console.log(immersive_translate_input_injectedContent)
    let r = immersive_translate_input_injectedContent;

    En(t, r, "immersive-translate-default-injected-css");
    let a = e.config.translationThemePatterns || {}
        , i = e.state.translationTheme
        , o = a[i] || {};
    // TODO:翻译方法 -> apply_user_config_css.js
    fT(t, i, o, e.config.selectTranslationFont);
    let s = "";
    (e.rule.injectedCss || e.rule.additionalInjectedCss) && (e.rule.injectedCss && Array.isArray(e.rule.injectedCss) && e.rule.injectedCss.length > 0 ? s += e.rule.injectedCss.join(`
`) : e.rule.injectedCss && (s += e.rule.injectedCss),
        e.rule.additionalInjectedCss && Array.isArray(e.rule.additionalInjectedCss) && e.rule.additionalInjectedCss.length > 0 ? s += `
` + e.rule.additionalInjectedCss.join(`
`) : e.rule.additionalInjectedCss && (s += `
` + e.rule.additionalInjectedCss)),
    s && En(t, s, "immersive-translate-dynamic-injected-css")
}
