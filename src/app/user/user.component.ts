import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user : User;
  constructor() { 

    this.user ={
      name :"Carlos",
      password:"lol"
    }
  }

  ngOnInit() {
  }

}
