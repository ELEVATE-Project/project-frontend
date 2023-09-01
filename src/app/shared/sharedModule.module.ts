import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  
  BackButtonComponent,
    FormComponent,
    ProjectCardComponent,
    } from '../components';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProjectCardComponent,
    BackButtonComponent,
    FormComponent
],
  imports: [CommonModule, IonicModule, TranslateModule, ReactiveFormsModule, TranslateModule],
  exports: [
    ProjectCardComponent,
    BackButtonComponent,
    FormComponent
  ]
})
export class SharedModule {}