import { User } from "./models/User";

const user = User.buildUser({
    id: 1,
    name: "John",
    age: 30
});


user.on("change", () => {
    console.log("change");
    console.log(user);
}
);
user.on("save", () => {
    console.log("save");
}
);
user.on("error", () => {
    console.log("error");
}
);

user.fetch();





