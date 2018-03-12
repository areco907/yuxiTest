import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YuxiListPage } from './yuxi-list';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    YuxiListPage,
  ],
  imports: [
    IonicPageModule.forChild(YuxiListPage),
    ComponentsModule
  ],
})
export class YuxiListPageModule {}
