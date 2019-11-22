import { Injectable } from '@angular/core';
import {Procedure, Action, DivisionActions} from "../app/shared/models/procedures";
import { Observable, of } from 'rxjs';
import {MOCKPROCEDURES} from "../app/mocks/mockprocedures";
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Division } from './shared/models/Division';
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
    this.procedure = new Procedure("",[],0);
    this.procedure.actions =[];
   
    return this.procedure;
  }

  getProcedure() : Procedure{
    return this.procedure;
  }
  deleteDivisionAction() : void{
    this.procedure.actions.pop();
  }
  newDivisionAction(divisionName : string, division? : Division):DivisionActions{
    let size = this.procedure.actions.length;
    
   
    let lastID = size == 0?-1:this.procedure.actions[size-1].id;
    let dAction = new DivisionActions();
    dAction.division = division;
    dAction.id = lastID+1;
    dAction.name = divisionName;
    dAction.actions = [];
    this.procedure.actions.push(dAction);
    return dAction;
  }
 
  getActionsOf(id :number): Action[]{
    return this.procedure.actions[id].actions;
  }
  getActions(): Action[]{
    
    let size = this.procedure.actions.length;
    return this.procedure.actions[size-1].actions;
  }

  getDivisionActionsOf(id:number){
    this.procedure = MOCKPROCEDURES[id];
    return this.procedure.actions;
  }
  getDivisionActions() : DivisionActions[]{
    return this.procedure.actions;
  }
  addAction(action: Action){

    let size = this.procedure.actions.length;
    this.procedure.actions[size-1].actions.push(action);
  }

  save(name:string){
    //??? hacky af
    this.procedure.name = name;
    let size = MOCKPROCEDURES.length;
    this.procedure.id = size;
    console.log("Adding new");
    MOCKPROCEDURES.push(this.procedure);
    this.procedure = new Procedure("",[],0);
    
  }

  cancel(){
    this.procedure = new Procedure("",[],0);
  }

  getDivisionAction(id :number): DivisionActions{

    return this.procedure.actions[id];
  }
}
