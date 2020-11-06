import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { createMission } from "./endpoints/createMission";
import { createStudent } from "./endpoints/createStudent";
import { createTeacher } from "./endpoints/createTeacher";
import { searchAgeById } from "./endpoints/searchAgeById";
import { removeStudent } from './endpoints/removeStudent';
import { removeStudentMission } from './endpoints/removeStudentMission';
import { removeTeacherMission } from './endpoints/removeTeacherMission';
import { allMissionStudents } from "./endpoints/allMissionStudents";
import { allMissionTeachers } from "./endpoints/allMissionTeachers";
import { studentsSameHobbies } from "./endpoints/studentsSameHobbies";
import { changeStudentMission } from "./endpoints/changeStudentMission";

dotenv.config();

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})

const app: Express = express();
app.use(express.json());
app.use(cors())

app.post("/create/student", createStudent);

app.post("/create/teacher", createTeacher);

app.post("/create/mission", createMission);

app.get("/mission/:id", allMissionStudents);

app.get("mission/:id", allMissionTeachers);

app.get("/hobby/:id", studentsSameHobbies);

app.get("/student/:id", searchAgeById);

app.delete("/remove/student/:id", removeStudent);

app.put("/remove/mission/student/:id", removeStudentMission);

app.put("/remove/mission/teacher/:id", removeTeacherMission);

app.put("/changemission/student/:id", changeStudentMission);

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
