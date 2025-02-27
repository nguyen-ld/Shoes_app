const modelCategories = require('../model/categories');
const addCategories = async (req, res) => {
  try {
    const IPAdress = process.env.IP_ADDRESS;
    const {file} = req;
    const urlImages = `http://${IPAdress}:3000/uploads/${file.filename}`;
    const model = new modelCategories(req.body);
    model.images = urlImages;
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
    console.log(error);
    res.json({
      status: 500,
      message: error.message,
    });
  }
};
const getListCategories = async (req, res) => {
  try {
    const result = await modelCategories.find();
    if (result) {
      res.json({
        status: 200,
        message: 'Lấy danh mục thành công',
        data: result,
      });
    } else {
      res.json({
        status: 404,
        message: 'Lấy danh mục thất bại',
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
module.exports = {
  addCategories,
  getListCategories,
};
