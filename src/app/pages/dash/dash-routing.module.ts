import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashPage } from './dash.page';

const routes: Routes = [
  {
    path: '',
    component: DashPage,
    children:[
      {
        path: 'scan',
        // outlet: 'scan',
        loadChildren: () => import('../tabs/scan/scan.module').then( m => m.ScanPageModule)
      },
      {
        path: 'cart',
        // outlet: 'cart',
        loadChildren: () => import('../tabs/cart/cart.module').then( m => m.CartPageModule)
      },
      {
        path: '',
        redirectTo: '/dash/scan',
        pathMatch: 'full'
      }
    ],
  },
  {
    path: '',
    redirectTo: '/dash/scan',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashPageRoutingModule {}
