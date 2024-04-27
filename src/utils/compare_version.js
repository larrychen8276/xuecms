
function To(t, e) {
    return t.localeCompare(e, void 0, {
        numeric: !0,
        sensitivity: "base"
    }) >= 0
}
