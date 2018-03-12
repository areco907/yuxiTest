import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { JsonProvider } from '../../commons/providers/json.provider';
import { AuthenticationService } from "../../business-model/services/authentication.service";
import { UserData } from "../../commons/models/userData";
import { AngularFireAuth } from 'angularfire2/auth';
import { UtilitiesProvider } from "../../commons/providers/utilities.provider";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as UserData;

  /**
	 * @description Variable para almacenar textos correspondientes a la vista
	 */
	private messages: any;

  constructor(private afAuth: AngularFireAuth, 
    private authenticationService: AuthenticationService, 
    private jsonProvider: JsonProvider, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    private utilitiesProvider: UtilitiesProvider) 
  {
    this.messages = this.jsonProvider.messages.login;
  }

  async login(user: UserData) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.navCtrl.setRoot('MenuTabsPage');
      }  
    }
    catch (e) {
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
      console.error(e.code);
    }
  }

  private goToRegister(){
    this.navCtrl.push('RegisterPage')
  }

}
