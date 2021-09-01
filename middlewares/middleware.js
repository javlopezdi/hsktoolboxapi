const ExpressError = require("../utils/ExpressError");
const User = require("../models/user");
const { newUserSchema, userSchema } = require("../validationSchemas/schemas");

module.exports.validateNewUser = (req, res, next) => {
  const { error } = newUserSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

module.exports.validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};
