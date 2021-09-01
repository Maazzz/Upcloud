import User from "../Models/userSchema.js";
export const getUser = async (req,res) => {
    try{
        const Username = await User.find({});
        res.status(200).json(Username.map(users =>({
            name:users.name,
            email: users.email,
            age: users.age
        })))
    }
    catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}