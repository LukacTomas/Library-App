import { getOneLibraryFromDb } from "../../db/use-cases/library.js";

export const getLibrary = async (httpRequest) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    //
    let response = "Unknow Error";

    if (areParamsValid(httpRequest)) {
      response = await getOneLibraryFromDb(httpRequest.params);
      if (response === null) {
        response = {
          message: `Library with id: ${httpRequest.params._id} not found`,
        };
      }
    
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
