import { Injectable } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DeleteProcedureComponent } from './delete-procedure.component';


@Injectable({
  providedIn: 'root'
})

export class DeleteProcedureService {

  constructor(private modalService: NgbModal) { }

  public confirm(
    title: string,
    message: string,
    btnDeleteText: string = 'Delete',
    btnCancelText: string = 'Cancel',
    dialogSize: 'sm'|'lg' = 'sm'): Promise<boolean> {
    const modalRef = this.modalService.open(DeleteProcedureComponent, { size: dialogSize, windowClass:'adidi' });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnDeleteText;
    modalRef.componentInstance.btnCancelText = btnCancelText;

    return modalRef.result;
  }

}
