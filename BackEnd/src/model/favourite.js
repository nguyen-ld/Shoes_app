const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavouriteSchema = new Schema({
  id_product: {type: Schema.Types.ObjectId, require: true, ref: 'Products'},
});
const Favoutite = mongoose.model('Favoutites', FavouriteSchema);
module.exports = Favoutite;
