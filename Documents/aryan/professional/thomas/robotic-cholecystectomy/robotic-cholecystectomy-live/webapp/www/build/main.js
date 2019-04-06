webpackJsonp([12],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postprocedure_postprocedure__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__people_people__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messagetophysician_messagetophysician__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__insurancemessage_insurancemessage__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
    This section includes all the pages related to procedures
**/




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, appCtrl) {
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
    }
    HomePage.prototype.navigateToMessagePage = function () {
        // this.navCtrl.setRoot(ProcedurePage)
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__messagetophysician_messagetophysician__["a" /* MessagetophysicianPage */]);
    };
    HomePage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__postprocedure_postprocedure__["a" /* PostprocedurePage */]);
    };
    HomePage.prototype.goToPeoplePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__people_people__["a" /* PeoplePage */]);
    };
    HomePage.prototype.navigateToPostProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__postprocedure_postprocedure__["a" /* PostprocedurePage */]);
    };
    HomePage.prototype.gotoInsurancePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__insurancemessage_insurancemessage__["a" /* InsurancemessagePage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/home/home.html"*/'<ion-content>\n	<ion-grid>\n		<ion-row>\n			<ion-col align-self-stretch class="homepage" (click)="navigateToMessagePage()">\n				<div class="homepage-text">\n					<h2>The Patient Guide to Robotic Cholecystectomy</h2>\n					<h4>Just about everything you need to know before, during, and after your surgery.</h4>\n					<p>Dr. Blaine T. Phillips, M.D., M.P.H.<br />\n					Dr. Mohamad Rassoul A. Abu-Nuwar M.D.</p>\n					<p>Version 1.0</p>\n					<!-- <p><em>The Division of Minimally Invasive and Bariatric Surgery<br>\n					Beth Israel Deaconess Medical Center</em></p> -->\n					<!-- <button ion-button icon-start (click)="navigateToProcedurePage()">\n					  <ion-icon name="arrow-forward"></ion-icon>\n					</button> -->\n					<button ion-button icon-start>\n					  <ion-icon name="arrow-forward"></ion-icon>\n					</button>\n				</div>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar no-border-top color="dark">\n		<ion-segment color="light">\n			<ion-segment-button value="friends">\n				<ion-icon name="home"></ion-icon><br>\n			</ion-segment-button>\n			<ion-segment-button value="people" (click)="goToPeoplePage()">\n				<ion-icon name="people"></ion-icon><br>\n			</ion-segment-button>\n			<!-- <ion-segment-button value="calendar" (click)="navigateToPostProcedurePage()">\n				At Home\n			</ion-segment-button> -->\n		</ion-segment>\n	</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsurancemessageafterpatientsmessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__procedure_procedure__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preprocedure_preprocedure__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__postprocedure_postprocedure__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__duringprocedure_duringprocedure__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recovery_recovery__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__success_success__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__whattodoif_whattodoif__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tableofcontents_tableofcontents__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__people_people__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__messagetopatients_messagetopatients__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assets_gtag__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__insurancemessage_insurancemessage__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















/**
 * Generated class for the InsurancemessageafterpatientsmessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InsurancemessageafterpatientsmessagePage = /** @class */ (function () {
    function InsurancemessageafterpatientsmessagePage(navCtrl, navParams) {
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
    InsurancemessageafterpatientsmessagePage.prototype.ionViewDidEnter = function () {
        Object(__WEBPACK_IMPORTED_MODULE_13__assets_gtag__["a" /* googleAnalytics */])('messagetopatients');
    };
    InsurancemessageafterpatientsmessagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessagetopatientsPage');
    };
    InsurancemessageafterpatientsmessagePage.prototype.toggleNav = function () {
        if (this.navClassName == 'na') {
            this.navClassName = 'opennav';
        }
        else if (this.navClassName == 'opennav') {
            this.navClassName = 'na';
        }
    };
    InsurancemessageafterpatientsmessagePage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
    };
    InsurancemessageafterpatientsmessagePage.prototype.goToProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__procedure_procedure__["a" /* ProcedurePage */]);
    };
    InsurancemessageafterpatientsmessagePage.prototype.gotToPreProcedure = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__preprocedure_preprocedure__["a" /* PreprocedurePage */]);
    };
    InsurancemessageafterpatientsmessagePage.prototype.gotToDuringProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__duringprocedure_duringprocedure__["a" /* DuringprocedurePage */]);
    };
    InsurancemessageafterpatientsmessagePage.prototype.goToRecoverPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__recovery_recovery__["a" /* RecoveryPage */]);
    };
    InsurancemessageafterpatientsmessagePage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__postprocedure_postprocedure__["a" /* PostprocedurePage */]);
    };
    InsurancemessageafterpatientsmessagePage.prototype.goToWhatIfPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__whattodoif_whattodoif__["a" /* WhattodoifPage */]);
    };
    InsurancemessageafterpatientsmessagePage.prototype.goToPeoplePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__people_people__["a" /* PeoplePage */]);
    };
    InsurancemessageafterpatientsmessagePage.prototype.gotoInsurancePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__insurancemessage_insurancemessage__["a" /* InsurancemessagePage */]);
    };
    InsurancemessageafterpatientsmessagePage.prototype.gotToSuccessPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__success_success__["a" /* SuccessPage */]);
    };
    InsurancemessageafterpatientsmessagePage.prototype.swipeEvent = function (event) {
        if (event.direction === 2) {
            this.swipeLeft();
        }
        else if (event.direction === 4) {
            this.swipeRight();
        }
    };
    InsurancemessageafterpatientsmessagePage.prototype.swipeLeft = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__tableofcontents_tableofcontents__["a" /* TableofcontentsPage */]);
        // this.presentSlidesModal();
    };
    InsurancemessageafterpatientsmessagePage.prototype.swipeRight = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__messagetopatients_messagetopatients__["a" /* MessagetopatientsPage */]);
    };
    InsurancemessageafterpatientsmessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-insurancemessageafterpatientsmessage',template:/*ion-inline-start:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/insurancemessageafterpatientsmessage/insurancemessageafterpatientsmessage.html"*/'<ion-header>\n	<ion-navbar color="primary"  hideBackButton="true">\n		<button ion-button menuToggle  *ngIf=\'platform === "mobileweb"\'>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<!-- <ion-buttons left>\n			<button ion-button icon-only (click)="goBack()">\n				<ion-icon name="ios-arrow-back"></ion-icon>\n			</button>\n		</ion-buttons> -->\n		<ion-title  align-title="center" class="title-nopad">Insurance Message - USA Residents Only</ion-title>\n		<!-- <ion-buttons right>\n			<button ion-button icon-only>\n				<ion-icon name="ios-search"></ion-icon>\n			</button>\n		</ion-buttons> -->\n	</ion-navbar>\n</ion-header>\n\n<ion-content (swipe)="swipeEvent($event)">\n	<div *ngIf=\'platform === "mobileweb" || platform ==="web"\' [ngClass]="navClassName==\'opennav\'?\'navopen\':\'na\'">\n		<div class="pagecontainer">\n			<div class="pagenav">\n				<ul>\n					<li (click)="goToProcedurePage()">\n						<i class="icon"><img src="assets/imgs/open-book.svg" class="icon-default"><img src="assets/imgs/open-book-white.svg" class="icon-white"></i> \n						<span class="menutext">About procedure</span>\n					</li>\n					<li (click)="gotToPreProcedure()">\n						<i class="icon"><img src="assets/imgs/numbers.svg" class="icon-default"><img src="assets/imgs/numbers-white.svg" class="icon-white"></i> \n						<span class="menutext">Pre-procedure</span>\n					</li>\n					<li (click)="gotToDuringProcedurePage()">\n						<i class="icon"><img src="assets/imgs/sleeping.svg" class="icon-default"><img src="assets/imgs/sleeping-white.svg" class="icon-white"></i> \n						<span class="menutext">Procedure</span>\n					</li>\n					<li (click)="goToRecoverPage()">\n						<i class="icon"><img src="assets/imgs/eye-blocked.svg" class="icon-default"><img src="assets/imgs/eye-blocked-white.svg" class="icon-white"></i> \n						<span class="menutext">Recovery</span>\n					</li>\n					<li (click)="goToPostProcedurePage()">\n						<i class="icon"><img src="assets/imgs/home.svg" class="icon-default"><img src="assets/imgs/home-white.svg" class="icon-white"></i> \n						<span class="menutext">At Home</span>\n					</li>\n					<li (click)="goToWhatIfPage()">\n						<i class="icon"><img src="assets/imgs/question-mark.svg" class="icon-default"><img src="assets/imgs/question-mark-white.svg" class="icon-white"></i> \n						<span class="menutext">What to do if</span>\n					</li>\n					<li (click)="gotToSuccessPage()">\n						<i class="icon"><img src="assets/imgs/check-mark.svg" class="icon-default"><img src="assets/imgs/check-mark-white.svg" class="icon-white"></i> \n						<span class="menutext">Success</span>\n					</li>\n					<li (click)="gotoInsurancePage()" class="pointer">\n										<i class="icon"><img src="assets/imgs/dollar-symbol.svg" class="icon-default"><img src="assets/imgs/dollar-symbol-white.svg" class="icon-white"></i> \n										<span class="menutext">Insurance</span>\n									</li>\n					<li (click)="toggleNav()" class="menucollapse"><i class="icon"><img src="assets/imgs/chevron-left.svg"></i> <span class="menutext">Collapse Menu</span></li>\n				</ul>\n			</div>\n			<div class="pagecontent wrapindent">\n				<ion-grid>\n					<ion-row>\n						<ion-col align-self-stretch [ngClass]="className==\'contentwrap\'?\'contentwrap\':\'na\'" class="content-area">\n							<!-- <div class="page-title">\n								<h2>Message to patients</h2>\n								<ion-icon md="md-help" class="help-action"></ion-icon>\n							</div> -->\n\n							<div class="page-content font-lg">\n								<p>Unfortunately, insurance coverage of this surgery is not simple. Unless you are very certain about coverage, we suggest you read the material in the second last section of this app - $ Insurance.</p>\n							</div>\n							<div class="arrownav">\n								<ion-icon name="ios-arrow-back" (click)="swipeRight()" class="iconarrow arrow-left"></ion-icon>\n								<ion-icon name="ios-arrow-forward" (click)="swipeLeft()" class="iconarrow arrow-right"></ion-icon>\n							</div>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n			</div>\n		</div>\n	</div>\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar no-border-top color="dark">\n		<ion-segment color="light">\n			<ion-segment-button value="friends" (click)="goToHomePage()">\n				<ion-icon name="home"></ion-icon><br>\n			</ion-segment-button>\n			<ion-segment-button value="people" (click)="goToPeoplePage()">\n				<ion-icon name="people"></ion-icon><br>\n			</ion-segment-button>\n			<!-- <ion-segment-button value="calendar" (click)="goToPostProcedurePage()">\n				At Home\n			</ion-segment-button> -->\n		</ion-segment>\n	</ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/insurancemessageafterpatientsmessage/insurancemessageafterpatientsmessage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], InsurancemessageafterpatientsmessagePage);
    return InsurancemessageafterpatientsmessagePage;
}());

//# sourceMappingURL=insurancemessageafterpatientsmessage.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostprocedurePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_httpprovider_httpprovider__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_gtag__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__procedure_procedure__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__preprocedure_preprocedure__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__duringprocedure_duringprocedure__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__recovery_recovery__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__success_success__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__whattodoif_whattodoif__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__people_people__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__insurancemessage_insurancemessage__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PostprocedurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
  This section includes all the pages related to procedures
**/









var PostprocedurePage = /** @class */ (function () {
    function PostprocedurePage(navCtrl, navParams, alertCtrl, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.httpService = httpService;
        this.platform = localStorage.getItem('platform');
        this.className = 'contentwrap';
        this.hasInfo = false;
        this.dateSelected = "false";
        this.showFirstPage = true;
        this.navClassName = 'na';
        this.showMultiple = false;
        this.showMultipleSecond = false;
        if (this.platform != 'mobileweb') {
            this.platform = 'web';
            this.toggleNav();
        }
        else {
            this.className = ' ';
        }
        // localStorage.setItem('postproceduredateselected', "false");
    }
    PostprocedurePage_1 = PostprocedurePage;
    PostprocedurePage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
    };
    PostprocedurePage.prototype.toggleNav = function () {
        if (this.navClassName == 'na') {
            this.navClassName = 'opennav';
        }
        else if (this.navClassName == 'opennav') {
            this.navClassName = 'na';
        }
    };
    PostprocedurePage.prototype.getHomeContent = function () {
        this.homeContent = this.httpService.getHomeConent();
        for (var i = 0; i < this.homeContent.length; i++) {
            this.homeContent[i]['show'] = false;
        }
    };
    PostprocedurePage.prototype.getPageContent = function (dayInAWeek) {
        if (dayInAWeek >= 3 && dayInAWeek <= 6) {
            this.hasInfo = true;
        }
        else {
            this.hasInfo = false;
        }
        // alert(dayInAWeek)
        // if(this.dayContentType ==)
        if (dayInAWeek == 0) {
            this.currentSelectedIndex = 0;
            var dayContent = this.httpService.getPostProcedureContent(dayInAWeek);
            this.dayContent = dayContent.content;
            for (var i = 0; i < this.dayContent.length; i++) {
                this.dayContent[i].show = false;
            }
            this.dayContentType = dayContent.type;
            this.activeDay = dayInAWeek;
        }
        else {
            if (this.currentSelectedIndex === 7 || this.currentSelectedIndex == 8) {
                if (dayInAWeek <= 8) {
                    var dayContentWeek8 = this.httpService.getPostProcedureContent(dayInAWeek);
                    this.dayContent = dayContentWeek8.content;
                    this.dayContentType = dayContentWeek8.type;
                    this.currentSelectedIndex = dayInAWeek;
                    this.activeDay = dayInAWeek;
                }
            }
            else {
                if ((this.validateSelection(dayInAWeek) === true)) {
                    var dayContentWeek = this.httpService.getPostProcedureContent(dayInAWeek);
                    //  for(var i=0;i<dayContent.content.length;i++) {
                    //   dayContent.content[i].show = false
                    // }
                    this.dayContent = dayContentWeek.content;
                    for (var j = 0; j < this.dayContent.length; j++) {
                        this.dayContent[j].show = false;
                    }
                    this.dayContentType = dayContentWeek.type;
                    this.currentSelectedIndex = dayInAWeek;
                    this.activeDay = dayInAWeek;
                }
            }
        }
        // console.log(this.dayContent)
    };
    PostprocedurePage.prototype.activateItemHome = function (id) {
        for (var i = 0; i < this.homeContent.length; i++) {
            if (id === i) {
                if (this.homeContent[id]['show'] === false) {
                    this.homeContent[id]['show'] = true;
                }
                else {
                    this.homeContent[id]['show'] = false;
                }
            }
            else {
                this.homeContent[i]['show'] = false;
            }
        }
    };
    PostprocedurePage.prototype.activateDetailItemHome = function (i, j) {
        for (var k = 0; k < this.homeContent[i]['dropdownContent'].length; k++) {
            if (k === j) {
                if (this.homeContent[i]['dropdownContent'][j]['show'] === false) {
                    this.homeContent[i]['dropdownContent'][j]['show'] = true;
                }
                else {
                    this.homeContent[i]['dropdownContent'][j]['show'] = false;
                }
            }
            else {
                this.homeContent[i]['dropdownContent'][k]['show'] = false;
            }
        }
    };
    PostprocedurePage.prototype.getDetailHtmlHomeContent = function (i, j) {
        return this.homeContent[i]['dropdownContent'][j]['desc'];
    };
    PostprocedurePage.prototype.getHtmlContentHome = function (index) {
        return this.homeContent[index]['description'];
    };
    PostprocedurePage.prototype.activateItem = function (id) {
        for (var i = 0; i < this.dayContent.length; i++) {
            if (id == i) {
                if (this.dayContent[id]['show'] === false) {
                    this.dayContent[id]['show'] = true;
                }
                else {
                    this.dayContent[id]['show'] = false;
                }
            }
            else {
                this.dayContent[i]['show'] = false;
            }
        }
    };
    PostprocedurePage.prototype.getHtmlContent = function (index) {
        return this.dayContent[index]['htmlDesc'];
    };
    PostprocedurePage.prototype.validateSelection = function (dayInAweek) {
        var _this = this;
        var selectedAll = true;
        var lastIndex = this.dayContent.length - 1;
        if (dayInAweek > 0) {
            if (this.dayContentType == 'checkbox') {
                for (var i = 0; i < this.dayContent.length; i++) {
                    if (this.dayContent[i]['selected'] === false) {
                        var alert_1 = this.alertCtrl.create({
                            title: 'Did you miss something?',
                            subTitle: 'Be sure to complete your daily task list before moving to the next day.',
                            buttons: [
                                {
                                    text: 'Back',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Ok',
                                    handler: function () {
                                        if (_this.currentSelectedIndex === 7 || _this.currentSelectedIndex == 8) {
                                            if (dayInAweek <= 8) {
                                                var dayContent = _this.httpService.getPostProcedureContent(dayInAweek);
                                                _this.dayContent = dayContent.content;
                                                _this.dayContentType = dayContent.type;
                                                _this.currentSelectedIndex = dayInAweek;
                                                _this.activeDay = dayInAweek;
                                            }
                                        }
                                        else {
                                            if (_this.currentSelectedIndex != dayInAweek) {
                                                var dayContentCurrent = _this.httpService.getPostProcedureContent(dayInAweek);
                                                _this.dayContent = dayContentCurrent.content;
                                                _this.dayContentType = dayContentCurrent.type;
                                                _this.currentSelectedIndex = dayInAweek;
                                                _this.activeDay = dayInAweek;
                                            }
                                        }
                                        if (_this.dayContentType == 'checkbox') {
                                            for (var i = 0; i < _this.dayContent.length; i++) {
                                                if (_this.dayContent[i].dropdown == true) {
                                                    _this.dayContent[i].show = false;
                                                }
                                            }
                                        }
                                        if (_this.dayContentType == 'textanddropdown') {
                                            _this.showMultiple = false;
                                            _this.showMultipleSecond = false;
                                        }
                                    }
                                }
                            ],
                            mode: 'ios'
                        });
                        selectedAll = false;
                        alert_1.present();
                        break;
                    }
                }
            }
            if (dayInAweek === lastIndex && selectedAll == false) {
                var alert_2 = this.alertCtrl.create({
                    title: 'Did you miss something?',
                    subTitle: 'Be sure to complete your daily task list before moving to the next day.',
                    buttons: [
                        {
                            text: 'Back',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'Ok',
                            handler: function () {
                                _this.swipeLeft();
                            }
                        }
                    ],
                    mode: 'ios'
                });
                selectedAll = false;
                alert_2.present();
            }
            if (this.currentSelectedIndex != (dayInAweek - 1)) {
                // let alert = this.alertCtrl.create({
                //   title:'Did you miss something?',
                //   subTitle: 'Be sure to complete your daily task list before moving to the next day.',
                //   buttons: ['Ok'],
                //   mode:'ios'
                // });
                selectedAll = false;
                // alert.present();
            }
        }
        return selectedAll;
    };
    PostprocedurePage.prototype.selectItems = function (id) {
        if (this.dayContent[id]['selected'] === false) {
            this.dayContent[id]['selected'] = true;
        }
        else {
            this.dayContent[id]['selected'] = false;
            // alert('selected ' + this.preProceduresweekBeforeItems[id]['title'])
        }
    };
    PostprocedurePage.prototype.showDatePicker = function () {
        var _this = this;
        var selectedDaysInAWeek = [];
        var days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        var dateAlert = this.alertCtrl.create({
            title: 'Insert date you returned home',
            inputs: [
                {
                    name: 'date',
                    placeholder: 'date',
                    type: 'date'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        var selectedDate = new Date(data['date']);
                        selectedDate.setMinutes(selectedDate.getMinutes() + selectedDate.getTimezoneOffset());
                        selectedDaysInAWeek.push({ date: selectedDate.getDate(), day: days[selectedDate.getDay()] });
                        for (var i = 1; i < 7; i++) {
                            selectedDate.setDate(selectedDate.getDate() + 1);
                            selectedDaysInAWeek.push({ date: selectedDate.getDate(), day: days[selectedDate.getDay()] });
                        }
                        selectedDaysInAWeek.push({ date: '2', day: 'WEEK' });
                        selectedDaysInAWeek.push({ date: '3', day: 'WEEK' });
                        _this.daysInAWeek = selectedDaysInAWeek;
                        localStorage.setItem('selectedDate', data['date']);
                        _this.dateSelected = "true";
                        _this.getPageContent(0);
                        _this.showFirstPage = false;
                        localStorage.setItem('postproceduredateselected', "true");
                    }
                }
            ]
        });
        dateAlert.present();
    };
    PostprocedurePage.prototype.activateItemMultiple = function (id) {
        if (id == 0) {
            if (this.showMultiple) {
                this.showMultiple = false;
            }
            else {
                this.showMultiple = true;
            }
        }
        else if (id === 1) {
            if (this.showMultipleSecond) {
                this.showMultipleSecond = false;
            }
            else {
                this.showMultipleSecond = true;
            }
        }
    };
    PostprocedurePage.prototype.getProperDate = function (date) {
        if (date == null)
            return null;
        return new Date(parseInt(date.substr(6)));
    };
    PostprocedurePage.prototype.ionViewCanEnter = function () {
        var days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        var selectedDaysInAWeek = [];
        var dateSelected = localStorage.getItem('postproceduredateselected');
        this.dateSelected = dateSelected;
        if (dateSelected == "true") {
            // this.dateSelected = JSON.parse(dateSelected);
            this.showFirstPage = false;
            var selectedDate = new Date(localStorage.getItem('selectedDate'));
            selectedDaysInAWeek.push({ date: selectedDate.getDate(), day: days[selectedDate.getDay()] });
            for (var i = 1; i < 7; i++) {
                selectedDate.setDate(selectedDate.getDate() + 1);
                selectedDaysInAWeek.push({ date: selectedDate.getDate(), day: days[selectedDate.getDay()] });
            }
            selectedDaysInAWeek.push({ date: 2, day: 'WEEK' });
            selectedDaysInAWeek.push({ date: 3, day: 'WEEK' });
            this.daysInAWeek = selectedDaysInAWeek;
            this.getPageContent(0);
        }
        else {
            this.dateSelected = "false";
        }
    };
    PostprocedurePage.prototype.ionViewDidEnter = function () {
        Object(__WEBPACK_IMPORTED_MODULE_3__assets_gtag__["a" /* googleAnalytics */])('postprocedure');
    };
    PostprocedurePage.prototype.ionViewDidLoad = function () {
        this.getHomeContent();
        this.showFirstPage = true;
    };
    PostprocedurePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    PostprocedurePage.prototype.goToProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__procedure_procedure__["a" /* ProcedurePage */]);
    };
    PostprocedurePage.prototype.gotToPreProcedure = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__preprocedure_preprocedure__["a" /* PreprocedurePage */]);
    };
    PostprocedurePage.prototype.gotToDuringProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__duringprocedure_duringprocedure__["a" /* DuringprocedurePage */]);
    };
    PostprocedurePage.prototype.goToRecoverPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__recovery_recovery__["a" /* RecoveryPage */]);
    };
    PostprocedurePage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(PostprocedurePage_1);
    };
    PostprocedurePage.prototype.goToWhatIfPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__whattodoif_whattodoif__["a" /* WhattodoifPage */]);
    };
    PostprocedurePage.prototype.goToPeoplePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__people_people__["a" /* PeoplePage */]);
    };
    PostprocedurePage.prototype.gotToSuccessPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__success_success__["a" /* SuccessPage */]);
    };
    PostprocedurePage.prototype.gotoInsurancePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__insurancemessage_insurancemessage__["a" /* InsurancemessagePage */]);
    };
    PostprocedurePage.prototype.swipeEvent = function (event) {
        if (event.direction === 2) {
            this.swipeLeft();
        }
        else if (event.direction === 4) {
            this.swipeRight();
            // this.navCtrl.setRoot(RecoveryPage)
        }
    };
    PostprocedurePage.prototype.swipeLeft = function () {
        this.pageTop.scrollToTop(0);
        if (this.daysInAWeek === undefined) {
            var alert_3 = this.alertCtrl.create({
                title: "Date cannot be empty",
                subTitle: 'Set the date you returned home.',
                buttons: ['Ok']
            });
            alert_3.present();
        }
        else {
            if (this.currentSelectedIndex === 0 && this.showFirstPage === true) {
                this.getPageContent(this.currentSelectedIndex);
                this.showFirstPage = false;
            }
            else if (this.daysInAWeek.length == this.currentSelectedIndex + 1) {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__whattodoif_whattodoif__["a" /* WhattodoifPage */]);
            }
            else {
                this.getPageContent(this.currentSelectedIndex + 1);
            }
        }
    };
    PostprocedurePage.prototype.swipeRight = function () {
        this.pageTop.scrollToTop(0);
        if (this.showFirstPage === true) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__recovery_recovery__["a" /* RecoveryPage */]);
        }
        if (this.currentSelectedIndex == 0) {
            if (this.showFirstPage == true) {
                this.showFirstPage = false;
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__recovery_recovery__["a" /* RecoveryPage */]);
            }
            else {
                this.showFirstPage = true;
                for (var i = 0; i < this.homeContent.length; i++) {
                    this.homeContent[i]['show'] = false;
                }
            }
            // 
        }
        else if (this.currentSelectedIndex > 0) {
            this.getPageContent(this.currentSelectedIndex - 1);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('pageTop'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], PostprocedurePage.prototype, "pageTop", void 0);
    PostprocedurePage = PostprocedurePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-postprocedure',template:/*ion-inline-start:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/postprocedure/postprocedure.html"*/'<ion-header>\n	<ion-navbar color="primary"  hideBackButton="true">\n		<button ion-button menuToggle  *ngIf=\'platform === "mobileweb"\'>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<!-- <ion-buttons left>\n			<button ion-button icon-only (click)="goBack()">\n				<ion-icon name="ios-arrow-back"></ion-icon>\n			</button>\n		</ion-buttons> -->\n		<ion-title  align-title="center">At home</ion-title>\n		<ion-buttons right>\n			 \n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content (swipe)="swipeEvent($event)" #pageTop>\n	<div *ngIf=\'platform === "mobileweb" || platform ==="web"\' [ngClass]="navClassName==\'opennav\'?\'navopen\':\'na\'">\n		<div class="pagecontainer">\n			<div class="pagenav">\n				<ul>\n					<li (click)="goToProcedurePage()">\n				      <i class="icon"><img src="assets/imgs/open-book.svg" class="icon-default"><img src="assets/imgs/open-book-white.svg" class="icon-white"></i> \n				      <span class="menutext">About procedure</span>\n				     </li>\n				     <li (click)="gotToPreProcedure()">\n				      <i class="icon"><img src="assets/imgs/numbers.svg" class="icon-default"><img src="assets/imgs/numbers-white.svg" class="icon-white"></i> \n				      <span class="menutext">Pre-procedure</span>\n				     </li>\n				     <li (click)="gotToDuringProcedurePage()">\n				      <i class="icon"><img src="assets/imgs/sleeping.svg" class="icon-default"><img src="assets/imgs/sleeping-white.svg" class="icon-white"></i> \n				      <span class="menutext">Procedure</span>\n				     </li>\n				     <li (click)="goToRecoverPage()">\n				      <i class="icon"><img src="assets/imgs/eye-blocked.svg" class="icon-default"><img src="assets/imgs/eye-blocked-white.svg" class="icon-white"></i> \n				      <span class="menutext">Recovery</span>\n				     </li>\n				     <li (click)="goToPostProcedurePage()" class="active">\n				      <i class="icon"><img src="assets/imgs/home.svg" class="icon-default"><img src="assets/imgs/home-white.svg" class="icon-white"></i> \n				      <span class="menutext">At Home</span>\n				     </li>\n				     <li (click)="goToWhatIfPage()">\n				      <i class="icon"><img src="assets/imgs/question-mark.svg" class="icon-default"><img src="assets/imgs/question-mark-white.svg" class="icon-white"></i> \n				      <span class="menutext">What to do if</span>\n				     </li>\n				     <li (click)="gotToSuccessPage()">\n				      <i class="icon"><img src="assets/imgs/check-mark.svg" class="icon-default"><img src="assets/imgs/check-mark-white.svg" class="icon-white"></i> \n				      <span class="menutext">Success</span>\n				     </li>\n				     <li (click)="gotoInsurancePage()" class="pointer">\n										<i class="icon"><img src="assets/imgs/dollar-symbol.svg" class="icon-default"><img src="assets/imgs/dollar-symbol-white.svg" class="icon-white"></i> \n										<span class="menutext">Insurance</span>\n									</li>\n				     <li (click)="toggleNav()" class="menucollapse"><i class="icon"><img src="assets/imgs/chevron-left.svg"></i> <span class="menutext">Collapse Menu</span></li>\n				</ul>\n			</div>\n			<div class="pagecontent">\n				<ion-grid>\n					<ion-row>\n						<ion-col align-self-stretch [ngClass]="className==\'contentwrap\'?\'contentwrap\':\'na\'" class="content-area">\n							<!-- <div class="page-title">\n								<h2>At home</h2>\n								<ion-icon md="md-help" class="help-action"></ion-icon>\n							</div> -->\n							\n							<ion-row class="calendar-day" *ngIf="!showFirstPage">\n								<ion-col *ngFor="let day of daysInAWeek; let i=index" (click)="getPageContent(i)"  class="pointer"  [ngClass]="activeDay==i?\'currentDate\':\'na\'">\n									<!-- <div> -->\n									<span class="cal-day">{{day.day}}</span>\n									<span class="cal-date">{{day.date}}</span>\n								<!-- </div> -->\n								</ion-col>\n							</ion-row>\n\n							<div class="page-content">\n								<div *ngIf="showFirstPage">\n\n									<div *ngFor="let item of homeContent;let i=index" class="pointer accordion-item accordion-multi" [ngClass]="item.show==true?\'titleContainer\':\'na\'">\n											<div class="item-content breadcrumb" *ngIf="item.dropdown == false">\n												<h4 (click)="activateItemHome(i)" class="accr-title">\n													<span [innerHTML]="item.title"></span>\n													<span class="arr-icon" *ngIf="item.title !=\'Eat a normal diet after a couple of days\'">\n														<ion-icon *ngIf="!item.show" name="ios-arrow-down"></ion-icon>\n														<ion-icon *ngIf="item.show"  name="ios-arrow-up"></ion-icon>\n													</span>\n												</h4>\n												<div [ngClass]="item.title!=\'Eat a normal diet after a couple of days\'?\'accr-content\':\'na\'" [innerHTML]="getHtmlContentHome(i)" *ngIf="item.show"></div>\n											</div>\n										</div>\n\n\n									\n									<button ion-button icon-start  (click)="showDatePicker()" *ngIf="dateSelected ==\'false\'">\n										<ion-icon name="calendar"></ion-icon>\n										Set the date you returned home\n									</button>\n									<button ion-button icon-start  (click)="showDatePicker()" *ngIf="dateSelected ==\'true\'">\n										<ion-icon name="calendar"></ion-icon>\n										Change date you returned home\n									</button>\n								</div>\n								<div *ngIf="!showFirstPage">\n								<div class="accr-content" [innerHTML]="dayContent" *ngIf="dayContentType === \'text\'"></div>\n								<div *ngIf="dayContentType === \'textanddropdown\'">\n									<div [innerHTML]="dayContent[0].text"></div>\n									<ul style="margin-top: -1.7%">\n										<li class="pointer"  (click)="activateItemMultiple()">\n											<span class="accr-content" [innerHTML]="dayContent[0].dropdown[0].title">\n												</span> <span class="arr-icon"><ion-icon *ngIf="!showMultiple" name="ios-arrow-down"></ion-icon>\n														<ion-icon *ngIf="showMultiple" name="ios-arrow-up"></ion-icon></span></li>\n										<div class="accr-content" [innerHTML]="dayContent[0].dropdown[0].content" *ngIf="showMultiple"></div>\n									</ul>\n								</div>\n\n\n								<div  *ngIf="dayContentType === \'checkbox\'">\n									<p><small ion-text color="danger">Check when task is completed</small></p>\n									<div *ngFor="let dayCont of dayContent;let i=index" class="pointer accordion-item accordion-multi"  [ngClass]="dayCont.show==true?\'titleContainer\':\'na\'">\n											<div class="item-checkbox">\n												<ion-checkbox  mode="ios" checked="{{dayCont.selected}}" (click)="selectItems(i)"></ion-checkbox>\n											</div>\n											<div class="item-content breadcrumb">\n												<h4 (click)="activateItem(i)" class="accr-title">\n													<span  [innerHTML]="dayCont.title"></span>\n													<span class="arr-icon" *ngIf="dayCont.htmlDesc!=\'\'">\n														<ion-icon *ngIf="!dayCont.show" name="ios-arrow-down"></ion-icon>\n														<ion-icon *ngIf="dayCont.show" name="ios-arrow-up"></ion-icon>\n													</span>\n												</h4>\n												<div class="accr-content" [innerHTML]="dayCont.htmlDesc" *ngIf="dayCont.show && dayCont.htmlDesc!=\'\'"></div>\n											</div>\n										</div>\n								</div>\n								<button ion-button icon-start  (click)="showDatePicker()" *ngIf="dateSelected ==\'true\'">\n								<ion-icon name="calendar"></ion-icon>\n									Change date you returned home\n								</button>\n							</div>\n							</div>\n\n							<div class="arrownav">\n								<ion-icon name="ios-arrow-back" (click)="swipeRight()" class="iconarrow arrow-left"></ion-icon>\n								<ion-icon name="ios-arrow-forward" (click)="swipeLeft()" class="iconarrow arrow-right"></ion-icon>\n							</div>\n\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n			</div>\n		</div>\n	</div>\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar no-border-top color="dark">\n		<ion-segment color="light">\n			<ion-segment-button value="friends" (click)="goToHomePage()">\n				<ion-icon name="home"></ion-icon><br>\n			</ion-segment-button>\n			<ion-segment-button value="people" (click)="goToPeoplePage()">\n				<ion-icon name="people"></ion-icon><br>\n			</ion-segment-button>\n			<!-- <ion-segment-button value="calendar" (click)="goToPostProcedurePage()">\n				At Home\n			</ion-segment-button> -->\n		</ion-segment>\n	</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/postprocedure/postprocedure.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_httpprovider_httpprovider__["a" /* HttpproviderProvider */]])
    ], PostprocedurePage);
    return PostprocedurePage;
    var PostprocedurePage_1;
}());

