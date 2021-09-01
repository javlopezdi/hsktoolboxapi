const User = require("../models/user");
const jwt = require("jsonwebtoken");

module.exports.signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const user = new User({ firstName, lastName, email });
  await user.setPassword(password);
  await user.save();
  req.login(user, (err) => {
    if (err) return next(err);
    const body = { _id: user._id, firstName: user.firstName };
    const token = jwt.sign({ user: body }, "secret");
    return res.json({ token, userId: user._id, firstName: user.firstName });
  });
};

module.exports.signin = (req, res) => {
  const body = { _id: req.user._id, firstName: req.user.firstName };
  const token = jwt.sign({ user: body }, "secret");
  return res.json({
    token,
    userId: req.user._id,
    firstName: req.user.firstName,
  });
};

module.exports.fetchLearnedWords = async (req, res) => {
  if (!req.user) {
    res.status(401).json({ message: "incorrect token" });
  }
  res.json(req.user);
};

module.exports.addLearnedWords = async (req, res) => {
  if (!req.user) {
    req.status(401).json({ message: "incorrect token" });
  }
  const user = await User.findById(req.user._id);
  console.log(user);
  req.body.learnedWords.forEach((learnedWord) => {
    if (!user.learnedHsk1Words.includes(learnedWord)) {
      user.learnedHsk1Words.push(learnedWord);
    }
  });
  await user.save();
  res.json({
    message: "Learned Words, saved",
    learnedWords = user.learnedHsk1Words,
  });
};
