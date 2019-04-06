import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ProcedurePage } from '../procedure/procedure';
import { TableofcontentsPage } from '../tableofcontents/tableofcontents';
import { PreprocedurePage } from '../preprocedure/preprocedure';
import { PostprocedurePage } from '../postprocedure/postprocedure';
import { DuringprocedurePage } from '../duringprocedure/duringprocedure';
import { RecoveryPage } from '../recovery/recovery';
import { SuccessPage } from '../success/success';
import { WhattodoifPage } from '../whattodoif/whattodoif';
import { HomePage } from '../home/home';
import { PeoplePage } from '../people/people';
import { MessagetopatientsPage } from '../messagetopatients/messagetopatients';
import { InsurancemessagePage } from '../insurancemessage/insurancemessage';
import * as safari from '../../safari-fix';
/**
 * Generated class for the MessagetophysicianPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messagetophysician',
  templateUrl: 'messagetophysician.html',
})
export class MessagetophysicianPage {
platform:any = localStorage.getItem('platform');
  className:any = 'contentwrap';
  navClassName:any='na'
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
     if(this.platform !='mobileweb') {
		 this.platform = 'web'
		 this.toggleNav();
     } else {
       this.className=' ';
     }
  }

    toggleNav() {
  if(this.navClassName == 'na') {
    this.navClassName = 'opennav'
  } else if(this.navClassName == 'opennav') {
    this.navClassName = 'na'
  }
}

  ionViewDidLoad() {
//    console.log('ionViewDidLoad MessagetophysicianPage');
  }
  
  ionViewDidEnter() {
	safari.loadFix('page-messagetophysician');
  }

 goToHomePage() {
    this.navCtrl.setRoot(HomePage);
  }

goToProcedurePage() {
    this.navCtrl.push(ProcedurePage);
  }
 
  gotToPreProcedure() {
    this.navCtrl.push(PreprocedurePage);
  }
  gotToDuringProcedurePage() {
    this.navCtrl.push(DuringprocedurePage);
  }
  goToRecoverPage() {
    this.navCtrl.push(RecoveryPage);
  }
  goToPostProcedurePage() {
     this.navCtrl.push(PostprocedurePage);
  }
  goToWhatIfPage() {
     this.navCtrl.push(WhattodoifPage);
  }

  goToPeoplePage() {
    this.navCtrl.push(PeoplePage)
  }


gotToSuccessPage() {
     this.navCtrl.push(SuccessPage);
  }

   gotoInsurancePage() {
   this.navCtrl.push(InsurancemessagePage)
 }
   swipeEvent(event) {
      if(event.direction === 2) {
            this.swipeLeft()
        } else if(event.direction === 4) {
         this.swipeRight()
        }

  }

  swipeLeft() {
    this.navCtrl.push(MessagetopatientsPage);
   // this.presentSlidesModal();
  }

  swipeRight() {
  	this.navCtrl.push(HomePage);
    
  }

}
