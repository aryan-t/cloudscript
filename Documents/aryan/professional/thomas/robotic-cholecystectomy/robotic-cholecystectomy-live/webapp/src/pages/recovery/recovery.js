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
import { HttpproviderProvider } from '../../providers/httpprovider/httpprovider';
import { googleAnalytics } from '../../assets/gtag';
/**
 * Generated class for the RecoveryPage page.
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
import { SuccessPage } from '../success/success';
import { WhattodoifPage } from '../whattodoif/whattodoif';
import { HomePage } from '../home/home';
import { PeoplePage } from '../people/people';
var RecoveryPage = /** @class */ (function () {
    function RecoveryPage(navCtrl, navParams, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
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
    RecoveryPage_1 = RecoveryPage;
    RecoveryPage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(HomePage);
    };
    RecoveryPage.prototype.toggleNav = function () {
        if (this.navClassName == 'na') {
            this.navClassName = 'opennav';
        }
        else if (this.navClassName == 'opennav') {
            this.navClassName = 'na';
        }
    };
    RecoveryPage.prototype.ionViewDidEnter = function () {
        googleAnalytics('recovery');
    };
    RecoveryPage.prototype.ionViewDidLoad = function () {
        this.getRecoveryContent();
    };
    RecoveryPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    RecoveryPage.prototype.getRecoveryContent = function () {
        this.content = this.httpService.getRecoveryContent();
        
        for (var i = 0; i < this.content.length; i++) {
            this.content[i]['show'] = false;
        }
    };
    RecoveryPage.prototype.activateItem = function (id) {
        for (var i = 0; i < this.content.length; i++) {
            if (id === i) {
                if (this.content[id]['show'] === false) {
                    this.content[id]['show'] = true;
                }
                else {
                    this.content[id]['show'] = false;
                }
            }
            else {
                this.content[i]['show'] = false;
            }
        }
    };
    RecoveryPage.prototype.goToProcedurePage = function () {
        this.navCtrl.push(ProcedurePage);
    };
    RecoveryPage.prototype.gotToPreProcedure = function () {
        this.navCtrl.push(PreprocedurePage);
    };
    RecoveryPage.prototype.gotToDuringProcedurePage = function () {
        this.navCtrl.push(DuringprocedurePage);
    };
    RecoveryPage.prototype.goToRecoverPage = function () {
        this.navCtrl.push(RecoveryPage_1);
    };
    RecoveryPage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(PostprocedurePage);
    };
    RecoveryPage.prototype.goToWhatIfPage = function () {
        this.navCtrl.push(WhattodoifPage);
    };
    RecoveryPage.prototype.goToPeoplePage = function () {
        this.navCtrl.push(PeoplePage);
    };
    RecoveryPage.prototype.gotToSuccessPage = function () {
        this.navCtrl.push(SuccessPage);
    };
    RecoveryPage.prototype.swipeEvent = function (event) {
        if (event.direction === 2) {
            this.swipeLeft();
        }
        else if (event.direction === 4) {
            this.swipeRight();
        }
    };
    RecoveryPage.prototype.swipeLeft = function () {
        this.navCtrl.push(PostprocedurePage);
    };
    RecoveryPage.prototype.swipeRight = function () {
        this.navCtrl.push(DuringprocedurePage);
    };
    var RecoveryPage_1;
    RecoveryPage = RecoveryPage_1 = __decorate([
        IonicPage(),
        Component({
            selector: 'page-recovery',
            templateUrl: 'recovery.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HttpproviderProvider])
    ], RecoveryPage);
    return RecoveryPage;
}());
export { RecoveryPage };
//# sourceMappingURL=recovery.js.map