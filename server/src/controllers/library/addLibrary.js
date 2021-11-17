import { addLibraryToDb } from "../../db/use-cases/library.js";

export const addLibrary = async (httpRequest) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    //
    let response;
    if (areParamsValid(httpRequest)) {
      response = await addLibraryToDb(httpRequest.body);
    }
    return {
      headers,
      statusCode: 200,
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

  if (body.name === undefined) {
    errorMassages.push({ name: "Library name not provided" });
  }
  if (body.name && body.name.length <= 3) {
    errorMassages.push({ name: "Library name is too short" });
  }
  if (body.address === undefined) {
    errorMassages.push({ address: "Library address not provided" });
  }
  if (body.adress && body.address.length <= 3) {
    errorMassages.push({ address: "Library address is too short" });
  }
  if (errorMassages.length > 0) {
    const error = new Error("Invalid Params");
    error.message = errorMassages;
    throw error;
  }

  return true;
}
