import mongoose from 'mongoose';
import validator from 'validator';
const userInputSchema = new mongoose.Schema({

    name:{
        type: String,
    },
    email:{
        type: String,
        required: [true,'Please provide us with you Email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid Email" ]
    },
    password:{
        type: String,
        required:[true, 'Please make a Password'],
        minlength: 6
    }
})

const UserInput = mongoose.model('UserInput',userInputSchema);
export default UserInput;