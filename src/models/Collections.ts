// import { Model } from "./Model";
import { Eventing } from "./Eventing";
import axios,{AxiosResponse} from "axios";

export class Collection<T,K> {
    models: T[] = [];
    events: Eventing = new Eventing();

    constructor(
        public rootUrl: string,
        public deserialize: (json: K) => T
        ){}
        // , 
        
    //     public deserialize: (json: UserProps) => User) {
    //     this.fetch();
    // }

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    fetch(): void {
        axios.get(this.rootUrl).then((res: AxiosResponse) => {
            res.data.forEach( (value: K) => {
                this.models.push(this.deserialize(value));
            }
            );
            this.trigger("change");
        });
    }

}
