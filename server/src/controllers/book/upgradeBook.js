import { updateBookInDb } from "../../db/use-cases/Book.js";

export const upgradeBook = async (httpRequest) => {
  if (areParamsValid(httpRequest)) {
    const response = await updateBookInDb(httpRequest.body);
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
// TODO validation should be updated
function areParamsValid({ body }) {
  const errorMassages = [];
  if (body._id === undefined) {
    errorMassages.push({ _id: "Missing _id" });
  }
  if (body._id && !body._id.match(/^[0-9a-fA-F]{24}$/)) {
    errorMassages.push({ _id: "Not Valid _id" });
  }
  if (body.name === undefined) {
    errorMassages.push({ name: "Book name not provided" });
  }
  if (body.name && body.name.length <= 3) {
    errorMassages.push({ name: "Book name is too short" });
  }
  if (body.quantity === undefined) {
    errorMassages.push({ quantity: "Book quantity not provided" });
  }
  if (body.quantity && isNaN(body.quantity)) {
    errorMassages.push({ quantity: "Quantity is not a number" });
  }
  if (errorMassages.length > 0) {
    const error = new Error("Invalid Params");
    error.message = errorMassages;
    throw error;
  }

  return true;
}
