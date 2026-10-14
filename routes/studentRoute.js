import * as studentController from '../controllers/studentController.js';
import express from 'express';

const studentRoute = express.Router();

studentRoute.get('/all', studentController.fetchAllStudents);
studentRoute.post('/', studentController.createStudent);
studentRoute.put('/:id', studentController.editStudent);

export default studentRoute;
