export const createBook = async (httpRequest) => {
  if (areParamsValid(httpRequest)) {
    const response = await addBookToDb(httpRequest.body);
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
