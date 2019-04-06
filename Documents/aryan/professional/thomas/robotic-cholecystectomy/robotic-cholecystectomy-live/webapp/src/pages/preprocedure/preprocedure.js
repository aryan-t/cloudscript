var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var PreprocedurePage = /** @class */ (function () {
    function PreprocedurePage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.preProcedures = 'week-before';
        this.isActiveDayBefore = true;
        this.preProceduresweekBeforeItems = [{
                title: 'Screening',
                description: "<p>There typically is a screening process that every potential patient has to go through before a decision is made regarding his or her candidacy for weight loss surgery. This process reviews a patient medical history, their current level of health, prior attempts at weight loss, and psychosocial status.<br />\n    Although everyone\u2019s experience is different, the more you know about weight loss surgery, the more likely you will end up making the decision that is right for you. It is important that other aspects of your life are in order and that you have a solid support network (e.g. friends, family, healthcare providers, support groups) so that you can solely focus on your journey to achieve successful weight loss.<br />\n    <b>Pregnancy.</b> If you wish to become pregnant after your surgery, please discuss this with your physician. Typically it is safe for you to become 2 years after your surgery. If you become pregnant too soon, you risk having malnutrition leading to a fetal defect, low birth weight, and/or pregnancy loss.<br /> <br />\n    <b>Interview:</b><br />\n    <ul>\n      <li>You will meet with your surgeon prior to the day of your procedure.</li>\n      <li><u>Common questions to ask your surgeon include:</u>\n\n        <ul>\n          <li>Will I be staying overnight? OR How many nights will be I staying in the hospital?</li>\n          <li> How will my pain be controlled after my procedure? What alterative solutions are there other than opioid pain medication?</li>\n          <li>What expectations should you have for your recovery? </li>\n          <li>Discharge expectations (e.g. nausea, vomiting, and other postoperative symptoms)</li>\n          <li>How much time will I need to take off from work while I recover? The amount of time you need to recover will depend on which procedure you decide is right for you, your health, your diet and eating habits, and your dedication to regular exercise following surgery and whether or not there were complications during/after your procedure. </li>\n           <li>What will my long-term expectations be after weight loss surgery</li>\n        </ul>\n\n      </li>\n      <li>Schedule your postoperative follow-up appointments with an administrative assistant.</li>\n      <li>Bring Family and Medical Leave Act documents for your employer if you are pursuing this for your surgery.</li>\n    </ul>\n    <b>Physical examination & possible tests:</b><br />\n    <i>The need for testing will be determined by your surgical team and is based off of your past medical history.</i><br />\n    <ul>\n      <li>Electrocardiogram (ECG) to assess your heart function with possible further workup depending on your risk factors.</li>\n      <li>Blood tests are routinely done to assess the content of your blood. On a selective basis, your liver function and the ability of your blood to form clots may also be assessed.</li>\n      <li><i>H. pylori</i> testing.</li>\n       <li>Upper endoscopy and or upper gastrointestinal series. If a patient undergoes preoperative upper endoscopy, a biopsy may be obtained for <i>H. pylori</i> testing. This would replace blood or stool testing for <i>H. pylori</i>.</li>\n       <li>Urine test might be done if you could be pregnant.</li>\n\n    </ul>\n    <b><u>Pre-operative appointment with anesthesiologist</u></b><br />\n    <b><u>Pre-operative appointment with registered dietitian:</u></b><br />\n    Here, goals will be set to facilitate healthy eating choices and behaviors. Your pre-operative diet, postoperative dietary stages, and other pertinent nutrition information will also be discussed. You will also go over the results of your bloodwork and, at the very least, make plans to start taking a daily multivitamin. Depending on your results, you may have to start additional vitamin and mineral supplementation if you have any underlying nutritional deficiencies.<br />\n    <br />\n    <b><u>Optional Pre-operative appointment with social worker and/or psychiatrist/psychologist:</u></b><br />\n    This will help you identify potential challenges to achieving significant and maintained weight loss.\n    ",
                show: false,
                selected: false
            }, {
                title: 'Pre-operative appointment:',
                description: "<p><b><br><u>Interview</u></b></p><ul class=\"marginHeading\">\n    <li>If you are having outpatient surgery, you will most likely meet with your surgeon. </li>\n<li>These are likely topics and questions you may have:\n<ul><li>\n Your major medical problems.</li>\n<li>Any surgeries you have had.</li>\n<li>Your current medications (including all vitamins, herbs, and supplements) along with their dosage and frequency of use.</li>\n<li>Any allergies.</li>\n<li> Common questions to ask your surgeon include:<ul>\n<li> Will I be staying overnight?</li>\n<li>How will my pain be controlled after my procedure? What alterative solutions are there other than opioid pain medication?</li>\n<li>What expectations should I have for my recovery?</li>\n<li>How much time will I need to take off from work while I recover?</li></ul></li></ul>\n\n</li>\n    </ul><p><b><u>Physical examination and possible\n    tests:</u></b></p><ul class=\"marginHeading\">\n    <li>Electrocardiogram (ECG) to assess your\n        heart function.</li>\n        <li>Blood tests to assess the content of your\n         blood, your liver function and, possibly, the\n         ability of your blood to form clots.</li>\n          <li>Urine test.</li>\n          <li>Ultrasound or imaging of your belly - if that\n              has not already been carried out.</li>\n    </ul>",
                show: false,
                selected: false
            },
            {
                title: '8 weeks before (or after your pre-operative appointment):',
                description: "<ul>\n      <li><b>You should contact your primary care provider or gynecologist regarding when to stop taking estrogen-containing medications</b> (e.g. hormone replacement therapy or oral contraceptives). Some hormones can increase your risk of blood clots. If you require another form of birth control, discuss this with your primary care physician or gynecologist. The same physician should also tell you when it is safe to start taking this medication again after your procedure</li>\n      <li>\n          <b>Recovery period planning.</b> Although it depends on your overall health, recovery after major gastric surgery generally takes around 2 weeks.* We recommend that you ask your employer for 3 weeks off from work just to be safe. You can return to work earlier if you feel well enough to engage in your work-related activities. Please consult your surgeon if you have questions regarding your return to work.\n      </li>\n      <li>\n      If your surgery was converted to an open procedure, you will most likely require more time to recover.<br /><br />\n      It typically takes 2 weeks to return to your normal baseline function, but you should wait at least 4 to 6 weeks before engaging in strenuous exercise.\n      </li>\n      <li>\n        Depending on where you are employed, you may need to ask for (Family and Medical Leave of Absence (FMLA) time. You should contact your human resources department for further information.\n      </li>\n      <li>\n        All medications that you take after surgery must either be chewable or crushable. When not available it has to be liquid.\n      </li>\n      <li>\n      <b>Daily exercise</b> now will improve your body\u2019s ability to recover after surgery. After surgery you need to increase both the intensity and the overall duration (to at least 150 minutes per week) of your aerobic exercise. Additionally, you should ultimately incorporate 2 to 3 sessions of approved weight training each week as well.\n      </li>\n      <li>\n      <b>Schedule an appointment with your primary care provider or diabetes physician 1-2 weeks after surgery</b> to discuss changes made to your medications after surgery (e.g. blood pressure and diabetic medications). Never stop taking prescription medications without the approval of your prescribing physician (e.g. neurologist, cardiologist, or diabetes physician)\n      </li>\n\n    </ul>",
                show: false,
                selected: false
            },
            {
                title: 'Your pre-procedure Diet:',
                description: "Many patients are required to lose some weight prior to their surgery. This serves to help the patient demonstrate their willingness to make healthy changes while also decreasing the size of their liver and improving the safety of their procedure. However, all patients typically need to improve their diet and eating habits. You will be required to meet with your bariatric program\u2019s registered dietitian both before and after your surgery.<br /><br />\n    In general, you should focus on consuming healthy sources of protein and non-starchy vegetables. Additionally, you should minimize carbohydrate consumption and avoid any refined sugars. You should <b>not</b> have fruit with each meal.<br /><br />\n    Citation for RYBG weight loss: <br />\n    <a href=\"https://www.ncbi.nlm.nih.gov/pubmed?term=20176512\" target=\"_blank\">https://www.ncbi.nlm.nih.gov/pubmed?term=20176512</a><br />\n     Citation for SG weight loss: <br />\n     <a href=\"https://www.ncbi.nlm.nih.gov/pubmed?term=27178618\" target=\"_blank\">\n     https://www.ncbi.nlm.nih.gov/pubmed?term=27178618</a><br />\n     Citation for AGB weight loss: <br />\n     <a href=\"https://www.ncbi.nlm.nih.gov/pubmed?term=23235396\" target=\"_blank\">https://www.ncbi.nlm.nih.gov/pubmed?term=23235396</a>\n    ",
                show: false,
                selected: false
            },
            {
                title: '6 weeks before',
                description: "<ul class=\"marginHeading\">\n    <li><b>Discontinue smoking and nicotine use</b><br />\n     You will be required to abstain from smoking for 6 months prior to your surgery. If smoking cessation is challenging, nicotine replacement therapy is still better than smoking (even though nicotine should also be avoided). \n     <li>Online resources to help you quit smoking include the National Institutes of Health: <br /><a href=\"https://smokefree.gov/\" target=\"_blank\">https://smokefree.gov/</a>)</li>\n    </ul>",
                show: false,
                selected: false
            },
            {
                title: '2 weeks before',
                description: "<ul>\n    <li>\n    <b>Initiate your preoperative diet (sometimes this can be started three weeks prior to your surgery)</b><br />\n    This diet can sometimes be referred to as a very low-calorie diet. <br /><br />\n    This should be done in coordination with the recommendation from your registered dietitian. Avoid eating late at night or consuming large meals during the day. <br /><br />\n    3 meal replacements (e.g. approved protein shakes with 15 to 20 grams of protein, less than 7 grams of fat, and less than 10 grams of carbohydrates) and 1 \u201Creal food\u201D meal/day with adequate fluid intake (up to 128 oz.) Make sure you continue your vitamin and mineral supplementation. Patients with diabetes should pay close attention to their blood glucose during this 2-week period before their operation. Contact your endocrinologist or the physician who provides your diabetes medication if you have concerns. <br /><br />\n    Protein bars recommended by your registered dietitian may be incorporated in your 2-week preoperative diet.\n    </li>\n    <li>\n    <b>Change any diabetic medicines</b><br />\n     You should consult any changes in prescription medications with your prescribing physician. You may be asked to discontinue your current diabetes medications, adjust your current dosages, or switch to a different medication to better control your blood glucose levels.\n    </li>\n    <li>\n      <b>Avoid herbal medications.</b><br /> Discontinue St. John\u2019s Wort. This can impact some of the anesthetic medications you will be receiving.\n    </li>\n    <li><b>Discontinue herbal supplements.</b><br />\n    They can negatively impact your surgery. These effects include:\n    <ul>\n        <li>Heart problems (in the case of ephedra) </li>\n        <li>Bleeding risks (in the case of ginkgo, garlic, and ginseng) </li>\n        <li>Low blood sugar (in the case of ginseng) </li>\n        <li>Further complications with anesthesia (in the case of valerian and kava)</li>\n        <li>Omega-3 fatty acids and Coenzyme Q10 should also be discontinued. Discuss all herbal supplements with your surgeon so you can come up with a plan that is specific to you (even ones not included in the above list).</li>\n        <li>Attend your <b>pre-admission testing</b> appointment if scheduled.</li>\n        <li>If you become <b>sick</b> then contact the surgical appointments office. This includes ear or eye infections, fever, sore throat, cough, or flu-like symptoms. You may need to reschedule your surgery.</li>\n    </ul>\n\n    </li>\n\n      </ul>",
                show: false,
                selected: false
            },
            { title: '1 week before',
                description: "<ul><li><b><u>Discontinue:</u></b><br>\nAspirin, non-steroidal anti-inflammatory (NSAIDs) or arthritis medications, vitamin E supplements, and blood thinners (e.g. aspirin, warfarin). If you are on blood thinning medication for a coronary or vascular stent, the decision to discontinue your blood thinning medication needs to be made by your cardiologist or prescribing physician.</li>\n    <li><b><u>Pharmacy:</u></b>Know where you will be picking up your prescription medications after surgery. Check that they have the appropriate postoperative pain medications. Ensure that your medications will be in chewable or crushable, or liquid.</li>\n    <li><b><u>Antibiotic soap:</u></b> Make sure you have the special antibiotic soap (see section on \u201Cevening before surgery\u201D) you will use at home prior to your surgery.</li>\n<li><b><u>Home-care team ready?</u></b> You will not be allowed to leave the hospital on your own, so you need a responsible adult to help. It is also encouraged to have an adult stay with you for your first day home and be available to you for a few weeks after your surgery to help you with travel (e.g. to appointments) and with activities of daily living.<br />\nResources to help you prepare for your surgery include: <i>Weight Loss Surgery: Finding the Thin Person Hiding Inside You by Barbara Thompson, Prepare for Surgery, Heal Faster: A Guide of Mind-Body Techniques)</i></li>\n    </ul>",
                show: false,
                selected: false
            }];
        this.preProceduresDayBeforeItems = [{
                title: 'Day before surgery:',
                description: "<ul>\n    <li>All pain medication should have been discontinued. If you require pain relief, acetaminophen is acceptable. NSAIDs or other medications may be used for pain relief if your surgeon tells you this is acceptable. </li>\n    <li>Continue to follow the plan for your diabetes medications so that your blood glucose is in the desired target range. </li>\n    <li>Diet: Continue your pre-procedure diet with 3 meal replacements and 1 \u201Creal food\u201D meal but then follow the below recommendations on when to stop eating and drinking liquids as discussed with your dietitian</li>\n    </ul>",
                show: false,
                disabled: false,
                selected: false
            },
            {
                title: 'Evening before procedure:',
                description: "<ul>\n    <li>Carbohydrate loading (50 mg glucose) if you do not have diabetes.</li>\n    <li><b>Hospital stay.</b> Most patients will stay in the hospital for 1 to 2 days. Therefore, you should pack undergarments, T-shirts, books, music-playing devices, etc. Vaseline can also help with dry lips. Patients with sleep apnea should bring their CPAP or BiPAP sleeping machine.</li>\n    <li><b>Surgical soap</b> You need to shower with preoperative surgical soap twice before coming to the hospital. This soap is called chlorhexidine gluconate antiseptic soap (CHG). The first shower should take place the evening before your surgery. The second shower occurs the morning of your surgery. This soap has antibacterial properties and decreases your risk of infection after surgery. Follow instructions. Briefly, use this soap on all areas of your body below your chin EXCEPT for your genital area if you are a woman. DO NOT use on your head and avoid using it over non-intact skin or open wounds. Avoid this soap if you have an allergy to CHG. <br />DO NOT use your regular soap after using this antiseptic soap. Also, DO NOT use any skin lotion.</li>\n    <li><b>Shaving:</b> Do not remove hair by any means. This includes shaving, trimming, and waxing.</li>\n\n    </ul>",
                show: false,
                disabled: false,
                selected: false
            },
            {
                title: 'Midnight and morning before surgery',
                description: "<ul class=\"marginHeading\"><li><b><u>New eating rules.</u></b><br>\nYou should <b>not</b> eat heavy/fatty meals 8 hours before your surgery. You <b>may</b> have a light snack up to 6 hours prior to your surgery. Consult your dietitian or preoperative team regarding what snacks are acceptable. <br /><br />\n<br />\nYou <b>may</b> consume a clear liquid diet up to 2 hours before your surgery. These liquids should be also be non-carbonated (e.g. water or electrolyte beverages). <b>This means drinks through which you can see \u2013 no juice and no ginger ale.</b><br /><br /> If you are not diabetic, you should carbohydrate load with 50 grams of sugar the night before your surgery and then again with 50 gram of sugar 2 to 3 hours before your procedure (Gatorade, GlucoCrushTM, or glucose tablets can be used for this). If you have diabetes, you should follow the instructions of your surgeons, primary care provider, or endocrinologist. You will receive these dietary instructions from your surgeon\u2019s office weeks before your surgery. Generally, a nurse will call you the day before your operation to confirm what you can eat that evening. <br /><br />If you break these rules regarding your preoperative diet, you potentially place your health and safety at serious risk and your surgery will be cancelled.</li>\n<li><b><u>Medications.</u></b> You should take the medications that your surgeon has instructed you to take with small amounts of water at the approved times.</li></ul>",
                show: false,
                disabled: false,
                selected: false
            },
            {
                title: 'Morning of surgery',
                description: "<ul>\n        <li><b>Smoking: </b>\n        DO NOT SMOKE ON THE DAY OF YOUR SURGERY. </li>\n        <li><b>Shower.</b> <br />\n        Take your second shower with the preoperative surgical soap. Do not place anything else on your skin.</li>\n        <li><b>Medications.</b> Bring a list of your current medications (with their dosages and frequency), CPAP or BiPAP machines if applicable, and any inhalers you use. There is no need to bring any medications. Also, be sure to bring your insurance card and a valid form of identification if you were told to do so.</li>\n        <li>Clothing & other wearables You should wear loose and comfortable clothing that is easy to take off. This is the clothing you will wear when you leave the hospital. You will be changing into a hospital gown soon after you arrive.<br /><br /> You eventually have to remove contact lenses/glasses, hearing aids, dentures, hair accessories, and any piercings. Therefore, either leave these items at home or bring appropriate storage material. Most hospitals have a safe place to keep these items during your operation.<br /><br /> Do not wear make-up or nail polish.\n\n    </ul>",
                show: false,
                disabled: false,
                selected: false
            },
            {
                title: "Be Calm and Relax: It’s OK.",
                description: "<p>We encourage you to remain calm. Surgery is a\nstressful event for every patient, but you are in\ncapable hands and will be well taken care of by\nyour surgical team, anesthesia team, and the\nnursing staff.\n  <ul><li>\n      <b>Arrive at the hospital</b> when your surgeon\u2019s office instructed you to be there.\n   </li></ul>\n</p>",
                show: false,
                disabled: false,
                selected: false
            }, {
                title: "Ready!",
                description: "<p>If you've followed all the rules, confirm with hospital you are ready.</p>",
                show: false,
                disabled: false,
                selected: false
            },
            {
                title: "Not ready!",
                description: "<p>If did NOT follow the rules, or something happened, cancel your procedure.</p>",
                show: false,
                disabled: false,
                selected: false
            }];
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
        this.platform = localStorage.getItem('platform');
        this.className = 'contentwrap';
        this.hideDayBefore = true;
        this.navClassName = 'na';
        if (this.platform != 'mobileweb') {
            this.platform = 'web';
            this.toggleNav();
        }
        else {
            this.className = ' ';
        }
    }
    PreprocedurePage_1 = PreprocedurePage;
    PreprocedurePage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(HomePage);
    };
    PreprocedurePage.prototype.toggleNav = function () {
        if (this.navClassName == 'na') {
            this.navClassName = 'opennav';
        }
        else if (this.navClassName == 'opennav') {
            this.navClassName = 'na';
        }
    };
    PreprocedurePage.prototype.ionViewDidEnter = function () {
        googleAnalytics('preprocedure');
    };
    PreprocedurePage.prototype.ionViewDidLoad = function () {
        if (localStorage.getItem('dayBefore') != null) {
            var dayBefore = JSON.parse(localStorage.getItem('dayBefore'));
            for (var i = 0; i < dayBefore.length; i++) {
                this.preProceduresDayBeforeItems[dayBefore[i]].selected = true;
            }
        }
        if (localStorage.getItem('weekBefore') != null) {
            var weekBefore = JSON.parse(localStorage.getItem('weekBefore'));
            for (var k = 0; k < weekBefore.length; k++) {
                this.preProceduresweekBeforeItems[weekBefore[k]].selected = true;
            }
        }
    };
    PreprocedurePage.prototype.ionViewWillLeave = function () {
        var dayBefore = [];
        var weekBefore = [];
        for (var i = 0; i < this.preProceduresweekBeforeItems.length; i++) {
            if (this.preProceduresweekBeforeItems[i].selected === true)
                weekBefore.push(i);
        }
        localStorage.setItem('weekBefore', JSON.stringify(weekBefore));
        for (var l = 0; l < this.preProceduresDayBeforeItems.length; l++) {
            if (this.preProceduresDayBeforeItems[l].selected === true)
                dayBefore.push(l);
        }
        localStorage.setItem('dayBefore', JSON.stringify(dayBefore));
    };
    PreprocedurePage.prototype.validate = function () {
        var selectedAll = true;
        for (var i = 0; i < this.preProceduresweekBeforeItems.length; i++) {
            if (this.preProceduresweekBeforeItems[i]['selected'] === false) {
                // let alert = this.alertCtrl.create({
                //   subTitle: 'Be sure to complete your checklist so the hospital team knows you are ready!',
                //   buttons: ['Ok'],
                //   mode:'ios'
                // });
                this.preProcedures = 'week-before';
                this.isActiveDayBefore = true;
                selectedAll = false;
                // alert.present();
                break;
            }
        }
        if (selectedAll === true) {
            this.isActiveDayBefore = false;
        }
    };
    PreprocedurePage.prototype.segmentChanged = function (id) {
        var thisObj = this;
        var selectedAll = true;
        if (id == 2) {
            for (var i = 0; i < this.preProceduresweekBeforeItems.length; i++) {
                if (this.preProceduresweekBeforeItems[i]['selected'] === false) {
                    var alert_1 = this.alertCtrl.create({
                        subTitle: 'Be sure to complete your checklist so the hospital team knows you are ready!',
                        buttons: [{
                                text: 'Back',
                                handler: function () {
                                    thisObj.preProcedures = 'week-before';
                                    thisObj.hideDayBefore = true;
                                }
                            }, {
                                text: 'Ok',
                                handler: function () {
                                    for (var i = 0; i < thisObj.preProceduresweekBeforeItems.length; i++) {
                                        thisObj.preProceduresweekBeforeItems[i].show = false;
                                        // thisObj.preProceduresweekBeforeItems[i].selected = false;
                                    }
                                    thisObj.preProcedures = 'day-before';
                                    thisObj.hideDayBefore = false;
                                }
                            }],
                        mode: 'ios'
                    });
                    selectedAll = false;
                    alert_1.present();
                    break;
                }
            }
        }
        // if(selectedAll === true) {
        if (id == 1) {
            this.hideDayBefore = true;
            for (var k = 0; k < thisObj.preProceduresDayBeforeItems.length; k++) {
                thisObj.preProceduresDayBeforeItems[k].show = false;
                // thisObj.preProceduresDayBeforeItems[i].selected = false;
            }
        }
        if (id == 2 && selectedAll == false) {
            this.hideDayBefore = true;
        }
        if (id == 2 && selectedAll == true) {
            this.hideDayBefore = false;
            this.preProcedures = 'day-before';
        }
    };
    PreprocedurePage.prototype.validateDayBeforeItems = function () {
        var selectedAll = true;
        for (var i = 0; i < this.preProceduresDayBeforeItems.length - 2; i++) {
            if (this.preProceduresDayBeforeItems[i]['selected'] === false) {
                selectedAll = false;
                if (this.preProceduresDayBeforeItems.length > 5 && this.preProceduresDayBeforeItems[6]['selected'] === false) {
                }
                break;
            }
        }
        if (selectedAll === true) {
        }
    };
    PreprocedurePage.prototype.selectItems = function (id) {
        if (this.preProceduresweekBeforeItems[id]['selected'] === false) {
            this.preProceduresweekBeforeItems[id]['selected'] = true;
            this.validate();
        }
        else {
            this.preProceduresweekBeforeItems[id]['selected'] = false;
            this.validate();
        }
    };
    PreprocedurePage.prototype.selectItemsOfDaysBefore = function (id) {
        var _this = this;
        if (id != 5 && id != 6) {
            if (this.preProceduresDayBeforeItems[id].selected == false) {
                this.preProceduresDayBeforeItems[id].selected = true;
            }
            else {
                this.preProceduresDayBeforeItems[id].selected = true;
            }
        }
        var selected = true;
        for (var i = 0; i < this.preProceduresDayBeforeItems.length - 2; i++) {
            if (this.preProceduresDayBeforeItems[i].selected == false) {
                selected = false;
            }
        }
        if (selected == false && id == 5) {
            if (this.preProceduresDayBeforeItems[5].selected == false) {
                this.preProceduresDayBeforeItems[5].selected = true;
                var alert_2 = this.alertCtrl.create({
                    title: '',
                    subTitle: 'You need to check all above checkboxes',
                    mode: 'ios',
                    buttons: [{ text: 'Ok', handler: function () {
                                // this.swipeLeft()
                                _this.preProceduresDayBeforeItems[5].selected = false;
                            } }, { text: 'Cancel', handler: function () {
                                _this.preProceduresDayBeforeItems[5].selected = false;
                            } }],
                });
                alert_2.present();
            }
            else {
                this.preProceduresDayBeforeItems[5].selected = false;
            }
        }
        if (selected == false && id == 6) {
            if (this.preProceduresDayBeforeItems[6].selected == false) {
                this.preProceduresDayBeforeItems[6].selected = true;
                var alert_3 = this.alertCtrl.create({
                    title: 'Are you sure you need to cancel?',
                    subTitle: 'Please contact your surgeon’s office <img src="assets/imgs/telephone.svg" class="inline-icon"> <a href="tel:857-971-5065">PHYSICIAN’S OFFICE</a>',
                    mode: 'ios',
                    buttons: [{ text: 'Ok', handler: function () {
                                // this.swipeLeft()
                                // this.pre
                                _this.preProceduresDayBeforeItems[6].selected = false;
                            } }, { text: 'Cancel', handler: function () {
                                _this.preProceduresDayBeforeItems[6].selected = false;
                            } }],
                });
                alert_3.present();
            }
            else {
                this.preProceduresDayBeforeItems[6].selected = false;
            }
        }
        if (selected == true) {
            if (id == 5) {
                var alert_4 = this.alertCtrl.create({
                    title: 'Congrats, you are good to go!',
                    subTitle: 'A message will be sent to the team at the hospital to confirm you are ready for your procedures',
                    mode: 'ios',
                    buttons: [{ text: 'Ok', handler: function () {
                                _this.swipeLeft();
                            } }, { text: 'Cancel' }],
                });
                alert_4.present();
            }
            if (id == 6) {
                var alert_5 = this.alertCtrl.create({
                    title: 'Are you sure you need to cancel?',
                    subTitle: 'A member of the hospital team will contact you shortly to confirm your decision and reschedule the procedure.',
                    mode: 'ios',
                    buttons: [{ text: 'Ok', handler: function () {
                                _this.swipeLeft();
                            } }, { text: 'Cancel' }],
                });
                alert_5.present();
            }
        }
    };
    PreprocedurePage.prototype.activateItem = function (id) {
        for (var i = 0; i < this.preProceduresweekBeforeItems.length; i++) {
            if (id === i) {
                if (this.preProceduresweekBeforeItems[id]['show'] === false) {
                    this.preProceduresweekBeforeItems[id]['show'] = true;
                }
                else {
                    this.preProceduresweekBeforeItems[id]['show'] = false;
                }
            }
            else {
                this.preProceduresweekBeforeItems[i]['show'] = false;
            }
        }
    };
    PreprocedurePage.prototype.activateItemOfDaysBefore = function (id) {
        for (var i = 0; i < this.preProceduresDayBeforeItems.length; i++) {
            if (id === i) {
                if (this.preProceduresDayBeforeItems[id]['show'] === false) {
                    this.preProceduresDayBeforeItems[id]['show'] = true;
                }
                else {
                    this.preProceduresDayBeforeItems[id]['show'] = false;
                }
            }
            else {
                this.preProceduresDayBeforeItems[i]['show'] = false;
            }
        }
    };
    PreprocedurePage.prototype.getHtmlContent = function (index) {
        return this.preProceduresweekBeforeItems[index]['description'];
    };
    PreprocedurePage.prototype.getHtmlContentOfDaysBefore = function (index) {
        return this.preProceduresDayBeforeItems[index]['description'];
    };
    PreprocedurePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    PreprocedurePage.prototype.goToProcedurePage = function () {
        this.navCtrl.push(ProcedurePage);
    };
    PreprocedurePage.prototype.gotToPreProcedure = function () {
        this.navCtrl.push(PreprocedurePage_1);
    };
    PreprocedurePage.prototype.gotToDuringProcedurePage = function () {
        this.navCtrl.push(DuringprocedurePage);
    };
    PreprocedurePage.prototype.goToRecoverPage = function () {
        this.navCtrl.push(RecoveryPage);
    };
    PreprocedurePage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(PostprocedurePage);
    };
    PreprocedurePage.prototype.goToWhatIfPage = function () {
        this.navCtrl.push(WhattodoifPage);
    };
    PreprocedurePage.prototype.goToPeoplePage = function () {
        this.navCtrl.push(PeoplePage);
    };
    PreprocedurePage.prototype.gotToSuccessPage = function () {
        this.navCtrl.push(SuccessPage);
    };
    PreprocedurePage.prototype.swipeEvent = function (event) {
        if (event.direction === 2) {
            this.swipeLeft();
        }
        else if (event.direction === 4) {
            this.swipeRight();
        }
    };
    PreprocedurePage.prototype.swipeLeft = function () {
        this.pageTop.scrollToTop(0);
        if (this.preProcedures == 'week-before') {
            this.segmentChanged(2);
        }
        else if (this.preProcedures == 'day-before') {
            this.navCtrl.push(DuringprocedurePage);
        }
    };
    PreprocedurePage.prototype.swipeRight = function () {
        this.pageTop.scrollToTop(0);
        if (this.preProcedures == 'day-before') {
            this.preProcedures = 'week-before';
            this.hideDayBefore = true;
        }
        else if (this.preProcedures == 'week-before') {
            this.navCtrl.push(ProcedurePage);
        }
    };
    PreprocedurePage.prototype.getVerification = function (items) {
        var itemsLength = items.length - 2;
        for (var i = 0; i < itemsLength; i++) {
            if (items[i].selected == false) {
                return false;
            }
        }
        return true;
    };
    PreprocedurePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            subTitle: 'Be sure to complete your checklist so that hospital team knows you are ready!',
            mode: 'ios',
            buttons: ['Ok']
        });
        alert.present();
    };
    PreprocedurePage.prototype.presentSuccess = function () {
        var alert = this.alertCtrl.create({
            title: 'Congrats, you are good to go!',
            subTitle: 'A message will be sent to the team at the hospital to confirm you are ready for your procedures',
            mode: 'ios',
            buttons: [{ text: 'Ok' }, { text: 'Cancel' }],
        });
        alert.present();
    };
    var PreprocedurePage_1;
    __decorate([
        ViewChild('pageTop'),
        __metadata("design:type", Content)
    ], PreprocedurePage.prototype, "pageTop", void 0);
    PreprocedurePage = PreprocedurePage_1 = __decorate([
        IonicPage(),
        Component({
            selector: 'page-preprocedure',
            templateUrl: 'preprocedure.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AlertController])
    ], PreprocedurePage);
    return PreprocedurePage;
}());
export { PreprocedurePage };
// }
// }
//# sourceMappingURL=preprocedure.js.map