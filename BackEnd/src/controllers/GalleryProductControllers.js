const modelGalleryProduct = require('../model/gallery_product');
const addGalleryProduct = async (req, res) => {
  try {
    const {file} = req;
    const IPAdress = process.env.IP_ADDRESS;
    const urlImages = `http://${IPAdress}:3000/uploads/${file.filename}`;
    const model = new modelGalleryProduct(req.body);
    model.images = urlImages;
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
const getListGalleryByIdProduct = async (req, res) => {
  try {
    const {id_product} = req.params;
    const result = await modelGalleryProduct
      .find({id_product})
      .populate('id_product');
    if (result) {
      res.json({
        status: 200,
        message: 'Lấy danh sách thành công ',
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
  addGalleryProduct,
  getListGalleryByIdProduct,
};
