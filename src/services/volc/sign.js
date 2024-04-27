
var uA = ["authorization", "content-type", "content-length", "user-agent", "presigned-expires", "expect"]
    , Dt = {
        algorithm: "HMAC-SHA256",
        v4Identifier: "request",
        dateHeader: "X-Date",
        tokenHeader: "X-Security-Token",
        contentSha256Header: "X-Content-Sha256",
        notSignBody: "X-NotSignBody",
        kDatePrefix: "",
        credential: "X-Credential",
        algorithmKey: "X-Algorithm",
        signHeadersKey: "X-SignedHeaders",
        signQueriesKey: "X-SignedQueries",
        signatureKey: "X-Signature"
    }
    , eg = t=>{
        try {
            return encodeURIComponent(t).replace(/[^A-Za-z0-9_.~\-%]+/g, escape).replace(/[*]/g, e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)
        } catch {
            return ""
        }
    }
    , tg = t=>Object.keys(t).map(e=>{
            let n = t[e];
            if (typeof n > "u" || n === null)
                return;
            let r = eg(e);
            if (r)
                return Array.isArray(n) ? `${r}=${n.map(eg).sort().join(`&${r}=`)}` : `${r}=${eg(n)}`
        }
    ).filter(e=>e).join("&")
    , ro = class {
        request;
        serviceName;
        bodySha256;
        constructor(e, n, r) {
            this.request = e,
                this.request.headers = e.headers || {},
                this.serviceName = n,
                r = r || {},
                this.bodySha256 = r.bodySha256,
                this.request.params = this.sortParams(this.request.params)
        }
        sortParams(e) {
            let n = {};
            return e && Object.keys(e).filter(r=>{
                    let a = e[r];
                    return typeof a < "u" && a !== null
                }
            ).sort().map(r=>{
                    n[r] = e[r]
                }
            ),
                n
        }
        async addAuthorization(e, n) {
            let r = this.getDateTime(n);
            await this.addHeaders(e, r),
                this.request.headers.Authorization = await this.authorization(e, r)
        }
        async authorization(e, n) {
            let r = []
                , a = this.credentialString(n);
            return r.push(`${Dt.algorithm} Credential=${e.accessKeyId}/${a}`),
                r.push(`SignedHeaders=${this.signedHeaders()}`),
                r.push(`Signature=${await this.signature(e, n)}`),
                r.join(", ")
        }
        async getSignUrl(e, n) {
            let r = this.getDateTime(n)
                , a = {
                ...this.request.params
            }
                , i = this.request.params
                , o = this.request.headers;
            e.sessionToken && (a[Dt.tokenHeader] = e.sessionToken),
                a[Dt.dateHeader] = r,
                a[Dt.notSignBody] = "",
                a[Dt.credential] = `${e.accessKeyId}/${this.credentialString(r)}`,
                a[Dt.algorithmKey] = Dt.algorithm,
                a[Dt.signHeadersKey] = "",
                a[Dt.signQueriesKey] = void 0,
                a[Dt.signatureKey] = void 0,
                a = this.sortParams(a),
                this.request.params = a,
                this.request.headers = {};
            let s = await this.signature(e, r);
            return this.request.params = i,
                this.request.headers = o,
                a[Dt.signQueriesKey] = Object.keys(a).sort().join(";"),
                a[Dt.signatureKey] = s,
                tg(a)
        }
        getDateTime(e) {
            return this.iso8601(e).replace(/[:\-]|\.\d{3}/g, "")
        }
        async addHeaders(e, n) {

            debugger;

            if (this.request.headers[Dt.dateHeader] = n,
            e.sessionToken && (this.request.headers[Dt.tokenHeader] = e.sessionToken),
                this.request.body) {
                let r = this.request.body;
                this.request.headers[Dt.contentSha256Header] = await tr(r)
            }
        }
        async signature(e, n) {
            let r = await this.getSigningKey(e, n.substr(0, 8), this.request.region, this.serviceName);
            return Jl(await pa(await this.stringToSign(n), r))
        }
        async stringToSign(e) {
            let n = [];
            n.push(Dt.algorithm),
                n.push(e),
                n.push(this.credentialString(e));
            let r = await this.canonicalString();
            return n.push(await this.hexEncodedHash(r)),
                n.join(`
`)
        }
        async canonicalString() {
            let e = []
                , n = this.request.pathname || "/";
            e.push(this.request.method.toUpperCase()),
                e.push(n);
            let r = tg(this.request.params) || "";
            return e.push(r),
                e.push(`${this.canonicalHeaders()}
`),
                e.push(this.signedHeaders()),
                e.push(await this.hexEncodedBodyHash()),
                e.join(`
`)
        }
        canonicalHeaders() {
            let e = [];
            Object.keys(this.request.headers).forEach(r=>{
                    e.push([r, this.request.headers[r]])
                }
            ),
                e.sort((r,a)=>r[0].toLowerCase() < a[0].toLowerCase() ? -1 : 1);
            let n = [];
            return e.forEach(r=>{
                    let a = r[0].toLowerCase();
                    if (this.isSignableHeader(a)) {
                        let i = r[1];
                        if (typeof i > "u" || i === null || typeof i.toString != "function")
                            throw new V(`Header ${a} contains invalid value`);
                        n.push(`${a}:${this.canonicalHeaderValues(i.toString())}`)
                    }
                }
            ),
                n.join(`
`)
        }
        canonicalHeaderValues(e) {
            return e.replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "")
        }
        signedHeaders() {
            let e = [];
            return Object.keys(this.request.headers).forEach(n=>{
                    n = n.toLowerCase(),
                    this.isSignableHeader(n) && e.push(n)
                }
            ),
                e.sort().join(";")
        }
        signedQueries() {
            return Object.keys(this.request.params).join(";")
        }
        credentialString(e) {
            return this.createScope(e.substr(0, 8), this.request.region, this.serviceName)
        }
        async hexEncodedHash(e) {
            return await tr(e)
        }
        async hexEncodedBodyHash() {
            return this.request.headers[Dt.contentSha256Header] ? this.request.headers[Dt.contentSha256Header] : this.request.body ? await this.hexEncodedHash(tg(this.request.body)) : await this.hexEncodedHash("")
        }
        isSignableHeader(e) {
            return uA.indexOf(e) < 0
        }
        iso8601(e) {
            return e === void 0 && (e = new Date),
                e.toISOString().replace(/\.\d{3}Z$/, "Z")
        }
        async getSigningKey(e, n, r, a) {
            let i = await pa(n, `${Dt.kDatePrefix}${e.secretKey}`)
                , o = await pa(r, i)
                , s = await pa(a, o);
            return pa(Dt.v4Identifier, s)
        }
        createScope(e, n, r) {
            return [e.substr(0, 8), n, r, Dt.v4Identifier].join("/")
        }
    }
;
