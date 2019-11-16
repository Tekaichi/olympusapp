import { Component, OnInit, ViewChild,ElementRef, AfterViewInit } from '@angular/core';
import {LogService} from '../logs.service';
import {Log} from '../shared/models/log';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit{

  
  @ViewChild('layout',{static:true}) layout : ElementRef;

  edit : Boolean;
  id:number;
  logs : Log[];
  title :String;
  info = [] //Placeholders, get them data from a service
  
  constructor(private logService : LogService,  private route : ActivatedRoute,private router: Router) {
 
   }

   getLogs():void{
    this.logService.getLogs().subscribe(
      log => {
      this.logs = log;
      }
    );
  }

   ngOnInit() {
   this.getLogs();
  }
}