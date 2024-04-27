
function _n(t) {
    aa(t, {
        tab: {
            id: 1,
            url: "https://www.fake.com",
            active: !0
        }
    }).catch(r=>{
            B.error("send content message request failed", t, r)
        }
    ),
        document.querySelectorAll("iframe").forEach(r=>{
                r.contentWindow && r.contentWindow.postMessage({
                    author: ju,
                    payload: t
                }, "*")
            }
        );
    let n = new CustomEvent(Mr,{
        detail: t
    });
    globalThis.document.dispatchEvent(n)
}
