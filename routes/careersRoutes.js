const express = require("express");
const careersController = require("../controllers/careersController");
const clusterController = require("../controllers/clusterController");
const careerSearchConroller = require("../controllers/careerSearchController")

const router = express.Router();

router.get("/:industry", careersController);
router.get("/:industry/:cluster", clusterController);
router.get("/search/data/:career",careerSearchConroller)

module.exports = router;
