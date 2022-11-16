
import { Collection } from "./models/Collections";
import { User, UserProps } from "./models/User";

const collection = User.buildUserCollection();
collection.on("change", () => {
    const users = collection.models;
    console.log(users);
});

collection.fetch();
