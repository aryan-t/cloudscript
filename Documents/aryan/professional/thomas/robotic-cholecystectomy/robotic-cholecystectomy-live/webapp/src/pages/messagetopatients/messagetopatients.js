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
import { HomePage } from '../home/home';
import { PeoplePage } from '../people/people';
import { InsurancemessagePage } from '../insurancemessage/insurancemessage';
import { googleAnalytics } from '../../assets/gtag';
/**
 * Generated class for the MessagetopatientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessagetopatientsPage = /** @class */ (function () {
    function MessagetopatientsPage(navCtrl, navParams) {
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
    MessagetopatientsPage.prototype.ionViewDidEnter = function () {
        googleAnalytics('messagetopatients');
    };
    MessagetopatientsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessagetopatientsPage');
    };
    MessagetopatientsPage.prototype.toggleNav = function () {
        if (this.navClassName == 'na') {
            this.navClassName = 'opennav';
        }
        else if (this.navClassName == 'opennav') {
            this.navClassName = 'na';
        }
    };
    MessagetopatientsPage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(HomePage);
    };
    MessagetopatientsPage.prototype.goToProcedurePage = function () {
        this.navCtrl.push(ProcedurePage);
    };
    MessagetopatientsPage.prototype.gotToPreProcedure = function () {
        this.navCtrl.push(PreprocedurePage);
    };
    MessagetopatientsPage.prototype.gotToDuringProcedurePage = function () {
        this.navCtrl.push(DuringprocedurePage);
    };
    MessagetopatientsPage.prototype.goToRecoverPage = function () {
        this.navCtrl.push(RecoveryPage);
    };
    MessagetopatientsPage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(PostprocedurePage);
    };
    MessagetopatientsPage.prototype.goToWhatIfPage = function () {
        this.navCtrl.push(WhattodoifPage);
    };
    MessagetopatientsPage.prototype.goToPeoplePage = function () {
        this.navCtrl.push(PeoplePage);
    };
    MessagetopatientsPage.prototype.gotToSuccessPage = function () {
        this.navCtrl.push(SuccessPage);
    };
    MessagetopatientsPage.prototype.swipeEvent = function (event) {
        if (event.direction === 2) {
            this.swipeLeft();
        }
        else if (event.direction === 4) {
            this.swipeRight();
        }
    };
    MessagetopatientsPage.prototype.swipeLeft = function () {
        this.navCtrl.push(InsurancemessagePage);
        // this.presentSlidesModal();
    };
    MessagetopatientsPage.prototype.swipeRight = function () {
        this.navCtrl.setRoot(HomePage);
    };
    MessagetopatientsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-messagetopatients',
            templateUrl: 'messagetopatients.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], MessagetopatientsPage);
    return MessagetopatientsPage;
}());
export { MessagetopatientsPage };
//# sourceMappingURL=messagetopatients.js.map