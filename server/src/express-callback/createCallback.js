export const createCallback = async (controller) => async (httpRequest) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    let response = "Unknow Error";
    response = await controller(httpRequest);

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
