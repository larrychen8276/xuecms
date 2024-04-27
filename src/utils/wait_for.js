
var j9 = {
    NOT_FUNCTION: "Your executor is not a function. functions and promises are valid.",
    FAILED_TO_WAIT: "Failed to wait"
};
function $7(t) {
    return ()=>Promise.resolve().then(()=>t()).catch(e=>{
            throw e
        }
    )
}
function V7(t) {
    if (typeof t != "function")
        throw new Error(j9.NOT_FUNCTION)
}
var of = class {

    _interval;
    _timeout;
    _stopOnFailure;
    _backoffFactor;
    _backoffMaxInterval;
    _Console;
    originalStacktraceError;
    _userMessage;
    _verbose;
    _isWaiting;
    _isResolved;
    _executeFn;
    start;
    promise;
    resolve;
    reject;
    _lastError;
    constructor({interval: e=100, timeout: n=1e3, stopOnFailure: r=!1, verbose: a=!1, backoffFactor: i=1, backoffMaxInterval: o, message: s=""}={}) {
        this._interval = e,
            this._timeout = n,
            this._stopOnFailure = r,
            this._isWaiting = !1,
            this._isResolved = !1,
            this._verbose = a,
            this._userMessage = s,
            this.originalStacktraceError = new Error,
            this._Console = console,
            this._backoffFactor = i,
            this._backoffMaxInterval = o || n,
            this.start = +Date.now()
    }
    tryEvery(e) {
        return this._interval = e,
            this
    }
    stopAfter(e) {
        return this._timeout = e,
            this
    }
    execute(e) {
        return this._applyPromiseHandlers(),
            V7(e),
            this._executeFn = $7(e),
            this.start = Date.now(),
            this._isWaiting = !0,
            this._log("starting to execute"),
            this._runFunction(),
            this.promise
    }
    getPromise() {
        return this.promise
    }
    isResolved() {
        return this._isResolved
    }
    isWaiting() {
        return this._isWaiting
    }
    stopOnFailure(e) {
        return this._stopOnFailure = e,
            this
    }
    _applyPromiseHandlers() {
        this.promise = new Promise((e,n)=>{
                this.resolve = e,
                    this.reject = n
            }
        )
    }
    _timeFromStart() {
        return Date.now() - this.start
    }
    _shouldStopTrying() {
        return this._timeFromStart() > this._timeout
    }
    _executeAgain() {
        this._log("executing again");
        let e = this._interval
            , n = e * this._backoffFactor;
        this._interval = n > this._backoffMaxInterval ? this._backoffMaxInterval : n,
            setTimeout(this._runFunction.bind(this), e)
    }
    _failedToWait() {
        let e = `${j9.FAILED_TO_WAIT} after ${this._timeFromStart()}ms`;
        if (this._userMessage && (e = `${e}: ${this._userMessage}`),
            this._lastError) {
            this._lastError.message = `${e}
${this._lastError.message}`;
            let n = this.originalStacktraceError.stack;
            n && (this._lastError.stack += n.substring(n.indexOf(`
`) + 1))
        } else
            this._lastError = this.originalStacktraceError,
                this._lastError.message = e;
        return this._log(this._lastError),
            this._lastError
    }
    _runFunction() {
        if (this._shouldStopTrying()) {
            this._isWaiting = !1,
                this.reject?.(this._failedToWait());
            return
        }
        this._executeFn().then(e=>{
                //debugger;

                if (e === !1) {
                    this._log(`then execute again with result: ${e}`),
                        this._executeAgain();
                    return
                }
                this.resolve?.(e),
                    this._isWaiting = !1,
                    this._isResolved = !0,
                    this._log(`then done waiting with result: ${e}`)
            }
        ).catch(e=>this._stopOnFailure ? (this._log(`stopped on failure with err: ${e}`),
            this.reject?.(e)) : (this._lastError = e,
            this._log(`catch with err: ${e}`),
            this._executeAgain()))
    }
    _log(e) {
        this._verbose && this._Console && this._Console.log && this._Console.log(e)
    }
}
    , H9 = (t,e)=>new of(e).execute(t);
