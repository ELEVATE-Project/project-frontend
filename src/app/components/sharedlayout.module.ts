import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
    HeaderComponent, 
    FooterComponent,
    SideMenuComponent,
    SideNavLayoutComponent,
    ProjectCardComponent,
    } from './index';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    ProjectCardComponent,
    SideMenuComponent,
    SideNavLayoutComponent, 
],
  imports: [CommonModule, IonicModule],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    SideMenuComponent,
    SideNavLayoutComponent, 
    ProjectCardComponent,
],
})
export class LayoutModule {}