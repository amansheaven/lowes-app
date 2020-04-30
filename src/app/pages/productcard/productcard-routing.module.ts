import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductcardPage } from './productcard.page';

const routes: Routes = [
  {
    path: '',
    component: ProductcardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductcardPageRoutingModule {}
