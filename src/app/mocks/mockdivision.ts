import { Division } from "../shared/models/division";
import { SystemDevice, Device } from "../shared/models/device";



const DOOR: SystemDevice = {
    devices: [{
        url: "10.11.12.10/door1",
        name: "10.11.12.10/door1"
    }],
    actions: [
        {
            description: "Abrir",
            command: "/open"
        },
        {
            description: "Fechar",
            command: "/close"
        }
    ],
    states: [{
        description: "The door is open",
        image: "/assets/images/door-open.png",
        action: "Open",
        transitions: [{
            description: "The door is closed",
            image: "/assets/images/door-closed.png",
            action: "Close",
            transitions: null,
        },{
            description: "The door is locked",
            image: "/assets/images/door-locked.png",
            action: "Lock",
            transitions: null
        }
    ]
    },
    {
        description: "The door is closed",
        image: "/assets/images/door-closed.png",
        action: "Close",
        transitions:[{
            description: "The door is locked",
        image: "/assets/images/door-locked.png",
        action: "Lock",
        transitions: null
        },
    {
        description: "The door is open",
        image: "/assets/images/door-open.png",
        action: "Open",
        transitions:null,
    }]
    }, {
        description: "The door is locked",
        image: "/assets/images/door-locked.png",
        action: "Lock",
        transitions:[{
            description: "The door is open",
        image: "/assets/images/door-open.png",
        action: "Open",
        transitions:null
        },{
        description: "The door is unlocked",
        image: "/assets/images/door-closed.png",
        action: "Unlock",
        transitions:null
        }]
    }
    ],
    type: "Door"
}

const LAMP: SystemDevice = {
    devices: [
        {
            url: "0.10.10.10/light1",
            name: "0.10.10.10/light1"

        },
        {
            url: "10.10.11.11/light2",
            name: "10.10.11.11/light2"

        },
        {
            url: "10.10.10.15/light3",
            name: "10.10.10.15/light3"

        },
        {
            url: "10.10.10.15/light4",
            name: "10.10.10.15/light4"

        },

    ],
    actions: [
        {
            description: "Ligar",
            command: "/on"
        },
        {
            description: "Desligar",
            command: "/off"
        }
    ],
    states: [{
        description: "The lamp is on",
        image: "/assets/images/lamp-on-v2.png",
        action: "Turn on",
        transitions:[{
            description: "The lamp is off",
            image: "/assets/images/lamp-off-v2.png",
            action: "Turn off",
            transitions : null
        }]
    },
    {
        description: "The lamp is off",
        image: "/assets/images/lamp-off-v2.png",
        action: "Turn off",
        transitions:[{
            description: "The lamp is on",
            image: "/assets/images/lamp-on-v2.png",
            action: "Turn on",
            transitions : null
        }]
    }
    ],
    type: "BinaryLamp"
}

const BLINDS: SystemDevice = {
    devices: [
        {
            url: "13.10.10.11/blinds1",
            name: "13.12.10.11/blinds1"

        },
        {
            url: "13.12.10.11/blinds2",
            name: "13.12.10.11/blinds2"

        }

    ], actions: [
        {
            description: "Ligar",
            command: "/on"
        },
        {
            description: "Desligar",
            command: "/off"
        }
    ],
    states: [{
        description: "The blinds are open",
        image: "/assets/images/blinds-open.png",
        action: "Open",
        transitions:[{
            description: "The blinds are closed",
            image: "/assets/images/blinds-closed.png",
            action: "Close",
            transitions:null
        }]
    },
    {
        description: "The blinds are closed",
        image: "/assets/images/blinds-closed.png",
        action: "Close",
        transitions:[{
            description: "The blinds are open",
            image: "/assets/images/blinds-open.png",
            action: "Open",
            transitions:null
        }]
    }
    ],
    type: "Blinds"
}

const AC: SystemDevice = {
    devices: [
        {
            url: "10.10.17.11/AC1",
            name: "10.10.17.11/AC1"

        },
        {
            url: "10.10.17.12/AC2",
            name: "10.10.17.12/AC2"

        }

    ],


    actions: [
        {
            description: "Ligar",
            command: "/on"
        },
        {
            description: "Desligar",
            command: "/off"
        }
    ],
    states: [{
        description: "The AC is on",
        image: "/assets/images/AC-on.png",
        action: "Open",
        transitions:[{
            description: "The AC is off",
            image: "/assets/images/AC-off.png",
            action: "Close",
            transitions: null
        },{  description: "The AC temperature is %s",
        image: "/assets/images/AC-on.png",
        action: "Change temperature",
        transitions:null
    }
    ],
    hasValues : true,
    value : 25

    },
    {
        description: "The AC is off",
        image: "/assets/images/AC-off.png",
        action: "Close",
        transitions:[{
            description: "The AC is on",
            image: "/assets/images/AC-on.png",
            action: "Open",
            transitions:null
        }]
    },
    {
        description: "The AC temperature is ",
        image: "/assets/images/AC-on.png",
        action: "Change temperature",
        transitions:[
            {
                description: "The AC temperature is %s",
                image: "/assets/images/AC-on.png",
                action: "Change temperature",
                transitions: null,
            }, 
              {description: "The AC is off",
            image: "/assets/images/AC-off.png",
            action: "Close",
            transitions:null
           }

        ],
        hasValues : true,
        value : 25
    }
    ],
    type: "AC"
}

