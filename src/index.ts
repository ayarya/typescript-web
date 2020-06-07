import { UserEdit } from "./views/UserEdit";
import { User } from "./models/Users";

const user = User.buildUser({ name:'Name', age: 11});
 
const root = document.getElementById('root');
if(root){
    const userEdit = new UserEdit(root,user);
    userEdit.render();  
    //console.log(userEdit); 
}else{
    throw new Error('ROOT ELEMENT NOT FOUND');
}