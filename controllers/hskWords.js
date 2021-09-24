const Hsk1Word = require("../models/hsk1Word");

module.exports.fetchWords = async (req, res) => {
  const hsk1Words = await Hsk1Word.find({});
  res.send(hsk1Words);
};
