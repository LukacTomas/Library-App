import mongoose from "mongoose";

const librarySchema = mongoose.Schema({
  name: String,
  address: String,
});

const Library = mongoose.model("Library", librarySchema);
export default Library;
