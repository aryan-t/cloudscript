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
import { InsurancemessagePage } from '../insurancemessage/insurancemessage';

// import { AboutprocedurePage } from '../aboutprocedure/aboutprocedure';

@IonicPage()
@Component({
	selector: 'page-whattodoif',
	templateUrl: 'whattodoif.html',
	providers:[HttpproviderProvider]
})
export class WhattodoifPage {
	tab1Root = RecoveryPage;
	tab2Root = PreprocedurePage;
	tab3Root = DuringprocedurePage;
	tabs=[];
	index:any = 1;
	menuContents:any;
	duringprocedureList:any;
	platform:any = localStorage.getItem('platform');
	className:any = 'contentwrap';
	whatTodoIf:any;

	phone_office = '<img src="assets/imgs/telephone.svg" class="inline-icon"> <a href="tel:617-667-2845">';
	phone_oncall = '<img src="assets/imgs/telephone.svg" class="inline-icon"> <a href="tel:617-632-8611">';
	email = '<a href="mailto:WLS@BIDMC.Harvard.edu">';

	whatToDoIfNormalSideAffects = [
	{
		title:"<strong>Bloating</strong><p><i>This is often a consequence of the constipation that patients experience after surgery.</i></p>",
		description: `
		This is often a consequence of the constipation that patients experience after surgery. Postoperative constipation is caused by opioid pain medication, general anesthesia, and the surgery itself. Typically, your bloating will go away as you start to have bowel movements.
		<br /><br />If your bloating persists or worsens, please contact your surgeon at ${this.email}E-MAIL</a>.`,
		show:false,
	},
	{
		title:'<strong>Constipation</strong><p><i>This is normal and can last a few weeks. However, there are remedies.</i></p>',
		description: `
		Opioid pain medications and general anesthesia slow down our intestines. Therefore, it is normal for you to have trouble passing gas or having a bowel movement after surgery. 
<br /><br />Adequate hydration and walking are two easy options to help fix this. Consuming foods rich in fiber and decreasing your intake of opioid pain medication can also help alleviate constipation. However, taking laxatives (e.g magnesium hydroxide, magnesium citrate, psyllium, polyethylene glycol, docusate sodium, or mineral oil) is the most effective solution to preventing and treating constipation. 
<br /><br />To ensure bowel regularity, laxatives should be taken whenever you are taking opioid pain medication and NOT just when you are constipated. In other words, they are most effective if they are taken before you experience constipation. Therefore, please take laxatives as prescribed by your surgeon when taking opioid pain medication. You should also remember that you should try non-opioid pain medication, such as acetaminophen or ibuprofen, for pain relief before using opioid pain medication.*

<br /><br />If you find that your stools have become too soft, simply discontinue your laxative use.

<br /><br />Please drink water periodically throughout the day. Drinking prune juice mixed with water can also be helpful.
<br /><br />Suppositories or enemas are other options.
<br /><br />Bloating can be due to your constipation. It can also be due to a new intolerance to dairy products.
<br /><br />If your constipation/bloating persists or worsens (e.g. if you have not had a bowel movement for four days), please contact your surgeon at ${this.email}E-MAIL</a>.
<i><br /><br />*If you can tolerate your pain without using opioid pain medication, we encourage you to avoid opioids as this will enhance your recovery.</i>
`,
		show:false,
	},
	{
		title:'<strong>Depression/anxiety (mild)</strong><p><i>Never feel ashamed to admit this.</i></p>',
		description: `It is normal to experience an array of emotions after your surgery. Please do not feel ashamed discussing this with your loved ones (support group) and the healthcare professionals treating you. They will be able to help you and make sure you are given the appropriate treatment.
			<br /><br />If you feel you are at risk of hurting yourself or others, please seek immediate medical attention by either calling 911 or going to your local/nearest emergency department (See Depression/anxiety (severe) in our Symptoms section).
`,
		show:false,
	},
	{
		title:"<strong>Diarrhea/urgency</strong><p><i>Can be common after cholecystectomy and will typically resolve within days to weeks.</i></p>",
		description: `
Diarrhea after cholecystectomy is common and will typically resolve within days to weeks. Occasionally, diarrhea after surgery can be a consequence of your diet. For example, you may find that fatty and spicy foods no longer agree with your digestive system. If you think this is the case, avoid these foods and contact your dietitian.

<br /><br />Some patients also experience urgency to have a bowel movement soon after eating. Often, this will improve with time.

<br /><br />If you have frequent loose stools, please increase your fluid intake (at least 10 glasses of water each day) to replace the water volume you have lost. 

<br /><br />Severe fluid loss can cause you to become lightheaded and dizzy when standing up from a seated position. If this occurs, please exercise caution. If you start to feel lightheaded or dizzy, please consume more water before contacting your surgeon.

<br /><br />If your diarrhea persists or worsens and is impacting your quality of life, please contact your surgeon at ${this.email}E-MAIL</a>.

<br /><br />A small minority of patients who have had their gallbladder removed report having issues with chronic diarrhea. This is extremely rare, but there are medications that help control chronic diarrhea.

<br /><br />Do not take medication to treat your diarrhea without first consulting with your surgeon.

<br /><br />If there are changes to the quality of your stool/diarrhea (e.g. if it becomes darker in color or you can see bright red blood), please call 911 or go to your local/nearest emergency department.

		`,
		show:false,
	},
	{
		title:"<strong>Difficulty concentrating</strong><p><i>Difficulty sleeping can be common after surgery.</i></p>",
		description: `<p>Difficulty concentrating can be common for a brief period of time after your surgery. If you continue to have difficulty concentrating, please contact your surgeon.
</p>`,
		show:false,
	},
	{
		title:"<strong>Difficulty sleeping</strong><p><i>Difficulty sleeping can be common after surgery.</i></p>",
		description: `Difficulty sleeping can be common for a brief period of time after your surgery. If you are having trouble sleeping, try elevating the head of your bed. If your difficulty sleeping persists or worsens, please contact your surgeon.
`,
		show:false,
	},
	{
		title:'<strong>Fatigue/weakness</strong><p><i>Surgery is physically distressing to the body, and it is normal if it takes time to recover.</i></p>',
		description: `
			Any type of surgery, including minimally invasive surgery, is draining on your body. It is normal to feel weak and fatigued after surgery. It often takes 2 weeks to return to your normal baseline function, but some patients may require up to 6 weeks before they start feeling like themselves.
			<br /><br />If your fatigue persists or worsens, you should make sure you are giving yourself adequate hydration, food and nutrients, and sleep. If these efforts do not provide you with more energy and strength, please contact your surgeon at ${this.email}E-MAIL</a>.
			<br /><br>If your fatigue/weakness is of sudden onset, please call 911 or go to your local/nearest emergency department.

		`,
		show:false,
	},
	{
		title:"<strong>Fever</strong><p><i> Although fever after surgery is quite common, ALL postoperative fevers should be immediately reported to a medical professional and may warrant medical attention.</i></p>",
		description: `Fever during the first few days after surgery is quite common and can be linked to small changes in your body, such as an accumulation of mucus in your lungs. However, should you develop ANY fever, whether it be low-grade (99.6̊ F-100.3̊ F/37.6̊ C-37.9̊ C) or high-grade (>101.3°F/38.3°C), please immediately contact our on-call physician [HERE]. 
<br /><br />Fever, especially one that is persistent or associated with pain or other concerning symptoms, could indicate an infection (e.g. pneumonia), leak, or another type of disease state. If this is the case, you should contact your surgeon at ${this.email}E-MAIL</a>. or our on-call physician  ${this.phone_oncall}On-CALL PHYSICIAN</a> OR call 911 or go to your local/nearest emergency department.
<br /><br />Chills can also be indicative of infection and deserve the same attention.
<br /><br />See Symptoms section for solutions.
`,
		show:false,
	},
	{
		title:'<strong>Haziness/grogginess</strong><p><i>It is normal to experience haziness and grogginess after surgery.</i></p>',
		description: `
			Opioid pain medications and general anesthesia having medium-term effects on your cognitive processes and awareness. These effects can often take days to weeks to subside as these medications are slowly eliminated from your body. 
<br /><br />Please do not drive if you have had opioid pain medication within the last 24 hours.
<br /><br />If you feel as though your haziness/grogginess persists or worsens, please contact your surgeon at ${this.email}E-MAIL</a>.


		`,
		show:false,
	},
	{
		title:"<strong>Heartburn - intermittent (Less urgent)</strong><p><i>Easily treatable with antacids.</i></p>",
		description: `
		If you are experiencing heartburn, you can take an antacid that was prescribed to you by your surgeon.
<br /><br />If you are experiencing new heartburn-like symptoms but your pain is not going away with antacids, you may be having a heart attack (see Heart/Chest pain section for more information regarding whether your signs and symptoms could represent a possible heart attack).
<br /><br />If you think you are having a heart attack, you should take 325 mg of aspirin and either call 911 or go to your local/nearest emergency department.

		`,
		show:false,
	},
	{
		title:'<strong>Incisional symptoms (other than pain)</strong><p><i>Normal to be slightly red around the edges.</i></p>',
		description: `
			It is normal for your incisions to be slightly red and firm along their edges. It is also normal for there to be a minimal amount of clear or red-tinged fluid coming from your wounds. These signs should improve with time.

			<br /><br />If these incisional signs persist or worsen, please contact your surgeon.

		`,
		show:false,
	},
 	{
		title:"<strong>Nausea/vomiting</strong><p><i>Nausea and vomiting are common after surgery.</i></p>",
		description: `
		Nausea and vomiting are common for a brief period of time after your surgery. This can be due to either the anesthetic agents or the opioid pain medication that were given to you.

<br /><br />If your nausea/vomiting persists or worsens, please contact your surgeon.
`,
		show:false,
	},
	{
		title:'<strong>Pain – adequately relieved with medication</strong><p><i>It is normal to experience pain after surgery.</i></p>',
		description: `
		You will likely have pain around your incision sites, joint pain with movement, and general dull pain coming from your belly. Your pain should lessen each day as you recover and should be adequately controlled with either your prescription opioid pain medication or non-opioid pain medication.

		<br /><br />It is important to understand that pain medication will help alleviate pain, but it will not make you pain free.

		<br /><br />If you return home with a prescription for opioid pain medication, we strongly encourage you to refrain from using this if your pain can be adequately controlled with non-opioid pain medication. Instead, take acetaminophen and/or ibuprofen and assess how well these medications alleviate your pain.* Only resort to opioid pain medication if acetaminophen and/or ibuprofen provide inadequate pain relief. 
		<br /><br />If you are taking opioid pain medication, we urge you to wean off of this as soon as possible.
		<br /><br />Take your pain medication as prescribed by your attending surgeon.** Do not increase the frequency of your doses or the amount you take for any one dose. Additionally, you should only take pain medication <i>if you are experiencing pain.</i>
		<br /><br />If you find yourself without much pain but still have prescription pain medication remaining, please do not feel obligated to finish your prescription. In fact, we encourage you not to use this unused medication if you do not feel you need it. Instead, please exercise responsibility and properly dispose of these controlled and potentially addictive medications (See Disposal of opioid pain medications in our At Home section).
		<br /><br />Please do not drive if you have had opioid pain medication within the last 24 hours.
		<br /><br />If your pain persists or worsens, please contact your surgeon.
		<br /><br />If your pain becomes severe or changes in quality, contact your surgeon and either call 911 or go to your local/nearest emergency department depending on how you feel.
		<i><br /><br />* Unless contraindicated, you will be able to take acetaminophen and ibuprofen each three times a day. A good strategy is to take one of them every 3 to 4 hours so that you are continuously receiving a non-opioid form of pain medication.
		<br /><br />** Please do not take prescription or non-prescription pain medications that have not been approved by your surgeon.</i>

		`,
		show:false,
	},
	{
		title:"<strong>Right shoulder pain</strong><p><i> This is a normal consequence of the gas that was pumped into your belly for your surgery.</i></p>",
		description: `
		Right shoulder pain is normal after minimally invasive abdominal surgery and is a consequence of the gas that was pumped into your belly for the procedure. This pain will disappear on its own with time, but walking will hasten this process.
<br /><br />Right shoulder pain from the gas that was pumped into your belly will be constant in duration. If you have shoulder pain that is new or accompanied by chest pain or other symptoms (strange or fast heart rhythm, nausea/vomiting, pain in other areas [jaw, back, stomach, neck, or arms], difficulty breathing, lightheadedness, or sweating; see Heart/Chest pain in our Abnormal Symptom section for a more thorough description), you may be having a heart attack. If you think you are having a heart attack, you should take 325 mg of aspirin and either call 911 or go to your local/nearest emergency department.
	<br /><br />If your right shoulder pain does not improve with time or is getting more severe, please contact your surgeon.

		`,
		show:false,
	}, {
		title:"<strong>Sore throat</strong> <p><i>This is normal and was likely caused by the breathing tube that was used during your procedure.</i></p>",
		description: `This is likely a result of the breathing tube that was placed down your throat during surgery. This pain will go away with time, but lozenges can be used to alleviate this soreness.
<br /><br />If your sore throat persists or worsens, please contact your surgeon.
`,
		show:false,
	}]

