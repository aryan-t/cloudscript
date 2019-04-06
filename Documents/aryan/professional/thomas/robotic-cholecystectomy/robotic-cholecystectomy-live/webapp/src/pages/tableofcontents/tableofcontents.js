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
import { PreprocedurePage } from '../preprocedure/preprocedure';
import { ProcedurePage } from '../procedure/procedure';
import { DuringprocedurePage } from '../duringprocedure/duringprocedure';
import { PostprocedurePage } from '../postprocedure/postprocedure';
import { RecoveryPage } from '../recovery/recovery';
import { SuccessPage } from '../success/success';
import { WhattodoifPage } from '../whattodoif/whattodoif';
import { WhydothisPage } from '../whydothis/whydothis';
import { HomePage } from '../home/home';
import { PeoplePage } from '../people/people';
import { InsurancemessagePage } from '../insurancemessage/insurancemessage';
import { googleAnalytics } from '../../assets/gtag';
/**
 * Generated class for the TableofcontentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TableofcontentsPage = /** @class */ (function () {
    function TableofcontentsPage(navCtrl, navParams) {
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
    TableofcontentsPage.prototype.toggleNav = function () {
        if (this.navClassName == 'na') {
            this.navClassName = 'opennav';
        }
        else if (this.navClassName == 'opennav') {
            this.navClassName = 'na';
        }
    };
    TableofcontentsPage.prototype.ionViewDidEnter = function () {
        googleAnalytics('tableofcontents');
    };
    TableofcontentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TableofcontentsPage');
    };
    TableofcontentsPage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(HomePage);
    };
    TableofcontentsPage.prototype.goToHelloPage = function () {
        this.navCtrl.setRoot(WhydothisPage, {
            index: 'audio'
        });
    };
    TableofcontentsPage.prototype.goToProcedurePage = function () {
        this.navCtrl.push(ProcedurePage);
    };
    TableofcontentsPage.prototype.gotToPreProcedure = function () {
        this.navCtrl.push(PreprocedurePage);
    };
    TableofcontentsPage.prototype.gotToDuringProcedurePage = function () {
        this.navCtrl.push(DuringprocedurePage);
    };
    TableofcontentsPage.prototype.goToRecoverPage = function () {
        this.navCtrl.push(RecoveryPage);
    };
    TableofcontentsPage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(PostprocedurePage);
    };
    TableofcontentsPage.prototype.goToWhatIfPage = function () {
        this.navCtrl.push(WhattodoifPage);
    };
    TableofcontentsPage.prototype.goToPeoplePage = function () {
        this.navCtrl.push(PeoplePage);
    };
    TableofcontentsPage.prototype.gotToSuccessPage = function () {
        this.navCtrl.push(SuccessPage);
    };
    TableofcontentsPage.prototype.swipeEvent = function (event) {
        if (event.direction === 2) {
            this.swipeLeft();
        }
        else if (event.direction === 4) {
            this.swipeRight();
        }
    };
    TableofcontentsPage.prototype.swipeLeft = function () {
        this.goToHelloPage();
    };
    TableofcontentsPage.prototype.swipeRight = function () {
        this.navCtrl.setRoot(InsurancemessagePage);
        //  	this.navCtrl.setRoot(MessagetophysicianPage);
    };
    TableofcontentsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-tableofcontents',
            templateUrl: 'tableofcontents.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], TableofcontentsPage);
    return TableofcontentsPage;
}());
export { TableofcontentsPage };
//# sourceMappingURL=tableofcontents.js.map