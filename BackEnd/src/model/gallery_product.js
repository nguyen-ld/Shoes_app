const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GalleryProductSchema = new Schema({
  images: {type: String, require: true},
  id_product: {type: Schema.Types.ObjectId, require: true, ref: 'Products'},
});
const GalleryProduct = mongoose.model('GalleryProducts', GalleryProductSchema);
module.exports = GalleryProduct;
