export class ServerDivision  {

    id: number
    devices : ServerDevice[]


}

export class ServerDevice {
    id:number
    image: string
    url: string
    name:string
    device:string
    position :{
        x :number
        y : number
    }

}