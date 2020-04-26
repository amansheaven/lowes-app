import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavigationPageRoutingModule } from './navigation-routing.module';

import { NavigationPage } from './navigation.page';
import { DirdisplayComponent } from 'src/app/component/dirdisplay/dirdisplay.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavigationPageRoutingModule,
  ],
  entryComponents: [DirdisplayComponent],
  declarations: [NavigationPage, DirdisplayComponent]
})
export class NavigationPageModule {}
