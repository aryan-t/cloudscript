import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ProcedurePage } from '../pages/procedure/procedure';
import { PreprocedurePage } from '../pages/preprocedure/preprocedure';
import { DuringprocedurePage } from '../pages/duringprocedure/duringprocedure';
import { RecoveryPage } from '../pages/recovery/recovery';
import { SuccessPage } from '../pages/success/success';
import { WhattodoifPage } from '../pages/whattodoif/whattodoif';
import { PostprocedurePage } from '../pages/postprocedure/postprocedure';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  currentPlatform:any;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title:'About procedure', component:ProcedurePage},
      {title:'Pre-procedure', component:PreprocedurePage},
      {title:'During procedure', component:DuringprocedurePage},
      {title:'Recovery', component:RecoveryPage},
      {title:'Post procedure', component:PostprocedurePage},
      {title: 'What to do if', component:WhattodoifPage},
      {title:'Success', component:SuccessPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.nav.setRoot(HomePage)
      if (this.platform.is('mobileweb')) {
      localStorage.setItem('platform', 'mobileweb');
      this.currentPlatform = 'mobileweb';
    } else {
      this.currentPlatform = 'web'
    }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
