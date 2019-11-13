import { Component, OnInit, Input} from '@angular/core';
import {Division} from '../shared/models/division';
import { Router, ActivatedRoute } from '@angular/router';
import {Device, SystemDevice} from '../shared/models/device';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-adddevice',
  templateUrl: './adddevice.component.html',
  styleUrls: ['./adddevice.component.css'],
})
export class AdddeviceComponent implements OnInit {

  model = new Device ();

  selectedType : String;

  devices : SystemDevice[];
  divisionID: number;
  closeResult: string;
  
  constructor( private route : ActivatedRoute,private router: Router, private modalService: NgbModal, private deviceService : DevicesService) {

   }

   open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
    this.divisionID = id;
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

}
