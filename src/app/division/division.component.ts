import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DivisionService } from '../division.service';
import { Division } from '../shared/models/division';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Device } from '../shared/models/device';

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

  editDivision() {
    this.edit = !this.edit;

  }
  ngOnInit() {

    let id = +this.route.snapshot.paramMap.get('id');
    this.id = id;
    this.getDivision(id);
    console.log("Division:", this.division);
    console.log("Devices: ", this.division.devices);
    this.edit = false;
  }

  open(content) {

    this.modalService.dismissAll();

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

  /* TODO: Delete device */
  deleteDevice(device : Device) : void {
    console.log("delete " + device.name);
  }

}
