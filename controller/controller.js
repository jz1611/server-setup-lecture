let id = 11;
const students = require('../data.json')

module.exports = {
    getAllStudents: (req, res, next) => {
        res.status(200).send(students);
    },
    getStudentById: (req, res, next) => {
        // as soon as an endpoint is hit in the browser, we are sending an ID parameter
        const { id } = req.params;
    
        // filter the students imported from ./data.json and find the student whose id matches the parameter sent to the server
        const index = students.findIndex((student) => {
            return student.id === parseInt(id)
        })
    
        // verify a correct index has been found, if no student found, findIndex will return -1
        if(index !== -1){
            // if the student is found, send them to the client
            res.status(200).send(students[index]);
        } else {
            // if no student found, send a 404 with message
            res.status(404).send("Student not found. Get the heck outta here!");
        }
    },
    addNewStudent: (req, res, next) => {
        const { first_name, last_name, email, school } = req.body;
        const newStudent = {
            id,
            last_name,
            first_name,
            email,
            school
        };
    
        students.push(newStudent);
        id++;
    
        res.status(200).send(students);
    },
    updateStudentNameById: (req, res, next) => {
        const { id } = req.params;
        const { new_first_name } = req.query;
    
        const index = students.findIndex((student) => {
            return student.id === +id;
        });
    
        if (index !== -1) {
            students[index].first_name = new_first_name || students[index].first_name;
            res.status(200).send(students);
        } else {
            res.status(404).send("student not found");
        }
    },
    deleteStudentById: (req, res, next) => {
        const { id } = req.params;
        const index = students.findIndex((student) => {
            return student.id === +id;
        });
    
        if (index !== -1) {
            students.splice(index, 1);
            res.status(200).send(students);
        } else {
            res.status(404).send("Student not found.");
        }
    }
}