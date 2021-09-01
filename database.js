import mongoose from "mongoose";
import dotenv from 'dotenv';
import {importData} from './Data/importData.js' 

dotenv.config({path:'./config.env'});
const URL = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@upcloud.9if9w.mongodb.net/Upcloud?retryWrites=true&w=majority`

const Database = async() =>{
    try{
        await mongoose.connect(URL, {useNewUrlParser: true,
            useUnifiedTopology: true});
            console.log('Database connection successfull')
    }
    catch(err){
        console.log('Error: ', err.message);
    }
}
importData();

export default Database;