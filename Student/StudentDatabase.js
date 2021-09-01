import mongoose from "mongoose";
import dotenv from 'dotenv';
import {importDataStudent} from './importDataStudent.js'

dotenv.config({path:'./config.env'});
const URL = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@UpCloud.9if9w.mongodb.net/Students?retryWrites=true&w=majority`

const StudentDatabase = async() =>{
    try{
        await mongoose.createConnection(URL, {useNewUrlParser: true,
            useUnifiedTopology: true});
            console.log('Student Database connection successfull')
    }
    catch(err){
        console.log('Error: ', err.message);
    }
}
importDataStudent();
export default StudentDatabase;