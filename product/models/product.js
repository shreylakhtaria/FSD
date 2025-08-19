const mongoose = require('mongoose');

const ProductSchema  = new mongoose.Schema({
    pname: String,
    pdetail: String,
    pprice: Number
})

var productModel = mongoose.model('product', ProductSchema);

module.exports = productModel;