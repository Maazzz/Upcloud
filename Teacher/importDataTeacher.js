import { TeacherData } from "./TeacherData.js";
import Teacher from "./TeacherSchema.js";

export const importDataTeacher = async () =>{
    try{
        await Teacher.deleteMany();
        await Teacher.insertMany(TeacherData);
        console.log('Teacher Data imported');
    }catch(err){
        console.log(err)
    }
}
export default importDataTeacher;