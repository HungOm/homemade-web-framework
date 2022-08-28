import axios,{AxiosResponse} from 'axios';
import {Eventing} from './Eventing';
import {Sync} from './Sync';

import { Attributes } from './Attributes';

export interface UserProps {
    id?: number;
    name?:string;
    age?:number;
        //? makes the property optional
}
const rootUrl = 'http://localhost:3000/users';

export class User{
    public events:Eventing = new Eventing();
    public sync:Sync<UserProps> = new Sync<UserProps>(rootUrl);
    public attributes:Attributes<UserProps> 

    constructor(attrs:UserProps){
        this.attributes = new Attributes<UserProps>(attrs);
    }

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    get get() {
        return this.attributes.get;
    }


    set(update:UserProps):void{
        this.attributes.set(update);
        this.events.trigger('change');
    }



    // get(propsName:string):(string|number){
    //     return this.data[propsName];
    // }
    // set(update:{name:string,age:number}):void{
    //     Object.assign(this.data,update)
    // }

  
    // fetch(): void{
    //     axios.get(`http://localhost:3000/users/${this.get('id')}`)
    //     .then((response:AxiosResponse): void=>{
    //         console.log(response.status)
    //         this.set(response.data)
    //     }
    //     )
    // }
    // update():void{
    //     axios.put(`http://localhost:3000/users/${this.get('id')}`,this.data)
    //     .then((response:AxiosResponse): void=>{
    //         console.log(response.status)
    //     }   
    //     )   
    // }

    // save():void{
    //     if(this.get('id')){
            
    //         this.update()
    //         // axios.put(`http://localhost:3000/users/${id}`,this.data)

    //     }else{
    //         axios.post(`http://localhost:3000/users`,this.data)
    //         .then((response:AxiosResponse): void=>{

    //             console.log(response.status)
    //             this.events.trigger('save');

    //         } 
              
    //     )   
    //     }
    // }



}