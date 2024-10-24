const mongoose = require('mongoose');

const cropImageSchema = new mongoose.Schema({
    Image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Cropimage', cropImageSchema);
