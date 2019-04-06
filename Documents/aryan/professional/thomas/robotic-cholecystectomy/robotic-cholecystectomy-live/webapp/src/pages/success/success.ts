import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { googleAnalytics } from '../../assets/gtag';
import { InsurancemessagePage } from '../insurancemessage/insurancemessage';
/**
 * Generated class for the SuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
  This section includes all the pages related to procedures
**/
import { ProcedurePage } from '../procedure/procedure';
import { PreprocedurePage } from '../preprocedure/preprocedure';
import { DuringprocedurePage } from '../duringprocedure/duringprocedure';
import { PostprocedurePage } from '../postprocedure/postprocedure';
import { RecoveryPage } from '../recovery/recovery';
import { WhattodoifPage } from '../whattodoif/whattodoif';
import { HomePage } from '../home/home';
import { PeoplePage } from '../people/people';

// var window;

@IonicPage()
@Component({
  selector: 'page-success',
  templateUrl: 'success.html',
})
export class SuccessPage {
   platform:any = localStorage.getItem('platform');
  className:any = 'contentwrap';
  satisfied:any;
  helpful:any;
  navClassName:any='na'

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     if(this.platform !='mobileweb') {
     this.platform = 'web';
     this.toggleNav();
     } else {

       this.className=' ';
          
     
     }
  }

  goToHomePage() {
    this.navCtrl.setRoot(HomePage);
  }

  toggleNav() {
  if(this.navClassName == 'na') {
    this.navClassName = 'opennav'
  } else if(this.navClassName == 'opennav') {
    this.navClassName = 'na'
  }
}
   goBack() {
    this.navCtrl.pop()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuccessPage');
  }
  
  ionViewDidEnter() {
	googleAnalytics('success');
  }

  getSatisfactionLevel(level) {
    this.satisfied = level;
  }

    getHelpfulLevel(level) {
    this.helpful = level;
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
    if(event.direction === 4) {
      this.swipeRight()
      
    }
    if(event.direction === 2) {
      this.swipeLeft();
      
    }
  }

  swipeLeft() {
    this.navCtrl.push(InsurancemessagePage);
  }

  swipeRight() {
  this.navCtrl.setRoot(WhattodoifPage)
  }
  activateMailToOptions() {
    window.location.href = "mailto:someone@example.com";
  }

}
