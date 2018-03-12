import { Injectable } from '@angular/core';
import { UtilitiesProvider } from '../../commons/providers/utilities.provider';
import { AngularFireAuth } from 'angularfire2/auth';
import { App } from 'ionic-angular';

@Injectable()
export class AuthenticationService {

    private urlTest: string = 'https://jsonplaceholder.typicode.com';

    constructor(private parentCtrl: App, private afAuth: AngularFireAuth, private utilitiesProvider: UtilitiesProvider) { }

    /**
	 * @description Método que realiza el llamado al procedimiento 
	 *              para consultar información de oficinas y corresponsales. 
	 * @method logout
	 */
    logout() {
        this.afAuth.auth.signOut().then( success => {
            this.parentCtrl.getRootNav().setRoot('LoginPage');
        });
    }

}