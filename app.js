if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const User = require("./models/user");
const passport = require("passport");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const userRoutes = require("./routes/users");
const hskWordRoutes = require("./routes/hskWords");

// Dotenv variables
const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/hsktoolbox";
const jwtSecret = process.env.JWT_SECRET || "secret";
const port = process.env.PORT || 3001;

// Various settings
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Passport settings
app.use(passport.initialize());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const opts = {
  jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret,
};

passport.use(
  new JWTStrategy(opts, (jwt_payload, done) => {
    User.findOne({ _id: jwt_payload.user._id }, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false, {
          message: "Token not matched",
        });
      }
    });
  })
);

// Mongoose connection
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database connected!");
});

// Router
app.use("/api/hskwords", hskWordRoutes);
app.use("/api", userRoutes);

// Front end config

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  return res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Something went wrong";
  console.log(err.message);
  res.status(statusCode).send({ message: err.message });
});

// Listen on port
app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
