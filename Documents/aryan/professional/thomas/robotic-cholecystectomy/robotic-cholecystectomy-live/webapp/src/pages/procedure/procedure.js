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
import { NavController, NavParams, MenuController, Content } from 'ionic-angular';
import { HttpproviderProvider } from '../../providers/httpprovider/httpprovider';
import { googleAnalytics } from '../../assets/gtag';
/**
 * Generated class for the ProcedurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
  This section includes all the pages related to procedures
**/
import { PreprocedurePage } from '../preprocedure/preprocedure';
import { DuringprocedurePage } from '../duringprocedure/duringprocedure';
import { PostprocedurePage } from '../postprocedure/postprocedure';
import { RecoveryPage } from '../recovery/recovery';
import { SuccessPage } from '../success/success';
import { WhattodoifPage } from '../whattodoif/whattodoif';
import { WhydothisPage } from '../whydothis/whydothis';
import { HomePage } from '../home/home';
import { PeoplePage } from '../people/people';
var ProcedurePage = /** @class */ (function () {
    function ProcedurePage(navCtrl, navParams, httpService, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.menuCtrl = menuCtrl;
        this.platform = localStorage.getItem('platform');
        this.className = 'contentwrap';
        this.navClassName = 'na';
        if (this.platform != 'mobileweb') {
            this.platform = 'web';
            this.toggleNav();
        }
        else {
            this.className = ' ';
        }
        // this.openMenu();
    }
    ProcedurePage_1 = ProcedurePage;
    ProcedurePage.prototype.toggleNav = function () {
        if (this.navClassName == 'na') {
            this.navClassName = 'opennav';
        }
        else if (this.navClassName == 'opennav') {
            this.navClassName = 'na';
        }
    };
    ProcedurePage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(HomePage);
    };
    ProcedurePage.prototype.togglePage = function (whichPage) {
        // this.isList=false;
        // this.isLocation=false;
        // this.isSelf=false;
        // this.isNotifications=false;
        // this.isSearch=false;
        // this.isCamera=false;
        // letnewTab:string='';
        // switch (whichPage) {
        //   case'List':
        //     this.isList=true;
        //     newTab='PhotosPage';
        //     break;
        //   case'Location':
        //     this.isLocation=true;
        //     newTab='LocationsPage';
        //     break;
        //   case'Self':
        //     this.isSelf=true;
        //     newTab='SelfPage';
        //     break;
        //   case'Notifications':
        //     this.isNotifications=true;
        //     newTab='NotificationsPage';
        //     break;
        //   case'Search':
        //     this.isSearch=true;
        //     newTab='SearchPage';
        //     break;
        //   case'Camera':
        //     this.isCamera=true;
        //     newTab='CameraPage';
        //     break;
        //  }
        //  this.nav.setRoot(newTab);
    };
    ProcedurePage.prototype.openMenu = function () {
        // this.menuCtrl.open();
    };
    ProcedurePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ProcedurePage.prototype.ionViewDidEnter = function () {
        googleAnalytics('procedure');
    };
    ProcedurePage.prototype.ionViewDidLoad = function () {
        // location.reload();
        this.getAboutProcedurePageList();
    };
    ProcedurePage.prototype.getAboutProcedurePageList = function () {
        this.procedureList = this.httpService.getAboutProcedureList();
        if (this.procedureList.length == 5) {
            this.procedureList.shift();
        }
    };
    ProcedurePage.prototype.goToProcedurePage = function () {
        this.navCtrl.push(ProcedurePage_1);
    };
    ProcedurePage.prototype.gotToPreProcedure = function () {
        this.navCtrl.push(PreprocedurePage);
    };
    ProcedurePage.prototype.gotToDuringProcedurePage = function () {
        this.navCtrl.push(DuringprocedurePage);
    };
    ProcedurePage.prototype.goToRecoverPage = function () {
        this.navCtrl.push(RecoveryPage);
    };
    ProcedurePage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(PostprocedurePage);
    };
    ProcedurePage.prototype.goToWhatIfPage = function () {
        this.navCtrl.push(WhattodoifPage);
    };
    ProcedurePage.prototype.goToPeoplePage = function () {
        this.navCtrl.push(PeoplePage);
    };
    ProcedurePage.prototype.gotToSuccessPage = function () {
        this.navCtrl.push(SuccessPage);
    };
    ProcedurePage.prototype.navigateToAboutDetails = function (index) {
        this.navCtrl.push(WhydothisPage, {
            index: index
        });
    };
    ProcedurePage.prototype.swipeEvent = function (event) {
        if (event.direction === 2) {
            this.swipeLeft();
            // this.navCtrl.setRoot(PreprocedurePage)
        }
        if (event.direction == 4) {
            this.swipeRight();
        }
    };
    ProcedurePage.prototype.swipeLeft = function () {
        this.navCtrl.setRoot(PreprocedurePage);
    };
    ProcedurePage.prototype.swipeRight = function () {
        this.navCtrl.setRoot(WhydothisPage, {
            index: 'audio'
        });
    };
    var ProcedurePage_1;
    __decorate([
        ViewChild('pageTop'),
        __metadata("design:type", Content)
    ], ProcedurePage.prototype, "pageTop", void 0);
    ProcedurePage = ProcedurePage_1 = __decorate([
        Component({
            selector: 'page-procedure',
            templateUrl: 'procedure.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams, HttpproviderProvider, MenuController])
    ], ProcedurePage);
    return ProcedurePage;
}());
export { ProcedurePage };
//# sourceMappingURL=procedure.js.map