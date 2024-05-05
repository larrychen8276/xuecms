var ki = console
    , K0 = class {
    #e = performance.now();
    reset() {
        this.#e = performance.now()
    }
    stop(e) {
        let n = performance.now()
            , r = Math.round(n - this.#e)
            , a = On.green;
        r > 1e4 ? a = On.red : r > 1e3 && (a = On.yellow),
            ki.debug(On.dim(Ua + " TIMING:"), e, "in", a(r + "ms")),
            this.#e = n
    }
}
    , rs = class {
    #e = 1;
    get level() {
        return this.#e
    }
    setLevel(e) {
        switch (e) {
            case "debug":
                this.#e = 0;
                break;
            case "info":
                this.#e = 1;
                break;
            case "warn":
                this.#e = 2;
                break;
            case "error":
                this.#e = 3;
                break;
            case "fatal":
                this.#e = 4;
                break
        }
    }
    debug(...e) {
        this.#e <= 0 && ki.log(On.dim(Ua + " DEBUG:"), ...e)
    }
    v(...e) {
        this.#e <= 0
    }
    info(...e) {
        this.#e <= 1 && ki.log(On.green(Ua + " INFO:"), ...e)
    }
    l(...e) {
        this.#e <= 1
    }
    warn(...e) {
        this.#e <= 2 && ki.warn(On.yellow(Ua + " WARN:"), ...e)
    }
    error(...e) {
        this.#e <= 3 && ki.error(On.red(Ua + " ERROR:"), ...e)
    }
    fatal(...e) {
        this.#e <= 4 && ki.error(On.red(Ua + " FATAL:"), ...e)
    }
    timing() {
        return this.level === 0 ? new K0 : {
            reset: ()=>{}
            ,
            stop: ()=>{}
        }
    }
}
    , B = new rs;
