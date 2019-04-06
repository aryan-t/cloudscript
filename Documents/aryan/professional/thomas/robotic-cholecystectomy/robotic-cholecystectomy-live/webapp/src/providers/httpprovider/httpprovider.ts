import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HttpproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpproviderProvider {
	apiUrl:'';
	menus=[{name:'Normal side effects', index:0, 
	content:[{title:"Temperature over 103<sup>0</sup>F/39<sup>0</sup>C", desc:""},
				{title:"Severe stomach pain", desc:"<ul><li>Send text message to surgeon on call office <br>OR</li><li>Tap Call button to contact surgeon on call office immediately!</li></ul>"}]},
	 {name:'More symptoms 1', index:1},
	  {name:'More symptoms 2', index:2}];

    aboutProcedureList = [
     
     { title: "Is it too late to prevent it?",
                dropdown: false,
                subcontent: '',
                content: `Yes.&nbsp;&nbsp;If you have symptomatic gallstones, surgery is most likely indicated.&nbsp;&nbsp;Gallstones rarely go away on their own.&nbsp;&nbsp;However, the majority of gallstones actually do not cause pain.&nbsp;&nbsp;This means that most individuals with gallstones do not even know they have them.&nbsp;&nbsp;If it is incidentally discovered that a patient has gallstones, but those gallstones are not causing pain, surgery is not required.<br /><br />
                    Although there are numerous homeopathic/natural remedies that suggest gallstones can be treated without surgery, these have not been proven scientifically.&nbsp;&nbsp;There is medication that can be used to help dissolve gallstones, but this must be taken for the rest of your life, twice a day, in order to be effective.<br /><br />
                    The following patient factors increase the risk: weight (e.g.&nbsp;&nbsp;being overweight or obese), rapid weight loss, physical inactivity, diabetes mellitus, pregnancy, certain medications,* and diet.<br /><br />

                    <i>*Estrogen-containing medications (e.g.&nbsp;&nbsp;hormone replacement therapy and oral contraceptives), thiazide diuretics, ceftriaxone, fibrates, and octreotide</i>
`,
                img: './assets/imgs/gallbladder-disease.jpg' },
      {title:"What will happen if I don’t have this procedure?" ,dropdown:false, subcontent:'', 
      content:`It is extremely rare for gallstones to dissolve or pass on their own, and it is not recommended that patients avoid seeking medical attention for symptomatic gallstone disease in the hopes that they can avoid surgery, as this can lead to more serious diseases.

        <br /><br >If you chose not to undergo surgery, it is likely that your pain will persist.&nbsp;&nbsp;There is also a chance that your pain will become more severe, your health will further deteriorate, and you will require an emergency procedure.

        <br /><br />Death is also a possible outcome if you decide to forego surgery.
`, 
      img:'./assets/imgs/what-happens-if.jpg'},
      {title:"Are there alternative solutions?", dropdown:false, subcontent:'',
      content:`If you are suffering from gallbladder disease and are a strong surgical candidate, you should undergo surgical treatment.

<br /><br />For certain patients with gallstone disease, including those who are poor surgical candidates, there are other options available to eliminate gallstones or treat their complications.&nbsp;&nbsp;These include:
<br ><ul class="marginHeading"><li>Extended use of bile acid medication</li>
<li>Drainage of the gallbladder with removal of the gallstones through the skin</li>
<li>Antibiotic therapy (i.e.&nbsp;&nbsp;management of the infection only)</li></ul>

These options are not the primary therapy of choice because the gallbladder is not removed, leaving you susceptible to recurrence of your symptoms.

<br /><br />It is also worth noting that robotic cholecystectomy is available through both single-incision and multi-port approaches.&nbsp;&nbsp;Single-incision surgery utilizes one small incision at your belly button, whereas multi-port surgery utilizes four small incisions across your belly in a fashion similar to laparoscopic cholecystectomy.

<br /><br />Although single-incision surgery may seem like a more attractive option to you as the patient due to its potentially better cosmetic result, this option should not pursued.&nbsp;&nbsp;Single-incision robotic cholecystectomy is associated with a significantly higher rate of incisional hernia and is, therefore, considered sub-standard of care.&nbsp;&nbsp;In fact, single-incision laparoscopic cholecystectomy was found to have the same poor results when compared to multi-port laparoscopic cholecystectomy.

<br /><br />The bottom line: do not pursue single-incision robotic or laparoscopic cholecystectomy!

<br /><br />Citation for increased incisional hernia risk and for robotic cholecystectomy when comparing single- and multi-incision approaches:
<br /><a href="https://www.ncbi.nlm.nih.gov/pubmed/29866396" target="_blank">https://www.ncbi.nlm.nih.gov/pubmed/29866396</a>

<br /><br />Citation for increased incisional hernia risk and better cosmesis for single-incision laparoscopic cholecystectomy:
<br /><a href="https://www.ncbi.nlm.nih.gov/pubmed/23619321" target="_blank">https://www.ncbi.nlm.nih.gov/pubmed/23619321</a>

      `,

      img:'./assets/imgs/alternative-solutions.jpg'},

      {title: "What are the risks of this procedure?", subcontent:`All procedures have risks.&nbsp;&nbsp;When compared to laparoscopic <b>gastric bypass</b>, studies have shown that laparoscopic <b>sleeve</b> gastrectomy has a greater safety profile.&nbsp;&nbsp;But it is less effective in helping patients lose weight and improving comorbidities, such as diabetes.&nbsp;&nbsp;On the other hand, when compared to laparoscopic adjustable gastric banding, laparoscopic sleeve gastrectomy has a weaker safety profile but is more effective in helping patients lose weight and improving other medical issues.&nbsp;&nbsp;<br /><br />Overall, serious risks from laparoscopic sleeve gastrectomy are estimated to occur in 2% of patients.&nbsp;&nbsp;Meanwhile, mortality ranges from <b>0 to 1.2%</b>.&nbsp;&nbsp;The likelihood of experiencing any one of the following complications is dependent upon your individual clinical scenario and the experience of your surgeon.`, 
      dropdown:false, 
      content:`
      Robotic cholecystectomy was recently found to have similar safety and perioperative outcomes as laparoscopic cholecystectomy.&nbsp;&nbsp;With that in mind, serious risks from laparoscopic cholecystectomy are limited, occurring at a rate of less than <b>2 to 3% </b>for the vast majority of them.&nbsp;&nbsp;The likelihood of experiencing any one of the following complications is dependent upon your individual clinical scenario and the experience of your surgeon.

<br /><br />This is often a relatively straightforward procedure.&nbsp;&nbsp;However, the risks include:

<br /><ul class="marginHeading"><li><b>Damage</b> to the biliary/cystic duct or bowel with possible <b>perforation</b> and leakage of contents into the belly</li>
<li>Injury to nearby blood vessels or liver with subsequent <b>bleeding</b></li>
<li>Postoperative complications requiring <b>further surgery</b></li>
<li><b>Infection</b> (of the belly or surgical incision sites)</li>
<li>Localized <b>numbness</b></li>
<li><b>Blood clots</b> (deep venous thrombosis)</li>
<li><b>Difficulty breathing</b> (pulmonary embolism)</li>
<li><b>Heart complications</b></li>
<li><b>Need for additional procedures</b> to retrieve stones that move into the bile duct during surgery</li>
<li><b>Hernia formation</b> at incisions sites</li>
<li><b>Death</b></li>
</ul>
Your surgeon should discuss these potential risks with you and answer any questions you may have.

      `,
      img:'./assets/imgs/risk-of-procedure.jpg'},
    ]

    duringProcedureList = [
      {title:"Preparation",
      dropdown:false,
      description:`<br><div class="page-image">
                 <img width="100%" height="70%" src="./assets/imgs/preparation.jpg">
              </div>
               <p> 

Once you arrive at the hospital, follow the instructions from your surgeon’s office regarding where to find the information desk.&nbsp;&nbsp;You will then be directed to the preoperative holding area where you will need to check-in.&nbsp;&nbsp;Family and friends may accompany you here.

<br /><br />The preoperative holding area is the location where surgical patients wait to have their operation.&nbsp;&nbsp;It can be a busy place, especially early in the morning, and will often have numerous other patients, along with their friends and family members, in the other bed spaces around you.&nbsp;&nbsp;There will also be numerous healthcare professionals who will be preparing their respective patients for their own operations.

<br /><br />After you check-in at the preoperative holding area, you will be asked to take off all your clothing, jewelry, glasses/contact lenses, hair accessories, and dentures and to change into a hospital gown.&nbsp;&nbsp;You will also need to put on a surgical shower cap, which will be provided for you.

<br /><br />You will have a dedicated nurse during your time in the preoperative holding area.&nbsp;&nbsp;Your nurse will ensure you are comfortable and well taken care of prior to your surgery.&nbsp;&nbsp;Remember that you are to refrain from eating or drinking during this time.&nbsp;&nbsp;Your nurse or another member of your healthcare team will place an IV in your arm.

<br /><br />Prior to your surgery, you will meet your anesthesia team.&nbsp;&nbsp;They will describe the anesthesia process and answer any questions you may have.&nbsp;&nbsp;You will then be asked to sign a consent form to receive general anesthesia.&nbsp;&nbsp;They will give you medications to help you feel at ease while you wait for your procedure.&nbsp;&nbsp;The anesthetic medications will be delivered to you through the IV placed in your arm.

<br /><br />In the preoperative holding area, you will meet several members of the surgical team.&nbsp;&nbsp;This will include your surgeon and operating room nurses.&nbsp;&nbsp;If your surgery is being performed at a teaching hospital, you may also meet surgeon trainees, called interns and residents, and medical students.&nbsp;&nbsp;Your surgical team will also ask you to sign a consent form for the procedure and, depending on your situation, for blood product administration.&nbsp;&nbsp;Ask your surgeon any questions you may have so that you understand everything that is being communicated to you.

<br /><br />Once your operating room is prepared and your surgical and anesthesia team are ready to transport you to the OR, you will have the opportunity to say goodbye to your friends and family members accompanying you.&nbsp;&nbsp;They will then be escorted to the designated waiting area.&nbsp;&nbsp;They can either wait there or leave and plan to come back when called.&nbsp;&nbsp;One of them should provide the staff or your surgeon with a phone number so that they can be contacted after your procedure has been completed.&nbsp;&nbsp;

<br /><br />You will then be transported to your operating room.&nbsp;&nbsp;

<br /><br />Your operating room will often be quite bright and cold.&nbsp;&nbsp;You will have blankets on top of you to keep you warm.&nbsp;&nbsp;You will have to answer some questions from the operating room nursing staff and anesthesiologists.&nbsp;&nbsp;These questions will be about who you are and what surgery you are having and are asked routinely as part of best practices for patient safety.&nbsp;&nbsp;You will then most likely be asked to move yourself from your bed to the operating room table.&nbsp;&nbsp;If you need help with this, the staff inside the operating room will be happy to assist.&nbsp;&nbsp;Your anesthesiologist will then administer general anesthesia and you will fall asleep to allow your procedure to begin.

<br /><br />Occasionally, surgeries do not start at their scheduled time.&nbsp;&nbsp;You should be prepared for this as a possibility on the day of your surgery and be assured that your healthcare team will always provide you with the best care and will begin your procedure as soon as they can.






               </p> 
              `,
      show:false,
      selected:false},
      {title:"What happens?", 
      dropdown:false,
      description:`<div class="page-image">
                 <img width="100%" height="70%" src="./assets/imgs/what_happens_beginning.jpg">
              </div>
        When you are in the operating room, you will undergo general anesthesia and have a breathing tube, otherwise known as an endotracheal tube, placed down your throat (i.e.&nbsp;&nbsp;intubation).&nbsp;&nbsp;You will be asleep for this and not feel any discomfort as the breathing tube is being placed, but you may have a sore throat after you wake up from your surgery.&nbsp;&nbsp;Your breathing tube will be removed before you wake up from your surgery.

<br /><br />Anesthesia will prevent you from feeling or remembering the procedure and will be given to you through your IV.&nbsp;&nbsp;Your endotracheal tube will ensure your lungs receive oxygen during the procedure.&nbsp;&nbsp;Special boots, known as sequential compression devices, will be placed on your legs to massage them and prevent blood clots.

<br /><br />During the procedure, your surgeon will set up the robot over top of you and make four tiny incisions in your belly.&nbsp;&nbsp;One of these will be around your belly-button and the other three will be just below your ribcage.&nbsp;&nbsp;

<br /><br />Gas will be pumped into your belly to provide your surgeon with the space needed to both see inside with a small camera, known as a laparoscope, and perform the procedure.&nbsp;&nbsp;This laparoscope has two separate lenses that allow a high-definition, 3-dimensional picture from inside your belly to be transmitted onto screens inside the operating room and within the control console, which is where your surgeon will be sitting to perform the procedure.&nbsp;&nbsp;Your four incisions will allow entry of this camera and the instruments that your surgeon needs to complete the procedure into your belly.

<br /><br />Your surgeon will use the robot-assisted camera and small instruments, which are extensions of the robot’s arms, to free up the gallbladder while sitting at a control console away from you.&nbsp;&nbsp;Once your gallbladder is no longer attached to anything, it is placed in a bag and removed through one of your incisions.

<br /><br />Your surgeon will then make sure everything looks well inside your belly before closing your four incisions and applying dressings over them.&nbsp;&nbsp;The procedure typically takes a little over 2 hours.

<br /><br />On occasion, your surgeon may decide to take a special x-ray of your gallbladder during the procedure.&nbsp;&nbsp;This is known as a cholangiogram, and it allows your surgeon to better visualize your bile ducts.

<br /><br />Rest assured, the robot does not perform your surgery on its own and is always entirely under the control of your surgeon.&nbsp;&nbsp;With the 3-dimensional image provided to your surgeon, along with the robot’s enhanced instrument ergonomics, your surgeon has improved spatial awareness and maneuverability.&nbsp;&nbsp;It is also worth noting that a qualified member of the surgical team will be standing by you the entire time to help maintain the robot.&nbsp;&nbsp;

<br /><br />Click HERE to see a video of the surgery in action.&nbsp;&nbsp;<br />
<a href="https://www.saintpetershcs.com/Services/Robotic-Surgery" target="_blank">https://www.saintpetershcs.com/Services/Robotic-Surgery</a>

<br><div class="page-image">
                 <img width="100%" height="70%" src="./assets/imgs/what_happens_end.jpg">
              </div>

      `,


      show:false,
    selected:false},
      {title:"Just after", 
      dropdown:false,
      description:`
        Often during this process when the anesthesiologist is helping you recover, your attending surgeon will call the number of the friend or family member accompanying you that day to tell him or her how the procedure went and will provide a rough estimate of when you will be able to leave.&nbsp;&nbsp;Your surgeon will only do this if you gave her permission to call before your operation.
<br /><br />
      When the anesthesiologist and surgical team are ready, you will be transported to the post-anesthesia care unit, commonly referred to as the PACU, where you will be in the capable hands of the PACU nursing staff as you continue your recovery from general anesthesia.

      `,
       show:false,
    selected:false,}
    ]
    postProcedureContent = [
     { type:'checkbox',
       content:[{
         title:'<b><u>Breakfast:</u></b>',
         selected:false,
         htmlContent:false,
         dropdown:true,
         show:false,
         htmlDesc:`Liquids, coffee or tea, crackers,yogurt, etc.&nbsp;&nbsp;No cereals.`
        },
        {
         title:'<b><u>After breakfast:</u></b>',
         selected:false,
          dropdown:true,
         show:false,
         htmlContent:false,
         htmlDesc:`Take opioid medication 250mg`
        },
        {
         title:'<b><u>Early Morning:</u></b>',
         selected:false,
          dropdown:true,
         show:false,
         htmlContent:false,
         htmlDesc:`Walk at home for 20 minutes.No stairs yet.&nbsp;&nbsp;No running yet.`
        },
        {
         title:'<b><u>Mid-morning</u></b>: ',
         selected:false,
         show:false,
          dropdown:true,
         htmlContent:false,
         htmlDesc:`Snack – crackers, liquids, etc.`
        },
        {
         title:'<b><u>Late morning</u></b>:',
         selected:false,
          dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk at home for 20 minutes`
        },
        {
         title:'<b><u>Lunch</u></b>: ',
         selected:false,
          dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Small lunch – light soup, crackers,liquids`
        },
         {
         title:'<b><u>After lunch:</u></b>',
         selected:false,
          dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk at home for 20 minutes`
        },
         {
         title:'<b><u>Mid-afternoon:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Nap`
        },
         {
         title:'<b><u>After nap</u></b>: ',
         selected:false,
          dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Snack`
        },
         {
         title:'<b><u>Late-afternoon:</u></b> ',
         selected:false,
          dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk at home for 20 minutes`
        },
         {
         title:'<b><u>Supper: Small meal:</u></b> ',
         selected:false,
          dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`soups, crackers, etc.&nbsp;&nbsp;No alcohol.&nbsp;&nbsp;No spicy foods.&nbsp;&nbsp;No cereals.`
        },
         {
         title:'<b><u>After dinner</u></b>: ',
         selected:false,
          dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Take opioid medication 250 mg`
        },
         {
         title:'<b><u>Evening</u></b>: ',
         selected:false,
          dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk at home for 20 minutes`
        },
         {
         title:'<b><u>Wound care</u></b>: ',
         selected:false,
          dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Keep dry.&nbsp;&nbsp;Should require no action.`
        },
        {
         title:'<b><u>NO</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`shower or bath, swimming, lifting over 15 pounds (7 kg),`
        },

       ]
     },
     {
       type:'checkbox',
      content:[{
         title:'<b><u>Breakfast</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:true,
          htmlDesc:`<p>Liquids, coffee or tea, toast, eggs (not fried), yogurt, fruit, etc.&nbsp;&nbsp;No cereals.&nbsp;&nbsp;No meats.<ul class="marginHeading"><li><a href="https://health.gov/dietaryguidelines/2015/resources/2015-2020_Dietary_Guidelines.pdf" target="_blank">https://health.gov/dietaryguidelines/2015/resources/2015-2020_Dietary_Guidelines.pdf</a></li>
          <li><a href="https://health.gov/dietaryguidelines/dga2000/document/build.htm" target="_blank">https://health.gov/dietaryguidelines/dga2000/document/build.htm</a></li></ul>  </p>`
        },
        {
         title:`<b><u>After breakfast:</u></b> `,
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Take opioid medication 250 mg`
        },
        {
         title:'<b><u>Early Morning:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk at home for 20 minutes.&nbsp;&nbsp;No stairs yet.&nbsp;&nbsp;No running yet.`
        },
        {
         title:'<b><u>Mid-morning</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Snack – crackers, liquids, etc.`
       },
        {
         title:'<b><u>Late morning</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk at home for 20 minutes`
        },
        {
         title:'<b><u>Lunch:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Small lunch – light soup, crackers, liquids,`
        },
          {
         title:'<b><u>After lunch:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk at home for 20 minutes`
        },
          {
         title:'<b><u>Mid-afternoon</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Nap`
        },
          {
         title:'<b><u>After nap</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Snack`
        },
          {
         title:'<b><u>Late-afternoon:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk at home for 20 minutes`
        },
          {
         title:'<b><u>Supper:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`<b><u>Small meal</u></b>: soups, crackers, etc.&nbsp;&nbsp;No alcohol.&nbsp;&nbsp;No spicy foods.&nbsp;&nbsp;No cereals.`
        },
        {
         title:'<b><u>After dinner:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Take opioid medication 250 mg`
        },
        {
         title:'<b><u>Evening:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk at home for 20 minutes.`
        },
        {
         title:'<b><u>NO</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`shower or bath, swimming, lifting over 15 pounds (7 kg).`
        },
        {
         title:'<b><u>Avoid:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`crossing legs – for a week.`
        },

       ]
     },
     {
       type:'checkbox',
      content:[{
         title:'<b><u>Shower:</u></b>',
         selected:false,
         show:false,
         htmlContent:true,
         dropdown:true,
         htmlDesc:`You may shower 48 hours after surgery.&nbsp;&nbsp;Before
showering, remove your dressing and be careful
not to disturb your sutures/staples or the adhesive
strips or glue above your incisions.&nbsp;&nbsp;Your incisions
should only be rinsed with a small amount of
water to clean it of dried debris along its edges.
Use a towel to pat them dry.&nbsp;&nbsp;Apply clean
dressings after your shower.&nbsp;&nbsp;Do not take a bath
until your incisions are well-healed (typically 2 to 3
weeks) or until your surgeon approves of this at
your postoperative appointment.&nbsp;&nbsp;Bathing or
swimming before your incisions have healed puts
you at risk of infection.`
        },{
         title:'<b><u>Wound care:</u></b>',
         selected:false,
         dropdown:true,
         show:false,
         htmlContent:true,
         htmlDesc:`Keep the incisions clean and dry.&nbsp;&nbsp;Your four
incisions will be covered by a clear adhesive with
a white dressing underneath.&nbsp;&nbsp;However, typically
these dressings should be removed 48 hours after
your procedure and have fresh ones placed.
Underneath your dressing there will either be a
clear glue, or, thin white adhesive strips over your
sutures, or staples.&nbsp;&nbsp;Please do not remove the
glue, adhesive white strips, or staples above your
incisions.<br>
<br>
Thoroughly wash your hands before touching or
cleaning your incisions.&nbsp;&nbsp;If your incisions have
adhesive strips, they will typically fall off within 10
days or be taken off by your surgeon at your
postoperative appointment.&nbsp;&nbsp;If, instead, your
incisions are covered with a clear glue, this will
wear off naturally in around the same time period.
Your surgeon will remove the suture or staples at
your postoperative appointment.<br>
<br>
The dressings over your incisions should be
changed if they ever become wet.&nbsp;&nbsp;Once your
wounds have stopping draining, you no longer
need to keep a dressing on them.<br>
<br>
Do not use ointments on your incisions unless
your surgeon instructed you to do this.&nbsp;&nbsp;Your
incisions will become less prominent over the next
6 to 12 months.&nbsp;&nbsp;During this time, it is important to
keep them out of direct sunlight to avoid scar
discoloration.`
        },{
         title:'<b><u>Breakfast:</u></b> ',
         selected:false,
         show:false,
          dropdown:true,
         htmlContent:false,
         htmlDesc:`Liquids, coffee or tea, toast, eggs (not fried), yogurt, fruit, cereals, etc.`
        },{
         title:'<b><u>After breakfast:</u></b> ',
         selected:false,
         dropdown:true,
         show:false,
         htmlContent:false,
         htmlDesc:`Take opioid medication 250 mg`
        },{
         title:'<b><u>Early Morning:</u></b> ',
         selected:false,
         show:false,
         dropdown:true,
         htmlContent:false,
         htmlDesc:`Walk at home for 20 minutes.&nbsp;&nbsp;No stairs yet.&nbsp;&nbsp;No running yet.`
        },{
         title:'<b><u>Mid-morning:</u></b> ',
         selected:false,
         show:false,
         dropdown:true,
         htmlContent:false,
         htmlDesc:`Snack – crackers, liquids, etc.`
        },{
         title:'<b><u>Late morning:</u></b> ',
         selected:false,
         show:false,
         dropdown:true,
         htmlContent:false,
         htmlDesc:`Walk at home for 20 minutes`
        },{
         title:'<b><u>Lunch:</u></b> ',
         selected:false,
         show:false,
         dropdown:true,
         htmlContent:false,
         htmlDesc:`Small lunch – light soup, crackers, bread, cheese, liquids`
        },{
         title:'<b><u>After lunch</u></b>: ',
         selected:false,
         show:false,
         dropdown:true,
         htmlContent:false,
         htmlDesc:`Walk at home for 20 minutes`
        },{
         title:'<b><u>Mid-afternoon:</u></b> ',
         selected:false,
         show:false,
         dropdown:true,
         htmlContent:false,
         htmlDesc:`Nap`
        },{
         title:'<b><u>After nap</u></b>: ',
         selected:false,
         show:false,
         dropdown:true,
         htmlContent:false,
         htmlDesc:`Snack`
        },{
         title:'<b><u>Late-afternoon</u></b>: ',
         selected:false,
         show:false,
         dropdown:true,
         htmlContent:false,
         htmlDesc:`Walk at home for 20 minutes`
        },{
         title:'<b><u>Supper: Small meal:</u></b> ',
         selected:false,
         show:false,
         dropdown:true,
         htmlContent:false,
         htmlDesc:`soups, bread, cheese, vegetables, fruit, etc.&nbsp;&nbsp;No alcohol.&nbsp;&nbsp;No spicy foods.`
        },{
         title:'<b><u>After dinner:</u></b> ',
         selected:false,
         show:false,
         dropdown:true,
         htmlContent:false,
         htmlDesc:`Take opioid medication 250 mg`
        },{
         title:'<b><u>Evening:</u></b> ',
         selected:false,
         show:false,
         dropdown:true,
         htmlContent:false,
         htmlDesc:`Walk at home for 20 minutes`
        }
        ,{
         title:'<b><u>NO</u></b>: ',
         selected:false,
         show:false,
         dropdown:true,
         htmlContent:false,
         htmlDesc:`swimming, lifting over 15 pounds (7 kg).`
        }],
     },
     {
       type:'checkbox',
       content:[{
         title:'<b><u>Breakfast:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Gradually go back to your regular diet.&nbsp;&nbsp;But still have limited fat.`
        },{
         title:'<b><u>After breakfast</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Take opioid medication 250 mg`
        },{
         title:'<b><u>Early Morning</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk outside or at home for 20 minutes.&nbsp;&nbsp;No stairs yet.&nbsp;&nbsp;No running yet.`
        },{
         title:'<b><u>Mid-morning:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Snack`
        },{
         title:'<b><u>Late morning</u></b>: ',
         selected:false,show:false,
         dropdown:true,
         htmlContent:false,
         htmlDesc:`Walk for 20 minutes`
        },{
         title:'<b><u>Lunch:</u></b>',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Regular, but limit fat.`
        },{
         title:'<b><u>After lunch:</u></b>',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk for 20 minutes`
        },{
         title:'<b><u>Mid-afternoon:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Nap`
        },{
         title:'<b><u>After nap</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Snack`
        },{
         title:'<b><u>Late-afternoon</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk for 20 minutes`
        },{
         title:'<b><u>Supper</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Regular meal.&nbsp;&nbsp;Limited alcohol.&nbsp;&nbsp;No spicy foods.`
        },{
         title:'<b><u>After dinner</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Take opioid medication 250 mg`
        },{
         title:'<b><u>Evening:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk for 20 minutes`
        },{
         title:'<b><u>NO:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Bath, swimming, lifting over 15 pounds (7 kg).`
        }]
     },
      {
       type:'checkbox',
       content:[{
         title:'<b><u>Breakfast:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Your regular meal.`
        },{
         title:'<b><u>After breakfast</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Take opioid or replacement medication 250 mg`
        },{
         title:'<b><u>Driving</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Should be ok.&nbsp;&nbsp;But not if you are still taking opioid pain medication within the last 24 hours.`
        },{
         title:'<b><u>Early Morning:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk for 20 minutes.&nbsp;&nbsp;Slowly try stairs – if pain, wait.&nbsp;&nbsp;No running.`
        },{
         title:'<b><u>Mid-morning:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Snack`
        },{
         title:'<b><u>Late morning</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk for 20 minutes`
        },{
         title:'<b><u>Lunch</u></b>:',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Regular.`
        },{
         title:'<b><u>After lunch</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk for 20 minutes`
        },{
         title:'<b><u>Mid-afternoon:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Nap`
        },{
         title:'<b><u>After nap:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Snack`
        },{
         title:'<b><u>Late-afternoon</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk for 20 minutes`
        },{
         title:'<b><u>Supper:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Regular meal.&nbsp;&nbsp;Limited alcohol.&nbsp;&nbsp;No spicy foods.`
        },{
         title:'<b><u>After dinner:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Take opioid medication 250 mg`
        },{
         title:'<b><u>Evening</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk for 20 minutes`
        },{
         title:'<b><u>NO:</u></b> ',
         selected:false,
         dropdown:true,
         htmlContent:false,
         htmlDesc:`Bath, swimming, lifting over 15 pounds (7 kg).`
        },]
     },
     {
       type:'checkbox',
       content:[{
         title:'<b><u>Breakfast</u></b>',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:``
        },
        {
         title:`<b><u>After breakfast</u></b>: `,
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Take opioid medication 250 mg`
        },
        {
         title:'<b><u>Early Morning</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk for 20 minutes.&nbsp;&nbsp;Slowly try the stairs again.&nbsp;&nbsp;No running.`
        },
  //       {
  //        title:'Afternoon: Exercise/view recommended exercises',
  //        selected:false,
  //        htmlContent:true,
  //        htmlDesc:  `<video controls="controls" width="20%" preload="metadata"  webkit-playsinline="webkit-playsinline" class="videoPlayer">
  //  <source src="./assets/videos/file_example_MP4_480_1_5MG.mp4" type="video/mp4" />
  // </video>`,
  //       },
        {
         title:'<b><u>Mid-morning</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Snack`
        },
        {
         title:'<b><u>Late morning</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk for 20 minutes`
        },
        {
         title:'<b><u>Lunch</u></b>',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:``
        },
        {
         title:'<b><u>After lunch:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk for 20 minutes`
        },
        {
         title:'<b><u>Mid-afternoon</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Nap`
        },
        {
         title:'<b><u>After nap</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Snack`
        },
        {
         title:'<b><u>Late-afternoon:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk for 20 minutes`
        },
        {
         title:'<b><u>Supper:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Limited alcohol.&nbsp;&nbsp;No spicy foods.`
        },
        {
         title:'<b><u>After dinner</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Take opioid medication 250 mg`
        },
         {
         title:'<b><u>Evening</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk for 20 minutes`
        },
         {
         title:'<b><u>NO</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Bath, swimming, lifting over 15 pounds (7 kg).`
        },
       ]
     },
      {
       type:'checkbox',
       content:[ {
         title:'<b><u>Breakfast</u></b>',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:``
        }, {
         title:'<b><u>After breakfast</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Take pain medication as needed.&nbsp;&nbsp;If opioid not needed take over-the counter pain relief`
        }, {
         title:'<b><u>Early Morning</u></b>: ',
         selected:false,show:false,
         dropdown:true,
         htmlContent:false,
         htmlDesc:`Walk for 20 minutes.&nbsp;&nbsp;Slow stairs.&nbsp;&nbsp;No running.`
        }, {
         title:'<b><u>Mid-morning:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Snack`
        }, {
         title:'<b><u>Late morning</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk for 20 minutes`
        }, {
         title:'<b><u>Lunch</u></b>',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:``
        }, {
         title:'<b><u>After lunch</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk for 20 minutes`
        }, {
         title:'<b><u>Mid-afternoon:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Nap`
        }, {
         title:'<b><u>After nap</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Snack`
        }, {
         title:'<b><u>Late-afternoon:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk for 20 minutes`
        }, {
         title:'<b><u>Supper</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Limited alcohol.&nbsp;&nbsp;No spicy foods.`
        }, {
         title:'<b><u>After dinner:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Take pain medication 250 mg`
        }, {
         title:'<b><u>Evening:</u></b> ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Walk for 20 minutes`
        }, {
         title:'<b><u>NO</u></b>: ',
         selected:false,
         dropdown:true,show:false,
         htmlContent:false,
         htmlDesc:`Bath, swimming, lifting over 15 pounds (7 kg).`
        }]
     },
      {
       type:'textanddropdown',
       htmlContent:true,
       selected:false,
         dropdown:false,
       content:[{
         text:`<ul><li>Regular meals.</li>
<li>Continue to exercise about 5 times a day.</li>
<li>NO: bath, swimming, lifting over 15 pounds (7
kg).</li></ul>`,
  dropdown:[{
    title:'Surgeon visit',
    content:`<ul><li>
Approximately one week after surgery, you
should plan on seeing your surgeon to
make sure your belly is healing properly.
This appointment will either be made for
you when you are being discharged, or
should be made by you when you return
home.</li>
<li>Sutures and staples may be removed at
this time.</li>
<li>You may also need to set up an
appointment with your primary care
provider to go over any medication
changes if necessary.</li></ul>`
  }]
       }]
     },
      {
       type:'text',
       content:`<ul><li><b><u>Allowed:</u></b> If incisions have healed, bath and
swimming.</li>
<li> <b><u>Allowed:</u></b> sex, after sutures are removed</li>
<li><b><u>Continue</u></b> to exercise about 5 times a day.&nbsp;&nbsp;Pick
up walking pace.&nbsp;&nbsp;No running until you feel strong but stop if it feels awful.</li>
<li><b><u>Lifting:</u></b> slowly increase the weight you lift.
Slowly.</li></ul>`,
         dropdown:false,
       htmlContent:false
     },
     {
       type:'text',
       content:`<p><strong>That's the end of your recovery protocol.</strong></p>
          <p>You should be feeling pretty good, but a little sore in obvious places.&nbsp;&nbsp;So, gradually, start to live the life you had before.&nbsp;&nbsp;Except - no heavy lifting and no strenuous activity for a month more.</p>
          <p>Yes, you can start driving now, but only if:</p>
          <ul>
            <li>You can wear a seatbelt without pain, and</li>
            <li>If you can make an emergency stop without pain</li>
          </ul>
          
          <p>If not, wait a few days and try again.</p>`,
         dropdown:false,
       htmlContent:false
     }

    ]

   
    recoveryContent = [{
                title: 'Waking up ',
                selected: false,
                dropdown: true, show: false,
                htmlContent: false,
                htmlDesc: `
                When you wake up and start to remember events, you will be in the post-anesthesia care unit, otherwise known as the PACU.&nbsp;&nbsp;Here you will be surrounded by other patients who are also recovering from their own surgeries.&nbsp;&nbsp;

                <br /><br />You will most likely be in the PACU for 1 to 4 hours.&nbsp;&nbsp;This is the time it takes for the anesthesia to wear off to an acceptable level.&nbsp;&nbsp;During this time, you will have a dedicated nurse care for you.&nbsp;&nbsp;Once you are stable, you will either be transferred to the surgical wards where you will continue your recovery or you will be discharged from the hospital.
   
                `
            },  
                 {
                title: 'Pain management ',
                selected: false,
                dropdown: true, show: false,
                htmlContent: false,
                htmlDesc: `
                 Immediately after the surgery you may not feel like your normal self.&nbsp;&nbsp;You may feel hazy, groggy, fatigued, and uncomfortable.&nbsp;&nbsp;These symptoms will gradually improve over the next few days as the anesthesia and opioid pain medication leaves your system.&nbsp;&nbsp;You may also feel nauseated.&nbsp;&nbsp;This is normal and due to the anesthesia in your system but will improve with time.&nbsp;&nbsp;If you feel nauseated, please tell your nurse as he or she can provide you with medication to help alleviate this discomfort and uneasiness.&nbsp;&nbsp;If your mouth is dry, you can also ask for a “water sponge” to alleviate this dryness.&nbsp;&nbsp;

                <br /><br />Finally, you will also be experiencing some pain.&nbsp;&nbsp;This is normal since you <i>just had surgery</i>.&nbsp;&nbsp;You may have pain at your incisions, inside your belly, and in your right shoulder.&nbsp;&nbsp;Your surgical team will provide you with a pain medication regimen.
               `
                 },

                  {
                title: 'Nausea',
                selected: false,
                dropdown: true, show: false,
                htmlContent: false,
                htmlDesc: `You will likely be given medication to help your nausea.&nbsp;&nbsp;If you feel as though your nausea is still poorly controlled, please tell your medical team so that a more effective solution can be secured.`
                
                 },
                 {
                title: 'When do I leave the Hospital?',
                selected: false,
                dropdown: true, show: false,
                htmlContent: false,
                htmlDesc: `The recovery process for robotic cholecystectomy is typically uncomplicated and straightforward.&nbsp;&nbsp;Most patients go home on the same day of their surgery.&nbsp;&nbsp;However, if your surgery was converted to an open procedure, there were complications, or your surgeon simply wants to look after you for more than just a few hours, you may need to stay overnight.&nbsp;&nbsp;

                    <br /><br />Robotic cholecystectomy was recently found to have similar safety and perioperative outcomes when compared to laparoscopic cholecystectomy.&nbsp;&nbsp;With that in mind, approximately <b>80%</b> of patients receiving outpatient surgery for laparoscopic cholecystectomy are actually discharged on the same day.&nbsp;&nbsp;Patients who stay overnight experience the same overall success rate as those who are discharged on the same day of their laparoscopic cholecystectomy.`
                
                 },
                 {
                title: 'Ready to leave',
                selected: false,
                dropdown: true, show: false,
                htmlContent: false,
                htmlDesc: `
                If you are having same day surgery and everything is going well, you may be discharged from the hospital as early as one hour after the procedure is over.&nbsp;&nbsp;Do not be discouraged if this process takes longer.&nbsp;&nbsp;Please make sure you have a responsible adult to drive you home.&nbsp;&nbsp;You will not be allowed to leave the hospital on your own.&nbsp;&nbsp;It is also encouraged to have a responsible adult stay with you or have one check in with your periodically for 24 hours after your surgery.

                `
                
                 }];

homeContent  = [
      {title:"Getting back to normal",
      dropdown:false,
      show:false,
      chevron:true,
      description:`
      <i>Robotic cholecystectomy is a relatively easy surgery from which to recover, especially when compared to its open counterpart.&nbsp;&nbsp;It is also typically a same-day or ambulatory surgery and, therefore, you will not have daily and weekly protocols to meet in the hospital as you recover.&nbsp;&nbsp;You will, however, have daily and weekly goals for recovery while you are at home.&nbsp;&nbsp;</i>
      `
    },{title:"Eat a normal Diet soon",
      dropdown:false,
      show:false,
      chevron:true,
      description:`
      After robotic cholecystectomy, you can start eating as soon as your feel comfortable.&nbsp;&nbsp;There are no restrictions on diet.&nbsp;&nbsp;However, rather than immediately resuming your normal diet, we encourage you to initially adopt some dietary changes to limit belly pain during the first two weeks.
    <br /><ul class="marginHeading">
    <li>Start with smaller meal sizes and foods that are easy on your digestive system (e.g.&nbsp;&nbsp;liquids, light soups, or crackers)</li>
    <li>Avoid alcohol for a few days as the general anesthesia and opioid pain medications are still in your system</li>
    </ul>

After you have gradually returned to your normal diet, we encourage you to eat in a healthy and balanced manner.&nbsp;&nbsp; Here are two links to help: <br />
<a href="https://health.gov/dietaryguidelines/2015/resources/2015-2020_Dietary_Guidelines.pdf" target="_blank">https://health.gov/dietaryguidelines/2015/resources/2015-2020_Dietary_Guidelines.pdf</a> <br />
<a href="https://health.gov/dietaryguidelines/dga2000/document/build.htm" target="_blank">https://health.gov/dietaryguidelines/dga2000/document/build.htm</a>
      `
    },
     {
       title:`Driving`,
      dropdown:false,
      show:false,
      chevron:true,
      description:`Typically patients are able to drive about 3 days after their procedure.&nbsp;&nbsp;You may not drive a motor vehicle if you have taken opioid pain medication within the last 24 hours.&nbsp;&nbsp;
`

},{
       title:`Work and returning to daily activities`,
      dropdown:false,
      show:false,
      chevron:true,
      description:`
       The time it takes patients to return to work varies from patient to patient.&nbsp;&nbsp;Some patients are able to return to work within 1 to 2 days while others requires 4 to 6 weeks.&nbsp;&nbsp;Most patients take 2 weeks to return to their normal baseline level of activity.

<br /><br />If your work requires heavy lifting, you may need more time off before returning to work to allow your incisions adequate time to heal to prevent hernia formation.&nbsp;&nbsp;You should discuss this with your surgeon.&nbsp;&nbsp;Before you are cleared for heavy lifting, you should not lift anything over 10 to 15 pounds.&nbsp;&nbsp;If you ever have pain with lifting, please stop!

<br /><br />You may only return to work if you have been off opioid pain medication for 24 hours.&nbsp;&nbsp;Also, do not drive if you have taken opioid pain medication within the last 24 hours.
 
`

},

{
  title:"Do gentle exercises",
      dropdown:false,
      show:false,
      chevron:true,
      description:`After your surgery, we encourage you to walk around your home as frequently as possible.&nbsp;&nbsp;Try to do this at least 5 times a day (or more if possible) until you are able to resume your normal activities.&nbsp;&nbsp;This will improve your recovery and help prevent blood clots, otherwise known as deep venous thrombosis.&nbsp;&nbsp;

<br /><br />You can also prevent blood clots while you are lying down and resting by performing ankle range of motion exercises.&nbsp;&nbsp;To do this, gradually move your foot toward the ceiling and then back down to the floor.&nbsp;&nbsp;Try to do this at least ten times with each foot at least five times each day until you return to your normal activities.&nbsp;&nbsp;You should also try to avoid crossing your legs as you rest as this increases pressure in your lower legs and increases your risk of forming blood clots.

<br /><br />Immediately after surgery, you can do any amount of walking or stairs as you feel comfortable doing.&nbsp;&nbsp;Make sure you do not lift anything greater than 10 to 15 pounds for the first two weeks.&nbsp;&nbsp;After two weeks, you can start to increase the intensity of your exercise, but we recommend you do this gradually and use pain as indicator if you are pushing yourself too hard.&nbsp;&nbsp;

<br /><br />A month (or potentially 6 weeks) after your surgery, you can start to lift heavier objects and engage in strenuous activity.&nbsp;&nbsp;Typically, you should have a discussion with your surgeon before you are cleared for more vigorous activity.

<br /><br />You should not swim until your incisions are well-healed.&nbsp;&nbsp;This process typically takes 2 to 3 weeks.&nbsp;&nbsp;Swimming too soon would put you at risk of infection.


      `
},{
   title:"Sex",
      dropdown:false,
      show:false,
      chevron:true,
      description:`
      Although you can engage in sex when you feel your body is ready, we encourage you to wait about two weeks or until your sutures/staples are removed at your postoperative appointment when your surgeon indicates this is safe.

      `
},{
   title:"Breathing",
      dropdown:false,
      show:false,
      chevron:true,
      description:`
      We encourage you to practice deep breathing exercises at home.&nbsp;&nbsp;This can be accomplished either with an incentive spirometer or by deep breathing on your own.&nbsp;&nbsp;You should take about 10 deep breaths and hold them for a few seconds before exhaling.&nbsp;&nbsp;You should do this about 5 times a day (or more if possible) for 5 days.&nbsp;&nbsp;This will help your overall recovery and help prevent pneumonia.
      `},
{
   title:"Pain Control",
      dropdown:false,
      show:false,
      chevron:true,
      description:`
      Follow the instructions from your surgeon.&nbsp;&nbsp;These will likely include the use of acetaminophen and ibuprofen for pain control, unless you have certain liver or kidney diseases.&nbsp;&nbsp;You should use your prescription pain medication if necessary but there can be side effects with these medications, including constipation, nausea, trouble breathing, sleepiness and, with long term use, dependence.&nbsp;&nbsp;

      <br /><br />Always take pain medication along with food and water to avoid belly pain.&nbsp;&nbsp;You may not drive a motor vehicle if you have taken opioid pain medication within the past 24 hours.


      `},
      {
   title:"Wound Care",
      dropdown:false,
      show:false,
      chevron:true,
      description:`
      Your surgeon will likely provide you with specific instructions on wound care.&nbsp;&nbsp;You want to keep them clean and dry.&nbsp;&nbsp;Your four incisions will either be covered by a clear adhesive with a white dressing underneath or simply by a layer of glue.&nbsp;&nbsp;Typically you should remove these dressings 48 hours after your procedure.&nbsp;&nbsp;

    <br /><br />Underneath your dressing there will likely be thin white adhesive strips over your sutures, or there may be staples.&nbsp;&nbsp;If your incisions have adhesive strips or staples, they can get wet in the shower.&nbsp;&nbsp;The strips will typically fall off within 10 days or be taken off by your surgeon at your postoperative appointment.&nbsp;&nbsp;If, instead, your incisions are covered with a clear glue, this will wear off naturally in around the same time period.&nbsp;&nbsp;

  <br /><br />Your surgeon will remove any staples at your postoperative appointment.&nbsp;&nbsp;Do not use ointments on your incisions unless your surgeon instructed you to do this.&nbsp;&nbsp;Your incisions will become less prominent over the next 6 to 12 months.&nbsp;&nbsp;During this time, it is important to keep them out of direct sunlight to avoid scar discoloration.



      `},{
   title:"Shower/bathing",
      dropdown:false,
      show:false,
      chevron:true,
      description:`
      You may shower 48 hours after surgery.&nbsp;&nbsp;Before showering, remove your dressing and be careful not to disturb your sutures/staples or the adhesive strips or glue above your incisions.&nbsp;&nbsp;Please do not swim until you are cleared to take a bath.&nbsp;&nbsp;Bathing or swimming before your incisions have healed puts you at risk of infection.


      `},{
   title:"Post-operative follow-up appointment",
      dropdown:false,
      show:false,
      chevron:true,
      description:`
     Most surgeons would like to see their patients approximately 1 to 2 weeks after surgery.&nbsp;&nbsp;Your follow-up appointment will either be made as you are discharged, or you should call your surgeon once you are home to schedule this.&nbsp;&nbsp;

    <br /><br />Your surgeon will look at your belly to assess the healing process and make sure everything is going well.&nbsp;&nbsp;You may also need to schedule an appointment with your primary care physician to go over changes to your medications if appropriate.
      `},
      {
   title:"Disposal of opioid pain medications",
      dropdown:false,
      show:false,
      chevron:true,
      description:`
     <i>You probably will have leftover pills.&nbsp;&nbsp;</i>

<br /><br />Surgical patients often do not use all of their prescription pain medication.&nbsp;&nbsp;As a result, leftover pills of controlled prescription medications end up being unattended and forgotten in home medicine cabinets.&nbsp;&nbsp;This increases the chances of misuse and abuse of these potentially addictive medications.

<br /><br />We encourage you to properly dispose of unused opioid pain medication.&nbsp;&nbsp;

<br /><br />There are a few acceptable ways for you to safely discard leftover opioid pain medication:
<ul class="marginHeading">
<li>You can return them year-round to DEA-approved authorized collectors in your area (link https://www.deadiversion.usdoj.gov/drug_disposal/takeback/ to the phrase “participating locations)  </li>
<li>Alternatively, take the medicine and mix it with an inedible substance, such as coffee grounds.&nbsp;&nbsp;You should then place this mixture in a sealable container and dispose of it in the trash.</li>
</ul>
Finally, be sure to get rid of all identifiable information on the label of your prescription for your own safety and protection.

      `},


  ]


  constructor(public http: HttpClient) {
    
  }

  getRecoveryContent() {
    return this.recoveryContent;
  }

  getHomeConent() {
    return this.homeContent
  }

  getWhatToDoIfPagesTabs() {
  	return this.menus
  // return new Promise(resolve => {
    // this.http.get(this.apiUrl+'/path').subscribe(data => {
    //   resolve(data);
    // }, err => {
    //   console.log(err);
    // });
  // });
}

getPostProcedureContent(day) {
    return this.postProcedureContent[day];
}

getAboutProcedureList() {
  console.log(this.aboutProcedureList)
  return this.aboutProcedureList;
}

getAboutProcedureListDetails(index) {
  return {content:this.aboutProcedureList[index], length:this.aboutProcedureList.length, subcontent:this.aboutProcedureList[index].subcontent};
}

getDuringProcedureList() {
  return this.duringProcedureList;
}

}
