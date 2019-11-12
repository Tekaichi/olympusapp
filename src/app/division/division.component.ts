import { Component, OnInit, Input } from '@angular/core';
import {DivisionService} from '../division.service';
import {Division} from '../shared/models/division';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {


  @Input()
  id: number;

  division : Division;
  title :String;
  info = [] //Placeholders, get them data from a service
  constructor(private divisionService : DivisionService) {

  
  this.getDivision(this.id);
   }

   getDivision(id:number):void{
     this.divisionService.getDivision(id).subscribe(
       division => {
         this.division = division; 
        
         this.info = division.info;
         this.title = division.title;}
     );
   }
  

  ngOnInit() {
  }

}
