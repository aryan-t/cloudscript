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
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { HttpproviderProvider } from '../../providers/httpprovider/httpprovider';
import { googleAnalytics } from '../../assets/gtag';
/**
 * Generated class for the WhattodoifPage page.
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
import { SuccessPage } from '../success/success';
import { HomePage } from '../home/home';
import { PeoplePage } from '../people/people';
// import { AboutprocedurePage } from '../aboutprocedure/aboutprocedure';
var WhattodoifPage = /** @class */ (function () {
    function WhattodoifPage(navCtrl, navParams, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.tab1Root = RecoveryPage;
        this.tab2Root = PreprocedurePage;
        this.tab3Root = DuringprocedurePage;
        this.tabs = [];
        this.index = 1;
        this.platform = localStorage.getItem('platform');
        this.className = 'contentwrap';
        this.phone_office = '<img src="assets/imgs/telephone.svg" class="inline-icon"> <a href="tel:617-667-2845">';
        this.phone_oncall = '<img src="assets/imgs/telephone.svg" class="inline-icon"> <a href="tel:617-632-8611">';
        this.email = '<a href="mailto:WLS@BIDMC.Harvard.edu">';
        this.whatToDoIfNormalSideAffects = [{
                title: '<strong>Depression/anxiety (mild)</strong><p><i>It is normal to experience an array of emotions after your surgery.</i></p>',
                description: "<p>Please do not feel ashamed discussing this with your loved ones (support group) and the healthcare professionals treating you. They will be able to help you and make sure you are given the appropriate treatment. <br /><br />\n\t\tIf you feel you are at risk of hurting yourself or others, please seek immediate medical attention by either going to your local Emergency Department or calling 911 (See Depression/anxiety (severe)).</p>",
                show: false,
            }, {
                title: '<strong>Pain</strong><p><i>It is normal to experience pain after surgery.</i></p>',
                description: "<p>You will likely have pain around your incision sites, joint pain with movement, and general dull pain coming from your belly. Your pain should lessen each day as you recover and should be adequately controlled, either with your prescription opioid pain medication or non-opioid pain medication. It is important to understand that pain medication will help alleviate pain, but it will not make you pain free. <br /><br />\n\t\tAlthough you will likely be given prescriptions for both opioid and non-opioid pain medications, we strongly encourage you to refrain from using opioid medications if this is possible. Additionally, if you are taking opioid pain medications, we urge you to weak off of them as soon as possible. Always start with non-opioid medications, such as liquid, sugar-free acetaminophen, before taking opioid pain medication. <br /><br />\nTake your pain medication as prescribed by your attending surgeon Do not increase the frequency of your doses or the amount you take for any one dose. Additionally, you should only take pain medication <i>if you are experiencing pain.</i><br /><br />\nIf you find yourself without much pain but still have prescription pain medication remaining, do not feel obligated to finish your prescription. In fact, we encourage you not to use this medication if you do not feel you need it.<br /><br />\n<i>Please do not take prescription or non-prescription pain medication or combinations of them that has not been approved by your surgeon.</i>\nIf your pain becomes severe or changes in quality, either contact your surgeon or call 911 or go to your local/nearest Emergency Department depending on how you feel.<br /><br />\n\n\t\t</p>",
                show: false,
            },
            {
                title: '<strong>Incision symptoms (other than pain)</strong><p><i>Normal to be slightly red around the edges.</i></p>',
                description: "<p>Your incision will feel somewhat firm along its edges. This redness and firmness will go away over time. It is also normal for a small amount of clear or red-tinged fluid to come from your wound. This should decrease over time.</p>",
                show: false,
            },
            {
                title: '<strong>Fatigue/weakness/grogginess</strong><p><i>Surgeries are significant so it takes a while to recover.</i></p>',
                description: "<p>Even minimally invasive surgery is draining on your body. It is normal to feel weak and fatigued after surgery. It often takes 2 weeks to return to your normal baseline function, but some patients may require up to 6 weeks before they start feeling like themselves.<br /><br />\n\t\tOpioid pain medications and general anesthesia have a lasting effect on our cognitive processes and on our awareness. These effects can often take a while to subside until these medications are slowly eliminated from our bodies.<br /><br />\n\t\tPlease do not drive if you have had opioid pain medication within the last 24 hours.</p>",
                show: false,
            },
            {
                title: '<strong>Constipation/bloating</strong><p><i>there are remedies.</i></p>',
                description: "<p>Opioid pain medications and general anesthesia slow down our intestines. Therefore, it is normal for you to have trouble passing gas or having a bowel movement. Adequate hydration and walking are two easy options to help fix this. However, taking laxatives (e.g. milk of magnesia, magnesium citrate, polyethylene glycol, docusate sodium, or mineral oil) is the most effective solution to preventing and treating constipation. Suppositories or enemas are other options. <br /></p>",
                show: false,
            },
            {
                title: "<strong>Bloating</strong><p><i>is often a consequence of the constipation that patients experience.</i></p>",
                description: "<p>This is\ncaused by a combination of opioid pain\nmedication, general anesthesia, and the surgery\nitself. You may also feel a sensation of being\nbloated because you still have carbon dioxide in\nyour belly from your procedure. This carbon\ndioxide will disappear with time and, typically, your\nbloating will go away as you start to have bowel\nmovements.</p>",
                show: false,
            }, {
                title: "<strong>Right shoulder pain</strong><p><i> a normal consequence of the gas pumped into your body.</i></p>",
                description: "<p>This is normal - a consequence of the carbon\ndioxide that was pumped into your belly for the\nprocedure. This pain will disappear on its own but\nwalking will hasten this process.</p>",
                show: false,
            }, {
                title: "<strong>Sore throat</strong> <p><i>caused by the breathing tube.</i></p>",
                description: "<p>This is likely a result of the breathing tube that\nwas placed down your throat during surgery. This\npain will go away with time, but lozenges can be\nused to alleviate this soreness.</p>",
                show: false,
            }, {
                title: "<strong>Fever</strong><p><i> your body’s way of healing</i></p>",
                description: "<p>A low-grade fever (between 100-102F / 38-39C)\nduring your first two days home is normal. This is\nyour body\u2019s reaction to the surgery and to general\nanesthesia. It could also be due to other\nmedications or any administered blood products.<br /><br />\nFever that is persistent, or associated with pain or\nother symptoms, could indicate infection or\nanother type of disease state. See Symptoms\nsection for solutions.</p>",
                show: false,
            }, {
                title: "<strong>Nausea/vomiting</strong><p><i>common after surgery.</i></p>",
                description: "<p>For a short time this is common. This can be due\nto either the anesthetic agents or opioid pain\nmedication that were giving to you.</p>",
                show: false,
            }];
        this.symptoms = [
            {
                title: 'Any concerning symptoms ',
                description: "<p>You know your body than anyone else. If you ever feel that something is just not right, contact your surgeon " + this.email + "E-MAIL</a></p>",
                show: false,
            },
            {
                title: 'Arm Pain ',
                description: "<p>See Heart</p>",
                show: false,
            },
            {
                title: 'Bloating/gas - excessive',
                description: "<p>If you have excessive bloating or gas, please\ncontact your surgeon " + this.email + "E-MAIL</a></p>",
                show: false,
            },
            {
                title: 'Bleeding',
                description: "<p>See Incisional changes</p>",
                show: false,
            },
            {
                title: 'Breath - Shortness',
                description: "<p>If you suddenly have difficulty breathing while at\nrest or while walking, you may have a blood clot\nthat traveled to your lungs. One of your legs may\nalso be swollen and, perhaps, tender to touch and\nin pain when you use it. Call 911 or go to the\nemergency department.</p>",
                show: false,
            },
            {
                title: "Bruising ",
                description: "<p>See Incisional changes</p>",
                show: false,
            }, {
                title: "Chest pain",
                description: "<p>See Heart</p>",
                show: false,
            }, {
                title: "Constipation",
                description: "<p>Constipation is a normal result from this surgery.\nIf you can tolerate the pain, decrease the opioid\npain medication you are taking. You can also\nincrease the frequency with which you walk and\nincrease your water intake. You can also try\ndrinking 2 ounces of prune juice mixed with water.<br /><br />\nBut, if you have not had a bowel movement for\nfour days, please contact your surgeon " + this.email + "E-MAIL</a>. Do not take a suppository or enema\nwithout first discussing this with your surgeon.</p>",
                show: false,
            }, {
                title: "Depression/anxiety",
                description: "<p>If you are feeling overwhelming anxiety or\nsadness and feel as though your life is not worth\nliving, please call 911 or go to your local\nemergency department.</p>",
                show: false,
            }, {
                title: "Dizziness/lightheadedness",
                description: "<p>A dehydration problem. If you become dizzy\nwhen you stand up or your mouth is dry, this is\nmost likely due to inadequate hydration. 10\nglasses of water each day, please.</p><p><br />But if you think you are adequately hydrated and\nare still dizzy, or you are having low urine output,\nlet your surgeon know " + this.email + "E-MAIL</a></p>",
                show: false,
            }, {
                title: "Diarrhea/urgency",
                description: "<p>If you have frequent loose stools then you should\nincrease your water intake to replace the water\nvolume you have been losing. Typically this will\nresolve in one or two days.</p><p><br />\nBut, if this persists or if you feel lightheaded or\ndizzy when you sit up, you should contact your\nsurgeon " + this.email + "E-MAIL</a>. Do not take medication to\ntreat your diarrhea without first consulting with\nyour surgeon.</p>",
                show: false,
            }, {
                title: "Fatigue/weakness",
                description: "<p>Any type of surgery, including minimally invasive\nsurgery, is draining on your body. It is normal to\nfeel weak and fatigued after surgery. It often takes\npatients 2 weeks to return to their normal baseline\nfunction, but some patients may require up to 6\nweeks before they start feeling like themselves.<br /><br />\nBut, if your fatigue does not seem to be improving,\nyou should make sure you are giving yourself\nadequate hydration, food and nutrients, and sleep.\nIf this doesn\u2019t work then let your surgeon know\nabout this problem " + this.email + "E-MAIL</a></p>",
                show: false,
            }, {
                title: "Fever/chills",
                description: "<p>Mild fever after surgery is normal. But, if\ntemperatures exceed 101\u00B0F or 38.3\u00B0C after 2 days\nafter surgery, and remain high, it is likely that you\nhave an infection. Chills are also indicative of\ninfection. You should contact your surgeon " + this.phone_oncall + "On-CALL PHYSICIAN</a> or go to your emergency department.</p>",
                show: false,
            }, {
                title: "Haziness/grogginess",
                description: "<p><b>Normal.</b> Opioid pain medications and general\nanesthesia having medium-term effects on your\ncognitive processes and awareness. These\neffects can often take days to weeks to subside as\nthese medications are slowly eliminated from our\nbodies. Please do not drive if you have had opioid\npain medication within the last 24 hours.</p>",
                show: false,
            }, {
                title: "Headache - Light to Moderate",
                description: "<p>Most likely a <b>normal</b> dehydration problem. You\nshould stay adequately hydrated and urinate clear\nyellow urine <b>at least</b> four times each day after\nyour procedure. You should try to consume more\nwater (10 glasses of water each day) before\ncontacting your surgeon.</p>",
                show: false,
            }, {
                title: "Headache - Severe",
                description: "<p>If you have a severe headache \u2013 like no other\nheadache that you ever had - or dizziness, you\nshould call 911 or go to your emergency\ndepartment.</p>",
                show: false,
            }, {
                title: "Heart rhythm - Irregular",
                description: "<p>If you feel as though your heart is beating funny,\nthis could indicate that you are experiencing an\narrhythmia. If you do not have a history of\narrhythmia and this is a new symptom for you, call\n911 or go to your emergency department.</p>",
                show: false,
            }, {
                title: "Heart",
                description: "\n\t\t<p>Let\u2019s decide if your symptoms indicate a heart\n\t\tissue or not. Be calm and look at this list. But if\n\t\tyou feel very nervous, then dial 911 or go to the\n\t\tEmergency department.</p>\n\t\t<ul>\n\t\t\t<li>\n\t\t\t\t<b>Symptoms of Probable Heart attack</b><br>\n\t\t\t\tIf you HAVE ANY the following symptoms call 911 or go to Emergency.\n\t\t\t\t<ul>\n\t\t\t\t\t<li> Chest pain (persistent or comes and goes)</li>\n\t\t\t\t\t<li>Fullness/pressure (\u201Celephant sitting on my chest\u201D)/squeezing-sensation in chest</li>\n\t\t\t\t\t<li> Shortness of breath</li>\n\t\t\t\t\t<li> Irregular or unusual heart rhythm</li>\n\t\t\t\t\t<li> Dizziness/lightheadedness/fainting</li>\n\t\t\t\t\t<li>Sweating - significant</li>\n\t\t\t\t</ul>\n\t\t\t\t<br>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<b>Shoulder Pain</b><br>\n\t\t\t\tIf you <b>ALSO</b> HAVE ANY of the following symptoms then call 911 or go to Emergency. If you do NOT have these, see <b>Shoulder Pain.</b>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Chest pain (persistent or comes and goes)</li>\n\t\t\t\t\t<li>Fullness/pressure (\u201Celephant sitting on my chest\u201D)/squeezing-sensation in chest</li>\n\t\t\t\t\t<li>Shortness of breath</li>\n\t\t\t\t\t<li>Irregular or unusual heart rhythm</li>\n\t\t\t\t\t<li>Dizziness/lightheadedness/fainting</li>\n\t\t\t\t\t<li>Sweating significant</li>\n\t\t\t\t</ul>\n\t\t\t\t<br>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<b>Chest pain (persistent or comes and goes)</b><br>\n\t\t\t\tCall 911 or go to Emergency.\n\t\t\t\t<br><br>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<b>Chest fullness or pressure - squeezing-sensation in chest (persistent or comes and goes).</b><br>\n\t\t\t\tCall 911 or go to Emergency.\n\t\t\t\t<br><br>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<b>Pain in other areas (jaw, back, upper belly,neck, or arms) (persistent or comes and goes)</b><br>\n\t\t\t\tIf you <b>ALSO</b> HAVE ANY of the following symptoms then call 911 or go to Emergency. If you do NOT have these, see <b>Pain.</b>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Chest pain (persistent or comes and goes) -&gt; most common symptom</li>\n\t\t\t\t\t<li>Fullness/pressure (\u201Celephant sitting on my chest\u201D)/squeezing-sensation in chest (persistent or comes and goes)</li>\n\t\t\t\t\t<li>Shortness of breath (even without chest pain)</li>\n\t\t\t\t\t<li>Irregular or unusual heart rhythm</li>\n\t\t\t\t\t<li>Dizziness/lightheadedness/fainting</li>\n\t\t\t\t\t<li>Sweating significant</li>\n\t\t\t\t</ul>\n\t\t\t\t<br>\n\t\t\t</li>\n\t\t</ul>\n\t\t",
                show: false,
            }, {
                title: "Heartburn - persistent",
                description: "<p>If you are experiencing new heartburn-like pain\nbut your pain is not going away with antacids, call\n911. If they think you are having a heart attack,\nyou should take 325 mg of aspirin.</p>",
                show: false,
            }, {
                title: "Incisional changes",
                description: "<p><ul><li>It is <b>normal</b> for your incisions to be slightly red\naround their edges and around their sutures or\nstaples. But, if this <b>redness starts to spread</b>\nor you notice <b>swelling</b>, you may have an\ninfection. Other color changes may also\nindicate an infection.</li><li>\nIf the <b>drainage</b> from your wound <b>starts to\nsmell foul</b> or has a <b>cloudy or pus-like\nappearance</b>, this could indicate that you have\nan infection at your incision site.</li><li>\nIf any of your incisions start to <b>increase in\npain/tenderness or warmth</b>, this may also\nindicate you have an infection.<br />\nIf any of your incisions start to increase in\nwarmth, this may also indicate you have an\ninfection.\nIf any TWO or more of these symptoms occur,\nOR if you have ONE symptom AND a <b>fever\n(typically greater than 101\u00B0F or 38.3\u00B0C) or\nchills</b>, this increases your chances that you\nhave an infection. Contact your physician\n" + this.phone_oncall + "On-CALL PHYSICIAN</a> or go to your emergency\ndepartment.</li><li>\nIf one or more of your incisions is <b>bleeding</b>\nand producing more than a minimal amount of\nclear or red-tinged drainage. Contact your\nphysician " + this.phone_oncall + "On-CALL PHYSICIAN</a> or go to your\nemergency department.</li></ul></p>",
                show: false,
            }, {
                title: "Leg swelling",
                description: "<p>If there is swelling, tenderness, redness,\nincreased temperature, or pain when you use your\ncalf muscle, you may have a blood clot in one of\nyour legs. These symptoms typically occur in only\none leg, but it is possible for it to occur in both\ncalves. Call 911 or go to the emergency\ndepartment.</p>",
                show: false,
            }, {
                title: "Mouth - Dry",
                description: "<p>A <b>normal</b> dehydration problem. You should stay\nadequately hydrated and urinate clear yellow urine\nat least four times each day after your procedure.\nYou should try to consume more water (10\nglasses of water each day) before contacting your\nsurgeon.</p>",
                show: false,
            }, {
                title: "Nausea/vomiting - persistent",
                description: "<p>If you are unable to keep liquids down or vomit\nmultiple times per day or on back-to-back days,\ncontact your surgeon " + this.phone_oncall + "On-CALL PHYSICIAN</a>. You may\nhave a problem with allowing food to pass.<br /><br />\nBut, if you vomit bright red blood or a dark brown\nsubstance, call 911 or go to your local emergency\ndepartment.</p>",
                show: false,
            }, {
                title: "Pain - adequately relieved with medication",
                description: "<p>Pain will most commonly present at your incision\nsites and in the upper right portion of your belly\nwhere you had your gallbladder removed. This is\n<b>normal</b>. You should take the pain medications\nprescribed by your surgeon. You can also try\nplacing a heating pack on top of the area of your\nbelly that has the most pain.</p>",
                show: false,
            }, {
                title: "Pain - not adequately relieved by medication",
                description: "<p><ul><li>\n\t\tPain is your body\u2019s natural way of telling you\nsomething is wrong and that you need to take\ncare of yourself. So while you should anticipate\nexperiencing some pain after surgery, you\nshould not ignore changes in your pain or an\nincrease in its intensity over time.\n</li><li>If your pain is new and severe or sharp in\nnature (or has recently changed in quality),\ngetting worse in severity, and lasting several\nhours, you should contact your surgeon " + this.phone_office + "PHYSICIAN\u2019S OFFICE</a>. If your pain is associated with a fever\n(over 101\u00B0F or 38.3\u00B0C), you should also contact\nyour surgeon " + this.phone_oncall + "On-CALL PHYSICIAN</a>.</li><li>\nIf you have pain and feel as though you have a\n<b>rigid abdomen</b> and <b>cannot tolerate any\nmovement.</b> You should call 911 or go to the\nemergency department. Also, if you feel as\nthough you <b>belly is swelling</b>, you should call\n911 or go to the emergency department.</li></ul></p>",
                show: false,
            }, {
                title: "Pus",
                description: "<p>If you see pus at any of your incision sites, this\nmeans that you have a surgical site infection. You\nshould contact your surgeon so you can be\nexamined. Your incision may need to be cleaned\nor you may need antibiotics. Rarely, you will need\nto go into the operating room for reoperation. Click\n" + this.phone_office + "PHYSICIAN\u2019S OFFICE</a></p>",
                show: false,
            }, {
                title: "Shoulder pain - Right",
                description: "<p>Right shoulder pain is <b>normal</b> after laparoscopic\nsurgery. This is a consequence of the carbon\ndioxide that was pumped into your belly for the\nprocedure. This pain should disappear on its own- walking will hasten this process.<br />\nPlease tell your surgeon " + this.email + "E-MAIL</a> if you feel\nas though this pain is caused by something else\nor if your pain is getting worse.<br />\nIf your right shoulder pain is accompanied by\nchest pain or other symptoms (strange or fast\nheart rhythm, nausea/vomiting, pain in other areas\n[jaw, back, stomach, neck, or arms], difficulty\nbreathing, lightheadedness, or sweating), you may\nbe having a heart attack. If you think you are\nhaving a heart attack, you should take 325 mg of\naspirin and call 911 or go to your emergency\ndepartment.</p>",
                show: false,
            }, {
                title: "Stomach pain - Severe",
                description: "<p>Pain will most commonly present at the incision\nsites. There will also often be pain in the right\nupper portion of the abdomen. This is <b>normal.\nBut</b>, if pain seems severe or if is associated with\nsigns or symptoms of infection (fever, chills, or\npus), you should contact " + this.email + "E-MAIL</a> your\nsurgeon.</p>",
                show: false,
            }, {
                title: "Temperature over 103°F/39°C",
                description: "<p>A <b>mild</b> fever after surgery is normal. But if this\n<b>high</b> fever condition continues for more than 24\nhours click " + this.phone_oncall + "On-CALL PHYSICIAN</a> for physician on call.</p>",
                show: false,
            }, {
                title: "Throat - Sore",
                description: "<p>Sometimes patients complain of throat discomfort\nafter surgery. This is <b>normal</b> and likely a result of\nthe breathing tube that was placed down your\nthroat during surgery. This pain will go away with\ntime, but lozenges can be used to alleviate this\npain.</p>",
                show: false,
            }, {
                title: "Urine - Dark",
                description: "<p>A <b>normal</b> dehydration problem. You should stay\nadequately hydrated and urinate clear or slightly\nyellow urine at least four times each day after your\nprocedure. If your urine gets darker in color or if\nyou find yourself urinating less or in smaller\nvolumes, you should try to consume more water\n(10 glasses of water each day) before contacting\nyour surgeon.</p>",
                show: false,
            }, {
                title: "Urine - Decreased output",
                description: "<p>A <b>normal</b> dehydration problem. If you are\nurinating less or have smaller volumes than usual\nwhen urinating, you may be dehydrated. You\nshould try to consume more water (10 glasses of\nwater each day) before contacting your surgeon.</p>",
                show: false,
            }, {
                title: "Urination – significant changes",
                description: "<p>If you experience burning or pain with urination, or\nnotice any cloudiness in the quality of your urine,\nthis may be a sign that you have a urinary tract\ninfection. Foul smelling urine can also indicate the\nsame thing. You should contact your primary care\nphysician or contact your surgeon " + this.phone_office + "PHYSICIAN\u2019S OFFICE</a>.</p>",
                show: false,
            }, {
                title: "Wound",
                description: "<p>See Incisional Changes</p>",
                show: false,
            }, {
                title: "Yellowing of the skin along with possible pain in the upper belly area",
                description: "<p>This represents liver and, possibly, pancreas\ncomplications.<br /><br />\nOccasionally after laparoscopic cholecystectomy,\npatients can have a retained stone that is stuck in\nthe pathway or duct allowing bile to drain from\nyour liver into your gut. There can also be\nadditional pain in the right upper portion of your\nbelly along with yellowing of the eyes and skin. It\ncan also present with a gnawing upper belly pain\nthat can travel to the back. This pain can also be\nworse with eating. You should immediately\ncontact your surgeon " + this.phone_oncall + "On-CALL PHYSICIAN</a> if you have\nthese symptoms or come to the emergency\ndepartment.</p>",
                show: false,
            }
        ];
        this.whatToDoIfMoreSymptomsOne = [{
                title: 'Temperature over 103°F/39°C',
                description: "<p>A <b>mild</b> fever after surgery is normal. But if this\n<b>high</b> fever condition continues for more than 24\nhours click " + this.phone_oncall + "here</a> for physician on call.</p>",
                show: false,
            },
            {
                title: 'Severe stomach pain',
                description: "<ul><li>Send text message to surgeon on call office <br>OR</li>\n\t\t<li>Tap call button to contact surgeon on call office immediately!</li>\n\t\t</ul>",
                show: false,
            },
            {
                title: 'Bleeding around sutures.',
                description: "<p></p>",
                show: false,
            },
            {
                title: 'Stomach swelling',
                description: "<p></p>",
                show: false,
            },
            {
                title: "Chills",
                description: "<p></p>",
                show: false,
            }];
        this.whatToDoIfMoreSymptomsTwo = [{
                title: 'Yellowing of the skin and white of your eyes',
                description: "<p></p>",
                show: false,
            },
            {
                title: 'Dark urine and pale stools',
                description: "<ul>\n\t\t<li>If temperature is below 96.5\u00B0F/35.8\u00B0C<br> Tap Call button to contact surgeon on call office immediately!</li>\n\t\t<li>If temperature normal, take hot drink, cover up, and relax</li>\n\t\t<li>Check temperature if chills continue</li>\n\t\t</ul>",
                show: false,
            },
            {
                title: 'Feeling blah',
                description: "<p></p>",
                show: false,
            },
            {
                title: 'No bowel moments',
                description: "<p></p>",
                show: false,
            },
            {
                title: 'No heartburn',
                description: "<ul>\n\t\t<li>If temperature is below 96.5\u00B0F/35.8\u00B0C<br> Tap Call button to contact surgeon on call office immediately!</li>\n\t\t<li>If temperature normal, take hot drink, cover up, and relax</li>\n\t\t<li>Check temperature if chills continue</li>\n\t\t</ul>",
                show: false,
            },
            {
                title: "Other",
                description: "<p></p>",
                show: false,
            }];
        this.navClassName = 'na';
        if (this.platform != 'mobileweb') {
            this.platform = 'web';
            this.toggleNav();
        }
        else {
            this.className = ' ';
        }
        this.whatTodoIf = 'normalSideEffects';
    }
    WhattodoifPage_1 = WhattodoifPage;
    /**
     * Method to scroll to top
     */
    WhattodoifPage.prototype.pageScroller = function () {
        //scroll to page top
        this.pageTop.scrollToTop();
    };
    WhattodoifPage.prototype.segmentChanged = function (id) {
        if (id == 2) {
            for (var i = 0; i < this.whatToDoIfNormalSideAffects.length; i++) {
                this.whatToDoIfNormalSideAffects[i].show = false;
            }
            this.pageTop.scrollToTop();
        }
        if (id == 1) {
            for (var k = 0; k < this.symptoms.length; k++) {
                this.symptoms[k].show = false;
            }
        }
    };
    WhattodoifPage.prototype.toggleNav = function () {
        if (this.navClassName == 'na') {
            this.navClassName = 'opennav';
        }
        else if (this.navClassName == 'opennav') {
            this.navClassName = 'na';
        }
    };
    WhattodoifPage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(HomePage);
    };
    WhattodoifPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    WhattodoifPage.prototype.getHtmlContentSymptoms = function (index) {
        return this.symptoms[index]['description'];
    };
    WhattodoifPage.prototype.getHtmlContent = function (index) {
        return this.whatToDoIfMoreSymptomsOne[index]['description'];
    };
    WhattodoifPage.prototype.getHtmlContentOfNormal = function (index) {
        return this.whatToDoIfNormalSideAffects[index]['description'];
    };
    WhattodoifPage.prototype.getHtmlContentOfSymptomsTwo = function (index) {
        return this.whatToDoIfMoreSymptomsTwo[index]['description'];
    };
    WhattodoifPage.prototype.activateItem = function (id) {
        // for(var i=0;i<this.what)
        if (this.whatToDoIfMoreSymptomsOne[id]['show'] === false) {
            this.whatToDoIfMoreSymptomsOne[id]['show'] = true;
        }
        else {
            this.whatToDoIfMoreSymptomsOne[id]['show'] = false;
        }
    };
    WhattodoifPage.prototype.activateItemsymptoms = function (id) {
        for (var i = 0; i < this.symptoms.length; i++) {
            if (id === i) {
                if (this.symptoms[id]['show'] === false) {
                    this.symptoms[id]['show'] = true;
                }
                else {
                    this.symptoms[id]['show'] = false;
                }
            }
            else {
                this.symptoms[i]['show'] = false;
            }
        }
    };
    WhattodoifPage.prototype.activateItemOfNormal = function (id) {
        for (var i = 0; i < this.whatToDoIfNormalSideAffects.length; i++) {
            if (id === i) {
                if (this.whatToDoIfNormalSideAffects[id]['show'] === false) {
                    this.whatToDoIfNormalSideAffects[id]['show'] = true;
                }
                else {
                    this.whatToDoIfNormalSideAffects[id]['show'] = false;
                }
            }
            else {
                this.whatToDoIfNormalSideAffects[i]['show'] = false;
            }
        }
    };
    WhattodoifPage.prototype.activateItemOfSymptomsTwo = function (id) {
        if (this.whatToDoIfMoreSymptomsTwo[id]['show'] === false) {
            this.whatToDoIfMoreSymptomsTwo[id]['show'] = true;
        }
        else {
            this.whatToDoIfMoreSymptomsTwo[id]['show'] = false;
        }
    };
    WhattodoifPage.prototype.ionViewDidEnter = function () {
        googleAnalytics('whattodoif');
    };
    WhattodoifPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WhattodoifPage');
    };
    WhattodoifPage.prototype.getTabs = function () {
        this.tabs = this.httpService.getWhatToDoIfPagesTabs();
    };
    WhattodoifPage.prototype.goToProcedurePage = function () {
        this.navCtrl.push(ProcedurePage);
    };
    WhattodoifPage.prototype.gotToPreProcedure = function () {
        this.navCtrl.push(PreprocedurePage);
    };
    WhattodoifPage.prototype.gotToDuringProcedurePage = function () {
        this.navCtrl.push(DuringprocedurePage);
    };
    WhattodoifPage.prototype.goToRecoverPage = function () {
        this.navCtrl.push(RecoveryPage);
    };
    WhattodoifPage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(PostprocedurePage);
    };
    WhattodoifPage.prototype.goToWhatIfPage = function () {
        this.navCtrl.push(WhattodoifPage_1);
    };
    WhattodoifPage.prototype.goToPeoplePage = function () {
        this.navCtrl.push(PeoplePage);
    };
    WhattodoifPage.prototype.gotToSuccessPage = function () {
        this.navCtrl.push(SuccessPage);
    };
    WhattodoifPage.prototype.showTabs = function (Index) {
        this.index = Index;
    };
    WhattodoifPage.prototype.getContents = function (index) {
        console.log(this.menuContents);
    };
    WhattodoifPage.prototype.swipeEvent = function (event) {
        if (event.direction === 2) {
            this.swipeLeft();
        }
        else if (event.direction === 4) {
            this.swipeRight();
        }
    };
    WhattodoifPage.prototype.swipeLeft = function () {
        if (this.whatTodoIf == 'normalSideEffects') {
            this.whatTodoIf = 'symptoms';
            this.pageTop.scrollToTop(0);
        }
        // else if(this.whatTodoIf == 'moreSymptomsOne') {
        //   this.whatTodoIf = 'moreSymptomsTwo'
        // } 
        // else if(this.whatTodoIf == 'moreSymptomsTwo') {
        //    this.navCtrl.setRoot(SuccessPage)
        // }
        else if (this.whatTodoIf == 'symptoms') {
            this.navCtrl.setRoot(SuccessPage);
        }
    };
    WhattodoifPage.prototype.swipeRight = function () {
        if (this.whatTodoIf == 'normalSideEffects') {
            this.navCtrl.setRoot(PostprocedurePage);
        }
        //  else if(this.whatTodoIf == 'moreSymptomsOne') {
        //  this.whatTodoIf = 'normalSideEffects'
        // }
        //  else if(this.whatTodoIf == 'moreSymptomsTwo') {
        //    this.whatTodoIf = 'moreSymptomsOne';
        // }
        else if (this.whatTodoIf == 'symptoms') {
            this.whatTodoIf = 'normalSideEffects';
            this.pageTop.scrollToTop(0);
        }
    };
    var WhattodoifPage_1;
    __decorate([
        ViewChild('pageTop'),
        __metadata("design:type", Content)
    ], WhattodoifPage.prototype, "pageTop", void 0);
    WhattodoifPage = WhattodoifPage_1 = __decorate([
        IonicPage(),
        Component({
            selector: 'page-whattodoif',
            templateUrl: 'whattodoif.html',
            providers: [HttpproviderProvider]
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HttpproviderProvider])
    ], WhattodoifPage);
    return WhattodoifPage;
}());
export { WhattodoifPage };
//# sourceMappingURL=whattodoif.js.map