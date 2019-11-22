import { Injectable } from '@angular/core';
import {Procedure, Action, DivisionActions} from "../app/shared/models/procedures";
import { Observable, of } from 'rxjs';
import {MOCKPROCEDURES} from "../app/mocks/mockprocedures";
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root'
})
export class ProcedureService {

  procedure : Procedure;
  constructor() { }


  //Homepage
  getProcedures(): Observable<Procedure[]> {
   
    //Return all Procedures
    return of(MOCKPROCEDURES);
  }

  getTopProcedures(): Observable<Procedure[]>{
    
    //Retrieve the most used. TODO
    return of(MOCKPROCEDURES);
  }

  runProcedure(id : Number):void{
    //should "return" a notification
  }

  newProcedure():Procedure{
    this.procedure = new Procedure("",[]);
    this.procedure.actions =[];
   
    return this.procedure;
  }

  deleteDivisionAction() : void{
    this.procedure.actions.pop();
  }
  newDivisionAction(division : String):DivisionActions{
    
    let dAction = new DivisionActions();
    dAction.name = division;
    dAction.actions = [];
    this.procedure.actions.push(dAction);
    return dAction;
  }
 
  getActions(): Action[]{
    
    let size = this.procedure.actions.length;
    return this.procedure.actions[size-1].actions;
  }
  getDivisionActions() : DivisionActions[]{
    return this.procedure.actions;
  }
  addAction(action: Action){

    let size = this.procedure.actions.length;
    this.procedure.actions[size-1].actions.push(action);
  }

  save(name:String){
    //??? hacky af
    this.procedure.name = name;
    MOCKPROCEDURES.push(this.procedure);
    this.procedure = new Procedure("",[]);
    
  }

  cancel(){
    this.procedure = new Procedure("",[]);
  }
}
