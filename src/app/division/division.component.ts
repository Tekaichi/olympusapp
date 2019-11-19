import { Component, OnInit, ViewChild,ElementRef, AfterViewInit } from '@angular/core';
import {DivisionService} from '../division.service';
import {Division} from '../shared/models/division';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  
  @ViewChild('layout',{static:true}) layout : ElementRef;

  edit : Boolean;
  id:number;
  division : Division;
  title :String;
  info = [] 
  width : number;
  height : number;
  
  constructor(private divisionService : DivisionService,  private route : ActivatedRoute,private router: Router) {
 
   }

   getDivision(id:number):void{
     this.divisionService.getDivision(id).subscribe(
       division => {
         this.division = division; 
        
         this.info = division.info;
         this.title = division.title;
        
         let scale = 1.5;
         this.width = Math.abs(division.layout.to.x -division.layout.from.x)*scale;
         this.height = Math.abs(division.layout.to.y -division.layout.from.y)*scale;
        }
     );
   }
  

   addDevice(): void{
   
    this.router.navigate(['/adddevice',this.id]);
  }

  editDivision(){
   this.edit = true;
  }
  ngOnInit() {
    
    let id = +this.route.snapshot.paramMap.get('id');
    this.id =  id;
    this.getDivision(id);
    this.edit = false;
  }
 
 

}
