const express = require('express');
const students = require('./data.json');
const app = express();
const { getAllStudents, getStudentById, addNewStudent, updateStudentNameById, deleteStudentById } = require('./controller/controller');
let id = 11;

app.use(express.json());

app.get('/api/students', getAllStudents);

app.get('/api/student/:id', getStudentById);

app.post('/api/students', addNewStudent);

app.put('/api/student/:id', updateStudentNameById);

app.delete('/api/student/:id', deleteStudentById);

const port = 4000;
app.listen(port, () => console.log(`Server listening on port ${port}`));