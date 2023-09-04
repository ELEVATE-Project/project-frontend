import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  
  BackButtonComponent,
    FormComponent,
    ProjectCardComponent,
    TaskFormsComponent,
    ProjectSearchComponent,
    } from '../components';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProjectCardComponent,
    BackButtonComponent,
    FormComponent,
    TaskFormsComponent,
    ProjectSearchComponent
],
  imports: [CommonModule, IonicModule, TranslateModule, ReactiveFormsModule, TranslateModule],
  exports: [
    ProjectCardComponent,
    BackButtonComponent,
    FormComponent,
    TaskFormsComponent,
    ProjectSearchComponent
  ]
})
export class SharedModule {}