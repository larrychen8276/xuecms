var Fi = [];
async function Sl(t, e) {
    return await new Promise((n,r)=>{
            let a = t
                , i = 1
                , o = indexedDB.open(a, i);
            o.onsuccess = s=>{
                n(o.result)
            }
                ,
                o.onerror = s=>{
                    r()
                }
                ,
                o.onupgradeneeded = s=>{
                    let u = o.result
                        , l = e || "cache";
                    u.createObjectStore(l, {
                        keyPath: "key"
                    })
                }
        }
    )
}
async function F3(t) {
    let e = `${Q}-${t.service}@${t.from}->${t.to}`;
    return await cD(e, t)
}
async function M3(t) {
    let e = Ln(t.originalText)
        , n = `${Q}-${t.service}@${t.from}->${t.to}`;
    return await lD(n, e)
}
async function lD(t, e) {
    let n = await Sl(t);
    return await new Promise((r,a)=>{
            if (!n)
                return a();
            let i = "cache"
                , s = n.transaction([i], "readonly").objectStore(i).get(e);
            s.onsuccess = u=>{
                n.close();
                let l = s.result;
                r(l)
            }
                ,
                s.onerror = u=>{
                    n.close(),
                        a()
                }
        }
    )
}
async function cD(t, e) {
    let n = await Sl(t);
    return (await pD()).includes(t) || await dD(t),
        await new Promise(a=>{
                if (!n)
                    return a(!1);
                let i = "cache"
                    , s = n.transaction([i], "readwrite").objectStore(i).put(e);
                s.onsuccess = u=>{
                    n.close(),
                        a(!0)
                }
                    ,
                    s.onerror = u=>{
                        n.close(),
                            a(!1)
                    }
            }
        )
}
async function dD(t) {
    let e = "cache_list"
        , n = await Sl(Q + "-cacheList", e)
        , a = n.transaction([e], "readwrite").objectStore(e).put({
        key: t
    });
    a.onsuccess = i=>{
        n.close(),
            Fi.push(t)
    }
        ,
        a.onerror = i=>{
            n.close()
        }
}
async function pD() {
    if (Fi && Fi.length > 0)
        return Fi;
    let t = await Sl(Q + "-cacheList", "cache_list");
    return Fi = await new Promise(e=>{
            let n = "cache_list"
                , a = t.transaction([n], "readonly").objectStore(n).getAllKeys();
            a.onsuccess = i=>{
                t.close(),
                    e(a.result)
            }
                ,
                a.onerror = i=>{
                    t.close(),
                        e([])
                }
        }
    ),
        Fi
}
