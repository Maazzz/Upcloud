import express from 'express';
import { getUser } from '../Controller/userController.js';
import { createUser } from '../Controller/userInputController.js';
import { getStudent } from '../Student/StudentController.js';
import { getTeacher } from '../Teacher/TeacherController.js';

const router = express.Router();

router
.route('/userDetails')
.get(getUser)

router
.route('/signup')
.post(createUser)

router
.route('/Student')
.get(getStudent)

router
.route('/Teacher')
.get(getTeacher)

export default router;