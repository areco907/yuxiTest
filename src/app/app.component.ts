import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { JsonProvider } from '../commons/providers/json.provider';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	/**
	   * @description Variable para inicializar primer vista de la aplicación
	   */
	rootPage: any;

	constructor(private jsonProvider: JsonProvider, private platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen) {
		this.getMessages();
		this.initialize();
	}

	private initialize() {
		this.platform.ready().then(() => {

			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	/**
	   * @description Método para cargar mensajes y después inicializar primer 
	   *              vista
	   * @method getMessages
	   */
	private getMessages(): void {
		this.jsonProvider.getMessages().subscribe(() => {
			this.rootPage = 'MenuTabsPage';
		})
	};
}

