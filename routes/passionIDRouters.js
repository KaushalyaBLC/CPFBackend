
const express = require("express");
const passionIDController = require('../controllers/passionIDController.js')

const router = express.Router();

router.post("/", passionIDController );

module.exports = router;
