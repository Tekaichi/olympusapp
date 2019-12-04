export class Device {

    constructor(){
        this.position = {
            x:1.5,
            y:1.5
        }
    }
    id: number;
    name:String;
    url:String;
    position: {
        x: number,
        y: number
    }
    device: SystemDevice;
    currentState : State;
    show: boolean;

    

}

export class SystemDevice{

    type: String;
    states : State[]
    
    actions: Action[];
    devices: PhysicalDevice[];

}
export class PhysicalDevice{

    url:String;
    name: String;
}
export class State{
    description : String;
    image: String;
    action: String;
    transitions?: State[];
    hasValues?: boolean = false;
    value? : number = 0;
}

export class Action{
    description: String;
    command : String;

}
