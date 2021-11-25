const mongoose = require("mongoose");


const loginSchema = new mongoose.Schema(
  {
    name:String,
    password:Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("login", loginSchema);
