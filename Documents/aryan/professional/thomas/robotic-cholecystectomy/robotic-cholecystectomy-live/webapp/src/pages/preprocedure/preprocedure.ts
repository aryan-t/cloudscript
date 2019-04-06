import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Content } from 'ionic-angular';
import { googleAnalytics } from '../../assets/gtag';


/**
 * Generated class for the PreprocedurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
  This section includes all the pages related to procedures
**/
/**
  This section includes all the pages related to procedures
**/
import { ProcedurePage } from '../procedure/procedure';
import { DuringprocedurePage } from '../duringprocedure/duringprocedure';
import { PostprocedurePage } from '../postprocedure/postprocedure';
import { RecoveryPage } from '../recovery/recovery';
import { SuccessPage } from '../success/success';
import { WhattodoifPage } from '../whattodoif/whattodoif';
import { HomePage } from '../home/home';
import { PeoplePage } from '../people/people';
import { InsurancemessagePage } from '../insurancemessage/insurancemessage';


@IonicPage()
@Component({
  selector: 'page-preprocedure',
  templateUrl: 'preprocedure.html',
})
export class PreprocedurePage {
  @ViewChild('pageTop') pageTop: Content;
  preProcedures = 'week-before';
  isActiveDayBefore:boolean = true;
  preProceduresweekBeforeItems = [{
    dropdown:false,
    title:'Pre-operative appointment:',
    description: `
  If you are having outpatient surgery, you will most likely meet with your surgeon for a preoperative appointment.&nbsp;&nbsp;You will want to inform of your surgeon of:
<ul class="marginHeading"><li>Your major medical problems</li>
<li>Any surgeries you have had in the past</li>
<li>Your current medications (including all prescription, non-prescription, vitamins, herbs, and supplements) along with their dosage and frequency of use.</li>
<li>Any allergies you have</li>
<li>Your surgeon will conduct a focused physical examination and may also order routine preoperative testing.&nbsp;&nbsp; Your surgeon will also conduct a focused physical examination.</li>
<li>You can also use your preoperative appointment to address any questions or concerns you may have regarding your surgery.&nbsp;&nbsp;Common questions to ask your surgeon include:</li>
<li>Will I will be staying overnight?</li>
<li>How will my pain be controlled after my procedure? What alternative solutions are there other than opioid pain medication?</li>
<li>What expectations should I have for my recovery?</li>
<li>How much time will I need to take off from work while I recover? (Although the majority of patients undergoing robotic cholecystectomy recover quickly [and much faster compared to open cholecystectomy], the recovery process depends on your overall health and age.&nbsp;&nbsp;Future planning may be necessary to ensure a smooth recovery process.)</li>
<li>Will I need someone at home to help me as I recover?</li>
</ul>
<u>Reminders:</u>
<br /><br />
Please review your preparation materials provided by your surgeon.

<br /><br />Please contact your surgeon if you become sick.&nbsp;&nbsp;This includes ear or eye infections, fever, sore throat, productive cough, or flu-like symptoms (which includes a non-productive cough).&nbsp;&nbsp;You may need to reschedule your surgery.&nbsp;&nbsp;
<br /><br />
Exercise before your surgery will improve your body’s ability to recover.&nbsp;&nbsp;You should try to exercise at least [surgeon input for duration of exercise] with [surgeon input for type of exercise] [surgeon input on how many times per week prior to surgery].
    `,
    show:false,
    selected:false
  },
  {
    dropdown:false,
    title:'Medication changes:',
    description: `<ul class="marginHeading">
 <li>Depending on your surgeon’s preferences and/or your specific clinical situation, you may be asked to either discontinue or adjust the dosage/frequency of certain medications/vitamins/herbs/supplements at a certain date.&nbsp;&nbsp; Please [surgeon input: discontinue, decrease, increase, start] [medication/herb/vitamin/supplement] on [surgeon input: date] [optional surgeon input: and change it to…].&nbsp;&nbsp;These may include:</li>
<li><u>Blood-thinning medications</u> (anticoagulants and antiplatelet medications):</li>
<li><i><b>Anticoagulants</b> include but are not limited to: apixaban, rivaroxaban, fondaparinux, dabigatran, dalteparin, tinzaparin, edoxaban, enoxaparin, low-molecular weight heparin, and warfarin</i></li>
<li><i><b>Antiplatelet medications</b> include but are not limited to: aspirin, clopidogrel, cilostazol, ticagrelor, prasugrel, ticlopidine, vorapaxar, dypridiamole, and aspirin with dipyridamole</i></li>
<li><u>Estrogen-containing medications</u> (hormone replacement therapy or oral contraceptives)</li>
<li><u>Diabetes medications:</u></li>
<li><i>Examples of diabetic medications that should be discontinued include: thiazolidinediones, sulfonylureas, biguanides, alpha-glucosidase inhibitors, and GLP-1 agonists.</i></li>
<li><u>Vitamins</u> (vitamin E)</li>
<li><u>Herbal supplements</u> (St.&nbsp;&nbsp;John’s Wort, Echinacea, kava, ephedra, ginkgo, garlic, ginseng, and valerian)</li>

    `,
    show:false,
    selected:false
  },
  { dropdown:false, title: '1 week before',
    description:`
    <b>Smoking and nicotine cessation:</b> Please discontinue.

  <br /><br /><b>Schedule an appointment with your primary care provider or diabetes physician 1 to 2 weeks after surgery</b> to discuss changes made to your medications after surgery (e.g. blood pressure and diabetic medications). 

<br /><br />Know the <b>pharmacy where you will be picking up your prescription medications</b> after surgery. 
<br /><br />Make sure you have the special antibiotic soap (see section on “evening before surgery”) you will need to wash with at home prior to your surgery. This soap is called <b>chlorhexidine gluconate antiseptic soap (CHG)</b>. 
<br /><br />
Make sure you have a <b>responsible adult friend or family member</b> to help you get home if you are expecting to have same-day surgery. It is also encouraged to have this individual or another responsible adult stay with you for your first day home.
    `,
    show:false,
    selected:false
  }]

