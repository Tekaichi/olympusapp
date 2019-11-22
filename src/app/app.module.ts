import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DivisionComponent } from './division/division.component';
import { UserComponent } from './user/user.component';
import { LogsComponent } from './logs/logs.component';
import { AlertModule } from './_alert';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { ProceduresMainComponent } from './procedures-main/procedures-main.component';
import { ProcedurespageComponent } from './procedurespage/procedurespage.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AdddeviceComponent } from './adddevice/adddevice.component';
import { DeleteProcedureComponent } from './procedures-main/delete-procedure/delete-procedure.component';
import { DeviceComponent } from './device/device.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { GoBackButton } from "./goBackButton/goBack.component";


const appRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "homepage", component: HomepageComponent },
  { path: "home", component: AppComponent },
  { path: "division/:id", component: DivisionComponent },
  { path: "adddevice/:id", component: AdddeviceComponent },
  { path: "procedures", component: ProceduresMainComponent },
  { path: "proceduresManagement", component: ProcedurespageComponent },
  { path: "logs", component: LogsComponent },
  { path: "main", component: MainComponent },
  { path: "", component: MainComponent },
  { path: "analytics", component: AnalyticsComponent },
  { path: "regist", component: RegistComponent }


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
    LogsComponent,
    DeviceComponent,
    RegistComponent,
    ConfirmEqualValidatorDirective,
    GoBackButton


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AlertModule,
    DragDropModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      }

    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DeleteProcedureComponent]
})
export class AppModule {

}