	symptoms = [
	{
		dropdown:false,
		title:'<strong>Any concerning symptoms</strong><p><i>You know your body better than anyone else.</i></p>',
		description: `
			You know your body better than anyone else. If you ever feel that something is just not right, contact your surgeon at ${this.email}E-MAIL</a>. or our on-call physician  ${this.phone_oncall}On-CALL PHYSICIAN</a> and either call 911 or go to your local/nearest emergency department depending on how you feel.

		`,
		show:false,
	},
	 {
	 	dropdown:false,
		title:"<strong>Arm Pain – See Heart/Chest pain</strong>",
		description: ``,
		show:false,
	},  {
		dropdown:false,
		title:"<strong>Bleeding – See Incisional changes</strong>",
		description: ``,
		show:false,
	},  {
		dropdown:false,
		title:"<strong>Bruising (Less Urgent) – See Incisional changes</strong> ",
		description: ``,
		show:false,
	},
	{
		dropdown:false,
		title:'<strong>Bloating (Less urgent)</strong><p><i>This is often a consequence of the constipation that patients experience after surgery.</i></p>',
		description: `
		This is often a consequence of the constipation that patients experience after surgery. Postoperative constipation is caused by opioid pain medication, general anesthesia, and the surgery itself. Typically, your bloating will go away as you start to have bowel movements.
		<br /><br />If your bloating persists or worsens, please contact your surgeon at ${this.email}E-MAIL</a>.

		`,
		show:false,
	},
	{
		dropdown:false,
		title:'<strong>Constipation (Less urgent)</strong><p><i> This is normal and can last a few weeks. However, there are remedies.</i></p>',
		description: `
		Opioid pain medications and general anesthesia slow down our intestines. Therefore, it is normal for you to have trouble passing gas or having a bowel movement after surgery.
<br /><br />Adequate hydration and walking are two easy options to help fix this. Consuming foods rich in fiber and decreasing your intake of opioid pain medication can also help alleviate constipation. However, taking laxatives (e.g magnesium hydroxide, magnesium citrate, psyllium, polyethylene glycol, docusate sodium, or mineral oil) is the most effective solution to preventing and treating constipation.
<br /><br />To ensure bowel regularity, laxatives should be taken whenever you are taking opioid pain medication and NOT just when you are constipated. In other words, they are most effective if they are taken before you experience constipation. Therefore, please take laxatives as prescribed by your surgeon when taking opioid pain medication. You should also remember that you should try non-opioid pain medication, such as acetaminophen or ibuprofen, for pain relief before using opioid pain medication.*
<br /><br />If you find that your stools have become too soft, simply discontinue your laxative use.

<br /><br />Please drink water periodically throughout the day. Drinking prune juice mixed with water can also be helpful.
<br /><br />Suppositories or enemas are other options.
<br /><br />Bloating can be due to your constipation. It can also be due to a new intolerance to dairy products.
<br /><br />If your constipation/bloating persists or worsens (e.g. if you have not had a bowel movement for four days), please contact your surgeon at ${this.email}E-MAIL</a>.
<br /><br /><i>*If you can tolerate your pain without using opioid pain medication, we encourage you to avoid opioids as this will enhance your recovery.</i>



		`,
		show:false,
	},
	{
		dropdown:false,
		title:'<strong>Dehydration (less urgent)</strong><p><i>Dehydration can result in any of the following signs or symptoms</i></p>',
		description: `
			<ul class="marginHeading"><li><b>Dark urine (less urgent to urgent): </b><i>Typically the result of dehydration but may indicate another problem.</i>
			<br /><br />Dark urine is typically a sign of dehydration. You should stay adequately hydrated and urinate clear yellow urine at least four times each day after your procedure. If your urine is darker in color or if you find yourself urinating less frequently or in smaller volumes, you should try to consume more water (10 glasses of water each day) before contacting your surgeon. 

			<br /><br />Dark urine can also be a sign of a retained gallstone in either your cystic or common bile duct. If you are staying adequately hydrated and are still producing dark urine, you should contact your surgeon at ${this.email}E-MAIL</a>. or our on-call physician  ${this.phone_oncall}On-CALL PHYSICIAN</a>. A retained gallstone can also present with pale-colored stools, yellowing of the eyes and skin (i.e. jaundice), nausea and vomiting, and pain in the upper right portion of your belly.

<br /><br />The best way to know you are getting enough fluid is to check and make sure your urine is clear.
	</li><br />
	<li><b>Decreased urine output:</b><i>Typically the result of dehydration.</i>
	<br /><br />Decreased urine output is typically a sign of dehydration. You should stay adequately hydrated and urinate clear yellow urine at least four times each day after your procedure. If you are urinating less frequently or in smaller volumes or find your urine to be darker in color, you should try to consume more water (10 glasses of water each day) before contacting your surgeon.
<br /><br />The best way to know you are getting enough fluid is to check and make sure your urine is clear.
</li><br />
<li><b>Dry mouth:</b><i> Typically the result of dehydration.</i>
<br /><br />Dry mouth is typically a sign of dehydration. You should stay adequately hydrated and urinate clear yellow urine at least four times each day after your procedure. If you have a dry mouth, you should try to consume more water (10 glasses of water each day) before contacting your surgeon.
<br /><br />The best way to know you are getting enough fluid is to check and make sure your urine is clear.
</li><br />
<li>
<b>Headache – light to moderate (Non-urgent):</b><i> Typically the result of dehydration.</i>
<br /><br />
Headaches are typically caused by dehydration. You should stay adequately hydrated and urinate clear yellow urine at least four times each day after your procedure. You should try to consume more water (10 glasses of water each day) before contacting your surgeon.
<br /><br />If your headache becomes more severe, painful, or changes in quality, you should call 911 or go to your local/nearest emergency department.

</li><br />
<li><b>Lightheaded/dizzy (less urgent to urgent):</b><i> Typically the result of dehydration but may indicate another problem.</i>
<br /><br />If you find yourself to be dizzy when you stand up or your mouth is dry, this is most likely a sign of dehydration. However, this may indicate something more serious.

<br /><br />You should try to drink 10 glasses of water each day. If you think you are adequately hydrated and you still feel dizzy or you are having low urine output, please let your surgeon know.

<br /><br />The best way to know you are getting enough fluid is to check and make sure your urine is clear.

<br /><br />If you also notice that your heart is racing, beating abnormally or you have other significant concerns, please contact your surgeon ${this.phone_oncall}here</a> and either call 911 or go to your local/nearest emergency department if you think seeking immediate medical attention is more appropriate.

<br /><br />If you are having trouble maintaining your balance, please contact your surgeon.

<br /><br />IMPORTANT: If you suddenly feel lightheaded/dizzy and if your skin is losing color, please call 911 or go to your local/nearest emergency department.
</li>
</ul>



		`,
		show:false,
	},
	{dropdown:false,
		title:'<strong>Depression/anxiety (Urgent)</strong><p><i>Never feel ashamed to admit this.</i></p>',
		description: `
			If you are experiencing overwhelming anxiety or sadness and feel as though your life is not worth living, please call 911 or go to your local/nearest emergency department.

		`,
		show:false,
	},
	{
		dropdown:false,
		title:'<strong>Diarrhea/urgency (Less urgent)</strong><p><i> Can be common after cholecystectomy and will typically resolve within days to weeks.</i></p>',
		description: `
		Diarrhea after cholecystectomy is common and will typically resolve within days to weeks. Occasionally, diarrhea after surgery can be a consequence of your diet. For example, you may find that fatty and spicy foods no longer agree with your digestive system. If you think this is the case, avoid these foods and contact your dietitian.

<br /><br />Some patients also experience urgency to have a bowel movement soon after eating. Often, this will improve with time.

<br /><br />If you have frequent loose stools, please increase your fluid intake (at least 10 glasses of water each day) to replace the water volume you have lost. 

<br /><br />Severe fluid loss can cause you to become lightheaded and dizzy when standing up from a seated position. If this occurs, please exercise caution. If you start to feel lightheaded or dizzy, please consume more water before contacting your surgeon.

<br /><br />If your diarrhea persists or worsens and is impacting your quality of life, please contact your surgeon at ${this.email}E-MAIL</a>.

<br /><br />A small minority of patients who have had their gallbladder removed report having issues with chronic diarrhea. This is extremely rare, but there are medications that help control chronic diarrhea.

<br /><br />Do not take medication to treat your diarrhea without first consulting with your surgeon.

<br /><br />If there are changes to the quality of your stool/diarrhea (e.g. if it becomes darker in color or you can see bright red blood), please call 911 or go to your local/nearest emergency department.
		`,
		show:false,
	},{
		dropdown:false,
		title:"<strong>Fatigue/weakness (Less-urgent)</strong><p><i> Surgery is physically distressing to the body, and it is normal if it takes time to recover.</i></p>",
		description: `Any type of surgery, including minimally invasive surgery, is draining on your body. It is normal to feel weak and fatigued after surgery. It often takes 2 weeks to return to your normal baseline function, but some patients may require up to 6 weeks before they start feeling like themselves.
<br /><br />If your fatigue persists or worsens, you should make sure you are giving yourself adequate hydration, food and nutrients, and sleep. If these efforts do not provide you with more energy and strength, please contact your surgeon at ${this.email}E-MAIL</a>.
<br /><br />If your fatigue/weakness is of sudden onset, please call 911 or go to your local/nearest emergency department.



		</p>`,
		show:false,
	},
	{
		dropdown:false,
		title:"<strong>Fever/chills (Urgent)</strong><p><i> Although fever after surgery is quite common, ALL postoperative fevers should be immediately reported to a medical professional and may warrant medical attention.</i></p>",
		description: `Fever during the first few days after surgery is quite common and can be linked to small changes in your body, such as an accumulation of mucus in your lungs. However, should you develop ANY fever, whether it be low-grade (99.6̊ F-100.3̊ F/37.6̊ C-37.9̊ C) or high-grade (>101.3°F/38.3°C), please immediately contact your surgeon ${this.phone_oncall}here</a> or our on-call physician ${this.phone_oncall}On-CALL PHYSICIAN</a>. 
<br /><br />Fever, especially one that is persistent or associated with pain or other concerning symptoms, could indicate an infection (e.g. pneumonia), leak, or another type of disease state. If this is the case, you should contact your surgeon  at ${this.email}E-MAIL</a> or our on-call physician ${this.phone_oncall}On-CALL PHYSICIAN</a> OR call 911 or go to your local/nearest emergency department.
<br /><br />Chills can also be indicative of infection and deserve the same attention.
`,
		show:false,



	},{
		dropdown:false,
		title:"<strong>Haziness/grogginess (Non-urgent)</strong><p><i> It is normal to experience haziness and grogginess after surgery.</i></p>",
		description: `Opioid pain medications and general anesthesia having medium-term effects on your cognitive processes and awareness. These effects can often take days to weeks to subside as these medications are slowly eliminated from your body. 
<br /><br />Please do not drive if you have had opioid pain medication within the last 24 hours.
<br /><br />If you feel as though your haziness/grogginess persists or worsens, please contact your surgeon at ${this.email}E-MAIL</a>.
`,
		show:false,
	},
	{
		dropdown:false,
		title:'<strong>Headache – Severe (Urgent)</strong><p><i> This requires immediate medical attention. </i></p>',
		description: `If you have a severe headache – like no other headache that you have ever previously experience – and/or dizziness, please call 911 or go to your local/nearest emergency department.
`,
		show:false,
	},  {
		dropdown:false,
		title:"<strong>Heart/Chest pain (Urgent)</strong><p><i> Let’s decide whether or not your signs and symptoms are consistent with a heart attack. Remain calm as you read this section. If you feel you require immediate medical attention, please forego reading this section and call 911 or go to your local/nearest emergency department.</i></p>",
		description: `
		If you have chest pain or other symptoms (strange or fast heart rhythm, nausea/vomiting, pain in other areas [jaw, back, stomach, neck, or arms], difficulty breathing, lightheadedness, or sweating), you may be having a heart attack. If you think you are having a heart attack, you should take 325 mg of aspirin and either call 911 or go to your local/nearest emergency department.
<ul class="marginHeading">
<li><b>Symptoms of a likely heart attack</b><br />
If you HAVE ANY the following symptoms call 911 or go to Emergency.
<ul class="marginHeading">
<i>
<li>Chest pain (persistent or comes-and-goes)</li>
<li>Sensation of fullness/pressure/squeezing in your chest; commonly described as feeling like an “elephant sitting on your chest” </li>
<li>Shortness of breath</li>
<li>Irregular or unusual heart rhythm</li>
<li>Dizziness/lightheadedness/fainting</li>
<li>Sweating</li>
</i>
</ul>
</li>
<br />
<li><b>Shoulder Pain- </b><br />
If you <b>ALSO</b> HAVE ANY of the following symptoms, please call 911 or go to your local/nearest emergency department.
<br />If you do NOT have these, see <b>Right Shoulder Pain</b>.
<ul class="marginHeading">
<i><li>Chest pain (persistent or comes and goes)</li>
<li>Sensation of fullness/pressure/squeezing in your chest; commonly described as feeling like an “elephant sitting on your chest” </li>
<li>Shortness of breath</li>
<li>Irregular or unusual heart rhythm</li>
<li>Dizziness/lightheadedness/fainting</li>
<li>Sweating significant</li>
</i>
</ul>
</li>

<br />
<li>
<b>Chest pain</b> (persistent or comes and goes)<br />
Call 911 or go to Emergency.
</li><br />
<li>
<b>Chest fullness or pressure - </b><i>Sensation of fullness/pressure/squeezing in your chest; commonly described as feeling like an “elephant sitting on your chest”, (persistent or comes-and-goes).
</i><br />Call 911 or go to Emergency.
</li><br />
<li>
<b>Pain in other areas</b> (jaw, back, upper belly, neck, or arms) (persistent or comes and goes) If you <b>ALSO</b> HAVE ANY of the following symptoms then call 911 or go to Emergency.
<br />If you do NOT have these, see <b>Pain</b>.
<ul class="marginHeading">
<i>
<li>Chest pain (persistent or comes and goes) - most common symptom</li>
<li>Sensation of fullness/pressure/squeezing in your chest; commonly described as feeling like an “elephant sitting on your chest” </li>
<li>Shortness of breath (even without chest pain)</li>
<li>Irregular or unusual heart rhythm</li>
<li>Dizziness/lightheadedness/fainting</li>
<li>Sweating</li>
</i>
</ul>
</li>
</ul>
		`,
		show:false,
	},
	{
		dropdown:false,
		title:"<strong>Heartbeat - Irregular (Urgent)</strong><p><i> Notable changes in how your heart is beating likely warrants prompt medical attention.</i></p>",
		description: `
		If you feel as though your heart is racing or beating funny, this could indicate that you are experiencing an arrhythmia.  If you do not have a history of arrhythmia and this is a new symptom for you, call 911 or go to your local/nearest emergency department. `,
		show:false,
	}, 
	{
	dropdown:false,
		title:"<strong>Heartburn - persistent (Less-urgent to Urgent)</strong><p><i> This could still be heartburn but could possibly indicate a problem more severe than heartburn and warrants immediate medical attention.</i></p>",
		description: `

		If you are experiencing heartburn, you can take an antacid that was prescribed to you by your surgeon.
<br /><br />If you are experiencing new heartburn-like symptoms but your pain is not going away with antacids, you may be having a heart attack (see Heart/Chest pain section for more information regarding whether your signs and symptoms could represent a possible heart attack).
<br /><br />If you think you are having a heart attack, you should take 325 mg of aspirin and either call 911 or go to your local/nearest emergency department.
`,
		show:false,
	}, 
	{
		dropdown:false,
		title:"<strong>Incisional changes (Urgent)</strong><p><i> Certain incisional signs and symptoms may warrant prompt medical attention.</i></p>",
		description: `<ul class="marginHeading">
		<li>
		It is normal for your incisions to be slightly red and firm along their edges. These signs should improve with time. If this <b>redness starts to spread</b> or you notice <b>increased swelling</b>, however, you may have an infection. Other color changes may also indicate an infection.
		</li><br />
		<li>
It is normal for there to be a minimal amount of clear or red-tinged fluid coming from your wounds. This should improve with time. If the <b>drainage</b> from your wound <b>starts to smell foul</b> or has a <b>cloudy or pus-like appearance, </b>however, you may have an infection.
</li><br />
<li>
It is normal for your incisions to have pain and tenderness. This should improve with time. If any of your incisions start to <b>increase in pain and tenderness,</b> however, you may have an infection.
<br />
<li>
It is normal for your incisions to feel slightly warm. This should improve with time. If any of your incisions start to <b>increase in warmth</b>, however, you may have an infection.
<br />
TRIAGE: If you have two or more of the aforementioned symptoms OR if you have just one symptom AND a <b>fever</b> or <b>chills</b>, this increases the likelihood that you have an infection. 
<br />
If you have ANY of the aforementioned symptoms, including fever or chills, please contact your surgeon and go to your local/nearest emergency department.

</li><br />
<li>
It is normal for there to be a minimal amount of clear or red-tinged fluid coming from your wounds. This should improve with time. If one or more of your incisions is <b>bleeding through multiple bandages</b> and producing more than a minimal amount of clear or red-tinged drainage, please contact your physician ${this.phone_oncall}On-CALL PHYSICIAN</a> or go to your local/nearest emergency department if you require immediate medical attention.
<br />
</li><br />
If you are <b>bleeding</b> and <b>feel lightheaded or dizzy</b>, please call 911 or go to your local/nearest emergency department.

</ul>

		`,
		show:false,
	},  {
		dropdown:false,
		title:"<strong>Leg/calf swelling (Urgent)</strong><p><i>Leg/calf swelling likely indicates that you have a blood clot and require immediate medical attention.</i></p>",
		description: `If you notice swelling, tenderness, redness, increased temperature, or pain with use of one of your legs/calf muscles, you may have a blood clot in one of your legs. These symptoms typically occur in only one leg, but it is possible for it to occur in both calves. If you have ANY of these signs or symptoms, please call 911 or go to your local/nearest emergency department.
		`,
		show:false,
	},
	{
		dropdown:false,
		title:"<strong>Nausea/vomiting (Urgent)</strong><p><i> Persistent vomiting should be reported to your surgeon.</i></p> ",
		description: `
		If you are unable to keep liquids down or have been vomiting multiple times per day or on back-to-back days, please contact your surgeon  at ${this.email}E-MAIL</a>. You may have a problem with allowing food to pass. 

	<br /><br />If you vomit bright red blood or a dark brown substance, please call 911 or go to your local/nearest emergency department.


		`,
		show:false,
	},{
		dropdown:true,
		title:"<strong>Pain – adequately relieved with medication (Non-urgent)</strong><p><i> It is normal to experience pain after surgery.</i></p>",
		description: [
				{
					show:false,
					title:`Brief Version:`,
					desc:`Pain will most commonly present at your incision sites and in the upper right portion of your belly where you had your gallbladder removed. This is <b>normal</b>. You should take the pain medications prescribed by your attending surgeon if they are needed. You can also try placing a heating pack on top of the area of your belly that has the most pain.`
				},
				{
					show:false,
					title:`Detailed Version:`,
					desc:`You will likely have pain around your incision sites, joint pain with movement, and general dull pain coming from your belly. Your pain should lessen each day as you recover and should be adequately controlled with either your prescription opioid pain medication or non-opioid pain medication.

<br /><br />It is important to understand that pain medication will help alleviate pain, but it will not make you pain free.

<br /><br />If you return home with a prescription for opioid pain medication, we strongly encourage you to refrain from using this if your pain can be adequately controlled with non-opioid pain medication. Instead, take acetaminophen and/or ibuprofen and assess how well these medications alleviate your pain.* Only resort to opioid pain medication if acetaminophen and/or ibuprofen provide inadequate pain relief. 
<br /><br />If you are taking opioid pain medication, we urge you to wean off of this as soon as possible.
<br /><br />Take your pain medication as prescribed by your attending surgeon.** Do not increase the frequency of your doses or the amount you take for any one dose. Additionally, you should only take pain medication <i>if you are experiencing pain</i>.
<br /><br />If you find yourself without much pain but still have prescription pain medication remaining, please do not feel obligated to finish your prescription. In fact, we encourage you not to use this unused medication if you do not feel you need it. Instead, please exercise responsibility and properly dispose of these controlled and potentially addictive medications (See Disposal of opioid pain medications in our At Home section).
<br /><br />Please do not drive if you have had opioid pain medication within the last 24 hours.
<br /><br />If your pain persists or worsens, please contact your surgeon.
<br /><br />If your pain becomes severe or changes in quality, contact your surgeon and either call 911 or go to your local/nearest emergency department depending on how you feel.
<br /><br /><i>* Unless contraindicated, you will be able to take acetaminophen and ibuprofen each three times a day. A good strategy is to take one of them every 3 to 4 hours so that you are continuously receiving a non-opioid form of pain medication.
<br /><br />** Please do not take prescription or non-prescription pain medications that have not been approved by your surgeon.</i>`
				}

		],
		show:false,
	},  {
		dropdown:false,
		title:"<strong>Pain – not adequately relieved with medication (Urgent)</strong><p><i> It is normal to experience pain after surgery, but this pain should be acceptable with the help of medication. Pain not adequately relieved with medication requires immediate medical attention.</i></p>",
		description: `

		<ul class="marginHeading">
		<li>Pain is your body’s natural way of telling you something is wrong and that you need to take care of yourself. So, while you should anticipate experiencing some pain after surgery, you should not ignore changes in your pain or an increase in its intensity over time.</li>

<br /><li>If your pain is new and severe or sharp in nature (or has recently changed in quality), getting worse in severity, and lasting several hours, you should contact your surgeon  at ${this.phone_office}PHYSICIAN’S OFFICE</a>.  If your pain is associated with a fever (>101.3̊ F/38.5̊ C), you should also contact your surgeon  ${this.phone_oncall}here</a>.</li>

<br /><li>If you have pain and feel as though you have a <b>rigid abdomen</b> and <b>cannot tolerate any movement</b>, please call 911 or go to your local/nearest emergency department. Also, if you feel as though you <b>belly is swelling</b>, you should call 911 or go to your local/nearest emergency department.</li>
`,



		show:false,
	} ,{
		dropdown:false,
		title:"<strong>Pus (Urgent) </strong><p><i> Abnormal sign that likes indicates an infection that requires prompt medical attention.</i></p>",
		description: `
		If you see pus at any of your incision sites, this means that you have a surgical site infection (see Incisional changes section for more information regarding concerning signs and symptoms from your incisions). You should contact your surgeon  at ${this.email}E-MAIL</a> and go to your local/nearest emergency department so that you can be examined. Your incision may need to be cleaned or you may require antibiotics. Although it is rare, you may need to return to the operating room for another operation.
`,

		show:false,
	},
	{
		dropdown:false,
		title:"<strong>Sore throat (Non-urgent)</strong><p><i>This is normal and was likely caused by the breathing tube that was used during your procedure.</i></p>",
		description: `Sometimes patients complain of throat discomfort after surgery. This is <b>normal</b> and likely a result of the breathing tube that was placed down your throat during surgery. This pain will go away with time, but lozenges can be used to alleviate this pain.`,
		show:false,
	},  {
		dropdown:false,
		title:"<strong>Right shoulder pain (Less-urgent)</strong><p><i>This is a normal consequence of the gas that was pumped into your belly for your surgery.</i></p>",
		description: `Right shoulder pain is normal after minimally invasive abdominal surgery and is a consequence of the gas that was pumped into your belly for the procedure. This pain will disappear on its own with time, but walking will hasten this process.
<br /><br />Right shoulder pain from the gas that was pumped into your belly will be constant in duration. If you have shoulder pain that is new or accompanied by chest pain or other symptoms (strange or fast heart rhythm, nausea/vomiting, pain in other areas [jaw, back, stomach, neck, or arms], difficulty breathing, lightheadedness, or sweating; see Heart/Chest pain in our Abnormal Symptom section for a more thorough description), you may be having a heart attack. If you think you are having a heart attack, you should take 325 mg of aspirin and either call 911 or go to your local/nearest emergency department.
<br /><br />If your right shoulder pain does not improve with time or is getting more severe, please contact your surgeon. 
<br /><br />(PAI: I am not sure why there are so many versions of this circulating, but I kept it all here to use at your discretion. It might be wise for us to consult a cardiologist from BIDMC to see if they agree with our triage here as this is obviously their field of specialty.) 


`,
		show:false,
	},
	{
		dropdown:false,
		title:"<strong>Shortness of breath (Urgent)</strong><p><i> Sudden shortness of breath without exertion requires immediate medical attention.</i></p>",
		description: `If you suddenly have difficulty breathing while at rest or while walking, you may have a blood clot that traveled to your lungs. You may also notice that one of your legs is swollen and, perhaps, tender to touch and in pain when you walk. If you are experiencing any of these signs or symptoms, please call 911 or go to your local/nearest emergency department.
`,
		show:false,
	},
	{
		dropdown:false,
		title:"<strong>Urination Inability (Urgent)</strong><p><i>This is abnormal and warrants immediate medical attention.</i></p> ",
		description: `If you are unable to urinate, please immediately go to your local/nearest emergency department. Although your ability to urinate freely is required prior to discharge, in rare circumstances you may have trouble urinating after you return home.
		`,
		show:false,
	},
	{
		dropdown:false,
		title:"<strong>Urination (Less urgent)</strong><p><i> Certain changes associated with urination could indicate a urinary tract infection.</i></p>",
		description: `If you experience burning or pain with urination or notice any cloudiness in the quality of your urine, this may be a sign that you have a urinary tract infection. Foul smelling urine can also indicate a urinary tract infection. If you notice these signs and symptoms, please contact your surgeon at ${this.email}E-MAIL</a> or your primary care physician.`,
		show:false,
	},  {
		dropdown:false,
		title:"<strong>Yellowing of the skin along with possible pain in the upper belly area or darkened urine (Urgent)</strong>",
		description: `
		Occasionally after robotic cholecystectomy, patients can suffer from a retained gallstone that becomes stuck in the pathway, or duct, that normally allows bile to drain from your liver and into your gut. When this duct becomes obstructed and bile is no longer able to drain from your liver, it backs up and leaks into your circulatory system, causing a yellowing of your eyes and skin. This discoloration is reversible and is known as jaundice. You may also notice your urine to be darker in color.

	<br /><br />This presentation can also be associated with <b>pain the right upper portion of your belly</b>. Finally, depending on the location of the retained stone that is obstructing the normal drainage of bile from your liver to your gut, it is also possible to experience a distinct <b>gnawing upper belly pain</b> that can travel to your back. This pain can also be worse with eating and indicates possible obstruction of the duct that allows secretions from your pancreas to reach the food in your gut.

<br /><br />You should immediately contact your surgeon ${this.phone_oncall}here</a>. if you have any of these symptoms and either call 911 or go to your local/nearest emergency department.


		`,
		show:false,
	}]