// }
// }
//# sourceMappingURL=postprocedure.js.map

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsurancemessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__procedure_procedure__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preprocedure_preprocedure__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__postprocedure_postprocedure__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__duringprocedure_duringprocedure__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recovery_recovery__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__success_success__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__whattodoif_whattodoif__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tableofcontents_tableofcontents__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__people_people__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__assets_gtag__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













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
    InsurancemessagePage_1 = InsurancemessagePage;
    InsurancemessagePage.prototype.ionViewDidEnter = function () {
        Object(__WEBPACK_IMPORTED_MODULE_12__assets_gtag__["a" /* googleAnalytics */])('messagetopatients');
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
    };
    InsurancemessagePage.prototype.goToProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__procedure_procedure__["a" /* ProcedurePage */]);
    };
    InsurancemessagePage.prototype.gotToPreProcedure = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__preprocedure_preprocedure__["a" /* PreprocedurePage */]);
    };
    InsurancemessagePage.prototype.gotToDuringProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__duringprocedure_duringprocedure__["a" /* DuringprocedurePage */]);
    };
    InsurancemessagePage.prototype.goToRecoverPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__recovery_recovery__["a" /* RecoveryPage */]);
    };
    InsurancemessagePage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__postprocedure_postprocedure__["a" /* PostprocedurePage */]);
    };
    InsurancemessagePage.prototype.goToWhatIfPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__whattodoif_whattodoif__["a" /* WhattodoifPage */]);
    };
    InsurancemessagePage.prototype.goToPeoplePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__people_people__["a" /* PeoplePage */]);
    };
    InsurancemessagePage.prototype.gotToSuccessPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__success_success__["a" /* SuccessPage */]);
    };
    InsurancemessagePage.prototype.gotoInsurancePage = function () {
        this.navCtrl.push(InsurancemessagePage_1);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__tableofcontents_tableofcontents__["a" /* TableofcontentsPage */]);
        // this.presentSlidesModal();
    };
    InsurancemessagePage.prototype.swipeRight = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__success_success__["a" /* SuccessPage */]);
    };
    InsurancemessagePage = InsurancemessagePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-insurancemessage',template:/*ion-inline-start:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/insurancemessage/insurancemessage.html"*/'<ion-header>\n	<ion-navbar color="primary"  hideBackButton="true">\n		<button ion-button menuToggle  *ngIf=\'platform === "mobileweb"\'>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<!-- <ion-buttons left>\n			<button ion-button icon-only (click)="goBack()">\n				<ion-icon name="ios-arrow-back"></ion-icon>\n			</button>\n		</ion-buttons> -->\n		<ion-title  align-title="center" class="title-nopad">Insurance Message - USA Residents Only</ion-title>\n		<!-- <ion-buttons right>\n			<button ion-button icon-only>\n				<ion-icon name="ios-search"></ion-icon>\n			</button>\n		</ion-buttons> -->\n	</ion-navbar>\n</ion-header>\n\n<ion-content (swipe)="swipeEvent($event)">\n	<div *ngIf=\'platform === "mobileweb" || platform ==="web"\' [ngClass]="navClassName==\'opennav\'?\'navopen\':\'na\'">\n		<div class="pagecontainer">\n			<div class="pagenav">\n				<ul>\n					<li (click)="goToProcedurePage()">\n						<i class="icon"><img src="assets/imgs/open-book.svg" class="icon-default"><img src="assets/imgs/open-book-white.svg" class="icon-white"></i> \n						<span class="menutext">About procedure</span>\n					</li>\n					<li (click)="gotToPreProcedure()">\n						<i class="icon"><img src="assets/imgs/numbers.svg" class="icon-default"><img src="assets/imgs/numbers-white.svg" class="icon-white"></i> \n						<span class="menutext">Pre-procedure</span>\n					</li>\n					<li (click)="gotToDuringProcedurePage()">\n						<i class="icon"><img src="assets/imgs/sleeping.svg" class="icon-default"><img src="assets/imgs/sleeping-white.svg" class="icon-white"></i> \n						<span class="menutext">Procedure</span>\n					</li>\n					<li (click)="goToRecoverPage()">\n						<i class="icon"><img src="assets/imgs/eye-blocked.svg" class="icon-default"><img src="assets/imgs/eye-blocked-white.svg" class="icon-white"></i> \n						<span class="menutext">Recovery</span>\n					</li>\n					<li (click)="goToPostProcedurePage()">\n						<i class="icon"><img src="assets/imgs/home.svg" class="icon-default"><img src="assets/imgs/home-white.svg" class="icon-white"></i> \n						<span class="menutext">At Home</span>\n					</li>\n					<li (click)="goToWhatIfPage()">\n						<i class="icon"><img src="assets/imgs/question-mark.svg" class="icon-default"><img src="assets/imgs/question-mark-white.svg" class="icon-white"></i> \n						<span class="menutext">What to do if</span>\n					</li>\n					<li (click)="gotToSuccessPage()">\n						<i class="icon"><img src="assets/imgs/check-mark.svg" class="icon-default"><img src="assets/imgs/check-mark-white.svg" class="icon-white"></i> \n						<span class="menutext">Success</span>\n					</li>\n					<li class="pointer active">\n										<i class="icon"><img src="assets/imgs/dollar-symbol.svg" class="icon-default"><img src="assets/imgs/dollar-symbol-white.svg" class="icon-white"></i> \n										<span class="menutext">Insurance</span>\n									</li>\n					<li (click)="toggleNav()" class="menucollapse"><i class="icon"><img src="assets/imgs/chevron-left.svg"></i> <span class="menutext">Collapse Menu</span></li>\n				</ul>\n			</div>\n			<div class="pagecontent wrapindent">\n				<ion-grid>\n					<ion-row>\n						<ion-col align-self-stretch [ngClass]="className==\'contentwrap\'?\'contentwrap\':\'na\'" class="content-area">\n							<!-- <div class="page-title">\n								<h2>Message to patients</h2>\n								<ion-icon md="md-help" class="help-action"></ion-icon>\n							</div> -->\n\n							<div class="page-content font-lg">\n								\n								<u>Overview</u><br /> As soon as you decide to pursue weight loss surgery, it is absolutely essential that you contact your insurance company to verify coverage for the specific procedure you have chosen. <br /><br />\n								Insurance coverage for weight loss procedures varies by:<br /><br />\n								<ul>\n									<li><b>State</b></li>\n									<li>If you have health insurance from the state in which you reside but are seeking services from a provider in another state (e.g. New Hampshire resident receiving care from a Massachusetts surgeon, you need to call your insurance and verify that they will cover services provided outside of the state. You will also need to call the provider/hospital where you plan on having your surgery to make sure that they accept your insurance.</li>\n									<li><b>Payer (insurance company)</b><br /> Not all insurance companies cover weight loss surgery. Some insurance companies they will cover one surgery, but not another. Other payers will provide coverage for only certain parts of your procedure, but not the entire surgery, which could leave you with a substantial out-of-pocket commitment.</li>\n									<li><b>Your specific policy</b><br /> It is important that you check whether your specific policy covers bariatric surgery and, more specifically, the procedure you have chosen to pursue.<br /><br />\n										Example: <br />BlueCross® of Massachusetts, as a company, might tell you when you call their main line that BlueCross® covers bariatric surgery. This is most likely true. However, what you have not learned from this answer is whether the particular coverage you are enrolled in covers the surgery (e.g. Network Blue, Blue Care, etc.). While the company at large might cover weight loss surgery services, the subset you are enrolled in may not provide coverage for you.\n									</li>\n									<li><b>Your employer</b><br /> Most covered benefits are decided upon by the company that employs you. Since companies often select policies and do not change them for many years, you might discover that a “carve out”* exists within their plan that does not allow for weight loss surgery coverage. It is suggested that, if you find this to be the case, you approach your manager and inquire as to who you might be able to talk to about changing this <br /><br /><i>“carve out.” *Carve out: a particular procedure or service that is decidedly excluded from plan benefits.</i></li>\n\n								</ul><br />\n								<u>What happens if I forget to check if my insurance covers the provider/service that I am requesting?</u><br />\n								If you forget to check whether your insurance covers the services you are requesting, you might find that you will receive bills from the provider and servicing facility.\n								<br /><br /> An even more unfortunate outcome might be that, when your provider team processes the application for insurance coverage, they receive a denial and find out that the provider you have been seeing is not covered (credentialed) with your insurance plan. Authorization for your surgical procedure is not submitted until after you have completed the entire bariatric program and have been consented by your surgeon. For most patients, this process takes a minimum of three months.<br /><br />\n								In order for a surgery to be approved, there are notes, tests, and documents needed (which is why it is sought at the end, rather than the beginning). If you are denied at the end, you will have spent the last months at various appointments that will, ultimately, need be started all over again at a different facility that is approved by your insurance.<br /><br />\n								This is why calling your insurance immediately is of the utmost importance. <br /><br />\n								<u>What information do I need to have when I call my insurance company?</u>\n								<br /><br />\n								When you call your insurance company to verify coverage for weight loss surgery, you will be asked to provide:\n								<ul>\n								<li>the name of the hospital where you intend to have your surgery </li>\n								<li> the name of the surgeon who you plan to have perform your operation </li>\n								<li> your surgeons National Provider Identifier (NPI) number. If you do not have the NPI for the provider on hand, you can simply search for this online. You can also call the facility and ask for it.</li>\n							</ul>\n							<br />\n							<u>Can the surgeon’s office call my insurance for me?</u><br />\n							No. Insurance companies will not answer certain questions regarding coverage unless the policy holder is the one inquiring. Your surgeon’s office staff are here to assist you in any way that they can, but ensuring coverage is your responsibility.<br />\n							If you have any additional questions regarding insurance coverage for weight loss surgery that are not answered here, please feel free to call your surgeon’s office.\n\n							<br />\n							<u>Can I pay out of pocket for a procedure?</u><br />\n							Most hospitals allow out of pocket payments for surgeries. If you plan to pay out-of-pocket, you should inform your surgeon’s office of this as soon as possible so his or her staff can look into getting the proper paperwork set up for you. They will also be able to provide you with an estimate for the total cost of your procedure. <br /><br />\n							For procedures that are not traditionally covered by insurance (e.g. intragastric balloon therapy), it is likely that the staff at your surgeon’s office will already have the necessary paperwork prepared for you.\n\n							<br /><br />\n							<u>Referral</u><br />\n							Along with ensuring that you have proper insurance coverage for the facility, surgeon, and procedure, it is equally important for you to have obtained a referral from your primary care provider indicating that they agree that weight loss surgery is medically necessary for your health. <br />\n							If you do not have a referral at the time of insurance authorization, your insurance company may deny your claim for coverage. While referrals can sometimes be retroactively applied, not having this referral puts you at risk of coverage denial or, at a minimum, postposing the date of your procedure.\n\n\n\n\n							</div>\n							<div class="arrownav">\n								<ion-icon name="ios-arrow-back" (click)="swipeRight()" class="iconarrow arrow-left"></ion-icon>\n								<!-- <ion-icon name="ios-arrow-forward" (click)="swipeLeft()" class="iconarrow arrow-right"></ion-icon> -->\n							</div>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n			</div>\n		</div>\n	</div>\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar no-border-top color="dark">\n		<ion-segment color="light">\n			<ion-segment-button value="friends" (click)="goToHomePage()">\n				<ion-icon name="home"></ion-icon><br>\n			</ion-segment-button>\n			<ion-segment-button value="people" (click)="goToPeoplePage()">\n				<ion-icon name="people"></ion-icon><br>\n			</ion-segment-button>\n			<!-- <ion-segment-button value="calendar" (click)="goToPostProcedurePage()">\n				At Home\n			</ion-segment-button> -->\n		</ion-segment>\n	</ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/insurancemessage/insurancemessage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], InsurancemessagePage);
    return InsurancemessagePage;
    var InsurancemessagePage_1;
}());

//# sourceMappingURL=insurancemessage.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcedurePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_httpprovider_httpprovider__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_gtag__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__preprocedure_preprocedure__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__duringprocedure_duringprocedure__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__postprocedure_postprocedure__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__recovery_recovery__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__success_success__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__whattodoif_whattodoif__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__whydothis_whydothis__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__people_people__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__insurancemessage_insurancemessage__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProcedurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
  This section includes all the pages related to procedures
**/










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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__home_home__["a" /* HomePage */]);
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
        Object(__WEBPACK_IMPORTED_MODULE_3__assets_gtag__["a" /* googleAnalytics */])('procedure');
    };
    ProcedurePage.prototype.ionViewDidLoad = function () {
        // location.reload();
        this.getAboutProcedurePageList();
    };
    ProcedurePage.prototype.getAboutProcedurePageList = function () {
        this.procedureList = this.httpService.getAboutProcedureList();
        if (this.procedureList.length == 6) {
            this.procedureList.shift();
        }
    };
    ProcedurePage.prototype.goToProcedurePage = function () {
        this.navCtrl.push(ProcedurePage_1);
    };
    ProcedurePage.prototype.gotToPreProcedure = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__preprocedure_preprocedure__["a" /* PreprocedurePage */]);
    };
    ProcedurePage.prototype.gotToDuringProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__duringprocedure_duringprocedure__["a" /* DuringprocedurePage */]);
    };
    ProcedurePage.prototype.goToRecoverPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__recovery_recovery__["a" /* RecoveryPage */]);
    };
    ProcedurePage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__postprocedure_postprocedure__["a" /* PostprocedurePage */]);
    };
    ProcedurePage.prototype.goToWhatIfPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__whattodoif_whattodoif__["a" /* WhattodoifPage */]);
    };
    ProcedurePage.prototype.goToPeoplePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__people_people__["a" /* PeoplePage */]);
    };
    ProcedurePage.prototype.gotToSuccessPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__success_success__["a" /* SuccessPage */]);
    };
    ProcedurePage.prototype.gotoInsurancePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__insurancemessage_insurancemessage__["a" /* InsurancemessagePage */]);
    };
    ProcedurePage.prototype.navigateToAboutDetails = function (index) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__whydothis_whydothis__["a" /* WhydothisPage */], {
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__preprocedure_preprocedure__["a" /* PreprocedurePage */]);
    };
    ProcedurePage.prototype.swipeRight = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__whydothis_whydothis__["a" /* WhydothisPage */], {
            index: 'audio'
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('pageTop'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ProcedurePage.prototype, "pageTop", void 0);
    ProcedurePage = ProcedurePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-procedure',template:/*ion-inline-start:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/procedure/procedure.html"*/'<ion-header>\n	<ion-navbar  color="primary"  hideBackButton="true">\n		<!-- <button ion-button menuToggle *ngIf=\'platform === "mobileweb"\'>\n			<ion-icon name="menu"></ion-icon>\n		</button> -->\n		<!-- <ion-buttons left>\n			<button ion-button icon-only (click)="goBack()">\n				<ion-icon name="ios-arrow-back"></ion-icon>\n			</button>\n		</ion-buttons> -->\n		<ion-title  align-title="center">About procedure</ion-title>\n		<ion-buttons right>\n			 \n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content (swipe)="swipeEvent($event)" #pageTop>\n	<div *ngIf=\'platform === "mobileweb" || platform ==="web"\' [ngClass]="navClassName==\'opennav\'?\'navopen\':\'na\'">\n		<div class="pagecontainer">\n			<div class="pagenav">\n				<ul>\n					<li (click)="goToProcedurePage()" class="active">\n				      <i class="icon"><img src="assets/imgs/open-book.svg" class="icon-default"><img src="assets/imgs/open-book-white.svg" class="icon-white"></i> \n				      <span class="menutext">About procedure</span>\n				     </li>\n				     <li (click)="gotToPreProcedure()">\n				      <i class="icon"><img src="assets/imgs/numbers.svg" class="icon-default"><img src="assets/imgs/numbers-white.svg" class="icon-white"></i> \n				      <span class="menutext">Pre-procedure</span>\n				     </li>\n				     <li (click)="gotToDuringProcedurePage()">\n				      <i class="icon"><img src="assets/imgs/sleeping.svg" class="icon-default"><img src="assets/imgs/sleeping-white.svg" class="icon-white"></i> \n				      <span class="menutext">Procedure</span>\n				     </li>\n				     <li (click)="goToRecoverPage()">\n				      <i class="icon"><img src="assets/imgs/eye-blocked.svg" class="icon-default"><img src="assets/imgs/eye-blocked-white.svg" class="icon-white"></i> \n				      <span class="menutext">Recovery</span>\n				     </li>\n				     <li (click)="goToPostProcedurePage()">\n				      <i class="icon"><img src="assets/imgs/home.svg" class="icon-default"><img src="assets/imgs/home-white.svg" class="icon-white"></i> \n				      <span class="menutext">At Home</span>\n				     </li>\n				     <li (click)="goToWhatIfPage()">\n				      <i class="icon"><img src="assets/imgs/question-mark.svg" class="icon-default"><img src="assets/imgs/question-mark-white.svg" class="icon-white"></i> \n				      <span class="menutext">What to do if</span>\n				     </li>\n				     <li (click)="gotToSuccessPage()">\n				      <i class="icon"><img src="assets/imgs/check-mark.svg" class="icon-default"><img src="assets/imgs/check-mark-white.svg" class="icon-white"></i> \n				      <span class="menutext">Success</span>\n				     </li>\n				     <li (click)="gotoInsurancePage()" class="pointer">\n										<i class="icon"><img src="assets/imgs/dollar-symbol.svg" class="icon-default"><img src="assets/imgs/dollar-symbol-white.svg" class="icon-white"></i> \n										<span class="menutext">Insurance</span>\n									</li>\n				     <li (click)="toggleNav()" class="menucollapse"><i class="icon"><img src="assets/imgs/chevron-left.svg"></i> <span class="menutext">Collapse Menu</span></li>\n				</ul>\n			</div>\n			<div class="pagecontent">\n				<ion-grid>\n					<ion-row>\n						<ion-col align-self-stretch [ngClass]="className==\'contentwrap\'?\'contentwrap\':\'na\'" class="content-area">\n							<!-- <div class="page-title">\n								<h2>About procedure</h2>\n								<ion-icon md="md-help" class="help-action"></ion-icon>\n							</div> -->\n							<div class="page-image" style="text-align: center;">\n								<img src="./assets/imgs/aboutprocedure-img.jpg">\n							</div>\n							<br>\n\n							<ion-list class="page-list">\n								<button ion-item *ngFor="let item of procedureList; let i= index" mode="ios" (click)="navigateToAboutDetails(i)">\n									{{ item.title }}\n								</button>\n							</ion-list>\n\n							<div class="arrownav">\n								<ion-icon name="ios-arrow-back" (click)="swipeRight()" class="iconarrow arrow-left"></ion-icon>\n								<ion-icon name="ios-arrow-forward" (click)="swipeLeft()" class="iconarrow arrow-right"></ion-icon>\n							</div>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n			</div>\n		</div>\n	</div>\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar no-border-top color="dark">\n		<ion-segment color="light">\n			<ion-segment-button value="friends" (click)="goToHomePage()">\n				<ion-icon name="home"></ion-icon><br>\n			</ion-segment-button>\n			<ion-segment-button value="people" (click)="goToPeoplePage()">\n				<ion-icon name="people"></ion-icon><br>\n			</ion-segment-button>\n			<!-- <ion-segment-button value="calendar" (click)="goToPostProcedurePage()">\n				At Home\n			</ion-segment-button> -->\n		</ion-segment>\n	</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/procedure/procedure.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_httpprovider_httpprovider__["a" /* HttpproviderProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], ProcedurePage);
    return ProcedurePage;
    var ProcedurePage_1;
}());

//# sourceMappingURL=procedure.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreprocedurePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_gtag__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__procedure_procedure__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__duringprocedure_duringprocedure__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__postprocedure_postprocedure__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recovery_recovery__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__success_success__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__whattodoif_whattodoif__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__people_people__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__insurancemessage_insurancemessage__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PreprocedurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
  This section includes all the pages related to procedures
**/
/**
  This section includes all the pages related to procedures
**/









