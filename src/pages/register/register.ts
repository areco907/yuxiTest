import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { JsonProvider } from '../../commons/providers/json.provider';
import { AuthenticationService } from "../../business-model/services/authentication.service";
import { UserData } from "../../commons/models/userData";
import { AngularFireAuth } from 'angularfire2/auth';
import { UtilitiesProvider } from "../../commons/providers/utilities.provider";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as UserData;

  /**
	 * @description Variable para almacenar textos correspondientes a la vista
	 */
	private messages: any;

  constructor(private utilitiesProvider: UtilitiesProvider, private afAuth: AngularFireAuth, private authenticationService: AuthenticationService, public navCtrl: NavController, public navParams: NavParams) {
  }

  public async register(user) {
    try {
        const result = await this.afAuth.auth.createUserWithEmailAndPassword(
            user.email,
            user.password
        );
        if (result) {
            this.navCtrl.setRoot('MenuTabsPage');
        }
    } catch (e) {
      switch (e.code) {
        case "auth/argument-error":
          this.utilitiesProvider.showToast('fields empty, please complete all before continue. ', 'warningToast')
          break;
        
        case "auth/invalid-email":
          this.utilitiesProvider.showToast('Invalid email, please insert a valid email. ', 'warningToast')
          break;
        
        case "auth/wrong-password":
          this.utilitiesProvider.showToast('Wrong password, please insert a valid password. ', 'warningToast')
          break;
      
        default:
          break;
      }
        console.error(e);
    }
}

}
