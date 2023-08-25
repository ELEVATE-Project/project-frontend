import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  
    FooterComponent,
    ProjectCardComponent,
    } from '../components';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ProjectCardComponent
],
  imports: [CommonModule, IonicModule, TranslateModule],
  exports: [
    ProjectCardComponent
  ]
})
export class SharedModule {}