    preProceduresDayBeforeItems = [{
    title:'Day before surgery:',
    description: `<ul class="marginHeading">
   <li> Continue to abstain from smoking and nicotine use if possible. </li>
<li> Continue to follow the plan for your diabetes medications so that your blood glucose is in the desired target range.</li>
<li>Again, review all preparation materials provided by your surgeon e.g. what you need to do to continue preparing for your surgery and what to expect from your time in the hospital).</li>
<li>Contact your surgeon if you become sick. This includes ear or eye infections, fever, sore throat, productive cough, or flu-like symptoms (which includes a <i>non-productive</i> cough). You may need to reschedule your surgery.</li>
    </ul>`,
    show:false,
    disabled:false,
    selected:false
  },
  {
    title:'Evening before surgery:',
    description: `<ul class="marginHeading">
  <li>If you take diabetic medications, make sure you are following the specific instructions your surgeon provided for you regarding their use.</li>
  <li>You may need to shower with “special” preoperative surgical soap before coming to the hospital. This soap is called chlorhexidine gluconate (CHG) antiseptic soap. This “special” soap has antibacterial properties and decreases your risk of infection after surgery. Please follow the instructions provided by your surgeon on how to properly use this antibacterial soap. Do not put anything (e.g. lotion) on your skin after washing with and rinsing off the CHG soap with water.</li>


    </ul>`,
    show:false,
    disabled:false,
    selected:false
  },
  {
    title:'Midnight before surgery:',
    description: `<ul class="marginHeading">
    <li>Historically, patients have been told not to eat or drink anything after midnight. However, there have been recent changes to these recommendations. You should check with your surgeon’s office for instructions.</li>
<li><b>New eating rules.</b><br />
You should <b>not</b> eat heavy/fatty meals 8 hours before your surgery. You <b>may</b> have a light snack up to 6 hours prior to your surgery.</li>
<li>You <b>may</b> consume a clear liquid diet up to 2 hours before your surgery. These liquids should be also be non-carbonated (e.g. water or electrolyte beverages). <b>This means drinks you can see through– no juice and no ginger ale.</b></li>
<li>If you break these rules regarding your preoperative diet, you potentially place your health and safety at serious risk and your surgery will be cancelled.</li>
<li>You should take medications during this time interval that your surgeon has instructed you to take with small amounts of water at the approved times.</li>


    </ul>`,
    show:false,
    disabled:false,
    selected:false
  },
  {
    title:'Morning of surgery',
    description: `<ul class="marginHeading">
  <li>Contact your surgeon if you become sick. This includes ear or eye infections, fever, sore throat, productive cough, or flu-like symptoms (which includes a <i>non-productive</i> cough). You may need to reschedule your surgery.</li>
<li>Continue to abstain from smoking and nicotine use. If you have not been able to abstain from smoking during this time, you should make sure you do not smoke the morning of your surgery. </li>
<li>Please continue to follow the aforementioned instructions on food and liquid consumption depending on the time of your surgery. </li>
<li>You <b>may</b> consume a clear liquid diet up to 2 hours before your surgery. These liquids should be also be non-carbonated (e.g. water or electrolyte beverages). <b>This means drinks through which you can see – no juice and no ginger ale.</b></li>
<li>If you break these rules regarding your preoperative diet, you potentially place your health and safety at serious risk and your surgery will be cancelled.</li>
<li><b>Arrive at the hospital</b> when your surgeon’s office instructed you to be there.</b></li>
<li>Bring a list of your current medications (with their dosages and frequency), CPAP or BiPAP machines if applicable, and any inhalers you use. There is no need to bring any of your other medications. Also, be sure to bring your insurance card and a valid form of identification if you were told to do so.</li>
<li>You should wear loose clothing that is easy to take off as you will be changing into a hospital gown soon after your arrive.</li>
<li>You will also be required to remove contact lenses/glasses, hearing aids, dentures, hair accessories, and any piercings. Either keep these at home or have a safe way to store them during your operation.</li>
<li>If you insist on bringing valuables, make sure you have a trusted friend or family member with you who can assume responsibility for them during your surgery.</li>
<li>Do not wear make-up or nail polish.</li></ul>

Finally, we want to encourage you to remain calm. Surgery is a stressful event for every patient, but you are in capable hands and will be well taken care of by your surgical team, anesthesia team, and the nursing staff.
<br /><br />
If your surgeon thinks there is a chance you will stay overnight, you should pack the bare essentials you would need for an overnight stay. For example, patients with obstructive sleep apnea should bring their CPAP or BiPAP sleeping machine. Also, if you have asthma, you should bring your inhalers. You will not need to bring any other medications other than your inhalers.

            </ul>`,
    show:false,
    disabled:false,
    selected:false
  },
  {
    title:"Be Calm and Relax: It’s OK.",
    description: `<p>We encourage you to remain calm.&nbsp;&nbsp;Surgery is a
stressful event for every patient, but you are in
capable hands and will be well taken care of by
your surgical team, anesthesia team, and the
nursing staff.
  <ul><li>
      <b>Arrive at the hospital</b> when your surgeon’s office instructed you to be there.
   </li></ul>
</p>`,
    show:false,
    disabled:false,
    selected:false
  },  {
    title:"Ready!",
    description: `<p>If you've followed all the rules, confirm with hospital you are ready.</p>`,
    show:false,
    disabled:false,
    selected:false
  },
  {
    title:"Not ready!",
    description: `<p>If did NOT follow the rules, or something happened, cancel your procedure.</p>`,
    show:false,
    disabled:false,
    selected:false
  }]

