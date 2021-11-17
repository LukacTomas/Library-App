import { getAllLibraries } from "../../db/use-cases/library.js";

export const listLibraries = async (httpRequest) => {
  const list = await getAllLibraries();
  return list;
};
