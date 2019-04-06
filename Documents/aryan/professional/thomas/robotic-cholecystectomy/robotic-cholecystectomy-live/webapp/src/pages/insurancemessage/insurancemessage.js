var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProcedurePage } from '../procedure/procedure';
import { PreprocedurePage } from '../preprocedure/preprocedure';
import { PostprocedurePage } from '../postprocedure/postprocedure';
import { DuringprocedurePage } from '../duringprocedure/duringprocedure';
import { RecoveryPage } from '../recovery/recovery';
import { SuccessPage } from '../success/success';
import { WhattodoifPage } from '../whattodoif/whattodoif';
import { TableofcontentsPage } from '../tableofcontents/tableofcontents';
import { HomePage } from '../home/home';
import { PeoplePage } from '../people/people';
import { MessagetopatientsPage } from '../messagetopatients/messagetopatients';
import { googleAnalytics } from '../../assets/gtag';
/**
 * Generated class for the InsurancemessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InsurancemessagePage = /** @class */ (function () {
    function InsurancemessagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
    }
    InsurancemessagePage.prototype.ionViewDidEnter = function () {
        googleAnalytics('messagetopatients');
    };
    InsurancemessagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessagetopatientsPage');
    };
    InsurancemessagePage.prototype.toggleNav = function () {
        if (this.navClassName == 'na') {
            this.navClassName = 'opennav';
        }
        else if (this.navClassName == 'opennav') {
            this.navClassName = 'na';
        }
    };
    InsurancemessagePage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(HomePage);
    };
    InsurancemessagePage.prototype.goToProcedurePage = function () {
        this.navCtrl.push(ProcedurePage);
    };
    InsurancemessagePage.prototype.gotToPreProcedure = function () {
        this.navCtrl.push(PreprocedurePage);
    };
    InsurancemessagePage.prototype.gotToDuringProcedurePage = function () {
        this.navCtrl.push(DuringprocedurePage);
    };
    InsurancemessagePage.prototype.goToRecoverPage = function () {
        this.navCtrl.push(RecoveryPage);
    };
    InsurancemessagePage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(PostprocedurePage);
    };
    InsurancemessagePage.prototype.goToWhatIfPage = function () {
        this.navCtrl.push(WhattodoifPage);
    };
    InsurancemessagePage.prototype.goToPeoplePage = function () {
        this.navCtrl.push(PeoplePage);
    };
    InsurancemessagePage.prototype.gotToSuccessPage = function () {
        this.navCtrl.push(SuccessPage);
    };
    InsurancemessagePage.prototype.swipeEvent = function (event) {
        if (event.direction === 2) {
            this.swipeLeft();
        }
        else if (event.direction === 4) {
            this.swipeRight();
        }
    };
    InsurancemessagePage.prototype.swipeLeft = function () {
        this.navCtrl.push(TableofcontentsPage);
        // this.presentSlidesModal();
    };
    InsurancemessagePage.prototype.swipeRight = function () {
        this.navCtrl.setRoot(MessagetopatientsPage);
    };
    InsurancemessagePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-insurancemessage',
            templateUrl: 'insurancemessage.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], InsurancemessagePage);
    return InsurancemessagePage;
}());
export { InsurancemessagePage };
//# sourceMappingURL=insurancemessage.js.map