var PreprocedurePage = /** @class */ (function () {
    function PreprocedurePage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.preProcedures = 'week-before';
        this.isActiveDayBefore = true;
        this.preProceduresweekBeforeItems = [{
                dropdown: false,
                title: 'Pre-operative appointment:',
                description: "\n  If you are having outpatient surgery, you will most likely meet with your surgeon for a preoperative appointment.&nbsp;&nbsp;You will want to inform of your surgeon of:\n<ul class=\"marginHeading\"><li>Your major medical problems</li>\n<li>Any surgeries you have had in the past</li>\n<li>Your current medications (including all prescription, non-prescription, vitamins, herbs, and supplements) along with their dosage and frequency of use.</li>\n<li>Any allergies you have</li>\n<li>Your surgeon will conduct a focused physical examination and may also order routine preoperative testing.&nbsp;&nbsp; Your surgeon will also conduct a focused physical examination.</li>\n<li>You can also use your preoperative appointment to address any questions or concerns you may have regarding your surgery.&nbsp;&nbsp;Common questions to ask your surgeon include:</li>\n<li>Will I will be staying overnight?</li>\n<li>How will my pain be controlled after my procedure? What alternative solutions are there other than opioid pain medication?</li>\n<li>What expectations should I have for my recovery?</li>\n<li>How much time will I need to take off from work while I recover? (Although the majority of patients undergoing robotic cholecystectomy recover quickly [and much faster compared to open cholecystectomy], the recovery process depends on your overall health and age.&nbsp;&nbsp;Future planning may be necessary to ensure a smooth recovery process.)</li>\n<li>Will I need someone at home to help me as I recover?</li>\n</ul>\n<u>Reminders:</u>\n<br /><br />\nPlease review your preparation materials provided by your surgeon.\n\n<br /><br />Please contact your surgeon if you become sick.&nbsp;&nbsp;This includes ear or eye infections, fever, sore throat, productive cough, or flu-like symptoms (which includes a non-productive cough).&nbsp;&nbsp;You may need to reschedule your surgery.&nbsp;&nbsp;\n<br /><br />\nExercise before your surgery will improve your body\u2019s ability to recover.&nbsp;&nbsp;You should try to exercise at least [surgeon input for duration of exercise] with [surgeon input for type of exercise] [surgeon input on how many times per week prior to surgery].\n    ",
                show: false,
                selected: false
            },
            {
                dropdown: false,
                title: 'Medication changes:',
                description: "<ul class=\"marginHeading\">\n <li>Depending on your surgeon\u2019s preferences and/or your specific clinical situation, you may be asked to either discontinue or adjust the dosage/frequency of certain medications/vitamins/herbs/supplements at a certain date.&nbsp;&nbsp; Please [surgeon input: discontinue, decrease, increase, start] [medication/herb/vitamin/supplement] on [surgeon input: date] [optional surgeon input: and change it to\u2026].&nbsp;&nbsp;These may include:</li>\n<li><u>Blood-thinning medications</u> (anticoagulants and antiplatelet medications):</li>\n<li><i><b>Anticoagulants</b> include but are not limited to: apixaban, rivaroxaban, fondaparinux, dabigatran, dalteparin, tinzaparin, edoxaban, enoxaparin, low-molecular weight heparin, and warfarin</i></li>\n<li><i><b>Antiplatelet medications</b> include but are not limited to: aspirin, clopidogrel, cilostazol, ticagrelor, prasugrel, ticlopidine, vorapaxar, dypridiamole, and aspirin with dipyridamole</i></li>\n<li><u>Estrogen-containing medications</u> (hormone replacement therapy or oral contraceptives)</li>\n<li><u>Diabetes medications:</u></li>\n<li><i>Examples of diabetic medications that should be discontinued include: thiazolidinediones, sulfonylureas, biguanides, alpha-glucosidase inhibitors, and GLP-1 agonists.</i></li>\n<li><u>Vitamins</u> (vitamin E)</li>\n<li><u>Herbal supplements</u> (St.&nbsp;&nbsp;John\u2019s Wort, Echinacea, kava, ephedra, ginkgo, garlic, ginseng, and valerian)</li>\n\n    ",
                show: false,
                selected: false
            },
            { dropdown: false, title: '1 week before',
                description: "\n    <b>Smoking and nicotine cessation:</b> Please discontinue.\n\n  <br /><br /><b>Schedule an appointment with your primary care provider or diabetes physician 1 to 2 weeks after surgery</b> to discuss changes made to your medications after surgery (e.g. blood pressure and diabetic medications). \n\n<br /><br />Know the <b>pharmacy where you will be picking up your prescription medications</b> after surgery. \n<br /><br />Make sure you have the special antibiotic soap (see section on \u201Cevening before surgery\u201D) you will need to wash with at home prior to your surgery. This soap is called <b>chlorhexidine gluconate antiseptic soap (CHG)</b>. \n<br /><br />\nMake sure you have a <b>responsible adult friend or family member</b> to help you get home if you are expecting to have same-day surgery. It is also encouraged to have this individual or another responsible adult stay with you for your first day home.\n    ",
                show: false,
                selected: false
            }];
        this.preProceduresDayBeforeItems = [{
                title: 'Day before surgery:',
                description: "<ul class=\"marginHeading\">\n   <li> Continue to abstain from smoking and nicotine use if possible. </li>\n<li> Continue to follow the plan for your diabetes medications so that your blood glucose is in the desired target range.</li>\n<li>Again, review all preparation materials provided by your surgeon e.g. what you need to do to continue preparing for your surgery and what to expect from your time in the hospital).</li>\n<li>Contact your surgeon if you become sick. This includes ear or eye infections, fever, sore throat, productive cough, or flu-like symptoms (which includes a <i>non-productive</i> cough). You may need to reschedule your surgery.</li>\n    </ul>",
                show: false,
                disabled: false,
                selected: false
            },
            {
                title: 'Evening before surgery:',
                description: "<ul class=\"marginHeading\">\n  <li>If you take diabetic medications, make sure you are following the specific instructions your surgeon provided for you regarding their use.</li>\n  <li>You may need to shower with \u201Cspecial\u201D preoperative surgical soap before coming to the hospital. This soap is called chlorhexidine gluconate (CHG) antiseptic soap. This \u201Cspecial\u201D soap has antibacterial properties and decreases your risk of infection after surgery. Please follow the instructions provided by your surgeon on how to properly use this antibacterial soap. Do not put anything (e.g. lotion) on your skin after washing with and rinsing off the CHG soap with water.</li>\n\n\n    </ul>",
                show: false,
                disabled: false,
                selected: false
            },
            {
                title: 'Midnight before surgery:',
                description: "<ul class=\"marginHeading\">\n    <li>Historically, patients have been told not to eat or drink anything after midnight. However, there have been recent changes to these recommendations. You should check with your surgeon\u2019s office for instructions.</li>\n<li><b>New eating rules.</b><br />\nYou should <b>not</b> eat heavy/fatty meals 8 hours before your surgery. You <b>may</b> have a light snack up to 6 hours prior to your surgery.</li>\n<li>You <b>may</b> consume a clear liquid diet up to 2 hours before your surgery. These liquids should be also be non-carbonated (e.g. water or electrolyte beverages). <b>This means drinks you can see through\u2013 no juice and no ginger ale.</b></li>\n<li>If you break these rules regarding your preoperative diet, you potentially place your health and safety at serious risk and your surgery will be cancelled.</li>\n<li>You should take medications during this time interval that your surgeon has instructed you to take with small amounts of water at the approved times.</li>\n\n\n    </ul>",
                show: false,
                disabled: false,
                selected: false
            },
            {
                title: 'Morning of surgery',
                description: "<ul class=\"marginHeading\">\n  <li>Contact your surgeon if you become sick. This includes ear or eye infections, fever, sore throat, productive cough, or flu-like symptoms (which includes a <i>non-productive</i> cough). You may need to reschedule your surgery.</li>\n<li>Continue to abstain from smoking and nicotine use. If you have not been able to abstain from smoking during this time, you should make sure you do not smoke the morning of your surgery. </li>\n<li>Please continue to follow the aforementioned instructions on food and liquid consumption depending on the time of your surgery. </li>\n<li>You <b>may</b> consume a clear liquid diet up to 2 hours before your surgery. These liquids should be also be non-carbonated (e.g. water or electrolyte beverages). <b>This means drinks through which you can see \u2013 no juice and no ginger ale.</b></li>\n<li>If you break these rules regarding your preoperative diet, you potentially place your health and safety at serious risk and your surgery will be cancelled.</li>\n<li><b>Arrive at the hospital</b> when your surgeon\u2019s office instructed you to be there.</b></li>\n<li>Bring a list of your current medications (with their dosages and frequency), CPAP or BiPAP machines if applicable, and any inhalers you use. There is no need to bring any of your other medications. Also, be sure to bring your insurance card and a valid form of identification if you were told to do so.</li>\n<li>You should wear loose clothing that is easy to take off as you will be changing into a hospital gown soon after your arrive.</li>\n<li>You will also be required to remove contact lenses/glasses, hearing aids, dentures, hair accessories, and any piercings. Either keep these at home or have a safe way to store them during your operation.</li>\n<li>If you insist on bringing valuables, make sure you have a trusted friend or family member with you who can assume responsibility for them during your surgery.</li>\n<li>Do not wear make-up or nail polish.</li></ul>\n\nFinally, we want to encourage you to remain calm. Surgery is a stressful event for every patient, but you are in capable hands and will be well taken care of by your surgical team, anesthesia team, and the nursing staff.\n<br /><br />\nIf your surgeon thinks there is a chance you will stay overnight, you should pack the bare essentials you would need for an overnight stay. For example, patients with obstructive sleep apnea should bring their CPAP or BiPAP sleeping machine. Also, if you have asthma, you should bring your inhalers. You will not need to bring any other medications other than your inhalers.\n\n            </ul>",
                show: false,
                disabled: false,
                selected: false
            },
            {
                title: "Be Calm and Relax: It’s OK.",
                description: "<p>We encourage you to remain calm.&nbsp;&nbsp;Surgery is a\nstressful event for every patient, but you are in\ncapable hands and will be well taken care of by\nyour surgical team, anesthesia team, and the\nnursing staff.\n  <ul><li>\n      <b>Arrive at the hospital</b> when your surgeon\u2019s office instructed you to be there.\n   </li></ul>\n</p>",
                show: false,
                disabled: false,
                selected: false
            }, {
                title: "Ready!",
                description: "<p>If you've followed all the rules, confirm with hospital you are ready.</p>",
                show: false,
                disabled: false,
                selected: false
            },
            {
                title: "Not ready!",
                description: "<p>If did NOT follow the rules, or something happened, cancel your procedure.</p>",
                show: false,
                disabled: false,
                selected: false
            }];
        // readyNotReadyOptions = [
        // {
        //   title:"Ready!",
        //   description: `<p>If you've followed all the rules, confirm with hospital you are ready.</p>`,
        //   show:false,
        //   selected:false
        // },
        // {
        //   title:"Not ready!",
        //   description: `<p>If did NOT follow the rules, or something happened, cancel your procedure.</p>`,
        //   show:false,
        //   selected:false
        // }]
        this.platform = localStorage.getItem('platform');
        this.className = 'contentwrap';
        this.hideDayBefore = true;
        this.navClassName = 'na';
        if (this.platform != 'mobileweb') {
            this.platform = 'web';
            this.toggleNav();
        }
        else {
            this.className = ' ';
        }
    }
    PreprocedurePage_1 = PreprocedurePage;
    PreprocedurePage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
    };
    PreprocedurePage.prototype.toggleNav = function () {
        if (this.navClassName == 'na') {
            this.navClassName = 'opennav';
        }
        else if (this.navClassName == 'opennav') {
            this.navClassName = 'na';
        }
    };
    PreprocedurePage.prototype.ionViewDidEnter = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__assets_gtag__["a" /* googleAnalytics */])('preprocedure');
    };
    PreprocedurePage.prototype.ionViewDidLoad = function () {
        if (localStorage.getItem('dayBefore') != null) {
            var dayBefore = JSON.parse(localStorage.getItem('dayBefore'));
            for (var i = 0; i < dayBefore.length; i++) {
                this.preProceduresDayBeforeItems[dayBefore[i]].selected = true;
            }
        }
        if (localStorage.getItem('weekBefore') != null) {
            var weekBefore = JSON.parse(localStorage.getItem('weekBefore'));
            for (var k = 0; k < weekBefore.length; k++) {
                this.preProceduresweekBeforeItems[weekBefore[k]].selected = true;
            }
        }
    };
    PreprocedurePage.prototype.ionViewWillLeave = function () {
        var dayBefore = [];
        var weekBefore = [];
        for (var i = 0; i < this.preProceduresweekBeforeItems.length; i++) {
            if (this.preProceduresweekBeforeItems[i].selected === true)
                weekBefore.push(i);
        }
        localStorage.setItem('weekBefore', JSON.stringify(weekBefore));
        for (var l = 0; l < this.preProceduresDayBeforeItems.length; l++) {
            if (this.preProceduresDayBeforeItems[l].selected === true)
                dayBefore.push(l);
        }
        localStorage.setItem('dayBefore', JSON.stringify(dayBefore));
    };
    PreprocedurePage.prototype.validate = function () {
        var selectedAll = true;
        for (var i = 0; i < this.preProceduresweekBeforeItems.length; i++) {
            if (this.preProceduresweekBeforeItems[i]['selected'] === false) {
                // let alert = this.alertCtrl.create({
                //   subTitle: 'Be sure to complete your checklist so the hospital team knows you are ready!',
                //   buttons: ['Ok'],
                //   mode:'ios'
                // });
                this.preProcedures = 'week-before';
                this.isActiveDayBefore = true;
                selectedAll = false;
                // alert.present();
                break;
            }
        }
        if (selectedAll === true) {
            this.isActiveDayBefore = false;
        }
    };
    PreprocedurePage.prototype.segmentChanged = function (id) {
        var thisObj = this;
        var selectedAll = true;
        if (id == 2) {
            for (var i = 0; i < this.preProceduresweekBeforeItems.length; i++) {
                if (this.preProceduresweekBeforeItems[i]['selected'] === false) {
                    var alert_1 = this.alertCtrl.create({
                        subTitle: 'Be sure to complete your checklist so the hospital team knows you are ready!',
                        buttons: [{
                                text: 'Back',
                                handler: function () {
                                    thisObj.preProcedures = 'week-before';
                                    thisObj.hideDayBefore = true;
                                }
                            }, {
                                text: 'Ok',
                                handler: function () {
                                    for (var i = 0; i < thisObj.preProceduresweekBeforeItems.length; i++) {
                                        thisObj.preProceduresweekBeforeItems[i].show = false;
                                        // thisObj.preProceduresweekBeforeItems[i].selected = false;
                                    }
                                    thisObj.preProcedures = 'day-before';
                                    thisObj.hideDayBefore = false;
                                }
                            }],
                        mode: 'ios'
                    });
                    selectedAll = false;
                    alert_1.present();
                    break;
                }
            }
        }
        // if(selectedAll === true) {
        if (id == 1) {
            this.hideDayBefore = true;
            for (var k = 0; k < thisObj.preProceduresDayBeforeItems.length; k++) {
                thisObj.preProceduresDayBeforeItems[k].show = false;
                // thisObj.preProceduresDayBeforeItems[i].selected = false;
            }
        }
        if (id == 2 && selectedAll == false) {
            this.hideDayBefore = true;
        }
        if (id == 2 && selectedAll == true) {
            this.hideDayBefore = false;
            this.preProcedures = 'day-before';
        }
    };
    PreprocedurePage.prototype.validateDayBeforeItems = function () {
        var selectedAll = true;
        for (var i = 0; i < this.preProceduresDayBeforeItems.length - 2; i++) {
            if (this.preProceduresDayBeforeItems[i]['selected'] === false) {
                selectedAll = false;
                if (this.preProceduresDayBeforeItems.length > 5 && this.preProceduresDayBeforeItems[6]['selected'] === false) {
                }
                break;
            }
        }
        if (selectedAll === true) {
        }
    };
    PreprocedurePage.prototype.selectItems = function (id) {
        if (this.preProceduresweekBeforeItems[id]['selected'] === false) {
            this.preProceduresweekBeforeItems[id]['selected'] = true;
            this.validate();
        }
        else {
            this.preProceduresweekBeforeItems[id]['selected'] = false;
            this.validate();
        }
    };
    PreprocedurePage.prototype.selectItemsOfDaysBefore = function (id) {
        var _this = this;
        if (id != 5 && id != 6) {
            if (this.preProceduresDayBeforeItems[id].selected == false) {
                this.preProceduresDayBeforeItems[id].selected = true;
            }
            else {
                this.preProceduresDayBeforeItems[id].selected = true;
            }
        }
        var selected = true;
        for (var i = 0; i < this.preProceduresDayBeforeItems.length - 2; i++) {
            if (this.preProceduresDayBeforeItems[i].selected == false) {
                selected = false;
            }
        }
        if (selected == false && id == 5) {
            if (this.preProceduresDayBeforeItems[5].selected == false) {
                this.preProceduresDayBeforeItems[5].selected = true;
                var alert_2 = this.alertCtrl.create({
                    title: '',
                    subTitle: 'You need to check all above checkboxes',
                    mode: 'ios',
                    buttons: [{ text: 'Ok', handler: function () {
                                // this.swipeLeft()
                                _this.preProceduresDayBeforeItems[5].selected = false;
                            } }, { text: 'Cancel', handler: function () {
                                _this.preProceduresDayBeforeItems[5].selected = false;
                            } }],
                });
                alert_2.present();
            }
            else {
                this.preProceduresDayBeforeItems[5].selected = false;
            }
        }
        if (selected == false && id == 6) {
            if (this.preProceduresDayBeforeItems[6].selected == false) {
                this.preProceduresDayBeforeItems[6].selected = true;
                var alert_3 = this.alertCtrl.create({
                    title: 'Are you sure...',
                    subTitle: 'Please immediately contact the hospital to cancel your surgery.',
                    mode: 'ios',
                    buttons: [{ text: 'Ok', handler: function () {
                                // this.swipeLeft()
                                // this.pre
                                _this.preProceduresDayBeforeItems[6].selected = false;
                            } }, { text: 'Cancel', handler: function () {
                                _this.preProceduresDayBeforeItems[6].selected = false;
                            } }],
                });
                alert_3.present();
            }
            else {
                this.preProceduresDayBeforeItems[6].selected = false;
            }
        }
        if (selected == true) {
            if (id == 5) {
                // let alert = this.alertCtrl.create({
                //    title:'Congrats, you are good to go!',
                //     subTitle: 'A message will be sent to the team at the hospital to confirm you are ready for your procedures',
                //     mode:'ios',
                //     buttons: [{text:'Ok', handler: () => {
                //     this.swipeLeft()
                //   }}, {text:'Cancel'}],
                //   });
                //   alert.present();
            }
            if (id == 6) {
                // let alert = this.alertCtrl.create({
                //     title:'Are you sure you need to cancel?',
                //     subTitle: 'A member of the hospital team will contact you shortly to confirm your decision and reschedule the procedure.',
                //     mode:'ios',
                //     buttons: [{text:'Ok', handler: () => {
                //     this.swipeLeft()
                //   }}, {text:'Cancel'}],
                //   });
                //   alert.present();
            }
        }
    };
    PreprocedurePage.prototype.activateItem = function (id) {
        for (var i = 0; i < this.preProceduresweekBeforeItems.length; i++) {
            if (id === i) {
                if (this.preProceduresweekBeforeItems[id]['show'] === false) {
                    this.preProceduresweekBeforeItems[id]['show'] = true;
                }
                else {
                    this.preProceduresweekBeforeItems[id]['show'] = false;
                }
            }
            else {
                this.preProceduresweekBeforeItems[i]['show'] = false;
            }
        }
    };
    PreprocedurePage.prototype.activateDetailItem = function (i, j) {
        for (var k = 0; k < this.preProceduresweekBeforeItems[i]['dropdownContent'].length; k++) {
            if (k === j) {
                if (this.preProceduresweekBeforeItems[i]['dropdownContent'][j]['show'] === false) {
                    this.preProceduresweekBeforeItems[i]['dropdownContent'][j]['show'] = true;
                }
                else {
                    this.preProceduresweekBeforeItems[i]['dropdownContent'][j]['show'] = false;
                }
            }
            else {
                this.preProceduresweekBeforeItems[i]['dropdownContent'][k]['show'] = false;
            }
        }
    };
    PreprocedurePage.prototype.getDetailHtmlContent = function (i, j) {
        return this.preProceduresweekBeforeItems[i]['dropdownContent'][j]['desc'];
    };
    //  getDetailHtmlContent(i, j) {
    //    return this.preProceduresweekBeforeItems[i]['dropdownContent'][j]['desc'];
    // }
    PreprocedurePage.prototype.activateItemOfDaysBefore = function (id) {
        for (var i = 0; i < this.preProceduresDayBeforeItems.length; i++) {
            if (id === i) {
                if (this.preProceduresDayBeforeItems[id]['show'] === false) {
                    this.preProceduresDayBeforeItems[id]['show'] = true;
                }
                else {
                    this.preProceduresDayBeforeItems[id]['show'] = false;
                }
            }
            else {
                this.preProceduresDayBeforeItems[i]['show'] = false;
            }
        }
    };
    PreprocedurePage.prototype.getHtmlContent = function (index) {
        return this.preProceduresweekBeforeItems[index]['description'];
    };
    PreprocedurePage.prototype.getHtmlContentOfDaysBefore = function (index) {
        return this.preProceduresDayBeforeItems[index]['description'];
    };
    PreprocedurePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    PreprocedurePage.prototype.goToProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__procedure_procedure__["a" /* ProcedurePage */]);
    };
    PreprocedurePage.prototype.gotToPreProcedure = function () {
        this.navCtrl.push(PreprocedurePage_1);
    };
    PreprocedurePage.prototype.gotToDuringProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__duringprocedure_duringprocedure__["a" /* DuringprocedurePage */]);
    };
    PreprocedurePage.prototype.goToRecoverPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__recovery_recovery__["a" /* RecoveryPage */]);
    };
    PreprocedurePage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__postprocedure_postprocedure__["a" /* PostprocedurePage */]);
    };
    PreprocedurePage.prototype.goToWhatIfPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__whattodoif_whattodoif__["a" /* WhattodoifPage */]);
    };
    PreprocedurePage.prototype.goToPeoplePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__people_people__["a" /* PeoplePage */]);
    };
    PreprocedurePage.prototype.gotToSuccessPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__success_success__["a" /* SuccessPage */]);
    };
    PreprocedurePage.prototype.gotoInsurancePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__insurancemessage_insurancemessage__["a" /* InsurancemessagePage */]);
    };
    PreprocedurePage.prototype.swipeEvent = function (event) {
        if (event.direction === 2) {
            this.swipeLeft();
        }
        else if (event.direction === 4) {
            this.swipeRight();
        }
    };
    PreprocedurePage.prototype.swipeLeft = function () {
        this.pageTop.scrollToTop(0);
        if (this.preProcedures == 'week-before') {
            this.segmentChanged(2);
        }
        else if (this.preProcedures == 'day-before') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__duringprocedure_duringprocedure__["a" /* DuringprocedurePage */]);
        }
    };
    PreprocedurePage.prototype.swipeRight = function () {
        this.pageTop.scrollToTop(0);
        if (this.preProcedures == 'day-before') {
            this.preProcedures = 'week-before';
            this.hideDayBefore = true;
        }
        else if (this.preProcedures == 'week-before') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__procedure_procedure__["a" /* ProcedurePage */]);
        }
    };
    PreprocedurePage.prototype.getVerification = function (items) {
        var itemsLength = items.length - 2;
        for (var i = 0; i < itemsLength; i++) {
            if (items[i].selected == false) {
                return false;
            }
        }
        return true;
    };
    PreprocedurePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            subTitle: 'Be sure to complete your checklist so that hospital team knows you are ready!',
            mode: 'ios',
            buttons: ['Ok']
        });
        alert.present();
    };
    PreprocedurePage.prototype.presentSuccess = function () {
        var alert = this.alertCtrl.create({
            title: 'Congrats, you are good to go!',
            subTitle: 'A message will be sent to the team at the hospital to confirm you are ready for your procedures',
            mode: 'ios',
            buttons: [{ text: 'Ok' }, { text: 'Cancel' }],
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('pageTop'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], PreprocedurePage.prototype, "pageTop", void 0);
    PreprocedurePage = PreprocedurePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-preprocedure',template:/*ion-inline-start:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/preprocedure/preprocedure.html"*/'<ion-header>\n	<ion-navbar color="primary"  hideBackButton="true">\n		<button ion-button menuToggle *ngIf=\'platform === "mobileweb"\'>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<!-- <ion-buttons left>\n			<button ion-button icon-only (click)="goBack()">\n				<ion-icon name="ios-arrow-back"></ion-icon>\n			</button>\n		</ion-buttons> -->\n		<ion-title  align-title="center">Pre-Procedure</ion-title>\n		<ion-buttons right>\n			 \n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content (swipe)="swipeEvent($event)" #pageTop>\n	<div *ngIf=\'platform === "mobileweb" || platform ==="web"\' [ngClass]="navClassName==\'opennav\'?\'navopen\':\'na\'">\n		<div class="pagecontainer">\n			<div class="pagenav">\n				<ul>\n					<li (click)="goToProcedurePage()">\n				      <i class="icon"><img src="assets/imgs/open-book.svg" class="icon-default"><img src="assets/imgs/open-book-white.svg" class="icon-white"></i> \n				      <span class="menutext">About procedure</span>\n				     </li>\n				     <li (click)="gotToPreProcedure()" class="active">\n				      <i class="icon"><img src="assets/imgs/numbers.svg" class="icon-default"><img src="assets/imgs/numbers-white.svg" class="icon-white"></i> \n				      <span class="menutext">Pre-procedure</span>\n				     </li>\n				     <li (click)="gotToDuringProcedurePage()">\n				      <i class="icon"><img src="assets/imgs/sleeping.svg" class="icon-default"><img src="assets/imgs/sleeping-white.svg" class="icon-white"></i> \n				      <span class="menutext">Procedure</span>\n				     </li>\n				     <li (click)="goToRecoverPage()">\n				      <i class="icon"><img src="assets/imgs/eye-blocked.svg" class="icon-default"><img src="assets/imgs/eye-blocked-white.svg" class="icon-white"></i> \n				      <span class="menutext">Recovery</span>\n				     </li>\n				     <li (click)="goToPostProcedurePage()">\n				      <i class="icon"><img src="assets/imgs/home.svg" class="icon-default"><img src="assets/imgs/home-white.svg" class="icon-white"></i> \n				      <span class="menutext">At Home</span>\n				     </li>\n				     <li (click)="goToWhatIfPage()">\n				      <i class="icon"><img src="assets/imgs/question-mark.svg" class="icon-default"><img src="assets/imgs/question-mark-white.svg" class="icon-white"></i> \n				      <span class="menutext">What to do if</span>\n				     </li>\n				     <li (click)="gotToSuccessPage()">\n				      <i class="icon"><img src="assets/imgs/check-mark.svg" class="icon-default"><img src="assets/imgs/check-mark-white.svg" class="icon-white"></i> \n				      <span class="menutext">Success</span>\n				     </li>\n				     <li (click)="gotoInsurancePage()" class="pointer">\n										<i class="icon"><img src="assets/imgs/dollar-symbol.svg" class="icon-default"><img src="assets/imgs/dollar-symbol-white.svg" class="icon-white"></i> \n										<span class="menutext">Insurance</span>\n									</li>\n				     <li (click)="toggleNav()" class="menucollapse"><i class="icon"><img src="assets/imgs/chevron-left.svg"></i> <span class="menutext">Collapse Menu</span></li>\n				</ul>\n			</div>\n			<div class="pagecontent">\n				<ion-grid>\n					<ion-row>\n						<ion-col align-self-stretch [ngClass]="className==\'contentwrap\'?\'contentwrap\':\'na\'" class="content-area">\n							<!-- <div class="page-title">\n								<h2>Pre-procedure</h2>\n								<ion-icon md="md-help" class="help-action"></ion-icon>\n							</div> -->\n							<ion-segment mode="ios" [(ngModel)]="preProcedures" class="tabs-default" >\n								<ion-segment-button value="week-before"  (click)="segmentChanged(1)">\n									Weeks before\n								</ion-segment-button>\n								<ion-segment-button value="day-before" (click)="segmentChanged(2)">\n									Day before\n								</ion-segment-button>\n							</ion-segment>\n\n							<div [ngSwitch]="preProcedures">\n								<div *ngSwitchCase="\'week-before\'">\n									<div *ngIf="hideDayBefore">\n										<div class="page-image">\n											<img width="100%" height="40%" src="./assets/imgs/week-before.jpg">\n										</div>\n										<p><small ion-text color="danger">Check when task is completed</small></p>\n										<div *ngFor="let weekBeforeItems of preProceduresweekBeforeItems;let i=index" class="pointer accordion-item accordion-multi" [ngClass]="weekBeforeItems.show==true?\'titleContainer\':\'na\'">\n											<div class="item-checkbox">\n												<ion-checkbox  mode="ios" checked="{{weekBeforeItems.selected}}" (click)="selectItems(i)"></ion-checkbox>\n											</div>\n											<div class="item-content breadcrumb" *ngIf="weekBeforeItems.dropdown == false">\n												<h4 (click)="activateItem(i)" class="accr-title">\n													{{weekBeforeItems.title}}\n													<span class="arr-icon">\n														<ion-icon *ngIf="!weekBeforeItems.show" name="ios-arrow-down"></ion-icon>\n														<ion-icon *ngIf="weekBeforeItems.show" name="ios-arrow-up"></ion-icon>\n													</span>\n												</h4>\n												<div class="accr-content" [innerHTML]="getHtmlContent(i)" *ngIf="weekBeforeItems.show"></div>\n											</div>\n											<div class="item-content breadcrumb" *ngIf="weekBeforeItems.dropdown == true">\n												<h4 (click)="activateItem(i)" class="accr-title">\n													{{weekBeforeItems.title}}\n													<span class="arr-icon">\n														<ion-icon *ngIf="!weekBeforeItems.show" name="ios-arrow-down"></ion-icon>\n														<ion-icon *ngIf="weekBeforeItems.show" name="ios-arrow-up"></ion-icon>\n													</span>\n												</h4>\n												<div class="accr-content" [innerHTML]="getHtmlContent(i)" *ngIf="weekBeforeItems.show"></div>\n												\n												<div *ngFor="let itemDet of weekBeforeItems.dropdownContent;let j=index" class="pointer accordion-item accordion-multi">\n														<div class="item-content breadcrumb" *ngIf="weekBeforeItems.show">\n													<h4 (click)="activateDetailItem(i, j)" class="accr-title">\n														<b><u>{{itemDet.title}}</u></b>\n														<span class="arr-icon">\n															<ion-icon *ngIf="!itemDet.show" name="ios-arrow-down"></ion-icon>\n															<ion-icon *ngIf="itemDet.show" name="ios-arrow-up"></ion-icon>\n														</span>\n													</h4>\n													<div class="accr-content" [innerHTML]="getDetailHtmlContent(i,j)" *ngIf="itemDet.show"></div>\n														</div>\n													</div>\n												\n											</div>\n										</div>\n									</div> \n								</div>\n\n								<div *ngSwitchCase="\'day-before\'">\n									<div *ngIf="!hideDayBefore">\n										<div class="page-image">\n											<img width="100%" height="40%" src="./assets/imgs/day-before.jpg">\n										</div>\n										<p><small ion-text color="danger">Check when task is completed</small></p>\n										<div *ngFor="let dayBeforeItems of preProceduresDayBeforeItems;let i=index" class="pointer accordion-item accordion-multi" [ngClass]="dayBeforeItems.show==true?\'titleContainer\':\'na\'">\n											<div class="item-checkbox">\n												<ion-checkbox  mode="ios" checked="{{dayBeforeItems.selected}}" (click)="selectItemsOfDaysBefore(i)" disabled="{{dayBeforeItems.disabled}}"></ion-checkbox>\n											</div>\n											<div class="item-content breadcrumb">\n												<h4 (click)="activateItemOfDaysBefore(i)" class="accr-title">\n													{{dayBeforeItems.title}}\n													<span class="arr-icon">\n														<ion-icon *ngIf="!dayBeforeItems.show" name="ios-arrow-down"></ion-icon>\n														<ion-icon *ngIf="dayBeforeItems.show" name="ios-arrow-up"></ion-icon>\n													</span>\n												</h4>\n												<div class="accr-content" [innerHTML]="getHtmlContentOfDaysBefore(i)" *ngIf="dayBeforeItems.show"></div>\n											</div>\n										</div>\n									</div>\n								</div>\n							</div>\n\n							<div class="arrownav">\n								<ion-icon name="ios-arrow-back" (click)="swipeRight()" class="iconarrow arrow-left"></ion-icon>\n								<ion-icon name="ios-arrow-forward" (click)="swipeLeft()" class="iconarrow arrow-right"></ion-icon>\n							</div>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n			</div>\n		</div>\n	</div>\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar no-border-top color="dark">\n		<ion-segment color="light">\n			<ion-segment-button value="friends" (click)="goToHomePage()">\n				<ion-icon name="home"></ion-icon><br>\n			</ion-segment-button>\n			<ion-segment-button value="people" (click)="goToPeoplePage()">\n				<ion-icon name="people"></ion-icon><br>\n			</ion-segment-button>\n			<!-- <ion-segment-button value="calendar" (click)="goToPostProcedurePage()">\n				At Home\n			</ion-segment-button> -->\n		</ion-segment>\n	</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/preprocedure/preprocedure.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PreprocedurePage);
    return PreprocedurePage;
    var PreprocedurePage_1;
}());

// }
// }
//# sourceMappingURL=preprocedure.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuringprocedurePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_httpprovider_httpprovider__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_gtag__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__insurancemessage_insurancemessage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__procedure_procedure__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__preprocedure_preprocedure__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__postprocedure_postprocedure__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__recovery_recovery__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__success_success__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__whattodoif_whattodoif__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__people_people__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the DuringprocedurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
  This section includes all the pages related to procedures
**/


;






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
        Object(__WEBPACK_IMPORTED_MODULE_3__assets_gtag__["a" /* googleAnalytics */])('duringprocedure');
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_11__home_home__["a" /* HomePage */]);
    };
    DuringprocedurePage.prototype.goToProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__procedure_procedure__["a" /* ProcedurePage */]);
    };
    DuringprocedurePage.prototype.gotToPreProcedure = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__preprocedure_preprocedure__["a" /* PreprocedurePage */]);
    };
    DuringprocedurePage.prototype.gotToDuringProcedurePage = function () {
        this.navCtrl.push(DuringprocedurePage_1);
    };
    DuringprocedurePage.prototype.goToRecoverPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__recovery_recovery__["a" /* RecoveryPage */]);
    };
    DuringprocedurePage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__postprocedure_postprocedure__["a" /* PostprocedurePage */]);
    };
    DuringprocedurePage.prototype.goToWhatIfPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__whattodoif_whattodoif__["a" /* WhattodoifPage */]);
    };
    DuringprocedurePage.prototype.goToPeoplePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__people_people__["a" /* PeoplePage */]);
    };
    DuringprocedurePage.prototype.gotToSuccessPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__success_success__["a" /* SuccessPage */]);
    };
    DuringprocedurePage.prototype.gotoInsurancePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__insurancemessage_insurancemessage__["a" /* InsurancemessagePage */]);
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__recovery_recovery__["a" /* RecoveryPage */]);
    };
    DuringprocedurePage.prototype.swipeRight = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__preprocedure_preprocedure__["a" /* PreprocedurePage */]);
    };
    DuringprocedurePage = DuringprocedurePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-duringprocedure',template:/*ion-inline-start:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/duringprocedure/duringprocedure.html"*/'<ion-header>\n	<ion-navbar  color="primary" hideBackButton="true">\n		<!-- <button ion-button menuToggle *ngIf=\'platform === "mobileweb"\'>\n			<ion-icon name="menu"></ion-icon>\n		</button> -->\n		<ion-buttons left>\n			<!-- <button ion-button icon-only (click)="goBack()">\n				<ion-icon name="ios-arrow-back"></ion-icon>\n			</button> -->\n		</ion-buttons>\n		<ion-title  align-title="center">Procedure</ion-title>\n		<ion-buttons right>\n			 \n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content (swipe)="swipeEvent($event)">\n	<div *ngIf=\'platform === "mobileweb" || platform ==="web"\' [ngClass]="navClassName==\'opennav\'?\'navopen\':\'na\'">\n		<div class="pagecontainer">\n			<div class="pagenav">\n				<ul>\n				<li (click)="goToProcedurePage()">\n				      <i class="icon"><img src="assets/imgs/open-book.svg" class="icon-default"><img src="assets/imgs/open-book-white.svg" class="icon-white"></i> \n				      <span class="menutext">About procedure</span>\n				     </li>\n				     <li (click)="gotToPreProcedure()">\n				      <i class="icon"><img src="assets/imgs/numbers.svg" class="icon-default"><img src="assets/imgs/numbers-white.svg" class="icon-white"></i> \n				      <span class="menutext">Pre-procedure</span>\n				     </li>\n				     <li (click)="gotToDuringProcedurePage()" class="active">\n				      <i class="icon" ><img src="assets/imgs/sleeping.svg" class="icon-default"><img src="assets/imgs/sleeping-white.svg" class="icon-white"></i> \n				      <span class="menutext">Procedure</span>\n				     </li>\n				     <li (click)="goToRecoverPage()">\n				      <i class="icon"><img src="assets/imgs/eye-blocked.svg" class="icon-default"><img src="assets/imgs/eye-blocked-white.svg" class="icon-white"></i> \n				      <span class="menutext">Recovery</span>\n				     </li>\n				     <li (click)="goToPostProcedurePage()">\n				      <i class="icon"><img src="assets/imgs/home.svg" class="icon-default"><img src="assets/imgs/home-white.svg" class="icon-white"></i> \n				      <span class="menutext">At Home</span>\n				     </li>\n				     <li (click)="goToWhatIfPage()">\n				      <i class="icon"><img src="assets/imgs/question-mark.svg" class="icon-default"><img src="assets/imgs/question-mark-white.svg" class="icon-white"></i> \n				      <span class="menutext">What to do if</span>\n				     </li>\n				     <li (click)="gotToSuccessPage()">\n				      <i class="icon"><img src="assets/imgs/check-mark.svg" class="icon-default"><img src="assets/imgs/check-mark-white.svg" class="icon-white"></i> \n				      <span class="menutext">Success</span>\n				     </li>\n				     <li (click)="gotoInsurancePage()" class="pointer">\n										<i class="icon"><img src="assets/imgs/dollar-symbol.svg" class="icon-default"><img src="assets/imgs/dollar-symbol-white.svg" class="icon-white"></i> \n										<span class="menutext">Insurance</span>\n									</li>\n				     <li (click)="toggleNav()" class="menucollapse"><i class="icon"><img src="assets/imgs/chevron-left.svg"></i> <span class="menutext">Collapse Menu</span></li>\n				</ul>\n			</div>\n			<div class="pagecontent">\n				<ion-grid>\n					<ion-row>\n						<ion-col align-self-stretch [ngClass]="className==\'contentwrap\'?\'contentwrap\':\'na\'" class="content-area">\n							<!-- <div class="page-title">\n								<h2>Procedure</h2>\n								<ion-icon md="md-help" class="help-action"></ion-icon>\n							</div> -->\n							\n							<div class="page-image">\n								 <img width="100%" height="70%" src="./assets/imgs/procedure-img.jpg">\n							</div>\n							<div *ngFor="let item of duringprocedureList;let i=index" class="pointer accordion-item accordion-multi"  [ngClass]="item.show==true?\'titleContainer\':\'na\'">\n								<div class="item-content breadcrumb" *ngIf="item.dropdown == false">\n									<h4 (click)="activateItem(i)" class="accr-title">\n										{{item.title}}\n										<span class="arr-icon">\n											<ion-icon *ngIf="!item.show" name="ios-arrow-down"></ion-icon>\n											<ion-icon *ngIf="item.show" name="ios-arrow-up"></ion-icon>\n										</span>\n									</h4>\n									<div class="accr-content" [innerHTML]="getHtmlContent(i)" *ngIf="item.show"></div>\n								</div>\n										<div class="item-content breadcrumb" *ngIf="item.dropdown == true">\n									<h4 (click)="activateItem(i)" class="accr-title">\n										{{item.title}}\n										<br /><div class="page-image" *ngIf="item.show && i==1">\n						                 <img width="100%" height="70%" src="./assets/imgs/what-happens.jpg">\n						              </div>\n						              <div class="page-image" *ngIf="item.show && i==2">\n						                 <img width="100%" height="70%" src="./assets/imgs/just-after.jpg">\n						              </div>\n										<span class="arr-icon">\n											<ion-icon *ngIf="!item.show" name="ios-arrow-down"></ion-icon>\n											<ion-icon *ngIf="item.show" name="ios-arrow-up"></ion-icon>\n										</span>\n									</h4>\n									\n									<div *ngFor="let itemDet of item.description;let j=index" class="pointer accordion-item accordion-multi">\n										<div class="item-content breadcrumb" *ngIf="item.show">\n									<h4 (click)="activateDetailItem(i, j)" class="accr-title">\n										<b><u>{{itemDet.title}}</u></b>\n										<span class="arr-icon">\n											<ion-icon *ngIf="!itemDet.show" name="ios-arrow-down"></ion-icon>\n											<ion-icon *ngIf="itemDet.show" name="ios-arrow-up"></ion-icon>\n										</span>\n									</h4>\n									<div class="accr-content" [innerHTML]="getDetailHtmlContent(i,j)" *ngIf="itemDet.show"></div>\n										</div>\n									</div>\n								</div>\n							</div>\n\n							<div class="arrownav">\n								<ion-icon name="ios-arrow-back" (click)="swipeRight()" class="iconarrow arrow-left"></ion-icon>\n								<ion-icon name="ios-arrow-forward" (click)="swipeLeft()" class="iconarrow arrow-right"></ion-icon>\n							</div>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n			</div>\n		</div>\n	</div>\n	<!-- <ion-grid>\n		<ion-row>\n			<ion-col align-self-stretch class="leftmenu" *ngIf=\'platform === "web"\'>\n				<ion-list inset>\n					<button ion-item>About procedure</button>\n					<button ion-item (click)="gotToPreProcedure()">Pre-procedure</button> \n					<button ion-item (click)="gotToDuringProcedurePage()"><b>Procedure</b></button> \n					<button ion-item (click)="goToRecoverPage()">Recovery</button> \n					<button ion-item (click)="goToPostProcedurePage()">At home</button> \n					<button ion-item (click)="goToWhatIfPage()">What to do if</button> \n					<button ion-item (click)="gotToSuccessPage()">Success</button> \n				</ion-list>\n			</ion-col>\n			<ion-col align-self-stretch [ngClass]="className==\'contentwrap\'?\'contentwrap\':\'na\'" class="content-area">\n				<div class="page-title">\n					<h2>Procedure</h2>\n					<ion-icon md="md-help" class="help-action"></ion-icon>\n				</div>\n				\n				<div class="page-image">\n					 <img width="100%" height="70%" src="https://s.abcnews.com/images/Health/GTY-doctors-handshake-jpo-170531_12x5_992.jpg">\n				</div>\n				<ion-list class="page-list">\n					<button ion-item *ngFor="let item of duringprocedureList" mode="ios">\n						{{ item.title }}\n					</button>  \n				</ion-list>\n\n				<div class="arrownav">\n					<ion-icon name="ios-arrow-back" (click)="swipeRight()" class="iconarrow arrow-left"></ion-icon>\n					<ion-icon name="ios-arrow-forward" (click)="swipeLeft()" class="iconarrow arrow-right"></ion-icon>\n				</div>\n			</ion-col>\n		</ion-row>\n	</ion-grid> -->\n</ion-content>\n	\n<ion-footer>\n	<ion-toolbar no-border-top color="dark">\n		<ion-segment color="light">\n			<ion-segment-button value="friends" (click)="goToHomePage()">\n				<ion-icon name="home"></ion-icon><br>\n			</ion-segment-button>\n			<ion-segment-button value="people" (click)="goToPeoplePage()">\n				<ion-icon name="people"></ion-icon><br>\n			</ion-segment-button>\n			<!-- <ion-segment-button value="calendar" (click)="goToPostProcedurePage()">\n				At Home\n			</ion-segment-button> -->\n		</ion-segment>\n	</ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/duringprocedure/duringprocedure.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_httpprovider_httpprovider__["a" /* HttpproviderProvider */]])
    ], DuringprocedurePage);
    return DuringprocedurePage;
    var DuringprocedurePage_1;
}());

//# sourceMappingURL=duringprocedure.js.map

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoveryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_httpprovider_httpprovider__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_gtag__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__procedure_procedure__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__preprocedure_preprocedure__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__duringprocedure_duringprocedure__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__postprocedure_postprocedure__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__success_success__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__whattodoif_whattodoif__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__people_people__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__insurancemessage_insurancemessage__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RecoveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
  This section includes all the pages related to procedures
**/









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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
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
        Object(__WEBPACK_IMPORTED_MODULE_3__assets_gtag__["a" /* googleAnalytics */])('recovery');
    };
    RecoveryPage.prototype.ionViewDidLoad = function () {
        this.getRecoveryContent();
    };
    RecoveryPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    RecoveryPage.prototype.getRecoveryContent = function () {
        this.content = this.httpService.getRecoveryContent();
        console.log(this.content);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__procedure_procedure__["a" /* ProcedurePage */]);
    };
    RecoveryPage.prototype.gotToPreProcedure = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__preprocedure_preprocedure__["a" /* PreprocedurePage */]);
    };
    RecoveryPage.prototype.gotToDuringProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__duringprocedure_duringprocedure__["a" /* DuringprocedurePage */]);
    };
    RecoveryPage.prototype.goToRecoverPage = function () {
        this.navCtrl.push(RecoveryPage_1);
    };
    RecoveryPage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__postprocedure_postprocedure__["a" /* PostprocedurePage */]);
    };
    RecoveryPage.prototype.goToWhatIfPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__whattodoif_whattodoif__["a" /* WhattodoifPage */]);
    };
    RecoveryPage.prototype.goToPeoplePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__people_people__["a" /* PeoplePage */]);
    };
    RecoveryPage.prototype.gotToSuccessPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__success_success__["a" /* SuccessPage */]);
    };
    RecoveryPage.prototype.gotoInsurancePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__insurancemessage_insurancemessage__["a" /* InsurancemessagePage */]);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__postprocedure_postprocedure__["a" /* PostprocedurePage */]);
    };
    RecoveryPage.prototype.swipeRight = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__duringprocedure_duringprocedure__["a" /* DuringprocedurePage */]);
    };
    RecoveryPage = RecoveryPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recovery',template:/*ion-inline-start:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/recovery/recovery.html"*/'<ion-header>\n	<ion-navbar  color="primary"  hideBackButton="true">\n		<!-- <button ion-button menuToggle *ngIf=\'platform === "mobileweb"\'>\n			<ion-icon name="menu"></ion-icon>\n		</button> -->\n		<!-- <ion-buttons left>\n			<button ion-button icon-only (click)="goBack()">\n				<ion-icon name="ios-arrow-back"></ion-icon>\n			</button>\n		</ion-buttons> -->\n		<ion-title  align-title="center">Recovery</ion-title>\n		<ion-buttons right>\n			 \n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content (swipe)="swipeEvent($event)">\n	<div *ngIf=\'platform === "mobileweb" || platform ==="web"\' [ngClass]="navClassName==\'opennav\'?\'navopen\':\'na\'">\n		<div class="pagecontainer">\n			<div class="pagenav">\n				<ul>\n					<li (click)="goToProcedurePage()">\n				      <i class="icon"><img src="assets/imgs/open-book.svg" class="icon-default"><img src="assets/imgs/open-book-white.svg" class="icon-white"></i> \n				      <span class="menutext">About procedure</span>\n				     </li>\n				     <li (click)="gotToPreProcedure()">\n				      <i class="icon"><img src="assets/imgs/numbers.svg" class="icon-default"><img src="assets/imgs/numbers-white.svg" class="icon-white"></i> \n				      <span class="menutext">Pre-procedure</span>\n				     </li>\n				     <li (click)="gotToDuringProcedurePage()">\n				      <i class="icon"><img src="assets/imgs/sleeping.svg" class="icon-default"><img src="assets/imgs/sleeping-white.svg" class="icon-white"></i> \n				      <span class="menutext">Procedure</span>\n				     </li>\n				     <li (click)="goToRecoverPage()" class="active">\n				      <i class="icon"><img src="assets/imgs/eye-blocked.svg" class="icon-default"><img src="assets/imgs/eye-blocked-white.svg" class="icon-white"></i> \n				      <span class="menutext">Recovery</span>\n				     </li>\n				     <li (click)="goToPostProcedurePage()">\n				      <i class="icon"><img src="assets/imgs/home.svg" class="icon-default"><img src="assets/imgs/home-white.svg" class="icon-white"></i> \n				      <span class="menutext">At Home</span>\n				     </li>\n				     <li (click)="goToWhatIfPage()">\n				      <i class="icon"><img src="assets/imgs/question-mark.svg" class="icon-default"><img src="assets/imgs/question-mark-white.svg" class="icon-white"></i> \n				      <span class="menutext">What to do if</span>\n				     </li>\n				     <li (click)="gotToSuccessPage()">\n				      <i class="icon"><img src="assets/imgs/check-mark.svg" class="icon-default"><img src="assets/imgs/check-mark-white.svg" class="icon-white"></i> \n				      <span class="menutext">Success</span>\n				     </li>\n				     <li (click)="gotoInsurancePage()" class="pointer">\n										<i class="icon"><img src="assets/imgs/dollar-symbol.svg" class="icon-default"><img src="assets/imgs/dollar-symbol-white.svg" class="icon-white"></i> \n										<span class="menutext">Insurance</span>\n									</li>\n				     <li (click)="toggleNav()" class="menucollapse"><i class="icon"><img src="assets/imgs/chevron-left.svg"></i> <span class="menutext">Collapse Menu</span></li>\n				</ul>\n			</div>\n			<div class="pagecontent">\n				<ion-grid>\n					<ion-row>\n						<ion-col align-self-stretch [ngClass]="className==\'contentwrap\'?\'contentwrap\':\'na\'" class="content-area">\n							<!-- <div class="page-title">\n								<h2>Recovery</h2>\n								<ion-icon md="md-help" class="help-action"></ion-icon>\n							</div> -->\n							<div class="page-image">\n								<img width="100%" height="40%" src="./assets/imgs/recovery-img.jpg">\n							</div><br>\n							\n							<div class="page-content">\n								<div *ngFor="let item of content;let i=index" class="pointer accordion-item accordion-multi"  [ngClass]="item.show==true?\'titleContainer\':\'na\'">\n								<div class="item-content breadcrumb">\n									<h4 (click)="activateItem(i)" class="accr-title">\n										{{item.title}}\n										<span class="arr-icon">\n											<ion-icon *ngIf="!item.show" name="ios-arrow-down"></ion-icon>\n											<ion-icon *ngIf="item.show" name="ios-arrow-up"></ion-icon>\n										</span>\n									</h4>\n									<div class="accr-content" [innerHTML]="item.htmlDesc" *ngIf="item.show"></div>\n								</div>\n							</div>\n								\n							</div>\n\n							<div class="arrownav">\n								<ion-icon name="ios-arrow-back" (click)="swipeRight()" class="iconarrow arrow-left"></ion-icon>\n								<ion-icon name="ios-arrow-forward" (click)="swipeLeft()" class="iconarrow arrow-right"></ion-icon>\n							</div>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n			</div>\n		</div>\n	</div>\n\n	<!-- <ion-grid>\n		<ion-row>\n			<ion-col align-self-stretch class="leftmenu"  *ngIf=\'platform === "web"\'>\n				<ion-list inset>\n					<button ion-item (click)="goToProcedurePage()">About procedure</button>\n					<button ion-item (click)="gotToPreProcedure()">Pre-procedure</button> \n					<button ion-item (click)="gotToDuringProcedurePage()">Procedure</button> \n					<button ion-item (click)="goToRecoverPage()"><b>Recovery</b></button> \n					<button ion-item (click)="goToPostProcedurePage()">At home</button> \n					<button ion-item (click)="goToWhatIfPage()">What to do if</button> \n					<button ion-item (click)="gotToSuccessPage()">Success</button> \n				</ion-list>\n			</ion-col>\n			\n		</ion-row>\n	</ion-grid> -->\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar no-border-top color="dark">\n		<ion-segment color="light">\n			<ion-segment-button value="friends" (click)="goToHomePage()">\n				<ion-icon name="home"></ion-icon><br>\n			</ion-segment-button>\n			<ion-segment-button value="people" (click)="goToPeoplePage()">\n				<ion-icon name="people"></ion-icon><br>\n			</ion-segment-button>\n			<!-- <ion-segment-button value="calendar" (click)="goToPostProcedurePage()">\n				At Home\n			</ion-segment-button> -->\n		</ion-segment>\n	</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/recovery/recovery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_httpprovider_httpprovider__["a" /* HttpproviderProvider */]])
    ], RecoveryPage);
    return RecoveryPage;
    var RecoveryPage_1;
}());

