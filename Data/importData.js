import User from "../Models/userSchema.js";
import { userData } from "./userData.js";

export const importData = async () =>{
    try{
        await User.deleteMany();
        await User.insertMany(userData);
        console.log('Data imported');
    }catch(err){
        console.log(err)
    }
}