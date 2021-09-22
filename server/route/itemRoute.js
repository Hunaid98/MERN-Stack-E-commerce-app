const express = require("express");
const { protect } = require("../controllers/authControllers");
const router = express.Router();
const {
  getItem,
  postItem,
  getSpecificItem,
  likeItem,
  dislikeItem,
  reviewed,
} = require("../controllers/itemControllers");
const { postOrder } = require("../controllers/orderControllers");
const Product = require("../module/productModule");
// const multer = require("multer");
// const upload = multer({ dest: "public/images" });

router.route("/").get(getItem).post(postItem);
router.get("/:getSpId", getSpecificItem);
// router.post('/:getSpId/review', protect, reviewed)
router.post("/:getSpId/order", protect, postOrder);
// router.post('/:getSpId/like', protect, likeItem)
// router.post('/:getSpId/dislike', protect, dislikeItem)
module.exports = router;
