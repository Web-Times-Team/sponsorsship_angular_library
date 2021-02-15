import { Inject, Optional } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuBarDatas, MENU_BAR_DATAS } from '../types/menu-bar-datas';
import { NavLink } from '../types/nav-link';

@Component({
  selector: 'wtt-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  @Input() menuBarDatas: MenuBarDatas
  isDisplayedSubMenu = false;
  isDisplayedStandMenu = false;
  constructor(private router: Router, @Optional() @Inject(MENU_BAR_DATAS) config?: MenuBarDatas
  ) {
    if (MENU_BAR_DATAS) {
      this.menuBarDatas = config;
    }
  }

  ngOnInit(): void {

  }

  displaySubMenu(navLink: NavLink) {
    if (navLink.hasChild())
      this.isDisplayedSubMenu = !this.isDisplayedSubMenu;
  }
  displayStandMenu() {
    this.isDisplayedStandMenu = !this.isDisplayedStandMenu;
  }
}
