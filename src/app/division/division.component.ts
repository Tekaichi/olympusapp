import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DivisionService } from '../division.service';
import { Division } from '../shared/models/division';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Device } from '../shared/models/device';
import { MOCKDIVISION } from "../mocks/mockdivision";

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  edit: Boolean;
  id: number;
  division: Division;
  title: String;
  info = []
  width: number;
  height: number;
  ratio: number;
  closeResult: string;
  activeModal: NgbActiveModal;
  movingDevice: Device;


  constructor(private divisionService: DivisionService, private route: ActivatedRoute, private router: Router, private modalService: NgbModal) {
    this.edit = false;
  }

  getDivision(id: number): void {
    this.divisionService.getDivision(id).subscribe(
      division => {
        this.division = division;

        this.info = division.info;
        this.title = division.title;


        const maxarea = 800; //Maximum area of the division
        //Should it be maximum height?

        this.width = Math.abs(division.layout.to.x - division.layout.from.x);
        this.height = Math.abs(division.layout.to.y - division.layout.from.y);

        let area = this.width * this.height;

        let ratio = Math.sqrt(maxarea / area);
        this.ratio = ratio;
        this.width *= ratio;
        this.height *= ratio;

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

    let parent = child.parentElement;
    let parentStyle = parent.getAttribute("style");
    

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
    x/= ratio[0] *this.ratio;
    y/= ratio[1] * this.ratio;
    
    x+=device.position.x;
    y+=device.position.y;
    //x+=+realPosPx[1]*ratio[0];
    //y+=+realPosPx[0]*ratio[1]; 


    //Not working properly


   
   


    device.position = {
      x: x,  //Converts the transformed Xpx to Xvw
      y: y //Converts the transformed Ypx to Yvw
    }





  }

  open(content, device) {

    console.log("222");
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
    var i, k, j;
    for (i = 0; i < MOCKDIVISION.length; i++) {
      for (j = 0; j < MOCKDIVISION[i].devices.length; j++) {
        if (MOCKDIVISION[i].devices[j].name == device.name && this.division.title == MOCKDIVISION[i].title)
          MOCKDIVISION[i].devices.splice(j, 1);
      }
    }
  }
}