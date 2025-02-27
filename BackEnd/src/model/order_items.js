const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OrderItemsSchema = new Schema({
  id_order: {type: Schema.Types.ObjectId, ref: 'Orders'},
  id_product: {type: Schema.Types.ObjectId, ref: 'Products'},
  priceCurrent: {type: Number},
  quantity: {type: Number, required: true},
});
const OrderItems = mongoose.model('OrderItems', OrderItemsSchema);
module.exports = OrderItems;
