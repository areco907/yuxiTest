import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YuxiPhotoPage } from './yuxi-photo';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    YuxiPhotoPage,
  ],
  imports: [
    IonicPageModule.forChild(YuxiPhotoPage),
    ComponentsModule
  ],
})
export class YuxiPhotoPageModule {}
