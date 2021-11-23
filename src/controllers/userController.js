
const userModule = require("../models/userModel");
//const mongoose = require("mongoose");

const userRegistration = async function (req, res) {
  const userBody = req.body;
  let savedUserDetails = await userModule.create(userBody);
  res.send({ msg: savedUserDetails});
};

module.exports.userRegistration = userRegistration;
