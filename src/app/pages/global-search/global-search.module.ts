import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlobalSearchPageRoutingModule } from './global-search-routing.module';

import { GlobalSearchPage } from './global-search.page';
import { SharedModule } from 'src/app/shared/sharedModule.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobalSearchPageRoutingModule,
    SharedModule
  ],
  declarations: [GlobalSearchPage]
})
export class GlobalSearchPageModule {}
