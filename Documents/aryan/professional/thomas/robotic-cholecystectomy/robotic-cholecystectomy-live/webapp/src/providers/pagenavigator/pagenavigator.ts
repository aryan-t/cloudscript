import { Injectable } from '@angular/core';
import { App } from "ionic-angular";
/*
  Generated class for the PagenavigatorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PagenavigatorProvider {

  constructor(public app:App) {
    console.log('Hello PagenavigatorProvider Provider');
  }

}
