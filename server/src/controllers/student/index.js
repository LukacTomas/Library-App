import { createStudent } from "./createStudent.js";
import { listStudents } from "./listStudents.js";
import { viewStudent } from "./viewStudent.js";
import { flushStudent } from "./flushStudent.js";
import { upgradeStudent } from "./upgradeStudent.js";

import { requestCall } from "../../express-callback/requestCall.js";

export const addStudent = requestCall(createStudent);
export const getStudents = requestCall(listStudents);
export const getStudent = requestCall(viewStudent);
export const deleteStudent = requestCall(flushStudent);
export const updateStudent = requestCall(upgradeStudent);
