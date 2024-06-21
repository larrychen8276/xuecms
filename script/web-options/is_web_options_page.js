function K9() {
    let t = document.querySelector("meta[name=immersive-translate-options]");
    return !!(t && t.getAttribute("content") === "true")
}