//# sourceMappingURL=recovery.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_gtag__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__insurancemessage_insurancemessage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__procedure_procedure__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__preprocedure_preprocedure__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__duringprocedure_duringprocedure__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__postprocedure_postprocedure__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__recovery_recovery__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__whattodoif_whattodoif__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__people_people__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
  This section includes all the pages related to procedures
**/








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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__assets_gtag__["a" /* googleAnalytics */])('success');
    };
    SuccessPage.prototype.getSatisfactionLevel = function (level) {
        this.satisfied = level;
    };
    SuccessPage.prototype.getHelpfulLevel = function (level) {
        this.helpful = level;
    };
    SuccessPage.prototype.goToProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__procedure_procedure__["a" /* ProcedurePage */]);
    };
    SuccessPage.prototype.gotToPreProcedure = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__preprocedure_preprocedure__["a" /* PreprocedurePage */]);
    };
    SuccessPage.prototype.gotToDuringProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__duringprocedure_duringprocedure__["a" /* DuringprocedurePage */]);
    };
    SuccessPage.prototype.goToRecoverPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__recovery_recovery__["a" /* RecoveryPage */]);
    };
    SuccessPage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__postprocedure_postprocedure__["a" /* PostprocedurePage */]);
    };
    SuccessPage.prototype.goToWhatIfPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__whattodoif_whattodoif__["a" /* WhattodoifPage */]);
    };
    SuccessPage.prototype.goToPeoplePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__people_people__["a" /* PeoplePage */]);
    };
    SuccessPage.prototype.gotToSuccessPage = function () {
        this.navCtrl.push(SuccessPage_1);
    };
    SuccessPage.prototype.gotoInsurancePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__insurancemessage_insurancemessage__["a" /* InsurancemessagePage */]);
    };
    SuccessPage.prototype.swipeEvent = function (event) {
        if (event.direction === 4) {
            this.swipeRight();
        }
        if (event.direction === 2) {
            this.swipeLeft();
        }
    };
    SuccessPage.prototype.swipeLeft = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__insurancemessage_insurancemessage__["a" /* InsurancemessagePage */]);
    };
    SuccessPage.prototype.swipeRight = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__whattodoif_whattodoif__["a" /* WhattodoifPage */]);
    };
    SuccessPage.prototype.activateMailToOptions = function () {
        window.location.href = "mailto:someone@example.com";
    };
    SuccessPage = SuccessPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-success',template:/*ion-inline-start:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/success/success.html"*/'<ion-header>\n	<ion-navbar  color="primary"  hideBackButton="true">\n		<button ion-button menuToggle *ngIf=\'platform === "mobileweb"\'>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<!-- <ion-buttons left>\n			<button ion-button icon-only (click)="goBack()">\n				<ion-icon name="ios-arrow-back"></ion-icon>\n			</button>\n		</ion-buttons> -->\n		<ion-title  align-title="center">Success</ion-title>\n		<!-- <ion-buttons right>\n			<button ion-button icon-only>\n				<ion-icon name="ios-search"></ion-icon>\n			</button>\n		</ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content (swipe)="swipeEvent($event)">\n	<div *ngIf=\'platform === "mobileweb" || platform ==="web"\' [ngClass]="navClassName==\'opennav\'?\'navopen\':\'na\'">\n		<div class="pagecontainer">\n			<div class="pagenav">\n				<ul>\n					<li (click)="goToProcedurePage()">\n						<i class="icon"><img src="assets/imgs/open-book.svg" class="icon-default"><img src="assets/imgs/open-book-white.svg" class="icon-white"></i> \n						<span class="menutext">About procedure</span>\n					</li>\n					<li (click)="gotToPreProcedure()">\n						<i class="icon"><img src="assets/imgs/numbers.svg" class="icon-default"><img src="assets/imgs/numbers-white.svg" class="icon-white"></i> \n						<span class="menutext">Pre-procedure</span>\n					</li>\n					<li (click)="gotToDuringProcedurePage()">\n						<i class="icon"><img src="assets/imgs/sleeping.svg" class="icon-default"><img src="assets/imgs/sleeping-white.svg" class="icon-white"></i> \n						<span class="menutext">Procedure</span>\n					</li>\n					<li (click)="goToRecoverPage()">\n						<i class="icon"><img src="assets/imgs/eye-blocked.svg" class="icon-default"><img src="assets/imgs/eye-blocked-white.svg" class="icon-white"></i> \n						<span class="menutext">Recovery</span>\n					</li>\n					<li (click)="goToPostProcedurePage()">\n						<i class="icon"><img src="assets/imgs/home.svg" class="icon-default"><img src="assets/imgs/home-white.svg" class="icon-white"></i> \n						<span class="menutext">At Home</span>\n					</li>\n					<li (click)="goToWhatIfPage()">\n						<i class="icon"><img src="assets/imgs/question-mark.svg" class="icon-default"><img src="assets/imgs/question-mark-white.svg" class="icon-white"></i> \n						<span class="menutext">What to do if</span>\n					</li>\n					<li (click)="gotToSuccessPage()" class="active">\n						<i class="icon"><img src="assets/imgs/check-mark.svg" class="icon-default"><img src="assets/imgs/check-mark-white.svg" class="icon-white"></i> \n						<span class="menutext">Success</span>\n					</li>\n					<li (click)="gotoInsurancePage()" class="pointer">\n										<i class="icon"><img src="assets/imgs/dollar-symbol.svg" class="icon-default"><img src="assets/imgs/dollar-symbol-white.svg" class="icon-white"></i> \n										<span class="menutext">Insurance</span>\n									</li>\n					<li (click)="toggleNav()" class="menucollapse"><i class="icon"><img src="assets/imgs/chevron-left.svg"></i> <span class="menutext">Collapse Menu</span></li>\n				</ul>\n			</div>\n			<div class="pagecontent">\n				<ion-grid>\n					<ion-row>\n						<ion-col align-self-stretch  [ngClass]="className==\'contentwrap\'?\'contentwrap\':\'na\'" class="content-area">\n							<!-- <div class="page-title">\n								<h2>Success</h2>\n								<ion-icon md="md-help" class="help-action"></ion-icon>\n							</div> -->\n\n							<div class="success-block">\n								<h4>Were you satisfied with the procedure?</h4>\n								<ion-row>\n									<ion-col col-4 col-sm-3 col-md-3 col-lg-2>\n										<div class="feedback-action" (click)="getSatisfactionLevel(\'no\')" [ngClass]="{\'activeSatisfactionEmoji\' : (satisfied == \'no\'), \'inActiveSatisfactionEmoji\' : (satisfied != \'no\')}">\n											<button ion-button class="btn-emoji">\n												<img src="../assets/imgs/sad.svg" class="default">\n												<img src="../assets/imgs/sad-selected.svg" class="selected">\n											</button><br>\n											No\n										</div>\n									</ion-col>\n									<ion-col col-4 col-sm-3 col-md-3 col-lg-2>\n										<div class="feedback-action" (click)="getSatisfactionLevel(\'somewhat\')" [ngClass]="{\'activeSatisfactionEmoji\' : (satisfied == \'somewhat\'), \'inActiveSatisfactionEmoji\' : (satisfied != \'somewhat\')}">\n											\n											<button ion-button class="btn-emoji">\n												<img src="../assets/imgs/indifferent.svg" class="default">\n												<img src="../assets/imgs/indifferent-selected.svg" class="selected">\n											</button><br>\n											Somewhat\n										</div>\n									</ion-col>\n									<ion-col col-4 col-sm-3 col-md-3 col-lg-2>\n										<div class="feedback-action" (click)="getSatisfactionLevel(\'yes\')" [ngClass]="{\'activeSatisfactionEmoji\' : (satisfied == \'yes\'), \'inActiveSatisfactionEmoji\' : (satisfied != \'yes\')}">\n										\n											<button ion-button class="btn-emoji">\n												<img src="../assets/imgs/happy.svg" class="default">\n												<img src="../assets/imgs/happy-selected.svg" class="selected">\n											</button><br>\n											Yes\n										</div>\n									</ion-col>\n								</ion-row>\n							</div>\n\n							<div class="success-block">\n								<h4>Was this app helpful?</h4>\n								<ion-row>\n									<ion-col col-4 col-sm-3 col-md-3 col-lg-2>\n										<div class="feedback-action" (click)="getHelpfulLevel(\'no\')" [ngClass]="{\'activeHelpfulEmoji\' : (helpful == \'no\'), \'inActiveHelpfulEmoji\' : (helpful != \'no\')}">\n											<button ion-button class="btn-emoji">\n												<img src="../assets/imgs/sad.svg" class="default">\n												<img src="../assets/imgs/sad-selected.svg" class="selected">\n											</button><br>\n											No\n										</div>\n									</ion-col>\n									<ion-col col-4 col-sm-3 col-md-3 col-lg-2>\n										<div class="feedback-action" (click)="getHelpfulLevel(\'somewhat\')" [ngClass]="{\'activeHelpfulEmoji\' : (helpful == \'somewhat\'), \'inActiveHelpfulEmoji\' : (helpful != \'somewhat\')}">\n											<button ion-button class="btn-emoji">\n												<img src="../assets/imgs/indifferent.svg" class="default">\n												<img src="../assets/imgs/indifferent-selected.svg" class="selected">\n											</button><br>\n											Somewhat\n										</div>\n									</ion-col>\n									<ion-col col-4 col-sm-3 col-md-3 col-lg-2>\n										<div class="feedback-action" (click)="getHelpfulLevel(\'yes\')" [ngClass]="{\'activeHelpfulEmoji\' : (helpful == \'yes\'), \'inActiveHelpfulEmoji\' : (helpful != \'yes\')}">\n											<button ion-button class="btn-emoji">\n												<img src="../assets/imgs/happy.svg" class="default">\n												<img src="../assets/imgs/happy-selected.svg" class="selected">\n											</button><br>\n											Yes\n										</div>\n									</ion-col>\n								</ion-row>\n							</div>\n\n							<div class="success-block">\n								<h4>Feedback is welcome</h4>\n								<ion-row>\n									<ion-col col-12 col-sm-9 col-md-10>\n										<p>Please share what you liked and what you did not so we can continue to improve our app.</p>\n									</ion-col>\n									<ion-col col-12 col-sm-3 col-md-2>\n										<div text-right>\n											<!-- <button ion-button (click)="activateMailToOptions()">EMAIL US</button> -->\n											<a ion-button href="mailto:ContactUs@PatientAppsinc.com?Subject=PatientApps" target="_top">EMAIL US</a>\n										</div>\n									</ion-col>\n								</ion-row>\n								<br>\n								<hr>\n								<p class="footnote">\n									<u>Authors</u>: Dr. Blaine T. Phillips, M,D., M.P.H., Dr. Mohamad Rassoul A. Abu-Nuwar M.D.<br>\n									<u>Reviewers</u>: Dr. Jaisa Olasky M.D., Assistant Professor Harvard Medical School; Dr. Brian M. Nguyen M.D., General Surgeon, Kaiser Permanente<br>\n									<u>Powered &amp; Built by</u>: PatientApps Inc., Boston\n								</p>\n							</div>\n\n							<div class="arrownav">\n								Copyright © 2019, PatientApps Inc.\n							</div>\n							<div class="arrownav">\n								<ion-icon name="ios-arrow-forward" (click)="swipeLeft()" class="iconarrow arrow-right"></ion-icon>\n							</div>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n			</div>\n		</div>\n	</div>\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar no-border-top color="dark">\n		<ion-segment color="light">\n			<ion-segment-button value="friends" (click)="goToHomePage()">\n				<ion-icon name="home"></ion-icon><br>\n			</ion-segment-button>\n			<ion-segment-button value="people" (click)="goToPeoplePage()">\n				<ion-icon name="people"></ion-icon><br>\n			</ion-segment-button>\n			<!-- <ion-segment-button value="calendar" (click)="goToPostProcedurePage()">\n				At Home\n			</ion-segment-button> -->\n		</ion-segment>\n	</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/success/success.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SuccessPage);
    return SuccessPage;
    var SuccessPage_1;
}());

//# sourceMappingURL=success.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhattodoifPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_httpprovider_httpprovider__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_gtag__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__procedure_procedure__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__preprocedure_preprocedure__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__duringprocedure_duringprocedure__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__postprocedure_postprocedure__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__recovery_recovery__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__success_success__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__people_people__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__insurancemessage_insurancemessage__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the WhattodoifPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
    This section includes all the pages related to procedures
**/









