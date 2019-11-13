import {Division} from "../shared/models/division";
import {SystemDevice} from "../shared/models/device";



const DOOR : SystemDevice = {
    url:["10.10.10.10"],
    actions:[
        {
            description:"Abrir",
            command:"/open"
        },
        {
            description:"Fechar",
            command:"/close"
        }
    ],
    image : null,
    type: "Door"
}

const LAMP : SystemDevice = {
url :["10.10.10.10","10.10.10.11"],
actions:[
    {
        description:"Ligar",
        command:"/on"
    },
    {
        description:"Desligar",
        command:"/off"
    }
],
image: null,
type: "BinaryLamp"
}
export const Devices : SystemDevice[] = [
    LAMP,DOOR
]
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
     },
     device :LAMP
     
    },
    {
        name :"Lampada1",
        url: "10.10.10.10",
        position : {
            x : 0,
            y : 0
        },
        device :LAMP
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
     device :LAMP
    },
     {
        name :"Lampada1",
        url: "10.10.10.10",
        position : {
            x : 10,
            y : 10,
        },
        device :LAMP
    }]

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
     device :LAMP
    },
     {
        name :"Lampada1",
        url: "10.10.10.10",
        position : {
            x : 5,
            y : 7,
        },
        device :LAMP
    },
    {
        name :"Estores",
        url: "10.10.10.10",
        position : {
            x : 15,
            y : 15,
        },
        device :LAMP
    },
    {
        name :"Estores2",
        url: "10.10.10.10",
        position : {
            x : 20,
            y : 0,
        },
        device :LAMP
    }
]

}

export const MOCKDIVISION : Division[] =  [

    LIVINGROOM, HALL,BEDROOM

]
