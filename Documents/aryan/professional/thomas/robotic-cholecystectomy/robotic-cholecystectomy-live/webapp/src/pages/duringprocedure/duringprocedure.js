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
 * Generated class for the DuringprocedurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
  This section includes all the pages related to procedures
**/
import { ProcedurePage } from '../procedure/procedure';
import { PreprocedurePage } from '../preprocedure/preprocedure';
;
import { PostprocedurePage } from '../postprocedure/postprocedure';
import { RecoveryPage } from '../recovery/recovery';
import { SuccessPage } from '../success/success';
import { WhattodoifPage } from '../whattodoif/whattodoif';
import { HomePage } from '../home/home';
import { PeoplePage } from '../people/people';
var DuringprocedurePage = /** @class */ (function () {
    function DuringprocedurePage(navCtrl, navParams, httpService) {
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
    DuringprocedurePage_1 = DuringprocedurePage;
    DuringprocedurePage.prototype.ionViewDidEnter = function () {
        googleAnalytics('duringprocedure');
    };
    DuringprocedurePage.prototype.ionViewDidLoad = function () {
        this.getDuringProcedureList();
    };
    DuringprocedurePage.prototype.toggleNav = function () {
        if (this.navClassName == 'na') {
            this.navClassName = 'opennav';
        }
        else if (this.navClassName == 'opennav') {
            this.navClassName = 'na';
        }
    };
    DuringprocedurePage.prototype.activateItem = function (id) {
        for (var i = 0; i < this.duringprocedureList.length; i++) {
            if (id === i) {
                if (this.duringprocedureList[id]['show'] === false) {
                    this.duringprocedureList[id]['show'] = true;
                }
                else {
                    this.duringprocedureList[id]['show'] = false;
                }
            }
            else {
                this.duringprocedureList[i]['show'] = false;
            }
        }
    };
    DuringprocedurePage.prototype.activateDetailItem = function (i, j) {
        for (var k = 0; k < this.duringprocedureList[i]['description'].length; k++) {
            if (k === j) {
                if (this.duringprocedureList[i]['description'][j]['show'] === false) {
                    this.duringprocedureList[i]['description'][j]['show'] = true;
                }
                else {
                    this.duringprocedureList[i]['description'][j]['show'] = false;
                }
            }
            else {
                this.duringprocedureList[i]['description'][k]['show'] = false;
            }
        }
    };
    DuringprocedurePage.prototype.getHtmlContent = function (index) {
        return this.duringprocedureList[index]['description'];
    };
    DuringprocedurePage.prototype.getDetailHtmlContent = function (i, j) {
        return this.duringprocedureList[i]['description'][j]['desc'];
    };
    DuringprocedurePage.prototype.getDuringProcedureList = function () {
        this.duringprocedureList = this.httpService.getDuringProcedureList();
        for (var i = 0; i < this.duringprocedureList.length; i++) {
            this.duringprocedureList[i]['show'] = false;
            if (this.duringprocedureList[i]['dropdown'] == true) {
                this.duringprocedureList[i]['description'][0]['show'] = false;
                this.duringprocedureList[i]['description'][1]['show'] = false;
                // for(var j=0;this.duringprocedureList[i]['description'].length;j++) {
                // this.duringprocedureList[i]['description'][j]['show'] = false
                // }
            }
        }
    };
    DuringprocedurePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    DuringprocedurePage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(HomePage);
    };
    DuringprocedurePage.prototype.goToProcedurePage = function () {
        this.navCtrl.push(ProcedurePage);
    };
    DuringprocedurePage.prototype.gotToPreProcedure = function () {
        this.navCtrl.push(PreprocedurePage);
    };
    DuringprocedurePage.prototype.gotToDuringProcedurePage = function () {
        this.navCtrl.push(DuringprocedurePage_1);
    };
    DuringprocedurePage.prototype.goToRecoverPage = function () {
        this.navCtrl.push(RecoveryPage);
    };
    DuringprocedurePage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(PostprocedurePage);
    };
    DuringprocedurePage.prototype.goToWhatIfPage = function () {
        this.navCtrl.push(WhattodoifPage);
    };
    DuringprocedurePage.prototype.goToPeoplePage = function () {
        this.navCtrl.push(PeoplePage);
    };
    DuringprocedurePage.prototype.gotToSuccessPage = function () {
        this.navCtrl.push(SuccessPage);
    };
    DuringprocedurePage.prototype.swipeEvent = function (event) {
        if (event.direction === 2) {
            this.swipeLeft();
        }
        else if (event.direction === 4) {
            this.swipeRight();
        }
    };
    DuringprocedurePage.prototype.swipeLeft = function () {
        this.navCtrl.setRoot(RecoveryPage);
    };
    DuringprocedurePage.prototype.swipeRight = function () {
        this.navCtrl.setRoot(PreprocedurePage);
    };
    var DuringprocedurePage_1;
    DuringprocedurePage = DuringprocedurePage_1 = __decorate([
        IonicPage(),
        Component({
            selector: 'page-duringprocedure',
            templateUrl: 'duringprocedure.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HttpproviderProvider])
    ], DuringprocedurePage);
    return DuringprocedurePage;
}());
export { DuringprocedurePage };
//# sourceMappingURL=duringprocedure.js.map