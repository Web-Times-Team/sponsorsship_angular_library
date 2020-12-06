import { Logo } from './logo';
import { NavLink } from './nav-link';

export class MenuBarDatas {

    constructor(public navLinks: NavLink[],
                public logo?: Logo) {

    }

}
