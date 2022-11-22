

export enum TodoType{
    Learned="Learned",
    Learning="Learning",
    Pending="Pending",
    Revision="Revision"

}

export type Todo={
    id:number;
    type:TodoType;
    message:string;
    likes:number;
}

export const ColorMap:Record<TodoType,string>={
    Learned:"green",
    Learning:"yellow",
    Pending:"orange",
    Revision:"blue"
}