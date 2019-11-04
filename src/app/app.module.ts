import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DivisionComponent } from './division/division.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes : Routes = [
  {path :"login",component:LoginComponent} //Insert routes here
];


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DivisionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
    appRoutes,
    {
     enableTracing : true
    }

)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
