import TeacherSchema from './TeacherSchema.js';

export const getTeacher = async (req,res) =>{
    try{
        const Teacher = await TeacherSchema.find({});
        res.status(200).json('Success');
        console.log(Teacher[0].name);
    }
    catch(err){
        res.status(400).json('fail');
    }
}