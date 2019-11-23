import { Component, OnInit } from '@angular/core';


import { DeleteProcedureService } from './delete-procedure/delete-procedure.service';
import { Procedure } from '../shared/models/procedures';
import { MOCKPROCEDURES } from '../mocks/mockprocedures';
import { Router } from '@angular/router';
import { ProcedureService } from '../procedures.service';
import { DevicesService } from '../devices.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-procedures-main',
  templateUrl: './procedures-main.component.html',
  styleUrls: ['./procedures-main.component.css']
})

export class ProceduresMainComponent implements OnInit {

  procedures: Procedure[]
  closeResult: string;
  activeModal: NgbActiveModal;

  constructor(private deleteProcedureComponent: DeleteProcedureService, private router: Router, private proceduresService: ProcedureService, private devicesService: DevicesService, private modalService: NgbModal) {



  }


  ngOnInit() {
    this.getProcedures(1);
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


  getProcedures(userId: number): void {
    //Use the procedures service to retrieve the procedures, for now the procedures are defined in the mockprocedures file
    this.procedures = MOCKPROCEDURES; //Placeholder
  }

  createProcedure(): void {
    this.router.navigate(["/proceduresManagement"]);
    this.proceduresService.newProcedure();
  }

  run(procedure: Procedure): void {
    procedure.run(this.devicesService);
  }

  edit(id: number): void {
    this.router.navigate(["/proceduresManagement", id]);
  }

  removeProcedure(procedure : Procedure) : void {
    console.log(procedure.name);
    /* TODO */
  }
}
