import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuBarDatas } from '../types/menu-bar-datas';

@Component({
  selector: 'wtt-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  @Input() menuBarDatas: MenuBarDatas
  constructor(private router: Router
  ) {

  }

  ngOnInit(): void {

  }
  makelogoRedirect(): void {
    this.router.navigate([this.menuBarDatas.logo.redirectUrl]);
  }
  makeNavLinkRedirect(link: string): void {
    this.router.navigate([link]);
  }
  makeChildLinkRedirect(childLink: string): void {
    this.router.navigate([childLink]);
  }
}
