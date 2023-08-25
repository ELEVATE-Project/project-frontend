import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutPageRoutingModule } from './layout-routing.module';

import { LayoutPage } from './layout.page';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SideNavLayoutComponent } from './side-nav-layout/side-nav-layout.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LayoutPage,
    HeaderComponent, 
    FooterComponent, 
    SideMenuComponent,
    SideNavLayoutComponent, 
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    IonicModule,
    LayoutPageRoutingModule,
  ],
  
  exports: [
      HeaderComponent, 
      FooterComponent, 
      SideMenuComponent,
      SideNavLayoutComponent, 
      // ProjectCardComponent,
  ],
})
export class LayoutPageModule {}
