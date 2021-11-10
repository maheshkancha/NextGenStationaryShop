const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Products' },
    is_purchase_on_debt: Boolean,
    on_debt_datetime: { type: Date, default: Date.now },
    quantity: Number,
    last_update_date: { type: Date, default: Date.now }
});

module.exports = Orders = new mongoose.model('Order', orderSchema);
