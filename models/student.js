import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
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
    grade: String,
    nameOfMother: String,
    phoneNumberOfMother: String,
    nameOfFather: String,
    phoneNumberOfFather: String,
  },
  results: {
    Maths: {
      type: Number,
      default: 0,
    },
    English: {
      type: Number,
      default: 0,
    },
    Science: {
      type: Number,
      default: 0,
    },
    History: {
      type: Number,
      default: 0,
    },
    OWOP: {
      type: Number,
      default: 0,
    },
    ICT: {
      type: Number,
      default: 0,
    },
    RME: {
      type: Number,
      default: 0,
    },
    Twi: {
      type: Number,
      default: 0,
    },
    French: {
      type: Number,
      default: 0,
    },
  },
  fees: {
    amount: {
      type: Number,
      default: 500,
    },
    paid:{
      type:Number,
      default:0
    }
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

const StudentInfo = mongoose.model("StudentInfo", studentSchema);

export default StudentInfo;
