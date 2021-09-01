import Database from './database.js';
import app from './index.js'
import StudentDatabase from './Student/StudentDatabase.js';
import TeacherDatabase from './Teacher/TeacherDatabase.js';

const port = 8000;
Database();
StudentDatabase();
TeacherDatabase();
app.listen(port, () => {
    console.log(`App is running on Port ${port}`)
})