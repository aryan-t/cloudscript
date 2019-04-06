import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams,  Navbar, Slides, Content } from 'ionic-angular';
import { ProcedurePage } from '../procedure/procedure';
import { PreprocedurePage } from '../preprocedure/preprocedure';
import { HomePage } from '../home/home';
import { TableofcontentsPage } from '../tableofcontents/tableofcontents';
import { PeoplePage } from '../people/people';
import { HttpproviderProvider } from '../../providers/httpprovider/httpprovider';
import { DuringprocedurePage } from '../duringprocedure/duringprocedure';
import { PostprocedurePage } from '../postprocedure/postprocedure';
import { RecoveryPage } from '../recovery/recovery';
import { SuccessPage } from '../success/success';
import { WhattodoifPage } from '../whattodoif/whattodoif';
import { googleAnalytics } from '../../assets/gtag';
import { InsurancemessagePage } from '../insurancemessage/insurancemessage';


/**
 * Generated class for the WhydothisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-whydothis',
  templateUrl: 'whydothis.html',
})
export class WhydothisPage {
	@ViewChild (Navbar) navBar : Navbar;
  @ViewChild('pageTop') pageTop: Content;
  params:any;
  // procedureDetails:any;
  title:any
  length:number;
  index:any;
  content:any;
  imgSrc:any;
  @ViewChild(Slides) slides: Slides;
  audioID:any;
   platform:any = localStorage.getItem('platform');
  className:any = 'contentwrap';
    navClassName:any='na'
    lengOfSlides:any = 8;
    dropdown:any;
    subContent:any = '';

  constructor(public navCtrl: NavController,public httpService:HttpproviderProvider, public navParams: NavParams) {
     this.params = this.navParams.get('index');
     if(this.params == 'audio') {
       // var procedureDetails = this.httpService.getAboutProcedureListDetails(this.params);
         this.title = "Hello"
         this.content =``
         this.imgSrc = './assets/imgs/logo.jpg';
         this.index = 'audio';

         

     } else {
        var procedureDetails = this.httpService.getAboutProcedureListDetails(this.params);

     this.title = procedureDetails.content.title;
     this.content = procedureDetails.content.content;
     this.imgSrc = procedureDetails.content.img;
     this.length = procedureDetails.length;
     this.dropdown = procedureDetails.content.dropdown;

      this.subContent = procedureDetails.subcontent
     
     this.index = this.params;
      if(procedureDetails.content.dropdown == true) {
          for(var i=0;i<this.content.length;i++) {
            this.content[i].show = false;
          }
        }
     }
    
      if(this.platform !='mobileweb') {
     this.platform = 'web';
     this.toggleNav();
     } else {

       this.className=' ';
          
     
     }

     // alert(this.index)

     // console.log(this.procedureDetails.title)
  }

   toggleNav() {
  if(this.navClassName == 'na') {
    this.navClassName = 'opennav'
  } else if(this.navClassName == 'opennav') {
    this.navClassName = 'na'
  }
}

activateItem(id) {
  for(var i=0;i<this.content.length;i++) {
    if(id!=i) {
      this.content[i]['show'] = false;
    }
  }
        if(this.content[id]['show'] === false) {
      this.content[id]['show'] = true
    } else {
      this.content[id]['show'] = false
    }   
  }

  ionViewDidEnter() {
	  googleAnalytics('whydothis');
  }

  ionViewWillLeave() {
    this.content=`<p></p>`
  }

  goToHomePage() {
    this.navCtrl.setRoot(HomePage);
  }

   checkAudioEnded() {
   var thisObj = this;
   setTimeout(function() {
     thisObj.checkAudioEnded();
   }, 100)

   if(this.audioID.ended() === true && this.audioID!=null) {
      this.navCtrl.setRoot(ProcedurePage);
   }
 }


  slideChanged() {
    // var thisobj = this;

    // if(thisobj.slides.getActiveIndex() == undefined || thisobj.slides.getActiveIndex() == 0) {
    //   setTimeout(function() {
    //     thisobj.slides.slideNext(2000);
    //     thisobj.slideChanged();
    //   }, 3000)
    // } else {
    //   if(thisobj.slides.getActiveIndex() == thisobj.lengOfSlides-1) {
    //      setTimeout(function() {
    //     thisobj.slides.slideTo(0, 2000);
    //     thisobj.slideChanged();
    //   }, 3000)
    //   } else {
    //       if(thisobj.slides.getActiveIndex() < thisobj.lengOfSlides) {
    //       setTimeout(function() {
    //     thisobj.slides.slideNext(2000);
    //     thisobj.slideChanged();
    //   }, 3000)
    //   }
    //   }
    
    // } 
   
  }


  ionViewDidLoad() {
    if(this.params == 'audio') {
      this.slideChanged();
    this.audioID = document.getElementById("myaudio");
    }
      this.pageTop.scrollToTop(0);
    // this.checkAudioEnded();
  }

  ionViewDidLeave() {
    if(this.audioID != undefined) {
          this.audioID.pause()
    }

  }

  ionViewWillUnload() {
     // this.audioID.stop();
    this.audioID = null;
  }

  navigateToProcedurePage() {
    // alert(1)
  	// this.navCtrl.pop();
  	this.navCtrl.setRoot(ProcedurePage)
  }

  swipeEvent(event) {
    if(event.direction === 2) {
     this.swipeLeft()
    }

    if(event.direction === 4) {
      this.swipeRight()
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

    swipeLeft() {
      this.pageTop.scrollToTop(0);
      if(this.index == 'audio') {
        this.navCtrl.setRoot(ProcedurePage)
      } else {

    if(this.length>this.index) {
        if((this.index+1) == this.length) {
          this.navCtrl.setRoot(PreprocedurePage)
        } else {
          var procedureDetails = this.httpService.getAboutProcedureListDetails(this.index+1);
       this.title = procedureDetails.content.title;
       this.length = procedureDetails.length;
       this.imgSrc = procedureDetails.content.img;
       this.content = procedureDetails.content.content;
       this.dropdown = procedureDetails.content.dropdown;
     // if(procedureDetails.content.subcontent !='') {
      this.subContent = procedureDetails.content.subcontent; 
     // }
       this.index +=1;
        }
        
      } else {
        this.navCtrl.setRoot(PreprocedurePage)
      }
      }
    

  }

  swipeRight() {
    this.pageTop.scrollToTop(0);
    if(this.index == 'audio') {
      this.navCtrl.setRoot(TableofcontentsPage)
    } else {
          if(this.index == 0) {
        this.navCtrl.setRoot(ProcedurePage)
      } else if(this.length>this.index) {
        var procedureDetails = this.httpService.getAboutProcedureListDetails(this.index-1);
        this.content = procedureDetails.content.content;
       this.title = procedureDetails.content.title;
       this.imgSrc = procedureDetails.content.img;
       this.length = procedureDetails.length;
       this.dropdown = procedureDetails.content.dropdown;
      this.subContent = procedureDetails.subcontent
       this.index -=1;
      }
    }

    
  }

}
