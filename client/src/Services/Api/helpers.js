import { useEffect, useState } from "react";
// eslint-disable-next-line
import { BASE_URI, GET_INIT, POST_INIT, DELETE_INIT, PUT_INIT } from "./config";

// used for initiating all fetch calls
const useFetchApi = (url, init = GET_INIT) => {
  const [data, setData] = useState(null);
  const [state, setState] = useState("IDLE");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 3) {
      setState("ERROR");
      return;
    }
    async function fetchAsync() {
      setState("LOADING");
      const response = await fetch(url, init);
      const data = await response.json();
      setCount((count) => count + 1);
      return data;
    }
    console.log(count);
    fetchAsync()
      .then((data) => {
        setData(data);
        setState("LOADED");
      })
      .catch((error) => {
        setState("ERROR");
        setData(error);
        setCount((count) => count + 1);
      });
  }, [init, url, count]);

  return { data, state };
};

/**
 * Hook that fetches all items from db
 * from given path
 *
 * @param {*} path
 *
 * - which path to fetch
 *
 * @returns
 *  Object - data, state\
 *  data - fetch data\
 *  states - IDLE, LOADING, LOADED, ERROR
 *
 */
// TODO could use cache
export const useFetchList = (path) => useFetchApi(BASE_URI + path, GET_INIT);

/**
 * Hook that fetches one item from db
 * from given path
 *
 * @param {*} path, _id
 *
 *  - which path to fetch
 *  - _id of an item
 *
 * @returns
 *  Object - data, state\
 *  data - fetch data\
 *  states - IDLE, LOADING, LOADED, ERROR
 *
 */
export const useFetchItem = (path, _id) => {
  return useFetchApi(BASE_URI + path + _id, GET_INIT);
};

/**
 * Hook that fetches one item from db
 * from given path
 *
 * @param {*} path, _id
 *
 *  - which path to fetch
 *  - _id of an item
 *
 * @returns
 *  Object - data, state\
 *  data - fetch data\
 *  states - IDLE, LOADING, LOADED, ERROR
 *
 */
export const useFetchAddItem = (path, data) => {
  const formData = createFormData(data);
  const init = { ...POST_INIT, body: JSON.stringify(data) };
  return useFetchApi(BASE_URI + path, init);
};

function createFormData(data = {}) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }
  return formData;
}
