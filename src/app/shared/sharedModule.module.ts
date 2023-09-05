import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  
  BackButtonComponent,
    FormComponent,
    PieChartComponent,
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
    ProjectSearchComponent,
    PieChartComponent,
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
    PieChartComponent,
    ProjectSearchComponent,
  ]
})
export class SharedModule {}