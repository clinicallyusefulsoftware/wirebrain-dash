import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserServiceProvider } from '../providers/user-service/user-service';

import { IonicStorageModule } from '@ionic/storage';

import { FCM } from '@ionic-native/fcm';
import { MenuServiceProvider } from '../providers/menu-service/menu-service';


export const firebaseConfig = {
  apiKey: "AIzaSyCGuPUOZcsbl4Aba1KkxO4HIeK9Dz8dIHM",
  authDomain: "wiredcoffee-fba00.firebaseapp.com",
  databaseURL: "http://wiredcoffee-fba00.firebaseio.com",
  storageBucket: "wiredcoffee-fba00.appspot.com",
  messagingSenderId: '549815650623'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    FCM,
    MenuServiceProvider
  ]
})
export class AppModule {}
