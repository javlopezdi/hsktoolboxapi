const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  selectedHsk: {
    type: Number,
  },
  learnedHsk1Words: [
    {
      type: Schema.Types.ObjectId,
      ref: "Hsk1Word",
    },
  ],
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

module.exports = mongoose.model("User", UserSchema);
