import { Component, OnInit, ViewChild,ElementRef, AfterViewInit } from '@angular/core';
import {DivisionService} from '../division.service';
import {Division} from '../shared/models/division';
import { Router, ActivatedRoute } from '@angular/router';
import { Device } from '../shared/models/device';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  

  
  movingDevice : Device;
  edit : Boolean;
  id:number;
  division : Division;
  title :String;
  info = [] 
  width : number;
  height : number;
  ratio :number;
  constructor(private divisionService : DivisionService,  private route : ActivatedRoute,private router: Router) {
    this.edit = false;
   }

   getDivision(id:number):void{
     this.divisionService.getDivision(id).subscribe(
       division => {
         this.division = division; 
        
         this.info = division.info;
         this.title = division.title;
        
       
         const maxarea = 800; //Maximum area of the division
         //Should it be maximum height?

         this.width = Math.abs(division.layout.to.x -division.layout.from.x);
         this.height = Math.abs(division.layout.to.y -division.layout.from.y);

         let area = this.width* this.height;

         let ratio =  Math.sqrt(maxarea/area);
          this.ratio =ratio;
         this.width *= ratio;
         this.height *= ratio;

        }
     );
   }
  

   addDevice(): void{
   
    this.router.navigate(['/adddevice',this.id]);
  }

  editDivision(){
   this.edit = !this.edit;
 
  }
  ngOnInit() {
    
    let id = +this.route.snapshot.paramMap.get('id');
    this.id =  id;
    this.getDivision(id);
  
    this.edit = false;
  }
 
  editDevice(device : Device): void{

    this.router.navigate(["/editdevice",this.id,device.id]);
  }

  move(device :Device){
    this.movingDevice = device;
  }
 
  cancelMove(device:Device){
    this.movingDevice = null;
  }
  confirmMove(device:Device){
     

    this.movingDevice = null;
    let  child =document.getElementById("editedDevice");
  
    let parent = child.parentElement;
    let parentStyle = parent.getAttribute("style");
    let realPosPx = parentStyle.replace("left: ","").replace("vw","").replace("top: ","").replace("vw;","").split(";");
    console.log(realPosPx);

  let division = document.getElementsByClassName("division")[0];
  

  let vwSizeString = division.getAttribute("style").replace("width: ","").replace("vw","").replace("height: ","").replace("vw;",""); //Gets width: Xvw; height Yvw;
  let pxSize = [division.clientWidth,division.clientHeight]; //Get them px values
  let vwSize = vwSizeString.split(";");
  let ratio = [pxSize[0]/+vwSize[0],pxSize[1]/+vwSize[1]];  //Gets the ratio between the px and vw values

  let transform:string = child.style.webkitTransform;
  


  let webkit = transform.substr(transform.indexOf("(")+1,transform.lastIndexOf(")"));
  let vals = webkit.split(",");
  let x :number= +vals[0].replace("px","");
  let y:number= +vals[1].replace("px","");
  
  console.log("Ratio: ",ratio);
  //x+=+realPosPx[1]*ratio[0];
  //y+=+realPosPx[0]*ratio[1]; 
  console.log("X,Y",x,y);
 
  //Not working properly


  x+= parent.offsetLeft*0.5;
  y+= parent.offsetTop*0.5;
  x *=1/ratio[0];
  y *=1/ratio[1];
  console.log("X,Y",x,y);

 
  device.position ={
    x: x,  //Converts the transformed Xpx to Xvw
    y: y //Converf the transformed Ypx to Yvw
  }

  console.log("X,Y",x,y);
 
  }

}
