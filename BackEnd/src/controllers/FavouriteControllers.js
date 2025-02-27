const modelFavourite = require('../model/favourite');
const addFavourite = async (req, res) => {
  try {
    const {id_product} = req.body;

    const check = await modelFavourite.findOne({id_product});
    if (check) {
      return res.json({
        status: 400,
        message: 'Sản phẩm đã có trong danh sách yêu thích',
      });
      s;
    }

    const model = new modelFavourite({id_product});
    const result = await model.save();
    if (result) {
      res.json({
        status: 200,
        message: 'Thêm thành công',
        data: result,
      });
    } else {
      res.json({
        status: 404,
        message: 'Thêm thất bại',
        data: '',
      });
    }
  } catch (error) {
    console.error(error);
    res.json({
      status: 500,
      message: error.message,
    });
  }
};
const getListFavourite = async (req, res) => {
  try {
    const result = await modelFavourite.find().populate('id_product');
    if (result.length > 0) {
      res.json({
        status: 200,
        message: 'Lấy danh sách thành công',
        data: result,
      });
    } else {
      res.json({
        status: 404,
        message: 'Lấy danh sách thất bại',
        data: [],
      });
    }
  } catch (error) {
    console.error(error);
    res.json({
      status: 500,
      message: error.message,
    });
  }
};
const removeFavourite = async (req, res) => {
  try {
    const {id_product} = req.params;
    const result = await modelFavourite.findOneAndDelete({id_product});
    if (result) {
      res.json({
        status: 200,
        message: 'Xóa thành công ',
        data: result,
      });
    } else {
      res.json({
        status: 404,
        message: 'Xóa thất bại ',
        data: '',
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      status: error.message,
    });
  }
};
module.exports = {
  addFavourite,
  getListFavourite,
  removeFavourite,
};
