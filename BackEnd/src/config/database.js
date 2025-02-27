const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const atlat = process.env.URI_DB;

const connect = async () => {
  try {
    await mongoose.connect(atlat, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connect success');
  } catch (error) {
    console.log('Connect fail');
    console.log(error);
  }
};
module.exports = {connect};
