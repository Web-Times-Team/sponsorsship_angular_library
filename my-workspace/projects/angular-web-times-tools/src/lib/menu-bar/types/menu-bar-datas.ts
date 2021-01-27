import { InjectionToken } from '@angular/core';
import { Logo } from './logo';
import { NavLink } from './nav-link';

export const MENU_BAR_DATAS = new InjectionToken<MenuBarDatas>("menuBarDatas");

export class MenuBarDatas {

    constructor(public navLinks: NavLink[],
                public logo?: Logo) {

    }

}
