import { getOneStudentFromDb } from "../../db/use-cases/Student.js";

export const viewStudent = async (httpRequest) => {
  if (areParamsValid(httpRequest)) {
    const response = await getOneStudentFromDb(httpRequest.params);
    checkForNullResponse(response);
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

function areParamsValid({ params }) {
  const errorMassages = [];
  if (params._id === undefined) {
    errorMassages.push({ _id: "Missing _id" });
  }
  if (params._id && !params._id.match(/^[0-9a-fA-F]{24}$/)) {
    errorMassages.push({ _id: "Not Valid _id" });
  }

  if (errorMassages.length > 0) {
    const error = new Error("Invalid Params");
    error.message = errorMassages;
    throw error;
  }

  return true;
}

function checkForNullResponse(response) {
  if (response === null) {
    const error = new Error("Bad id");
    error.message = "Student with given _id not found";
    throw error;
  }
}
