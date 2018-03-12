import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { YuxiListPage } from "../yuxi-list/yuxi-list";
import { YuxiPhotoPage } from "../yuxi-photo/yuxi-photo";
import { JsonProvider } from '../../commons/providers/json.provider';

@IonicPage()
@Component({
  selector: 'page-menu-tabs',
  templateUrl: 'menu-tabs.html',
})
export class MenuTabsPage {

  /**
	 * @description Variable que contiene las opciones que serán mostradas 
	 *              en el menú de tipo tabs.
	 */
  private options: any;
  
  /**
	 * @description Variable para almacenar textos correspondientes a la vista
	 */
	private messages: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private jsonProvider: JsonProvider) 
  {
    this.messages = this.jsonProvider.messages.menu;
    this.options = {
          yuxiPhoto: YuxiPhotoPage, 
          yuxiList: YuxiListPage
		  }; 
  }

}
