import { useEffect, useState } from "react";
// eslint-disable-next-line
import { BASE_URI, GET_INIT, POST_INIT, DELETE_INIT, PUT_INIT } from "./config";

// used for initiating all fetch calls
const useFetchApi = (url, init = GET_INIT) => {
  const [data, setData] = useState(null);
  const [state, setState] = useState("IDLE");

  useEffect(() => {
    async function fetchAsync() {
      setState("LOADING");
      const response = await fetch(url, init);
      const data = await response.json();
      return data;
    }
    fetchAsync()
      .then((data) => {
        setData(data);
        setState("LOADED");
      })
      .catch((error) => {
        setState("ERROR");
        setData(error);
      });
  }, [init, url]);

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
