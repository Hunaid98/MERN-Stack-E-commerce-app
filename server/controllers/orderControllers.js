// const User = require("../module/authModule")

const Order = require("../module/orderModule");

exports.postOrder = async (req, res) => {
  try {
    var itemId = req.params.getSpId;
    var userId = req.user._id.toString();
    //   console.log(req.body)
    req.body.userId = userId;
    req.body.itemId = itemId;
    const ordered = await Order.create(req.body);
    // console.log(ordered);
    res.status(200).json({
      status: "Order Posted",
      data: {
        ordered,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "error order",
    });
  }
};
