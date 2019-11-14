export class Procedure {
    name : String;
    actions : DivisionActions[]
    //Event ???
}

export class DivisionActions {
    name : String;
    actions: String[]; //url/action? Or use the classes in the user.ts ?
}