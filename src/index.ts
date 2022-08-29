
import { Collection } from "./models/Collections";

const collection = new Collection("http://localhost:3000/users")

collection.on("change", () => {
    const users = collection.models;
    console.log(users);
});

collection.fetch();
