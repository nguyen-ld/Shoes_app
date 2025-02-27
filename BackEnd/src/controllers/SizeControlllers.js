const modelSize = require('../model/size');
const addSize = async (req, res) => {
  try {
    const model = new modelSize(req.body);
    const result = await model.save();
    if (result) {
      res.json({
        status: 200,
        message: 'Thêm thành công ',
        data: result,
      });
    } else {
      res.json({
        status: 404,
        message: 'Thêm thất bại ',
        data: '',
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
const getListSizeProduct = async (req, res) => {
  try {
    const result = await modelSize.find();
    if (result) {
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
    console.log(error);
    res.json({
      status: 500,
      message: error.message,
    });
  }
};
module.exports = {
  addSize,
  getListSizeProduct,
};
