import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PreprocedurePage } from '../preprocedure/preprocedure';
import { ProcedurePage } from '../procedure/procedure';
import { DuringprocedurePage } from '../duringprocedure/duringprocedure';
import { PostprocedurePage } from '../postprocedure/postprocedure';
import { RecoveryPage } from '../recovery/recovery';
import { SuccessPage } from '../success/success';
import { WhattodoifPage } from '../whattodoif/whattodoif';
import { WhydothisPage } from '../whydothis/whydothis';
import { HomePage } from '../home/home';
import { PeoplePage } from '../people/people';
import { MessagetopatientsPage } from '../messagetopatients/messagetopatients';
import { InsurancemessagePage } from '../insurancemessage/insurancemessage';
import { googleAnalytics } from '../../assets/gtag';
/**
 * Generated class for the TableofcontentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tableofcontents',
  templateUrl: 'tableofcontents.html',
})
export class TableofcontentsPage {
  procedureList:any;
  platform:any = localStorage.getItem('platform');
  className:any = 'contentwrap';
  navClassName:any='na'
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
		googleAnalytics('tableofcontents');
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TableofcontentsPage');
  }

    goToHomePage() {
    this.navCtrl.setRoot(HomePage);
  }

  goToHelloPage() {
     this.navCtrl.setRoot(WhydothisPage, {
        index:'audio'
      });
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
    this.goToHelloPage();
  }

  swipeRight() {
	this.navCtrl.setRoot(InsurancemessagePage);	  
//  	this.navCtrl.setRoot(MessagetophysicianPage);
    
  }

}
