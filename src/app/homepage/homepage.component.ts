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
  
  hello: String
  title: String
  divisions : Division[];
  procedures : Procedure[];
  luminosity: String;
  time: String;
  temperature: String;

  constructor(private divisionService : DivisionService,private procedureService : ProcedureService,  private route : ActivatedRoute, private router: Router) { 
    this.hello = 'Carlos'; //No
    this.title = 'My Home'; //??
    this.luminosity = '300 KW';
    this.time = '10:00 PM';
    this.temperature = '25 ºC';
  }

  //Isto deveria receber um id do user, se quisermos multiplos utilizadores numa sessão.
  getDivisions():void{
    this.divisionService.getDivisions().subscribe(
      division => {
      this.divisions = division;
      }
    );
  }

  getProcedures():void{
    this.procedureService.getProcedures().subscribe(
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
    
    
    //routerLink="/heroes",
    
    //(click) = "gotodivision(id)" é preciso adicionar estas funcionalidades para ser possivel navegar para as divisões
    let style = "style='position:absolute;background-color:white;margin:0 auto;top:"+from.y+"vw;left:"+from.x+"vw;border:1px solid black;width:"+width+"vw; height:"+height+"vw;'" //+size+"'";//position + size;
    //Insert division
    //this.layout.nativeElement.insertAdjacentHTML('beforeend', " <a ng-click=goToDivision("+division.id+")    >    <div #division class='division'"+style+"> </div> </a>");
    this.layout.nativeElement.insertAdjacentHTML('beforeend', " <a href='division/"+division.id+"'> <div #division class='division'"+style+">"+
    "<div  style='position:relative;top: 50%;left: 50%;transform: translate(-50%, -50%);'>"+division.title+"</div>"
    +"</div> </a>  " );
    
    //This works
    //this.layout.nativeElement.insertAdjacentHTML('beforeend', " <a  (href='adver.html')>     <div #division class='division'"+style+"></div>       </a>");
  
    
    
    
    
  }

}
