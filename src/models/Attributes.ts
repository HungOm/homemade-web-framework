import { UserProps } from "./User";
export class Attributes<T> {
    constructor(private data: T) {}


    // get(propsName:string):(string|number|boolean){
    //     return this.data[propsName];
    // }

    get = <K extends keyof T>(key:K):T[K]=>{
        return this.data[key]
    }
    set (update:T):void{
        Object.assign(this.data,update)
    }

    getAll = ():T=>{
        return this.data;
    }

}

