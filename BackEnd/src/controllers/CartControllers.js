const modelCart = require('../model/cart');
const modelCartItems = require('../model/cart_items');
const modelProduct = require('../model/products');

const addToCart = async (req, res) => {
  try {
    const {id_user, id_product, id_size, images} = req.body;
    const quantity = 1;

    const urlImages = images || null;

    const product = await modelProduct.findOne({_id: id_product});
    if (!product) {
      return res.status(404).json({
        status: 404,
        message: 'Sản phẩm không tồn tại',
      });
    }

    let checkCart = await modelCart.findOne({id_user});
    if (!checkCart) {
      checkCart = new modelCart({id_user});
      await checkCart.save();
    }

    const existingItem = await modelCartItems.findOne({
      id_cart: checkCart._id,
      id_product,
    });

    if (existingItem) {
      existingItem.quantity += quantity;
      existingItem.priceCurrent = product.priceInitial * existingItem.quantity;
      await existingItem.save();
      return res.status(200).json({
        status: 200,
        message: 'Cập nhật số lượng sản phẩm thành công',
        data: existingItem,
      });
    } else {
      const newItem = new modelCartItems({
        id_cart: checkCart._id,
        id_user,
        id_product,
        id_size,
        quantity,
        images: urlImages,
        priceCurrent: product.priceInitial * quantity,
      });

      const result = await newItem.save();
      return res.status(200).json({
        status: 200,
        message: 'Thêm sản phẩm vào giỏ hàng thành công',
        data: result,
      });
    }
  } catch (error) {
    console.error('Lỗi thêm vào giỏ hàng:', error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

const getListCartByIdUser = async (req, res) => {
  try {
    const {id_user} = req.params;
    const result = await modelCartItems
      .find({id_user})
      .populate('id_product')
      .populate('id_size');
    if (result.length > 0) {
      res.json({
        status: 200,
        message: 'Lấy danh sách thành công',
        data: result,
      });
    } else {
      res.json({
        status: 400,
        message: 'Lấy danh sách thất bại',
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

const removeItemCart = async (req, res) => {
  try {
    const {id_product} = req.params;
    const result = await modelCartItems.findByIdAndDelete({_id: id_product});
    if (!result) {
      res.json({
        status: 404,
        message: 'Xóa thất bại',
        data: '',
      });
    } else {
      res.json({
        status: 200,
        message: 'Xóa thành công',
        data: result,
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
const updateQuantity = async (req, res) => {
  try {
    const {id_cartItems, quantity} = req.body;
    const checkCartItem = await modelCartItems
      .findById(id_cartItems)
      .populate('id_product');
    if (!checkCartItem) {
      res.json({
        status: 400,
        message: 'Không tìm thấy id của giỏ hàng',
      });
    }
    checkCartItem.quantity = quantity;
    checkCartItem.priceCurrent =
      checkCartItem.id_product.priceInitial * quantity;
    await checkCartItem.save();
    res.json({
      status: 200,
      message: 'cập nhật thành công ',
      data: checkCartItem,
    });
  } catch (error) {
    res.json({
      status: 500,
      message: error.message,
    });

    console.log(error);
  }
};
module.exports = {
  addToCart,
  getListCartByIdUser,
  removeItemCart,
  updateQuantity,
};
