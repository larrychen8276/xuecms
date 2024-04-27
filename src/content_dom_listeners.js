var O5 = ()=>{
        ym();
        let t = new CustomEvent(Mr,{
            detail: {
                method: "toggleTranslatePage"
            }
        });
        globalThis.document.dispatchEvent(t)
    }
    , z5 = ()=>{
        Sm();
        let t = new CustomEvent(Mr,{
            detail: {
                method: "toggleOnlyTranslation"
            }
        });
        globalThis.document.dispatchEvent(t)
    }
    , N5 = ()=>{
        vm();
        let t = new CustomEvent(Mr,{
            detail: {
                method: "toggleTranslationMask"
            }
        });
        globalThis.document.dispatchEvent(t)
    }
    , Ny = 0
    , U5 = (t,e,n)=>{
        new Date().getTime() - Ny < 200 || (Ny = new Date().getTime(),
            t === "touchShortcutsToggleTranslatePage" ? O5() : t === "touchShortcutsToggleTranslationMask" ? N5() : t === "touchShortcutsToggleTranslatePageOnlyTranslation" ? z5() : t === "touchShortcutsToggleTranslateTouchElement" && Oy(e, n))
    }
;








function X8(t) {
    let e = t;
    e && e.data && e.data.payload && e.data.author === ju && aa(e.data.payload, {
        tab: {
            id: 1,
            url: "https://www.fake-iframe.com",
            active: !0
        }
    })
}

function d7(t) {
    if (ye() && typeof GM < "u" && GM && GM.registerMenuCommand) {
        let e = ll.commands
            , a = [...Object.keys(e).filter(i=>i === "toggleTranslatePage").map(i=>{
                let o = e[i].description
                    , s = o;
                return o.startsWith("__MSG_") && o.endsWith("__") && (s = bo(`browser.${o.slice(6, -2)}`, t.interfaceLanguage)),
                    {
                        id: i,
                        title: s
                    }
            }
        ), {
            id: z0,
            title: bo("browser.openEbookViewer", t.interfaceLanguage),
            key: "e"
        }, {
            id: N0,
            title: bo("browser.openEbookBuilder", t.interfaceLanguage),
            key: "m"
        }, {
            id: R0,
            title: bo("browser.openOptionsPage", t.interfaceLanguage),
            key: "o"
        }, {
            id: O0,
            title: bo("browser.openAboutPage", t.interfaceLanguage),
            key: "a"
        }];
        for (let i of a)
            GM.registerMenuCommand(i.title, ()=>{
                    i.id === R0 ? $8() : i.id === O0 ? V8() : i.id === N0 ? Y8() : i.id === z0 ? Q8() : o9(i.id)
                }
                , i.key)
    }
}
function Qm(t) {
    aa(t, {
        tab: {
            id: 1,
            url: "https://www.fake.com",
            active: !0
        }
    }).catch(n=>{
            B.error("send content message request failed", t, n)
        }
    );
    let e = new CustomEvent(Mr,{
        detail: t
    });
    globalThis.document.dispatchEvent(e)
}
