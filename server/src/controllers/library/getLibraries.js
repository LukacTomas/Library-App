import { getAllLibraries } from "../../db/use-cases/library.js";

export const getLibraries = async (httpRequest) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    // connect to db and return libraries
    const libraries = await getAllLibraries();

    return {
      headers,
      statusCode: 200,
      body: libraries,
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
