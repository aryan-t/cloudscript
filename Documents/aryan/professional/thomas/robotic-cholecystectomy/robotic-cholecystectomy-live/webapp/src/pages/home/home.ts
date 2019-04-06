import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';
/**
	This section includes all the pages related to procedures
**/
import { PostprocedurePage } from '../postprocedure/postprocedure';
import { PeoplePage } from '../people/people';
import { MessagetophysicianPage } from '../messagetophysician/messagetophysician';
import { InsurancemessagePage } from '../insurancemessage/insurancemessage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
  constructor(public navCtrl: NavController, public appCtrl: App) {

  }

  navigateToMessagePage() {
    // this.navCtrl.setRoot(ProcedurePage)
    this.navCtrl.push(MessagetophysicianPage);
  }

  goToPostProcedurePage() {
     this.navCtrl.push(PostprocedurePage);
  }

  goToPeoplePage() {
    this.navCtrl.push(PeoplePage)
  }

  navigateToPostProcedurePage() {
     this.navCtrl.push(PostprocedurePage);

  }
   gotoInsurancePage() {
   this.navCtrl.push(InsurancemessagePage)
 }

}