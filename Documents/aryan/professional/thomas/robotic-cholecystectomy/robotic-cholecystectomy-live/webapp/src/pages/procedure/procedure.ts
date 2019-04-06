import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Content } from 'ionic-angular';
import { HttpproviderProvider } from '../../providers/httpprovider/httpprovider';
import { googleAnalytics } from '../../assets/gtag';

/**
 * Generated class for the ProcedurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
  This section includes all the pages related to procedures
**/
import { PreprocedurePage } from '../preprocedure/preprocedure';
import { DuringprocedurePage } from '../duringprocedure/duringprocedure';
import { PostprocedurePage } from '../postprocedure/postprocedure';
import { RecoveryPage } from '../recovery/recovery';
import { SuccessPage } from '../success/success';
import { WhattodoifPage } from '../whattodoif/whattodoif';
import { WhydothisPage } from '../whydothis/whydothis';
import { HomePage } from '../home/home';
import { PeoplePage } from '../people/people';
import { InsurancemessagePage } from '../insurancemessage/insurancemessage';

@Component({
  selector: 'page-procedure',
  templateUrl: 'procedure.html',
})
export class ProcedurePage {
  @ViewChild('pageTop') pageTop: Content;
  procedureList:any;
  platform:any = localStorage.getItem('platform');
  className:any = 'contentwrap';
  navClassName:any='na'

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public httpService:HttpproviderProvider, public menuCtrl:MenuController) {
   if(this.platform !='mobileweb') {
     this.platform = 'web';
     this.toggleNav();
     } else {

       this.className=' ';
          
     
     }
      // this.openMenu();
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
  togglePage(whichPage: string): void {
  // this.isList=false;
  // this.isLocation=false;
  // this.isSelf=false;
  // this.isNotifications=false;
  // this.isSearch=false;
  // this.isCamera=false;

  // letnewTab:string='';

  // switch (whichPage) {
  //   case'List':
  //     this.isList=true;
  //     newTab='PhotosPage';
  //     break;
  //   case'Location':
  //     this.isLocation=true;
  //     newTab='LocationsPage';
  //     break;
  //   case'Self':
  //     this.isSelf=true;
  //     newTab='SelfPage';
  //     break;
  //   case'Notifications':
  //     this.isNotifications=true;
  //     newTab='NotificationsPage';
  //     break;
  //   case'Search':
  //     this.isSearch=true;
  //     newTab='SearchPage';
  //     break;
  //   case'Camera':
  //     this.isCamera=true;
  //     newTab='CameraPage';
  //     break;
  //  }

  //  this.nav.setRoot(newTab);
}

  openMenu() {
   // this.menuCtrl.open();
 }

   goBack() {
    this.navCtrl.pop()
  }

	ionViewDidEnter() {
		googleAnalytics('procedure');
	}
  
  ionViewDidLoad() {
    // location.reload();

    this.getAboutProcedurePageList()
  }

  getAboutProcedurePageList() {
    this.procedureList = this.httpService.getAboutProcedureList();

    if(this.procedureList.length == 6) {
         this.procedureList.shift()
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


  navigateToAboutDetails(index) {
      this.navCtrl.push(WhydothisPage, {
        index:index
      });
  }

  swipeEvent(event) {
    if(event.direction === 2) {
      this.swipeLeft()
          // this.navCtrl.setRoot(PreprocedurePage)
    }if(event.direction ==4) {
      this.swipeRight()
    }

  }


  swipeLeft() {
            this.navCtrl.setRoot(PreprocedurePage)
  }

  swipeRight() {
    this.navCtrl.setRoot(WhydothisPage, {
        index:'audio'
      });
  }

}
