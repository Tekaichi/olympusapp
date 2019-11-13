import { Component, OnInit, Input } from '@angular/core';
import {DivisionService} from '../division.service';
import {Division} from '../shared/models/division';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  

  
  id:number;
  division : Division;
  title :String;
  info = [] //Placeholders, get them data from a service
  
  constructor(private divisionService : DivisionService,  private route : ActivatedRoute,private router: Router) {
 
   }

   getDivision(id:number):void{
   
     this.divisionService.getDivision(id).subscribe(
       division => {
         this.division = division; 
        
         this.info = division.info;
         this.title = division.title;}
     );
   }
  

   addDevice(): void{
   
    this.router.navigate(['/adddevice',this.id]);
  }
  ngOnInit() {
    
    let id = +this.route.snapshot.paramMap.get('id');
    this.id =  id;
    console.log(this.id);
    this.getDivision(id);
  }

}
