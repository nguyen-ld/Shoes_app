const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SizeProductSchema = new Schema({
  stock: {type: Number, require: true},
  id_size: {type: Schema.Types.ObjectId, require: true, ref: 'Sizes'},
  id_product: {type: Schema.Types.ObjectId, require: true, ref: 'Products'},
});
const SizeProduct = mongoose.model('SizeProducts', SizeProductSchema);
module.exports = SizeProduct;
