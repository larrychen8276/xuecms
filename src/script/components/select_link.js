function va(t) {
    let {items: e, maxWidth: n, className: r, style: a} = t
        , {lang: i} = Ce();
    return n = n || (i === "en" ? 144 : 160),
        w("select", {
            autoComplete: "off",
            class: r || "min-select",
            style: {
                maxWidth: `${n}px`,
                ...a
            },
            value: e.find(o=>o.selected)?.value,
            onChange: o=>{
                let s = o.target.value
                    , u = e.find(l=>l.value === s);
                u && u.onSelected(u)
            }
            ,
            children: e.map((o,s)=>w("option", {
                value: o.value,
                selected: o.selected,
                children: o.label
            }, "selectlink" + s))
        })
}
