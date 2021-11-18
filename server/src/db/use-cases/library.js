/**
 * Bussiness logic for Library
 */
import Library from "../models/librarySchema.js";
import {
  addOneItem,
  deleteOneItemById,
  getLits,
  getOneItemById,
  updateOneItem,
} from "./index.js";

/**
 * Insert one library to db
 * @param {addLibraryObj} addLibraryObj
 * - object of values to save in db
 * - must include _id
 * @returns
 */
export const addLibraryToDb = (addLibraryObj) =>
  addOneItem(Library, addLibraryObj);

/**
 * Delete One Library From DB By _id
 * @param {deleteLibraryFromDb} deleteLibraryFromDb
 * - object of values
 * - must include _id
 * @returns
 */
// TODO remove also all relationships to student and books
export const deleteLibraryFromDb = ({ _id }) => deleteOneItemById(Library, _id);

/**
 * Get One Library From DB By _id
 * @param {getOneLibraryFromDb} getOneLibraryFromDb
 * - object of values
 * - must include _id
 * @returns
 */
export const getOneLibraryFromDb = ({ _id }) => getOneItemById(Library, _id);

/**
 * List All Available Libraries
 * @param {}
 *
 * @returns
 */
export const getAllLibraries = () => getLits(Library);

export const updateLibraryInDb = (updateLibraryObj) =>
  updateOneItem(Library, updateLibraryObj);
