import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
//import { WhattodoifPage } from './whattodoif';
import { HttpproviderProvider } from '../../providers/httpprovider/httpprovider';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
//    WhattodoifPage,
  ],
  imports: [
//    IonicPageModule.forChild(WhattodoifPage),
    HttpClientModule,
    HttpModule
  ],
  providers:[HttpproviderProvider]
})
export class WhattodoifPageModule {}
