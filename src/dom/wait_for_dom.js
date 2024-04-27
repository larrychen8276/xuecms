async function W9(t) {
    //debugger;

    try {
        let e = t.config.domReadyDetectTimeout;
        return await H9(()=>{
                let r = t.mainFrame.innerText || "";
                if (Ni(r, t.rule.mainFrameMinTextCount, t.rule.mainFrameMinWordCount))
                    return !0;
                throw new Error("there is no main text")
            }
            , {
                timeout: e !== void 0 ? e : 3e3
            }),
            !0
    } catch (e) {
        if (He())
            throw e;
        return B.debug("check dom element ready failed:", e, t),
            !0
    }
}
