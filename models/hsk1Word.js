const mongoose = require("mongoose");
const VocabularySchema = require("./VocabularySchema");

module.exports = mongoose.model("Hsk1Word", VocabularySchema);
