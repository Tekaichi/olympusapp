export class Device {
    name:String;
    url:String;
    position: {
        x: number,
        y: number
    }
    device: SystemDevice
    currentState : Number;
}

export class SystemDevice{

    type: String;
    states : State[]
    
    actions: Action[];
    url: String[];

}
class State{
    description : String;
    image: String;
}

export class Action{
    description: String;
    command : String;

}