	whatToDoIfMoreSymptomsOne = [{
		title:'Temperature over 103°F/39°C',
		description: `<p>A <b>mild</b> fever after surgery is normal. But if this
<b>high</b> fever condition continues for more than 24
hours click ${this.phone_oncall}here</a> for physician on call.</p>`,
		show:false,
	},
	{
		title:'Severe stomach pain',
		description: `<ul><li>Send text message to surgeon on call office <br>OR</li>
		<li>Tap call button to contact surgeon on call office immediately!</li>
		</ul>`,
		show:false,
	},
	{
		title:'Bleeding around sutures.',
		description: `<p></p>`,
		show:false,
	},
	{
		title:'Stomach swelling',
		description: `<p></p>`,
		show:false,
	},
	{
		title:"Chills",
		description: `<p></p>`,
		show:false,
	}]

	whatToDoIfMoreSymptomsTwo = [{
		title:'Yellowing of the skin and white of your eyes',
		description: `<p></p>`,
		show:false,
	},
	{
		title:'Dark urine and pale stools',
		description: `<ul>
		<li>If temperature is below 96.5°F/35.8°C<br> Tap Call button to contact surgeon on call office immediately!</li>
		<li>If temperature normal, take hot drink, cover up, and relax</li>
		<li>Check temperature if chills continue</li>
		</ul>`,
		show:false,
	},
	{
		title:'Feeling blah',
		description: `<p></p>`,
		show:false,
	},
	{
		title:'No bowel moments',
		description: `<p></p>`,
		show:false,
	},
	 {
		title:'No heartburn',
		description: `<ul>
		<li>If temperature is below 96.5°F/35.8°C<br> Tap Call button to contact surgeon on call office immediately!</li>
		<li>If temperature normal, take hot drink, cover up, and relax</li>
		<li>Check temperature if chills continue</li>
		</ul>`,
		show:false,
	},
	{
		title:"Other",
		description: `<p></p>`,
		show:false,
	}]
	navClassName:any='na';
	 @ViewChild('pageTop') pageTop: Content;

