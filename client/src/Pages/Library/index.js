import React from "react";
import { LIBRARY, useFetchList } from "../../Services/Api";

import { Library } from "./Library";

export const LibraryPage = () => {
  const { data, state } = useFetchList(LIBRARY);

  if (state === "LOADING") return <>LOADGING</>;
  if (state === "ERROR") return <>ERROR LOADING DATA</>;
  if (state === "LOADED") return <Library data={data} />;
  if (state === "IDLE") return <>IDLE</>;
  return <></>;
};
