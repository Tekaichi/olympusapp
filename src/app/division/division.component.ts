import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DivisionService } from '../division.service';
import { Division } from '../shared/models/division';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Device } from '../shared/models/device';
import { MOCKDIVISION } from "../mocks/mockdivision";
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  
  edit: Boolean;
  id: number;
  division: Division;
  devices: Device[]
  title: String;
  info = []
  width: number;
  height: number;
  widthratio: number;
  heightratio:number;
  closeResult: string;
  activeModal: NgbActiveModal;
  movingDevice: Device;


  constructor(private divisionService: DivisionService, private route: ActivatedRoute, private router: Router, private modalService: NgbModal, private devicesService: DevicesService) {
    this.edit = false;

  }

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
        // x = a/b
        // x*b = a
        // b = a/x
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
        
     
        this.devices = this.division.devices;

     
     
      
     

      }
    );
  }



  addDevice(): void {

    this.router.navigate(['/adddevice', this.id]);
  }

  go404(): void{
    this.router.navigate(['/reee']);
  }
  editDivision() {
    this.edit = !this.edit;

    var elem = document.getElementById("edBtn");
    var bt = document.getElementById("b");

    if(elem.innerHTML==("Edit Devices")){
      elem.innerHTML = "Finish Editing Devices"
      bt.style.backgroundColor = "brown"
    }
    else{
      elem.innerHTML = "Edit Devices"
      bt.style.backgroundColor = "#0f1e3c"
    }

  }
  ngOnInit() {

    let id = +this.route.snapshot.paramMap.get('id');
    this.id = id;
    this.getDivision(id);

    this.edit = false;
  }

  editDevice(device: Device): void {

    this.router.navigate(["/editdevice", this.id, device.id]);
  }

  move(device: Device) {
    this.movingDevice = device;
  }

  cancelMove(device: Device) {
    this.movingDevice = null;
  }
  confirmMove(device: Device) {


    this.movingDevice = null;
    let child = document.getElementById("editedDevice");

    

    let division = document.getElementsByClassName("division")[0];


    let vwSizeString = division.getAttribute("style").replace("width: ", "").replace("vw", "").replace("height: ", "").replace("vw;", ""); //Gets width: Xvw; height Yvw;
    let pxSize = [division.clientWidth, division.clientHeight]; //Get them px values
    let vwSize = vwSizeString.split(";");
    let ratio = [pxSize[0] / +vwSize[0], pxSize[1] / +vwSize[1]];  //Gets the ratio between the px and vw values

    let transform: string = child.style.webkitTransform;



    let webkit = transform.substr(transform.indexOf("(") + 1, transform.lastIndexOf(")"));
    let vals = webkit.split(",");
    let x: number = +vals[0].replace("px", "");
    let y: number = +vals[1].replace("px", "");
    x/= (ratio[0] *this.widthratio);
    y/= (ratio[1] * this.heightratio);
    
    x+=device.position.x;
    y+=device.position.y;
    


   
   


    device.position = {
      x: x,  //Converts the transformed Xpx to Xvw
      y: y //Converts the transformed Ypx to Yvw
    }



    this.devicesService.moveDevice(device);
  }

  open(content, device) {

  
    //this.modalService.dismissAll();

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {

      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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


  deleteDevice(device: Device): void {

    this.devicesService.deleteDevice(device);
  }
}