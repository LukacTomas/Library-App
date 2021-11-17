import { deleteStudentFromDb } from "../../db/use-cases/student.js";

export const flushStudent = async (httpRequest) => {
  if (areParamsValid(httpRequest)) {
    const response = await deleteStudentFromDb(httpRequest.body);
    checkForDeleteCount(response);
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

function areParamsValid({ body }) {
  const errorMassages = [];

  if (body._id === undefined) {
    errorMassages.push({ _id: "Missing _id" });
  }
  if (body._id && !body._id.match(/^[0-9a-fA-F]{24}$/)) {
    errorMassages.push({ _id: "Not Valid _id" });
  }

  if (errorMassages.length > 0) {
    const error = new Error("Invalid Params");
    error.message = errorMassages;
    throw error;
  }

  return true;
}

function checkForDeleteCount(response) {
  if (response.deletedCount === 0) {
    const error = new Error("Nothing deleted");
    error.message = "Nothing was deleted, bad id?";
    throw error;
  }
}
