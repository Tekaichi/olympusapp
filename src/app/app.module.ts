import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DivisionComponent } from './division/division.component';
import { UserComponent } from './user/user.component';

import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import {   ReactiveFormsModule} from '@angular/forms';
import { MainComponent } from './main/main.component';


const appRoutes : Routes = [
  {path :"login",component:LoginComponent},
  {path: "homepage", component:HomepageComponent} ,
  {path: "home", component:AppComponent} ,
  {path: "division", component:DivisionComponent} 
];


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DivisionComponent,
    LoginComponent,
    UserComponent,
    MainComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
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
