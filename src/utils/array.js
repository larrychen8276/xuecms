
function gl(t) {
    return Array.isArray(t) ? t : t ? [t] : []
}
function ml(t, e) {
    return e ? (Array.isArray(e) || (e = [e]),
        Array.from(new Set([...e, t]))) : [t]
}
function fl(t, e) {
    return e ? (Array.isArray(t) || (t = [t]),
    Array.isArray(e) || (e = [e]),
        e.filter(n=>!t.includes(n))) : []
}

////////////////////////////////////////////////////////////////////////////////////////////////

function hl(t, e) {
    let n = {
        ...t
    };
    return x3(n, e),
        Qw(n, e),
        n
}
function S3(t, e, n) {
    let r = {
        ...e
    };
    return Ka({
        rule: r,
        valueIsArray: a=>Array.isArray(t[a]),
        getMergedValue: a=>t[a],
        onMergedResult: (a,i)=>r[a] = i
    }),
        Ka({
            rule: n,
            valueIsArray: a=>Array.isArray(t[a]),
            getMergedValue: a=>r[a],
            onMergedResult: (a,i)=>r[a] = i
        }),
        r
}
function Qw(t, e) {
    if (!e.condition)
        return;
    let n = e.condition.enableSubtitle?.true || {}
        , r = e.condition.enableSubtitle?.false || {}
        , a = t.enableSubtitle ? n : r;
    x3(t, a)
}
function Ka({rule: t, getMergedValue: e, valueIsArray: n, onMergedResult: r}) {
    Object.keys(t).sort().forEach(a=>{
            let[i,o,s] = Jw(a);
            if (!i || t[a] === void 0)
                return;
            let u = t[a];
            n(i) && (u = gl(t[a]));
            let l = e(i);
            if (l == null) {
                r(i, u);
                return
            }
            let c;
            if (o == "add_v") {
                if (!y3(s))
                    return;
                c = lp(l, u)
            } else if (o == "remove_v") {
                if (!y3(s))
                    return;
                c = v3(l, u)
            } else
                o === "add" ? c = lp(l, u) : o == "remove" && (c = v3(l, u));
            if (c) {
                r(i, c);
                return
            }
            Array.isArray(t[i]) && i.startsWith("additional") ? c = lp(l, u) : c = u,
                r(i, c)
        }
    )
}
function x3(t, e) {
    return Ka({
        rule: e,
        valueIsArray: n=>Array.isArray(t[n]),
        getMergedValue: n=>t[n],
        onMergedResult: (n,r)=>{
            t[n] = r
        }
    }),
        t
}
function lp(t, e) {
    let n;
    if (Array.isArray(t)) {
        let r = gl(e);
        n = [...t, ...r],
            n = Array.from(new Set(n))
    } else
        typeof t == "object" && typeof e == "object" ? n = {
            ...t,
            ...e
        } : n = e;
    return n
}
function Jw(t) {
    let e = t.lastIndexOf("[")
        , n = ""
        , r = t;
    return e > 0 && (n = t.slice(e + 1, t.length - 1),
        r = t.slice(0, e - 1)),
        [...r.split("."), n]
}

function v3(t, e) {
    if (Array.isArray(t)) {
        let n = gl(e);
        return t = t.filter(r=>!n.includes(r)),
            Array.from(new Set(t))
    } else if (typeof t == "object" && typeof e == "object")
        Object.keys(e).forEach(n=>{
                delete t[n]
            }
        );
    else
        return e;
    return t
}
