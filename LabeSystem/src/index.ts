import {app} from "./app"
import { addStudentClass } from "./endpoints/addStudentsClass";
import { addTeacherClass } from "./endpoints/addTeacherClass";
import { createClass } from "./endpoints/createClass";
import { createStudent } from "./endpoints/createStudent";
import { createTeacher } from "./endpoints/createTeacher";
import { getStudentAgeById } from "./endpoints/getStudentAgeById";
import  getTeacher from "./endpoints/getTeacher";

app.get("/student/:id", getStudentAgeById)
app.get("/getTeacher", getTeacher)
app.post("/class", createClass)
app.post("/teacher",createTeacher)
app.post("/student",createStudent)
app.patch("/student/:id",addStudentClass)
app.patch("/teacher/:id", addTeacherClass)


