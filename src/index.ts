import { User } from "./models/User";

const user = new User({name:'Joey',age:28})
user.save();
user.events.on('save',():void=>{
    console.log(`User ${user.get('name')} saved`)
})
