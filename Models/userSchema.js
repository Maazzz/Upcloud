import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    age: String,
    email: String,
    address: String,
    income: String,
    maritalStatus: String,
    registrationNumber: String,
    registrationDate: String
})

const User = mongoose.model('User',userSchema);
export default User;