import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
    selector: 'goBack',
    templateUrl: './goBack.component.html',
    styleUrls: ['./goBack.component.css'],
  
  })
export class GoBackButton {

  constructor(private _location: Location) 
  {}

  backClicked() {
    this._location.back();
  }
}