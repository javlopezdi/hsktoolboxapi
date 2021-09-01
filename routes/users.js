const express = require("express");
const router = express.Router();
const { validateNewUser, validateUser } = require("../middlewares/middleware");
const passport = require("passport");
const catchAsync = require("../utils/catchAsync");
const users = require("../controllers/users");

router.post("/signup", validateNewUser, catchAsync(users.signup));

router.post(
  "/signin",
  validateUser,
  passport.authenticate("local"),
  users.signin
);

router.get(
  "/learnedWords/1",
  passport.authenticate("jwt", { session: false }),
  catchAsync(users.fetchLearnedWords)
);

router.post(
  "/learnedWords/1",
  passport.authenticate("jwt", { session: false }),
  catchAsync(users.addLearnedWords)
);

module.exports = router;
