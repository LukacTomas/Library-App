import { addLibrary } from "./addLibrary.js";
import { deleteLibrary } from "./deleteLibrary.js";
import { getLibrary } from "./getLibrary.js";
import { getLibraries as getAll } from "./getLibraries.js";
import { updateLibrary } from "./updateLibrary.js";
import { getLibrariesNew } from "./getLibraries.js";
import { createCallback } from "../../express-callback/createCallback.js";

const getLibraries = async (httpRequest) => {
  const callback = await createCallback(getLibrariesNew);
  return await callback();
};

export { addLibrary, deleteLibrary, getLibrary, getLibraries, updateLibrary };
