export class NavLink {
    private _childLinks: NavLink[] = [];
    constructor(private _name: string, private _link?: string) {
    }
    get name() {
        return this._name
    }
    set name(name: string) {
        name.trim();
        this._name = name;
    }
    get link() {
        return this._link;
    }
    set link(link: string) {
        link.trim();
        this._link = link;
    }
    get childLinks() {
        return this._childLinks;
    }
    appendChildLinks(childLinks: NavLink[]): NavLink {
        this._childLinks = this._childLinks.concat(childLinks);
        return this;
    }
    appendChildLink(name: string, link: string): void {
        const childLink = new NavLink(name, link);
        this._childLinks.push(childLink);
    }

    removeChildLink(name: string, link?: string) {
    }

    hasChild(): boolean {
        return this._childLinks.length > 0;
    }

}