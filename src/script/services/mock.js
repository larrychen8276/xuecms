var Xi = class extends De {
        isSupportList = !1;
        maxTextLength = 1200;
        maxTextGroupLength = 1;
        async translate(e) {
            let {text: n} = e;
            if (!Hp())
                throw new V("404","\u6A21\u62DF\u9519\u8BEF");
            let r = n.match(/^\s*/)[0].length;
            return {
                text: n.slice(0, r) + "\u6A21\u62DF\uFF1A" + n.slice(r, -6),
                from: e.from,
                to: e.to
            }
        }
        async translateList(e) {
            let {text: n, from: r, to: a} = e;
            if (await G3(),
                !Hp())
                throw new V("404","\u6A21\u62DF\u9519\u8BEF");
            return n.length === 0 ? {
                from: r,
                to: a,
                text: [""]
            } : {
                from: r,
                to: a,
                text: n.map(i=>{
                        let o = i.match(/^\s*/)[0].length;
                        return i.slice(0, o) + "\u6A21\u62DF\uFF1A" + i.slice(o, -6)
                    }
                )
            }
        }
    }
;
