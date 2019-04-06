import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Content } from 'ionic-angular';
import { HttpproviderProvider } from '../../providers/httpprovider/httpprovider';
import { googleAnalytics } from '../../assets/gtag';

/**
 * Generated class for the PostprocedurePage page.
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
import { RecoveryPage } from '../recovery/recovery';
import { SuccessPage } from '../success/success';
import { WhattodoifPage } from '../whattodoif/whattodoif';
import { HomePage } from '../home/home';
import { PeoplePage } from '../people/people';
import { InsurancemessagePage } from '../insurancemessage/insurancemessage';


@IonicPage()
@Component({
  selector: 'page-postprocedure',
  templateUrl: 'postprocedure.html',
})
export class PostprocedurePage {
@ViewChild('pageTop') pageTop: Content;
  platform:any = localStorage.getItem('platform');
  className:any = 'contentwrap';
  hasInfo:Boolean = false;
  daysInAWeek:any;
  dayContent:any;
  dayContentType:any;
  dateSelected:any = "false";
  showFirstPage:boolean = true;
  currentSelectedIndex:any;
  navClassName:any='na'
  homeContent:any;
  activeDay:any;
  showMultiple = false;
  showMultipleSecond = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController, public httpService:HttpproviderProvider) {
     if(this.platform !='mobileweb') {
     this.platform = 'web';
     this.toggleNav();
     } else {

       this.className=' ';
          
     
     }

     // localStorage.setItem('postproceduredateselected', "false");
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

getHomeContent() {
  this.homeContent = this.httpService.getHomeConent();
  for(var i=0;i<this.homeContent.length;i++) {
    this.homeContent[i]['show'] = false
  }

}

  getPageContent(dayInAWeek) {
    if(dayInAWeek>=3 && dayInAWeek<=6) {
      this.hasInfo = true;
    } else {
      this.hasInfo = false;
    }
    // alert(dayInAWeek)
    // if(this.dayContentType ==)
    if(dayInAWeek == 0) {
      this.currentSelectedIndex = 0;
       var dayContent = this.httpService.getPostProcedureContent(dayInAWeek);
      this.dayContent = dayContent.content;
       for(var i=0;i<this.dayContent.length;i++) {
         this.dayContent[i].show = false
       }
      this.dayContentType = dayContent.type
      this.activeDay = dayInAWeek
    } else{
      if(this.currentSelectedIndex ===7 || this.currentSelectedIndex==8) {
        if(dayInAWeek<=8) {
           var dayContentWeek8 = this.httpService.getPostProcedureContent(dayInAWeek);
       
       this.dayContent = dayContentWeek8.content;
      this.dayContentType = dayContentWeek8.type;
      this.currentSelectedIndex = dayInAWeek
      this.activeDay = dayInAWeek
        }
      } else {

      if( (this.validateSelection(dayInAWeek) === true) ) {

       var dayContentWeek = this.httpService.getPostProcedureContent(dayInAWeek);
       //  for(var i=0;i<dayContent.content.length;i++) {
       //   dayContent.content[i].show = false
       // }
       
       this.dayContent = dayContentWeek.content;
         for(var j=0;j<this.dayContent.length;j++) {
         this.dayContent[j].show = false
       }
      this.dayContentType = dayContentWeek.type;
      this.currentSelectedIndex = dayInAWeek
      this.activeDay = dayInAWeek
      }
      }

      
    }

   
    // console.log(this.dayContent)
    
   }

   activateItemHome(id) {
       for(var i=0;i<this.homeContent.length;i++) {
     if(id === i) {
        if(this.homeContent[id]['show'] === false) {
      this.homeContent[id]['show'] = true
    } else {
      this.homeContent[id]['show'] = false
    }
  } else {
     this.homeContent[i]['show'] = false
   }
  }
   }

   activateDetailItemHome(i, j) {
      for(var k =0;k<this.homeContent[i]['dropdownContent'].length;k++) {
      if(k === j) {
         if(this.homeContent[i]['dropdownContent'][j]['show'] === false) {
      this.homeContent[i]['dropdownContent'][j]['show'] = true
    } else {
      this.homeContent[i]['dropdownContent'][j]['show'] = false
    }
  } else {
    this.homeContent[i]['dropdownContent'][k]['show'] = false
  }
     
    }
   }

   getDetailHtmlHomeContent(i, j) {
     return this.homeContent[i]['dropdownContent'][j]['desc'];
   }

   getHtmlContentHome(index) {
    return this.homeContent[index]['description']
  }

   activateItem(id) {
     for(var i=0;i<this.dayContent.length;i++) {
       if(id == i) {
            if(this.dayContent[id]['show'] === false) {
            this.dayContent[id]['show'] = true
          } else {
            this.dayContent[id]['show'] = false
          }
        } else {
          this.dayContent[i]['show'] = false
        }
     }
 
  }

   getHtmlContent(index) {
    return this.dayContent[index]['htmlDesc']
  }

  validateSelection(dayInAweek) {

    var selectedAll = true;
    var lastIndex = this.dayContent.length -1;
    if(dayInAweek > 0) {
      if(this.dayContentType == 'checkbox') {
        for(var i=0;i<this.dayContent.length;i++) {
          if(this.dayContent[i]['selected'] === false) {
        let alert = this.alertCtrl.create({
          title:'Did you miss something?',
          subTitle: 'Be sure to complete your daily task list before moving to the next day.',
          buttons: [
          {
            text: 'Back',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Ok',
            handler: () => {
                if(this.currentSelectedIndex ===7 || this.currentSelectedIndex==8) {
        if(dayInAweek<=8) {
           var dayContent = this.httpService.getPostProcedureContent(dayInAweek);
       
       this.dayContent = dayContent.content;
      this.dayContentType = dayContent.type;
      this.currentSelectedIndex = dayInAweek
      this.activeDay = dayInAweek
        }
      } else{
              if(this.currentSelectedIndex != dayInAweek) {
                  var dayContentCurrent = this.httpService.getPostProcedureContent(dayInAweek);
               this.dayContent = dayContentCurrent.content;
              this.dayContentType = dayContentCurrent.type;
              this.currentSelectedIndex = dayInAweek;
              this.activeDay = dayInAweek
             
              }
            }


    if(this.dayContentType == 'checkbox') {
       for(var i=0;i<this.dayContent.length;i++) {
      if(this.dayContent[i].dropdown == true) {
        this.dayContent[i].show = false;
      }
    }
    }
if(this.dayContentType == 'textanddropdown') {
       this.showMultiple = false
       this.showMultipleSecond = false;
    }


            
            }
          }
        ],
          mode:'ios'
        });
         selectedAll = false;
        alert.present();
        break;
      }
        }
      }

      if(dayInAweek === lastIndex && selectedAll == false) {
        let alert = this.alertCtrl.create({
          title:'Did you miss something?',
          subTitle: 'Be sure to complete your daily task list before moving to the next day.',
              buttons: [
          {
            text: 'Back',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Ok',
            handler: () => {
              this.swipeLeft()
            }
          }
        ],
          mode:'ios'
        });
         selectedAll = false;
        alert.present();
      }

      if(this.currentSelectedIndex != (dayInAweek-1)) {
        // let alert = this.alertCtrl.create({
        //   title:'Did you miss something?',
        //   subTitle: 'Be sure to complete your daily task list before moving to the next day.',
        //   buttons: ['Ok'],
        //   mode:'ios'
        // });
         selectedAll = false;
        // alert.present();
      }
    }
    return selectedAll;
  }

    selectItems(id) {
    if(this.dayContent[id]['selected'] === false) {
      this.dayContent[id]['selected'] = true
    } else {
      this.dayContent[id]['selected'] = false
      // alert('selected ' + this.preProceduresweekBeforeItems[id]['title'])
    }
  }

  showDatePicker() {
    var selectedDaysInAWeek = [];
    var days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  let dateAlert = this.alertCtrl.create({
    title: 'Insert date you returned home',
    inputs: [
      {
        name: 'date',
        placeholder: 'date',
        type:'date'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Ok',
        handler: data => {
          var selectedDate = new Date(data['date']);
          selectedDate.setMinutes( selectedDate.getMinutes() + selectedDate.getTimezoneOffset() );
           selectedDaysInAWeek.push({date:selectedDate.getDate(), day:days[selectedDate.getDay()]});
          
          for(var i=1;i<7;i++) {
            selectedDate.setDate(selectedDate.getDate()+1);
            selectedDaysInAWeek.push({date:selectedDate.getDate(), day:days[selectedDate.getDay()]});
           
          }
          selectedDaysInAWeek.push({date:'2', day:'WEEK'});
          selectedDaysInAWeek.push({date:'3', day:'WEEK'});

          this.daysInAWeek = selectedDaysInAWeek;
          localStorage.setItem('selectedDate', data['date']);
          this.dateSelected = "true"
           this.getPageContent(0)
           this.showFirstPage = false;
           localStorage.setItem('postproceduredateselected', "true");
        }
      }
    ]
  });
  dateAlert.present();
  }

activateItemMultiple(id) {
if(id == 0) {
   if(this.showMultiple) {
    this.showMultiple = false;
  } else {
    this.showMultiple = true;
  }
} else if(id === 1) {
    if(this.showMultipleSecond) {
    this.showMultipleSecond = false;
  } else {
    this.showMultipleSecond = true;
  }
}

 

}
getProperDate(date) {
    if (date == null) return null;
    return new Date(parseInt(date.substr(6)));
}

ionViewCanEnter() {
   var days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
   var selectedDaysInAWeek = [];
  var dateSelected = localStorage.getItem('postproceduredateselected');
  this.dateSelected = dateSelected;

  if(dateSelected == "true") {
    // this.dateSelected = JSON.parse(dateSelected);
    this.showFirstPage = false;
   var selectedDate = new Date( localStorage.getItem('selectedDate'));
     selectedDaysInAWeek.push({date:selectedDate.getDate(), day:days[selectedDate.getDay()]});
    for(var i=1;i<7;i++) {
      selectedDate.setDate(selectedDate.getDate()+1);
      selectedDaysInAWeek.push({date:selectedDate.getDate(), day:days[selectedDate.getDay()]});
     
    }
     selectedDaysInAWeek.push({date:2, day:'WEEK'});
          selectedDaysInAWeek.push({date:3, day:'WEEK'});

    this.daysInAWeek = selectedDaysInAWeek;
    this.getPageContent(0)

  } else {
    this.dateSelected = "false"
  }

 }

 	ionViewDidEnter() {
		googleAnalytics('postprocedure');
	}

  ionViewDidLoad() {
      this.getHomeContent()
      this.showFirstPage = true;
  }
   goBack() {
    this.navCtrl.pop()
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
          this.swipeLeft();  
          
        } else if(event.direction === 4) {
          this.swipeRight();
           
          // this.navCtrl.setRoot(RecoveryPage)
        }

  }

  swipeLeft() {
     this.pageTop.scrollToTop(0);
    if(this.daysInAWeek === undefined) {
      let alert = this.alertCtrl.create({
       title:`Date cannot be empty`,
      subTitle: 'Set the date you returned home.',
      buttons: ['Ok']
    });
    alert.present();
    } else {
        if(this.currentSelectedIndex === 0 && this.showFirstPage === true) {
      this.getPageContent(this.currentSelectedIndex);

      this.showFirstPage = false;
      
    } else if(this.daysInAWeek.length == this.currentSelectedIndex+1) {
            this.navCtrl.setRoot(WhattodoifPage)
          } else {
            this.getPageContent(this.currentSelectedIndex+1);
          }    

    }
  
  }

  swipeRight() {
     this.pageTop.scrollToTop(0);
    if(this.showFirstPage === true) {
      this.navCtrl.setRoot(RecoveryPage)
    } if(this.currentSelectedIndex == 0) {
      if(this.showFirstPage == true) {
        this.showFirstPage = false;
        this.navCtrl.setRoot(RecoveryPage)
      } else {
        this.showFirstPage = true;
        for(var i=0;i<this.homeContent.length;i++) {
    this.homeContent[i]['show'] = false
  }
      }
        
            // 
          } else if(this.currentSelectedIndex>0) {
            this.getPageContent(this.currentSelectedIndex-1)
          }  
      }
      }
  // }

// }
