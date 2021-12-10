import {app} from "./app"
import { addStudentIntoClass } from "./endpoints/addStudentsClass";
import { addTeacherIntoClass } from "./endpoints/addTeacherClass";
import { createClass } from "./endpoints/createClass";
import { createStudent } from "./endpoints/createStudent";
import { createTeacher } from "./endpoints/createTeacher";
import { getStudentAgeById } from "./endpoints/getStudentAgeById";

//endpoints
app.post("/estudante",createStudent)
app.get("/estudante/:id", getStudentAgeById)
app.patch("/estudante/:id",addStudentIntoClass)
app.patch("/professor/:id", addTeacherIntoClass)
app.post("/professor",createTeacher)
app.post("/turma", createClass)
