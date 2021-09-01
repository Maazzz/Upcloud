import { StudentData } from "./StudentData.js";
import Student from "./StudentSchema.js";


export const importDataStudent = async () =>{
    try{
        await Student.deleteMany();
        await Student.insertMany(StudentData);
        console.log('Student Data imported');
    }catch(err){
        console.log(err)
    }
}
export default importDataStudent;