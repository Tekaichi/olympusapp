import {Division} from "../shared/models/division";


export const HALL : Division = {
    title:"Hall",
    info: [

        {
            description:"Temperatura",
            value:"29ºC"
        },
        {
            description:"Humidade",
            value:"23%"
        },
    ],
    layout :{from:{
        x:10,
        y:10},
        to:{
            x:20,
            y:40}
        },
    devices: [
    {
     name :"Lampada",
     url: "10.10.10.10",
     position : {
         x : 5,
         y : 5.
     }
    }]

}



export const LIVINGROOM : Division = {
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
    layout :{from:{
        x:0,
        y:0},
        to:{
            x:20,
            y:20}
        },
    devices: [
    {
     name :"Lampada0",
     url: "10.10.10.10",
     position : {
         x : 0,
         y : 0
     },
    },
     {
        name :"Lampada1",
        url: "10.10.10.10",
        position : {
            x : 10,
            y : 10,
        },
    }]

}

export const MOCKDIVISION : Division[] =  [

    LIVINGROOM, HALL

]
