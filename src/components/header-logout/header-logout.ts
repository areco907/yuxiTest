import { Component, Input, ViewChild } from '@angular/core';
import { JsonProvider } from '../../commons/providers/json.provider';

@Component({
  selector: 'header-logout',
  templateUrl: 'header-logout.html',
  
})
export class HeaderLogoutComponent {

  /**
	 * @description Variable para almacenar textos correspondientes a la 
	 *              vista
	 */
  private messages: any;
  
	/**
   * @description Variable para el título
   */
	@Input() title: string;


  constructor(private jsonProvider: JsonProvider) {
    //this.messages = this.jsonProvider.messages.headerLogout;
  }

}
