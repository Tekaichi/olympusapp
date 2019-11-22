import {Info} from '../models/info';
import {Device} from '../models/device';
export class Division{
    title: string;
    info: Info[];
    layout: Layout;
    devices : Device[];
    id: number
    doors: Position[];
}

class Position {
    x: number;
    y: number;
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

