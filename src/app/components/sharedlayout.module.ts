import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
    HeaderComponent, 
    FooterComponent,
    SideMenuComponent,
    SideNavLayoutComponent,
    ProjectCardComponent,
    BackButtonComponent } from './index';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    ProjectCardComponent,
    BackButtonComponent,
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
    BackButtonComponent
],
})
export class LayoutModule {}