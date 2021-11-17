import Student from "../models/StudentSchema.js";
import {
  addOneItem,
  deleteOneItemById,
  getLits,
  getOneItemById,
  updateOneItem,
} from "./index.js";

/**
 * Insert one Student to db
 * @param {addStudentObj} addStudentObj
 * - object of values to save in db
 * - must include _id
 * @returns
 */
export const addStudentToDb = (addStudentObj) =>
  addOneItem(Student, addStudentObj);

/**
 * Delete One Student From DB By _id
 * @param {deleteStudentFromDb} deleteStudentFromDb
 * - object of values
 * - must include _id
 * @returns
 */
export const deleteStudentFromDb = ({ _id }) => deleteOneItemById(Student, _id);

/**
 * Get One Student From DB By _id
 * @param {getOneStudentFromDb} getOneStudentFromDb
 * - object of values
 * - must include _id
 * @returns
 */
export const getOneStudentFromDb = ({ _id }) => getOneItemById(Student, _id);

/**
 * List All Available Students
 * @param {}
 *
 * @returns
 */
export const getAllStudents = () => getLits(Student);



// TODO problably need to push somewhere, depending on schema
/**
 * 
 * Model.update(
    { _id: Model._id }, 
    { $push: { Array: element } },
    done
  );
 */
export const updateStudentInDb = (updateStudentObj) =>
  updateOneItem(Student, updateStudentObj);
