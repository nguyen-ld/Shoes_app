const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
  name: {type: String, require: true},
  images: {type: String, require: true},
});
const Categories = mongoose.model('Categories', categoriesSchema);
module.exports = Categories;
