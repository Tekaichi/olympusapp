export class Device {

    constructor(){
        this.position = {
            x:1.5,
            y:1.5
        }
    }
    id: number;
    name:string;
    url:string;
    position: {
        x: number,
        y: number
    }
    device: SystemDevice;
    currentState : State;
    show: boolean;
    divisionID: number;

    

}

export class SystemDevice{

    type: string;
    states: State[]
    
    actions: Action[];
    devices: PhysicalDevice[];

}
export class PhysicalDevice{

    url:string;
    name: string;
}
export class State{
    description : string;
    image: string;
    action: string;
    transitions?: State[];
    hasValues?: boolean = false;
    value? : number = 0;
}

export class Action{
    description: string;
    command : string;

}
