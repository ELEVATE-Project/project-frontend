import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
    HeaderComponent, 
    FooterComponent,
    SideMenuComponent,
    SideMenuLayoutComponent,
    ProjectCardComponent,
    BackButtonComponent } from '../index';
import { IonicModule } from '@ionic/angular';
import {  } from './side-menu/side-menu.component';


@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    ProjectCardComponent,
    BackButtonComponent,
    SideMenuComponent,
    SideMenuLayoutComponent, 
],
  imports: [CommonModule, IonicModule],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    SideMenuComponent,
    SideMenuLayoutComponent, 
    ProjectCardComponent,
    BackButtonComponent
],
})
export class LayoutModule {}
