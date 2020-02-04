import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
//import { AngularFireDatabaseModule} from '@angular/fire/database';

export const firebaseConfig = {
  apiKey: "AIzaSyBq5-xeNuJ7-7V9xwE8n_cwRBD2u3jMgQ4",
  authDomain: "seguromascotas-8fab8.firebaseapp.com",
  databaseURL: "https://seguromascotas-8fab8.firebaseio.com",
  projectId: "seguromascotas-8fab8",
  storageBucket: "seguromascotas-8fab8.appspot.com",
  messagingSenderId: "461357505442",
  appId: "1:461357505442:web:ce4793c0ac00365f7d30fb"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
    //AngularFireDatabaseModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
