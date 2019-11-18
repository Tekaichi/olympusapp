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
    states: [],
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
states: [{
    description:"The lamp is on",
    image :"https://thumbs.dreamstime.com/z/light-bulb-cartoon-colored-doodle-vector-illustration-isolated-white-background-130059554.jpg"
}],
type: "BinaryLamp"
}
export const Devices : SystemDevice[] = [
    LAMP,DOOR
]
const HALL : Division = {
    title:"Hall",
    id: 0,
    info: [

        {
            description:"Temperatura",
            value:"29ºC"
        },
        {
            description:"Humidade",
            value:"23%"
        }, 
        {
            description:"Energy",
            value:"200W"
        },
    ],
    layout :{from:{
        x:0,
        y:0 },
        to:{
            x:30,
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
     device :LAMP,
     currentState : 0 
     
    },
    {
        name :"Lampada1",
        url: "10.10.10.10",
        position : {
            x : 0,
            y : 0
        },
        device :LAMP,
        currentState: 0
       }]

}



const LIVINGROOM : Division = {
    title:"Living Room",
    id:1,
    info: [

        {
            description:"Temperatura",
            value:"30ºC"
        },
        {
            description:"Humidade",
            value:"10%"
        },
        {
            description:"Energy",
            value:"100W"
        },
    ],
    layout :{from:{
        x:30,
        y:0},
        to:{
            x:40,
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
     device :LAMP,
     currentState: 0
    },
     {
        name :"Lampada1",
        url: "10.10.10.10",
        position : {
            x : 10,
            y : 10,
        },
        device :LAMP,
        currentState: 0
    }]

}

const BEDROOM : Division = {
    title:"Bedroom",
    id:2,
    info: [

        {
            description:"Temperatura",
            value:"26ºC"
        },
        {
            description:"Humidade",
            value:"3%"
        },
        {
            description:"Energy",
            value:"300W"
        },
    ],
    layout :{from:{
        x:30,
        y:20},
        to:{
            x:50,
            y:40}
        },
    devices: [
    {
     name :"Lampada0",
     url: "10.10.10.10",
     position : {
         x : 0,
         y : 0
     },
     device :LAMP,
     currentState: 0
    },
     {
        name :"Lampada1",
        url: "10.10.10.10",
        position : {
            x : 5,
            y : 7,
        },
        device :LAMP,
        currentState : 0 
    },
    {
        name :"Lamp3",
        url: "10.10.10.10",
        position : {
            x : 15,
            y : 15,
        },
        device :LAMP,
        currentState :0 
    },
    {
        name :"Lamp4",
        url: "10.10.10.10",
        position : {
            x : 20,
            y : 0,
        },
        device :LAMP,
        currentState:0 
    }
]

}

export const MOCKDIVISION : Division[] =  [

    HALL ,LIVINGROOM,BEDROOM

]
