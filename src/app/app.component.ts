import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  valid = 0; //0 equals landing page & erro404, 1 login and register, 2 normal pages

  userBar = ['homepage', 'procedures', 'proceduresManagement', 'division', 'analytics', 'logs', 'adddevice'];

  logRegBar = ['login', 'regist'];

  title = 'Olympus';
  loggedIn: boolean;
  constructor(
    private router: Router
    //Activated Router to get them events ????

  ) {
    this.routeEvent(this.router);
    this.loggedIn = true;


  }


  goHome(): void {
    if (this.loggedIn)
      this.router.navigate(["/homepage"]);
    else
      this.router.navigate(["/main"]);

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




