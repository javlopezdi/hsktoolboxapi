const mongoose = require("mongoose");
const Hsk1Word = require("../models/hsk1Word");
const vocabulary = require("./vocabulary");

mongoose.connect("mongodb://localhost:27017/hsktoolbox", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database connected!");
});

const seedDB = async () => {
  await Hsk1Word.deleteMany({});
  for (let i = 0; i < vocabulary.length; i++) {
    const hsk1Word = new Hsk1Word({
      hanzi: vocabulary[i].hanzi,
      pinyin: vocabulary[i].pinyin,
      translations: vocabulary[i].pinyin,
      category: vocabulary[i].category,
    });
    await hsk1Word.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
