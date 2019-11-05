import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  title = 'Olympus';

  constructor(
    private router : Router
 
  
) {
  
  console.log(this.router.navigate[('/login')]);
}
 

  }


  