  // readyNotReadyOptions = [
  // {
  //   title:"Ready!",
  //   description: `<p>If you've followed all the rules, confirm with hospital you are ready.</p>`,
  //   show:false,
  //   selected:false
  // },
  // {
  //   title:"Not ready!",
  //   description: `<p>If did NOT follow the rules, or something happened, cancel your procedure.</p>`,
  //   show:false,
  //   selected:false
  // }]

  platform:any = localStorage.getItem('platform');
  className:any = 'contentwrap';
  hideDayBefore:boolean = true;

  navClassName:any='na'
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
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
		googleAnalytics('preprocedure');
	}

  ionViewDidLoad() {
    if( localStorage.getItem('dayBefore') != null) {
      var dayBefore = JSON.parse(localStorage.getItem('dayBefore'))
       for(var i=0; i<dayBefore.length;i++) {
         this.preProceduresDayBeforeItems[dayBefore[i]].selected = true
       }
    }

    if(localStorage.getItem('weekBefore') != null) {
       var weekBefore = JSON.parse(localStorage.getItem('weekBefore'));
       for(var k=0; k<weekBefore.length;k++) {
        this.preProceduresweekBeforeItems[weekBefore[k]].selected = true
       }
    }
  }

  ionViewWillLeave() {
    var dayBefore = [];
    var weekBefore = [];
    for(var i = 0; i<this.preProceduresweekBeforeItems.length;i++) {
      if(this.preProceduresweekBeforeItems[i].selected === true)
    weekBefore.push(i)
    }
    localStorage.setItem('weekBefore', JSON.stringify(weekBefore))
    for(var l = 0; l<this.preProceduresDayBeforeItems.length;l++) {
      if(this.preProceduresDayBeforeItems[l].selected === true)
    dayBefore.push(l)
    }
    localStorage.setItem('dayBefore', JSON.stringify(dayBefore))

  }

  validate() {
     var selectedAll = true;
    for(var i=0; i<this.preProceduresweekBeforeItems.length;i++) {
      if(this.preProceduresweekBeforeItems[i]['selected'] === false) {
        // let alert = this.alertCtrl.create({
        //   subTitle: 'Be sure to complete your checklist so the hospital team knows you are ready!',
        //   buttons: ['Ok'],
        //   mode:'ios'
        // });
        this.preProcedures='week-before';
        this.isActiveDayBefore = true;
         selectedAll = false;
        // alert.present();
        break;
      }
    }
     if(selectedAll === true) {
      this.isActiveDayBefore = false;
    } 
  }

  segmentChanged(id) {
    var thisObj = this;
    var selectedAll = true;
    if(id == 2) {
              for(var i=0; i<this.preProceduresweekBeforeItems.length;i++) {
        if(this.preProceduresweekBeforeItems[i]['selected'] === false) {
            let alert = this.alertCtrl.create({
          subTitle: 'Be sure to complete your checklist so the hospital team knows you are ready!',
          buttons: [ {
           text:'Back',
            handler:function() {
              thisObj.preProcedures = 'week-before'
              thisObj.hideDayBefore = true;
 
            }
          }, {
            text:'Ok',
            handler:function() {
              for(var i=0; i<thisObj.preProceduresweekBeforeItems.length;i++) {
                thisObj.preProceduresweekBeforeItems[i].show = false;
                // thisObj.preProceduresweekBeforeItems[i].selected = false;
              }
              thisObj.preProcedures = 'day-before'
              thisObj.hideDayBefore = false;

 
            }
          }],
          mode:'ios'
        });
             selectedAll = false;
        alert.present();
          break;
        }
      }

    }
      // if(selectedAll === true) {
        if(id == 1) {
          this.hideDayBefore = true;
          for(var k=0; k<thisObj.preProceduresDayBeforeItems.length;k++) {
                thisObj.preProceduresDayBeforeItems[k].show = false;
                // thisObj.preProceduresDayBeforeItems[i].selected = false;
              }
        }

         if(id == 2 && selectedAll == false) {
          this.hideDayBefore = true;
        }
         if(id == 2 && selectedAll == true) {
          this.hideDayBefore = false;
          this.preProcedures = 'day-before'
        }
  }


    validateDayBeforeItems() {
     var selectedAll = true;
    for(var i=0; i<this.preProceduresDayBeforeItems.length-2;i++) {
      if(this.preProceduresDayBeforeItems[i]['selected'] === false) {
         selectedAll = false;
         if(this.preProceduresDayBeforeItems.length > 5 && this.preProceduresDayBeforeItems[6]['selected']=== false) {
      

         }
        break;
      }
    }


     if(selectedAll === true) {
   
    } 
  }

  selectItems(id) {
    if(this.preProceduresweekBeforeItems[id]['selected'] === false) {
      this.preProceduresweekBeforeItems[id]['selected'] = true
      this.validate()
    } else {
      this.preProceduresweekBeforeItems[id]['selected'] = false;
      this.validate()
    }

  }

    selectItemsOfDaysBefore(id) {
      if(id !=5 && id!=6) {
        if(this.preProceduresDayBeforeItems[id].selected == false) {
          this.preProceduresDayBeforeItems[id].selected = true
        } else {
          this.preProceduresDayBeforeItems[id].selected = true
        }
      }

      var selected = true;
        for(var i=0;i<this.preProceduresDayBeforeItems.length-2;i++) {
          if(this.preProceduresDayBeforeItems[i].selected == false) {
            selected = false;
          }
        }

      if(selected == false && id == 5) {
        if(this.preProceduresDayBeforeItems[5].selected == false) {
          this.preProceduresDayBeforeItems[5].selected = true;
            let alert = this.alertCtrl.create({
              title:'',
              subTitle: 'You need to check all above checkboxes',
              mode:'ios',
              buttons: [{text:'Ok', handler: () => {
              // this.swipeLeft()
              this.preProceduresDayBeforeItems[5].selected = false;
            }}, {text:'Cancel', handler: () => {
              this.preProceduresDayBeforeItems[5].selected = false;
            }}],
            });
            alert.present();

        } else {
          this.preProceduresDayBeforeItems[5].selected = false;
        }
      }

           if(selected == false && id == 6) {
        if(this.preProceduresDayBeforeItems[6].selected == false) {
          this.preProceduresDayBeforeItems[6].selected = true;
            let alert = this.alertCtrl.create({
              title:'Are you sure...',
              subTitle: 'Please immediately contact the hospital to cancel your surgery.',
              mode:'ios',
              buttons: [{text:'Ok', handler: () => {
              // this.swipeLeft()
              // this.pre
              this.preProceduresDayBeforeItems[6].selected = false;
            }}, {text:'Cancel', handler:() =>{
              this.preProceduresDayBeforeItems[6].selected = false;
            }}],
            });
            alert.present();

        } else {
          this.preProceduresDayBeforeItems[6].selected = false;
        }
      }

     if(selected == true) {
       if(id ==5) {
          // let alert = this.alertCtrl.create({
          //    title:'Congrats, you are good to go!',
          //     subTitle: 'A message will be sent to the team at the hospital to confirm you are ready for your procedures',
          //     mode:'ios',
          //     buttons: [{text:'Ok', handler: () => {
          //     this.swipeLeft()
          //   }}, {text:'Cancel'}],
          //   });
          //   alert.present();
       }

       if(id == 6) {
          // let alert = this.alertCtrl.create({
          //     title:'Are you sure you need to cancel?',
          //     subTitle: 'A member of the hospital team will contact you shortly to confirm your decision and reschedule the procedure.',
          //     mode:'ios',
          //     buttons: [{text:'Ok', handler: () => {
          //     this.swipeLeft()
          //   }}, {text:'Cancel'}],
          //   });
          //   alert.present();
       }
     }     
   }

     


  activateItem(id) {
    for(var i =0;i<this.preProceduresweekBeforeItems.length;i++) {
       if(id === i) {
             if(this.preProceduresweekBeforeItems[id]['show'] === false) {
              this.preProceduresweekBeforeItems[id]['show'] = true
            } else {
              this.preProceduresweekBeforeItems[id]['show'] = false
            }
          } else {
            this.preProceduresweekBeforeItems[i]['show'] = false
          }
  
    }
    
  }

  activateDetailItem(i, j) {
    for(var k =0;k<this.preProceduresweekBeforeItems[i]['dropdownContent'].length;k++) {
      if(k === j) {
         if(this.preProceduresweekBeforeItems[i]['dropdownContent'][j]['show'] === false) {
      this.preProceduresweekBeforeItems[i]['dropdownContent'][j]['show'] = true
    } else {
      this.preProceduresweekBeforeItems[i]['dropdownContent'][j]['show'] = false
    }
  } else {
    this.preProceduresweekBeforeItems[i]['dropdownContent'][k]['show'] = false
  }
     
    }
  }

  getDetailHtmlContent(i, j) {
    return this.preProceduresweekBeforeItems[i]['dropdownContent'][j]['desc'];
  }

  //  getDetailHtmlContent(i, j) {
  //    return this.preProceduresweekBeforeItems[i]['dropdownContent'][j]['desc'];
  // }
  

   activateItemOfDaysBefore(id) {
     for(var i=0;i<this.preProceduresDayBeforeItems.length;i++) {
       if(id === i) {
             if(this.preProceduresDayBeforeItems[id]['show'] === false) {
              this.preProceduresDayBeforeItems[id]['show'] = true
            } else {
              this.preProceduresDayBeforeItems[id]['show'] = false
            }
          } else {
            this.preProceduresDayBeforeItems[i]['show'] = false
          }
     }

  }


  getHtmlContent(index) {
    return this.preProceduresweekBeforeItems[index]['description']
  }

  getHtmlContentOfDaysBefore(index) {

    return this.preProceduresDayBeforeItems[index]['description']
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
            this.swipeLeft()
        } else if(event.direction === 4) {
         this.swipeRight()
        }

  }

  swipeLeft() {
     this.pageTop.scrollToTop(0);
    if(this.preProcedures == 'week-before') {
      this.segmentChanged(2)
    } else if(this.preProcedures == 'day-before') {
      this.navCtrl.push(DuringprocedurePage); 
    }
  }

  swipeRight() {
     this.pageTop.scrollToTop(0);
     if(this.preProcedures == 'day-before') {
      this.preProcedures = 'week-before';
      this.hideDayBefore = true;
    } else if(this.preProcedures == 'week-before') {
      this.navCtrl.push(ProcedurePage); 
    }
  }

  getVerification(items) {
    var itemsLength = items.length - 2;
    for(var i=0;i<itemsLength;i++) {
          if(items[i].selected == false) {
          return false;
        }
    }
    return true;
  }

presentAlert() {
  let alert = this.alertCtrl.create({
    subTitle: 'Be sure to complete your checklist so that hospital team knows you are ready!',
    mode:'ios',
    buttons: ['Ok']
  });
  alert.present();
}

presentSuccess() {
  let alert = this.alertCtrl.create({
    title:'Congrats, you are good to go!',
    subTitle: 'A message will be sent to the team at the hospital to confirm you are ready for your procedures',
    mode:'ios',
    buttons: [{text:'Ok'}, {text:'Cancel'}],
  });
  alert.present();
}
}

// }
// }
