import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeGuard } from './core/gurads/home.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'global-search',
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
    path: 'global-search',
    loadChildren: () => import('./pages/global-search/global-search.module').then( m => m.GlobalSearchPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
