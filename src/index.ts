import { User } from "./models/User";


const user = new User({
    name: 'New Record',
    age: 29
});



user.on('change', () => {
    // console.log('User changed');
    console.log('User changed', user.get('name'));
});
user.set({name: 'New Name Updated'});



