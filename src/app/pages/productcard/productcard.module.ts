import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductcardPageRoutingModule } from './productcard-routing.module';

import { ProductcardPage } from './productcard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductcardPageRoutingModule
  ],
  declarations: [ProductcardPage]
})
export class ProductcardPageModule {}
