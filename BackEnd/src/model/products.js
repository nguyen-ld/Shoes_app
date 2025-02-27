const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Products = new Schema({
  name: {type: String, require: true},
  images: {type: String, require: true},
  priceInitial: {type: Number, require: true},
  describe: {type: String, require: true},
  id_categories: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: 'Categories',
  },
});
const modelProduct = mongoose.model('Products', Products);
module.exports = modelProduct;