// import { AboutprocedurePage } from '../aboutprocedure/aboutprocedure';
var WhattodoifPage = /** @class */ (function () {
    function WhattodoifPage(navCtrl, navParams, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_8__recovery_recovery__["a" /* RecoveryPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_5__preprocedure_preprocedure__["a" /* PreprocedurePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_6__duringprocedure_duringprocedure__["a" /* DuringprocedurePage */];
        this.tabs = [];
        this.index = 1;
        this.platform = localStorage.getItem('platform');
        this.className = 'contentwrap';
        this.phone_office = '<img src="assets/imgs/telephone.svg" class="inline-icon"> <a href="tel:617-667-2845">';
        this.phone_oncall = '<img src="assets/imgs/telephone.svg" class="inline-icon"> <a href="tel:617-632-8611">';
        this.email = '<a href="mailto:WLS@BIDMC.Harvard.edu">';
        this.whatToDoIfNormalSideAffects = [
            {
                title: "<strong>Bloating</strong><p><i>This is often a consequence of the constipation that patients experience after surgery.</i></p>",
                description: "\n\t\tThis is often a consequence of the constipation that patients experience after surgery. Postoperative constipation is caused by opioid pain medication, general anesthesia, and the surgery itself. Typically, your bloating will go away as you start to have bowel movements.\n\t\t<br /><br />If your bloating persists or worsens, please contact your surgeon at " + this.email + "E-MAIL</a>.",
                show: false,
            },
            {
                title: '<strong>Constipation</strong><p><i>This is normal and can last a few weeks. However, there are remedies.</i></p>',
                description: "\n\t\tOpioid pain medications and general anesthesia slow down our intestines. Therefore, it is normal for you to have trouble passing gas or having a bowel movement after surgery. \n<br /><br />Adequate hydration and walking are two easy options to help fix this. Consuming foods rich in fiber and decreasing your intake of opioid pain medication can also help alleviate constipation. However, taking laxatives (e.g magnesium hydroxide, magnesium citrate, psyllium, polyethylene glycol, docusate sodium, or mineral oil) is the most effective solution to preventing and treating constipation. \n<br /><br />To ensure bowel regularity, laxatives should be taken whenever you are taking opioid pain medication and NOT just when you are constipated. In other words, they are most effective if they are taken before you experience constipation. Therefore, please take laxatives as prescribed by your surgeon when taking opioid pain medication. You should also remember that you should try non-opioid pain medication, such as acetaminophen or ibuprofen, for pain relief before using opioid pain medication.*\n\n<br /><br />If you find that your stools have become too soft, simply discontinue your laxative use.\n\n<br /><br />Please drink water periodically throughout the day. Drinking prune juice mixed with water can also be helpful.\n<br /><br />Suppositories or enemas are other options.\n<br /><br />Bloating can be due to your constipation. It can also be due to a new intolerance to dairy products.\n<br /><br />If your constipation/bloating persists or worsens (e.g. if you have not had a bowel movement for four days), please contact your surgeon at " + this.email + "E-MAIL</a>.\n<i><br /><br />*If you can tolerate your pain without using opioid pain medication, we encourage you to avoid opioids as this will enhance your recovery.</i>\n",
                show: false,
            },
            {
                title: '<strong>Depression/anxiety (mild)</strong><p><i>Never feel ashamed to admit this.</i></p>',
                description: "It is normal to experience an array of emotions after your surgery. Please do not feel ashamed discussing this with your loved ones (support group) and the healthcare professionals treating you. They will be able to help you and make sure you are given the appropriate treatment.\n\t\t\t<br /><br />If you feel you are at risk of hurting yourself or others, please seek immediate medical attention by either calling 911 or going to your local/nearest emergency department (See Depression/anxiety (severe) in our Symptoms section).\n",
                show: false,
            },
            {
                title: "<strong>Diarrhea/urgency</strong><p><i>Can be common after cholecystectomy and will typically resolve within days to weeks.</i></p>",
                description: "\nDiarrhea after cholecystectomy is common and will typically resolve within days to weeks. Occasionally, diarrhea after surgery can be a consequence of your diet. For example, you may find that fatty and spicy foods no longer agree with your digestive system. If you think this is the case, avoid these foods and contact your dietitian.\n\n<br /><br />Some patients also experience urgency to have a bowel movement soon after eating. Often, this will improve with time.\n\n<br /><br />If you have frequent loose stools, please increase your fluid intake (at least 10 glasses of water each day) to replace the water volume you have lost. \n\n<br /><br />Severe fluid loss can cause you to become lightheaded and dizzy when standing up from a seated position. If this occurs, please exercise caution. If you start to feel lightheaded or dizzy, please consume more water before contacting your surgeon.\n\n<br /><br />If your diarrhea persists or worsens and is impacting your quality of life, please contact your surgeon at " + this.email + "E-MAIL</a>.\n\n<br /><br />A small minority of patients who have had their gallbladder removed report having issues with chronic diarrhea. This is extremely rare, but there are medications that help control chronic diarrhea.\n\n<br /><br />Do not take medication to treat your diarrhea without first consulting with your surgeon.\n\n<br /><br />If there are changes to the quality of your stool/diarrhea (e.g. if it becomes darker in color or you can see bright red blood), please call 911 or go to your local/nearest emergency department.\n\n\t\t",
                show: false,
            },
            {
                title: "<strong>Difficulty concentrating</strong><p><i>Difficulty sleeping can be common after surgery.</i></p>",
                description: "<p>Difficulty concentrating can be common for a brief period of time after your surgery. If you continue to have difficulty concentrating, please contact your surgeon.\n</p>",
                show: false,
            },
            {
                title: "<strong>Difficulty sleeping</strong><p><i>Difficulty sleeping can be common after surgery.</i></p>",
                description: "Difficulty sleeping can be common for a brief period of time after your surgery. If you are having trouble sleeping, try elevating the head of your bed. If your difficulty sleeping persists or worsens, please contact your surgeon.\n",
                show: false,
            },
            {
                title: '<strong>Fatigue/weakness</strong><p><i>Surgery is physically distressing to the body, and it is normal if it takes time to recover.</i></p>',
                description: "\n\t\t\tAny type of surgery, including minimally invasive surgery, is draining on your body. It is normal to feel weak and fatigued after surgery. It often takes 2 weeks to return to your normal baseline function, but some patients may require up to 6 weeks before they start feeling like themselves.\n\t\t\t<br /><br />If your fatigue persists or worsens, you should make sure you are giving yourself adequate hydration, food and nutrients, and sleep. If these efforts do not provide you with more energy and strength, please contact your surgeon at " + this.email + "E-MAIL</a>.\n\t\t\t<br /><br>If your fatigue/weakness is of sudden onset, please call 911 or go to your local/nearest emergency department.\n\n\t\t",
                show: false,
            },
            {
                title: "<strong>Fever</strong><p><i> Although fever after surgery is quite common, ALL postoperative fevers should be immediately reported to a medical professional and may warrant medical attention.</i></p>",
                description: "Fever during the first few days after surgery is quite common and can be linked to small changes in your body, such as an accumulation of mucus in your lungs. However, should you develop ANY fever, whether it be low-grade (99.6\u030A F-100.3\u030A F/37.6\u030A C-37.9\u030A C) or high-grade (>101.3\u00B0F/38.3\u00B0C), please immediately contact our on-call physician [HERE]. \n<br /><br />Fever, especially one that is persistent or associated with pain or other concerning symptoms, could indicate an infection (e.g. pneumonia), leak, or another type of disease state. If this is the case, you should contact your surgeon at " + this.email + "E-MAIL</a>. or our on-call physician  " + this.phone_oncall + "On-CALL PHYSICIAN</a> OR call 911 or go to your local/nearest emergency department.\n<br /><br />Chills can also be indicative of infection and deserve the same attention.\n<br /><br />See Symptoms section for solutions.\n",
                show: false,
            },
            {
                title: '<strong>Haziness/grogginess</strong><p><i>It is normal to experience haziness and grogginess after surgery.</i></p>',
                description: "\n\t\t\tOpioid pain medications and general anesthesia having medium-term effects on your cognitive processes and awareness. These effects can often take days to weeks to subside as these medications are slowly eliminated from your body. \n<br /><br />Please do not drive if you have had opioid pain medication within the last 24 hours.\n<br /><br />If you feel as though your haziness/grogginess persists or worsens, please contact your surgeon at " + this.email + "E-MAIL</a>.\n\n\n\t\t",
                show: false,
            },
            {
                title: "<strong>Heartburn - intermittent (Less urgent)</strong><p><i>Easily treatable with antacids.</i></p>",
                description: "\n\t\tIf you are experiencing heartburn, you can take an antacid that was prescribed to you by your surgeon.\n<br /><br />If you are experiencing new heartburn-like symptoms but your pain is not going away with antacids, you may be having a heart attack (see Heart/Chest pain section for more information regarding whether your signs and symptoms could represent a possible heart attack).\n<br /><br />If you think you are having a heart attack, you should take 325 mg of aspirin and either call 911 or go to your local/nearest emergency department.\n\n\t\t",
                show: false,
            },
            {
                title: '<strong>Incisional symptoms (other than pain)</strong><p><i>Normal to be slightly red around the edges.</i></p>',
                description: "\n\t\t\tIt is normal for your incisions to be slightly red and firm along their edges. It is also normal for there to be a minimal amount of clear or red-tinged fluid coming from your wounds. These signs should improve with time.\n\n\t\t\t<br /><br />If these incisional signs persist or worsen, please contact your surgeon.\n\n\t\t",
                show: false,
            },
            {
                title: "<strong>Nausea/vomiting</strong><p><i>Nausea and vomiting are common after surgery.</i></p>",
                description: "\n\t\tNausea and vomiting are common for a brief period of time after your surgery. This can be due to either the anesthetic agents or the opioid pain medication that were given to you.\n\n<br /><br />If your nausea/vomiting persists or worsens, please contact your surgeon.\n",
                show: false,
            },
            {
                title: '<strong>Pain – adequately relieved with medication</strong><p><i>It is normal to experience pain after surgery.</i></p>',
                description: "\n\t\tYou will likely have pain around your incision sites, joint pain with movement, and general dull pain coming from your belly. Your pain should lessen each day as you recover and should be adequately controlled with either your prescription opioid pain medication or non-opioid pain medication.\n\n\t\t<br /><br />It is important to understand that pain medication will help alleviate pain, but it will not make you pain free.\n\n\t\t<br /><br />If you return home with a prescription for opioid pain medication, we strongly encourage you to refrain from using this if your pain can be adequately controlled with non-opioid pain medication. Instead, take acetaminophen and/or ibuprofen and assess how well these medications alleviate your pain.* Only resort to opioid pain medication if acetaminophen and/or ibuprofen provide inadequate pain relief. \n\t\t<br /><br />If you are taking opioid pain medication, we urge you to wean off of this as soon as possible.\n\t\t<br /><br />Take your pain medication as prescribed by your attending surgeon.** Do not increase the frequency of your doses or the amount you take for any one dose. Additionally, you should only take pain medication <i>if you are experiencing pain.</i>\n\t\t<br /><br />If you find yourself without much pain but still have prescription pain medication remaining, please do not feel obligated to finish your prescription. In fact, we encourage you not to use this unused medication if you do not feel you need it. Instead, please exercise responsibility and properly dispose of these controlled and potentially addictive medications (See Disposal of opioid pain medications in our At Home section).\n\t\t<br /><br />Please do not drive if you have had opioid pain medication within the last 24 hours.\n\t\t<br /><br />If your pain persists or worsens, please contact your surgeon.\n\t\t<br /><br />If your pain becomes severe or changes in quality, contact your surgeon and either call 911 or go to your local/nearest emergency department depending on how you feel.\n\t\t<i><br /><br />* Unless contraindicated, you will be able to take acetaminophen and ibuprofen each three times a day. A good strategy is to take one of them every 3 to 4 hours so that you are continuously receiving a non-opioid form of pain medication.\n\t\t<br /><br />** Please do not take prescription or non-prescription pain medications that have not been approved by your surgeon.</i>\n\n\t\t",
                show: false,
            },
            {
                title: "<strong>Right shoulder pain</strong><p><i> This is a normal consequence of the gas that was pumped into your belly for your surgery.</i></p>",
                description: "\n\t\tRight shoulder pain is normal after minimally invasive abdominal surgery and is a consequence of the gas that was pumped into your belly for the procedure. This pain will disappear on its own with time, but walking will hasten this process.\n<br /><br />Right shoulder pain from the gas that was pumped into your belly will be constant in duration. If you have shoulder pain that is new or accompanied by chest pain or other symptoms (strange or fast heart rhythm, nausea/vomiting, pain in other areas [jaw, back, stomach, neck, or arms], difficulty breathing, lightheadedness, or sweating; see Heart/Chest pain in our Abnormal Symptom section for a more thorough description), you may be having a heart attack. If you think you are having a heart attack, you should take 325 mg of aspirin and either call 911 or go to your local/nearest emergency department.\n\t<br /><br />If your right shoulder pain does not improve with time or is getting more severe, please contact your surgeon.\n\n\t\t",
                show: false,
            }, {
                title: "<strong>Sore throat</strong> <p><i>This is normal and was likely caused by the breathing tube that was used during your procedure.</i></p>",
                description: "This is likely a result of the breathing tube that was placed down your throat during surgery. This pain will go away with time, but lozenges can be used to alleviate this soreness.\n<br /><br />If your sore throat persists or worsens, please contact your surgeon.\n",
                show: false,
            }
        ];
        this.symptoms = [
            {
                dropdown: false,
                title: '<strong>Any concerning symptoms</strong><p><i>You know your body better than anyone else.</i></p>',
                description: "\n\t\t\tYou know your body better than anyone else. If you ever feel that something is just not right, contact your surgeon at " + this.email + "E-MAIL</a>. or our on-call physician  " + this.phone_oncall + "On-CALL PHYSICIAN</a> and either call 911 or go to your local/nearest emergency department depending on how you feel.\n\n\t\t",
                show: false,
            },
            {
                dropdown: false,
                title: "<strong>Arm Pain – See Heart/Chest pain</strong>",
                description: "",
                show: false,
            }, {
                dropdown: false,
                title: "<strong>Bleeding – See Incisional changes</strong>",
                description: "",
                show: false,
            }, {
                dropdown: false,
                title: "<strong>Bruising (Less Urgent) – See Incisional changes</strong> ",
                description: "",
                show: false,
            },
            {
                dropdown: false,
                title: '<strong>Bloating (Less urgent)</strong><p><i>This is often a consequence of the constipation that patients experience after surgery.</i></p>',
                description: "\n\t\tThis is often a consequence of the constipation that patients experience after surgery. Postoperative constipation is caused by opioid pain medication, general anesthesia, and the surgery itself. Typically, your bloating will go away as you start to have bowel movements.\n\t\t<br /><br />If your bloating persists or worsens, please contact your surgeon at " + this.email + "E-MAIL</a>.\n\n\t\t",
                show: false,
            },
            {
                dropdown: false,
                title: '<strong>Constipation (Less urgent)</strong><p><i> This is normal and can last a few weeks. However, there are remedies.</i></p>',
                description: "\n\t\tOpioid pain medications and general anesthesia slow down our intestines. Therefore, it is normal for you to have trouble passing gas or having a bowel movement after surgery.\n<br /><br />Adequate hydration and walking are two easy options to help fix this. Consuming foods rich in fiber and decreasing your intake of opioid pain medication can also help alleviate constipation. However, taking laxatives (e.g magnesium hydroxide, magnesium citrate, psyllium, polyethylene glycol, docusate sodium, or mineral oil) is the most effective solution to preventing and treating constipation.\n<br /><br />To ensure bowel regularity, laxatives should be taken whenever you are taking opioid pain medication and NOT just when you are constipated. In other words, they are most effective if they are taken before you experience constipation. Therefore, please take laxatives as prescribed by your surgeon when taking opioid pain medication. You should also remember that you should try non-opioid pain medication, such as acetaminophen or ibuprofen, for pain relief before using opioid pain medication.*\n<br /><br />If you find that your stools have become too soft, simply discontinue your laxative use.\n\n<br /><br />Please drink water periodically throughout the day. Drinking prune juice mixed with water can also be helpful.\n<br /><br />Suppositories or enemas are other options.\n<br /><br />Bloating can be due to your constipation. It can also be due to a new intolerance to dairy products.\n<br /><br />If your constipation/bloating persists or worsens (e.g. if you have not had a bowel movement for four days), please contact your surgeon at " + this.email + "E-MAIL</a>.\n<br /><br /><i>*If you can tolerate your pain without using opioid pain medication, we encourage you to avoid opioids as this will enhance your recovery.</i>\n\n\n\n\t\t",
                show: false,
            },
            {
                dropdown: false,
                title: '<strong>Dehydration (less urgent)</strong><p><i>Dehydration can result in any of the following signs or symptoms</i></p>',
                description: "\n\t\t\t<ul class=\"marginHeading\"><li><b>Dark urine (less urgent to urgent): </b><i>Typically the result of dehydration but may indicate another problem.</i>\n\t\t\t<br /><br />Dark urine is typically a sign of dehydration. You should stay adequately hydrated and urinate clear yellow urine at least four times each day after your procedure. If your urine is darker in color or if you find yourself urinating less frequently or in smaller volumes, you should try to consume more water (10 glasses of water each day) before contacting your surgeon. \n\n\t\t\t<br /><br />Dark urine can also be a sign of a retained gallstone in either your cystic or common bile duct. If you are staying adequately hydrated and are still producing dark urine, you should contact your surgeon at " + this.email + "E-MAIL</a>. or our on-call physician  " + this.phone_oncall + "On-CALL PHYSICIAN</a>. A retained gallstone can also present with pale-colored stools, yellowing of the eyes and skin (i.e. jaundice), nausea and vomiting, and pain in the upper right portion of your belly.\n\n<br /><br />The best way to know you are getting enough fluid is to check and make sure your urine is clear.\n\t</li><br />\n\t<li><b>Decreased urine output:</b><i>Typically the result of dehydration.</i>\n\t<br /><br />Decreased urine output is typically a sign of dehydration. You should stay adequately hydrated and urinate clear yellow urine at least four times each day after your procedure. If you are urinating less frequently or in smaller volumes or find your urine to be darker in color, you should try to consume more water (10 glasses of water each day) before contacting your surgeon.\n<br /><br />The best way to know you are getting enough fluid is to check and make sure your urine is clear.\n</li><br />\n<li><b>Dry mouth:</b><i> Typically the result of dehydration.</i>\n<br /><br />Dry mouth is typically a sign of dehydration. You should stay adequately hydrated and urinate clear yellow urine at least four times each day after your procedure. If you have a dry mouth, you should try to consume more water (10 glasses of water each day) before contacting your surgeon.\n<br /><br />The best way to know you are getting enough fluid is to check and make sure your urine is clear.\n</li><br />\n<li>\n<b>Headache \u2013 light to moderate (Non-urgent):</b><i> Typically the result of dehydration.</i>\n<br /><br />\nHeadaches are typically caused by dehydration. You should stay adequately hydrated and urinate clear yellow urine at least four times each day after your procedure. You should try to consume more water (10 glasses of water each day) before contacting your surgeon.\n<br /><br />If your headache becomes more severe, painful, or changes in quality, you should call 911 or go to your local/nearest emergency department.\n\n</li><br />\n<li><b>Lightheaded/dizzy (less urgent to urgent):</b><i> Typically the result of dehydration but may indicate another problem.</i>\n<br /><br />If you find yourself to be dizzy when you stand up or your mouth is dry, this is most likely a sign of dehydration. However, this may indicate something more serious.\n\n<br /><br />You should try to drink 10 glasses of water each day. If you think you are adequately hydrated and you still feel dizzy or you are having low urine output, please let your surgeon know.\n\n<br /><br />The best way to know you are getting enough fluid is to check and make sure your urine is clear.\n\n<br /><br />If you also notice that your heart is racing, beating abnormally or you have other significant concerns, please contact your surgeon " + this.phone_oncall + "here</a> and either call 911 or go to your local/nearest emergency department if you think seeking immediate medical attention is more appropriate.\n\n<br /><br />If you are having trouble maintaining your balance, please contact your surgeon.\n\n<br /><br />IMPORTANT: If you suddenly feel lightheaded/dizzy and if your skin is losing color, please call 911 or go to your local/nearest emergency department.\n</li>\n</ul>\n\n\n\n\t\t",
                show: false,
            },
            { dropdown: false,
                title: '<strong>Depression/anxiety (Urgent)</strong><p><i>Never feel ashamed to admit this.</i></p>',
                description: "\n\t\t\tIf you are experiencing overwhelming anxiety or sadness and feel as though your life is not worth living, please call 911 or go to your local/nearest emergency department.\n\n\t\t",
                show: false,
            },
            {
                dropdown: false,
                title: '<strong>Diarrhea/urgency (Less urgent)</strong><p><i> Can be common after cholecystectomy and will typically resolve within days to weeks.</i></p>',
                description: "\n\t\tDiarrhea after cholecystectomy is common and will typically resolve within days to weeks. Occasionally, diarrhea after surgery can be a consequence of your diet. For example, you may find that fatty and spicy foods no longer agree with your digestive system. If you think this is the case, avoid these foods and contact your dietitian.\n\n<br /><br />Some patients also experience urgency to have a bowel movement soon after eating. Often, this will improve with time.\n\n<br /><br />If you have frequent loose stools, please increase your fluid intake (at least 10 glasses of water each day) to replace the water volume you have lost. \n\n<br /><br />Severe fluid loss can cause you to become lightheaded and dizzy when standing up from a seated position. If this occurs, please exercise caution. If you start to feel lightheaded or dizzy, please consume more water before contacting your surgeon.\n\n<br /><br />If your diarrhea persists or worsens and is impacting your quality of life, please contact your surgeon at " + this.email + "E-MAIL</a>.\n\n<br /><br />A small minority of patients who have had their gallbladder removed report having issues with chronic diarrhea. This is extremely rare, but there are medications that help control chronic diarrhea.\n\n<br /><br />Do not take medication to treat your diarrhea without first consulting with your surgeon.\n\n<br /><br />If there are changes to the quality of your stool/diarrhea (e.g. if it becomes darker in color or you can see bright red blood), please call 911 or go to your local/nearest emergency department.\n\t\t",
                show: false,
            }, {
                dropdown: false,
                title: "<strong>Fatigue/weakness (Less-urgent)</strong><p><i> Surgery is physically distressing to the body, and it is normal if it takes time to recover.</i></p>",
                description: "Any type of surgery, including minimally invasive surgery, is draining on your body. It is normal to feel weak and fatigued after surgery. It often takes 2 weeks to return to your normal baseline function, but some patients may require up to 6 weeks before they start feeling like themselves.\n<br /><br />If your fatigue persists or worsens, you should make sure you are giving yourself adequate hydration, food and nutrients, and sleep. If these efforts do not provide you with more energy and strength, please contact your surgeon at " + this.email + "E-MAIL</a>.\n<br /><br />If your fatigue/weakness is of sudden onset, please call 911 or go to your local/nearest emergency department.\n\n\n\n\t\t</p>",
                show: false,
            },
            {
                dropdown: false,
                title: "<strong>Fever/chills (Urgent)</strong><p><i> Although fever after surgery is quite common, ALL postoperative fevers should be immediately reported to a medical professional and may warrant medical attention.</i></p>",
                description: "Fever during the first few days after surgery is quite common and can be linked to small changes in your body, such as an accumulation of mucus in your lungs. However, should you develop ANY fever, whether it be low-grade (99.6\u030A F-100.3\u030A F/37.6\u030A C-37.9\u030A C) or high-grade (>101.3\u00B0F/38.3\u00B0C), please immediately contact your surgeon " + this.phone_oncall + "here</a> or our on-call physician " + this.phone_oncall + "On-CALL PHYSICIAN</a>. \n<br /><br />Fever, especially one that is persistent or associated with pain or other concerning symptoms, could indicate an infection (e.g. pneumonia), leak, or another type of disease state. If this is the case, you should contact your surgeon  at " + this.email + "E-MAIL</a> or our on-call physician " + this.phone_oncall + "On-CALL PHYSICIAN</a> OR call 911 or go to your local/nearest emergency department.\n<br /><br />Chills can also be indicative of infection and deserve the same attention.\n",
                show: false,
            }, {
                dropdown: false,
                title: "<strong>Haziness/grogginess (Non-urgent)</strong><p><i> It is normal to experience haziness and grogginess after surgery.</i></p>",
                description: "Opioid pain medications and general anesthesia having medium-term effects on your cognitive processes and awareness. These effects can often take days to weeks to subside as these medications are slowly eliminated from your body. \n<br /><br />Please do not drive if you have had opioid pain medication within the last 24 hours.\n<br /><br />If you feel as though your haziness/grogginess persists or worsens, please contact your surgeon at " + this.email + "E-MAIL</a>.\n",
                show: false,
            },
            {
                dropdown: false,
                title: '<strong>Headache – Severe (Urgent)</strong><p><i> This requires immediate medical attention. </i></p>',
                description: "If you have a severe headache \u2013 like no other headache that you have ever previously experience \u2013 and/or dizziness, please call 911 or go to your local/nearest emergency department.\n",
                show: false,
            }, {
                dropdown: false,
                title: "<strong>Heart/Chest pain (Urgent)</strong><p><i> Let’s decide whether or not your signs and symptoms are consistent with a heart attack. Remain calm as you read this section. If you feel you require immediate medical attention, please forego reading this section and call 911 or go to your local/nearest emergency department.</i></p>",
                description: "\n\t\tIf you have chest pain or other symptoms (strange or fast heart rhythm, nausea/vomiting, pain in other areas [jaw, back, stomach, neck, or arms], difficulty breathing, lightheadedness, or sweating), you may be having a heart attack. If you think you are having a heart attack, you should take 325 mg of aspirin and either call 911 or go to your local/nearest emergency department.\n<ul class=\"marginHeading\">\n<li><b>Symptoms of a likely heart attack</b><br />\nIf you HAVE ANY the following symptoms call 911 or go to Emergency.\n<ul class=\"marginHeading\">\n<i>\n<li>Chest pain (persistent or comes-and-goes)</li>\n<li>Sensation of fullness/pressure/squeezing in your chest; commonly described as feeling like an \u201Celephant sitting on your chest\u201D </li>\n<li>Shortness of breath</li>\n<li>Irregular or unusual heart rhythm</li>\n<li>Dizziness/lightheadedness/fainting</li>\n<li>Sweating</li>\n</i>\n</ul>\n</li>\n<br />\n<li><b>Shoulder Pain- </b><br />\nIf you <b>ALSO</b> HAVE ANY of the following symptoms, please call 911 or go to your local/nearest emergency department.\n<br />If you do NOT have these, see <b>Right Shoulder Pain</b>.\n<ul class=\"marginHeading\">\n<i><li>Chest pain (persistent or comes and goes)</li>\n<li>Sensation of fullness/pressure/squeezing in your chest; commonly described as feeling like an \u201Celephant sitting on your chest\u201D </li>\n<li>Shortness of breath</li>\n<li>Irregular or unusual heart rhythm</li>\n<li>Dizziness/lightheadedness/fainting</li>\n<li>Sweating significant</li>\n</i>\n</ul>\n</li>\n\n<br />\n<li>\n<b>Chest pain</b> (persistent or comes and goes)<br />\nCall 911 or go to Emergency.\n</li><br />\n<li>\n<b>Chest fullness or pressure - </b><i>Sensation of fullness/pressure/squeezing in your chest; commonly described as feeling like an \u201Celephant sitting on your chest\u201D, (persistent or comes-and-goes).\n</i><br />Call 911 or go to Emergency.\n</li><br />\n<li>\n<b>Pain in other areas</b> (jaw, back, upper belly, neck, or arms) (persistent or comes and goes) If you <b>ALSO</b> HAVE ANY of the following symptoms then call 911 or go to Emergency.\n<br />If you do NOT have these, see <b>Pain</b>.\n<ul class=\"marginHeading\">\n<i>\n<li>Chest pain (persistent or comes and goes) - most common symptom</li>\n<li>Sensation of fullness/pressure/squeezing in your chest; commonly described as feeling like an \u201Celephant sitting on your chest\u201D </li>\n<li>Shortness of breath (even without chest pain)</li>\n<li>Irregular or unusual heart rhythm</li>\n<li>Dizziness/lightheadedness/fainting</li>\n<li>Sweating</li>\n</i>\n</ul>\n</li>\n</ul>\n\t\t",
                show: false,
            },
            {
                dropdown: false,
                title: "<strong>Heartbeat - Irregular (Urgent)</strong><p><i> Notable changes in how your heart is beating likely warrants prompt medical attention.</i></p>",
                description: "\n\t\tIf you feel as though your heart is racing or beating funny, this could indicate that you are experiencing an arrhythmia.  If you do not have a history of arrhythmia and this is a new symptom for you, call 911 or go to your local/nearest emergency department. ",
                show: false,
            },
            {
                dropdown: false,
                title: "<strong>Heartburn - persistent (Less-urgent to Urgent)</strong><p><i> This could still be heartburn but could possibly indicate a problem more severe than heartburn and warrants immediate medical attention.</i></p>",
                description: "\n\n\t\tIf you are experiencing heartburn, you can take an antacid that was prescribed to you by your surgeon.\n<br /><br />If you are experiencing new heartburn-like symptoms but your pain is not going away with antacids, you may be having a heart attack (see Heart/Chest pain section for more information regarding whether your signs and symptoms could represent a possible heart attack).\n<br /><br />If you think you are having a heart attack, you should take 325 mg of aspirin and either call 911 or go to your local/nearest emergency department.\n",
                show: false,
            },
            {
                dropdown: false,
                title: "<strong>Incisional changes (Urgent)</strong><p><i> Certain incisional signs and symptoms may warrant prompt medical attention.</i></p>",
                description: "<ul class=\"marginHeading\">\n\t\t<li>\n\t\tIt is normal for your incisions to be slightly red and firm along their edges. These signs should improve with time. If this <b>redness starts to spread</b> or you notice <b>increased swelling</b>, however, you may have an infection. Other color changes may also indicate an infection.\n\t\t</li><br />\n\t\t<li>\nIt is normal for there to be a minimal amount of clear or red-tinged fluid coming from your wounds. This should improve with time. If the <b>drainage</b> from your wound <b>starts to smell foul</b> or has a <b>cloudy or pus-like appearance, </b>however, you may have an infection.\n</li><br />\n<li>\nIt is normal for your incisions to have pain and tenderness. This should improve with time. If any of your incisions start to <b>increase in pain and tenderness,</b> however, you may have an infection.\n<br />\n<li>\nIt is normal for your incisions to feel slightly warm. This should improve with time. If any of your incisions start to <b>increase in warmth</b>, however, you may have an infection.\n<br />\nTRIAGE: If you have two or more of the aforementioned symptoms OR if you have just one symptom AND a <b>fever</b> or <b>chills</b>, this increases the likelihood that you have an infection. \n<br />\nIf you have ANY of the aforementioned symptoms, including fever or chills, please contact your surgeon and go to your local/nearest emergency department.\n\n</li><br />\n<li>\nIt is normal for there to be a minimal amount of clear or red-tinged fluid coming from your wounds. This should improve with time. If one or more of your incisions is <b>bleeding through multiple bandages</b> and producing more than a minimal amount of clear or red-tinged drainage, please contact your physician " + this.phone_oncall + "On-CALL PHYSICIAN</a> or go to your local/nearest emergency department if you require immediate medical attention.\n<br />\n</li><br />\nIf you are <b>bleeding</b> and <b>feel lightheaded or dizzy</b>, please call 911 or go to your local/nearest emergency department.\n\n</ul>\n\n\t\t",
                show: false,
            }, {
                dropdown: false,
                title: "<strong>Leg/calf swelling (Urgent)</strong><p><i>Leg/calf swelling likely indicates that you have a blood clot and require immediate medical attention.</i></p>",
                description: "If you notice swelling, tenderness, redness, increased temperature, or pain with use of one of your legs/calf muscles, you may have a blood clot in one of your legs. These symptoms typically occur in only one leg, but it is possible for it to occur in both calves. If you have ANY of these signs or symptoms, please call 911 or go to your local/nearest emergency department.\n\t\t",
                show: false,
            },
            {
                dropdown: false,
                title: "<strong>Nausea/vomiting (Urgent)</strong><p><i> Persistent vomiting should be reported to your surgeon.</i></p> ",
                description: "\n\t\tIf you are unable to keep liquids down or have been vomiting multiple times per day or on back-to-back days, please contact your surgeon  at " + this.email + "E-MAIL</a>. You may have a problem with allowing food to pass. \n\n\t<br /><br />If you vomit bright red blood or a dark brown substance, please call 911 or go to your local/nearest emergency department.\n\n\n\t\t",
                show: false,
            }, {
                dropdown: true,
                title: "<strong>Pain – adequately relieved with medication (Non-urgent)</strong><p><i> It is normal to experience pain after surgery.</i></p>",
                description: [
                    {
                        show: false,
                        title: "Brief Version:",
                        desc: "Pain will most commonly present at your incision sites and in the upper right portion of your belly where you had your gallbladder removed. This is <b>normal</b>. You should take the pain medications prescribed by your attending surgeon if they are needed. You can also try placing a heating pack on top of the area of your belly that has the most pain."
                    },
                    {
                        show: false,
                        title: "Detailed Version:",
                        desc: "You will likely have pain around your incision sites, joint pain with movement, and general dull pain coming from your belly. Your pain should lessen each day as you recover and should be adequately controlled with either your prescription opioid pain medication or non-opioid pain medication.\n\n<br /><br />It is important to understand that pain medication will help alleviate pain, but it will not make you pain free.\n\n<br /><br />If you return home with a prescription for opioid pain medication, we strongly encourage you to refrain from using this if your pain can be adequately controlled with non-opioid pain medication. Instead, take acetaminophen and/or ibuprofen and assess how well these medications alleviate your pain.* Only resort to opioid pain medication if acetaminophen and/or ibuprofen provide inadequate pain relief. \n<br /><br />If you are taking opioid pain medication, we urge you to wean off of this as soon as possible.\n<br /><br />Take your pain medication as prescribed by your attending surgeon.** Do not increase the frequency of your doses or the amount you take for any one dose. Additionally, you should only take pain medication <i>if you are experiencing pain</i>.\n<br /><br />If you find yourself without much pain but still have prescription pain medication remaining, please do not feel obligated to finish your prescription. In fact, we encourage you not to use this unused medication if you do not feel you need it. Instead, please exercise responsibility and properly dispose of these controlled and potentially addictive medications (See Disposal of opioid pain medications in our At Home section).\n<br /><br />Please do not drive if you have had opioid pain medication within the last 24 hours.\n<br /><br />If your pain persists or worsens, please contact your surgeon.\n<br /><br />If your pain becomes severe or changes in quality, contact your surgeon and either call 911 or go to your local/nearest emergency department depending on how you feel.\n<br /><br /><i>* Unless contraindicated, you will be able to take acetaminophen and ibuprofen each three times a day. A good strategy is to take one of them every 3 to 4 hours so that you are continuously receiving a non-opioid form of pain medication.\n<br /><br />** Please do not take prescription or non-prescription pain medications that have not been approved by your surgeon.</i>"
                    }
                ],
                show: false,
            }, {
                dropdown: false,
                title: "<strong>Pain – not adequately relieved with medication (Urgent)</strong><p><i> It is normal to experience pain after surgery, but this pain should be acceptable with the help of medication. Pain not adequately relieved with medication requires immediate medical attention.</i></p>",
                description: "\n\n\t\t<ul class=\"marginHeading\">\n\t\t<li>Pain is your body\u2019s natural way of telling you something is wrong and that you need to take care of yourself. So, while you should anticipate experiencing some pain after surgery, you should not ignore changes in your pain or an increase in its intensity over time.</li>\n\n<br /><li>If your pain is new and severe or sharp in nature (or has recently changed in quality), getting worse in severity, and lasting several hours, you should contact your surgeon  at " + this.phone_office + "PHYSICIAN\u2019S OFFICE</a>.  If your pain is associated with a fever (>101.3\u030A F/38.5\u030A C), you should also contact your surgeon  " + this.phone_oncall + "here</a>.</li>\n\n<br /><li>If you have pain and feel as though you have a <b>rigid abdomen</b> and <b>cannot tolerate any movement</b>, please call 911 or go to your local/nearest emergency department. Also, if you feel as though you <b>belly is swelling</b>, you should call 911 or go to your local/nearest emergency department.</li>\n",
                show: false,
            }, {
                dropdown: false,
                title: "<strong>Pus (Urgent) </strong><p><i> Abnormal sign that likes indicates an infection that requires prompt medical attention.</i></p>",
                description: "\n\t\tIf you see pus at any of your incision sites, this means that you have a surgical site infection (see Incisional changes section for more information regarding concerning signs and symptoms from your incisions). You should contact your surgeon  at " + this.email + "E-MAIL</a> and go to your local/nearest emergency department so that you can be examined. Your incision may need to be cleaned or you may require antibiotics. Although it is rare, you may need to return to the operating room for another operation.\n",
                show: false,
            },
            {
                dropdown: false,
                title: "<strong>Sore throat (Non-urgent)</strong><p><i>This is normal and was likely caused by the breathing tube that was used during your procedure.</i></p>",
                description: "Sometimes patients complain of throat discomfort after surgery. This is <b>normal</b> and likely a result of the breathing tube that was placed down your throat during surgery. This pain will go away with time, but lozenges can be used to alleviate this pain.",
                show: false,
            }, {
                dropdown: false,
                title: "<strong>Right shoulder pain (Less-urgent)</strong><p><i>This is a normal consequence of the gas that was pumped into your belly for your surgery.</i></p>",
                description: "Right shoulder pain is normal after minimally invasive abdominal surgery and is a consequence of the gas that was pumped into your belly for the procedure. This pain will disappear on its own with time, but walking will hasten this process.\n<br /><br />Right shoulder pain from the gas that was pumped into your belly will be constant in duration. If you have shoulder pain that is new or accompanied by chest pain or other symptoms (strange or fast heart rhythm, nausea/vomiting, pain in other areas [jaw, back, stomach, neck, or arms], difficulty breathing, lightheadedness, or sweating; see Heart/Chest pain in our Abnormal Symptom section for a more thorough description), you may be having a heart attack. If you think you are having a heart attack, you should take 325 mg of aspirin and either call 911 or go to your local/nearest emergency department.\n<br /><br />If your right shoulder pain does not improve with time or is getting more severe, please contact your surgeon. \n<br /><br />(PAI: I am not sure why there are so many versions of this circulating, but I kept it all here to use at your discretion. It might be wise for us to consult a cardiologist from BIDMC to see if they agree with our triage here as this is obviously their field of specialty.) \n\n\n",
                show: false,
            },
            {
                dropdown: false,
                title: "<strong>Shortness of breath (Urgent)</strong><p><i> Sudden shortness of breath without exertion requires immediate medical attention.</i></p>",
                description: "If you suddenly have difficulty breathing while at rest or while walking, you may have a blood clot that traveled to your lungs. You may also notice that one of your legs is swollen and, perhaps, tender to touch and in pain when you walk. If you are experiencing any of these signs or symptoms, please call 911 or go to your local/nearest emergency department.\n",
                show: false,
            },
            {
                dropdown: false,
                title: "<strong>Urination Inability (Urgent)</strong><p><i>This is abnormal and warrants immediate medical attention.</i></p> ",
                description: "If you are unable to urinate, please immediately go to your local/nearest emergency department. Although your ability to urinate freely is required prior to discharge, in rare circumstances you may have trouble urinating after you return home.\n\t\t",
                show: false,
            },
            {
                dropdown: false,
                title: "<strong>Urination (Less urgent)</strong><p><i> Certain changes associated with urination could indicate a urinary tract infection.</i></p>",
                description: "If you experience burning or pain with urination or notice any cloudiness in the quality of your urine, this may be a sign that you have a urinary tract infection. Foul smelling urine can also indicate a urinary tract infection. If you notice these signs and symptoms, please contact your surgeon at " + this.email + "E-MAIL</a> or your primary care physician.",
                show: false,
            }, {
                dropdown: false,
                title: "<strong>Yellowing of the skin along with possible pain in the upper belly area or darkened urine (Urgent)</strong>",
                description: "\n\t\tOccasionally after robotic cholecystectomy, patients can suffer from a retained gallstone that becomes stuck in the pathway, or duct, that normally allows bile to drain from your liver and into your gut. When this duct becomes obstructed and bile is no longer able to drain from your liver, it backs up and leaks into your circulatory system, causing a yellowing of your eyes and skin. This discoloration is reversible and is known as jaundice. You may also notice your urine to be darker in color.\n\n\t<br /><br />This presentation can also be associated with <b>pain the right upper portion of your belly</b>. Finally, depending on the location of the retained stone that is obstructing the normal drainage of bile from your liver to your gut, it is also possible to experience a distinct <b>gnawing upper belly pain</b> that can travel to your back. This pain can also be worse with eating and indicates possible obstruction of the duct that allows secretions from your pancreas to reach the food in your gut.\n\n<br /><br />You should immediately contact your surgeon " + this.phone_oncall + "here</a>. if you have any of these symptoms and either call 911 or go to your local/nearest emergency department.\n\n\n\t\t",
                show: false,
            }
        ];
        this.whatToDoIfMoreSymptomsOne = [{
                title: 'Temperature over 103°F/39°C',
                description: "<p>A <b>mild</b> fever after surgery is normal. But if this\n<b>high</b> fever condition continues for more than 24\nhours click " + this.phone_oncall + "here</a> for physician on call.</p>",
                show: false,
            },
            {
                title: 'Severe stomach pain',
                description: "<ul><li>Send text message to surgeon on call office <br>OR</li>\n\t\t<li>Tap call button to contact surgeon on call office immediately!</li>\n\t\t</ul>",
                show: false,
            },
            {
                title: 'Bleeding around sutures.',
                description: "<p></p>",
                show: false,
            },
            {
                title: 'Stomach swelling',
                description: "<p></p>",
                show: false,
            },
            {
                title: "Chills",
                description: "<p></p>",
                show: false,
            }];
        this.whatToDoIfMoreSymptomsTwo = [{
                title: 'Yellowing of the skin and white of your eyes',
                description: "<p></p>",
                show: false,
            },
            {
                title: 'Dark urine and pale stools',
                description: "<ul>\n\t\t<li>If temperature is below 96.5\u00B0F/35.8\u00B0C<br> Tap Call button to contact surgeon on call office immediately!</li>\n\t\t<li>If temperature normal, take hot drink, cover up, and relax</li>\n\t\t<li>Check temperature if chills continue</li>\n\t\t</ul>",
                show: false,
            },
            {
                title: 'Feeling blah',
                description: "<p></p>",
                show: false,
            },
            {
                title: 'No bowel moments',
                description: "<p></p>",
                show: false,
            },
            {
                title: 'No heartburn',
                description: "<ul>\n\t\t<li>If temperature is below 96.5\u00B0F/35.8\u00B0C<br> Tap Call button to contact surgeon on call office immediately!</li>\n\t\t<li>If temperature normal, take hot drink, cover up, and relax</li>\n\t\t<li>Check temperature if chills continue</li>\n\t\t</ul>",
                show: false,
            },
            {
                title: "Other",
                description: "<p></p>",
                show: false,
            }];
        this.navClassName = 'na';
        if (this.platform != 'mobileweb') {
            this.platform = 'web';
            this.toggleNav();
        }
        else {
            this.className = ' ';
        }
        this.whatTodoIf = 'normalSideEffects';
    }
    WhattodoifPage_1 = WhattodoifPage;
    /**
     * Method to scroll to top
     */
    WhattodoifPage.prototype.pageScroller = function () {
        //scroll to page top
        this.pageTop.scrollToTop();
    };
    WhattodoifPage.prototype.segmentChanged = function (id) {
        if (id == 2) {
            for (var i = 0; i < this.whatToDoIfNormalSideAffects.length; i++) {
                this.whatToDoIfNormalSideAffects[i].show = false;
            }
            this.pageTop.scrollToTop();
        }
        if (id == 1) {
            for (var k = 0; k < this.symptoms.length; k++) {
                this.symptoms[k].show = false;
            }
        }
    };
    WhattodoifPage.prototype.toggleNav = function () {
        if (this.navClassName == 'na') {
            this.navClassName = 'opennav';
        }
        else if (this.navClassName == 'opennav') {
            this.navClassName = 'na';
        }
    };
    WhattodoifPage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
    };
    WhattodoifPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    WhattodoifPage.prototype.getHtmlContentSymptoms = function (index) {
        return this.symptoms[index]['description'];
    };
    WhattodoifPage.prototype.getHtmlContent = function (index) {
        return this.whatToDoIfMoreSymptomsOne[index]['description'];
    };
    WhattodoifPage.prototype.getHtmlContentOfNormal = function (index) {
        return this.whatToDoIfNormalSideAffects[index]['description'];
    };
    WhattodoifPage.prototype.getHtmlContentOfSymptomsTwo = function (index) {
        return this.whatToDoIfMoreSymptomsTwo[index]['description'];
    };
    WhattodoifPage.prototype.activateItem = function (id) {
        // for(var i=0;i<this.what)
        if (this.whatToDoIfMoreSymptomsOne[id]['show'] === false) {
            this.whatToDoIfMoreSymptomsOne[id]['show'] = true;
        }
        else {
            this.whatToDoIfMoreSymptomsOne[id]['show'] = false;
        }
    };
    WhattodoifPage.prototype.activateItemsymptoms = function (id) {
        for (var i = 0; i < this.symptoms.length; i++) {
            if (id === i) {
                if (this.symptoms[id]['show'] === false) {
                    this.symptoms[id]['show'] = true;
                }
                else {
                    this.symptoms[id]['show'] = false;
                }
            }
            else {
                this.symptoms[i]['show'] = false;
            }
        }
    };
    WhattodoifPage.prototype.activateDetailItem = function (i, j) {
        for (var k = 0; k < this.symptoms[i]['description'].length; k++) {
            if (k === j) {
                if (this.symptoms[i]['description'][j]['show'] === false) {
                    this.symptoms[i]['description'][j]['show'] = true;
                }
                else {
                    this.symptoms[i]['description'][j]['show'] = false;
                }
            }
            else {
                this.symptoms[i]['description'][k]['show'] = false;
            }
        }
    };
    WhattodoifPage.prototype.getDetailHtmlContent = function (i, j) {
        console.log(this.symptoms[i]['description'][j]['desc']);
        return this.symptoms[i]['description'][j]['desc'];
    };
    WhattodoifPage.prototype.activateItemOfNormal = function (id) {
        for (var i = 0; i < this.whatToDoIfNormalSideAffects.length; i++) {
            if (id === i) {
                if (this.whatToDoIfNormalSideAffects[id]['show'] === false) {
                    this.whatToDoIfNormalSideAffects[id]['show'] = true;
                }
                else {
                    this.whatToDoIfNormalSideAffects[id]['show'] = false;
                }
            }
            else {
                this.whatToDoIfNormalSideAffects[i]['show'] = false;
            }
        }
    };
    WhattodoifPage.prototype.activateItemOfSymptomsTwo = function (id) {
        if (this.whatToDoIfMoreSymptomsTwo[id]['show'] === false) {
            this.whatToDoIfMoreSymptomsTwo[id]['show'] = true;
        }
        else {
            this.whatToDoIfMoreSymptomsTwo[id]['show'] = false;
        }
    };
    WhattodoifPage.prototype.ionViewDidEnter = function () {
        Object(__WEBPACK_IMPORTED_MODULE_3__assets_gtag__["a" /* googleAnalytics */])('whattodoif');
    };
    WhattodoifPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WhattodoifPage');
    };
    WhattodoifPage.prototype.getTabs = function () {
        this.tabs = this.httpService.getWhatToDoIfPagesTabs();
    };
    WhattodoifPage.prototype.goToProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__procedure_procedure__["a" /* ProcedurePage */]);
    };
    WhattodoifPage.prototype.gotToPreProcedure = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__preprocedure_preprocedure__["a" /* PreprocedurePage */]);
    };
    WhattodoifPage.prototype.gotToDuringProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__duringprocedure_duringprocedure__["a" /* DuringprocedurePage */]);
    };
    WhattodoifPage.prototype.goToRecoverPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__recovery_recovery__["a" /* RecoveryPage */]);
    };
    WhattodoifPage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__postprocedure_postprocedure__["a" /* PostprocedurePage */]);
    };
    WhattodoifPage.prototype.goToWhatIfPage = function () {
        this.navCtrl.push(WhattodoifPage_1);
    };
    WhattodoifPage.prototype.goToPeoplePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__people_people__["a" /* PeoplePage */]);
    };
    WhattodoifPage.prototype.gotToSuccessPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__success_success__["a" /* SuccessPage */]);
    };
    WhattodoifPage.prototype.gotoInsurancePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__insurancemessage_insurancemessage__["a" /* InsurancemessagePage */]);
    };
    WhattodoifPage.prototype.showTabs = function (Index) {
        this.index = Index;
    };
    WhattodoifPage.prototype.getContents = function (index) {
        console.log(this.menuContents);
    };
    WhattodoifPage.prototype.swipeEvent = function (event) {
        if (event.direction === 2) {
            this.swipeLeft();
        }
        else if (event.direction === 4) {
            this.swipeRight();
        }
    };
    WhattodoifPage.prototype.swipeLeft = function () {
        if (this.whatTodoIf == 'normalSideEffects') {
            this.whatTodoIf = 'symptoms';
            this.pageTop.scrollToTop(0);
        }
        else if (this.whatTodoIf == 'symptoms') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__success_success__["a" /* SuccessPage */]);
        }
    };
    WhattodoifPage.prototype.swipeRight = function () {
        if (this.whatTodoIf == 'normalSideEffects') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__postprocedure_postprocedure__["a" /* PostprocedurePage */]);
        }
        else if (this.whatTodoIf == 'symptoms') {
            this.whatTodoIf = 'normalSideEffects';
            this.pageTop.scrollToTop(0);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('pageTop'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]) === "function" && _a || Object)
    ], WhattodoifPage.prototype, "pageTop", void 0);
    WhattodoifPage = WhattodoifPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-whattodoif',template:/*ion-inline-start:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/whattodoif/whattodoif.html"*/'<ion-header>\n	<ion-navbar  color="primary"  hideBackButton="true">\n		<!-- <button ion-button menuToggle  *ngIf=\'platform === "mobileweb"\'>\n			<ion-icon name="menu"></ion-icon>\n		</button> -->\n		<!-- <ion-buttons left>\n			<button ion-button icon-only (click)="goBack()">\n				<ion-icon name="ios-arrow-back"></ion-icon>\n			</button>\n		</ion-buttons> -->\n		<ion-title  align-title="center">What To Do If</ion-title>\n		<ion-buttons right>\n			 \n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content (swipe)="swipeEvent($event)" #pageTop>\n	<div *ngIf=\'platform === "mobileweb" || platform ==="web"\' [ngClass]="navClassName==\'opennav\'?\'navopen\':\'na\'">\n		<div class="pagecontainer">\n			<div class="pagenav">\n				<ul>\n					<li (click)="goToProcedurePage()">\n				      <i class="icon"><img src="assets/imgs/open-book.svg" class="icon-default"><img src="assets/imgs/open-book-white.svg" class="icon-white"></i> \n				      <span class="menutext">About procedure</span>\n				     </li>\n				     <li (click)="gotToPreProcedure()">\n				      <i class="icon"><img src="assets/imgs/numbers.svg" class="icon-default"><img src="assets/imgs/numbers-white.svg" class="icon-white"></i> \n				      <span class="menutext">Pre-procedure</span>\n				     </li>\n				     <li (click)="gotToDuringProcedurePage()">\n				      <i class="icon"><img src="assets/imgs/sleeping.svg" class="icon-default"><img src="assets/imgs/sleeping-white.svg" class="icon-white"></i> \n				      <span class="menutext">Procedure</span>\n				     </li>\n				     <li (click)="goToRecoverPage()">\n				      <i class="icon"><img src="assets/imgs/eye-blocked.svg" class="icon-default"><img src="assets/imgs/eye-blocked-white.svg" class="icon-white"></i> \n				      <span class="menutext">Recovery</span>\n				     </li>\n				     <li (click)="goToPostProcedurePage()">\n				      <i class="icon"><img src="assets/imgs/home.svg" class="icon-default"><img src="assets/imgs/home-white.svg" class="icon-white"></i> \n				      <span class="menutext">At Home</span>\n				     </li>\n				     <li (click)="goToWhatIfPage()" class="active">\n				      <i class="icon"><img src="assets/imgs/question-mark.svg" class="icon-default"><img src="assets/imgs/question-mark-white.svg" class="icon-white"></i> \n				      <span class="menutext">What to do if</span>\n				     </li>\n				     <li (click)="gotToSuccessPage()">\n				      <i class="icon"><img src="assets/imgs/check-mark.svg" class="icon-default"><img src="assets/imgs/check-mark-white.svg" class="icon-white"></i> \n				      <span class="menutext">Success</span>\n				     </li>\n				     <li (click)="gotoInsurancePage()" class="pointer">\n										<i class="icon"><img src="assets/imgs/dollar-symbol.svg" class="icon-default"><img src="assets/imgs/dollar-symbol-white.svg" class="icon-white"></i> \n										<span class="menutext">Insurance</span>\n									</li>\n				     <li (click)="toggleNav()" class="menucollapse"><i class="icon"><img src="assets/imgs/chevron-left.svg"></i> <span class="menutext">Collapse Menu</span></li>\n				</ul>\n			</div>\n			<div class="pagecontent">\n				<ion-grid>\n					<ion-row>\n						<ion-col align-self-stretch [ngClass]="className==\'contentwrap\'?\'contentwrap\':\'na\'" class="content-area">\n							<!-- <div class="page-title">\n								<h2>What to do if</h2>\n								<ion-icon md="md-help" class="help-action"></ion-icon>\n							</div> -->\n							\n							<ion-segment mode="ios" [(ngModel)]="whatTodoIf" class="tabs-default">\n								<ion-segment-button value="normalSideEffects"  (click)="segmentChanged(1)">\n									Normal\n								</ion-segment-button>\n								<ion-segment-button value="symptoms" (click)="segmentChanged(2)">\n									Symptoms\n								</ion-segment-button>\n								<!-- <ion-segment-button value="moreSymptomsOne">\n									More symptoms 1\n								</ion-segment-button>\n								<ion-segment-button value="moreSymptomsTwo">\n									More symptoms 2\n							 	</ion-segment-button> -->\n							</ion-segment>\n\n							<div [ngSwitch]="whatTodoIf">\n								<div *ngSwitchCase="\'normalSideEffects\'">\n									<div *ngFor="let normalSideAffects of whatToDoIfNormalSideAffects;let k=index" class="pointer accordion-item"  [ngClass]="normalSideAffects.show==true?\'titleContainer\':\'na\'">\n										<div class="item-content breadcrumb" >\n											<h4 (click)="activateItemOfNormal(k)" class="accr-title">\n												<!-- {{normalSideAffects.title}} -->\n												<div  [innerHTML]="normalSideAffects.title"></div>\n												<span class="arr-icon">\n													<ion-icon *ngIf="!normalSideAffects.show" name="ios-arrow-down"></ion-icon>\n													<ion-icon *ngIf="normalSideAffects.show" name="ios-arrow-up"></ion-icon>\n												</span>\n											</h4>\n											<div class="accr-content" [innerHTML]="getHtmlContentOfNormal(k)" *ngIf="normalSideAffects.show"></div>\n										</div>\n									</div>	\n								</div>\n\n								<div *ngSwitchCase="\'symptoms\'">\n									\n									<div *ngFor="let symptom of symptoms;let l=index" class="pointer accordion-item"  [ngClass]="symptom.show==true?\'titleContainer\':\'na\'">\n\n										<div class="item-content breadcrumb" *ngIf="symptom.dropdown == false">\n\n											<h4 (click)="activateItemsymptoms(l)" class="accr-title">\n												<!-- {{symptom.title}} -->\n												<div  [innerHTML]="symptom.title"></div>\n												<span class="arr-icon" *ngIf="symptom.description!=\'\'">\n													<ion-icon *ngIf="!symptom.show" name="ios-arrow-down"></ion-icon>\n													<ion-icon *ngIf="symptom.show" name="ios-arrow-up"></ion-icon>\n												</span>\n											</h4>\n											<div class="accr-content" [innerHTML]="getHtmlContentSymptoms(l)" *ngIf="symptom.show && symptom.description!=\'\'"></div>\n										</div>\n\n\n\n										<div class="item-content breadcrumb" *ngIf="symptom.dropdown == true">\n									<h4 (click)="activateItemsymptoms(l)" class="accr-title">\n										<div  [innerHTML]="symptom.title"></div>\n										<span class="arr-icon">\n											<ion-icon *ngIf="!symptom.show" name="ios-arrow-down"></ion-icon>\n											<ion-icon *ngIf="symptom.show" name="ios-arrow-up"></ion-icon>\n										</span>\n									</h4>\n									\n									<div *ngFor="let itemDet of symptom.description;let j=index" class="pointer accordion-item accordion-multi">\n										<div class="item-content breadcrumb" *ngIf="symptom.show">\n									<h4 (click)="activateDetailItem(l, j)" class="accr-title">\n										<b><u>{{itemDet.title}}</u></b>\n										<span class="arr-icon">\n											<ion-icon *ngIf="!itemDet.show" name="ios-arrow-down"></ion-icon>\n											<ion-icon *ngIf="itemDet.show" name="ios-arrow-up"></ion-icon>\n										</span>\n									</h4>\n									<div class="accr-content" [innerHTML]="getDetailHtmlContent(l,j)" *ngIf="itemDet.show"></div>\n										</div>\n									</div>\n								</div>\n\n\n									</div>					\n								</div>\n\n								<div *ngSwitchCase="\'moreSymptomsOne\'">\n									<div *ngFor="let weekBeforeItems of whatToDoIfMoreSymptomsOne;let i=index" class="pointer accordion-item"  [ngClass]="weekBeforeItems.show==true?\'titleContainer\':\'na\'">\n										<div class="item-content breadcrumb">\n											<h4 (click)="activateItem(i)" class="accr-title">\n												{{weekBeforeItems.title}}\n												<span class="arr-icon">\n													<ion-icon *ngIf="!weekBeforeItems.show" name="ios-arrow-down"></ion-icon>\n													<ion-icon *ngIf="weekBeforeItems.show" name="ios-arrow-up"></ion-icon>\n												</span>\n											</h4>\n											<div class="accr-content" [innerHTML]="getHtmlContent(i)" *ngIf="weekBeforeItems.show"></div>\n										</div>\n									</div>					\n								</div>\n\n								<div *ngSwitchCase="\'moreSymptomsTwo\'">\n									<div *ngFor="let weekBeforeItemsTwo of whatToDoIfMoreSymptomsTwo;let j=index" class="pointer accordion-item">\n										<div class="item-content breadcrumb">\n											<h4 (click)="activateItemOfSymptomsTwo(j)" class="accr-title">\n												{{weekBeforeItemsTwo.title}}\n												<span class="arr-icon">\n													<ion-icon *ngIf="!weekBeforeItemsTwo.show" name="ios-arrow-down"></ion-icon>\n													<ion-icon *ngIf="weekBeforeItemsTwo.show" name="ios-arrow-up"></ion-icon>\n												</span>\n											</h4>\n											<div class="accr-content" [innerHTML]="getHtmlContentOfSymptomsTwo(j)" *ngIf="weekBeforeItemsTwo.show"></div>\n										</div>\n									</div>	\n								</div>\n							</div>\n\n							<div class="arrownav">\n								<ion-icon name="ios-arrow-back" (click)="swipeRight()" class="iconarrow arrow-left"></ion-icon>\n								<ion-icon name="ios-arrow-forward" (click)="swipeLeft()" class="iconarrow arrow-right"></ion-icon>\n							</div>\n						</ion-col>\n\n					</ion-row>\n				</ion-grid>\n			</div>\n		</div>\n	</div>\n\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar no-border-top color="dark">\n		<ion-segment color="light">\n			<ion-segment-button value="friends" (click)="goToHomePage()">\n				<ion-icon name="home"></ion-icon><br>\n			</ion-segment-button>\n			<ion-segment-button value="people" (click)="goToPeoplePage()">\n				<ion-icon name="people"></ion-icon><br>\n			</ion-segment-button>\n			<!-- <ion-segment-button value="calendar" (click)="goToPostProcedurePage()">\n				At Home\n			</ion-segment-button> -->\n		</ion-segment>\n	</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/whattodoif/whattodoif.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_httpprovider_httpprovider__["a" /* HttpproviderProvider */]]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_httpprovider_httpprovider__["a" /* HttpproviderProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_httpprovider_httpprovider__["a" /* HttpproviderProvider */]) === "function" && _d || Object])
    ], WhattodoifPage);
    return WhattodoifPage;
    var WhattodoifPage_1, _a, _b, _c, _d;
}());

