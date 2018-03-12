import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { JsonProvider } from '../../commons/providers/json.provider';
import { AuthenticationService } from "../../business-model/services/authentication.service";
import { UserData } from "../../commons/models/userData";

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

  constructor(private authenticationService: AuthenticationService, private jsonProvider: JsonProvider, public navCtrl: NavController, public navParams: NavParams) 
  {
    this.messages = this.jsonProvider.messages.login;
    console.log(this.messages);
  }

  private login(user: UserData) {
    this.authenticationService.login(user)
    .then(() => this.navCtrl.setRoot('MenuTabsPage'))
  }

  private goToRegister(){
    this.navCtrl.push('RegisterPage')
  }

}
