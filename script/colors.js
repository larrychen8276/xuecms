// TODO:（颜色）模块

var {Deno: Cf} = globalThis
    , wf = typeof Cf?.noColor == "boolean" ? Cf.noColor : !0
    , Td = !wf;
function v6(t) {
    wf || (Td = t)
}
function S6() {
    return Td
}
function ke(t, e) {
    return {
        open: `\x1B[${t.join(";")}m`,
        close: `\x1B[${e}m`,
        regexp: new RegExp(`\\x1b\\[${e}m`,"g")
    }
}
function Pe(t, e) {
    return Td ? `${e.open}${t.replace(e.regexp, e.open)}${e.close}` : t
}
function x6(t) {
    return Pe(t, ke([0], 0))
}
function E6(t) {
    return Pe(t, ke([1], 22))
}
function C6(t) {
    return Pe(t, ke([2], 22))
}
function w6(t) {
    return Pe(t, ke([3], 23))
}
function D6(t) {
    return Pe(t, ke([4], 24))
}
function A6(t) {
    return Pe(t, ke([7], 27))
}
function k6(t) {
    return Pe(t, ke([8], 28))
}
function P6(t) {
    return Pe(t, ke([9], 29))
}
function L6(t) {
    return Pe(t, ke([30], 39))
}
function _6(t) {
    return Pe(t, ke([31], 39))
}
function F6(t) {
    return Pe(t, ke([32], 39))
}
function M6(t) {
    return Pe(t, ke([33], 39))
}
function B6(t) {
    return Pe(t, ke([34], 39))
}
function I6(t) {
    return Pe(t, ke([35], 39))
}
function R6(t) {
    return Pe(t, ke([36], 39))
}
function O6(t) {
    return Pe(t, ke([37], 39))
}
function z6(t) {
    return Df(t)
}
function Df(t) {
    return Pe(t, ke([90], 39))
}
function N6(t) {
    return Pe(t, ke([91], 39))
}
function U6(t) {
    return Pe(t, ke([92], 39))
}
function q6(t) {
    return Pe(t, ke([93], 39))
}
function j6(t) {
    return Pe(t, ke([94], 39))
}
function H6(t) {
    return Pe(t, ke([95], 39))
}
function W6(t) {
    return Pe(t, ke([96], 39))
}
function K6(t) {
    return Pe(t, ke([97], 39))
}
function G6(t) {
    return Pe(t, ke([40], 49))
}
function $6(t) {
    return Pe(t, ke([41], 49))
}
function V6(t) {
    return Pe(t, ke([42], 49))
}
function Y6(t) {
    return Pe(t, ke([43], 49))
}
function Q6(t) {
    return Pe(t, ke([44], 49))
}
function J6(t) {
    return Pe(t, ke([45], 49))
}
function Z6(t) {
    return Pe(t, ke([46], 49))
}
function X6(t) {
    return Pe(t, ke([47], 49))
}
function eS(t) {
    return Pe(t, ke([100], 49))
}
function tS(t) {
    return Pe(t, ke([101], 49))
}
function nS(t) {
    return Pe(t, ke([102], 49))
}
function rS(t) {
    return Pe(t, ke([103], 49))
}
function aS(t) {
    return Pe(t, ke([104], 49))
}
function iS(t) {
    return Pe(t, ke([105], 49))
}
function oS(t) {
    return Pe(t, ke([106], 49))
}
function sS(t) {
    return Pe(t, ke([107], 49))
}
function Hr(t, e=255, n=0) {
    return Math.trunc(Math.max(Math.min(t, e), n))
}
function uS(t, e) {
    return Pe(t, ke([38, 5, Hr(e)], 39))
}
function lS(t, e) {
    return Pe(t, ke([48, 5, Hr(e)], 49))
}
function cS(t, e) {
    return typeof e == "number" ? Pe(t, ke([38, 2, e >> 16 & 255, e >> 8 & 255, e & 255], 39)) : Pe(t, ke([38, 2, Hr(e.r), Hr(e.g), Hr(e.b)], 39))
}
function dS(t, e) {
    return typeof e == "number" ? Pe(t, ke([48, 2, e >> 16 & 255, e >> 8 & 255, e & 255], 49)) : Pe(t, ke([48, 2, Hr(e.r), Hr(e.g), Hr(e.b)], 49))
}
var pS = new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");
function gS(t) {
    return t.replace(pS, "")
}

var On = {};
eu(On, {
    bgBlack: ()=>G6,
    bgBlue: ()=>Q6,
    bgBrightBlack: ()=>eS,
    bgBrightBlue: ()=>aS,
    bgBrightCyan: ()=>oS,
    bgBrightGreen: ()=>nS,
    bgBrightMagenta: ()=>iS,
    bgBrightRed: ()=>tS,
    bgBrightWhite: ()=>sS,
    bgBrightYellow: ()=>rS,
    bgCyan: ()=>Z6,
    bgGreen: ()=>V6,
    bgMagenta: ()=>J6,
    bgRed: ()=>$6,
    bgRgb24: ()=>dS,
    bgRgb8: ()=>lS,
    bgWhite: ()=>X6,
    bgYellow: ()=>Y6,
    black: ()=>L6,
    blue: ()=>B6,
    bold: ()=>E6,
    brightBlack: ()=>Df,
    brightBlue: ()=>j6,
    brightCyan: ()=>W6,
    brightGreen: ()=>U6,
    brightMagenta: ()=>H6,
    brightRed: ()=>N6,
    brightWhite: ()=>K6,
    brightYellow: ()=>q6,
    cyan: ()=>R6,
    dim: ()=>C6,
    getColorEnabled: ()=>S6,
    gray: ()=>z6,
    green: ()=>F6,
    hidden: ()=>k6,
    inverse: ()=>A6,
    italic: ()=>w6,
    magenta: ()=>I6,
    red: ()=>_6,
    reset: ()=>x6,
    rgb24: ()=>cS,
    rgb8: ()=>uS,
    setColorEnabled: ()=>v6,
    strikethrough: ()=>P6,
    stripColor: ()=>gS,
    underline: ()=>D6,
    white: ()=>O6,
    yellow: ()=>M6
});

