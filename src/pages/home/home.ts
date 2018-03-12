import { Component } from '@angular/core';
import { NavController, IonicPage } from "ionic-angular";

import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController) {

  }

  logout(){
    this.afAuth.auth.signOut().then( success => {
      this.navCtrl.setRoot('LoginPage');
    });
  }
}