export const Devices: SystemDevice[] = [
    LAMP, DOOR, BLINDS, AC
]
const HALL: Division = {
    title: "Hall",
    id: 0,
    info: [

        {
            description: "Temperatura",
            value: "29ºC"
        },
        {
            description: "Humidade",
            value: "23%"
        },
        {
            description: "Energy",
            value: "200W"
        },
    ],
    layout: {
        from: {
            x: 15,
            y: 15
        },
        to: {
            x: 21,
            y: 32
        }
    },
    devices: [
        {
            //lampada cima meio
            id:0,
            name: "Lampada0",
            url: "10.10.10.10",
            position: {
                x: 3.5,
                y: 0.5
            },
            device: LAMP,
            currentState: LAMP.states[0],
            show: false

        },
        {
            //lampada canto superior esquerdo
            id:1,
            name: "Lampada1",
            url: "10.10.10.10",
            position: {
                x: 0.2,
                y: 0.5
            },
            device: LAMP,
            currentState: LAMP.states[0],
            show: false
        },
        {
            id:2,
            name: "Door",
            url: "10.10.10.10",
            position: {
                x: 3,
                y: 16.5
            },
            device: DOOR,
            currentState: DOOR.states[1],
            show: false
        }
    ], doors: [
        {
            //porta esquerda cima
            x: 0,
            y: 5,
            angle: 90
        },
        {
            //porta meio cima
            x: 3,
            y: 0,
            angle: 0
        },
        {
            //porta esquerda baixo
            x: 0,
            y: 15,
            angle: 90
        },
        {
            //porta direita meio
            x: 6,
            y: 10,
            angle: 90
        },
        {
            //porta direita cima
            x: 5,
            y: 0,
            angle: 0
        },
        {
            //porta direita baixo
            x: 16,
            y: 16,
            angle: 90
        }
    ]

}



const LIVINGROOM: Division = {
    title: "Living Room",
    id: 1,
    info: [

        {
            description: "Temperatura",
            value: "30ºC"
        },
        {
            description: "Humidade",
            value: "10%"
        },
        {
            description: "Energy",
            value: "100W"
        },
    ],
    layout: {
        from: {
            x: 21,
            y: 0
        },
        to: {
            x: 39,
            y: 18
        }
    },
    devices: [
        {
            id:0,
            name: "Lampada0",
            url: "10.10.10.10",
            position: {
                x: 0.7,
                y: 1
            },
            device: LAMP,
            currentState: LAMP.states[0],
            show: false
        },
        {
            //lampada meio
            id:1,
            name: "Lampada1",
            url: "10.10.10.10",
            position: {
                x: 9,
                y: 9,
            },
            device: LAMP,
            currentState: LAMP.states[0],
            show: false
        }
    ], doors: [
        {
            //porta esquerda
            x: 0,
            y: 22,
            angle: 90
        },
        {
            //porta meio baixo
            x: 15,
            y: 28.2,
            angle: 0
        }
    ]

}

const BEDROOM: Division = {
    title: "Bedroom",
    id: 2,
    info: [

        {
            description: "Temperatura",
            value: "26ºC"
        },
        {
            description: "Humidade",
            value: "3%"
        },
        {
            description: "Energy",
            value: "300W"
        },
    ],
    layout: {
        from: {
            x: 6,
            y: 0
        },
        to: {
            x: 21,
            y: 15
        }
    },
    devices: [
        {
            id:0,
            name: "Lampada0",
            url: "10.10.10.10",
            position: {
                x: 0.5,
                y: 1
            },
            device: LAMP,
            currentState: LAMP.states[0],
            show: false
        },
        {
            id:1,
            name: "Lampada1",
            url: "10.10.10.10",
            position: {
                x: 3,
                y: 7,
            },
            device: LAMP,
            currentState: LAMP.states[0],
            show: false
        },
        {
            id:2,
            name: "Lamp3",
            url: "10.10.10.10",
            position: {
                x: 7.5,
                y: 7.5,
            },
            device: LAMP,
            currentState: LAMP.states[0],
            show: false
        },
        {
            id:3,
            name: "Lamp4",
            url: "10.10.10.10",
            position: {
                x: 14,
                y: 1,
            },
            device: LAMP,
            currentState: LAMP.states[0],
            show: false
        }
    ],
    doors: [
        {
            //porta esquerda
            x: 0,
            y: 18,
            angle: 90
        },
        {
            //porta baixo direita
            x: 20,
            y: 28.2,
            angle: 0
        }
    ]

}

