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
import { DuringprocedurePage } from '../duringprocedure/duringprocedure';
import { RecoveryPage } from '../recovery/recovery';
import { SuccessPage } from '../success/success';
import { WhattodoifPage } from '../whattodoif/whattodoif';
import { HomePage } from '../home/home';
import { PostprocedurePage } from '../postprocedure/postprocedure';
import { googleAnalytics } from '../../assets/gtag';
/**
 * Generated class for the PeoplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PeoplePage = /** @class */ (function () {
    function PeoplePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = localStorage.getItem('platform');
        this.navClassName = 'na';
        this.className = 'contentwrap';
        if (this.platform != 'mobileweb') {
            this.platform = 'web';
            this.toggleNav();
        }
        else {
            this.className = ' ';
        }
    }
    PeoplePage.prototype.toggleNav = function () {
        if (this.navClassName == 'na') {
            this.navClassName = 'opennav';
        }
        else if (this.navClassName == 'opennav') {
            this.navClassName = 'na';
        }
    };
    PeoplePage.prototype.ionViewDidEnter = function () {
        googleAnalytics('people');
    };
    PeoplePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PeoplePage');
    };
    PeoplePage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(HomePage);
    };
    PeoplePage.prototype.goToProcedurePage = function () {
        this.navCtrl.push(ProcedurePage);
    };
    PeoplePage.prototype.gotToPreProcedure = function () {
        this.navCtrl.push(PreprocedurePage);
    };
    PeoplePage.prototype.gotToDuringProcedurePage = function () {
        this.navCtrl.push(DuringprocedurePage);
    };
    PeoplePage.prototype.goToRecoverPage = function () {
        this.navCtrl.push(RecoveryPage);
    };
    PeoplePage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(PostprocedurePage);
    };
    PeoplePage.prototype.goToWhatIfPage = function () {
        this.navCtrl.push(WhattodoifPage);
    };
    PeoplePage.prototype.gotToSuccessPage = function () {
        this.navCtrl.push(SuccessPage);
    };
    PeoplePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-people',
            templateUrl: 'people.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], PeoplePage);
    return PeoplePage;
}());
export { PeoplePage };
//# sourceMappingURL=people.js.map