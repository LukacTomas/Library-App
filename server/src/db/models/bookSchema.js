import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  name: String,
  quantity: Number,
  library: [mongoose.Schema.Types.ObjectId],
  borrowedBy: [
    {
      student: mongoose.Schema.Types.ObjectId,
      borrowedOn: Date,
      expectedReturn: Date,
    },
  ],
});

const Book = mongoose.model("Book", bookSchema);
export default Book;
