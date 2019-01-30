import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2'
import { AngularFireStorageModule } from 'angularfire2/storage'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDVjv38MNXiPY5_goQQ3CPND2CJZTAT4Pg",
      authDomain: "angulardemo-97bcc.firebaseapp.com",
      databaseURL: "https://angulardemo-97bcc.firebaseio.com",
      projectId: "angulardemo-97bcc",
      storageBucket: "angulardemo-97bcc.appspot.com",
      messagingSenderId: "23984428184"
    }),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
