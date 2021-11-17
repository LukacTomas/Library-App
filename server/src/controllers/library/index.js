import { createLibrary } from "./createLibrary.js";
import { flushLibrary } from "./flushLibrary.js";
import { listLibraries } from "./listLibraries.js";
import { upgradeLibrary } from "./upgradeLibrary.js";
import { viewLibrary } from "./viewLibrary.js";

import { requestCall } from "../../express-callback/requestCall.js";

const addLibrary = requestCall(createLibrary);
const deleteLibrary = requestCall(flushLibrary);
const getLibrary = requestCall(viewLibrary);
const getLibraries = requestCall(listLibraries);
const updateLibrary = requestCall(upgradeLibrary);

export { addLibrary, deleteLibrary, getLibrary, getLibraries, updateLibrary };
