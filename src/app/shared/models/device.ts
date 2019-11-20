export class Device {
    name:String;
    url:String;
    position: {
        x: number,
        y: number
    }
    device: SystemDevice
    currentState : number;
}

export class SystemDevice{

    type: String;
    states : State[]
    
    actions: Action[];
    url: String[];

}
export class State{
    description : String;
    image: String;
    action: String;
}

export class Action{
    description: String;
    command : String;

}
