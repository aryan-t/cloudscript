import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpproviderProvider } from '../../providers/httpprovider/httpprovider';
import { googleAnalytics } from '../../assets/gtag';
import { InsurancemessagePage } from '../insurancemessage/insurancemessage';


/**
 * Generated class for the DuringprocedurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
  This section includes all the pages related to procedures
**/
import { ProcedurePage } from '../procedure/procedure';
import { PreprocedurePage } from '../preprocedure/preprocedure';;
import { PostprocedurePage } from '../postprocedure/postprocedure';
import { RecoveryPage } from '../recovery/recovery';
import { SuccessPage } from '../success/success';
import { WhattodoifPage } from '../whattodoif/whattodoif';
import { HomePage } from '../home/home';
import { PeoplePage } from '../people/people';

@IonicPage()
@Component({
  selector: 'page-duringprocedure',
  templateUrl: 'duringprocedure.html',
})
export class DuringprocedurePage {
  duringprocedureList:any;
  platform:any = localStorage.getItem('platform');
  className:any = 'contentwrap';
  navClassName:any='na'

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpService:HttpproviderProvider) {
    if(this.platform !='mobileweb') {
     this.platform = 'web';
     this.toggleNav();
     } else {

       this.className=' ';
          
     
     }
  }

 	ionViewDidEnter() {
		googleAnalytics('duringprocedure');
	}
  
 ionViewDidLoad() {
    this.getDuringProcedureList()
  }

  toggleNav() {
  if(this.navClassName == 'na') {
    this.navClassName = 'opennav'
  } else if(this.navClassName == 'opennav') {
    this.navClassName = 'na'
  }
}

 activateItem(id) {
   for(var i=0;i<this.duringprocedureList.length;i++) {
     if(id === i) {
        if(this.duringprocedureList[id]['show'] === false) {
      this.duringprocedureList[id]['show'] = true
    } else {
      this.duringprocedureList[id]['show'] = false
    }
  } else {
     this.duringprocedureList[i]['show'] = false
   }
  }
   
  }

  activateDetailItem(i, j) {
    for(var k =0;k<this.duringprocedureList[i]['description'].length;k++) {
      if(k === j) {
         if(this.duringprocedureList[i]['description'][j]['show'] === false) {
      this.duringprocedureList[i]['description'][j]['show'] = true
    } else {
      this.duringprocedureList[i]['description'][j]['show'] = false
    }
  } else {
    this.duringprocedureList[i]['description'][k]['show'] = false
  }
     
    }
      
  }

   getHtmlContent(index) {
    return this.duringprocedureList[index]['description']
  }

  getDetailHtmlContent(i, j) {
     return this.duringprocedureList[i]['description'][j]['desc']
  }


  getDuringProcedureList() {
  this.duringprocedureList = this.httpService.getDuringProcedureList();
  for(var i=0;i<this.duringprocedureList.length;i++) {
    this.duringprocedureList[i]['show'] = false;
    if(this.duringprocedureList[i]['dropdown'] == true) {
      this.duringprocedureList[i]['description'][0]['show'] = false;
       this.duringprocedureList[i]['description'][1]['show'] = false;
      // for(var j=0;this.duringprocedureList[i]['description'].length;j++) {
         // this.duringprocedureList[i]['description'][j]['show'] = false
      // }
    }
  }
  }

  goBack() {
    this.navCtrl.pop()
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
     this.navCtrl.setRoot(RecoveryPage);
  }

  swipeRight() {
    this.navCtrl.setRoot(PreprocedurePage)
  }
}
