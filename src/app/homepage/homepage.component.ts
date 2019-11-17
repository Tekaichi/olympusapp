import { Component, OnInit, ViewChild,ElementRef, AfterViewInit } from '@angular/core';
import {DivisionService} from '../division.service';
import {Division} from '../shared/models/division';
import {ProcedureService} from '../procedures.service';
import {Procedure} from '../shared/models/procedures';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  @ViewChild('layout',{static:true}) layout : ElementRef;
  

  divisions : Division[];
  procedures : Procedure[];
  luminosity: String;
  time: String;
  temperature: String;

  constructor(private divisionService : DivisionService,private procedureService : ProcedureService,  private router: Router) { 
  
 
    this.luminosity = '300 KW'; //luminosity or energy ???? get from somewhere...
    let date = new Date();
    if(date.getHours() <10){
      this.time  = "0"+ date.getHours();
    }
    this.time +=":";
    if(date.getMinutes() < 10){
      this.time +="0";
    }
    this.time +=  date.getMinutes().toString();
    this.temperature = '25 ºC'; //Get from somewhere
  }

  //Isto deveria receber um id do user, se quisermos multiplos utilizadores numa sessão.
  getDivisions():void{
    this.divisionService.getDivisions().subscribe(
      division => {
      this.divisions = division;
      }
    );
  }
  //Isto deveria receber um id do user, se quisermos multiplos utilizadores numa sessão.
  getProcedures():void{
    this.procedureService.getTopProcedures().subscribe(
      procedure => {
      this.procedures = procedure;
      }
    );
  }

  ngOnInit() {
    this.getDivisions();
    this.getProcedures();
  }

  goToSettings(): void{
    this.router.navigate(['/settings']);
  }

  goToLogs(): void{
    this.router.navigate(['/logs']);
  }

  goToAnalytics(): void{
    this.router.navigate(['/analytics']);
  }

  goToProcedures(): void{
    this.router.navigate(['/procedures']);
  }

  goToDivision(id: number): void{
    this.router.navigate(['/division',id]);

  }

  ngAfterViewInit() {
 
    let local = this;
    this.divisions.forEach(function(division){
      local.drawDiv(division); //Draws the divisions. 
    })
  
  }

  drawDiv(division: Division){
    
    let from = division.layout.from;
    let to = division.layout.to;
  
    
  
    let parentHeight = this.layout.nativeElement.offsetHeight;
  
    //console.log(parentHeight);
     
    //Fill the screen ? 

    let scale = 0.9;
    let width = Math.abs(to.x -from.x)*scale;
    let height = Math.abs(to.y -from.y)*scale;
    

    from.x *=scale;
    from.y *=scale;
    

    //Devices
    /*let vals = "";
    division.devices.forEach(function(device){
      let name = device.name;
      let pos = device.position;
      pos.x *=scale;
      pos.y *=scale;
      //Center the device
     // pos.x -= 3;//Some width factor; 
      //pos.y -= 0.1; //Some height factor
       //<app-type [input]...></app-type>
      vals +="<span style='position:absolute;top:"+pos.y+"vw; left:"+pos.x+"vw;'>"+ name+"</span>";
    })*/
    
    
    
    let style = "style='position:absolute;margin:0 auto;top:"+from.y+"vw;left:"+from.x+"vw;border:1px solid black;width:"+width+"vw; height:"+height+"vw;'" //+size+"'";//position + size;
    //Insert division
    this.layout.nativeElement.insertAdjacentHTML('beforeend', " <a href='division/"+division.id+"'> <div class='division'"+style+">"+
    "<div  style='position:relative;top: 50%;left: 50%;transform: translate(-50%, -50%);'>"+division.title+"</div>"
    +"</div> </a>  " );
    
    
    
    
    
  }

}
