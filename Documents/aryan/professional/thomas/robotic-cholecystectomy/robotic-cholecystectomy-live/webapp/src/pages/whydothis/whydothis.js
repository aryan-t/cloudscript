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
import { NavController, NavParams, Navbar, Slides, Content } from 'ionic-angular';
import { ProcedurePage } from '../procedure/procedure';
import { PreprocedurePage } from '../preprocedure/preprocedure';
import { HomePage } from '../home/home';
import { TableofcontentsPage } from '../tableofcontents/tableofcontents';
import { PeoplePage } from '../people/people';
import { HttpproviderProvider } from '../../providers/httpprovider/httpprovider';
import { DuringprocedurePage } from '../duringprocedure/duringprocedure';
import { PostprocedurePage } from '../postprocedure/postprocedure';
import { RecoveryPage } from '../recovery/recovery';
import { SuccessPage } from '../success/success';
import { WhattodoifPage } from '../whattodoif/whattodoif';
import { googleAnalytics } from '../../assets/gtag';
/**
 * Generated class for the WhydothisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WhydothisPage = /** @class */ (function () {
    function WhydothisPage(navCtrl, httpService, navParams) {
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this.navParams = navParams;
        this.platform = localStorage.getItem('platform');
        this.className = 'contentwrap';
        this.navClassName = 'na';
        this.lengOfSlides = 8;
        this.subContent = '';
        this.params = this.navParams.get('index');
        if (this.params == 'audio') {
            // var procedureDetails = this.httpService.getAboutProcedureListDetails(this.params);
            this.title = "Hello";
            this.content = "";
            this.imgSrc = './assets/imgs/logo.jpg';
            this.index = 'audio';
        }
        else {
            var procedureDetails = this.httpService.getAboutProcedureListDetails(this.params);
            this.title = procedureDetails.content.title;
            this.content = procedureDetails.content.content;
            this.imgSrc = procedureDetails.content.img;
            this.length = procedureDetails.length;
            this.dropdown = procedureDetails.content.dropdown;
            if (procedureDetails.content.subcontent != null) {
                this.subContent = procedureDetails.content.subcontent;
            }
            this.index = this.params;
            if (procedureDetails.content.dropdown == true) {
                for (var i = 0; i < this.content.length; i++) {
                    this.content[i].show = false;
                }
            }
        }
        if (this.platform != 'mobileweb') {
            this.platform = 'web';
            this.toggleNav();
        }
        else {
            this.className = ' ';
        }
        // alert(this.index)
        // console.log(this.procedureDetails.title)
    }
    WhydothisPage.prototype.toggleNav = function () {
        if (this.navClassName == 'na') {
            this.navClassName = 'opennav';
        }
        else if (this.navClassName == 'opennav') {
            this.navClassName = 'na';
        }
    };
    WhydothisPage.prototype.activateItem = function (id) {
        for (var i = 0; i < this.content.length; i++) {
            if (id != i) {
                this.content[i]['show'] = false;
            }
        }
        if (this.content[id]['show'] === false) {
            this.content[id]['show'] = true;
        }
        else {
            this.content[id]['show'] = false;
        }
    };
    WhydothisPage.prototype.ionViewDidEnter = function () {
        googleAnalytics('whydothis');
    };
    WhydothisPage.prototype.ionViewWillLeave = function () {
        this.content = "<p></p>";
    };
    WhydothisPage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(HomePage);
    };
    WhydothisPage.prototype.checkAudioEnded = function () {
        var thisObj = this;
        setTimeout(function () {
            thisObj.checkAudioEnded();
        }, 100);
        if (this.audioID.ended() === true && this.audioID != null) {
            this.navCtrl.setRoot(ProcedurePage);
        }
    };
    WhydothisPage.prototype.slideChanged = function () {
        // var thisobj = this;
        // if(thisobj.slides.getActiveIndex() == undefined || thisobj.slides.getActiveIndex() == 0) {
        //   setTimeout(function() {
        //     thisobj.slides.slideNext(2000);
        //     thisobj.slideChanged();
        //   }, 3000)
        // } else {
        //   if(thisobj.slides.getActiveIndex() == thisobj.lengOfSlides-1) {
        //      setTimeout(function() {
        //     thisobj.slides.slideTo(0, 2000);
        //     thisobj.slideChanged();
        //   }, 3000)
        //   } else {
        //       if(thisobj.slides.getActiveIndex() < thisobj.lengOfSlides) {
        //       setTimeout(function() {
        //     thisobj.slides.slideNext(2000);
        //     thisobj.slideChanged();
        //   }, 3000)
        //   }
        //   }
        // } 
    };
    WhydothisPage.prototype.ionViewDidLoad = function () {
        if (this.params == 'audio') {
            this.slideChanged();
            this.audioID = document.getElementById("myaudio");
        }
        this.pageTop.scrollToTop(0);
        // this.checkAudioEnded();
    };
    WhydothisPage.prototype.ionViewDidLeave = function () {
        if (this.audioID != undefined) {
            this.audioID.pause();
        }
    };
    WhydothisPage.prototype.ionViewWillUnload = function () {
        // this.audioID.stop();
        this.audioID = null;
    };
    WhydothisPage.prototype.navigateToProcedurePage = function () {
        // alert(1)
        // this.navCtrl.pop();
        this.navCtrl.setRoot(ProcedurePage);
    };
    WhydothisPage.prototype.swipeEvent = function (event) {
        if (event.direction === 2) {
            this.swipeLeft();
        }
        if (event.direction === 4) {
            this.swipeRight();
        }
    };
    WhydothisPage.prototype.goToProcedurePage = function () {
        this.navCtrl.push(ProcedurePage);
    };
    WhydothisPage.prototype.gotToPreProcedure = function () {
        this.navCtrl.push(PreprocedurePage);
    };
    WhydothisPage.prototype.gotToDuringProcedurePage = function () {
        this.navCtrl.push(DuringprocedurePage);
    };
    WhydothisPage.prototype.goToRecoverPage = function () {
        this.navCtrl.push(RecoveryPage);
    };
    WhydothisPage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(PostprocedurePage);
    };
    WhydothisPage.prototype.goToWhatIfPage = function () {
        this.navCtrl.push(WhattodoifPage);
    };
    WhydothisPage.prototype.goToPeoplePage = function () {
        this.navCtrl.push(PeoplePage);
    };
    WhydothisPage.prototype.gotToSuccessPage = function () {
        this.navCtrl.push(SuccessPage);
    };
    WhydothisPage.prototype.swipeLeft = function () {
        this.pageTop.scrollToTop(0);
        if (this.index == 'audio') {
            this.navCtrl.setRoot(ProcedurePage);
        }
        else {
            if (this.length > this.index) {
                if ((this.index + 1) == this.length) {
                    this.navCtrl.setRoot(PreprocedurePage);
                }
                else {
                    var procedureDetails = this.httpService.getAboutProcedureListDetails(this.index + 1);
                    this.title = procedureDetails.content.title;
                    this.length = procedureDetails.length;
                    this.imgSrc = procedureDetails.content.img;
                    this.content = procedureDetails.content.content;
                    this.dropdown = procedureDetails.content.dropdown;
                    if (procedureDetails.content.subcontent != null) {
                        this.subContent = procedureDetails.content.subcontent;
                    }
                    this.index += 1;
                }
            }
            else {
                this.navCtrl.setRoot(PreprocedurePage);
            }
        }
    };
    WhydothisPage.prototype.swipeRight = function () {
        this.pageTop.scrollToTop(0);
        if (this.index == 'audio') {
            this.navCtrl.setRoot(TableofcontentsPage);
        }
        else {
            if (this.index == 0) {
                this.navCtrl.setRoot(ProcedurePage);
            }
            else if (this.length > this.index) {
                var procedureDetails = this.httpService.getAboutProcedureListDetails(this.index - 1);
                this.content = procedureDetails.content.content;
                this.title = procedureDetails.content.title;
                this.imgSrc = procedureDetails.content.img;
                this.length = procedureDetails.length;
                this.dropdown = procedureDetails.content.dropdown;
                if (procedureDetails.content.subcontent != null) {
                    this.subContent = procedureDetails.content.subcontent;
                }
                this.index -= 1;
            }
        }
    };
    __decorate([
        ViewChild(Navbar),
        __metadata("design:type", Navbar)
    ], WhydothisPage.prototype, "navBar", void 0);
    __decorate([
        ViewChild('pageTop'),
        __metadata("design:type", Content)
    ], WhydothisPage.prototype, "pageTop", void 0);
    __decorate([
        ViewChild(Slides),
        __metadata("design:type", Slides)
    ], WhydothisPage.prototype, "slides", void 0);
    WhydothisPage = __decorate([
        Component({
            selector: 'page-whydothis',
            templateUrl: 'whydothis.html',
        }),
        __metadata("design:paramtypes", [NavController, HttpproviderProvider, NavParams])
    ], WhydothisPage);
    return WhydothisPage;
}());
export { WhydothisPage };
//# sourceMappingURL=whydothis.js.map