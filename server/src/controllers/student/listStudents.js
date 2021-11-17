import { getAllStudents } from "../../db/use-cases/student.js";

export const listStudents = async (httpRequest) => {
  const list = await getAllStudents();
  return list;
};
