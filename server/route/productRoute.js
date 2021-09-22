const express = require("express");
const { protect } = require("../controllers/authControllers");
const { geted, posted } = require("../controllers/productControllers");
const router = express.Router();

router.route("/").get(geted).post(posted);
module.exports = router;
