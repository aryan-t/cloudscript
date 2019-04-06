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
import { IonicPage, NavController, NavParams, AlertController, Content } from 'ionic-angular';
import { HttpproviderProvider } from '../../providers/httpprovider/httpprovider';
import { googleAnalytics } from '../../assets/gtag';
/**
 * Generated class for the PostprocedurePage page.
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
import { RecoveryPage } from '../recovery/recovery';
import { SuccessPage } from '../success/success';
import { WhattodoifPage } from '../whattodoif/whattodoif';
import { HomePage } from '../home/home';
import { PeoplePage } from '../people/people';
var PostprocedurePage = /** @class */ (function () {
    function PostprocedurePage(navCtrl, navParams, alertCtrl, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.httpService = httpService;
        this.platform = localStorage.getItem('platform');
        this.className = 'contentwrap';
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
        this.navCtrl.setRoot(HomePage);
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
        googleAnalytics('postprocedure');
    };
    PostprocedurePage.prototype.ionViewDidLoad = function () {
        this.getHomeContent();
        this.showFirstPage = true;
    };
    PostprocedurePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    PostprocedurePage.prototype.goToProcedurePage = function () {
        this.navCtrl.push(ProcedurePage);
    };
    PostprocedurePage.prototype.gotToPreProcedure = function () {
        this.navCtrl.push(PreprocedurePage);
    };
    PostprocedurePage.prototype.gotToDuringProcedurePage = function () {
        this.navCtrl.push(DuringprocedurePage);
    };
    PostprocedurePage.prototype.goToRecoverPage = function () {
        this.navCtrl.push(RecoveryPage);
    };
    PostprocedurePage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(PostprocedurePage_1);
    };
    PostprocedurePage.prototype.goToWhatIfPage = function () {
        this.navCtrl.push(WhattodoifPage);
    };
    PostprocedurePage.prototype.goToPeoplePage = function () {
        this.navCtrl.push(PeoplePage);
    };
    PostprocedurePage.prototype.gotToSuccessPage = function () {
        this.navCtrl.push(SuccessPage);
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
                this.navCtrl.setRoot(WhattodoifPage);
            }
            else {
                this.getPageContent(this.currentSelectedIndex + 1);
            }
        }
    };
    PostprocedurePage.prototype.swipeRight = function () {
        this.pageTop.scrollToTop(0);
        if (this.showFirstPage === true) {
            this.navCtrl.setRoot(RecoveryPage);
        }
        if (this.currentSelectedIndex == 0) {
            if (this.showFirstPage == true) {
                this.showFirstPage = false;
                this.navCtrl.setRoot(RecoveryPage);
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
    var PostprocedurePage_1;
    __decorate([
        ViewChild('pageTop'),
        __metadata("design:type", Content)
    ], PostprocedurePage.prototype, "pageTop", void 0);
    PostprocedurePage = PostprocedurePage_1 = __decorate([
        IonicPage(),
        Component({
            selector: 'page-postprocedure',
            templateUrl: 'postprocedure.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AlertController, HttpproviderProvider])
    ], PostprocedurePage);
    return PostprocedurePage;
}());
export { PostprocedurePage };
// }
// }
//# sourceMappingURL=postprocedure.js.map