import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { YuxiListPage } from "../pages/yuxi-list/yuxi-list";
import { YuxiPhotoPage } from "../pages/yuxi-photo/yuxi-photo";

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { environment } from "../commons/constants/firebaseCredentials";
import { Camera } from '@ionic-native/camera';

import { JsonProvider } from '../commons/providers/json.provider';
import { DataService } from "../business-model/services/data.service";
import { AuthenticationService } from "../business-model/services/authentication.service";
import { UtilitiesProvider } from "../commons/providers/utilities.provider";

@NgModule({
  declarations: [
    MyApp,
    YuxiListPage,
    YuxiPhotoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpModule,
    HttpClientModule    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    YuxiListPage,
    YuxiPhotoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    JsonProvider,
    DataService,
    AuthenticationService,
    Camera,
    UtilitiesProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class AppModule {}
