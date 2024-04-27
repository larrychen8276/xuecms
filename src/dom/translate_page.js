
async function ym(t) {
    if (Qe() === "Original") {
        let e = {};
        Co && (e.translationTheme = Co),
        fe && (e = {
            ...fe.state,
            ...e
        });
        let n = await We(Ee(), e);
        if (t?.trigger == "right_menu" && Ga(n?.rule)) {
            let r = ra(n.rule);
            Oi(!0, r || Ee());
            return
        }
        await Tn(fe, t)
    } else
        (Qe() === "Translated" || Qe() === "Error") && si()
}

async function Sm(t) {
    let e = await We(Ee(), {})
        , n = e.state.translationMode == "dual" ? "translation" : "dual";
    if (e = await We(Ee(), {
        translationMode: n
    }),
    Qe() === "Original") {
        Tn(e, t);
        return
    }
    window.immersiveTranslateSwitchTranslateState && window.immersiveTranslateSwitchTranslateState(n)
}

async function vm(t) {
    if (Qe() === "Original") {
        fe = await We(Ee(), {}),
        Co || (Co = fe.state.translationTheme);
        let e = "mask";
        fe.state.translationTheme === "opacity" && (e = "opacity"),
            fe = await We(Ee(), {
                translationTheme: e
            }),
            await Tn(fe, t)
    } else if (Qe() === "Translated") {
        let e = "mask";
        fe?.state?.translationTheme === "opacity" && (e = "opacity");
        let n = Z1().filter(i=>i.contentDocument?.body).map(i=>i.contentDocument.body)
            , r = [fe.mainFrame, ...n]
            , a = fe?.state.translationTheme;
        for (let i of r) {
            let o = qi(i, Di, !0);
            a === "mask" || a === "opacity" ? o !== "none" ? lt(i, Di, "none", !0) : lt(i, Di, e, !0) : o !== "mask" && o !== "opacity" ? lt(i, Di, e, !0) : lt(i, Di, "none", !0)
        }
    }
}

async function O7(t) {
    Qe() === "Original" ? await af(t) : (Qe() === "Translated" || Qe() === "Error") && (fe = await We(Ee(), {}),
        fe.state.translationArea !== "main" ? await af(t) : si())
}
async function af(t) {
    fe = await We(Ee(), {
        translationArea: "main"
    }),
        await Tn(fe, t)
}
async function M9(t) {
    fe = await We(Ee(), {
        translationArea: "body"
    }),
        await Tn(fe, t)
}
