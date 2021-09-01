import mongoose from "mongoose";
import dotenv from 'dotenv';
import {importDataTeacher} from './importDataTeacher.js'

dotenv.config({path:'./config.env'});
const URL = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@UpCloud.9if9w.mongodb.net/Teachers?retryWrites=true&w=majority`

const TeacherDatabase = async() =>{
    try{
        await mongoose.createConnection(URL, {useNewUrlParser: true,
            useUnifiedTopology: true});
            console.log('Teacher Database connection successfull')
    }
    catch(err){
        console.log('Error: ', err.message);
    }
}
importDataTeacher();
export default TeacherDatabase;