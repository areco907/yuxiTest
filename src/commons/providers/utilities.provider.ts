import { Injectable } from '@angular/core';
import { LoadingController, Platform, ToastController } from 'ionic-angular';
import { JsonProvider } from './json.provider';

@Injectable()
export class UtilitiesProvider {
	/**
	 * @description Variable que guarda la instancia del controlador del 
	 *              loading
	 */
    private loading: any;
    
	constructor(
		private loadingCtrl: LoadingController,
		private jsonProvider: JsonProvider,
		private platform: Platform,
		private toastCtrl: ToastController) { }
	
	/**
	 * @description Método para mostar un toast con un mensaje
	 * @method showToast
	 * @param data objeto con los parametros de entrada del toast.
	 */
	public showToast(data: any, type: string): void {
		let toast = this.toastCtrl.create({
			message: data,
			position: 'top',
			duration: 5000,
			cssClass: type
		});
		toast.present();
	}
}