const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VocabularySchema = new Schema({
  hanzi: String,
  pinyin: String,
  translations: [String],
  category: String,
});

module.exports = VocabularySchema;
