const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_name: String,
    quantity: Number,
    price: Number,
    mrp: Number,
    category: String,
    last_update_date: { type: Date, default: Date.now }
});

module.exports = Products = new mongoose.model('Product', productSchema);
