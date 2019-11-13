import {Info} from '../models/info';

export class Division{
    title: String;
    info: Info[];
    layout: Layout;
}

export class Layout{
    walls: Wall[];
}

export class Wall{
    from: {
        x: number;
        y: number;
    };
    to :{
        x:number;
        y:number;
    }
}