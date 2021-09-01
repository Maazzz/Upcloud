import mongoose from 'mongoose';

const TeacherSchema = new mongoose.Schema({
    name:String,
    age:String,
    subject:String,
    employee_id:String
})
const Teacher = mongoose.model('Teacher',TeacherSchema);
export default Teacher;