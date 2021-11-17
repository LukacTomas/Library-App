import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  library: [mongoose.Schema.Types.ObjectId], // student can be part of multiple libraries
  history: [
    {
      borrowedOn: Date,
      returnedOn: Date,
      book: mongoose.Schema.Types.ObjectId,
    },
  ],
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
