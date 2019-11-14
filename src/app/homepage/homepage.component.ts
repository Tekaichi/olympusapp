import { Component, OnInit, ViewChild,ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  
  @ViewChild('layout',{static:true}) layout : ElementRef;
  
  hello: String
  title: String
  constructor(private router: Router) { 
    this.hello = 'Carlos';
    this.title = 'My Home';
  }

  ngOnInit() {
  }

  goToSettings(): void{
    this.router.navigate(['/settings']);
  }

  goToLogs(): void{
    this.router.navigate(['/procedures']);
  }

  goToAnalytics(): void{
    this.router.navigate(['/analytics']);
  }

  goToProcedures(): void{
    this.router.navigate(['/procedures']);
  }

  ngAfterViewInit() {
 
  
    this.drawDiv();
  }

  drawDiv(){
    
    
  }

}
