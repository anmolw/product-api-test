const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

// productSchema.virtual('id').get(function () {
//     return this._id.toHexString();
// });

// productSchema.set('toJSON', {
//     virtuals: true
// });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;