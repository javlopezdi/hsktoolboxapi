const Hsk1Word = require("../models/hsk1Word");

module.exports.fetchWords = async (req, res) => {
  const hsk1Words = await Hsk1Word.find({});
  console.log("Hsk1Words fetched!");
  res.send(hsk1Words);
};
