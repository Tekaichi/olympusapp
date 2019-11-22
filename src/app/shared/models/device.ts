export class Device {
    name:String;
    url:String;
    position: {
        x: number,
        y: number
    }
    device: SystemDevice
    currentState : State;
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
//This kind of state works for discrete states. What about continuous ones?
export class State{
    description : String;
    image: String;
    action: String;
}

export class Action{
    description: String;
    command : String;

}
