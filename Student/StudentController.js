import StudentSchema from './StudentSchema.js';

export const getStudent = async (req,res) =>{
    try{
        const Student = await StudentSchema.find({});
        res.status(200).json('Success')
        console.log(Student[0].name);
    }
    catch(err){
        res.status(400).json('Fail');
    }
}