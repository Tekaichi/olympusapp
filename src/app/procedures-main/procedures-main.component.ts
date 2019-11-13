import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procedures-main',
  templateUrl: './procedures-main.component.html',
  styleUrls: ['./procedures-main.component.css']
})
export class ProceduresMainComponent implements OnInit {
  procedures: String[]
  constructor() { 

    this.procedures = ["Hall's lights","Another on", "Justin Bibar"];
  }

  ngOnInit() {
  }

}
