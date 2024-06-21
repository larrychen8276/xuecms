var Uc = "DROP_DOWN_DEFAULT_VALUE";
function cm(t) {
    let {showArrow: e, onSelected: n, className: r, menus: a, maxWidth: i, style: o} = t;
    r = r || "",
        e = e ?? !0,
        i = i || 80;
    let s = $e(null);
    return w("select", {
        ref: s,
        autoComplete: "off",
        class: `min-select ${e ? "" : "min-select-no-arrow"} ${r || ""}`,
        value: Uc,
        style: {
            maxWidth: `${i}px`,
            ...o
        },
        onChange: u=>{
            u.preventDefault();
            let l = u.target.value;
            if (s.current && l !== Uc) {
                s.current.value = Uc,
                    s.current?.dispatchEvent(new Event("change"));
                let c = a.find(p=>p.value === l);
                c && n(c)
            }
        }
        ,
        children: [{
            value: Uc,
            label: t.label
        }].concat(a).map((u,l)=>w("option", {
            value: u.value,
            children: u.label
        }, "option-" + l))
    })
}
