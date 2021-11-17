import Library from "../models/librarySchema.js";

export const getAllLibraries = async () => {
  const libraries = await Library.find({}, "name").sort({ _id: -1 });
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
