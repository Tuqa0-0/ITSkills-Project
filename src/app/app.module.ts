import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireModule } from 'angularfire2';


const firebaseConfig = {
  apiKey: "AIzaSyDnoA-PZP_FwgGGU3Ivmqh8zNm5pPSoF-0",
  authDomain: "it-skills-6b4d2.firebaseapp.com",
  databaseURL: "https://it-skills-6b4d2.firebaseio.com",
  projectId: "it-skills-6b4d2",
  storageBucket: "it-skills-6b4d2.appspot.com",
  messagingSenderId: "409392088173",
  appId: "1:409392088173:web:2c59a6cac50f9748c96b64",
  measurementId: "G-6DKHEQ2XG2"

};



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),

    AngularFireDatabaseModule,
    AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
