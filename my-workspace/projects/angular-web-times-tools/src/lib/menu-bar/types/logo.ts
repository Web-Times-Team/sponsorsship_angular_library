
export class Logo {
    constructor(private _logoUrl: string, private _redirectUrl: string) {
    }
    get logoUrl() {
        return this._logoUrl;
    }
    set logoUrl(logoUrl: string) {
        this._logoUrl = logoUrl;
    }
    set redirectUrl(redirectUrl: string) {
        this._redirectUrl = redirectUrl;
    }
    get redirectUrl() {
        return this._redirectUrl;
    }

}