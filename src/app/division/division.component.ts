import { Component, OnInit } from '@angular/core';
import {DivisionService} from '../division.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {


  title = "Division";
  info = ["temperatura: 10ºC","humidade: 30%"] //Placeholders, get them data from a service
  constructor(private divisionService : DivisionService) {

    //get them infos
    //this.info = this.divisionService.getInfo(div);
    //init title in contructor
   }

  ngOnInit() {
  }

}
