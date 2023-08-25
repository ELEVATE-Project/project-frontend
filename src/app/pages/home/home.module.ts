import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { PieChartComponent, ProjectCardComponent } from 'src/app/components/index' ;
import { NgChartsModule } from 'ng2-charts';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/sharedModule.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgChartsModule,
    TranslateModule,
    SharedModule
  ],
  declarations: [
    HomePage,
    PieChartComponent,
  ]
})
export class HomePageModule {}
