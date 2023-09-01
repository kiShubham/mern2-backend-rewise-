const mongoose = require("mongoose");
const validator = require("validator");

const isValidImgUrl = (value) => validator.isURL(value);
const isValidEmail = (value) => validator.isEmail(value);

const authorSchema = new mongoose.Schema(
  {
    fullName: { type: String, maxLength: 25 },
    twitterHandle: { type: String },
    email: {
      type: String,
      required: true,
      maxLength: 25,
      validate: isValidEmail, // dont call like isValidEmail() ,
    },
    image: {
      type: String,
      validate: isValidImgUrl,
    },
  },
  {
    _id: false,
  }
);

const blogsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    authors: { type: [authorSchema] },
    content: { type: String, default: "" },
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const blogsmodel = mongoose.model("Blogs", blogsSchema);
// here Blogs is the name of Collection ,and if we change to shubham ,new collection will be made
// of name shubham and data will be stored in it

module.exports = blogsmodel;
