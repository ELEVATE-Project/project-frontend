import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ProjectDetailsComponent } from 'src/app/components/project-details/project-details.component';
import { ProjectStatusCountComponent } from 'src/app/components/project-status-count/project-status-count.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ProjectStatusCountComponent, ProjectDetailsComponent,]
})
export class HomePageModule {}
