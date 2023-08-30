import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateProjectPageRoutingModule } from './create-project-routing.module';

import { CreateProjectPage } from './create-project.page';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/sharedModule.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateProjectPageRoutingModule,
    TranslateModule,
    SharedModule
  ],
  declarations: [CreateProjectPage]
})
export class CreateProjectPageModule {}
