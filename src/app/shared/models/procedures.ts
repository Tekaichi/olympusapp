import { Device, State } from './device';
import { Division } from './Division';

export class Procedure {
    id: number;
    name : string;
    actions : DivisionActions[];
    constructor(name:string, actions : DivisionActions[],id:number){
    this.name = name;
    this.actions = actions;
    this.id = id;
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
    division: Division;
    id: number;
    name : string;
    actions: Action[];
}

export class Action{
    device: Device;
    goalState : State;
}