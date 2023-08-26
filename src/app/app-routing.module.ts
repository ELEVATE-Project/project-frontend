import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeGuard } from './core/gurads/home.guard';
import { LayoutPageModule } from './pages/layout/layout.module';
import { HomePageModule } from './pages/home/home.module';
import { CreateProjectPageModule } from './pages/create-project/create-project.module';
import { LayoutPage } from './pages/layout/layout.page';
import { HomePage } from './pages/home/home.page';
import { CreateProjectPage } from './pages/create-project/create-project.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'layout',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: 'home',
    canActivate: [HomeGuard],
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'layout',
    canActivate: [HomeGuard],
    component: LayoutPage,
    children: [
      {path:'', component: HomePage, pathMatch: 'full'},
      { path: 'home', component: HomePage },
      { path: 'create-project', component: CreateProjectPage },
    ],
  },
  {
    path: 'create-project',
    loadChildren: () => import('./pages/create-project/create-project.module').then( m => m.CreateProjectPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
