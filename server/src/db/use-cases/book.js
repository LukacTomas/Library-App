import Book from "../models/bookSchema.js";
import {
  addOneItem,
  deleteOneItemById,
  getLits,
  getOneItemById,
  updateOneItem,
} from "./index.js";

/**
 * Insert one Book to db
 * @param {addBookObj} addBookObj
 * - object of values to save in db
 * - must include _id
 * @returns
 */
export const addBookToDb = (addBookObj) => addOneItem(Book, addBookObj);

/**
 * Delete One Book From DB By _id
 * @param {deleteBookFromDb} deleteBookFromDb
 * - object of values
 * - must include _id
 * @returns
 */
export const deleteBookFromDb = ({ _id }) => deleteOneItemById(Book, _id);

/**
 * Get One Book From DB By _id
 * @param {getOneBookFromDb} getOneBookFromDb
 * - object of values
 * - must include _id
 * @returns
 */
export const getOneBookFromDb = ({ _id }) => getOneItemById(Book, _id);

/**
 * List All Available Books
 * @param {}
 *
 * @returns
 */
export const getAllBooks = () => getLits(Book);

// TODO probably need to push something, depending on schema
/**
 * 
 * Model.update(
    { _id: Model._id }, 
    { $push: { Array: element } },
    done
  );
 */
export const updateBookInDb = (updateBookObj) =>
  updateOneItem(Book, updateBookObj);
