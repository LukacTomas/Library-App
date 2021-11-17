export const getLibraries = async (httpRequest) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    // connect to db and return libraries

    return {
      headers,
      statusCode: 200,
      body: { message: "hi there" },
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
