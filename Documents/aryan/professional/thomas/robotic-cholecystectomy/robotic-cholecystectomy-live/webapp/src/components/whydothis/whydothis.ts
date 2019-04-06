import { Component } from '@angular/core';

/**
 * Generated class for the WhydothisComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'whydothis',
  templateUrl: 'whydothis.html'
})
export class WhydothisComponent {

  text: string;

  constructor() {
    console.log('Hello WhydothisComponent Component');
    this.text = 'Hello World';
  }

}
