import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from './graphql.module';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { DirmapperPipe } from './pipes/dirmapper.pipe';
import { Pedometer } from '@ionic-native/pedometer/ngx';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';

@NgModule({
  declarations: [AppComponent, DirmapperPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, GraphQLModule],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    Pedometer,
    NFC,
    Ndef,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
