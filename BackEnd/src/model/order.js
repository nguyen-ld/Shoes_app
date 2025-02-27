const moongose = require('mongoose');
const Schema = moongose.Schema;
const OrderSchema = new Schema({
  totalOrder: {type: Number},
  date: {type: Date, required: true},
  status: {type: String, default: 'Đang xử lý'},
  totalQuantity: {type: Number},
  id_user: {type: Schema.Types.ObjectId, ref: 'Users'},
});
const Orders = moongose.model('Orders', OrderSchema);
module.exports = Orders;
