import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YuxiListPage } from './yuxi-list';

@NgModule({
  declarations: [
    YuxiListPage,
  ],
  imports: [
    IonicPageModule.forChild(YuxiListPage)
  ],
})
export class YuxiListPageModule {}
