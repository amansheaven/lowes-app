import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'dash',
    loadChildren: () => import('./pages/dash/dash.module').then( m => m.DashPageModule)
  },
  {
    path: 'scan',
    loadChildren: () => import('./pages/tabs/scan/scan.module').then( m => m.ScanPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/tabs/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'navigation',
    loadChildren: () => import('./pages/navigation/navigation.module').then( m => m.NavigationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
