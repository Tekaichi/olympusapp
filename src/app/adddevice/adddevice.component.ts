import { Component, OnInit, Input} from '@angular/core';
import {DivisionService} from '../division.service';
import {Division} from '../shared/models/division';
import { Router, ActivatedRoute } from '@angular/router';
import {Device} from '../shared/models/device';

@Component({
  selector: 'app-adddevice',
  templateUrl: './adddevice.component.html',
  styleUrls: ['./adddevice.component.css']
})
export class AdddeviceComponent implements OnInit {

  model = new Device ();

  divisionID: number;
  
  constructor( private route : ActivatedRoute,private router: Router) {

   }

  // getDivision(id:number):void{
   
    //this.divisionService.getDivision(id).subscribe(
     // division => {
       // this.division = division; 
       
       // this.title = division.title;}
    //);
 // }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.divisionID = id;
  }
  submitted = false;

  onSubmit() { this.submitted = true; 
  
    console.log(this.model);
  }

  newDevice() {
    this.model = new Device();
  }

}
