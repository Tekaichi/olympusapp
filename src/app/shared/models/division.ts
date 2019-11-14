import {Info} from '../models/info';
import {Device} from '../models/device';
export class Division{
    title: String;
    info: Info[];
    layout: Layout;
    devices : Device[];
    id: number
}

export class Layout{
    from: {
        x: number;
        y: number;
    };
    to :{
        x:number;
        y:number;
    }
}

