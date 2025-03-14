const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RefreshTokenSchema = new Schema({
    id_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
    },
    refreshToken: {type: String, required: true},
});
module.exports = mongoose.model('RefreshToken', RefreshTokenSchema);