//# sourceMappingURL=whattodoif.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeoplePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__procedure_procedure__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preprocedure_preprocedure__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__duringprocedure_duringprocedure__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recovery_recovery__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__success_success__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__whattodoif_whattodoif__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__postprocedure_postprocedure__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__assets_gtag__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__insurancemessage_insurancemessage__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












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
        Object(__WEBPACK_IMPORTED_MODULE_10__assets_gtag__["a" /* googleAnalytics */])('people');
    };
    PeoplePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PeoplePage');
    };
    PeoplePage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
    };
    PeoplePage.prototype.goToProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__procedure_procedure__["a" /* ProcedurePage */]);
    };
    PeoplePage.prototype.gotToPreProcedure = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__preprocedure_preprocedure__["a" /* PreprocedurePage */]);
    };
    PeoplePage.prototype.gotToDuringProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__duringprocedure_duringprocedure__["a" /* DuringprocedurePage */]);
    };
    PeoplePage.prototype.goToRecoverPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__recovery_recovery__["a" /* RecoveryPage */]);
    };
    PeoplePage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__postprocedure_postprocedure__["a" /* PostprocedurePage */]);
    };
    PeoplePage.prototype.goToWhatIfPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__whattodoif_whattodoif__["a" /* WhattodoifPage */]);
    };
    PeoplePage.prototype.gotoInsurancePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__insurancemessage_insurancemessage__["a" /* InsurancemessagePage */]);
    };
    PeoplePage.prototype.gotToSuccessPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__success_success__["a" /* SuccessPage */]);
    };
    PeoplePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-people',template:/*ion-inline-start:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/people/people.html"*/'<ion-header>\n	<ion-navbar color="primary"  hideBackButton="true">\n		<button ion-button menuToggle  *ngIf=\'platform === "mobileweb"\'>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<!-- <ion-buttons left>\n			<button ion-button icon-only (click)="goBack()">\n				<ion-icon name="ios-arrow-back"></ion-icon>\n			</button>\n		</ion-buttons> -->\n		<ion-title  align-title="center">Your care team</ion-title>\n		<!-- <ion-buttons right>\n			<button ion-button icon-only>\n				<ion-icon name="ios-search"></ion-icon>\n			</button>\n		</ion-buttons> -->\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content (swipe)="swipeEvent($event)">\n	<div *ngIf=\'platform === "mobileweb" || platform ==="web"\' [ngClass]="navClassName==\'opennav\'?\'navopen\':\'na\'">\n		<div class="pagecontainer">\n			<div class="pagenav">\n				<ul>\n					<li (click)="goToProcedurePage()">\n						<i class="icon"><img src="assets/imgs/open-book.svg" class="icon-default"><img src="assets/imgs/open-book-white.svg" class="icon-white"></i> \n						<span class="menutext">About procedure</span>\n					</li>\n					<li (click)="gotToPreProcedure()">\n						<i class="icon"><img src="assets/imgs/numbers.svg" class="icon-default"><img src="assets/imgs/numbers-white.svg" class="icon-white"></i> \n						<span class="menutext">Pre-procedure</span>\n					</li>\n					<li (click)="gotToDuringProcedurePage()">\n						<i class="icon"><img src="assets/imgs/sleeping.svg" class="icon-default"><img src="assets/imgs/sleeping-white.svg" class="icon-white"></i> \n						<span class="menutext">Procedure</span>\n					</li>\n					<li (click)="goToRecoverPage()">\n						<i class="icon"><img src="assets/imgs/eye-blocked.svg" class="icon-default"><img src="assets/imgs/eye-blocked-white.svg" class="icon-white"></i> \n						<span class="menutext">Recovery</span>\n					</li>\n					<li (click)="goToPostProcedurePage()">\n						<i class="icon"><img src="assets/imgs/home.svg" class="icon-default"><img src="assets/imgs/home-white.svg" class="icon-white"></i> \n						<span class="menutext">At Home</span>\n					</li>\n					<li (click)="goToWhatIfPage()">\n						<i class="icon"><img src="assets/imgs/question-mark.svg" class="icon-default"><img src="assets/imgs/question-mark-white.svg" class="icon-white"></i> \n						<span class="menutext">What to do if</span>\n					</li>\n					<li (click)="gotToSuccessPage()">\n						<i class="icon"><img src="assets/imgs/check-mark.svg" class="icon-default"><img src="assets/imgs/check-mark-white.svg" class="icon-white"></i> \n						<span class="menutext">Success</span>\n					</li>\n					<li (click)="gotoInsurancePage()" class="pointer">\n										<i class="icon"><img src="assets/imgs/dollar-symbol.svg" class="icon-default"><img src="assets/imgs/dollar-symbol-white.svg" class="icon-white"></i> \n										<span class="menutext">Insurance</span>\n									</li>\n					<li (click)="toggleNav()" class="menucollapse"><i class="icon"><img src="assets/imgs/chevron-left.svg"></i> <span class="menutext">Collapse Menu</span></li>\n				</ul>\n			</div>\n			<div class="pagecontent wrapindent">\n				<ion-grid>\n					<ion-row>\n						<ion-col align-self-stretch [ngClass]="className==\'contentwrap\'?\'contentwrap\':\'na\'" class="content-area">\n							<!-- <div class="page-title">\n								<h2>Your care team</h2>\n								<ion-icon md="md-help" class="help-action"></ion-icon>\n							</div> -->\n\n							<div class="page-content font-lg">\n\n								<p>\n								<b>Procedure Physicians: </b><br /> Dr. Daniel B. Jones, Dr. Souheil Adra, Dr. Morgan Bresnick, Dr. Rahul Gupta<br />\n								<p>\n								<b>Physician Offices:</b><br />\n								BOSTON:<br />\n								Telephone: 617-667-2845<br />\n								Off-Hour calls: 617-667-7000 (main switchboard, ask for physician on call)<br /><br />\n								MILTON:<br />\n								Telephone: 617 313 1440<br /><br />\n\n								Email: <a href="mailto:wls@bidmc.harvard.edu">wls@bidmc.harvard.edu</a><br />\n							BIDMC Patientsite users can message their physicians directly.</p>\n								<br />\n								<b>Hospitals:</b><br />\n\n								Beth Israel Deaconess Medical Center- Boston \n								<br />330 Brookline Avenue <br />\n								Boston, MA 02215<br />\n\n								<i>3rd floor Shapiro Clinical Center</i><br /><br />\n\n								Beth Israel Deaconess Medical Center- Milton<br />\n\n								199 Reedsdale Road,<br />\n\n								Milton, MA 02186<br />\n\n								<i>Center for Specialty Care, Ground Floor</i>\n\n\n							</div>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n			</div>\n		</div>\n	</div>\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar no-border-top color="dark">\n		<ion-segment color="light">\n			<ion-segment-button value="friends" (click)="goToHomePage()">\n				<ion-icon name="home"></ion-icon><br>\n			</ion-segment-button>\n			<ion-segment-button value="people">\n				<ion-icon name="people"></ion-icon><br>\n			</ion-segment-button>\n			<!-- <ion-segment-button value="calendar" (click)="goToPostProcedurePage()">\n				At Home\n			</ion-segment-button> -->\n		</ion-segment>\n	</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/people/people.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], PeoplePage);
    return PeoplePage;
}());

//# sourceMappingURL=people.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = googleAnalytics;

function googleAnalytics(name) {
  gtag('event', 'screen_view', {screen_name: name})
}

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_people_people__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_messagetopatients_messagetopatients__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tableofcontents_tableofcontents__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_procedure_procedure__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_preprocedure_preprocedure__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_duringprocedure_duringprocedure__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_postprocedure_postprocedure__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_recovery_recovery__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_success_success__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_whattodoif_whattodoif__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_whydothis_whydothis__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_insurancemessage_insurancemessage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_insurancemessageafterpatientsmessage_insurancemessageafterpatientsmessage__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_messagetophysician_messagetophysician__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_pagenavigator_pagenavigator__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_httpprovider_httpprovider__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











/**
  This section includes all the pages related to procedures
**/













// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';
// import { InAppBrowser } from '@ionic-native/in-app-browser';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                // ContactPage,
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_procedure_procedure__["a" /* ProcedurePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_preprocedure_preprocedure__["a" /* PreprocedurePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_duringprocedure_duringprocedure__["a" /* DuringprocedurePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_postprocedure_postprocedure__["a" /* PostprocedurePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_recovery_recovery__["a" /* RecoveryPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_success_success__["a" /* SuccessPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_whattodoif_whattodoif__["a" /* WhattodoifPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_whydothis_whydothis__["a" /* WhydothisPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tableofcontents_tableofcontents__["a" /* TableofcontentsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_people_people__["a" /* PeoplePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_messagetopatients_messagetopatients__["a" /* MessagetopatientsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_insurancemessage_insurancemessage__["a" /* InsurancemessagePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_insurancemessageafterpatientsmessage_insurancemessageafterpatientsmessage__["a" /* InsurancemessageafterpatientsmessagePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_messagetophysician_messagetophysician__["a" /* MessagetophysicianPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/duringprocedure/duringprocedure.module#DuringprocedurePageModule', name: 'DuringprocedurePage', segment: 'duringprocedure', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/insurancemessage/insurancemessage.module#InsurancemessagePageModule', name: 'InsurancemessagePage', segment: 'insurancemessage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/insurancemessageafterpatientsmessage/insurancemessageafterpatientsmessage.module#InsurancemessageafterpatientsmessagePageModule', name: 'InsurancemessageafterpatientsmessagePage', segment: 'insurancemessageafterpatientsmessage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messagetopatients/messagetopatients.module#MessagetopatientsPageModule', name: 'MessagetopatientsPage', segment: 'messagetopatients', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messagetophysician/messagetophysician.module#MessagetophysicianPageModule', name: 'MessagetophysicianPage', segment: 'messagetophysician', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/people/people.module#PeoplePageModule', name: 'PeoplePage', segment: 'people', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/postprocedure/postprocedure.module#PostprocedurePageModule', name: 'PostprocedurePage', segment: 'postprocedure', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/preprocedure/preprocedure.module#PreprocedurePageModule', name: 'PreprocedurePage', segment: 'preprocedure', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recovery/recovery.module#RecoveryPageModule', name: 'RecoveryPage', segment: 'recovery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tableofcontents/tableofcontents.module#TableofcontentsPageModule', name: 'TableofcontentsPage', segment: 'tableofcontents', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/success/success.module#SuccessPageModule', name: 'SuccessPage', segment: 'success', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/whattodoif/whattodoif.module#WhattodoifPageModule', name: 'WhattodoifPage', segment: 'whattodoif', priority: 'low', defaultHistory: [] }
                    ]
                }),
                // ProcedurePageModule,
                // PreprocedurePageModule,
                // PostprocedurePageModule,
                // RecoveryPageModule,
                // WhatHappensPageModule,
                // WhattodoifPageModule,
                // AboutprocedurePageModule,
                // DuringprocedurePageModule,
                // SuccessPageModule,
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                // ContactPage,
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_procedure_procedure__["a" /* ProcedurePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_preprocedure_preprocedure__["a" /* PreprocedurePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_duringprocedure_duringprocedure__["a" /* DuringprocedurePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_postprocedure_postprocedure__["a" /* PostprocedurePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_recovery_recovery__["a" /* RecoveryPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_success_success__["a" /* SuccessPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_whattodoif_whattodoif__["a" /* WhattodoifPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_whydothis_whydothis__["a" /* WhydothisPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tableofcontents_tableofcontents__["a" /* TableofcontentsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_people_people__["a" /* PeoplePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_messagetopatients_messagetopatients__["a" /* MessagetopatientsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_insurancemessage_insurancemessage__["a" /* InsurancemessagePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_insurancemessageafterpatientsmessage_insurancemessageafterpatientsmessage__["a" /* InsurancemessageafterpatientsmessagePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_messagetophysician_messagetophysician__["a" /* MessagetophysicianPage */]
            ],
            providers: [
                // StatusBar,
                // SplashScreen,
                // InAppBrowser,
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_pagenavigator_pagenavigator__["a" /* PagenavigatorProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_httpprovider_httpprovider__["a" /* HttpproviderProvider */]
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

// fix for safari cpu/resource error present in most ios versions

module.exports = {
  loadFix: function (container) {
	var scrollContainer = document.querySelector(container + ' ion-content div.scroll-content');

	var lastY = 0; // Needed in order to determine direction of scroll.
	var allowUp, allowDown;

	scrollContainer.addEventListener('touchstart', function(event) {
		lastY = event.pageY;
		allowUp = this.scrollTop > 0;
		allowDown = this.scrollTop < this.scrollHeight - this.clientHeight;
	});

	scrollContainer.addEventListener('touchmove', function(event) {
		var top = event.touches[0].clientY;

		// Determine scroll position and direction.
		var scrollTop = event.currentTarget.scrollTop;
		var isUp = lastY - top < 0;

		if (isUp && allowUp || !isUp && allowDown) {
			event.stopPropagation();
		} else {
			event.preventDefault();
		}

		lastY = top;
	});
  }
};



/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_procedure_procedure__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_preprocedure_preprocedure__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_duringprocedure_duringprocedure__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_recovery_recovery__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_success_success__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_whattodoif_whattodoif__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_postprocedure_postprocedure__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';








var MyApp = /** @class */ (function () {
    function MyApp(platform) {
        this.platform = platform;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'About procedure', component: __WEBPACK_IMPORTED_MODULE_3__pages_procedure_procedure__["a" /* ProcedurePage */] },
            { title: 'Pre-procedure', component: __WEBPACK_IMPORTED_MODULE_4__pages_preprocedure_preprocedure__["a" /* PreprocedurePage */] },
            { title: 'During procedure', component: __WEBPACK_IMPORTED_MODULE_5__pages_duringprocedure_duringprocedure__["a" /* DuringprocedurePage */] },
            { title: 'Recovery', component: __WEBPACK_IMPORTED_MODULE_6__pages_recovery_recovery__["a" /* RecoveryPage */] },
            { title: 'Post procedure', component: __WEBPACK_IMPORTED_MODULE_9__pages_postprocedure_postprocedure__["a" /* PostprocedurePage */] },
            { title: 'What to do if', component: __WEBPACK_IMPORTED_MODULE_8__pages_whattodoif_whattodoif__["a" /* WhattodoifPage */] },
            { title: 'Success', component: __WEBPACK_IMPORTED_MODULE_7__pages_success_success__["a" /* SuccessPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
            if (_this.platform.is('mobileweb')) {
                localStorage.setItem('platform', 'mobileweb');
                _this.currentPlatform = 'mobileweb';
            }
            else {
                _this.currentPlatform = 'web';
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.push(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/app/app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar color="primary">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content color="primary" class="drawermenu">\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" class="item-icon-left">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n<!-- <ion-menu [content]="content" type="push" class="menu-icon-only" persistent="true"> -->\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>\n\n\n'/*ion-inline-end:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsPage = /** @class */ (function () {
    // tab2Root = AboutPage;
    // tab3Root = ContactPage;
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/tabs/tabs.html"*/'\n<ion-tabs color="dark">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Team" tabIcon="people"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Schedule" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="More" tabIcon="ios-more"></ion-tab>\n</ion-tabs>\n\n\n'/*ion-inline-end:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagenavigatorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the PagenavigatorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PagenavigatorProvider = /** @class */ (function () {
    function PagenavigatorProvider(app) {
        this.app = app;
        console.log('Hello PagenavigatorProvider Provider');
    }
    PagenavigatorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], PagenavigatorProvider);
    return PagenavigatorProvider;
}());

//# sourceMappingURL=pagenavigator.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpproviderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the HttpproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpproviderProvider = /** @class */ (function () {
    function HttpproviderProvider(http) {
        this.http = http;
        this.menus = [{ name: 'Normal side effects', index: 0,
                content: [{ title: "Temperature over 103<sup>0</sup>F/39<sup>0</sup>C", desc: "" },
                    { title: "Severe stomach pain", desc: "<ul><li>Send text message to surgeon on call office <br>OR</li><li>Tap Call button to contact surgeon on call office immediately!</li></ul>" }] },
            { name: 'More symptoms 1', index: 1 },
            { name: 'More symptoms 2', index: 2 }];
        this.aboutProcedureList = [
            { title: "Is it too late to prevent it?",
                dropdown: false,
                subcontent: '',
                content: "Yes.&nbsp;&nbsp;If you have symptomatic gallstones, surgery is most likely indicated.&nbsp;&nbsp;Gallstones rarely go away on their own.&nbsp;&nbsp;However, the majority of gallstones actually do not cause pain.&nbsp;&nbsp;This means that most individuals with gallstones do not even know they have them.&nbsp;&nbsp;If it is incidentally discovered that a patient has gallstones, but those gallstones are not causing pain, surgery is not required.<br /><br />\n                    Although there are numerous homeopathic/natural remedies that suggest gallstones can be treated without surgery, these have not been proven scientifically.&nbsp;&nbsp;There is medication that can be used to help dissolve gallstones, but this must be taken for the rest of your life, twice a day, in order to be effective.<br /><br />\n                    The following patient factors increase the risk: weight (e.g.&nbsp;&nbsp;being overweight or obese), rapid weight loss, physical inactivity, diabetes mellitus, pregnancy, certain medications,* and diet.<br /><br />\n\n                    <i>*Estrogen-containing medications (e.g.&nbsp;&nbsp;hormone replacement therapy and oral contraceptives), thiazide diuretics, ceftriaxone, fibrates, and octreotide</i>\n",
                img: './assets/imgs/gallbladder-disease.jpg' },
            { title: "What will happen if I don’t have this procedure?", dropdown: false, subcontent: '',
                content: "It is extremely rare for gallstones to dissolve or pass on their own, and it is not recommended that patients avoid seeking medical attention for symptomatic gallstone disease in the hopes that they can avoid surgery, as this can lead to more serious diseases.\n\n        <br /><br >If you chose not to undergo surgery, it is likely that your pain will persist.&nbsp;&nbsp;There is also a chance that your pain will become more severe, your health will further deteriorate, and you will require an emergency procedure.\n\n        <br /><br />Death is also a possible outcome if you decide to forego surgery.\n",
                img: './assets/imgs/what-happens-if.jpg' },
            { title: "Are there alternative solutions?", dropdown: false, subcontent: '',
                content: "If you are suffering from gallbladder disease and are a strong surgical candidate, you should undergo surgical treatment.\n\n<br /><br />For certain patients with gallstone disease, including those who are poor surgical candidates, there are other options available to eliminate gallstones or treat their complications.&nbsp;&nbsp;These include:\n<br ><ul class=\"marginHeading\"><li>Extended use of bile acid medication</li>\n<li>Drainage of the gallbladder with removal of the gallstones through the skin</li>\n<li>Antibiotic therapy (i.e.&nbsp;&nbsp;management of the infection only)</li></ul>\n\nThese options are not the primary therapy of choice because the gallbladder is not removed, leaving you susceptible to recurrence of your symptoms.\n\n<br /><br />It is also worth noting that robotic cholecystectomy is available through both single-incision and multi-port approaches.&nbsp;&nbsp;Single-incision surgery utilizes one small incision at your belly button, whereas multi-port surgery utilizes four small incisions across your belly in a fashion similar to laparoscopic cholecystectomy.\n\n<br /><br />Although single-incision surgery may seem like a more attractive option to you as the patient due to its potentially better cosmetic result, this option should not pursued.&nbsp;&nbsp;Single-incision robotic cholecystectomy is associated with a significantly higher rate of incisional hernia and is, therefore, considered sub-standard of care.&nbsp;&nbsp;In fact, single-incision laparoscopic cholecystectomy was found to have the same poor results when compared to multi-port laparoscopic cholecystectomy.\n\n<br /><br />The bottom line: do not pursue single-incision robotic or laparoscopic cholecystectomy!\n\n<br /><br />Citation for increased incisional hernia risk and for robotic cholecystectomy when comparing single- and multi-incision approaches:\n<br /><a href=\"https://www.ncbi.nlm.nih.gov/pubmed/29866396\" target=\"_blank\">https://www.ncbi.nlm.nih.gov/pubmed/29866396</a>\n\n<br /><br />Citation for increased incisional hernia risk and better cosmesis for single-incision laparoscopic cholecystectomy:\n<br /><a href=\"https://www.ncbi.nlm.nih.gov/pubmed/23619321\" target=\"_blank\">https://www.ncbi.nlm.nih.gov/pubmed/23619321</a>\n\n      ",
                img: './assets/imgs/alternative-solutions.jpg' },
            { title: "What are the risks of this procedure?", subcontent: "All procedures have risks.&nbsp;&nbsp;When compared to laparoscopic <b>gastric bypass</b>, studies have shown that laparoscopic <b>sleeve</b> gastrectomy has a greater safety profile.&nbsp;&nbsp;But it is less effective in helping patients lose weight and improving comorbidities, such as diabetes.&nbsp;&nbsp;On the other hand, when compared to laparoscopic adjustable gastric banding, laparoscopic sleeve gastrectomy has a weaker safety profile but is more effective in helping patients lose weight and improving other medical issues.&nbsp;&nbsp;<br /><br />Overall, serious risks from laparoscopic sleeve gastrectomy are estimated to occur in 2% of patients.&nbsp;&nbsp;Meanwhile, mortality ranges from <b>0 to 1.2%</b>.&nbsp;&nbsp;The likelihood of experiencing any one of the following complications is dependent upon your individual clinical scenario and the experience of your surgeon.",
                dropdown: false,
                content: "\n      Robotic cholecystectomy was recently found to have similar safety and perioperative outcomes as laparoscopic cholecystectomy.&nbsp;&nbsp;With that in mind, serious risks from laparoscopic cholecystectomy are limited, occurring at a rate of less than <b>2 to 3% </b>for the vast majority of them.&nbsp;&nbsp;The likelihood of experiencing any one of the following complications is dependent upon your individual clinical scenario and the experience of your surgeon.\n\n<br /><br />This is often a relatively straightforward procedure.&nbsp;&nbsp;However, the risks include:\n\n<br /><ul class=\"marginHeading\"><li><b>Damage</b> to the biliary/cystic duct or bowel with possible <b>perforation</b> and leakage of contents into the belly</li>\n<li>Injury to nearby blood vessels or liver with subsequent <b>bleeding</b></li>\n<li>Postoperative complications requiring <b>further surgery</b></li>\n<li><b>Infection</b> (of the belly or surgical incision sites)</li>\n<li>Localized <b>numbness</b></li>\n<li><b>Blood clots</b> (deep venous thrombosis)</li>\n<li><b>Difficulty breathing</b> (pulmonary embolism)</li>\n<li><b>Heart complications</b></li>\n<li><b>Need for additional procedures</b> to retrieve stones that move into the bile duct during surgery</li>\n<li><b>Hernia formation</b> at incisions sites</li>\n<li><b>Death</b></li>\n</ul>\nYour surgeon should discuss these potential risks with you and answer any questions you may have.\n\n      ",
                img: './assets/imgs/risk-of-procedure.jpg' },
        ];
        this.duringProcedureList = [
            { title: "Preparation",
                dropdown: false,
                description: "<br><div class=\"page-image\">\n                 <img width=\"100%\" height=\"70%\" src=\"./assets/imgs/preparation.jpg\">\n              </div>\n               <p> \n\nOnce you arrive at the hospital, follow the instructions from your surgeon\u2019s office regarding where to find the information desk.&nbsp;&nbsp;You will then be directed to the preoperative holding area where you will need to check-in.&nbsp;&nbsp;Family and friends may accompany you here.\n\n<br /><br />The preoperative holding area is the location where surgical patients wait to have their operation.&nbsp;&nbsp;It can be a busy place, especially early in the morning, and will often have numerous other patients, along with their friends and family members, in the other bed spaces around you.&nbsp;&nbsp;There will also be numerous healthcare professionals who will be preparing their respective patients for their own operations.\n\n<br /><br />After you check-in at the preoperative holding area, you will be asked to take off all your clothing, jewelry, glasses/contact lenses, hair accessories, and dentures and to change into a hospital gown.&nbsp;&nbsp;You will also need to put on a surgical shower cap, which will be provided for you.\n\n<br /><br />You will have a dedicated nurse during your time in the preoperative holding area.&nbsp;&nbsp;Your nurse will ensure you are comfortable and well taken care of prior to your surgery.&nbsp;&nbsp;Remember that you are to refrain from eating or drinking during this time.&nbsp;&nbsp;Your nurse or another member of your healthcare team will place an IV in your arm.\n\n<br /><br />Prior to your surgery, you will meet your anesthesia team.&nbsp;&nbsp;They will describe the anesthesia process and answer any questions you may have.&nbsp;&nbsp;You will then be asked to sign a consent form to receive general anesthesia.&nbsp;&nbsp;They will give you medications to help you feel at ease while you wait for your procedure.&nbsp;&nbsp;The anesthetic medications will be delivered to you through the IV placed in your arm.\n\n<br /><br />In the preoperative holding area, you will meet several members of the surgical team.&nbsp;&nbsp;This will include your surgeon and operating room nurses.&nbsp;&nbsp;If your surgery is being performed at a teaching hospital, you may also meet surgeon trainees, called interns and residents, and medical students.&nbsp;&nbsp;Your surgical team will also ask you to sign a consent form for the procedure and, depending on your situation, for blood product administration.&nbsp;&nbsp;Ask your surgeon any questions you may have so that you understand everything that is being communicated to you.\n\n<br /><br />Once your operating room is prepared and your surgical and anesthesia team are ready to transport you to the OR, you will have the opportunity to say goodbye to your friends and family members accompanying you.&nbsp;&nbsp;They will then be escorted to the designated waiting area.&nbsp;&nbsp;They can either wait there or leave and plan to come back when called.&nbsp;&nbsp;One of them should provide the staff or your surgeon with a phone number so that they can be contacted after your procedure has been completed.&nbsp;&nbsp;\n\n<br /><br />You will then be transported to your operating room.&nbsp;&nbsp;\n\n<br /><br />Your operating room will often be quite bright and cold.&nbsp;&nbsp;You will have blankets on top of you to keep you warm.&nbsp;&nbsp;You will have to answer some questions from the operating room nursing staff and anesthesiologists.&nbsp;&nbsp;These questions will be about who you are and what surgery you are having and are asked routinely as part of best practices for patient safety.&nbsp;&nbsp;You will then most likely be asked to move yourself from your bed to the operating room table.&nbsp;&nbsp;If you need help with this, the staff inside the operating room will be happy to assist.&nbsp;&nbsp;Your anesthesiologist will then administer general anesthesia and you will fall asleep to allow your procedure to begin.\n\n<br /><br />Occasionally, surgeries do not start at their scheduled time.&nbsp;&nbsp;You should be prepared for this as a possibility on the day of your surgery and be assured that your healthcare team will always provide you with the best care and will begin your procedure as soon as they can.\n\n\n\n\n\n\n               </p> \n              ",
                show: false,
                selected: false },
            { title: "What happens?",
                dropdown: false,
                description: "<div class=\"page-image\">\n                 <img width=\"100%\" height=\"70%\" src=\"./assets/imgs/what_happens_beginning.jpg\">\n              </div>\n        When you are in the operating room, you will undergo general anesthesia and have a breathing tube, otherwise known as an endotracheal tube, placed down your throat (i.e.&nbsp;&nbsp;intubation).&nbsp;&nbsp;You will be asleep for this and not feel any discomfort as the breathing tube is being placed, but you may have a sore throat after you wake up from your surgery.&nbsp;&nbsp;Your breathing tube will be removed before you wake up from your surgery.\n\n<br /><br />Anesthesia will prevent you from feeling or remembering the procedure and will be given to you through your IV.&nbsp;&nbsp;Your endotracheal tube will ensure your lungs receive oxygen during the procedure.&nbsp;&nbsp;Special boots, known as sequential compression devices, will be placed on your legs to massage them and prevent blood clots.\n\n<br /><br />During the procedure, your surgeon will set up the robot over top of you and make four tiny incisions in your belly.&nbsp;&nbsp;One of these will be around your belly-button and the other three will be just below your ribcage.&nbsp;&nbsp;\n\n<br /><br />Gas will be pumped into your belly to provide your surgeon with the space needed to both see inside with a small camera, known as a laparoscope, and perform the procedure.&nbsp;&nbsp;This laparoscope has two separate lenses that allow a high-definition, 3-dimensional picture from inside your belly to be transmitted onto screens inside the operating room and within the control console, which is where your surgeon will be sitting to perform the procedure.&nbsp;&nbsp;Your four incisions will allow entry of this camera and the instruments that your surgeon needs to complete the procedure into your belly.\n\n<br /><br />Your surgeon will use the robot-assisted camera and small instruments, which are extensions of the robot\u2019s arms, to free up the gallbladder while sitting at a control console away from you.&nbsp;&nbsp;Once your gallbladder is no longer attached to anything, it is placed in a bag and removed through one of your incisions.\n\n<br /><br />Your surgeon will then make sure everything looks well inside your belly before closing your four incisions and applying dressings over them.&nbsp;&nbsp;The procedure typically takes a little over 2 hours.\n\n<br /><br />On occasion, your surgeon may decide to take a special x-ray of your gallbladder during the procedure.&nbsp;&nbsp;This is known as a cholangiogram, and it allows your surgeon to better visualize your bile ducts.\n\n<br /><br />Rest assured, the robot does not perform your surgery on its own and is always entirely under the control of your surgeon.&nbsp;&nbsp;With the 3-dimensional image provided to your surgeon, along with the robot\u2019s enhanced instrument ergonomics, your surgeon has improved spatial awareness and maneuverability.&nbsp;&nbsp;It is also worth noting that a qualified member of the surgical team will be standing by you the entire time to help maintain the robot.&nbsp;&nbsp;\n\n<br /><br />Click HERE to see a video of the surgery in action.&nbsp;&nbsp;<br />\n<a href=\"https://www.saintpetershcs.com/Services/Robotic-Surgery\" target=\"_blank\">https://www.saintpetershcs.com/Services/Robotic-Surgery</a>\n\n<br><div class=\"page-image\">\n                 <img width=\"100%\" height=\"70%\" src=\"./assets/imgs/what_happens_end.jpg\">\n              </div>\n\n      ",
                show: false,
                selected: false },
            { title: "Just after",
                dropdown: false,
                description: "\n        Often during this process when the anesthesiologist is helping you recover, your attending surgeon will call the number of the friend or family member accompanying you that day to tell him or her how the procedure went and will provide a rough estimate of when you will be able to leave.&nbsp;&nbsp;Your surgeon will only do this if you gave her permission to call before your operation.\n<br /><br />\n      When the anesthesiologist and surgical team are ready, you will be transported to the post-anesthesia care unit, commonly referred to as the PACU, where you will be in the capable hands of the PACU nursing staff as you continue your recovery from general anesthesia.\n\n      ",
                show: false,
                selected: false, }
        ];
        this.postProcedureContent = [
            { type: 'checkbox',
                content: [{
                        title: '<b><u>Breakfast:</u></b>',
                        selected: false,
                        htmlContent: false,
                        dropdown: true,
                        show: false,
                        htmlDesc: "Liquids, coffee or tea, crackers,yogurt, etc.&nbsp;&nbsp;No cereals."
                    },
                    {
                        title: '<b><u>After breakfast:</u></b>',
                        selected: false,
                        dropdown: true,
                        show: false,
                        htmlContent: false,
                        htmlDesc: "Take opioid medication 250mg"
                    },
                    {
                        title: '<b><u>Early Morning:</u></b>',
                        selected: false,
                        dropdown: true,
                        show: false,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 20 minutes.No stairs yet.&nbsp;&nbsp;No running yet."
                    },
                    {
                        title: '<b><u>Mid-morning</u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Snack \u2013 crackers, liquids, etc."
                    },
                    {
                        title: '<b><u>Late morning</u></b>:',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 20 minutes"
                    },
                    {
                        title: '<b><u>Lunch</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Small lunch \u2013 light soup, crackers,liquids"
                    },
                    {
                        title: '<b><u>After lunch:</u></b>',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 20 minutes"
                    },
                    {
                        title: '<b><u>Mid-afternoon:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Nap"
                    },
                    {
                        title: '<b><u>After nap</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Snack"
                    },
                    {
                        title: '<b><u>Late-afternoon:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 20 minutes"
                    },
                    {
                        title: '<b><u>Supper: Small meal:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "soups, crackers, etc.&nbsp;&nbsp;No alcohol.&nbsp;&nbsp;No spicy foods.&nbsp;&nbsp;No cereals."
                    },
                    {
                        title: '<b><u>After dinner</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Take opioid medication 250 mg"
                    },
                    {
                        title: '<b><u>Evening</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 20 minutes"
                    },
                    {
                        title: '<b><u>Wound care</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Keep dry.&nbsp;&nbsp;Should require no action."
                    },
                    {
                        title: '<b><u>NO</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "shower or bath, swimming, lifting over 15 pounds (7 kg),"
                    },
                ]
            },
            {
                type: 'checkbox',
                content: [{
                        title: '<b><u>Breakfast</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: true,
                        htmlDesc: "<p>Liquids, coffee or tea, toast, eggs (not fried), yogurt, fruit, etc.&nbsp;&nbsp;No cereals.&nbsp;&nbsp;No meats.<ul class=\"marginHeading\"><li><a href=\"https://health.gov/dietaryguidelines/2015/resources/2015-2020_Dietary_Guidelines.pdf\" target=\"_blank\">https://health.gov/dietaryguidelines/2015/resources/2015-2020_Dietary_Guidelines.pdf</a></li>\n          <li><a href=\"https://health.gov/dietaryguidelines/dga2000/document/build.htm\" target=\"_blank\">https://health.gov/dietaryguidelines/dga2000/document/build.htm</a></li></ul>  </p>"
                    },
                    {
                        title: "<b><u>After breakfast:</u></b> ",
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Take opioid medication 250 mg"
                    },
                    {
                        title: '<b><u>Early Morning:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 20 minutes.&nbsp;&nbsp;No stairs yet.&nbsp;&nbsp;No running yet."
                    },
                    {
                        title: '<b><u>Mid-morning</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Snack \u2013 crackers, liquids, etc."
                    },
                    {
                        title: '<b><u>Late morning</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 20 minutes"
                    },
                    {
                        title: '<b><u>Lunch:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Small lunch \u2013 light soup, crackers, liquids,"
                    },
                    {
                        title: '<b><u>After lunch:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 20 minutes"
                    },
                    {
                        title: '<b><u>Mid-afternoon</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Nap"
                    },
                    {
                        title: '<b><u>After nap</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Snack"
                    },
                    {
                        title: '<b><u>Late-afternoon:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 20 minutes"
                    },
                    {
                        title: '<b><u>Supper:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "<b><u>Small meal</u></b>: soups, crackers, etc.&nbsp;&nbsp;No alcohol.&nbsp;&nbsp;No spicy foods.&nbsp;&nbsp;No cereals."
                    },
                    {
                        title: '<b><u>After dinner:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Take opioid medication 250 mg"
                    },
                    {
                        title: '<b><u>Evening:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 20 minutes."
                    },
                    {
                        title: '<b><u>NO</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "shower or bath, swimming, lifting over 15 pounds (7 kg)."
                    },
                    {
                        title: '<b><u>Avoid:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "crossing legs \u2013 for a week."
                    },
                ]
            },
            {
                type: 'checkbox',
                content: [{
                        title: '<b><u>Shower:</u></b>',
                        selected: false,
                        show: false,
                        htmlContent: true,
                        dropdown: true,
                        htmlDesc: "You may shower 48 hours after surgery.&nbsp;&nbsp;Before\nshowering, remove your dressing and be careful\nnot to disturb your sutures/staples or the adhesive\nstrips or glue above your incisions.&nbsp;&nbsp;Your incisions\nshould only be rinsed with a small amount of\nwater to clean it of dried debris along its edges.\nUse a towel to pat them dry.&nbsp;&nbsp;Apply clean\ndressings after your shower.&nbsp;&nbsp;Do not take a bath\nuntil your incisions are well-healed (typically 2 to 3\nweeks) or until your surgeon approves of this at\nyour postoperative appointment.&nbsp;&nbsp;Bathing or\nswimming before your incisions have healed puts\nyou at risk of infection."
                    }, {
                        title: '<b><u>Wound care:</u></b>',
                        selected: false,
                        dropdown: true,
                        show: false,
                        htmlContent: true,
                        htmlDesc: "Keep the incisions clean and dry.&nbsp;&nbsp;Your four\nincisions will be covered by a clear adhesive with\na white dressing underneath.&nbsp;&nbsp;However, typically\nthese dressings should be removed 48 hours after\nyour procedure and have fresh ones placed.\nUnderneath your dressing there will either be a\nclear glue, or, thin white adhesive strips over your\nsutures, or staples.&nbsp;&nbsp;Please do not remove the\nglue, adhesive white strips, or staples above your\nincisions.<br>\n<br>\nThoroughly wash your hands before touching or\ncleaning your incisions.&nbsp;&nbsp;If your incisions have\nadhesive strips, they will typically fall off within 10\ndays or be taken off by your surgeon at your\npostoperative appointment.&nbsp;&nbsp;If, instead, your\nincisions are covered with a clear glue, this will\nwear off naturally in around the same time period.\nYour surgeon will remove the suture or staples at\nyour postoperative appointment.<br>\n<br>\nThe dressings over your incisions should be\nchanged if they ever become wet.&nbsp;&nbsp;Once your\nwounds have stopping draining, you no longer\nneed to keep a dressing on them.<br>\n<br>\nDo not use ointments on your incisions unless\nyour surgeon instructed you to do this.&nbsp;&nbsp;Your\nincisions will become less prominent over the next\n6 to 12 months.&nbsp;&nbsp;During this time, it is important to\nkeep them out of direct sunlight to avoid scar\ndiscoloration."
                    }, {
                        title: '<b><u>Breakfast:</u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Liquids, coffee or tea, toast, eggs (not fried), yogurt, fruit, cereals, etc."
                    }, {
                        title: '<b><u>After breakfast:</u></b> ',
                        selected: false,
                        dropdown: true,
                        show: false,
                        htmlContent: false,
                        htmlDesc: "Take opioid medication 250 mg"
                    }, {
                        title: '<b><u>Early Morning:</u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 20 minutes.&nbsp;&nbsp;No stairs yet.&nbsp;&nbsp;No running yet."
                    }, {
                        title: '<b><u>Mid-morning:</u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Snack \u2013 crackers, liquids, etc."
                    }, {
                        title: '<b><u>Late morning:</u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 20 minutes"
                    }, {
                        title: '<b><u>Lunch:</u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Small lunch \u2013 light soup, crackers, bread, cheese, liquids"
                    }, {
                        title: '<b><u>After lunch</u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 20 minutes"
                    }, {
                        title: '<b><u>Mid-afternoon:</u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Nap"
                    }, {
                        title: '<b><u>After nap</u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Snack"
                    }, {
                        title: '<b><u>Late-afternoon</u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 20 minutes"
                    }, {
                        title: '<b><u>Supper: Small meal:</u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "soups, bread, cheese, vegetables, fruit, etc.&nbsp;&nbsp;No alcohol.&nbsp;&nbsp;No spicy foods."
                    }, {
                        title: '<b><u>After dinner:</u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Take opioid medication 250 mg"
                    }, {
                        title: '<b><u>Evening:</u></b> ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk at home for 20 minutes"
                    },
                    {
                        title: '<b><u>NO</u></b>: ',
                        selected: false,
                        show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "swimming, lifting over 15 pounds (7 kg)."
                    }],
            },
            {
                type: 'checkbox',
                content: [{
                        title: '<b><u>Breakfast:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Gradually go back to your regular diet.&nbsp;&nbsp;But still have limited fat."
                    }, {
                        title: '<b><u>After breakfast</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Take opioid medication 250 mg"
                    }, {
                        title: '<b><u>Early Morning</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk outside or at home for 20 minutes.&nbsp;&nbsp;No stairs yet.&nbsp;&nbsp;No running yet."
                    }, {
                        title: '<b><u>Mid-morning:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Snack"
                    }, {
                        title: '<b><u>Late morning</u></b>: ',
                        selected: false, show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk for 20 minutes"
                    }, {
                        title: '<b><u>Lunch:</u></b>',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Regular, but limit fat."
                    }, {
                        title: '<b><u>After lunch:</u></b>',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk for 20 minutes"
                    }, {
                        title: '<b><u>Mid-afternoon:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Nap"
                    }, {
                        title: '<b><u>After nap</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Snack"
                    }, {
                        title: '<b><u>Late-afternoon</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk for 20 minutes"
                    }, {
                        title: '<b><u>Supper</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Regular meal.&nbsp;&nbsp;Limited alcohol.&nbsp;&nbsp;No spicy foods."
                    }, {
                        title: '<b><u>After dinner</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Take opioid medication 250 mg"
                    }, {
                        title: '<b><u>Evening:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk for 20 minutes"
                    }, {
                        title: '<b><u>NO:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Bath, swimming, lifting over 15 pounds (7 kg)."
                    }]
            },
            {
                type: 'checkbox',
                content: [{
                        title: '<b><u>Breakfast:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Your regular meal."
                    }, {
                        title: '<b><u>After breakfast</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Take opioid or replacement medication 250 mg"
                    }, {
                        title: '<b><u>Driving</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Should be ok.&nbsp;&nbsp;But not if you are still taking opioid pain medication within the last 24 hours."
                    }, {
                        title: '<b><u>Early Morning:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk for 20 minutes.&nbsp;&nbsp;Slowly try stairs \u2013 if pain, wait.&nbsp;&nbsp;No running."
                    }, {
                        title: '<b><u>Mid-morning:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Snack"
                    }, {
                        title: '<b><u>Late morning</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk for 20 minutes"
                    }, {
                        title: '<b><u>Lunch</u></b>:',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Regular."
                    }, {
                        title: '<b><u>After lunch</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk for 20 minutes"
                    }, {
                        title: '<b><u>Mid-afternoon:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Nap"
                    }, {
                        title: '<b><u>After nap:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Snack"
                    }, {
                        title: '<b><u>Late-afternoon</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk for 20 minutes"
                    }, {
                        title: '<b><u>Supper:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Regular meal.&nbsp;&nbsp;Limited alcohol.&nbsp;&nbsp;No spicy foods."
                    }, {
                        title: '<b><u>After dinner:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Take opioid medication 250 mg"
                    }, {
                        title: '<b><u>Evening</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk for 20 minutes"
                    }, {
                        title: '<b><u>NO:</u></b> ',
                        selected: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Bath, swimming, lifting over 15 pounds (7 kg)."
                    },]
            },
            {
                type: 'checkbox',
                content: [{
                        title: '<b><u>Breakfast</u></b>',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: ""
                    },
                    {
                        title: "<b><u>After breakfast</u></b>: ",
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Take opioid medication 250 mg"
                    },
                    {
                        title: '<b><u>Early Morning</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk for 20 minutes.&nbsp;&nbsp;Slowly try the stairs again.&nbsp;&nbsp;No running."
                    },
                    //       {
                    //        title:'Afternoon: Exercise/view recommended exercises',
                    //        selected:false,
                    //        htmlContent:true,
                    //        htmlDesc:  `<video controls="controls" width="20%" preload="metadata"  webkit-playsinline="webkit-playsinline" class="videoPlayer">
                    //  <source src="./assets/videos/file_example_MP4_480_1_5MG.mp4" type="video/mp4" />
                    // </video>`,
                    //       },
                    {
                        title: '<b><u>Mid-morning</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Snack"
                    },
                    {
                        title: '<b><u>Late morning</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk for 20 minutes"
                    },
                    {
                        title: '<b><u>Lunch</u></b>',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: ""
                    },
                    {
                        title: '<b><u>After lunch:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk for 20 minutes"
                    },
                    {
                        title: '<b><u>Mid-afternoon</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Nap"
                    },
                    {
                        title: '<b><u>After nap</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Snack"
                    },
                    {
                        title: '<b><u>Late-afternoon:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk for 20 minutes"
                    },
                    {
                        title: '<b><u>Supper:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Limited alcohol.&nbsp;&nbsp;No spicy foods."
                    },
                    {
                        title: '<b><u>After dinner</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Take opioid medication 250 mg"
                    },
                    {
                        title: '<b><u>Evening</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk for 20 minutes"
                    },
                    {
                        title: '<b><u>NO</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Bath, swimming, lifting over 15 pounds (7 kg)."
                    },
                ]
            },
            {
                type: 'checkbox',
                content: [{
                        title: '<b><u>Breakfast</u></b>',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: ""
                    }, {
                        title: '<b><u>After breakfast</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Take pain medication as needed.&nbsp;&nbsp;If opioid not needed take over-the counter pain relief"
                    }, {
                        title: '<b><u>Early Morning</u></b>: ',
                        selected: false, show: false,
                        dropdown: true,
                        htmlContent: false,
                        htmlDesc: "Walk for 20 minutes.&nbsp;&nbsp;Slow stairs.&nbsp;&nbsp;No running."
                    }, {
                        title: '<b><u>Mid-morning:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Snack"
                    }, {
                        title: '<b><u>Late morning</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk for 20 minutes"
                    }, {
                        title: '<b><u>Lunch</u></b>',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: ""
                    }, {
                        title: '<b><u>After lunch</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk for 20 minutes"
                    }, {
                        title: '<b><u>Mid-afternoon:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Nap"
                    }, {
                        title: '<b><u>After nap</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Snack"
                    }, {
                        title: '<b><u>Late-afternoon:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk for 20 minutes"
                    }, {
                        title: '<b><u>Supper</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Limited alcohol.&nbsp;&nbsp;No spicy foods."
                    }, {
                        title: '<b><u>After dinner:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Take pain medication 250 mg"
                    }, {
                        title: '<b><u>Evening:</u></b> ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Walk for 20 minutes"
                    }, {
                        title: '<b><u>NO</u></b>: ',
                        selected: false,
                        dropdown: true, show: false,
                        htmlContent: false,
                        htmlDesc: "Bath, swimming, lifting over 15 pounds (7 kg)."
                    }]
            },
            {
                type: 'textanddropdown',
                htmlContent: true,
                selected: false,
                dropdown: false,
                content: [{
                        text: "<ul><li>Regular meals.</li>\n<li>Continue to exercise about 5 times a day.</li>\n<li>NO: bath, swimming, lifting over 15 pounds (7\nkg).</li></ul>",
                        dropdown: [{
                                title: 'Surgeon visit',
                                content: "<ul><li>\nApproximately one week after surgery, you\nshould plan on seeing your surgeon to\nmake sure your belly is healing properly.\nThis appointment will either be made for\nyou when you are being discharged, or\nshould be made by you when you return\nhome.</li>\n<li>Sutures and staples may be removed at\nthis time.</li>\n<li>You may also need to set up an\nappointment with your primary care\nprovider to go over any medication\nchanges if necessary.</li></ul>"
                            }]
                    }]
            },
            {
                type: 'text',
                content: "<ul><li><b><u>Allowed:</u></b> If incisions have healed, bath and\nswimming.</li>\n<li> <b><u>Allowed:</u></b> sex, after sutures are removed</li>\n<li><b><u>Continue</u></b> to exercise about 5 times a day.&nbsp;&nbsp;Pick\nup walking pace.&nbsp;&nbsp;No running until you feel strong but stop if it feels awful.</li>\n<li><b><u>Lifting:</u></b> slowly increase the weight you lift.\nSlowly.</li></ul>",
                dropdown: false,
                htmlContent: false
            },
            {
                type: 'text',
                content: "<p><strong>That's the end of your recovery protocol.</strong></p>\n          <p>You should be feeling pretty good, but a little sore in obvious places.&nbsp;&nbsp;So, gradually, start to live the life you had before.&nbsp;&nbsp;Except - no heavy lifting and no strenuous activity for a month more.</p>\n          <p>Yes, you can start driving now, but only if:</p>\n          <ul>\n            <li>You can wear a seatbelt without pain, and</li>\n            <li>If you can make an emergency stop without pain</li>\n          </ul>\n          \n          <p>If not, wait a few days and try again.</p>",
                dropdown: false,
                htmlContent: false
            }
        ];
        this.recoveryContent = [{
                title: 'Waking up ',
                selected: false,
                dropdown: true, show: false,
                htmlContent: false,
                htmlDesc: "\n                When you wake up and start to remember events, you will be in the post-anesthesia care unit, otherwise known as the PACU.&nbsp;&nbsp;Here you will be surrounded by other patients who are also recovering from their own surgeries.&nbsp;&nbsp;\n\n                <br /><br />You will most likely be in the PACU for 1 to 4 hours.&nbsp;&nbsp;This is the time it takes for the anesthesia to wear off to an acceptable level.&nbsp;&nbsp;During this time, you will have a dedicated nurse care for you.&nbsp;&nbsp;Once you are stable, you will either be transferred to the surgical wards where you will continue your recovery or you will be discharged from the hospital.\n   \n                "
            },
            {
                title: 'Pain management ',
                selected: false,
                dropdown: true, show: false,
                htmlContent: false,
                htmlDesc: "\n                 Immediately after the surgery you may not feel like your normal self.&nbsp;&nbsp;You may feel hazy, groggy, fatigued, and uncomfortable.&nbsp;&nbsp;These symptoms will gradually improve over the next few days as the anesthesia and opioid pain medication leaves your system.&nbsp;&nbsp;You may also feel nauseated.&nbsp;&nbsp;This is normal and due to the anesthesia in your system but will improve with time.&nbsp;&nbsp;If you feel nauseated, please tell your nurse as he or she can provide you with medication to help alleviate this discomfort and uneasiness.&nbsp;&nbsp;If your mouth is dry, you can also ask for a \u201Cwater sponge\u201D to alleviate this dryness.&nbsp;&nbsp;\n\n                <br /><br />Finally, you will also be experiencing some pain.&nbsp;&nbsp;This is normal since you <i>just had surgery</i>.&nbsp;&nbsp;You may have pain at your incisions, inside your belly, and in your right shoulder.&nbsp;&nbsp;Your surgical team will provide you with a pain medication regimen.\n               "
            },
            {
                title: 'Nausea',
                selected: false,
                dropdown: true, show: false,
                htmlContent: false,
                htmlDesc: "You will likely be given medication to help your nausea.&nbsp;&nbsp;If you feel as though your nausea is still poorly controlled, please tell your medical team so that a more effective solution can be secured."
            },
            {
                title: 'When do I leave the Hospital?',
                selected: false,
                dropdown: true, show: false,
                htmlContent: false,
                htmlDesc: "The recovery process for robotic cholecystectomy is typically uncomplicated and straightforward.&nbsp;&nbsp;Most patients go home on the same day of their surgery.&nbsp;&nbsp;However, if your surgery was converted to an open procedure, there were complications, or your surgeon simply wants to look after you for more than just a few hours, you may need to stay overnight.&nbsp;&nbsp;\n\n                    <br /><br />Robotic cholecystectomy was recently found to have similar safety and perioperative outcomes when compared to laparoscopic cholecystectomy.&nbsp;&nbsp;With that in mind, approximately <b>80%</b> of patients receiving outpatient surgery for laparoscopic cholecystectomy are actually discharged on the same day.&nbsp;&nbsp;Patients who stay overnight experience the same overall success rate as those who are discharged on the same day of their laparoscopic cholecystectomy."
            },
            {
                title: 'Ready to leave',
                selected: false,
                dropdown: true, show: false,
                htmlContent: false,
                htmlDesc: "\n                If you are having same day surgery and everything is going well, you may be discharged from the hospital as early as one hour after the procedure is over.&nbsp;&nbsp;Do not be discouraged if this process takes longer.&nbsp;&nbsp;Please make sure you have a responsible adult to drive you home.&nbsp;&nbsp;You will not be allowed to leave the hospital on your own.&nbsp;&nbsp;It is also encouraged to have a responsible adult stay with you or have one check in with your periodically for 24 hours after your surgery.\n\n                "
            }];
        this.homeContent = [
            { title: "Getting back to normal",
                dropdown: false,
                show: false,
                chevron: true,
                description: "\n      <i>Robotic cholecystectomy is a relatively easy surgery from which to recover, especially when compared to its open counterpart.&nbsp;&nbsp;It is also typically a same-day or ambulatory surgery and, therefore, you will not have daily and weekly protocols to meet in the hospital as you recover.&nbsp;&nbsp;You will, however, have daily and weekly goals for recovery while you are at home.&nbsp;&nbsp;</i>\n      "
            }, { title: "Eat a normal Diet soon",
                dropdown: false,
                show: false,
                chevron: true,
                description: "\n      After robotic cholecystectomy, you can start eating as soon as your feel comfortable.&nbsp;&nbsp;There are no restrictions on diet.&nbsp;&nbsp;However, rather than immediately resuming your normal diet, we encourage you to initially adopt some dietary changes to limit belly pain during the first two weeks.\n    <br /><ul class=\"marginHeading\">\n    <li>Start with smaller meal sizes and foods that are easy on your digestive system (e.g.&nbsp;&nbsp;liquids, light soups, or crackers)</li>\n    <li>Avoid alcohol for a few days as the general anesthesia and opioid pain medications are still in your system</li>\n    </ul>\n\nAfter you have gradually returned to your normal diet, we encourage you to eat in a healthy and balanced manner.&nbsp;&nbsp; Here are two links to help: <br />\n<a href=\"https://health.gov/dietaryguidelines/2015/resources/2015-2020_Dietary_Guidelines.pdf\" target=\"_blank\">https://health.gov/dietaryguidelines/2015/resources/2015-2020_Dietary_Guidelines.pdf</a> <br />\n<a href=\"https://health.gov/dietaryguidelines/dga2000/document/build.htm\" target=\"_blank\">https://health.gov/dietaryguidelines/dga2000/document/build.htm</a>\n      "
            },
            {
                title: "Driving",
                dropdown: false,
                show: false,
                chevron: true,
                description: "Typically patients are able to drive about 3 days after their procedure.&nbsp;&nbsp;You may not drive a motor vehicle if you have taken opioid pain medication within the last 24 hours.&nbsp;&nbsp;\n"
            }, {
                title: "Work and returning to daily activities",
                dropdown: false,
                show: false,
                chevron: true,
                description: "\n       The time it takes patients to return to work varies from patient to patient.&nbsp;&nbsp;Some patients are able to return to work within 1 to 2 days while others requires 4 to 6 weeks.&nbsp;&nbsp;Most patients take 2 weeks to return to their normal baseline level of activity.\n\n<br /><br />If your work requires heavy lifting, you may need more time off before returning to work to allow your incisions adequate time to heal to prevent hernia formation.&nbsp;&nbsp;You should discuss this with your surgeon.&nbsp;&nbsp;Before you are cleared for heavy lifting, you should not lift anything over 10 to 15 pounds.&nbsp;&nbsp;If you ever have pain with lifting, please stop!\n\n<br /><br />You may only return to work if you have been off opioid pain medication for 24 hours.&nbsp;&nbsp;Also, do not drive if you have taken opioid pain medication within the last 24 hours.\n \n"
            },
            {
                title: "Do gentle exercises",
                dropdown: false,
                show: false,
                chevron: true,
                description: "After your surgery, we encourage you to walk around your home as frequently as possible.&nbsp;&nbsp;Try to do this at least 5 times a day (or more if possible) until you are able to resume your normal activities.&nbsp;&nbsp;This will improve your recovery and help prevent blood clots, otherwise known as deep venous thrombosis.&nbsp;&nbsp;\n\n<br /><br />You can also prevent blood clots while you are lying down and resting by performing ankle range of motion exercises.&nbsp;&nbsp;To do this, gradually move your foot toward the ceiling and then back down to the floor.&nbsp;&nbsp;Try to do this at least ten times with each foot at least five times each day until you return to your normal activities.&nbsp;&nbsp;You should also try to avoid crossing your legs as you rest as this increases pressure in your lower legs and increases your risk of forming blood clots.\n\n<br /><br />Immediately after surgery, you can do any amount of walking or stairs as you feel comfortable doing.&nbsp;&nbsp;Make sure you do not lift anything greater than 10 to 15 pounds for the first two weeks.&nbsp;&nbsp;After two weeks, you can start to increase the intensity of your exercise, but we recommend you do this gradually and use pain as indicator if you are pushing yourself too hard.&nbsp;&nbsp;\n\n<br /><br />A month (or potentially 6 weeks) after your surgery, you can start to lift heavier objects and engage in strenuous activity.&nbsp;&nbsp;Typically, you should have a discussion with your surgeon before you are cleared for more vigorous activity.\n\n<br /><br />You should not swim until your incisions are well-healed.&nbsp;&nbsp;This process typically takes 2 to 3 weeks.&nbsp;&nbsp;Swimming too soon would put you at risk of infection.\n\n\n      "
            }, {
                title: "Sex",
                dropdown: false,
                show: false,
                chevron: true,
                description: "\n      Although you can engage in sex when you feel your body is ready, we encourage you to wait about two weeks or until your sutures/staples are removed at your postoperative appointment when your surgeon indicates this is safe.\n\n      "
            }, {
                title: "Breathing",
                dropdown: false,
                show: false,
                chevron: true,
                description: "\n      We encourage you to practice deep breathing exercises at home.&nbsp;&nbsp;This can be accomplished either with an incentive spirometer or by deep breathing on your own.&nbsp;&nbsp;You should take about 10 deep breaths and hold them for a few seconds before exhaling.&nbsp;&nbsp;You should do this about 5 times a day (or more if possible) for 5 days.&nbsp;&nbsp;This will help your overall recovery and help prevent pneumonia.\n      "
            },
            {
                title: "Pain Control",
                dropdown: false,
                show: false,
                chevron: true,
                description: "\n      Follow the instructions from your surgeon.&nbsp;&nbsp;These will likely include the use of acetaminophen and ibuprofen for pain control, unless you have certain liver or kidney diseases.&nbsp;&nbsp;You should use your prescription pain medication if necessary but there can be side effects with these medications, including constipation, nausea, trouble breathing, sleepiness and, with long term use, dependence.&nbsp;&nbsp;\n\n      <br /><br />Always take pain medication along with food and water to avoid belly pain.&nbsp;&nbsp;You may not drive a motor vehicle if you have taken opioid pain medication within the past 24 hours.\n\n\n      "
            },
            {
                title: "Wound Care",
                dropdown: false,
                show: false,
                chevron: true,
                description: "\n      Your surgeon will likely provide you with specific instructions on wound care.&nbsp;&nbsp;You want to keep them clean and dry.&nbsp;&nbsp;Your four incisions will either be covered by a clear adhesive with a white dressing underneath or simply by a layer of glue.&nbsp;&nbsp;Typically you should remove these dressings 48 hours after your procedure.&nbsp;&nbsp;\n\n    <br /><br />Underneath your dressing there will likely be thin white adhesive strips over your sutures, or there may be staples.&nbsp;&nbsp;If your incisions have adhesive strips or staples, they can get wet in the shower.&nbsp;&nbsp;The strips will typically fall off within 10 days or be taken off by your surgeon at your postoperative appointment.&nbsp;&nbsp;If, instead, your incisions are covered with a clear glue, this will wear off naturally in around the same time period.&nbsp;&nbsp;\n\n  <br /><br />Your surgeon will remove any staples at your postoperative appointment.&nbsp;&nbsp;Do not use ointments on your incisions unless your surgeon instructed you to do this.&nbsp;&nbsp;Your incisions will become less prominent over the next 6 to 12 months.&nbsp;&nbsp;During this time, it is important to keep them out of direct sunlight to avoid scar discoloration.\n\n\n\n      "
            }, {
                title: "Shower/bathing",
                dropdown: false,
                show: false,
                chevron: true,
                description: "\n      You may shower 48 hours after surgery.&nbsp;&nbsp;Before showering, remove your dressing and be careful not to disturb your sutures/staples or the adhesive strips or glue above your incisions.&nbsp;&nbsp;Please do not swim until you are cleared to take a bath.&nbsp;&nbsp;Bathing or swimming before your incisions have healed puts you at risk of infection.\n\n\n      "
            }, {
                title: "Post-operative follow-up appointment",
                dropdown: false,
                show: false,
                chevron: true,
                description: "\n     Most surgeons would like to see their patients approximately 1 to 2 weeks after surgery.&nbsp;&nbsp;Your follow-up appointment will either be made as you are discharged, or you should call your surgeon once you are home to schedule this.&nbsp;&nbsp;\n\n    <br /><br />Your surgeon will look at your belly to assess the healing process and make sure everything is going well.&nbsp;&nbsp;You may also need to schedule an appointment with your primary care physician to go over changes to your medications if appropriate.\n      "
            },
            {
                title: "Disposal of opioid pain medications",
                dropdown: false,
                show: false,
                chevron: true,
                description: "\n     <i>You probably will have leftover pills.&nbsp;&nbsp;</i>\n\n<br /><br />Surgical patients often do not use all of their prescription pain medication.&nbsp;&nbsp;As a result, leftover pills of controlled prescription medications end up being unattended and forgotten in home medicine cabinets.&nbsp;&nbsp;This increases the chances of misuse and abuse of these potentially addictive medications.\n\n<br /><br />We encourage you to properly dispose of unused opioid pain medication.&nbsp;&nbsp;\n\n<br /><br />There are a few acceptable ways for you to safely discard leftover opioid pain medication:\n<ul class=\"marginHeading\">\n<li>You can return them year-round to DEA-approved authorized collectors in your area (link https://www.deadiversion.usdoj.gov/drug_disposal/takeback/ to the phrase \u201Cparticipating locations)  </li>\n<li>Alternatively, take the medicine and mix it with an inedible substance, such as coffee grounds.&nbsp;&nbsp;You should then place this mixture in a sealable container and dispose of it in the trash.</li>\n</ul>\nFinally, be sure to get rid of all identifiable information on the label of your prescription for your own safety and protection.\n\n      "
            },
        ];
    }
    HttpproviderProvider.prototype.getRecoveryContent = function () {
        return this.recoveryContent;
    };
    HttpproviderProvider.prototype.getHomeConent = function () {
        return this.homeContent;
    };
    HttpproviderProvider.prototype.getWhatToDoIfPagesTabs = function () {
        return this.menus;
        // return new Promise(resolve => {
        // this.http.get(this.apiUrl+'/path').subscribe(data => {
        //   resolve(data);
        // }, err => {
        //   console.log(err);
        // });
        // });
    };
    HttpproviderProvider.prototype.getPostProcedureContent = function (day) {
        return this.postProcedureContent[day];
    };
    HttpproviderProvider.prototype.getAboutProcedureList = function () {
        console.log(this.aboutProcedureList);
        return this.aboutProcedureList;
    };
    HttpproviderProvider.prototype.getAboutProcedureListDetails = function (index) {
        return { content: this.aboutProcedureList[index], length: this.aboutProcedureList.length, subcontent: this.aboutProcedureList[index].subcontent };
    };
    HttpproviderProvider.prototype.getDuringProcedureList = function () {
        return this.duringProcedureList;
    };
    HttpproviderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], HttpproviderProvider);
    return HttpproviderProvider;
}());

//# sourceMappingURL=httpprovider.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableofcontentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preprocedure_preprocedure__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__procedure_procedure__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__duringprocedure_duringprocedure__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__postprocedure_postprocedure__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recovery_recovery__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__success_success__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__whattodoif_whattodoif__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__whydothis_whydothis__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__people_people__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__insurancemessage_insurancemessage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assets_gtag__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














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
        Object(__WEBPACK_IMPORTED_MODULE_13__assets_gtag__["a" /* googleAnalytics */])('tableofcontents');
    };
    TableofcontentsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TableofcontentsPage');
    };
    TableofcontentsPage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
    };
    TableofcontentsPage.prototype.goToHelloPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__whydothis_whydothis__["a" /* WhydothisPage */], {
            index: 'audio'
        });
    };
    TableofcontentsPage.prototype.goToProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__procedure_procedure__["a" /* ProcedurePage */]);
    };
    TableofcontentsPage.prototype.gotToPreProcedure = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__preprocedure_preprocedure__["a" /* PreprocedurePage */]);
    };
    TableofcontentsPage.prototype.gotToDuringProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__duringprocedure_duringprocedure__["a" /* DuringprocedurePage */]);
    };
    TableofcontentsPage.prototype.goToRecoverPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__recovery_recovery__["a" /* RecoveryPage */]);
    };
    TableofcontentsPage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__postprocedure_postprocedure__["a" /* PostprocedurePage */]);
    };
    TableofcontentsPage.prototype.goToWhatIfPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__whattodoif_whattodoif__["a" /* WhattodoifPage */]);
    };
    TableofcontentsPage.prototype.goToPeoplePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__people_people__["a" /* PeoplePage */]);
    };
    TableofcontentsPage.prototype.gotoInsurancePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__insurancemessage_insurancemessage__["a" /* InsurancemessagePage */]);
    };
    TableofcontentsPage.prototype.gotToSuccessPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__success_success__["a" /* SuccessPage */]);
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__insurancemessage_insurancemessage__["a" /* InsurancemessagePage */]);
        //  	this.navCtrl.setRoot(MessagetophysicianPage);
    };
    TableofcontentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tableofcontents',template:/*ion-inline-start:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/tableofcontents/tableofcontents.html"*/'<ion-header>\n	<ion-navbar color="primary"  hideBackButton="true">\n		<button ion-button menuToggle  *ngIf=\'platform === "mobileweb"\'>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<!-- <ion-buttons left>\n			<button ion-button icon-only (click)="goBack()">\n				<ion-icon name="ios-arrow-back"></ion-icon>\n			</button>\n		</ion-buttons> -->\n		<ion-title  align-title="center">Table of contents</ion-title>\n		<!-- <ion-buttons right>\n			<button ion-button icon-only>\n				<ion-icon name="ios-search"></ion-icon>\n			</button>\n		</ion-buttons> -->\n	</ion-navbar>\n</ion-header>\n\n<ion-content (swipe)="swipeEvent($event)">\n	<div *ngIf=\'platform === "mobileweb" || platform ==="web"\' [ngClass]="navClassName==\'opennav\'?\'navopen\':\'na\'">\n		<div class="pagecontainer">\n			<div class="pagenav">\n				<ul>\n					<li (click)="goToProcedurePage()">\n						<i class="icon"><img src="assets/imgs/open-book.svg" class="icon-default"><img src="assets/imgs/open-book-white.svg" class="icon-white"></i> \n						<span class="menutext">About procedure</span>\n					</li>\n					<li (click)="gotToPreProcedure()">\n						<i class="icon"><img src="assets/imgs/numbers.svg" class="icon-default"><img src="assets/imgs/numbers-white.svg" class="icon-white"></i> \n						<span class="menutext">Pre-procedure</span>\n					</li>\n					<li (click)="gotToDuringProcedurePage()">\n						<i class="icon"><img src="assets/imgs/sleeping.svg" class="icon-default"><img src="assets/imgs/sleeping-white.svg" class="icon-white"></i> \n						<span class="menutext">Procedure</span>\n					</li>\n					<li (click)="goToRecoverPage()">\n						<i class="icon"><img src="assets/imgs/eye-blocked.svg" class="icon-default"><img src="assets/imgs/eye-blocked-white.svg" class="icon-white"></i> \n						<span class="menutext">Recovery</span>\n					</li>\n					<li (click)="goToPostProcedurePage()">\n						<i class="icon"><img src="assets/imgs/home.svg" class="icon-default"><img src="assets/imgs/home-white.svg" class="icon-white"></i> \n						<span class="menutext">At Home</span>\n					</li>\n					<li (click)="goToWhatIfPage()">\n						<i class="icon"><img src="assets/imgs/question-mark.svg" class="icon-default"><img src="assets/imgs/question-mark-white.svg" class="icon-white"></i>\n						<span class="menutext">What to do if</span>\n					</li>\n					<li (click)="gotToSuccessPage()">\n						<i class="icon"><img src="assets/imgs/check-mark.svg" class="icon-default"><img src="assets/imgs/check-mark-white.svg" class="icon-white"></i> \n						<span class="menutext">Success</span>\n					</li>\n					<li (click)="gotoInsurancePage()" class="pointer">\n										<i class="icon"><img src="assets/imgs/dollar-symbol.svg" class="icon-default"><img src="assets/imgs/dollar-symbol-white.svg" class="icon-white"></i> \n										<span class="menutext">Insurance</span>\n									</li>\n					<li (click)="toggleNav()" class="menucollapse"><i class="icon"><img src="assets/imgs/chevron-left.svg"></i> <span class="menutext">Collapse Menu</span></li>\n				</ul>\n			</div>\n			<div class="pagecontent wrapindent">\n				<ion-grid>\n					<ion-row>\n						<ion-col align-self-stretch [ngClass]="className==\'contentwrap\'?\'contentwrap\':\'na\'" class="content-area">\n							<div class="page-image">\n								<img width="100%" height="40%" src="./assets/imgs/table-of-content.jpg">\n								\n							</div>\n							<!-- <div class="page-title">\n								<h2>Table of contents</h2>\n								<ion-icon md="md-help" class="help-action"></ion-icon>\n							</div> -->\n							<div class="page-content font-lg">\n								<ul class="tableofcontent">\n									<li  class="pointer" (click)="goToHelloPage()">\n										<span class="menutext">Hello <span ion-text color="danger">(Audio)</span></span>\n									</li>\n									<li  (click)="goToProcedurePage()" class="pointer">\n										<i class="icon"><img src="assets/imgs/open-book.svg"></i>\n										<span class="menutext">About procedure</span>\n									</li>\n									<li (click)="gotToPreProcedure()" class="pointer">\n										<i class="icon"><img src="assets/imgs/numbers.svg"></i>\n										<span class="menutext">Pre-procedure</span>\n									</li>\n									<li (click)="gotToDuringProcedurePage()" class="pointer">\n										<i class="icon"><img src="assets/imgs/sleeping.svg"></i>\n										<span class="menutext">Procedure</span>\n									</li>\n									<li (click)="goToRecoverPage()" class="pointer">\n										<i class="icon"><img src="assets/imgs/eye-blocked.svg"></i>\n										<span class="menutext" >Recovery</span>\n									</li>\n									<li (click)="goToPostProcedurePage()" class="pointer">\n										<i class="icon"><img src="assets/imgs/home.svg"></i>\n										<span class="menutext">At Home</span>\n									</li>\n									<li (click)="goToWhatIfPage()" class="pointer">\n										<i class="icon"><img src="assets/imgs/question-mark.svg"></i>\n										<span class="menutext">What to do if</span>\n									</li>\n									<li (click)="gotToSuccessPage()" class="pointer">\n										<i class="icon"><img src="assets/imgs/check-mark.svg"></i>\n										<span class="menutext">Success</span>\n									</li>\n									<li (click)="gotoInsurancePage()" class="pointer">\n										<i class="icon"><img src="assets/imgs/dollar-symbol.svg"></i> \n										<span class="menutext">Insurance</span>\n									</li>\n								</ul>\n							</div>\n\n							<div class="arrownav">\n								<ion-icon name="ios-arrow-back" (click)="swipeRight()" class="iconarrow arrow-left"></ion-icon>\n								<ion-icon name="ios-arrow-forward" (click)="goToHelloPage()" class="iconarrow arrow-right"></ion-icon>\n							</div>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n			</div>\n		</div>\n	</div>\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar no-border-top color="dark">\n		<ion-segment color="light">\n			<ion-segment-button value="friends" (click)="goToHomePage()">\n				<ion-icon name="home"></ion-icon><br>\n			</ion-segment-button>\n			<ion-segment-button value="people" (click)="goToPeoplePage()">\n				<ion-icon name="people"></ion-icon><br>\n			</ion-segment-button>\n			<!-- <ion-segment-button value="calendar" (click)="goToPostProcedurePage()">\n				At Home\n			</ion-segment-button> -->\n		</ion-segment>\n	</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/tableofcontents/tableofcontents.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TableofcontentsPage);
    return TableofcontentsPage;
}());

