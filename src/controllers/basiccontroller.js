const basicmodel = require("../models/basichmodels");
const BookModel = require("../models/bookmodel");
const mongoose = require("mongoose");

const createAccount = async function (req, res) {
  const account = req.body;
  let savedaccount = await basicmodel.create(account);
  res.send({ msg: savedaccount});
};

const getBooksData = async function (req, res) {
  const account = req.body;
  let savedaccount = await BookModel.create(account);
  res.send({ msg: savedaccount});
};


module.exports.createAccount = createAccount;
module.exports.getBooksData = getBooksData;
//module.exports.getBook = getBook;