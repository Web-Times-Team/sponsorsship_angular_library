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
  isDisplayedSubMenu: boolean;
  constructor(private router: Router, @Optional() @Inject(MENU_BAR_DATAS) config?: MenuBarDatas
  ) {
    if (MENU_BAR_DATAS) {
      this.menuBarDatas = config;
    }
    this.isDisplayedSubMenu = false;
  }

  ngOnInit(): void {
    
  }

  displaySubMenu(navLink: NavLink){
    if (navLink.hasChild())
    this.isDisplayedSubMenu = true;
  }

  hideSubMenu(navLink: NavLink){
    if (navLink.hasChild())
    this.isDisplayedSubMenu = false;
  }  

}