const ROOM1: Division = {
    title: "Room1",
    id: 3,
    info: [

        {
            description: "Temperatura",
            value: "30ºC"
        },
        {
            description: "Humidade",
            value: "10%"
        },
        {
            description: "Energy",
            value: "100W"
        },
    ],
    layout: {
        from: {
            x: 3,
            y: 15
        },
        to: {
            x: 15,
            y: 24
        }
    },
    devices: [
        {
            //estores cima
            id:0,
            name: "Estores0",
            url: "10.10.10.10",
            position: {
                x: 0.3,
                y: 3,
            },
            device: BLINDS,
            currentState: BLINDS.states[0],
            show: false
        },
        {
            //estores baixo
            id:1,
            name: "Estores1",
            url: "10.10.10.10",
            position: {
                x: 0.3,
                y: 6,
            },
            device: BLINDS,
            currentState: BLINDS.states[0],
            show: false
        }
    ],
    doors: [
        {
            //porta direita meio
            x: 31.8,
            y: 12,
            angle: 90
        }
    ]

}
const ROOM2: Division = {
    title: "Room2",
    id: 4,
    info: [

        {
            description: "Temperatura",
            value: "30ºC"
        },
        {
            description: "Humidade",
            value: "10%"
        },
        {
            description: "Energy",
            value: "100W"
        },
    ],
    layout: {
        from: {
            x: 3,
            y: 24
        },
        to: {
            x: 15,
            y: 32
        }
    },
    devices: [
        {
            //estores cima
            id:3,
            name: "Estores0",
            url: "10.10.10.10",
            position: {
                x: 0.3,
                y: 3,
            },
            device: BLINDS,
            currentState: BLINDS.states[0],
            show: false
        },
        {
            //AC baixo
            id:4,
            name: "AC0",
            url: "10.10.10.10",
            position: {
                x: 0.3,
                y: 6,
            },
            device: AC,
            currentState: AC.states[0],
            show: false
        }
    ],
    doors: [
        {
            //porta direita meio
            x: 33.8,
            y: 12,
            angle: 90
        }
    ]


}
const BATH: Division = {
    title: "Bath",
    id: 5,
    info: [

        {
            description: "Temperatura",
            value: "30ºC"
        },
        {
            description: "Humidade",
            value: "10%"
        },
        {
            description: "Energy",
            value: "100W"
        },
    ],
    layout: {
        from: {
            x: 0,
            y: 0
        },
        to: {
            x: 6,
            y: 15
        }
    },
    devices: [{
        //AC baixo
        id:0,
        name: "AC0",
        url: "10.10.10.10",
        position: {
            x: 0.3,
            y: 8.4,
        },
        device: AC,
        currentState: AC.states[0],
        show: false
    }, {
        //lampada meio esquerda 
        id:1,
        name: "Lampada1",
        url: "10.10.10.10",
        position: {
            x: 3,
            y: 5,
        },
        device: LAMP,
        currentState: LAMP.states[0],
        show: false
    },
    {
        //lampada meio esquerda 
        id:2,
        name: "Lampada1",
        url: "10.10.10.10",
        position: {
            x: 3,
            y: 13,
        },
        device: LAMP,
        currentState: LAMP.states[0],
        show: false
    }
    ],
    doors: [
        {
            //porta meio direita
            x: 17,
            y: 25,
            angle: 90
        }
    ]


}

const KITCHEN: Division = {
    title: "Kitchen",
    id: 6,
    info: [

        {
            description: "Temperatura",
            value: "30ºC"
        },
        {
            description: "Humidade",
            value: "10%"
        },
        {
            description: "Energy",
            value: "100W"
        },
    ],
    layout: {
        from: {
            x: 21,
            y: 18
        },
        to: {
            x: 39,
            y: 32
        }
    },
    devices: [{
        //lampada meio esquerda 
        id:0,
        name: "Lampada1",
        url: "10.10.10.10",
        position: {
            x: 9,
            y: 7,
        },
        device: LAMP,
        currentState: LAMP.states[0],
        show: false
    }],
    doors: [
        {
            //porta cima meio
            x: 16,
            y: 0.8,
            angle: 0
        },
        {
            //porta esquerda baixo
            x: 0,
            y: 15,
            angle: 90
        }
    ]


}

const TOILET: Division = {
    title: "Toilet",
    id: 7,
    info: [

        {
            description: "Temperatura",
            value: "30ºC"
        },
        {
            description: "Humidade",
            value: "10%"
        },
        {
            description: "Energy",
            value: "100W"
        },
    ],
    layout: {
        from: {
            x: 21,
            y: 18
        },
        to: {
            x: 27,
            y: 24
        }
    },
    devices: [{
        //lampada meio esquerda 
        id:0,
        name: "Lampada1",
        url: "10.10.10.10",
        position: {
            x: 3,
            y: 5,
        },
        device: LAMP,
        currentState: LAMP.states[0],
        show: false
    }],
    doors: [
        {
            //porta esquerda meio
            x: 0,
            y: 14,
            angle: 90
        }
    ]


}



export const MOCKDIVISION: Division[] = [

    HALL, LIVINGROOM, BEDROOM, ROOM1, ROOM2, BATH, KITCHEN, TOILET

]
