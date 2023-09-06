import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  
  BackButtonComponent,
    FormComponent,
    ProfilePageComponent,
    ProjectCardComponent,
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
    ProjectSearchComponent,
    ProfilePageComponent
],
  imports: [CommonModule, IonicModule, TranslateModule, ReactiveFormsModule, TranslateModule],
  exports: [
    ProjectCardComponent,
    BackButtonComponent,
    FormComponent,
    ProjectSearchComponent,
    ProfilePageComponent
  ]
})
export class SharedModule {}