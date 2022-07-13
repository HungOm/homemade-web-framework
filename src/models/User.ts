import axios,{AxiosResponse} from 'axios';
interface UserProps {
    id?: number;
    name?:string,
    age?:number

        //? makes the property optional

}

type Callback = ()=>void //function type



export class User{
    events:{[key:string]:Callback[]} = {}
    constructor(private data: UserProps){

    }

    get(propsName:string):(string|number){
        return this.data[propsName];
    }
    set(update:{name:string,age:number}):void{
        Object.assign(this.data,update)
    }

    on(eventName:string,callback:Callback){
        // this.events[eventName] = this.events[eventName] || []
        const handlers = this.events[eventName]||[]
        handlers.push(callback)
        this.events[eventName] = handlers;

    }

    trigger(eventName:string){
        const handlers = this.events[eventName]||[]
        if(handlers.length===0||!handlers){
            return;
        }
        handlers.forEach(handler=>handler())

        
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
            axios.post('http://localhost:3000/users',this.data)
        }
    }



}