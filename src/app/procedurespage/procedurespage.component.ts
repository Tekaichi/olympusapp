import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procedurespage',
  templateUrl: './procedurespage.component.html',
  styleUrls: ['./procedurespage.component.css']
})
export class ProcedurespageComponent implements OnInit {
  actions: String[]
  constructor() { 

    this.actions=['Cozinha','Sala','Jardim'];
  }

  ngOnInit() {
  }

}
