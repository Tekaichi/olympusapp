import { Component, OnInit, ViewChild,ElementRef, AfterViewInit } from '@angular/core';
import {DivisionService} from '../division.service';
import {Division} from '../shared/models/division';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit, AfterViewInit {

  
  @ViewChild('layout',{static:true}) layout : ElementRef;

  edit : Boolean;
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

  editDivision(){
   this.edit = true;
  }
  ngOnInit() {
    
    let id = +this.route.snapshot.paramMap.get('id');
    this.id =  id;
    this.getDivision(id);
    this.edit = false;
  }
  ngAfterViewInit() {
 
  
    this.drawDiv();
  }

  drawDiv(){
    
    let from = this.division.layout.from;
    let to = this.division.layout.to;
  
    
  
    let parentHeight = this.layout.nativeElement.offsetHeight;
  
    //console.log(parentHeight);
     
    //Fill the screen ? 

    let width = Math.abs(to.x -from.x)*1.5;
    let height = Math.abs(to.y -from.y)*1.5;
   
   

    //Devices
    let vals = "";
    this.division.devices.forEach(function(device){
      let name = device.name;
      let pos = device.position;
       //<app-type [input]...></app-type>
      vals +="<p style='position:relative;top:"+pos.y+"vw; left:"+pos.x+"vw;'>"+ name+"</p>";
    })
   
    let style = "style='background-color:white;margin:0 auto;margin-top:2vw;margin-bottom:2vw;border:1px solid black;width:"+width+"vw; height:"+height+"vw;'" //+size+"'";//position + size;
    //Insert division
    this.layout.nativeElement.insertAdjacentHTML('beforeend', "<div #division class='division'"+style+">"+vals+"</div>");
    
  
    
    
 
    
  }
 

}
