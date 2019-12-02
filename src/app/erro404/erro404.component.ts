import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-erro404',
  templateUrl: './erro404.component.html',
  styleUrls: ['./erro404.component.css',
              '../../assets/animations.scss']
})
export class Erro404Component implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    console.log("111111");
    console.log(this.auth.getcurrentUserValue());
  }
  goToHomepage(): void {


    
    if(this.auth.getcurrentUserValue() == null){
      this.router.navigate(['/main']);}
    else {
      this.router.navigate(['/homepage']);
    }
  }
}
