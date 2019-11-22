import { Device, State } from './device';

export class Procedure {
    name : String;
    actions : DivisionActions[];

    constructor(name:String, actions : DivisionActions[]){
    this.name = name;
    this.actions = actions;
    }
    public run(): Boolean{
        this.actions.forEach((action)=>{
            action.actions.forEach((execute)=>{

                execute.device.currentState = execute.goalState;
            });
        })
        return true; //For now it works this way
    }
    //Event ???
}

export class DivisionActions {
    name : String;
    actions: Action[];
}

export class Action{
    device: Device;
    goalState : State;
}