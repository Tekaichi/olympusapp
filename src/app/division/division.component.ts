import { Component, OnInit } from '@angular/core';
import {DivisionService} from '../division.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {


  title = "Division";
  info = [] //Placeholders, get them data from a service
  constructor(private divisionService : DivisionService) {

  this.getInfo();
   }

   getInfo():void{
     this.divisionService.getInfo().subscribe( info => this.info = info);
   }

  ngOnInit() {
  }

}
