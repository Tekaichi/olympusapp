import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-goBack',
  templateUrl: './goBackButton.component.html',
  styleUrls: ['./goBackButton.component.css']
})
export class goBackButton implements OnInit {


  constructor(private _location: Location) {
  }

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }
}