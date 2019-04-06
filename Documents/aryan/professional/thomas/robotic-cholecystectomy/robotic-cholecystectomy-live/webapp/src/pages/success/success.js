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
import { googleAnalytics } from '../../assets/gtag';
/**
 * Generated class for the SuccessPage page.
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
import { WhattodoifPage } from '../whattodoif/whattodoif';
import { HomePage } from '../home/home';
import { PeoplePage } from '../people/people';
// var window;
var SuccessPage = /** @class */ (function () {
    function SuccessPage(navCtrl, navParams) {
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
    SuccessPage_1 = SuccessPage;
    SuccessPage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(HomePage);
    };
    SuccessPage.prototype.toggleNav = function () {
        if (this.navClassName == 'na') {
            this.navClassName = 'opennav';
        }
        else if (this.navClassName == 'opennav') {
            this.navClassName = 'na';
        }
    };
    SuccessPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SuccessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SuccessPage');
    };
    SuccessPage.prototype.ionViewDidEnter = function () {
        googleAnalytics('success');
    };
    SuccessPage.prototype.getSatisfactionLevel = function (level) {
        this.satisfied = level;
    };
    SuccessPage.prototype.getHelpfulLevel = function (level) {
        this.helpful = level;
    };
    SuccessPage.prototype.goToProcedurePage = function () {
        this.navCtrl.push(ProcedurePage);
    };
    SuccessPage.prototype.gotToPreProcedure = function () {
        this.navCtrl.push(PreprocedurePage);
    };
    SuccessPage.prototype.gotToDuringProcedurePage = function () {
        this.navCtrl.push(DuringprocedurePage);
    };
    SuccessPage.prototype.goToRecoverPage = function () {
        this.navCtrl.push(RecoveryPage);
    };
    SuccessPage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(PostprocedurePage);
    };
    SuccessPage.prototype.goToWhatIfPage = function () {
        this.navCtrl.push(WhattodoifPage);
    };
    SuccessPage.prototype.goToPeoplePage = function () {
        this.navCtrl.push(PeoplePage);
    };
    SuccessPage.prototype.gotToSuccessPage = function () {
        this.navCtrl.push(SuccessPage_1);
    };
    SuccessPage.prototype.swipeEvent = function (event) {
        if (event.direction === 4) {
            this.swipeRight();
        }
    };
    SuccessPage.prototype.swipeRight = function () {
        this.navCtrl.setRoot(WhattodoifPage);
    };
    SuccessPage.prototype.activateMailToOptions = function () {
        window.location.href = "mailto:someone@example.com";
    };
    var SuccessPage_1;
    SuccessPage = SuccessPage_1 = __decorate([
        IonicPage(),
        Component({
            selector: 'page-success',
            templateUrl: 'success.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], SuccessPage);
    return SuccessPage;
}());
export { SuccessPage };
//# sourceMappingURL=success.js.map