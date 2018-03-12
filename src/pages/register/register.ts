import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { JsonProvider } from '../../commons/providers/json.provider';
import { AuthenticationService } from "../../business-model/services/authentication.service";
import { UserData } from "../../commons/models/userData";

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

  constructor(private authenticationService: AuthenticationService, public navCtrl: NavController, public navParams: NavParams) {
  }

  async register(user: UserData) {
    this.authenticationService.register(user);
  }

}
