import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateProjectsPageRoutingModule } from './create-projects-routing.module';

import { CreateProjectsPage } from './create-projects.page';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutModule } from 'src/app/components/layout/sharedLayout.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    IonicModule,
    CreateProjectsPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [CreateProjectsPage]
})
export class CreateProjectsPageModule {}
