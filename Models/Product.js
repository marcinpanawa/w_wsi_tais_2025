const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    _id: String
})

module.exports = mongoose.model('product', productSchema, 'product') 