
function lm(t) {
    let e = t.shortcuts || {}
        , r = Object.keys(e).reduce((i,o)=>(i[e[o]] = o,
        i), {})
        , a = Object.keys(r);
    for (let i of a) {
        let o = i.replace(/MacCtrl/ig, "Ctrl");
        o && hotkeys(o, s=>{
                s.preventDefault();
                let u = r[i];
                _n({
                    method: u,
                    data: {
                        trigger: "shortcut"
                    }
                })
            }
        )
    }
}