	constructor(public navCtrl: NavController, public navParams: NavParams, public httpService:HttpproviderProvider) {
			 if(this.platform !='mobileweb') {
		 this.platform = 'web';
		 this.toggleNav();
		 } else {

			 this.className=' ';
					
		 
		 }
		 this.whatTodoIf = 'normalSideEffects';

	}

	/**
	 * Method to scroll to top
	 */
	public pageScroller(){
		//scroll to page top
		this.pageTop.scrollToTop();
	}



	segmentChanged(id) {

	if(id == 2) {
					 for(var i=0;i<this.whatToDoIfNormalSideAffects.length;i++) {
						 this.whatToDoIfNormalSideAffects[i].show = false;
					 }
					 this.pageTop.scrollToTop();
	}
	if(id == 1) {
					 for(var k=0;k<this.symptoms.length;k++) {
						 this.symptoms[k].show = false;
					 }
	}
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
 goBack() {
		this.navCtrl.pop()
	}

		getHtmlContentSymptoms(index) {
		return this.symptoms[index]['description']
	}

	getHtmlContent(index) {
		return this.whatToDoIfMoreSymptomsOne[index]['description']
	}

	getHtmlContentOfNormal(index) {
		 return this.whatToDoIfNormalSideAffects[index]['description']
	}

	getHtmlContentOfSymptomsTwo(index) {
	 return this.whatToDoIfMoreSymptomsTwo[index]['description'] 
	}

		activateItem(id) {
			// for(var i=0;i<this.what)
		if(this.whatToDoIfMoreSymptomsOne[id]['show'] === false) {
			this.whatToDoIfMoreSymptomsOne[id]['show'] = true
		} else {
			this.whatToDoIfMoreSymptomsOne[id]['show'] = false
		}
	}

	activateItemsymptoms(id) {
		for(var i=0;i<this.symptoms.length;i++) {
			if(id === i) {
				 if(this.symptoms[id]['show'] === false) {
			this.symptoms[id]['show'] = true
		} else {
			this.symptoms[id]['show'] = false
		}
	} else {
		this.symptoms[i]['show'] = false
		}
	}
	 
	}

	  activateDetailItem(i, j) {
    for(var k =0;k<this.symptoms[i]['description'].length;k++) {
      if(k === j) {
         if(this.symptoms[i]['description'][j]['show'] === false) {
      this.symptoms[i]['description'][j]['show'] = true
    } else {
      this.symptoms[i]['description'][j]['show'] = false
    }
  } else {
    this.symptoms[i]['description'][k]['show'] = false
  }
     
    }
      
  }

  getDetailHtmlContent(i, j) {
  	console.log(this.symptoms[i]['description'][j]['desc'])
     return this.symptoms[i]['description'][j]['desc']
  }


	activateItemOfNormal(id) {
		for(var i=0;i<this.whatToDoIfNormalSideAffects.length;i++) {
			if(id === i) {
				 if(this.whatToDoIfNormalSideAffects[id]['show'] === false) {
			this.whatToDoIfNormalSideAffects[id]['show'] = true
		} else {
			this.whatToDoIfNormalSideAffects[id]['show'] = false
		}

			} else {
				this.whatToDoIfNormalSideAffects[i]['show'] = false
			}
		}
	 
	}

		activateItemOfSymptomsTwo(id) {
		if(this.whatToDoIfMoreSymptomsTwo[id]['show'] === false) {
			this.whatToDoIfMoreSymptomsTwo[id]['show'] = true
		} else {
			this.whatToDoIfMoreSymptomsTwo[id]['show'] = false
		}
	}

	ionViewDidEnter() {
		googleAnalytics('whattodoif');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad WhattodoifPage');
	}

	getTabs() {
		this.tabs = this.httpService.getWhatToDoIfPagesTabs();
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



	showTabs(Index) {
		this.index = Index;
	}

	getContents(index) {
		console.log(this.menuContents)
	}

	swipeEvent(event) {
		if(event.direction === 2) {
					this.swipeLeft()
				} else if(event.direction === 4) {
					this.swipeRight()
				}

	}

	swipeLeft() {
			 if(this.whatTodoIf == 'normalSideEffects') {
				 this.whatTodoIf = 'symptoms';
				 this.pageTop.scrollToTop(0);
			 } 
			 // else if(this.whatTodoIf == 'moreSymptomsOne') {
			 //   this.whatTodoIf = 'moreSymptomsTwo'
			 // } 
			 // else if(this.whatTodoIf == 'moreSymptomsTwo') {
			 //    this.navCtrl.setRoot(SuccessPage)
			 // }
			 else if(this.whatTodoIf == 'symptoms') {
					this.navCtrl.setRoot(SuccessPage)
			 }
	}

	swipeRight() {
		if(this.whatTodoIf == 'normalSideEffects') {
			this.navCtrl.setRoot(PostprocedurePage)
				 
			 }
			 //  else if(this.whatTodoIf == 'moreSymptomsOne') {
			 //  this.whatTodoIf = 'normalSideEffects'
			 // }
			 //  else if(this.whatTodoIf == 'moreSymptomsTwo') {
			 //    this.whatTodoIf = 'moreSymptomsOne';
			 // }
				else if(this.whatTodoIf == 'symptoms') {

					this.whatTodoIf = 'normalSideEffects';
					this.pageTop.scrollToTop(0);
			 }
		
	}

}
