import { Component, OnInit } from '@angular/core';
import { DivisionService } from '../division.service';
import { Division } from '../shared/models/Division';
import { Router, ActivatedRoute } from '@angular/router';
import { DivisionActions, Procedure } from '../shared/models/procedures';
import { ProcedureService } from '../procedures.service';
import { AlertService } from '../_alert';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-procedurespage',
  templateUrl: './procedurespage.component.html',
  styleUrls: ['./procedurespage.component.css']
})
export class ProcedurespageComponent implements OnInit {
  actions: DivisionActions[]
  divisions: Division[]
  name: string;
  isEdit: boolean;
  closeResult: string;
  activeModal: NgbActiveModal;
  procedure: Procedure;
  continue: boolean;
  constructor(private divisionService: DivisionService, private router: Router, private modalService: NgbModal, private proceduresService: ProcedureService, private alert: AlertService, private route: ActivatedRoute) {
    this.continue = true;


  }

  ngOnInit() {
    this.divisionService.getDivisions().subscribe((divisions) => {
      this.divisions = divisions;
    })


    let id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.actions = this.proceduresService.getDivisionActionsOf(+id);

      this.isEdit = true;

    } else {

      this.isEdit = false;
      this.actions = this.proceduresService.getDivisionActions();

    }
    this.procedure = this.proceduresService.getProcedure(); //shallow copy needed so the cancel does something
    this.name = this.proceduresService.getProcedure().name;
  }
  goToDivision(id: number): void {
    if (this.isEdit) {
      this.router.navigate(['/divisionprocedures', id, "edit"]);

    } else {
      this.router.navigate(['/divisionprocedures', id]);
    }
  }

  save(): void {
      var name = this.name;

      this.router.navigate(['/procedures']);

      if (this.isEdit) {

        this.alert.success("Procedure " + name + " was edited successfully");

      } else {
        this.alert.success("Procedure " + name + " was added successfully");
        this.proceduresService.save(name);
      }
  }
  cancel(): void {
    if (!this.isEdit) {
      this.proceduresService.cancel();
    }
    this.router.navigate(['/procedures']);
  }

  edit(id: number) {
    let dAction = this.proceduresService.getDivisionAction(id);
    if (this.isEdit) {
      this.router.navigate(['/divisionprocedures', dAction.division.id, "edit", dAction.id, "edit"]);

    } else {
      this.router.navigate(['/divisionprocedures', dAction.division.id, "edit", dAction.id]);
    }

  }


  open(content) {

    if (this.actions && this.actions.length > 0) {
      this.continue = true;

      this.modalService.dismissAll();

      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else {
      this.continue = false;
    }

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


}
