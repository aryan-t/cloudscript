import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProcedurePage } from '../procedure/procedure';
import { PreprocedurePage } from '../preprocedure/preprocedure';
import { PostprocedurePage } from '../postprocedure/postprocedure';
import { DuringprocedurePage } from '../duringprocedure/duringprocedure';
import { RecoveryPage } from '../recovery/recovery';
import { SuccessPage } from '../success/success';
import { WhattodoifPage } from '../whattodoif/whattodoif';
import { TableofcontentsPage } from '../tableofcontents/tableofcontents';
import { HomePage } from '../home/home';
import { PeoplePage } from '../people/people';
import { MessagetopatientsPage } from '../messagetopatients/messagetopatients';
import { googleAnalytics } from '../../assets/gtag';
import { InsurancemessagePage } from '../insurancemessage/insurancemessage';

/**
 * Generated class for the InsurancemessageafterpatientsmessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insurancemessageafterpatientsmessage',
  templateUrl: 'insurancemessageafterpatientsmessage.html',
})
export class InsurancemessageafterpatientsmessagePage {

  
  platform:any = localStorage.getItem('platform');
  className:any = 'contentwrap';
  navClassName:any='na'

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	  if(this.platform !='mobileweb') {
     this.platform = 'web'
     this.toggleNav();
     } else {

       this.className=' ';
          
     
     }
  }

  
 	ionViewDidEnter() {
		googleAnalytics('messagetopatients');
	}

	ionViewDidLoad() {
    console.log('ionViewDidLoad MessagetopatientsPage');
  }


    toggleNav() {
  if(this.navClassName == 'na') {
    this.navClassName = 'opennav'
  } else if(this.navClassName == 'opennav') {
    this.navClassName = 'na'
  }
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
 gotoInsurancePage() {
   this.navCtrl.push(InsurancemessagePage)
 }


gotToSuccessPage() {
     this.navCtrl.push(SuccessPage);
  }

  swipeEvent(event) {
      if(event.direction === 2) {
            this.swipeLeft()
        } else if(event.direction === 4) {
         this.swipeRight()
        }

  }

  swipeLeft() {
	this.navCtrl.push(TableofcontentsPage);
   // this.presentSlidesModal();
  }

  swipeRight() {
	this.navCtrl.setRoot(MessagetopatientsPage);
    
  }
}