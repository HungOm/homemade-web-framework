import axios,{AxiosResponse,AxiosPromise} from 'axios';


interface ModelAttributes<T> {
    set(update: T): void;
    getAll(): T;
    get<K extends keyof T>(key: K): T[K];
}

interface Sync<T>{
    fetch(id: number): AxiosPromise;
    save(data: T): AxiosPromise;
}

interface Event {
    on(eventName: string, callback: () => void): void;
    trigger(eventName: string): void;
}

interface hasID {   
    id?: number;
}

export class Model<T extends hasID> {
    constructor(
        private attributes:ModelAttributes<T>, 
        private events: Event,
        private sync:Sync<T>
        ){ }
        on = this.events.on;
        trigger = this.events.trigger;
        get = this.attributes.get;
    
    
        set(update:T):void{
            this.attributes.set(update);
            this.events.trigger('change');
        }
    
        fetch():void{
            const id = this.attributes.get('id');
            if(typeof id !== 'number'){
                throw new Error('Cannot fetch without an id');
            }
            this.sync.fetch(id).then(
                (response:AxiosResponse):void=>{
                this.set(response.data);
            }).catch((error:Error):void=>{
                console.log(error);
            });
        }
    
        save():void{
            this.sync.save(this.attributes.getAll())
            .then((response:AxiosResponse):void=>{
                this.trigger('save');
            }).catch((error:Error):void=>{
                console.log(error);
                this.trigger('error');
            }
            );
        }
}
