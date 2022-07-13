import axios,{AxiosResponse} from 'axios';
import {Eventing} from './Eventing';
interface UserProps {
    id?: number;
    name?:string;
    age?:number;
        //? makes the property optional
}

export class User{
    public events:Eventing = new Eventing();
    constructor(private data: UserProps){

    }

    get(propsName:string):(string|number){
        return this.data[propsName];
    }
    set(update:{name:string,age:number}):void{
        Object.assign(this.data,update)
    }

  
    fetch(): void{
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
        .then((response:AxiosResponse): void=>{
            console.log(response.status)
            this.set(response.data)
        }
        )
    }
    update():void{
        axios.put(`http://localhost:3000/users/${this.get('id')}`,this.data)
        .then((response:AxiosResponse): void=>{
            console.log(response.status)
        }   
        )   
    }

    save():void{
        if(this.get('id')){
            
            this.update()
            // axios.put(`http://localhost:3000/users/${id}`,this.data)

        }else{
            axios.post(`http://localhost:3000/users`,this.data)
            .then((response:AxiosResponse): void=>{

                console.log(response.status)
                this.events.trigger('save');

            } 
              
        )   
        }
    }



}