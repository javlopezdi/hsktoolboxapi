const express = require("express");
const router = express.Router();
const {
  validateNewUser,
  validateUser,
  validateSelectedHsk,
} = require("../middlewares/middleware");
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
  "/signinwithtoken",
  passport.authenticate("jwt", { session: false }),
  users.signInWithToken
);

router.get(
  "/learnedwords/1",
  passport.authenticate("jwt", { session: false }),
  catchAsync(users.fetchLearnedWords)
);

router.post(
  "/learnedwords/1",
  passport.authenticate("jwt", { session: false }),
  catchAsync(users.addLearnedWords)
);

router.post(
  "/selectedhsk",
  validateSelectedHsk,
  passport.authenticate("jwt", { session: false }),
  catchAsync(users.setSelectedHsk)
);

router.get(
  "/selectedHsk",
  passport.authenticate("jwt", { session: false }),
  users.fetchSelectedHsk
);

module.exports = router;
