const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SizeSchema = new Schema({
  size_value: {type: Number, require: true},
});
const Size = mongoose.model('Sizes', SizeSchema);
module.exports = Size;
