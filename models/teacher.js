import mongoose from "mongoose";

const teacherSchema = mongoose.Schema({
  profile: {
    firstName: String,
    lastName: String,
    description: String,
    imageURL: String,
    dateOfBirth: Date,
    gender: String,
    email: String,
    phoneNumber: String,
    address: String,
    subjects: [String],
  },
  salary: {
    amount: {
      type: Number,
      default: 1000,
    },
    paid: {
      type: Number,
      default: 0,
    },
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

const TeacherInfo = mongoose.model("TeacherInfo", teacherSchema);

export default TeacherInfo;
