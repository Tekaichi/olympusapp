import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adddevice',
  templateUrl: './adddevice.component.html',
  styleUrls: ['./adddevice.component.css']
})
export class AdddeviceComponent implements OnInit {

  

  
  constructor( private route : ActivatedRoute,private router: Router) {
   }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
   console.log(id);
  }

}
