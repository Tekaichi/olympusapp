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
export class AdddeviceComponent implements OnInit {

 

  model = new Device ();

  selectedType : String;
  title : String;
  width : number;
  height : number;
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
   this.getDivision(id);
    this.deviceService.getKnownDeviceTypes().subscribe( devices => this.devices = devices);
  }
  submitted = false;
  getDivision(id:number):void{
    this.divisionService.getDivision(id).subscribe(
      division => {
        this.division = division; 
       
    
        this.title = division.title;
       
      
        const maxarea = 500; //Maximum area of the division
        //Should it be maximum height?

        this.width = Math.abs(division.layout.to.x -division.layout.from.x);
        this.height = Math.abs(division.layout.to.y -division.layout.from.y);

        let area = this.width* this.height;

        let ratio = maxarea/area;

        this.width *= Math.sqrt(ratio);
        this.height *= Math.sqrt(ratio)

       }
    );
  }

  onSubmit() { this.submitted = true; 
  
    console.log(this.model);
  }

  newDevice() {
    this.model = new Device();
  }

  selectDevice(type:String):void{
  
    this.selectedType = type;
  }


  // não vai para o topo da página tho... 
  goToDivision(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/division', id]);

  }

  
 
}
