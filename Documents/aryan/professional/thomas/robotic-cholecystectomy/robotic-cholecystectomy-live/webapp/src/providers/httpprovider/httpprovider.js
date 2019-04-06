var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the HttpproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpproviderProvider = /** @class */ (function () {
    function HttpproviderProvider(http) {
        this.http = http;
        this.menus = [{ name: 'Normal side effects', index: 0,
                content: [{ title: "Temperature over 103<sup>0</sup>F/39<sup>0</sup>C", desc: "" },
                    { title: "Severe stomach pain", desc: "<ul><li>Send text message to surgeon on call office <br>OR</li><li>Tap Call button to contact surgeon on call office immediately!</li></ul>" }] },
            { name: 'More symptoms 1', index: 1 },
            { name: 'More symptoms 2', index: 2 }];
        this.aboutProcedureList = [
            { title: "Is it too late to prevent it?",
                dropdown: false,
                subcontent: '',
                content: `Yes. If you have symptomatic gallstones, surgery is most likely indicated. Gallstones rarely go away on their own. However, the majority of gallstones actually do not cause pain. This means that most individuals with gallstones do not even know they have them. If it is incidentally discovered that a patient has gallstones, but those gallstones are not causing pain, surgery is not required.<br /><br />
                    Although there are numerous homeopathic/natural remedies that suggest gallstones can be treated without surgery, these have not been proven scientifically. There is medication that can be used to help dissolve gallstones, but this must be taken for the rest of your life, twice a day, in order to be effective.<br /<br />
                    The following patient factors increase the risk: weight (e.g. being overweight or obese), rapid weight loss, physical inactivity, diabetes mellitus, pregnancy, certain medications,* and diet.<br /><br />

                    <i>*Estrogen-containing medications (e.g. hormone replacement therapy and oral contraceptives), thiazide diuretics, ceftriaxone, fibrates, and octreotide</i>
`,
                img: './assets/imgs/gallbladder-disease.jpg' },
            { title: "What will happen if I don’t have this procedure?", dropdown: false, subcontent:'', content: "<p>If you do not have weight loss surgery, you could continue to try to lose weight through non-surgical interventions.&nbsp;&nbsp;However, it is likely that your weight will continue to increase, and you will remain at-risk of either developing new or worsening current disease states associated with obesity (e.g.&nbsp;&nbsp;diabetes, high cholesterol, sleep apnea, etc.).* <br /><br />Before considering foregoing or postponing weight loss surgery, think about whether this has worked for you in the past and have a discussion with your primary care provider about whether this is the right option for you.\u201D <br /><br />*A comprehensive list of the health effects of being overweight or obese can be found online from the Centers for Disease Control and Prevention: <br /><a href=\"https://www.cdc.gov/healthyweight/effects/index.html\">https://www.cdc.gov/healthyweight/effects/index.html</a>.&nbsp;&nbsp;<br /><br />Citation for risks of obesity: <br /><a href=\"https://www.cdc.gov/healthyweight/effects/index.html\">https://www.cdc.gov/healthyweight/effects/index.html</a></p>", img: './assets/imgs/what-happens-if.jpg' },
            { title: "Are there alternative solutions?", dropdown: false, subcontent:'',
                content: "Yes, there are alternative solutions. \n      These come in the form of both non-surgical and surgical interventions. Your surgeon can discuss these options with you. <br /><br />\n      <strong>Combined Non-Surgical & Surgical Alternatives</strong><br /> Combination strategies include, but are not limited to: \n      <ul class=\"marginHeading\">\n      <li>Medical weight management (with a board certified physician)</li>\n      <li> Comprehensive weight loss surgery programs</li>\n      <li>Health coach and exercise physiologist </li>\n      <li> Psychological counseling (i.e. cognitive behavioral therapy, commonly referred to as CBT) </li>\n      </ul>\n      <br /><br /><strong>More Information </strong><br />If you have further questions regarding weight loss surgery, we encourage you to either ask your bariatric surgeon or visit the following internet sites: the American Society of Metabolic and Bariatric Surgery (ASMBS; <a href=\"https://asmbs.org/\" target=\"_blank\">https://asmbs.org/</a>), Obesity Action Coalition (OAC; <a href=\"https://www.obesityaction.org/\" target=\"_blank\">https://www.obesityaction.org/</a>), American Obesity Society (<a href=\"https://www.obesity.org/\" target=\"_blank\">https://www.obesity.org/</a>), or National Institutes of Health (<a href=\"https://medlineplus.gov/weightlosssurgery.html\" target=\"_blank\">https://medlineplus.gov/weightlosssurgery.html</a>).<br /><br />\n      Citation for IGB weight loss in the United States:<br /> <a href=\"https://www.ncbi.nlm.nih.gov/pubmed?term=25868829\" target=\"_blank\">https://www.ncbi.nlm.nih.gov/pubmed?term=25868829</a> <br />\n      Citations for IGB weight loss outside the United States: <br /><a href=\"https://www.ncbi.nlm.nih.gov/pubmed?term=16197790\" target=\"_blank\">https://www.ncbi.nlm.nih.gov/pubmed?term=16197790</a><br />\n       Citation for overall content: <br /><a href=\"https://asmbs.org/patients/bariatric-surgery-procedures\" target=\"_blank\">https://asmbs.org/patients/bariatric-surgery-procedures</a> <br />\n       Citation for surgical number estimates: <br />\n       <a href=\"https://asmbs.org/resources/estimate-of-bariatric-surgery-numbers\" target=\"_blank\">https://asmbs.org/resources/estimate-of-bariatric-surgery-numbers</a> <br />\n       Citation for RYBG weight loss: <br />\n       <a href=\"https://www.ncbi.nlm.nih.gov/pubmed?term=20176512\" target=\"_blank\">https://www.ncbi.nlm.nih.gov/pubmed?term=20176512</a> <br />\n       Citation for SG weight loss: <br />\n       <a href=\"https://www.ncbi.nlm.nih.gov/pubmed?term=27178618\" target=\"_blank\">https://www.ncbi.nlm.nih.gov/pubmed?term=27178618</a><br ?\n        Citation for AGB weight loss: <br />\n        <a href=\"https://www.ncbi.nlm.nih.gov/pubmed?term=23235396\" target=\"_blank\">https://www.ncbi.nlm.nih.gov/pubmed?term=23235396</a><br />\n         Citation for BPD/DS weight loss: <br />\n         <a href=\"https://www.ncbi.nlm.nih.gov/pubmed?term=22987179\" target=\"_blank\">https://www.ncbi.nlm.nih.gov/pubmed?term=22987179</a>\n      ",
                img: './assets/imgs/alternative-solutions.jpg' },
            { title: "Common misconceptions", dropdown: true, subcontent: '',
                content: [
                    {
                        show: false,
                        title: "Weight loss surgery is a cosmetic surgery.",
                        desc: "This is a serious operation to help you achieve better health. In order to be a candidate for this procedure, you must be diagnosed with morbid obesity (BMI > 35). However, BMI requirements that allow insurance coverage can vary. Most surgeons will require a referral from your primary care provider, so it is important that you involve them in your journey towards lasting weight loss."
                    },
                    {
                        show: false,
                        title: "Obesity is my fault.",
                        desc: "Obesity is a complex chronic disease that is influenced by genetic, psychological, and environmental factors. Furthermore, it is associated with numerous medical conditions, including diabetes, heart disease, high blood pressure, stroke, sleep apnea, thirteen different types of cancer, and several mental health issues. Individuals diagnosed with obesity should be encouraged to seek medical attention and not feel shame or guilt about this diagnosis."
                    },
                    {
                        show: false,
                        title: "I am guaranteed to lose weight after weight loss surgery.",
                        desc: "Although weight loss surgery is effective, your success depends on your dedication to adopting your new lifestyle modifications, such as making changes to your diet and eating habits. You also must follow the vitamin and mineral supplementation recommended by your dietitian, adhere to a daily exercise regimen, and follow-up with your bariatric team. In fact, it is important for patients to realize that, although your stomach was markedly reduced during your weight loss surgery, your new smaller stomach can still stretch over time if you over eat or disregard specific diet restrictions (e.g. consuming carbonated or alcoholic beverages). This will effectively negate the purpose of the surgery. If an individual consumes large meals, snacks or \u201Cgrazes\u201D with high frequency, avoids activity/exercise, or consumes unhealthy foods, then they will likely regain weight.<br />\n              <br />Weight loss surgery is just part of the solution to helping you lose weight. Patients who do not follow through with the appropriate lifestyle modifications as recommended by their medical team are at risk of experiencing inadequate weight loss and/or nutritional deficiencies."
                    },
                    {
                        show: false,
                        title: "Vitamins and minerals can serve as substitutes for meals and help me lose weight.",
                        desc: "Vitamin and mineral supplementation serve as essential \u201Csupplements\u201D to a healthy diet after your surgery. They do not replace the healthy foods and meals that you and your registered dietitian have developed together. After undergoing weight loss surgery, vitamin and mineral supplementation will be necessary for the rest of your life as the bariatric surgery increases your risk of developing nutritional deficiencies. These deficiencies can negatively affect your quality of life."
                    },
                ],
                img: './assets/imgs/risk-of-procedure.jpg' },
            { title: "What are the risks of this procedure?", subcontent: "All procedures have risks. When compared to laparoscopic <b>gastric bypass</b>, studies have shown that laparoscopic <b>sleeve</b> gastrectomy has a greater safety profile. But it is less effective in helping patients lose weight and improving comorbidities, such as diabetes. On the other hand, when compared to laparoscopic adjustable gastric banding, laparoscopic sleeve gastrectomy has a weaker safety profile but is more effective in helping patients lose weight and improving other medical issues. <br /><br />Overall, serious risks from laparoscopic sleeve gastrectomy are estimated to occur in 2% of patients. Meanwhile, mortality ranges from <b>0 to 1.2%</b>. The likelihood of experiencing any one of the following complications is dependent upon your individual clinical scenario and the experience of your surgeon.",
                dropdown: true,
                content: [
                    {
                        show: false,
                        title: "List of Surgery Risks",
                        desc: "<ul class=\"marginHeading\">\n\n                <li><b>Leakage</b> from connections and staple lines</li>\n                 <li><b>Stricture</b> within or around the stomach</li>\n                 <li><b>Bleeding</b></li>\n                 <li><b>Acid reflux</b> (i.e. heartburn)</li>\n                 <li><b>Nutritional (vitamin/mineral) deficiencies</b> requiring lifelong monitoring and supplementation.</li>\n                 <li><b>Inadequate weight loss</b> or <b>weight regain</b></li>\n                 <li><b>Dumping syndrome</b>, which describes a collection of symptoms (nausea, vomiting, diarrhea, dizziness/lightheadedness, palpitations, cramps, and sweating) that occurs after eating foods rich in refined sugar</li>\n                  <li>Postoperative complications requiring <b>further surgery or procedures</b></li>\n                  <li><b>Infection</b> (of the staple line, belly, or surgical incision sites)</li>\n                  <li><b>Localized numbness</b> </li>\n                  <li><b>Blood clots</b> in the legs (deep venous thrombosis), liver (portal vein thrombosis), or lungs (pulmonary embolism)</li>\n                   <li><b>Pneumonia</b> </li>\n                   <li><b>Hernia formation</b> at incisions sites</li>\n                   <li><b>Internal hernia</b></li>\n                   <li> <b>Urinary tract infection</b> (if catheter placed to help empty the bladder; unlikely for sleeve gastrectomy unless procedure is revisional)</li>\n                   <li> <b>Complications from general anesthesia or blood product transfusion</b> (infectious disease transmission, sepsis, breathing failure, shock, red blood cell destruction, fever, chills, allergic reactions, chest pain, heart failure, dark urine, death)</li>\n                   <li><b>Drug and/or allergic reactions</b></li>\n                   <li><b>Dehydration</b></li>\n                   <li><b>Complications specific to pregnant patients</b> (risk of abortion and low birth weight if pregnancy occurs during rapid weight loss phase)</li>\n                   <li><b>Scarring</b> </li>\n                   <li><b>Damage</b> to the bowel with possible <b>perforation</b> and leakage of contents into the belly</li>\n                   <li> Injury to nearby blood vessels or liver with subsequent <b>bleeding</b></li>\n                   <li><b> Brain damage</b></li>\n                    <li><b>Death</b></li>\n              </ul>"
                    },
                    {
                        show: false,
                        title: "Risk of Weight Loss",
                        desc: "\n\n              There are also risks associated with the loss of weight. These include:\n              <ul class=\"marginHeading\">\n                <li><b>Gallstones</b></li>\n                <li><b>Nutritional deficiencies</b> and their individual respective sequelae (e.g. anemia and osteoporosis)</li>\n                <li><b>Muscle loss</b></li>\n                <li><b>Decreased metabolism</b></li>\n                <li><b>Excess skin</b> and its sequelae (e.g. rashes, ulcers, and infections)</li>\n                <li><b>Hair loss and/or thinning</b></li>\n\n              </ul>\n              "
                    },
                    {
                        show: false,
                        title: "Pros & Cons",
                        desc: "\n\n              It is important that you discuss these complications with your surgeon, and discuss the risks and benefits. If you are a poor surgical candidate (e.g. severe cardiovascular or pulmonary disease, severe mental health difficulties, risks with anesthesia, poor wound healing ability, poor support system) or are unable to demonstrate the ability to follow through with the necessary postoperative care, the benefits of surgery might not outweigh the risks. Women who are pregnant or breastfeeding or who are planning on becoming pregnant over the next two years should wait to have weight loss surgery. <br /><br />\n              Serious complication rate (2%): <br />\n              <a href=\"https://jamanetwork.com/journals/jama/fullarticle/2669730\">https://jamanetwork.com/journals/jama/fullarticle/2669730</a> <br />\n              Risk and mortality citation (0 to 17.5%; we ended up deciding not not to use this data): <br />\n              <a href=\"https://www.ncbi.nlm.nih.gov/pubmed/29054173\" target=\"_blank\">https://www.ncbi.nlm.nih.gov/pubmed/29054173</a>\n              "
                    }
                ],
                img: './assets/imgs/risk-of-procedure.jpg' },
        ];
        this.duringProcedureList = [
            { title: "Preparation",
                dropdown: false,
                description: "<br><div class=\"page-image\">\n                 <img width=\"100%\" height=\"70%\" src=\"./assets/imgs/preparation.jpg\">\n              </div>\n               <p>\n\n                   When you arrive at the find the receptionist desk on the 1st floor of the Rosenberg building on the west campus of BIDMC. Map of Beth Israel Deaconess Medical Center can found here: <a href=\"https://www.bidmc.org/-/media/files/beth-israel-org/patient-and-visitor-information/visiting-bidmc/bidmc-campus-map.ashx?hash=AE296CB04E6B071A20BE1C02D2F38E938B581D0A&la=en\" target=\"_blank\">https://www.bidmc.org/-/media/files/beth-israel-org/patient-and-visitor-information/visiting-bidmc/bidmc-campus-map.ashx?hash=AE296CB04E6B071A20BE1C02D2F38E938B581D0A&la=en</a> You will then be directed to the preoperative holding area where you will need to check-in. Family and friends may accompany you here.<br /><br />\n                   The preoperative holding area is the location where surgical patients wait to have their operation. It can be a busy place, especially early in the morning, and will often have numerous other patients, along with their friends and family members, in the other bed spaces around you. There will also be numerous healthcare professionals who will be preparing their respective patients for their own operations.<br /><br />\n                   After you check-in at the preoperative holding area, you will be asked to take off all your clothing, jewelry, glasses/contact lenses, hair accessories, and dentures and to change into a hospital gown. You will also need to put on a surgical shower cap, which will be provided for you.<br />\n                   You will have a dedicated nurse during your time in the preoperative holding area. Your nurse will ensure you are comfortable and well taken care of prior to your surgery. Remember that you are to refrain from eating or drinking during this time. Your nurse or another member of your healthcare team will place an IV in your arm.<br /><br />\n                   Prior to your surgery, you will meet your anesthesia team. They will describe the anesthesia process (including the transversus abdominis plane block you will receive in the operating room prior to the conclusion of your procedure) and answer any questions you may have. You will then be asked to sign a consent form to receive general anesthesia. They will give you medications to help you feel at ease while you wait for your procedure, including a scopolamine patch placed behind your ear to help with nausea. The anesthetic medications will be delivered to you through the IV placed in your arm.<br /><br />\n                   In the preoperative holding area, you will meet several members of the surgical team. This will include your surgeon and operating room nurses. If your surgery is being performed at a teaching hospital, you may also meet surgeon trainees, called interns and residents, and medical students. Your surgical team may also ask you to sign a consent form for the procedure if this was not previously obtained during your office visit. You may also need to give consent for blood transfusion. Ask your surgeon any questions you may have.<br /><br />\n                   When your surgical and anesthesia team are ready to transport you to the Operating Room (OR), you will have the opportunity to say goodbye to your friends and family members. They can either stay in the waiting area or leave and plan to come back when called. One of them should provide the staff or your surgeon with a phone number so that they can be contacted after your procedure has been completed.<br /><br />\n                   You will then be transported to your operating room. <br /><br />\n                   Your operating room will often be quite bright and cold. Blankets will keep you warm. You will have to answer some questions about who you are and what surgery you are having - these are asked routinely. You will then most likely be asked to move yourself from your bed to the operating room table, or the staff will assist. Your anesthesiologist will then administer general anesthesia and you will fall asleep to allow your procedure to begin.<br /><br />\n                   Occasionally, surgeries do not start at their scheduled time. You should be prepared for this as a possibility on the day of your surgery and be assured that your healthcare team will always provide you with the best care and will begin your procedure as soon as they can.<br />\n\n\n\n               </p> \n              ",
                show: false,
                selected: false },
            { title: "What happens?",
                dropdown: true,
                description: [
                    {
                        show: false,
                        title: "Brief version:",
                        desc: "When you are in the operating room, you will undergo general anesthesia and have a breathing tube placed down your throat (i.e. intubation). You will be asleep for this and not feel any discomfort as the breathing tube is being placed, but you may have a sore throat after you wake up from your surgery. Your breathing tube will most likely be removed when your procedure is finished. <br /><br />The IV tube will deliver Anesthesia that will prevent you from feeling or remembering the procedure. Infrequently a catheter is placed to help empty urine from your bladder. Special boots, known as sequential compression devices, will be placed on your legs to massage them and prevent blood clots. <br /><br />At the start of your procedure, your surgeon will make five small incisions in your abdomen. The exact size and location of these will depend on your surgeon\u2019s technique. Typically, about half of these incisions will be 5 mm in length while the other half are 1.2 cm. One of these incisions will be around your belly-button. The other four will be scattered above the level of your belly-button but below your ribcage. <br /><br />Gas will be pumped into your belly to provide your surgeon with the space needed to perform the procedure. The surgeon will insert a small video camera, called a laparoscope, and the picture from the laparoscope will be transmitted onto screens inside the operating room. Small instruments will then be inserted into your abdomen through your other incisions.<br /><br />\n                During your sleeve gastrectomy, your stomach will be delicately separated from adjacent connecting tissue along its left border. Then your anesthesiologist will insert a long plastic tube, known as a bougie, down your mouth, through your esophagus, and into your stomach. This calibrating tube will help your surgeon make sure that your sleeve is the appropriate size.<br /><br />\n                With the bougie acting as a guide in your stomach, your surgeon will then cut your stomach using a laparoscopic surgical stapler. The bougie will be then removed. Some surgeons may then decide to make sure that there are no leaks along your staple line.<br /><br />\n                Your surgeon will remove the resected portion of your stomach through one of your larger incisions. She will then make on final inspection to make sure everything looks well inside your belly before closing your five incisions and applying dressings or skin glue over them. The procedure typically takes less than 2 hours. <br /><br /\n                During your procedure, your surgeon will use her laparoscope to see if the upper portion of your stomach has slid through your diaphragm into your chest. This is known as a hiatal hernia. If your surgeon finds a large hiatal hernia (or if one was diagnosed preoperatively through an upper endoscopy), she will typically repair this after your stomach has been reduced in size.<br /><br />\n\n\n\n              "
                    }, {
                        show: false,
                        title: 'Detailed Version:',
                        desc: "When you are in the operating room you will undergo general anesthesia and have a breathing tube, otherwise known as an endotracheal tube, placed down your throat (i.e. intubation). You will be asleep for this and not feel any discomfort as the breathing tube is being placed, but you may have a sore throat after you wake up from your surgery. Your breathing tube will most likely be removed when your procedure is finished.<br /><br />\n              Anesthesia will prevent you from feeling or remembering the procedure and will be given to you through your IV. Your endotracheal tube will ensure your lungs receive oxygen during the procedure. A catheter may be placed to help empty urine from your bladder if you are having revisional surgery. Otherwise, this is not common practice. Special boots, known as sequential compression devices, will be placed on your legs to massage them and prevent blood clots.<br />\n              At the start of your procedure, your surgeon will make five small incisions in your abdomen. The exact size and location of these will depend on your surgeon\u2019s technique. Typically, about half of these incisions will be 5 mm in length while the other half are 1.2 cm. One of these incisions will be around your belly-button. The other four will be scattered above the level of your belly-button but below your ribcage.<br /><br />\n              Gas will be pumped into your belly to provide your surgeon with the space needed to perform the procedure. The surgeon will insert a small video camera, called a laparoscope, and the picture from the laparoscope will be transmitted onto screens inside the operating room in real time. Small instruments will then be inserted into your abdomen through your other incisions.<br /><br />\n              During your sleeve gastrectomy, your stomach will be delicately separated from adjacent connecting tissue along its left border. Then your anesthesiologist will insert a long plastic tube, known as a bougie, down your mouth; through your food pipe, or esophagus; and into your stomach. This calibrating tube will help your surgeon make sure that your sleeve is the appropriate size. With the bougie acting as a guide in your stomach, your surgeon will then cut your stomach using a laparoscopic surgical stapler. The bougie will be then removed. Some surgeons may then decide to make sure that there are no leaks along your staple line.<br /><br />\n              Your surgeon will the resected portion of your stomach in a bag and remove it through one of your larger incisions. She will then make on final inspection to make sure everything looks well inside your belly before closing your five incisions and applying dressings or skin glue over them. The procedure typically takes less than 2 hours.<br /><br />\n              During your procedure, your surgeon will use her laparoscope to see if the upper portion of your stomach has slid through your diaphragm into your chest. This is known as a hiatal hernia. If your surgeon finds a large hiatal hernia (or if one was diagnosed preoperatively through an upper endoscopy), she will typically repair this after your stomach has been reduced in size.<br /><br />\n              Although it is rarely performed, your surgeon may decide to place a tube down your nose to help decompress your stomach after your surgery. If you are undergoing revisional surgery, your surgeon may decide to place a drain in your abdomen that exits through one of your incisions.<br />\n              You will then wake up in the operating room and be transported to the capable hands of the nursing staff in the post-anesthesia care unit, commonly referred to as the PACU. Once you have started to recover from the effects of the general anesthetic, a friend or family member may come stay with you.\n\n\n\n              ",
                    }
                ],
                show: false,
                selected: false },
            { title: "Just after",
                dropdown: true,
                description: [
                    {
                        show: false,
                        title: "Brief version:",
                        desc: "Often during this process when the anesthesiologist is helping you recover, your attending surgeon will call the number of the friend or family member accompanying you that day to tell him or her how the procedure went and when he or she can expect to see you. Your surgeon will only do this if you gave her permission to call before your operation. <br /><br />Once the anesthesiologist and surgical team are ready, you will be transported to the post-anesthesia care unit, commonly referred to as the PACU, where you will be in the capable hands of the PACU nursing staff as you continue your recovery from general anesthesia. "
                    }, {
                        show: false,
                        title: 'Detailed Version:',
                        desc: "Your anesthesiologist will wean you off general anesthesia. As you start to regain consciousness, your anesthesiologist will take the breathing tube out of your mouth when you can breathe on your own.<br /><br />\n                  Although you will be able to respond to commands in the operating room at this point in time, <b>you will not remember any of this</b>. You will then have a breathing mask placed over your mouth and nose to increase oxygen delivery. This will enhance your recovery, prevent infection, improve wound healing, and make you feel better.<br /><br />\n                  If your surgeon opted to place a urinary catheter, it will most likely be removed at the conclusion of your procedure.<br /><br />\n                  The operating room staff will transport you from the operating room table back to your hospital bed. You will then be covered with warm blankets as you continue your recovery from general anesthesia.<br /><br />\n                  Often during this process when the anesthesiologist is helping you recover, your attending surgeon will telephone the adult accompanying you to tell him or her how the procedure went and provide an estimate of when you can be visited in the recovery area. Your surgeon will only do this if you gave her permission to call before your operation.<br />\n\n               ",
                    }
                ],
                show: false,
                selected: false, }
        ];
        this.postProcedureContent = [
            { type: 'checkbox',
                content: [{
                        title: '<b><u>Shower:</u></b>',
                        selected: false,
                        htmlContent: false,
                        dropdown: true,
                        show: false,
                        htmlDesc: "If <b>skin glue</b> was used to help close your incisions, you can shower immediately after your surgery as there are no dressings to change or remove. <br />\n         If <b>dressings</b> were used to cover your incisions, you may shower 48 hours <b>after</b> surgery. Before showering, remove your dressings and be careful not to disturb the sutures/staples or the adhesive strips above your incisions. Your incisions should only be rinsed with a small amount of water to clean it of dried debris along its edges. Use a towel to <b>pat</b> them dry. Apply clean dressings after your shower.<br />\n         Do not take a bath until your incisions are well-healed (typically 2 to 3 weeks) or until your surgeon approves of this at your postoperative appointment. Please do not swim until you are cleared to take a bath. Bathing or swimming before your incisions have healed puts you at risk of infection.\n         "
                    },
                    {
                        title: '<b><u>Wound care:</u></b>',
                        selected: false,
                        dropdown: true,
                        show: false,
                        htmlContent: false,
                        htmlDesc: "Your five incisions may have skin glue dressings, thin white adhesive strips, or gauze with clear tape over them.<br />\n         <br />Please keep your incisions clean and dry and thoroughly wash your hands before touching or cleaning them.<br /><br />\n         If your incisions have staples, they can get wet in the shower.<br /><br />\n         Do not use ointments on your incisions unless your surgeon instructed you to do this. Your incisions will become less prominent over the next 6 to 12 months. During this time, it is important to keep them out of direct sunlight to avoid scar discoloration.<br /><br />\n         If your surgeon used non-absorbable sutures or staples, these will be removed at your postoperative follow-up appointment. However, most surgeons use absorbable sutures, which will be absorbed naturally by your body over time.<br /><br />\n         <i>Select the section below that applies to you.</i><br /><br />\n         <b>Skin glue dressings.</b><br /> These do not need to be changed or removed. They will wear off naturally within 1 week. Please do not pick at them and make sure that you avoid exposing them to direct sunlight. Water can briefly be used in the shower to clean around them, but they should never be soaked.<br /><br />\n         <b>Thin white adhesive strips.</b><br /> Do not disturb them. They will either fall off on their own within 10-14 days or be taken off by your surgeon at your postoperative follow-up appointment. However, if they are still attached after 2 weeks, you can gently remove them yourself. Water can briefly be used in the shower to clean around them, but they should never be soaked.<br /><br />\n         <b>Gauze. </b><br />The outermost layer can be removed 48 hours after your surgery and then replaced with a fresh gauze after you clean it. You should change the gauze if it ever becomes wet. Once your incisions have stopped draining, you no longer need to keep a dressing on them."
                    },
                    {
                        title: '<b><u>7 AM: </u></b>',
                        selected: false,
                        dropdown: true,
                        show: false,
                        htmlContent: false,
                        htmlDesc: "(4 oz. fat-free, sugar-free yogurt)"
                    },
                    {
                        title: '<b><u>After breakfast:</u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Take liquid, sugar-free acetaminophen for pain control. If you have persistent pain then, and only then, take opioid medication as needed. You should avoid and wean off opioid medication as soon as possible. Take a laxative if you take opioids."
                    },
                    {
                        title: '<b><u>Early Morning:</u></b>:',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance). If you are not taking opioid pain medication and your strength has returned, try to increase your exercise intensity as you feel appropriate (e.g. light jogging and/or using a treadmill, elliptical trainer, stair climber, or stationary bike). Please stop this increased level of exercise if this makes you feel awful.<br /><br />\n         Remember to remain adequately hydrated (with little sips) as you engage in physical activity. If you ever feel lightheaded or dizzy, please stop what you are doing and either sit or lay down.<br /> <br />\n         It is important to avoid being sedentary. At the very least, be sure to get up and move around a little."
                    },
                    {
                        title: '<b><u>8 AM:</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "(8 oz. water)"
                    },
                    {
                        title: '<b><u>9 AM:</u></b>',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)*"
                    },
                    {
                        title: '<b><u>10 AM:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "(8 oz. water)"
                    },
                    {
                        title: '<b><u>Late morning:</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance). Please stop this increased level of exercise if this makes you feel awful.<br />\n         Remember to remain adequately hydrated (with little sips) as you engage in physical activity. If you ever feel lightheaded or dizzy, please stop what you are doing and either take a seat or lay down."
                    },
                    {
                        title: '<b><u>11 AM:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    },
                    {
                        title: '<b><u>After lunch:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance).<br />\n         It is important to avoid being sedentary. At the very least, be sure to get up and move around a little."
                    },
                    {
                        title: '<b><u>12 PM:</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "(8 oz. broth)"
                    },
                    {
                        title: '<b><u>1 PM:</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    },
                    {
                        title: '<b><u>Mid-afternoon:</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Nap"
                    },
                    {
                        title: '<b><u>2 PM: </u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "(8 oz. water)"
                    },
                    {
                        title: '<b><u>3 PM: </u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    },
                    {
                        title: '<b><u>4 PM: </u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "(8 oz. water)"
                    },
                    {
                        title: '<b><u>Late-afternoon: </u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    },
                    {
                        title: '<b><u>5 PM: </u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: " (8 oz. protein shake)"
                    },
                    {
                        title: '<b><u>After dinner: </u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Take liquid, sugar-free acetaminophen for pain control; if you have persistent pain then, and only then, take opioid medication as needed after taking acetaminophen. You should avoid and wean off opioid medication as soon as possible. Take a laxative if you take opioid pain medication."
                    },
                    {
                        title: '<b><u>6 PM: </u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "(8 oz. broth)"
                    },
                    {
                        title: '<b><u>Evening: </u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    }, {
                        title: '<b><u>7 PM:  </u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    }, {
                        title: '<b><u>8 PM: </u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "(8 oz. water)"
                    }, {
                        title: '<b><u>Wound care:  </u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Your five incisions may have skin glue dressings, thin white adhesive strips, or gauze with clear tape over them.<br />\n         <br />Please keep your incisions clean and dry and thoroughly wash your hands before touching or cleaning them.<br /><br />\n         If your incisions have staples, they can get wet in the shower.<br /><br />\n         Do not use ointments on your incisions unless your surgeon instructed you to do this. Your incisions will become less prominent over the next 6 to 12 months. During this time, it is important to keep them out of direct sunlight to avoid scar discoloration.<br /><br />\n         If your surgeon used non-absorbable sutures or staples, these will be removed at your postoperative follow-up appointment. However, most surgeons use absorbable sutures, which will be absorbed naturally by your body over time.<br /><br />\n         <i>Select the section below that applies to you.</i><br /><br />\n         <b>Skin glue dressings.</b><br /> These do not need to be changed or removed. They will wear off naturally within 1 week. Please do not pick at them and make sure that you avoid exposing them to direct sunlight. Water can briefly be used in the shower to clean around them, but they should never be soaked.<br /><br />\n         <b>Thin white adhesive strips.</b><br /> Do not disturb them. They will either fall off on their own within 10-14 days or be taken off by your surgeon at your postoperative follow-up appointment. However, if they are still attached after 2 weeks, you can gently remove them yourself. Water can briefly be used in the shower to clean around them, but they should never be soaked.<br /><br />\n         <b>Gauze. </b><br />The outermost layer can be removed 48 hours after your surgery and then replaced with a fresh gauze after you clean it. You should change the gauze if it ever becomes wet. Once your incisions have stopped draining, you no longer need to keep a dressing on them."
                    }, {
                        title: '<b><u>NO: </u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "bathing, swimming, lifting over 15 pounds (7 kg)"
                    },
                    {
                        title: '<b><u>9 PM:  </u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Sleep<br /><br />\n           - * Shakes: You can add sugar-free extracts to protein -rinks to improve the taste. Protein shakes can also be blended with ice to create a cold smoothie. Protein helps with healing!\n         "
                    }
                ]
            },
            {
                type: 'checkbox',
                content: [{
                        title: '<b><u>Shower:</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: true,
                        htmlDesc: "If <b>skin glue</b> was used to help close your incisions, you can shower immediately after your surgery as there are no dressings to change or remove. <br />\n         If <b>dressings</b> were used to cover your incisions, you may shower 48 hours <b>after</b> surgery. Before showering, remove your dressings and be careful not to disturb the sutures/staples or the adhesive strips above your incisions. Your incisions should only be rinsed with a small amount of water to clean it of dried debris along its edges. Use a towel to <b>pat</b> them dry. Apply clean dressings after your shower.<br />\n         Do not take a bath until your incisions are well-healed (typically 2 to 3 weeks) or until your surgeon approves of this at your postoperative appointment. Please do not swim until you are cleared to take a bath. Bathing or swimming before your incisions have healed puts you at risk of infection."
                    },
                    {
                        title: "<b><u>Wound care:</u></b> ",
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Your five incisions may have skin glue dressings, thin white adhesive strips, or gauze with clear tape over them.<br />\n         <br />Please keep your incisions clean and dry and thoroughly wash your hands before touching or cleaning them.<br /><br />\n         If your incisions have staples, they can get wet in the shower.<br /><br />\n         Do not use ointments on your incisions unless your surgeon instructed you to do this. Your incisions will become less prominent over the next 6 to 12 months. During this time, it is important to keep them out of direct sunlight to avoid scar discoloration.<br /><br />\n         If your surgeon used non-absorbable sutures or staples, these will be removed at your postoperative follow-up appointment. However, most surgeons use absorbable sutures, which will be absorbed naturally by your body over time.<br /><br />\n         <i>Select the section below that applies to you.</i><br /><br />\n         <b>Skin glue dressings.</b><br /> These do not need to be changed or removed. They will wear off naturally within 1 week. Please do not pick at them and make sure that you avoid exposing them to direct sunlight. Water can briefly be used in the shower to clean around them, but they should never be soaked.<br /><br />\n         <b>Thin white adhesive strips.</b><br /> Do not disturb them. They will either fall off on their own within 10-14 days or be taken off by your surgeon at your postoperative follow-up appointment. However, if they are still attached after 2 weeks, you can gently remove them yourself. Water can briefly be used in the shower to clean around them, but they should never be soaked.<br /><br />\n         <b>Gauze. </b><br />The outermost layer can be removed 48 hours after your surgery and then replaced with a fresh gauze after you clean it. You should change the gauze if it ever becomes wet. Once your incisions have stopped draining, you no longer need to keep a dressing on them."
                    },
                    {
                        title: '<b><u>7 AM:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "(4 oz. fat-free, sugar-free yogurt"
                    },
                    {
                        title: '<b><u>After breakfast</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Take liquid, sugar-free acetaminophen for pain control; if you have persistent pain then, and only then, take opioid medication."
                    },
                    {
                        title: '<b><u>Early Morning:</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    },
                    {
                        title: '<b><u>8 AM: </u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "(8 oz. water)"
                    },
                    {
                        title: '<b><u>9 AM: </u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    },
                    {
                        title: '<b><u>10 AM:</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "(8 oz. water)"
                    },
                    {
                        title: '<b><u>Late morning:</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    },
                    {
                        title: '<b><u>11 AM:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: " (8 oz. protein shake)"
                    },
                    {
                        title: '<b><u>After lunch:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    },
                    {
                        title: '<b><u>Take complete multivitamin with iron times each day – as prescribed.</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Make sure you take chewable vitamins and not gummy vitamins."
                    },
                    {
                        title: '<b><u>12 PM: </u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "(8 oz. broth"
                    },
                    {
                        title: '<b><u>1 PM: </u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    },
                    {
                        title: '<b><u>Mid-afternoon:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: " Nap"
                    },
                    {
                        title: '<b><u>2 PM: </u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: " (8 oz. water)"
                    }, {
                        title: '<b><u>3 PM: </u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    }, {
                        title: '<b><u>4 PM: </u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "(8 oz. water)"
                    }, {
                        title: '<b><u>Late-afternoon:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance"
                    }, {
                        title: '<b><u>5 PM: </u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake"
                    }, {
                        title: '<b><u>Dinner:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Try complex carbohydrates such as beans or whole grains."
                    },
                    {
                        title: '<b><u>After Dinner:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Take liquid, sugar-free acetaminophen for pain control; if you have persistent pain then, and only then, take opioid medication as needed after taking acetaminophen."
                    },
                    {
                        title: '<b><u>6 PM: </u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "(8 oz. broth)"
                    },
                    {
                        title: '<b><u>Evening: </u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    },
                    {
                        title: '<b><u>7 PM:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: " (8 oz. protein shake)"
                    }, {
                        title: '<b><u>8 PM:  </u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "(8 oz. water)"
                    }, {
                        title: '<b><u>NO: </u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "bathing, swimming, lifting over 15 pounds (7 kg)."
                    }, {
                        title: '<b><u>9 PM:  </u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Sleep"
                    },
                ]
            },
            {
                type: 'checkbox',
                content: [{
                        title: '<b><u>Shower:</u></b>',
                        selected: false,
                        show: false,
                        htmlContent: true,
                        dropdown: true,
                        htmlDesc: "If <b>skin glue</b> was used to help close your incisions, you can shower immediately after your surgery as there are no dressings to change or remove. <br />\n         If <b>dressings</b> were used to cover your incisions, you may shower 48 hours <b>after</b> surgery. Before showering, remove your dressings and be careful not to disturb the sutures/staples or the adhesive strips above your incisions. Your incisions should only be rinsed with a small amount of water to clean it of dried debris along its edges. Use a towel to <b>pat</b> them dry. Apply clean dressings after your shower.<br />\n         Do not take a bath until your incisions are well-healed (typically 2 to 3 weeks) or until your surgeon approves of this at your postoperative appointment. Please do not swim until you are cleared to take a bath. Bathing or swimming before your incisions have healed puts you at risk of infection.\n         "
                    }, {
                        title: '<b><u>Wound care:</u></b>',
                        selected: false,
                        dropdown: true,
                        show: false,
                        htmlContent: true,
                        htmlDesc: "Your five incisions may have skin glue dressings, thin white adhesive strips, or gauze with clear tape over them.<br />\n         <br />Please keep your incisions clean and dry and thoroughly wash your hands before touching or cleaning them.<br /><br />\n         If your incisions have staples, they can get wet in the shower.<br /><br />\n         Do not use ointments on your incisions unless your surgeon instructed you to do this. Your incisions will become less prominent over the next 6 to 12 months. During this time, it is important to keep them out of direct sunlight to avoid scar discoloration.<br /><br />\n         If your surgeon used non-absorbable sutures or staples, these will be removed at your postoperative follow-up appointment. However, most surgeons use absorbable sutures, which will be absorbed naturally by your body over time.<br /><br />\n         <i>Select the section below that applies to you.</i><br /><br />\n         <b>Skin glue dressings.</b><br /> These do not need to be changed or removed. They will wear off naturally within 1 week. Please do not pick at them and make sure that you avoid exposing them to direct sunlight. Water can briefly be used in the shower to clean around them, but they should never be soaked.<br /><br />\n         <b>Thin white adhesive strips.</b><br /> Do not disturb them. They will either fall off on their own within 10-14 days or be taken off by your surgeon at your postoperative follow-up appointment. However, if they are still attached after 2 weeks, you can gently remove them yourself. Water can briefly be used in the shower to clean around them, but they should never be soaked.<br /><br />\n         <b>Gauze. </b><br />The outermost layer can be removed 48 hours after your surgery and then replaced with a fresh gauze after you clean it. You should change the gauze if it ever becomes wet. Once your incisions have stopped draining, you no longer need to keep a dressing on them."
                    }, {
                        title: '<b><u>7 AM: </u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(4 oz. fat-free, sugar-free yogurt"
                    }, {
                        title: '<b><u>After breakfast:</u></b> ',
                        selected: false,
                        dropdown: true,
                        show: false,
                        htmlContent: false,
                        htmlDesc: "Take liquid, sugar-free acetaminophen for pain control; if you have persistent pain then, and only then, take opioid medication as needed after taking acetaminophen."
                    }, {
                        title: '<b><u>Early Morning:</u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    }, {
                        title: '<b><u>8 AM:</u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: " (8 oz. water)"
                    }, {
                        title: '<b><u>9 AM: </u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    }, {
                        title: '<b><u>10 AM: </u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. water)"
                    }, {
                        title: '<b><u>Late morning:</u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    }, {
                        title: '<b><u>11 AM: </u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    }, {
                        title: '<b><u>After lunch:</u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    }, {
                        title: '<b><u>Take complete multivitamin with iron times each day – as prescribed.</u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Make sure you take chewable vitamins and not gummy vitamins."
                    }, {
                        title: '<b><u>About Fat</u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Not all fat is unhealthy for you. However, you should limit your fat intake in general and avoid \u201Cbad\u201D fats (e.g. trans fats, saturated fats). Try to consume avocados, certain cheeses, nuts, fatty fish, extra virgin olive oil."
                    }, {
                        title: '<b><u>12 PM: </u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. broth)"
                    }, {
                        title: '<b><u>1 PM: </u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    },
                    {
                        title: '<b><u>Mid-afternoon: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Nap"
                    }, {
                        title: '<b><u>2 PM:</u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: " (8 oz. water) "
                    }, {
                        title: '<b><u>3 PM: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    }, {
                        title: '<b><u>4 PM:  </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. water)"
                    }, {
                        title: '<b><u>Late-afternoon: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    }, {
                        title: '<b><u>5 PM: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    }, {
                        title: '<b><u>After dinner: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Take liquid, sugar-free acetaminophen for pain control; if you have persistent pain then, and only then, take opioid medication as needed after taking acetaminophen."
                    }, {
                        title: '<b><u>6 PM: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. broth)"
                    }, {
                        title: '<b><u>Evening: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    }, {
                        title: '<b><u>7 PM: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: " (8 oz. protein shake)"
                    }, {
                        title: '<b><u>8 PM: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. water"
                    }, {
                        title: '<b><u>NO: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "bathing, swimming, lifting over 15 pounds (7 kg)"
                    }, {
                        title: '<b><u>9 PM:  </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Sleep"
                    }],
            },
            {
                type: 'checkbox',
                content: [{
                        title: '<b><u>Remember to sip continuously throughout the day</u></b>',
                        selected: false,
                        show: false,
                        htmlContent: true,
                        dropdown: true,
                        htmlDesc: "     "
                    }, {
                        title: '<b><u>Shower:</u></b>',
                        selected: false,
                        show: false,
                        htmlContent: true,
                        dropdown: true,
                        htmlDesc: "If <b>skin glue</b> was used to help close your incisions, you can shower immediately after your surgery as there are no dressings to change or remove. <br />\n         If <b>dressings</b> were used to cover your incisions, you may shower 48 hours <b>after</b> surgery. Before showering, remove your dressings and be careful not to disturb the sutures/staples or the adhesive strips above your incisions. Your incisions should only be rinsed with a small amount of water to clean it of dried debris along its edges. Use a towel to <b>pat</b> them dry. Apply clean dressings after your shower.<br />\n         Do not take a bath until your incisions are well-healed (typically 2 to 3 weeks) or until your surgeon approves of this at your postoperative appointment. Please do not swim until you are cleared to take a bath. Bathing or swimming before your incisions have healed puts you at risk of infection.\n         "
                    }, {
                        title: '<b><u>Wound care:</u></b>',
                        selected: false,
                        dropdown: true,
                        show: false,
                        htmlContent: true,
                        htmlDesc: "Your five incisions may have skin glue dressings, thin white adhesive strips, or gauze with clear tape over them.<br />\n         <br />Please keep your incisions clean and dry and thoroughly wash your hands before touching or cleaning them.<br /><br />\n         If your incisions have staples, they can get wet in the shower.<br /><br />\n         Do not use ointments on your incisions unless your surgeon instructed you to do this. Your incisions will become less prominent over the next 6 to 12 months. During this time, it is important to keep them out of direct sunlight to avoid scar discoloration.<br /><br />\n         If your surgeon used non-absorbable sutures or staples, these will be removed at your postoperative follow-up appointment. However, most surgeons use absorbable sutures, which will be absorbed naturally by your body over time.<br /><br />\n         <i>Select the section below that applies to you.</i><br /><br />\n         <b>Skin glue dressings.</b><br /> These do not need to be changed or removed. They will wear off naturally within 1 week. Please do not pick at them and make sure that you avoid exposing them to direct sunlight. Water can briefly be used in the shower to clean around them, but they should never be soaked.<br /><br />\n         <b>Thin white adhesive strips.</b><br /> Do not disturb them. They will either fall off on their own within 10-14 days or be taken off by your surgeon at your postoperative follow-up appointment. However, if they are still attached after 2 weeks, you can gently remove them yourself. Water can briefly be used in the shower to clean around them, but they should never be soaked.<br /><br />\n         <b>Gauze. </b><br />The outermost layer can be removed 48 hours after your surgery and then replaced with a fresh gauze after you clean it. You should change the gauze if it ever becomes wet. Once your incisions have stopped draining, you no longer need to keep a dressing on them."
                    }, {
                        title: '<b><u>7 AM: </u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(4 oz. fat-free, sugar-free yogurt"
                    }, {
                        title: '<b><u>After breakfast:</u></b> ',
                        selected: false,
                        dropdown: true,
                        show: false,
                        htmlContent: false,
                        htmlDesc: "Take liquid, sugar-free acetaminophen for pain control; if you have persistent pain then, and only then, take opioid medication as needed after taking acetaminophen."
                    }, {
                        title: '<b><u>Early Morning:</u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    }, {
                        title: '<b><u>9 AM: </u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    }, {
                        title: '<b><u>Late morning:</u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    }, {
                        title: '<b><u>11 AM: </u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    }, {
                        title: '<b><u>After lunch:</u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    }, {
                        title: '<b><u>Take complete multivitamin with iron times each day – as prescribed.</u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Make sure you take chewable vitamins and not gummy vitamins."
                    },
                    { title: '<b><u>12 PM: </u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. broth)"
                    }, {
                        title: '<b><u>1 PM: </u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    },
                    {
                        title: '<b><u>Mid-afternoon: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Nap"
                    }, {
                        title: '<b><u>3 PM:</u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: " (8 oz. water) "
                    }, {
                        title: '<b><u>3 PM: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    }, {
                        title: '<b><u>Late-afternoon: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    }, {
                        title: '<b><u>5 PM: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    }, {
                        title: '<b><u>After dinner: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Take liquid, sugar-free acetaminophen for pain control; if you have persistent pain then, and only then, take opioid medication as needed after taking acetaminophen.You should avoid and wean off opioid medication as soon as possible. Take a laxative if you end up needing opioid pain medication."
                    }, {
                        title: '<b><u>6 PM: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. broth)"
                    }, {
                        title: '<b><u>Evening: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    }, {
                        title: '<b><u>7 PM: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: " (8 oz. protein shake)"
                    }, {
                        title: '<b><u>8 PM: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. water)"
                    }, {
                        title: '<b><u>NO: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "bathing, swimming, lifting over 15 pounds (7 kg)"
                    }, {
                        title: '<b><u>9 PM:  </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Sleep"
                    }],
            },
            {
                type: 'checkbox',
                content: [{
                        title: '<b><u>Remember to sip continuously throughout the day</u></b>',
                        selected: false,
                        show: false,
                        htmlContent: true,
                        dropdown: true,
                        htmlDesc: "     "
                    }, {
                        title: '<b><u>Shower:</u></b>',
                        selected: false,
                        show: false,
                        htmlContent: true,
                        dropdown: true,
                        htmlDesc: "If <b>skin glue</b> was used to help close your incisions, you can shower immediately after your surgery as there are no dressings to change or remove. <br />\n         If <b>dressings</b> were used to cover your incisions, you may shower 48 hours <b>after</b> surgery. Before showering, remove your dressings and be careful not to disturb the sutures/staples or the adhesive strips above your incisions. Your incisions should only be rinsed with a small amount of water to clean it of dried debris along its edges. Use a towel to <b>pat</b> them dry. Apply clean dressings after your shower.<br />\n         Do not take a bath until your incisions are well-healed (typically 2 to 3 weeks) or until your surgeon approves of this at your postoperative appointment. Please do not swim until you are cleared to take a bath. Bathing or swimming before your incisions have healed puts you at risk of infection.\n         "
                    }, {
                        title: '<b><u>Wound care:</u></b>',
                        selected: false,
                        dropdown: true,
                        show: false,
                        htmlContent: true,
                        htmlDesc: "Your five incisions may have skin glue dressings, thin white adhesive strips, or gauze with clear tape over them.<br />\n         <br />Please keep your incisions clean and dry and thoroughly wash your hands before touching or cleaning them.<br /><br />\n         If your incisions have staples, they can get wet in the shower.<br /><br />\n         Do not use ointments on your incisions unless your surgeon instructed you to do this. Your incisions will become less prominent over the next 6 to 12 months. During this time, it is important to keep them out of direct sunlight to avoid scar discoloration.<br /><br />\n         If your surgeon used non-absorbable sutures or staples, these will be removed at your postoperative follow-up appointment. However, most surgeons use absorbable sutures, which will be absorbed naturally by your body over time.<br /><br />\n         <i>Select the section below that applies to you.</i><br /><br />\n         <b>Skin glue dressings.</b><br /> These do not need to be changed or removed. They will wear off naturally within 1 week. Please do not pick at them and make sure that you avoid exposing them to direct sunlight. Water can briefly be used in the shower to clean around them, but they should never be soaked.<br /><br />\n         <b>Thin white adhesive strips.</b><br /> Do not disturb them. They will either fall off on their own within 10-14 days or be taken off by your surgeon at your postoperative follow-up appointment. However, if they are still attached after 2 weeks, you can gently remove them yourself. Water can briefly be used in the shower to clean around them, but they should never be soaked.<br /><br />\n         <b>Gauze. </b><br />The outermost layer can be removed 48 hours after your surgery and then replaced with a fresh gauze after you clean it. You should change the gauze if it ever becomes wet. Once your incisions have stopped draining, you no longer need to keep a dressing on them."
                    }, {
                        title: '<b><u>7 AM: </u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(4 oz. fat-free, sugar-free yogurt"
                    }, {
                        title: '<b><u>After breakfast:</u></b> ',
                        selected: false,
                        dropdown: true,
                        show: false,
                        htmlContent: false,
                        htmlDesc: "Take liquid, sugar-free acetaminophen for pain control; if you have persistent pain then, and only then, take opioid medication as needed after taking acetaminophen."
                    }, {
                        title: '<b><u>Early Morning:</u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    }, {
                        title: '<b><u>9 AM: </u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    }, {
                        title: '<b><u>Late morning:</u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    }, {
                        title: '<b><u>11 AM: </u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    }, {
                        title: '<b><u>After lunch:</u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    }, {
                        title: '<b><u>Take complete multivitamin with iron times each day – as prescribed.</u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Make sure you take chewable vitamins and not gummy vitamins."
                    },
                    { title: '<b><u>12 PM: </u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. broth)"
                    }, {
                        title: '<b><u>1 PM: </u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    },
                    {
                        title: '<b><u>Mid-afternoon: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Nap"
                    }, {
                        title: '<b><u>3 PM:</u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: " (8 oz. water) "
                    }, {
                        title: '<b><u>Late-afternoon: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    }, {
                        title: '<b><u>5 PM: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    }, {
                        title: '<b><u>After dinner: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Take liquid, sugar-free acetaminophen for pain control; if you have persistent pain then, and only then, take opioid medication as needed after taking acetaminophen.You should avoid and wean off opioid medication as soon as possible. Take a laxative if you end up needing opioid pain medication."
                    }, {
                        title: '<b><u>6 PM: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. broth)"
                    }, {
                        title: '<b><u>Evening: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    }, {
                        title: '<b><u>7 PM: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: " (8 oz. protein shake)"
                    }, {
                        title: '<b><u>8 PM: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. water)"
                    }, {
                        title: '<b><u>NO: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "bathing, swimming, lifting over 15 pounds (7 kg)"
                    }, {
                        title: '<b><u>9 PM:  </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Sleep"
                    }],
            },
            {
                type: 'checkbox',
                content: [{
                        title: '<b><u>Remember to sip continuously throughout the day</u></b>',
                        selected: false,
                        show: false,
                        htmlContent: true,
                        dropdown: true,
                        htmlDesc: "     "
                    }, {
                        title: '<b><u>Shower:</u></b>',
                        selected: false,
                        show: false,
                        htmlContent: true,
                        dropdown: true,
                        htmlDesc: "If <b>skin glue</b> was used to help close your incisions, you can shower immediately after your surgery as there are no dressings to change or remove. <br />\n         If <b>dressings</b> were used to cover your incisions, you may shower 48 hours <b>after</b> surgery. Before showering, remove your dressings and be careful not to disturb the sutures/staples or the adhesive strips above your incisions. Your incisions should only be rinsed with a small amount of water to clean it of dried debris along its edges. Use a towel to <b>pat</b> them dry. Apply clean dressings after your shower.<br />\n         Do not take a bath until your incisions are well-healed (typically 2 to 3 weeks) or until your surgeon approves of this at your postoperative appointment. Please do not swim until you are cleared to take a bath. Bathing or swimming before your incisions have healed puts you at risk of infection.\n         "
                    }, {
                        title: '<b><u>Wound care:</u></b>',
                        selected: false,
                        dropdown: true,
                        show: false,
                        htmlContent: true,
                        htmlDesc: "Your five incisions may have skin glue dressings, thin white adhesive strips, or gauze with clear tape over them.<br />\n         <br />Please keep your incisions clean and dry and thoroughly wash your hands before touching or cleaning them.<br /><br />\n         If your incisions have staples, they can get wet in the shower.<br /><br />\n         Do not use ointments on your incisions unless your surgeon instructed you to do this. Your incisions will become less prominent over the next 6 to 12 months. During this time, it is important to keep them out of direct sunlight to avoid scar discoloration.<br /><br />\n         If your surgeon used non-absorbable sutures or staples, these will be removed at your postoperative follow-up appointment. However, most surgeons use absorbable sutures, which will be absorbed naturally by your body over time.<br /><br />\n         <i>Select the section below that applies to you.</i><br /><br />\n         <b>Skin glue dressings.</b><br /> These do not need to be changed or removed. They will wear off naturally within 1 week. Please do not pick at them and make sure that you avoid exposing them to direct sunlight. Water can briefly be used in the shower to clean around them, but they should never be soaked.<br /><br />\n         <b>Thin white adhesive strips.</b><br /> Do not disturb them. They will either fall off on their own within 10-14 days or be taken off by your surgeon at your postoperative follow-up appointment. However, if they are still attached after 2 weeks, you can gently remove them yourself. Water can briefly be used in the shower to clean around them, but they should never be soaked.<br /><br />\n         <b>Gauze. </b><br />The outermost layer can be removed 48 hours after your surgery and then replaced with a fresh gauze after you clean it. You should change the gauze if it ever becomes wet. Once your incisions have stopped draining, you no longer need to keep a dressing on them."
                    }, {
                        title: '<b><u>7 AM: </u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(4 oz. fat-free, sugar-free yogurt"
                    }, {
                        title: '<b><u>After breakfast:</u></b> ',
                        selected: false,
                        dropdown: true,
                        show: false,
                        htmlContent: false,
                        htmlDesc: "Take liquid, sugar-free acetaminophen for pain control;"
                    }, {
                        title: '<b><u>Driving</u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Should be okay. <b>But not if you are still taking opioid pain medication within the last 24 hours.</b>"
                    }, {
                        title: '<b><u>Early Morning:</u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    }, {
                        title: '<b><u>9 AM: </u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    }, {
                        title: '<b><u>Late morning:</u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    }, {
                        title: '<b><u>11 AM: </u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    }, {
                        title: '<b><u>After lunch:</u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    }, {
                        title: '<b><u>Take complete multivitamin with iron times each day – as prescribed.</u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Make sure you take chewable vitamins and not gummy vitamins."
                    },
                    { title: '<b><u>12 PM: </u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. broth)"
                    }, {
                        title: '<b><u>1 PM: </u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    },
                    {
                        title: '<b><u>Mid-afternoon: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Nap"
                    }, {
                        title: '<b><u>3 PM:</u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: " Stage 2 (8 oz. protein shake) "
                    }, {
                        title: '<b><u>Late-afternoon: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    }, {
                        title: '<b><u>5 PM: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Stage 2 (8 oz. protein shake)"
                    }, {
                        title: '<b><u>After dinner: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Take liquid, sugar-free acetaminophen for pain control; if you have persistent pain then, and only then, take opioid medication as needed after taking acetaminophen.You should avoid and wean off opioid medication as soon as possible. Take a laxative if you end up needing opioid pain medication."
                    }, {
                        title: '<b><u>6 PM: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. broth)"
                    }, {
                        title: '<b><u>Evening: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    }, {
                        title: '<b><u>7 PM: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: " (8 oz. protein shake)"
                    }, {
                        title: '<b><u>8 PM: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. water)"
                    }, {
                        title: '<b><u>NO: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "bathing, swimming, lifting over 15 pounds (7 kg)"
                    }, {
                        title: '<b><u>9 PM:  </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Sleep"
                    }],
            },
            {
                type: 'checkbox',
                content: [{
                        title: '<b><u>Remember to sip continuously throughout the day</u></b>',
                        selected: false,
                        show: false,
                        htmlContent: true,
                        dropdown: true,
                        htmlDesc: "     "
                    }, {
                        title: '<b><u>Shower:</u></b>',
                        selected: false,
                        show: false,
                        htmlContent: true,
                        dropdown: true,
                        htmlDesc: "If <b>skin glue</b> was used to help close your incisions, you can shower immediately after your surgery as there are no dressings to change or remove. <br />\n         If <b>dressings</b> were used to cover your incisions, you may shower 48 hours <b>after</b> surgery. Before showering, remove your dressings and be careful not to disturb the sutures/staples or the adhesive strips above your incisions. Your incisions should only be rinsed with a small amount of water to clean it of dried debris along its edges. Use a towel to <b>pat</b> them dry. Apply clean dressings after your shower.<br />\n         Do not take a bath until your incisions are well-healed (typically 2 to 3 weeks) or until your surgeon approves of this at your postoperative appointment. Please do not swim until you are cleared to take a bath. Bathing or swimming before your incisions have healed puts you at risk of infection.\n         "
                    }, {
                        title: '<b><u>Wound care:</u></b>',
                        selected: false,
                        dropdown: true,
                        show: false,
                        htmlContent: true,
                        htmlDesc: "Your five incisions may have skin glue dressings, thin white adhesive strips, or gauze with clear tape over them.<br />\n         <br />Please keep your incisions clean and dry and thoroughly wash your hands before touching or cleaning them.<br /><br />\n         If your incisions have staples, they can get wet in the shower.<br /><br />\n         Do not use ointments on your incisions unless your surgeon instructed you to do this. Your incisions will become less prominent over the next 6 to 12 months. During this time, it is important to keep them out of direct sunlight to avoid scar discoloration.<br /><br />\n         If your surgeon used non-absorbable sutures or staples, these will be removed at your postoperative follow-up appointment. However, most surgeons use absorbable sutures, which will be absorbed naturally by your body over time.<br /><br />\n         <i>Select the section below that applies to you.</i><br /><br />\n         <b>Skin glue dressings.</b><br /> These do not need to be changed or removed. They will wear off naturally within 1 week. Please do not pick at them and make sure that you avoid exposing them to direct sunlight. Water can briefly be used in the shower to clean around them, but they should never be soaked.<br /><br />\n         <b>Thin white adhesive strips.</b><br /> Do not disturb them. They will either fall off on their own within 10-14 days or be taken off by your surgeon at your postoperative follow-up appointment. However, if they are still attached after 2 weeks, you can gently remove them yourself. Water can briefly be used in the shower to clean around them, but they should never be soaked.<br /><br />\n         <b>Gauze. </b><br />The outermost layer can be removed 48 hours after your surgery and then replaced with a fresh gauze after you clean it. You should change the gauze if it ever becomes wet. Once your incisions have stopped draining, you no longer need to keep a dressing on them."
                    }, {
                        title: '<b><u>7 AM: </u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Stage 2 (4 oz. fat-free, sugar-free yogurt)"
                    }, {
                        title: '<b><u>After breakfast:</u></b> ',
                        selected: false,
                        dropdown: true,
                        show: false,
                        htmlContent: false,
                        htmlDesc: "Take liquid, sugar-free acetaminophen for pain control; if you have persistent pain then, and only then, take opioid medication as needed after taking acetaminophen."
                    }, {
                        title: '<b><u>Driving</u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Should be okay. <b>But not if you are still taking opioid pain medication within the last 24 hours.</b>"
                    }, {
                        title: '<b><u>Early Morning:</u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    }, {
                        title: '<b><u>9 AM: </u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    }, {
                        title: '<b><u>Late morning:</u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    }, {
                        title: '<b><u>11 AM: </u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    }, {
                        title: '<b><u>After lunch:</u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    }, {
                        title: '<b><u>Take complete multivitamin with iron times each day – as prescribed.</u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Make sure you take chewable vitamins and not gummy vitamins."
                    },
                    { title: '<b><u>12 PM: </u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. broth)"
                    }, {
                        title: '<b><u>1 PM: </u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. protein shake)"
                    },
                    {
                        title: '<b><u>Mid-afternoon: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Nap"
                    }, {
                        title: '<b><u>3 PM:</u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: " (8 oz. protein shake) "
                    }, {
                        title: '<b><u>Late-afternoon: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    }, {
                        title: '<b><u>5 PM: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Stage 2 (8 oz. protein shake)"
                    }, {
                        title: '<b><u>After dinner: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Take liquid, sugar-free acetaminophen for pain control; if you have persistent pain then, and only then, take opioid medication as needed after taking acetaminophen.You should avoid and wean off opioid medication as soon as possible. Take a laxative if you end up needing opioid pain medication."
                    }, {
                        title: '<b><u>6 PM: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. broth)"
                    }, {
                        title: '<b><u>Evening: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 5 minutes (total of 10 to 30 minutes initially each day as you slowly increase your endurance)."
                    }, {
                        title: '<b><u>7 PM: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: " (8 oz. protein shake)"
                    }, {
                        title: '<b><u>8 PM: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "(8 oz. water)"
                    }, {
                        title: '<b><u>NO: </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "bathing, swimming, lifting over 15 pounds (7 kg)"
                    }, {
                        title: '<b><u>9 PM:  </u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Sleep"
                    }],
            },
            {
                type: 'textanddropdown',
                htmlContent: true,
                selected: false,
                dropdown: false,
                content: [{
                        text: "<ul><li>Take complete multivitamin with iron times each day \u2013 as prescribed. Make sure you take chewable vitamins and not gummy vitamins.</li>\n<li>Continue to exercise each day and slow increase your activity or the time you exercise as your exercise tolerance increases.</li>\n<li>NO: bath, swimming, lifting over 15 pounds (7\nkg).</li></ul>",
                        dropdown: [{
                                title: 'Surgeon visit',
                                content: "<ul><li>\nApproximately one week after surgery, you\nshould plan on seeing your surgeon to\nmake sure your belly is healing properly.\nThis appointment will either be made for\nyou when you are being discharged, or\nshould be made by you when you return\nhome.</li>\n<li>Sutures and staples may be removed at\nthis time.</li>\n<li>You may also need to set up an\nappointment with your primary care\nprovider to go over any medication\nchanges if necessary.</li></ul>"
                            }, {
                                title: 'Postoperative Appointment',
                                content: "<ul><li>\nApproximately one to two weeks after surgery, you should see your surgeon to make sure the incisions on your belly are healing properly. This appointment was most likely already scheduled.</li>\n<li>If non-absorbable sutures and staples were used, they may be removed at this time.</li>\n  <li>You may also need to set up an appointment with your primary care provider to go over any medication changes if necessary.</li>\n</ul>"
                            }]
                    }]
            },
            {
                type: 'text',
                content: "<ul><li><b><u>Allowed:</u></b> If incisions have healed and your surgeon has provided approval, bathing and swimming are permitted.</li>\n<li> <b><u>Allowed:</u></b> sex, after sutures are removed (if removable sutures were utilized) or your surgeon has told you that you are healthy enough for sexual activity.</li>\n<li><b><u>Continue</u></b> to exercise about 5 times a day. Pick up walking pace. Running is permitted if you are not taking opioid medication and you feel as though your strength has returned. Please stop running if this makes you feel awful or you become dizzy or lightheaded.</li>\n<li><b><u>Lifting:</u></b> slowly increase the weight you lift. Slowly.</li>\n<li>Take complete multivitamin with iron times each day \u2013 as prescribed. Make sure you take chewable vitamins and not gummy vitamins</li>\n<li><b><u>Patients with diabetes:</u></b> You should assess your blood glucose levels more frequently throughout the day (e.g. at least 4 times daily) after you have had weight loss surgery. You should also test your blood sugar if you have symptoms of low blood sugar (see Symptom section).</li>\n<li><b><u>Driving:</u></b> You may not drive a motor vehicle if you have taken opioid pain medication within the last 24 hours. If you have questions about when you can drive, please contact your surgeon\u2019s <a href=\"tel:617-667-2845\"><img src=\"assets/imgs/telephone.svg\" class=\"inline-icon\"> </a>.</li>\n<li><b><u>Pain medications:</u></b> You will no longer be able to have NSAIDS, aspirin, or anti-inflammatory medications after weight loss surgery due to an increased risk of ulcer formation and bleeding.</li>\n<br />Citation for diet: <br /><a href=\"https://health.gov/dietaryguidelines/2015/resources/2015-2020_Dietary_Guidelines.pdf\" target=\"_blank\">https://health.gov/dietaryguidelines/2015/resources/2015-2020_Dietary_Guidelines.pdf</a><br /><br />\n Citation for general content: <br /><a href=\"https://www.facs.org/~/media/files/education/patient%20ed/cholesys.ashx\" target=\"_blank\">https://www.facs.org/~/media/files/education/patient%20ed/cholesys.ashx</a>\n\n</ul>",
                dropdown: false,
                htmlContent: false
            },
            {
                type: 'text',
                content: "<p><strong>That's the end of your recovery protocol.</strong></p>\n          <p>You should be feeling pretty good, but a little sore in obvious places.&nbsp;&nbsp;So, gradually, start to live the life you had before.&nbsp;&nbsp;Except - no heavy lifting and no strenuous activity for a month more.</p>\n          <p>Yes, you can start driving now, but only if:</p>\n          <ul>\n            <li>You can wear a seatbelt without pain, and</li>\n            <li>If you can make an emergency stop without pain</li>\n          </ul>\n          \n          <p>If not, wait a few days and try again.</p>",
                dropdown: false,
                htmlContent: false
            }
        ];

        this.recoveryContent = [{
                title: 'Waking up/PACU ',
                selected: false,
                dropdown: true, show: false,
                htmlContent: false,
                htmlDesc: `
                <u>Overview </u><br /> When you wake up and start to remember events, you will be in the post-anesthesia care unit, otherwise known as the PACU. You will be surrounded by other patients who are also recovering from their own surgeries. <br /><br />You will most likely be in the PACU for 2 to 4 hours. This is the time it takes for the anesthesia to wear off to an acceptable level. However, your surgeon may opt to have you stay there longer, or even overnight, to ensure close surveillance of your vitals and breathing status. During this time, you will have a dedicated nurse care for you. Once you are stable, you will be transferred to the surgical wards on the 7th floor of the Rosenburg Building on the west campus of BIDMC where you will continue your recovery.
                <br /><br />
                You will most likely be in the PACU for 2 to 4 hours. This is the time it takes for the anesthesia to wear off to an acceptable level. However, your surgeon may opt to have you stay there longer, or even overnight, to ensure close surveillance of your vitals and breathing status. During this time, you will have a dedicated nurse care for you. Once you are stable, you will be transferred to the surgical wards on the 7th floor of the Rosenburg Building on the west campus of BIDMC where you will continue your recovery.
                <br /><br />
                <u>Waking Up/PACU</u><br />
                You will be in your hospital gown and have dressings or skin glue covering the five incisions on your abdomen. <br /><br />
                You will likely be breathing from an oxygen mask. This will help with your overall recovery and make you feel better. If you have obstructive sleep apnea and brought your CPAP/BiPAP device with you, your medical team will utilize this to help you breath, especially if you are on an ERAS protocol. <br /><br />
                You will also likely have sleeves on your lower legs, known as sequential compression devices, massaging your calves to help prevent blood clots. You will be receiving fluids through your IV. <br /><br />
                You will also have a pulse oximeter on one of your fingers to measure your oxygen levels, and there will be an automated blood pressure cuff routinely squeezing one of your arms to monitor your blood pressure. Finally, you will have telemetry leads on your chest to monitor your heart function. <br /><br />
                <u>Patient Experience</u><br />
                Immediately after your surgery, you will be fatigued and not feel like your normal self. This is normal because you just had major surgery. Pain and nausea are the two most common complaints from patients while they are in the PACU. You may also feel hazy and groggy, but these symptoms will resolve before you are transferred to the surgical wards. In general, these symptoms will gradually improve over the next few days as the anesthesia and opioid pain medication leaves your system. <br /><br />
                You will be receiving medication to help alleviate your pain and nausea. To enhance the speed of your recovery, your surgical team will provide you with an opioid-sparing pain medication regimen. <br /> <br />
                <u>Patient Expectations</u><br />
                If you feel that your pain is poorly controlled, please tell your nurse to make you feel more comfortable. However, it is important to understand that you will experience some pain. You may have pain at your incisions, inside your belly, and in your right shoulder. Similarly, if you still feel nauseated despite receiving anti-nausea medications, please tell your nurse to help better alleviate this discomfort and uneasiness. <br /><br />
                If your mouth is dry, you can also ask for a “water sponge” to alleviate this dryness. <br /><br />
                While you are in the PACU, you will need to use your inspiratory spirometer 10 times each hour. Your nurse will help you with this. You will also be required to get up and walk within 3 hours after your surgery concluded. You will have assistance with this as well. Finally, you will need to get out of your bed and walk to your chair at least twice throughout the day.
                `
            }, {
                title: 'Surgical Wards ',
                selected: false,
                dropdown: true, show: false,
                htmlContent: false,
                htmlDesc: `After your recovery in the PACU, you will be transferred to the surgical wards on the 7th floor of the Rosenberg Building on the west campus of BIDMC where you will continue your recovery.<br /><br />
                Again, during this time you will not feel like your normal self. You will feel fatigued, nauseated, and uncomfortable. You will also have pain. This will improve with time, activity (e.g. walking), and deep breathing (e.g. using your incentive spirometer). You should try to walk as much as you possibly can after your surgery.
                <br /><br />
                <u>Post-procedure Hospital</u><br /> Stay During your postoperative recovery in the hospital, you will be cared for by your bariatric surgical team, dedicated nursing staff, and other qualified healthcare professionals within the hospital. Typically, you will see your surgical team every day during their morning rounds.
                `
            }, {
                title: 'Activity ',
                selected: false,
                dropdown: true, show: false,
                htmlContent: false,
                htmlDesc: `Walk frequently throughout the day. This will help prevent blood clots. Try to walk every 2 to 3 hours you while you are awake. If you need assistance with walking, please ask your surgical team or your nurse. They will be happy to help you. You should start walking 3 hours after your surgery.<br /><br />
                When you are not walking, you should make sure you get out of your bed and move to your chair at least twice for one hour throughout the day. <br />
                <br />
                When you are not walking around the floor of the hospital or out of your bed, you should have your sequential compression devices on your calves to help prevent blood clots. <br /><br />
                You should also practice breathing exercises throughout the day. You should use your incentive spirometer at least 10 times an hour for every hour you are awake. Each time you use this, remember to take about 2 to 3 deep breaths and hold them for a few seconds before exhaling. Although this may seem excessive and unnecessary, this will hasten your recovery and help prevent pneumonia! If you do not have an incentive spirometer, you can also take deep breaths and/or cough.`
            }, {
                title: 'Diet ',
                selected: false,
                dropdown: true, show: false,
                htmlContent: false,
                htmlDesc: `Immediately following your surgery, you will, again, be “NPO”. This means no eating or drinking, although you may be able to suck on a sponge lollipop dipped in water to help alleviate your dry mouth. While you are NPO, you will still be receiving fluids through your IV to make sure you are adequately hydrated. <br /><br />
                In the surgical wards your diet will be advanced at the discretion of your surgeon through various stages. <br /><br />
                If patients are having difficulty tolerating a certain stage of their diet, they can just go back to the previous stage until they feel they are ready for advancement. <br /><br />
                Remember to never use straws as you recover!<br /><br />
                <b>Stage 1: Clear liquids</b><br />
                Sips of non-carbonated, decaffeinated, and low-sugar clear liquids, including water and broth. Drink at a rate no greater than 120 mL per hour or 1 fluid ounce every 15 minutes. We recommend that you start slowly at a rate of 1 fluid ounce every hour and gradually advance to a rate of 4 fluid ounces every hour. Essentially, this is a continuous process of taking tiny sips. After you tolerate this stage for approximately 2 hours, you advance to Stage 2. Patients typically take 2 to 3 hours to progress through Stage 1. <br /><br />
                <b>Stage 2: Modified Full</b><br />
                Still consists of sips of non-carbonated, decaffeinated, and low-sugar liquids. However, these liquids do not need to be clear. Examples of acceptable Stage 2 liquids include water, Crystal Light, broth, sugar-free popsicles, and protein shakes—with an emphasis on protein shakes. In the beginning of Stage 2, you should consume liquids at a rate that does not exceed 120 mL per hour or 1 fluid ounce every 15 minutes. However, there is no upper limit to the rate you consumer liquids in Stage 2. Your only rate requirement during Stage 2 is to 
                make sure you are still taking sips. While you are on Stage 2, you will need to consume about 80 grams of protein each day and at least 64 non-protein fluid ounces.<br />
                You will be discharged on Stage 2 and will remain on this diet until your two-week postoperative follow-up appointment where you will meet with your surgeon and registered dietitian. They will then advance you to Stage 3.
                <br /><br />
                <b>Stage 3</b><br />
                Stage 3 consists of soft mushy foods. You will advance to this stage at the discretion of your surgeon and registered dietitian at your two-week postoperative follow-up appointment.`
                 },
                 {
                title: 'Pain management ',
                selected: false,
                dropdown: true, show: false,
                htmlContent: false,
                htmlDesc: `
                You will slowly experience some pain and discomfort. Again, this is normal. You will be provided with an opioid-sparing pain medication regimen that will either be given to you through your IV or taken orally.<i> (If you wish to avoid opioid pain medication, you should tell your surgeon prior to your procedure.)</i><br /><br />
                If at any time your pain is too much, please tell your nurse so your medication can be adjusted. This pain medication will be converted to an oral form before you are discharged.`
                 },

                  {
                title: 'Nausea',
                selected: false,
                dropdown: true, show: false,
                htmlContent: false,
                htmlDesc: `You will likely be given medication to help your nausea. If you feel as though your nausea is still poorly controlled, please tell your medical team so that a more effective solution can be secured.`
                
                 },
                 {
                title: 'When do I leave the Hospital?',
                selected: false,
                dropdown: true, show: false,
                htmlContent: false,
                htmlDesc: `The recovery process can be straightforward if your surgery was without complications. If this is the case, your postoperative recovery period in the hospital should take 1 to 2 days. Most patients go home approximately 2 days after their surgery. <br /><br />

                If your surgery had complications, was converted to an open procedure, if you are having difficulty with urination, or if your surgeon simply wants to keep you in the hospital a little longer for observation, it may be 2 to 6 days before you are discharged.`
                
                 },
                 {
                title: 'Ready to leave',
                selected: false,
                dropdown: true, show: false,
                htmlContent: false,
                htmlDesc: `
                Please make sure you have a responsible adult to drive you home. You will not be allowed to leave the hospital on your own. It is also encouraged to have a responsible adult stay with you after your surgery to observe you and help care for you.<br /><br />
                Before you are discharged, you will have to show that you can walk without difficulty, urinate on your own, and tolerate your pain on oral medication.<br />
                <br />
                Before you are discharged from the hospital, it is important that you have a <b>clear understanding of your new medication regimen.</b><br /><br />
                <ul>
                    <li>You will likely be told to resume all your medications EXCEPT for certain blood-thinners (e.g. warfarin, apixaban, or dabigatran) and estrogen-containing medications (e.g. hormone replacement therapy or oral contraceptives).* Nevertheless, you should review this with either your nurse or a member of your surgical team.<br /><br />
                    <i>*Estrogen-containing medication is no longer effective after sleeve gastrectomy and can increase your risk of developing blood clots within the first 30 days after your surgery.</i></li>
                    <li>If you are discharged with a prescription for enoxaparin (Lovenox®), please make sure you know how to use this at home before leaving the hospital.</li>
                    <li>Patients frequently express concern over missing certain medications on the day of their surgery and think they should take extra doses when they get home to make up for missed doses. This is <i>never</i> the case.</li>
                    <li>We encourage you to <b>pick up your prescription pain medication</b> on your way home from your procedure, even if you do not think you will need it. Although you may not be in severe pain when leaving the hospital, this could change later on, and it is always best to have this pain medication available during your at-home recovery, especially during the first two days. Try to stay ahead of your pain. You may also be encouraged to purchase a laxative to help with your bowel movements.</li>
                </ul><br />
                Do not be discouraged if your discharge is taking longer than anticipated. Your team is working hard to make sure everything is in order for you. <br /><br />
                We encourage you not to expect too much from yourself as you continue your recovery after you leave the hospital.



                `
                
                 }];
        this.homeContent = [
            { title: "Overview",
                dropdown: false,
                show: false,
                chevron: true,
                description: "In the next section of this app we describe hour by hour what you should do to make a full and successful recovery. Insert the date you returned home and you will see your full protocol.<br /><br />\n      Immediately below, we answer some general questions and provide advice. <br /><br />\n      General theme: Push yourself, but slow and steady wins the race! <br /><br />\n      At home you should <b>have a responsible adult look out for you or check in periodically for the first 24 hours.</b><br /><br />\n      If you have questions see the section \u201C? \u2013 What to do if\u201D. A nurse or physician will also be available to assist you here and answer any questions or concerns you may have that are not answered in these sections. Should you have any severe pain or symptoms that cause concern, <b>call 911 for emergencies or go to your local/nearest Emergency Department.</b><br /><br />\n      "
            },
            { title: "Getting back to normal",
                dropdown: false,
                show: false,
                chevron: true,
                description: "It is important to stay adequately hydrated as you recover. You will likely feel quite weak and easily fatigued as you recover from surgery. Staying hydrated can help with this. <br /><br />Most patients return to their normal routine and levels of activity in about four weeks."
            }, {
                title: "Diet",
                dropdown: false,
                show: false,
                chevron: false,
                description: "After your surgery you will have to follow certain stages as you go back to your new \u201Cregular\u201D diet. The daily protocols you will find later in this app describe how to take care of yourself. These go from stage 1 to stage 4. <b>Please do not progress to the next stage of your diet without receiving approval from your medical team (both in the hospital and while at home as you recover)</b>. These stages are designed to provide you with the necessary nutrition to promote healing as you recover and prevent complications.<br /><br />\n        In general, you should avoid acidic foods (e.g. coffee, citrus, sauerkraut) or eating quickly, in large volumes, or late at night to reduce symptoms of acid reflux. Typically, patients figure out the diet and eating habits that work for them within the first year after surgery. It is also important for you to realize that achieving successful weight loss after surgery is dependent on you pursing a healthy diet and engaging in eating behaviors approved by your registered dietitian. <br /><br />\n        Online resources <br />Although you should go over your diet plans with your registered dietitian, these are some helpful online resources:\n        <ul>\n          <li>Diet (United States Department of Agriculture: <a href=\"https://health.gov/dietaryguidelines/2015/resources/2015-2020_Dietary_Guidelines.pdf\" target=\"_blank\">https://health.gov/dietaryguidelines/2015/resources/2015-2020_Dietary_Guidelines.pdf</a>, <a href=\"https://health.gov/dietaryguidelines/dga2000/document/build.htm\" target=\"_blank\">https://health.gov/dietaryguidelines/dga2000/document/build.htm</a>; American Dietetic Association: <a href=\"https://www.eatright.org/food\" target=\"_blank\">https://www.eatright.org/food</a>; American Heart Association <a href=\"https://recipes.heart.org/\" target=\"_blank\">https://recipes.heart.org/</a>) Calorie Counter: <a href=\"http://www.thecaloriecounter.com/\" target=\"_blank\">http://www.thecaloriecounter.com/</a>, <a href=\"https://www.sparkpeople.com/\" target=\"_blank\">https://www.sparkpeople.com/</a>; Recipes: Recipes for Life After Weight-Loss Surgery by Margaret Furtado, MS, RD, Eating Well After Weight Loss Surgery by Patt Levine and Michele Bontempo-Saray)</li>\n          <li>Supplements (National Institutes of Health: <a href=\"https://ods.od.nih.gov/\" target=\"_blank\">https://ods.od.nih.gov/</a>)</li>\n        </ul>"
            },
            {
                title: "Diet for patients with diabetes:",
                dropdown: false,
                show: false,
                chevron: false,
                description: "You need to monitor blood sugar levels so your endocrinologist or primary care provider can see if your diabetic medications need to be adjusted. It may be necessary that you increase your carbohydrate intake to ensure you maintain a safe level of glucose in your blood (e.g. between 80 and 120 mg/dL, although this value will vary from patient to patient)."
            },
            {
                title: "Medication",
                dropdown: false,
                show: false,
                chevron: true,
                description: "Your new medication during recovery is described in this app. Examples: \n\n      <ul><li>Enoxaparin sodium if candidate</li>\n\n      <li>Liquid, sugar-free acetaminophen</li>\n      <li>Oxycodone (or similar); 15 TAB supply</li>\n      <li>Liquid docusate sodium </li>\n      <li>Famotidine 40 mg QHS; 1 month supply </li>\n      <li>Ondansetron * Multivitamin (may or may not include calcium) </li>\n      <li>Incentive spirometer</li>\n</ul>"
            },
            {
                title: "Previous medications:",
                dropdown: false,
                show: false,
                chevron: true,
                description: "You will likely be told to resume all your medications except for certain blood-thinners (e.g. warfarin, apixaban, or dabigatran) and estrogen-containing medications (e.g. hormone replacement therapy or oral contraceptives). <br /><br />\n      Blood thinners make it easy to bleed. Your surgeon will want to consult with the prescribing physician to come up with a plan for their use. You should also ask if you should undergo a process known as \u201Cbridging\u201D with restarting your warfarin. If you take other blood thinners, such as dabigatran, this usually can be started a few days after surgery. Again, confirm with your surgeon or prescribing physician when to restart blood-thinning medications.<br /><br />\n        In general, estrogen-containing medications should be avoided for up to <b>two months</b> after your surgery to help prevent blood clots. You should consult your oral contraceptive provider before you restart this medication.<br /><br /><br />\n        All medications that you take after laparoscopic sleeve gastrectomy must either be chewable or crushable for a certain amount of time that will be specified by your surgeon. There are certain types of medications that cannot be crushed. These include enteric coated, extended release, and long acting medications. Sometimes you will be able to take a liquid form of the same medication.\n      "
            },
            {
                title: "Do gentle exercises",
                dropdown: false,
                show: false,
                chevron: true,
                description: "The sooner you sit up and walk around, the less likely you are to get blood clots or pneumonia. This will also improve your recovery from your procedure and improve your bowel function.<br /><br />\n      After your surgery, we encourage you to walk around your home as frequently as possible. Try to do this every 2 to 3 hours or at least 5 times a day until you are able to resume your normal activities. Essentially, the more you get up and move around, the better!<br /><br />\n      If you are not taking opioid pain medication and your strength has returned, you can try to increase your exercise intensity as you feel appropriate (e.g. light jogging and/or using a treadmill, elliptical trainer, stair climber, or stationary bike). Please stop this increased level of exercise if this makes you feel awful and focus on remaining adequately hydrated as you engage in physical activity.<br /><br />\n      You can also prevent blood clots while you are lying down and resting by performing ankle range-of-motion exercises. To do this, gradually move your foot toward the ceiling and then back down to the floor. Try to do this at least 10 times with each foot, at least five times each day, until you return to your normal activities. You should also try to avoid crossing your legs as you rest as this increases pressure in your lower legs and increases your risk of forming blood clots.<br /><br />\n      We encourage you to practice deep breathing exercises at home. This can be accomplished either with an incentive spirometer or by deep breathing on your own.<br /><br />\n      If you were discharged with an incentive spirometer, you should use this for the first 2 weeks you are home after your discharge. Use your incentive spirometer at least 10 times an hour for every hour you are awake. Each time you use this, remember to take about 2 to 3 deep breaths and hold them for a few seconds before exhaling. This will help your overall recovery and help prevent pneumonia. <br /><br />\n      If you were not discharged with an incentive spirometer, coughing or taking deep breaths will also improve your lung function and help prevent pneumonia.\n\n\n      "
            }, {
                title: "Sex",
                dropdown: false,
                show: false,
                chevron: true,
                description: "\n      if your surgeon used removable sutures, please wait until your sutures are removed. If your surgeon did not use removable sutures, please abstain from sexual activity until your surgeon tells you it is safe. This will likely be sometime after your postoperative follow-up appointment with your surgeon.<br /><br />\n        Although you can engage in sex when you feel your body is ready, we encourage you to wait about two weeks or until your sutures/staples are removed at your postoperative appointment when your surgeon indicates this is safe. <br /><br />\n      If your surgery was converted to an open procedure, you should wait at least 6 weeks before resuming sexual activity. <br />\n<u>Female patients</u> only (premenopausal and perimenopausal): Please remember that you will need to avoid getting pregnant for two years following your surgery.<br /><br />\nYou should also know that oral contraceptives may no longer be an effective form of birth control for you because of your surgery. Additionally, estrogen-containing medications, such as oral contraceptives, should be avoided for two months after your surgery to decrease your risk of developing blood clots.&nbsp;&nbsp;    \n\n      "
            }, {
                title: "Return to Work",
                dropdown: false,
                show: false, chevron: true,
                description: "\n        The time it takes patients to return to work varies from patient to patient. You may return to work in about a week or two if you feel well enough. Some patients require more time. You should check with your surgeon.<br /><br />\n        Many patients are ready to return to work in 2 weeks. Some patients require a month of recovery time or even 6 weeks before returning to work.<br /><br />\n        If your work involves lifting more than 15 pounds (7 kg), you might want to go back to work on light duty or wait 2 months from the date of your operation. Light lifting after your procedure as part of normal activities is permissible but may cause pain. If you ever have sharp pain at your incision sites with lifting, please stop! <br /><br />\n        To be safe, please discuss this with your surgeon before returning to work if your occupation is physically demanding. Your surgeon may want to see you in clinic before clearing you for heavy lifting. Lifting heavy objects too early could result in hernia formation.* <br /><br />\n        You may only return to work if you have been off opioid pain medication for 24 hours. Also, do not drive if you have taken opioid pain medication within the last 24 hours. <br /><br />\n        Older patients may find themselves more tired than usual for up to 12 weeks after surgery. Everyone is a little different. </br />\n        <br />\n        \n      "
            }, {
                title: "Pain Concerns",
                dropdown: false,
                show: false, chevron: true,
                description: "You will no longer be able to use anti-inflammatory medications (aspirin or NSAIDs) for pain as these medications increase your risk of ulcer formation and bleeding. <br /><br />\n      <u>Brief Version:</u><br />\n      Use your prescription pain medication as necessary. However, you should try to wean off opioid pain medication or avoid their use altogether if possible. Never overuse opioid pain medication. If you can tolerate your pain with over-the-counter medication, such as liquid, sugar-free acetaminophen, then that is encouraged. Take pain medication along with food and water to avoid stomach pain, but be sure to take small sips and portions of food as recommended by your surgeon.<br /><br />\n      You may not drive a motor vehicle if you have taken prescription opioid pain medication within the past 24 hours.<br /><br />\n      <u>Detailed Version:</u><br />\n      Your at-home instructions for postoperative pain management will be included in this app.<br /><br />\n      During this time, you will have pain. Follow the instructions from your surgeon. These will likely include the use of liquid, sugar-free acetaminophen and possibly NSAIDs for pain control, unless you have certain liver or kidney diseases or your surgeon. You should use your prescription pain medication if necessary but there can be side effects with these medications, including constipation, nausea, trouble breathing, sleepiness and, with long term use, dependence. Always take pain medication along with food and water to avoid belly pain, but be sure to take small sips and portions of food as recommended by your surgeon.<br /><br />\n      You may not drive a motor vehicle if you have taken opioid pain medication within the past 24 hours.\n      "
            }, {
                title: "Nauseous?",
                dropdown: false,
                show: false, chevron: true,
                description: "If you are feeling sick to your stomach, this is likely a result of your prescription pain medication or general anesthesia. Opioid medications can often increase the feeling of nausea. Stop taking your opioid pain medication and try a non-opioid pain medication that was approved as an alternative by your surgeon. Only do this if you think you will be able to tolerate your pain.<br /><br />\n      You may also feel nauseated if you have consumed to much fluid and/or food too quickly. Remember, your stomach is much smaller now and you will have to get used to eating smaller portions and drinking liquids with smaller sips over a longer period of time.<br /><br />\n      Although ginger ale is commonly recommended for an upset stomach, please DO NOT drink ginger ale as the carbonation found in soda can cause expansion of your new stomach pouch and the sugar it contains can cause dumping syndrome.<br /><br />\n      Certain medications reduce nausea and vomiting such as ondansetron, promethazine, or diphenhydramine that have been approved for use. Make sure you are adequately hydrated. <b>These medications should be avoided with some heart conditions. Please consult your surgeon or primary care provider before taking these.</b>"
            }, {
                title: "Proper disposal of opioid pain medications",
                dropdown: false,
                show: false, chevron: true,
                description: "<p>Finally, we encourage you to <b>properly dispose of unused opioid pain medication.</b> Surgical patients often do not use all of their prescription pain medication and then have leftover pills sitting in their medicine cabinets.<br /><br />\n      There are a few acceptable ways for you to safely discard leftover opioid pain medication. You can return these medications back to local participating pharmacies. You can also drop them off at your local participating police station. Another option is to take this medicine and mix it with an inedible substance, such as coffee grounds. You should then place this mixture in a sealable container and dispose of it in the trash. Also, be sure to get rid of all identifiable information on the label of your prescription for your own safety and protection. You should dump them into the toilet if medication is listed on FDA flush list.<br /></p>\n<p>Citation for opioid disposal:<br>\n<a href=\"https://www.fda.gov/Drugs/ResourcesForYou/Consumers/BuyingUsingMedicineSafely/EnsuringSafeUseofMedicine/Saf\neDisposalofMedicines/ucm186187.htm\" target=\"_blank\">https://www.fda.gov/Drugs/ResourcesForYou/Consumers/BuyingUsingMedicineSafely/EnsuringSafeUseofMedicine/Saf\neDisposalofMedicines/ucm186187.htm</a></p>"
            }, {
                title: "Follow up",
                dropdown: false,
                show: false, chevron: true,
                description: "<p>You will be required to have long-term follow-up starting immediately after your surgery to ensure safe weight loss. These include educational programs, adequate nutritional supplementation, exercise programs, and overall comprehensive health care with emotional and psychological support (e.g. dealing with issues such as body image, dealing with stresses related to changes to your body and the necessary lifestyle adjustments required after sleeve gastrectomy, and dealing with interpersonal relationships and societal perceptions during your weight loss journey).<br /><br />\n      Support groups, such as overeaters anonymous (<a href=\"https://oa.org/\" target=\"_blank\">www.oa.org/</a>) are useful after surgery. Your bariatric program may have their own support group.<br /><br />\n      Most surgeons would like to see their patients approximately 1 to 2 weeks after surgery. Your follow-up appointment will most likely already have been scheduled prior to your surgery or during your discharge. If for some reason you do not believe a postoperative follow-up appointment was scheduled for you, you should call your surgeon after you are home to schedule this. Your surgeon will look at your belly to assess the healing process and make sure everything is going well. You may also need to schedule appointments with other members of your bariatric team (e.g. registered dietitian, nurse, and/or bariatrician). <br /><br />\n      You may also need to schedule an appointment with your primary care physician to go over changes to your medications if appropriate.<br /><br />\n      Follow-up is also appropriate with any healthcare professional who is prescribing medication for you. As you lose weight, you will likely need to decrease the dosages of your medication.</p>"
            }
        ];
        this.homeConten2t = "<p><strong>Getting back to normal</strong><br>\nIt is important to stay adequately hydrated as you\nrecover.&nbsp;&nbsp;You will likely feel quite weak and easily\nfatigued as you recover from surgery.&nbsp;&nbsp;Staying\nhydrated can help with this.</p>\n<p><strong>Eat a normal diet after a couple of days</strong></p>\n\n<p><strong>Medication</strong><br>\n<i>Your new medication during recovery is described\nin this app.</i></p>\n<p>Previous medications: You will likely be told to\nresume all your medications except for certain\nblood-thinners (e.g.&nbsp;&nbsp;warfarin, apixaban, or\ndabigatran) and estrogen-containing medications\n(e.g.&nbsp;&nbsp;hormone replacement therapy or oral\ncontraceptives).</p>\n<p>Warfarin can be restarted within 24 hours after\nyour surgery, but confirm this with your surgeon or\nprescribing physician.&nbsp;&nbsp;You should also ask if you\nshould undergo a process known as \u201Cbridging\u201D\nwith restarting your warfarin.&nbsp;&nbsp;If you take other\nblood thinners, such as dabigatran, this usually\ncan be started a few days after surgery.&nbsp;&nbsp;Again,\nconfirm with your surgeon or prescribing physician\nwhen to restart blood-thinning medications.</p>\n<p>Estrogen-containing medications should be\navoided for up to two months after your surgery\nto help prevent blood clots.</p>\n<p><strong>Do gentle exercises\u2026</strong><br>\nThe sooner you sit up and walk around, the less\nlikely you are to get blood clots or pneumonia.\nYou should try to walk as much as possible (at\nleast 5 times a day).&nbsp;&nbsp;If you can get up and walk\nevery hour, this is even better.&nbsp;&nbsp;Walking also\nstimulates return of bowel function.<br><br>\nAlso, coughing or taking deep breaths will improve\nyour lung function and help prevent pneumonia.\nYou should take about 10 deep breaths and hold\nthem for a few seconds before exhaling.&nbsp;&nbsp;Do this at\nleast five times a day.&nbsp;&nbsp;You can also use an\nincentive spirometer (as instructed) if one was\nprovided for you.</p>\n<p><strong>Sex \u2026wait until sutures are removed</strong></p>\n\n<p><strong>Return to Work\u2026</strong><br>\n<i>You may return to work in about a week or two if\nyou feel well enough.</i><br><br>\nSome patients require 4 to 6 weeks of recovery\ntime before returning to work.&nbsp;&nbsp;If your work involves\nlifting more than 15 pounds (7 kg) you should also\nwait for 4-6 weeks.</p>\n<p><strong>Pain Concerns</strong><br>\nUse your prescription pain medication (usually a\nopioid) if necessary - but don\u2019t over-use.&nbsp;&nbsp;If you\ndon\u2019t need to take your pain medication, don\u2019t.&nbsp;&nbsp;If you can tolerate your pain with an over-\nthe-counter medicine like acetaminophen, do\nso.&nbsp;&nbsp;Always take pain medication along with food\nand water to avoid stomach pain.<br><br>\nYou may not drive a motor vehicle if you have\ntaken prescription pain medication within the past\n24 hours.</p>\n<p><strong>Nauseous?</strong><br>\nIf you are feeling nauseous, this is likely a result of\nyour prescription pain medication or general\nanesthesia.&nbsp;&nbsp;Ginger ale can help with an upset\nstomach.&nbsp;&nbsp;You can also stop taking your opioid\npain medication and try a non-opioid pain\nmedication that was approved as an alternative by\nyour surgeon.&nbsp;&nbsp;Only do this if you think you will be\nable to tolerate your pain.<br><br>\nYou can also take certain medications to reduce\nnausea and vomiting such as ondansetron,\npromethazine, or diphenhydramine that have been\napproved for use.&nbsp;&nbsp;Make sure you are adequately\nhydrated.<br><br>\n<p><strong>Disposal of opioid pain medications</strong><br>\n<i>You probably will have leftover pills.</i></p>\n<p>Here\u2019s how to dispose of them:\n<ul>\n<li>Return them to your pharmacy.</li>\n<li>Drop them off at your local police station.</li>\n<li>Take this medicine and mix it with an\ninedible substance.&nbsp;&nbsp;You should place\nthis mixture in a sealable container and\ndispose of it in the trash.</li></ul>\nAlso, be sure to get rid of all identifiable\ninformation on your prescription label for your own\nsafety and protection.</p>\n<p>Citation for opioid disposal:<br>\n<a href=\"https://www.fda.gov/Drugs/ResourcesForYou/Consumers/BuyingUsingMedicineSafely/EnsuringSafeUseofMedicine/Saf\neDisposalofMedicines/ucm186187.htm\" target=\"_blank\">https://www.fda.gov/Drugs/ResourcesForYou/Consumers/BuyingUsingMedicineSafely/EnsuringSafeUseofMedicine/Saf\neDisposalofMedicines/ucm186187.htm</a></p>";
    }

    HttpproviderProvider.prototype.getRecoveryContent = function () {
        return this.recoveryContent;
    };
    HttpproviderProvider.prototype.getHomeConent = function () {
        return this.homeContent;
    };
    HttpproviderProvider.prototype.getWhatToDoIfPagesTabs = function () {
        return this.menus;
        // return new Promise(resolve => {
        // this.http.get(this.apiUrl+'/path').subscribe(data => {
        //   resolve(data);
        // }, err => {
        //   console.log(err);
        // });
        // });
    };
    HttpproviderProvider.prototype.getPostProcedureContent = function (day) {
        return this.postProcedureContent[day];
    };
    HttpproviderProvider.prototype.getAboutProcedureList = function () {
        return this.aboutProcedureList;
    };
    HttpproviderProvider.prototype.getAboutProcedureListDetails = function (index) {
        return { content: this.aboutProcedureList[index], length: this.aboutProcedureList.length, subcontent:this.aboutProcedureList[index].subcontent};
    };
    HttpproviderProvider.prototype.getDuringProcedureList = function () {
        return this.duringProcedureList;
    };
    HttpproviderProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], HttpproviderProvider);
    return HttpproviderProvider;
}());
export { HttpproviderProvider };
//# sourceMappingURL=httpprovider.js.map