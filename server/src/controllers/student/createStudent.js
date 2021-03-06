import { addStudentToDb } from "../../db/use-cases/student.js";

export const createStudent = async (httpRequest) => {
  if (areParamsValid(httpRequest)) {
    const response = await addStudentToDb(httpRequest.body);
    return response;
  }
};

/**
 *
 * @param httpReqest
 * @returns true - if params are valid\
 *          throws Error if any one is invalid
 *
 *  Note: Function creates error messages
 *
 */
// TODO Should update validation
function areParamsValid({ body }) {
  const errorMassages = [];

  if (body.name === undefined) {
    errorMassages.push({ name: "Student name not provided" });
  }
  if (body.name !== undefined && body.name.length <= 3) {
    errorMassages.push({ name: "Student name is too short" });
  }
  if (body.email === undefined) {
    errorMassages.push({ email: "Student email not provided" });
  }
  if (body.email !== undefined && !isvalidEmail(body.email)) {
    errorMassages.push({ email: "Email is not correct" });
  }
  if (errorMassages.length > 0) {
    const error = new Error("Invalid Params");
    error.message = errorMassages;
    throw error;
  }

  return true;
}

function isvalidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
