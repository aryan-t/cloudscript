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
import { App, NavController } from 'ionic-angular';
/**
    This section includes all the pages related to procedures
**/
import { PostprocedurePage } from '../postprocedure/postprocedure';
import { PeoplePage } from '../people/people';
import { MessagetopatientsPage } from '../messagetopatients/messagetopatients';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, appCtrl) {
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
    }
    HomePage.prototype.navigateToMessagePage = function () {
        // this.navCtrl.setRoot(ProcedurePage)
        this.navCtrl.push(MessagetopatientsPage);
    };
    HomePage.prototype.goToPostProcedurePage = function () {
        this.navCtrl.push(PostprocedurePage);
    };
    HomePage.prototype.goToPeoplePage = function () {
        this.navCtrl.push(PeoplePage);
    };
    HomePage.prototype.navigateToPostProcedurePage = function () {
        this.navCtrl.push(PostprocedurePage);
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController, App])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map