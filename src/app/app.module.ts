import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DivisionComponent } from './division/division.component';
import { UserComponent } from './user/user.component';
import { LogsComponent } from './logs/logs.component';

import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { MainComponent } from './main/main.component';
import { ProceduresMainComponent } from './procedures-main/procedures-main.component';
import { ProcedurespageComponent } from './procedurespage/procedurespage.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AdddeviceComponent } from './adddevice/adddevice.component';
import { DeleteProcedureComponent } from './procedures-main/delete-procedure/delete-procedure.component';


const appRoutes : Routes = [
  {path :"login",component:LoginComponent},
  {path: "homepage", component:HomepageComponent} ,
  {path: "home", component:AppComponent} ,
  {path: "division/:id", component:DivisionComponent},
  {path: "adddevice/:id", component:AdddeviceComponent},
  {path: "procedures", component:ProceduresMainComponent},
  {path: "proceduresManagement", component:ProcedurespageComponent},
  {path: "logs", component:LogsComponent},
  {path: "main", component:MainComponent},
  {path:"",component:MainComponent}
   

];


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DivisionComponent,
    LoginComponent,
    UserComponent,
    MainComponent,
    ProceduresMainComponent,
    ProcedurespageComponent,
    AnalyticsComponent,
    AdddeviceComponent,
    DeleteProcedureComponent,
    LogsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
    appRoutes,
    {
     enableTracing : true
    }

)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ DeleteProcedureComponent ]
})
export class AppModule { 
  
}
