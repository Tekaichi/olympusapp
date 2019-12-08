import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Division } from '../shared/models/division';
import { Router, ActivatedRoute } from '@angular/router';
import { Device, SystemDevice } from '../shared/models/device';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DevicesService } from '../devices.service';
import { DivisionService } from '../division.service';
@Component({
  selector: 'app-adddevice',
  templateUrl: './adddevice.component.html',
  styleUrls: ['./adddevice.component.css'],
})
export class AdddeviceComponent implements OnInit {
  @ViewChild("addeddevice",{static:true}) posDev :ElementRef;


  
  titleMessage :string;

  model: Device;
 
  
  tempType: SystemDevice;
  selectedType: SystemDevice; 
  title: string;
  width: number;
  height: number;
  devices: SystemDevice[];
  division: Division;
  closeResult: string;
  activeModal: NgbActiveModal ;
  selectedUrl : string;
  widthratio : number;
  heightratio:number;
  isEdit : boolean;

  constructor(private route: ActivatedRoute, private router: Router, private modalService: NgbModal, private deviceService: DevicesService, private divisionService: DivisionService) {

  }

  open(content) {
    
    this.modalService.dismissAll();

  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true }).result.then((result) => {
     this.closeResult = `Closed with: ${result}`;
     
   
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

    
      if(reason == "Cross click"){
      this.selectedType = null;
      this.selectedUrl = null;
      }
    });

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    let deviceId = this.route.snapshot.paramMap.get("deviceId");
    this.getDivision(id);
    if(deviceId){
      this.isEdit = true;
      this.model = this.deviceService.getDevice(id,+deviceId);
      this.titleMessage = "Edit Device of"

    }else{
      this.model = new Device();
      this.model.position={
        x:this.model.position.x/this.widthratio,
        y:this.model.position.y /this.heightratio
      }
      this.isEdit = false;
      this.titleMessage = "Add new Device to"
 
       
      
    }

    
    this.deviceService.getKnownDeviceTypes().subscribe(devices => this.devices = devices);
  }
  submitted = false;
  getDivision(id: number): void {
    this.divisionService.getDivision(id).subscribe(
      division => {
        this.division = division;


        this.title = division.title;


        const max = 40;
        
        
        
      

        this.width = Math.abs(division.layout.to.x - division.layout.from.x);
        this.height = Math.abs(division.layout.to.y - division.layout.from.y);
      
        let width_radio = max/this.width;
        let  height_ratio = max/this.height;
       
        let ratio = this.width/this.height;
     
        if(this.width > this.height){
          this.width *=width_radio;
          let height =  this.width/ratio;
          this.heightratio = height/this.height;
          this.height = height;
          this.widthratio = width_radio;
        }else{
          this.height *=height_ratio;
          let width = ratio*this.height;
          this.widthratio = width/this.width;
          this.width = width;
          this.heightratio = height_ratio;
        }
        
     
      
     

      }
    );
  }

  onSubmit() {
  this.submitted = true;
  this.submit();
  
  }

  newDevice() {
    this.model = new Device();
  }

  selectDevice(type: SystemDevice): void {

    this.selectedType = type;
  }
  selectUrl(url: string): void {

    
    this.selectedUrl = url;
    
  }

  save():void{
   
    
    this.model.url = this.selectedUrl;
    this.model.device = this.selectedType;
    this.model.currentState = this.model.device.states[1];
    window.scrollTo(0,document.body.scrollHeight);

  }
  goToDivision(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/division', id]);
  }


  submit():void{

    let child;
    if(this.isEdit){
      child =document.getElementById("editedDevice");
    }else{
    child = this.posDev.nativeElement.children[0];
    }

   
  let division = document.getElementsByClassName("division")[0];
  let vwSizeString = division.attributes[3].nodeValue.replace("width: ","").replace("vw","").replace("height: ","").replace("vw;",""); //Gets width: Xvw; height Yvw;
  let pxSize = [division.clientWidth,division.clientHeight]; //Get them px values
  let vwSize = vwSizeString.split(";");
  let ratio = [pxSize[0] / +vwSize[0], pxSize[1] / +vwSize[1]];  //Gets the ratio between the px and vw values
  

  let transform:string = child.style.webkitTransform;
  let x :number,y:number;
  if(transform){
    let webkit = transform.substr(transform.indexOf("(")+1,transform.lastIndexOf(")"));
    let vals = webkit.split(",");
    x =  +vals[0].replace("px","")/ratio[0];
    y=  +vals[1].replace("px","")/ratio[1];
  }else{
    x = 0;
    y = 0; 
  }


  x/=(this.widthratio);
  y/=(this.heightratio);


  x+=this.model.position.x
  y+=this.model.position.y
 
  


  
  




  this.model.position ={
    x: x , //Converts the transformed Xpx to Xvw
    y: y//Converts the transformed Ypx to Yvw
  }

  
  


  
  
 

  if(!this.isEdit){
      this.deviceService.add(this.model,this.division);
  }else{
    //update
    //needed if we get some backend action going *wink wink*
  }
  
  this.router.navigate(["/division",this.division.id]);
  }


  
}
