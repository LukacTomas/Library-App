import Library from "../models/librarySchema.js";

export const getAllLibraries = async () => {
  const libraries = await Library.find({}).sort({ _id: -1 });
  return libraries;
};

export const addLibraryToDb = async (addLibraryObj) => {
  const update = { expire: new Date() };
  const options = { upsert: true, new: true, setDefaultsOnInsert: true };
  const library = await Library.findOneAndUpdate(
    addLibraryObj,
    update,
    options
  );
  return library;
};

export const updateLibraryInDb = async (updateLibraryObj) => {
  const { _id, name, address } = updateLibraryObj;
  const updateObj = {
    name,
    address,
  };
  const library = await Library.updateOne({ _id }, updateObj);
  return library;
};
