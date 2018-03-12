import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

import { DataService } from "../../business-model/services/data.service";
import { JsonProvider } from '../../commons/providers/json.provider';
import { AuthenticationService } from "../../business-model/services/authentication.service";

@IonicPage()
@Component({
  selector: 'page-yuxi-list',
  templateUrl: 'yuxi-list.html',
})
export class YuxiListPage {

  private dataList: any;

  /**
	 * @description Variable para almacenar textos correspondientes a la vista
	 */
	private messages: any;

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private dataService: DataService,
      private jsonProvider: JsonProvider,
      private parentCtrl: App,
      private authenticationService: AuthenticationService) 
  {
      this.messages = this.jsonProvider.messages.yuxiList;
      this.getData();
  }

  getData() {
    this.dataService.getDataTest()
    .then(data => {
      this.dataList = data;
    });
  }

  private itemSelected(dataSelected){
    this.parentCtrl.getRootNav().push("DetailPage", { 'dataSelected': dataSelected });
  }

  private logout(){
    this.authenticationService.logout();
  }

}
