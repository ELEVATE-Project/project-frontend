import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  
  BackButtonComponent,
    FormComponent,
    NoDataComponentComponent,
    TaskFormsComponent,
    ProjectListingComponent,
    PieChartComponent,
    ProfilePageComponent,
    ProjectCardComponent,
    ProjectReportsComponent,
    ProjectSearchComponent,
    } from '../components';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    ProjectCardComponent,
    BackButtonComponent,
    ProjectReportsComponent,
    FormComponent,
    TaskFormsComponent,
    ProjectSearchComponent,
    ProjectListingComponent,
    NoDataComponentComponent,
    PieChartComponent,
    ProfilePageComponent
],
  imports: [
    CommonModule, 
    IonicModule, 
    TranslateModule, 
    ReactiveFormsModule, 
    TranslateModule,
    NgChartsModule 
  ],
  exports: [
    ProjectCardComponent,
    BackButtonComponent,
    ProjectReportsComponent,
    FormComponent,
    TaskFormsComponent,
    ProjectSearchComponent,
    ProjectListingComponent,
    ProjectSearchComponent,
    NoDataComponentComponent,
    PieChartComponent,
    ProjectSearchComponent,
    ProjectSearchComponent,
    ProfilePageComponent
  ]
})
export class SharedModule {}