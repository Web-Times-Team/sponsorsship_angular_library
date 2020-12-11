import { Inject, Optional } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuBarDatas, MENU_BAR_DATAS } from '../types/menu-bar-datas';

@Component({
  selector: 'wtt-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  @Input() menuBarDatas: MenuBarDatas
  constructor(private router: Router, @Optional() @Inject(MENU_BAR_DATAS) config?: MenuBarDatas
  ) {
    if (MENU_BAR_DATAS) {
      this.menuBarDatas = config;
    }
  }

  ngOnInit(): void {
  }

}
