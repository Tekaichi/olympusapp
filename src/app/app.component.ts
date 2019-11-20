import { Component} from '@angular/core';
import { Router,NavigationEnd   } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent  {
  valid = false; //Turn to true to show navbar

  title = 'Olympus';
  loggedIn: boolean;
  constructor(
    private router : Router
 //Activated Router to get them events ????
  
) {
  this.routeEvent(this.router);
  this.loggedIn = true;
  
 
}


goHome(): void{
  if (this.loggedIn)
  this.router.navigate(["/homepage"]);
  else
  this.router.navigate(["/main"]);

}


//MACACADAS V2
routeEvent(router: Router){
  router.events.subscribe(e => {
    if(e instanceof NavigationEnd){
      console.log(e.url);
      if(e.url != "/main" && e.url !="/" && e.url[1] != '#' && e.url != "/login" && e.url != "/regist"){
        this.valid = true;
      }else{
        this.valid = false;
      }
    }
  });
}
  }


  

