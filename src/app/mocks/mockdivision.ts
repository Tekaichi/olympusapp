import {Info} from "../shared/models/info";
import {Division, Layout} from "../shared/models/division";


export const MOCKDIVISION : Division = {
    title:"Living Room",
    info: [

        {
            description:"Temperatura",
            value:"30ºC"
        },
        {
            description:"Humidade",
            value:"10%"
        },
    ],
    layout : new Layout()

}
