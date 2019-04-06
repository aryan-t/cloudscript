import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpproviderProvider } from '../../providers/httpprovider/httpprovider';
import { googleAnalytics } from '../../assets/gtag';

/**
 * Generated class for the RecoveryPage page.
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
import { SuccessPage } from '../success/success';
import { WhattodoifPage } from '../whattodoif/whattodoif';
import { HomePage } from '../home/home';
import { PeoplePage } from '../people/people';
import { InsurancemessagePage } from '../insurancemessage/insurancemessage';

@IonicPage()
@Component({
  selector: 'page-recovery',
  templateUrl: 'recovery.html',
})
export class RecoveryPage {
  platform:any = localStorage.getItem('platform');
  className:any = 'contentwrap';
  navClassName:any='na'
  content:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpService:HttpproviderProvider,) {
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

 	ionViewDidEnter() {
		googleAnalytics('recovery');
	}

  ionViewDidLoad() {
    this.getRecoveryContent()
  }
   goBack() {
    this.navCtrl.pop()
  }

   getRecoveryContent() {
    this.content = this.httpService.getRecoveryContent();
    console.log(this.content)
    for(var i=0;i<this.content.length;i++) {
    this.content[i]['show'] = false;
  }

  }


   activateItem(id) {
   for(var i=0;i<this.content.length;i++) {
     if(id === i) {
        if(this.content[id]['show'] === false) {
      this.content[id]['show'] = true
    } else {
      this.content[id]['show'] = false
    }
  } else {
     this.content[i]['show'] = false
   }
  }
   
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
     this.navCtrl.push(PostprocedurePage);
  }

  swipeRight() {
    this.navCtrl.push(DuringprocedurePage);  
  }
}
