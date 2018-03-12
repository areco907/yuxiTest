import { Injectable } from '@angular/core';
import { LoadingController, ModalController, Modal, Platform, ToastController } from 'ionic-angular';
import { ModalsPage } from '../../pages/modals/modals';
import { JsonProvider } from './json.provider';

@Injectable()
export class UtilitiesProvider {
	/**
	 * @description Variable que guarda la instancia del controlador del 
	 *              loading
	 */
    private loading: any;
    
	/**
	 * @description Variable que guarda la instancia del modal principal en el que se muestran 
	 *              mensajes de error, alerta y éxito.
	 */
    private modal: Modal;
    
	constructor(
		private modalController: ModalController,
		private loadingCtrl: LoadingController,
		private jsonProvider: JsonProvider,
		private platform: Platform,
		private toastCtrl: ToastController) { }
    
    /**
	 * @description Método para mostrar el loading
	 * @method showLoading
	 * @param customMessage [Opcional] Mensaje que sera mostrado
	 */
	public showLoading(customMessage?: string): void {
		let message = customMessage ? customMessage : this.jsonProvider.messages.loading;
		this.loading = this.loadingCtrl.create({
			content: message
		});
		this.loading.present();
    }
    
	/**
	 * @description Método para ocultar el loading
	 * @method hideLoading
	 */
	public hideLoading(): void {
		this.loading.dismiss();
    }
    
	/**
	 * @description Método para mostar un modal con un mensaje
	 * @method showModal
	 * @param data objeto con los parametros de entrada del modal. Vease: ModalsPage
	 */
	public showModal(typeMessage: string, data?: any): void {
		if (this.modal) {
			this.modal.dismiss();
		}
		var myData = {
			principalText: this.jsonProvider.messages.modalTitles[typeMessage],
			secondaryText: data.mensajeRespuesta,
			imagePath: this.jsonProvider.messages.imagesModal[typeMessage]
		};
		this.modal = this.modalController.create(ModalsPage, { data: myData });
		this.modal.present();
	}
	/**
	 * @description Método para mostar un modal con un mensaje
	 * @method showModal
	 * @param data objeto con los parametros de entrada del modal. Vease: ModalsPage
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