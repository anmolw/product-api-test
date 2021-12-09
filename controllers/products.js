const Product = require('../models/product');

module.exports.create = async (req, res) => {
    try {
        const newProduct = await Product.create({
            name: req.body.name,
            quantity: req.body.quantity
        });
        res.status(200).json({
            product: newProduct
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occured"
        });
    }
}

module.exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find({}).select("name quantity id");
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


module.exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
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
        const product = await Product.findOne({ id: req.params.id }).select("name quantity id -id");
        if (product) {
            product.quantity += parseInt(req.params.quantity);
            await product.save();
            res.status(200).json({
                product: product,
                message: "Updated successfully"
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