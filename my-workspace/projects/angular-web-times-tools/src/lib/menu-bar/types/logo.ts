
export class Logo {
    constructor(private _logoUrl: string, private _redirectUrl: string) {
    }
    get logoUrl() {
        return this._logoUrl;
    }
    set logoUrl(logoUrl: string) {
        logoUrl.trim();
        this._logoUrl = logoUrl;
    }
    set redirectUrl(redirectUrl: string) {
        redirectUrl.trim();
        this._redirectUrl = redirectUrl;
    }
    get redirectUrl() {
        return this._redirectUrl;
    }

}