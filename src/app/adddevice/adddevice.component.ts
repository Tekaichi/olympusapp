import { Component, OnInit, Input} from '@angular/core';
import {DivisionService} from '../division.service';
import {Division} from '../shared/models/division';
import { Router, ActivatedRoute } from '@angular/router';
import {Device} from '../shared/models/device';
<<<<<<< HEAD
=======
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

>>>>>>> 37d26f5230dcf2b88840b26c1340ca70f3b58f0e
@Component({
  selector: 'app-adddevice',
  templateUrl: './adddevice.component.html',
  styleUrls: ['./adddevice.component.css'],
})
export class AdddeviceComponent implements OnInit {

<<<<<<< HEAD
  
  model = new Device ();

  divisionID: number;
=======
  model = new Device ();

  divisionID: number;
  closeResult: string;
>>>>>>> 37d26f5230dcf2b88840b26c1340ca70f3b58f0e
  
  constructor( private route : ActivatedRoute,private router: Router, private modalService: NgbModal) {

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

  // getDivision(id:number):void{
   
    //this.divisionService.getDivision(id).subscribe(
     // division => {
       // this.division = division; 
       
       // this.title = division.title;}
    //);
 // }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.divisionID = id;
  }
  submitted = false;

  onSubmit() { this.submitted = true; 
  
    console.log(this.model);
  }

  newDevice() {
    this.model = new Device();
  }

}
