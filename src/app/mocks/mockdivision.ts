<<<<<<< HEAD
import {Division} from "../shared/models/division";
=======
import {Info} from "../shared/models/info";
import {Division, Layout} from "../shared/models/division";
>>>>>>> 37d26f5230dcf2b88840b26c1340ca70f3b58f0e


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
         x : 10,
         y : 0
     }
    },
    {
        name :"Lampada1",
        url: "10.10.10.10",
        position : {
            x : 0,
            y : 0
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
<<<<<<< HEAD
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
=======
    layout : new Layout()
>>>>>>> 37d26f5230dcf2b88840b26c1340ca70f3b58f0e

}

export const BEDROOM : Division = {
    title:"Bedroom",
    info: [

        {
            description:"Temperatura",
            value:"26ºC"
        },
        {
            description:"Humidade",
            value:"3%"
        },
    ],
    layout :{from:{
        x:0,
        y:0},
        to:{
            x:20,
            y:15}
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
            x : 5,
            y : 7,
        },
    },
    {
        name :"Estores",
        url: "10.10.10.10",
        position : {
            x : 15,
            y : 15,
        },
    },
    {
        name :"Estores2",
        url: "10.10.10.10",
        position : {
            x : 20,
            y : 0,
        },
    }
]

}

export const MOCKDIVISION : Division[] =  [

    LIVINGROOM, HALL,BEDROOM

]
