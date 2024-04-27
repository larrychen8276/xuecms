"use strict";

var y6 = `
  .toastify {
    padding: 12px 20px;
    color: #ffffff;
    display: inline-block;
    box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);
    background: -webkit-linear-gradient(315deg, #73a5ff, #5477f5);
    background: linear-gradient(135deg, #73a5ff, #5477f5);
    position: fixed;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
    border-radius: 2px;
    cursor: pointer;
    text-decoration: none;
    max-width: calc(50% - 20px);
    z-index: 2147483647;
    font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 0.875rem;

  }

  .toastify.on {
      opacity: 1;
  }

  .toast-close {
      background: transparent;
      border: 0;
      color: white;
      cursor: pointer;
      font-family: inherit;
      font-size: 1em;
      opacity: 0.4;
      padding: 0 5px;
  }

  .toastify-right {
      right: 15px;
  }

  .toastify-left {
      left: 15px;
  }

  .toastify-top {
      top: -150px;
  }

  .toastify-bottom {
      bottom: -150px;
  }

  .toastify-rounded {
      border-radius: 25px;
  }

  .toastify-avatar {
      width: 1.5em;
      height: 1.5em;
      margin: -7px 5px;
      border-radius: 2px;
  }

  .toastify-center {
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      max-width: fit-content;
      max-width: -moz-fit-content;
  }

  @media only screen and (max-width: 360px) {
      .toastify-right, .toastify-left {
          margin-left: auto;
          margin-right: auto;
          left: 0;
          right: 0;
          max-width: fit-content;
      }
  }
`
    , fd = "immersive-translate-toastify-shadow-root"
    , hd = class {
        defaults = {
            oldestFirst: !0,
            text: "Toastify is awesome!",
            node: void 0,
            duration: 3e3,
            selector: void 0,
            callback: function() {},
            destination: void 0,
            newWindow: !1,
            close: !1,
            gravity: "toastify-top",
            positionLeft: !1,
            position: "",
            backgroundColor: "",
            avatar: "",
            className: "",
            stopOnFocus: !0,
            onClick: function() {},
            offset: {
                x: 0,
                y: 0
            },
            escapeMarkup: !0,
            ariaLive: "polite",
            style: {
                background: ""
            }
        };
        constructor(e) {
            this.version = "1.12.0",
                this.options = {},
                this.toastElement = null,
                this._rootElement = document.body,
                this._init(e)
        }
        showToast() {
            if (this.toastElement = this._buildToast(),
            typeof this.options.selector == "string")
                this._rootElement = document.getElementById(this.options.selector);
            else if (this.options.selector instanceof HTMLElement || this.options.selector instanceof ShadowRoot)
                this._rootElement = this.options.selector;
            else if (document.getElementById(fd)) {
                let e = document.getElementById(fd);
                this._rootElement = e.shadowRoot
            } else {
                let e = document.createElement("div");
                e.setAttribute("translate", "no"),
                    e.className = "no-translate immersive-translate-toastify-shadow-root",
                    e.id = fd,
                    e.style.all = "initial",
                    e.style.zIndex = "2147483647",
                    document.body.appendChild(e);
                let n = e.attachShadow({
                    mode: "open"
                })
                    , r = document.createElement("style");
                r.textContent = y6,
                    n.appendChild(r),
                    this._rootElement = n
            }
            if (!this._rootElement)
                throw "Root element is not defined";
            return this._rootElement.insertBefore(this.toastElement, this._rootElement.firstChild),
                this._reposition(),
            this.options.duration > 0 && (this.toastElement.timeOutValue = window.setTimeout(()=>{
                    this._removeElement(this.toastElement)
                }
                , this.options.duration)),
                this
        }
        hideToast() {
            this.toastElement.timeOutValue && clearTimeout(this.toastElement.timeOutValue),
                this._removeElement(this.toastElement)
        }
        _init(e) {
            this.options = Object.assign(this.defaults, e),
                this.options.backgroundColor,
                this.toastElement = null,
                this.options.gravity = e.gravity === "bottom" ? "toastify-bottom" : "toastify-top",
                this.options.stopOnFocus = e.stopOnFocus === void 0 ? !0 : e.stopOnFocus,
            e.backgroundColor && (this.options.style.background = e.backgroundColor)
        }
        _buildToast() {
            if (!this.options)
                throw "Toastify is not initialized";
            let e = document.createElement("div");
            e.className = `toastify on ${this.options.className}`,
                e.className += ` toastify-${this.options.position}`,
                e.className += ` ${this.options.gravity}`;
            for (let n in this.options.style)
                e.style[n] = this.options.style[n];
            if (this.options.ariaLive && e.setAttribute("aria-live", this.options.ariaLive),
            this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE)
                e.appendChild(this.options.node);
            else if (this.options.escapeMarkup ? e.innerText = this.options.text : e.innerHTML = this.options.text,
            this.options.avatar !== "") {
                let n = document.createElement("img");
                n.src = this.options.avatar,
                    n.className = "toastify-avatar",
                    this.options.position == "left" ? e.appendChild(n) : e.insertAdjacentElement("afterbegin", n)
            }
            if (this.options.close === !0) {
                let n = document.createElement("button");
                n.type = "button",
                    n.setAttribute("aria-label", "Close"),
                    n.className = "toast-close",
                    n.innerHTML = "&#10006;",
                    n.addEventListener("click", a=>{
                            a.stopPropagation(),
                                this._removeElement(this.toastElement),
                                window.clearTimeout(this.toastElement.timeOutValue)
                        }
                    );
                let r = window.innerWidth > 0 ? window.innerWidth : screen.width;
                this.options.position == "left" && r > 360 ? e.insertAdjacentElement("afterbegin", n) : e.appendChild(n)
            }
            if (this.options.stopOnFocus && this.options.duration > 0 && (e.addEventListener("mouseover", n=>{
                    window.clearTimeout(e.timeOutValue)
                }
            ),
                e.addEventListener("mouseleave", ()=>{
                        e.timeOutValue = window.setTimeout(()=>{
                                this._removeElement(e)
                            }
                            , this.options.duration)
                    }
                )),
            typeof this.options.destination < "u" && e.addEventListener("click", n=>{
                    n.stopPropagation(),
                        this.options.newWindow === !0 ? window.open(this.options.destination, "_blank") : window.location = this.options.destination
                }
            ),
            typeof this.options.onClick == "function" && typeof this.options.destination > "u" && e.addEventListener("click", n=>{
                    n.stopPropagation(),
                        this.options.onClick()
                }
            ),
            typeof this.options.offset == "object") {
                let n = this._getAxisOffsetAValue("x", this.options)
                    , r = this._getAxisOffsetAValue("y", this.options)
                    , a = this.options.position == "left" ? n : `-${n}`
                    , i = this.options.gravity == "toastify-top" ? r : `-${r}`;
                e.style.transform = `translate(${a},${i})`
            }
            return e
        }
        _removeElement(e) {
            e.className = e.className.replace(" on", ""),
                window.setTimeout(()=>{
                        this.options.node && this.options.node.parentNode && this.options.node.parentNode.removeChild(this.options.node),
                        e.parentNode && e.parentNode.removeChild(e),
                            this.options.callback.call(e),
                            this._reposition()
                    }
                    , 400)
        }
        _reposition() {
            let e = {
                top: 15,
                bottom: 15
            }, n = {
                top: 15,
                bottom: 15
            }, r = {
                top: 15,
                bottom: 15
            }, a = this._rootElement.querySelectorAll(".toastify"), i;
            for (let o = 0; o < a.length; o++) {
                a[o].classList.contains("toastify-top") === !0 ? i = "toastify-top" : i = "toastify-bottom";
                let s = a[o].offsetHeight;
                i = i.substr(9, i.length - 1);
                let u = 15;
                (window.innerWidth > 0 ? window.innerWidth : screen.width) <= 360 ? (a[o].style[i] = `${r[i]}px`,
                    r[i] += s + u) : a[o].classList.contains("toastify-left") === !0 ? (a[o].style[i] = `${e[i]}px`,
                    e[i] += s + u) : (a[o].style[i] = `${n[i]}px`,
                    n[i] += s + u)
            }
        }
        _getAxisOffsetAValue(e, n) {
            return n.offset[e] ? isNaN(n.offset[e]) ? n.offset[e] : `${n.offset[e]}px` : "0px"
        }
    };

function Toastify(t) {
    t = t || {},
        new hd({
            gravity: "bottom",
            duration: 1500,
            style: {
                background: "#222",
                color: "#f2f2f2"
            },
            ...t
        }).showToast()
}
