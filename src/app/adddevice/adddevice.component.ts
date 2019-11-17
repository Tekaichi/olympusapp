import { Component, OnInit, ViewChild,ElementRef, AfterViewInit } from '@angular/core';
import {Division} from '../shared/models/division';
import { Router, ActivatedRoute } from '@angular/router';
import {Device, SystemDevice} from '../shared/models/device';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DevicesService } from '../devices.service';
import {DivisionService} from '../division.service';
@Component({
  selector: 'app-adddevice',
  templateUrl: './adddevice.component.html',
  styleUrls: ['./adddevice.component.css'],
})
export class AdddeviceComponent implements OnInit,AfterViewInit {

  @ViewChild("layout",{static:true}) layout : ElementRef;

  model = new Device ();

  selectedType : String;


  devices : SystemDevice[];
  division: Division;
  closeResult: string;
  
  constructor( private route : ActivatedRoute,private router: Router, private modalService: NgbModal, private deviceService : DevicesService,private divisionService : DivisionService) {

   }

   open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true }).result.then((result) => {
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
      return  `with: ${reason}`;
    }
  }



  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.divisionService.getDivision(id).subscribe(
      division => {
        this.division = division;   
     }
    );
    this.deviceService.getKnownDeviceTypes().subscribe( devices => this.devices = devices);
  }
  submitted = false;


  onSubmit() { this.submitted = true; 
  
    console.log(this.model);
  }

  newDevice() {
    this.model = new Device();
  }

  selectDevice(type:String):void{
    console.log(type);
    this.selectedType = type;
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

    let scale = 1.15;
    let width = Math.abs(to.x -from.x)*scale;
    let height = Math.abs(to.y -from.y)*scale;
   

    

    //Devices
    let vals = "";
    this.division.devices.forEach(function(device){
      let name = device.name;
      let pos = device.position;
      pos.x *=scale;
      pos.y *=scale;
      //Center the device
     // pos.x -= 3;//Some width factor; 
      //pos.y -= 0.1; //Some height factor
       //<app-type [input]...></app-type>
      vals +="<span style='position:absolute;top:"+pos.y+"vw; left:"+pos.x+"vw;'>"+ name+"</span>";
    })
   
    let style = "style='position:relative;background-color:white;margin:0 auto;margin-top:2vw;margin-bottom:2vw;border:1px solid black;width:"+width+"vw; height:"+height+"vw;'" //+size+"'";//position + size;
    //Insert division
    this.layout.nativeElement.insertAdjacentHTML('beforeend', "<div #division class='division'"+style+">"+vals+"</div>");
    
  
    
    
 
    
  }
}
