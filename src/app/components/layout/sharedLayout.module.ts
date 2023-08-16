import { NgModule } from '@angular/core';
import {  } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { 
    HeaderComponent, 
    FooterComponent,
    SideMenuComponent,
    ProjectCardComponent,
    BackButtonComponent } from '../index';
import { IonicModule } from '@ionic/angular';
import {  } from './side-menu/side-menu.component';
import {  } from '../project-card/project-card.component';
import {  } from './back-button/back-button.component';


@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SideMenuComponent , 
    ProjectCardComponent,
    BackButtonComponent
],
  imports: [CommonModule, IonicModule],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    SideMenuComponent, 
    ProjectCardComponent,
    BackButtonComponent
],
})
export class LayoutModule {}
