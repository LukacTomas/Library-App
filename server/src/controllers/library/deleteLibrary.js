import { deleteLibraryFromDb } from "../../db/use-cases/library.js";

export const deleteLibrary = async (httpRequest) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    //
    let response = "Unknow Error";
    if (areParamsValid(httpRequest)) {
      response = await deleteLibraryFromDb(httpRequest.body);
      checkForDeleteCount(response);
    }
    return {
      headers,
      statusCode: response === "Unknow Error" ? 404 : 200,
      body: response,
    };
  } catch (error) {
    return {
      headers,
      statusCode: 400,
      body: {
        error: error.message,
      },
    };
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
