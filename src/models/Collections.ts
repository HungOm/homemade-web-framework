// import { Model } from "./Model";
import { User,UserProps } from "./User";
import { Eventing } from "./eventing";
import axios,{AxiosResponse} from "axios";

export class Collection {
    models: User[] = [];
    events: Eventing = new Eventing();

    constructor(public rootUrl: string){}
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
            res.data.forEach((user: UserProps) => {
                this.models.push(User.buildUser(user));
            });
            this.trigger("change");
        }).catch((err: Error) => {
            console.log(err);
        });
    }

}