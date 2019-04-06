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
import { Platform, Nav } from 'ionic-angular';
// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ProcedurePage } from '../pages/procedure/procedure';
import { PreprocedurePage } from '../pages/preprocedure/preprocedure';
import { DuringprocedurePage } from '../pages/duringprocedure/duringprocedure';
import { RecoveryPage } from '../pages/recovery/recovery';
import { SuccessPage } from '../pages/success/success';
import { WhattodoifPage } from '../pages/whattodoif/whattodoif';
import { PostprocedurePage } from '../pages/postprocedure/postprocedure';
var MyApp = /** @class */ (function () {
    function MyApp(platform) {
        this.platform = platform;
        this.rootPage = HomePage;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'About procedure', component: ProcedurePage },
            { title: 'Pre-procedure', component: PreprocedurePage },
            { title: 'During procedure', component: DuringprocedurePage },
            { title: 'Recovery', component: RecoveryPage },
            { title: 'Post procedure', component: PostprocedurePage },
            { title: 'What to do if', component: WhattodoifPage },
            { title: 'Success', component: SuccessPage }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.nav.setRoot(HomePage);
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
        ViewChild(Nav),
        __metadata("design:type", Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [Platform])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map