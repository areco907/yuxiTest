import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilitiesProvider } from '../../commons/providers/utilities.provider';

@Injectable()
export class DataService {

    private urlTest: string =  'https://jsonplaceholder.typicode.com';

	constructor(
        private utilitiesProvider: UtilitiesProvider,
        public http: HttpClient
	) { }

	/**
	 * @description Método que realiza el llamado al procedimiento 
	 *              para consultar información de oficinas y corresponsales. 
	 * @method getDetailMarkers
	 */
	getDataTest() {
        return new Promise(resolve => {
          this.http.get(this.urlTest+'/posts').subscribe(data => {
            resolve(data);
          }, err => {
            console.log(err);
          });
        });
      }

}