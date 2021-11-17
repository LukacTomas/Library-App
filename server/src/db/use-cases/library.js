import Library from "../models/librarySchema.js";

export const addLibraryToDb = async (addLibraryObj) => {
  const library = await Library.create(addLibraryObj);
  return library;
};

export const deleteLibraryFromDb = async (deleteLibraryObj) => {
  const { _id } = deleteLibraryObj;
  const deleted = await Library.deleteOne({ _id });
  return deleted;
};

export const getOneLibraryFromDb = async (getLibraryObj) => {
  const library = await Library.findById(getLibraryObj._id);
  return library;
};

export const getAllLibraries = async () => {
  const libraries = await Library.find({}).sort({ _id: -1 });
  return libraries;
};

export const updateLibraryInDb = async (updateLibraryObj) => {
  const { _id, name, address } = updateLibraryObj;
  const updateObj = {
    name,
    address,
  };
  const updated = await Library.updateOne({ _id }, updateObj);
  return updated;
};
