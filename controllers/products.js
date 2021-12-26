const Product = require('../models/product');

// Route handler for creating a new product
module.exports.create = async (req, res) => {
    try {
        // Prevent negative quantities from being input
        if (req.body.quantity < 0) {
            return res.status(400).json({
                message: "Quantity cannot be negative"
            });
        }
        // Create and save a new product
        const newProduct = await Product.create({
            name: req.body.product.name,
            quantity: req.body.product.quantity
        });
        res.status(201).json({
            product: newProduct
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occured"
        });
    }
}

// Route handler for retrieving the product list
module.exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({
            products: products
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occured"
        });
    }
}

// Route handler used to delete a specific product.
module.exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        // If the product exists in the database, delete it
        if (product) {
            product.remove();
            res.status(200).json({
                message: "Product deleted"
            });
        }
        else {
            res.status(404).json({
                message: "Product not found"
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occured"
        });
    }
}

module.exports.updateQuantity = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            // Parse the given quantity in the URL params as an integer and add it to
            // the product's quantity
            product.quantity += parseInt(req.query.number);

            // Ensure that the new product quantity is not negative
            if (product.quantity >= 0) {
                await product.save();
                res.status(200).json({
                    product: product,
                    message: "Updated successfully"
                });
            }
            else {
                res.status(400).json({
                    message: "Product quantity cannot be negative"
                });
            }

        }
        else {
            res.status(404).json({
                message: "Product not found"
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occured"
        });
    }
}