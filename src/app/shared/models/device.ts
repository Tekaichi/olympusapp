export class Device {
    name:String;
    position: {
        x: number,
        y: number
    }
    device: SystemDevice
}

export class SystemDevice{

    type: String;
    image: ImageBitmap;
    actions: Action[];
    url: String;

}

export class Action{
    command : String;

}
