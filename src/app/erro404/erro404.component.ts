import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-erro404',
  templateUrl: './erro404.component.html',
  styleUrls: ['./erro404.component.css',
              '../../assets/animations.scss']
})
export class Erro404Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToHomepage(): void {
    this.router.navigate(['/']);
  }
}
