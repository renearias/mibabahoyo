import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule, AuthProviders, AuthMethods  } from 'angularfire2';


const FIREBASE_APP_CONFIG = {
  apiKey: 'AIzaSyDq-TWoznlYMGrjopqs2DoWpg66Azp_oic',
  authDomain: 'mi-babahoyo.firebaseapp.com',
  databaseURL: 'https://mi-babahoyo.firebaseio.com',
  storageBucket: 'mi-babahoyo.appspot.com',
  messagingSenderId: '235259571630' //opcional
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Anonymous,
  method: AuthMethods.Anonymous
};

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, AngularFireModule.initializeApp(FIREBASE_APP_CONFIG, myFirebaseAuthConfig),
             AboutModule, HomeModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
