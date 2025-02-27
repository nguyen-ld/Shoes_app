const modelOrder = require('../model/order');
const modelOrderItems = require('../model/order_items');
const modelUser = require('../model/user');
const modelProduct = require('../model/products');
const modelCartItem = require('../model/cart_items');
const modelCart = require('../model/cart');
const addOrder = async (req, res) => {
  try {
    const {id_user, items, id_address} = req.body;
    if (items.length === 0) {
      return res.status(400).json({
        status: 400,
        message: 'Dữ liệu không được để trống',
      });
    }
    const checkUser = await modelUser.findOne({_id: id_user});
    if (!checkUser) {
      return res.json({
        status: 404,
        message: 'user không tồn tại ',
      });
    }
    if (!id_address) {
      return res.json({
        status: 400,
        message: 'Vui lòng chọn địa chỉ giao hàng',
      });
    }
    const addressExists = checkUser.address.some(
      address => address._id.toString() === id_address,
    );
    if (!addressExists) {
      return res
        .status(400)
        .json({status: 400, message: 'Địa chỉ không hợp lệ'});
    }

    let totalOrder = 0;
    let totalQuantity = 0;
    const orderItems = [];

    for (const item of items) {
      const {id_product, priceCurrent, quantity} = item;

      const productData = await modelProduct.findById(id_product);
      if (!productData) {
        return res.status(404).json({message: 'Sản phẩm không tồn tại'});
      }

      const totalOrderItem = quantity * productData.priceInitial;
      totalOrder += totalOrderItem;
      totalQuantity += quantity;

      orderItems.push({
        id_product: item.id_product,
        priceCurrent: totalOrderItem,
        quantity: item.quantity,
      });
    }

    const newOrder = new modelOrder({
      totalOrder,
      status: 'Đang xử lý',
      date: new Date(),
      totalQuantity,
      id_address,
      id_user,
    });
    await newOrder.save();

    const savedOrderItems = [];
    for (let orderItem of orderItems) {
      const newOrderItems = new modelOrderItems({
        ...orderItem,
        id_order: newOrder._id,
      });
      const result = await newOrderItems.save();
      savedOrderItems.push(result);
    }

    const orderedProductIds = items.map(item => item.id_product);

    await modelCartItem.deleteMany({
      id_user,
      id_product: {$in: orderedProductIds},
    });

    return res.status(200).json({
      message: 'Đặt hàng thành công',
      order: newOrder,
      orderItems: savedOrderItems,
      address: id_address,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: 500,
      message: error.message,
    });
  }
};
const getListOrder = async (req, res) => {
  try {
    const {id_user, status} = req.params;

    const checkUser = await modelUser.findById(id_user);
    if (!checkUser) {
      return res.json({
        status: 400,
        message: 'User không tồn tại',
      });
    }

    let query = {id_user};
    if (status) {
      query.status = status;
    }
    console.log(query);
    const result = await modelOrder.find(query);

    if (result.length > 0) {
      res.json({
        status: 200,
        message: 'Lấy danh sách thành công',
        data: result,
      });
    } else {
      res.json({
        status: 404,
        message: 'Không có đơn hàng nào phù hợp',
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      status: 500,
      message: error.message,
    });
  }
};

module.exports = {
  addOrder,
  getListOrder,
};
