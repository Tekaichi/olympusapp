import { Component, OnInit, Input} from '@angular/core';
import {DivisionService} from '../division.service';
import {Division} from '../shared/models/division';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adddevice',
  templateUrl: './adddevice.component.html',
  styleUrls: ['./adddevice.component.css']
})
export class AdddeviceComponent implements OnInit {

  
  submitted = false;

  division :Division;
  title :String;
  
  constructor( private route : ActivatedRoute,private router: Router) {

    

   }

  // getDivision(id:number):void{
   
    //this.divisionService.getDivision(id).subscribe(
     // division => {
       // this.division = division; 
       
       // this.title = division.title;}
    //);
 // }

   onSubmit() { this.submitted = true; }


  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
   console.log(id);
  }

}
