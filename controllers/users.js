const User = require("../models/user");
const jwt = require("jsonwebtoken");

module.exports.signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const user = new User({ firstName, lastName, email });
  await user.setPassword(password);
  await user.save();
  req.login(user, (err) => {
    if (err) return next(err);
    const body = { _id: user._id };
    const token = jwt.sign({ user: body }, "secret");
    return res.json({ token, userId: user._id, firstName: user.firstName });
  });
};

module.exports.signin = (req, res) => {
  const body = { _id: req.user._id };
  const token = jwt.sign({ user: body }, "secret");
  return res.json({
    token,
    userId: req.user._id,
    firstName: req.user.firstName,
    selectedHsk: req.user.selectedHsk,
  });
};

module.exports.signInWithToken = (req, res) => {
  const body = { _id: req.user._id };
  const token = jwt.sign({ user: body }, "secret");
  return res.json({
    token,
    userId: req.user._id,
    firstName: req.user.firstName,
    selectedHsk: req.user.selectedHsk,
  });
};

module.exports.fetchLearnedWords = async (req, res) => {
  res.send(req.user.learnedHsk1Words);
};

module.exports.addLearnedWords = async (req, res) => {
  const user = await User.findById(req.user._id);
  req.body.learnedWords.forEach((learnedWord) => {
    if (!user.learnedHsk1Words.includes(learnedWord)) {
      user.learnedHsk1Words.push(learnedWord);
    }
  });
  await user.save();
  res.json({
    learnedWords: user.learnedHsk1Words,
  });
};

module.exports.setSelectedHsk = async (req, res) => {
  const user = await User.findById(req.user._id);
  user.selectedHsk = req.body.selectedHsk;
  await user.save();
  res.json({ selectedHsk: user.selectedHsk });
};

module.exports.fetchSelectedHsk = async (req, res) => {
  res.json({ selectedHsk: req.user.selectedHsk });
};
