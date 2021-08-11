var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 40,
    trim: true,
  },
  mobile: {
    type: Number,
    maxlength: 14,
    trim: true,
    unique: true,
  },
  balance: {
    type: Number,
    maxlength: 80,
    trim: true,
    default: 0,
  },
  dob: {
    type: Date,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
    maxlength: 50,
  },
  UPI: {
    type: String,
    trim: true,
    maxlength: 50,
  },
  investment: {
    type: Number,
    maxlength: 80,
    trim: true,
    default: 0,
  },
});

module.exports = mongoose.model("User", UserSchema);