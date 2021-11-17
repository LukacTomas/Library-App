import { updateLibraryInDb } from "../../db/use-cases/library.js";

export const upgradeLibrary = async (httpRequest) => {
  if (areParamsValid(httpRequest)) {
    const response = await updateLibraryInDb(httpRequest.body);
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
  if (body.name === undefined) {
    errorMassages.push({ name: "Library name not provided" });
  }
  if (body.name && body.name.length <= 3) {
    errorMassages.push({ name: "Library name is too short" });
  }
  if (body.address === undefined) {
    errorMassages.push({ address: "Library address not provided" });
  }
  if (body.address && body.address.length <= 3) {
    errorMassages.push({ address: "Library address is too short" });
  }
  if (errorMassages.length > 0) {
    const error = new Error("Invalid Params");
    error.message = errorMassages;
    throw error;
  }

  return true;
}
