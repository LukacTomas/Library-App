import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  name: String,
  author: String,
  year: String,
  library: [
    {
      library: mongoose.Schema.Types.ObjectId,
      quantity: Number,
    },
  ], // it is a array as book can be in multiple libraries
  borrowedBy: [
    // current
    {
      student: mongoose.Schema.Types.ObjectId, // who borrowed it
      library: mongoose.Schema.Types.ObjectId, // from what library
      borrowedOn: Date,
      expectedReturn: Date,
    },
  ],
});

const Book = mongoose.model("Book", bookSchema);
export default Book;
