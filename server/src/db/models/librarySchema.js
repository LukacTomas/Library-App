import mongoose from "mongoose";

const librarySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  mobile: String,
});

const Library = mongoose.model("Library", librarySchema);
export default Library;
