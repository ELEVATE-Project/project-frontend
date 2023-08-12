import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ProjectCardComponent, PieChartComponent, SideMenuComponent } from 'src/app/components/index' ;
import { NgChartsModule } from 'ng2-charts';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgChartsModule,
    TranslateModule,
  ],
  declarations: [
    HomePage,
    ProjectCardComponent,
    PieChartComponent,
    SideMenuComponent
  ]
})
export class HomePageModule {}