//# sourceMappingURL=tableofcontents.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagetophysicianPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__procedure_procedure__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preprocedure_preprocedure__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__postprocedure_postprocedure__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__duringprocedure_duringprocedure__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recovery_recovery__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__success_success__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__whattodoif_whattodoif__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__people_people__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__messagetopatients_messagetopatients__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__insurancemessage_insurancemessage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__safari_fix__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__safari_fix___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__safari_fix__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














/**
 * Generated class for the MessagetophysicianPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessagetophysicianPage = /** @class */ (function () {
    function MessagetophysicianPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
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
    MessagetophysicianPage.prototype.toggleNav = function () {
        if (this.navClassName == 'na') {
            this.navClassName = 'opennav';
        }
        else if (this.navClassName == 'opennav') {
            this.navClassName = 'na';
        }
    };
    MessagetophysicianPage.prototype.ionViewDidLoad = function () {
        //    console.log('ionViewDidLoad MessagetophysicianPage');
    };
    MessagetophysicianPage.prototype.ionViewDidEnter = function () {
        __WEBPACK_IMPORTED_MODULE_13__safari_fix__["loadFix"]('page-messagetophysician');
    };
    MessagetophysicianPage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
    };
    MessagetophysicianPage.prototype.goToProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__procedure_procedure__["a" /* ProcedurePage */]);
    };
    MessagetophysicianPage.prototype.gotToPreProcedure = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__preprocedure_preprocedure__["a" /* PreprocedurePage */]);
    };
    MessagetophysicianPage.prototype.gotToDuringProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__duringprocedure_duringprocedure__["a" /* DuringprocedurePage */]);
    };
    MessagetophysicianPage.prototype.goToRecoverPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__recovery_recovery__["a" /* RecoveryPage */]);
    };
    MessagetophysicianPage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__postprocedure_postprocedure__["a" /* PostprocedurePage */]);
    };
    MessagetophysicianPage.prototype.goToWhatIfPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__whattodoif_whattodoif__["a" /* WhattodoifPage */]);
    };
    MessagetophysicianPage.prototype.goToPeoplePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__people_people__["a" /* PeoplePage */]);
    };
    MessagetophysicianPage.prototype.gotToSuccessPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__success_success__["a" /* SuccessPage */]);
    };
    MessagetophysicianPage.prototype.gotoInsurancePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__insurancemessage_insurancemessage__["a" /* InsurancemessagePage */]);
    };
    MessagetophysicianPage.prototype.swipeEvent = function (event) {
        if (event.direction === 2) {
            this.swipeLeft();
        }
        else if (event.direction === 4) {
            this.swipeRight();
        }
    };
    MessagetophysicianPage.prototype.swipeLeft = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__messagetopatients_messagetopatients__["a" /* MessagetopatientsPage */]);
        // this.presentSlidesModal();
    };
    MessagetophysicianPage.prototype.swipeRight = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
    };
    MessagetophysicianPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-messagetophysician',template:/*ion-inline-start:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/messagetophysician/messagetophysician.html"*/'<!--\n\n  Generated template for the MessagetophysicianPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n	<ion-navbar color="primary"  hideBackButton="true">\n\n		<button ion-button menuToggle  *ngIf=\'platform === "mobileweb"\'>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<!-- <ion-buttons left>\n\n			<button ion-button icon-only (click)="goBack()">\n\n				<ion-icon name="ios-arrow-back"></ion-icon>\n\n			</button>\n\n		</ion-buttons> -->\n\n		<ion-title  align-title="center">Message to Issuing Physicians</ion-title>\n\n		<!-- <ion-buttons right>\n\n			<button ion-button icon-only>\n\n				<ion-icon name="ios-search"></ion-icon>\n\n			</button>\n\n		</ion-buttons> -->\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content (swipe)="swipeEvent($event)">\n\n	<div *ngIf=\'platform === "mobileweb" || platform ==="web"\' [ngClass]="navClassName==\'opennav\'?\'navopen\':\'na\'">\n\n		<div class="pagecontainer">\n\n			<div class="pagenav">\n\n				<ul>\n\n					<li (click)="goToProcedurePage()">\n\n						<i class="icon"><img src="assets/imgs/open-book.svg" class="icon-default"><img src="assets/imgs/open-book-white.svg" class="icon-white"></i> \n\n						<span class="menutext">About procedure</span>\n\n					</li>\n\n					<li (click)="gotToPreProcedure()">\n\n						<i class="icon"><img src="assets/imgs/numbers.svg" class="icon-default"><img src="assets/imgs/numbers-white.svg" class="icon-white"></i> \n\n						<span class="menutext">Pre-procedure</span>\n\n					</li>\n\n					<li (click)="gotToDuringProcedurePage()">\n\n						<i class="icon"><img src="assets/imgs/sleeping.svg" class="icon-default"><img src="assets/imgs/sleeping-white.svg" class="icon-white"></i> \n\n						<span class="menutext">Procedure</span>\n\n					</li>\n\n					<li (click)="goToRecoverPage()">\n\n						<i class="icon"><img src="assets/imgs/eye-blocked.svg" class="icon-default"><img src="assets/imgs/eye-blocked-white.svg" class="icon-white"></i> \n\n						<span class="menutext">Recovery</span>\n\n					</li>\n\n					<li (click)="goToPostProcedurePage()">\n\n						<i class="icon"><img src="assets/imgs/home.svg" class="icon-default"><img src="assets/imgs/home-white.svg" class="icon-white"></i> \n\n						<span class="menutext">At Home</span>\n\n					</li>\n\n					<li (click)="goToWhatIfPage()">\n\n						<i class="icon"><img src="assets/imgs/question-mark.svg" class="icon-default"><img src="assets/imgs/question-mark-white.svg" class="icon-white"></i> \n\n						<span class="menutext">What to do if</span>\n\n					</li>\n\n					<li (click)="gotToSuccessPage()">\n\n						<i class="icon"><img src="assets/imgs/check-mark.svg" class="icon-default"><img src="assets/imgs/check-mark-white.svg" class="icon-white"></i> \n\n						<span class="menutext">Success</span>\n\n					</li>\n\n					<li (click)="gotoInsurancePage()" class="pointer">\n\n										<i class="icon"><img src="assets/imgs/dollar-symbol.svg" class="icon-default"><img src="assets/imgs/dollar-symbol-white.svg" class="icon-white"></i> \n\n										<span class="menutext">Insurance</span>\n\n									</li>\n\n					<li (click)="toggleNav()" class="menucollapse"><i class="icon"><img src="assets/imgs/chevron-left.svg"></i> <span class="menutext">Collapse Menu</span></li>\n\n				</ul>\n\n			</div>\n\n			<div class="pagecontent wrapindent">\n\n				<ion-grid>\n\n					<ion-row>\n\n						<ion-col align-self-stretch [ngClass]="className==\'contentwrap\'?\'contentwrap\':\'na\'" class="content-area">\n\n							<!-- <div class="page-title">\n\n								<h2>Message to physicians</h2>\n\n								<ion-icon md="md-help" class="help-action"></ion-icon>\n\n							</div> -->\n\n\n\n							<div class="page-content font-lg">\n\n\n\n								<p>This is the template for Laparoscopic Cholecystectomy. Each issuing physician can add, delete and modify content using a simple template-editing tool. This template’s content errs on the side of more, rather than less, to facilitate editing.<br><br>\n\n								Physician-specific communications solutions are included in each app, as well as branding.</p>\n\n\n\n								<p>Each app is physician-specific:</p>\n\n								<ul>\n\n									<li>Physician’s name on landing page.</li>\n\n									<li>The audio can be replaced with the physician’s audio or video.</li>\n\n									<li>1st person singular approach is used for communications to patient.</li>\n\n									<li>Communications solutions for email and telephone are set for each issuer.</li>\n\n								</ul>\n\n								<p>The patient is given a card, specific to the procedure and the physician.  Either by scanning the QR code or inputting the URL on the card, the app is uploaded to the patient’s devices – mobile, tablet, computer or TV.   The same URL is inserted into the patient’s EHR file for reference – but the app cannot access the patient’s file, hence no HIPAA implications.  Neither is there any other interaction with the EHR – it sits outside.</p>\n\n\n\n								<!-- <p><b><u>Reviewers:</u></b><br> \n\n								<u>Dr. Jaisa Olasky</u>, Mt. Auburn Hospital, <br>Assn’t Prof. Harvard Medical School<br>\n\n								<br>\n\n								<u>Dr. Brian M. Nguyen</u>, Beth Israel Deaconess Medical Center\n\n								<br> <br>\n\n								THIS IS A DEMO ONLY – NO PATIENT USE.</p> -->\n\n\n\n							</div>\n\n							<div class="arrownav">\n\n								<ion-icon name="ios-arrow-back" (click)="swipeRight()" class="iconarrow arrow-left"></ion-icon>\n\n								<ion-icon name="ios-arrow-forward" (click)="swipeLeft()" class="iconarrow arrow-right"></ion-icon>\n\n							</div>\n\n						</ion-col>\n\n					</ion-row>\n\n				</ion-grid>\n\n			</div>\n\n		</div>\n\n	</div>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n	<ion-toolbar no-border-top color="dark">\n\n		<ion-segment color="light">\n\n			<ion-segment-button value="friends" (click)="goToHomePage()">\n\n				<ion-icon name="home"></ion-icon><br>\n\n			</ion-segment-button>\n\n			<ion-segment-button value="people" (click)="goToPeoplePage()">\n\n				<ion-icon name="people"></ion-icon><br>\n\n			</ion-segment-button>\n\n			<!-- <ion-segment-button value="calendar" (click)="goToPostProcedurePage()">\n\n				At Home\n\n			</ion-segment-button> -->\n\n		</ion-segment>\n\n	</ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/messagetophysician/messagetophysician.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], MessagetophysicianPage);
    return MessagetophysicianPage;
}());

//# sourceMappingURL=messagetophysician.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagetopatientsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__procedure_procedure__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preprocedure_preprocedure__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__postprocedure_postprocedure__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__duringprocedure_duringprocedure__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recovery_recovery__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__success_success__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__whattodoif_whattodoif__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__people_people__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__insurancemessageafterpatientsmessage_insurancemessageafterpatientsmessage__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__assets_gtag__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__insurancemessage_insurancemessage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__messagetophysician_messagetophysician__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















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
        Object(__WEBPACK_IMPORTED_MODULE_12__assets_gtag__["a" /* googleAnalytics */])('messagetopatients');
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
    };
    MessagetopatientsPage.prototype.goToProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__procedure_procedure__["a" /* ProcedurePage */]);
    };
    MessagetopatientsPage.prototype.gotToPreProcedure = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__preprocedure_preprocedure__["a" /* PreprocedurePage */]);
    };
    MessagetopatientsPage.prototype.gotToDuringProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__duringprocedure_duringprocedure__["a" /* DuringprocedurePage */]);
    };
    MessagetopatientsPage.prototype.goToRecoverPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__recovery_recovery__["a" /* RecoveryPage */]);
    };
    MessagetopatientsPage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__postprocedure_postprocedure__["a" /* PostprocedurePage */]);
    };
    MessagetopatientsPage.prototype.goToWhatIfPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__whattodoif_whattodoif__["a" /* WhattodoifPage */]);
    };
    MessagetopatientsPage.prototype.goToPeoplePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__people_people__["a" /* PeoplePage */]);
    };
    MessagetopatientsPage.prototype.gotToSuccessPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__success_success__["a" /* SuccessPage */]);
    };
    MessagetopatientsPage.prototype.gotoInsurancePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__insurancemessage_insurancemessage__["a" /* InsurancemessagePage */]);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__insurancemessageafterpatientsmessage_insurancemessageafterpatientsmessage__["a" /* InsurancemessageafterpatientsmessagePage */]);
        // this.presentSlidesModal();
    };
    MessagetopatientsPage.prototype.swipeRight = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_14__messagetophysician_messagetophysician__["a" /* MessagetophysicianPage */]);
    };
    MessagetopatientsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-messagetopatients',template:/*ion-inline-start:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/messagetopatients/messagetopatients.html"*/'<!--\n\n  Generated template for the MessagetophysicianPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n	<ion-navbar color="primary"  hideBackButton="true">\n\n		<button ion-button menuToggle  *ngIf=\'platform === "mobileweb"\'>\n\n			<ion-icon name="menu"></ion-icon>\n\n		</button>\n\n		<!-- <ion-buttons left>\n\n			<button ion-button icon-only (click)="goBack()">\n\n				<ion-icon name="ios-arrow-back"></ion-icon>\n\n			</button>\n\n		</ion-buttons> -->\n\n		<ion-title  align-title="center">Message to Our Patients</ion-title>\n\n		<!-- <ion-buttons right>\n\n			<button ion-button icon-only>\n\n				<ion-icon name="ios-search"></ion-icon>\n\n			</button>\n\n		</ion-buttons> -->\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content (swipe)="swipeEvent($event)">\n\n	<div *ngIf=\'platform === "mobileweb" || platform ==="web"\' [ngClass]="navClassName==\'opennav\'?\'navopen\':\'na\'">\n\n		<div class="pagecontainer">\n\n			<div class="pagenav">\n\n				<ul>\n\n					<li (click)="goToProcedurePage()">\n\n						<i class="icon"><img src="assets/imgs/open-book.svg" class="icon-default"><img src="assets/imgs/open-book-white.svg" class="icon-white"></i> \n\n						<span class="menutext">About procedure</span>\n\n					</li>\n\n					<li (click)="gotToPreProcedure()">\n\n						<i class="icon"><img src="assets/imgs/numbers.svg" class="icon-default"><img src="assets/imgs/numbers-white.svg" class="icon-white"></i> \n\n						<span class="menutext">Pre-procedure</span>\n\n					</li>\n\n					<li (click)="gotToDuringProcedurePage()">\n\n						<i class="icon"><img src="assets/imgs/sleeping.svg" class="icon-default"><img src="assets/imgs/sleeping-white.svg" class="icon-white"></i> \n\n						<span class="menutext">Procedure</span>\n\n					</li>\n\n					<li (click)="goToRecoverPage()">\n\n						<i class="icon"><img src="assets/imgs/eye-blocked.svg" class="icon-default"><img src="assets/imgs/eye-blocked-white.svg" class="icon-white"></i> \n\n						<span class="menutext">Recovery</span>\n\n					</li>\n\n					<li (click)="goToPostProcedurePage()">\n\n						<i class="icon"><img src="assets/imgs/home.svg" class="icon-default"><img src="assets/imgs/home-white.svg" class="icon-white"></i> \n\n						<span class="menutext">At Home</span>\n\n					</li>\n\n					<li (click)="goToWhatIfPage()">\n\n						<i class="icon"><img src="assets/imgs/question-mark.svg" class="icon-default"><img src="assets/imgs/question-mark-white.svg" class="icon-white"></i> \n\n						<span class="menutext">What to do if</span>\n\n					</li>\n\n					<li (click)="gotToSuccessPage()">\n\n						<i class="icon"><img src="assets/imgs/check-mark.svg" class="icon-default"><img src="assets/imgs/check-mark-white.svg" class="icon-white"></i> \n\n						<span class="menutext">Success</span>\n\n					</li>\n\n					<li (click)="gotoInsurancePage()" class="pointer">\n\n										<i class="icon"><img src="assets/imgs/dollar-symbol.svg" class="icon-default"><img src="assets/imgs/dollar-symbol-white.svg" class="icon-white"></i> \n\n										<span class="menutext">Insurance</span>\n\n									</li>\n\n					<li (click)="toggleNav()" class="menucollapse"><i class="icon"><img src="assets/imgs/chevron-left.svg"></i> <span class="menutext">Collapse Menu</span></li>\n\n				</ul>\n\n			</div>\n\n			<div class="pagecontent wrapindent">\n\n				<ion-grid>\n\n					<ion-row>\n\n						<ion-col align-self-stretch [ngClass]="className==\'contentwrap\'?\'contentwrap\':\'na\'" class="content-area">\n\n							<!-- <div class="page-title">\n\n								<h2>Message to patients</h2>\n\n								<ion-icon md="md-help" class="help-action"></ion-icon>\n\n							</div> -->\n\n\n\n							<div class="page-content font-lg">\n\n\n\n								<p>This is not your regular app!</p>\n\n\n\n								<p>We want you to be fully aware of the procedure you are going to have, the alternatives, how to prepare, and what to expect.&nbsp; And, after you go home, we have described everything you need to do to get better: hour by hour, day by day.</p>\n\n\n\n								<p>Even better, you can look up every symptom to see what it is.&nbsp; If the app says that you need help, you just push a button and you are connected with either the physician on-call, my office, or you can send an email to us.</p>\n\n\n\n								<p>Finally, we can bring you the support and tools you need - 24 hours a day - and on every device you and your care-givers have.&nbsp; We are doing this together.&nbsp; It’s not quite like having us by your bedside, but you get the idea.</p>\n\n\n\n								<br>\n\n\n\n								<hr>\n\n\n\n								<p class="smallText"><em>Content provided by this app does not contain or constitute, and should not be interpreted as, medical advice or opinion.&nbsp; No doctor-patient relationship is created.&nbsp; The authors, editors, reviewers and publishers of this app are not responsible for errors, omissions, or the consequences from application of the information in this app.&nbsp; If any information you obtain from using this app is inconsistent with the advice from your health care provider, you should follow the advice of your health care provider.<br>\n\n\n\n								<br>\n\n\n\n								This app is for the issuer’s patients and their caregivers.&nbsp; All other uses are prohibited.&nbsp; Content cannot be used or copied without the permission of PatientApps Inc.</em></p>\n\n\n\n							</div>\n\n							<div class="arrownav">\n\n								<ion-icon name="ios-arrow-back" (click)="swipeRight()" class="iconarrow arrow-left"></ion-icon>\n\n								<ion-icon name="ios-arrow-forward" (click)="swipeLeft()" class="iconarrow arrow-right"></ion-icon>\n\n							</div>\n\n						</ion-col>\n\n					</ion-row>\n\n				</ion-grid>\n\n			</div>\n\n		</div>\n\n	</div>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n	<ion-toolbar no-border-top color="dark">\n\n		<ion-segment color="light">\n\n			<ion-segment-button value="friends" (click)="goToHomePage()">\n\n				<ion-icon name="home"></ion-icon><br>\n\n			</ion-segment-button>\n\n			<ion-segment-button value="people" (click)="goToPeoplePage()">\n\n				<ion-icon name="people"></ion-icon><br>\n\n			</ion-segment-button>\n\n			<!-- <ion-segment-button value="calendar" (click)="goToPostProcedurePage()">\n\n				At Home\n\n			</ion-segment-button> -->\n\n		</ion-segment>\n\n	</ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/messagetopatients/messagetopatients.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MessagetopatientsPage);
    return MessagetopatientsPage;
}());

//# sourceMappingURL=messagetopatients.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhydothisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__procedure_procedure__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preprocedure_preprocedure__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tableofcontents_tableofcontents__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__people_people__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_httpprovider_httpprovider__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__duringprocedure_duringprocedure__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__postprocedure_postprocedure__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__recovery_recovery__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__success_success__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__whattodoif_whattodoif__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assets_gtag__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__insurancemessage_insurancemessage__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















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
            this.subContent = procedureDetails.subcontent;
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
        Object(__WEBPACK_IMPORTED_MODULE_13__assets_gtag__["a" /* googleAnalytics */])('whydothis');
    };
    WhydothisPage.prototype.ionViewWillLeave = function () {
        this.content = "<p></p>";
    };
    WhydothisPage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    WhydothisPage.prototype.checkAudioEnded = function () {
        var thisObj = this;
        setTimeout(function () {
            thisObj.checkAudioEnded();
        }, 100);
        if (this.audioID.ended() === true && this.audioID != null) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__procedure_procedure__["a" /* ProcedurePage */]);
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__procedure_procedure__["a" /* ProcedurePage */]);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__procedure_procedure__["a" /* ProcedurePage */]);
    };
    WhydothisPage.prototype.gotToPreProcedure = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__preprocedure_preprocedure__["a" /* PreprocedurePage */]);
    };
    WhydothisPage.prototype.gotToDuringProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__duringprocedure_duringprocedure__["a" /* DuringprocedurePage */]);
    };
    WhydothisPage.prototype.goToRecoverPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__recovery_recovery__["a" /* RecoveryPage */]);
    };
    WhydothisPage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__postprocedure_postprocedure__["a" /* PostprocedurePage */]);
    };
    WhydothisPage.prototype.goToWhatIfPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__whattodoif_whattodoif__["a" /* WhattodoifPage */]);
    };
    WhydothisPage.prototype.goToPeoplePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__people_people__["a" /* PeoplePage */]);
    };
    WhydothisPage.prototype.gotToSuccessPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__success_success__["a" /* SuccessPage */]);
    };
    WhydothisPage.prototype.gotoInsurancePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__insurancemessage_insurancemessage__["a" /* InsurancemessagePage */]);
    };
    WhydothisPage.prototype.swipeLeft = function () {
        this.pageTop.scrollToTop(0);
        if (this.index == 'audio') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__procedure_procedure__["a" /* ProcedurePage */]);
        }
        else {
            if (this.length > this.index) {
                if ((this.index + 1) == this.length) {
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__preprocedure_preprocedure__["a" /* PreprocedurePage */]);
                }
                else {
                    var procedureDetails = this.httpService.getAboutProcedureListDetails(this.index + 1);
                    this.title = procedureDetails.content.title;
                    this.length = procedureDetails.length;
                    this.imgSrc = procedureDetails.content.img;
                    this.content = procedureDetails.content.content;
                    this.dropdown = procedureDetails.content.dropdown;
                    // if(procedureDetails.content.subcontent !='') {
                    this.subContent = procedureDetails.content.subcontent;
                    // }
                    this.index += 1;
                }
            }
            else {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__preprocedure_preprocedure__["a" /* PreprocedurePage */]);
            }
        }
    };
    WhydothisPage.prototype.swipeRight = function () {
        this.pageTop.scrollToTop(0);
        if (this.index == 'audio') {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tableofcontents_tableofcontents__["a" /* TableofcontentsPage */]);
        }
        else {
            if (this.index == 0) {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__procedure_procedure__["a" /* ProcedurePage */]);
            }
            else if (this.length > this.index) {
                var procedureDetails = this.httpService.getAboutProcedureListDetails(this.index - 1);
                this.content = procedureDetails.content.content;
                this.title = procedureDetails.content.title;
                this.imgSrc = procedureDetails.content.img;
                this.length = procedureDetails.length;
                this.dropdown = procedureDetails.content.dropdown;
                this.subContent = procedureDetails.subcontent;
                this.index -= 1;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Navbar */])
    ], WhydothisPage.prototype, "navBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('pageTop'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], WhydothisPage.prototype, "pageTop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], WhydothisPage.prototype, "slides", void 0);
    WhydothisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-whydothis',template:/*ion-inline-start:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/whydothis/whydothis.html"*/'<ion-header>\n	<ion-navbar color="primary" hideBackButton="true">\n	<!-- 	<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-buttons left>\n			<button ion-button icon-only (click)="navigateToProcedurePage()">\n				<ion-icon name="ios-arrow-back"></ion-icon>\n			</button>\n		</ion-buttons> -->\n		<ion-title align-title="center">{{title}}</ion-title>\n		<ion-buttons right>\n			 \n		</ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="single-page" (swipe)="swipeEvent($event)" #pageTop>\n	<div *ngIf=\'platform === "mobileweb" || platform ==="web"\' [ngClass]="navClassName==\'opennav\'?\'navopen\':\'na\'">\n		<div class="pagecontainer">\n			<div class="pagenav">\n				<ul>\n					<li (click)="goToProcedurePage()" class="active">\n					  <i class="icon"><img src="assets/imgs/open-book.svg" class="icon-default"><img src="assets/imgs/open-book-white.svg" class="icon-white"></i> \n					  <span class="menutext">About procedure</span>\n					 </li>\n					 <li (click)="gotToPreProcedure()">\n					  <i class="icon"><img src="assets/imgs/numbers.svg" class="icon-default"><img src="assets/imgs/numbers-white.svg" class="icon-white"></i> \n					  <span class="menutext">Pre-procedure</span>\n					 </li>\n					 <li (click)="gotToDuringProcedurePage()">\n					  <i class="icon"><img src="assets/imgs/sleeping.svg" class="icon-default"><img src="assets/imgs/sleeping-white.svg" class="icon-white"></i> \n					  <span class="menutext">Procedure</span>\n					 </li>\n					 <li (click)="goToRecoverPage()">\n					  <i class="icon"><img src="assets/imgs/eye-blocked.svg" class="icon-default"><img src="assets/imgs/eye-blocked-white.svg" class="icon-white"></i> \n					  <span class="menutext">Recovery</span>\n					 </li>\n					 <li (click)="goToPostProcedurePage()">\n					  <i class="icon"><img src="assets/imgs/home.svg" class="icon-default"><img src="assets/imgs/home-white.svg" class="icon-white"></i> \n					  <span class="menutext">At Home</span>\n					 </li>\n					 <li (click)="goToWhatIfPage()">\n					  <i class="icon"><img src="assets/imgs/question-mark.svg" class="icon-default"><img src="assets/imgs/question-mark-white.svg" class="icon-white"></i> \n					  <span class="menutext">What to do if</span>\n					 </li>\n					 <li (click)="gotToSuccessPage()">\n					  <i class="icon"><img src="assets/imgs/check-mark.svg" class="icon-default"><img src="assets/imgs/check-mark-white.svg" class="icon-white"></i> \n					  <span class="menutext">Success</span>\n					 </li>\n					 <li (click)="gotoInsurancePage()" class="pointer">\n										<i class="icon"><img src="assets/imgs/dollar-symbol.svg" class="icon-default"><img src="assets/imgs/dollar-symbol-white.svg" class="icon-white"></i> \n										<span class="menutext">Insurance</span>\n									</li>\n					 <li (click)="toggleNav()" class="menucollapse"><i class="icon"><img src="assets/imgs/chevron-left.svg"></i> <span class="menutext">Collapse Menu</span></li>\n				</ul>\n			</div>\n			<div class="pagecontent">\n				<ion-grid>\n					<ion-row>\n						<ion-col align-self-stretch [ngClass]="className==\'contentwrap\'?\'contentwrap\':\'na\'" class="content-area">\n							<div class="page-image" *ngIf="title != \'Hello\'">\n								<img width="100%" height="40%" src="{{imgSrc}}">\n							</div>\n							<div class="page-title" *ngIf="title == \'Hello\'">\n								<h2>A message from your Surgeon</h2>\n								<!-- <ion-icon md="md-help" class="help-action"></ion-icon> -->\n							</div>\n							<div class="page-title" *ngIf="title != \'Hello\'">\n								<h2>{{title}}</h2>\n								<!-- <ion-icon md="md-help" class="help-action"></ion-icon> -->\n							</div>\n							<div>\n								<div class="arrownav">\n									<div *ngIf="title == \'Hello\'">\n										<audio controls autoplay id="myaudio" preload="auto">\n											<source src="./assets/audios/audio.wav" type="audio/wav">\n											<!-- <source src="./assets/audios/lap_chole_about_procedure_hello.mp3" type="audio/mp3"> -->\n											Your browser does not support the audio element.\n										</audio>\n									</div>\n								</div>\n								<div class="page-image" *ngIf="title == \'Hello\'">\n								<img width="100%" height="40%" src="./assets/imgs/1.jpg">\n							</div>\n							<div *ngIf="title != \'Hello\' && dropdown==true">\n								<p [innerHTML]="subContent"></p>\n								<div *ngFor="let item of content;let i=index" class="pointer accordion-item accordion-multi"  [ngClass]="item.show==true?\'titleContainer\':\'na\'">\n									<div class="item-content breadcrumb">\n										<h4 (click)="activateItem(i)" class="accr-title">\n											{{item.title}}\n											<span class="arr-icon">\n												<ion-icon *ngIf="!item.show" name="ios-arrow-down"></ion-icon>\n												<ion-icon *ngIf="item.show" name="ios-arrow-up"></ion-icon>\n											</span>\n										</h4>\n										<div class="accr-content" [innerHTML]="item.desc" *ngIf="item.show"></div>\n									</div>\n								</div>\n							</div>\n\n								<div [innerHTML]="content" *ngIf="title != \'Hello\'&& dropdown==false"></div>\n							</div>\n							<div class="arrownav">\n								<ion-icon name="ios-arrow-back" (click)="swipeRight()" class="iconarrow arrow-left"></ion-icon>\n								<ion-icon name="ios-arrow-forward" (click)="swipeLeft()" class="iconarrow arrow-right"></ion-icon>\n							</div>\n						</ion-col>\n					</ion-row>\n				</ion-grid>\n			</div>\n		</div>\n	</div>\n\n	<!-- <ion-grid>\n\n		<div class="page-image" *ngIf="title != \'Hello\'">\n			<img width="100%" height="40%" src="{{imgSrc}}">\n			\n		</div>\n		<div class="page-content">\n			<div  *ngIf="title == \'Hello\'">\n				<div class="page-title">\n				<h2>A message from your Surgeon</h2>\n			</div>\n		 \n				  <ion-slides autoplay="5000" loop="true" speed="100" (ionSlideDidChange)="slideChanged()" pager="true">\n				  <ion-slide>\n					<ion-img style="width: 800px; height: 600px;" src="./assets/imgs/1.jpg"></ion-img>\n				  </ion-slide>\n				  <ion-slide>\n					<ion-img style="width: 800px; height: 600px;" src="./assets/imgs/2.jpg"></ion-img>\n				  </ion-slide>\n				  <ion-slide>\n					<ion-img style="width: 800px; height: 600px;"  src="./assets/imgs/3.jpg"></ion-img>\n				  </ion-slide>\n				  <ion-slide>\n					<ion-img style="width: 800px; height: 600px;"  src="./assets/imgs/4.jpg"></ion-img>\n				  </ion-slide>\n\n							  \n				</ion-slides>\n			</div>\n\n			<div class="page-title">\n				<h2 *ngIf="title != \'Hello\'">{{title}}</h2>\n			</div>\n			 <div class="accr-content" [innerHTML]="content" *ngIf="title != \'Hello\'"></div>\n			\n			\n			<div class="arrownav">\n				 <div class="accr-content" [innerHTML]="content"  *ngIf="title == \'Hello\'"></div>\n				<ion-icon name="ios-arrow-back" (click)="swipeRight()" class="iconarrow arrow-left"></ion-icon>\n				<ion-icon name="ios-arrow-forward" (click)="swipeLeft()" class="iconarrow arrow-right"></ion-icon>\n			</div>\n		</div>\n	</ion-grid> -->\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar no-border-top color="dark">\n		<ion-segment color="light">\n			<ion-segment-button value="friends" (click)="goToHomePage()">\n				<ion-icon name="home"></ion-icon><br>\n			</ion-segment-button>\n			<ion-segment-button value="people" (click)="goToPeoplePage()">\n				<ion-icon name="people"></ion-icon><br>\n			</ion-segment-button>\n			<!-- <ion-segment-button value="calendar" (click)="goToPostProcedurePage()">\n				At Home\n			</ion-segment-button> -->\n		</ion-segment>\n	</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/aryan/Documents/aryan/professional/thomas/robotic-cholecystectomy/robotic-cholecystectomy-live/webapp/src/pages/whydothis/whydothis.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__providers_httpprovider_httpprovider__["a" /* HttpproviderProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], WhydothisPage);
    return WhydothisPage;
}());

//# sourceMappingURL=whydothis.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map