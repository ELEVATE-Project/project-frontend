import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { PieChartComponent } from 'src/app/components/index' ;
import { NgChartsModule } from 'ng2-charts';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutModule } from 'src/app/components/sharedlayout.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgChartsModule,
    LayoutModule,
    TranslateModule,
  ],
  declarations: [
    HomePage,
    PieChartComponent,
  ]
})
export class HomePageModule {}
