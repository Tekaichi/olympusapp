import { Procedure } from '../shared/models/procedures';
import { Division } from '../shared/models/division';
import { MOCKDIVISION } from './mockdivision';
export const MOCKPROCEDURES: Procedure[] = [

    new Procedure("Rooms 1 and 2 blinds", [
        {
            division: MOCKDIVISION[4],
            id: 0,
            name: "Room2",
            actions: [{
                device: MOCKDIVISION[4].devices[0],
                goalState: {
                    description: "The blinds are open",
                    image: "/assets/images/blinds-open.png",
                    action: "Open",
                    transitions: [{
                        description: "The blinds are closed",
                        image: "/assets/images/blinds-closed.png",
                        action: "Close",
                        transitions: null
                    }]
                }
            },

            ]
        }, {
            division: MOCKDIVISION[3],
            id: 1,
            name: "Room1",
            actions: [{
                device: MOCKDIVISION[3].devices[0],
                goalState: {
                    description: "The blinds are open",
                    image: "/assets/images/blinds-open.png",
                    action: "Open",
                    transitions: [{
                        description: "The blinds are closed",
                        image: "/assets/images/blinds-closed.png",
                        action: "Close",
                        transitions: null
                    }]
                }
            }, {
                device: MOCKDIVISION[3].devices[1],
                goalState: {
                    description: "The blinds are open",
                    image: "/assets/images/blinds-open.png",
                    action: "Open",
                    transitions: [{
                        description: "The blinds are closed",
                        image: "/assets/images/blinds-closed.png",
                        action: "Close",
                        transitions: null
                    }]
                }
            }

            ]
        }


    ], 0),
    new Procedure("Living room lights", [
        {
            division: MOCKDIVISION[1],
            id: 0,
            name: "Living Room",
            actions: [{
                device: MOCKDIVISION[1].devices[0],
                goalState: {
                    description: "The lamp is on",
                    image: "/assets/images/lamp-on-v2.png",
                    action: "Turn on",
                    transitions: [{
                        description: "The lamp is off",
                        image: "/assets/images/lamp-off-v2.png",
                        action: "Turn off",
                        transitions: null
                    }]
                }
            },
            {
                device: MOCKDIVISION[1].devices[1],
                goalState: {
                    description: "The lamp is on",
                    image: "/assets/images/lamp-on-v2.png",
                    action: "Turn on",
                    transitions: [{
                        description: "The lamp is off",
                        image: "/assets/images/lamp-off-v2.png",
                        action: "Turn off",
                        transitions: null
                    }]
                }
            }

            ]
        }
    ], 1),

]