/**
 * Bussiness logic for Student
 */
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
 * - must include _id - student id
 * - must incluide library_id - where to remove student from
 * @returns
 */
// TODO check if student has books borrowed
export const deleteStudentFromDb = async ({ _id, library_id }) => {
  // 1. getStudentFromDB
  const student = await getOneItemById(Student, _id);
  // 2. if he has books in current library
  const notReturnedBooks = await checkForReturnedBooks(student, library_id);
  if (notReturnedBooks.length > 0) {
    return notReturnedBooks;
  }
  // 3. if he is in multiple libraries (id of library should be provided as param)
  //       pull him from libraries
  if (student.library.length > 1) {
    const pullObj = createPullStudentFromLibrary(_id, library_id);
    const pulled = await updateOneItem(Student, pullObj);
    return pulled;
  }

  // 4. if he is in one library, delete student completely
  return deleteOneItemById(Student, _id);
};

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

export const updateStudentInDb = (updateStudentObj) => {
  const updateObj = createUpdateStudentObj(updateStudentObj);
  return updateOneItem(Student, updateObj);
};

// TODO upratať, pre nedostatok času pozastavene
function createUpdateStudentObj(updateStudentObj) {
  const updateObj = { $addToSet: {} };
  if (updateStudentObj._id) {
    updateObj["_id"] = updateStudentObj._id;
  }
  if (updateStudentObj.name) {
    updateObj["name"] = updateStudentObj.name;
  }
  if (updateStudentObj.email) {
    updateObj["email"] = updateStudentObj.email;
  }
  if (updateStudentObj.mobile) {
    updateObj["mobile"] = updateStudentObj.mobile;
  }
  if (updateStudentObj.library) {
    updateObj["$addToSet"]["library"] = updateStudentObj["library"];
  }
  if (updateStudentObj.history) {
    const history = {
      borrowedOn: updateStudentObj.history.borrowedOn,
      returnedOn: updateStudentObj.history.returnedOn,
      book: updateStudentObj.history.book,
      library: updateStudentObj.history.library,
      _id: updateStudentObj.history._id,
    };

    updateObj["$addToSet"]["history"] = history;
  }

  return updateObj;
}

async function checkForReturnedBooks(studentObj, fromLibrary) {
  const student = await studentObj;
  const { history } = student;
  const allNotReturnedBooks = history.filter(({ returnedOn }) => !returnedOn);
  const notReturnedBooks = allNotReturnedBooks.filter(
    ({ library }) => String(library) === fromLibrary
  );
  return notReturnedBooks;
}

function createPullStudentFromLibrary(_id, library) {
  const pullObj = { $pull: {} };
  pullObj["_id"] = _id;
  pullObj["$pull"]["library"] = library;
  return pullObj;
}
