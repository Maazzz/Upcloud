import UserInput from "../Models/userInputSchema.js";
import nodemailer from 'nodemailer';

const code = Math.floor(100000 + Math.random() * 900000);
const mail = (email) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'gs9708448@gmail.com',
            pass: ''
        }});
        const mailOptions = {
            from: 'gs9708448@gmail.com',
            to: email,
            subject: 'Email Verification',
            text: `Yor verification code is ${code}`
        };
        transporter.sendMail(mailOptions, function(error, data){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent!');
            }
        });
}
export const createUser = async (req,res) =>{
    try{
        const newUserr = await UserInput.create(req.body);
        mail(newUserr.email);
        res.status(201).json({
            status:'success',
            newUser: newUserr
        })
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}
