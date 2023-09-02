import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  
  BackButtonComponent,
    FormComponent,
    ProjectCardComponent,
    ProjectListingComponent,
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
    ProjectListingComponent,
    ProjectSearchComponent
],
  imports: [CommonModule, IonicModule, TranslateModule, ReactiveFormsModule, TranslateModule],
  exports: [
    ProjectCardComponent,
    BackButtonComponent,
    FormComponent,
    ProjectListingComponent,
    ProjectSearchComponent
  ]
})
export class SharedModule {}