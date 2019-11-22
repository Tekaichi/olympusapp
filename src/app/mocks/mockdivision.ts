import { Division } from "../shared/models/division";
import { SystemDevice, Device } from "../shared/models/device";



const DOOR: SystemDevice = {
    devices:[{
        url:"10.11.12.10",
        name:"MainDoor"
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
        action: "Open"
    },
    {
        description: "The door is closed",
        image: "/assets/images/door-closed.png",
        action: "Close"
    }, {
        description: "The door is locked",
        image: "/assets/images/door-locked.png",
        action: "Lock"
    }
    ],
    type: "Door"
}

const LAMP: SystemDevice = {
    devices: [
        {
            url:"10.10.10.11",
            name:"Lampada 1"

        },
        {
            url:"10.10.11.11",
            name:"Lampada 2"

        },
        {
            url:"10.10.10.15",
            name:"Lampada 3"

        },
        {
            url:"10.10.11.12",
            name:"Lampada 4"

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
        action: "Turn on"
    },
    {
        description: "The lamp is off",
        image: "/assets/images/lamp-off-v2.png",
        action: "Turn off"
    }
    ],
    type: "BinaryLamp"
}

const BLINDS: SystemDevice = {
    devices: [
        {
            url:"10.10.10.11",
            name:"Blinds_1"

        },
        {
            url:"10.10.11.11",
            name:"Blinds_2"

        }

    ],    actions: [
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
        action: "Open"
    },
    {
        description: "The blinds are closed",
        image: "/assets/images/blinds-closed.png",
        action: "Close"
    }
    ],
    type: "Blinds"
}

const AC: SystemDevice = {
    devices: [
        {
            url:"10.10.10.11",
            name:"AC_1"

        },
        {
            url:"10.10.11.11",
            name:"AC_2"

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
        action: "Open"
    },
    {
        description: "The AC is off",
        image: "/assets/images/AC-off.png",
        action: "Close"
    },
    {
        description: "The AC temperature is %s",
        image: "/assets/images/AC-on.png",
        action: "Change temperature"
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
            name: "Lampada0",
            url: "10.10.10.10",
            position: {
                x: 10,
                y: 0
            },
            device: LAMP,
            currentState: LAMP.states[0]

        },
        {
            name: "Lampada1",
            url: "10.10.10.10",
            position: {
                x: 0,
                y: 0
            },
            device: LAMP,
            currentState: LAMP.states[0]
        },
        {
            name: "Door",
            url: "10.10.10.10",
            position: {
                x: 8,
                y: 47
            },
            device: DOOR,
            currentState: DOOR.states[1]
        }
    ], doors: [
        {
            //porta esquerda cima
            x: 1,
            y: 15
        },
        {
            //porta meio cima
            x: 8,
            y: 1.5
        },
        {
            //porta esquerda baixo
            x: 1,
            y: 32
        },
        {
            //porta direita meio
            x: 15.5,
            y: 15
        },
        {
            //porta direita cima
            x: 15.5,
            y: 1.5
        },
        {
            //porta direita baixo
            x: 15.5,
            y: 32
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
            name: "Lampada0",
            url: "10.10.10.10",
            position: {
                x: 0,
                y: 0
            },
            device: LAMP,
            currentState: LAMP.states[0]
        },
        {
            name: "Lampada1",
            url: "10.10.10.10",
            position: {
                x: 10,
                y: 10,
            },
            device: LAMP,
            currentState: LAMP.states[0]
        }
    ], doors: [
        {
            //porta esquerda
            x: 1,
            y: 22
        },
        {
            //porta meio baixo
            x: 15,
            y: 26.5
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
            name: "Lampada0",
            url: "10.10.10.10",
            position: {
                x: 0,
                y: 0
            },
            device: LAMP,
            currentState: LAMP.states[0]
        },
        {
            name: "Lampada1",
            url: "10.10.10.10",
            position: {
                x: 5,
                y: 7,
            },
            device: LAMP,
            currentState: LAMP.states[0]
        },
        {
            name: "Lamp3",
            url: "10.10.10.10",
            position: {
                x: 15,
                y: 15,
            },
            device: LAMP,
            currentState: LAMP.states[0]
        },
        {
            name: "Lamp4",
            url: "10.10.10.10",
            position: {
                x: 20,
                y: 0,
            },
            device: LAMP,
            currentState: LAMP.states[0]
        }
    ],
    doors: [
        {
            //porta esquerda
            x: 1,
            y: 18
        },
        {
            //porta baixo direita
            x: 20,
            y: 26.5
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
            name: "Estores0",
            url: "10.10.10.10",
            position: {
                x: 1,
                y: 7,
            },
            device: BLINDS,
            currentState: BLINDS.states[0]
        },
        {
            name: "Estores1",
            url: "10.10.10.10",
            position: {
                x: 1,
                y: 17,
            },
            device: BLINDS,
            currentState: BLINDS.states[0]
        }
    ],
    doors: [
        {
            //porta direita meio
            x: 31.5,
            y: 12
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
            name: "Estores0",
            url: "10.10.10.10",
            position: {
                x: 1,
                y: 7,
            },
            device: BLINDS,
            currentState: BLINDS.states[0]
        },
        {
            name: "AC0",
            url: "10.10.10.10",
            position: {
                x: 1,
                y: 17,
            },
            device: AC,
            currentState: AC.states[0]
        }
    ],
    doors: [
        {
            //porta direita meio
            x: 33.5,
            y: 12
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
    devices: [],
    doors: [
        {
            //porta meio direita
            x: 16.8,
            y: 25
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
    devices: [],
    doors: [
        {
            //porta cima meio
            x: 17,
            y: 1.5
        },
        {
            //porta esquerda baixo
            x: 1,
            y: 15
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
    devices: [],
    doors: [
        {
            //porta esquerda meio
            x: 1,
            y: 14
        }
    ]


}



export const MOCKDIVISION: Division[] = [

    HALL, LIVINGROOM, BEDROOM, ROOM1, ROOM2, BATH, KITCHEN, TOILET

]
