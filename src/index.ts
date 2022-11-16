
import { Collection } from "./models/Collections";
import { User, UserProps } from "./models/User";

const collection = new Collection<User,UserProps>("http://localhost:3000/users",(json: UserProps) => User.buildUser(json)); 

collection.on("change", () => {
    const users = collection.models;
    console.log(users);
});

collection.fetch();
