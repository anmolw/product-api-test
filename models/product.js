const mongoose = require("mongoose");
const autoIncrement = require('@typegoose/auto-increment');

// Product schema
const productSchema = mongoose.Schema({
    _id: {
        // _id's type is set to number, and will be managed by the auto-increment plugin
        type: Number
    },
    quantity: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

// Use a plugin to automatically increment _id for each new product added
productSchema.plugin(autoIncrement.AutoIncrementID, { startAt: 1 });

// Remove unnecessary properties from products when serializing to JSON
productSchema.set("toJSON", {
    transform: (doc, ret, options) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;