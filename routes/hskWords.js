const express = require("express");
const router = express.Router();
const hskWords = require("../controllers/hskWords");

const catchAsync = require("../utils/catchAsync");

router.get("/1", catchAsync(hskWords.fetchWords));

module.exports = router;
