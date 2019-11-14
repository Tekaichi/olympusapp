import { Component, OnInit } from '@angular/core';


import { DeleteProcedureService } from './delete-procedure/delete-procedure.service';



@Component({
  selector: 'app-procedures-main',
  templateUrl: './procedures-main.component.html',
  styleUrls: ['./procedures-main.component.css']
})

export class ProceduresMainComponent implements OnInit {
  procedures: String[]
  constructor(private deleteProcedureComponent: DeleteProcedureService) {
   
    this.procedures = ["Hall's lights", "Another on", "Justin Bibar"];

  }
  
  public openDeleteConfirmation() {
    this.deleteProcedureComponent.confirm('Please confirm..', 'Do you really want to delete this procedure ?')
      .then((confirmed) => console.log('User confirmed:', confirmed))
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
  ngOnInit() {
  }


}
