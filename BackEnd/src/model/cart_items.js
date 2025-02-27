const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CartItemsSchema = new Schema({
  priceCurrent: {type: Number},
  quantity: {type: Number, default: 1},
  id_product: {type: Schema.Types.ObjectId, ref: 'Products'},
  id_cart: {type: Schema.Types.ObjectId, ref: 'Carts'},
  totalCart: {type: Number},
  images: {type: String},
  id_size: {type: Schema.Types.ObjectId, ref: 'Sizes', required: true},
});
const CartItems = mongoose.model('CartItems', CartItemsSchema);
module.exports = CartItems;
