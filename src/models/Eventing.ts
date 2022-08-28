type Callback = ()=>void //function type

export class Eventing {
    events:{[key:string]:Callback[]} = {}


    on = (eventName:string,callback:Callback)=>{

        // this.events[eventName] = this.events[eventName] || []
        const handlers = this.events[eventName]||[]
        handlers.push(callback)
        this.events[eventName] = handlers;

    }

    trigger = (eventName:string)=>{
        const handlers = this.events[eventName]||[]
        if(handlers.length===0||!handlers){
            return;
        }
        handlers.forEach(handler=>handler())  
    } 

}