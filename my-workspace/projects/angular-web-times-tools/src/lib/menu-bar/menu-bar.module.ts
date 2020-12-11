import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuBarDatas, MENU_BAR_DATAS } from './types/menu-bar-datas';
import { Optional } from '@angular/core';
import { SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [MenuBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MenuBarComponent]
})
export class MenuBarModule {
  constructor(@Optional() @SkipSelf() parentModule?: MenuBarModule) {
    if (parentModule) {
      throw new Error(
        'MenuBarModule is already loaded. Import it in one place only');
    }// allows to prevent for more than 1 instance of MenuBarModule 
  } 
  /**
   * allows to create configuration for module level. It will use to doing one menuBar configuration for entire application.
   * So you can create many menu Bar for with one configuration.
   * @param menuBarDatas 
   */
  static forRoot(menuBarDatas: MenuBarDatas): ModuleWithProviders<MenuBarModule> {

    return {
      ngModule: MenuBarModule,
      providers: [
        { provide: MENU_BAR_DATAS, useValue: menuBarDatas }
      ]
    };
  }
}
