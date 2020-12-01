import { Component, Input, OnInit } from '@angular/core';
import { MenuBarDatas } from '../types/menu-bar-datas';

@Component({
  selector: 'lib-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  @Input() menuBarDatas: MenuBarDatas;
    constructor() { }

  ngOnInit(): void {
  }

}
