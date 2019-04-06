import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProcedurePage } from '../procedure/procedure';
import { PreprocedurePage } from '../preprocedure/preprocedure';
import { DuringprocedurePage } from '../duringprocedure/duringprocedure';
import { RecoveryPage } from '../recovery/recovery';
import { SuccessPage } from '../success/success';
import { WhattodoifPage } from '../whattodoif/whattodoif';
import { HomePage } from '../home/home';
import { PostprocedurePage } from '../postprocedure/postprocedure';
import { googleAnalytics } from '../../assets/gtag';
import { InsurancemessagePage } from '../insurancemessage/insurancemessage';


/**
 * Generated class for the PeoplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {
	platform:any = localStorage.getItem('platform');
	  navClassName:any='na'
	    className:any = 'contentwrap';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	if(this.platform !='mobileweb') {
     this.platform = 'web';
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

 	ionViewDidEnter() {
		googleAnalytics('people');
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PeoplePage');
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
 gotoInsurancePage() {
   this.navCtrl.push(InsurancemessagePage)
 }


gotToSuccessPage() {
     this.navCtrl.push(SuccessPage);
  }

}
