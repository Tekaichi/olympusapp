import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DevicesService } from './devices.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  valid = 0; //0 equals landing page & erro404, 1 login and register, 2 normal pages

  userBar = ['homepage', 'procedures', 'divisionprocedures', 'proceduresManagement', 'division', 'analytics', 'logs', 'adddevice','editdevice'];

  logRegBar = ['login', 'regist'];

  title = 'Olympus';
  loggedIn: boolean;
  constructor(
    private router: Router,
    private devicesService : DevicesService,
    private auth : AuthService

  ) {
    this.routeEvent(this.router);
    this.loggedIn = true;
    this.devicesService.loopCheckChanges();
    if(auth.currentUser == null){
      this.goHomepage();
    }
    this.devicesService.pushServer();
  }


  goHome(): void {

    this.router.navigate(["/homepage"]);


  }

  goHomepage(): void {

    this.router.navigate(["/"]);

  }
  login():void{
    this.router.navigate(["/login"]);

  }
  regist():void{
    
    this.router.navigate(["/regist"]);

  }

  //MACACADAS V2
  routeEvent(router: Router) {
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {

        var link = e.url.substring(1);

        link = link.substring(0, link.indexOf('/'));

        if (!link)
          link = e.url.substring(1)

        window.scrollTo(0, 0);

        if (this.userBar.includes(link)) {

          this.valid = 2;
        } else if (this.logRegBar.includes(link)) {
          this.valid = 1;
        }
        else {
          this.valid = 0;
        }
      }
    });
  }
}




