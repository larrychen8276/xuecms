function QD(t=h2) {
    return t.reduce((e,n)=>(e[n.code.toLowerCase()] = n.code,
        e[n.language.toLowerCase()] = n.code,
        e), {})
}
function jp(t) {
    return QD()[t.toLowerCase()]
}
