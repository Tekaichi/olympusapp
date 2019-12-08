import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import {  timer, Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'
                , '../../assets/animations.scss']
})
export class UserComponent implements OnInit {

  everySecond: Observable<Number> = timer(0, 1000*1);
  user : String;
  time: String;

  constructor(private auth : AuthService,private router : Router) { 

    this.setTime();
    this.user = auth.currentUser.name;

  }

  setTime(): void{

    this.everySecond.subscribe(() => {
  
   let date = new Date();
    if (date.getHours() < 10) {
      this.time = "0" + date.getHours();
    } else {
      this.time = date.getHours().toString();
    }
    this.time += ":";

    if (date.getMinutes() < 10) {
      this.time += "0";
    }
    this.time += date.getMinutes().toString();
    
  });
}

  ngOnInit() {
  }

  logout(){
    this.auth.currentUser = null;
    this.router.navigate(['/']);
  }
}
