import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateProjectsPage } from './create-projects.page';

const routes: Routes = [
  {
    path: '',
    component: CreateProjectsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateProjectsPageRoutingModule {}
