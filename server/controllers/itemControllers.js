const item = require("../module/itemModule");
const Product = require("../module/productModule");
const mongoose = require("mongoose");

exports.getItem = async (req, res) => {
  try {
    const getedItem = await item.find().sort('-createdAt');
    console.log(getedItem);
    res.status(200).json({
      status: "geted Item",
      getedItem,
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
    });
  }
};
exports.postItem = (req, res) => {
  try {
    var { catagoryName, itemName } = req.body;
    console.log(catagoryName + itemName);

    Product.findOne({ catagory: catagoryName } && {name: itemName}).then((result) => {
      // JSON.stringify(result);
      var findedProduct = JSON.stringify(result);
      var{_id} = JSON.parse(findedProduct)
      // console.log(_id)
      // console.log(req.body)
      req.body.productId = _id;
        item.create(req.body).then((postedItem) => {
        //   console.log(req.body.productId);
          res.status(200).json({
            status: "success",
            data: {
              postedItem,
            },
          });
        });
  // else {
  //       console.log("there is no product for this item");
  //     }
    });
  } 
  catch (error) {
    res.status(404).json({
      status: "there is no product for this item",
    });
  }
};
exports.getSpecificItem = (req, res) => {
  try {
    item.findById(req.params.getSpId).then((gotSpItem) => {
      console.log(gotSpItem);
      var { _id } = gotSpItem;
      console.log(_id.toString());
      req.params = _id.toString();
      res.status(200).json({
        status: "got Specific Item",
        data: {
          gotSpItem,
        },
      });
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
    });
  }
};
// exports.likeItem = async (req, res) => {
//   try {
//     var { getSpId } = req.params;
//     var { _id: userId } = req.user;
//     userId = userId.toString()
//     var likedItem = await item.findOneAndUpdate({
//       _id: getSpId,
//       likes: {$ne: userId}
//     },{
//       $push: {likes: userId},
//       $inc: {likesCount: 1}
//     },{
//       new: true
//     })
//     // console.log(likedItem)
//     // console.log(getSpId)
//     // console.log(userId)
//     res.status(200).json({
//       status: "liked Item",
//       data:{
//         likedItem
//       },
//     });
//   } catch (error) {
//     res.status(404).json({
//       status: "error liked",
//     });
//   }
// };
// exports.dislikeItem = async (req, res) => {
//   try {
//     var { getSpId } = req.params;
//     var { _id: userId } = req.user;
//     userId = userId.toString()
//     var dislikedItem = await item.findOneAndUpdate({
//       _id: getSpId,
//       dislikes: {$ne: userId}
//     },{
//       $push: {dislikes: userId},
//       $inc: {dislikesCount: 1}
//     },{
//       new: true
//     })
//     // console.log(likedItem)
//     // console.log(getSpId)
//     // console.log(userId)
//     res.status(200).json({
//       status: "disliked Item",
//       data:{
//         dislikedItem
//       },
//     });
//   } catch (error) {
//     res.status(404).json({
//       status: "error liked",
//     });
//   }
// };
// exports.reviewed = async (req, res) => {
//   try {
//     var { getSpId } = req.params;
//     var { _id } = req.user;
//     var { reviews } = req.body;
//     var userId = _id;
//     var reviewdItem = await item.findByIdAndUpdate(
//       getSpId,
//       {
//         $push: { reviewsBy: userId },
//         $push: { reviews: reviews },
//       },
//       {
//         new: true,
//       }
//     );
//     res.status(200).json({
//       status: "reviewed",
//       reviewdItem,
//     });
//   } catch (error) {
//     res.status(404).json({
//       status: "error review",
//     });
//   }
// };
exports.postOrder = (req,res) => {
  try {
    var itemId = req.params.getSpId
    var userId = req.user._id.toString()
    console.log(req.body)
    res.status(200).json({
      status: "order posted"
    })
  } catch (error) {
    res.status(404).json({
      status: "error review",
    });
  }
}