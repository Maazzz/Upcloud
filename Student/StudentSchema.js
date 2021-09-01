import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
    name:String,
    age:String,
    class:String,
    section:String
})
const Student = mongoose.model('Student',StudentSchema);
export default Student;