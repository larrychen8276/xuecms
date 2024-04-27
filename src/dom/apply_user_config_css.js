
function fT(t, e, n, r, a) {
    let i = e
        , o = cb[i] || []
        , s = "";
    t && o && o.length > 0 && o.forEach(c=>{
            let {name: p} = c;
            if (t && n && n[p]) {
                let m = n[p];
                if (["borderRadius"].includes(p) && (m += "px"),
                    s += `--immersive-translate-theme-${i}-${p}: ${m};
`,
                e === "marker" && p === "backgroundColor" && typeof m == "string") {
                    let {r: g, g: f, b: T} = y1(m);
                    s += `--immersive-translate-theme-${i}-${p}-rgb: ${g}, ${f}, ${T};
`
                }
            }
        }
    ),
    r || (r = "inherit"),
    t && (s += `
.immersive-translate-target-inner { font-family: ${r}; }
`);
    let u = "";
    if (n && n.textColor) {
        let c = n.textColor;
        u += `
.immersive-translate-target-translation-theme-${i}-inner{color: ${c};}
`
    }
    if (n && n.zoom) {
        let c = n.zoom;
        u += `
.immersive-translate-target-translation-theme-${i}-inner{font-size: max(13px, ${c}%);}
`
    }
    let l = "";
    s && (l = `:root {
${s}}
`),
    u && (l += u),
        l ? En(t, l, "immersive-translate-user-custom-style") : a && En(t, "", "immersive-translate-user-custom-style")
}

