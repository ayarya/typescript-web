import {User} from './models/Users';

const collection = User.buildUserCollection();
collection.on('change',()=>{
    console.log(collection);
})

collection.fetch();