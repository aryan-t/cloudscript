import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { HomePage} from '../pages/home/home';
import { PeoplePage} from '../pages/people/people';
import { MessagetopatientsPage } from '../pages/messagetopatients/messagetopatients';
import { TableofcontentsPage } from '../pages/tableofcontents/tableofcontents';
import { TabsPage } from '../pages/tabs/tabs';

/**
  This section includes all the pages related to procedures
**/

import { ProcedurePage } from '../pages/procedure/procedure';
import { PreprocedurePage } from '../pages/preprocedure/preprocedure';
import { DuringprocedurePage } from '../pages/duringprocedure/duringprocedure';
import { PostprocedurePage } from '../pages/postprocedure/postprocedure';
import { RecoveryPage } from '../pages/recovery/recovery';
import { SuccessPage } from '../pages/success/success';
import { WhattodoifPage } from '../pages/whattodoif/whattodoif';
import { WhydothisPage } from '../pages/whydothis/whydothis';
import { InsurancemessagePage } from '../pages/insurancemessage/insurancemessage';
import { InsurancemessageafterpatientsmessagePage } from '../pages/insurancemessageafterpatientsmessage/insurancemessageafterpatientsmessage';
import { MessagetophysicianPage } from '../pages/messagetophysician/messagetophysician';



import { PagenavigatorProvider } from '../providers/pagenavigator/pagenavigator';
import { HttpproviderProvider } from '../providers/httpprovider/httpprovider';

// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';
// import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    MyApp,
    // ContactPage,
    HomePage,
    TabsPage,
    ProcedurePage,
    PreprocedurePage,
    DuringprocedurePage,
    PostprocedurePage,
    RecoveryPage,
    SuccessPage,
    WhattodoifPage,
    WhydothisPage,
    TableofcontentsPage,
    PeoplePage,
    MessagetopatientsPage,
    InsurancemessagePage,
    InsurancemessageafterpatientsmessagePage,
    MessagetophysicianPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // ProcedurePageModule,
    // PreprocedurePageModule,
    // PostprocedurePageModule,
    // RecoveryPageModule,
    // WhatHappensPageModule,
    // WhattodoifPageModule,
    // AboutprocedurePageModule,
    // DuringprocedurePageModule,
    // SuccessPageModule,
    HttpModule, 
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // ContactPage,
    HomePage,
    TabsPage,
    ProcedurePage,
    PreprocedurePage,
    DuringprocedurePage,
    PostprocedurePage,
    RecoveryPage,
    SuccessPage,
    WhattodoifPage,
    WhydothisPage,
    TableofcontentsPage,
    PeoplePage,
    MessagetopatientsPage,
    InsurancemessagePage,
    InsurancemessageafterpatientsmessagePage,
    MessagetophysicianPage
  ],
  providers: [
    // StatusBar,
    // SplashScreen,
     // InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PagenavigatorProvider,
    HttpproviderProvider
  ],

})
export class AppModule {}
