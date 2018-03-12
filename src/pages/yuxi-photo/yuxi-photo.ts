import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { JsonProvider } from '../../commons/providers/json.provider';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { AuthenticationService } from "../../business-model/services/authentication.service";

@IonicPage()
@Component({
  selector: 'page-yuxi-photo',
  templateUrl: 'yuxi-photo.html',
})
export class YuxiPhotoPage {

  /**
	 * @description Variable para almacenar textos correspondientes a la vista
	 */
	private messages: any;

  constructor(
    private camera: Camera,
    private authenticationService : AuthenticationService,
    private parentCtrl:App, 
    private jsonProvider: JsonProvider, 
    public navCtrl: NavController, 
    public navParams: NavParams) 
  {
    this.messages = this.jsonProvider.messages.yuxiPhoto;
  }

  private takePic(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  private logout(){
    this.authenticationService.logout();
  }

  private listPhotos(){
    this.parentCtrl.getRootNav().push("PhotosPage");
  }


}
