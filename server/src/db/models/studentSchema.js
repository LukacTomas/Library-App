import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: String,
  library: [mongoose.Schema.Types.ObjectId], // student can be part of multiple libraries
  history: [
    {
      borrowedOn: Date,
      returnedOn: Date,
      book: mongoose.Schema.Types.ObjectId,
      library: mongoose.Schema.Types.ObjectId, // if part of multiple librarties, I want to know from what library you borrowed the book
    },
  ],
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
