const mongoose = require("mongoose");
const product = require("../controllers/productControllers");


// const storage = multer.diskStorage({
//   destination: (req,file,cb)=>{

//   }
// })
const itemSchema = new mongoose.Schema(
  {
    itemName: String,
    price: Number,
    catagoryName: String,
    // reviewsBy: [mongoose.Schema.ObjectId],
    // reviews: [
    //   {
    //     type: String,
    //   },
    // ],
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
      required: true,
    },
    description: String,
  },
  {
    timestamps: true,
  }
);
itemSchema.pre(/^find/, function (next) {
  this.populate({
    path: "productId",
    select: "name catagory",
  });
  next();
});
const item = new mongoose.model("Item", itemSchema);
module.exports = item;
