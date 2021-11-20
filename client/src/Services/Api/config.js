export const BASE_URI = "http://127.0.0.1:5000";
export const BOOK = "/book";
export const STUDENT = "/student";
export const LIBRARY = "/library";

const DEFAULT_INIT = {
  method: "GET",
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
  },
  redirect: "follow", // manual, *follow, error
  referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
};

export const GET_INIT = { ...DEFAULT_INIT };

export const POST_INIT = {
  ...GET_INIT,
  method: "POST",
};

export const DELETE_INIT = {
  ...GET_INIT,
  method: "DELETE",
};

export const PUT_INIT = {
  ...GET_INIT,
  method: "PUT",
};

export const createURL = (param) => {
  if (Array.isArray(param)) {
    return BASE_URI + "/" + param.join("/") + "/";
  }
  return BASE_URI + "/" + param + "/";
};
