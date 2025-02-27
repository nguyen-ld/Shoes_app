const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CartSchema = new Schema({
  id_user: {type: Schema.Types.ObjectId, ref: 'Users', require: true},
});
const Cart = mongoose.model('Carts', CartSchema);
module.exports = Cart;
