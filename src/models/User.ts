import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { Eventing } from "./eventing";
import { ApiSync } from "./ApiSync";
import { Collection } from "./Collections";
export interface UserProps {
    id?: number;
    name?:string;
    age?:number;
    //? makes the property optional
}
const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
    static buildUserCollection(): Collection<User,UserProps> {
        return new Collection<User,UserProps>(rootUrl,(json: UserProps) => User.buildUser(json));
    }


    static buildUser(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rootUrl)
        );
    }

}