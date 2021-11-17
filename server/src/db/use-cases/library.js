import Library from "../models/librarySchema.js";

export const getAllLibraries = async () => {
  const libraries = await Library.find({}, "name").sort({ _id: -1 });
  return libraries;
};
