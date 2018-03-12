import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JsonProvider } from "../../commons/providers/json.provider";

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  /**
	 * @description Variable para almacenar textos correspondientes a la vista
	 */
	private messages: any;

  private dataSelected: any;

  constructor(public navParams: NavParams, private jsonProvider: JsonProvider) {
    this.dataSelected = this.navParams.get('dataSelected');
    this.messages = this.jsonProvider.messages.detail;
  }

}
